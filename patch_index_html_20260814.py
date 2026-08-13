import sys

path = "index.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = ".wrap{flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding:var(--hdr-h,0px) 10px 100px;min-width:0;transition:padding-top .3s cubic-bezier(.4,0,.2,1);}"
new = ".wrap{flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding:var(--hdr-h,0px) 10px 100px;min-width:0;}"

count = content.count(old)
if count != 1:
    print(f"ERROR: old_str occurrence count = {count} (expected 1)")
    sys.exit(1)

content = content.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("OK: .wrap transition removed")
