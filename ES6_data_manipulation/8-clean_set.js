export default function cleanSet(set, startString) {
  const result = [];
  for (const value of set) {
    if (value.statsWith(startString) && startString !== '') {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
