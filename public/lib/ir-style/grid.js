import "./chunks/_init-DX98z8UA.js";
import { j as A, r as re, D as ae, k as se, l as de, m as ce, n as k, p as W, q as ue } from "./chunks/grid-B8VKUE4o.js";
import { X as qt, N as Jt, V as Qt, I as en, x as tn, W as nn, y as rn, G as sn, E as on, U as ln, Q as an, Z as dn, Y as cn, A as un, P as gn, v as mn, H as fn, T as hn, R as Cn, w as pn, a1 as wn, a0 as _n, C as vn, O as Rn, _ as xn, a2 as In, $ as En, J as Tn, K as Dn, z as Ln, B as bn, L as Sn } from "./chunks/grid-B8VKUE4o.js";
import { a as B, b as ge, g as N, h as j } from "./chunks/floating-C5P7I7tX.js";
import { U as me, x as fe, y as he, B as Ce, A as pe, M as we, V as _e, N as ve, O as Re, W as xe, X as Ie, l as Ee, Y as Te, Z as De, $ as Le, a0 as be, a1 as Se, a2 as ye, a3 as ke, a4 as He, a5 as We, a6 as Oe, a7 as Ge, a8 as Ae, a9 as Me, aa as Pe, _ as Fe, ab as U, ac as Ne, ad as Be, ae as K, af as Y, ag as ze, ah as $e } from "./chunks/css-akUkFMHX.js";
import { c as X } from "./chunks/clsx-OuTLNxxd.js";
import { I as oe, c as Ve, r as V } from "./chunks/command-manager-Ds2Bk1Hy.js";
import { c as Ue, a as je, b as M } from "./chunks/outside-D1z8pt7M.js";
import { g as G, d as Ke, e as Ye, a as Xe } from "./chunks/rx-state-C3nw7N-x.js";
import { i as Ze, d as O } from "./chunks/index-Bmt0z1bM.js";
import { v as qe } from "./chunks/v4-CKZ6klMF.js";
const P = { select: fe, selectInput: he, selectInputNative: pe, selectInputIcon: Ce }, Z = /* @__PURE__ */ new WeakMap(), Je = 20, Qe = 4, q = Je + Qe, et = 18;
class tt extends A {
  _itemTextMap;
  _allowCustomText;
  _allowEdit;
  _showErrorIfCustomText;
  _lazyItems;
  _customDisplayTextFunc;
  _items;
  _allowClear;
  _itemWidth = null;
  _isExpanded = !1;
  _beforeValue;
  _beforeText;
  _isInitItems = !1;
  _mappingType;
  constructor({
    items: e,
    onChange: n,
    allowClear: t,
    customDisplayTextFunc: s,
    lazyItems: d,
    allowCustomText: r = !1,
    showErrorIfCustomText: a = !1,
    allowEdit: o = !1,
    mappingType: c = "text"
  }) {
    super(), this._allowClear = t ?? !1, this._mappingType = c, this._items = e ?? [], this._lazyItems = d ?? null, this._itemTextMap = /* @__PURE__ */ new Map(), this._allowCustomText = r, this._allowEdit = o, o && (this._allowCustomText = !0), s ? this._customDisplayTextFunc = s : this._customDisplayTextFunc = c === "text" ? this._defaultTextCustomDisplayTextFunc.bind(this) : this._defaultValueCustomDisplayTextFunc.bind(this), this._showErrorIfCustomText = a, n && (this.onChange = n.bind(this));
  }
  _loadItems() {
    if (!this._isInitItems) {
      this._isInitItems = !0, this._lazyItems && (this._items = this._lazyItems());
      for (const e of this._items)
        this._itemTextMap.set(e[this._mappingType], e);
    }
  }
  _defaultTextCustomDisplayTextFunc(e, n, t) {
    return n ?? "";
  }
  _defaultValueCustomDisplayTextFunc(e, n, t) {
    const s = n ?? "";
    return this._itemTextMap.get(s)?.text ?? s;
  }
  _getSelectedItemOrNull(e) {
    for (const n of this._items)
      if (n[this._mappingType] === e) return n;
    return null;
  }
  render(e, n, t) {
    const {
      _allowCustomText: s,
      _allowEdit: d,
      _showErrorIfCustomText: r,
      _customDisplayTextFunc: a
    } = this, { element: o } = B({ tag: "div", className: X(me, P.select, P.selectInput) }), { element: c } = B({ tag: "span", className: P.selectInputNative }), { element: i } = B({ tag: "i", className: X(P.selectInputIcon, "ir-icon", "ir-icon--chevron-down") });
    this._loadItems(), o.setAttribute("data-has-px", ""), i.setAttribute("data-ignore-auto-size", "");
    const _ = t.text === "" || t.text === null || t.text === void 0;
    d && o.classList.add("is-editable");
    let f = this._getSelectedItemOrNull(t.text);
    const x = f !== null;
    f ? (c.textContent = a(f.value, f.text, !1), t.value = f.value) : s ? (c.textContent = a(t.value, t.text, !0), t.value = t.text) : (c.textContent = "", t.value = ""), // error 상태 표시 지정 시, error 속성 추가
    s && r && // 빈 값이 아니고, select 목록에서 매핑이 안되었을 때
    !_ && !x && (o.dataset.error = "true");
    let g = () => {
    }, C = [];
    const R = Ue({
      eventElements: [o],
      clickOutsideFunc: () => E.hide(),
      getEventElements: () => C
    }), E = {
      show: () => {
        this._isExpanded = !0, D.create(), R.create(), this._beforeValue = t.value, this._beforeText = t.text, o.classList.add("is-expanded");
        const { breakWidth: h, contentWidth: l } = this._getCellWidthInfo(t);
        g = re(
          () => ae({
            ref: (u) => C = u ? [u.divElement] : [],
            row: e,
            col: n,
            contentWidth: l,
            breakWidth: h,
            selectedItem: f,
            items: this._items,
            refElement: o,
            onItemClick: (u) => {
              const { value: w, text: p } = u, I = new se(t.gridStore.commandContext, [e, n, { text: p, value: w }]);
              I.onUndo = () => this.onChange(e, n, this._beforeValue, this._beforeText, w, p), I.onExecute = () => this.onChange(e, n, w, p, this._beforeValue, this._beforeText), t.gridStore.commandManager.pushCommandBlock(new oe(
                "Change select menu",
                I
              )), f = u, t.text = u[this._mappingType], t.value = w, c.textContent = a(w, p, !1), o.dataset.error && delete o.dataset.error, t.gridStore.gridTextarea.focus(), this.onChange(e, n, w, p, this._beforeValue, this._beforeText), E.hide();
            }
          }),
          N("popover")
        );
      },
      hide: () => {
        this._isExpanded = !1, o.classList.remove("is-expanded"), D.destroy(), R.destroy(), g();
      }
    }, D = ge(E), m = () => {
      o.classList.contains("is-expanded") ? E.hide() : E.show();
    };
    return o.onclick = (h) => {
      d && h.target !== i || m();
    }, o.appendChild(c), o.appendChild(i), o;
  }
  onChange(e, n, t, s, d, r) {
  }
  getCellInnerWidth(e, n, t) {
    if (!t.text) return 0;
    const s = G(e, n), d = this._itemTextMap.has(t.text), r = this._customDisplayTextFunc(t.value, t.text, !d), a = s.calculateWidth(r);
    return q + a + this.getHorizontalCellPadding(t);
  }
  _getDropdownWidth(e, n, t) {
    const s = G(e, n), d = this._items.reduce((r, a) => Math.max(r, s.calculateWidth(a.text)), 0);
    return q + d + this.getHorizontalCellPadding(t);
  }
  getRendererInnerWidth(e, n, t) {
    const s = Z.get(this);
    if (s) return s;
    const d = this._getDropdownWidth(e, n, t);
    return Z.set(this, d), d;
  }
  _getCellWidthInfo(e) {
    return {
      contentWidth: this.getItemWidth(e.fontSize || "13px", e.fontFamily || "Pretendard", e),
      breakWidth: e.gridStore.getThemeValue("grid.defaultDropdownWidth")
    };
  }
  getItemWidth(e, n, t) {
    return this._itemWidth === null && (this._itemWidth = this.getRendererInnerWidth(e, n, t)), this._itemWidth + et;
  }
  get renderType() {
    return "select";
  }
  get editable() {
    return this._allowEdit && !this._isExpanded;
  }
  get canBeClear() {
    return this._allowClear;
  }
}
const Wt = (v) => {
  const e = new tt(v);
  return () => e;
}, z = { input: we, inputNative: ve, inputSuffix: Re }, nt = 28, H = /* @__PURE__ */ new WeakMap();
class rt extends A {
  _format;
  _minDate;
  _maxDate;
  _allowedEmptyString;
  constructor({
    onDateClick: e,
    format: n = Ze.t("datePicker.dateFormat"),
    minDate: t = j().getStoreValue("datePicker.minDate"),
    maxDate: s = j().getStoreValue("datePicker.maxDate"),
    allowedEmptyString: d = !0
  }) {
    super(), this._format = n, this._minDate = t, this._maxDate = s, this._allowedEmptyString = d, e && (this.onDateClick = e.bind(this));
  }
  onDateClick(e, n, t) {
  }
  getCellInnerWidth(e, n, t) {
    return G(e, n).calculateWidth(t.text || this._format) + nt + this.getHorizontalCellPadding(t);
  }
  render(e, n, t) {
    const s = document.createElement("div"), d = document.createElement("input"), r = document.createElement("button"), a = document.createElement("i"), {
      _minDate: o,
      _maxDate: c,
      _format: i,
      _allowedEmptyString: _
    } = this;
    if (d.readOnly = !0, d.maxLength = i.length, s.setAttribute("data-has-px", ""), s.classList.add(z.input, _e), d.classList.add(z.inputNative, "tnum-adj"), r.classList.add(z.inputSuffix), a.classList.add("ir-icon", "ir-icon--calendar"), d.type = "text", d.placeholder = i, t.text !== "") {
      const x = i.replace(/-/g, "");
      let g = O(t.text, i, !0);
      g.isValid() || (g = O(t.text, x, !0), t.text = g.format(i)), g.isValid() || (t.text = H.get(t)), (g.isBefore(o) || g.isAfter(c)) && (t.text = H.get(t));
    }
    !_ && (t.text === "" || t.text === void 0) && (t.text = H.has(t) ? H.get(t) : O().format(i)), d.value = t.text || "", H.set(t, t.text ?? ""), r.appendChild(a), s.appendChild(d), s.appendChild(r);
    const f = Ve({
      uuid: qe(),
      refElement: s,
      minDate: o,
      maxDate: c,
      onClick: (x) => {
        const g = t.text, C = O(x).format(i), R = new se(t.gridStore.commandContext, [e, n, { text: C }]);
        R.onUndo = () => {
          this.onDateClick(e, n, g ?? "");
        }, R.onExecute = () => {
          this.onDateClick(e, n, C);
        }, t.gridStore.commandManager.pushCommandBlock(new oe("Change datePicker", R)), d.value = C, t.text = C, H.set(t, C), t.gridStore.gridTextarea.focus(), this.onDateClick(e, n, C), f.hide();
      }
    });
    return r.onclick = () => {
      if (!f.visible) {
        const x = O(t.text, i, !0);
        x.isValid() ? f.update(x.toDate(), x.toDate()) : f.update(/* @__PURE__ */ new Date(), null), f.show();
      }
    }, s;
  }
  get renderType() {
    return "datePicker";
  }
}
const Ot = (v) => {
  const e = new rt(v);
  return () => e;
}, F = {
  progress: Ie,
  progressVariants: Te
}, st = {
  min: 0,
  max: 100,
  defaultIntent: void 0,
  afterDecimalLen: 2
}, ot = 100, lt = 100;
class it extends A {
  _min;
  _max;
  _defaultIntent;
  _afterDecimalLen;
  constructor({ min: e = 0, max: n = 100, defaultIntent: t, afterDecimalLen: s = 2 }) {
    super(), this._min = e, this._max = n, this._defaultIntent = t, this._afterDecimalLen = s;
  }
  render(e, n, t) {
    const {
      _min: s,
      _max: d,
      _afterDecimalLen: r,
      _defaultIntent: a
    } = this, o = document.createElement("div"), c = document.createElement("div");
    o.setAttribute("data-has-px", ""), o.className = xe, c.className = F.progress;
    const i = t.intent ?? a;
    i && c.classList.add(`${F.progress}--${i}`);
    const f = (Ke(parseFloat(t.text || "0"), s, d) - s) / (d - s) * ot;
    return Ee(c, {
      [F.progressVariants.progressPercent]: `${f}%`,
      [F.progressVariants.progressText]: `'${f.toFixed(r)}%'`
    }), o.appendChild(c), o;
  }
  getCellInnerWidth(e, n, t) {
    return lt + this.getHorizontalCellPadding(t);
  }
  get renderType() {
    return "progress";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const Gt = (v = st) => {
  const e = new it(v);
  return () => e;
}, at = 20, dt = 4, ct = 24, ut = 24, gt = 29, J = {
  primary: ke,
  secondary: ye,
  tertiary: Se,
  transparent: be,
  left: "justify-content--start",
  center: "justify-content--center",
  right: "justify-content--end"
};
class mt extends A {
  constructor(e) {
    super(), this.args = e, e.onClick && (this.onClick = e.onClick.bind(this)), e.iconDividerStyle ? this._extraWidth = gt : e.outlineStyle ? this._extraWidth = ut : this._extraWidth = 0;
  }
  _extraWidth;
  onClick(e, n, t) {
  }
  render(e, n, t) {
    const {
      iconDividerStyle: s,
      outlineStyle: d,
      defaultColor: r,
      defaultIcon: a,
      defaultLabel: o
    } = this.args, c = document.createElement("div"), i = document.createElement("button");
    c.className = De, i.classList.add(Le, "button"), i.dataset.ignoreAutoSize = "";
    const _ = t.intent ?? r;
    _ && i.classList.add(J[_]), d ? (c.setAttribute("data-has-px", ""), c.classList.add(He)) : s && c.classList.add(We), !this.args.iconDividerStyle && t.horizontalAlign && i.classList.add(J[t.horizontalAlign]), i.onclick = (g) => this.onClick(g, e, n);
    const f = t.icon ?? a, x = s ? t.text ?? "" : t.label ?? o ?? "";
    if (f) {
      const g = document.createElement("i");
      g.className = `${Oe} ir-icon ${Ye(f)}`, i.appendChild(g);
    }
    if (x) {
      const g = je("span");
      if (g.innerText = x, s) {
        const C = document.createElement("div");
        g.classList.add("text--multi-ellipsis"), C.setAttribute("data-has-px", ""), t.lineClamp === void 0 ? g.style.removeProperty("-webkit-line-clamp") : g.style.setProperty("-webkit-line-clamp", t.lineClamp), C.appendChild(g), c.insertAdjacentElement("afterbegin", C);
      } else
        g.classList.add("text--ellipsis"), i.appendChild(g);
    }
    return c.appendChild(i), c;
  }
  getCellLabel(e) {
    return this.args.iconDividerStyle ? e.text || "" : e.label || this.args.defaultLabel || "";
  }
  getExtraWidth(e) {
    const n = e.icon || this.args.defaultIcon;
    return this.args.iconDividerStyle || this.args.outlineStyle ? this._extraWidth : n ? at + dt : 0;
  }
  getCellInnerWidth(e, n, t) {
    const s = G(e, n);
    return this.getHorizontalCellPadding(t) + s.calculateWidth(this.getCellLabel(t)) + this.getExtraWidth(t);
  }
  getCellInnerHeight(e, n) {
    if (this.args.iconDividerStyle) {
      const t = e.querySelector(".text--multi-ellipsis");
      if (t)
        return this.getVerticalCellPadding(n) + t.offsetHeight;
    }
    return ct;
  }
  get renderType() {
    return "button";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
const At = (v) => {
  const e = new mt(v ?? {});
  return () => e;
}, $ = 20;
class Mt extends A {
  constructor(e) {
    super(), this._args = e;
  }
  render(e, n, t) {
    const {
      plugin: s,
      onDropdownButtonClick: d,
      visibleSortButton: r = !0,
      visibleCheckAllButton: a = !0,
      stringEqualsFilterOption: o = "contains",
      ignoreCase: c = !1
    } = this._args, i = document.createElement("div"), _ = s.pluginAPI;
    i.className = Ge, i.setAttribute("data-has-px", "");
    const f = de(t);
    return f.removeAttribute("data-has-px"), f.removeAttribute("data-has-py"), f.classList.add(Ae, Me), i.append(f), _.getColumnMetaInfo(n).enabled !== !1 && i.appendChild(g()), i;
    function g() {
      const C = Xe("ir-icon--filter", Pe);
      C.style.setProperty("--ir-icon-badge-color", Fe.info.active), D();
      let R = null;
      return C.onclick = () => {
        if (R) return E();
        R = re(
          () => ce({
            pluginAPI: _,
            visibleSortButton: r,
            visibleCheckAllButton: a,
            onDropdownButtonClick: d,
            refElement: C,
            rowId: e,
            columnId: n,
            sortOrder: t.sortOrder,
            onClose: E,
            onSubmit: D,
            onClear: D,
            stringEqualsFilterOption: o,
            ignoreCase: c
          }),
          N("popover")
        );
      }, C;
      function E() {
        R?.(), R = null, t.gridStore.gridTextarea.focus();
      }
      function D() {
        const m = !!_.getFilterOptionByCol(n);
        C.classList.toggle("ir-icon-badge--right", m);
      }
    }
  }
  getCellInnerWidth(e, n, t) {
    const s = G(e, n);
    return this.getHorizontalCellPadding(t) + s.calculateWidth(t.text ?? "") + (t.sortOrder ? $ : 0) + (t.icon ? $ : 0) + $;
  }
  get renderType() {
    return "filter";
  }
  get editable() {
    return !1;
  }
  get canBeClear() {
    return !1;
  }
}
class ft extends k {
  _mountTask({ grid: e, gridStore: n }) {
    const { table: t } = n.elements;
    let s = null;
    t.addEventListener("mousedown", (d) => {
      if (d.button !== 0) return;
      const r = M("td", "tr", d.target);
      if (!r || r?.tagName === "TH") return;
      const a = W(r);
      s = e.cell(a.row, a.col), e.selectRow(s.row, s);
    }), e.addGlobalEventListener(document, "mouseup", () => s = null);
  }
  get pluginKey() {
    return "row-selection";
  }
}
function Pt() {
  return new ft();
}
const ht = /^\d+px$/;
function Ct(v) {
  for (const e of v)
    if (typeof e == "string") {
      if (ht.test(e) === !1)
        throw new Error(`invalid column weight: ${e}`);
    } else if (typeof e == "number") {
      if (e <= 0)
        throw new Error(`weight must be positive: ${e}`);
    } else
      throw new Error("weight type is allowed string or number");
}
function pt(v) {
  let e = 0;
  for (const n of v)
    typeof n == "string" && (e += le(n));
  return e;
}
function le(v) {
  return parseInt(v.substring(0, v.length - 2), 10);
}
class wt extends k {
  _columnWeightList = [];
  _fixedColumnWidth;
  constructor({ columnWeight: e }) {
    super(), Ct(e), this._fixedColumnWidth = pt(e), this._columnWeightList = e;
  }
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const { hook: s } = t, d = () => {
      const { clientWidth: o } = n;
      if (o === 0) return;
      const c = e.getColCount() - 1, i = o - c - this._fixedColumnWidth, _ = V(e.getColCount()).reduce((g, C) => {
        if (!e.getColumnVisible(C)) return g;
        const R = this._columnWeightList[C];
        return R === void 0 ? g + 1 : typeof R == "number" ? g + R : g;
      }, 0);
      let f = 0;
      V(c).forEach((g) => {
        if (!e.getColumnVisible(g)) return;
        const C = this._columnWeightList[g] ?? 1;
        if (typeof C == "string" && C.endsWith("px")) {
          const R = le(C);
          e.setColumnWidth(g, R);
        } else if (typeof C == "number") {
          const R = C / _;
          e.setColumnWidth(g, Math.floor(R * i));
        }
        f += e.getColumnWidth(g);
      });
      const x = a();
      x && e.setColumnWidth(x, i - f + this._fixedColumnWidth);
    }, r = () => {
      try {
        s.pauseEmit("columnChanged"), d();
      } catch (o) {
        console.error(o);
      } finally {
        s.resumeEmit("columnChanged");
      }
    };
    s.addHook("resize", r), s.addHook("columnChanged", r), this.addRollbackTask(() => {
      s.removeHook("resize", r), s.removeHook("columnChanged", r);
    }), r();
    function a() {
      for (let o = e.getColCount() - 1; o >= 0; o--)
        if (e.getColumnVisible(o))
          return o;
      return null;
    }
  }
  get pluginKey() {
    return "column-fill";
  }
}
function Ft(v) {
  return new wt(v ?? { columnWeight: [] });
}
const Q = 10;
class _t extends k {
  _mountTask({ grid: e, gridStore: n }) {
    const { hook: t } = n, { table: s } = n.elements, d = {
      cell: null
    }, r = () => {
      d.cell = null, s.draggable = !1;
    }, a = (f) => {
      s.draggable = !0, d.cell = f;
    };
    t.addHook("contextMouseDown", i), t.addHook("contextMouseUp", o), t.addHook("contextDragStart", _), t.addHook("contextDragEnd", c), this.addRollbackTask(() => {
      t.removeHook("contextMouseDown", i), t.removeHook("contextMouseUp", o), t.removeHook("contextDragStart", _), t.removeHook("contextDragEnd", c);
    });
    function o(f) {
      r();
    }
    function c(f) {
      r();
    }
    function i(f) {
      if (f.button !== 0) return;
      const x = M("td", "tr", f.target);
      if (!x) {
        r();
        return;
      }
      const g = W(x), C = e.cell(g.row, g.col);
      f.__IGNORE_CELL_DRAG_SELECT_CELL__ || e.selectCell(g.row, g.col), C.props.draggable === !0 && C.props.object ? a(C) : r();
    }
    function _(f) {
      if (!f.dataTransfer || !d.cell || !e.onDragStartCell(d.cell, f)) {
        f.preventDefault();
        return;
      }
      f.dataTransfer.setDragImage(d.cell.element, Q, Q);
    }
  }
  get pluginKey() {
    return "single-cell-drag";
  }
}
function Nt() {
  return new _t();
}
const ee = 10;
class Bt extends k {
  constructor(e = {}) {
    super(), this.args = e;
  }
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const {
      enabledRow: s = !0,
      enabledColumn: d = !0
    } = this.args, { table: r } = t.elements, { mergeHandler: a, rowManager: o, gridStateContext: c } = t;
    let i = null, _ = null;
    r.addEventListener("mousedown", f), r.addEventListener("dragstart", x), r.addEventListener("dragover", g), r.addEventListener("drop", C), r.addEventListener("dragleave", R), r.addEventListener("dragend", E), r.addEventListener("mouseup", E), this.addRollbackTask(() => {
      r.removeEventListener("mousedown", f), r.removeEventListener("dragstart", x), r.removeEventListener("dragover", g), r.removeEventListener("drop", C), r.removeEventListener("dragleave", R), r.removeEventListener("dragend", E), r.removeEventListener("mouseup", E);
    });
    function f(l) {
      if (l.button !== 0 || n.classList.contains(U)) return;
      const u = M("th", "tr", l.target);
      if (!u) return;
      const w = W(u), p = e.cell(w.row, w.col);
      if (p.cellType === "body-cell" || b(p)) return;
      D({
        direction: p.cellType,
        source: I(),
        cell: p
      });
      function I() {
        const { row: T, col: y } = p;
        return p.cellType === "row-header" ? [
          o.getStartOfRowId(T),
          o.getEndOfRowId(T)
        ] : [
          o.getStartOfColumnId(y),
          o.getEndOfColumnId(y)
        ];
      }
      function L(T) {
        return !s || T.row < e.getFreezedRowCount();
      }
      function S(T) {
        return !d || T.col < e.getFreezedColumnCount();
      }
      function b(T) {
        return T.cellType === "row-header" && L(T) || T.cellType === "col-header" && S(T);
      }
    }
    function x(l) {
      if (!l.dataTransfer || !i) {
        l.preventDefault();
        return;
      }
      c.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging"), l.dataTransfer.effectAllowed = "move", l.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), l.dataTransfer.setData("ir-grid/exchange-by-header-dragging", ""), l.dataTransfer.setDragImage(i.cell.element, ee, ee);
    }
    function g(l) {
      if (!i || !l.dataTransfer || !l.dataTransfer.types.includes("ir-grid/exchange-by-header-dragging")) return;
      const u = e.findCellOrNull(l.offsetY, l.offsetX);
      if (!u || !u.isHeaderCell || i.direction === "row-header" && w(u, i) || i.direction === "col-header" && p(u, i)) {
        m(), _ = u;
        return;
      }
      u !== _ && h(u, i.direction), l.preventDefault();
      function w(I, L) {
        return I.row === L.cell.row || I.row < e.getFreezedRowCount() || a.checkConflictingInRows(I.row, I.row);
      }
      function p(I, L) {
        return I.col === L.cell.col || I.col < e.getFreezedColumnCount() || a.checkConflictingInColumns(I.col, I.col);
      }
    }
    function C() {
      const l = i, u = _;
      !l || !u || (m(), l.direction === "row-header" && (e.commandManager.doRecording("Exchange Rows", () => {
        e.exchangeRows(l.source, [u.row, u.row]);
      }), e.forceLayoutTask(), e.selectRow(l.cell.row)), l.direction === "col-header" && (e.commandManager.doRecording("Exchange Columns", () => {
        e.exchangeColumns(l.source, [u.col, u.col]);
      }), e.forceLayoutTask(), e.selectColumn(l.cell.col)));
    }
    function R() {
      m(), _ = null;
    }
    function E() {
      r.classList.remove("is-dragging"), m(), i = null, r.draggable = !1, _ = null, c.setIdle();
    }
    function D({ direction: l, source: u, cell: w }) {
      r.draggable = !0, i = {
        direction: l,
        source: u,
        cell: w
      };
    }
    function m() {
      if (!_ || !i) return;
      const { direction: l } = i, u = l === "row-header" ? e.headerColumns : e.headerRows;
      for (let w = 0; w < u; w++)
        l === "row-header" ? e.cell(_.row, w).element.classList.remove("is-dragging") : e.cell(w, _.col).element.classList.remove("is-dragging");
    }
    function h(l, u) {
      m(), _ = l;
      const w = u === "row-header" ? e.headerColumns : e.headerRows;
      for (let p = 0; p < w; p++)
        u === "row-header" ? e.cell(l.row, p).element.classList.add("is-dragging") : e.cell(p, l.col).element.classList.add("is-dragging");
    }
  }
  get pluginKey() {
    return "exchange-by-header-cell";
  }
}
const te = 10;
class zt extends k {
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const { rowManager: s, gridStateContext: d } = t, { table: r } = t.elements, a = document.createElement("div");
    a.className = Ne;
    let o = null, c = -1;
    r.addEventListener("mousedown", i), r.addEventListener("dragstart", _), r.addEventListener("dragover", f), r.addEventListener("drop", x), r.addEventListener("dragleave", g), r.addEventListener("dragend", C), r.addEventListener("mouseup", C), this.addRollbackTask(() => {
      r.removeEventListener("mousedown", i), r.removeEventListener("dragstart", _), r.removeEventListener("dragover", f), r.removeEventListener("drop", x), r.removeEventListener("dragleave", g), r.removeEventListener("dragend", C), r.removeEventListener("mouseup", C);
    });
    function i(m) {
      if (m.button !== 0 || n.classList.contains(U)) return;
      const h = M("th", "tr", m.target);
      if (!h) return;
      const l = W(h), u = e.cell(l.row, l.col);
      if (w(u)) return;
      Object.assign(m, { __IGNORE_HEADER_SELECT__: !0 }), R({
        source: [
          s.getStartOfRowId(u.row),
          s.getEndOfRowId(u.row)
        ],
        cell: u
      });
      function w(p) {
        return p.cellType !== "row-header" || p.row < e.getFreezedRowCount() || p.row < e.headerRows;
      }
    }
    function _(m) {
      const { offsetY: h, offsetX: l } = m;
      if (e.findCellOrNull(h, l)?.cellType === "row-header") {
        if (!m.dataTransfer || !o) {
          m.preventDefault();
          return;
        }
        d.setMode({ mode: "dragging", contextParam: {} }), r.classList.add("is-dragging"), m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), m.dataTransfer.setData("ir-grid/move-rows-dragging", ""), m.dataTransfer.setDragImage(o.cell.element, te, te);
      }
    }
    function f(m) {
      const { dataTransfer: h, offsetY: l, offsetX: u } = m;
      if (!o || !h || !h.types.includes("ir-grid/move-rows-dragging")) return;
      const w = e.findCellOrNull(l, u);
      if (!w) return;
      const p = I(w.row);
      if (w.cellType !== "row-header" || L(p, o)) {
        E(), c = -1;
        return;
      }
      p !== c && D(p, w.col), m.preventDefault();
      function I(S) {
        const b = e.getRow(S), T = l - b.top < b.height / 2;
        return b.rowId + (T ? 0 : 1);
      }
      function L(S, b) {
        const [T, y] = b.source;
        return S >= T && S <= y || S < e.headerRows;
      }
    }
    function x() {
      const m = o, h = c;
      !m || h < 0 || (E(), e.commandManager.doRecording("Move Rows", () => {
        e.moveRows(m.source, h);
      }), e.forceLayoutTask(), e.selectRow(m.cell.row));
    }
    function g() {
      E(), c = -1;
    }
    function C() {
      r.classList.remove("is-dragging"), E(), o = null, r.draggable = !1, c = -1, d.setIdle();
    }
    function R({ source: m, cell: h }) {
      r.draggable = !0, o = {
        source: m,
        cell: h
      };
    }
    function E() {
      c < 0 || !o || a.remove();
    }
    function D(m, h) {
      E(), c = m;
      const l = Math.min(c, s.length - 1), u = e.getRow(l), w = u.getCell(h).element.getBoundingClientRect(), p = {
        top: w.top,
        height: 16
      }, I = p.height / 2;
      m === s.length && (p.top += u.height, p.height = I + 1), a.style.top = `${p.top - I}px`, a.style.left = `${w.left}px`, a.style.width = `${e.headerWidth}px`, a.style.height = `${p.height}px`, N("popover").appendChild(a);
    }
  }
  get pluginKey() {
    return "move-row";
  }
}
const ne = 10;
class $t extends k {
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const { rowManager: s, columnManager: d, gridStateContext: r } = t, { table: a } = t.elements, o = document.createElement("div");
    o.className = Be;
    let c = null, i = -1;
    a.addEventListener("mousedown", _), a.addEventListener("dragstart", f), a.addEventListener("dragover", x), a.addEventListener("drop", g), a.addEventListener("dragleave", C), a.addEventListener("dragend", R), a.addEventListener("mouseup", R), this.addRollbackTask(() => {
      a.removeEventListener("mousedown", _), a.removeEventListener("dragstart", f), a.removeEventListener("dragover", x), a.removeEventListener("drop", g), a.removeEventListener("dragleave", C), a.removeEventListener("dragend", R), a.removeEventListener("mouseup", R);
    });
    function _(h) {
      if (h.button !== 0 || n.classList.contains(U)) return;
      const l = M("th", "tr", h.target);
      if (!l) return;
      const u = W(l), w = e.cell(u.row, u.col);
      if (p(w)) return;
      Object.assign(h, { __IGNORE_HEADER_SELECT__: !0 }), E({
        source: [
          s.getStartOfColumnId(w.col),
          s.getEndOfColumnId(w.col)
        ],
        cell: w
      });
      function p(I) {
        return I.cellType !== "col-header" || I.col < e.getFreezedColumnCount() || I.col < e.headerColumns;
      }
    }
    function f(h) {
      const { offsetY: l, offsetX: u } = h;
      if (e.findCellOrNull(l, u)?.cellType === "col-header") {
        if (!h.dataTransfer || !c) {
          h.preventDefault();
          return;
        }
        r.setMode({ mode: "dragging", contextParam: {} }), a.classList.add("is-dragging"), h.dataTransfer.effectAllowed = "move", h.dataTransfer.setData("ir-grid/disabled-cell-drop", ""), h.dataTransfer.setData("ir-grid/move-columns-dragging", ""), h.dataTransfer.setDragImage(c.cell.element, ne, ne);
      }
    }
    function x(h) {
      const { dataTransfer: l, offsetY: u, offsetX: w } = h;
      if (!c || !l || !l.types.includes("ir-grid/move-columns-dragging")) return;
      const p = e.findCellOrNull(u, w);
      if (!p) return;
      const I = L(p.col);
      if (p.cellType !== "col-header" || S(I, c)) {
        D(), i = -1;
        return;
      }
      I !== i && m(p.row, I), h.preventDefault();
      function L(b) {
        const T = e.getColumn(b), y = w - T.left < T.width / 2;
        return T.columnId + (y ? 0 : 1);
      }
      function S(b, T) {
        const [y, ie] = T.source;
        return b >= y && b <= ie || b < e.headerColumns;
      }
    }
    function g() {
      const h = c, l = i;
      !h || l < 0 || (D(), e.commandManager.doRecording("Move Columns", () => {
        e.moveColumns(h.source, l);
      }), e.forceLayoutTask(), e.selectColumn(h.cell.col));
    }
    function C() {
      D(), i = -1;
    }
    function R() {
      a.classList.remove("is-dragging"), D(), c = null, a.draggable = !1, i = -1, r.setIdle();
    }
    function E({ source: h, cell: l }) {
      a.draggable = !0, c = {
        source: h,
        cell: l
      };
    }
    function D() {
      i < 0 || !c || o.remove();
    }
    function m(h, l) {
      D(), i = l;
      const u = Math.min(i, d.length - 1), w = e.getColumn(u), p = e.cell(h, u);
      if (!p.isConnected) return;
      const I = p.element.getBoundingClientRect(), L = {
        left: I.left,
        width: 12
      }, S = L.width / 2;
      l === d.length && (L.left += w.width, L.width = S + 1), o.style.top = `${I.top}px`, o.style.left = `${L.left - S}px`, o.style.height = `${e.headerHeight}px`, o.style.width = `${L.width}px`, N("popover").appendChild(o);
    }
  }
  get pluginKey() {
    return "move-column";
  }
}
class Vt extends k {
  constructor(e = {}) {
    super(), this._args = e;
  }
  _mountTask({ grid: e, contextElement: n, gridStore: t }) {
    const {
      onRowClick: s,
      freezeLastColumn: d,
      multipleSelect: r = !1,
      selectOnRightClick: a = !1
    } = this._args, { hook: o, columnManager: c } = t, { visibleColumnList: i } = c, _ = this.setPluginAPI(new vt(e, r)), f = /* @__PURE__ */ new Set([0]);
    if (a && f.add(2), n.classList.add(K), d) {
      n.classList.add(Y);
      const m = t.getThemeValue("grid.forceRenderRightCol");
      t.setGridConfig({
        "grid.forceRenderRightCol": 1
      }), o.addSyncHook("cellLayout", g), o.addSyncHook("postRenderCell", C), this.addRollbackTask(() => {
        t.setGridConfig({ "grid.forceRenderRightCol": m }), o.removeSyncHook("cellLayout", g), o.removeSyncHook("postRenderCell", C);
      });
    }
    const x = (m) => e.onNativeCopy(m);
    o.addBeginHook("contextMouseDown", R), o.addHook("contextMouseDown", E), o.addHook("renderRowElement", D), e.addGlobalEventListener(n, "copy", x), this.addRollbackTask(() => {
      _.clearAllSelections(), n.classList.remove(K, Y), o.removeHook("contextMouseDown", R), o.removeHook("contextMouseDown", E), o.removeHook("renderRowElement", D), n.removeEventListener("copy", x);
    });
    function g(m, h, l) {
      // 가로 scroll이 안생겼다면 리턴
      e.width <= n.clientWidth || // 마지막 열이 아니면 리턴
      h < i.length - 1 || (l.left = e.scrollRight - l.width);
    }
    function C(m) {
      m.isHeaderCell || m.col < i.length - 1 || (m.element.style.zIndex = ze.zLevel3);
    }
    function R(m) {
      m.__IGNORE_CELL_DRAG_SELECT_CELL__ = !0;
    }
    function E(m) {
      if (!f.has(m.button) || m.target instanceof HTMLButtonElement) return;
      const h = m.target.closest("td");
      if (!h) return;
      const l = W(h), u = e.cell(l.row, l.col);
      u.cellType === "body-cell" && (_.runMouseDownTask(u, m), s?.(e, u.row, m));
    }
    function D(m, h) {
      h.classList.toggle($e, _.isRowSelected(m.rowId, !0));
    }
  }
  get pluginKey() {
    return "grid-table";
  }
}
class vt {
  constructor(e, n) {
    this._grid = e, this._multipleSelect = n, this.setMultipleSelect(n);
  }
  _selectedRowIdSet = /* @__PURE__ */ new Set();
  _mouseDownTasks = [];
  get multipleSelect() {
    return this._multipleSelect;
  }
  addSelectedRow(e) {
    this.addSelectedRows([e]);
  }
  addSelectedRows(e) {
    e.forEach((n) => {
      this._selectedRowIdSet.add(n);
      const t = this._grid.getRow(n);
      t.isMounted && t.render();
    });
  }
  removeSelectedRow(e) {
    this.removeSelectedRows([e]);
  }
  removeSelectedRows(e) {
    e.forEach((n) => {
      this._selectedRowIdSet.delete(n);
      const t = this._grid.getRow(n);
      t.isMounted && t.render();
    });
  }
  clearSelectedRows() {
    this.removeSelectedRows([...this._selectedRowIdSet]);
  }
  clearAllSelections() {
    this._grid.releaseCells(), this.clearSelectedRows();
  }
  isRowSelected(e, n = !1) {
    if (this._selectedRowIdSet.has(e)) return !0;
    if (n) return !1;
    const t = this._grid.getSelection();
    return t !== null && e >= t.top && e <= t.bottom;
  }
  getSelectedRows() {
    const e = this._grid.getSelection();
    if (!e) return [...this._selectedRowIdSet];
    const n = new Set(this._selectedRowIdSet);
    for (let t = e.top; t <= e.bottom; t++)
      n.add(t);
    return [...n];
  }
  setMultipleSelect(e) {
    this._multipleSelect = e, e || this.selectRowWithActiveCell(), this._mouseDownTasks = [], e && this._mouseDownTasks.push(
      this._mousedownWithCtrlTask,
      this._mousedownWithShiftTask
    ), this._mouseDownTasks.push(this._mousedownSingleCellTask);
  }
  runMouseDownTask(e, n) {
    for (const t of this._mouseDownTasks)
      if (t.call(this, e, n)) break;
  }
  _mousedownWithCtrlTask(e, n) {
    if (!n.ctrlKey) return;
    const t = this._grid.getSelection();
    return t && (this.addSelectedRows(V(t.top, t.bottom + 1).asList()), this._grid.releaseCells()), this.isRowSelected(e.row) ? this.removeSelectedRow(e.row) : this._grid.selectRow(e.row, e), !0;
  }
  _mousedownWithShiftTask(e, n) {
    if (!(!n.shiftKey || !this._grid.activeCell))
      return this.clearSelectedRows(), this._grid.selectRows(
        Math.min(this._grid.activeCell.row, e.row),
        Math.max(this._grid.activeCell.row, e.row),
        this._grid.activeCell
      ), !0;
  }
  _mousedownSingleCellTask(e, n) {
    this.isRowSelected(e.row) && n.button === 2 || (this.clearAllSelections(), this._grid.selectRow(e.row, e));
  }
  /** activeCell이 있는 Row만 선택하는 함수 (active가 없고, selectedCls만 있는 경우 그 중 첫번째 행 선택) */
  selectRowWithActiveCell() {
    if (this.getSelectedRows().length !== 0) {
      if (this._grid.activeCell)
        this._grid.selectRow(this._grid.activeCell.row, this._grid.activeCell);
      else {
        const e = [...this._selectedRowIdSet][0];
        e && this._grid.selectRow(e);
      }
      this.clearSelectedRows();
    }
  }
}
class Ut extends k {
  constructor(e) {
    super(), this._args = e;
  }
  _mountTask(e) {
    const { grid: n, gridStore: t } = e, s = this.setPluginAPI(new ue(n, this._args?.columnMetaInfo ?? {})), d = (a, o, c) => {
      (c === "insertColumns" || c === "removeColumns") && s.clearFilters();
    }, r = (a) => {
      document.getElementById(s.dropdownId)?.isConnected && (a.__IGNORE_GRID_FOCUS__ = !0);
    };
    t.hook.addHook("columnChanged", d), t.hook.addHook("contextMouseUp", r), this.addRollbackTask(() => {
      s.clearFilters(), s.clearSortOrder(), t.hook.removeHook("columnChanged", d), t.hook.removeHook("contextMouseUp", r);
    });
  }
  get pluginKey() {
    return "row-filter";
  }
}
const Rt = /^[-+]?\d+(\.\d+)?$/, xt = /^([-+])?0*(\d+)(\.\d+?)?0*$/;
function jt(v) {
  if (!Rt.test(v)) return v;
  const e = xt.exec(v);
  if (!e) return v;
  const [n, t, s] = e.slice(1), d = [];
  return n && n !== "+" && d.push(n), t && d.push(t.replace(/\B(?=(\d{3})+(?!\d))/g, ",")), s && d.push(s), d.join("");
}
const Kt = /^-?(\d{1,3}([,]\d{3})*|\d+)(\.\d+)?$/, Yt = /^-?\d+(\.\d+)?$/;
export {
  Kt as ALLOW_ONLY_CURRENCY_NUMBER_PATTERN,
  Yt as ALLOW_ONLY_NUMBER_PATTERN,
  qt as CellDropPlugin,
  Ft as ColumnFillPlugin,
  Jt as CustomCellRenderer,
  Qt as DefaultKeyPlugin,
  en as IRGrid,
  mt as IRGridButtonRenderer,
  tn as IRGridCell,
  nn as IRGridCellDropPlugin,
  A as IRGridCellRenderer,
  rn as IRGridCheckboxRenderer,
  wt as IRGridColumnFillPlugin,
  rt as IRGridDatePickerRenderer,
  sn as IRGridDefaultCellIconButtonRenderer,
  on as IRGridDefaultCellRenderer,
  ln as IRGridDefaultKeyPlugin,
  Bt as IRGridExchangeByHeaderCellPlugin,
  an as IRGridMouseCellSelectorPlugin,
  $t as IRGridMoveColumnsPlugin,
  zt as IRGridMoveRowsPlugin,
  dn as IRGridOverflowPanelPlugin,
  cn as IRGridPopoverPlugin,
  it as IRGridProgressRenderer,
  un as IRGridRadioCellRenderer,
  gn as IRGridResizerPlugin,
  mn as IRGridRow,
  Mt as IRGridRowFilterCellRenderer,
  Ut as IRGridRowFilterPlugin,
  fn as IRGridRowNoHeaderCellRenderer,
  ft as IRGridRowSelectionPlugin,
  tt as IRGridSelectCellRenderer,
  _t as IRGridSingleCellDragPlugin,
  Vt as IRGridTablePlugin,
  hn as MouseCellSelectorPlugin,
  Cn as ResizerPlugin,
  Pt as RowSelectionPlugin,
  pn as STICKY_Z_INDEX,
  Nt as SingleCellDragPlugin,
  wn as cellCompare,
  _n as cellTextToNum,
  de as createCellContent,
  vn as createCellContentWithIconButton,
  Rn as createCustomRenderer,
  xn as createIRGridColumnSortManager,
  In as createInferenceSortHandler,
  En as numberCheckDefault,
  jt as numberWithCommasFormatter,
  At as renderGridButton,
  Tn as renderGridCellDefault,
  Dn as renderGridCellIconButton,
  Ln as renderGridCheckbox,
  Ot as renderGridDatePicker,
  Gt as renderGridProgress,
  bn as renderGridRadio,
  Wt as renderGridSelect,
  Sn as renderRowNoHeaderCell
};
//# sourceMappingURL=grid.js.map
