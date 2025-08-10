function u(e, t) {
  if (e === t)
    return !0;
  if (e === null || t === null || typeof e != "object" || typeof t != "object")
    return !1;
  const r = Object.keys(e), s = Object.keys(t);
  if (r.length !== s.length)
    return !1;
  for (const n of r)
    if (!s.includes(n) || !u(e[n], t[n]))
      return !1;
  return !0;
}
const o = /* @__PURE__ */ new WeakMap();
function f(e, t) {
  o.set(e, t);
}
function c(e) {
  return o.get(e);
}
export {
  u as i,
  c as r,
  f as w
};
//# sourceMappingURL=in-memory-clipboard-CBDV7nbf.js.map
