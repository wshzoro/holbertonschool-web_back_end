export default function cleanSet(set, startString) {
  const result = [];
  for (const value of set) {
    if (startString === '' || value.startsWith(startString)) {
      result.push(startString === '' ? value : value.slice(startString.length));
    }
  }
  return result.join('-');
}
