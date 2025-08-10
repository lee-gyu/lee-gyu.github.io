import { c as X, g as D, d as L, o as V, f as q, s as K } from "./floating-C5P7I7tX.js";
import { ai as rt } from "./css-akUkFMHX.js";
import { b as nt } from "./outside-D1z8pt7M.js";
function At(r, e) {
  const t = document.createElement("i");
  return t.className = `ir-icon ${r}`, e && t.classList.add(e), t;
}
const Mt = (...r) => {
  const e = [];
  r.forEach(({ svg: n, name: o, masked: i = !1 }) => {
    const s = btoa(n), a = `.ir-icon--${o}`, c = `--ir-icon--${o}`;
    e.push(`
.ir-icon {
    ${c}: url("data:image/svg+xml;base64,${s}")
}`), i ? e.push(`
${a} {
    -webkit-mask-image: var(${c});
    mask-image: var(${c});
    background-image: none;
    background-color: none;
}`) : e.push(`
${a} {
    background: var(${c}) 0 / cover;
    -webkit-mask-image: none;
    mask-image: none;
    --ir-icon-foreground-color: transparent;
}`);
  });
  const t = document.createElement("style");
  t.innerHTML = e.join(`
`), document.head.appendChild(t);
}, Ft = (r, e) => "";
function $t(r) {
  return r.startsWith("ir-icon--") ? r : `ir-icon--${r}`;
}
class ot {
  isInit = !1;
  context = null;
  cacheMap = /* @__PURE__ */ new Map();
  curFontSize = "";
  curFontFamily = "";
  _offscreenCanvas = null;
  init() {
    this.isInit || (this.isInit = !0, this._offscreenCanvas = new OffscreenCanvas(0, 0), this.context = this._offscreenCanvas.getContext("2d"));
  }
  getContext() {
    if (this.init(), !this.context)
      throw new Error("Can't create canvas context");
    return this.context;
  }
  setFontStyle(e, t) {
    (this.curFontSize !== e || this.curFontFamily !== t) && (this.getContext().font = `${e} ${t}`, this.curFontSize = e, this.curFontFamily = t);
  }
  getCacheKey(e) {
    return `${this.curFontSize}_${this.curFontFamily}_${e}`;
  }
  _calculate(e) {
    return Math.ceil(this.getContext().measureText(e).width);
  }
  calculateWidth(e) {
    const t = this.getCacheKey(e);
    let n = this.cacheMap.get(t);
    return n === void 0 && (n = this._calculate(e), this.cacheMap.set(t, n)), n;
  }
}
let S = null;
function jt(r, e) {
  return S || (S = new ot()), S.setFontStyle(r, e), S;
}
function Rt(r, e, t) {
  return r < e ? e : r > t ? t : r;
}
function k(r, e = 0, t = 10) {
  const n = Number.parseInt(r ?? "", t);
  return Number.isNaN(n) ? e : n;
}
const it = () => {
  const r = document.createElement("div");
  return r.className = rt, {
    tooltipElement: r,
    updateText(e) {
      r.textContent = e;
    }
  };
}, E = /* @__PURE__ */ (() => {
  let r = null;
  return () => (r || (r = it()), r);
})(), st = 8;
let w = null;
const at = (r) => {
  if (r.refElement === void 0)
    throw new Error("refElement is required");
  const {
    refElement: e,
    offset: t = st,
    placement: n = "bottom",
    refMode: o = "element"
  } = r;
  let i = r.label ?? "", s = r.refElement;
  e.__IR_TOOLTIP_INSTANCE__?.destroy(), e.addEventListener("mousemove", g), e.addEventListener("mouseleave", m);
  const a = {
    show: c,
    hide: h,
    update: d,
    updateText: b,
    destroy: p,
    get text() {
      return i;
    },
    get refMode() {
      return o;
    },
    get placement() {
      return n;
    },
    get offset() {
      return t;
    },
    get refElement() {
      return e;
    }
  };
  return e.__IR_TOOLTIP_INSTANCE__ = a, a;
  function c() {
    return f(), a;
  }
  function h() {
    return m(), a;
  }
  function d() {
    return y(), a;
  }
  function b(l) {
    i = l, u() && E().updateText(l);
  }
  function u() {
    return w === a;
  }
  function p() {
    m(), e.removeEventListener("mousemove", g), e.removeEventListener("mouseleave", m);
  }
  function y() {
    const { tooltipElement: l } = E();
    X(s, l, {
      // Tooltip 배치 위치
      placement: n,
      strategy: "fixed",
      // 위치 좌표 수정 및 사용할 수 있는 유용한 데이터 제공
      middleware: [
        // refElement와 tooltipElement의 간격
        V(t),
        // 상하 스크롤 화면 overflow 방지
        q(),
        // 좌우 스크롤 화면 overflow 방지
        K({ padding: 5 })
      ]
    }).then(({ x, y: I }) => {
      l.style.left = `${x}px`, l.style.top = `${I}px`;
    });
  }
  function f() {
    if (i === "") {
      console.warn("tooltip text is empty!");
      return;
    }
    const { tooltipElement: l } = E();
    y(), b(i), D("popover").appendChild(l);
  }
  function m() {
    E().tooltipElement.remove(), w = null;
  }
  function g(l) {
    l.__EXECUTED_TOOLTIP__ || l.target instanceof HTMLElement && (o === "element" && w === a || (w = a, l.__EXECUTED_TOOLTIP__ = !0, o === "pointer" && (s = L(l.clientX, l.clientY)), f()));
  }
}, Ut = (r) => {
  const {
    selector: e,
    offset: t = 8
  } = r, n = Array.from(document.querySelectorAll(e)).filter((o) => o.dataset.title).map((o) => {
    const { title: i, placement: s = "bottom", ref: a = "element" } = o.dataset;
    return at({
      refElement: o,
      label: i,
      offset: t,
      /**
       * Placement 타입에 맞지 않는 문자열이 오는 경우, 적절하지 않은 위치로 표현되니 주의
       */
      placement: s,
      refMode: a
    });
  });
  return {
    destroy: () => {
      n.forEach((o) => o.destroy());
    },
    updateTextAll() {
      n.forEach((o) => {
        const i = o.refElement.dataset.title ?? "";
        o.text !== i && o.updateText(i);
      });
    },
    updateTextOne(o, i) {
      const s = n.find((a) => o === a.refElement);
      if (!s) {
        console.warn("Tooltip element not found");
        return;
      }
      i ? (o.dataset.title = i, s.updateText(i)) : s.updateText(o.dataset.title ?? "");
    }
  };
};
function ct(r, e, t, n) {
  X(r, e, {
    placement: t,
    strategy: "fixed",
    middleware: [
      V(n),
      q(),
      K({ padding: 5 })
    ]
  }).then(({ x: o, y: i, placement: s }) => {
    e.style.left = `${o}px`, e.style.top = `${i}px`, e.dataset.placement = s;
  });
}
function kt(r) {
  const {
    containerElement: e,
    placement: t = "bottom",
    offset: n = 8,
    interval: o = 0
  } = r;
  let i = null;
  const { tooltipElement: s, updateText: a } = E();
  function c(u) {
    return {
      text: u.dataset.irTooltipText ?? "",
      refMode: u.dataset.irTooltipRefMode ?? "element",
      placement: u.dataset.irTooltipPlacement ?? t,
      offset: k(u.dataset.irTooltipOffset, n),
      interval: k(u.dataset.irTooltipInterval, o)
    };
  }
  function h(u) {
    const {
      text: p,
      refMode: y,
      interval: f,
      placement: m,
      offset: g
    } = c(u);
    let l = null;
    const x = () => {
      if (!l)
        throw new Error("Reference element is not set");
      ct(l, s, m, g);
    }, I = () => {
      a(p), D("popover").appendChild(s), x();
    }, Q = () => {
      s.remove();
    }, tt = window.setTimeout(() => I(), f);
    return {
      refElement: u,
      setReferenceEl(et) {
        l = et;
      },
      updateLocation: x,
      get isPointerMode() {
        return y === "pointer";
      },
      cleanup() {
        clearTimeout(tt), i = null, Q();
      }
    };
  }
  const d = (u) => {
    const p = nt("[data-ir-tooltip]", ".ir-tooltip-container", u.target);
    if (!p || !(p instanceof HTMLElement)) {
      i?.cleanup();
      return;
    }
    if (i?.refElement === p) {
      i.isPointerMode && (i.setReferenceEl(L(u.clientX, u.clientY)), i.updateLocation());
      return;
    }
    i?.cleanup(), i = h(p), i.setReferenceEl(i.isPointerMode ? L(u.clientX, u.clientY) : p);
  }, b = () => {
    i?.cleanup();
  };
  return e.classList.add("ir-tooltip-container"), e.addEventListener("mousemove", d), e.addEventListener("mouseleave", b), {
    destroy() {
      i?.cleanup(), e.removeEventListener("mousemove", d), e.removeEventListener("mouseleave", b);
    },
    cleanup() {
      i?.cleanup();
    }
  };
}
const zt = {
  zIndex: {
    floating: "z-index--floating",
    dialog: "z-index--dialog",
    popover: "z-index--popover",
    toast: "z-index--toast",
    message: "z-index--message"
  }
};
function Ht(r) {
  return new Promise((e, t) => {
    const n = new FileReader();
    n.onload = () => e(n.result), n.onerror = () => t(n.error), n.readAsText(r);
  });
}
const ut = /* @__PURE__ */ (() => {
  let r = null;
  return () => r || (r = document.createElement("textarea"), r.style.position = "fixed", r.style.opacity = "0", r.style.top = "0", r.style.left = "0", r.style.zIndex = "-1", r.style.outline = "0 none", r.style.overflow = "hidden", r.setAttribute("tabindex", "-1"), r.setAttribute("autocomplete", "off"), r.setAttribute("wrap", "hard"), r);
})(), Yt = {
  async check(r) {
    return (await navigator.permissions.query({ name: r })).state;
  },
  getText() {
    return navigator.clipboard.readText();
  },
  read() {
    return navigator.clipboard.read();
  },
  setText(r) {
    const e = ut();
    document.body.appendChild(e), e.focus(), e.value = r || "\0", e.select(), document.execCommand("copy"), e.remove();
  }
};
var A = function(r, e) {
  return A = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, A(r, e);
};
function _(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  A(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function M(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function F(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var n = t.call(r), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function $(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, o = e.length, i; n < o; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return r.concat(i || Array.prototype.slice.call(e));
}
function v(r) {
  return typeof r == "function";
}
function W(r) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = r(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var P = W(function(r) {
  return function(t) {
    r(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function j(r, e) {
  if (r) {
    var t = r.indexOf(e);
    0 <= t && r.splice(t, 1);
  }
}
var C = function() {
  function r(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return r.prototype.unsubscribe = function() {
    var e, t, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var a = M(s), c = a.next(); !c.done; c = a.next()) {
              var h = c.value;
              h.remove(this);
            }
          } catch (f) {
            e = { error: f };
          } finally {
            try {
              c && !c.done && (t = a.return) && t.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (v(d))
        try {
          d();
        } catch (f) {
          i = f instanceof P ? f.errors : [f];
        }
      var b = this._finalizers;
      if (b) {
        this._finalizers = null;
        try {
          for (var u = M(b), p = u.next(); !p.done; p = u.next()) {
            var y = p.value;
            try {
              z(y);
            } catch (f) {
              i = i ?? [], f instanceof P ? i = $($([], F(i)), F(f.errors)) : i.push(f);
            }
          }
        } catch (f) {
          n = { error: f };
        } finally {
          try {
            p && !p.done && (o = u.return) && o.call(u);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (i)
        throw new P(i);
    }
  }, r.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        z(e);
      else {
        if (e instanceof r) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, r.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, r.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, r.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && j(t, e);
  }, r.prototype.remove = function(e) {
    var t = this._finalizers;
    t && j(t, e), e instanceof r && e._removeParent(this);
  }, r.EMPTY = function() {
    var e = new r();
    return e.closed = !0, e;
  }(), r;
}(), Z = C.EMPTY;
function G(r) {
  return r instanceof C || r && "closed" in r && v(r.remove) && v(r.add) && v(r.unsubscribe);
}
function z(r) {
  v(r) ? r() : r.unsubscribe();
}
var lt = {
  Promise: void 0
}, ft = {
  setTimeout: function(r, e) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setTimeout.apply(void 0, $([r, e], F(t)));
  },
  clearTimeout: function(r) {
    return clearTimeout(r);
  },
  delegate: void 0
};
function pt(r) {
  ft.setTimeout(function() {
    throw r;
  });
}
function H() {
}
function O(r) {
  r();
}
var U = function(r) {
  _(e, r);
  function e(t) {
    var n = r.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, G(t) && t.add(n)) : n.destination = vt, n;
  }
  return e.create = function(t, n, o) {
    return new R(t, n, o);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(C), ht = function() {
  function r(e) {
    this.partialObserver = e;
  }
  return r.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (n) {
        T(n);
      }
  }, r.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (n) {
        T(n);
      }
    else
      T(e);
  }, r.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        T(t);
      }
  }, r;
}(), R = function(r) {
  _(e, r);
  function e(t, n, o) {
    var i = r.call(this) || this, s;
    return v(t) || !t ? s = {
      next: t ?? void 0,
      error: n ?? void 0,
      complete: o ?? void 0
    } : s = t, i.destination = new ht(s), i;
  }
  return e;
}(U);
function T(r) {
  pt(r);
}
function dt(r) {
  throw r;
}
var vt = {
  closed: !0,
  next: H,
  error: dt,
  complete: H
}, bt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function yt(r) {
  return r;
}
function mt(r) {
  return r.length === 0 ? yt : r.length === 1 ? r[0] : function(t) {
    return r.reduce(function(n, o) {
      return o(n);
    }, t);
  };
}
var Y = function() {
  function r(e) {
    e && (this._subscribe = e);
  }
  return r.prototype.lift = function(e) {
    var t = new r();
    return t.source = this, t.operator = e, t;
  }, r.prototype.subscribe = function(e, t, n) {
    var o = this, i = Et(e) ? e : new R(e, t, n);
    return O(function() {
      var s = o, a = s.operator, c = s.source;
      i.add(a ? a.call(i, c) : c ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, r.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, r.prototype.forEach = function(e, t) {
    var n = this;
    return t = B(t), new t(function(o, i) {
      var s = new R({
        next: function(a) {
          try {
            e(a);
          } catch (c) {
            i(c), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(s);
    });
  }, r.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, r.prototype[bt] = function() {
    return this;
  }, r.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return mt(e)(this);
  }, r.prototype.toPromise = function(e) {
    var t = this;
    return e = B(e), new e(function(n, o) {
      var i;
      t.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return n(i);
      });
    });
  }, r.create = function(e) {
    return new r(e);
  }, r;
}();
function B(r) {
  var e;
  return (e = r ?? lt.Promise) !== null && e !== void 0 ? e : Promise;
}
function _t(r) {
  return r && v(r.next) && v(r.error) && v(r.complete);
}
function Et(r) {
  return r && r instanceof U || _t(r) && G(r);
}
function gt(r) {
  return v(r?.lift);
}
function xt(r) {
  return function(e) {
    if (gt(e))
      return e.lift(function(t) {
        try {
          return r(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function St(r, e, t, n, o) {
  return new wt(r, e, t, n, o);
}
var wt = function(r) {
  _(e, r);
  function e(t, n, o, i, s, a) {
    var c = r.call(this, t) || this;
    return c.onFinalize = s, c.shouldUnsubscribe = a, c._next = n ? function(h) {
      try {
        n(h);
      } catch (d) {
        t.error(d);
      }
    } : r.prototype._next, c._error = i ? function(h) {
      try {
        i(h);
      } catch (d) {
        t.error(d);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._error, c._complete = o ? function() {
      try {
        o();
      } catch (h) {
        t.error(h);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._complete, c;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      r.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
}(U), Tt = W(function(r) {
  return function() {
    r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), J = function(r) {
  _(e, r);
  function e() {
    var t = r.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var n = new N(this, this);
    return n.operator = t, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Tt();
  }, e.prototype.next = function(t) {
    var n = this;
    O(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = M(n.currentObservers), a = s.next(); !a.done; a = s.next()) {
            var c = a.value;
            c.next(t);
          }
        } catch (h) {
          o = { error: h };
        } finally {
          try {
            a && !a.done && (i = s.return) && i.call(s);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var n = this;
    O(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var o = n.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    O(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), r.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, e.prototype._innerSubscribe = function(t) {
    var n = this, o = this, i = o.hasError, s = o.isStopped, a = o.observers;
    return i || s ? Z : (this.currentObservers = null, a.push(t), new C(function() {
      n.currentObservers = null, j(a, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var n = this, o = n.hasError, i = n.thrownError, s = n.isStopped;
    o ? t.error(i) : s && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new Y();
    return t.source = this, t;
  }, e.create = function(t, n) {
    return new N(t, n);
  }, e;
}(Y), N = function(r) {
  _(e, r);
  function e(t, n) {
    var o = r.call(this) || this;
    return o.destination = t, o.source = n, o;
  }
  return e.prototype.next = function(t) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, t);
  }, e.prototype.error = function(t) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, t);
  }, e.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, e.prototype._subscribe = function(t) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && o !== void 0 ? o : Z;
  }, e;
}(J), Ot = function(r) {
  _(e, r);
  function e(t) {
    var n = r.call(this) || this;
    return n._value = t, n;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(t) {
    var n = r.prototype._subscribe.call(this, t);
    return !n.closed && t.next(this._value), n;
  }, e.prototype.getValue = function() {
    var t = this, n = t.hasError, o = t.thrownError, i = t._value;
    if (n)
      throw o;
    return this._throwIfClosed(), i;
  }, e.prototype.next = function(t) {
    r.prototype.next.call(this, this._value = t);
  }, e;
}(J);
function Ct() {
  return xt(function(r, e) {
    var t, n = !1;
    r.subscribe(St(e, function(o) {
      var i = t;
      t = o, n && e.next([i, o]), n = !0;
    }));
  });
}
class Bt {
  _state;
  _pipe;
  _value;
  _subscriptionList = [];
  constructor(e, t) {
    this._state = new Ot(e), this._pipe = t ? t(this._state) : this._state, this._value = e, this._pipe.pipe(Ct()).subscribe(([n, o]) => {
      this._value = o, this._subscriptionList.forEach((i) => {
        try {
          i(n, o);
        } catch (s) {
          console.error("ReactiveState Subscription Error", this.constructor.name, s);
        }
      });
    });
  }
  addSubscription(e) {
    this._subscriptionList.push(e);
  }
  removeSubscription(e) {
    const t = this._subscriptionList.indexOf(e);
    t >= 0 ? this._subscriptionList.splice(t, 1) : console.warn("ReactiveState.removeSubscription: subscriber not found");
  }
  next(e) {
    this._state.next(e);
  }
  get value() {
    return this._value;
  }
}
export {
  Yt as C,
  Bt as R,
  At as a,
  at as b,
  zt as c,
  Rt as d,
  $t as e,
  kt as f,
  jt as g,
  Mt as h,
  Ft as i,
  E as j,
  Ut as k,
  Ht as l,
  St as m,
  xt as o,
  k as p
};
//# sourceMappingURL=rx-state-C3nw7N-x.js.map
