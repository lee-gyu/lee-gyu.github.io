import { T as Et } from "./css-akUkFMHX.js";
const Xt = {
  // DatePicker
  "datePicker.minDate": /* @__PURE__ */ new Date("1970-01-01"),
  "datePicker.maxDate": /* @__PURE__ */ new Date("9999-12-31"),
  // Grid
  "grid.defaultFontSize": Et.fontSizeBase,
  "grid.defaultFontFamily": Et.fontFamilyBase,
  "grid.paddingTop": 4,
  "grid.paddingBottom": 4,
  "grid.paddingLeft": 8,
  "grid.paddingRight": 8,
  "grid.defaultRowMinSize": 20,
  "grid.defaultRowMaxSize": 100,
  "grid.defaultRowHeight": 24,
  "grid.defaultColumnMinSize": 80,
  "grid.defaultColumnMaxSize": 500,
  "grid.defaultColumnWidth": 100,
  "grid.defaultDropdownWidth": 240,
  "grid.forceRenderLeftCol": 0,
  "grid.forceRenderRightCol": 0,
  "grid.emptyDefaultHeight": 16,
  // TreeView
  "tree-view.nodeRowHeight": 24,
  "tree-view.defaultHorizontalPadding": 8,
  "tree-view.checkboxColumnWidth": 28,
  "tree-view.iconSize": 22,
  "tree-view.levelIndentSize": 22,
  // Layer
  "layerElementId.floating": "#ir_floating",
  "layerElementId.drawer": "#ir_drawer",
  "layerElementId.dialog": "#ir_dialog",
  "layerElementId.popover": "#ir_popover",
  "layerElementId.message": "#ir_message",
  "layerElementId.toast": "#ir_toast",
  // VirtualDOM
  "virtual-dom.defaultHeight": 28
};
class Yt {
  constructor(e = { ...Xt }) {
    this.config = e;
  }
  getStoreValue(e) {
    return this.config[e];
  }
  setStoreValue(e, n) {
    this.config[e] = n;
  }
  setTheme(e) {
    Object.assign(this.config, e);
  }
}
const pt = /* @__PURE__ */ (() => {
  let t = null;
  return () => (t || (t = new Yt()), t);
})();
function sn(t) {
  return pt().getStoreValue(t);
}
function cn(...t) {
  const e = pt();
  return t.map((n) => e.getStoreValue(n));
}
function Zt(t) {
  const n = pt().getStoreValue(`layerElementId.${t}`), o = document.querySelector(n);
  if (!(o instanceof HTMLElement)) throw new Error(`Not found layer element '${n}'`);
  return o;
}
function G() {
  const t = /* @__PURE__ */ new Map();
  return {
    has: e,
    getList: n,
    getListOrNull: o,
    add: s,
    remove: i,
    clear: r,
    clearAll: c,
    forEach: f,
    forEachAsync: d
  };
  function e(a) {
    return t.has(a);
  }
  function n(a) {
    return t.get(a);
  }
  function o(a) {
    const u = t.get(a);
    return u || null;
  }
  function i(a, u) {
    const h = o(a);
    if (!h)
      return;
    const m = h.indexOf(u);
    m > -1 && h.splice(m, 1);
  }
  function s(a, u) {
    e(a) ? n(a).push(u) : t.set(a, [u]);
  }
  function r(a) {
    t.set(a, []);
  }
  function c() {
    t.clear();
  }
  function f(a, u) {
    const h = o(a);
    if (!h)
      return !0;
    for (const m of h)
      if (u(m) === !1)
        return !1;
    return !0;
  }
  async function d(a, u) {
    const h = o(a);
    if (!h)
      return !0;
    try {
      for (const m of h) {
        let p = u(m);
        if (p instanceof Promise && (p = await p), p === !1)
          return !1;
      }
    } catch (m) {
      throw console.error("occurred an error when forEachAsync list-map"), console.error(m), m;
    }
    return !0;
  }
}
async function Jt(t) {
  for (const { label: e, task: n } of t)
    try {
      if (await n() === !1)
        return !1;
    } catch (o) {
      throw console.error(`occurred an error when ${e}`), o;
    }
  return !0;
}
function Qt(t) {
  for (const { label: e, task: n } of t)
    try {
      if (n() === !1)
        return !1;
    } catch (o) {
      throw console.error(`occurred an error when ${e}`), o;
    }
  return !0;
}
function te() {
  const t = /* @__PURE__ */ new Map(), e = G(), n = G(), o = G(), i = G(), s = G(), r = G();
  return {
    emit: a,
    emitSync: c,
    pauseEmit: f,
    resumeEmit: d,
    addBeginHook: z,
    addHook: h,
    addEndHook: H,
    addSyncBeginHook: p,
    addSyncHook: m,
    addSyncEndHook: v,
    removeHook: x,
    removeBeginHook: w,
    removeEndHook: y,
    removeSyncHook: b,
    removeSyncBeginHook: A,
    removeSyncEndHook: E,
    setHook: _,
    setBeginHook: M,
    setEndHook: Q,
    clearHooks: u,
    clearBeginHooks: T,
    clearEndHooks: S,
    clearSyncHooks: P,
    clearSyncBeginHooks: q,
    clearSyncEndHooks: K,
    destroy: W
  };
  function c(l, g) {
    if (t.has(l))
      return !0;
    const L = (tt) => tt(...g);
    return Qt([
      {
        label: `sync_begin_${l}`,
        task: () => s.forEach(l, L)
      },
      {
        label: `sync_${l}`,
        task: () => i.forEach(l, L)
      },
      {
        label: `sync_end_${l}`,
        task: () => r.forEach(l, L)
      }
    ]);
  }
  function f(l) {
    const g = t.get(l);
    t.set(l, g ? g + 1 : 1);
  }
  function d(l) {
    const g = t.get(l);
    g && g > 1 ? t.set(l, g - 1) : g === 1 && t.delete(l);
  }
  function a(l, g) {
    if (t.has(l))
      return Promise.resolve(!0);
    const L = (tt) => tt(...g);
    return Jt([
      {
        label: `begin_${l}`,
        task: () => e.forEachAsync(l, L)
      },
      {
        label: `${l}`,
        task: () => o.forEachAsync(l, L)
      },
      {
        label: `end_${l}`,
        task: () => n.forEachAsync(l, L)
      }
    ]);
  }
  function u(l) {
    o.clear(l);
  }
  function h(l, g) {
    o.add(l, g);
  }
  function m(l, g) {
    i.add(l, g);
  }
  function p(l, g) {
    s.add(l, g);
  }
  function v(l, g) {
    r.add(l, g);
  }
  function x(l, g) {
    o.remove(l, g);
  }
  function w(l, g) {
    e.remove(l, g);
  }
  function y(l, g) {
    n.remove(l, g);
  }
  function b(l, g) {
    i.remove(l, g);
  }
  function A(l, g) {
    s.remove(l, g);
  }
  function E(l, g) {
    r.remove(l, g);
  }
  function _(l, g) {
    u(l), h(l, g);
  }
  function T(l) {
    e.clear(l);
  }
  function z(l, g) {
    e.add(l, g);
  }
  function M(l, g) {
    T(l), z(l, g);
  }
  function S(l) {
    n.clear(l);
  }
  function P(l) {
    i.clear(l);
  }
  function q(l) {
    s.clear(l);
  }
  function K(l) {
    r.clear(l);
  }
  function H(l, g) {
    n.add(l, g);
  }
  function Q(l, g) {
    S(l), H(l, g);
  }
  function W() {
    e.clearAll(), n.clearAll(), o.clearAll(), i.clearAll(), s.clearAll(), r.clearAll();
  }
}
function ln(t, e) {
  let n = t;
  for (; n; ) {
    if (e === n)
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function ee(t) {
  return (e) => e.matches(t);
}
function an(t, e, n) {
  let o = t;
  const i = typeof n == "string" ? ee(n) : n;
  for (; o; ) {
    if (i(o))
      return o;
    if (e === o)
      break;
    o = o.parentElement;
  }
  return null;
}
function fn(t) {
  for (; t.lastChild; )
    t.lastChild.remove();
}
function un({ tag: t, className: e, dataset: n, children: o, attr: i, textContents: s }) {
  const r = document.createElement(t);
  return n && Object.assign(r.dataset, n), e && (r.className = e), i && Object.entries(i).forEach(([c, f]) => r.setAttribute(c, f)), s && (r.textContent = s), o && o.forEach((c) => r.append(c.element)), {
    element: r,
    children: o ?? [],
    append(...c) {
      return c && this.element.append(...c), this;
    }
  };
}
function dn(t, e, n) {
  n ? t.dataset[e] = "true" : delete t.dataset[e];
}
const ne = ["top", "right", "bottom", "left"], St = ["start", "end"], At = /* @__PURE__ */ ne.reduce((t, e) => t.concat(e, e + "-" + St[0], e + "-" + St[1]), []), st = Math.min, U = Math.max, ct = Math.round, it = Math.floor, k = (t) => ({
  x: t,
  y: t
}), oe = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ie = {
  start: "end",
  end: "start"
};
function Lt(t, e, n) {
  return U(t, st(e, n));
}
function nt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function V(t) {
  return t.split("-")[0];
}
function B(t) {
  return t.split("-")[1];
}
function kt(t) {
  return t === "x" ? "y" : "x";
}
function Dt(t) {
  return t === "y" ? "height" : "width";
}
const re = /* @__PURE__ */ new Set(["top", "bottom"]);
function $(t) {
  return re.has(V(t)) ? "y" : "x";
}
function Ft(t) {
  return kt($(t));
}
function Mt(t, e, n) {
  n === void 0 && (n = !1);
  const o = B(t), i = Ft(t), s = Dt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = at(r)), [r, at(r)];
}
function se(t) {
  const e = at(t);
  return [lt(t), e, lt(e)];
}
function lt(t) {
  return t.replace(/start|end/g, (e) => ie[e]);
}
const Ct = ["left", "right"], Tt = ["right", "left"], ce = ["top", "bottom"], le = ["bottom", "top"];
function ae(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Tt : Ct : e ? Ct : Tt;
    case "left":
    case "right":
      return e ? ce : le;
    default:
      return [];
  }
}
function fe(t, e, n, o) {
  const i = B(t);
  let s = ae(V(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(lt)))), s;
}
function at(t) {
  return t.replace(/left|right|bottom|top/g, (e) => oe[e]);
}
function ue(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function de(t) {
  return typeof t != "number" ? ue(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ft(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function Ot(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = $(e), r = Ft(e), c = Dt(r), f = V(e), d = s === "y", a = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, h = o[c] / 2 - i[c] / 2;
  let m;
  switch (f) {
    case "top":
      m = {
        x: a,
        y: o.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: a,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (B(e)) {
    case "start":
      m[r] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      m[r] += h * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const me = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = n, c = s.filter(Boolean), f = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let d = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: a,
    y: u
  } = Ot(d, o, f), h = o, m = {}, p = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: x,
      fn: w
    } = c[v], {
      x: y,
      y: b,
      data: A,
      reset: E
    } = await w({
      x: a,
      y: u,
      initialPlacement: o,
      placement: h,
      strategy: i,
      middlewareData: m,
      rects: d,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    a = y ?? a, u = b ?? u, m = {
      ...m,
      [x]: {
        ...m[x],
        ...A
      }
    }, E && p <= 50 && (p++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (d = E.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : E.rects), {
      x: a,
      y: u
    } = Ot(d, h, f)), v = -1);
  }
  return {
    x: a,
    y: u,
    placement: h,
    strategy: i,
    middlewareData: m
  };
};
async function wt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: s,
    rects: r,
    elements: c,
    strategy: f
  } = t, {
    boundary: d = "clippingAncestors",
    rootBoundary: a = "viewport",
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = nt(e, t), p = de(m), x = c[h ? u === "floating" ? "reference" : "floating" : u], w = ft(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: a,
    strategy: f
  })), y = u === "floating" ? {
    x: o,
    y: i,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), A = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = ft(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: y,
    offsetParent: b,
    strategy: f
  }) : y);
  return {
    top: (w.top - E.top + p.top) / A.y,
    bottom: (E.bottom - w.bottom + p.bottom) / A.y,
    left: (w.left - E.left + p.left) / A.x,
    right: (E.right - w.right + p.right) / A.x
  };
}
function he(t, e, n) {
  return (t ? [...n.filter((i) => B(i) === t), ...n.filter((i) => B(i) !== t)] : n.filter((i) => V(i) === i)).filter((i) => t ? B(i) === t || (e ? lt(i) !== i : !1) : !0);
}
const ge = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i;
      const {
        rects: s,
        middlewareData: r,
        placement: c,
        platform: f,
        elements: d
      } = e, {
        crossAxis: a = !1,
        alignment: u,
        allowedPlacements: h = At,
        autoAlignment: m = !0,
        ...p
      } = nt(t, e), v = u !== void 0 || h === At ? he(u || null, m, h) : h, x = await wt(e, p), w = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, y = v[w];
      if (y == null)
        return {};
      const b = Mt(y, s, await (f.isRTL == null ? void 0 : f.isRTL(d.floating)));
      if (c !== y)
        return {
          reset: {
            placement: v[0]
          }
        };
      const A = [x[V(y)], x[b[0]], x[b[1]]], E = [...((o = r.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: y,
        overflows: A
      }], _ = v[w + 1];
      if (_)
        return {
          data: {
            index: w + 1,
            overflows: E
          },
          reset: {
            placement: _
          }
        };
      const T = E.map((S) => {
        const P = B(S.placement);
        return [S.placement, P && a ? (
          // Check along the mainAxis and main crossAxis side.
          S.overflows.slice(0, 2).reduce((q, K) => q + K, 0)
        ) : (
          // Check only the mainAxis.
          S.overflows[0]
        ), S.overflows];
      }).sort((S, P) => S[1] - P[1]), M = ((i = T.filter((S) => S[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        B(S[0]) ? 2 : 3
      ).every((P) => P <= 0))[0]) == null ? void 0 : i[0]) || T[0][0];
      return M !== c ? {
        data: {
          index: w + 1,
          overflows: E
        },
        reset: {
          placement: M
        }
      } : {};
    }
  };
}, pe = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: s,
        rects: r,
        initialPlacement: c,
        platform: f,
        elements: d
      } = e, {
        mainAxis: a = !0,
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: v = !0,
        ...x
      } = nt(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = V(i), y = $(c), b = V(c) === c, A = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)), E = h || (b || !v ? [at(c)] : se(c)), _ = p !== "none";
      !h && _ && E.push(...fe(c, v, p, A));
      const T = [c, ...E], z = await wt(e, x), M = [];
      let S = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (a && M.push(z[w]), u) {
        const H = Mt(i, r, A);
        M.push(z[H[0]], z[H[1]]);
      }
      if (S = [...S, {
        placement: i,
        overflows: M
      }], !M.every((H) => H <= 0)) {
        var P, q;
        const H = (((P = s.flip) == null ? void 0 : P.index) || 0) + 1, Q = T[H];
        if (Q && (!(u === "alignment" ? y !== $(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        S.every((g) => g.overflows[0] > 0 && $(g.placement) === y)))
          return {
            data: {
              index: H,
              overflows: S
            },
            reset: {
              placement: Q
            }
          };
        let W = (q = S.filter((l) => l.overflows[0] <= 0).sort((l, g) => l.overflows[1] - g.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!W)
          switch (m) {
            case "bestFit": {
              var K;
              const l = (K = S.filter((g) => {
                if (_) {
                  const L = $(g.placement);
                  return L === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((g) => [g.placement, g.overflows.filter((L) => L > 0).reduce((L, tt) => L + tt, 0)]).sort((g, L) => g[1] - L[1])[0]) == null ? void 0 : K[0];
              l && (W = l);
              break;
            }
            case "initialPlacement":
              W = c;
              break;
          }
        if (i !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
}, we = /* @__PURE__ */ new Set(["left", "top"]);
async function ve(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = V(n), c = B(n), f = $(n) === "y", d = we.has(r) ? -1 : 1, a = s && f ? -1 : 1, u = nt(e, t);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: p
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return c && typeof p == "number" && (m = c === "end" ? p * -1 : p), f ? {
    x: m * a,
    y: h * d
  } : {
    x: h * d,
    y: m * a
  };
}
const ye = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: s,
        placement: r,
        middlewareData: c
      } = e, f = await ve(e, t);
      return r === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: i + f.x,
        y: s + f.y,
        data: {
          ...f,
          placement: r
        }
      };
    }
  };
}, xe = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: c = {
          fn: (x) => {
            let {
              x: w,
              y
            } = x;
            return {
              x: w,
              y
            };
          }
        },
        ...f
      } = nt(t, e), d = {
        x: n,
        y: o
      }, a = await wt(e, f), u = $(V(i)), h = kt(u);
      let m = d[h], p = d[u];
      if (s) {
        const x = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", y = m + a[x], b = m - a[w];
        m = Lt(y, m, b);
      }
      if (r) {
        const x = u === "y" ? "top" : "left", w = u === "y" ? "bottom" : "right", y = p + a[x], b = p - a[w];
        p = Lt(y, p, b);
      }
      const v = c.fn({
        ...e,
        [h]: m,
        [u]: p
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - o,
          enabled: {
            [h]: s,
            [u]: r
          }
        }
      };
    }
  };
};
function ut() {
  return typeof window < "u";
}
function J(t) {
  return Bt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function C(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function F(t) {
  var e;
  return (e = (Bt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Bt(t) {
  return ut() ? t instanceof Node || t instanceof C(t).Node : !1;
}
function O(t) {
  return ut() ? t instanceof Element || t instanceof C(t).Element : !1;
}
function D(t) {
  return ut() ? t instanceof HTMLElement || t instanceof C(t).HTMLElement : !1;
}
function Rt(t) {
  return !ut() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof C(t).ShadowRoot;
}
const be = /* @__PURE__ */ new Set(["inline", "contents"]);
function ot(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = R(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !be.has(i);
}
const Ee = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Se(t) {
  return Ee.has(J(t));
}
const Ae = [":popover-open", ":modal"];
function dt(t) {
  return Ae.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const Le = ["transform", "translate", "scale", "rotate", "perspective"], Ce = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Te = ["paint", "layout", "strict", "content"];
function vt(t) {
  const e = yt(), n = O(t) ? R(t) : t;
  return Le.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || Ce.some((o) => (n.willChange || "").includes(o)) || Te.some((o) => (n.contain || "").includes(o));
}
function Oe(t) {
  let e = N(t);
  for (; D(e) && !Z(e); ) {
    if (vt(e))
      return e;
    if (dt(e))
      return null;
    e = N(e);
  }
  return null;
}
function yt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Re = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Z(t) {
  return Re.has(J(t));
}
function R(t) {
  return C(t).getComputedStyle(t);
}
function mt(t) {
  return O(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function N(t) {
  if (J(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Rt(t) && t.host || // Fallback.
    F(t)
  );
  return Rt(e) ? e.host : e;
}
function Vt(t) {
  const e = N(t);
  return Z(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : D(e) && ot(e) ? e : Vt(e);
}
function et(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Vt(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = C(i);
  if (s) {
    const c = gt(r);
    return e.concat(r, r.visualViewport || [], ot(i) ? i : [], c && n ? et(c) : []);
  }
  return e.concat(i, et(i, [], n));
}
function gt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function $t(t) {
  const e = R(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = D(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, c = ct(n) !== s || ct(o) !== r;
  return c && (n = s, o = r), {
    width: n,
    height: o,
    $: c
  };
}
function xt(t) {
  return O(t) ? t : t.contextElement;
}
function X(t) {
  const e = xt(t);
  if (!D(e))
    return k(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = $t(e);
  let r = (s ? ct(n.width) : n.width) / o, c = (s ? ct(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: r,
    y: c
  };
}
const _e = /* @__PURE__ */ k(0);
function It(t) {
  const e = C(t);
  return !yt() || !e.visualViewport ? _e : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Pe(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== C(t) ? !1 : e;
}
function j(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = xt(t);
  let r = k(1);
  e && (o ? O(o) && (r = X(o)) : r = X(t));
  const c = Pe(s, n, o) ? It(s) : k(0);
  let f = (i.left + c.x) / r.x, d = (i.top + c.y) / r.y, a = i.width / r.x, u = i.height / r.y;
  if (s) {
    const h = C(s), m = o && O(o) ? C(o) : o;
    let p = h, v = gt(p);
    for (; v && o && m !== p; ) {
      const x = X(v), w = v.getBoundingClientRect(), y = R(v), b = w.left + (v.clientLeft + parseFloat(y.paddingLeft)) * x.x, A = w.top + (v.clientTop + parseFloat(y.paddingTop)) * x.y;
      f *= x.x, d *= x.y, a *= x.x, u *= x.y, f += b, d += A, p = C(v), v = gt(p);
    }
  }
  return ft({
    width: a,
    height: u,
    x: f,
    y: d
  });
}
function bt(t, e) {
  const n = mt(t).scrollLeft;
  return e ? e.left + n : j(F(t)).left + n;
}
function Nt(t, e, n) {
  n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    bt(t, o)
  )), s = o.top + e.scrollTop;
  return {
    x: i,
    y: s
  };
}
function He(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const s = i === "fixed", r = F(o), c = e ? dt(e.floating) : !1;
  if (o === r || c && s)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = k(1);
  const a = k(0), u = D(o);
  if ((u || !u && !s) && ((J(o) !== "body" || ot(r)) && (f = mt(o)), D(o))) {
    const m = j(o);
    d = X(o), a.x = m.x + o.clientLeft, a.y = m.y + o.clientTop;
  }
  const h = r && !u && !s ? Nt(r, f, !0) : k(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - f.scrollLeft * d.x + a.x + h.x,
    y: n.y * d.y - f.scrollTop * d.y + a.y + h.y
  };
}
function ke(t) {
  return Array.from(t.getClientRects());
}
function De(t) {
  const e = F(t), n = mt(t), o = t.ownerDocument.body, i = U(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = U(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + bt(t);
  const c = -n.scrollTop;
  return R(o).direction === "rtl" && (r += U(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: c
  };
}
function Fe(t, e) {
  const n = C(t), o = F(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, c = 0, f = 0;
  if (i) {
    s = i.width, r = i.height;
    const d = yt();
    (!d || d && e === "fixed") && (c = i.offsetLeft, f = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: c,
    y: f
  };
}
const Me = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Be(t, e) {
  const n = j(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = D(t) ? X(t) : k(1), r = t.clientWidth * s.x, c = t.clientHeight * s.y, f = i * s.x, d = o * s.y;
  return {
    width: r,
    height: c,
    x: f,
    y: d
  };
}
function _t(t, e, n) {
  let o;
  if (e === "viewport")
    o = Fe(t, n);
  else if (e === "document")
    o = De(F(t));
  else if (O(e))
    o = Be(e, n);
  else {
    const i = It(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return ft(o);
}
function zt(t, e) {
  const n = N(t);
  return n === e || !O(n) || Z(n) ? !1 : R(n).position === "fixed" || zt(n, e);
}
function Ve(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = et(t, [], !1).filter((c) => O(c) && J(c) !== "body"), i = null;
  const s = R(t).position === "fixed";
  let r = s ? N(t) : t;
  for (; O(r) && !Z(r); ) {
    const c = R(r), f = vt(r);
    !f && c.position === "fixed" && (i = null), (s ? !f && !i : !f && c.position === "static" && !!i && Me.has(i.position) || ot(r) && !f && zt(t, r)) ? o = o.filter((a) => a !== r) : i = c, r = N(r);
  }
  return e.set(t, o), o;
}
function $e(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? dt(e) ? [] : Ve(e, this._c) : [].concat(n), o], c = r[0], f = r.reduce((d, a) => {
    const u = _t(e, a, i);
    return d.top = U(u.top, d.top), d.right = st(u.right, d.right), d.bottom = st(u.bottom, d.bottom), d.left = U(u.left, d.left), d;
  }, _t(e, c, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function Ie(t) {
  const {
    width: e,
    height: n
  } = $t(t);
  return {
    width: e,
    height: n
  };
}
function Ne(t, e, n) {
  const o = D(e), i = F(e), s = n === "fixed", r = j(t, !0, s, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = k(0);
  function d() {
    f.x = bt(i);
  }
  if (o || !o && !s)
    if ((J(e) !== "body" || ot(i)) && (c = mt(e)), o) {
      const m = j(e, !0, s, e);
      f.x = m.x + e.clientLeft, f.y = m.y + e.clientTop;
    } else i && d();
  s && !o && i && d();
  const a = i && !o && !s ? Nt(i, c) : k(0), u = r.left + c.scrollLeft - f.x - a.x, h = r.top + c.scrollTop - f.y - a.y;
  return {
    x: u,
    y: h,
    width: r.width,
    height: r.height
  };
}
function ht(t) {
  return R(t).position === "static";
}
function Pt(t, e) {
  if (!D(t) || R(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return F(t) === n && (n = n.ownerDocument.body), n;
}
function Wt(t, e) {
  const n = C(t);
  if (dt(t))
    return n;
  if (!D(t)) {
    let i = N(t);
    for (; i && !Z(i); ) {
      if (O(i) && !ht(i))
        return i;
      i = N(i);
    }
    return n;
  }
  let o = Pt(t, e);
  for (; o && Se(o) && ht(o); )
    o = Pt(o, e);
  return o && Z(o) && ht(o) && !vt(o) ? n : o || Oe(t) || n;
}
const ze = async function(t) {
  const e = this.getOffsetParent || Wt, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: Ne(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function We(t) {
  return R(t).direction === "rtl";
}
const Ue = {
  convertOffsetParentRelativeRectToViewportRelativeRect: He,
  getDocumentElement: F,
  getClippingRect: $e,
  getOffsetParent: Wt,
  getElementRects: ze,
  getClientRects: ke,
  getDimensions: Ie,
  getScale: X,
  isElement: O,
  isRTL: We
};
function Ut(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function je(t, e) {
  let n = null, o;
  const i = F(t);
  function s() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function r(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), s();
    const d = t.getBoundingClientRect(), {
      left: a,
      top: u,
      width: h,
      height: m
    } = d;
    if (c || e(), !h || !m)
      return;
    const p = it(u), v = it(i.clientWidth - (a + h)), x = it(i.clientHeight - (u + m)), w = it(a), b = {
      rootMargin: -p + "px " + -v + "px " + -x + "px " + -w + "px",
      threshold: U(0, st(1, f)) || 1
    };
    let A = !0;
    function E(_) {
      const T = _[0].intersectionRatio;
      if (T !== f) {
        if (!A)
          return r();
        T ? r(!1, T) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !Ut(d, t.getBoundingClientRect()) && r(), A = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, b);
    }
    n.observe(t);
  }
  return r(!0), s;
}
function jt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, d = xt(t), a = i || s ? [...d ? et(d) : [], ...et(e)] : [];
  a.forEach((w) => {
    i && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const u = d && c ? je(d, n) : null;
  let h = -1, m = null;
  r && (m = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === d && m && (m.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var b;
      (b = m) == null || b.observe(e);
    })), n();
  }), d && !f && m.observe(d), m.observe(e));
  let p, v = f ? j(t) : null;
  f && x();
  function x() {
    const w = j(t);
    v && !Ut(v, w) && n(), v = w, p = requestAnimationFrame(x);
  }
  return n(), () => {
    var w;
    a.forEach((y) => {
      i && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), u?.(), (w = m) == null || w.disconnect(), m = null, f && cancelAnimationFrame(p);
  };
}
const qt = ye, qe = ge, mn = xe, Ke = pe, Kt = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Ue,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return me(t, e, {
    ...i,
    platform: s
  });
}, I = {};
function Ge() {
  document.addEventListener("keydown", (t) => {
    I[t.key] && I[t.key].forEach((e) => e(t));
  });
}
typeof document < "u" && Ge();
const Xe = (t, e) => {
  I[t] ? I[t].push(e) : I[t] = [e];
}, hn = (t, e) => {
  const n = I[t].indexOf(e);
  n !== -1 && I[t].splice(n, 1);
}, gn = (t) => {
  delete I[t];
}, Y = [];
Xe("Escape", () => {
  const t = Y.pop();
  if (t) {
    if (t.onESC?.call(t) === !0) {
      Y.push(t);
      return;
    }
    t.hide();
  }
});
function pn() {
  console.debug(Y);
}
function Ye(t) {
  function e() {
    return Y.indexOf(t);
  }
  return {
    create: () => {
      e() === -1 ? Y.push(t) : console.warn("Already created esc controller");
    },
    destroy: () => {
      const n = e();
      n !== -1 && Y.splice(n, 1);
    }
  };
}
const rt = {
  floating: [],
  dialog: [],
  message: [],
  popover: [],
  toast: []
}, Ht = 100, Ze = (t, e) => {
  if (e >= Ht) throw new Error("z-index could not be set more 100");
  return `calc(var(--z-index-${t}) + ${e * Ht})`;
}, Je = (t) => {
  rt[t].forEach((e, n) => e.element.style.zIndex = Ze(t, n));
}, Qe = ({ selector: t, element: e, type: n, onESC: o, escClose: i = !0, parentElement: s, onInit: r }) => {
  const c = e || document.querySelector(t || "");
  if (!c)
    throw new Error("missing element to popover. Please check the parameters (selector or element)");
  const f = (h) => {
    h.target === c && (c.remove(), c.removeEventListener("transitionend", f));
  }, d = te(), a = {
    get element() {
      return c;
    },
    get hook() {
      return d;
    },
    show: () => {
      if (!c.classList.contains("is-visible"))
        return i && u.create(), s ? (s.appendChild(c), setTimeout(() => c.classList.add("is-visible"), 0)) : c.classList.add("is-visible"), rt[n].push(a), Je(n), d.emitSync("show", []), a;
    },
    hide: () => (i && u.destroy(), c.classList.remove("is-visible"), c.style.removeProperty("z-index"), s && c.addEventListener("transitionend", f), rt[n] = rt[n].filter((h) => h !== a), document.activeElement && tn(c, document.activeElement), o?.(), a),
    minimize(h, m, p) {
      h.add({
        instance: a,
        icon: p,
        title: m
      }), this.hide();
    },
    bringToTop: () => {
      a.hide(), a.show();
    }
  }, u = Ye(a);
  return r && r(c, a), s && c.isConnected && c.remove(), a;
};
function tn(t, e) {
  let n = e;
  for (; n; ) {
    if (n === t) return e?.blur();
    n = n.parentElement;
  }
}
const Gt = 0;
function en(t) {
  if (!t.isConnected) return !0;
  let e = t;
  for (; e; ) {
    if (e.style.display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
const wn = (t, e) => ({
  getBoundingClientRect() {
    return {
      width: 0,
      height: 0,
      x: t,
      y: e,
      top: e,
      left: t,
      bottom: e,
      right: t
    };
  }
}), vn = (t, e, n = "bottom", o = Gt) => jt(t, e, () => {
  en(t) || Kt(t, e, {
    strategy: "absolute",
    placement: n,
    middleware: [
      qt(o),
      Ke()
    ]
  }).then(({ x: s, y: r }) => {
    e.style.top = `${r}px`, e.style.left = `${s}px`;
  });
});
class nn {
  constructor(e) {
    this.args = e, e.floatingTemplateElement.content.children.length > 1 && console.warn("floatingTemplateElement uses only first child element. others is ignored."), this._cachedElement = e.floatingTemplateElement.content.firstElementChild, this._popoverHandler = Qe({
      type: "popover",
      parentElement: Zt("popover"),
      element: this._cachedElement,
      onESC: () => {
        this._visible = !1;
      }
    });
  }
  _cachedElement;
  _popoverHandler;
  _visible = !1;
  _cleanup;
  get cachedElement() {
    return this._cachedElement;
  }
  _computePosition() {
    Kt(this.args.refElement, this._cachedElement, {
      strategy: "fixed",
      middleware: [
        qt(this.args.offset),
        qe({
          allowedPlacements: this.args.autoPlacement
        })
      ]
    }).then((e) => {
      this._cachedElement.style.top = `${e.y}px`, this._cachedElement.style.left = `${e.x}px`, this._cachedElement.style.position = e.strategy;
    });
  }
  show() {
    this._visible || (this._popoverHandler.show(), this._visible = !0, this.args.autoUpdate ? this._cleanup = jt(this.args.refElement, this._cachedElement, () => this._computePosition()) : this._computePosition());
  }
  hide() {
    this._visible && (this._visible = !1, this._popoverHandler.hide(), this._cleanup?.(), this._cleanup = void 0);
  }
  destroy() {
    this.hide();
  }
  get isVisible() {
    return this._visible;
  }
}
const on = ["right-start", "right-end", "left-start", "left-end"], yn = (t) => new nn({
  floatingTemplateElement: t.floatingTemplateElement,
  refElement: t.refElement,
  offset: t.offset ?? Gt,
  autoPlacement: t.autoPlacement ?? on,
  autoUpdate: t.autoUpdate ?? !1
});
export {
  un as a,
  Ye as b,
  Kt as c,
  wn as d,
  vn as e,
  Ke as f,
  Zt as g,
  pt as h,
  ln as i,
  sn as j,
  an as k,
  te as l,
  dn as m,
  cn as n,
  qt as o,
  Qe as p,
  gn as q,
  Xe as r,
  mn as s,
  pn as t,
  hn as u,
  yn as v,
  fn as w
};
//# sourceMappingURL=floating-C5P7I7tX.js.map
