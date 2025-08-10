import { q as B, r as M, t as F, u as U, v as Y, x as $, y as W, A as G, B as j, C as K, D as q, E as Z, F as z, G as J, H as Q, I as V, J as X, K as ee, L as te, M as ie, N as se, O as ne, P as ae, Q as oe, R as re, S as le } from "./css-akUkFMHX.js";
import { b as A, g as N, e as H, h as S } from "./floating-C5P7I7tX.js";
import { I as R } from "./index-CIsJmAg4.js";
import { c as de, a as w, b as ce } from "./rx-state-C3nw7N-x.js";
import { c as O } from "./outside-D1z8pt7M.js";
import { i as I, d as C } from "./index-Bmt0z1bM.js";
function he(n, e, t = 1) {
  const i = [];
  for (let a = n; a < e; a += t)
    i.push(a);
  return i;
}
function Te(n, e, t = 1) {
  const { start: i, end: a } = e === void 0 ? { start: 0, end: n } : { start: n, end: e };
  return {
    forEach(o) {
      let r = i;
      for (; r !== a; )
        o(r), r += t;
    },
    map(o) {
      const r = [];
      for (let d = i; d < a; d += t)
        r.push(o(d));
      return r;
    },
    some(o) {
      let r = i;
      for (; r !== a; ) {
        if (o(r))
          return !0;
        r += t;
      }
      return !1;
    },
    asList() {
      return he(i, a, t);
    },
    reduce(o, r) {
      let d = r, s = i;
      for (; s !== a; )
        d = o(d, s), s += t;
      return d;
    }
  };
}
const p = {
  select: $,
  selectDropdown: B,
  selectDropdownList: M,
  selectDropdownButton: F,
  selectDropdownItem: U,
  selectDropdownIcon: Y,
  selectInput: W,
  selectInputNative: G,
  selectInputIcon: j,
  selectDropdownItemSelected: K
}, ue = () => {
  const n = document.createElement("div"), e = document.createElement("ul");
  return n.classList.add(p.selectDropdown, de.zIndex.popover), e.className = p.selectDropdownList, n.appendChild(e), { divDropdown: n, ulItems: e };
}, me = (n, e) => {
  const t = document.createElement("li"), i = document.createElement("button"), a = document.createElement("i"), o = document.createElement("span");
  return o.innerText = e, i.type = "button", i.title = e, i.className = p.selectDropdownButton, t.className = p.selectDropdownItem, t.setAttribute("ir-select-value", n), a.classList.add(p.selectDropdownIcon, "ir-icon", "ir-icon--check"), i.appendChild(a), i.append(o), t.append(i), { item: t, button: i, icon: a, span: o };
};
class Se extends R {
  divSelect;
  divInput;
  divDropDown;
  inputValue;
  ulItems;
  select;
  items;
  escController;
  outsideHandler;
  _value;
  lastClickedOption;
  floatingCleanup;
  constructor(e) {
    super({
      contextElement: e instanceof HTMLSelectElement ? e : e.contextElement
    }), this.floatingCleanup = () => {
    }, this.divSelect = document.createElement("div"), this.divInput = document.createElement("div"), this.inputValue = document.createElement("input");
    const t = ue();
    this.divDropDown = t.divDropdown, this.ulItems = t.ulItems, this.items = [], this.select = this.contextElement;
    const i = document.createElement("i");
    this.inputValue.readOnly = !0, this.inputValue.type = "text", this.divSelect.classList.add(p.select), this.select.classList.forEach((o) => this.divSelect.classList.add(o)), this.divInput.className = p.selectInput, this.inputValue.className = p.selectInputNative, i.classList.add(p.selectInputIcon, "ir-icon", "ir-icon--chevron-down"), this.divInput.appendChild(this.inputValue), this.divInput.appendChild(i), this.divDropDown.appendChild(this.ulItems), this.divSelect.appendChild(this.divInput);
    const a = this.select.value;
    this._value = "", Array.from(this.select.children).map((o) => o).forEach((o) => {
      const r = {};
      for (let d = 0; d < o.attributes.length; ++d) {
        const s = o.attributes.item(d);
        if (!s) return;
        r[s.name] = s.value;
      }
      this.addItem(o.value, o.text, r), o.remove();
    }), e instanceof HTMLSelectElement ? this.value = a : (e.onChange && (this.onChange = e.onChange), this.disabled = e.disabled ?? !1, e.defaultValue !== null && (this.value = e.defaultValue || a), e.placeholder && (this.inputValue.placeholder = e.placeholder)), this.select.insertAdjacentElement("beforebegin", this.divSelect), this.select.style.display = "none", this.divInput.onclick = () => this.toggle(), this.addCoreElement(this.divSelect), this.escController = A(this), this.outsideHandler = O({
      eventElements: [this.divSelect, this.divDropDown],
      clickOutsideFunc: () => this.hide()
    });
  }
  /*
   * Getters
   */
  get componentLabel() {
    return "select";
  }
  get listItems() {
    return [...this.items];
  }
  get disabled() {
    return this.inputValue.hasAttribute("disabled");
  }
  get value() {
    return this._value;
  }
  get text() {
    return this.inputValue.value;
  }
  /*
   * Setters
   */
  set disabled(e) {
    e ? this.inputValue.setAttribute("disabled", "true") : this.inputValue.removeAttribute("disabled");
  }
  set value(e) {
    if (this._value !== e)
      if (this.hasElementByValue(e))
        this.selectItem(e);
      else
        throw new Error(`There is no '${e}' value`);
  }
  clearItems() {
    this.lastClickedOption = void 0, this.items.forEach(({ element: e, option: t }) => {
      e.remove(), t.remove();
    }), this.items = [], this.inputValue.value = "", this.select.value = "", this._value = "";
  }
  removeItem(e) {
    this.items.filter((t) => t.value === e).forEach(({ element: t, option: i }) => {
      t.remove(), i.remove();
    }), this.items = this.items.filter((t) => t.value !== e);
  }
  expand() {
    this.disabled || (this.divDropDown.style.width = `${this.divSelect.offsetWidth}px`, this.divDropDown.isConnected || N("popover").appendChild(this.divDropDown), this.escController.create(), this.outsideHandler.create(), setTimeout(() => {
      this.divSelect.classList.add("is-expanded"), this.divDropDown.classList.add("is-expanded"), this.floatingCleanup(), this.floatingCleanup = H(this.divSelect, this.divDropDown);
    }, 0));
  }
  hide() {
    this.floatingCleanup(), this.escController.destroy(), this.outsideHandler.destroy(), this.divSelect.classList.remove("is-expanded"), this.divDropDown.classList.remove("is-expanded"), this.divDropDown.addEventListener("transitionend", (e) => {
      e.currentTarget === e.target && this.divDropDown.remove();
    }, { once: !0 });
  }
  toggle() {
    this.divSelect.classList.contains("is-expanded") ? this.hide() : this.expand();
  }
  addItem(e, t, i = {}) {
    const { item: a, button: o } = me(e, t), r = document.createElement("option");
    return Object.entries(i).forEach(([d, s]) => r.setAttribute(d, s)), r.value = e, r.innerText = t, this.select.appendChild(r), this.items.push({ text: t, value: e, element: a, option: r, attr: i }), this.ulItems.appendChild(a), a.onclick = (d) => {
      this.lastClickedOption !== r && (this.clearSelectedStatus(), this.changeValue({ text: t, value: e, attr: i, element: a, option: r })), this.hide();
    }, o;
  }
  /*
   * Object Events
   */
  onChange(e, t) {
  }
  setValueWithoutEvent(e) {
    if (this._value !== e)
      if (this.hasElementByValue(e))
        this.selectItem(e, !1);
      else
        throw new Error(`There is no '${e}' value`);
  }
  /*
   * Private Methods
   */
  hasElementByValue(e) {
    return [...this.ulItems.querySelectorAll("[ir-select-value]")].map((t) => t).some((t) => t.getAttribute("ir-select-value") === e);
  }
  clearSelectedStatus() {
    this.items.forEach(({ element: e }) => e.classList.remove(p.selectDropdownItemSelected));
  }
  selectItem(e, t = !0) {
    this.clearSelectedStatus();
    const i = this.getSelectedItemOrNull(e);
    i && this.changeValue(i, t);
  }
  getSelectedItemOrNull(e) {
    for (const t of this.items)
      if (t.value === e)
        return t;
    return null;
  }
  changeValue({ text: e, value: t, option: i, element: a }, o = !0) {
    this.lastClickedOption = i, a.classList.add(p.selectDropdownItemSelected), this.inputValue.value = e, this.select.value = t, this._value = t, o && this.onChange(this.select, i);
  }
}
const b = {
  datePicker: q,
  datePickerHeader: Z,
  datePickerHeaderTitle: z,
  datePickerContent: J,
  datePickerFooter: Q,
  datePickerContentCell: V,
  datePickerContentHeaderCell: X,
  datePickerContentTable: ee
};
function pe() {
  const n = document.createElement("div"), e = document.createElement("div"), t = document.createElement("button"), i = document.createElement("button"), a = document.createElement("strong"), o = document.createElement("button"), r = document.createElement("button"), d = document.createElement("div"), s = document.createElement("div");
  t.appendChild(w("ir-icon--chevron-double-left")), i.appendChild(w("ir-icon--chevron-left")), o.appendChild(w("ir-icon--chevron-right")), r.appendChild(w("ir-icon--chevron-double-right"));
  const v = document.createElement("div"), m = document.createElement("table"), D = document.createElement("thead"), h = document.createElement("tbody"), l = document.createElement("div");
  n.classList.add(b.datePicker), e.classList.add(b.datePickerHeader), a.classList.add(b.datePickerHeaderTitle), v.classList.add(b.datePickerContent), l.classList.add(b.datePickerFooter), d.appendChild(t), d.appendChild(i), s.appendChild(o), s.appendChild(r), e.appendChild(d), e.appendChild(a), e.appendChild(s);
  const u = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], c = document.createElement("tr"), L = {};
  u.forEach((k) => {
    const g = document.createElement("th");
    g.className = `${b.datePickerContentCell} ${b.datePickerContentHeaderCell}`, g.setAttribute("scope", "col"), L[k] = g, c.appendChild(g);
  }), D.appendChild(c), m.className = b.datePickerContentTable, m.appendChild(D), m.appendChild(h), v.appendChild(m);
  const x = document.createElement("div"), f = document.createElement("button");
  return f.classList.add("button"), f.type = "button", x.appendChild(f), l.appendChild(x), n.appendChild(e), n.appendChild(v), n.appendChild(l), {
    datePicker: n,
    headerTitle: a,
    contentTableTbody: h,
    headerPrev: i,
    headerNext: o,
    todayButton: f,
    headerNextYear: r,
    headerPrevYear: t,
    updateI18n: P
  };
  function P() {
    f.innerHTML = "", f.appendChild(w("ir-icon--check", "button__icon-prefix")), f.append(I.t("datePicker.btnToday")), u.forEach((k) => L[k].innerText = I.t(`common.${k}`));
  }
}
const fe = /* @__PURE__ */ (() => {
  let n = null;
  return function() {
    return n || (n = pe()), n;
  };
})(), y = (n) => (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0), n), ve = 6, be = 7, Ce = 32, De = 0, ke = ({ uuid: n, refElement: e, onClick: t, minDate: i, maxDate: a }) => {
  let o = !1, r = () => {
  }, d = null;
  y(i), y(a);
  const s = fe(), v = O({
    eventElements: [s.datePicker],
    clickOutsideFunc: () => m.hide()
  }), m = {
    get visible() {
      return o;
    },
    update(h, l) {
      const u = y(/* @__PURE__ */ new Date()), c = y(new Date(h)), L = c.getMonth();
      s.headerPrev.onclick = () => {
        h.setDate(De), this.update(h, l);
      }, s.headerNext.onclick = () => {
        h.setDate(Ce), this.update(h, l);
      }, s.headerPrevYear.onclick = () => {
        h.setFullYear(h.getFullYear() - 1), this.update(h, l);
      }, s.headerNextYear.onclick = () => {
        h.setFullYear(h.getFullYear() + 1), this.update(h, l);
      }, s.todayButton.onclick = () => {
        t.call(null, u), this.update(u, u);
      };
      const x = u < i || u > a;
      s.todayButton.disabled = x;
      const f = s.todayButton.parentElement;
      x && f && d == null && (d = ce({
        refElement: f,
        label: I.t("datePicker.disabledTodayTooltip"),
        placement: "bottom"
      })), s.updateI18n(), s.headerTitle.innerText = C(c).format(I.t("datePicker.titleFormat")), c.setDate(1), c.setDate(-(c.getDay() - 1)), s.contentTableTbody.innerHTML = "";
      for (let P = 0; P < ve; P++) {
        const k = document.createElement("tr");
        for (let g = 0; g < be; g++) {
          const E = document.createElement("td"), T = new Date(c);
          E.className = V, E.innerText = `${c.getDate()}`, E.onclick = () => t(T), T < i || T > a ? E.classList.add("is-disabled") : c.getMonth() !== L ? E.classList.add("is-diff-month") : c.getTime() === l?.getTime() && E.classList.add(te), k.appendChild(E), c.setDate(c.getDate() + 1);
        }
        s.contentTableTbody.appendChild(k);
      }
    },
    show() {
      o = !0, s.datePicker.isConnected || N("popover").appendChild(s.datePicker), s.datePicker.style.removeProperty("display"), s.datePicker.setAttribute("data-for", n), v.create(), D.create(), setTimeout(() => {
        s.datePicker.classList.add("is-visible"), r(), r = H(e, s.datePicker, "bottom-end");
      }, 0);
    },
    hide() {
      v.destroy(), D.destroy(), d && (d.destroy(), d = null);
      const h = (l) => {
        l.currentTarget === l.target && (o = !1, s.datePicker.removeEventListener("transitionend", h), n === s.datePicker.getAttribute("data-for") && (r(), s.datePicker.remove()));
      };
      s.datePicker.addEventListener("transitionend", h), s.datePicker.classList.remove("is-visible");
    },
    onESC() {
      this.hide();
    }
  }, D = A(m);
  return m;
}, _ = (n, e) => n instanceof Date ? C(n).startOf("D") : typeof n == "string" ? C(n, e) : C(null);
class _e extends R {
  selectedDate = null;
  calendarDate = /* @__PURE__ */ new Date();
  format;
  div;
  input;
  button;
  handler;
  latestValue;
  _minDate;
  _maxDate;
  constructor({
    div: e,
    defaultDate: t,
    placeholder: i,
    format: a = I.t("datePicker.dateFormat"),
    checkbox: o = !1,
    disabled: r = !1,
    allowedEmptyString: d = !0,
    onSelect: s,
    onChange: v,
    onCheckboxClick: m,
    minDate: D = S().getStoreValue("datePicker.minDate"),
    maxDate: h = S().getStoreValue("datePicker.maxDate")
  }) {
    if (super({ contextElement: e }), t) {
      const l = _(t, a);
      l.isValid() ? (this.calendarDate = l.toDate(), this.selectedDate = l.toDate()) : console.error(`invalid defaultDate format. it must follow ${a}`);
    }
    if (!d && this.selectedDate == null) {
      const l = _(/* @__PURE__ */ new Date(), a);
      this.calendarDate = l.toDate(), this.selectedDate = l.toDate();
    }
    if (this.format = a, this.div = e, this.input = document.createElement("input"), this.button = document.createElement("button"), this.button.appendChild(w("ir-icon--calendar")), this.div.innerHTML = "", this.div.classList.add(ie), this.input.setAttribute("type", "text"), this.input.setAttribute("placeHolder", i ?? this.format), this.input.classList.add(se, "tnum-adj"), this.button.className = ne, this.button.type = "button", this._minDate = D, this._maxDate = h, s && (this.onSelect = s), v && (this.onChange = v), m && (this.onCheckboxClick = m), o) {
      const l = document.createElement("div"), u = document.createElement("label"), c = document.createElement("input");
      c.setAttribute("type", "checkbox"), l.classList.add(ae, oe), u.className = re, c.className = le, u.appendChild(c), l.appendChild(u), this.div.appendChild(l), c.checked = !r, c.onchange = () => {
        this.disabled = !c.checked, this.onCheckboxClick(c.checked);
      }, this.addCoreElement(l);
    }
    this.disabled = r, this.div.appendChild(this.input), this.div.appendChild(this.button), this.addCoreElement(this.input), this.addCoreElement(this.button), this.selectedDate && (this.input.value = C(this.selectedDate).format(a)), this.button.addEventListener("click", () => {
      this.isVisible === !1 && this.show();
    }), this.input.addEventListener("blur", () => {
      if (this.input.value === "") {
        d ? this.setDate(null) : this.setDate(this.selectedDate);
        return;
      }
      let l = C(this.input.value, this.format, !0);
      l.isValid() || (l = C(this.input.value, this.format.replace(/-/g, ""), !0)), !l.isValid() || l.toDate() < this.minDate || l.toDate() > this.maxDate ? this.setDate(this.selectedDate) : this.setDate(l.toDate());
    }), this.handler = ke({
      uuid: this.uuid,
      refElement: this.div,
      minDate: this._minDate,
      maxDate: this._maxDate,
      onClick: (l) => {
        this.setDate(l), this.onSelect(l), this.hide();
      }
    });
  }
  get textValue() {
    return this.input.value;
  }
  get inputCheckbox() {
    return this.div.querySelector(".checkbox__input");
  }
  get date() {
    return this.selectedDate;
  }
  get componentLabel() {
    return "date-picker";
  }
  get isVisible() {
    return this.handler.visible;
  }
  get disabled() {
    return this.input.hasAttribute("disabled");
  }
  get minDate() {
    return this._minDate;
  }
  get maxDate() {
    return this._maxDate;
  }
  set minDate(e) {
    this._minDate = e;
  }
  set maxDate(e) {
    this._maxDate = e;
  }
  set disabled(e) {
    e ? (this.input.setAttribute("disabled", ""), this.button.setAttribute("disabled", "")) : (this.input.removeAttribute("disabled"), this.button.removeAttribute("disabled")), this.inputCheckbox && (this.inputCheckbox.checked = !e);
  }
  setDate(e) {
    e ? (this.selectedDate = new Date(e), this.calendarDate = new Date(e), this.input.value = C(e).format(this.format), this.updateCalendar()) : (this.selectedDate = null, this.input.value = ""), this.latestValue !== this.input.value && this.onChange(this.input.value), this.latestValue = this.input.value;
  }
  show() {
    this.isVisible || (this.handler.update(this.calendarDate, this.selectedDate), this.handler.show());
  }
  hide() {
    this.isVisible && this.handler.hide();
  }
  /* Object Events */
  onSelect(e) {
  }
  onChange(e) {
  }
  onCheckboxClick(e) {
  }
  updateCalendar() {
    this.handler.update(this.calendarDate, this.selectedDate);
  }
}
class ge {
  _commands;
  _label;
  constructor(e, ...t) {
    this._label = e, this._commands = t;
  }
  get commandLength() {
    return this._commands.length;
  }
  pushCommand(e) {
    this._commands.push(e);
  }
  execute() {
    const e = [];
    try {
      let t = 0;
      for (; t < this._commands.length; ) {
        const i = this._commands[t];
        if (!i.canExecute)
          throw console.error(i), new Error("Can't execute this command");
        i.execute(), e.push(i), ++t;
      }
    } catch (t) {
      return console.error("execute error!", t), e.reverse().forEach((i) => i.undo()), !1;
    }
    return !0;
  }
  undo() {
    const e = [];
    try {
      let t = this._commands.length - 1;
      for (; t >= 0; ) {
        const i = this._commands[t];
        if (!i.canUndo)
          throw console.error(i), new Error("Can't undo this command");
        i.undo(), e.push(i), --t;
      }
    } catch (t) {
      return console.error("undo error!", t), e.forEach((i) => i.execute()), !1;
    }
    return !0;
  }
  get label() {
    return this._label;
  }
}
const Ee = 1024;
class Ve {
  #e = [];
  #i = [];
  #a = !0;
  #s;
  #o;
  #n;
  #t;
  constructor({
    context: e,
    undoStackLength: t = Ee,
    disabled: i = !1
  }) {
    this.#s = t, this.#o = i, this.#n = e;
  }
  /**
   * IRGrid Undo / Redo를 위한 동작 블럭을 녹화함
   * @description 하나의 동기적인 흐름 안에서만 사용할 것
   */
  doRecording(e = "", t) {
    if (this.isDisabled)
      return t();
    if (this.isRecording)
      throw new Error("Already doing record!");
    try {
      return this.#t = new ge(e), t(), this.pushCommandBlock(this.#t), this.#t;
    } catch (i) {
      console.error("Got an error during recording!"), console.error(i);
    } finally {
      this.#t = void 0;
    }
  }
  undo() {
    const e = this.#e.pop();
    return e?.undo() ? (this.#i.push(e), this.#n.onUndo(e), e) : null;
  }
  redo() {
    const e = this.#i.pop();
    return e?.execute() ? (this.#e.push(e), this.#n.onRedo(e), e) : null;
  }
  pushCommandBlock(e) {
    this.isDisabled || (this.#e.length >= this.#s && this.#e.shift(), this.#e.push(e), this.#i.length = 0);
  }
  pushCommand(e) {
    if (!this.#t)
      throw new Error("Not recording!");
    this.#t.pushCommand(e);
  }
  clearCommands() {
    this.#e.length = 0, this.#i.length = 0;
  }
  pauseUIRecording() {
    this.#a = !1;
  }
  startUIRecording() {
    this.#a = !0;
  }
  get canRecord() {
    return !this.isDisabled && this.isRecording && !this.isPreventedUIRecording;
  }
  get commandContext() {
    return this.#n;
  }
  get isRecording() {
    return this.#t !== void 0;
  }
  get isPreventedUIRecording() {
    return this.#a;
  }
  get isDisabled() {
    return this.#o;
  }
  get stackLength() {
    return this.#s;
  }
  set stackLength(e) {
    this.#s = e;
  }
  set isDisabled(e) {
    this.#o = e;
  }
  get undoCommandStack() {
    return [...this.#e];
  }
  get redoCommandStack() {
    return [...this.#i];
  }
}
export {
  ge as I,
  ue as a,
  me as b,
  ke as c,
  Se as d,
  _e as e,
  Ve as f,
  fe as g,
  Te as r
};
//# sourceMappingURL=command-manager-Ds2Bk1Hy.js.map
