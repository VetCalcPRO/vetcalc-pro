import sys

path = "src/app_main.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = """  function onScroll(){
    var w = document.querySelector('.wrap');
    if(!w) return;
    var maxScroll = w.scrollHeight - w.clientHeight;
    var cur = Math.max(0, Math.min(w.scrollTop, maxScroll));
    var delta = cur - lastY;

    if(cur < 40){
      hdrOffset = 0;
    } else {
      hdrOffset = Math.max(-hdrH, Math.min(0, hdrOffset - delta));
    }
    applyHdrOffset();

    lastY = cur;
    ticking = false;
  }

  document.addEventListener('DOMContentLoaded', function(){
    // 少し遅らせてheight確定後に計測
    setTimeout(function(){
      measureHdr();
      window.addEventListener('resize', measureHdr);
      // .hdr自体の実サイズ変化（タブ再描画・モード切替・文言変化・回転）に自動追従
      var hdr = document.querySelector('.hdr');
      if(hdr && window.ResizeObserver){
        new ResizeObserver(function(){ measureHdr(); }).observe(hdr);
      }
    }, 100);
    var w = document.querySelector('.wrap');
    if(w){
      w.addEventListener('scroll', function(){
        if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
      });
    }
  });"""

new = """  function tick(){
    var w = document.querySelector('.wrap');
    if(w){
      var maxScroll = w.scrollHeight - w.clientHeight;
      var cur = Math.max(0, Math.min(w.scrollTop, maxScroll));
      var delta = cur - lastY;

      if(delta !== 0){
        if(cur < 40){
          hdrOffset = 0;
        } else {
          hdrOffset = Math.max(-hdrH, Math.min(0, hdrOffset - delta));
        }
        applyHdrOffset();
        lastY = cur;
      }
    }
    requestAnimationFrame(tick);
  }

  document.addEventListener('DOMContentLoaded', function(){
    // 少し遅らせてheight確定後に計測
    setTimeout(function(){
      measureHdr();
      window.addEventListener('resize', measureHdr);
      // .hdr自体の実サイズ変化（タブ再描画・モード切替・文言変化・回転）に自動追従
      var hdr = document.querySelector('.hdr');
      if(hdr && window.ResizeObserver){
        new ResizeObserver(function(){ measureHdr(); }).observe(hdr);
      }
    }, 100);
    // scrollイベントに頼らず毎フレームscrollTopを直接ポーリング
    // （iOS Safari/Chromeは慣性スクロール中scrollイベントが間引かれるため）
    requestAnimationFrame(tick);
  });"""

count = content.count(old)
if count != 1:
    print(f"ERROR: old_str occurrence count = {count} (expected 1)")
    sys.exit(1)

content = content.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("OK: switched to continuous rAF polling (removes scroll event dependency)")
