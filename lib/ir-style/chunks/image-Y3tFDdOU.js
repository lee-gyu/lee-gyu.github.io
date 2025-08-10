function i(e) {
  return window.btoa(unescape(encodeURIComponent(e)));
}
function d(e) {
  const n = new FileReader();
  return n.readAsDataURL(e), new Promise((r, t) => {
    n.onloadend = () => r(n.result), n.onerror = (a) => t(a);
  });
}
function h(e) {
  return URL.createObjectURL(new Blob([e.outerHTML], { type: "image/svg+xml" }));
}
function l(e) {
  return `data:image/svg+xml;base64,${i(e.outerHTML)}`;
}
function u(e, n) {
  const r = document.createElement("a");
  r.href = e, r.download = n, r.click();
}
function g(e) {
  return new Promise((n, r) => {
    const t = new Image();
    t.addEventListener("load", () => n(t)), t.addEventListener("error", (a) => r(a)), t.src = e;
  });
}
function s({ img: e, cb: n, rect: r, margin: t = 0 }) {
  const a = new OffscreenCanvas(e.naturalWidth, e.naturalHeight), c = a.getContext("2d");
  if (!c) throw new Error("Canvas context is null");
  const o = r ?? {
    x: 0,
    y: 0,
    width: e.naturalWidth,
    height: e.naturalHeight
  };
  return a.width = o.width + t * 2, a.height = o.height + t * 2, c.fillStyle = "white", c.fillRect(0, 0, a.width, a.height), c.drawImage(
    e,
    o.x,
    o.y,
    o.width,
    o.height,
    t,
    t,
    o.width,
    o.height
  ), n(a);
}
function w(e, n = "image/png", r, t) {
  return new Promise((a, c) => {
    s({
      img: e,
      rect: r,
      margin: t,
      cb: (o) => {
        o.convertToBlob({ type: n }).then(a).catch(c);
      }
    });
  });
}
export {
  g as a,
  w as b,
  h as c,
  u as d,
  d as e,
  l as g
};
//# sourceMappingURL=image-Y3tFDdOU.js.map
