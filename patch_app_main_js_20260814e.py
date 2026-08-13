import sys

path = "src/app_main.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = "  var lastY = 0, ticking = false, hdrH = 0, hdrOffset = 0;"
new = "  var lastY = 0, hdrH = 0, hdrOffset = 0;"

count = content.count(old)
if count != 1:
    print(f"ERROR: old_str occurrence count = {count} (expected 1)")
    sys.exit(1)

content = content.replace(old, new)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("OK: removed unused ticking variable")
