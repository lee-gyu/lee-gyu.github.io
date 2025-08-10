function s(t) {
  return Object.keys(t);
}
function c(t, e) {
  return e in t;
}
function o(t, e) {
  const r = {};
  for (const n of s(e))
    c(t, n) && (r[n] = t[n]);
  return r;
}
export {
  s as g,
  c as h,
  o as p
};
//# sourceMappingURL=pick-BLZiDVxr.js.map
