echo "오호입력 ㄱ: "
read phrase

if[${#phrase} -gt 0]; then
echo "SYSTEM: $phrase"
else
echo "입력 왜 안함?"
figs