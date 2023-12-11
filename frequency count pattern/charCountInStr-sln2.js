//using map

const str = "muthu";
const counts = new Map();

for (const ch of str) {
  const count = counts.get(ch) ?? 0;
  counts.set(ch, count + 1);
}

console.log(counts);
for (const [ch, count] of counts) {
  console.log(`"${ch}" count: ${counts.get(ch)}`);
}
