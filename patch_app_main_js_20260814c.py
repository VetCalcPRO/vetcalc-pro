import sys

path = "src/app_main.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = """  document.addEventListener('DOMContentLoaded', function(){
    // 少し遅らせてheight確定後に計測
    setTimeout(function(){
      measureHdr();
      window.addEventListener('resize', measureHdr);
    }, 100);
    var w = document.querySelector('.wrap');
    if(w){
      w.addEventListener('scroll', function(){
        if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
      });
    }
  });"""

new = """  document.addEventListener('DOMContentLoaded', function(){
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

count = content.count(old)
if count != 1:
    print(f"ERROR: old_str occurrence count = {count} (expected 1)")
    sys.exit(1)

content = content.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("OK: ResizeObserver added for .hdr")
