import { ax as zo, P as Fo, ay as Po, R as $o, S as Nn, az as Do, aA as Bn, t as Wo, v as No, C as Bo, u as Vo, q as Go, r as jo, aB as Uo, aC as Ko, aD as qo, aE as Xo, aF as Zo, a8 as Yo, aG as Gt, aH as Jo, aI as Qo, a as Xe, aJ as xe, aK as es, n as ts, aL as ns, aM as Vn, N as os, O as sn, aN as ss, aO as rs, aP as is, aQ as ls, l as fe, aR as St, aS as as, aT as cs, aU as us, aV as ds, aW as hs, ag as P, aX as rn, T as ln, aY as fs, aZ as gs, a_ as ms, a$ as ps, b0 as ws, b1 as Cs, b2 as _s, b3 as Rs, b4 as ys, b5 as xs, b6 as bs, b7 as Ss, b8 as vs, b9 as ks, ba as Is, bb as Es, bc as Gn, bd as jn, ab as Ze, be as Ms, bf as Ts, ai as Ls, bg as Hs, bh as Os, bi as As, bj as zs, bk as Fs, bl as an, bm as Ps, bn as $s, bo as Ds, bp as Ws, ap as Ns } from "./css-akUkFMHX.js";
import { r as $, I as Ae, e as Bs, g as Vs, d as Gs, f as js } from "./command-manager-Ds2Bk1Hy.js";
import { c as be } from "./asserts-CpwDJsre.js";
import { o as Us, m as Ks, g as jt, a as Un, e as ct, c as qs, R as Ut, d as K, f as Xs, C as Zs, l as Ys } from "./rx-state-C3nw7N-x.js";
import { e as Kn, b as qn, l as Js, h as Xn, w as Qs, g as cn, c as er, o as tr, f as nr, s as or } from "./floating-C5P7I7tX.js";
import { i as Q, d as Ft } from "./index-Bmt0z1bM.js";
import { c as un } from "./clsx-OuTLNxxd.js";
import { c as sr, a as He, b as ut } from "./outside-D1z8pt7M.js";
import { p as rr } from "./pick-BLZiDVxr.js";
import { i as Zn, r as ir, w as lr } from "./in-memory-clipboard-CBDV7nbf.js";
import { I as ar } from "./index-CIsJmAg4.js";
class cr {
  /* 커맨드 실행 인자 */
  _args;
  /* 실행을 위한 컴포넌트 인스턴스 */
  _instance;
  /* 되돌리기 위해 필요한 데이터 context */
  _undoContext;
  constructor(e, t) {
    this._args = t, this._instance = e, this._undoContext = this._getUndoContext();
  }
  /* 커맨드 실행 전, 되돌이기 위한 Context 정보를 저장 */
  _getUndoContext() {
    throw new Error("Not implemented");
  }
  /**
   * Redo 시 재실행
   * */
  _execute() {
    throw new Error("Not implemented");
  }
  /**
   * Undo 되돌리기
   * */
  _undo() {
    throw new Error("Not implemented");
  }
  /**
   * 현재 undo 가능한 상태인가?
   */
  get canUndo() {
    throw new Error("Not implemented");
  }
  /**
   * 현재 다시 되돌릴 수 있는 상태인가?
   */
  get canExecute() {
    throw new Error("Not implemented");
  }
  execute() {
    if (!this.canExecute)
      throw new Error("Can't execute command");
    this._execute(), this.onExecute();
  }
  undo() {
    if (!this.canUndo)
      throw new Error("Can't undo command");
    this._undo(), this.onUndo();
  }
  /**
   * Undo 이후 부가적인 이벤트 호출 필요 시 콜백 구현
   */
  onUndo() {
  }
  /**
   * 되돌리기 후 부가적인 이벤트 호출 필요 시 콜백 구현
   */
  onExecute() {
  }
}
function vt(o, e) {
  return Us(function(t, n) {
    var s = 0;
    t.subscribe(Ks(n, function(r) {
      n.next(o.call(e, r, s++));
    }));
  });
}
function dn(o, e, t) {
  return Yn(o, t) && Jn(e, t);
}
function dt(o) {
  const e = parseInt(o.getAttribute("data-row") || "-1", 10), t = parseInt(o.getAttribute("data-col") || "-1", 10);
  if (e === -1 || t === -1)
    throw new Error("Invalid cell");
  return { row: e, col: t };
}
function Yn(o, e) {
  return o >= e.top && o <= e.bottom;
}
function Jn(o, e) {
  return o >= e.left && o <= e.right;
}
function ur(o, e) {
  let t = o.firstChild, n = e;
  for (; t; ) {
    let s = t.firstChild;
    for (; s; )
      s instanceof HTMLElement && s.isConnected && s.dataset.ignoreAutoSize === void 0 && (n = Math.max(s.offsetHeight, n)), s = s.nextSibling;
    t = t.nextSibling;
  }
  return n;
}
function dr(o) {
  let e = o.target, t = o.offsetX, n = o.offsetY;
  for (; e !== o.currentTarget; ) {
    if (!(e instanceof HTMLElement))
      throw new Error("invalid event target!");
    if (e.tagName === "TR") break;
    t += e.offsetLeft, n += e.offsetTop, e = e.parentElement;
  }
  return { x: t, y: n };
}
const hr = 20, fr = 5;
class Ce {
  render(e, t, n) {
    throw new Error("Not implemented");
  }
  getHorizontalCellPadding({ paddingLeft: e, paddingRight: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingLeft")) + (t ?? n.getThemeValue("grid.paddingRight"));
  }
  getVerticalCellPadding({ paddingTop: e, paddingBottom: t, gridStore: n }) {
    return (e ?? n.getThemeValue("grid.paddingTop")) + (t ?? n.getThemeValue("grid.paddingBottom"));
  }
  getCellInnerWidth(e, t, n) {
    const s = jt(e, t), r = [n.icon, n.sortOrder].reduce((u, d) => d ? u + 1 : u, 0) * (hr + fr), i = `${this.getDisplayText(n)}`.split(`
`), l = r + s.calculateWidth(i[0] ?? "");
    return this.getHorizontalCellPadding(n) + $(1, i.length).reduce(
      (u, d) => Math.max(u, s.calculateWidth(i[d])),
      l
    );
  }
  getRendererInnerWidth(e, t, n) {
    return 0;
  }
  getCellInnerHeight(e, t) {
    return this.getVerticalCellPadding(t) + ur(
      e,
      t.gridStore.getThemeValue("grid.emptyDefaultHeight")
    );
  }
  /**
   * 현재 셀 렌더러가 cell props를 write하여 변경이 일어났을 때 호출.
   * Undo / Redo 등의 작업, 또는 setCell 등의 작업에서 호출 됨.
   * 단, DOM click 등의 렌더러 내부에서 직접 access한 경우는 호출되지 않음.
   * @version ^2.18.0
   * @experimental 실험적 기능
   */
  onUpdateCell(e, t, n) {
  }
  getDisplayText(e) {
    return e.text ?? "";
  }
  get renderType() {
    return "unknown";
  }
  get editable() {
    return !0;
  }
  get canBeClear() {
    return !0;
  }
}
class q extends cr {
}
class Se extends q {
  _execute() {
    this._instance.setCell(...this._args);
  }
  _getUndoContext() {
    const [e, t, n] = this._args, s = this._instance.getCellMetaInfo(e, t), r = new Set(Object.keys(s));
    return {
      // cellInfo의 key 값만으로 기존 cell 내용 복사
      beforeValue: rr(
        s,
        n
      ),
      removeKeys: Object.keys(n).filter((i) => !r.has(i))
    };
  }
  _undo() {
    this._instance.setCell(
      this._args[0],
      this._args[1],
      {
        ...this._undoContext.beforeValue,
        ...Object.fromEntries(this._undoContext.removeKeys.map((e) => [e, void 0]))
      }
    );
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
}
const je = {
  checkbox: Fo,
  checkboxWrapper: $o,
  checkboxText: Bn,
  checkboxInput: Nn,
  horizontal_left: "justify-content--start",
  horizontal_center: "justify-content--center",
  horizontal_right: "justify-content--end"
}, gr = 16, Pt = 6, mr = Pt * 2, pr = 20;
class Qn extends Ce {
  constructor({ onCheckboxClick: e }) {
    super(), e && (this.onCheckboxClick = e.bind(this));
  }
  onCheckboxClick(e, t, n) {
  }
  render(e, t, n) {
    const s = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.classList.add(zo, je.checkbox), r.classList.add(Po, je.checkboxWrapper), i.type = "checkbox", i.className = je.checkboxInput, r.appendChild(i), n.icon && r.appendChild(Un(ct(n.icon))), n.label) {
      const l = document.createElement("span");
      l.className = `${Do} ${je.checkboxText}`, l.innerText = n.label, r.appendChild(l);
    }
    return n.horizontalAlign && s.classList.add(je[`horizontal_${n.horizontalAlign}`]), s.appendChild(r), i.checked = n.text === "true", r.onkeydown = (l) => l.preventDefault(), i.onchange = () => {
      const l = i.checked, u = l ? "true" : "false", { commandManager: d } = n.gridStore, c = new Se(n.gridStore.commandContext, [e, t, { text: u }]);
      c.onUndo = () => {
        this.onCheckboxClick(e, t, !l);
      }, c.onExecute = () => {
        this.onCheckboxClick(e, t, l);
      }, d.pushCommandBlock(new Ae(
        "Change checkbox",
        c
      )), n.text = u, this.onCheckboxClick(e, t, l);
    }, s;
  }
  getCellInnerWidth(e, t, n) {
    const s = jt(e, t), r = n.label ? Pt + s.calculateWidth(n.label) : 0, i = n.icon ? Pt + pr : 0;
    return gr + mr + r + i + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "checkbox";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
function Za(o) {
  const e = new Qn(o ?? {});
  return () => e;
}
const wr = !1, Cr = (o, e) => o === e, ue = Symbol("solid-proxy"), _r = typeof Proxy == "function", $t = Symbol("solid-track"), ht = {
  equals: Cr
};
let eo = so;
const pe = 1, ft = 2, to = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var W = null;
let kt = null, Rr = null, V = null, ee = null, ge = null, _t = 0;
function it(o, e) {
  const t = V, n = W, s = o.length === 0, r = e === void 0 ? n : e, i = s ? to : {
    owned: null,
    cleanups: null,
    context: r ? r.context : null,
    owner: r
  }, l = s ? o : () => o(() => ae(() => Ye(i)));
  W = i, V = null;
  try {
    return $e(l, !0);
  } finally {
    V = t, W = n;
  }
}
function de(o, e) {
  e = e ? Object.assign({}, ht, e) : ht;
  const t = {
    value: o,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(t.value)), oo(t, s));
  return [no.bind(t), n];
}
function yr(o, e, t) {
  const n = Rt(o, e, !0, pe);
  Pe(n);
}
function j(o, e, t) {
  const n = Rt(o, e, !1, pe);
  Pe(n);
}
function xr(o, e, t) {
  eo = Er;
  const n = Rt(o, e, !1, pe);
  n.user = !0, ge ? ge.push(n) : Pe(n);
}
function se(o, e, t) {
  t = t ? Object.assign({}, ht, t) : ht;
  const n = Rt(o, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = t.equals || void 0, Pe(n), no.bind(n);
}
function br(o) {
  return $e(o, !1);
}
function ae(o) {
  if (V === null) return o();
  const e = V;
  V = null;
  try {
    return o();
  } finally {
    V = e;
  }
}
function Fe(o) {
  xr(() => ae(o));
}
function ke(o) {
  return W === null || (W.cleanups === null ? W.cleanups = [o] : W.cleanups.push(o)), o;
}
function Dt() {
  return V;
}
const [Ya, Ja] = /* @__PURE__ */ de(!1);
function Sr(o, e) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: Tr(t),
    defaultValue: o
  };
}
function vr(o) {
  let e;
  return W && W.context && (e = W.context[o.id]) !== void 0 ? e : o.defaultValue;
}
function Kt(o) {
  const e = se(o), t = se(() => Wt(e()));
  return t.toArray = () => {
    const n = t();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, t;
}
function no() {
  if (this.sources && this.state)
    if (this.state === pe) Pe(this);
    else {
      const o = ee;
      ee = null, $e(() => mt(this), !1), ee = o;
    }
  if (V) {
    const o = this.observers ? this.observers.length : 0;
    V.sources ? (V.sources.push(this), V.sourceSlots.push(o)) : (V.sources = [this], V.sourceSlots = [o]), this.observers ? (this.observers.push(V), this.observerSlots.push(V.sources.length - 1)) : (this.observers = [V], this.observerSlots = [V.sources.length - 1]);
  }
  return this.value;
}
function oo(o, e, t) {
  let n = o.value;
  return (!o.comparator || !o.comparator(n, e)) && (o.value = e, o.observers && o.observers.length && $e(() => {
    for (let s = 0; s < o.observers.length; s += 1) {
      const r = o.observers[s], i = kt && kt.running;
      i && kt.disposed.has(r), (i ? !r.tState : !r.state) && (r.pure ? ee.push(r) : ge.push(r), r.observers && ro(r)), i || (r.state = pe);
    }
    if (ee.length > 1e6)
      throw ee = [], new Error();
  }, !1)), e;
}
function Pe(o) {
  if (!o.fn) return;
  Ye(o);
  const e = _t;
  kr(o, o.value, e);
}
function kr(o, e, t) {
  let n;
  const s = W, r = V;
  V = W = o;
  try {
    n = o.fn(e);
  } catch (i) {
    return o.pure && (o.state = pe, o.owned && o.owned.forEach(Ye), o.owned = null), o.updatedAt = t + 1, io(i);
  } finally {
    V = r, W = s;
  }
  (!o.updatedAt || o.updatedAt <= t) && (o.updatedAt != null && "observers" in o ? oo(o, n) : o.value = n, o.updatedAt = t);
}
function Rt(o, e, t, n = pe, s) {
  const r = {
    fn: o,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: W,
    context: W ? W.context : null,
    pure: t
  };
  return W === null || W !== to && (W.owned ? W.owned.push(r) : W.owned = [r]), r;
}
function gt(o) {
  if (o.state === 0) return;
  if (o.state === ft) return mt(o);
  if (o.suspense && ae(o.suspense.inFallback)) return o.suspense.effects.push(o);
  const e = [o];
  for (; (o = o.owner) && (!o.updatedAt || o.updatedAt < _t); )
    o.state && e.push(o);
  for (let t = e.length - 1; t >= 0; t--)
    if (o = e[t], o.state === pe)
      Pe(o);
    else if (o.state === ft) {
      const n = ee;
      ee = null, $e(() => mt(o, e[0]), !1), ee = n;
    }
}
function $e(o, e) {
  if (ee) return o();
  let t = !1;
  e || (ee = []), ge ? t = !0 : ge = [], _t++;
  try {
    const n = o();
    return Ir(t), n;
  } catch (n) {
    t || (ge = null), ee = null, io(n);
  }
}
function Ir(o) {
  if (ee && (so(ee), ee = null), o) return;
  const e = ge;
  ge = null, e.length && $e(() => eo(e), !1);
}
function so(o) {
  for (let e = 0; e < o.length; e++) gt(o[e]);
}
function Er(o) {
  let e, t = 0;
  for (e = 0; e < o.length; e++) {
    const n = o[e];
    n.user ? o[t++] = n : gt(n);
  }
  for (e = 0; e < t; e++) gt(o[e]);
}
function mt(o, e) {
  o.state = 0;
  for (let t = 0; t < o.sources.length; t += 1) {
    const n = o.sources[t];
    if (n.sources) {
      const s = n.state;
      s === pe ? n !== e && (!n.updatedAt || n.updatedAt < _t) && gt(n) : s === ft && mt(n, e);
    }
  }
}
function ro(o) {
  for (let e = 0; e < o.observers.length; e += 1) {
    const t = o.observers[e];
    t.state || (t.state = ft, t.pure ? ee.push(t) : ge.push(t), t.observers && ro(t));
  }
}
function Ye(o) {
  let e;
  if (o.sources)
    for (; o.sources.length; ) {
      const t = o.sources.pop(), n = o.sourceSlots.pop(), s = t.observers;
      if (s && s.length) {
        const r = s.pop(), i = t.observerSlots.pop();
        n < s.length && (r.sourceSlots[i] = n, s[n] = r, t.observerSlots[n] = i);
      }
    }
  if (o.tOwned) {
    for (e = o.tOwned.length - 1; e >= 0; e--) Ye(o.tOwned[e]);
    delete o.tOwned;
  }
  if (o.owned) {
    for (e = o.owned.length - 1; e >= 0; e--) Ye(o.owned[e]);
    o.owned = null;
  }
  if (o.cleanups) {
    for (e = o.cleanups.length - 1; e >= 0; e--) o.cleanups[e]();
    o.cleanups = null;
  }
  o.state = 0;
}
function Mr(o) {
  return o instanceof Error ? o : new Error(typeof o == "string" ? o : "Unknown error", {
    cause: o
  });
}
function io(o, e = W) {
  throw Mr(o);
}
function Wt(o) {
  if (typeof o == "function" && !o.length) return Wt(o());
  if (Array.isArray(o)) {
    const e = [];
    for (let t = 0; t < o.length; t++) {
      const n = Wt(o[t]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return o;
}
function Tr(o, e) {
  return function(n) {
    let s;
    return j(() => s = ae(() => (W.context = {
      ...W.context,
      [o]: n.value
    }, Kt(() => n.children))), void 0), s;
  };
}
const Lr = Symbol("fallback");
function hn(o) {
  for (let e = 0; e < o.length; e++) o[e]();
}
function Hr(o, e, t = {}) {
  let n = [], s = [], r = [], i = 0, l = e.length > 1 ? [] : null;
  return ke(() => hn(r)), () => {
    let u = o() || [], d = u.length, c, a;
    return u[$t], ae(() => {
      let f, C, T, S, I, g, x, R, v;
      if (d === 0)
        i !== 0 && (hn(r), r = [], n = [], s = [], i = 0, l && (l = [])), t.fallback && (n = [Lr], s[0] = it((p) => (r[0] = p, t.fallback())), i = 1);
      else if (i === 0) {
        for (s = new Array(d), a = 0; a < d; a++)
          n[a] = u[a], s[a] = it(h);
        i = d;
      } else {
        for (T = new Array(d), S = new Array(d), l && (I = new Array(d)), g = 0, x = Math.min(i, d); g < x && n[g] === u[g]; g++) ;
        for (x = i - 1, R = d - 1; x >= g && R >= g && n[x] === u[R]; x--, R--)
          T[R] = s[x], S[R] = r[x], l && (I[R] = l[x]);
        for (f = /* @__PURE__ */ new Map(), C = new Array(R + 1), a = R; a >= g; a--)
          v = u[a], c = f.get(v), C[a] = c === void 0 ? -1 : c, f.set(v, a);
        for (c = g; c <= x; c++)
          v = n[c], a = f.get(v), a !== void 0 && a !== -1 ? (T[a] = s[c], S[a] = r[c], l && (I[a] = l[c]), a = C[a], f.set(v, a)) : r[c]();
        for (a = g; a < d; a++)
          a in T ? (s[a] = T[a], r[a] = S[a], l && (l[a] = I[a], l[a](a))) : s[a] = it(h);
        s = s.slice(0, i = d), n = u.slice(0);
      }
      return s;
    });
    function h(f) {
      if (r[a] = f, l) {
        const [C, T] = de(a);
        return l[a] = T, e(u[a], C);
      }
      return e(u[a]);
    }
  };
}
function A(o, e) {
  return ae(() => o(e || {}));
}
function nt() {
  return !0;
}
const Or = {
  get(o, e, t) {
    return e === ue ? t : o.get(e);
  },
  has(o, e) {
    return e === ue ? !0 : o.has(e);
  },
  set: nt,
  deleteProperty: nt,
  getOwnPropertyDescriptor(o, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return o.get(e);
      },
      set: nt,
      deleteProperty: nt
    };
  },
  ownKeys(o) {
    return o.keys();
  }
};
function It(o) {
  return (o = typeof o == "function" ? o() : o) ? o : {};
}
function Ar() {
  for (let o = 0, e = this.length; o < e; ++o) {
    const t = this[o]();
    if (t !== void 0) return t;
  }
}
function pt(...o) {
  let e = !1;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    e = e || !!l && ue in l, o[i] = typeof l == "function" ? (e = !0, se(l)) : l;
  }
  if (_r && e)
    return new Proxy({
      get(i) {
        for (let l = o.length - 1; l >= 0; l--) {
          const u = It(o[l])[i];
          if (u !== void 0) return u;
        }
      },
      has(i) {
        for (let l = o.length - 1; l >= 0; l--)
          if (i in It(o[l])) return !0;
        return !1;
      },
      keys() {
        const i = [];
        for (let l = 0; l < o.length; l++) i.push(...Object.keys(It(o[l])));
        return [...new Set(i)];
      }
    }, Or);
  const t = {}, n = /* @__PURE__ */ Object.create(null);
  for (let i = o.length - 1; i >= 0; i--) {
    const l = o[i];
    if (!l) continue;
    const u = Object.getOwnPropertyNames(l);
    for (let d = u.length - 1; d >= 0; d--) {
      const c = u[d];
      if (c === "__proto__" || c === "constructor") continue;
      const a = Object.getOwnPropertyDescriptor(l, c);
      if (!n[c])
        n[c] = a.get ? {
          enumerable: !0,
          configurable: !0,
          get: Ar.bind(t[c] = [a.get.bind(l)])
        } : a.value !== void 0 ? a : void 0;
      else {
        const h = t[c];
        h && (a.get ? h.push(a.get.bind(l)) : a.value !== void 0 && h.push(() => a.value));
      }
    }
  }
  const s = {}, r = Object.keys(n);
  for (let i = r.length - 1; i >= 0; i--) {
    const l = r[i], u = n[l];
    u && u.get ? Object.defineProperty(s, l, u) : s[l] = u ? u.value : void 0;
  }
  return s;
}
const lo = (o) => `Stale read from <${o}>.`;
function qt(o) {
  const e = "fallback" in o && {
    fallback: () => o.fallback
  };
  return se(Hr(() => o.each, o.children, e || void 0));
}
function _e(o) {
  const e = o.keyed, t = se(() => o.when, void 0, void 0), n = e ? t : se(t, void 0, {
    equals: (s, r) => !s == !r
  });
  return se(() => {
    const s = n();
    if (s) {
      const r = o.children;
      return typeof r == "function" && r.length > 0 ? ae(() => r(e ? s : () => {
        if (!ae(n)) throw lo("Show");
        return t();
      })) : r;
    }
    return o.fallback;
  }, void 0, void 0);
}
function Xt(o) {
  const e = Kt(() => o.children), t = se(() => {
    const n = e(), s = Array.isArray(n) ? n : [n];
    let r = () => {
    };
    for (let i = 0; i < s.length; i++) {
      const l = i, u = s[i], d = r, c = se(() => d() ? void 0 : u.when, void 0, void 0), a = u.keyed ? c : se(c, void 0, {
        equals: (h, f) => !h == !f
      });
      r = () => d() || (a() ? [l, c, u] : void 0);
    }
    return r;
  });
  return se(() => {
    const n = t()();
    if (!n) return o.fallback;
    const [s, r, i] = n, l = i.children;
    return typeof l == "function" && l.length > 0 ? ae(() => l(i.keyed ? r() : () => {
      if (ae(t)()?.[0] !== s) throw lo("Match");
      return r();
    })) : l;
  }, void 0, void 0);
}
function we(o) {
  return o;
}
const zr = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Fr = /* @__PURE__ */ new Set(["className", "value", "readOnly", "noValidate", "formNoValidate", "isMap", "noModule", "playsInline", ...zr]), Pr = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), $r = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), Dr = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  novalidate: {
    $: "noValidate",
    FORM: 1
  },
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function Wr(o, e) {
  const t = Dr[o];
  return typeof t == "object" ? t[e] ? t.$ : void 0 : t;
}
const Nr = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
function Br(o, e, t) {
  let n = t.length, s = e.length, r = n, i = 0, l = 0, u = e[s - 1].nextSibling, d = null;
  for (; i < s || l < r; ) {
    if (e[i] === t[l]) {
      i++, l++;
      continue;
    }
    for (; e[s - 1] === t[r - 1]; )
      s--, r--;
    if (s === i) {
      const c = r < n ? l ? t[l - 1].nextSibling : t[r - l] : u;
      for (; l < r; ) o.insertBefore(t[l++], c);
    } else if (r === l)
      for (; i < s; )
        (!d || !d.has(e[i])) && e[i].remove(), i++;
    else if (e[i] === t[r - 1] && t[l] === e[s - 1]) {
      const c = e[--s].nextSibling;
      o.insertBefore(t[l++], e[i++].nextSibling), o.insertBefore(t[--r], c), e[s] = t[r];
    } else {
      if (!d) {
        d = /* @__PURE__ */ new Map();
        let a = l;
        for (; a < r; ) d.set(t[a], a++);
      }
      const c = d.get(e[i]);
      if (c != null)
        if (l < c && c < r) {
          let a = i, h = 1, f;
          for (; ++a < s && a < r && !((f = d.get(e[a])) == null || f !== c + h); )
            h++;
          if (h > c - l) {
            const C = e[i];
            for (; l < c; ) o.insertBefore(t[l++], C);
          } else o.replaceChild(t[l++], e[i++]);
        } else i++;
      else e[i++].remove();
    }
  }
}
const fn = "_$DX_DELEGATE";
function Qa(o, e, t, n = {}) {
  let s;
  return it((r) => {
    s = r, e === document ? o() : G(e, o(), e.firstChild ? null : void 0, t);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function Y(o, e, t, n) {
  let s;
  const r = () => {
    const l = document.createElement("template");
    return l.innerHTML = o, l.content.firstChild;
  }, i = () => (s || (s = r())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function yt(o, e = window.document) {
  const t = e[fn] || (e[fn] = /* @__PURE__ */ new Set());
  for (let n = 0, s = o.length; n < s; n++) {
    const r = o[n];
    t.has(r) || (t.add(r), e.addEventListener(r, qr));
  }
}
function ce(o, e, t) {
  t == null ? o.removeAttribute(e) : o.setAttribute(e, t);
}
function Vr(o, e, t) {
  t ? o.setAttribute(e, "") : o.removeAttribute(e);
}
function N(o, e) {
  e == null ? o.removeAttribute("class") : o.className = e;
}
function xt(o, e, t, n) {
  if (n)
    Array.isArray(t) ? (o[`$$${e}`] = t[0], o[`$$${e}Data`] = t[1]) : o[`$$${e}`] = t;
  else if (Array.isArray(t)) {
    const s = t[0];
    o.addEventListener(e, t[0] = (r) => s.call(o, t[1], r));
  } else o.addEventListener(e, t, typeof t != "function" && t);
}
function ao(o, e, t = {}) {
  const n = Object.keys(e || {}), s = Object.keys(t);
  let r, i;
  for (r = 0, i = s.length; r < i; r++) {
    const l = s[r];
    !l || l === "undefined" || e[l] || (gn(o, l, !1), delete t[l]);
  }
  for (r = 0, i = n.length; r < i; r++) {
    const l = n[r], u = !!e[l];
    !l || l === "undefined" || t[l] === u || !u || (gn(o, l, !0), t[l] = u);
  }
  return t;
}
function Gr(o, e, t) {
  if (!e) return t ? ce(o, "style") : e;
  const n = o.style;
  if (typeof e == "string") return n.cssText = e;
  typeof t == "string" && (n.cssText = t = void 0), t || (t = {}), e || (e = {});
  let s, r;
  for (r in t)
    e[r] == null && n.removeProperty(r), delete t[r];
  for (r in e)
    s = e[r], s !== t[r] && (n.setProperty(r, s), t[r] = s);
  return t;
}
function jr(o, e = {}, t, n) {
  const s = {};
  return j(() => s.children = Je(o, e.children, s.children)), j(() => typeof e.ref == "function" && me(e.ref, o)), j(() => Ur(o, e, t, !0, s, !0)), s;
}
function me(o, e, t) {
  return ae(() => o(e, t));
}
function G(o, e, t, n) {
  if (t !== void 0 && !n && (n = []), typeof e != "function") return Je(o, e, n, t);
  j((s) => Je(o, e(), s, t), n);
}
function Ur(o, e, t, n, s = {}, r = !1) {
  e || (e = {});
  for (const i in s)
    if (!(i in e)) {
      if (i === "children") continue;
      s[i] = mn(o, i, null, s[i], t, r, e);
    }
  for (const i in e) {
    if (i === "children")
      continue;
    const l = e[i];
    s[i] = mn(o, i, l, s[i], t, r, e);
  }
}
function Kr(o) {
  return o.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function gn(o, e, t) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, r = n.length; s < r; s++) o.classList.toggle(n[s], t);
}
function mn(o, e, t, n, s, r, i) {
  let l, u, d, c, a;
  if (e === "style") return Gr(o, t, n);
  if (e === "classList") return ao(o, t, n);
  if (t === n) return n;
  if (e === "ref")
    r || t(o);
  else if (e.slice(0, 3) === "on:") {
    const h = e.slice(3);
    n && o.removeEventListener(h, n, typeof n != "function" && n), t && o.addEventListener(h, t, typeof t != "function" && t);
  } else if (e.slice(0, 10) === "oncapture:") {
    const h = e.slice(10);
    n && o.removeEventListener(h, n, !0), t && o.addEventListener(h, t, !0);
  } else if (e.slice(0, 2) === "on") {
    const h = e.slice(2).toLowerCase(), f = Nr.has(h);
    if (!f && n) {
      const C = Array.isArray(n) ? n[0] : n;
      o.removeEventListener(h, C);
    }
    (f || t) && (xt(o, h, t, f), f && yt([h]));
  } else e.slice(0, 5) === "attr:" ? ce(o, e.slice(5), t) : e.slice(0, 5) === "bool:" ? Vr(o, e.slice(5), t) : (a = e.slice(0, 5) === "prop:") || (d = Pr.has(e)) || (c = Wr(e, o.tagName)) || (u = Fr.has(e)) || (l = o.nodeName.includes("-") || "is" in i) ? (a && (e = e.slice(5), u = !0), e === "class" || e === "className" ? N(o, t) : l && !u && !d ? o[Kr(e)] = t : o[c || e] = t) : ce(o, $r[e] || e, t);
  return t;
}
function qr(o) {
  let e = o.target;
  const t = `$$${o.type}`, n = o.target, s = o.currentTarget, r = (u) => Object.defineProperty(o, "target", {
    configurable: !0,
    value: u
  }), i = () => {
    const u = e[t];
    if (u && !e.disabled) {
      const d = e[`${t}Data`];
      if (d !== void 0 ? u.call(e, d, o) : u.call(e, o), o.cancelBubble) return;
    }
    return e.host && typeof e.host != "string" && !e.host._$host && e.contains(o.target) && r(e.host), !0;
  }, l = () => {
    for (; i() && (e = e._$host || e.parentNode || e.host); ) ;
  };
  if (Object.defineProperty(o, "currentTarget", {
    configurable: !0,
    get() {
      return e || document;
    }
  }), o.composedPath) {
    const u = o.composedPath();
    r(u[0]);
    for (let d = 0; d < u.length - 2 && (e = u[d], !!i()); d++) {
      if (e._$host) {
        e = e._$host, l();
        break;
      }
      if (e.parentNode === s)
        break;
    }
  } else l();
  r(n);
}
function Je(o, e, t, n, s) {
  for (; typeof t == "function"; ) t = t();
  if (e === t) return t;
  const r = typeof e, i = n !== void 0;
  if (o = i && t[0] && t[0].parentNode || o, r === "string" || r === "number") {
    if (r === "number" && (e = e.toString(), e === t))
      return t;
    if (i) {
      let l = t[0];
      l && l.nodeType === 3 ? l.data !== e && (l.data = e) : l = document.createTextNode(e), t = Me(o, t, n, l);
    } else
      t !== "" && typeof t == "string" ? t = o.firstChild.data = e : t = o.textContent = e;
  } else if (e == null || r === "boolean")
    t = Me(o, t, n);
  else {
    if (r === "function")
      return j(() => {
        let l = e();
        for (; typeof l == "function"; ) l = l();
        t = Je(o, l, t, n);
      }), () => t;
    if (Array.isArray(e)) {
      const l = [], u = t && Array.isArray(t);
      if (Nt(l, e, t, s))
        return j(() => t = Je(o, l, t, n, !0)), () => t;
      if (l.length === 0) {
        if (t = Me(o, t, n), i) return t;
      } else u ? t.length === 0 ? pn(o, l, n) : Br(o, t, l) : (t && Me(o), pn(o, l));
      t = l;
    } else if (e.nodeType) {
      if (Array.isArray(t)) {
        if (i) return t = Me(o, t, n, e);
        Me(o, t, null, e);
      } else t == null || t === "" || !o.firstChild ? o.appendChild(e) : o.replaceChild(e, o.firstChild);
      t = e;
    }
  }
  return t;
}
function Nt(o, e, t, n) {
  let s = !1;
  for (let r = 0, i = e.length; r < i; r++) {
    let l = e[r], u = t && t[o.length], d;
    if (!(l == null || l === !0 || l === !1)) if ((d = typeof l) == "object" && l.nodeType)
      o.push(l);
    else if (Array.isArray(l))
      s = Nt(o, l, u) || s;
    else if (d === "function")
      if (n) {
        for (; typeof l == "function"; ) l = l();
        s = Nt(o, Array.isArray(l) ? l : [l], Array.isArray(u) ? u : [u]) || s;
      } else
        o.push(l), s = !0;
    else {
      const c = String(l);
      u && u.nodeType === 3 && u.data === c ? o.push(u) : o.push(document.createTextNode(c));
    }
  }
  return s;
}
function pn(o, e, t = null) {
  for (let n = 0, s = e.length; n < s; n++) o.insertBefore(e[n], t);
}
function Me(o, e, t, n) {
  if (t === void 0) return o.textContent = "";
  const s = n || document.createTextNode("");
  if (e.length) {
    let r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
      const l = e[i];
      if (s !== l) {
        const u = l.parentNode === o;
        !r && !i ? u ? o.replaceChild(s, l) : o.insertBefore(s, t) : u && l.remove();
      } else r = !0;
    }
  } else o.insertBefore(s, t);
  return [s];
}
function Te(o, e, t) {
  let n = t.initialDeps ?? [], s;
  function r() {
    var i, l, u, d;
    let c;
    t.key && ((i = t.debug) != null && i.call(t)) && (c = Date.now());
    const a = o();
    if (!(a.length !== n.length || a.some((C, T) => n[T] !== C)))
      return s;
    n = a;
    let f;
    if (t.key && ((l = t.debug) != null && l.call(t)) && (f = Date.now()), s = e(...a), t.key && ((u = t.debug) != null && u.call(t))) {
      const C = Math.round((Date.now() - c) * 100) / 100, T = Math.round((Date.now() - f) * 100) / 100, S = T / 16, I = (g, x) => {
        for (g = String(g); g.length < x; )
          g = " " + g;
        return g;
      };
      console.info(
        `%c⏱ ${I(T, 5)} /${I(C, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * S, 120)
        )}deg 100% 31%);`,
        t?.key
      );
    }
    return (d = t?.onChange) == null || d.call(t, s), s;
  }
  return r.updateDeps = (i) => {
    n = i;
  }, r;
}
function wn(o, e) {
  if (o === void 0)
    throw new Error("Unexpected undefined");
  return o;
}
const Xr = (o, e) => Math.abs(o - e) < 1.01, Zr = (o, e, t) => {
  let n;
  return function(...s) {
    o.clearTimeout(n), n = o.setTimeout(() => e.apply(this, s), t);
  };
}, Cn = (o) => {
  const { offsetWidth: e, offsetHeight: t } = o;
  return { width: e, height: t };
}, Yr = (o) => o, Jr = (o) => {
  const e = Math.max(o.startIndex - o.overscan, 0), t = Math.min(o.endIndex + o.overscan, o.count - 1), n = [];
  for (let s = e; s <= t; s++)
    n.push(s);
  return n;
}, Qr = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  const s = (i) => {
    const { width: l, height: u } = i;
    e({ width: Math.round(l), height: Math.round(u) });
  };
  if (s(Cn(t)), !n.ResizeObserver)
    return () => {
    };
  const r = new n.ResizeObserver((i) => {
    const l = () => {
      const u = i[0];
      if (u?.borderBoxSize) {
        const d = u.borderBoxSize[0];
        if (d) {
          s({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      s(Cn(t));
    };
    o.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return r.observe(t, { box: "border-box" }), () => {
    r.unobserve(t);
  };
}, _n = {
  passive: !0
}, Rn = typeof window > "u" ? !0 : "onscrollend" in window, ei = (o, e) => {
  const t = o.scrollElement;
  if (!t)
    return;
  const n = o.targetWindow;
  if (!n)
    return;
  let s = 0;
  const r = o.options.useScrollendEvent && Rn ? () => {
  } : Zr(
    n,
    () => {
      e(s, !1);
    },
    o.options.isScrollingResetDelay
  ), i = (c) => () => {
    const { horizontal: a, isRtl: h } = o.options;
    s = a ? t.scrollLeft * (h && -1 || 1) : t.scrollTop, r(), e(s, c);
  }, l = i(!0), u = i(!1);
  u(), t.addEventListener("scroll", l, _n);
  const d = o.options.useScrollendEvent && Rn;
  return d && t.addEventListener("scrollend", u, _n), () => {
    t.removeEventListener("scroll", l), d && t.removeEventListener("scrollend", u);
  };
}, ti = (o, e, t) => {
  if (e?.borderBoxSize) {
    const n = e.borderBoxSize[0];
    if (n)
      return Math.round(
        n[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return o[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, ni = (o, {
  adjustments: e = 0,
  behavior: t
}, n) => {
  var s, r;
  const i = o + e;
  (r = (s = n.scrollElement) == null ? void 0 : s.scrollTo) == null || r.call(s, {
    [n.options.horizontal ? "left" : "top"]: i,
    behavior: t
  });
};
class oi {
  constructor(e) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const n = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((r) => {
          const i = () => {
            this._measureElement(r.target, r);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = n()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var r;
          return (r = n()) == null ? void 0 : r.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var r;
          return (r = n()) == null ? void 0 : r.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([n, s]) => {
        typeof s > "u" && delete t[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Yr,
        rangeExtractor: Jr,
        onChange: () => {
        },
        measureElement: ti,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...t
      };
    }, this.notify = (t) => {
      var n, s;
      (s = (n = this.options).onChange) == null || s.call(n, this, t);
    }, this.maybeNotify = Te(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: !1,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((s) => {
          this.observer.observe(s);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (s) => {
            this.scrollRect = s, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (s, r) => {
            this.scrollAdjustments = 0, this.scrollDirection = r ? this.getScrollOffset() < s ? "forward" : "backward" : null, this.scrollOffset = s, this.isScrolling = r, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, n) => {
      const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let i = n - 1; i >= 0; i--) {
        const l = t[i];
        if (s.has(l.lane))
          continue;
        const u = r.get(
          l.lane
        );
        if (u == null || l.end > u.end ? r.set(l.lane, l) : l.end < u.end && s.set(l.lane, !0), s.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = Te(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, n, s, r, i) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: n,
        scrollMargin: s,
        getItemKey: r,
        enabled: i
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Te(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: n, scrollMargin: s, getItemKey: r, enabled: i }, l) => {
        if (!i)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const d = this.measurementsCache.slice(0, u);
        for (let c = u; c < t; c++) {
          const a = r(c), h = this.options.lanes === 1 ? d[c - 1] : this.getFurthestMeasurement(d, c), f = h ? h.end + this.options.gap : n + s, C = l.get(a), T = typeof C == "number" ? C : this.options.estimateSize(c), S = f + T, I = h ? h.lane : c % this.options.lanes;
          d[c] = {
            index: c,
            start: f,
            size: T,
            end: S,
            key: a,
            lane: I
          };
        }
        return this.measurementsCache = d, d;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.calculateRange = Te(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, n, s, r) => this.range = t.length > 0 && n > 0 ? si({
        measurements: t,
        outerSize: n,
        scrollOffset: s,
        lanes: r
      }) : null,
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Te(
      () => {
        let t = null, n = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, n = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, n]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          n
        ];
      },
      (t, n, s, r, i) => r === null || i === null ? [] : t({
        startIndex: r,
        endIndex: i,
        overscan: n,
        count: s
      }),
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const n = this.options.indexAttribute, s = t.getAttribute(n);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, n) => {
      const s = this.indexFromElement(t), r = this.measurementsCache[s];
      if (!r)
        return;
      const i = r.key, l = this.elementsCache.get(i);
      l !== t && (l && this.observer.unobserve(l), this.observer.observe(t), this.elementsCache.set(i, t)), t.isConnected && this.resizeItem(s, this.options.measureElement(t, n, this));
    }, this.resizeItem = (t, n) => {
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const r = this.itemSizeCache.get(s.key) ?? s.size, i = n - r;
      i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += i,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, n)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((n, s) => {
          n.isConnected || (this.observer.unobserve(n), this.elementsCache.delete(s));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = Te(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, n) => {
        const s = [];
        for (let r = 0, i = t.length; r < i; r++) {
          const l = t[r], u = n[l];
          s.push(u);
        }
        return s;
      },
      {
        key: !1,
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return wn(
          n[co(
            0,
            n.length - 1,
            (s) => wn(n[s]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, n, s = 0) => {
      const r = this.getSize(), i = this.getScrollOffset();
      n === "auto" && (n = t >= i + r ? "end" : "start"), n === "center" ? t += (s - r) / 2 : n === "end" && (t -= r);
      const l = this.getTotalSize() + this.options.scrollMargin - r;
      return Math.max(Math.min(l, t), 0);
    }, this.getOffsetForIndex = (t, n = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.measurementsCache[t];
      if (!s)
        return;
      const r = this.getSize(), i = this.getScrollOffset();
      if (n === "auto")
        if (s.end >= i + r - this.options.scrollPaddingEnd)
          n = "end";
        else if (s.start <= i + this.options.scrollPaddingStart)
          n = "start";
        else
          return [i, n];
      const l = n === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, n, s.size),
        n
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (t, { align: n = "start", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, n), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (t, { align: n = "auto", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), t = Math.max(0, Math.min(t, this.options.count - 1));
      let r = 0;
      const i = 10, l = (d) => {
        if (!this.targetWindow) return;
        const c = this.getOffsetForIndex(t, d);
        if (!c) {
          console.warn("Failed to get offset for index:", t);
          return;
        }
        const [a, h] = c;
        this._scrollToOffset(a, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const f = this.getScrollOffset(), C = this.getOffsetForIndex(t, h);
          if (!C) {
            console.warn("Failed to get offset for index:", t);
            return;
          }
          Xr(C[0], f) || u(h);
        });
      }, u = (d) => {
        this.targetWindow && (r++, r < i ? this.targetWindow.requestAnimationFrame(() => l(d)) : console.warn(
          `Failed to scroll to index ${t} after ${i} attempts.`
        ));
      };
      l(n);
    }, this.scrollBy = (t, { behavior: n } = {}) => {
      n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var t;
      const n = this.getMeasurements();
      let s;
      if (n.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = ((t = n[n.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const r = Array(this.options.lanes).fill(null);
        let i = n.length - 1;
        for (; i >= 0 && r.some((l) => l === null); ) {
          const l = n[i];
          r[l.lane] === null && (r[l.lane] = l.end), i--;
        }
        s = Math.max(...r.filter((l) => l !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: n,
      behavior: s
    }) => {
      this.options.scrollToFn(t, { behavior: s, adjustments: n }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(e);
  }
}
const co = (o, e, t, n) => {
  for (; o <= e; ) {
    const s = (o + e) / 2 | 0, r = t(s);
    if (r < n)
      o = s + 1;
    else if (r > n)
      e = s - 1;
    else
      return s;
  }
  return o > 0 ? o - 1 : 0;
};
function si({
  measurements: o,
  outerSize: e,
  scrollOffset: t,
  lanes: n
}) {
  const s = o.length - 1, r = (u) => o[u].start;
  if (o.length <= n)
    return {
      startIndex: 0,
      endIndex: s
    };
  let i = co(
    0,
    s,
    r,
    t
  ), l = i;
  if (n === 1)
    for (; l < s && o[l].end < t + e; )
      l++;
  else if (n > 1) {
    const u = Array(n).fill(0);
    for (; l < s && u.some((c) => c < t + e); ) {
      const c = o[l];
      u[c.lane] = c.end, l++;
    }
    const d = Array(n).fill(t + e);
    for (; i >= 0 && d.some((c) => c >= t); ) {
      const c = o[i];
      d[c.lane] = c.start, i--;
    }
    i = Math.max(0, i - i % n), l = Math.min(s, l + (n - 1 - l % n));
  }
  return { startIndex: i, endIndex: l };
}
const Bt = Symbol("store-raw"), Oe = Symbol("store-node"), he = Symbol("store-has"), uo = Symbol("store-self");
function ho(o) {
  let e = o[ue];
  if (!e && (Object.defineProperty(o, ue, {
    value: e = new Proxy(o, li)
  }), !Array.isArray(o))) {
    const t = Object.keys(o), n = Object.getOwnPropertyDescriptors(o);
    for (let s = 0, r = t.length; s < r; s++) {
      const i = t[s];
      n[i].get && Object.defineProperty(o, i, {
        enumerable: n[i].enumerable,
        get: n[i].get.bind(e)
      });
    }
  }
  return e;
}
function Re(o) {
  let e;
  return o != null && typeof o == "object" && (o[ue] || !(e = Object.getPrototypeOf(o)) || e === Object.prototype || Array.isArray(o));
}
function ze(o, e = /* @__PURE__ */ new Set()) {
  let t, n, s, r;
  if (t = o != null && o[Bt]) return t;
  if (!Re(o) || e.has(o)) return o;
  if (Array.isArray(o)) {
    Object.isFrozen(o) ? o = o.slice(0) : e.add(o);
    for (let i = 0, l = o.length; i < l; i++)
      s = o[i], (n = ze(s, e)) !== s && (o[i] = n);
  } else {
    Object.isFrozen(o) ? o = Object.assign({}, o) : e.add(o);
    const i = Object.keys(o), l = Object.getOwnPropertyDescriptors(o);
    for (let u = 0, d = i.length; u < d; u++)
      r = i[u], !l[r].get && (s = o[r], (n = ze(s, e)) !== s && (o[r] = n));
  }
  return o;
}
function wt(o, e) {
  let t = o[e];
  return t || Object.defineProperty(o, e, {
    value: t = /* @__PURE__ */ Object.create(null)
  }), t;
}
function Qe(o, e, t) {
  if (o[e]) return o[e];
  const [n, s] = de(t, {
    equals: !1,
    internal: !0
  });
  return n.$ = s, o[e] = n;
}
function ri(o, e) {
  const t = Reflect.getOwnPropertyDescriptor(o, e);
  return !t || t.get || !t.configurable || e === ue || e === Oe || (delete t.value, delete t.writable, t.get = () => o[ue][e]), t;
}
function fo(o) {
  Dt() && Qe(wt(o, Oe), uo)();
}
function ii(o) {
  return fo(o), Reflect.ownKeys(o);
}
const li = {
  get(o, e, t) {
    if (e === Bt) return o;
    if (e === ue) return t;
    if (e === $t)
      return fo(o), t;
    const n = wt(o, Oe), s = n[e];
    let r = s ? s() : o[e];
    if (e === Oe || e === he || e === "__proto__") return r;
    if (!s) {
      const i = Object.getOwnPropertyDescriptor(o, e);
      Dt() && (typeof r != "function" || o.hasOwnProperty(e)) && !(i && i.get) && (r = Qe(n, e, r)());
    }
    return Re(r) ? ho(r) : r;
  },
  has(o, e) {
    return e === Bt || e === ue || e === $t || e === Oe || e === he || e === "__proto__" ? !0 : (Dt() && Qe(wt(o, he), e)(), e in o);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: ii,
  getOwnPropertyDescriptor: ri
};
function ne(o, e, t, n = !1) {
  if (!n && o[e] === t) return;
  const s = o[e], r = o.length;
  t === void 0 ? (delete o[e], o[he] && o[he][e] && s !== void 0 && o[he][e].$()) : (o[e] = t, o[he] && o[he][e] && s === void 0 && o[he][e].$());
  let i = wt(o, Oe), l;
  if ((l = Qe(i, e, s)) && l.$(() => t), Array.isArray(o) && o.length !== r) {
    for (let u = o.length; u < r; u++) (l = i[u]) && l.$();
    (l = Qe(i, "length", r)) && l.$(o.length);
  }
  (l = i[uo]) && l.$();
}
function go(o, e) {
  const t = Object.keys(e);
  for (let n = 0; n < t.length; n += 1) {
    const s = t[n];
    ne(o, s, e[s]);
  }
}
function ai(o, e) {
  if (typeof e == "function" && (e = e(o)), e = ze(e), Array.isArray(e)) {
    if (o === e) return;
    let t = 0, n = e.length;
    for (; t < n; t++) {
      const s = e[t];
      o[t] !== s && ne(o, t, s);
    }
    ne(o, "length", n);
  } else go(o, e);
}
function Ke(o, e, t = []) {
  let n, s = o;
  if (e.length > 1) {
    n = e.shift();
    const i = typeof n, l = Array.isArray(o);
    if (Array.isArray(n)) {
      for (let u = 0; u < n.length; u++)
        Ke(o, [n[u]].concat(e), t);
      return;
    } else if (l && i === "function") {
      for (let u = 0; u < o.length; u++)
        n(o[u], u) && Ke(o, [u].concat(e), t);
      return;
    } else if (l && i === "object") {
      const {
        from: u = 0,
        to: d = o.length - 1,
        by: c = 1
      } = n;
      for (let a = u; a <= d; a += c)
        Ke(o, [a].concat(e), t);
      return;
    } else if (e.length > 1) {
      Ke(o[n], e, [n].concat(t));
      return;
    }
    s = o[n], t = [n].concat(t);
  }
  let r = e[0];
  typeof r == "function" && (r = r(s, t), r === s) || n === void 0 && r == null || (r = ze(r), n === void 0 || Re(s) && Re(r) && !Array.isArray(r) ? go(s, r) : ne(o, n, r));
}
function ci(...[o, e]) {
  const t = ze(o || {}), n = Array.isArray(t), s = ho(t);
  function r(...i) {
    br(() => {
      n && i.length === 1 ? ai(t, i[0]) : Ke(t, i);
    });
  }
  return [s, r];
}
const Vt = Symbol("store-root");
function Le(o, e, t, n, s) {
  const r = e[t];
  if (o === r) return;
  const i = Array.isArray(o);
  if (t !== Vt && (!Re(o) || !Re(r) || i !== Array.isArray(r) || s && o[s] !== r[s])) {
    ne(e, t, o);
    return;
  }
  if (i) {
    if (o.length && r.length && (!n || s && o[0] && o[0][s] != null)) {
      let d, c, a, h, f, C, T, S;
      for (a = 0, h = Math.min(r.length, o.length); a < h && (r[a] === o[a] || s && r[a] && o[a] && r[a][s] === o[a][s]); a++)
        Le(o[a], r, a, n, s);
      const I = new Array(o.length), g = /* @__PURE__ */ new Map();
      for (h = r.length - 1, f = o.length - 1; h >= a && f >= a && (r[h] === o[f] || s && r[h] && o[f] && r[h][s] === o[f][s]); h--, f--)
        I[f] = r[h];
      if (a > f || a > h) {
        for (c = a; c <= f; c++) ne(r, c, o[c]);
        for (; c < o.length; c++)
          ne(r, c, I[c]), Le(o[c], r, c, n, s);
        r.length > o.length && ne(r, "length", o.length);
        return;
      }
      for (T = new Array(f + 1), c = f; c >= a; c--)
        C = o[c], S = s && C ? C[s] : C, d = g.get(S), T[c] = d === void 0 ? -1 : d, g.set(S, c);
      for (d = a; d <= h; d++)
        C = r[d], S = s && C ? C[s] : C, c = g.get(S), c !== void 0 && c !== -1 && (I[c] = r[d], c = T[c], g.set(S, c));
      for (c = a; c < o.length; c++)
        c in I ? (ne(r, c, I[c]), Le(o[c], r, c, n, s)) : ne(r, c, o[c]);
    } else
      for (let d = 0, c = o.length; d < c; d++)
        Le(o[d], r, d, n, s);
    r.length > o.length && ne(r, "length", o.length);
    return;
  }
  const l = Object.keys(o);
  for (let d = 0, c = l.length; d < c; d++)
    Le(o[l[d]], r, l[d], n, s);
  const u = Object.keys(r);
  for (let d = 0, c = u.length; d < c; d++)
    o[u[d]] === void 0 && ne(r, u[d], void 0);
}
function ui(o, e = {}) {
  const {
    merge: t,
    key: n = "id"
  } = e, s = ze(o);
  return (r) => {
    if (!Re(r) || !Re(s)) return s;
    const i = Le(s, {
      [Vt]: r
    }, Vt, t, n);
    return i === void 0 ? r : i;
  };
}
function di(o) {
  const e = pt(o), t = new oi(e), [n, s] = ci(t.getVirtualItems()), [r, i] = de(t.getTotalSize()), l = {
    get(d, c) {
      switch (c) {
        case "getVirtualItems":
          return () => n;
        case "getTotalSize":
          return () => r();
        default:
          return Reflect.get(d, c);
      }
    }
  }, u = new Proxy(t, l);
  return u.setOptions(e), Fe(() => {
    const d = u._didMount();
    u._willUpdate(), ke(d);
  }), yr(() => {
    u.setOptions(pt(e, o, {
      onChange: (d, c) => {
        var a;
        d._willUpdate(), s(ui(d.getVirtualItems(), {
          key: "index"
        })), i(d.getTotalSize()), (a = o.onChange) == null || a.call(o, d, c);
      }
    })), u.measure();
  }), u;
}
function mo(o) {
  return di(pt({
    observeElementRect: Qr,
    observeElementOffset: ei,
    scrollToFn: ni
  }, o));
}
var hi = /* @__PURE__ */ Y("<div><button type=button><i></i><span>");
const fi = `${No} ir-icon ir-icon--check`;
function gi(o) {
  return (() => {
    var e = hi(), t = e.firstChild, n = t.firstChild, s = n.nextSibling;
    return e.style.setProperty("position", "absolute"), e.style.setProperty("width", "100%"), t.$$click = o.onClick, t.$$clickData = o.row, N(t, Wo), N(n, fi), G(s, () => o.text), j((r) => {
      var i = {
        [Vo]: !0,
        [Bo]: o.isSelected
      }, l = o.row, u = o.value, d = `${o.top}px`, c = o.text;
      return r.e = ao(e, i, r.e), l !== r.t && ce(e, "data-row", r.t = l), u !== r.a && ce(e, "data-value", r.a = u), d !== r.o && ((r.o = d) != null ? e.style.setProperty("top", d) : e.style.removeProperty("top")), c !== r.i && ce(t, "title", r.i = c), r;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    }), e;
  })();
}
yt(["click"]);
var mi = /* @__PURE__ */ Y("<div><div>");
const pi = `${Go} ${qs.zIndex.popover} is-expanded`, wi = 26;
function ec(o) {
  const {
    items: e,
    selectedItem: t
  } = o;
  let n;
  const s = mo({
    count: o.items.length,
    getScrollElement: () => n,
    estimateSize: () => wi,
    overscan: 4
  }), r = o.refElement.offsetWidth, i = Math.max(r, o.breakWidth), l = Math.max(o.contentWidth, r);
  return Fe(() => {
    const u = Kn(o.refElement, n, "bottom-start");
    o.ref?.({
      divElement: n
    }), t && s.scrollToIndex(e.indexOf(t), {
      align: "center"
    }), ke(() => {
      u(), o.ref?.(null);
    });
  }), (() => {
    var u = mi(), d = u.firstChild, c = n;
    return typeof c == "function" ? me(c, u) : n = u, N(u, pi), `${l}px` != null ? u.style.setProperty("width", `${l}px`) : u.style.removeProperty("width"), `${i}px` != null ? u.style.setProperty("max-width", `${i}px`) : u.style.removeProperty("max-width"), N(d, jo), d.style.setProperty("position", "relative"), G(d, A(qt, {
      get each() {
        return s.getVirtualItems();
      },
      children: (a) => A(gi, {
        onClick: (h) => o.onItemClick?.(o.items[h]),
        get row() {
          return a.index;
        },
        get top() {
          return a.start;
        },
        get isSelected() {
          return o.selectedItem === o.items[a.index];
        },
        get text() {
          return o.items[a.index].text;
        },
        get value() {
          return o.items[a.index].value;
        }
      })
    })), j((a) => {
      var h = o.row, f = o.col, C = `${s.getTotalSize()}px`;
      return h !== a.e && ce(u, "data-row", a.e = h), f !== a.t && ce(u, "data-col", a.t = f), C !== a.a && ((a.a = C) != null ? d.style.setProperty("height", C) : d.style.removeProperty("height")), a;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), u;
  })();
}
const ot = { radio: Ko, radioWrapper: qo, radioInput: Xo, radioText: Zo }, Ci = 16, po = 6, _i = po * 2;
class wo extends Ce {
  _radioItemStack = [];
  constructor({ onRadioClick: e }) {
    super(), e && (this.onRadioClick = e.bind(this));
  }
  stackClickedRadio(e) {
    const t = this._radioItemStack.pop();
    t && t.data !== e.data && (t.radio.checked = !1, t.data.text = "false"), this._radioItemStack.push(e);
  }
  get lastClickedRadio() {
    return this._radioItemStack[this._radioItemStack.length - 1] ?? null;
  }
  render(e, t, n) {
    const s = document.createElement("div"), r = document.createElement("label"), i = document.createElement("input");
    if (s.setAttribute("data-has-px", ""), s.className = `${Uo} ${ot.radio}`, r.className = ot.radioWrapper, i.type = "radio", i.className = ot.radioInput, r.appendChild(i), n.label) {
      const l = document.createElement("span");
      l.className = ot.radioText, l.innerText = n.label, r.appendChild(l);
    }
    return s.appendChild(r), i.checked = n.text === "true", i.checked === !0 && this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), r.onkeydown = (l) => l.preventDefault(), i.onclick = () => {
      const l = n.gridStore.commandContext, u = new Se(l, [e, t, { text: "true" }]), d = this._radioItemStack[this._radioItemStack.length - 1];
      u.onUndo = () => {
        d && (l.setCell(d.row, d.col, { text: "true" }), this.onRadioClick(d.row, d.col));
      }, u.onExecute = () => {
        this.onRadioClick(e, t);
      }, l.commandManager.pushCommandBlock(new Ae("Click radioButton", u)), this.stackClickedRadio({ radio: i, data: n, row: e, col: t }), n.text = "true", this.onRadioClick(e, t);
    }, s;
  }
  onRadioClick(e, t) {
  }
  getCellInnerWidth(e, t, n) {
    const s = jt(e, t), r = n.label ? po + s.calculateWidth(n.label) : 0;
    return Ci + _i + r + this.getHorizontalCellPadding(n);
  }
  get renderType() {
    return "radio";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const tc = ({ onRadioClick: o }) => {
  const e = new wo({ onRadioClick: o });
  return () => e;
};
function Ri(o) {
  const e = document.createElement("div");
  if (e.setAttribute("data-has-px", ""), e.setAttribute("data-has-py", ""), e.className = Gt, o.sortOrder !== void 0) {
    const t = document.createElement("i");
    t.className = `ir-icon ${ct(o.sortOrder === "ASC" ? "sort-ascending" : "sort-descending")}`, e.appendChild(t);
  }
  if (o.icon) {
    const t = document.createElement("i");
    t.className = `ir-icon ${ct(o.icon)}`, o.iconColor && t.style.setProperty("--ir-icon-foreground-color", o.iconColor), e.appendChild(t);
  }
  if (o.text) {
    const t = document.createElement("span");
    t.innerText = o.formatter ? o.formatter(o.text) : o.text, e.appendChild(t);
  }
  return e;
}
function yi(o, e, t, n) {
  const s = document.createElement("div");
  if (s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.className = Gt, t.icon) {
    const r = document.createElement("button"), i = document.createElement("i");
    r.setAttribute("type", "button"), r.classList.add("icon-button", Jo), n && (r.onclick = (l) => n(l, o, e)), i.className = `ir-icon ${ct(t.icon)}`, t.iconColor && i.style.setProperty("--ir-icon-foreground-color", t.iconColor), r.appendChild(i), s.appendChild(r);
  }
  if (t.text) {
    const r = document.createElement("span");
    r.innerText = t.text, s.appendChild(r);
  }
  return s;
}
class Zt extends Ce {
  constructor(e = {}) {
    super(), this._args = e;
  }
  getDisplayText(e) {
    return e.formatter ? e.formatter(e.text ?? "") : e.text ?? "";
  }
  render(e, t, n) {
    const s = Ri(n), {
      ellipsis: r = !0,
      whiteSpace: i
    } = this._args;
    return r && s.classList.add(Yo), i && (s.style.whiteSpace = i), s;
  }
  get renderType() {
    return "default";
  }
}
class xi extends Ce {
  constructor({ onClick: e }) {
    super(), e && (this.onClick = e);
  }
  render(e, t, n) {
    return yi(e, t, n, (s, r, i) => this.onClick(s, r, i));
  }
  onClick(e, t, n) {
  }
  get renderType() {
    return "iconButton";
  }
}
class bi extends Ce {
  _fixedRowCount;
  _captionList;
  _prefix = "";
  constructor(e, ...t) {
    super(), this._fixedRowCount = e, this._captionList = t;
  }
  get prefix() {
    return this._prefix;
  }
  get renderType() {
    return "rowNo";
  }
  get editable() {
    return !1;
  }
  set prefix(e) {
    this._prefix = e;
  }
  render(e, t, n) {
    const s = document.createElement("div"), r = document.createElement("span"), i = e - this._fixedRowCount;
    s.setAttribute("data-has-px", ""), s.setAttribute("data-has-py", ""), s.className = Gt;
    const l = i < this._captionList.length ? this._captionList[i] : `${this._prefix}${1 + i - this._captionList.length}`;
    return r.innerText = l, n.text = l, s.appendChild(r), s;
  }
}
const nc = () => {
  const o = new Zt();
  return () => o;
};
function oc({ onClick: o }) {
  const e = new xi({ onClick: o });
  return () => e;
}
function sc(o, ...e) {
  const t = new bi(o, ...e);
  return () => t;
}
const yn = /* @__PURE__ */ new WeakMap();
class Co extends Zt {
  constructor(e) {
    super(), this.render = e.bind(this);
  }
  get renderType() {
    return "custom";
  }
}
function rc(o) {
  const e = yn.get(o);
  if (e)
    return e;
  const t = new Co(o);
  return yn.set(o, t), t;
}
var Si = /* @__PURE__ */ Y("<button type=button><span>"), vi = /* @__PURE__ */ Y("<i>");
function ki(o) {
  const {
    label: e,
    icon: t,
    onClick: n
  } = o;
  return (() => {
    var s = Si(), r = s.firstChild;
    return xt(s, "click", n, !0), N(s, Qo), G(s, A(_e, {
      when: t,
      children: (i) => (() => {
        var l = vi();
        return j(() => N(l, `ir-icon ir-icon-text ${i()}`)), l;
      })()
    }), r), G(r, e), s;
  })();
}
yt(["click"]);
const _o = Sr({}), Ii = _o.Provider;
function De() {
  return vr(_o);
}
var Ei = /* @__PURE__ */ Y("<div><span>"), Mi = /* @__PURE__ */ Y("<label><input type=checkbox><span>"), Ti = /* @__PURE__ */ Y("<i>"), xn = /* @__PURE__ */ Y("<div>"), Li = /* @__PURE__ */ Y("<div><div>");
const Hi = `${Xe.display.flex} ${Xe.alignCenter}`, Oi = `${Bn} ${Xe.truncate} ${Xe.flex110}`;
function bn(o) {
  const e = o.filter((n) => n.checked).length, t = o.length === e;
  return {
    subChecked: e > 0 && !t,
    checkedAll: t
  };
}
function Ai() {
  return (() => {
    var o = Ei(), e = o.firstChild;
    return N(o, Hi), `${xe}px` != null ? o.style.setProperty("height", `${xe}px`) : o.style.removeProperty("height"), G(e, () => Q.t("rowFilter.list.no-result")), j(() => N(e, Xe.truncate)), o;
  })();
}
function Sn(o) {
  return (() => {
    var e = Mi(), t = e.firstChild, n = t.nextSibling;
    return N(e, ns), N(t, Nn), N(n, Oi), G(n, A(_e, {
      get fallback() {
        return o.text;
      },
      get when() {
        return o.icon;
      },
      children: (s) => (() => {
        var r = Ti();
        return j(() => N(r, `ir-icon ir-icon-text ${s()}`)), r;
      })()
    })), j(() => ce(t, "data-state", o.subChecked ? "sub-checked" : "")), j(() => t.checked = o.checked), e;
  })();
}
function Ro(o) {
  const {
    makeCheckAll: e
  } = o;
  let t, n;
  const s = bn(o.rowItems), [r, i] = de(s.subChecked), [l, u] = de(s.checkedAll), d = se(() => mo({
    getScrollElement: () => t,
    estimateSize: () => xe,
    count: o.rowItems.length,
    overscan: 4
  }));
  return o.ref?.({
    checkAll(f) {
      u(f), i(!1);
    }
  }), [A(_e, {
    get when() {
      return o.rowItems.length === 0;
    },
    get children() {
      return A(Ai, {});
    }
  }), (() => {
    var f = Li(), C = f.firstChild, T = t;
    return typeof T == "function" ? me(T, f) : t = f, f.style.setProperty("overflow", "auto"), f.style.setProperty("flex", "1 1 auto"), G(f, A(_e, {
      when: e,
      get children() {
        var S = xn();
        return S.addEventListener("change", a), `${xe}px` != null ? S.style.setProperty("height", `${xe}px`) : S.style.removeProperty("height"), G(S, A(Sn, {
          get text() {
            return `(${Q.t("rowFilter.list.select-all")})`;
          },
          get checked() {
            return l();
          },
          get subChecked() {
            return r();
          }
        })), S;
      }
    }), C), N(C, es), C.style.setProperty("position", "relative"), G(C, A(qt, {
      get each() {
        return d().getVirtualItems();
      },
      children: (S) => (() => {
        var I = xn();
        I.addEventListener("change", (x) => c(S.index, x));
        var g = n;
        return typeof g == "function" ? me(g, I) : n = I, I.style.setProperty("position", "absolute"), `${xe}px` != null ? I.style.setProperty("height", `${xe}px`) : I.style.removeProperty("height"), I.style.setProperty("width", "100%"), G(I, A(Sn, {
          get text() {
            return o.rowItems[S.index].text || `(${Q.t("rowFilter.list.blanks")})`;
          },
          get checked() {
            return o.rowItems[S.index].checked;
          },
          get icon() {
            return o.rowItems[S.index].icon;
          }
        })), j((x) => (x = `${S.start}px`) != null ? I.style.setProperty("top", x) : I.style.removeProperty("top")), I;
      })()
    })), j((S) => {
      var I = o.rowItems.length === 0 ? "none" : "block", g = `calc(-1 * ${ts.sm})`, x = `${d().getTotalSize()}px`;
      return I !== S.e && ((S.e = I) != null ? f.style.setProperty("display", I) : f.style.removeProperty("display")), g !== S.t && ((S.t = g) != null ? f.style.setProperty("margin-right", g) : f.style.removeProperty("margin-right")), x !== S.a && ((S.a = x) != null ? C.style.setProperty("height", x) : C.style.removeProperty("height")), S;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), f;
  })()];
  function c(f, C) {
    if (!(C.target instanceof HTMLInputElement)) return;
    const T = o.rowItems[f], S = C.target.checked;
    T.checked = S, h(), o.onChangeCheck?.(T, S);
  }
  function a(f) {
    if (!(f.target instanceof HTMLInputElement)) return;
    const C = f.target.checked;
    o.rowItems.forEach((S) => S.checked = C), h(), o.onChangeCheck?.(null, C);
  }
  function h() {
    const f = o.rowItems, {
      checkedAll: C,
      subChecked: T
    } = bn(f);
    i(T), u(C);
  }
}
function zi() {
  const {
    pluginAPI: o,
    columnId: e,
    operandsSignal: t,
    updateOperandsHandler: n
  } = De(), s = l(), [r, i] = de(s);
  return A(Ro, {
    makeCheckAll: !0,
    get rowItems() {
      return r();
    },
    onChangeCheck: u
  });
  function l() {
    const d = o.getFilterOptionByCol(e) !== null, [c] = t, a = new Set(c().map((h) => h === "true"));
    return [{
      key: "true",
      text: "",
      checked: d && a.has(!0),
      icon: "ir-icon--check-all-rectangle"
    }, {
      key: "false",
      text: "",
      checked: d && a.has(!1),
      icon: "ir-icon--uncheck-all-rectangle"
    }];
  }
  function u(d, c) {
    d === null && i(s.map((a) => (a.checked = c, a))), n(s.filter((a) => a.checked).map((a) => a.key));
  }
}
var Fi = /* @__PURE__ */ Y("<div>");
function Et(o) {
  const {
    defaultValue: e = "",
    format: t,
    onChange: n,
    placeholder: s
  } = o, {
    addOutSideElements: r
  } = De();
  let i;
  return Fe(() => {
    const l = new Bs({
      div: i,
      defaultDate: e,
      format: t,
      onChange: n,
      placeholder: s
    }), u = l.input, d = l.button;
    r(Vs().datePicker), u.oninput = () => n(l.textValue), d.onkeydown = (a) => {
      a.key === "Enter" && l.hide();
    }, u.addEventListener("blur", c, {
      capture: !0
    }), o.inputRef?.(u);
    function c(a) {
      a.relatedTarget instanceof HTMLElement && a.relatedTarget.closest(`.${Vn}`) && a.relatedTarget.textContent === Q.t("rowFilter.ok") && a.stopPropagation();
    }
    ke(() => {
      u.removeEventListener("blur", c), l.destroy();
    });
  }), (() => {
    var l = Fi(), u = i;
    return typeof u == "function" ? me(u, l) : i = l, l;
  })();
}
var Pi = /* @__PURE__ */ Y("<select>");
function Yt(o) {
  const {
    defaultKey: e,
    options: t,
    onChange: n
  } = o, {
    addOutSideElements: s
  } = De();
  let r;
  return Fe(() => {
    const i = new Gs({
      contextElement: r
    });
    t.forEach(({
      key: l,
      text: u
    }) => i.addItem(l, Q.t(u))), i.onChange = (l, u) => n(u.value), i.value = e, s(i.divDropDown), ke(() => i.destroy());
  }), (() => {
    var i = Pi(), l = r;
    return typeof l == "function" ? me(l, i) : r = i, i;
  })();
}
const Ct = [
  { key: "equals", text: "rowFilter.op.equals" },
  { key: "not-equals", text: "rowFilter.op.not-equals" },
  { key: "less-than", text: "rowFilter.op.less" },
  { key: "less-than-or-equal", text: "rowFilter.op.less-eq" },
  { key: "greater-than", text: "rowFilter.op.greater" },
  { key: "greater-than-or-equal", text: "rowFilter.op.greater-eq" },
  { key: "in-range", text: "rowFilter.number.select.between" },
  { key: "blank", text: "rowFilter.number.select.blank" }
], $i = [
  { key: "equals", text: "rowFilter.op.equals" },
  { key: "not-equals", text: "rowFilter.op.not-equals" },
  { key: "contains", text: "rowFilter.op.like" },
  { key: "not-contains", text: "rowFilter.op.not-like" },
  { key: "starts-with", text: "rowFilter.op.starts-with" },
  { key: "ends-with", text: "rowFilter.op.ends-with" }
];
function Jt(o = !0) {
  let e = null;
  return {
    focus: () => e?.focus({ preventScroll: !0 }),
    setFocusRef(n) {
      e = n, o && n.focus({ preventScroll: !0 });
    }
  };
}
function Di() {
  const {
    pluginAPI: o,
    columnId: e,
    operatorSignal: t,
    operandsSignal: n,
    updateOperandHandler: s
  } = De(), {
    format: r = Q.t("datePicker.dateFormat")
  } = o.getColumnMetaInfo(e), [i, l] = t, [u, d] = n, c = i() ?? Ct[0].key, a = Jt();
  return [A(Yt, {
    defaultKey: c,
    options: Ct,
    onChange: f
  }), A(Xt, {
    get children() {
      return [A(we, {
        get when() {
          return i() === "in-range";
        },
        get children() {
          return [A(Et, {
            get inputRef() {
              return a.setFocusRef;
            },
            get defaultValue() {
              return u()[0] ?? "";
            },
            format: r,
            get placeholder() {
              return h("rowFilter.date.between.from");
            },
            get onChange() {
              return s(0);
            }
          }), A(Et, {
            get defaultValue() {
              return u()[1] ?? "";
            },
            format: r,
            get placeholder() {
              return h("rowFilter.date.between.to");
            },
            get onChange() {
              return s(1);
            }
          })];
        }
      }), A(we, {
        get when() {
          return i() !== "blank";
        },
        get children() {
          return A(Et, {
            get inputRef() {
              return a.setFocusRef;
            },
            get defaultValue() {
              return u()[0] ?? "";
            },
            format: r,
            get placeholder() {
              return h("rowFilter.date.input.placeholder");
            },
            get onChange() {
              return s(0);
            }
          });
        }
      })];
    }
  })];
  function h(C) {
    return `${Q.t(C)} (${r})`;
  }
  function f(C) {
    C === "equals" && d(u().slice(0, 1)), l(C), a.focus();
  }
}
var Wi = /* @__PURE__ */ Y("<button type=button><i>"), Ni = /* @__PURE__ */ Y("<button aria-label=search type=submit><i>"), Bi = /* @__PURE__ */ Y("<div><input>");
function lt(o) {
  const e = () => o.class, t = () => o.suffixButtonIcon && o.matchCaseToggle ? "padding-right: 44px" : "";
  return (() => {
    var s = Bi(), r = s.firstChild;
    return jr(r, pt(o, {
      get class() {
        return un(os, e());
      },
      get style() {
        return t();
      }
    }), !1), G(s, A(_e, {
      get when() {
        return o.matchCaseToggle;
      },
      get children() {
        var i = Wi(), l = i.firstChild;
        return xt(i, "click", n), N(i, sn), i.style.setProperty("right", "24px"), j(() => N(l, un("ir-icon ir-icon--lowercase", o.matchCase && "ir-icon--rounded"))), i;
      }
    }), null), G(s, A(_e, {
      get when() {
        return o.suffixButtonIcon;
      },
      get children() {
        var i = Ni(), l = i.firstChild;
        return N(i, sn), j(() => N(l, `ir-icon ${o.suffixButtonIcon}`)), i;
      }
    }), null), j(() => N(s, o.wrapperClass)), s;
  })();
  function n() {
    o.onToggleMatchCase?.(!o.matchCase);
  }
}
function Vi() {
  const {
    operatorSignal: o,
    operandsSignal: e,
    onInputUpdateHandler: t
  } = De(), n = Jt(), [s, r] = o, [i, l] = e, u = s() ?? Ct[0].key;
  return [A(Yt, {
    defaultKey: u,
    options: Ct,
    onChange: d
  }), A(Xt, {
    get children() {
      return [A(we, {
        get when() {
          return s() === "in-range";
        },
        get children() {
          return [A(lt, {
            ref(c) {
              var a = n.setFocusRef;
              typeof a == "function" ? a(c) : n.setFocusRef = c;
            },
            get value() {
              return i()[0] ?? "";
            },
            get placeholder() {
              return Q.t("rowFilter.number.between.from");
            },
            get onInput() {
              return t(0);
            }
          }), A(lt, {
            get value() {
              return i()[1] ?? "";
            },
            get placeholder() {
              return Q.t("rowFilter.number.between.to");
            },
            get onInput() {
              return t(1);
            }
          })];
        }
      }), A(we, {
        get when() {
          return s() !== "blank";
        },
        get children() {
          return A(lt, {
            ref(c) {
              var a = n.setFocusRef;
              typeof a == "function" ? a(c) : n.setFocusRef = c;
            },
            get value() {
              return i()[0] ?? "";
            },
            get placeholder() {
              return Q.t("rowFilter.number.input.placeholder");
            },
            get onInput() {
              return t(0);
            }
          });
        }
      })];
    }
  })];
  function d(c) {
    c === "equals" && l(i().slice(0, 1)), r(c), n.focus();
  }
}
const Gi = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function vn(o) {
  return o === "" ? !0 : Gi.test(o);
}
function kn(o) {
  return o === "" ? Number.NEGATIVE_INFINITY : parseFloat(o);
}
function Qt(o, e) {
  if (o === e) return 0;
  const t = vn(o), n = vn(e);
  return t && n ? kn(o) < kn(e) ? -1 : 1 : !t && !n ? o < e ? -1 : 1 : t ? -1 : 1;
}
const ji = (o) => (e, t) => Qt(e.getCell(o).text, t.getCell(o).text), ic = ({
  grid: o
}) => ({
  sortColumn(e, t, n, s) {
    o.sort(ji(e), t, n, s);
  }
});
var Ui = /* @__PURE__ */ Y("<form>");
function Ki() {
  const o = Jt(), {
    pluginAPI: e,
    columnId: t,
    operatorSignal: n,
    operandsSignal: s,
    stringFilterOptions: r,
    ignoreCase: i
  } = De(), [l, u] = n, [d, c] = s, a = l();
  let h, f = [], C, T = "";
  const S = e.getFilterOptionByCol(t), I = new Set(s[0]()), g = e.getTextListForCol(t).sort((w, k) => Qt(w.text, k.text)).map(({
    text: w
  }) => ({
    text: w,
    key: w,
    // filterOptions이 있는 경우, 체크된 항목을 표시
    checked: S ? I.has(w) : !1
  })), [x, R] = de(g.filter(y())), v = a !== "equals" ? d()[0] : "";
  return [A(Yt, {
    defaultKey: a,
    options: $i,
    onChange: m
  }), (() => {
    var w = Ui();
    w.addEventListener("submit", L);
    var k = h;
    return typeof k == "function" ? me(k, w) : h = w, w.style.setProperty("display", "contents"), G(w, A(lt, {
      ref(b) {
        var M = o.setFocusRef;
        typeof M == "function" ? M(b) : o.setFocusRef = b;
      },
      name: "search-text",
      autocomplete: "off",
      value: v,
      wrapperClass: ss,
      get suffixButtonIcon() {
        return l() === "equals" ? "ir-icon--search" : void 0;
      },
      get placeholder() {
        return Q.t("rowFilter.string.input.placeholder");
      },
      "on:input": p
    })), w;
  })(), A(_e, {
    get when() {
      return l() === "equals";
    },
    get children() {
      return A(Ro, {
        ref: (w) => C = w,
        makeCheckAll: !0,
        get rowItems() {
          return x();
        },
        onChangeCheck: _
      });
    }
  })];
  function p() {
    l() !== "equals" && c([h["search-text"].value]);
  }
  function L(w) {
    w.preventDefault();
    const k = h["search-text"].value, b = l() !== "equals", E = b || k === T;
    if (b && c([k]), E) {
      if (l() === "equals" && f.length === 0) return;
      h.parentElement?.closest("form")?.requestSubmit();
      return;
    }
    T = k, f = g.filter(y()), T === "" ? (R(f.map((H) => (H.checked = !1, H))), c([]), C.checkAll(!1)) : (R(f.map((H) => (H.checked = !0, H))), c([T, ...f.map((H) => H.text)]), C.checkAll(!0));
  }
  function y() {
    if (T === "") return () => !0;
    const w = r === "equals" ? new RegExp(`^${T}$`, i ? "i" : "") : new RegExp(T, i ? "i" : "");
    return (k) => w.test(k.text);
  }
  function m(w) {
    u(w), o.focus();
  }
  function _(w, k) {
    w === null && R(x().map((b) => b)), c(x().filter((b) => b.checked).map((b) => b.text));
  }
}
var qi = /* @__PURE__ */ Y("<div>");
function Xi(o) {
  let e;
  const t = Kt(() => o.children);
  return Fe(() => {
    const n = Kn(o.refElement, e, o.placement, o.offset);
    ke(() => n());
  }), (() => {
    var n = qi(), s = e;
    return typeof s == "function" ? me(s, n) : e = n, n.style.setProperty("position", "absolute"), G(n, t), n;
  })();
}
var Zi = /* @__PURE__ */ Y("<div>"), Yi = /* @__PURE__ */ Y('<form><div></div><div><button class=button type=button></button><button type=submit class="button button--primary">');
const In = [{
  key: "ASC",
  i18nKey: "rowFilter.sort.ascending",
  icon: "ir-icon--sort-ascending"
}, {
  key: "DESC",
  i18nKey: "rowFilter.sort.descending",
  icon: "ir-icon--sort-descending"
}], Ji = [{
  key: "CHECK-ALL",
  i18nKey: "rowFilter.check.check-all",
  icon: "ir-icon--check-all-rectangle"
}, {
  key: "UNCHECK-ALL",
  i18nKey: "rowFilter.check.uncheck-all",
  icon: "ir-icon--uncheck-all-rectangle"
}], Qi = {
  key: "DELETE",
  i18nKey: "rowFilter.sort.clear",
  icon: "ir-icon--delete"
};
function* el(o) {
  const {
    visibleSortButton: e,
    sortOrder: t,
    pluginAPI: n,
    visibleCheckAllButton: s,
    columnId: r
  } = o, i = n.getColumnMetaInfo(r);
  yield* l(), yield* u();
  function* l() {
    if (e) {
      if (!t) {
        yield* In;
        return;
      }
      yield Qi, yield In[t === "ASC" ? 1 : 0];
    }
  }
  function* u() {
    s && i.textType === "checked" && (yield* Ji);
  }
}
function tl(o, e) {
  const {
    visibleSortButton: t,
    pluginAPI: n,
    columnId: s
  } = e, r = n.getColumnMetaInfo(s);
  t && fe(o, {
    [St.maxHeight]: "240px"
  }), r.textType === "date" && fe(o, {
    [St.minWidth]: "200px"
  }), fe(o, {
    [St.maxWidth]: "200px"
  });
}
function nl(o) {
  const {
    pluginAPI: e,
    refElement: t,
    rowId: n,
    columnId: s,
    onClose: r,
    onSubmit: i,
    onClear: l,
    onDropdownButtonClick: u,
    stringEqualsFilterOption: d = "contains",
    ignoreCase: c = !1
  } = o, a = [...el(o)], h = e.getColumnMetaInfo(s), f = e.getFilterOptionByCol(s), C = [];
  let T;
  const S = de(f?.operator ?? "equals"), I = de(f?.operand ?? []), [g] = S, [x, R] = I;
  return Fe(() => {
    const m = qn({
      hide: r
    }), _ = sr({
      eventElements: [T, t],
      getEventElements: () => C,
      clickOutsideFunc: r
    });
    _.create(), m.create(), tl(T, o), ke(() => {
      m.destroy(), _.destroy();
    });
  }), A(Ii, {
    value: {
      columnId: s,
      pluginAPI: e,
      operatorSignal: S,
      operandsSignal: I,
      updateOperandHandler: p,
      updateOperandsHandler: (m) => I[1](m),
      addOutSideElements: (m) => C.push(m),
      onInputUpdateHandler: (m) => (_) => p(m)(_.currentTarget.value),
      get stringFilterOptions() {
        return d;
      },
      get ignoreCase() {
        return c;
      }
    },
    get children() {
      var m = Yi(), _ = m.firstChild, w = _.nextSibling, k = w.firstChild, b = k.nextSibling, M = T;
      return typeof M == "function" ? me(M, m) : T = m, xt(m, "submit", v), N(m, rs), G(m, A(_e, {
        get when() {
          return a.length > 0;
        },
        get children() {
          var E = Zi();
          return N(E, is), G(E, A(qt, {
            each: a,
            children: (H) => A(ki, {
              get label() {
                return Q.t(H.i18nKey);
              },
              get icon() {
                return H.icon;
              },
              onClick: () => y(H)
            })
          })), E;
        }
      }), _), N(_, ls), G(_, A(Xt, {
        get fallback() {
          return `unknown textType '${h.textType}'`;
        },
        get children() {
          return [A(we, {
            get when() {
              return h.textType === "date";
            },
            get children() {
              return A(Di, {});
            }
          }), A(we, {
            get when() {
              return h.textType === "number";
            },
            get children() {
              return A(Vi, {});
            }
          }), A(we, {
            get when() {
              return h.textType === "checked";
            },
            get children() {
              return A(zi, {});
            }
          }), A(we, {
            get when() {
              return h.textType === "string";
            },
            get children() {
              return A(Ki, {});
            }
          })];
        }
      })), N(w, Vn), k.$$click = L, G(k, () => Q.t("rowFilter.clear")), G(b, () => Q.t("rowFilter.ok")), j(() => ce(m, "id", e.dropdownId)), m;
    }
  });
  function v(m) {
    m.preventDefault();
    const _ = x(), w = g();
    _.length > 0 && (e.setColFilter({
      operator: w,
      operand: _,
      column: s
    }), i()), r();
  }
  function p(m) {
    return (_) => {
      const w = x();
      w[m] = _, R([...w]);
    };
  }
  function L() {
    e.getFilterOptionByCol(s) && e.removeColFilter(s), l(), r();
  }
  function y(m) {
    const {
      key: _
    } = m;
    switch (_) {
      case "DELETE":
        e.clearSortOrder();
        break;
      case "ASC":
      case "DESC":
        e.setSortOrder(n, s, _);
        break;
      case "CHECK-ALL":
      case "UNCHECK-ALL":
        e.setCheckAll(s, _ === "CHECK-ALL");
        break;
    }
    u?.(_), r();
  }
}
function lc(o) {
  return A(Xi, {
    get refElement() {
      return o.refElement;
    },
    placement: "bottom-start",
    get children() {
      return A(nl, o);
    }
  });
}
yt(["click"]);
function ol(o, e) {
  const { rowSpan: t, colSpan: n, skipFiltered: s } = e;
  return {
    getPastingRange: l,
    beforePastingList: u,
    pasteTask: d
  };
  function r(c, a) {
    const h = o.getRowCount();
    let f = 0, C = c;
    for (; C < h; ) {
      if (o.isFilteredRow(C) || f++, f === a) return C;
      ++C;
    }
    return C - 1 + (a - f);
  }
  function i(c) {
    return c.top === c.bottom && c.left === c.right;
  }
  function l(c, a) {
    if (a.length === 0) throw new Error("No pasting data.");
    const h = { ...c }, f = a.length, C = a[0].length, T = i(c) ? r(c.top, f) + 1 : h.top + f, S = h.left + C;
    for (let I = c.bottom + 1; I < T; ++I)
      (o.hasRow(I) || o.onAutoInsertRow(I)) && (h.bottom = I);
    for (let I = c.right + 1; I < S; ++I)
      (o.hasColumn(I) || o.onAutoInsertColumn(I)) && (h.right = I);
    return h;
  }
  function u(c, a) {
    if (a.length === 0) throw new Error("No pasting data.");
    const h = [], f = a.length, C = a[0].length, T = c.bottom - c.top, S = c.right - c.left;
    let I = 0;
    for (let v = 0; v <= T; ++v) {
      const p = v + c.top;
      if (g(p), !!o.hasRow(p)) {
        if (s && o.isFilteredRow(p)) {
          ++I;
          continue;
        }
        for (let L = 0; L <= S; ++L) {
          const y = L + c.left;
          if (x(y), !o.hasColumn(y)) break;
          const m = o.cell(p, y), _ = R(v - I, L), w = o.onCheckPasteCell(m, _.text);
          _.cellVisible && w && h.push({
            cell: m,
            cellMetaInfo: {
              text: _.text,
              cellVisible: _.cellVisible,
              rowSpan: t ? _.rowSpan : 1,
              colSpan: n ? _.colSpan : 1,
              isFormatted: !1
            },
            pasteOption: typeof w == "object" ? w : void 0
          });
        }
      }
    }
    return h;
    function g(v) {
      !o.hasRow(v) && o.onAutoInsertRow(v) && (o.addRow(), o.onAutoInsertedRow(v));
    }
    function x(v) {
      !o.hasColumn(v) && o.onAutoInsertColumn(v) && (o.addColumn(), o.onAutoInsertedColumn(v));
    }
    function R(v, p) {
      const [L, y] = [v % f, p % C];
      return a[L][y];
    }
  }
  function d(c) {
    for (const { cell: a, cellMetaInfo: h, pasteOption: f } of c) {
      const { rowSpan: C, colSpan: T, cellVisible: S } = h;
      if (!S) continue;
      const { row: I, col: g } = a;
      if (f?.ignoreRowSpan !== !0 && C > 1 || f?.ignoreColSpan !== !0 && T > 1) {
        const R = { top: I, left: g, bottom: I + C - 1, right: g + T - 1 };
        o.mergeCells(R.top, R.left, R.bottom, R.right);
      }
      f?.ignoreText || o.setCell(I, g, { text: h.text }), o.onClipboardAfterPasteCell(a);
    }
  }
}
function sl(o) {
  return JSON.stringify(o);
}
function rl(o) {
  return JSON.parse(o);
}
function il(o) {
  const e = [], t = [];
  for (const n of o)
    switch (n) {
      case " ":
        t.push(" ");
        break;
      case `
`:
        e.push(document.createTextNode(t.join(""))), e.push(document.createElement("br")), t.length = 0;
        break;
      default:
        t.push(n);
        break;
    }
  return e.push(document.createTextNode(t.join(""))), e;
}
function ll(o) {
  const e = document.createElement("table");
  return o.forEach((t) => {
    const n = document.createElement("tr");
    t.filter((s) => s.cellVisible).forEach((s) => {
      const r = document.createElement("td");
      r.setAttribute("rowSpan", `${s.rowSpan}`), r.setAttribute("colSpan", `${s.colSpan}`), r.append(...il(s.text)), n.append(r);
    }), e.appendChild(n);
  }), `
    <meta name="generator" content="innorules/ir-grid"/>
    <style type="text/css">td{white-space:normal}br{mso-data-placement:same-cell}</style>
    ${e.outerHTML}
`;
}
function al(o) {
  const n = new DOMParser().parseFromString(o, "text/html").querySelectorAll("tr");
  if (n.length === 0) return [];
  const s = Array(n.length).fill(null).map(() => []);
  let r = 0;
  for (const u of n) {
    const d = u.querySelectorAll("td");
    let c = i(0);
    for (const a of d)
      (a.rowSpan > 1 || a.colSpan > 1) && l(r, c, a.rowSpan, a.colSpan), s[r][c] = {
        text: cl(a),
        rowSpan: a.rowSpan,
        colSpan: a.colSpan,
        cellVisible: !0,
        isFormatted: a.hasAttribute("class")
      }, c = i(c);
    ++r;
  }
  return s;
  function i(u) {
    let d = u;
    for (; s[r][d]; )
      ++d;
    return d;
  }
  function l(u, d, c, a) {
    for (let h = u; h < u + c; ++h)
      for (let f = d; f < d + a; ++f)
        s[h][f] = {
          text: "",
          rowSpan: 1,
          colSpan: 1,
          cellVisible: !1,
          isFormatted: !1
        };
  }
}
function cl(o) {
  const e = [], t = [];
  let n = o.firstChild;
  for (; n; )
    n.nodeType === Node.TEXT_NODE && n.nodeValue ? t.push(n.nodeValue) : n.nodeName === "BR" && t.push(`

`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild), n = e.pop();
  return ul(t);
}
function ul(o) {
  const e = [];
  let t = !1;
  for (const n of o) {
    if (n === `

`) {
      e.push(`
`);
      continue;
    }
    let s = !1;
    for (const r of n)
      switch (r) {
        // Ideographic Space
        case "　":
        case " ":
        case `
`:
          s && (t = !0);
          break;
        default:
          t && (e.push(" "), t = !1), s = !0, e.push(r === " " ? " " : r);
          break;
      }
  }
  return e.join("");
}
function dl(o) {
  if (o.length === 0) return !0;
  const e = o[0].length;
  return o.every((t) => t.length === e);
}
const yo = "	", xo = `
`;
function hl(o) {
  if (!dl(o)) throw new Error("Wrong text matrix dimension");
  return o.map(
    (e) => e.map(
      ({ text: t, cellVisible: n }) => n ? t : ""
    ).join(yo)
  ).join(xo);
}
function fl(o) {
  if (o.length === 0) return [];
  const e = [], t = [], n = [];
  function s() {
    n.push({
      text: t.join(""),
      rowSpan: 1,
      colSpan: 1,
      cellVisible: !0,
      isFormatted: !1
    }), t.length = 0;
  }
  function r() {
    s(), (e.length === 0 || n.length === e[0]?.length) && e.push([...n]), n.length = 0;
  }
  for (const i of o)
    i !== "\r" && (i === yo ? s() : i === xo ? r() : t.push(i));
  return (t.length > 0 || n.length > 0) && r(), e;
}
const at = [
  {
    format: "ir-grid/cell",
    parseFunc: rl,
    payloadFunc: sl
  },
  {
    format: "text/html",
    parseFunc: al,
    payloadFunc: ll
  },
  {
    format: "text/plain",
    parseFunc: fl,
    payloadFunc: hl
  }
];
function gl(o, e) {
  at.forEach(
    ({ format: t, payloadFunc: n }) => o.setData(t, n(e))
  );
}
function bo(o) {
  return o.isFormatted && o.text.startsWith("#");
}
function ml(o) {
  return o.some((e) => e.some((t) => bo(t)));
}
function pl(o, e) {
  for (let t = 0; t < o.length; ++t) {
    const n = o[t].length;
    for (let s = 0; s < n; ++s)
      e[t]?.[s]?.text && bo(o[t][s]) && (o[t][s].text = e[t][s].text);
  }
  return o;
}
function En(o) {
  for (const { format: e, parseFunc: t } of at) {
    const n = o.getData(e);
    if (n !== "") {
      const s = t(n);
      if (!ml(s))
        return s;
      const r = o.getData(at[2].format);
      return pl(
        s,
        at[2].parseFunc(r)
      );
    }
  }
  return console.warn("No relevant data format in clipboard!"), [];
}
const qe = 1, ve = 1;
class Mn {
  _left = 0;
  _columnId = 0;
  _width = 0;
  _visible = !0;
  constructor({ columnId: e, width: t, left: n }) {
    this.columnId = e, this.width = t, this.left = n;
  }
  get columnId() {
    return this._columnId;
  }
  get left() {
    return this._left;
  }
  get width() {
    return this._width;
  }
  get widthWithBorder() {
    return this._width + ve;
  }
  get visible() {
    return this._visible;
  }
  get right() {
    return this.visible ? this.left + this.widthWithBorder : this.left;
  }
  set visible(e) {
    this._visible = e;
  }
  set columnId(e) {
    this._columnId = e;
  }
  set left(e) {
    this._left = e;
  }
  set width(e) {
    this._width = e;
  }
  isBetweenLeft(e) {
    return e >= this.left && e < this.right;
  }
}
class wl {
  _rowHeaderColumns;
  _gridHookFlow;
  _freezedColumns;
  _columnsList = [];
  _visibleColumnsList = [];
  _columnsWidth = 0;
  _rowHeaderColumnsWidth = 0;
  _freezedColumnsWidth = 0;
  constructor(e, t, n) {
    this._rowHeaderColumns = e, this._freezedColumns = t, this._gridHookFlow = n;
  }
  addColumn(e) {
    const t = new Mn({
      columnId: this._columnsList.length,
      width: e,
      left: this._columnsWidth
    });
    return this._columnsList.push(t), this._visibleColumnsList.push(t), this.updateColumnWidth(t, "add"), this.addFixedWidth(t), t;
  }
  isHeaderColumnId(e) {
    return e < this.headerColumns;
  }
  isInvalidColumnId(e) {
    return e < 0 || e >= this._columnsList.length;
  }
  updateVisibleColumnList() {
    this._visibleColumnsList = this._columnsList.filter((e) => e.visible);
  }
  updateColumnWidth(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = t === "add" || t === "show" ? e.widthWithBorder : -e.widthWithBorder;
    this._columnsWidth += n;
  }
  removeColumns(e, t) {
    this._columnsList.splice(e, t - e + 1).forEach((s) => this.updateColumnWidth(s, "remove")), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  freezeColumns(e) {
    this._freezedColumns = e, this.updateFixedWidth();
  }
  _changeColumnWidth(e, t) {
    this._columnsWidth -= t, e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth -= t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth -= t, this._gridHookFlow.emitSync("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]));
  }
  insertColumns(e, t, n) {
    const r = this.getColumn(e).left, i = $(t).map((l) => new Mn({
      columnId: e + l,
      width: n,
      left: r + (n + ve) * l
    }));
    this._columnsList.splice(e, 0, ...i), i.forEach((l) => this.updateColumnWidth(l, "add")), this.updateVisibleColumnList(), this.updateFixedWidth();
  }
  addFixedWidth(e, t = 1) {
    e.columnId < this.headerColumns && (this._rowHeaderColumnsWidth += e.widthWithBorder * t), e.columnId < this.freezedColumns && (this._freezedColumnsWidth += e.widthWithBorder * t);
  }
  updateFixedWidth() {
    this._rowHeaderColumnsWidth = 0, this._freezedColumnsWidth = 0;
    let e = 0;
    const t = Math.min(this.freezedColumns, this._columnsList.length);
    for (; e < t; ) {
      const n = this.getColumn(e);
      n.visible && this.addFixedWidth(n), ++e;
    }
    this._gridHookFlow.emitSync("changedFreezedColumnWidth", [this._freezedColumnsWidth, this.freezedColumns]);
  }
  setColumnWidth(e, t) {
    const n = this.getColumn(e), s = n.width - t;
    s !== 0 && (n.width = t, n.visible && this._changeColumnWidth(n, s));
  }
  setColumnVisible(e, t) {
    const n = this.getColumn(e);
    n.visible !== t && (n.visible = t, this.updateColumnWidth(n, t ? "show" : "hide"), this.updateVisibleColumnList(), this.updateFixedWidth());
  }
  getColumnLeft(e) {
    return this.getColumn(e).left;
  }
  getColumnRight(e) {
    return this.getColumn(e).right;
  }
  getColumnWidth(e) {
    return this._columnsList[e].width;
  }
  getColumnVisible(e) {
    return this._columnsList[e]?.visible ?? !1;
  }
  getColCount() {
    return this._columnsList.length;
  }
  getColumn(e) {
    const t = this._columnsList[e];
    if (!t) throw new Error("No column");
    return t;
  }
  getColumnUnstable(e) {
    return this._columnsList[e];
  }
  updateColumnsLeftFrom(e) {
    $(e, this._columnsList.length).reduce((t, n) => {
      const s = this._columnsList[n];
      return s.left = t, s.visible ? t + s.width + ve : t;
    }, this.getColumn(e).left);
  }
  get firstColumn() {
    return this._columnsList[0];
  }
  get lastColumn() {
    return this._columnsList[this._columnsList.length - 1];
  }
  get visibleColumnList() {
    return this._visibleColumnsList;
  }
  get columnsWidth() {
    return this._columnsWidth;
  }
  get rowHeaderColumnsWidth() {
    return this._rowHeaderColumnsWidth;
  }
  get length() {
    return this._columnsList.length;
  }
  get fixedColumnsWidth() {
    return this._freezedColumnsWidth;
  }
  get headerColumns() {
    return this._rowHeaderColumns;
  }
  get freezedColumns() {
    return this._rowHeaderColumns + this._freezedColumns;
  }
  get bodyFreezedColumns() {
    return this._freezedColumns;
  }
}
class Cl {
  _headerRows;
  _gridHookFlow;
  _rowList = [];
  _visibleRowList = [];
  _freezedRows;
  _rowsHeight;
  _headerRowsHeight;
  _freezedRowsHeight;
  constructor(e, t, n) {
    this._headerRows = e, this._freezedRows = t, this._rowsHeight = 0, this._headerRowsHeight = 0, this._freezedRowsHeight = 0, this._gridHookFlow = n;
  }
  getRow(e) {
    const t = this._rowList[e];
    if (!t) throw new Error(`Not found row ${e}`);
    return t;
  }
  /**
   * null일 수 있지만, 빠른 접근을 위해 사용
   */
  getRowUnstable(e) {
    return this._rowList[e];
  }
  addRow(e) {
    this._rowList.push(e), this._visibleRowList.push(e), this._updateRowHeight(e, "add"), e.rowId < this.freezedRows && this._updateFixedHeight();
  }
  getMaxCellWidth(e, t) {
    return this._rowList.reduce((n, s) => Math.max(n, s.getMaxCellWidth(e, t)), 0);
  }
  clearRows() {
    this.runFuncEachRow(
      (e) => e.remove(),
      this.headerRows
    ), this._rowList.length = this.headerRows, this._rowsHeight = this.headerRowsHeight, this._freezedRowsHeight = this.headerRowsHeight, this._updateVisibleRowList();
  }
  addColumn(e) {
    this._rowList.forEach((t) => t.addCell(e(t)));
  }
  setColumnVisible(e, t) {
    this._rowList.forEach((n) => n.getCell(e).visible = t);
  }
  insertColumns(e, t, n) {
    this._rowList.forEach((s) => {
      const r = $(t).map((i) => n(s.rowId, e + i));
      s.insertCells(r, e);
    });
  }
  removeRows(e, t, n) {
    const s = this._rowList.slice(e, t + 1), r = n?.ignoreFiltered === !0 ? s.filter((i) => !i.filtered) : s;
    if (this._rowList = [
      ...this._rowList.slice(0, e),
      // filter 되지 않은 row
      ...s.filter((i) => !r.includes(i)),
      ...this._rowList.slice(t + 1)
    ], r.length !== 0) {
      for (const i of r)
        this._updateRowHeight(i, "remove"), i.remove();
      this._updateVisibleRowList(), this._updateFixedHeight();
    }
  }
  removeColumns(e, t) {
    this._rowList.forEach((n) => n.removeCells(e, t));
  }
  setColumnWidth(e, t) {
    this._rowList.forEach((n) => n.updateColumnWidth(e, t));
  }
  insertRows(e, t) {
    let n = this._rowList[e].top;
    this._rowList.splice(e, 0, ...t);
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      r.top = n, this._updateRowHeight(r, "add"), n = r.bottom;
    }
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  insertRowByList(e) {
    const t = [...this._rowList];
    this._rowList.length = 0;
    const n = t[Symbol.iterator](), s = e[Symbol.iterator]();
    let r = s.next().value, i = n.next().value, l = 0;
    for (; i; )
      r && r.rowId === l ? (r.recover(), this._rowList.push(r), this._updateRowHeight(r, "add"), r = s.next().value) : (this._rowList.push(i), i = n.next().value), ++l;
    for (; r; )
      r.recover(), this._rowList.push(r), this._updateRowHeight(r, "add"), r = s.next().value;
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  moveRows([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const s = this._rowList.splice(e, t - e + 1);
    s.forEach((i) => i.unmount());
    const r = e < n ? n - s.length : n;
    this._rowList.splice(r, 0, ...s), this._updateVisibleRowList();
  }
  getAdjustTargetRow(e) {
    return e >= this.length ? this.length : e < this.freezedRows ? this.freezedRows : this.getStartOfRowId(e);
  }
  exchangeRows([e, t], [n, s]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (s < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= s && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, targetRow: ${n},${s}`);
    const [r, i, l, u] = e < n ? [e, t, n, s] : [n, s, e, t], d = this._rowList.slice(r, i + 1), c = this._rowList.slice(l, u + 1);
    d.forEach((a) => a.unmount()), c.forEach((a) => a.unmount()), this._rowList = [
      ...this._rowList.slice(0, r),
      ...c,
      ...this._rowList.slice(i + 1, l),
      ...d,
      ...this._rowList.slice(u + 1)
    ], this._updateVisibleRowList();
  }
  isHeaderRowId(e) {
    return e < this.headerRows;
  }
  isInvalidRowId(e) {
    return e < 0 || e >= this._rowList.length;
  }
  getSnapshotRows() {
    return [...this._rowList];
  }
  _addFixedHeight(e, t, n = 1) {
    t < this.headerRows && (this._headerRowsHeight += e.heightWithBorder * n), t < this.freezedRows && (this._freezedRowsHeight += e.heightWithBorder * n);
  }
  _updateFixedHeight() {
    const e = Math.min(this.length, this.freezedRows);
    this._headerRowsHeight = 0, this._freezedRowsHeight = 0;
    for (let t = 0; t < e; ++t) {
      const n = this._rowList[t];
      n.visible && this._addFixedHeight(n, t);
    }
    this._gridHookFlow.emitSync("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]);
  }
  updateCellReadonlyStatus() {
    this._rowList.forEach((e) => {
      const t = e.cellCounts;
      for (let n = 0; n < t; n++)
        e.getCell(n).updateReadonlyStatus();
    });
  }
  setRowHeight(e, t) {
    const n = this.getRow(e), s = n.height - t;
    s !== 0 && (n.height = t, n.visible && this._changeRowHeight(n, s));
  }
  setRowVisible(e, t) {
    const n = this.getRow(e);
    t !== n.visible && (n.setVisible(t), this._updateRowHeight(n, t ? "show" : "hide"), this._updateVisibleRowList(), this._updateFixedHeight());
  }
  setRowVisibleBulk(e, t) {
    const { length: n } = t;
    for (let s = 0; s < n; ++s) {
      const r = this._rowList[e + s], i = t[s];
      r.visible !== i && (r.setVisible(i), this._updateRowHeight(r, i ? "show" : "hide"));
    }
    this._updateVisibleRowList(), this._updateFixedHeight();
  }
  setRowFilter(e) {
    const t = this.headerRows;
    this.runFuncEachRow(
      (n) => n.render(),
      0,
      t
    ), this.runFuncEachRow(
      (n) => {
        const s = e(n);
        n.visible !== s && (n.setFiltered(!s), n.setVisible(s), this._updateRowHeight(n, s ? "show" : "hide"));
      },
      t
    ), this._updateVisibleRowList(), this._updateFixedHeight();
  }
  _updateVisibleRowList() {
    this._visibleRowList = this._rowList.filter((e) => e.visible);
  }
  _changeRowHeight(e, t) {
    this._rowsHeight -= t, e.rowId < this.headerRows && (this._headerRowsHeight -= t), e.rowId < this.freezedRows && (this._freezedRowsHeight -= t, this._gridHookFlow.emitSync("changedFreezedRowHeight", [this._freezedRowsHeight, this.freezedRows]));
  }
  _updateRowHeight(e, t) {
    if (t === "remove" && !e.visible) return;
    const n = e.height + qe, s = t === "add" || t === "show" ? n : -n;
    this._rowsHeight += s;
  }
  sort(e, t, n, s) {
    const r = this._rowList.slice(0, n), i = this._rowList.slice(n, s), l = this._rowList.slice(s);
    i.forEach((u) => u.unmount()), i.sort((u, d) => {
      let c = e(u, d);
      return c === 0 && (c = u.seq - d.seq), c * (t === "ASC" ? 1 : -1);
    }), this._rowList = [
      ...r,
      ...i,
      ...l
    ], this._updateVisibleRowList();
  }
  _unfreezeAllRows() {
    let e = this.headerRows, t = this._rowList[e];
    for (; t && t.isFreezed; )
      t.unfreeze(), t = this._rowList[++e];
  }
  _freezeRowsByCount(e) {
    let t = this.headerRows;
    for (let n = 0; n < e; n++) {
      const s = this._rowList[t];
      if (!s) break;
      s.freeze(), t++;
    }
  }
  freezeRows(e) {
    this._freezedRows = e, this._unfreezeAllRows(), this._freezeRowsByCount(e), this._updateFixedHeight();
  }
  renderRows() {
    this._visibleRowList.forEach((e) => e.render());
  }
  getTopByRowId(e) {
    return this.getRow(e).top;
  }
  getBottomByRowId(e) {
    return this.getRow(e).bottom;
  }
  getNextRowId() {
    return this._rowList.length;
  }
  getCell(e, t) {
    return this.getRow(e).getCell(t);
  }
  // interface를 위해 추가함
  cell(e, t) {
    return this.getCell(e, t);
  }
  getRowHeight(e) {
    return this._rowList[e].height;
  }
  getRowVisible(e) {
    return this._rowList[e]?.visible ?? !1;
  }
  getRowCount() {
    return this._rowList.length;
  }
  getVisibleRowCount() {
    return this._visibleRowList.length;
  }
  runFuncEachRow(e, t, n) {
    const s = t ?? 0, r = n ?? this.length;
    for (let i = s; i < r; i++) {
      const l = this._rowList[i];
      l && e(l);
    }
  }
  getStartOfRowId(e) {
    let t = this.getRow(e);
    for (; t; ) {
      const n = t.getTopRowId();
      if (n !== t.rowId)
        t = this.getRow(n);
      else
        return t.rowId;
    }
    throw new Error(`wrong searching row id from '${e}'`);
  }
  getEndOfRowId(e) {
    let t = this.getRow(e);
    for (; t; ) {
      const n = t.getBottomRowId();
      if (n !== t.rowId)
        t = this.getRow(n);
      else
        return t.rowId;
    }
    throw new Error(`wrong searching row id from '${e}'`);
  }
  /**
   * 현재 Column에서 가장 오른쪽에 있는 ColumnId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 Right을 반환
   */
  getEndColumnId(e) {
    return this.reduceRows({
      initValue: e,
      func: (t, n) => Math.max(t, n.getEndOfColumnId(e))
    });
  }
  getEndOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, s) => Math.max(n, s.getEndOfColumnId(e))
    });
    return t === e ? t : this.getEndOfColumnId(t);
  }
  getStartOfColumnId(e) {
    const t = this.reduceRows({
      initValue: e,
      func: (n, s) => Math.min(n, s.getStartOfColumnId(e))
    });
    return t === e ? t : this.getStartOfColumnId(t);
  }
  findRowOrNull(e, t, n) {
    const s = t < e + this.freezedRowsHeight ? {
      startIndex: 0,
      endIndex: n,
      curIndex: Math.floor(n / 2),
      scrollTop: e
    } : {
      startIndex: 0,
      endIndex: this.length,
      curIndex: Math.floor(this.length / 2),
      scrollTop: 0
    };
    let r = this.getRow(s.curIndex);
    for (; !(t >= s.scrollTop + r.top && t <= s.scrollTop + r.bottom); ) {
      if (t < s.scrollTop + r.top) {
        if (s.endIndex === s.curIndex)
          return null;
        s.endIndex = s.curIndex;
      } else {
        if (s.startIndex === s.curIndex)
          return null;
        s.startIndex = s.curIndex;
      }
      s.curIndex = Math.floor((s.startIndex + s.endIndex) / 2), r = this.getRow(s.curIndex);
    }
    return r;
  }
  reduceRows(e) {
    const {
      top: t = 0,
      bottom: n = this._rowList.length
    } = e;
    let s = e.initValue;
    for (let r = t; r < n; r++)
      s = e.func(s, this._rowList[r]);
    return s;
  }
  getRowByTop(e) {
    const t = this.visibleRowList;
    let n = 0, s = t.length - 1;
    for (; n <= s; ) {
      const r = n + Math.floor((s - n) / 2), i = t[r];
      if (i.isBetweenTop(e))
        return i;
      e < i.top ? s = r - 1 : n = r + 1;
    }
    return null;
  }
  get visibleRowList() {
    return this._visibleRowList;
  }
  get freezedRowsHeight() {
    return this._freezedRowsHeight;
  }
  get headerRowsHeight() {
    return this._headerRowsHeight;
  }
  get rowsHeight() {
    return this._rowsHeight;
  }
  get length() {
    return this._rowList.length;
  }
  get headerRows() {
    return this._headerRows;
  }
  get freezedRows() {
    return this._headerRows + this._freezedRows;
  }
  get bodyFreezedRows() {
    return this._freezedRows;
  }
  get firstRow() {
    return this._rowList[0];
  }
  get lastRow() {
    return this._rowList[this._rowList.length - 1];
  }
}
function _l() {
  const o = document.createElement("table"), e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div");
  return e.style.transform = "translateZ(0)", e.className = as, o.className = cs, t.className = us, n.className = ds, o.appendChild(t), o.appendChild(n), e.appendChild(o), { table: o, wrapper: e, freezedRows: t, bodyRows: n };
}
const Rl = 1e4;
function yl({ rowManager: o, colManager: e, commandManager: t, cursorManager: n, hook: s }) {
  const r = He("textarea", hs);
  r.style.padding = "0";
  let i = null;
  const l = {
    focus: d,
    runEditMode: C,
    setPosition: a,
    mountElement(y) {
      S(), y.appendChild(r);
    },
    hide() {
    },
    onEditDone(y, m, _, w, k, b) {
    },
    onEditKeyDown(y, m, _, w) {
    },
    onEnterOnEdit(y, m) {
    },
    onEditInput(y, m) {
    },
    onDragEnd(y) {
    }
  }, u = qn(l);
  return s.addSyncHook("contextScroll", (y, m, _) => {
    i && a(i.cell, m, _);
  }), r.ondragend = (y) => l.onDragEnd(y), l;
  function d() {
    r.focus({ preventScroll: !0 });
  }
  function c(y) {
    r.value = y;
  }
  function a(y, m, _) {
    const w = o.getRow(y.row), k = e.getColumn(y.col), b = y.row < o.freezedRows ? m : 0, M = y.col < e.freezedColumns ? _ : 0;
    r.style.top = `${w.top + b}px`, r.style.left = `${k.left + M}px`;
  }
  function h(y) {
    r.style.width = `${y.width}px`, r.style.height = `${y.height}px`;
  }
  function f(y) {
    const m = y === "" ? P.zLevel1 : `calc(${y} + 1000)`;
    r.style.zIndex = m;
  }
  function C(y, m, _, w = !1, k = !1) {
    i = {
      cell: y,
      beforeText: y.props.text ?? "",
      cancelEndEdit: !1
    }, r.style.removeProperty("padding"), w || c(i.beforeText), r.maxLength = y.props.maxLength ?? Rl, f(y.zIndexVariant), a(y, m, _), h(y), d(), r.scrollTo(0, r.scrollHeight), k && r.setSelectionRange(0, r.value.length), u.destroy(), u.create();
  }
  function T() {
    c(""), i = null, r.style.removeProperty("height"), r.style.removeProperty("width"), r.style.removeProperty("z-index");
  }
  function S() {
    r.addEventListener("keydown", x), r.addEventListener("blur", R), r.addEventListener("keyup", g), r.addEventListener("input", I);
  }
  function I(y) {
    i && l.onEditInput(y, r.value);
  }
  function g() {
    i || c("");
  }
  function x(y) {
    if (!i) return;
    const { beforeText: m, cell: _ } = i;
    if (y.key === "Escape") {
      v(r.value, !1, y.key);
      return;
    }
    if (y.key === " " && !y.ctrlKey) {
      y.preventDefault();
      const w = r.value, { selectionStart: k, selectionEnd: b } = r;
      r.value = w.slice(0, k) + " " + w.slice(b), r.selectionStart = k + 1, r.selectionEnd = k + 1, l.onEditInput(y, r.value);
      return;
    }
    if (y.key === "Enter" && y.altKey && _.metaInfo.editSingleLine !== !0) {
      y.preventDefault();
      const w = r.selectionStart;
      try {
        i.cancelEndEdit = !0, r.blur(), r.value = [
          r.value.substring(0, w),
          r.value.substring(r.selectionEnd)
        ].join(`
`), d(), r.setSelectionRange(w + 1, w + 1, "backward"), l.onEditKeyDown(y, _.row, _.col, _.props);
      } finally {
        i.cancelEndEdit = !1;
      }
      return;
    }
    if (p(y)) {
      y.preventDefault(), v(r.value, m !== r.value, y.key), y.key === "Enter" ? l.onEnterOnEdit(y.ctrlKey, y.shiftKey) : L(y.key, y.shiftKey);
      return;
    }
    l.onEditKeyDown(y, _.row, _.col, _.metaInfo);
  }
  function R() {
    !i || i.cancelEndEdit || (v(r.value, i.beforeText !== r.value, ""), u.destroy());
  }
  function v(y, m, _) {
    if (i)
      try {
        const { cell: w, beforeText: k } = i;
        if (m && w.checkInputValidation(y)) {
          const b = { text: y, beforeText: k };
          w.props.gridStore.hook.emit("cellEditDoneBeforeRender", [w.row, w.col, b]);
          const M = new Se(t.commandContext, [
            w.row,
            w.col,
            { text: b.text }
          ]);
          M.onUndo = () => {
            l.onEditDone(w, m, k, _, r.selectionStart, r.selectionEnd);
          }, M.onExecute = () => {
            l.onEditDone(w, m, k, _, r.selectionStart, r.selectionEnd);
          }, t.pushCommandBlock(new Ae(
            `Edit cell (${w.row}, ${w.col}) `,
            M
          )), w.props = { text: b.text };
        }
        l.onEditDone(w, m, k, _, r.selectionStart, r.selectionEnd);
      } finally {
        r.style.padding = "0", T();
      }
  }
  function p(y) {
    return y.key === "ArrowLeft" && r.selectionStart === 0 && r.selectionEnd === 0 || y.key === "ArrowUp" && r.selectionStart === 0 && r.selectionEnd === 0 || y.key === "ArrowRight" && r.selectionStart === r.textLength && r.selectionEnd === r.textLength || y.key === "ArrowDown" && r.selectionStart === r.textLength && r.selectionEnd === r.textLength || y.key === "Tab" ? !0 : y.key === "Enter" && !y.altKey && !y.ctrlKey && !y.shiftKey;
  }
  function L(y, m) {
    switch (y) {
      case "ArrowLeft":
        return n.selectNextSelection(0, -1, !1);
      case "ArrowRight":
        return n.selectNextSelection(0, 1, !1);
      case "ArrowUp":
        return n.selectNextSelection(-1, 0, !1);
      case "ArrowDown":
        return n.selectNextSelection(1, 0, !1);
      case "Tab":
        return m ? n.selectBeforeActiveCell() : n.selectNextActiveCell();
    }
  }
}
class We {
  _rowManager;
  _colManager;
  constructor(e, t) {
    this._rowManager = e, this._colManager = t;
  }
  *getSelectionGenerator({ top: e, left: t, bottom: n, right: s }) {
    s = Math.min(s, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let r = e; r <= n; r++)
      for (let i = t; i <= s; i++)
        yield this._rowManager.cell(r, i);
  }
  *getSelectionHeaderIterator({ top: e, left: t, bottom: n, right: s }) {
    s = Math.min(s, this._colManager.getColCount() - 1), n = Math.min(n, this._rowManager.getRowCount() - 1);
    for (let r = 0; r < this._rowManager.headerRows; ++r)
      for (let i = t; i <= s; ++i)
        yield this._rowManager.cell(r, i);
    for (let r = e; r <= n; ++r)
      for (let i = 0; i < this._colManager.headerColumns; ++i)
        yield this._rowManager.cell(r, i);
  }
  getCanClearCellCount(e, t) {
    let n = 0;
    for (const s of this.getSelectionGenerator(e))
      t(s) && n++;
    return n;
  }
}
function xl(o) {
  return o.top === o.bottom && o.left === o.right;
}
function bl(o) {
  return o.top > o.bottom || o.left > o.right;
}
function Sl(o, e) {
  let t = [];
  const n = new We(o, e), s = ({ top: d, left: c, bottom: a, right: h }) => t.some(({ mergeArea: f }) => c <= f.right && h >= f.left && d <= f.bottom && a >= f.top) === !1, r = (d, c) => {
    let a = 0;
    for (let h = d; h <= c; ++h)
      o.getRowVisible(h) && ++a;
    return a;
  }, i = (d, c) => {
    let a = 0;
    for (let h = d; h <= c; ++h)
      e.getColumnVisible(h) && ++a;
    return a;
  }, l = ({ top: d, left: c, bottom: a, right: h }) => {
    for (let f = d; f <= a; ++f)
      if (o.getRowVisible(f) === !1) return !0;
    for (let f = c; f <= h; ++f)
      if (e.getColumnVisible(f) === !1) return !0;
    return !1;
  }, u = (d, c) => {
    const a = o.getCell(d, c), h = t.indexOf(a);
    return h < 0 ? null : t[h];
  };
  return {
    isValidatedMerging: s,
    /**
     * header rows 하위 모든 병합된 cell 제거
     * @param headerRows
     */
    clearMergeCells(d) {
      t = t.filter(({ row: c }) => c < d);
    },
    mergeCells(d) {
      if (bl(d))
        throw new Error("Invalid range");
      if (s(d) === !1)
        throw new Error("Could not merging with Conflicted cells!");
      if (l(d))
        throw new Error("Could not merging with hidden cells!");
      if (xl(d))
        throw new Error("Could not merging with single cell!");
      const c = o.getCell(d.top, d.left);
      c.mergeInfo = { rowSpan: r(d.top, d.bottom), colSpan: i(d.left, d.right) }, t.push(c);
      for (const a of n.getSelectionGenerator(d))
        (a.row !== d.top || a.col !== d.left) && (a.mergeMain = c);
    },
    splitCells(d, c) {
      const a = u(d, c);
      if (!a)
        throw new Error("Could not split on a not merged cell!");
      for (const h of n.getSelectionGenerator(a.mergeArea))
        h.mergeMain = void 0, h.mergeInfo = { rowSpan: 1, colSpan: 1 };
      this.removeMergeCell(d, c);
    },
    isMerged(d, c) {
      return !s({ top: d, left: c, bottom: d, right: c });
    },
    *getMergedCellGenerator(d) {
      for (const c of n.getSelectionGenerator(d))
        (c.mergeInfo.rowSpan > 1 || c.mergeInfo.colSpan > 1) && (yield c);
    },
    removeMergeCell(d, c) {
      const a = u(d, c);
      if (!a)
        throw new Error("Could not split on a not merged cell!");
      t = t.filter((h) => h !== a);
    },
    /**
     * if exists conflicting rows between top and bottom.
     */
    checkConflictingInRows(d, c) {
      for (const { mergeArea: a } of t)
        if (a.top < d && a.bottom >= d && a.bottom <= c || a.bottom > c && a.top >= d && a.top <= c || a.top < d && a.bottom > c)
          return !0;
      return !1;
    },
    /**
     * if exists conflicting columns between left and right.
     */
    checkConflictingInColumns(d, c) {
      for (const { mergeArea: a } of t)
        if (a.left < d && a.right >= d && a.right <= c || a.right > c && a.left >= d && a.left <= c || a.left < d && a.right > c)
          return !0;
      return !1;
    },
    checkCanInsertRow(d) {
      for (const { mergeArea: c } of t)
        if (c.top < d && c.bottom >= d)
          return !1;
      return !0;
    },
    checkCanInsertColumn(d) {
      for (const { mergeArea: c } of t)
        if (c.left < d && c.right >= d)
          return !1;
      return !0;
    }
  };
}
class vl {
  _gridHookFlow = Js();
  // HTML Elements
  _elements;
  _gridThemeConfig;
  _rowManager;
  _columnManager;
  _mergeHandler;
  _commandManager;
  _gridTextarea;
  _gridStateContext;
  _gridCursorManager;
  constructor(e) {
    const t = Xn();
    this._gridThemeConfig = {
      "grid.paddingTop": t.getStoreValue("grid.paddingTop"),
      "grid.paddingBottom": t.getStoreValue("grid.paddingBottom"),
      "grid.paddingLeft": t.getStoreValue("grid.paddingLeft"),
      "grid.paddingRight": t.getStoreValue("grid.paddingRight"),
      "grid.defaultRowHeight": t.getStoreValue("grid.defaultRowHeight"),
      "grid.defaultColumnWidth": t.getStoreValue("grid.defaultColumnWidth"),
      "grid.defaultRowMinSize": t.getStoreValue("grid.defaultRowMinSize"),
      "grid.defaultRowMaxSize": t.getStoreValue("grid.defaultRowMaxSize"),
      "grid.defaultColumnMinSize": t.getStoreValue("grid.defaultColumnMinSize"),
      "grid.defaultColumnMaxSize": t.getStoreValue("grid.defaultColumnMaxSize"),
      "grid.defaultDropdownWidth": t.getStoreValue("grid.defaultDropdownWidth"),
      "grid.defaultFontFamily": t.getStoreValue("grid.defaultFontFamily"),
      "grid.defaultFontSize": t.getStoreValue("grid.defaultFontSize"),
      "grid.forceRenderLeftCol": t.getStoreValue("grid.forceRenderLeftCol"),
      "grid.forceRenderRightCol": t.getStoreValue("grid.forceRenderRightCol"),
      "grid.emptyDefaultHeight": t.getStoreValue("grid.emptyDefaultHeight")
    }, this._commandManager = e.gridCommandManager, this._rowManager = new Cl(e.headerRowCount, e.freezedRowCount, this._gridHookFlow), this._columnManager = new wl(e.headerColumnCount, e.freezedColumnCount, this._gridHookFlow), this._gridCursorManager = e.cursorManager, this._mergeHandler = Sl(this._rowManager, this._columnManager), this._gridTextarea = yl({
      hook: this._gridHookFlow,
      rowManager: this._rowManager,
      colManager: this._columnManager,
      commandManager: this._commandManager,
      cursorManager: this._gridCursorManager
    }), this._gridStateContext = e.gridStateContext, this._elements = _l();
  }
  setGridConfig(e) {
    Object.assign(this._gridThemeConfig, e);
  }
  // theme
  getThemeValue(e) {
    return this._gridThemeConfig[e];
  }
  // shared utility
  get elements() {
    return this._elements;
  }
  get tableElement() {
    return this._elements.table;
  }
  get hook() {
    return this._gridHookFlow;
  }
  get mergeHandler() {
    return this._mergeHandler;
  }
  get rowManager() {
    return this._rowManager;
  }
  get columnManager() {
    return this._columnManager;
  }
  get commandManager() {
    return this._commandManager;
  }
  /**
   * 가능하면 쓰지 말 것
   * @deprecated
   */
  get commandContext() {
    return this._commandManager.commandContext;
  }
  get gridTextarea() {
    return this._gridTextarea;
  }
  get gridStateContext() {
    return this._gridStateContext;
  }
  get cursorManager() {
    return this._gridCursorManager;
  }
}
const kl = /^var\((.+)\)$/;
function en(o) {
  const e = kl.exec(o);
  if (e && e.length > 0)
    return e[1];
  throw new Error(`'${o}' is not custom-property name.`);
}
const Il = [
  P.zLevel0,
  P.zLevel1,
  P.zLevel2,
  P.zLevel3,
  P.zLevel4,
  P.zLevel5,
  P.zLevel6,
  P.zLevel7,
  P.zLevel8,
  P.zLevel9
], El = [
  [
    "horizontalAlign",
    { key: "text-align" }
  ],
  [
    "verticalAlign",
    {
      key: "justify-content",
      custom: {
        top: "flex-start",
        middle: "center",
        bottom: "flex-end"
      }
    }
  ],
  [
    "fontSize",
    { key: "font-size" }
  ],
  [
    "fontFamily",
    { key: "font-family" }
  ],
  [
    "textColor",
    { key: "color" }
  ],
  [
    "backColor",
    { key: "background-color" }
  ],
  [
    "textDecoration",
    { key: "text-decoration" }
  ],
  [
    "fontWeight",
    { key: "font-weight" }
  ]
], oe = {
  lv9: 9,
  lv8: 8,
  lv7: 7,
  lv6: 6,
  lv5: 5,
  lv4: 4,
  lv3: 3
}, Ml = /* @__PURE__ */ new Set([
  oe.lv9,
  oe.lv7,
  oe.lv6,
  oe.lv4,
  oe.lv3
]);
class Tl {
  _tag;
  _cellProps;
  _row = -1;
  _col = -1;
  _rowSpan = 1;
  _colSpan = 1;
  _visible = !0;
  _needRender = !0;
  _zIndex = null;
  _left = 0;
  _top = 0;
  _width = 0;
  _height = 0;
  _isDragOver = !1;
  _mergeMain;
  _isActivate = !1;
  _cellRenderer;
  _isRemoved = !1;
  _element = null;
  _mark;
  _cellType;
  constructor({ row: e, col: t, tag: n, props: s, cellRenderer: r, cellType: i }) {
    this._cellProps = { ...s }, this._tag = n, this._cellRenderer = r, this._row = e, this._col = t, this._cellType = i;
  }
  /*
   * Getters
   */
  get isFreezed() {
    return this.element.classList.contains(rn) || this.element.tagName === "TH";
  }
  /**
   * @version ^2.18.0
   */
  get width() {
    return this._width;
  }
  /**
   * @version ^2.18.0
   */
  get height() {
    return this._height;
  }
  /**
   * @version ^2.18.0
   */
  get isRemoved() {
    return this._isRemoved;
  }
  get renderType() {
    return this._getRenderInstance().renderType;
  }
  get dropDisabled() {
    return this._cellProps.dropDisabled;
  }
  get isHeaderCell() {
    return this.element.tagName === "TH";
  }
  get isMerged() {
    return this._rowSpan > 1 || this._colSpan > 1;
  }
  get isSelected() {
    return this.element.classList.contains("is-selected");
  }
  get innerHeight() {
    return this._getRenderInstance().getCellInnerHeight(this.element, this._cellProps);
  }
  get fontSize() {
    return this._cellProps.fontSize ? this._cellProps.fontSize : this._element ? getComputedStyle(this._element).fontSize : Tn("grid.defaultFontSize", ln.fontSizeBase, "fontSize");
  }
  get fontFamily() {
    return this._cellProps.fontFamily ? this._cellProps.fontFamily : this._element ? getComputedStyle(this._element).fontFamily : Tn("grid.defaultFontFamily", ln.fontFamilyBase, "fontFamily");
  }
  get mergeArea() {
    return {
      top: this.row,
      left: this.col,
      bottom: this.row + this._rowSpan - 1,
      right: this.col + this._colSpan - 1
    };
  }
  /**
   * IRGrid 셀 내부 너비 계산 값
   */
  get innerWidth() {
    return this._getRenderInstance().getCellInnerWidth(this.fontSize, this.fontFamily, this._cellProps);
  }
  /**
   * 렌더러 내부에서 사용하는 별도 컨텐츠 너비 계산 값
   * @example Select 렌더러의 Dropdown 영역 너비
   */
  get rendererInnerWidth() {
    return this._getRenderInstance().getRendererInnerWidth(this.fontSize, this.fontFamily, this._cellProps);
  }
  get mergeInfo() {
    return {
      rowSpan: this._rowSpan,
      colSpan: this._colSpan
    };
  }
  get mergeMain() {
    return this._mergeMain;
  }
  get row() {
    return this._row;
  }
  get col() {
    return this._col;
  }
  get colSpan() {
    return this._colSpan;
  }
  get rowSpan() {
    return this._rowSpan;
  }
  get bottom() {
    return this.row + this.mergeInfo.rowSpan - 1;
  }
  get right() {
    return this.col + this.mergeInfo.colSpan - 1;
  }
  /**
   * 이 visible 정보는 cell 병합으로 인해 숨겨진 셀의 표시 여부만 확인이 가능합니다.
   * 숨겨진 행, 열의 경우에는 IRGrid.getCellVisible 메서드를 사용해야 합니다.
   */
  get visible() {
    return this._visible;
  }
  get cellRenderer() {
    return this._cellRenderer;
  }
  get canClear() {
    const { disabled: e, readonly: t, text: n } = this.props, s = this._getRenderInstance();
    return e !== !0 && t !== !0 && n !== "" && (s.editable || s.canBeClear);
  }
  get text() {
    const { text: e } = this._cellProps;
    return e ?? "";
  }
  get cellType() {
    return this._cellType;
  }
  get value() {
    return this._cellProps.value;
  }
  get cellAddress() {
    return `${this.row},${this.col}`;
  }
  get object() {
    return this._cellProps.object;
  }
  /**
   * @deprecated 대신 props를 쓰세요.
   */
  get metaInfo() {
    return this._cellProps;
  }
  get props() {
    return this._cellProps;
  }
  get element() {
    return this._element === null ? this._initElement() : this._element;
  }
  get needRender() {
    return this._needRender;
  }
  get isConnected() {
    return this._element === null ? !1 : this._element.parentElement !== null;
  }
  get editable() {
    return !(this._cellType !== "body-cell" || this._cellProps.editable === !1 || this._cellProps.disabled || this.onCheckReadonly() || this._getRenderInstance().editable === !1);
  }
  get cellInfo() {
    return this._cellProps;
  }
  get zIndexVariant() {
    return this.element.style.getPropertyValue(en(P.stickyCellZId));
  }
  /*
   * Setters
   */
  set visible(e) {
    e && !this.mergeMain ? (this._visible = !0, this.render()) : (this._visible = !1, this.unmount());
  }
  set isDragOver(e) {
    this._isDragOver = e, this._updateCellCls();
  }
  set text(e) {
    this.props = { text: e };
  }
  /**
   * @deprecated 대신 props를 쓰세요.
   */
  set cellInfo(e) {
    this.props = e;
  }
  set props(e) {
    Object.assign(this._cellProps, e), this.render(), this.renderInstance instanceof Ce && this.renderInstance.onUpdateCell(this._row, this._col, e);
  }
  set mergeInfo({ rowSpan: e = 1, colSpan: t = 1 }) {
    this._rowSpan = e, this._colSpan = t, this.render();
  }
  set mergeMain(e) {
    this._mergeMain = e, this.visible = e === void 0, e !== void 0 && this.unmount();
  }
  set row(e) {
    this._row = e, this.setNeedRender(), this._element?.setAttribute("data-row", e.toString());
  }
  set col(e) {
    this._col = e, this.setNeedRender(), this._element?.setAttribute("data-col", e.toString());
  }
  set cellRenderer(e) {
    this._cellRenderer = e, this.render();
  }
  /*
   * Private Methods
   */
  _removeChildren() {
    for (; this._element.lastChild; )
      this._element.lastChild.remove();
  }
  _addMark(e) {
    this._mark || (this._mark = document.createElement("span")), this._mark.className = e, this._element.appendChild(this._mark);
  }
  _removeMark() {
    this._mark && (this._mark.remove(), this._mark = void 0);
  }
  /**
   * @version ^2.18.0
   */
  get renderInstance() {
    return this._getRenderInstance();
  }
  _getRenderInstance() {
    if (this._cellRenderer instanceof Ce)
      return this._cellRenderer;
    if (typeof this._cellRenderer == "function") {
      const e = this._cellRenderer(this.row, this.col, this._cellProps);
      if (e instanceof Ce)
        return e;
      if (e instanceof HTMLElement)
        return new Co(() => e);
    }
    throw new Error("Invalid cell renderer");
  }
  _getRenderElement() {
    return this._getRenderInstance().render(this._row, this._col, this._cellProps);
  }
  _applyCustomProp(e, t) {
    t !== void 0 ? fe(this._element, { [e]: `${t}px` }) : fe(this._element, { [e]: void 0 });
  }
  _updateCellAttr() {
    const {
      paddingTop: e,
      paddingLeft: t,
      paddingRight: n,
      paddingBottom: s
    } = this._cellProps;
    this._applyCustomProp(P.cellTopPadding, e), this._applyCustomProp(P.cellLeftPadding, t), this._applyCustomProp(P.cellRightPadding, n), this._applyCustomProp(P.cellBottomPadding, s);
  }
  _updateCellCls() {
    if (!this._element) return;
    const e = [fs, this._tag === "th" ? gs : ms];
    this.props.class && e.push(this.props.class), this._zIndex !== null && e.push(rn), this._cellProps.disabled && e.push("is-disabled"), this._cellProps.sortOrder === "ASC" && e.push("is-asc"), this._cellProps.sortOrder === "DESC" && e.push("is-desc"), this.isSelected && e.push("is-selected"), this.onCheckReadonly() && e.push("is-readonly"), this._isDragOver && e.push("is-dragging"), this._isActivate && e.push("is-active"), this._element.className = e.join(" ");
  }
  _updateCellLayout() {
    this._element && (this._element.style.top = `${this._top}px`, this._element.style.left = `${this._left}px`, this._element.style.width = `${this._width}px`, this._element.style.height = `${this._height}px`);
  }
  _updateCellStatus() {
    this._element && (this._cellProps.isError ? this._addMark(ps) : this._cellProps.hasMemo ? this._addMark(ws) : this._mark && this._removeMark(), this._applyCellStyle());
  }
  _applyCellStyle() {
    if (this._element)
      for (const [e, t] of El) {
        const n = this._cellProps[e];
        if (n === void 0) {
          this._element.style.removeProperty(t.key);
          continue;
        }
        this._element.style.setProperty(
          t.key,
          t.custom ? t.custom[n] : n.toString()
        );
      }
  }
  _initElement() {
    const e = document.createElement(this._tag);
    return this._element = e, this._rowSpan > 1 && (e.rowSpan = this._rowSpan), this._colSpan > 1 && (e.colSpan = this._colSpan), e.setAttribute("data-row", this._row.toString()), e.setAttribute("data-col", this._col.toString()), e.setAttribute("data-type", this._cellType), this._updateStickyZId(), this._updateCellLayout(), e;
  }
  /*
   * Public Methods
   */
  select() {
    this.isSelected || (this._updateCellCls(), this.onSelect(this));
  }
  setNeedRender() {
    this._needRender = !0;
  }
  updateHeight(e) {
    this._height !== e && (this._height = e, this._updateCellLayout());
  }
  updateWidth(e) {
    this._width !== e && (this._width = e, this._updateCellLayout());
  }
  updateCellLayout(e, t, n, s, r) {
    this._zIndex && Ml.has(this._zIndex) && (t += r), !(this._top === e && this._left === t && this._height === n && this._width === s) && (this._top = e, this._height = n, this._left = t, this._width = s, this._updateCellLayout());
  }
  unmount() {
    this._element?.remove();
  }
  remove() {
    this.unmount(), this._isRemoved = !0;
  }
  recover() {
    this._isRemoved = !1;
  }
  updateCellMetaInfo(e, t) {
    Object.assign(this._cellProps, e), t && Object.assign(this._cellProps, { text: t }), this.render();
  }
  release() {
    this.deactivate();
  }
  activate() {
    this._isActivate = !0, this._updateCellCls(), this._mergeMain?.activate();
  }
  deactivate() {
    this._isActivate = !1, this._updateCellCls(), this._mergeMain?.deactivate();
  }
  updateReadonlyStatus() {
    this._updateCellCls();
  }
  _updateStickyZId() {
    this._element && (this._zIndex === null ? this._element.style.removeProperty(P.stickyCellZId) : fe(this._element, { [P.stickyCellZId]: Il[this._zIndex] }));
  }
  setStickyZIndex(e) {
    this._zIndex = e, this._updateStickyZId(), this._updateCellCls();
  }
  checkInputValidation(e) {
    return this.props.enabledPatternCheck && this.props.allowedRegExpPattern ? this.props.allowedRegExpPattern.test(e) : !0;
  }
  _renderInnerCell() {
    this._element || this._initElement(), this._removeChildren(), this._updateCellStatus(), this._updateCellAttr(), this._updateCellCls(), this._element.appendChild(this._getRenderElement()), this._needRender = !1, this.onPostRender();
  }
  render() {
    this._element !== null && this.visible && this._renderInnerCell();
  }
  clear() {
    this._cellProps.value && delete this._cellProps.value, this.props = { text: "" }, this.onClear(this);
  }
  /*
   * Events
   */
  onClick(e, t) {
    this.props.gridStore.hook.emitSync("cellClick", [e, t]);
  }
  onDblClick(e) {
    this.props.gridStore.hook.emitSync("cellDblClick", [e]);
  }
  onRightClick(e, t) {
    this.props.gridStore.hook.emitSync("cellRightClick", [t, e]);
  }
  onPostRender() {
    this.props.gridStore.hook.emitSync("postRenderCell", [this]);
  }
  onSelect(e) {
    this.props.gridStore.hook.emitSync("cellSelect", [e]);
  }
  onClear(e) {
    this.props.gridStore.hook.emitSync("cellClear", [e]);
  }
  onCheckReadonly() {
    return this._cellProps.readonly === !0;
  }
}
function Tn(o, e, t) {
  const n = Xn().getStoreValue(o);
  return n === e ? getComputedStyle(document.documentElement)[t] : n;
}
class Ll extends Ut {
  constructor() {
    super([]);
  }
}
class Hl extends Ut {
  constructor() {
    super({ mode: "idle", contextParam: {} });
  }
  get isIdle() {
    return this.value.mode === "idle";
  }
}
class bt {
  _grid;
  _generator;
  constructor(e) {
    this._grid = e, this._generator = new We(e, e);
  }
  adjustRange(e) {
    const [t, n] = [this._grid.headerRows, this._grid.getRowCount() - 1], [s, r] = [this._grid.headerColumns, this._grid.getColCount() - 1], i = {
      top: K(e.top, t, n),
      left: K(e.left, s, r),
      bottom: K(e.bottom, t, n),
      right: K(e.right, s, r)
    };
    return i.top > n || i.bottom < t || i.left > r || i.right < s ? null : i;
  }
  extendRange(e) {
    const t = this._generator, n = { ...e }, s = [...t.getSelectionGenerator(e)];
    for (; s.length; ) {
      const r = s.pop();
      if (!r.isMerged && !r.mergeMain) continue;
      const i = r.mergeMain ? r.mergeMain.mergeArea : r.mergeArea;
      if (i.top < n.top) {
        const l = t.getSelectionGenerator(
          {
            top: i.top,
            left: n.left,
            bottom: n.top - 1,
            right: n.right
          }
        );
        for (const u of l)
          s.push(u);
        n.top = i.top;
      }
      if (i.left < n.left) {
        const l = t.getSelectionGenerator(
          {
            top: n.top,
            left: i.left,
            bottom: n.bottom,
            right: n.left - 1
          }
        );
        for (const u of l)
          s.push(u);
        n.left = i.left;
      }
      if (n.bottom < i.bottom) {
        const l = t.getSelectionGenerator(
          {
            top: n.bottom + 1,
            left: n.left,
            bottom: i.bottom,
            right: n.right
          }
        );
        for (const u of l)
          s.push(u);
        n.bottom = i.bottom;
      }
      if (n.right < i.right) {
        const l = t.getSelectionGenerator(
          {
            top: n.top,
            left: n.right + 1,
            bottom: n.bottom,
            right: i.right
          }
        );
        for (const u of l)
          s.push(u);
        n.right = i.right;
      }
    }
    return n;
  }
  getTextMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        $(e.left, e.right + 1).map((s) => this._grid.cell(n, s).text)
      );
    return t;
  }
  getCellMatrixByRange(e) {
    const t = [];
    for (let n = e.top; n <= e.bottom; ++n)
      t.push(
        $(e.left, e.right + 1).map((s) => this._grid.cell(n, s))
      );
    return t;
  }
  getCellListByColumn(e, t) {
    const s = this._grid.getRowCount() - 1;
    return [...this._generator.getSelectionGenerator({ top: 0, left: e, bottom: s, right: t })];
  }
  getColumnListByColumn(e, t) {
    return $(e, t + 1).map((n) => this._grid.getColumn(n));
  }
}
class Ol extends Ut {
  constructor(e) {
    super(null, (t) => {
      const n = new bt(e);
      return t.pipe(
        // activeCell이, range를 벗어난다면 재조정
        vt((s) => {
          if (!s || e.getRowCount() === e.headerRows && e.getColCount() === e.headerColumns) return null;
          const { activeCell: r, range: i } = s;
          return r.row >= i.top && r.row <= i.bottom && r.col >= i.left && r.col <= i.right ? s : {
            activeCell: e.cell(i.top, i.left),
            range: s.range
          };
        }),
        // grid row / column에 맞게 재조정 (adjust)
        vt((s) => {
          if (!s) return null;
          const r = n.adjustRange(s.range);
          return r ? { activeCell: s.activeCell, range: r } : null;
        }),
        // 범위 내 병합 셀에 따라 범위 확장 (extend)
        vt((s) => s ? { activeCell: s.activeCell, range: n.extendRange(s.range) } : null)
      );
    });
  }
}
class Al {
  _selectionState;
  _gridModeState;
  _headerCellListState;
  constructor(e) {
    this._selectionState = new Ol(e), this._gridModeState = new Hl(), this._headerCellListState = new Ll();
  }
  setIdle() {
    this.setMode({ mode: "idle", contextParam: {} });
  }
  setMode(e) {
    this.gridModeState.next(e);
  }
  get isIdle() {
    return this._gridModeState.isIdle;
  }
  get selectionRangeState() {
    return this._selectionState;
  }
  get gridModeState() {
    return this._gridModeState;
  }
  get activateHeaderCellState() {
    return this._headerCellListState;
  }
}
class Ne {
  _mountRollbackStack = [];
  _isMounted = !1;
  _pluginAPI = null;
  _gridHook = null;
  _mountTask(e) {
    throw new Error("unmount method not implemented.");
  }
  addRollbackTask(e) {
    this._mountRollbackStack.push(e);
  }
  addPluginSyncHook(e, t) {
    const n = this._gridHook;
    if (!n) throw new Error("Grid hook is not initialized. You must mount the plugin first.");
    n.addSyncHook(e, t), this.addRollbackTask(() => n.removeSyncHook(e, t));
  }
  mount(e) {
    if (this.isMounted)
      throw new Error("Already mounted plugin!");
    try {
      this._gridHook = e.grid.hook, this._mountTask(e), this._isMounted = !0;
    } catch (t) {
      console.error("Plugin mount error!", t), this.unmount();
    }
  }
  unmount() {
    if (!this.isMounted)
      throw new Error("Already unmounted plugin!");
    try {
      for (const e of this._mountRollbackStack)
        e();
      this._mountRollbackStack.length = 0, this._isMounted = !1;
    } catch (e) {
      console.error("Plugin unmount error!", e);
    }
  }
  setPluginAPI(e) {
    return this._pluginAPI = e, this._pluginAPI;
  }
  get pluginAPI() {
    if (this._pluginAPI === null) throw new Error("Plugin API is not initialized. You muse read this property since addPlugin.");
    return this._pluginAPI;
  }
  get isMounted() {
    return this._isMounted;
  }
}
class zl {
  _grid;
  _rowType;
  _cells;
  _rowId;
  _rowElement = null;
  _viewportCellList = [];
  _isMounted;
  _filtered;
  _isHeaderRow;
  _isFreezed;
  _top = -1;
  _stickyColumns = 0;
  _height = 0;
  _seq;
  _visible = !0;
  _isCalledOnMounted = !1;
  constructor({ grid: e, rowId: t, height: n, top: s, rowType: r, seq: i }) {
    this._grid = e, this._cells = [], this._rowType = r, this._rowId = t, this._seq = i, this._isMounted = !1, this._isFreezed = !1, this._isHeaderRow = !1, this._filtered = !1, this._height = n, this._top = s;
  }
  /**
   * Getters
   */
  get rowInnerHeight() {
    return this._cells.filter((e) => e.visible && e.mergeInfo.rowSpan === 1).reduce((e, t) => Math.max(e, t.innerHeight), 0);
  }
  get isFreezed() {
    return this._isFreezed;
  }
  /**
   * 각 Grid별 Row 생성 시퀀스 id
   */
  get seq() {
    return this._seq;
  }
  get isMounted() {
    return this._isMounted;
  }
  get rowId() {
    return this._rowId;
  }
  get isHeaderRow() {
    return this._isHeaderRow;
  }
  get cellCounts() {
    return this._cells.length;
  }
  get rowType() {
    return this._rowType;
  }
  _updateVars() {
    if (!this._rowElement) return;
    const e = this._rowElement;
    e.setAttribute("data-top", this._top.toString()), e.setAttribute("data-row", this._rowId.toString());
  }
  _initRowElement() {
    const e = document.createElement("tr");
    return this._rowElement = e, this._updateVars(), this.updateStickyStatus(), this.onRenderRow(e), e;
  }
  get element() {
    return this._rowElement === null ? this._initRowElement() : this._rowElement;
  }
  get textColor() {
    return this.element.style.color;
  }
  get height() {
    return this._height;
  }
  get heightWithBorder() {
    return this._height + qe;
  }
  get bottom() {
    return this.visible ? this._top + this.heightWithBorder : this._top;
  }
  get stickyColumns() {
    return this._stickyColumns;
  }
  get top() {
    return this._top;
  }
  get visible() {
    return this._visible;
  }
  get filtered() {
    return this._filtered;
  }
  /*
   * Setters
   */
  set rowId(e) {
    this._rowElement && (this._rowElement.dataset.row = e.toString()), this._rowId = e, this._cells.forEach((t) => t.row = e);
  }
  set textColor(e) {
    this.element.style.color = e;
  }
  set height(e) {
    this._height = e, this.updateRowHeight();
  }
  set top(e) {
    this._top = e, this._updateVars();
  }
  /*
   * Public Methods
   */
  setVisible(e) {
    if (e && this.filtered) throw new Error("It can not set visible to be true when filtered is true.");
    this._visible = e;
  }
  setFiltered(e) {
    this._filtered = e;
  }
  /**
   * @version ^2.18.1
   */
  remove() {
    this.unmount(), this._cells.forEach((e) => e.remove());
  }
  /**
   * @version ^2.20.0
   */
  recover() {
    this._cells.forEach((e) => e.recover());
  }
  unmount() {
    this._isMounted = !1, this._rowElement?.remove();
  }
  /**
   * 해당 셀의 right columnId를 얻어옴. 병합된 경우 columnId보다 큰 값을 반환하게 된다.
   */
  getEndOfColumnId(e) {
    const { col: t, mergeInfo: n, mergeMain: s } = this._cells[e];
    return s ? s.right : t + n.colSpan - 1;
  }
  getStartOfColumnId(e) {
    const { mergeMain: t } = this._cells[e];
    return t ? t.col : e;
  }
  getMaxCellWidth(e, t) {
    return $(e, t).reduce((n, s) => {
      const r = this._cells[s];
      return r.visible && r.mergeInfo.colSpan === 1 ? Math.max(n, r.innerWidth) : n;
    }, 0);
  }
  renderColumns(e, t) {
    if (this._rowElement !== null)
      for (let n = e; n <= t; n++)
        this._cells[n].render();
  }
  updateColumnWidth(e, t) {
    const n = this._cells[e];
    n.updateWidth(
      n.colSpan === 1 ? t : this._grid.getColWidthWithSpan(n.col, n.colSpan)
    );
  }
  removeCells(e, t) {
    const n = 1 + t - e;
    this._cells.splice(e, n).forEach((r) => r.remove()), $(e, this._cells.length).forEach((r) => this._cells[r].col -= n);
  }
  /**
   * 현재 row에서 가장 위에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 top을 반환
   */
  getTopRowId() {
    let e = this._rowId;
    for (const t of this._cells)
      t.mergeMain && (e = Math.min(e, t.mergeMain.row));
    return e;
  }
  getLeftColumnId(e) {
    return this._cells[e].mergeMain ? this._cells[e].mergeMain.col : e;
  }
  /**
   * 현재 row에서 가장 아래에 있는 rowId 반환
   * 내부에 병합된 셀이 있는 경우, 해당 셀이 참조하는 셀의 bottom을 반환
   */
  getBottomRowId() {
    let e = this._rowId;
    for (const t of this._cells)
      t.mergeMain ? e = Math.max(e, t.mergeMain.bottom) : t.mergeInfo.rowSpan > 1 && (e = Math.max(e, t.bottom));
    return e;
  }
  getFreezedCellType(e) {
    const t = e < this._grid.getFreezedColumnCount();
    return this.isHeaderRow ? t ? oe.lv9 : oe.lv8 : this.isFreezed ? t ? e < this._grid.headerColumns ? oe.lv7 : oe.lv6 : oe.lv5 : t ? e < this._grid.headerColumns ? oe.lv4 : oe.lv3 : null;
  }
  addCell(e) {
    this._cells.push(e), e.setStickyZIndex(this.getFreezedCellType(e.col));
  }
  insertCells(e, t) {
    if (this._cells.length < t)
      throw new Error(`Out of length at the row. the length is ${this._cells.length} and you tried inserting with ${t}`);
    $(t, this._cells.length).forEach((n) => this._cells[n].col += e.length), this._cells.splice(t, 0, ...e), e.forEach((n) => n.setStickyZIndex(this.getFreezedCellType(n.col)));
  }
  reorderCells() {
    this._cells.forEach((t, n) => void (t.col = n));
    const e = this._rowElement;
    e && (Qs(e), this._cells.forEach((t) => void e.appendChild(t.element)));
  }
  exchangeCells([e, t], [n, s]) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (s < n) throw new Error("targetStart should be less than targetEnd!");
    if (e <= s && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n},${s}`);
    const [r, i, l, u] = e < n ? [e, t, n, s] : [n, s, e, t];
    this._cells = [
      ...this._cells.slice(0, r),
      ...this._cells.slice(l, u + 1),
      ...this._cells.slice(i + 1, l),
      ...this._cells.slice(r, i + 1),
      ...this._cells.slice(u + 1)
    ], this.reorderCells();
  }
  moveCells([e, t], n) {
    if (t < e) throw new Error("sourceStart should be less than sourceEnd!");
    if (e <= n && t >= n)
      throw new Error(`Ranges overlap! source: ${e},${t}, target: ${n}`);
    const s = this._cells.splice(e, t - e + 1), r = e < n ? n - s.length : n;
    this._cells.splice(r, 0, ...s), this.reorderCells();
  }
  render() {
    if (this._viewportCellList.length !== 0 && this._rowElement && this.visible) {
      for (const e of this._viewportCellList)
        e.render();
      this.onRenderRow(this._rowElement);
    }
  }
  getCell(e) {
    const t = this._cells[e];
    if (!t) throw new Error(`Not found cell ${this._rowId}, ${e}`);
    return t;
  }
  getCellUnstable(e) {
    return this._cells[e];
  }
  setRowInfo(e) {
    const {
      textData: t,
      cellMetaInfo: n
    } = e;
    this._cells.forEach((s, r) => s.updateCellMetaInfo(n, t?.[r]));
  }
  *getCellGenerator(e = 0, t = this._cells.length - 1) {
    for (let n = e; n <= t; ++n)
      yield this._cells[n];
  }
  setColumnVisible(e, t) {
    this._cells[e].visible = t;
  }
  getColumnVisible(e) {
    return this._cells[e].visible;
  }
  setAutoHeight(e, t) {
    const n = Math.ceil(this.rowInnerHeight), s = K(isNaN(n) ? 0 : n, e, t);
    return this.height !== s ? (this.height = s, !0) : !1;
  }
  _removeCellsByColIdList() {
    const e = new Set(this._viewportCellList);
    for (const t of this._cells)
      t.isConnected && (!e.has(t) || t.mergeMain) && t.unmount();
  }
  updateRowHeight() {
    this._cells.forEach((e) => {
      e.updateHeight(e.rowSpan === 1 ? this._height : this._grid.getRowHeightWithSpan(this._rowId, e.rowSpan));
    });
  }
  updateViewportCells(e, t, n) {
    this._viewportCellList = e, this._removeCellsByColIdList();
    const { rowId: s, top: r, heightWithBorder: i } = this;
    let l = null;
    for (const u of e) {
      if (u.mergeMain) continue;
      const { needRender: d } = u, c = u.element;
      u.isConnected || (l === null ? this.element.prepend(c) : l.after(c));
      const { rowSpan: a, colSpan: h, col: f } = u, C = {
        top: r,
        left: this._grid.getColumnLeft(f),
        width: h === 1 ? this._grid.getColumnWidth(f) + 1 : this._grid.getColWidthWithSpan(f, h),
        height: a === 1 ? i : this._grid.getRowHeightWithSpan(s, a),
        scrollLeft: n,
        scrollTop: t
      };
      this._grid.hook.emitSync("cellLayout", [s, f, C]), u.updateCellLayout(
        C.top,
        C.left,
        C.height,
        C.width,
        C.scrollLeft
      ), d && u.render(), l = c;
    }
  }
  mount(e, t) {
    this.isMounted || (e.insertAdjacentElement(t, this.element), this._isMounted = !0, this._isCalledOnMounted || (this._isCalledOnMounted = !0, this.onMounted(this)));
  }
  freeze(e = !1) {
    this._isFreezed = !0, e && (this._isHeaderRow = !0), this._rowElement && this.updateStickyStatus();
  }
  isBetweenTop(e) {
    return e >= this.top && e <= this.bottom;
  }
  updateStickyStatus() {
    this._rowElement && this._cells.reduce((e, t, n) => (t.setStickyZIndex(this.getFreezedCellType(n)), e + (this._grid.getColumnVisible(n) ? this._grid.getColumnWidth(n) + ve : 0)), 0);
  }
  // row에 있는 모든 셀에 metaInfo 일괄 적용
  updateCellMetaInfo(e) {
    this._cells.forEach((t) => t.cellInfo = e);
  }
  freezeColumns(e) {
    this._stickyColumns = e, this.updateStickyStatus();
  }
  unfreeze() {
    if (this.isHeaderRow) throw new Error("Can not freeze header row!");
    this._isFreezed = !1, this._rowElement && this.updateStickyStatus();
  }
  /*
   * Events
   */
  onMounted(e) {
    this.freezeColumns(this._grid.getFreezedColumnCount()), this._grid.onMountedRow(this.rowId);
  }
  onRenderRow(e) {
    this._grid.hook.emit("renderRowElement", [this, e]);
  }
}
const Fl = 4, st = "is-hidden";
function Pl(o, e) {
  return o.top > e.bottom || e.top > o.bottom || o.left > e.right || e.left > o.right ? null : {
    top: Math.max(o.top, e.top),
    left: Math.max(o.left, e.left),
    bottom: Math.min(o.bottom, e.bottom),
    right: Math.min(o.right, e.right)
  };
}
const $l = Rs, Dl = [
  ys,
  xs,
  bs,
  Ss
], Wl = ["top", "left", "bottom", "right"];
function Nl(o) {
  const e = document.createElement("div"), t = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ], n = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ], [s, r, i, l] = n, u = [s, i], d = [r, l];
  e.classList.add(Cs, st), n.forEach((g, x) => g.className = `${_s} border-line__${Wl[x]}`), t.forEach((g) => e.appendChild(g)), n.forEach((g) => e.appendChild(g));
  function c(g) {
    const { top: x, left: R, bottom: v, right: p } = f(g), { scrollTop: L, scrollLeft: y } = o;
    let m = 0, _ = 0;
    return g.top < o.getFreezedRowCount() && (_ = L), g.left < o.getFreezedColumnCount() && (m = y), {
      top: x + _,
      left: R + m,
      width: Math.max(0, p - R),
      height: v - x
    };
  }
  function a(g) {
    g.classList.add(st), delete g.dataset.top, delete g.dataset.left, delete g.dataset.bottom, delete g.dataset.right, delete g.dataset.visible;
  }
  function h(g, x) {
    const R = t[g], v = c(x);
    R.className = `${$l} ${Dl[g]}`, Object.assign(R.dataset, {
      top: String(x.top),
      left: String(x.left),
      bottom: String(x.bottom),
      right: String(x.right),
      visible: "true"
    }), R.style.top = `${v.top}px`, R.style.left = `${v.left}px`, R.style.width = `${v.width}px`, R.style.height = `${v.height}px`;
  }
  function f(g) {
    return {
      top: o.getRow(g.top).top - qe,
      left: o.getColumn(g.left).left - ve,
      bottom: o.getRow(g.bottom).bottom,
      right: o.getColumn(g.right).right
    };
  }
  function C(g) {
    const { left: x, right: R } = g, v = o.getFreezedColumnCount();
    return $(x, R + 1).reduce((p, L) => {
      const y = o.getColumn(L);
      return y.visible ? p + (L >= v ? y.widthWithBorder : 0) : p;
    }, 0);
  }
  function T(g) {
    const { top: x, bottom: R } = g, v = o.getFreezedRowCount();
    return $(x, R + 1).reduce((p, L) => {
      const y = o.getRow(L);
      return y.visible ? p + (L >= v ? y.heightWithBorder : 0) : p;
    }, 0);
  }
  function S(g, x, R, v) {
    if (g <= v)
      return Math.min(x, R);
    const p = g - v;
    return R > p ? Math.max(0, R - p) : 0;
  }
  function I(g) {
    const { top: x, left: R, bottom: v, right: p } = f(g), {
      fixedRowHeight: L,
      fixedColumnWidth: y,
      scrollTop: m,
      scrollLeft: _
    } = o, w = L + m, k = y + _, b = x < L, M = v <= L, E = R < y, H = p <= y, O = x >= w, F = v >= w, B = R >= k, D = p >= k, z = C(g), et = T(g), Be = S(R, z, _, y), Ve = S(x, et, m, L), Ie = p - R - Be, Ee = v - x - Ve, Ge = x + (b ? m : Ve), J = R + (E ? _ : Be), te = J < 0 ? 1 : 0, re = Ge < 0 ? 1 : 0;
    (function() {
      u.forEach((le) => {
        le.style.left = `${J + te}px`, le.style.width = `${Ie - te}px`;
      });
    })(), function() {
      d.forEach((le) => {
        le.style.top = `${Ge + re}px`, le.style.height = `${Ee - re}px`;
      });
    }(), function() {
      if (Ie <= 1) {
        s.style.display = "none";
        return;
      }
      s.style.removeProperty("display"), b ? s.style.top = `${x + m + re}px` : O ? s.style.top = `${x + re}px` : s.style.display = "none";
    }(), function() {
      if (Ie <= 1) {
        i.style.display = "none";
        return;
      }
      i.style.removeProperty("display"), M ? i.style.top = `${v + m - qe}px` : F ? i.style.top = `${v - qe}px` : i.style.display = "none";
    }(), function() {
      if (Ee <= 1) {
        r.style.display = "none";
        return;
      }
      r.style.removeProperty("display"), E ? r.style.left = `${R + _ + te}px` : B ? r.style.left = `${R + te}px` : r.style.display = "none";
    }(), function() {
      if (Ee <= 1) {
        l.style.display = "none";
        return;
      }
      l.style.removeProperty("display"), H ? l.style.left = `${p + _ - ve}px` : D ? l.style.left = `${p - ve}px` : l.style.display = "none";
    }();
  }
  return {
    get selectionRoot() {
      return e;
    },
    updateArea(g) {
      const { headerRows: x, headerColumns: R } = o, v = o.getFreezedRowCount(), p = o.getFreezedColumnCount(), L = o.getRowCount() - 1, y = o.getColCount() - 1, m = [
        { top: x, left: R, bottom: v - 1, right: p - 1 },
        { top: x, left: p, bottom: v - 1, right: y },
        { top: v, left: R, bottom: L, right: p - 1 },
        { top: v, left: p, bottom: L, right: y }
      ].map((_) => Pl(g, _));
      for (let _ = 0; _ < Fl; _++) {
        const w = m[_];
        w ? h(_, w) : a(t[_]);
      }
      I(g);
    },
    applyGridScroll() {
      const g = o.getSelection();
      g && this.updateArea(g);
    },
    show() {
      e.classList.remove(st);
    },
    hide() {
      e.classList.add(st);
    }
  };
}
class Bl {
  #t;
  #e;
  constructor(e, t, n) {
    this.#t = t, this.#e = Nl(e), n.appendChild(this.#e.selectionRoot);
  }
  updateScroll() {
    this.#e.applyGridScroll();
  }
  releaseRange() {
    this.#e.hide();
  }
  update() {
    const e = this.#t.selectionRangeState.value;
    if (!e) {
      this.releaseRange();
      return;
    }
    const { range: t } = e;
    this.#e.show(), this.#e.updateArea(t);
  }
}
const rt = -1, Ln = 2, Hn = 2, Vl = 2, Gl = [
  "nothing",
  // row id, column id, left top, height 영향
  "updateColumnId",
  "updateRowId",
  // 상위에서 height가 영향 받으므로, top을 그 다음으로 처리함
  "updateTop",
  "updateLeft",
  "updateRowsStickyLeft",
  //
  "resizeGridWrapperHeight",
  "resizeGridWrapperWidth",
  "generateScrollBarClass",
  //
  "updateScroll",
  //
  "virtualRender",
  "adjustSelection",
  "updateSelection",
  "updateSelectionByScroll"
];
function jl(o) {
  return o.mergeMain ?? o;
}
class Ul {
  _args;
  _wrapperElement;
  _gridRangeUtil;
  _scheduledTaskSet = /* @__PURE__ */ new Set();
  _afterRenderCallbackList = [];
  _updateScrollInfo = { row: -1, col: -1 };
  _rafHandler = rt;
  constructor(e) {
    const { grid: t, store: n } = e;
    this._args = e, this._wrapperElement = e.store.elements.wrapper, this._gridRangeUtil = new bt(t), n.hook.addSyncHook("contextScroll", (s) => {
      this.addTask("virtualRender").addTask("updateSelectionByScroll").forceRunTasks();
    });
  }
  _resetContext() {
    this._updateScrollInfo = { row: -1, col: -1 };
  }
  _renderTask(e = 0) {
    if (e > Vl) {
      console.warn("ignore render task because of possible infinite loop");
      return;
    }
    const t = new Set(this._scheduledTaskSet);
    this._scheduledTaskSet.clear(), this._rafHandler = rt;
    for (const s of Gl)
      if (!(!t.has(s) || s === "nothing"))
        try {
          this[s].call(this);
        } catch (r) {
          console.error(s, r);
        }
    const n = [...this._afterRenderCallbackList];
    this._afterRenderCallbackList.length = 0, n.forEach((s) => s()), this.checkScheduled("updateTop") && this.forceRunTasks(e + 1);
  }
  updateScrollInfo(e) {
    return Object.assign(this._updateScrollInfo, e), this.addTask("updateScroll").addTask("virtualRender");
  }
  _scrollOnRowTask() {
    if (this._updateScrollInfo.row === -1) return;
    const e = this._updateScrollInfo.row, { grid: t, contextElement: n } = this._args, s = K(e, 0, t.getRowCount() - 1), r = t.getRow(s), i = r.top, l = r.bottom, { fixedRowHeight: u, scrollBottom: d, scrollTop: c } = t, a = c + u;
    d < l ? n.scrollTop = c + (l - d) : a > i && (n.scrollTop = i - u), this._updateScrollInfo.row = -1;
  }
  _scrollOnColTask() {
    if (this._updateScrollInfo.col === -1) return;
    const e = this._updateScrollInfo.col, { grid: t, contextElement: n } = this._args, s = K(e, 0, t.getColCount() - 1), r = t.getColumnLeft(s), i = r + t.getColumnWidth(s), { fixedColumnWidth: l, scrollRight: u, scrollLeft: d } = t, c = d + l;
    u < i ? n.scrollLeft = d + (i - u) : c > r && (n.scrollLeft = r - l), this._updateScrollInfo.col = -1;
  }
  updateScroll() {
    this._scrollOnRowTask(), this._scrollOnColTask();
  }
  forceRunTasks(e = 0) {
    this._rafHandler !== rt && cancelAnimationFrame(this._rafHandler), this._renderTask(e);
  }
  addTask(e) {
    return this._scheduledTaskSet.add(e), this._rafHandler === rt && (this._rafHandler = requestAnimationFrame(() => this._renderTask())), this;
  }
  scheduleAddRowTasks() {
    this.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass");
  }
  _getViewportRowMap() {
    const e = /* @__PURE__ */ new Map(), { grid: t, contextElement: n, store: s } = this._args, { rowManager: r, columnManager: i } = s, { fixedRowHeight: l, fixedColumnWidth: u } = t, {
      scrollTop: d,
      scrollLeft: c,
      clientHeight: a,
      clientWidth: h
    } = n, f = t.getRowCount() - 1, C = t.getColCount() - 1, T = Math.min(t.getFreezedRowCount(), f), S = Math.min(t.getFreezedColumnCount(), C), I = t.getRowByTop(l + d + 1) ?? t.firstRow, g = t.getRowByTop(d + a) ?? t.lastRow, x = t.getColumnByLeft(u + c + 1) ?? i.firstColumn, R = t.getColumnByLeft(c + h) ?? i.lastColumn;
    if (!I || !g || !x || !R) return e;
    const v = r.getRowUnstable(Math.max(I.rowId - Ln, T)), p = r.getRowUnstable(Math.min(g.rowId + Ln, f)), L = i.getColumnUnstable(Math.max(x.columnId - Hn, S)), y = i.getColumnUnstable(Math.min(R.columnId + Hn, C));
    let m = $(0, T).asList(), _ = $(0, Math.max(S, s.getThemeValue("grid.forceRenderLeftCol"))).asList();
    m = m.concat($(v.rowId, p.rowId + 1).asList()), _ = _.concat($(L.columnId, y.columnId + 1).asList());
    const w = C - s.getThemeValue("grid.forceRenderRightCol") + 1;
    w > y.columnId && (_ = _.concat($(w, C + 1).asList()));
    for (const b of m) {
      const M = r.getRowUnstable(b);
      if (M.visible)
        for (const E of _)
          i.getColumnUnstable(E).visible && k(jl(M.getCellUnstable(E)));
    }
    return e;
    function k(b) {
      const M = e.get(b.row);
      M ? M.push(b) : e.set(b.row, [b]);
    }
  }
  virtualRender() {
    const {
      grid: e,
      contextElement: t,
      store: {
        elements: {
          freezedRows: n,
          bodyRows: s
        },
        rowManager: r
      }
    } = this._args;
    if (t.offsetWidth === 0) return;
    const { scrollTop: i, scrollLeft: l } = e, u = e.getFreezedRowCount(), d = this._getViewportRowMap();
    n.style.top = `${i}px`, c(), a(), h();
    function c() {
      r.runFuncEachRow((f) => !d.has(f.rowId) && f.unmount());
    }
    function a() {
      const { headerRows: f } = e;
      r.runFuncEachRow((C) => {
        const T = d.get(C.rowId);
        T && (C.updateViewportCells(T, i, l), C.isFreezed || C.freeze(C.rowId < f), C.isMounted && C.element.parentElement === s && C.unmount(), C.isMounted || C.mount(n, "beforeend"));
      }, 0, u);
    }
    function h() {
      let f = null;
      for (const [C, T] of d.entries()) {
        if (C < u) continue;
        const S = r.getRowUnstable(C);
        if (S.updateViewportCells(T, i, l), S.isMounted)
          if (S.element.parentElement === n)
            S.unmount();
          else {
            f = S.element;
            continue;
          }
        f ? S.mount(f, "afterend") : S.mount(s, "afterbegin"), f = S.element;
      }
    }
  }
  updateRowsStickyLeft() {
    this._args.store.rowManager.runFuncEachRow((e) => e.updateStickyStatus());
  }
  updateSelection() {
    this._args.selector.update();
  }
  updateLeft() {
    const { grid: e } = this._args, t = e.getColCount();
    let n = 0, s = 0;
    for (; n < t; ) {
      const r = e.getColumn(n);
      r.left = s, r.visible && (s = r.right), ++n;
    }
  }
  updateTop() {
    const { grid: e } = this._args, t = e.getRowCount();
    let n = 0, s = 0;
    for (; n < t; ) {
      const r = e.getRow(n);
      r.top = s, r.visible && (s = r.bottom), ++n;
    }
  }
  updateColumnId() {
    const { grid: e } = this._args, t = e.getColCount();
    let n = 0;
    for (; n < t; ) {
      const s = e.getColumn(n);
      s.columnId = n, ++n;
    }
  }
  updateRowId() {
    const { grid: e } = this._args, t = e.getRowCount(), n = e.getFreezedRowCount();
    let s = 0;
    for (; s < t; ) {
      const r = e.getRow(s);
      r.rowId = s, r.isFreezed && s >= n ? r.unfreeze() : !r.isFreezed && s < n && r.freeze(), ++s;
    }
  }
  adjustSelection() {
    const { grid: e, store: t } = this._args, { gridStateContext: n } = t, s = n.selectionRangeState.value;
    if (!s) return e.releaseCells();
    const r = this._gridRangeUtil.adjustRange(s.range);
    if (!r) return e.releaseCells();
    e.select(this._gridRangeUtil.extendRange(r));
  }
  updateSelectionByScroll() {
    this._args.selector.updateScroll();
  }
  resizeGridWrapperHeight() {
    this._wrapperElement.style.height = `${this._args.grid.height}px`;
  }
  resizeGridWrapperWidth() {
    this._wrapperElement.style.width = `${this._args.grid.width}px`;
  }
  generateScrollBarClass() {
    this._args.grid.generateScrollBarClass();
  }
  addAfterRenderTask(e) {
    this._afterRenderCallbackList.push(e);
  }
  checkScheduled(e) {
    return this._scheduledTaskSet.has(e);
  }
}
class So extends q {
  _execute() {
    this._instance.setRowHeight(...this._args);
  }
  _getUndoContext() {
    return {
      latestHeight: this._instance.getRowHeight(this._args[0])
    };
  }
  _undo() {
    this._instance.setRowHeight(this._args[0], this._undoContext.latestHeight);
  }
  get canExecute() {
    return this._args[0] < this._instance.getRowCount();
  }
  get canUndo() {
    return this._args[0] < this._instance.getRowCount();
  }
}
const Kl = {
  "col-resizing": Gn,
  "row-resizing": jn
}, Mt = {
  "col-resizing": Is,
  "row-resizing": Es
}, Tt = (o) => o.mergeInfo ? o.col + o.mergeInfo.colSpan - 1 : o.col, On = (o) => o.mergeInfo ? o.row + o.mergeInfo.rowSpan - 1 : o.row, ql = 500, An = 4;
class vo extends Ne {
  _options;
  constructor(e) {
    super(), this._options = e;
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const {
      enabledColResizer: s,
      enabledRowResizer: r,
      disabledColumns: i,
      disabledRows: l,
      enabledColRatioResizer: u
    } = this._options, {
      elements: d,
      gridStateContext: c,
      columnManager: a
    } = t, h = new Set(i), f = new Set(l), C = (R, v, p) => {
      e.commandManager.pushCommandBlock(new Ae(R, new So(e, [v, p])));
    };
    {
      const R = document.createElement("div");
      let v = null, p = !1, L = 0, y = null, m = !1;
      const _ = (E, H) => {
        m && (m = !1, H.__IGNORE_CELL_CLICK__ = !0);
      };
      t.hook.addSyncBeginHook("cellClick", _), this.addRollbackTask(() => t.hook.removeSyncBeginHook("cellClick", _));
      const w = () => {
        v && (v.element.classList.remove(Mt["col-resizing"]), v.element.classList.remove(Mt["row-resizing"]), v = null), n.classList.remove(Gn), n.classList.remove(jn), n.classList.remove(Ze), y && n.removeEventListener("mousedown", y);
      }, k = (E, H) => {
        v = E, n.classList.add(Ze), n.classList.add(Kl[H]), E.element.classList.add(Mt[H]);
        let O = 0, F = 0, B = 0, D = 0, z = 0;
        const et = () => E.col < e.getFreezedColumnCount() ? e.scrollLeft + D : D, Be = () => E.row < e.getFreezedRowCount() ? e.scrollTop + D : D;
        y = (J) => {
          const te = (/* @__PURE__ */ new Date()).getTime();
          if (c.setMode({
            mode: H,
            contextParam: {}
          }), te - L <= ql) {
            if (H === "col-resizing") {
              const re = Tt(E);
              g(re, t.rowManager.getMaxCellWidth(re, re + 1));
            } else
              e.commandManager.doRecording("Autosize row", () => {
                e.autoSizeRow(E.row);
              });
            L = 0, c.setIdle();
            return;
          }
          p = !0, L = te, H === "col-resizing" ? (R.className = Ms, z = e.getColumnWidth(Tt(E)), O = J.pageX, F = O - z + e.minColWidth, B = O - z + e.maxColWidth, D = e.getColumnLeft(E.col) + e.getCellWidth(E), R.style.top = "0px", R.style.width = "0px", R.style.height = `${e.height}px`, R.style.left = `${et()}px`) : (R.className = Ts, z = e.getRowHeight(On(E)), O = J.pageY, F = O - z + e.minRowHeight, B = O - z + e.maxRowHeight, D = e.getRow(E.row).top + e.getCellHeight(E), R.style.top = `${Be()}px`, R.style.width = `${e.width}px`, R.style.height = "0px", R.style.left = "0px"), d.wrapper.appendChild(R), e.addGlobalEventListener(document, "keydown", Ge), e.addGlobalEventListener(document, "mouseup", Ie), e.addGlobalEventListener(document, "mousemove", Ve);
        };
        const Ve = (J) => {
          if (H === "col-resizing") {
            const te = K(J.pageX, F, B) - O;
            R.style.left = `${et() + te}px`;
          } else {
            const te = K(J.pageY, F, B) - O;
            R.style.top = `${Be() + te}px`;
          }
        }, Ie = (J) => {
          if (H === "col-resizing") {
            const ie = K(J.pageX, F, B) - O;
            if (Math.abs(ie) > An) {
              const tt = Tt(E), Ao = z + ie;
              g(tt, Ao), L = 0;
            }
            const le = T(J);
            le && le === E && (m = !0);
          } else {
            const ie = K(J.pageY, F, B) - O;
            if (Math.abs(ie) > An) {
              const le = On(E), tt = z + ie;
              C("Resize row", le, tt), e.setRowHeight(le, tt), L = 0;
            }
          }
          Ee(), c.setIdle();
          const te = T(J);
          if (!te) return;
          const re = S(J, te);
          re !== null && k(te, re);
        };
        function Ee() {
          p = !1, R.remove(), w(), document.removeEventListener("mousemove", Ve), document.removeEventListener("mouseup", Ie), document.removeEventListener("keydown", Ge);
        }
        const Ge = (J) => {
          J.key === "Escape" && Ee();
        };
        e.addGlobalEventListener(n, "mousedown", y);
      }, b = (E) => {
        if (p) return;
        const H = T(E);
        if (w(), H === null) return;
        const O = S(E, H);
        O && k(H, O);
      }, M = (E) => {
        p || w();
      };
      e.addGlobalEventListener(n, "mousemove", b), e.addGlobalEventListener(n, "mouseleave", M);
    }
    const T = (R) => {
      const v = ut("th", "tr", R.target);
      if (!v) return null;
      const [p, L] = [
        parseInt(v.getAttribute("data-row") || "-1"),
        parseInt(v.getAttribute("data-col") || "-1")
      ];
      return e.cell(p, L);
    }, S = (R, v) => {
      if (v.cellType === "body-cell") return null;
      if (u) {
        const { visibleColumnList: p } = a, L = p[p.length - 1];
        if (p.length > 0 && v.col === L.columnId) return null;
      }
      return s && Math.abs(e.getCellWidth(v) - R.offsetX) <= vs && !h.has(v.col) ? "col-resizing" : r && Math.abs(e.getCellHeight(v) - R.offsetY) <= ks && !f.has(v.row) ? "row-resizing" : null;
    };
    function I(R, v, p) {
      const L = e.getColumnWidth(v) - p;
      e.setColumnWidth(v, L);
      const y = L - e.getColumnWidth(v);
      if (y !== 0) {
        const m = v - R;
        e.setColumnWidth(
          // gap 만큼 이전 열 크기 조정
          v - m,
          e.getColumnWidth(v - m) + y
        );
      }
    }
    function g(R, v) {
      const p = e.getColumnWidth(R);
      e.commandManager.doRecording("resize column by Resizer", () => {
        e.setColumnWidth(R, v), u && I(R, x(R), e.getColumnWidth(R) - p);
      });
    }
    function x(R) {
      let v = e.getColumn(R + 1);
      for (; !v.visible; )
        v = e.getColumn(v.columnId + 1);
      return v.columnId;
    }
  }
  get pluginKey() {
    return "resizer";
  }
}
function ac(o) {
  return new vo(o);
}
const Xl = 16;
class ko extends Ne {
  _enableHeaderClick = !0;
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: s } = t;
    let r = null, i = null, l, u = null;
    const d = (g, x) => {
      const R = [
        g.row,
        g.bottom,
        x.row,
        x.bottom
      ], v = [
        g.col,
        g.right,
        x.col,
        x.right
      ], p = {
        top: Math.min(...R),
        left: Math.min(...v),
        bottom: Math.max(...R),
        right: Math.max(...v)
      };
      Zn(p, u) || (u = p, e.select(p, e.activeCell ?? r), this.onChangedSelection(p));
    }, c = (g, x) => {
      const R = e.activeCell;
      x.shiftKey && R ? (r = R, d(R, e.cell(g.row, g.col))) : (r = g, e.selectRange(r.row, r.col, r.bottom, r.right, r), this.onChangedSelection({ top: r.row, left: r.col, bottom: r.bottom, right: r.right })), i = r, s.setMode({ mode: "selecting-mouse", contextParam: {} });
    }, a = (g, x) => {
      this._enableHeaderClick && (x.__IGNORE_HEADER_SELECT__ || (r = g, f(r, r), s.setMode({ mode: "selecting-mouse", contextParam: {} })));
    };
    e.addGlobalEventListener(n, "mousedown", (g) => {
      if (n.classList.contains(Ze) || g.button !== 0 || !be(g.target) || // textArea, button 에서는 pass
      g.target instanceof HTMLTextAreaElement || ut(".button", "tr", g.target)) return;
      const x = ut("td,th", "tr", g.target);
      if (!x) return;
      const R = dt(x), v = e.cell(R.row, R.col);
      x.tagName === "TD" ? c(v, g) : x.tagName === "TH" && a(v, g);
    });
    function h(g, x) {
      const R = x.closest("td,th");
      if (!R) return;
      const v = dt(R);
      i = e.cell(v.row, v.col), f(g, i);
    }
    function f(g, x) {
      g.cellType === "body-cell" ? d(g, x) : g.cellType === "col-header" ? e.selectColumns(...zn(g.col, x.right)) : g.cellType === "row-header" && e.selectRows(...zn(g.row, x.bottom));
    }
    function C(g, x) {
      const { offsetX: R, offsetY: v, target: p } = g;
      if (!be(p)) return null;
      const L = R + p.scrollLeft, y = v + p.scrollTop, m = L > e.width ? e.width : L, _ = y > e.height ? e.height : y, w = e.findCellOrNull(_, m);
      w && (i = w, f(x, w));
    }
    function T(g) {
      const x = g.clientWidth + g.scrollLeft, R = g.clientHeight + g.scrollTop, v = g.scrollTop + e.headerHeight, p = g.scrollLeft + e.headerWidth, L = R > e.height ? e.height : R, y = x > e.width ? e.width : x, m = e.findCellOrNull(v, p), _ = e.findCellOrNull(L, y - 1);
      return {
        top: m?.row ?? 0,
        bottom: _?.row ?? 0,
        left: m?.col ?? 0,
        right: _?.col ?? 0
      };
    }
    function S(g, x, R, v) {
      l = window.setTimeout(() => {
        if (!r) return;
        const y = p(), m = L(), { top: _, bottom: w, left: k, right: b } = T(g), M = {
          top: g.scrollTop,
          left: g.scrollLeft,
          targetRow: R,
          targetCol: v
        };
        y && (x === "t" ? (M.top -= e.getRowHeight(_), M.targetRow = _) : (M.top += e.getRowHeight(w), M.targetRow = w)), m && (x === "l" ? (M.left -= e.getColumnWidth(k), M.targetCol = k) : (M.left += e.getColumnWidth(b), M.targetCol = b)), (y || m) && (g.scrollTo({ top: M.top, left: M.left }), f(r, e.cell(M.targetRow, M.targetCol)), S(g, x, M.targetRow, M.targetCol));
      }, Xl);
      function p() {
        return x === "t" ? g.scrollTop > 0 : x === "b" ? g.scrollHeight - (g.scrollTop + g.clientHeight) > 0 : !1;
      }
      function L() {
        return x === "l" ? g.scrollLeft > 0 : x === "r" ? g.scrollWidth - (g.scrollLeft + g.clientWidth) > 0 : !1;
      }
    }
    function I() {
      l && (clearTimeout(l), l = void 0);
    }
    e.addGlobalEventListener(n, "mousemove", (g) => {
      r && be(g.target) && (g.target === n ? C(g, r) : h(r, g.target));
    }), e.addGlobalEventListener(document, "mouseup", () => {
      r && (I(), r = null, i = null, s.setIdle());
    }), e.addGlobalEventListener(n, "mouseleave", ({ currentTarget: g, clientY: x, clientX: R }) => {
      if (!r || !i || !be(g)) return;
      const { top: v, bottom: p, left: L, right: y } = g.getBoundingClientRect();
      if (v < x && p > x && L < R && y > R) return;
      const m = _();
      m && S(g, m, i.row, i.col);
      function _() {
        return x < v ? "t" : x > p ? "b" : R < L ? "l" : R > y ? "r" : null;
      }
    }), e.addGlobalEventListener(n, "mouseenter", (g) => {
      r && be(g.currentTarget) && I();
    }), e.onDoubleClickCell = (g) => {
      g.cellType === "body-cell" && s.isIdle && (e.scrollInView(g.row, g.col), e.forceLayoutTask(), e.doEditMode(g, !1, !0));
    };
  }
  get pluginKey() {
    return "cell-selector";
  }
  onChangedSelection(e) {
  }
  set enableHeaderClick(e) {
    this._enableHeaderClick = e;
  }
}
function zn(o, e) {
  return o < e ? [o, e] : [e, o];
}
function cc() {
  return new ko();
}
class Io extends q {
  _getUndoContext() {
    const [e, t] = this._args, n = [], s = new We(this._instance, this._instance);
    for (const r of s.getSelectionGenerator(e))
      t && this._instance.isFilteredRow(r.row) || this._instance.onClearCellCheck(r) && n.push({
        row: r.row,
        col: r.col,
        text: r.text
      });
    return { textSnapshot: n };
  }
  _undo() {
    const { textSnapshot: e } = this._undoContext;
    e.forEach(({ row: t, col: n, text: s }) => {
      this._instance.setCell(t, n, { text: s }), this._instance.onEditCellDone(this._instance.cell(t, n), !0, "", "", 0, 0);
    });
  }
  _execute() {
    const e = this._instance;
    for (const t of this._undoContext.textSnapshot)
      e.cell(t.row, t.col).clear();
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function Eo(o, e) {
  const t = (m, _, w) => {
    const k = o.headerRows;
    let b = w, M = m;
    for (; b !== 0; ) {
      const E = o.cell(M, _), O = (E.mergeMain ?? E).row - 1;
      if (O < k) break;
      o.getRowVisible(O) && ++b, M = O;
    }
    return o.getRowVisible(M) ? M : m;
  }, n = (m, _, w) => {
    const k = o.getRowCount() - 1;
    let b = w, M = m;
    for (; b > 0; ) {
      const E = o.cell(M, _), O = (E.mergeMain ?? E).bottom + 1;
      if (O > k) break;
      o.getRowVisible(O) && --b, M = O;
    }
    return o.getRowVisible(M) ? M : m;
  }, s = (m, _, w) => {
    const k = o.headerColumns;
    let b = w, M = _;
    for (; b !== 0; ) {
      const E = o.cell(m, M), O = (E.mergeMain ?? E).col - 1;
      if (O < k) break;
      o.getColumnVisible(O) && ++b, M = O;
    }
    return o.getColumnVisible(M) ? M : _;
  }, r = (m, _, w) => {
    const k = o.getColCount() - 1;
    let b = w, M = _;
    for (; b !== 0; ) {
      const E = o.cell(m, M), O = (E.mergeMain ?? E).right + 1;
      if (O > k) break;
      o.getColumnVisible(O) && --b, M = O;
    }
    return o.getColumnVisible(M) ? M : _;
  }, i = () => {
    let m = o.headerColumns;
    for (; !o.getColumnVisible(m); )
      ++m;
    return m;
  }, l = () => {
    let m = o.getColCount() - 1;
    for (; !o.getColumnVisible(m); )
      --m;
    return m;
  }, u = () => {
    let m = o.headerRows;
    for (; !o.getRowVisible(m); )
      ++m;
    return m;
  }, d = () => {
    let m = o.getRowCount() - 1;
    for (; !o.getRowVisible(m); )
      --m;
    return m;
  }, c = (m) => {
    if (o.getRowCount() - 1 === m) return m;
    let w = m + 1;
    for (; !o.getRowVisible(w); )
      ++w;
    return w;
  }, a = (m) => {
    const _ = o.headerRows;
    if (m === _) return m;
    let w = m - 1;
    for (; !o.getRowVisible(w); )
      ++w;
    return w;
  }, h = () => {
    const { activeCell: m } = o;
    if (!m) {
      console.warn("No active cell warning.");
      return;
    }
    const _ = d(), w = l(), k = m.mergeMain ?? m;
    if (k.right === w) {
      if (m.row === _) return;
      const b = i(), M = c(m.row);
      e ? o.selectRow(M, o.cell(M, b)) : o.selectCell(M, b), o.scrollInView(M, b);
    } else {
      const b = r(m.row, k.right, 1);
      e ? o.selectRow(m.row, o.cell(m.row, b)) : o.selectCell(m.row, b), o.scrollOnCol(b);
    }
  }, f = () => {
    const { activeCell: m } = o;
    if (!m) {
      console.warn("No active cell warning.");
      return;
    }
    const _ = u(), w = i(), k = m.mergeMain ?? m;
    if (k.col === w) {
      if (m.row === _) return;
      const b = l(), M = a(m.row);
      e ? o.selectRow(M, o.cell(M, b)) : o.selectCell(M, b), o.scrollInView(M, b);
    } else {
      const b = s(m.row, k.col, -1);
      e ? o.selectRow(m.row, o.cell(m.row, b)) : o.selectCell(m.row, b), o.scrollOnCol(b);
    }
  }, C = (m, _, w) => {
    let k = -1, b = -1;
    for (let M = _; M <= w; M++) {
      const E = o.cell(m, M), H = E.mergeMain ?? E, { rowSpan: O } = H.mergeInfo;
      O > k && (k = O, b = M);
    }
    return b;
  }, T = (m, _, w) => {
    let k = -1;
    for (let b = _; b <= w; b++) {
      const M = o.cell(m, b), E = M.mergeMain ?? M, { bottom: H } = E;
      H > k && (k = H);
    }
    return k;
  }, S = (m, _, w) => {
    let k = 999999999;
    for (let b = _; b <= w; b++) {
      const M = o.cell(m, b), E = M.mergeMain ?? M;
      k > E.row && (k = E.row);
    }
    return k;
  }, I = (m, _, w) => {
    let k = -1, b = -1;
    for (let M = _; M <= w; M++) {
      const E = o.cell(M, m), H = E.mergeMain ?? E, { colSpan: O } = H.mergeInfo;
      O > k && (k = O, b = M);
    }
    return b;
  }, g = (m, _, w) => {
    let k = -1;
    for (let b = _; b <= w; b++) {
      const M = o.cell(b, m), E = M.mergeMain ?? M, { right: H } = E;
      H > k && (k = H);
    }
    return k;
  }, x = (m, _, w) => {
    let k = 999999999;
    for (let b = _; b <= w; b++) {
      const M = o.cell(b, m), E = M.mergeMain ?? M;
      k > E.col && (k = E.col);
    }
    return k;
  };
  return {
    getNextYAbove: t,
    getNextYBelow: n,
    getNextXLeft: s,
    getNextXRight: r,
    getFirstActiveRow: u,
    selectNextActiveCell: h,
    selectBeforeActiveCell: f,
    selectNextSelection: (m, _, w) => {
      const k = o.getSelection(), { activeCell: b } = o;
      if (k == null || b == null) {
        console.warn("No selection warning");
        return;
      }
      const M = b.mergeMain ?? b;
      if (w && e) return;
      if (!w) {
        if (m !== 0) {
          const B = m < 0 ? t(M.row, b.col, m) : n(M.bottom, b.col, m);
          e ? o.selectRow(B, o.cell(B, b.col)) : o.selectCell(B, b.col), o.scrollOnRow(B);
        } else {
          const B = _ < 0 ? s(b.row, M.col, _) : r(b.row, M.right, _);
          e ? o.selectRow(b.row, o.cell(b.row, B)) : o.selectCell(b.row, B), o.scrollOnCol(B);
        }
        return;
      }
      const { top: E, bottom: H, left: O, right: F } = k;
      if (m !== 0)
        if (m < 0)
          if (T(b.row, O, F) === H) {
            const D = C(E, O, F), z = t(E, D, m);
            o.selectRange(z, O, H, F, b), o.scrollOnRow(z);
          } else {
            const D = C(H, O, F), z = t(H, D, m);
            o.selectRange(E, O, z, F, b), o.scrollOnRow(z);
          }
        else if (S(b.row, O, F) === E) {
          const D = C(H, O, F), z = n(H, D, m);
          o.selectRange(E, O, z, F, b), o.scrollOnRow(z);
        } else {
          const D = C(E, O, F), z = n(E, D, m);
          o.selectRange(z, O, H, F, b), o.scrollOnRow(z);
        }
      else if (_ < 0)
        if (g(b.col, E, H) === F) {
          const D = I(O, E, H), z = s(D, O, _);
          o.selectRange(E, z, H, F, b), o.scrollOnCol(z);
        } else {
          const D = I(F, E, H), z = s(D, F, _);
          o.selectRange(E, O, H, z, b), o.scrollOnCol(z);
        }
      else if (x(b.col, E, H) === O) {
        const D = I(F, E, H), z = r(D, F, _);
        o.selectRange(E, O, H, z, b), o.scrollOnCol(z);
      } else {
        const D = I(O, E, H), z = r(D, O, _);
        o.selectRange(E, z, H, F, b), o.scrollOnCol(z);
      }
    },
    selectMoveToLastColumn: (m) => {
      const _ = o.getSelection(), { activeCell: w } = o;
      if (_ == null || w == null) {
        console.warn("No selection warning");
        return;
      }
      const k = l();
      m && e || (m ? o.selectRange(_.top, w.col, _.bottom, k, w) : e ? o.selectRow(w.row, o.cell(w.row, k)) : o.selectCell(w.row, k), o.scrollOnCol(k));
    },
    selectMoveToFirstColumn: (m) => {
      const _ = o.getSelection(), { activeCell: w } = o;
      if (_ == null || w == null) {
        console.warn("No selection warning");
        return;
      }
      const k = i();
      m && e || (m ? o.selectRange(_.top, k, _.bottom, w.col, w) : e ? o.selectRow(w.row, o.cell(w.row, k)) : o.selectCell(w.row, k), o.scrollOnCol(k));
    },
    selectMoveToLastRow: (m) => {
      const _ = o.getSelection(), { activeCell: w } = o;
      if (_ == null || w == null) {
        console.warn("No selection warning");
        return;
      }
      const k = d();
      m && e || (m ? o.selectRange(w.row, _.left, k, _.right, w) : o.selectCell(k, w.col), o.scrollOnRow(k));
    },
    selectMoveToFirstRow: (m) => {
      const _ = o.getSelection(), { activeCell: w } = o;
      if (_ == null || w == null) {
        console.warn("No selection warning");
        return;
      }
      const k = u();
      m && e || (m ? o.selectRange(k, _.left, w.bottom, _.right, w) : o.selectCell(k, w.col), o.scrollOnRow(k));
    }
  };
}
class Zl {
  keyMap;
  constructor() {
    this.keyMap = {};
  }
  addKeyAction(e, t) {
    this.keyMap[e] || (this.keyMap[e] = []), this.keyMap[e].push(t);
  }
  hasKeyAction(e) {
    return this.keyMap[e] && this.keyMap[e].length > 0;
  }
  startKeyAction(e) {
    if (this.hasKeyAction(e.key) && this.onStartKeyActionHook(e) !== !1) {
      if (this.keyMap[e.key])
        for (const t of this.keyMap[e.key])
          try {
            if (t(e) === !1)
              break;
          } catch (n) {
            console.error(n);
            break;
          }
      this.onEndKeyActionHook(e);
    }
  }
  onStartKeyActionHook(e) {
    return !0;
  }
  onEndKeyActionHook(e) {
  }
}
const Fn = 10;
class Mo extends Ne {
  _keyMiddleware;
  _rowSelection;
  constructor({
    keyMiddleware: e = [],
    rowSelection: t = !1
  }) {
    super(), this._keyMiddleware = e, this._rowSelection = t;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const s = new Zl(), { gridStateContext: r, hook: i } = n;
    s.onStartKeyActionHook = (p) => i.emitSync("keyAction", [p, p.key]), s.onEndKeyActionHook = (p) => {
      !p.ctrlKey && !p.shiftKey && p.key === " " && R() === !1 || v(p.key) || p.preventDefault();
    };
    const l = (p = !1) => {
      if (!r.isIdle) return;
      const L = e.activeCell?.mergeMain ?? e.activeCell;
      L && (e.scrollInView(L.row, L.col), e.forceLayoutTask(), e.doEditMode(L, p));
    };
    this._keyMiddleware.forEach(([p, L]) => s.addKeyAction(p, L));
    const u = new We(n.rowManager, n.columnManager), {
      selectNextActiveCell: d,
      selectNextSelection: c,
      selectBeforeActiveCell: a,
      selectMoveToFirstRow: h,
      selectMoveToFirstColumn: f,
      selectMoveToLastColumn: C,
      selectMoveToLastRow: T
    } = Eo(e, this._rowSelection), S = (p) => (L) => {
      r.gridModeState.value.mode !== "edit-cell" && p(L);
    };
    this.addPluginSyncHook("cut", S((p) => e.onNativeCut(p))), this.addPluginSyncHook("copy", S((p) => e.onNativeCopy(p))), this.addPluginSyncHook("paste", S((p) => e.onNativePaste(p))), s.addKeyAction("Tab", (p) => (p.shiftKey ? a() : d(), !0)), s.addKeyAction("ArrowRight", (p) => (p.ctrlKey ? C(p.shiftKey) : c(0, 1, p.shiftKey), !0)), s.addKeyAction("ArrowUp", (p) => (p.ctrlKey ? h(p.shiftKey) : c(-1, 0, p.shiftKey), !0)), s.addKeyAction("ArrowLeft", (p) => (p.ctrlKey ? f(p.shiftKey) : c(0, -1, p.shiftKey), !0)), s.addKeyAction("ArrowDown", (p) => (p.ctrlKey ? T(p.shiftKey) : c(1, 0, p.shiftKey), !0)), s.addKeyAction("Home", (p) => (p.ctrlKey ? (f(p.shiftKey), h(p.shiftKey)) : f(p.shiftKey), !0)), s.addKeyAction("End", (p) => (p.ctrlKey ? (C(p.shiftKey), T(p.shiftKey)) : C(p.shiftKey), !0)), s.addKeyAction("PageUp", (p) => (c(-Fn, 0, p.shiftKey), !0)), s.addKeyAction("PageDown", (p) => (c(Fn, 0, p.shiftKey), !0)), s.addKeyAction("Enter", () => {
      const p = e.getSelection();
      return p && (p.top === e.getRowCount() - 1 ? (c(0, 1, !1), p.left !== e.getSelection()?.left && h(!1)) : c(1, 0, !1)), !0;
    }), s.addKeyAction("a", I), s.addKeyAction("A", I), s.addKeyAction("z", g), s.addKeyAction("Z", g), s.addKeyAction("y", x), s.addKeyAction("Y", x);
    function I(p) {
      return p.ctrlKey ? (e.selectAll(), p.preventDefault(), !1) : !0;
    }
    function g(p) {
      return p.ctrlKey ? (e.undo(), p.preventDefault(), !1) : !0;
    }
    function x(p) {
      return p.ctrlKey ? (e.redo(), p.preventDefault(), !1) : !0;
    }
    s.addKeyAction("F2", (p) => (l(), !0)), s.addKeyAction("Backspace", (p) => {
      const L = e.getSelection(), y = e.activeCell;
      return !L || !y || e.doEditMode(y, !0), !0;
    }), s.addKeyAction("Delete", (p) => {
      const L = e.getSelection();
      if (!L || u.getCanClearCellCount(L, (m) => e.onClearCellCheck(m)) === 0) return !0;
      const y = new Io(e, [L, !0]);
      return e.commandManager.pushCommandBlock(new Ae("Clear cells", y)), e.clearCells(L, !0), !0;
    }), s.addKeyAction(" ", (p) => {
      const L = e.getSelection();
      if (L === null) return !0;
      if (p.ctrlKey)
        return e.selectColumns(L.left, L.right), !0;
      if (p.shiftKey)
        return e.selectRows(L.top, L.bottom), !0;
      const y = [...u.getSelectionGenerator(L)];
      if (y.length === 0) return !0;
      const m = y[0], w = m.text === "true" ? "false" : "true", k = new Ae("Typing space"), b = (E, H) => {
        k.pushCommand(new Se(e, [E.row, E.col, { text: w }])), e.setText(E.row, E.col, w), H.onCheckboxClick(E.row, E.col, w === "true");
      }, M = (E, H) => {
        if (E.text === "true") return;
        const O = H.lastClickedRadio;
        O && k.pushCommand(new Se(e, [O.row, O.col, { text: "false" }])), k.pushCommand(new Se(e, [E.row, E.col, { text: "true" }])), e.setText(E.row, E.col, "true"), H.onRadioClick(E.row, E.col);
      };
      for (const E of y) {
        if (E.onCheckReadonly() || E.props.disabled) continue;
        const H = E.renderInstance;
        H instanceof Qn && b(E, H), E === m && H instanceof wo && M(E, H);
      }
      return k.commandLength > 0 && e.commandManager.pushCommandBlock(k), !0;
    }), this.addPluginSyncHook("input", (p) => {
      r.gridModeState.isIdle && p.data && l(!0);
    }), this.addPluginSyncHook("keydown", (p) => {
      if (
        // editMode에서 온 입력은 pass
        !(!r.gridModeState.isIdle || // selection이 없으면 pass
        e.getSelection() === null)
      ) {
        if (!r.isIdle) {
          p.preventDefault();
          return;
        }
        if (!p.ctrlKey && v(p.key)) {
          l(!0);
          return;
        }
        s.startKeyAction(p);
      }
    });
    function R() {
      const p = e.getSelection();
      if (!p) return !1;
      for (const L of u.getSelectionGenerator(p))
        if (L.renderType === "checkbox" || L.renderType === "radio") return !0;
      return !1;
    }
    function v(p) {
      return p === "Process" || Yl.test(p);
    }
  }
  get pluginKey() {
    return "default-key";
  }
}
const Yl = /^[\w]$/;
function uc(o) {
  return new Mo(o ?? {});
}
class To extends Ne {
  constructor() {
    super();
  }
  _mountTask({ grid: e, gridStore: t }) {
    const { gridStateContext: n } = t, { table: s } = t.elements, r = {
      latestDragOverCell: null
    }, i = () => {
      s.classList.remove("is-dragging"), l();
    }, l = () => {
      r.latestDragOverCell && (r.latestDragOverCell.isDragOver = !1);
    }, u = (c) => {
      l(), r.latestDragOverCell = c, c.isDragOver = !0;
    }, d = () => s.classList.contains("is-dragging");
    s.addEventListener("mouseup", () => d() && i()), s.addEventListener("dragenter", () => {
      n.setMode({ mode: "dragging", contextParam: {} }), s.classList.add("is-dragging");
    }), s.addEventListener("dragover", (c) => {
      if (!c.dataTransfer || !s.classList.contains("is-dragging")) return;
      const a = e.findCellOrNull(c.offsetY, c.offsetX);
      if (!a || c.dataTransfer.types.includes("ir-grid/disabled-cell-drop")) return null;
      if (
        // drop 비활성화가 false 일치라면 무조건 실행
        a.dropDisabled !== !1 && // disabled
        (a.props.disabled === !0 || // readonly
        a.onCheckReadonly() === !0 || a.dropDisabled === !0)
      )
        return l(), null;
      e.onDragOverCell(a, c) === !0 && (a !== r.latestDragOverCell && u(a), c.preventDefault());
    }), s.addEventListener("dragleave", (c) => {
      c.target === s ? i() : l();
    }), s.addEventListener("drop", (c) => {
      try {
        r.latestDragOverCell && e.onDropOnCell(r.latestDragOverCell.row, r.latestDragOverCell.col, c);
      } finally {
        i();
      }
    });
  }
  get pluginKey() {
    return "cell-drop";
  }
}
function dc() {
  return new To();
}
const Lo = 8, Jl = {
  normal: As,
  error: Os
}, Pn = (o, e, t, n) => {
  o.isConnected === !1 || o.offsetParent === null || er(o, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      tr({
        mainAxis: Lo,
        crossAxis: n ?? 0
      }),
      nr(),
      or({ padding: 5 })
    ]
  }).then(({ x: s, y: r, placement: i }) => {
    e.style.left = `${s}px`, e.style.top = `${r}px`, e.dataset.placement = i;
  });
}, Ql = (o) => o.cellInfo.tooltip ?? o.cellInfo.text ?? "", ea = (o) => o.cellInfo.memo ?? "";
class ta extends Ne {
  constructor(e) {
    super(), this.options = e, this._tooltipElement = document.createElement("div"), this._memoElement = document.createElement("div"), this._tooltipElement.className = Ls;
  }
  _tooltipElement;
  _memoElement;
  context = null;
  hideMemo() {
    this._memoElement.remove();
  }
  hideTooltip() {
    this._tooltipElement.remove();
  }
  createContext(e) {
    const {
      memoInterval: t,
      tooltipInterval: n,
      hideTooltipWhenHasMemo: s
    } = this.options, {
      hasMemo: r,
      memoIntent: i = "normal",
      tooltipDisabled: l = !1
    } = e.cellInfo, u = this.options.getTooltipText?.(e) ?? Ql(e), d = this.options.getMemoText?.(e) ?? ea(e), c = () => {
      this._tooltipElement.textContent = u, cn("popover").appendChild(this._tooltipElement), Pn(e.element, this._tooltipElement, "bottom");
    }, a = () => {
      this._memoElement.textContent = d ?? "", this._memoElement.className = `${Hs} ${Jl[i]}`, cn("popover").appendChild(this._memoElement), Pn(e.element, this._memoElement, "right-start", Lo);
    }, h = !(r && s) && l === !1 && u ? window.setTimeout(() => c(), n) : -1, f = r && d ? window.setTimeout(() => a(), t) : -1;
    return {
      targetCell: e,
      tooltipTimeoutHandler: h,
      memoTimeoutHandler: f,
      cleanup: () => {
        clearTimeout(h), clearTimeout(f), this.hideTooltip(), this.hideMemo(), this.context = null;
      }
    };
  }
  _mountTask({ grid: e, gridStore: t, contextElement: n }) {
    const { gridStateContext: s } = t, r = () => this.context?.cleanup(), i = (l) => {
      if (!be(l.target)) return;
      const u = ut("td,th", "tr", l.target);
      if (!u) {
        r();
        return;
      }
      const d = dt(u), c = e.cell(d.row, d.col);
      this.context?.targetCell !== c && (r(), this.context = this.createContext(c));
    };
    s.gridModeState.addSubscription((l, { mode: u }) => {
      n.removeEventListener("mousemove", i), r(), (u === "idle" || u === "edit-cell") && e.addGlobalEventListener(n, "mousemove", i);
    }), e.addGlobalEventListener(n, "mouseleave", r), e.addGlobalEventListener(n, "scroll", r), this.addRollbackTask(() => {
      r(), n.removeEventListener("mouseleave", r), n.removeEventListener("scroll", r);
    });
  }
  get pluginKey() {
    return "popover";
  }
}
const na = [
  { type: "col", value: "right" },
  { type: "col", value: "left" },
  { type: "row", value: "up" },
  { type: "row", value: "down" },
  { type: "divider", value: "" },
  { type: "col", value: "double-right" },
  { type: "col", value: "double-left" },
  { type: "row", value: "double-top" },
  { type: "row", value: "double-bottom" }
], oa = en(P.minWidth), sa = en(P.minHeight);
function ra() {
  const o = He("div", Ps), e = [];
  for (const n of na)
    if (n.type === "divider") {
      const s = He("div", $s);
      o.append(s);
    } else {
      const s = He("button", Ds), r = Un(`ir-icon--chevron-${n.value}`);
      s.dataset.type = n.type, s.append(r), s.onclick = () => t.onButtonClick(n.value), s.setAttribute("data-ir-tooltip", ""), s.setAttribute("data-ir-tooltip-text", Q.t("gridOverflowPanel." + n.value)), o.append(s), e.push(s);
    }
  const t = {
    buttonGroup: o,
    visibleButtonGroup(n, s) {
      o.style.display = n || s ? "" : "none";
      for (const r of e) {
        const l = r.dataset.type === "row" ? n : s;
        r.style.display = l ? "" : "none";
      }
    },
    onButtonClick(n) {
    }
  };
  return t;
}
class hc extends Ne {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: t, gridStore: n }) {
    const { rowManager: s, columnManager: r } = n, i = He("div", zs), l = He("div", Fs), u = ra(), d = Xs({
      containerElement: u.buttonGroup,
      placement: "right",
      offset: 8
    });
    this.args.className && i.classList.add(this.args.className), Object.assign(i.style, this.args.style);
    const c = {
      up() {
        const S = h(l.scrollTop);
        if (!S) return;
        const I = S.rowId - 1, g = I < 0 ? 0 : e.getRow(I).top;
        l.scrollTop = g;
      },
      down() {
        const S = h(l.scrollTop);
        S && (l.scrollTop = S.bottom);
      },
      left() {
        const S = f(l.scrollLeft);
        if (!S) return;
        const I = S.columnId - 1, g = I < 0 ? 0 : e.getColumn(I).left;
        l.scrollLeft = g;
      },
      right() {
        const S = f(l.scrollLeft);
        S && (l.scrollLeft = S.right);
      },
      "double-top"() {
        l.scrollTo({ top: 0 }), e.scrollOnRow(0);
      },
      "double-bottom"() {
        l.scrollTo({ top: l.scrollHeight }), e.scrollOnRow(e.getRowCount() - 1);
      },
      "double-left"() {
        l.scrollTo({ left: 0 }), e.scrollOnCol(0);
      },
      "double-right"() {
        l.scrollTo({ left: l.scrollWidth }), e.scrollOnCol(e.getColCount() - 1);
      }
    };
    u.onButtonClick = (S) => c[S](), t.insertAdjacentElement("beforebegin", i), l.appendChild(t), i.append(l), i.append(u.buttonGroup), e.afterRender(() => {
      C(s.freezedRowsHeight, s.freezedRows), T(r.fixedColumnsWidth, r.freezedColumns);
    }), n.hook.addHook("resize", a), n.hook.addSyncHook("changedFreezedRowHeight", C), n.hook.addSyncHook("changedFreezedColumnWidth", T), this.addRollbackTask(() => {
      d.destroy(), n.hook.removeHook("resize", a), n.hook.removeSyncHook("changedFreezedRowHeight", C), n.hook.removeSyncHook("changedFreezedColumnWidth", T);
    }), this.addRollbackTask(() => {
      const S = i.nextElementSibling;
      S ? S.insertAdjacentElement("beforebegin", t) : i.parentElement?.appendChild(t), i.remove();
    });
    function a() {
      const S = parseInt(t.style.getPropertyValue(oa)), I = parseInt(t.style.getPropertyValue(sa));
      u.visibleButtonGroup(
        I >= l.clientHeight,
        S >= l.clientWidth
      );
    }
    function h(S) {
      let I = 0, g = s.visibleRowList.length - 1;
      for (; I <= g; ) {
        const x = I + Math.floor((g - I) / 2), R = s.visibleRowList[x];
        if (S >= R.top && S < R.bottom)
          return R;
        S < R.top ? g = x - 1 : I = x + 1;
      }
      return null;
    }
    function f(S) {
      let I = 0, g = r.visibleColumnList.length - 1;
      for (; I <= g; ) {
        const x = I + Math.floor((g - I) / 2), R = r.visibleColumnList[x];
        if (S >= R.left && S < R.right)
          return R;
        S < R.left ? g = x - 1 : I = x + 1;
      }
      return null;
    }
    function C(S, I) {
      const g = I, x = S + (g < e.getRowCount() ? s.getRowHeight(g) : 0) + (R() ? an : 0);
      fe(t, {
        [P.minHeight]: `${x}px`
      }), a();
      function R() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-horizontal-scroll");
      }
    }
    function T(S, I) {
      const g = I, x = S + (g < e.getColCount() ? e.getColumnWidth(g) : 0) + (R() ? an : 0);
      fe(t, {
        [P.minWidth]: `${x}px`
      }), a();
      function R() {
        return e.className.includes("has-both-scroll") || e.className.includes("has-vertical-scroll");
      }
    }
  }
  get pluginKey() {
    return "overflow-panel";
  }
}
function ia(o) {
  const { filterOption: e } = o;
  if (!e || o.metaInfo.enabled === !1) return la;
  const { metaInfo: t } = o, { operand: n, operator: s } = e, r = () => {
    const d = n.map((a) => parseFloat(a)), c = new Set(d);
    switch (s) {
      case "equals":
        return ye((a) => c.has(a));
      case "not-equals":
        return ye((a) => !c.has(a));
      case "less-than":
        return ye((a) => d.some((h) => a < h));
      case "less-than-or-equal":
        return ye((a) => d.some((h) => a <= h));
      case "greater-than":
        return ye((a) => d.some((h) => a > h));
      case "greater-than-or-equal":
        return ye((a) => d.some((h) => a >= h));
      case "in-range":
        return ye((a) => d[0] <= a && a <= d[1]);
      case "blank":
        return Lt;
      default:
        return Ue;
    }
  }, i = () => {
    const { format: d } = t;
    if (!d) throw new Error("format is required for date type column");
    const c = n.map((h) => ca(h, d));
    switch (s) {
      case "equals":
        return a((h) => c.some((f) => h.isSame(f)));
      case "not-equals":
        return a((h) => c.every((f) => !h.isSame(f)));
      case "greater-than":
        return a((h) => c.some((f) => h.isAfter(f)));
      case "greater-than-or-equal":
        return a((h) => c.some((f) => h.isSameOrAfter(f)));
      case "less-than":
        return a((h) => c.some((f) => h.isBefore(f)));
      case "less-than-or-equal":
        return a((h) => c.some((f) => h.isSameOrBefore(f)));
      case "in-range":
        return a((h) => h.isBetween(c[0], c[1], null, "[]"));
      case "blank":
        return Lt;
      default:
        return Ue;
    }
    function a(h) {
      return (f) => {
        const C = Ft(f, d);
        return C.isValid() ? h(C) : !1;
      };
    }
  }, l = () => {
    const d = new Set(n);
    switch (s) {
      case "equals":
        return (c) => d.has(c);
      case "not-equals":
        return (c) => !d.has(c);
      case "contains":
        return (c) => n.some((a) => c.includes(a));
      case "not-contains":
        return (c) => !n.some((a) => c.includes(a));
      case "starts-with":
        return (c) => n.some((a) => c.startsWith(a));
      case "ends-with":
        return (c) => n.some((a) => c.endsWith(a));
      case "blank":
        return Lt;
      default:
        return Ue;
    }
  }, u = () => {
    const d = new Set(n.map((c) => c === "true"));
    switch (s) {
      case "equals":
        return $n((c) => d.has(c));
      case "not-equals":
        return $n((c) => !d.has(c));
      default:
        return Ue;
    }
  };
  switch (t.textType) {
    case "number":
      return r();
    case "date":
      return i();
    case "string":
      return l();
    case "checked":
      return u();
    default:
      return Ue;
  }
}
function Lt(o) {
  return o === "";
}
function Ue() {
  return !1;
}
function la() {
  return !0;
}
const aa = /^[-+]?[0-9]*(\.[0-9]+)?$/;
function ye(o) {
  return (e) => aa.test(e) ? o(parseFloat(e)) : !1;
}
function $n(o) {
  return (e) => o(e === "true");
}
function ca(o, e) {
  const t = Ft(o, e);
  return t.isValid() ? t : Ft(o.replace(/[-/]/g, ""), e.replace(/[-/]/g, ""));
}
const ua = (o) => {
  let e = null, t = !0, n = Object.freeze(o.getSnapshotRows());
  return {
    saveSnapshot: s,
    get enabledColumnClick() {
      return t;
    },
    set enabledColumnClick(r) {
      t = r;
    },
    clearSortOrder() {
      e && (e.cellInfo = { sortOrder: void 0 }), e = null;
    },
    getSnapshotRows() {
      return n;
    },
    /**
     *
     * @deprecated
     */
    clearNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    /**
     *
     * @deprecated
     */
    removeNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    /**
     *
     * @deprecated
     */
    setNumberColumns() {
      console.warn("setNumberColumns function is deprecated. Please remove this calling");
    },
    compareTo(r, i) {
      return Qt(r.text, i.text);
    },
    overrideColumnClickEvent() {
      console.debug(`Overrode IRGrid Column Sort Manager target-uuid::${o.uuid}`), o.onColumnClick = (r, i) => {
        !t || i.target instanceof HTMLElement && i.target.classList.contains("ir-grid-filter-icon") || this.toggleSortColumn(r);
      };
    },
    sortColumn(r, i) {
      o.sort((l, u) => this.compareTo(l.getCell(r), u.getCell(r)), i);
    },
    /**
     *
     * @version 2.20.0
     */
    sortColumns(...r) {
      o.sort((i, l) => {
        for (const [u, d] of r) {
          const c = this.compareTo(i.getCell(u), l.getCell(u));
          if (c !== 0)
            return d === "ASC" ? c : -c;
        }
        return 0;
      }, "ASC");
    },
    toggleSortColumn(r) {
      if (o.className.indexOf(Ze) >= 0)
        return;
      if (r.cellType !== "col-header")
        throw new Error("Can only execute in col-header");
      e || s();
      const i = r.cellInfo.sortOrder === "ASC" ? "DESC" : "ASC";
      e !== r && this.clearSortOrder(), e = r, r.cellInfo = { sortOrder: i }, this.sortColumn(r.col, i);
    }
  };
  function s() {
    n = Object.freeze(o.getSnapshotRows());
  }
};
var da = Object.defineProperty, ha = Object.getOwnPropertyDescriptor, tn = (o, e, t, n) => {
  for (var s = ha(e, t), r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (s = i(e, t, s) || s);
  return s && da(e, t, s), s;
};
const Ht = Object.freeze({
  textType: "string",
  enabled: !0
});
class nn {
  constructor(e, t) {
    this._grid = e, this._columnMetaInfo = t, this._columnSortManager = ua(e), this._columnSortManager.overrideColumnClickEvent(), this._defaultDateFormat = Q.t("datePicker.dateFormat"), Object.entries(t).forEach(([n, s]) => this._filterMap.set(parseInt(n, 10), { metaInfo: s }));
  }
  _columnSortManager;
  _filterMap = /* @__PURE__ */ new Map();
  _defaultDateFormat;
  clearFilters() {
    for (const e of this._filterMap.values())
      delete e.filterOption;
  }
  clearSortOrder() {
    this.columnSortManager.clearSortOrder();
  }
  setCheckAll(e, t) {
    const n = this._grid, s = `${t}`, r = n.getSnapshotRows().slice(n.headerRows).filter((i) => !i.filtered && `${i.getCell(e).text === "true"}` !== s);
    r.length !== 0 && n.commandManager.doRecording(`check all to ${t}`, () => {
      for (const i of r)
        n.setCell(i.rowId, e, { text: s });
    });
  }
  get columnSortManager() {
    return this._columnSortManager;
  }
  get dropdownId() {
    return `rowFilterDropdown__${this._grid.uuid}`;
  }
  getColumnMetaInfo(e) {
    return this._filterMap.get(e)?.metaInfo ?? Ht;
  }
  setColumnMetaInfo(e, t) {
    this._filterMap.set(e, {
      metaInfo: t,
      filterOption: this._filterMap.get(e)?.filterOption
    });
  }
  getFilterOptionByCol(e) {
    return this._filterMap.get(e)?.filterOption ?? null;
  }
  getTextListForCol(e) {
    const t = this._getMatcher(e);
    return Array.from(
      new Set(
        this._grid.getSnapshotRows().slice(this._grid.headerRows).map((n) => n.getCell(e).text)
      ),
      (n) => ({ text: n, checked: t(n) })
    );
  }
  get isFiltered() {
    return [...this._filterMap.values()].filter((e) => e.filterOption).length > 0;
  }
  removeColFilter(e) {
    const t = this._filterMap.get(e);
    t && delete t.filterOption;
  }
  setColFilter(e) {
    const t = this._filterMap.get(e.column);
    t ? t.filterOption = e : this._filterMap.set(e.column, {
      metaInfo: Ht,
      filterOption: e
    });
  }
  setSortOrder(e, t, n) {
    const s = this._grid.cell(e, t);
    s.props = { sortOrder: n === "ASC" ? "DESC" : "ASC" }, this.columnSortManager.toggleSortColumn(s);
  }
  toggleSortOrder(e, t) {
    this._columnSortManager.toggleSortColumn(this._grid.cell(e, t));
  }
  _getMatcherList() {
    return Array.from(this._filterMap.keys(), (e) => ({
      col: e,
      matcher: this._getMatcher(e)
    }));
  }
  _getMatcher(e) {
    const t = this._filterMap.get(e) ?? { metaInfo: Ht };
    return t.metaInfo.textType === "date" && !t.metaInfo.format && (t.metaInfo.format = this._defaultDateFormat), ia(t);
  }
  _applyFilter() {
    const e = this._getMatcherList();
    this._grid.setRowFilter(
      (t) => e.every(({ col: n, matcher: s }) => s(t.getCell(n).text))
    );
  }
}
tn([
  on()
], nn.prototype, "clearFilters");
tn([
  on()
], nn.prototype, "removeColFilter");
tn([
  on()
], nn.prototype, "setColFilter");
function on() {
  return function(o, e, t) {
    const n = t.value;
    return t.value = function(...s) {
      const r = n.apply(this, s);
      return this._applyFilter(), r;
    }, t;
  };
}
function fa(o, e) {
  const t = new Set(e.allowCellRenderType ?? ["default", "select", "datePicker", "custom"]), n = {
    text: "",
    ignoreCase: !0,
    matchAll: !1,
    area: "all",
    direction: "by-rows"
  };
  let s = !1, r = 0, i = 0;
  const l = {
    setRow(f) {
      r = f;
    },
    setCol(f) {
      i = f;
    }
  }, u = () => n.hasHeaderRows ? 0 : o.headerRows, d = () => n.hasHeaderColumns ? 0 : o.headerColumns;
  function* c() {
    l.setRow(u()), l.setCol(d());
    const f = o.getSelection();
    for (s = !1; ; ) {
      switch (n.area) {
        case "all":
          yield o.cell(r, i);
          break;
        case "selected-col":
          if (!f) throw new Error("No selection in finding");
          Jn(i, f) && (yield o.cell(r, i));
          break;
        case "selected-row":
          if (!f) throw new Error("No selection in finding");
          Yn(r, f) && (yield o.cell(r, i));
          break;
        case "selection":
          if (!f) throw new Error("No selection in finding");
          dn(r, i, f) && (yield o.cell(r, i));
          break;
        case "custom":
          if (!n.customRange) throw new Error("Please call with customRange in 'custom' finding.");
          dn(r, i, n.customRange) && (yield o.cell(r, i));
          break;
      }
      if (C()) break;
    }
    function C() {
      const T = n.direction;
      if (T === "by-columns" || T === "left-right") {
        if (++r, r >= o.getRowCount() && (++i, r = u()), i >= o.getColCount())
          if (s)
            s = !1, r = u(), i = d();
          else return !0;
      } else if (++i, i >= o.getColCount() && (++r, i = d()), r >= o.getRowCount())
        if (s)
          s = !1, r = u(), i = d();
        else return !0;
    }
  }
  function a(f) {
    if (!t.has(f.renderType)) return !1;
    const C = n.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), T = n.matchAll ? `^${C}$` : C, S = n.ignoreCase ? "i" : "", I = new RegExp(T, S);
    return e.onCellCheck ? e.onCellCheck(I, f) : I.test(f.text);
  }
  let h = c();
  return {
    resetCursor() {
      h = c();
    },
    findNext(f) {
      for (Zn(n, f) || (h = c()), Object.assign(n, f); ; ) {
        const C = h.next();
        if (!C.done && C.value && a(C.value))
          return s = !0, C.value;
        if (C.done)
          break;
      }
      return null;
    },
    getAllMatchedCell(f) {
      const C = [];
      f && Object.assign(n, f);
      for (const T of c())
        a(T) && C.push(T);
      return C;
    },
    setCursor(f, C) {
      if (f < 0 || C < 0) throw new Error("row or col must be greater than or equal to 0");
      l.setRow(f), l.setCol(C);
    }
  };
}
function Ot(o) {
  if (!(o instanceof Function))
    throw new Error("func is not a function");
  try {
    return o();
  } catch (e) {
    console.error(e);
  }
}
class ga extends q {
  _execute() {
    return this._instance.addColumn(...this._args);
  }
  _getUndoContext() {
    return {
      addedColumn: this._instance.getColCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _undo() {
    this._instance.removeColumn(this._undoContext.addedColumn), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return this._undoContext ? this._instance.getColCount() > this._undoContext.addedColumn : !1;
  }
}
class ma extends q {
  _execute() {
    if (!this._undoContext.row) throw new Error("not recorded the added row in undoContext!");
    return this._instance.insertRowByList([this._undoContext.row]), this._undoContext.row.rowId;
  }
  _undo() {
    this._undoContext.row = this._instance.getRow(this._undoContext.addedRow), this._instance.removeRow(this._undoContext.addedRow), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _getUndoContext() {
    return {
      row: null,
      addedRow: this._instance.getRowCount(),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return this._undoContext ? this._instance.getRowCount() > this._undoContext.addedRow : !1;
  }
}
class pa extends q {
  _undo() {
    this._instance.setColumnVisible(this._args[0], this._undoContext.visible);
  }
  _getUndoContext() {
    return {
      visible: this._instance.getColumnVisible(this._args[0])
    };
  }
  _execute() {
    return this._instance.setColumnVisible(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function Ho(o, e) {
  const [t, n] = o, [s, r] = e, i = n - t, l = r - s;
  return i === l ? [e, o] : t < s ? [[r - i, r], [t, t + l]] : [[s, s + i], [n - l, n]];
}
class wa extends q {
  _execute() {
    this._instance.exchangeRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeRows(...Ho(...this._args));
  }
  _getUndoContext() {
    return null;
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class Ca extends q {
  _execute() {
    this._instance.exchangeColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.exchangeColumns(...Ho(...this._args));
  }
  _getUndoContext() {
    return null;
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class _a extends q {
  _undo() {
    const [e, t = 1] = this._args;
    this._instance.removeColumns(e, e + t - 1), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertColumns(...this._args);
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Ra extends q {
  _undo() {
    const [e, t = 1] = this._args, n = e + t - 1;
    this._undoContext.rows = $(e, n + 1).map((s) => this._instance.getRow(s)), this._instance.removeRows(e, n), this._instance.forceLayoutTask(), this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
  }
  _execute() {
    return this._instance.insertRowByList(this._undoContext.rows), !0;
  }
  _getUndoContext() {
    return {
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell,
      rows: []
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class ya extends q {
  _undo() {
    const [e, t] = this._args;
    this._instance.splitCells(e, t), this._undoContext.textSnapshot.forEach(({ row: n, col: s, text: r }) => {
      this._instance.setText(n, s, r);
    });
  }
  _execute() {
    this._instance.mergeCells(...this._args);
  }
  _getUndoContext() {
    const e = new We(this._instance, this._instance), [t, n, s, r] = this._args, i = [];
    for (const l of e.getSelectionGenerator({ top: t, left: n, bottom: s, right: r }))
      i.push({ row: l.row, col: l.col, text: l.text });
    return {
      textSnapshot: i
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
function Oo(o, e) {
  const [t, n] = o, s = n - t;
  return t < e ? [[e - s - 1, e - 1], t] : [[e, e + s], n + 1];
}
class xa extends q {
  _execute() {
    return this._instance.moveRows(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveRows(...Oo(this._args[0], this._undoContext.targetId));
  }
  _getUndoContext() {
    return {
      targetId: this._args[1] < this._instance.getRowCount() ? this._instance.getStartOfRowId(this._args[1]) : this._instance.getRowCount()
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class ba extends q {
  _execute() {
    this._instance.moveColumns(this._args[0], this._args[1]);
  }
  _undo() {
    this._instance.moveColumns(...Oo(this._args[0], this._undoContext.targetId));
  }
  _getUndoContext() {
    return {
      targetId: this._args[1] < this._instance.getColCount() ? this._instance.getStartOfColumnId(this._args[1]) : this._instance.getColCount()
    };
  }
  get canExecute() {
    return !0;
  }
  get canUndo() {
    return !0;
  }
}
class Sa extends q {
  _undo() {
    const e = this._args[1] - this._args[0] + 1;
    this._instance.insertColumns(this._args[0], e), this._undoContext.columnList.forEach((t, n) => {
      this._instance.setColumnWidth(n + this._args[0], t.width), this._instance.setColumnVisible(n + this._args[0], t.visible);
    }), this._undoContext.removedCells.forEach((t) => {
      this._instance.cell(t.row, t.col).cellRenderer = t.cellRenderer, this._instance.setCell(t.row, t.col, t.metaInfo), (t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1) && this._instance.mergeCells(
        t.row,
        t.col,
        t.bottom,
        t.right
      );
    }), this._undoContext.selection && this._instance.select(
      this._undoContext.selection,
      this._undoContext.activeCell ? this._instance.cell(this._undoContext.activeCell.row, this._undoContext.activeCell.col) : null
    );
  }
  _getUndoContext() {
    const e = new bt(this._instance), [t, n] = this._args;
    return {
      removedCells: e.getCellListByColumn(t, n),
      columnList: e.getColumnListByColumn(t, n),
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  _execute() {
    return this._instance.removeColumns(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class va extends q {
  _undo() {
    this._instance.forceLayoutTask(), this._instance.insertRowByList(this._undoContext.removedRows), this._undoContext.removedRows.forEach((e) => {
      const t = e.rowId;
      for (let n = 0; n < e.cellCounts; n++) {
        const s = e.getCell(n);
        (s.mergeInfo.rowSpan > 1 || s.mergeInfo.colSpan > 1) && this._instance.mergeCells(
          t,
          s.col,
          s.bottom,
          s.right
        );
      }
      this._undoContext.selection && this._instance.select(this._undoContext.selection, this._undoContext.activeCell);
    });
  }
  _execute() {
    this._instance.forceLayoutTask();
    const e = this._undoContext.removedRows.slice().reverse();
    for (const t of e)
      if (this._instance.removeRow(t.rowId) === !1)
        return !1;
  }
  _getUndoContext() {
    this._instance.forceLayoutTask();
    const [e, t, n] = this._args, s = $(e, t + 1).map((r) => this._instance.getRow(r));
    return {
      removedRows: n?.ignoreFiltered === !0 ? s.filter((r) => !r.filtered) : s,
      selection: this._instance.getSelection(),
      activeCell: this._instance.activeCell
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class ka extends q {
  _execute() {
    this._instance.setColumnWidth(...this._args);
  }
  _getUndoContext() {
    return {
      latestWidth: this._instance.getColumnWidth(this._args[0])
    };
  }
  _undo() {
    this._instance.setColumnWidth(this._args[0], this._undoContext.latestWidth);
  }
  get canExecute() {
    return this._args[0] < this._instance.getColCount();
  }
  get canUndo() {
    return this._args[0] < this._instance.getColCount();
  }
}
class Ia extends q {
  _undo() {
    this._instance.setRowVisible(this._args[0], this._undoContext.visible);
  }
  _getUndoContext() {
    return {
      visible: this._instance.getRowVisible(this._args[0])
    };
  }
  _execute() {
    return this._instance.setRowVisible(...this._args);
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
class Ea extends q {
  _execute() {
    this._instance.setCellRenderer(...this._args);
  }
  _getUndoContext() {
    const [e, t] = this._args;
    return {
      row: e,
      col: t,
      cellRenderer: this._instance.cell(e, t).cellRenderer
    };
  }
  _undo() {
    this._instance.setCellRenderer(this._args[0], this._args[1], this._undoContext.cellRenderer);
  }
  get canExecute() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
  get canUndo() {
    return this._instance.cell(this._args[0], this._args[1]) !== void 0;
  }
}
class Ma extends q {
  _undo() {
    const [e, t] = this._args;
    this._instance.mergeCells(e, t, e + this._undoContext.rowSpan - 1, t + this._undoContext.colSpan - 1);
  }
  _execute() {
    this._instance.splitCells(...this._args);
  }
  _getUndoContext() {
    const e = this._instance.cell(...this._args);
    return {
      rowSpan: e.mergeInfo.rowSpan,
      colSpan: e.mergeInfo.colSpan
    };
  }
  get canUndo() {
    return !0;
  }
  get canExecute() {
    return !0;
  }
}
const Dn = {
  addRow: ma,
  addColumn: ga,
  setCell: Se,
  clearCells: Io,
  setRowHeight: So,
  setColumnWidth: ka,
  insertRows: Ra,
  insertColumns: _a,
  setRowVisible: Ia,
  setColumnVisible: pa,
  mergeCells: ya,
  splitCells: Ma,
  removeRows: va,
  removeColumns: Sa,
  exchangeRows: wa,
  exchangeColumns: Ca,
  moveRows: xa,
  moveColumns: ba,
  setCellRenderer: Ea
};
function Ta(o) {
  if (!(o in Dn)) {
    console.warn(`There is no method named ${o} in IRGridCommandMap`);
    return;
  }
  return Dn[o];
}
function La(o) {
  if (o === U.name)
    return Ta;
}
function Ha(o, e, t, n, s) {
  const r = La(e);
  if (!r) {
    console.warn("No component class in COMMAND_MAP.");
    return;
  }
  const i = r(t);
  if (!i) {
    console.warn("No command class in COMMAND_MAP.");
    return;
  }
  o.pushCommand(new i(n, s));
}
function X() {
  return function(e, t, n) {
    const s = n.value;
    return n.value = function(...r) {
      const { commandManager: i } = this;
      return i ? i.isRecording && Ha(i, this.constructor.name, t, this, r) : console.warn("No commandManager in this context"), s.apply(this, r);
    }, n;
  };
}
function At(o) {
  if (!(o.target instanceof HTMLElement)) return null;
  const e = o.target.closest("td,th");
  return e ? dt(e) : null;
}
var Oa = Object.defineProperty, Aa = Object.getOwnPropertyDescriptor, Z = (o, e, t, n) => {
  for (var s = Aa(e, t), r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (s = i(e, t, s) || s);
  return s && Oa(e, t, s), s;
};
const zt = new Zt(), za = Object.freeze({
  colSpan: !0,
  rowSpan: !0,
  skipFiltered: !0
}), Fa = Object.freeze({
  colSpan: !1,
  rowSpan: !1,
  skipFiltered: !0
}), Wn = {}, Pa = [
  "text/html",
  "text/plain"
];
function $a() {
  return [
    new Mo({}),
    new ko(),
    new To(),
    new vo({
      enabledColResizer: !0,
      enabledRowResizer: !0
    }),
    new ta({
      memoInterval: 500,
      tooltipInterval: 500,
      hideTooltipWhenHasMemo: !0
    })
  ];
}
class U extends ar {
  _colHeaderInfo;
  _rowHeaderInfo;
  _bodyInfo;
  _plugins = [];
  _defaultColumnCellFormat;
  // IRGrid Util
  _scheduleManager;
  _gridStore;
  _gridRangeUtils = new bt(this);
  _generator;
  _selector;
  _copyOptions;
  _pasteOptions;
  _readonly = !1;
  _rowSeq = 0;
  /**
   * `IRGrid`는 `class`형태로 제공된다. 그러므로, `new` 키워드를 이용하여 생성자 인자에 맞는 객체 인스턴스를 생성하여 사용한다. 생성자 인자는 `IRGridArgs`라는 단일 타입으로 정의되어 있다.
   * @param args
   */
  constructor(e) {
    super({ contextElement: e.contextElement });
    const {
      colHeader: t,
      rowHeader: n,
      body: s,
      defaultColumnCellFormat: r,
      plugins: i
    } = e;
    if (this._defaultColumnCellFormat = {
      all: {
        editable: !0,
        text: ""
      }
    }, this._copyOptions = {
      ...za,
      ...e.copyOptions
    }, this._pasteOptions = {
      ...Fa,
      ...e.copyOptions,
      ...e.pasteOptions
    }, r)
      for (const [a, h] of Object.entries(r))
        this._defaultColumnCellFormat[a] = Object.assign(this._defaultColumnCellFormat[a] || {}, h);
    this._gridStore = new vl(
      {
        freezedColumnCount: 0,
        freezedRowCount: 0,
        headerColumnCount: n?.colCount ?? 0,
        headerRowCount: t?.rowCount ?? 0,
        gridCommandManager: new js({ context: this }),
        gridStateContext: new Al(this),
        cursorManager: Eo(this, !1)
      }
    ), this._initGridCellPadding(), this._colHeaderInfo = Object.assign({
      rowCount: 0,
      colCount: 5,
      cellRenderer: zt,
      defaultSize: this._gridStore.getThemeValue("grid.defaultColumnWidth"),
      minSize: this._gridStore.getThemeValue("grid.defaultColumnMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultColumnMaxSize")
    }, t), this._colHeaderInfo.minSize = Math.min(this._colHeaderInfo.defaultSize, this._colHeaderInfo.minSize), this._colHeaderInfo.maxSize = Math.max(this._colHeaderInfo.defaultSize, this._colHeaderInfo.maxSize), this._rowHeaderInfo = Object.assign({
      colCount: 0,
      /**
       * cellRenderer 설명
       */
      cellRenderer: zt,
      defaultSize: this._gridStore.getThemeValue("grid.defaultRowHeight"),
      minSize: this._gridStore.getThemeValue("grid.defaultRowMinSize"),
      maxSize: this._gridStore.getThemeValue("grid.defaultRowMaxSize")
    }, n), this._rowHeaderInfo.minSize = Math.min(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.minSize), this._rowHeaderInfo.maxSize = Math.max(this._rowHeaderInfo.defaultSize, this._rowHeaderInfo.maxSize), this._bodyInfo = Object.assign({
      rowCount: 5,
      cellRenderer: zt
    }, s), this.contextElement.classList.add(Ws, Ns), this.contextElement.tabIndex = 0, this.contextElement.role = "grid";
    const { wrapper: l } = this._gridStore.elements, { gridStateContext: u } = this._gridStore;
    this.contextElement.appendChild(l);
    let d = {
      offsetWidth: 0,
      offsetHeight: 0,
      className: ""
    }, c = !1;
    this.resizeObserve(() => {
      if (c) return;
      const { offsetHeight: a, offsetWidth: h, className: f } = this.contextElement;
      d.offsetWidth === h && d.offsetHeight === a && d.className === f || (d = { offsetWidth: h, offsetHeight: a, className: f }, c = !0, this._gridStore.hook.emit("resize", []).finally(() => {
        c = !1, this._scheduleManager.addTask("virtualRender").addTask("generateScrollBarClass").addTask("updateSelection");
      }));
    }), this.addCoreElement(l), this._generator = new We(this._rowManager, this._colManager), this._selector = new Bl(this, u, l), this._scheduleManager = new Ul({
      grid: this,
      store: this._gridStore,
      contextElement: this.contextElement,
      selector: this._selector
    }), this._initPlugins(i ?? $a()), u.selectionRangeState.addSubscription((a, h) => {
      a?.activeCell !== h?.activeCell && (a?.activeCell.deactivate(), h?.activeCell.activate());
    }), u.activateHeaderCellState.addSubscription((a, h) => {
      a.forEach((f) => f.deactivate()), h.forEach((f) => f.activate());
    }), u.selectionRangeState.addSubscription((a, h) => {
      h ? u.activateHeaderCellState.next([...this._generator.getSelectionHeaderIterator(h.range)]) : u.activateHeaderCellState.next([]);
    }), u.selectionRangeState.addSubscription((a, h) => {
      a?.activeCell !== h?.activeCell && Ot(() => this.onChangeCell(h?.activeCell ?? null)), Ot(h ? () => this.onSelectCell(h.activeCell) : () => this.onActiveCellNull());
    }), u.selectionRangeState.addSubscription((a, h) => {
      this.onSelectChanged(h?.range ?? null, a?.range ?? null);
    }), u.selectionRangeState.addSubscription((a, h) => {
      h?.activeCell && this._gridStore.gridTextarea.setPosition(h.activeCell, this.scrollTop, this.scrollLeft);
    }), u.gridModeState.addSubscription((a, h) => {
      this.contextElement.dataset.mode = h.mode;
    }), u.gridModeState.next({ mode: "idle", contextParam: {} }), this.addGlobalEventListener(this.contextElement, "contextmenu", (a) => this.hook.emit("contextMenu", [a])), this.addGlobalEventListener(this.contextElement, "focus", (a) => this.hook.emit("contextFocus", [a])), this.addGlobalEventListener(this.contextElement, "blur", (a) => this.hook.emit("contextBlur", [a])), this.addGlobalEventListener(this.contextElement, "dragstart", (a) => this.hook.emit("contextDragStart", [a])), this.addGlobalEventListener(this.contextElement, "dragend", (a) => this.hook.emit("contextDragEnd", [a])), this.addGlobalEventListener(this.contextElement, "scroll", (a) => {
      this.hook.emitSync("contextScroll", [a, this.scrollTop, this.scrollLeft]);
    }, { passive: !1 }), this.addGlobalEventListener(this.contextElement, "cut", (a) => this.hook.emitSync("cut", [a])), this.addGlobalEventListener(this.contextElement, "copy", (a) => this.hook.emitSync("copy", [a])), this.addGlobalEventListener(this.contextElement, "paste", (a) => this.hook.emitSync("paste", [a])), this.addGlobalEventListener(this.contextElement, "input", (a) => this.hook.emitSync("input", [a]), !0), this.addGlobalEventListener(this.contextElement, "keydown", (a) => this.hook.emitSync("keydown", [a]), !0), this.addGlobalEventListener(this.contextElement, "mousedown", (a) => this.hook.emit("contextMouseDown", [a])), this.addGlobalEventListener(this.contextElement, "mousemove", (a) => this.hook.emit("contextMouseMove", [a])), this.addGlobalEventListener(this.contextElement, "mouseup", (a) => this.hook.emit("contextMouseUp", [a])), this.addGlobalEventListener(this.contextElement, "click", (a) => this.hook.emitSync("contextClick", [a])), this.addGlobalEventListener(this.contextElement, "dblclick", (a) => this.hook.emitSync("contextDoubleClick", [a])), this.addGlobalEventListener(this.contextElement, "mousedown", (a) => this.hook.emitSync("contextMouseDown", [a])), this.addGlobalEventListener(this.contextElement, "mouseup", (a) => this.hook.emitSync("contextMouseUp", [a])), this.hook.addBeginHook("contextMenu", (a) => void a.preventDefault()), this.hook.addEndHook("contextMenu", (a) => {
      const { y: h, x: f } = dr(a);
      this.onContextMenu(a, this.findCellOrNull(h, f));
    }), this.hook.addEndHook("contextFocus", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextMouseUp", this._gridEvFocus.bind(this)), this.hook.addEndHook("contextDragEnd", this._gridEvFocus.bind(this)), this.hook.addSyncHook("cellRightClick", (a, h) => this.onCellRightClick(h, a)), this.hook.addSyncHook("cellClear", (a) => this.onClearCell(a)), this.hook.addSyncHook("cellDblClick", (a) => this.onDoubleClickCell(a)), this.hook.addSyncHook("cellSelect", (a) => this.selectCell(a.row, a.col)), this.hook.addSyncHook("cellClick", (a, h) => {
      h.__IGNORE_CELL_CLICK__ || this.contextElement.classList.contains(Ze) || (a.cellType === "row-header" && this.onRowClick(a, h), a.cellType === "col-header" && this.onColumnClick(a, h));
    }), this.hook.addSyncHook("contextMouseUp", (a) => {
      if (a.button !== 2) return;
      const h = At(a);
      if (h) {
        const f = this.cell(h.row, h.col);
        f.onRightClick(f, a);
      }
    }), this.hook.addSyncHook("contextClick", (a) => {
      const h = At(a);
      if (h) {
        const f = this.cell(h.row, h.col);
        f.onClick(f, a);
      }
    }), this.hook.addSyncHook("contextDoubleClick", (a) => {
      if (!be(a.target) || a.target.tagName === "I" || a.target.tagName === "TEXTAREA") return;
      const h = At(a);
      if (h) {
        const f = this.cell(h.row, h.col);
        f.onDblClick(f);
      }
    }), this._initTableRowCol(), this._gridStore.gridTextarea.mountElement(l);
  }
  _gridEvFocus(e) {
    e.__IGNORE_GRID_FOCUS__ !== !0 && this.focus();
  }
  /**
   * grid에 추가되어 있는 플러그인을 제거할 수 있다.
   * @version ^2.15.1
   * @example
   * ```ts
   * grid.clearPlugins();
   * ```
   */
  clearPlugins() {
    const e = this._plugins.slice();
    for (const t of e)
      this.removePlugin(t);
  }
  /**
   * 현재 그리드에 존재하는 모든 행(row)의 데이터를 스냅샷 형태로 반환한다.
   * @returns 현재 그리드의 행 데이터를 표현한 스냅샷 배열
   */
  getSnapshotRows() {
    return this._gridStore.rowManager.getSnapshotRows();
  }
  onDestroy() {
    this._gridStore.hook.destroy(), this.clearPlugins();
  }
  /**
   * IRGrid 첫 초기화 시 지정된 colHeader.rowCount를 반환
   * 혼동의 여지가 있어, 사용을 권장하지 않음
   * @deprecated {@link getFreezedRowCount} 사용 권장
   */
  get fixedRowCount() {
    return this._colHeaderInfo.rowCount;
  }
  /**
   * 현재 복사 설정 정보를 반환한다.
   * @version ^2.17.0
   */
  get copyOptions() {
    return Object.freeze(this._copyOptions);
  }
  /**
   * 현재 붙여넣기 설정 정보를 반환한다.
   * @version ^2.17.0
   */
  get pasteOptions() {
    return Object.freeze(this._pasteOptions);
  }
  /**
   * contextElement 요소의 클래스 이름(className)을 반환한다.
   * @version ^2.17.0
   */
  get className() {
    return this.contextElement.className;
  }
  /**
   * 컴포넌트 라벨을 반환한다.
   */
  get componentLabel() {
    return "grid";
  }
  /**
   * grid가 가지고 있는 hook 정보를 반환한다.
   */
  get hook() {
    return this._gridStore.hook;
  }
  /**
   * @deprecated 추후 제거될 getter
   */
  get canSelectMultipleCells() {
    return !1;
  }
  /**
   * 현재 Grid의 가장 첫 Row를 반환한다.
   */
  get firstRow() {
    return this._rowManager.firstRow;
  }
  /**
   * 현재 Grid의 가장 마지막 Row를 반환한다.
   */
  get lastRow() {
    return this._rowManager.lastRow;
  }
  get _gridContext() {
    return this._gridStore.gridStateContext;
  }
  get _rowManager() {
    return this._gridStore.rowManager;
  }
  get _mergeHandler() {
    return this._gridStore.mergeHandler;
  }
  get _colManager() {
    return this._gridStore.columnManager;
  }
  /**
   * 현재 고정된 열 개수 (header + body)의 개수를 반환한다.
   */
  get fixedColumnCount() {
    return this._colManager.freezedColumns;
  }
  /**
   * 현재 Grid의 총 column 너비 값을 반환한다.
   */
  get width() {
    return this.contextWidth;
  }
  get contextWidth() {
    return this._colManager.columnsWidth;
  }
  get contextHeight() {
    return this._rowManager.rowsHeight;
  }
  /**
   * 현재 Grid의 총 row 높이 값을 반환한다.
   */
  get height() {
    return this.contextHeight;
  }
  /**
   * 고정된 행인 headerRows + freezedRows 높이 총합을 반환한다.
   */
  get fixedRowHeight() {
    return this._rowManager.freezedRowsHeight;
  }
  /**
   * 고정된 열인 rowHeaders + freezedColumns 너비 총합을 반환한다.
   */
  get fixedColumnWidth() {
    return this._colManager.fixedColumnsWidth;
  }
  /**
   * 현재 Grid의 scroll 영역 정보를 반환한다.
   */
  get scrollArea() {
    const { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: s } = this.contextElement;
    return { scrollTop: e, scrollWidth: t, scrollHeight: n, scrollLeft: s };
  }
  /**
   * 현재 Grid의 ScrollTop 레이아웃 값을 반환한다.
   */
  get scrollTop() {
    return this.contextElement.scrollTop;
  }
  /**
   * 현재 Grid의 scrollLeft 레이아웃 값을 반환한다.
   */
  get scrollLeft() {
    return this.contextElement.scrollLeft;
  }
  /**
   * 현재 Grid의 scrollBottom 레이아웃 값을 반환한다.
   */
  get scrollBottom() {
    return this.contextElement.scrollTop + this.contextElement.clientHeight;
  }
  /**
   * 현재 Grid의 scrollRight 레이아웃 값을 반환한다.
   */
  get scrollRight() {
    return this.contextElement.scrollLeft + this.contextElement.clientWidth;
  }
  /**
   * Grid 생성 시, 지정된 colHeader.minSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultColumnMinSize` 사용)
   */
  get minColWidth() {
    return this._colHeaderInfo.minSize;
  }
  /**
   * Grid 생성 시, 지정된 colHeader.maxSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultColumnMaxSize` 사용)
   */
  get maxColWidth() {
    return this._colHeaderInfo.maxSize;
  }
  /**
   * Grid 생성 시, 지정된 rowHeader.minSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultRowMinSize` 사용)
   */
  get minRowHeight() {
    return this._rowHeaderInfo.minSize;
  }
  /**
   * Grid 생성 시, 지정된 rowHeader.maxSize 값을 반환한다. (미지정 시, theme 값의 `grid.defaultRowMaxSize` 사용)
   */
  get maxRowHeight() {
    return this._rowHeaderInfo.maxSize;
  }
  /**
   * `IRGrid`의 여러 명령들을 녹화하여 `undo`/`redo`를 지원하는 {@link IRCommandManager} 객체를 반환한다.
   */
  get commandManager() {
    return this._gridStore.commandManager;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 행 개수(초기 colHeader.rowCount)를 반환한다.
   */
  get headerRows() {
    return this._rowManager.headerRows;
  }
  /**
   * IRGrid 초기화 시 지정된 헤더 열 개수(초기 rowHeader.colCount)를 반환한다.
   */
  get headerColumns() {
    return this._colManager.headerColumns;
  }
  /**
   * 현재 Grid의 헤더 열들의 너비 합을 반환한다.
   */
  get headerWidth() {
    return this._colManager.rowHeaderColumnsWidth;
  }
  /**
   * 현재 Grid의 헤더 행들의 높이 합을 반환한다.
   */
  get headerHeight() {
    return this._rowManager.headerRowsHeight;
  }
  /**
   * 현재 Grid에서 활성화된 Cell을 반환한다.
   */
  get activeCell() {
    return this._gridContext.selectionRangeState.value?.activeCell ?? null;
  }
  /*
   * Setters
   */
  /**
   * 복사 설정 정보를 지정한다.
   * @version ^2.17.0
   */
  set copyOptions(e) {
    Object.assign(this._copyOptions, e);
  }
  /**
   * 붙여넣기 설정 정보를 지정한다.
   * @version ^2.17.0
   */
  set pasteOptions(e) {
    Object.assign(this._pasteOptions, e);
  }
  /**
   * 현재 Grid에서 활성화된 Cell을 설정한다. null을 설정하면 활성화된 Cell이 없어진다.
   */
  set activeCell(e) {
    if (e === this.activeCell) return;
    if (!e) {
      this._gridContext.selectionRangeState.next(null);
      return;
    }
    const t = this.getSelection();
    t ? this._gridContext.selectionRangeState.next({
      activeCell: e,
      range: t
    }) : this._gridContext.selectionRangeState.next({
      activeCell: e,
      range: { top: e.row, left: e.col, bottom: e.bottom, right: e.right }
    });
  }
  /**
   * 현재 Grid를 읽기 전용 모드로 설정한다. true 할당 시, 모든 셀의 편집기 전환, 붙여넣기 등의 수정 작업이 불가능해진다.
   */
  set readonly(e) {
    this._readonly = e, this._rowManager.updateCellReadonlyStatus();
  }
  /*
   * Public Methods
   */
  /**
   * IRGrid에 적용할 Plugin을 추가한다.
   * @param plugin - 추가하려는 {@link IRGridPlugin} 인스턴스
   * @example
   * ```ts
   * import { IRGridMoveRowsPlugin } from "@innorules/ir-style/grid";
   *
   * // 기본 제공되지 않는 행 이동 플러그인을 추가
   * grid.addPlugin( new IRGridMoveRowsPlugin() );
   * ````
   * @type
   * @remarks
   *
   * Tip
   *
   * IRGrid 생성 시, plugins 인자를 정의하지 않았다면, 아래의 플러그인들이 기본적으로 초기화 된다.
   * - `IRGridDefaultKeyPlugin`: IRGrid에 포커스가 있을 때 기본 키 입력 처리 플러그인
   * - `IRGridMouseCellSelectorPlugin`: IRGrid의 셀을 클릭할 때 동작을 처리하는 플러그인
   * - `IRGridCellDropPlugin`: 외부에서 온 drag 데이터를 받아 처리하는 플러그인
   * - `IRGridResizerPlugin`: 헤더 셀의 우측 경계를 드래그하여 크기를 조정하는 플러그인
   * - `IRGridPopoverPlugin`: 셀에 대한 메모 표시를 위한 플러그인
   */
  addPlugin(e) {
    e.mount({
      grid: this,
      contextElement: this.contextElement,
      gridStore: this._gridStore
    }), this._plugins.push(e);
  }
  /**
   * Grid에서 left 좌표에 해당하는 {@link IRGridColumn} 객체를 찾아 반환한다.
   * @version ^2.12.2
   * @param left - `IRGridColumn`을 찾기 위한 left 좌표 값
   * @example
   * ```ts
   * const grid = new IRGrid({
   *     contextElement: document.querySelector('#grid'),
   *    colHeader: {
   *        colCount: 5,
   *        defaultSize: 100
   *    },
   *});
   *
   * // 100은 0번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(100).columnId );
   * // 101은 1번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(101).columnId );
   * // 504은 4번째 column 객체가 반환된다.
   * console.log( grid.getColumnByLeft(504).columnId );
   * // 505은 null
   * console.log( grid.getColumnByLeft(505) );
   * ```
   */
  getColumnByLeft(e) {
    const t = this._colManager.visibleColumnList;
    let n = 0, s = t.length - 1;
    for (; n <= s; ) {
      const r = n + Math.floor((s - n) / 2), i = t[r];
      if (i.isBetweenLeft(e))
        return i;
      e < i.left ? s = r - 1 : n = r + 1;
    }
    return null;
  }
  /**
   * 설정된 기본 열 서식을 변경한다.
   * all 모든 셀 공통
   * {number} 해당 열 셀 공통
   * col_header_{number} 해당 열 헤더 셀
   * row_header_{number} 해당 행 헤더 셀
   * body_{number} 해당 body 열 셀
   */
  setDefaultColumnCellFormat(e, t) {
    this._defaultColumnCellFormat[e] = { ...t };
  }
  /**
   * 이진 검색으로 top에 해당되는 row를 찾습니다.
   * @param top grid context 내 top 위치
   */
  getRowByTop(e) {
    return this._rowManager.getRowByTop(e);
  }
  /**
   * 해당 플러그인을 제거한다.
   * @param plugin
   */
  removePlugin(e) {
    if (!this._plugins.includes(e))
      throw new Error("plugin not found");
    try {
      e.unmount(), this._plugins.splice(this._plugins.indexOf(e), 1);
    } catch (t) {
      console.error("removing plugin error!", t);
    }
  }
  /**
   * 지정된 셀이 병합된 셀 그룹의 기준 셀인 경우, 해당 병합 셀의 행 및 열 범위를 반환한다.
   * @param row - 병합된 셀의 기준 셀 row 값
   * @param col - 병합된 셀의 기준 셀 col 값
   * @returns
   * @example
   * ```ts
   * console.log( grid.getMergeArea( 3, 10 ) );
   * ```
   */
  getMergeArea(e, t) {
    const n = this.cell(e, t);
    if (n.mergeInfo)
      return {
        rowSpan: n.mergeInfo.rowSpan,
        colSpan: n.mergeInfo.colSpan
      };
    throw new Error("It's not a based cell!");
  }
  /**
   * 특정 셀의 병합 여부를 반환한다.
   * @param row
   * @param col
   * @returns
   * @example
   * ```ts
   * grid.isMerged( 1, 5 )
   * ```
   */
  isMerged(e, t) {
    return this._mergeHandler.isMerged(e, t);
  }
  splitCells(e, t) {
    this.forceLayoutTask(), this._mergeHandler.splitCells(e, t), this._scheduleManager.addTask("virtualRender");
  }
  mergeCells(e, t, n, s) {
    this.forceLayoutTask(), this._mergeHandler.mergeCells({ top: e, left: t, bottom: n, right: s }), this._scheduleManager.addTask("virtualRender");
    const r = this.getSelection();
    r && this.selectRange(r.top, r.left, r.bottom, r.right);
  }
  /**
   * 마지막 명령을 실행 취소한다.
   * @returns
   */
  undo() {
    return this.commandManager.undo();
  }
  /**
   * 마지막으로 취소한 명령을 다시 실행한다.
   * @returns
   */
  redo() {
    return this.commandManager.redo();
  }
  /**
   * 주어진 Y 오프셋 위치에 해당하는 행(Row)을 반환한다.
   * @param offsetY - 기준이 되는 Y 좌표
   * @returns
   */
  findRowOrNull(e) {
    return this._rowManager.findRowOrNull(this.scrollTop, e, this.fixedRowCount);
  }
  /**
   * - 주어진 좌표에 해당하는 셀을 반환한다.
   * - 병합 셀에 포함된 경우, 병합 그룹의 대표 셀을 반환한다.
   *
   * @param offsetY - Y 좌표
   * @param offsetX - X 좌표
   * @returns
   */
  findCellOrNull(e, t) {
    const { scrollTop: n, scrollLeft: s } = this, r = e < n + this.fixedRowHeight ? e - n : e, i = t < s + this.fixedColumnWidth ? t - s : t, l = this.getRowByTop(r);
    if (!l) return null;
    const u = this.getColumnByLeft(i);
    if (!u) return null;
    const d = this.cell(l.rowId, u.columnId);
    return d.mergeMain ?? d;
  }
  /**
   * 해당 셀의 기준이되는 셀을 반환한다.
   * @param row - 기준이 되는 셀을 가지고 오고 싶은 셀의 row index
   * @param col - 기준이 되는 셀을 가지고 오고 싶은 셀의 column index
   * @returns
   */
  getBaseCell(e, t) {
    const n = this.cell(e, t);
    if (n.isMerged)
      return { row: n.row, col: n.col };
    if (n.mergeMain)
      return { row: n.mergeMain.row, col: n.mergeMain.col };
    throw new Error("It's not a merged cell!");
  }
  /**
   * 현재 선택된 셀 범위를 해제한다.
   */
  releaseCells() {
    this._gridContext.selectionRangeState.next(null), this._selector.releaseRange();
  }
  _clearAllRows() {
    this.contextElement.scrollTop = 0, this._rowManager.clearRows(), this._mergeHandler.clearMergeCells(this.headerRows), this.commandManager.clearCommands();
  }
  /**
   * - headerRows를 제외한 모든 body row를 제거한다.
   * - undo용 command가 모두 초기화 된다.
   * @example
   * ```ts
   * grid.clearRows();
   * ```
   */
  clearRows() {
    this._clearAllRows(), this._scheduleManager.addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection").addTask("updateSelection");
  }
  /**
   * 해당 컬럼의 left 값을 반환한다.
   * @param col - left 위치 값을 가져오고자 하는 column
   * @returns
   */
  getColumnLeft(e) {
    return this._colManager.getColumnLeft(e);
  }
  /**
   * 원하는 범위와 셀을 선택한다.
   * @param range - 선택하려는 범위를 나타내는 {@link IRGridRange} 객체
   * @param cell
   * @example
   * ```ts
   * // 0 ~ 2까지 3*3 영역 선택
   * grid.select( { top: 0, left: 0, bottom: 2, right: 2 } );
   * // 영역 선택 후, 활성화 셀은 1,1로 지정
   * grid.select( { top: 0, left: 0, bottom: 2, right: 2 }, grid.getCell(1, 1) );
   * ```
   * @remarks
   * Tip
   * - 영역 계산은 top ~ bottom까지 영역이 포함되므로 0 ~ 2까지 선택하면 3개 크기의 영역을 선택하는 것이다.
   * - header 영역은 선택할 수 없다.
   */
  select(e, t = this.activeCell) {
    t?.isRemoved && (t = null), this._gridContext.selectionRangeState.next({
      range: e,
      activeCell: t ?? this.cell(e.top, e.left)
    }), this._scheduleManager.addTask("updateSelection");
  }
  /**
   * 원하는 범위를 선택한다. ({@link select}를 기반으로 호출하며, 인자 타입만 다르다.)
   * @example
   * ```ts
   * // 0 ~ 2까지 3*3 영역 선택
   * grid.selectRange( 0, 0, 2, 2 );
   * // 영역 선택 후, 활성화 셀은 1,1로 지정
   * grid.selectRange( 0, 0, 2, 2, grid.getCell(1, 1) );
   * ```
   */
  selectRange(e, t, n, s, r = this.activeCell) {
    this.select({ top: e, left: t, bottom: n, right: s }, r);
  }
  /**
   * 그리드 내의 모든 셀을 선택한다.
   * @example
   * ```ts
   * grid.selectAll();
   * ```
   */
  selectAll() {
    this.selectRange(this.headerRows, this.headerColumns, this.getRowCount() - 1, this.getColCount() - 1, this.activeCell ?? null);
  }
  /**
   * 특정 셀의 너비를 반환한다.
   * @param cell - 너비를 구하고자 하는 셀 객체
   * @example
   * ```ts
   * const cellWidth = grid.getCellWidth( grid.getCell(1, 1) );
   * ```
   * @remarks
   * Tip
   * - 셀이 병합된 경우, 병합된 여러 열의 너비 합이 반환된다.
   */
  getCellWidth(e) {
    if (e.mergeInfo) {
      const { col: t } = e;
      return $(e.mergeInfo.colSpan).reduce((n, s) => this.getColumnVisible(t + s) ? n + this.getColumnWidth(t + s) : n, 0);
    }
    return this.getColumnWidth(e.col);
  }
  /**
   * 해당 셀이 보여짐 상태를 반환한다.
   * @param row - 셀의 row
   * @param col - 셀의 column
   * @returns
   */
  getCellVisible(e, t) {
    return !this.getRowVisible(e) || !this.getColumnVisible(t) ? !1 : this.cell(e, t).visible;
  }
  /**
   * 해당 셀의 높이를 가져온다.
   * @param cell - 높이 값을 가져오고 싶은 셀 정보
   * @returns
   */
  getCellHeight(e) {
    if (e.mergeInfo) {
      const { row: t } = e;
      return $(e.mergeInfo.rowSpan).reduce((n, s) => this.getRowVisible(t + s) ? n + this.getRowHeight(e.row + s) : n, 0);
    }
    return this.getRowHeight(e.col);
  }
  /**
   * grid내에서 선택된 cell들의 정보(top, left, bottom, right)를 반환한다.
   * @returns
   * @example
   * ```ts
   * grid.getSelection();
   * ```
   */
  getSelection() {
    return this._gridContext.selectionRangeState.value?.range ?? null;
  }
  /**
   * 지정한 행이 보이도록 스크롤 위치를 조정한다.
   * @param row - 스크롤 위치를 변경할 행
   */
  scrollOnRow(e) {
    this._scheduleManager.updateScrollInfo({ row: e });
  }
  /**
   * 지정한 열이 보이도록 스크롤 위치를 조정한다.
   * @param col - 스크롤 위치를 변경할 열
   */
  scrollOnCol(e) {
    this._scheduleManager.updateScrollInfo({ col: e });
  }
  /**
   * 레이아웃 태스크를 강제로 실행한다.
   */
  forceLayoutTask() {
    this._scheduleManager.forceRunTasks();
  }
  /**
   * 지정한 타입의 플러그인 인스턴스를 반환한다.
   * @param type - 플러그인 클래스 생성자 함수
   * @returns
   */
  getPlugin(e) {
    for (const t of this._plugins)
      if (t instanceof e)
        return t;
    throw new Error(`not found plugin ${e}`);
  }
  /**
   * 스크롤 위치 값을 리셋한다.
   */
  resetScroll() {
    this.contextElement.scrollTop = 0, this.contextElement.scrollLeft = 0;
  }
  /**
   * 지정한 영역이 화면(Viewport)에 보이도록 스크롤 위치를 조정한다.
   * @param row - 화면에 보이도록 할 row index
   * @param col - 화면에 보이도록 할 column index
   * @example
   * ```ts
   * grid.scrollInView( 4, 10 );
   * ```
   */
  scrollInView(e, t) {
    this._scheduleManager.updateScrollInfo({ row: e, col: t });
  }
  /**
   * grid에 focus를 설정한다.
   */
  focus() {
    this._gridStore.tableElement.draggable || this._gridStore.gridTextarea.focus();
  }
  /**
   * 비동기적으로 처리되는 렌더링 이후 작업이 예약되도록 설정한다.
   */
  afterRender(e) {
    this._scheduleManager.addAfterRenderTask(e), this._scheduleManager.addTask("nothing");
  }
  /**
   * 특정 row, col의 셀 `text`속성을 설정한다.
   * @command 내부적으로 setCell을 호출하여 command에 기록
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @param text - 대상 셀에 설정할 값.
   * - `number` 또는 `bigint` 타입을 지정한 경우 문자열로 변환하여 설정된다. (`5` -> `"5"`, `123123123n` -> `"123123123"`)
   * - `boolean` 타입을 지정한 경우 문자열로 변환하여 설정된다. (`true` -> `"true"`)
   * - `undefined` 또는 `null` 타입을 지정한 경우 빈 문자열로 설정된다.
   * - `object` 타입을 전달한 경우 예외가 발생한다.
   * @example
   * ```ts
   * grid.setText( 0, 0, "" );           // ""
   * grid.setText( 1, 0, "문자열" );     // "문자열"
   * grid.setText( 2, 0, undefined );    // ""
   * grid.setText( 3, 0, null );         // ""
   * grid.setText( 4, 0, 5 );            // "5"
   * grid.setText( 5, 0, 123123n );      // "123123"
   * grid.setText( 6, 0, true );         // "true"
   * ```
   * @remarks
   * Tip
   * - 그리드 내부에서 모든 text는 string로 취급되어 저장된다.
   * - 셀마다 별도의 커스텀 데이터 저장이 필요한 경우, {@link setObject} 메서드를 이용
   */
  setText(e, t, n) {
    this.setCell(e, t, { text: n });
  }
  setCellRenderer(e, t, n) {
    this.cell(e, t).cellRenderer = n;
  }
  /**
   * 특정 row, col의 셀의 `text`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * grid.getText( 0, 0 );
   * ```
   */
  getText(e, t) {
    return this.cell(e, t).text;
  }
  /**
   * 특정 row, col의 셀의 `value`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @returns
   * ```ts
   * grid.getValue( 4, 5 );
   * ```
   */
  getValue(e, t) {
    return this.cell(e, t).value;
  }
  /**
   * 특정 열의 넓이 값을 반환한다.
   * @param col - 넓이 값을 반환하고 싶은 column
   * @returns
   * @example
   * ```ts
   * console.log( grid.columnWidth( 4 ) );
   * ```
   */
  getColumnWidth(e) {
    return this._colManager.getColumnWidth(e);
  }
  /**
   *
   * @version ^2.18.0
   */
  getColWidthWithSpan(e, t) {
    let n = 0;
    for (let s = 0; s < t; s++)
      n += this._colManager.getColumnUnstable(e + s).widthWithBorder;
    return n;
  }
  /**
   *
   * @version ^2.17.0
   * @command
   */
  setData(e) {
    const { row: t, col: n, data: s } = e;
    s.forEach((r, i) => {
      r.forEach((l, u) => this.setText(t + i, n + u, l));
    });
  }
  setColumnWidth(e, t) {
    const n = K(t, this._colHeaderInfo.minSize, this._colHeaderInfo.maxSize);
    this._colManager.setColumnWidth(e, n), this._rowManager.setColumnWidth(e, n), this._gridStore.hook.emit("columnChanged", [e, e, "setWidth"]), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("resizeGridWrapperWidth").addTask("updateSelection").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft");
  }
  /**
   * grid 내부에 있는 특정 row의 높이를 반환한다.
   * @param row - 높이 값을 가져오고자 하는 row index
   * @returns
   * @example
   * ```ts
   * grid.getRowHeight( 0 );
   * ```
   */
  getRowHeight(e) {
    return this._rowManager.getRowHeight(e);
  }
  /**
   * @version ^2.18.0
   */
  getRowHeightWithSpan(e, t) {
    let n = 0;
    for (let s = 0; s < t; s++)
      n += this._rowManager.getRowUnstable(e + s).heightWithBorder;
    return n;
  }
  setRowHeight(e, t) {
    const n = K(t, this.minRowHeight, this.maxRowHeight);
    this._rowManager.setRowHeight(e, n), this._scheduleManager.addTask("virtualRender").addTask("updateTop").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection");
  }
  /**
   * 특정 row의 텍스트 색상을 설정한다.
   * @param row - 텍스트 색상을 설정할 row index
   * @param color - 텍스트 색상
   * @example
   * ```ts
   * grid.setRowTextColor( 0, "#ff0000" );
   * ```
   */
  setRowTextColor(e, t) {
    this._rowManager.getRow(e).textColor = t;
  }
  /**
   * 특정 row, col 셀의 `object`속성을 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @returns - Generics로 지정한 타입 `T`에 따라 반환 타입이 결정된다.
   * @example
   * ```ts
   * type CatData = {
   *     name: string;
   * }
   *
   * const myCat = getObject<CatData>( 0, 0 );
   * ```
   * @remarks
   * Tip
   * - Generics는 타입스크립트 환경에서 사용 가능 {@link https://www.typescriptlang.org/docs/handbook/2/generics.html | TypeScript Generics 문서}
   */
  getObject(e, t) {
    return this.cell(e, t).object;
  }
  /**
   * 특정 row, col 셀의 `object`속성을 설정한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @param object - 대상 셀에 설정할 객체
   * @example
   * ```ts
   * grid.setObject( 0, 0, { id: 1001, name: "lee" } );
   * grid.setObject( 1, 0, { id: 1002, name: "kim" } );
   * ```
   * @remarks
   * Tip
   * - object는 해당 셀과 매핑하여 부가적으로 저장할 데이터로 많이 사용된다.
   */
  setObject(e, t, n) {
    this.cell(e, t).props = { object: n };
  }
  /**
   * 특정 좌표의 {@link IRGridCell} 객체를 얻는다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * const topLeftCell = grid.cell(0, 0);
   * ```
   * @remarks
   * Tip
   * - 해당되는 row, col에 셀이 없는 경우 예외가 발생한다.
   */
  cell(e, t) {
    return this._rowManager.getCell(e, t);
  }
  /**
   * 지정한 row, col의 셀이 기준 셀인지의 여부를 반환한다.
   * @returns
   * @example
   * ```ts
   * grid.isBased( 1, 4 );
   * ```
   */
  isBased(e, t) {
    return this.cell(e, t).mergeMain === void 0;
  }
  /**
   * 해당 row, col cell의 IRGridCellMetaInfo를 반환한다.
   * @deprecated 메서드 이름이 혼동되므로 deprecated. 만약, metaInfo가 필요한 경우 getCellMetaInfo를 호출하세요.
   */
  getCell(e, t) {
    return this.cell(e, t).props;
  }
  /**
   * 해당 셀의 내부 속성 정보 객체({@link IRGridCellMetaData})를 반환한다.
   * @param row - 대상 셀의 row index
   * @param col - 대상 셀의 column index
   * @example
   * ```ts
   * const cellProps = grid.getCellMetaInfo(0, 0);
   *
   * console.log( cellProps.text );
   * console.log( cellProps.icon );
   * ```
   */
  getCellMetaInfo(e, t) {
    return this.cell(e, t).props;
  }
  _toCellProps(e) {
    if (typeof e.text == "number" || typeof e.text == "boolean" || typeof e.text == "bigint")
      e.text = `${e.text}`;
    else if (e.text === null)
      e.text = "";
    else if (typeof e.text == "object" || Array.isArray(e.text))
      throw new Error("Could not set object or array in text property!");
    return e;
  }
  setCell(e, t, n) {
    this.cell(e, t).props = this._toCellProps(n);
  }
  /**
   * 특정 row에 대한 정보를 설정한다.
   * @param rowNo - 행 번호
   * @param rowInfo - 행에 설정할 정보
   * @remarks
   * Tip
   * - 행의 여러 데이터를 삽입할 때, 성능 최적화를 위해 사용한다.
   */
  setRowInfo(e, t) {
    this.getRow(e).setRowInfo(t);
  }
  /**
   * 특정 row, col의 셀을 선택한다. ({@link select}를 기반으로 호출)
   * @param row - 선택하고자 하는 row index
   * @param col - 선택하고자 하는 column index
   * @example
   * ```ts
   * grid.selectCell( 0, 0 );
   * ```
   * @remarks
   * Tip
   * - 내부적으로 {@link cell}메소드를 호출한다.
   */
  selectCell(e, t) {
    this.selectRange(e, t, e, t, this.cell(e, t));
  }
  /**
   * 현재 Grid 행의 개수를 반환한다.
   * @example
   * ```ts
   * console.log( grid.getRowCount() );
   * ```
   */
  getRowCount() {
    return this._rowManager.length;
  }
  /**
   * 현재 visible 상태가 true 행 개수를 반환한다.
   * @version ^2.17.0
   */
  getVisibleRowCount() {
    return this._rowManager.getVisibleRowCount();
  }
  /**
   * 현재 Grid 열의 개수를 반환한다.
   * @returns
   */
  getColCount() {
    return this._colManager.length;
  }
  /**
   * 마지막 행의 객체를 반환한다.
   * @returns
   */
  getLastRow() {
    return this.getRow(this.getRowCount() - 1);
  }
  /**
   * 현재 고정된 행 개수 (header + body)를 반환한다.
   */
  getFreezedRowCount() {
    return this._rowManager.freezedRows;
  }
  /**
   * 현재 고정된 열 개수 (header + body)를 반환한다.
   * @example
   * ```ts
   * console.log( grid.getFreezedColumnCount() );
   * ```
   */
  getFreezedColumnCount() {
    return this._colManager.freezedColumns;
  }
  /**
   * 특정 열의 객체({@link IRGridColumn}) 정보를 가져온다.
   * @param columnId - 정보를 가져오려는 column index
   * @returns
   * @example
   * ```ts
   * console.log( grid.getColumn( 10 ) );
   * console.log( grid.getColumn( 21 ) );
   * ```
   */
  getColumn(e) {
    return this._colManager.getColumn(e);
  }
  /**
   * 특정 row의 {@link IRGridRow} 객체를 반환한다.
   * @param rowId - grid에서 가져오고자 하는 row index
   * @returns
   * @example
   * ```ts
   * // 1번째 row 객체를 반환한다.
   * grid.getRow( 1 );
   * ```
   */
  getRow(e) {
    return this._rowManager.getRow(e);
  }
  /**
   * {@link renderColumns}의 단일 열 렌더 버전이다.
   * @param left - 렌더링시킬 column index
   * @example
   * ```ts
   * grid.renderColumn( 10 );
   * ```
   */
  renderColumn(e) {
    this.renderColumns(e, e);
  }
  /**
   * 지정한 범위의 열을 렌더링한다.
   * @param left - 렌더링할 시작 column index
   * @param right - 렌더링할 마지막 column index
   * @example
   * ```ts
   * grid.renderColumns( 1, 20 );
   * ```
   */
  renderColumns(e, t) {
    this._rowManager.runFuncEachRow((n) => n.renderColumns(e, t));
  }
  /**
   * @version ^2.18.0
   */
  fillColumn(e) {
    this.forceLayoutTask();
    const t = this.contextElement.clientWidth - this.width + this.getColumnWidth(e);
    t < 0 || this.setColumnWidth(e, t);
  }
  /**
   * command 처리 제거용 (벌크 addRow 성능)
   */
  _addRow(e = this._rowHeaderInfo.defaultSize) {
    const t = K(e, this.minRowHeight, this.maxRowHeight), n = this._createIRGridRow(this._rowManager.getNextRowId(), this.height, t);
    return this._rowManager.addRow(n), n.rowId;
  }
  _createBulkRows(e, t) {
    for (let n = 0; n < e; n++)
      this._addRow(t);
    this._scheduleManager.scheduleAddRowTasks();
  }
  addRow(e) {
    return this._scheduleManager.scheduleAddRowTasks(), this._addRow(e);
  }
  /**
   * {@link removeRows}의 단일 행 제거 버전이다.
   * @command removeRows 호출로 command화
   * @param row - 삭제하려는 행의 index
   * @returns
   * @example
   * ```ts
   * // 2번째 행을 삭제한다.
   * grid.removeRow( 2 );
   * ```
   */
  removeRow(e) {
    return this.removeRows(e, e);
  }
  /**
   * {@link removeColumns}의 단일 열 제거 버전이다.
   * @command removeColumns 호출로 command화
   * @param col - 삭제하려는 열의 index
   * @returns
   * @example
   * ```ts
   * // 2번째 열을 삭제한다.
   * grid.removeColumn( 2 );
   * ```
   */
  removeColumn(e) {
    return this.removeColumns(e, e);
  }
  removeRows(e, t, n) {
    if (e < this.headerRows)
      throw new Error("Could not remove rows in header rows!");
    if (t >= this.getRowCount())
      throw new Error(`Out of index. maximum bottom values is ${this.getRowCount() - 1}. If you wanna clear all rows, please call clearRows()`);
    if (this._mergeHandler.checkConflictingInRows(e, t)) return !1;
    this._rowManager.runFuncEachRow((s) => {
      for (const r of s.getCellGenerator())
        r.isMerged && this._mergeHandler.removeMergeCell(r.row, r.col);
    }, e, t + 1), this._rowManager.removeRows(e, t, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("adjustSelection");
  }
  removeColumns(e, t) {
    if (e < this.headerColumns)
      throw new Error(`the removing column left must be greater than or equal to rowHeaderColumn! (>= ${this.headerColumns})`);
    if (t >= this.getColCount())
      throw new Error(`out of index. maximum bottom value must be ${this.getColCount() - 1}`);
    return this._mergeHandler.checkConflictingInColumns(e, t) ? !1 : (this._rowManager.runFuncEachRow((n) => {
      for (const s of n.getCellGenerator(e, t))
        s.isMerged && this._mergeHandler.removeMergeCell(s.row, s.col);
    }), this._rowManager.removeColumns(e, t), this._colManager.removeColumns(e, t), this._gridStore.hook.emit("columnChanged", [e, t, "removeColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("updateLeft").addTask("generateScrollBarClass").addTask("resizeGridWrapperWidth").addTask("adjustSelection").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0);
  }
  _addColumn(e = this._colHeaderInfo.defaultSize) {
    const t = K(e, this.minColWidth, this.maxColWidth), n = this._colManager.addColumn(t);
    return this._rowManager.addColumn((s) => this._createIRGridCell(s.rowId, n.columnId)), this._gridStore.hook.emit("columnChanged", [n.columnId, n.columnId, "addColumn"]), this._scheduleManager.addTask("resizeGridWrapperWidth").addTask("virtualRender"), n.columnId;
  }
  addColumn(e) {
    return this._scheduleManager.addTask("generateScrollBarClass"), this._addColumn(e);
  }
  /**
   * {@link insertRow}의 단일 행 삽입 버전이다.
   * @command
   * @param row
   * @param height
   * @returns
   */
  insertRow(e, t) {
    return this.insertRows(e, 1, t);
  }
  insertRows(e, t = 1, n = this._rowHeaderInfo.defaultSize) {
    const s = this.getRowCount(), r = K(e, this.headerRows, s);
    if (!this._mergeHandler.checkCanInsertRow(r)) return !1;
    const i = K(n, this.minRowHeight, this.maxRowHeight);
    if (r === s)
      return $(t).forEach(() => this.addRow(i)), !0;
    const l = $(t).map((u) => this._createIRGridRow(r + u, 0, i));
    return this._rowManager.insertRows(r, l), this._scheduleInsertRowTasks(), !0;
  }
  _scheduleInsertRowTasks() {
    this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("generateScrollBarClass").addTask("resizeGridWrapperHeight").addTask("adjustSelection");
  }
  /**
   *
   * @version ^2.17.0
   */
  insertRowByList(e) {
    this._rowManager.insertRowByList(e), this._scheduleInsertRowTasks();
  }
  /**
   * {@link insertColumn}의 단일 열 삽입 버전이다.
   * @command
   * @param col - 삽입하려는 열의 index
   * @param width - 삽입하려는 열의 넓이
   * - 미 지정 시, IRGrid 생성 시 선언한 `colHeader.defaultSize` 값이 적용된다.
   * @returns
   * @example
   * ```ts
   * grid.insertColumn( 2, 100 );
   *
   * grid.insertColumn( 2 );
   * ```
   */
  insertColumn(e, t) {
    return this.insertColumns(e, 1, t);
  }
  insertColumns(e, t = 1, n = this._colHeaderInfo.defaultSize) {
    const s = this.getColCount(), r = K(e, this.headerColumns, s);
    if (!this._mergeHandler.checkCanInsertColumn(e)) return !1;
    const i = K(n, this.minColWidth, this.maxColWidth);
    if (r === s) {
      for (let l = 0; l < t; l++)
        this.addColumn(i);
      return !0;
    }
    return this._colManager.insertColumns(e, t, i), this._rowManager.insertColumns(e, t, (l, u) => this._createIRGridCell(l, u)), this._gridStore.hook.emit("columnChanged", [e, e + t - 1, "insertColumns"]), this._scheduleManager.addTask("updateColumnId").addTask("generateScrollBarClass").addTask("updateLeft").addTask("resizeGridWrapperWidth").addTask("virtualRender").addTask("adjustSelection"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), !0;
  }
  /**
   * {@link autoSizeColumn}의 단일 열 버전이다.
   * @command autoSizeColumns
   * @param col - 자동 조정하려는 열의 index
   * @example
   * ```ts
   * // 2번째 열의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * grid.autoSizeColumn( 2 );
   * ```
   */
  autoSizeColumn(e) {
    this.autoSizeColumns(e, e);
  }
  /**
   *
   * @command
   */
  /**
   * 지정한 범위의 열들의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * @param left - 자동 조정하려는 열의 시작 index
   * @param right - 자동 조정하려는 열의 끝 index (right index까지 포함된다.)
   * @example
   * ```ts
   * // 0 ~ 2까지의 열의 크기를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * grid.autoSizeColumns( 0, 2 );
   * ```
   */
  autoSizeColumns(e, t) {
    $(e, t + 1).forEach((n) => {
      const s = Math.ceil(this._gridStore.rowManager.getMaxCellWidth(n, n + 1));
      s !== this.getColumnWidth(n) && this.setColumnWidth(n, s);
    });
  }
  /**
   * {@link autoSizeRows}의 단일 행 버전이다.
   * @command autoSizeRows
   * @param row
   */
  autoSizeRow(e) {
    this.autoSizeRows(e, e);
  }
  /**
   * 지정한 행들의 높이를 내부 컨텐츠에 맞게 자동으로 조정한다.
   * @command
   * @param top - 자동 조정하려는 행의 시작 index
   * @param bottom - 자동 조정하려는 행의 끝 index (bottom index까지 포함된다.)
   * @example
   * ```ts
   * grid.autoSizeRows(0, 10);
   * ```
   * @remarks
   * Tip
   * - autoSizeRows 기능은 많은 계산이 필요한 작업이므로, 대량의 행을 한 번에 처리할 때 성능에 영향을 줄 수 있다.
   * - 대량의 행을 처리할 때는, 모든 셀 작업을 끝낸 후, 마지막에 한 번에 처리하는 것이 좋다.
   */
  autoSizeRows(e, t) {
    this._rowManager.runFuncEachRow((n) => {
      const s = n.rowInnerHeight;
      s !== n.height && this.setRowHeight(n.rowId, s);
    }, e, t + 1);
  }
  /**
   * 선택되어 있는 영역의 클립보드를 복사한다.
   * @returns
   * @example
   * ```ts
   * grid.copyToClipboard();
   * ```
   */
  copyToClipboard() {
    if (!this.getSelection()) {
      console.warn("No selection detected.");
      return;
    }
    this.focus(), document.execCommand("copy");
  }
  async _createClipboardGetter() {
    const e = {
      "ir-grid/cell": "",
      "text/html": "",
      "text/plain": ""
    };
    try {
      const t = (await Zs.read()).flat();
      for await (const n of t)
        for (const s of Pa)
          e[s] === "" && n.types.includes(s) && (e[s] = await Ys(await n.getType(s)));
    } catch (t) {
      console.warn("pasteFromClipboard warning! it expects https protocol and clipboard permission.", t), e["ir-grid/cell"] = ir(Wn) ?? "";
    }
    return {
      getData(t) {
        return e[t] ?? "";
      }
    };
  }
  /**
   * - Clipboard API를 통해, IRGrid에 붙여넣기를 수행한다.
   * - https 보안 프로토콜 안에서 사용 가능하며, Clipboard Permission이 허용되어야 한다.
   * @remarks
   * ! firefox의 경우 Clipboard API를 지원하지 않는다.
   */
  async pasteFromClipboard() {
    const e = this.getSelection();
    if (!e) {
      console.warn("no selection, it needs selection to paste");
      return;
    }
    this.paste(
      e,
      En(
        await this._createClipboardGetter()
      )
    );
  }
  /**
   * 지정된 범위에 셀 데이터를 붙여넣는다.
   * @param range - 붙여넣기를 적용할 기준 셀 범위
   * @param cellMetaInfoList - 붙여넣을 셀 메타 정보 이중 배열
   * @returns
   */
  paste(e, t) {
    if (t.length === 0)
      return void console.warn("No clipboard data to paste");
    const n = ol(this, this._pasteOptions), s = n.getPastingRange(e, t), { rowSpan: r, colSpan: i } = this._pasteOptions;
    if (r || i)
      for (const u of this._generator.getSelectionGenerator(s))
        r && u.mergeInfo.rowSpan > 1 && this.splitCells(u.row, u.col), i && u.mergeInfo.colSpan > 1 && this.splitCells(u.row, u.col);
    const l = n.beforePastingList(s, t);
    l.length !== 0 && (this.onClipboardBeforePaste(s), n.pasteTask(l), this.onClipboardAfterPaste(s), this.select(s));
  }
  /**
   * 특정 row index의 행이 존재하는지 여부를 반환한다.
   * @param row - 존재 여부를 확인하고자 하는 row index
   * @returns - `boolean`: 존재하면 `true`, 존재하지 않으면 `false`를 반환한다.
   * @example
   * ```ts
   * console.log( grid.hasRow(0) );
   * console.log( grid.hasRow(5) );
   * ```
   */
  hasRow(e) {
    return e < this.getRowCount();
  }
  /**
   * 특정 column index의 열이 존재하는지 여부를 반환한다.
   * @param col - 존재 여부를 확인하고자 하는 column index
   * @returns
   * @example
   * ```
   * console.log( grid.hasColumn( 10 ))
   * ```
   */
  hasColumn(e) {
    return e < this.getColCount();
  }
  clearCells(e, t = !1) {
    for (const n of this._generator.getSelectionGenerator(e))
      t && this.isFilteredRow(n.row) || this.onClearCellCheck(n) && n.clear();
  }
  setRowVisible(e, t) {
    return this._mergeHandler.checkConflictingInRows(e, e) ? !1 : (t === this.getRowVisible(e) || (this._rowManager.setRowVisible(e, t), this._scheduleRowTasks()), !0);
  }
  _scheduleRowTasks() {
    return this._scheduleManager.addTask("updateTop").addTask("virtualRender").addTask("resizeGridWrapperHeight").addTask("generateScrollBarClass").addTask("updateSelection").addTask("updateSelectionByScroll");
  }
  /**
   * 대량의 행들을 보이거나 숨긴다.
   * @version ^2.10.0
   * @param startRowId - visible을 반영하기 위한 시작 row index
   * @param visibleArray - `startRowId`부터 순차적으로 보이기 여부를 지정한 배열
   * @example
   * ```ts
   * // 1번 부터 3개의 행 숨김
   * grid.setRowVisibleBulk( 1, [false, false, false] );
   *
   * // 10번 부터 10개의 행 숨김
   * grid.setRowVisibleBulk( 1, Array(10).fill(false) );
   * ```
   * @remarks
   * Tip
   * - 이 메서드는 행 충돌을 검사하지 않으므로, 숨기려는 행에 병합된 셀의 충돌이 발생할 수 있다.
   * - 이 메서드는 @command를 제공하지 않아 undo/redo가 지원되지 않는다.
   */
  setRowVisibleBulk(e, t) {
    this._rowManager.setRowVisibleBulk(e, t), this._scheduleRowTasks();
  }
  /**
   *
   * @version ^2.17.0
   */
  setRowFilter(e) {
    this._rowManager.setRowFilter(e), this.scrollOnRow(0), this._scheduleRowTasks();
  }
  /**
   * 특정 row index의 행이 보이는지 여부를 반환한다.
   * @param row - 보이기 여부를 확인하고자 하는 행의 index
   * @returns - `boolean`: 보이면 `true`, 보이지 않으면 `false`를 반환한다.
   */
  getRowVisible(e) {
    return this._rowManager.getRowVisible(e);
  }
  /**
   * 해당 행이 필터된 행인지 여부를 반환한다.
   * @version ^2.17.0
   */
  isFilteredRow(e) {
    return this.getRow(e).filtered;
  }
  setColumnVisible(e, t) {
    return this._mergeHandler.checkConflictingInColumns(e, e) ? !1 : (t === this.getColumnVisible(e) || (this._colManager.setColumnVisible(e, t), this._rowManager.setColumnVisible(e, t), this._scheduleManager.addTask("updateLeft").addTask("generateScrollBarClass").addTask("updateSelection").addTask("resizeGridWrapperWidth").addTask("virtualRender"), e < this._colManager.freezedColumns && this._scheduleManager.addTask("updateRowsStickyLeft"), this._gridStore.hook.emit("columnChanged", [e, e, "setVisible"])), !0);
  }
  /**
   * 특정 열이 보이는지 여부를 반환한다.
   * @param col - 보이기 여부를 확인하고자 하는 열의 index
   * @returns
   * @example
   * ```ts
   * console.log( grid.getColumnVisible( 20 ) );
   * ```
   */
  getColumnVisible(e) {
    return this._colManager.getColumnVisible(e);
  }
  /**
   * 현재 그리드 인스턴스와 연결된 셀 탐색기(Finder)를 생성한다.
   * @param args - 셀 탐색 설정 옵션. 생략 시 기본값이 사용된다.
   * @returns
   */
  createFinder(e = {}) {
    return fa(this, e);
  }
  /**
   * 지정한 열을 선택한다. {@link selectColumns}를 기반으로 호출한다.
   * @param col - 선택하고자 하는 column index
   * @example
   * ```ts
   * grid.selectColumn( 4 );
   * ```
   */
  selectColumn(e) {
    this.selectColumns(e, e);
  }
  /**
   * - 지정한 범위의 열을 선택한다.
   * - `left`와 `right`는 headerColumns, headerRows를 포함하지 않는다.
   * @param left - 선택하고자 하는 열의 시작 index
   * @param right - 선택하고자 하는 열의 끝 index (right index까지 포함된다.)
   * @param activeCell - 선택 후 활성화될 객체 (기본값은 현재 활성화 된 셀)
   * @returns
   * @example
   * ```ts
   * grid.selectColumns( 1, 9 );
   *
   * grid.selectColumns( 1, 9, grid.getCell( 1, 1 ) );
   * ```
   */
  selectColumns(e, t, n = this.activeCell) {
    e < this.headerColumns || this.headerRows < this.getRowCount() && this.selectRange(this.headerRows, e, this.getRowCount() - 1, t, n ?? this.cell(this.headerRows, e));
  }
  /**
   * 지정한 row index의 행을 선택한다. {@link selectRows}를 기반으로 호출
   * @param row - 선택하고자 하는 row index
   * @param activeCell - 선택 후 활성화할 셀 객체 (기본값은 현재 활성화 된 셀)
   * @example
   * ```ts
   * grid.selectRow( 4 );
   * grid.selectRow( 4, grid.getCell(4, 4) );
   * ```
   */
  selectRow(e, t = this.activeCell) {
    this.selectRows(e, e, t);
  }
  /**
   * 지정한 row 범위 행을 선택한다. {@link selectRange}를 기반으로 호출
   * @param top - 선택하고자 하는 top row index
   * @param bottom - 선택하고자 하는 bottom row index
   * @param activeCell - 선택 후 활성화할 셀 객체 (기본값은 현재 활성화된 셀)
   * @example
   * ```ts
   * grid.selectRows( 1, 3 );
   * ```
   */
  selectRows(e, t, n = this.activeCell) {
    e < this.headerRows || this.selectRange(e, this.headerColumns, t, this.getColCount() - 1, n ?? this.cell(e, this.headerColumns));
  }
  /**
   * 현재 IRGrid viewport에 항상 보이는 행 개수를 지정한다.
   * @param freezingRowCount - header를 제외한 viewport에 항상 보이는 고정 행 개수
   * @example
   * ```ts
   * grid.freezeRows( 2 );
   * ```
   */
  freezeRows(e) {
    this._rowManager.freezeRows(e), this._scheduleManager.addTask("virtualRender").addTask("updateSelection");
  }
  /**
   * columnId까지의 컬럼을 고정함 (3인 경우, 0~3까지 열이 고정됨)
   * @deprecated 호환성을 위해 남겨둠 (이 API대신 freezeColumn API를 사용할 것)
   * @param columnId - 고정할 열 id
   */
  freezeColumns(e) {
    this.freezeColumn(e + 1 - this.headerColumns);
  }
  /**
   * 현재 고정된 열 이후 freezingColumnCount 만큼의 열을 고정한다.
   * @param freezingColumnCount - 열을 고정하고 싶은 개수
   */
  freezeColumn(e) {
    if (e < 0)
      throw new Error("Could not be freezing minus columns!");
    if (e > this.getColCount() - this.headerColumns)
      throw new Error("Could not be freezing after last column");
    this._colManager.freezeColumns(e), this._scheduleManager.addTask("updateSelection").addTask("updateSelectionByScroll").addTask("updateRowsStickyLeft").addTask("virtualRender");
  }
  /**
   * 실행 취소(Undo) 기록을 모두 초기화한다.
   */
  clearUndoStack() {
    this.commandManager.clearCommands();
  }
  /**
   *
   * @deprecated IRGrid.copyOptions = {...} 또는 IRGrid.pasteOptions = {...}를 사용해주세요.
   */
  setClipboardOptions(e) {
    this.copyOptions = e;
  }
  /**
   * 행들을 비교해서 순서에 맞게 정렬한다.
   * @param compareFunc - 비교하는 함수
   * @param order - 순서의 규칙을 지정
   * @param startRowId - 순서 정렬 범위에 해당하는 시작 row index
   * @param endRowId - 순서 정렬 범위에 해당하는 마지막 row index
   */
  sort(e, t, n, s) {
    const r = Math.max(n ?? this.headerRows, this.headerRows), i = Math.min(s ?? this.getRowCount(), this.getRowCount());
    this._rowManager.sort(e, t, r, i), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * 지정한 범위에 있는 병합(merge) 셀들을 분할한다.
   * @param range - 지정할 범위 정보를 담은 객체
   */
  splitCellsByRange(e) {
    for (const t of this._generator.getSelectionGenerator(e)) {
      const n = t.mergeInfo.rowSpan > 1 || t.mergeInfo.colSpan > 1 ? t : t.mergeMain;
      n && this.splitCells(n.row, n.col);
    }
  }
  /**
   *
   * @deprecated
   */
  selectMultipleCellAddress(e) {
    e.length > 0 && this.selectCell(e[0][0], e[0][1]);
  }
  /**
   *
   * @deprecated
   */
  selectMultipleCells(e) {
    e.length > 0 && this.selectCell(e[0].row, e[0].col);
  }
  /**
   *
   * @deprecated
   */
  getSelectionMode() {
    return "range";
  }
  /**
   * 현재 선택된 셀 객체를 배열로 반환한다. 단, 선택된 셀이 없을 경우 빈 배열을 반환한다.
   * @returns
   */
  getSelectedCells() {
    const e = this.getSelection();
    return e ? [this.cell(e.top, e.left)] : [];
  }
  /**
   * {@link exchangeRows}의 단일 행 버전이다.
   * @command
   * @param source - 교환할 첫 번째 행의 인덱스
   * @param target - 교환할 두 번째 행의 인덱스
   */
  exchangeRow(e, t) {
    this.exchangeRows([e, e], [t, t]);
  }
  exchangeRows(e, t) {
    if (e.some((n) => this._rowManager.isInvalidRowId(n)) || t.some((n) => this._rowManager.isInvalidRowId(n)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((n) => n < this.getFreezedRowCount()) || t.some((n) => n < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be exchanged!");
    if (this._mergeHandler.checkConflictingInRows(...e) || this._mergeHandler.checkConflictingInRows(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this._rowManager.exchangeRows(e, t), this.onExchangedRows(e, t), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * {@link exchangeColumns}의 단일 행 버전이다.
   * @command
   */
  exchangeColumn(e, t) {
    this.exchangeColumns([e, e], [t, t]);
  }
  exchangeColumns(e, t) {
    if (e.some((n) => this._colManager.isInvalidColumnId(n)) || t.some((n) => this._colManager.isInvalidColumnId(n)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((n) => n < this.getFreezedColumnCount()) || t.some((n) => n < this.getFreezedColumnCount()))
      throw new Error("Freezed(header) column cannot be exchanged!");
    if (this._mergeHandler.checkConflictingInColumns(...e) || this._mergeHandler.checkConflictingInColumns(...t))
      throw new Error("Exchange is not allowed in merged cells!");
    this._rowManager.runFuncEachRow((n) => n.exchangeCells(e, t)), this.onExchangedColumns(e, t), this._scheduleManager.addTask("adjustSelection").addTask("virtualRender");
  }
  /**
   * {@link moveRows}의 단일 행 버전이다.
   * @command
   * @param source - 이동시킬 행
   * @param targetRow - 이동하고 싶은 행의 위치
   */
  moveRow(e, t) {
    this.moveRows([e, e], t);
  }
  moveRows(e, t) {
    if (e.some((s) => this._rowManager.isInvalidRowId(s)))
      throw new Error("The range is out of bounds for rows!");
    if (e.some((s) => s < this.getFreezedRowCount()))
      throw new Error("Freezed(header) row cannot be Moved!");
    if (this._mergeHandler.checkConflictingInRows(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this._rowManager.getAdjustTargetRow(t);
    this._rowManager.moveRows(e, n), this.onMovedRows(e, n), this._scheduleManager.addTask("updateTop").addTask("updateRowId").addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * {@link moveColumns}의 단일 열 버전이다.
   * @command
   * @param source
   * @param targetCol
   */
  moveColumn(e, t) {
    this.moveColumns([e, e], t);
  }
  moveColumns(e, t) {
    if (e.some((s) => this._rowManager.isInvalidRowId(s)))
      throw new Error("The range is out of bounds for columns!");
    if (e.some((s) => s < this.getFreezedRowCount()))
      throw new Error("Freezed(header) column cannot be Moved!");
    if (this._mergeHandler.checkConflictingInColumns(...e))
      throw new Error("Move is not allowed in merged cells!");
    const n = this._getAdjustTargetColumn(t);
    this._rowManager.runFuncEachRow((s) => s.moveCells(e, n)), this.onMovedColumns(e, n), this._scheduleManager.addTask("virtualRender").addTask("adjustSelection");
  }
  /**
   * - 해당 행의 시작 행 인덱스를 반환한다. (일반적으로 row 값 그대로 반환)
   * - 지정한 행이 병합된 셀의 일부일 경우, 해당 병합 그룹의 시작 행 인덱스를 반환한다.
   * @param row - 기준이 되는 row index
   * @returns
   * @example
   * ```ts
   * // row 5가 3~5 병합 셀의 일부라면, 결과는 3
   * const startRow = grid.getStartOfRowId( 5 );
   * ```
   */
  getStartOfRowId(e) {
    return this._rowManager.getStartOfRowId(e);
  }
  /**
   * - 해당 열의 시작 열 인덱스를 반환한다. (일반적으로 column 값 그대로 반환)
   * - 지정한 열이 병합된 셀의 일부일 경우, 해당 병합 그룹의 시작 열 인덱스를 반환한다.
   * @param col - 기준이 되는 column index
   * @returns
   * @example
   * ```ts
   * // column 6가 1~6 병합 셀의 일부라면, 결과는 1
   * const startColumn = grid.getStartOfColumnId( 6 );
   * ```
   */
  getStartOfColumnId(e) {
    return this._rowManager.getStartOfColumnId(e);
  }
  /**
   *
   * @deprecated
   */
  getSelectedMultipleCellAddress() {
    const e = this.getSelection();
    return e ? [[e.top, e.left]] : [];
  }
  /**
   * 현재 단일 셀이 선택되었으면 true 반환, 그외 false (선택 영역 없거나 또는 2개 이상 셀 영역 선택)
   * @deprecated
   */
  isSelectedSingleCell() {
    const e = this.getSelection();
    if (!e) return !1;
    const { top: t, left: n, bottom: s, right: r } = e;
    if (t === s && n === r) return !0;
    const i = this.getRow(t).getCell(n);
    return s === i.bottom && r === i.right;
  }
  /**
   * @deprecated
   */
  render() {
    this._rowManager.renderRows();
  }
  /*
   * Object Events
   */
  /**
   * 셀을 클릭하거나 선택된 범위가 변경되었을 때, activeCell이 호출됨.
   * @deprecated 같은 셀을 클릭하여도 발동하여 성능 이슈가 있으므로, 더블 클릭 등의 기능과 연계할 떄는 `onChangeCell`을 사용할 것.
   * @event
   */
  onSelectCell(e) {
  }
  /**
   *
   * @event
   */
  onChangeCell(e) {
  }
  /**
   * @event
   */
  onActiveCellNull() {
  }
  /**
   * @event
   */
  onEditCellDone(e, t, n, s, r, i) {
  }
  /**
   * @event
   */
  onSelectChanged(e, t) {
  }
  /**
   * @event
   */
  onClearCell(e) {
  }
  /**
   * @event
   */
  onClearCellCheck(e) {
    return e.canClear;
  }
  /**
   * @event
   */
  onColumnClick(e, t) {
  }
  /**
   * @event
   */
  onRowClick(e, t) {
  }
  /**
   * @event
   */
  onCreatingCell(e) {
  }
  /**
   * @event
   */
  onCellRightClick(e, t) {
  }
  /**
   * @event
   */
  onEditKeyDown(e, t, n, s) {
  }
  /**
   * @event
   */
  onEditInput(e, t, n) {
  }
  /**
   * @event
   */
  onMountedRow(e) {
  }
  /**
   * @event
   */
  onClipboardBeforePasteCell(e, t) {
    return !0;
  }
  /**
   * @event
   */
  onClipboardBeforePaste(e) {
  }
  /**
   * @event
   */
  onClipboardAfterPasteCell(e) {
  }
  /**
   * @event
   */
  onClipboardAfterPaste(e) {
  }
  /**
   * false를 리턴하면 자동 생성되지 않음. 기본 값 true 리턴
   * @param _row 생성될 row 값
   * @event
   */
  onAutoInsertRow(e) {
    return !0;
  }
  /**
   * @event
   */
  onAutoInsertedRow(e) {
  }
  /**
   * false 리턴 시 생성되지 않음. 기본 값 true 리턴
   * @param _col 생성될 col 값
   * @event
   */
  onAutoInsertColumn(e) {
    return !0;
  }
  /**
   * @event
   */
  onAutoInsertedColumn(e) {
  }
  /**
   * @event
   */
  onDoubleClickCell(e) {
  }
  /**
   * @event
   */
  onDropOnCell(e, t, n) {
  }
  /**
   * @event
   */
  onDragStartCell(e, t) {
    return !t.dataTransfer || !e.props.object ? !1 : (t.dataTransfer.setData("application/json", JSON.stringify(e.props.object)), !0);
  }
  /**
   * @event
   */
  onCheckPasteCell(e, t) {
    return e.visible && e.onCheckReadonly() !== !0 && e.props.disabled !== !0 && e.props.clipboardEnabled !== !1 && this.onClipboardBeforePasteCell(e, t);
  }
  /**
   * @event
   */
  onUndo(e) {
  }
  /**
   * @event
   */
  onRedo(e) {
  }
  /**
   * @event
   */
  onNativeCopy(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    const n = this._gridRangeUtils.getCellMatrixByRange(t), { rowSpan: s, colSpan: r } = this._copyOptions, l = (this._copyOptions.skipFiltered ? n.filter(([u]) => !this.isFilteredRow(u.row)) : n).map((u) => u.map((d) => ({
      text: this.onCopyCellText(d),
      cellVisible: d.mergeMain === void 0,
      rowSpan: s ? d.mergeInfo.rowSpan : 1,
      colSpan: r ? d.mergeInfo.colSpan : 1,
      isFormatted: !1
    })));
    gl(e.clipboardData, l), lr(Wn, JSON.stringify(l)), this.focus(), this.onCopy(), e.preventDefault();
  }
  /**
   * @event
   */
  onCopyCellText(e) {
    return e.text;
  }
  /**
   * @event
   */
  onNativeCut(e) {
    const t = this.getSelection();
    if (!t) throw new Error("Detected copy without selection");
    this.onNativeCopy(e), this.commandManager.doRecording("Cut", () => {
      this.clearCells(t);
    }), e.preventDefault();
  }
  /**
   * @event
   */
  onNativePaste(e) {
    if (!e.clipboardData) throw new Error("Invalid ClipboardEvent");
    const t = this.getSelection();
    if (!t) throw new Error("it needs selection to paste");
    const n = En(e.clipboardData);
    this.commandManager.doRecording("Paste", () => {
      this.paste(t, n);
    }), e.preventDefault();
  }
  /**
   * @event
   */
  onExchangedRows(e, t) {
  }
  /**
   * @event
   */
  onExchangedColumns(e, t) {
  }
  /**
   * @event
   */
  onMovedRows(e, t) {
  }
  /**
   * @event
   */
  onMovedColumns(e, t) {
  }
  __setEditMode(e) {
    this._gridContext.gridModeState.next({
      mode: "edit-cell",
      contextParam: { cell: e }
    });
  }
  doEditMode(e, t = !1, n = !1) {
    if (!e.isConnected || !e.editable || !this.getCellVisible(e.row, e.col))
      return !1;
    const s = this._gridStore.gridTextarea;
    s.onEditDone = (r, i, l, u, d, c) => {
      this.onEditCellDone(r, i, l, u, d, c), this._gridContext.gridModeState.value.mode !== "idle" && this._gridContext.setIdle();
    }, s.onEditKeyDown = (r, i, l, u) => this.onEditKeyDown(r, i, l, u), s.onEditInput = (r, i) => this.onEditInput(r, i, e), s.onDragEnd = () => this.__setEditMode(e), s.onEnterOnEdit = () => {
      if (this.hook.emitSync("keyAction", [{}, "Enter"]) === !1) return;
      let r = this._gridStore.cursorManager.getNextYBelow(e.row, e.col, 1), i = e.col;
      if (e.row === r) {
        if (i = this._gridStore.cursorManager.getNextXRight(e.row, e.col, 1), e.col === i) return;
        r = this._gridStore.cursorManager.getFirstActiveRow();
      }
      this.scrollInView(r, i), this.selectCell(r, i), this.afterRender(() => this.doEditMode(this.cell(r, i), !1, !0));
    };
    try {
      return this.__setEditMode(e), this.activeCell !== e && this.selectCell(e.row, e.col), s.runEditMode(e, this.scrollTop, this.scrollLeft, t, n), !0;
    } catch (r) {
      return console.error("IRGrid.doEditMode Error!", r), !1;
    }
  }
  /**
   * @event
   */
  onCopy() {
  }
  /**
   * @event
   */
  onContextMenu(e, t) {
  }
  /**
   * @event
   */
  onDragOverCell(e, t) {
    return !0;
  }
  /*
   * Private Methods
   * protected _으로 시작하도록 함. 동적인 호출을 위해 외부 호출 가능성 염두
   */
  _getAdjustTargetColumn(e) {
    return e >= this._colManager.length ? this._colManager.length : e < this._colManager.freezedColumns ? this._colManager.freezedColumns : this._rowManager.getStartOfColumnId(e);
  }
  onCheckCellReadonly(e) {
    return this._readonly ? !0 : e.props.readonly === !0;
  }
  _initPlugins(e) {
    try {
      for (const t of e)
        this.addPlugin(t);
    } catch (t) {
      console.error("Plugin init error", t);
    }
  }
  _initTableRowCol() {
    $(this._colHeaderInfo.colCount).forEach(() => this.addColumn(this._colHeaderInfo.defaultSize)), this._createBulkRows(this._colHeaderInfo.rowCount + this._bodyInfo.rowCount);
  }
  _initGridCellPadding() {
    fe(this.contextElement, {
      [P.cellTopPadding]: `${this._gridStore.getThemeValue("grid.paddingTop")}px`,
      [P.cellLeftPadding]: `${this._gridStore.getThemeValue("grid.paddingLeft")}px`,
      [P.cellBottomPadding]: `${this._gridStore.getThemeValue("grid.paddingBottom")}px`,
      [P.cellRightPadding]: `${this._gridStore.getThemeValue("grid.paddingRight")}px`
    });
  }
  _getCellRenderer(e, t, n, s) {
    if (e === "col-header")
      return this._colHeaderInfo.cellRenderer;
    if (e === "row-header")
      return this._rowHeaderInfo.cellRenderer;
    if (e === "body-cell")
      return this._bodyInfo.cellRenderer;
    throw new Error("cellType must be 'col-header' or 'row-header' or 'body-cell'");
  }
  _getCellType(e, t) {
    const n = e < this.headerRows, s = !n && t < this.headerColumns;
    return n ? "col-header" : s ? "row-header" : "body-cell";
  }
  _getDefaultCellFormat(e, t) {
    const n = {
      gridStore: this._gridStore
    };
    return Object.assign(n, {
      ...this._defaultColumnCellFormat.all,
      ...this._defaultColumnCellFormat[t]
    }), e === "col-header" ? Object.assign(n, { dropDisabled: !0 }, this._defaultColumnCellFormat[`col_header_${t}`]) : e === "row-header" ? Object.assign(n, { dropDisabled: !0 }, this._defaultColumnCellFormat[`row_header_${t}`]) : Object.assign(n, this._defaultColumnCellFormat[`body_${t}`]), n;
  }
  _createIRGridCell(e, t) {
    const n = this._getCellType(e, t), s = n.endsWith("header") ? "th" : "td", r = this._getDefaultCellFormat(n, t), i = this._getCellRenderer(n, e, t, r), l = new Tl({
      row: e,
      col: t,
      tag: s,
      cellType: n,
      cellRenderer: i,
      props: r
    });
    return l.onCheckReadonly = () => this.onCheckCellReadonly(l), this.onCreatingCell(l), l;
  }
  _createIRGridRow(e, t, n) {
    const s = new zl({
      seq: this._rowSeq,
      grid: this,
      rowId: e,
      height: n,
      top: t,
      rowType: e < this.headerRows ? "header" : "body"
    });
    return ++this._rowSeq, $(this.getColCount()).forEach((r) => {
      s.addCell(this._createIRGridCell(e, r)), this.getColumnVisible(r) || s.setColumnVisible(r, !1);
    }), s;
  }
}
Z([
  X()
], U.prototype, "splitCells");
Z([
  X()
], U.prototype, "mergeCells");
Z([
  X()
], U.prototype, "setCellRenderer");
Z([
  X()
], U.prototype, "setColumnWidth");
Z([
  X()
], U.prototype, "setRowHeight");
Z([
  X()
], U.prototype, "setCell");
Z([
  X()
], U.prototype, "addRow");
Z([
  X()
], U.prototype, "removeRows");
Z([
  X()
], U.prototype, "removeColumns");
Z([
  X()
], U.prototype, "addColumn");
Z([
  X()
], U.prototype, "insertRows");
Z([
  X()
], U.prototype, "insertColumns");
Z([
  X()
], U.prototype, "clearCells");
Z([
  X()
], U.prototype, "setRowVisible");
Z([
  X()
], U.prototype, "setColumnVisible");
Z([
  X()
], U.prototype, "exchangeRows");
Z([
  X()
], U.prototype, "exchangeColumns");
Z([
  X()
], U.prototype, "moveRows");
Z([
  X()
], U.prototype, "moveColumns");
export {
  vn as $,
  wo as A,
  tc as B,
  yi as C,
  ec as D,
  Zt as E,
  qt as F,
  xi as G,
  bi as H,
  U as I,
  nc as J,
  oc as K,
  sc as L,
  we as M,
  Co as N,
  rc as O,
  vo as P,
  ko as Q,
  ac as R,
  Xt as S,
  cc as T,
  Mo as U,
  uc as V,
  To as W,
  dc as X,
  ta as Y,
  hc as Z,
  ua as _,
  ke as a,
  kn as a0,
  Qt as a1,
  ic as a2,
  N as b,
  j as c,
  A as d,
  ce as e,
  yt as f,
  _e as g,
  de as h,
  G as i,
  Ce as j,
  Se as k,
  Ri as l,
  lc as m,
  Ne as n,
  Fe as o,
  dt as p,
  nn as q,
  Qa as r,
  Gr as s,
  Y as t,
  me as u,
  zl as v,
  oe as w,
  Tl as x,
  Qn as y,
  Za as z
};
//# sourceMappingURL=grid-B8VKUE4o.js.map
