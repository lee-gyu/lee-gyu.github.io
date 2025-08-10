import { c as f, o as p, f as g, s as M, a as o, i as I, g as x, b as C, d as b } from "./floating-C5P7I7tX.js";
import { c as l } from "./clone-CMP76bLO.js";
import { c as _, b as D, d as y, e as E, f as v, g as N, h as T, i as w, j as L, a as O, k } from "./css-akUkFMHX.js";
import { c as B } from "./clsx-OuTLNxxd.js";
import { v as A } from "./v4-CKZ6klMF.js";
function h(i) {
  return i.some((t) => "icon" in t && t.icon !== void 0);
}
const $ = 8;
function u(i, t, e, a) {
  f(i, t, {
    placement: e,
    strategy: "fixed",
    middleware: [
      p(a),
      g(),
      M()
    ]
  }).then((s) => {
    t.style.left = `${s.x}px`, t.style.top = `${s.y - $}px`, t.dataset.placement = s.placement;
  });
}
function P(i) {
  return o({
    tag: "div",
    className: k,
    attr: {
      tabindex: "-1"
    },
    dataset: {
      id: i
    }
  }).element;
}
function m(i, t, e) {
  const { element: a } = o({
    tag: "div",
    className: B(
      _,
      t && T,
      e && D
    )
  });
  let s = !1;
  for (const n of i) {
    if (n.visible === !1) continue;
    if (n.type === "divider") {
      s = a.children.length > 0;
      continue;
    }
    s && (a.appendChild(U()), s = !1);
    const r = R(n);
    n.disabled && (r.dataset.disabled = "true"), a.appendChild(r);
  }
  return a;
}
function R(i) {
  if (i.type === "command-button") return e(i);
  if (i.type === "dropdown") return a(i);
  throw new Error(`Unknown item type: ${i.type}`);
  function t(s) {
    const n = document.createDocumentFragment(), r = o({ tag: "i", className: `${w} ir-icon` }), d = o({ tag: "span", className: L });
    return d.element.textContent = s.label ?? "", r.element.classList.add(s.icon ? s.icon : O.invisible), n.appendChild(r.element), n.appendChild(d.element), n;
  }
  function e(s) {
    const { element: n } = o({ tag: "button", className: E });
    return n.appendChild(t(s)), n.addEventListener("click", (r) => {
      r.__IR_CONTEXT_MENU_ITEM__ = s;
    }), n;
  }
  function a(s) {
    const { element: n } = o({ tag: "div", className: v }), { element: r } = o({ tag: "i", className: `${N} ir-icon ir-icon--triangle-small-right` });
    if (n.append(t(s), r), s.children && s.children.length > 0) {
      const d = m(
        s.children,
        !0,
        // 모든 자식 요소에 icon이 없으면 기본 적으로 false 처리
        s.hiddenIcon ?? !h(s.children)
      );
      n.append(d), n.addEventListener("mouseenter", () => {
        u(
          n,
          d,
          n.parentElement?.dataset.placement ?? "right-start",
          0
        );
      });
    }
    return n;
  }
}
function U() {
  return o({ tag: "div", className: y }).element;
}
const c = [];
class V {
  constructor(t) {
    this.args = t, this.#t = this.#d(), this.#a(l(t.items)), c.push(this);
  }
  #o = A();
  #t;
  #s = !1;
  #i = !1;
  #n = null;
  #e = null;
  #d() {
    const t = P(this.#o);
    return "blurDisabled" in this.args && (t.dataset.blurDisabled = this.args.blurDisabled ? "true" : "false"), t.addEventListener("focusout", (e) => {
      "blurDisabled" in this.args && this.args.blurDisabled || I(e.relatedTarget, this.#t) || e.relatedTarget && e.relatedTarget === this.#n || this.hide();
    }), t.addEventListener("click", (e) => {
      if (e.__IR_CONTEXT_MENU_ITEM__)
        try {
          this.onCommandButtonClick({
            ev: e,
            item: e.__IR_CONTEXT_MENU_ITEM__
          });
        } finally {
          this.hide();
        }
    }), t;
  }
  #a(t) {
    this.#t.firstChild && this.#t.removeChild(this.#t.firstChild), this.#t.append(
      m(
        t,
        !1,
        this.args.hiddenIcon ?? !h(t)
      )
    );
  }
  #r(t, e, a) {
    G(), this.#s = !0, setTimeout(() => {
      x("popover").appendChild(this.#t), u(t, this.#t, e, a), this.#t.focus(), this.#e?.destroy(), this.#e = C(this), this.#e.create();
    }, 0);
  }
  showAtPoint(t, e) {
    this.#r(b(t, e), "right-start", 0);
  }
  /**
   *
   * @param refElement floating 기준 요소
   * @param placement offset 방향
   * @param offsetPos 기본 값으로 8px offset을 가짐
   */
  showByElement(t, e, a = 8) {
    this.#n = t, this.#r(t, e, a);
  }
  hide() {
    this.isOpened !== !1 && (this.#s = !1, this.#n = null, this.#e?.destroy(), setTimeout(() => {
      this.#t.remove();
    }, 0));
  }
  destroy() {
    if (this.#i)
      throw new Error("Already destroyed.");
    this.hide(), this.#t.remove(), this.#i = !0, this.#e?.destroy(), c.splice(c.indexOf(this), 1);
  }
  updateItems(t) {
    const e = l(this.args.items);
    t(e), this.args.items = e, this.#a(e);
  }
  onCommandButtonClick(t) {
  }
  get isOpened() {
    return this.#s;
  }
}
function G() {
  c.forEach((i) => i.hide());
}
export {
  V as I
};
//# sourceMappingURL=index-COsSyEyZ.js.map
