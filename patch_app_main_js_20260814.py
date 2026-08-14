import sys

path = "src/app_main.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = """  function setHdrVisible(visible){
    var hdr = document.querySelector('.hdr');
    if(!hdr) return;
    if(visible){
      hdr.classList.remove('hidden');
      var safeTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sat') || '0');
          document.documentElement.style.setProperty('--hdr-h', (hdrH + 10 + safeTop) + 'px');
    } else {
      hdr.classList.add('hidden');
      document.documentElement.style.setProperty('--hdr-h', '10px');
    }
  }

  function onScroll(){
    var w = document.querySelector('.wrap');
    if(!w) return;
    var cur = w.scrollTop;
    if(cur > lastY + 4 && cur > 80){
      setHdrVisible(false);
    } else if(cur < lastY - 4 || cur < 40){
      setHdrVisible(true);
    }
    lastY = cur;
    ticking = false;
  }"""

new = """  function setHdrVisible(visible){
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

count = content.count(old)
if count != 1:
    print(f"ERROR: old_str occurrence count = {count} (expected 1)")
    sys.exit(1)

content = content.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("OK: setHdrVisible/onScroll updated")
