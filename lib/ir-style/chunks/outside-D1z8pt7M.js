function c(t, r, ...n) {
  const e = l(r, ...n);
  return t.appendChild(e), e;
}
function l(t, ...r) {
  const n = document.createElement(t);
  return r.forEach((e) => n.classList.add(e)), n;
}
function u(t, r, n) {
  let e = n;
  for (; e; ) {
    if (e.matches(t))
      return e;
    if (e.matches(r))
      break;
    e = e.parentElement;
  }
  return null;
}
function m(t) {
  t.dispatchEvent(new CustomEvent(o, { bubbles: !0 }));
}
const o = "ir::click-outside-custom";
function w({ eventElements: t, getEventElements: r, clickOutsideFunc: n }) {
  const e = (a) => {
    const d = [...t, ...r ? r() : []];
    let s = a.target;
    for (; s !== null; ) {
      if (d.indexOf(s) !== -1)
        return;
      s = s.parentElement;
    }
    n && n(), i.destroy();
  }, i = {
    create: () => {
      window.addEventListener("scroll", e, !0), window.addEventListener("mousedown", e), window.addEventListener(o, e);
    },
    destroy: () => {
      window.removeEventListener("scroll", e, !0), window.removeEventListener("mousedown", e), window.removeEventListener(o, e);
    }
  };
  return i;
}
export {
  l as a,
  u as b,
  w as c,
  c as d,
  m as e
};
//# sourceMappingURL=outside-D1z8pt7M.js.map
