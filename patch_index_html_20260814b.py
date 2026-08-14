import sys

path = "index.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = """.hdr{background:var(--pn);border-bottom:1px solid var(--bd);padding:10px 14px 6px;
  position:fixed;top:0;left:0;right:0;z-index:200;
  transition:transform .3s cubic-bezier(.4,0,.2,1);}"""

new = """.hdr{background:var(--pn);border-bottom:1px solid var(--bd);padding:10px 14px 6px;
  position:fixed;top:0;left:0;right:0;z-index:200;}"""

count = content.count(old)
if count != 1:
    print(f"ERROR: old_str occurrence count = {count} (expected 1)")
    sys.exit(1)

content = content.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("OK: .hdr transition removed")
