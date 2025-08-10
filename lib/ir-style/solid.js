import { o as C, t as c, c as d, I as w, a as R, u as x, b as l, s as $, i as h, d as g, M as I, e as D, S as p, f as A, F as M, g as F, h as H, r as S } from "./chunks/grid-B8VKUE4o.js";
import { g as O } from "./chunks/floating-C5P7I7tX.js";
import { s as f, w as E, a as v, l as k, m as y, _ as V, n as W, o as _, p as z } from "./chunks/css-akUkFMHX.js";
import "./chunks/index-Bmt0z1bM.js";
import { I as G } from "./chunks/editor-DZdQciHe.js";
import { c as u } from "./chunks/clsx-OuTLNxxd.js";
import { I as P } from "./chunks/index-CIsJmAg4.js";
var T = /* @__PURE__ */ c("<div>");
function st(n) {
  let e;
  return C(() => {
    const t = new w({
      contextElement: e,
      ...n
    });
    n.ref instanceof Function ? n.ref?.(t) : n.ref = t, n.onInitGrid?.(t), R(() => {
      n.onCleanup?.(t), t.destroy();
    });
  }), (() => {
    var t = T(), a = e;
    return typeof a == "function" ? x(a, t) : e = t, d((o) => {
      var i = n.class, r = n.style;
      return i !== o.e && l(t, o.e = i), o.t = $(t, r, o.t), o;
    }, {
      e: void 0,
      t: void 0
    }), t;
  })();
}
var B = /* @__PURE__ */ c("<div>");
function ct(n) {
  let e;
  return C(() => {
    const t = new G({
      contextElement: e,
      mode: n.mode,
      code: n.code
    });
    n.ref = t, R(() => t.destroy());
  }), (() => {
    var t = B(), a = e;
    return typeof a == "function" ? x(a, t) : e = t, t;
  })();
}
var J = /* @__PURE__ */ c("<img width=16 height=16 alt=favicon>"), N = /* @__PURE__ */ c("<div><span>"), j = /* @__PURE__ */ c('<i class="ir-icon ir-icon-text ir-icon--md ir-icon--cloud">');
const q = u(E, f({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "lg",
  fontWeight: "medium",
  paddingLeft: "xs",
  paddingRight: "sm",
  height: "input",
  gap: "xxs"
})), K = u(v.textEllipsis, v.flex110);
function dt(n) {
  return (() => {
    var t = N(), a = t.firstChild, o = e;
    return typeof o == "function" ? x(o, t) : e = t, h(t, g(p, {
      get fallback() {
        return (() => {
          var i = j();
          return d((r) => (r = n.displayOptions.color ?? "currentcolor") != null ? i.style.setProperty("color", r) : i.style.removeProperty("color")), i;
        })();
      },
      get children() {
        return g(I, {
          get when() {
            return n.displayOptions.icon;
          },
          get children() {
            var i = J();
            return d((r) => {
              var s = f({
                marginRight: "3xs"
              }), m = n.displayOptions.icon;
              return s !== r.e && l(i, r.e = s), m !== r.t && D(i, "src", r.t = m), r;
            }, {
              e: void 0,
              t: void 0
            }), i;
          }
        });
      }
    }), a), l(a, K), h(a, () => n.displayOptions.serverAlias), d((i) => {
      var r = u(q, n.class), s = {
        "background-color": `hsl(${V.backgroundHsl.light} / 0.2)`,
        ...n.style
      };
      return r !== i.e && l(t, i.e = r), i.t = $(t, s, i.t), i;
    }, {
      e: void 0,
      t: void 0
    }), t;
  })();
  function e(t) {
    k(t, {
      [y.maxWidth]: "180px"
    });
  }
}
var Q = /* @__PURE__ */ c("<div>"), U = /* @__PURE__ */ c("<button><i></i><span></span><i data-action=close>");
const L = W.lg, X = f({
  position: "fixed",
  display: "flex",
  gap: "xs"
});
function Y(n) {
  return (() => {
    var a = Q(), o = e;
    return typeof o == "function" ? x(o, a) : e = a, l(a, X), h(a, g(F, {
      get when() {
        return n.dialogList.length > 0;
      },
      get children() {
        return g(M, {
          get each() {
            return n.dialogList;
          },
          children: (i) => g(tt, {
            dialogInfo: i,
            get handleClick() {
              return n.onClick;
            }
          })
        });
      }
    })), d((i) => $(a, t(n.placement, n.offset), i)), a;
  })();
  function e(a) {
    k(a, {
      [_.default]: "0.5",
      [_.hover]: "1",
      [_.active]: "0.8",
      [y.minWidth]: "60px",
      [y.maxWidth]: "170px"
    });
  }
  function t(a = "bottom-right", o = {
    x: 0,
    y: 0
  }) {
    const [i, r] = a.split("-");
    return {
      [i]: `calc(${L} + ${o.y}px)`,
      [r]: `calc(${L} + ${o.x}px)`
    };
  }
}
const Z = f({
  display: "flex",
  alignItems: "center",
  padding: "xxs",
  gap: "xxs",
  backgroundColor: "light",
  boxShadow: "md",
  borderRadius: "sm",
  color: "default"
});
function tt(n) {
  return (() => {
    var e = U(), t = e.firstChild, a = t.nextSibling, o = a.nextSibling;
    return e.$$click = n.handleClick, e.$$clickData = n.dialogInfo.instance, h(a, () => n.dialogInfo.title), d((i) => {
      var r = u(Z, z), s = u("ir-icon", n.dialogInfo.icon), m = u(E, v.textEllipsis, v.textAlign.left), b = `ir-icon ir-icon--close ${f({
        marginLeft: "xs"
      })}`;
      return r !== i.e && l(e, i.e = r), s !== i.t && l(t, i.t = s), m !== i.a && l(a, i.a = m), b !== i.o && l(o, i.o = b), i;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), e;
  })();
}
A(["click"]);
class gt extends P {
  constructor(e = {}) {
    super({
      contextElement: document.createElement("div")
    }), this._args = e, this._mount();
  }
  _dialogListSignal = H([]);
  _cleanupRender = null;
  get componentLabel() {
    return "dialog-manager";
  }
  add(e) {
    this._setDialogList([...this._dialogList, e]);
    const t = () => {
      this.remove(e.instance), e.instance.hook.removeSyncHook("show", t);
    };
    e.instance.hook.addSyncHook("show", t);
  }
  remove(e) {
    this._setDialogList(this._dialogList.filter((t) => t.instance !== e));
  }
  get _dialogList() {
    return this._dialogListSignal[0]();
  }
  _setDialogList(e) {
    this._dialogListSignal[1](e);
  }
  clear() {
    this._setDialogList([]);
  }
  onDestroy() {
    this.clear(), this._cleanupRender?.(), this._cleanupRender = null;
  }
  /** 내부 렌더링 마운트 */
  _mount() {
    this._cleanupRender = S(() => {
      const e = this;
      return g(Y, {
        onClick: (t, a) => {
          a.target instanceof HTMLElement && (a.target.closest("[data-action='close']") ? e.remove(t) : a.target.closest("button") && t.show());
        },
        get placement() {
          return e._args.placement;
        },
        get offset() {
          return e._args.offset;
        },
        get dialogList() {
          return e._dialogListSignal[0]();
        }
      });
    }, this.contextElement), O(this._args.layer ?? "floating").append(this.contextElement);
  }
}
const ut = { render: S };
export {
  dt as DisplayAlias,
  ct as Editor,
  st as Grid,
  gt as IRDialogManager,
  ut as solidJS
};
//# sourceMappingURL=solid.js.map
