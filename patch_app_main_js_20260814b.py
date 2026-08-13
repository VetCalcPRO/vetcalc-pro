import sys

path = "src/app_main.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = """// ========== AUTO-HIDE HEADER ==========
(function(){
  var lastY = 0, ticking = false, hdrH = 0;

  function measureHdr(){
    var hdr = document.querySelector('.hdr');
    if(hdr){ hdrH = hdr.offsetHeight; }
    var safeTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat') || '0');
        document.documentElement.style.setProperty('--hdr-h', (hdrH + 10 + safeTop) + 'px');
  }

  function setHdrVisible(visible){
    var hdr = document.querySelector('.hdr');
    if(!hdr) return;
    if(visible){
      hdr.classList.remove('hidden');
    } else {
      hdr.classList.add('hidden');
    }
  }

  function onScroll(){
    var w = document.querySelector('.wrap');
    if(!w) return;
    var cur = w.scrollTop;
    if(cur > lastY + 8 && cur > 80){
      setHdrVisible(false);
    } else if(cur < lastY - 8 || cur < 40){
      setHdrVisible(true);
    }
    lastY = cur;
    ticking = false;
  }"""

new = """// ========== AUTO-HIDE HEADER ==========
(function(){
  var lastY = 0, ticking = false, hdrH = 0, hdrOffset = 0;

  function measureHdr(){
    var hdr = document.querySelector('.hdr');
    if(hdr){ hdrH = hdr.offsetHeight; }
    var safeTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat') || '0');
        document.documentElement.style.setProperty('--hdr-h', (hdrH + 10 + safeTop) + 'px');
  }

  function applyHdrOffset(){
    var hdr = document.querySelector('.hdr');
    if(!hdr) return;
    hdr.style.transform = 'translateY(' + hdrOffset + 'px)';
  }

  function onScroll(){
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
  }"""

count = content.count(old)
if count != 1:
    print(f"ERROR: old_str occurrence count = {count} (expected 1)")
    sys.exit(1)

content = content.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("OK: header now follows scroll delta directly")
