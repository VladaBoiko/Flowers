export default function getKey(value, object) {
  let key = '';
  Object.entries(object).map(el => (el[1] === value ? (key = el[0]) : ''));
  return key;
}
