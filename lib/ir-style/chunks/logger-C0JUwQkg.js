function c() {
  return document.documentElement.getAttribute("data-theme") ?? "light";
}
function g(o) {
  document.documentElement.setAttribute("data-theme", o), window.dispatchEvent(new CustomEvent("theme-changed", { detail: o }));
}
const t = {
  ERROR: 0,
  WARNING: 1,
  DEBUG: 2,
  INFO: 3
}, n = t.ERROR, l = t.WARNING, i = t.DEBUG, L = t.INFO, E = Object.keys(t);
class r {
  id;
  // error = 0, warning = 1, debug = 2, info = 3
  _logLevel;
  constructor(e, s = "ERROR") {
    this.id = e, this._logLevel = t[s];
  }
  get logLevel() {
    return E[this._logLevel];
  }
  set logLevel(e) {
    this._logLevel = t[e];
  }
  error(...e) {
    this._logLevel >= n && console.error(this.id, ...e);
  }
  warn(...e) {
    this._logLevel >= l && console.warn(this.id, ...e);
  }
  debug(...e) {
    this._logLevel >= i && console.debug(this.id, ...e);
  }
  info(...e) {
    this._logLevel >= L && console.info(this.id, ...e);
  }
}
export {
  r as L,
  c as g,
  g as s
};
//# sourceMappingURL=logger-C0JUwQkg.js.map
