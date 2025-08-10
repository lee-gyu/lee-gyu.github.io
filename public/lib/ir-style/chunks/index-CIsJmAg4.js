import { i as a } from "./env-C8721KGO.js";
import { s as g, g as u, L as m } from "./logger-C0JUwQkg.js";
import { v as d } from "./v4-CKZ6klMF.js";
function _(s) {
  let e = null;
  return () => (e === null && (e = s()), e);
}
const v = {
  version: "2.20.0"
};
function b() {
  return {
    getCurrentTheme: u,
    setTheme: g,
    get irStyleVersion() {
      return v.version;
    },
    getComponent(s) {
      return i().get(s);
    },
    getComponents(s) {
      return i().getComponents(s);
    }
  };
}
a() && Object.assign(window, { __IR_DEBUG__: b() });
class p {
  _componentDict = {};
  delete(e) {
    delete this._componentDict[e];
  }
  register(e) {
    this._componentDict[e.uuid] = e;
  }
  get(e) {
    return this._componentDict[e] ?? null;
  }
  replace(e, t) {
    this.get(e)?.destroy(), this.register(t);
  }
  clear() {
    [...Object.values(this._componentDict)].forEach((e) => e.destroy());
  }
  getComponents(e) {
    return Object.values(this._componentDict).filter((t) => t && (e === void 0 || t.componentLabel === e));
  }
}
const i = _(() => new p()), f = 12, E = [
  "has-both-scroll",
  "has-vertical-scroll",
  "has-horizontal-scroll",
  ""
];
class I {
  contextElement;
  _coreElements;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _globalEvents;
  _logger;
  _componentIdentifier;
  _resizeObserver;
  #e = !1;
  constructor({ contextElement: e }) {
    this.contextElement = e, this._coreElements = [], this._globalEvents = [], this.componentLabel && (e.dataset.componentLabel = this.componentLabel), this.hasUUID ? i().replace(this.uuid, this) : this.initUUID(), this._componentIdentifier = `${Object.getPrototypeOf(this).constructor.name}::${this.uuid}`, this._logger = new m(this._componentIdentifier, "WARNING");
  }
  get hasUUID() {
    return this.contextElement.getAttribute("data-uuid") != null;
  }
  get uuid() {
    return this.contextElement.getAttribute("data-uuid") || "";
  }
  get componentLabel() {
    return "";
  }
  get isDestroyed() {
    return this.#e;
  }
  get logger() {
    return this._logger;
  }
  get contextWidth() {
    return this.contextElement.scrollWidth;
  }
  get contextHeight() {
    return this.contextElement.scrollHeight;
  }
  destroy() {
    this._coreElements.forEach((e) => e.remove()), this._globalEvents.forEach(([e, t, n, r]) => e.removeEventListener(t, n, r)), this._resizeObserver?.disconnect(), this.#e = !0, this.onDestroy(), this._coreElements.length = 0, this._globalEvents.length = 0, this._resizeObserver = void 0, i().delete(this.uuid);
  }
  resizeObserve(e) {
    this._resizeObserver?.disconnect(), this._resizeObserver = new ResizeObserver(e), this._resizeObserver.observe(this.contextElement);
  }
  // destroy() 호출 시점에 같이 정리되는 엘리먼트 등록
  // 사용케이스: contextElement가 제거되어도 제거 되지 않는 요소 등록
  addCoreElement(e) {
    return this._coreElements.push(e), e;
  }
  /**
   * destroy() 호출 시점에 같이 정리되어야 하는 이벤트 등록
   * 해당 이벤트 처리 요소가 contextElement 내부 자식 요소가 아닌 경우에 사용
   */
  addGlobalEventListener(e, t, n, r) {
    this._globalEvents.push([e, t, n, r]), e.addEventListener(t, n, r);
  }
  /**
   * destroy 호출 시점에 같이 정리되어야 하는 이벤트 등록
   */
  onDestroy() {
  }
  getScrollCls(e, t) {
    return e && t ? "has-both-scroll" : e ? "has-vertical-scroll" : t ? "has-horizontal-scroll" : "";
  }
  generateScrollBarClass() {
    const { contextElement: e, contextHeight: t, contextWidth: n } = this, r = t > e.clientHeight + 1, c = n > e.clientWidth + 1, o = this.getScrollCls(r, c);
    if (e.classList.contains(o)) return;
    const l = E.find((h) => e.classList.contains(h));
    l && e.classList.remove(l), o && e.classList.add(o);
  }
  initUUID() {
    if (!this.hasUUID) {
      const e = d().replace(/-/g, "").substring(0, f);
      this.contextElement.setAttribute("data-uuid", e), i().register(this);
    }
  }
}
export {
  I,
  i as g
};
//# sourceMappingURL=index-CIsJmAg4.js.map
