import "./chunks/_init-DX98z8UA.js";
import { a as ue } from "./chunks/asserts-CpwDJsre.js";
import { c as On } from "./chunks/clone-CMP76bLO.js";
import { L as Sn } from "./chunks/logger-C0JUwQkg.js";
import { i as Cn, r as ur, w as fr } from "./chunks/in-memory-clipboard-CBDV7nbf.js";
import { e as st, b as gr } from "./chunks/outside-D1z8pt7M.js";
import { a as Xe, g as Fe, b as Ye, e as pr, d as _r } from "./chunks/image-Y3tFDdOU.js";
import { I as yr } from "./chunks/index-CIsJmAg4.js";
function mr(n, t) {
  return {
    forEach(e) {
      const r = Math.min(n.length, t.length);
      for (let i = 0; i < r; i++)
        e(n[i], t[i]);
    }
  };
}
var br = { value: () => {
} };
function oe() {
  for (var n = 0, t = arguments.length, e = {}, r; n < t; ++n) {
    if (!(r = arguments[n] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Wt(e);
}
function Wt(n) {
  this._ = n;
}
function wr(n, t) {
  return n.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !t.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Wt.prototype = oe.prototype = {
  constructor: Wt,
  on: function(n, t) {
    var e = this._, r = wr(n + "", e), i, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; ) if ((i = (n = r[o]).type) && (i = xr(e[i], n.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < s; )
      if (i = (n = r[o]).type) e[i] = Be(e[i], n.name, t);
      else if (t == null) for (i in e) e[i] = Be(e[i], n.name, null);
    return this;
  },
  copy: function() {
    var n = {}, t = this._;
    for (var e in t) n[e] = t[e].slice();
    return new Wt(n);
  },
  call: function(n, t) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    for (o = this._[n], r = 0, i = o.length; r < i; ++r) o[r].value.apply(t, e);
  },
  apply: function(n, t, e) {
    if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    for (var r = this._[n], i = 0, o = r.length; i < o; ++i) r[i].value.apply(t, e);
  }
};
function xr(n, t) {
  for (var e = 0, r = n.length, i; e < r; ++e)
    if ((i = n[e]).name === t)
      return i.value;
}
function Be(n, t, e) {
  for (var r = 0, i = n.length; r < i; ++r)
    if (n[r].name === t) {
      n[r] = br, n = n.slice(0, r).concat(n.slice(r + 1));
      break;
    }
  return e != null && n.push({ name: t, value: e }), n;
}
var be = "http://www.w3.org/1999/xhtml";
const Ve = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: be,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function se(n) {
  var t = n += "", e = t.indexOf(":");
  return e >= 0 && (t = n.slice(0, e)) !== "xmlns" && (n = n.slice(e + 1)), Ve.hasOwnProperty(t) ? { space: Ve[t], local: n } : n;
}
function vr(n) {
  return function() {
    var t = this.ownerDocument, e = this.namespaceURI;
    return e === be && t.documentElement.namespaceURI === be ? t.createElement(n) : t.createElementNS(e, n);
  };
}
function Or(n) {
  return function() {
    return this.ownerDocument.createElementNS(n.space, n.local);
  };
}
function Mn(n) {
  var t = se(n);
  return (t.local ? Or : vr)(t);
}
function Sr() {
}
function Ie(n) {
  return n == null ? Sr : function() {
    return this.querySelector(n);
  };
}
function Cr(n) {
  typeof n != "function" && (n = Ie(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = new Array(s), c, l, h = 0; h < s; ++h)
      (c = o[h]) && (l = n.call(c, c.__data__, h, o)) && ("__data__" in c && (l.__data__ = c.__data__), a[h] = l);
  return new L(r, this._parents);
}
function Mr(n) {
  return n == null ? [] : Array.isArray(n) ? n : Array.from(n);
}
function jr() {
  return [];
}
function jn(n) {
  return n == null ? jr : function() {
    return this.querySelectorAll(n);
  };
}
function Er(n) {
  return function() {
    return Mr(n.apply(this, arguments));
  };
}
function kr(n) {
  typeof n == "function" ? n = Er(n) : n = jn(n);
  for (var t = this._groups, e = t.length, r = [], i = [], o = 0; o < e; ++o)
    for (var s = t[o], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && (r.push(n.call(c, c.__data__, l, s)), i.push(c));
  return new L(r, i);
}
function En(n) {
  return function() {
    return this.matches(n);
  };
}
function kn(n) {
  return function(t) {
    return t.matches(n);
  };
}
var Ir = Array.prototype.find;
function Tr(n) {
  return function() {
    return Ir.call(this.children, n);
  };
}
function Ar() {
  return this.firstElementChild;
}
function Nr(n) {
  return this.select(n == null ? Ar : Tr(typeof n == "function" ? n : kn(n)));
}
var zr = Array.prototype.filter;
function Dr() {
  return Array.from(this.children);
}
function Pr(n) {
  return function() {
    return zr.call(this.children, n);
  };
}
function $r(n) {
  return this.selectAll(n == null ? Dr : Pr(typeof n == "function" ? n : kn(n)));
}
function Rr(n) {
  typeof n != "function" && (n = En(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = [], c, l = 0; l < s; ++l)
      (c = o[l]) && n.call(c, c.__data__, l, o) && a.push(c);
  return new L(r, this._parents);
}
function In(n) {
  return new Array(n.length);
}
function Lr() {
  return new L(this._enter || this._groups.map(In), this._parents);
}
function Zt(n, t) {
  this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = t;
}
Zt.prototype = {
  constructor: Zt,
  appendChild: function(n) {
    return this._parent.insertBefore(n, this._next);
  },
  insertBefore: function(n, t) {
    return this._parent.insertBefore(n, t);
  },
  querySelector: function(n) {
    return this._parent.querySelector(n);
  },
  querySelectorAll: function(n) {
    return this._parent.querySelectorAll(n);
  }
};
function Hr(n) {
  return function() {
    return n;
  };
}
function Xr(n, t, e, r, i, o) {
  for (var s = 0, a, c = t.length, l = o.length; s < l; ++s)
    (a = t[s]) ? (a.__data__ = o[s], r[s] = a) : e[s] = new Zt(n, o[s]);
  for (; s < c; ++s)
    (a = t[s]) && (i[s] = a);
}
function Fr(n, t, e, r, i, o, s) {
  var a, c, l = /* @__PURE__ */ new Map(), h = t.length, f = o.length, u = new Array(h), _;
  for (a = 0; a < h; ++a)
    (c = t[a]) && (u[a] = _ = s.call(c, c.__data__, a, t) + "", l.has(_) ? i[a] = c : l.set(_, c));
  for (a = 0; a < f; ++a)
    _ = s.call(n, o[a], a, o) + "", (c = l.get(_)) ? (r[a] = c, c.__data__ = o[a], l.delete(_)) : e[a] = new Zt(n, o[a]);
  for (a = 0; a < h; ++a)
    (c = t[a]) && l.get(u[a]) === c && (i[a] = c);
}
function Yr(n) {
  return n.__data__;
}
function Br(n, t) {
  if (!arguments.length) return Array.from(this, Yr);
  var e = t ? Fr : Xr, r = this._parents, i = this._groups;
  typeof n != "function" && (n = Hr(n));
  for (var o = i.length, s = new Array(o), a = new Array(o), c = new Array(o), l = 0; l < o; ++l) {
    var h = r[l], f = i[l], u = f.length, _ = Vr(n.call(h, h && h.__data__, l, r)), x = _.length, C = a[l] = new Array(x), I = s[l] = new Array(x), b = c[l] = new Array(u);
    e(h, f, C, I, b, _, t);
    for (var P = 0, N = 0, p, S; P < x; ++P)
      if (p = C[P]) {
        for (P >= N && (N = P + 1); !(S = I[N]) && ++N < x; ) ;
        p._next = S || null;
      }
  }
  return s = new L(s, r), s._enter = a, s._exit = c, s;
}
function Vr(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function Ur() {
  return new L(this._exit || this._groups.map(In), this._parents);
}
function Wr(n, t, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof n == "function" ? (r = n(r), r && (r = r.selection())) : r = r.append(n + ""), t != null && (i = t(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function qr(n) {
  for (var t = n.selection ? n.selection() : n, e = this._groups, r = t._groups, i = e.length, o = r.length, s = Math.min(i, o), a = new Array(i), c = 0; c < s; ++c)
    for (var l = e[c], h = r[c], f = l.length, u = a[c] = new Array(f), _, x = 0; x < f; ++x)
      (_ = l[x] || h[x]) && (u[x] = _);
  for (; c < i; ++c)
    a[c] = e[c];
  return new L(a, this._parents);
}
function Gr() {
  for (var n = this._groups, t = -1, e = n.length; ++t < e; )
    for (var r = n[t], i = r.length - 1, o = r[i], s; --i >= 0; )
      (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Kr(n) {
  n || (n = Zr);
  function t(f, u) {
    return f && u ? n(f.__data__, u.__data__) : !f - !u;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var s = e[o], a = s.length, c = i[o] = new Array(a), l, h = 0; h < a; ++h)
      (l = s[h]) && (c[h] = l);
    c.sort(t);
  }
  return new L(i, this._parents).order();
}
function Zr(n, t) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Jr() {
  var n = arguments[0];
  return arguments[0] = this, n.apply(null, arguments), this;
}
function Qr() {
  return Array.from(this);
}
function ti() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length; i < o; ++i) {
      var s = r[i];
      if (s) return s;
    }
  return null;
}
function ei() {
  let n = 0;
  for (const t of this) ++n;
  return n;
}
function ni() {
  return !this.node();
}
function ri(n) {
  for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
    for (var i = t[e], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && n.call(a, a.__data__, o, i);
  return this;
}
function ii(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function oi(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function si(n, t) {
  return function() {
    this.setAttribute(n, t);
  };
}
function ai(n, t) {
  return function() {
    this.setAttributeNS(n.space, n.local, t);
  };
}
function ci(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttribute(n) : this.setAttribute(n, e);
  };
}
function li(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
  };
}
function hi(n, t) {
  var e = se(n);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((t == null ? e.local ? oi : ii : typeof t == "function" ? e.local ? li : ci : e.local ? ai : si)(e, t));
}
function Tn(n) {
  return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
}
function di(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function ui(n, t, e) {
  return function() {
    this.style.setProperty(n, t, e);
  };
}
function fi(n, t, e) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
  };
}
function gi(n, t, e) {
  return arguments.length > 1 ? this.each((t == null ? di : typeof t == "function" ? fi : ui)(n, t, e ?? "")) : xt(this.node(), n);
}
function xt(n, t) {
  return n.style.getPropertyValue(t) || Tn(n).getComputedStyle(n, null).getPropertyValue(t);
}
function pi(n) {
  return function() {
    delete this[n];
  };
}
function _i(n, t) {
  return function() {
    this[n] = t;
  };
}
function yi(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    e == null ? delete this[n] : this[n] = e;
  };
}
function mi(n, t) {
  return arguments.length > 1 ? this.each((t == null ? pi : typeof t == "function" ? yi : _i)(n, t)) : this.node()[n];
}
function An(n) {
  return n.trim().split(/^|\s+/);
}
function Te(n) {
  return n.classList || new Nn(n);
}
function Nn(n) {
  this._node = n, this._names = An(n.getAttribute("class") || "");
}
Nn.prototype = {
  add: function(n) {
    var t = this._names.indexOf(n);
    t < 0 && (this._names.push(n), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(n) {
    var t = this._names.indexOf(n);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(n) {
    return this._names.indexOf(n) >= 0;
  }
};
function zn(n, t) {
  for (var e = Te(n), r = -1, i = t.length; ++r < i; ) e.add(t[r]);
}
function Dn(n, t) {
  for (var e = Te(n), r = -1, i = t.length; ++r < i; ) e.remove(t[r]);
}
function bi(n) {
  return function() {
    zn(this, n);
  };
}
function wi(n) {
  return function() {
    Dn(this, n);
  };
}
function xi(n, t) {
  return function() {
    (t.apply(this, arguments) ? zn : Dn)(this, n);
  };
}
function vi(n, t) {
  var e = An(n + "");
  if (arguments.length < 2) {
    for (var r = Te(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? xi : t ? bi : wi)(e, t));
}
function Oi() {
  this.textContent = "";
}
function Si(n) {
  return function() {
    this.textContent = n;
  };
}
function Ci(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Mi(n) {
  return arguments.length ? this.each(n == null ? Oi : (typeof n == "function" ? Ci : Si)(n)) : this.node().textContent;
}
function ji() {
  this.innerHTML = "";
}
function Ei(n) {
  return function() {
    this.innerHTML = n;
  };
}
function ki(n) {
  return function() {
    var t = n.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Ii(n) {
  return arguments.length ? this.each(n == null ? ji : (typeof n == "function" ? ki : Ei)(n)) : this.node().innerHTML;
}
function Ti() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ai() {
  return this.each(Ti);
}
function Ni() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function zi() {
  return this.each(Ni);
}
function Di(n) {
  var t = typeof n == "function" ? n : Mn(n);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Pi() {
  return null;
}
function $i(n, t) {
  var e = typeof n == "function" ? n : Mn(n), r = t == null ? Pi : typeof t == "function" ? t : Ie(t);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ri() {
  var n = this.parentNode;
  n && n.removeChild(this);
}
function Li() {
  return this.each(Ri);
}
function Hi() {
  var n = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Xi() {
  var n = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(n, this.nextSibling) : n;
}
function Fi(n) {
  return this.select(n ? Xi : Hi);
}
function Yi(n) {
  return arguments.length ? this.property("__data__", n) : this.node().__data__;
}
function Bi(n) {
  return function(t) {
    n.call(this, t, this.__data__);
  };
}
function Vi(n) {
  return n.trim().split(/^|\s+/).map(function(t) {
    var e = "", r = t.indexOf(".");
    return r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: e };
  });
}
function Ui(n) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var e = 0, r = -1, i = t.length, o; e < i; ++e)
        o = t[e], (!n.type || o.type === n.type) && o.name === n.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Wi(n, t, e) {
  return function() {
    var r = this.__on, i, o = Bi(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((i = r[s]).type === n.type && i.name === n.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = t;
          return;
        }
    }
    this.addEventListener(n.type, o, e), i = { type: n.type, name: n.name, value: t, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function qi(n, t, e) {
  var r = Vi(n + ""), i, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, l = a.length, h; c < l; ++c)
        for (i = 0, h = a[c]; i < o; ++i)
          if ((s = r[i]).type === h.type && s.name === h.name)
            return h.value;
    }
    return;
  }
  for (a = t ? Wi : Ui, i = 0; i < o; ++i) this.each(a(r[i], t, e));
  return this;
}
function Pn(n, t, e) {
  var r = Tn(n), i = r.CustomEvent;
  typeof i == "function" ? i = new i(t, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(t, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(t, !1, !1)), n.dispatchEvent(i);
}
function Gi(n, t) {
  return function() {
    return Pn(this, n, t);
  };
}
function Ki(n, t) {
  return function() {
    return Pn(this, n, t.apply(this, arguments));
  };
}
function Zi(n, t) {
  return this.each((typeof t == "function" ? Ki : Gi)(n, t));
}
function* Ji() {
  for (var n = this._groups, t = 0, e = n.length; t < e; ++t)
    for (var r = n[t], i = 0, o = r.length, s; i < o; ++i)
      (s = r[i]) && (yield s);
}
var $n = [null];
function L(n, t) {
  this._groups = n, this._parents = t;
}
function Nt() {
  return new L([[document.documentElement]], $n);
}
function Qi() {
  return this;
}
L.prototype = Nt.prototype = {
  constructor: L,
  select: Cr,
  selectAll: kr,
  selectChild: Nr,
  selectChildren: $r,
  filter: Rr,
  data: Br,
  enter: Lr,
  exit: Ur,
  join: Wr,
  merge: qr,
  selection: Qi,
  order: Gr,
  sort: Kr,
  call: Jr,
  nodes: Qr,
  node: ti,
  size: ei,
  empty: ni,
  each: ri,
  attr: hi,
  style: gi,
  property: mi,
  classed: vi,
  text: Mi,
  html: Ii,
  raise: Ai,
  lower: zi,
  append: Di,
  insert: $i,
  remove: Li,
  clone: Fi,
  datum: Yi,
  on: qi,
  dispatch: Zi,
  [Symbol.iterator]: Ji
};
function V(n) {
  return typeof n == "string" ? new L([[document.querySelector(n)]], [document.documentElement]) : new L([[n]], $n);
}
function to(n) {
  let t;
  for (; t = n.sourceEvent; ) n = t;
  return n;
}
function tt(n, t) {
  if (n = to(n), t === void 0 && (t = n.currentTarget), t) {
    var e = t.ownerSVGElement || t;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
    }
  }
  return [n.pageX, n.pageY];
}
const eo = { passive: !1 }, Et = { capture: !0, passive: !1 };
function fe(n) {
  n.stopImmediatePropagation();
}
function bt(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Rn(n) {
  var t = n.document.documentElement, e = V(n).on("dragstart.drag", bt, Et);
  "onselectstart" in t ? e.on("selectstart.drag", bt, Et) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ln(n, t) {
  var e = n.document.documentElement, r = V(n).on("dragstart.drag", null);
  t && (r.on("click.drag", bt, Et), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const $t = (n) => () => n;
function we(n, {
  sourceEvent: t,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: s,
  y: a,
  dx: c,
  dy: l,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
we.prototype.on = function() {
  var n = this._.on.apply(this._, arguments);
  return n === this._ ? this : n;
};
function no(n) {
  return !n.ctrlKey && !n.button;
}
function ro() {
  return this.parentNode;
}
function io(n, t) {
  return t ?? { x: n.x, y: n.y };
}
function oo() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function at() {
  var n = no, t = ro, e = io, r = oo, i = {}, o = oe("start", "drag", "end"), s = 0, a, c, l, h, f = 0;
  function u(p) {
    p.on("mousedown.drag", _).filter(r).on("touchstart.drag", I).on("touchmove.drag", b, eo).on("touchend.drag touchcancel.drag", P).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function _(p, S) {
    if (!(h || !n.call(this, p, S))) {
      var M = N(this, t.call(this, p, S), p, S, "mouse");
      M && (V(p.view).on("mousemove.drag", x, Et).on("mouseup.drag", C, Et), Rn(p.view), fe(p), l = !1, a = p.clientX, c = p.clientY, M("start", p));
    }
  }
  function x(p) {
    if (bt(p), !l) {
      var S = p.clientX - a, M = p.clientY - c;
      l = S * S + M * M > f;
    }
    i.mouse("drag", p);
  }
  function C(p) {
    V(p.view).on("mousemove.drag mouseup.drag", null), Ln(p.view, l), bt(p), i.mouse("end", p);
  }
  function I(p, S) {
    if (n.call(this, p, S)) {
      var M = p.changedTouches, E = t.call(this, p, S), z = M.length, R, X;
      for (R = 0; R < z; ++R)
        (X = N(this, E, p, S, M[R].identifier, M[R])) && (fe(p), X("start", p, M[R]));
    }
  }
  function b(p) {
    var S = p.changedTouches, M = S.length, E, z;
    for (E = 0; E < M; ++E)
      (z = i[S[E].identifier]) && (bt(p), z("drag", p, S[E]));
  }
  function P(p) {
    var S = p.changedTouches, M = S.length, E, z;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), E = 0; E < M; ++E)
      (z = i[S[E].identifier]) && (fe(p), z("end", p, S[E]));
  }
  function N(p, S, M, E, z, R) {
    var X = o.copy(), H = tt(R || M, S), Dt, Pt, d;
    if ((d = e.call(p, new we("beforestart", {
      sourceEvent: M,
      target: u,
      identifier: z,
      active: s,
      x: H[0],
      y: H[1],
      dx: 0,
      dy: 0,
      dispatch: X
    }), E)) != null)
      return Dt = d.x - H[0] || 0, Pt = d.y - H[1] || 0, function y(g, m, w) {
        var v = H, O;
        switch (g) {
          case "start":
            i[z] = y, O = s++;
            break;
          case "end":
            delete i[z], --s;
          // falls through
          case "drag":
            H = tt(w || m, S), O = s;
            break;
        }
        X.call(
          g,
          p,
          new we(g, {
            sourceEvent: m,
            subject: d,
            target: u,
            identifier: z,
            active: O,
            x: H[0] + Dt,
            y: H[1] + Pt,
            dx: H[0] - v[0],
            dy: H[1] - v[1],
            dispatch: X
          }),
          E
        );
      };
  }
  return u.filter = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : $t(!!p), u) : n;
  }, u.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : $t(p), u) : t;
  }, u.subject = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : $t(p), u) : e;
  }, u.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : $t(!!p), u) : r;
  }, u.on = function() {
    var p = o.on.apply(o, arguments);
    return p === o ? u : p;
  }, u.clickDistance = function(p) {
    return arguments.length ? (f = (p = +p) * p, u) : Math.sqrt(f);
  }, u;
}
function Ae(n, t, e) {
  n.prototype = t.prototype = e, e.constructor = n;
}
function Hn(n, t) {
  var e = Object.create(n.prototype);
  for (var r in t) e[r] = t[r];
  return e;
}
function zt() {
}
var kt = 0.7, Jt = 1 / kt, wt = "\\s*([+-]?\\d+)\\s*", It = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", so = /^#([0-9a-f]{3,8})$/, ao = new RegExp(`^rgb\\(${wt},${wt},${wt}\\)$`), co = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), lo = new RegExp(`^rgba\\(${wt},${wt},${wt},${It}\\)$`), ho = new RegExp(`^rgba\\(${G},${G},${G},${It}\\)$`), uo = new RegExp(`^hsl\\(${It},${G},${G}\\)$`), fo = new RegExp(`^hsla\\(${It},${G},${G},${It}\\)$`), Ue = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ae(zt, Tt, {
  copy(n) {
    return Object.assign(new this.constructor(), this, n);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: We,
  // Deprecated! Use color.formatHex.
  formatHex: We,
  formatHex8: go,
  formatHsl: po,
  formatRgb: qe,
  toString: qe
});
function We() {
  return this.rgb().formatHex();
}
function go() {
  return this.rgb().formatHex8();
}
function po() {
  return Xn(this).formatHsl();
}
function qe() {
  return this.rgb().formatRgb();
}
function Tt(n) {
  var t, e;
  return n = (n + "").trim().toLowerCase(), (t = so.exec(n)) ? (e = t[1].length, t = parseInt(t[1], 16), e === 6 ? Ge(t) : e === 3 ? new $(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : e === 8 ? Rt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : e === 4 ? Rt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ao.exec(n)) ? new $(t[1], t[2], t[3], 1) : (t = co.exec(n)) ? new $(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = lo.exec(n)) ? Rt(t[1], t[2], t[3], t[4]) : (t = ho.exec(n)) ? Rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = uo.exec(n)) ? Je(t[1], t[2] / 100, t[3] / 100, 1) : (t = fo.exec(n)) ? Je(t[1], t[2] / 100, t[3] / 100, t[4]) : Ue.hasOwnProperty(n) ? Ge(Ue[n]) : n === "transparent" ? new $(NaN, NaN, NaN, 0) : null;
}
function Ge(n) {
  return new $(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function Rt(n, t, e, r) {
  return r <= 0 && (n = t = e = NaN), new $(n, t, e, r);
}
function _o(n) {
  return n instanceof zt || (n = Tt(n)), n ? (n = n.rgb(), new $(n.r, n.g, n.b, n.opacity)) : new $();
}
function xe(n, t, e, r) {
  return arguments.length === 1 ? _o(n) : new $(n, t, e, r ?? 1);
}
function $(n, t, e, r) {
  this.r = +n, this.g = +t, this.b = +e, this.opacity = +r;
}
Ae($, xe, Hn(zt, {
  brighter(n) {
    return n = n == null ? Jt : Math.pow(Jt, n), new $(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? kt : Math.pow(kt, n), new $(this.r * n, this.g * n, this.b * n, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new $(pt(this.r), pt(this.g), pt(this.b), Qt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ke,
  // Deprecated! Use color.formatHex.
  formatHex: Ke,
  formatHex8: yo,
  formatRgb: Ze,
  toString: Ze
}));
function Ke() {
  return `#${gt(this.r)}${gt(this.g)}${gt(this.b)}`;
}
function yo() {
  return `#${gt(this.r)}${gt(this.g)}${gt(this.b)}${gt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ze() {
  const n = Qt(this.opacity);
  return `${n === 1 ? "rgb(" : "rgba("}${pt(this.r)}, ${pt(this.g)}, ${pt(this.b)}${n === 1 ? ")" : `, ${n})`}`;
}
function Qt(n) {
  return isNaN(n) ? 1 : Math.max(0, Math.min(1, n));
}
function pt(n) {
  return Math.max(0, Math.min(255, Math.round(n) || 0));
}
function gt(n) {
  return n = pt(n), (n < 16 ? "0" : "") + n.toString(16);
}
function Je(n, t, e, r) {
  return r <= 0 ? n = t = e = NaN : e <= 0 || e >= 1 ? n = t = NaN : t <= 0 && (n = NaN), new U(n, t, e, r);
}
function Xn(n) {
  if (n instanceof U) return new U(n.h, n.s, n.l, n.opacity);
  if (n instanceof zt || (n = Tt(n)), !n) return new U();
  if (n instanceof U) return n;
  n = n.rgb();
  var t = n.r / 255, e = n.g / 255, r = n.b / 255, i = Math.min(t, e, r), o = Math.max(t, e, r), s = NaN, a = o - i, c = (o + i) / 2;
  return a ? (t === o ? s = (e - r) / a + (e < r) * 6 : e === o ? s = (r - t) / a + 2 : s = (t - e) / a + 4, a /= c < 0.5 ? o + i : 2 - o - i, s *= 60) : a = c > 0 && c < 1 ? 0 : s, new U(s, a, c, n.opacity);
}
function mo(n, t, e, r) {
  return arguments.length === 1 ? Xn(n) : new U(n, t, e, r ?? 1);
}
function U(n, t, e, r) {
  this.h = +n, this.s = +t, this.l = +e, this.opacity = +r;
}
Ae(U, mo, Hn(zt, {
  brighter(n) {
    return n = n == null ? Jt : Math.pow(Jt, n), new U(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? kt : Math.pow(kt, n), new U(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = this.h % 360 + (this.h < 0) * 360, t = isNaN(n) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * t, i = 2 * e - r;
    return new $(
      ge(n >= 240 ? n - 240 : n + 120, i, r),
      ge(n, i, r),
      ge(n < 120 ? n + 240 : n - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new U(Qe(this.h), Lt(this.s), Lt(this.l), Qt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const n = Qt(this.opacity);
    return `${n === 1 ? "hsl(" : "hsla("}${Qe(this.h)}, ${Lt(this.s) * 100}%, ${Lt(this.l) * 100}%${n === 1 ? ")" : `, ${n})`}`;
  }
}));
function Qe(n) {
  return n = (n || 0) % 360, n < 0 ? n + 360 : n;
}
function Lt(n) {
  return Math.max(0, Math.min(1, n || 0));
}
function ge(n, t, e) {
  return (n < 60 ? t + (e - t) * n / 60 : n < 180 ? e : n < 240 ? t + (e - t) * (240 - n) / 60 : t) * 255;
}
const Fn = (n) => () => n;
function bo(n, t) {
  return function(e) {
    return n + e * t;
  };
}
function wo(n, t, e) {
  return n = Math.pow(n, e), t = Math.pow(t, e) - n, e = 1 / e, function(r) {
    return Math.pow(n + r * t, e);
  };
}
function xo(n) {
  return (n = +n) == 1 ? Yn : function(t, e) {
    return e - t ? wo(t, e, n) : Fn(isNaN(t) ? e : t);
  };
}
function Yn(n, t) {
  var e = t - n;
  return e ? bo(n, e) : Fn(isNaN(n) ? t : n);
}
const tn = function n(t) {
  var e = xo(t);
  function r(i, o) {
    var s = e((i = xe(i)).r, (o = xe(o)).r), a = e(i.g, o.g), c = e(i.b, o.b), l = Yn(i.opacity, o.opacity);
    return function(h) {
      return i.r = s(h), i.g = a(h), i.b = c(h), i.opacity = l(h), i + "";
    };
  }
  return r.gamma = n, r;
}(1);
function ct(n, t) {
  return n = +n, t = +t, function(e) {
    return n * (1 - e) + t * e;
  };
}
var ve = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pe = new RegExp(ve.source, "g");
function vo(n) {
  return function() {
    return n;
  };
}
function Oo(n) {
  return function(t) {
    return n(t) + "";
  };
}
function So(n, t) {
  var e = ve.lastIndex = pe.lastIndex = 0, r, i, o, s = -1, a = [], c = [];
  for (n = n + "", t = t + ""; (r = ve.exec(n)) && (i = pe.exec(t)); )
    (o = i.index) > e && (o = t.slice(e, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, c.push({ i: s, x: ct(r, i) })), e = pe.lastIndex;
  return e < t.length && (o = t.slice(e), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? c[0] ? Oo(c[0].x) : vo(t) : (t = c.length, function(l) {
    for (var h = 0, f; h < t; ++h) a[(f = c[h]).i] = f.x(l);
    return a.join("");
  });
}
var en = 180 / Math.PI, Oe = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Bn(n, t, e, r, i, o) {
  var s, a, c;
  return (s = Math.sqrt(n * n + t * t)) && (n /= s, t /= s), (c = n * e + t * r) && (e -= n * c, r -= t * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), n * r < t * e && (n = -n, t = -t, c = -c, s = -s), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(t, n) * en,
    skewX: Math.atan(c) * en,
    scaleX: s,
    scaleY: a
  };
}
var Ht;
function Co(n) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(n + "");
  return t.isIdentity ? Oe : Bn(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Mo(n) {
  return n == null || (Ht || (Ht = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ht.setAttribute("transform", n), !(n = Ht.transform.baseVal.consolidate())) ? Oe : (n = n.matrix, Bn(n.a, n.b, n.c, n.d, n.e, n.f));
}
function Vn(n, t, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, h, f, u, _, x) {
    if (l !== f || h !== u) {
      var C = _.push("translate(", null, t, null, e);
      x.push({ i: C - 4, x: ct(l, f) }, { i: C - 2, x: ct(h, u) });
    } else (f || u) && _.push("translate(" + f + t + u + e);
  }
  function s(l, h, f, u) {
    l !== h ? (l - h > 180 ? h += 360 : h - l > 180 && (l += 360), u.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: ct(l, h) })) : h && f.push(i(f) + "rotate(" + h + r);
  }
  function a(l, h, f, u) {
    l !== h ? u.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: ct(l, h) }) : h && f.push(i(f) + "skewX(" + h + r);
  }
  function c(l, h, f, u, _, x) {
    if (l !== f || h !== u) {
      var C = _.push(i(_) + "scale(", null, ",", null, ")");
      x.push({ i: C - 4, x: ct(l, f) }, { i: C - 2, x: ct(h, u) });
    } else (f !== 1 || u !== 1) && _.push(i(_) + "scale(" + f + "," + u + ")");
  }
  return function(l, h) {
    var f = [], u = [];
    return l = n(l), h = n(h), o(l.translateX, l.translateY, h.translateX, h.translateY, f, u), s(l.rotate, h.rotate, f, u), a(l.skewX, h.skewX, f, u), c(l.scaleX, l.scaleY, h.scaleX, h.scaleY, f, u), l = h = null, function(_) {
      for (var x = -1, C = u.length, I; ++x < C; ) f[(I = u[x]).i] = I.x(_);
      return f.join("");
    };
  };
}
var jo = Vn(Co, "px, ", "px)", "deg)"), Eo = Vn(Mo, ", ", ")", ")"), ko = 1e-12;
function nn(n) {
  return ((n = Math.exp(n)) + 1 / n) / 2;
}
function Io(n) {
  return ((n = Math.exp(n)) - 1 / n) / 2;
}
function To(n) {
  return ((n = Math.exp(2 * n)) - 1) / (n + 1);
}
const Ao = function n(t, e, r) {
  function i(o, s) {
    var a = o[0], c = o[1], l = o[2], h = s[0], f = s[1], u = s[2], _ = h - a, x = f - c, C = _ * _ + x * x, I, b;
    if (C < ko)
      b = Math.log(u / l) / t, I = function(E) {
        return [
          a + E * _,
          c + E * x,
          l * Math.exp(t * E * b)
        ];
      };
    else {
      var P = Math.sqrt(C), N = (u * u - l * l + r * C) / (2 * l * e * P), p = (u * u - l * l - r * C) / (2 * u * e * P), S = Math.log(Math.sqrt(N * N + 1) - N), M = Math.log(Math.sqrt(p * p + 1) - p);
      b = (M - S) / t, I = function(E) {
        var z = E * b, R = nn(S), X = l / (e * P) * (R * To(t * z + S) - Io(S));
        return [
          a + X * _,
          c + X * x,
          l * R / nn(t * z + S)
        ];
      };
    }
    return I.duration = b * 1e3 * t / Math.SQRT2, I;
  }
  return i.rho = function(o) {
    var s = Math.max(1e-3, +o), a = s * s, c = a * a;
    return n(s, a, c);
  }, i;
}(Math.SQRT2, 2, 4);
var vt = 0, Mt = 0, St = 0, Un = 1e3, te, jt, ee = 0, _t = 0, ae = 0, At = typeof performance == "object" && performance.now ? performance : Date, Wn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(n) {
  setTimeout(n, 17);
};
function Ne() {
  return _t || (Wn(No), _t = At.now() + ae);
}
function No() {
  _t = 0;
}
function ne() {
  this._call = this._time = this._next = null;
}
ne.prototype = qn.prototype = {
  constructor: ne,
  restart: function(n, t, e) {
    if (typeof n != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Ne() : +e) + (t == null ? 0 : +t), !this._next && jt !== this && (jt ? jt._next = this : te = this, jt = this), this._call = n, this._time = e, Se();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Se());
  }
};
function qn(n, t, e) {
  var r = new ne();
  return r.restart(n, t, e), r;
}
function zo() {
  Ne(), ++vt;
  for (var n = te, t; n; )
    (t = _t - n._time) >= 0 && n._call.call(void 0, t), n = n._next;
  --vt;
}
function rn() {
  _t = (ee = At.now()) + ae, vt = Mt = 0;
  try {
    zo();
  } finally {
    vt = 0, Po(), _t = 0;
  }
}
function Do() {
  var n = At.now(), t = n - ee;
  t > Un && (ae -= t, ee = n);
}
function Po() {
  for (var n, t = te, e, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), n = t, t = t._next) : (e = t._next, t._next = null, t = n ? n._next = e : te = e);
  jt = n, Se(r);
}
function Se(n) {
  if (!vt) {
    Mt && (Mt = clearTimeout(Mt));
    var t = n - _t;
    t > 24 ? (n < 1 / 0 && (Mt = setTimeout(rn, n - At.now() - ae)), St && (St = clearInterval(St))) : (St || (ee = At.now(), St = setInterval(Do, Un)), vt = 1, Wn(rn));
  }
}
function re(n, t, e) {
  var r = new ne();
  return t = t == null ? 0 : +t, r.restart((i) => {
    r.stop(), n(i + t);
  }, t, e), r;
}
var $o = oe("start", "end", "cancel", "interrupt"), Ro = [], Gn = 0, on = 1, Ce = 2, qt = 3, sn = 4, Me = 5, Gt = 6;
function ce(n, t, e, r, i, o) {
  var s = n.__transition;
  if (!s) n.__transition = {};
  else if (e in s) return;
  Lo(n, e, {
    name: t,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: $o,
    tween: Ro,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Gn
  });
}
function ze(n, t) {
  var e = W(n, t);
  if (e.state > Gn) throw new Error("too late; already scheduled");
  return e;
}
function K(n, t) {
  var e = W(n, t);
  if (e.state > qt) throw new Error("too late; already running");
  return e;
}
function W(n, t) {
  var e = n.__transition;
  if (!e || !(e = e[t])) throw new Error("transition not found");
  return e;
}
function Lo(n, t, e) {
  var r = n.__transition, i;
  r[t] = e, e.timer = qn(o, 0, e.time);
  function o(l) {
    e.state = on, e.timer.restart(s, e.delay, e.time), e.delay <= l && s(l - e.delay);
  }
  function s(l) {
    var h, f, u, _;
    if (e.state !== on) return c();
    for (h in r)
      if (_ = r[h], _.name === e.name) {
        if (_.state === qt) return re(s);
        _.state === sn ? (_.state = Gt, _.timer.stop(), _.on.call("interrupt", n, n.__data__, _.index, _.group), delete r[h]) : +h < t && (_.state = Gt, _.timer.stop(), _.on.call("cancel", n, n.__data__, _.index, _.group), delete r[h]);
      }
    if (re(function() {
      e.state === qt && (e.state = sn, e.timer.restart(a, e.delay, e.time), a(l));
    }), e.state = Ce, e.on.call("start", n, n.__data__, e.index, e.group), e.state === Ce) {
      for (e.state = qt, i = new Array(u = e.tween.length), h = 0, f = -1; h < u; ++h)
        (_ = e.tween[h].value.call(n, n.__data__, e.index, e.group)) && (i[++f] = _);
      i.length = f + 1;
    }
  }
  function a(l) {
    for (var h = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(c), e.state = Me, 1), f = -1, u = i.length; ++f < u; )
      i[f].call(n, h);
    e.state === Me && (e.on.call("end", n, n.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = Gt, e.timer.stop(), delete r[t];
    for (var l in r) return;
    delete n.__transition;
  }
}
function Kt(n, t) {
  var e = n.__transition, r, i, o = !0, s;
  if (e) {
    t = t == null ? null : t + "";
    for (s in e) {
      if ((r = e[s]).name !== t) {
        o = !1;
        continue;
      }
      i = r.state > Ce && r.state < Me, r.state = Gt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", n, n.__data__, r.index, r.group), delete e[s];
    }
    o && delete n.__transition;
  }
}
function Ho(n) {
  return this.each(function() {
    Kt(this, n);
  });
}
function Xo(n, t) {
  var e, r;
  return function() {
    var i = K(this, n), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Fo(n, t, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = K(this, n), s = o.tween;
    if (s !== r) {
      i = (r = s).slice();
      for (var a = { name: t, value: e }, c = 0, l = i.length; c < l; ++c)
        if (i[c].name === t) {
          i[c] = a;
          break;
        }
      c === l && i.push(a);
    }
    o.tween = i;
  };
}
function Yo(n, t) {
  var e = this._id;
  if (n += "", arguments.length < 2) {
    for (var r = W(this.node(), e).tween, i = 0, o = r.length, s; i < o; ++i)
      if ((s = r[i]).name === n)
        return s.value;
    return null;
  }
  return this.each((t == null ? Xo : Fo)(e, n, t));
}
function De(n, t, e) {
  var r = n._id;
  return n.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[t] = e.apply(this, arguments);
  }), function(i) {
    return W(i, r).value[t];
  };
}
function Kn(n, t) {
  var e;
  return (typeof t == "number" ? ct : t instanceof Tt ? tn : (e = Tt(t)) ? (t = e, tn) : So)(n, t);
}
function Bo(n) {
  return function() {
    this.removeAttribute(n);
  };
}
function Vo(n) {
  return function() {
    this.removeAttributeNS(n.space, n.local);
  };
}
function Uo(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttribute(n);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Wo(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = this.getAttributeNS(n.space, n.local);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function qo(n, t, e) {
  var r, i, o;
  return function() {
    var s, a = e(this), c;
    return a == null ? void this.removeAttribute(n) : (s = this.getAttribute(n), c = a + "", s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a)));
  };
}
function Go(n, t, e) {
  var r, i, o;
  return function() {
    var s, a = e(this), c;
    return a == null ? void this.removeAttributeNS(n.space, n.local) : (s = this.getAttributeNS(n.space, n.local), c = a + "", s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a)));
  };
}
function Ko(n, t) {
  var e = se(n), r = e === "transform" ? Eo : Kn;
  return this.attrTween(n, typeof t == "function" ? (e.local ? Go : qo)(e, r, De(this, "attr." + n, t)) : t == null ? (e.local ? Vo : Bo)(e) : (e.local ? Wo : Uo)(e, r, t));
}
function Zo(n, t) {
  return function(e) {
    this.setAttribute(n, t.call(this, e));
  };
}
function Jo(n, t) {
  return function(e) {
    this.setAttributeNS(n.space, n.local, t.call(this, e));
  };
}
function Qo(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && Jo(n, o)), e;
  }
  return i._value = t, i;
}
function ts(n, t) {
  var e, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (e = (r = o) && Zo(n, o)), e;
  }
  return i._value = t, i;
}
function es(n, t) {
  var e = "attr." + n;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  var r = se(n);
  return this.tween(e, (r.local ? Qo : ts)(r, t));
}
function ns(n, t) {
  return function() {
    ze(this, n).delay = +t.apply(this, arguments);
  };
}
function rs(n, t) {
  return t = +t, function() {
    ze(this, n).delay = t;
  };
}
function is(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? ns : rs)(t, n)) : W(this.node(), t).delay;
}
function os(n, t) {
  return function() {
    K(this, n).duration = +t.apply(this, arguments);
  };
}
function ss(n, t) {
  return t = +t, function() {
    K(this, n).duration = t;
  };
}
function as(n) {
  var t = this._id;
  return arguments.length ? this.each((typeof n == "function" ? os : ss)(t, n)) : W(this.node(), t).duration;
}
function cs(n, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    K(this, n).ease = t;
  };
}
function ls(n) {
  var t = this._id;
  return arguments.length ? this.each(cs(t, n)) : W(this.node(), t).ease;
}
function hs(n, t) {
  return function() {
    var e = t.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, n).ease = e;
  };
}
function ds(n) {
  if (typeof n != "function") throw new Error();
  return this.each(hs(this._id, n));
}
function us(n) {
  typeof n != "function" && (n = En(n));
  for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = t[i], s = o.length, a = r[i] = [], c, l = 0; l < s; ++l)
      (c = o[l]) && n.call(c, c.__data__, l, o) && a.push(c);
  return new rt(r, this._parents, this._name, this._id);
}
function fs(n) {
  if (n._id !== this._id) throw new Error();
  for (var t = this._groups, e = n._groups, r = t.length, i = e.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
    for (var c = t[a], l = e[a], h = c.length, f = s[a] = new Array(h), u, _ = 0; _ < h; ++_)
      (u = c[_] || l[_]) && (f[_] = u);
  for (; a < r; ++a)
    s[a] = t[a];
  return new rt(s, this._parents, this._name, this._id);
}
function gs(n) {
  return (n + "").trim().split(/^|\s+/).every(function(t) {
    var e = t.indexOf(".");
    return e >= 0 && (t = t.slice(0, e)), !t || t === "start";
  });
}
function ps(n, t, e) {
  var r, i, o = gs(t) ? ze : K;
  return function() {
    var s = o(this, n), a = s.on;
    a !== r && (i = (r = a).copy()).on(t, e), s.on = i;
  };
}
function _s(n, t) {
  var e = this._id;
  return arguments.length < 2 ? W(this.node(), e).on.on(n) : this.each(ps(e, n, t));
}
function ys(n) {
  return function() {
    var t = this.parentNode;
    for (var e in this.__transition) if (+e !== n) return;
    t && t.removeChild(this);
  };
}
function ms() {
  return this.on("end.remove", ys(this._id));
}
function bs(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = Ie(n));
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
    for (var a = r[s], c = a.length, l = o[s] = new Array(c), h, f, u = 0; u < c; ++u)
      (h = a[u]) && (f = n.call(h, h.__data__, u, a)) && ("__data__" in h && (f.__data__ = h.__data__), l[u] = f, ce(l[u], t, e, u, l, W(h, e)));
  return new rt(o, this._parents, t, e);
}
function ws(n) {
  var t = this._name, e = this._id;
  typeof n != "function" && (n = jn(n));
  for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
    for (var c = r[a], l = c.length, h, f = 0; f < l; ++f)
      if (h = c[f]) {
        for (var u = n.call(h, h.__data__, f, c), _, x = W(h, e), C = 0, I = u.length; C < I; ++C)
          (_ = u[C]) && ce(_, t, e, C, u, x);
        o.push(u), s.push(h);
      }
  return new rt(o, s, t, e);
}
var xs = Nt.prototype.constructor;
function vs() {
  return new xs(this._groups, this._parents);
}
function Os(n, t) {
  var e, r, i;
  return function() {
    var o = xt(this, n), s = (this.style.removeProperty(n), xt(this, n));
    return o === s ? null : o === e && s === r ? i : i = t(e = o, r = s);
  };
}
function Zn(n) {
  return function() {
    this.style.removeProperty(n);
  };
}
function Ss(n, t, e) {
  var r, i = e + "", o;
  return function() {
    var s = xt(this, n);
    return s === i ? null : s === r ? o : o = t(r = s, e);
  };
}
function Cs(n, t, e) {
  var r, i, o;
  return function() {
    var s = xt(this, n), a = e(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(n), xt(this, n))), s === c ? null : s === r && c === i ? o : (i = c, o = t(r = s, a));
  };
}
function Ms(n, t) {
  var e, r, i, o = "style." + t, s = "end." + o, a;
  return function() {
    var c = K(this, n), l = c.on, h = c.value[o] == null ? a || (a = Zn(t)) : void 0;
    (l !== e || i !== h) && (r = (e = l).copy()).on(s, i = h), c.on = r;
  };
}
function js(n, t, e) {
  var r = (n += "") == "transform" ? jo : Kn;
  return t == null ? this.styleTween(n, Os(n, r)).on("end.style." + n, Zn(n)) : typeof t == "function" ? this.styleTween(n, Cs(n, r, De(this, "style." + n, t))).each(Ms(this._id, n)) : this.styleTween(n, Ss(n, r, t), e).on("end.style." + n, null);
}
function Es(n, t, e) {
  return function(r) {
    this.style.setProperty(n, t.call(this, r), e);
  };
}
function ks(n, t, e) {
  var r, i;
  function o() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && Es(n, s, e)), r;
  }
  return o._value = t, o;
}
function Is(n, t, e) {
  var r = "style." + (n += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, ks(n, t, e ?? ""));
}
function Ts(n) {
  return function() {
    this.textContent = n;
  };
}
function As(n) {
  return function() {
    var t = n(this);
    this.textContent = t ?? "";
  };
}
function Ns(n) {
  return this.tween("text", typeof n == "function" ? As(De(this, "text", n)) : Ts(n == null ? "" : n + ""));
}
function zs(n) {
  return function(t) {
    this.textContent = n.call(this, t);
  };
}
function Ds(n) {
  var t, e;
  function r() {
    var i = n.apply(this, arguments);
    return i !== e && (t = (e = i) && zs(i)), t;
  }
  return r._value = n, r;
}
function Ps(n) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (n == null) return this.tween(t, null);
  if (typeof n != "function") throw new Error();
  return this.tween(t, Ds(n));
}
function $s() {
  for (var n = this._name, t = this._id, e = Jn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, c, l = 0; l < a; ++l)
      if (c = s[l]) {
        var h = W(c, t);
        ce(c, n, e, l, s, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new rt(r, this._parents, n, e);
}
function Rs() {
  var n, t, e = this, r = e._id, i = e.size();
  return new Promise(function(o, s) {
    var a = { value: s }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = K(this, r), h = l.on;
      h !== n && (t = (n = h).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(c)), l.on = t;
    }), i === 0 && o();
  });
}
var Ls = 0;
function rt(n, t, e, r) {
  this._groups = n, this._parents = t, this._name = e, this._id = r;
}
function Jn() {
  return ++Ls;
}
var Q = Nt.prototype;
rt.prototype = {
  constructor: rt,
  select: bs,
  selectAll: ws,
  selectChild: Q.selectChild,
  selectChildren: Q.selectChildren,
  filter: us,
  merge: fs,
  selection: vs,
  transition: $s,
  call: Q.call,
  nodes: Q.nodes,
  node: Q.node,
  size: Q.size,
  empty: Q.empty,
  each: Q.each,
  on: _s,
  attr: Ko,
  attrTween: es,
  style: js,
  styleTween: Is,
  text: Ns,
  textTween: Ps,
  remove: ms,
  tween: Yo,
  delay: is,
  duration: as,
  ease: ls,
  easeVarying: ds,
  end: Rs,
  [Symbol.iterator]: Q[Symbol.iterator]
};
function Hs(n) {
  return ((n *= 2) <= 1 ? n * n * n : (n -= 2) * n * n + 2) / 2;
}
var Xs = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Hs
};
function Fs(n, t) {
  for (var e; !(e = n.__transition) || !(e = e[t]); )
    if (!(n = n.parentNode))
      throw new Error(`transition ${t} not found`);
  return e;
}
function Ys(n) {
  var t, e;
  n instanceof rt ? (t = n._id, n = n._name) : (t = Jn(), (e = Xs).time = Ne(), n = n == null ? null : n + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var s = r[o], a = s.length, c, l = 0; l < a; ++l)
      (c = s[l]) && ce(c, n, t, l, s, e || Fs(c, t));
  return new rt(r, this._parents, n, t);
}
Nt.prototype.interrupt = Ho;
Nt.prototype.transition = Ys;
const Xt = (n) => () => n;
function Bs(n, {
  sourceEvent: t,
  target: e,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: n, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: e, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function nt(n, t, e) {
  this.k = n, this.x = t, this.y = e;
}
nt.prototype = {
  constructor: nt,
  scale: function(n) {
    return n === 1 ? this : new nt(this.k * n, this.x, this.y);
  },
  translate: function(n, t) {
    return n === 0 & t === 0 ? this : new nt(this.k, this.x + this.k * n, this.y + this.k * t);
  },
  apply: function(n) {
    return [n[0] * this.k + this.x, n[1] * this.k + this.y];
  },
  applyX: function(n) {
    return n * this.k + this.x;
  },
  applyY: function(n) {
    return n * this.k + this.y;
  },
  invert: function(n) {
    return [(n[0] - this.x) / this.k, (n[1] - this.y) / this.k];
  },
  invertX: function(n) {
    return (n - this.x) / this.k;
  },
  invertY: function(n) {
    return (n - this.y) / this.k;
  },
  rescaleX: function(n) {
    return n.copy().domain(n.range().map(this.invertX, this).map(n.invert, n));
  },
  rescaleY: function(n) {
    return n.copy().domain(n.range().map(this.invertY, this).map(n.invert, n));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Pe = new nt(1, 0, 0);
Qn.prototype = nt.prototype;
function Qn(n) {
  for (; !n.__zoom; ) if (!(n = n.parentNode)) return Pe;
  return n.__zoom;
}
function _e(n) {
  n.stopImmediatePropagation();
}
function Ct(n) {
  n.preventDefault(), n.stopImmediatePropagation();
}
function Vs(n) {
  return (!n.ctrlKey || n.type === "wheel") && !n.button;
}
function Us() {
  var n = this;
  return n instanceof SVGElement ? (n = n.ownerSVGElement || n, n.hasAttribute("viewBox") ? (n = n.viewBox.baseVal, [[n.x, n.y], [n.x + n.width, n.y + n.height]]) : [[0, 0], [n.width.baseVal.value, n.height.baseVal.value]]) : [[0, 0], [n.clientWidth, n.clientHeight]];
}
function an() {
  return this.__zoom || Pe;
}
function Ws(n) {
  return -n.deltaY * (n.deltaMode === 1 ? 0.05 : n.deltaMode ? 1 : 2e-3) * (n.ctrlKey ? 10 : 1);
}
function qs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Gs(n, t, e) {
  var r = n.invertX(t[0][0]) - e[0][0], i = n.invertX(t[1][0]) - e[1][0], o = n.invertY(t[0][1]) - e[0][1], s = n.invertY(t[1][1]) - e[1][1];
  return n.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s)
  );
}
function Ks() {
  var n = Vs, t = Us, e = Gs, r = Ws, i = qs, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, c = Ao, l = oe("start", "zoom", "end"), h, f, u, _ = 500, x = 150, C = 0, I = 10;
  function b(d) {
    d.property("__zoom", an).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", R).on("dblclick.zoom", X).filter(i).on("touchstart.zoom", H).on("touchmove.zoom", Dt).on("touchend.zoom touchcancel.zoom", Pt).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(d, y, g, m) {
    var w = d.selection ? d.selection() : d;
    w.property("__zoom", an), d !== w ? S(d, y, g, m) : w.interrupt().each(function() {
      M(this, arguments).event(m).start().zoom(null, typeof y == "function" ? y.apply(this, arguments) : y).end();
    });
  }, b.scaleBy = function(d, y, g, m) {
    b.scaleTo(d, function() {
      var w = this.__zoom.k, v = typeof y == "function" ? y.apply(this, arguments) : y;
      return w * v;
    }, g, m);
  }, b.scaleTo = function(d, y, g, m) {
    b.transform(d, function() {
      var w = t.apply(this, arguments), v = this.__zoom, O = g == null ? p(w) : typeof g == "function" ? g.apply(this, arguments) : g, j = v.invert(O), k = typeof y == "function" ? y.apply(this, arguments) : y;
      return e(N(P(v, k), O, j), w, s);
    }, g, m);
  }, b.translateBy = function(d, y, g, m) {
    b.transform(d, function() {
      return e(this.__zoom.translate(
        typeof y == "function" ? y.apply(this, arguments) : y,
        typeof g == "function" ? g.apply(this, arguments) : g
      ), t.apply(this, arguments), s);
    }, null, m);
  }, b.translateTo = function(d, y, g, m, w) {
    b.transform(d, function() {
      var v = t.apply(this, arguments), O = this.__zoom, j = m == null ? p(v) : typeof m == "function" ? m.apply(this, arguments) : m;
      return e(Pe.translate(j[0], j[1]).scale(O.k).translate(
        typeof y == "function" ? -y.apply(this, arguments) : -y,
        typeof g == "function" ? -g.apply(this, arguments) : -g
      ), v, s);
    }, m, w);
  };
  function P(d, y) {
    return y = Math.max(o[0], Math.min(o[1], y)), y === d.k ? d : new nt(y, d.x, d.y);
  }
  function N(d, y, g) {
    var m = y[0] - g[0] * d.k, w = y[1] - g[1] * d.k;
    return m === d.x && w === d.y ? d : new nt(d.k, m, w);
  }
  function p(d) {
    return [(+d[0][0] + +d[1][0]) / 2, (+d[0][1] + +d[1][1]) / 2];
  }
  function S(d, y, g, m) {
    d.on("start.zoom", function() {
      M(this, arguments).event(m).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(m).end();
    }).tween("zoom", function() {
      var w = this, v = arguments, O = M(w, v).event(m), j = t.apply(w, v), k = g == null ? p(j) : typeof g == "function" ? g.apply(w, v) : g, q = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), D = w.__zoom, F = typeof y == "function" ? y.apply(w, v) : y, Z = c(D.invert(k).concat(q / D.k), F.invert(k).concat(q / F.k));
      return function(Y) {
        if (Y === 1) Y = F;
        else {
          var J = Z(Y), de = q / J[2];
          Y = new nt(de, k[0] - J[0] * de, k[1] - J[1] * de);
        }
        O.zoom(null, Y);
      };
    });
  }
  function M(d, y, g) {
    return !g && d.__zooming || new E(d, y);
  }
  function E(d, y) {
    this.that = d, this.args = y, this.active = 0, this.sourceEvent = null, this.extent = t.apply(d, y), this.taps = 0;
  }
  E.prototype = {
    event: function(d) {
      return d && (this.sourceEvent = d), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(d, y) {
      return this.mouse && d !== "mouse" && (this.mouse[1] = y.invert(this.mouse[0])), this.touch0 && d !== "touch" && (this.touch0[1] = y.invert(this.touch0[0])), this.touch1 && d !== "touch" && (this.touch1[1] = y.invert(this.touch1[0])), this.that.__zoom = y, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(d) {
      var y = V(this.that).datum();
      l.call(
        d,
        this.that,
        new Bs(d, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: l
        }),
        y
      );
    }
  };
  function z(d, ...y) {
    if (!n.apply(this, arguments)) return;
    var g = M(this, y).event(d), m = this.__zoom, w = Math.max(o[0], Math.min(o[1], m.k * Math.pow(2, r.apply(this, arguments)))), v = tt(d);
    if (g.wheel)
      (g.mouse[0][0] !== v[0] || g.mouse[0][1] !== v[1]) && (g.mouse[1] = m.invert(g.mouse[0] = v)), clearTimeout(g.wheel);
    else {
      if (m.k === w) return;
      g.mouse = [v, m.invert(v)], Kt(this), g.start();
    }
    Ct(d), g.wheel = setTimeout(O, x), g.zoom("mouse", e(N(P(m, w), g.mouse[0], g.mouse[1]), g.extent, s));
    function O() {
      g.wheel = null, g.end();
    }
  }
  function R(d, ...y) {
    if (u || !n.apply(this, arguments)) return;
    var g = d.currentTarget, m = M(this, y, !0).event(d), w = V(d.view).on("mousemove.zoom", k, !0).on("mouseup.zoom", q, !0), v = tt(d, g), O = d.clientX, j = d.clientY;
    Rn(d.view), _e(d), m.mouse = [v, this.__zoom.invert(v)], Kt(this), m.start();
    function k(D) {
      if (Ct(D), !m.moved) {
        var F = D.clientX - O, Z = D.clientY - j;
        m.moved = F * F + Z * Z > C;
      }
      m.event(D).zoom("mouse", e(N(m.that.__zoom, m.mouse[0] = tt(D, g), m.mouse[1]), m.extent, s));
    }
    function q(D) {
      w.on("mousemove.zoom mouseup.zoom", null), Ln(D.view, m.moved), Ct(D), m.event(D).end();
    }
  }
  function X(d, ...y) {
    if (n.apply(this, arguments)) {
      var g = this.__zoom, m = tt(d.changedTouches ? d.changedTouches[0] : d, this), w = g.invert(m), v = g.k * (d.shiftKey ? 0.5 : 2), O = e(N(P(g, v), m, w), t.apply(this, y), s);
      Ct(d), a > 0 ? V(this).transition().duration(a).call(S, O, m, d) : V(this).call(b.transform, O, m, d);
    }
  }
  function H(d, ...y) {
    if (n.apply(this, arguments)) {
      var g = d.touches, m = g.length, w = M(this, y, d.changedTouches.length === m).event(d), v, O, j, k;
      for (_e(d), O = 0; O < m; ++O)
        j = g[O], k = tt(j, this), k = [k, this.__zoom.invert(k), j.identifier], w.touch0 ? !w.touch1 && w.touch0[2] !== k[2] && (w.touch1 = k, w.taps = 0) : (w.touch0 = k, v = !0, w.taps = 1 + !!h);
      h && (h = clearTimeout(h)), v && (w.taps < 2 && (f = k[0], h = setTimeout(function() {
        h = null;
      }, _)), Kt(this), w.start());
    }
  }
  function Dt(d, ...y) {
    if (this.__zooming) {
      var g = M(this, y).event(d), m = d.changedTouches, w = m.length, v, O, j, k;
      for (Ct(d), v = 0; v < w; ++v)
        O = m[v], j = tt(O, this), g.touch0 && g.touch0[2] === O.identifier ? g.touch0[0] = j : g.touch1 && g.touch1[2] === O.identifier && (g.touch1[0] = j);
      if (O = g.that.__zoom, g.touch1) {
        var q = g.touch0[0], D = g.touch0[1], F = g.touch1[0], Z = g.touch1[1], Y = (Y = F[0] - q[0]) * Y + (Y = F[1] - q[1]) * Y, J = (J = Z[0] - D[0]) * J + (J = Z[1] - D[1]) * J;
        O = P(O, Math.sqrt(Y / J)), j = [(q[0] + F[0]) / 2, (q[1] + F[1]) / 2], k = [(D[0] + Z[0]) / 2, (D[1] + Z[1]) / 2];
      } else if (g.touch0) j = g.touch0[0], k = g.touch0[1];
      else return;
      g.zoom("touch", e(N(O, j, k), g.extent, s));
    }
  }
  function Pt(d, ...y) {
    if (this.__zooming) {
      var g = M(this, y).event(d), m = d.changedTouches, w = m.length, v, O;
      for (_e(d), u && clearTimeout(u), u = setTimeout(function() {
        u = null;
      }, _), v = 0; v < w; ++v)
        O = m[v], g.touch0 && g.touch0[2] === O.identifier ? delete g.touch0 : g.touch1 && g.touch1[2] === O.identifier && delete g.touch1;
      if (g.touch1 && !g.touch0 && (g.touch0 = g.touch1, delete g.touch1), g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else if (g.end(), g.taps === 2 && (O = tt(O, this), Math.hypot(f[0] - O[0], f[1] - O[1]) < I)) {
        var j = V(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Xt(+d), b) : r;
  }, b.filter = function(d) {
    return arguments.length ? (n = typeof d == "function" ? d : Xt(!!d), b) : n;
  }, b.touchable = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : Xt(!!d), b) : i;
  }, b.extent = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Xt([[+d[0][0], +d[0][1]], [+d[1][0], +d[1][1]]]), b) : t;
  }, b.scaleExtent = function(d) {
    return arguments.length ? (o[0] = +d[0], o[1] = +d[1], b) : [o[0], o[1]];
  }, b.translateExtent = function(d) {
    return arguments.length ? (s[0][0] = +d[0][0], s[1][0] = +d[1][0], s[0][1] = +d[0][1], s[1][1] = +d[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(d) {
    return arguments.length ? (e = d, b) : e;
  }, b.duration = function(d) {
    return arguments.length ? (a = +d, b) : a;
  }, b.interpolate = function(d) {
    return arguments.length ? (c = d, b) : c;
  }, b.on = function() {
    var d = l.on.apply(l, arguments);
    return d === l ? b : d;
  }, b.clickDistance = function(d) {
    return arguments.length ? (C = (d = +d) * d, b) : Math.sqrt(C);
  }, b.tapDistance = function(d) {
    return arguments.length ? (I = +d, b) : I;
  }, b;
}
class Zs {
  actionLimit;
  undoStackList;
  redoStackList;
  containerInterface;
  constructor(t, e) {
    this.actionLimit = e, this.undoStackList = [], this.redoStackList = [], this.containerInterface = t;
  }
  addAction(...t) {
    this.undoStackList.length === this.actionLimit && this.undoStackList.shift(), this.undoStackList.push(t), this.redoStackList.length = 0;
  }
  clear() {
    this.undoStackList.length = 0, this.redoStackList.length = 0;
  }
  popLastUndoAction() {
    return this.undoStackList.pop();
  }
  undo() {
    const t = this.undoStackList.pop();
    return t ? (t.forEach((e) => e.undo(this.containerInterface)), this.redoStackList.push(t.reverse()), t) : null;
  }
  redo() {
    const t = this.redoStackList.pop();
    return t ? (t.forEach((e) => e.redo(this.containerInterface)), this.undoStackList.push(t.reverse()), t) : null;
  }
}
class le {
  command;
  constructor(t) {
    this.command = t;
  }
  checkHasId(t) {
    return "id" in t && (typeof t.id == "number" || typeof t.id == "string");
  }
  undo(t) {
    return this;
  }
  redo(t) {
    return this;
  }
}
class ft extends le {
  objDataList;
  constructor(t) {
    super("add"), this.objDataList = t;
  }
  undo(t) {
    return this.objDataList.forEach((e) => {
      this.checkHasId(e) ? t.removeObject(e.id) : console.error("data has no id", e);
    }), this;
  }
  redo(t) {
    return this.objDataList.forEach((e) => t.addRenderObj(e)), this;
  }
}
class je extends ft {
  constructor(t) {
    super(t), this.command = "delete";
  }
  undo(t) {
    return super.redo(t);
  }
  redo(t) {
    return super.undo(t);
  }
}
const he = {
  id: "",
  temp: !1,
  type: "",
  render: "",
  text: "",
  editable: !0,
  foreColor: "black",
  fontSize: 16,
  textDecoration: "none",
  visibleOverText: !0,
  opacity: 1,
  cursor: "move",
  borderColor: "black",
  borderWidth: 1,
  borderDash: 0,
  isSelected: !1,
  isMonitoring: !0,
  isHovered: !1,
  tooltipText: "",
  tooltipFontSize: 13,
  tooltipForeColor: "black",
  tooltipFill: "white",
  tooltipMaxWidth: 380,
  tooltipBorderColor: "var(--navy-700)",
  tooltipBorderWidth: 1,
  tooltipBorderDash: 0,
  tooltipPadding: 8,
  tooltipTextDecoration: "none",
  tooltipVisible: !0,
  "borderWidth.selected": 2,
  "borderColor.selected": "blue"
}, tr = {
  ...he,
  "connection.points": [],
  "connection.sourceObjId": null,
  "connection.sourcePos": null,
  "connection.destinationObjId": null,
  "connection.destinationPos": null,
  "connection.width": 200,
  "connection.textBorderColor": "black",
  "connection.textBorderWidth": 1,
  "connection.textBorderDash": 0,
  "connection.textBorderFill": "white",
  "connection.connectorFill": "#303030",
  "connection.connectorSize": 4,
  "connection.adjusterSize": 7,
  "connection.adjusterFill": "black",
  "connection.arrowFill": "black",
  "connection.arrowSize": 10,
  "connection.arrowBorderColor": "black",
  "connection.arrowBorderWidth": 1,
  "connection.arrowType": "triangle"
}, er = {
  ...he,
  "group.margin": 20,
  "group.borderAlwaysAppearance": !1
}, nr = {
  ...he,
  "node.width": 120,
  "node.height": 60,
  "node.fill": "white",
  "node.x": 0,
  "node.y": 0,
  "node.connectorGap": 0,
  "node.connectorSize": 4,
  "node.resizerEnabled": !0,
  "node.connectorEnabled": !0,
  "node.commentTopLeft": "",
  "node.commentTopCenter": "",
  "node.commentTopRight": "",
  "node.commentBottomLeft": "",
  "node.commentBottomCenter": "",
  "node.commentBottomRight": "",
  "node.commentFontSize": 10,
  "node.commentForeColor": "black",
  "node.borderRadius": 0,
  "node.autoGeneratedConnectorRender": "elbow"
}, lt = 10, Js = 10, Qs = /* @__PURE__ */ new Set([
  // 공용
  "id",
  "type",
  "render",
  "text",
  "editable",
  "isSelected",
  "isMonitoring",
  "isHovered",
  // 노드
  "node.width",
  "node.height",
  "node.x",
  "node.y",
  "node.connectorEnabled",
  "node.resizerEnabled",
  // 연결선
  "connection.points",
  "connection.sourceObjId",
  "connection.sourcePos",
  "connection.destinationObjId",
  "connection.destinationPos",
  // 그룹
  "group.borderAlwaysAppearance",
  "group.margin"
]);
class ta {
  data;
  constructor(t) {
    this.data = t;
  }
  get(t) {
    return Qs.has(t) ? this.data[t] : this.data[`${t}${this._getPostFix()}`] ?? this.data[t];
  }
  _getPostFix() {
    return this.data.isSelected ? ".selected" : this.data.isHovered ? ".hovered" : "";
  }
}
class ea {
  text = "";
  length = 0;
  width = 0;
  height = 0;
  x = 0;
  y = 0;
}
class rr extends ea {
  compareTo(t) {
    return this.text === t.text && this.length === t.length && this.width === t.width && this.height === t.height && this.x === t.x && this.y === t.y;
  }
  update(t) {
    this.text = t.text, this.length = t.length, this.width = t.width, this.height = t.height, this.x = t.x, this.y = t.y;
  }
  clear() {
    this.text = "", this.length = 0, this.width = 0, this.height = 0, this.x = 0, this.y = 0;
  }
}
const na = /* @__PURE__ */ (() => {
  let n = null;
  return function() {
    if (n || (n = new OffscreenCanvas(0, 0).getContext("2d")), !n)
      throw new Error("Can't create canvas context");
    return n;
  };
})(), Ee = 10, $e = (n, t) => {
  const e = na();
  e.font = `${t.fontSize}px ${t.fontFamily}`;
  const r = e.measureText(n);
  return {
    width: r.width,
    height: r.fontBoundingBoxAscent + r.fontBoundingBoxDescent
  };
}, Re = (n) => {
  const { text: t } = n, e = [], r = [];
  for (const i of t) {
    if (i === "\r") continue;
    if (i === `
`) {
      e.push(r.join("")), r.length = 0;
      continue;
    }
    r.push(i);
    const o = r.join("");
    $e(o, n).width >= n.width && (e.push(o), r.length = 0);
  }
  return r.length > 0 && e.push(r.join("")), {
    length: e.length,
    lineHeight: ir(n),
    lines: e
  };
};
function ir(n) {
  return $e("|", n).height;
}
const or = (n) => {
  const t = n.text.replace("\r", "").split(`
`);
  return {
    height: ir(n) * t.length,
    width: t.reduce((e, r) => Math.max(e, $e(r, n).width), 0)
  };
}, ra = (n, t) => {
  const e = Re(n), r = e.lineHeight * e.length;
  if (t < r) {
    const i = Math.ceil((r - t) / e.lineHeight);
    e.lines = e.lines.splice(0, e.length - i), e.length = e.lines.length, e.lines[e.length - 1] += "...";
  }
  return e;
};
class Le {
  className;
  containerInterface;
  textCache;
  data;
  dataWrapper;
  container;
  group;
  objects;
  constructor(t, e, r) {
    this.data = t, this.className = e, this.containerInterface = r, this.textCache = new rr(), this.dataWrapper = new ta(t), this.container = r.getSvg().select(".container"), this.group = this.container.append("g").style("font-family", this.data.fontFamily).attr("class", `ir-fw-${t.type}`).attr("data-type", e).attr("data-obj-id", this.data.id), this.objects = {
      foreignObj: null,
      textarea: null,
      text: this.group.append("text").attr("class", "ir-fw-unselectable text--whitespace-pre").attr("text-anchor", "middle")
    };
  }
  get width() {
    throw new Error("Not implemented!");
  }
  get height() {
    throw new Error("Not implemented!");
  }
  get subUiVisibility() {
    return this.data.isSelected && this.containerInterface.getReadOnly() === !1 ? "visible" : "hidden";
  }
  get isHovered() {
    return this.data.isHovered;
  }
  get isSelected() {
    return this.data.isSelected;
  }
  _getLabelRect() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  _repositionTextarea() {
    if (!this.objects.foreignObj || !this.objects.textarea) throw new Error("foreignObj, textarea is null!");
    const t = this._getLabelRect();
    this.objects.foreignObj.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height), this.objects.textarea.style("width", `${t.width}px`).style("height", `${t.height}px`).style("outline", "1px solid #717171").style("background-color", "transparent");
  }
  removeLabelEdit() {
    this.objects.foreignObj && (this.objects.text.attr("visibility", "visible"), this.objects.textarea = null, this.objects.foreignObj.remove(), this.objects.foreignObj = null, this.containerInterface.setEditMode(!1));
  }
  cancelLabelEdit(t) {
    this.removeLabelEdit(), this.data.text = t;
  }
  editLabelMode() {
    if (!this.data.editable || this.objects.foreignObj || this.data.render === "bridge")
      return;
    const t = this.data.text;
    this.group.attr("data-status", "edit"), this.containerInterface.setEditMode(!0), this.objects.text.attr("visibility", "hidden"), this.objects.foreignObj = this.group.append("foreignObject"), this.objects.textarea = this.objects.foreignObj.append("xhtml:div").style("overflow", "hidden").append("textarea").style("outline", "0").style("resize", "none").style("text-align", "center").style("font-family", this.data.fontFamily).style("font-size", `${this.data.fontSize}px`).style("color", this.data.foreColor).on("paste", (e) => e.__IGNORE__ = !0).on("copy", (e) => e.__IGNORE__ = !0).on("cut", (e) => e.__IGNORE__ = !0).on("keyup", (e) => {
      e.key === "Escape" ? (this.cancelLabelEdit(t), this.containerInterface.getSvg().node().parentElement.focus()) : (this.data.text = this.objects.textarea.node().value, this._repositionTextarea());
    }).on("focusout", () => {
      this.objects.textarea && (this.data.text = this.objects.textarea.node().value, this.containerInterface.editTextCallback(this.data, t, this.data.text), this.removeLabelEdit()), this.group.attr("data-status", ""), this.render();
    }), this._repositionTextarea(), this.objects.textarea.node().value = this.data.text || "", this.objects.textarea.node().focus(), this.containerInterface.editTextModeCallback(this.data);
  }
  bringToFrontElement(t) {
    this.group.node().appendChild(t);
  }
  create() {
    this._create(), this.bringToFrontElement(this.objects.text.node()), this.render();
  }
  _create() {
    throw new Error("Not implemented method!");
  }
  render() {
    this._render(), this.group.attr("cursor", this.dataWrapper.get("cursor")), this.group.attr("opacity", this.dataWrapper.get("opacity"));
  }
  _render() {
    throw new Error("Not implemented method!");
  }
  _getLabelXY(t) {
    throw new Error("Not implemented!");
  }
  _createText() {
    const t = {
      width: this.width - Ee,
      text: this.dataWrapper.get("text"),
      fontFamily: this.dataWrapper.get("fontFamily"),
      fontSize: this.dataWrapper.get("fontSize"),
      foreColor: this.dataWrapper.get("foreColor"),
      textDecoration: this.dataWrapper.get("textDecoration")
    }, r = this.dataWrapper.get("visibleOverText") ? Re(t) : ra(t, this.height - Ee), i = this._getLabelXY(r), o = {
      text: t.text,
      width: this.width,
      height: this.height,
      length: r.lines.length,
      x: i.x,
      y: i.y,
      fontFamily: t.fontFamily,
      fontSize: t.fontSize,
      foreColor: t.foreColor,
      textDecoration: t.textDecoration
    };
    if (this.textCache.compareTo(o)) {
      ar(
        this.objects.text,
        i.x,
        i.y,
        t
      );
      return;
    }
    pa(this.objects.text, this.textCache), cr(
      this.objects.text,
      r,
      i.x,
      i.y,
      t
    ), this.textCache.update(o);
  }
  /**
   * svg 컨테이너에서 삭제
   */
  destroy() {
    this.group.remove();
  }
}
class ia {
  renderObj;
  key;
  newValue;
  oldValue;
  constructor(t, e, r, i) {
    this.renderObj = t, this.key = e, this.newValue = r, this.oldValue = i;
  }
}
class He {
  data;
  containerInterface;
  renderer;
  _clickedSeq = 0;
  constructor(t, e, r) {
    this.data = t, this.renderer = e, this.containerInterface = r;
  }
  get onEditing() {
    return this.renderer.objects.foreignObj !== null;
  }
  get clickedSeq() {
    return this._clickedSeq;
  }
  get tooltipText() {
    return this.getDataOrNull("tooltipText");
  }
  get g() {
    return this.renderer.group;
  }
  get isSelected() {
    return this.data.isSelected;
  }
  /**
  * @returns {'node' | 'connection' | 'group'}
  */
  get type() {
    return this.data.type;
  }
  get renderType() {
    return this.data.render;
  }
  get tooltipVisible() {
    return this.getDataOrNull("tooltip.visible");
  }
  get canShowTooltip() {
    return this.getDataOrNull("tooltipText") && this.getDataOrNull("tooltipVisible");
  }
  get id() {
    return this.data.id;
  }
  /**
  * the start X of this object
  */
  get startX() {
    throw new Error("Not Implemented!");
  }
  /**
  * the start Y of this object
  */
  get startY() {
    throw new Error("Not Implemented!");
  }
  get isTempObj() {
    return this.data.temp || !1;
  }
  get zIndex() {
    const t = this.renderer.group.node();
    if (!t) throw new Error("renderer.group.node is null!");
    let e = 0, r = t.previousSibling;
    for (; r !== null; )
      r = r.previousSibling, ++e;
    return e;
  }
  get centerX() {
    return (this.x + this.endX) / 2;
  }
  get centerY() {
    return (this.y + this.endY) / 2;
  }
  get x() {
    throw new Error("Not Implemented!");
  }
  get y() {
    throw new Error("Not Implemented!");
  }
  get endX() {
    throw new Error("Not Implemented!");
  }
  get endY() {
    throw new Error("Not Implemented!");
  }
  get width() {
    throw new Error("Not Implemented!");
  }
  get height() {
    throw new Error("Not Implemented!");
  }
  get textDecoration() {
    return this.getDataOrNull("textDecoration");
  }
  get isHovered() {
    return this.data.isHovered;
  }
  set id(t) {
    this.data.id = t;
  }
  set x(t) {
    throw new Error("Not Implemented!");
  }
  set y(t) {
    throw new Error("Not Implemented!");
  }
  set width(t) {
    throw new Error("Not Implemented!");
  }
  set height(t) {
    throw new Error("Not Implemented!");
  }
  set textDecoration(t) {
    this.data.textDecoration = t;
  }
  set isHovered(t) {
    this.data.isHovered = t;
  }
  set clickedSeq(t) {
    this._clickedSeq = t;
  }
  /**
  *
  * @param {Number | Null} id it will be on front if id is null
  */
  set zIndex(t) {
    const e = this.renderer.container.node(), r = this.renderer.group.node();
    if (!e || !r) throw new Error("container or graphic element is null");
    t == null || t >= e.children.length ? e.appendChild(r) : e.insertBefore(r, e.children[t]);
  }
  observeProperties() {
    Object.keys(this.data).forEach((t) => {
      let e = this.data[t];
      Object.defineProperty(this.data, t, {
        enumerable: !0,
        get: () => e,
        set: (r) => {
          const i = e;
          e = r, this.data.isMonitoring && (this.containerInterface.observerCallback(new ia(this, t, r, i)), this.render());
        }
      });
    });
  }
  changeRender(t, e) {
    this.data.render = t, this.destroy(), this.renderer = e, this.create();
  }
  create() {
    this.renderer.create(), this.observeProperties();
  }
  destroy() {
    this.renderer.destroy();
  }
  render() {
    this.renderer.render(), this.containerInterface.renderCallback(this);
  }
  moveTo(t, e) {
    this.editProp(() => {
      this.x += t, this.y += e;
    });
  }
  /**
   *
   * @param userInteraction 사용자 인터랙션으로 호출된 여부 확인 true인 경우, user가 의도한 select
   * @param typeClick
   */
  select(t = !1, e = "") {
    this.data.isSelected === !1 && (this.data.isSelected = !0, this.containerInterface.selectCallback(this, t, e));
  }
  release(t = !1) {
    this.data.isSelected && (this.data.isSelected = !1, this.containerInterface.releaseCallback(this, t));
  }
  editLabel() {
    this.renderer.editLabelMode();
  }
  getDataOrNull(t) {
    return this.renderer.dataWrapper.get(t) || null;
  }
  editProp(t) {
    try {
      this.data.isMonitoring = !1, t();
    } finally {
      this.data.isMonitoring = !0;
    }
  }
}
const oa = /translate\((-?[\d.]+),\s*?(-?[\d.]+)\)/, sa = /scale\(([\d.]+),\s*?([\d.]+)\)/, cn = {
  top: 0,
  right: 1,
  bottom: 2,
  left: 3
}, A = 45, aa = {
  node: { ...nr },
  group: { ...er },
  connection: { ...tr }
}, ln = (n, t) => {
  switch (n.id) {
    case t.sourceObjId:
      return cn[t.sourcePos];
    case t.destinationObjId:
      return cn[t.destinationPos];
    default:
      throw new Error("It's not connected.");
  }
}, ca = (n) => {
  if (n.indexOf("left") !== -1)
    return "left";
  if (n.indexOf("right") !== -1)
    return "right";
  if (n.indexOf("top") !== -1)
    return "top";
  if (n.indexOf("bottom") !== -1)
    return "bottom";
  throw new Error(`Invalid argument '${n}'`);
}, la = (n) => {
  const t = oa.exec(n), e = sa.exec(n);
  let r = 0, i = 0, o = 1;
  return t && (r = parseFloat(t[1]), i = parseFloat(t[2])), e && (o = parseFloat(e[1])), {
    translateX: r,
    translateY: i,
    scale: o
  };
}, B = (n, t, e) => {
  n[t] === void 0 && (n[t] = e);
}, ha = (n) => {
  switch (B(n, "cursor", "move"), n.temp && (B(n, "node.resizerEnabled", !1), B(n, "node.connectorEnabled", !1)), n.render) {
    case "start": {
      B(n, "node.resizerEnabled", !1);
      break;
    }
    case "comment": {
      B(n, "node.connectorEnabled", !1);
      break;
    }
    case "bridge": {
      B(n, "editable", 20), B(n, "node.width", 20), B(n, "node.height", 20), B(n, "node.resizerEnabled", !1);
      break;
    }
  }
}, da = (n) => {
  B(n, "cursor", "pointer"), (n["connection.points"] === null || n["connection.points"] === void 0) && (n["connection.points"] = []);
  const t = n["connection.points"];
  for (let e = t.length; e < 2; e++)
    t.push({ x: 0, y: 0 });
}, sr = (n, t) => Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)), hn = (n, t) => {
  const e = aa[n.type];
  if (e === void 0)
    throw new Error(`Unknown type '${n.type}'`);
  for (const r of Object.keys(e))
    n[r] === void 0 && (n[r] = t[r]);
  return n;
};
function ua(n, t, e) {
  n[t] || Object.assign(n, { [t]: e });
}
function fa(n, t) {
  switch (ua(n, "fontFamily", t), n.type) {
    case "node": {
      ha(n);
      break;
    }
    case "connection": {
      da(n);
      break;
    }
    case "group": {
      B(n, "borderDash.selected", 1);
      break;
    }
  }
}
const ga = (n) => {
  const t = {
    ...n.data
  }, e = n.firstPoint;
  switch (n.sourcePos) {
    case "top": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x,
          y: e.y - A
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y - A
        }
      ];
      break;
    }
    case "bottom": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x,
          y: e.y + A
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y + A
        }
      ];
      break;
    }
    case "left": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x - A,
          y: e.y
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x - A,
          y: e.y + A
        }
      ];
      break;
    }
    case "right": {
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y + A
        }
      ];
      break;
    }
    default:
      n.renderType === "direct" ? t["connection.points"] = [
        e,
        {
          x: e.x + A,
          y: e.y + A
        }
      ] : t["connection.points"] = [
        e,
        {
          x: e.x + A / 2,
          y: e.y + A / 2
        },
        {
          x: e.x + A,
          y: e.y + A
        }
      ];
      break;
  }
  return t;
}, dt = (n) => {
  const t = [];
  return n.forEach((e) => {
    t.push(On(e.data));
  }), t;
}, ke = (n) => On(n), dn = function* (n) {
  switch (n.type) {
    case "node":
      yield {
        key: "node.x",
        value: n["node.x"]
      }, yield {
        key: "node.y",
        value: n["node.y"]
      };
      break;
    case "connection":
      yield {
        key: "connection.sourceObjId",
        value: n["connection.sourceObjId"]
      }, yield {
        key: "connection.sourcePos",
        value: n["connection.sourcePos"]
      }, yield {
        key: "connection.destinationObjId",
        value: n["connection.destinationObjId"]
      }, yield {
        key: "connection.destinationPos",
        value: n["connection.destinationPos"]
      }, yield {
        key: "connection.points",
        value: ke(n["connection.points"])
      };
      break;
    case "group":
      break;
    default:
      throw new Error(`Unknow type '${n.type}'`);
  }
};
function ar(n, t, e, r) {
  n.attr("x", t).attr("y", e).attr("fill", r.foreColor).attr("font-size", r.fontSize).attr("text-decoration", r.textDecoration);
}
function cr(n, t, e, r, i) {
  ar(n, e, r, i), t.lines.forEach((o, s) => {
    const a = n.append("tspan").attr("x", e).attr("dx", 0).attr("dy", s === 0 ? 0 : t.lineHeight).text(o);
    o.trim() === "" && a.attr("opacity", "0").attr("fill-opacity", "0").text(".");
  });
}
const pa = (n, t) => {
  n.selectAll("tspan").remove(), t.clear();
}, _a = (n) => new Sn(n), un = (n) => Math.round(n / lt) * lt, fn = ["node.width", "node.height"];
class et {
  // TODO js -> ts화 중으로, 현재는 임시 방편.
  // 추후 Flowchart object data에 맞는 타입으로 변환 필요
  _objData;
  _propList;
  constructor(t, e) {
    this._objData = t, this._propList = e || [];
  }
  addMoveOldValues() {
    for (const t of dn(this._objData))
      this._propList.push({
        key: t.key,
        oldValue: t.value
      });
  }
  addSizeOldValues() {
    for (const t of fn)
      this._propList.push({
        key: t,
        oldValue: this._objData[t],
        newValue: this._objData[t]
      });
  }
  updateSizeNewValues() {
    for (const t of fn) {
      const e = this._propList.filter((r) => r.key === t)[0];
      e.newValue = this._objData[t];
    }
  }
  updateMoveNewValues() {
    for (const t of dn(this._objData)) {
      const e = this._propList.filter((r) => r.key === t.key)[0];
      e.newValue = t.value;
    }
  }
  get objData() {
    return this._objData;
  }
  get propList() {
    return this._propList;
  }
}
class ht extends le {
  changeInfoList;
  constructor(t) {
    super("edit"), this.changeInfoList = t;
  }
  _setValue(t, e) {
    this.changeInfoList.forEach((r) => {
      const i = e.getObjectOrNull(r.objData.id);
      i !== null && i.editProp(() => {
        for (const o of r.propList)
          i.data[o.key] = o[t];
      });
    });
  }
  undo(t) {
    return this._setValue("oldValue", t), super.undo(t);
  }
  redo(t) {
    return this._setValue("newValue", t), super.redo(t);
  }
}
class lr extends le {
  renderObj;
  oldRender;
  newRender;
  constructor(t, e, r) {
    super("render"), this.renderObj = t, this.oldRender = e, this.newRender = r;
  }
  undo(t) {
    return t.changeObjRender(this.renderObj, this.oldRender), super.undo(t);
  }
  redo(t) {
    return t.changeObjRender(this.renderObj, this.newRender), super.redo(t);
  }
}
class hr extends le {
  dataList;
  constructor(t) {
    super("front"), this.dataList = t;
  }
  _setZId(t, e, r) {
    const i = (l) => {
      const h = r.getObjectOrNull(l.objId);
      if (h === null) {
        r.getLogger().error(
          "ZIndexCommand._setZId()",
          `Could not find obj id '${l.objId}'`
        );
        return;
      }
      h.zIndex = l[t];
    }, [o, s, a] = e ? [0, this.dataList.length, 1] : [this.dataList.length - 1, -1, -1];
    let c = o;
    for (; o !== s; )
      i(this.dataList[c]), c += a;
  }
  undo(t) {
    return this._setZId("oldValue", !1, t), super.undo(t);
  }
  redo(t) {
    return this._setZId("newValue", !0, t), super.redo(t);
  }
}
const ya = new Sn("Flowchart::ObjectManager");
class ma {
  objMap;
  constructor() {
    this.objMap = {
      node: /* @__PURE__ */ new Map(),
      connection: /* @__PURE__ */ new Map(),
      group: /* @__PURE__ */ new Map()
    };
  }
  getMap(t) {
    const e = this.objMap[t];
    if (e === void 0)
      throw ya.error("ObjectManager.getMap()", `Unknown '${t}' type`), new Error(`Unknown '${t}' type`);
    return e;
  }
  getObjCount() {
    return this.objMap.node.size + this.objMap.connection.size + this.objMap.group.size;
  }
  add(t) {
    const e = this.getMap(t.type);
    if (e.has(t.id)) throw new Error(`Already has objId '${t.id}'`);
    e.set(t.id, t);
  }
  remove(t) {
    const e = this.getMap(t.type);
    e.has(t.id) && e.delete(t.id);
  }
  *getMapIterator() {
    yield* Object.values(this.objMap);
  }
  getNodeIterator() {
    return this.objMap.node.values();
  }
  getConnectionIterator() {
    return this.objMap.connection.values();
  }
  getGroupIterator() {
    return this.objMap.group.values();
  }
  findOrNull(t) {
    for (const e of this.getMapIterator())
      if (e.has(t))
        return e.get(t);
    return null;
  }
  clear() {
    Object.values(this.objMap).forEach((t) => t.clear());
  }
  *getAllObjIterator() {
    for (const t of Object.values(this.objMap))
      yield* t.values();
  }
  *getSelectedObjIterator() {
    for (const t of this.getAllObjIterator())
      t.isSelected && (yield t);
  }
  getParentGroupOrNull(t) {
    for (const e of this.getGroupIterator())
      if (e.hasObjId(t.id))
        return e;
    return null;
  }
  *getConnectedConnections(t) {
    for (const e of this.getConnectionIterator())
      !e.isTempObj && (e.sourceObjId === t || e.destinationObjId === t) && (yield e);
  }
  reassignId(t, e, r) {
    const i = this.getMap(t.type);
    i.delete(e), i.set(r, t);
  }
}
class ba {
  actionController;
  objectManager;
  iContainer;
  movedInfo;
  constructor(t, e, r) {
    this.actionController = t, this.objectManager = e, this.iContainer = r, this.movedInfo = [];
  }
  moveStartHandler() {
    this.iContainer.getLogger().debug("MoveHandler.moveStartHandler()", "start"), this.movedInfo = [];
    for (const t of this.objectManager.getSelectedObjIterator()) {
      const e = new et(t.data);
      e.addMoveOldValues(), this.movedInfo.push(e);
    }
  }
  moveEndHandler() {
    this.iContainer.getLogger().debug("MoveHandler.moveEndHandler()", "end"), this.movedInfo.forEach((t) => t.updateMoveNewValues()), this.movedInfo.some((t) => t.propList.some((e) => Cn(e.oldValue, e.newValue) === !1)) && this.actionController.addAction(new ht(this.movedInfo));
  }
}
const T = {
  CONTEXT_MENU: "contextmenu",
  CLICK: "click",
  CLICK_NODE: "clickNode",
  DOUBLE_CLICK_NODE: "dblClickNode",
  CLICK_CONNECTION: "clickConnection",
  DOUBLE_CLICK_CONNECTION: "dblClickConnection",
  NEW_OBJECT: "newObject",
  REMOVE_OBJECT: "removeObject",
  SELECT_OBJECT: "selectObject",
  RELEASE_OBJECT: "releaseObject",
  UNDO: "undo",
  REDO: "redo",
  CHANGE_CLASS: "changeClass",
  DISCONNECT_NODE: "disconnectNode",
  CONNECT_NODE: "connectNode",
  MOUSEUP_SHEET: "mouseUpSheet"
}, ie = ["left", "right", "top", "bottom"];
class wa {
  actionController;
  objectManager;
  iContainer;
  resizeInfo;
  constructor(t, e, r) {
    this.actionController = t, this.objectManager = e, this.iContainer = r, this.resizeInfo = [];
  }
  resizeCallback(t, e, r, i) {
    for (const o of this.objectManager.getNodeIterator())
      if (o.isSelected && o.id !== t && o.resizerEnabled) {
        const s = o.height / 2, a = o.width / 2;
        switch (e) {
          case "n-resize":
            o.resizeToNorth(-(s + i));
            break;
          case "nw-resize":
            o.resizeToNorth(-(s + i)), o.resizeToWest(-(a + r));
            break;
          case "ne-resize":
            o.resizeToNorth(-(s + i)), o.resizeToEast(a + r);
            break;
          case "w-resize":
            o.resizeToWest(-(a + r));
            break;
          case "e-resize":
            o.resizeToEast(a + r);
            break;
          case "s-resize":
            o.resizeToSouth(s + i);
            break;
          case "sw-resize":
            o.resizeToSouth(s + i), o.resizeToWest(-(a + r));
            break;
          case "se-resize":
            o.resizeToSouth(s + i), o.resizeToEast(a + r);
            break;
          default:
            throw new Error(`Unknown cursor type '${e}'`);
        }
      }
    for (const o of this.objectManager.getGroupIterator())
      o.isSelected && o.render();
  }
  resizeDragStart() {
    this.iContainer.getLogger().debug("ResizeHandler.resizeDragStart()", "start"), this.resizeInfo = [];
    for (const t of this.objectManager.getNodeIterator())
      if (t.isSelected) {
        const e = new et(t.data);
        e.addSizeOldValues(), this.resizeInfo.push(e);
      }
  }
  resizeDragEnd() {
    this.iContainer.getLogger().debug("ResizeHandler.resizeDragEnd()", "end"), this.resizeInfo.forEach((t) => t.updateSizeNewValues()), this.resizeInfo.some((t) => t.propList.some((e) => Cn(e.oldValue, e.newValue) === !1)) && this.actionController.addAction(new ht(this.resizeInfo));
  }
  addDragActionOnResizer(t) {
    t.renderer.resizers.forEach((e) => {
      const r = e.attr("cursor");
      e.call(at().filter(() => this.iContainer.getReadOnly() === !1).on("start", (i) => {
        st(i.sourceEvent.target), this.resizeDragStart(), this.iContainer.initDrag("drag-node-resize");
      }).on("drag", (i) => {
        const o = i.x, s = i.y, a = t.width, c = t.height;
        switch (r) {
          case "nw-resize":
            t.resizeToNorth(s), t.resizeToWest(o);
            break;
          case "n-resize":
            t.resizeToNorth(s);
            break;
          case "ne-resize":
            t.resizeToNorth(s), t.resizeToEast(o);
            break;
          case "w-resize":
            t.resizeToWest(o);
            break;
          case "e-resize":
            t.resizeToEast(o);
            break;
          case "sw-resize":
            t.resizeToSouth(s), t.resizeToWest(o);
            break;
          case "s-resize":
            t.resizeToSouth(s);
            break;
          case "se-resize":
            t.resizeToSouth(s), t.resizeToEast(o);
            break;
          default:
            throw new Error(`Unknown cursor type '${r}'`);
        }
        const l = t.width - a, h = t.height - c;
        this.resizeCallback(t.id, r, l, h);
      }).on("end", () => {
        this.resizeDragEnd(), this.iContainer.terminateDrag("drag-node-resize");
      }));
    });
  }
}
function xa(n) {
  const t = document.createElement("div"), e = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r = document.createElement("span");
  e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.style.background = "#fff", e.classList.add("ir-fw-svg"), t.classList.add("flowchart", "ir-flowchart"), t.tabIndex = 0, r.className = "ir-flowchart-hidden", r.textContent = "copy-range";
  const i = lt * Js;
  return e.innerHTML = `
<defs>
    <pattern
        id="${n}_small_grid"
        width="${lt}"
        height="${lt}"
        patternUnits="userSpaceOnUse">
        <path
        d="M ${lt} 0 L 0 0 0 ${lt}"
        fill="none"
        stroke="gray"
        stroke-width="0.5"/>
    </pattern>
    <pattern
        id="${n}_grid"
        width="${i}"
        height="${i}"
        patternUnits="userSpaceOnUse">
        <rect
        width="${i}"
        height="${i}"
        fill="url(#${n}_small_grid)"/>
        <path
        d="M ${i} 0 L 0 0 0 ${i}"
        fill="none"
        stroke="gray"
        stroke-width="1"/>
    </pattern>
</defs>`, t.appendChild(e), t.appendChild(r), { div: t, svg: e, span: r };
}
class va extends He {
  get points() {
    return this.data["connection.points"];
  }
  get endX() {
    return this.points.reduce((t, e) => Math.max(t, e.x), 0);
  }
  get endY() {
    return this.points.reduce((t, e) => Math.max(t, e.y), 0);
  }
  get sourceObjId() {
    return this.data["connection.sourceObjId"] || null;
  }
  get sourceObj() {
    return this.containerInterface.getObjectOrNull(this.data["connection.sourceObjId"]);
  }
  get destinationObj() {
    return this.containerInterface.getObjectOrNull(this.data["connection.destinationObjId"]);
  }
  get destinationObjId() {
    return this.data["connection.destinationObjId"] || null;
  }
  get sourcePos() {
    return this.data["connection.sourcePos"] || null;
  }
  get destinationPos() {
    return this.data["connection.destinationPos"] || null;
  }
  get firstPoint() {
    return this.points[0];
  }
  get endPoint() {
    return this.points[this.points.length - 1];
  }
  get startX() {
    return this.points.reduce((t, e) => Math.min(t, e.x), Number.MAX_VALUE);
  }
  get startY() {
    return this.points.reduce((t, e) => Math.min(t, e.y), Number.MAX_VALUE);
  }
  get width() {
    if (!this.points)
      return NaN;
    const t = this.points.reduce((e, r) => ({
      min: Math.min(e.min, r.x),
      max: Math.max(e.max, r.x)
    }), { min: Number.MAX_VALUE, max: Number.MIN_VALUE });
    return t.max - t.min;
  }
  get height() {
    if (!this.points)
      return NaN;
    const t = this.points.reduce((e, r) => ({
      min: Math.min(e.min, r.y),
      max: Math.max(e.max, r.y)
    }), { min: Number.MAX_VALUE, max: Number.MIN_VALUE });
    return t.max - t.min;
  }
  get x() {
    const t = this.firstPoint;
    return t !== null ? t.x : null;
  }
  get y() {
    const t = this.firstPoint;
    return t !== null ? t.y : null;
  }
  set sourceObjId(t) {
    this.data["connection.sourceObjId"] = t || null;
  }
  set destinationObjId(t) {
    this.data["connection.destinationObjId"] = t || null;
  }
  set sourcePos(t) {
    this.data["connection.sourcePos"] = t || null;
  }
  set destinationPos(t) {
    this.data["connection.destinationPos"] = t || null;
  }
  set x(t) {
    if (this.sourceObjId !== null)
      return;
    const e = this.firstPoint;
    e !== null && (e.x = t, this.render());
  }
  set y(t) {
    if (this.sourceObjId !== null)
      return;
    const e = this.firstPoint;
    e !== null && (e.y = t, this.render());
  }
  setLastPointXY(t, e) {
    this.data["connection.points"][this.renderer.lastPointId].x = t, this.data["connection.points"][this.renderer.lastPointId].y = e, this.render();
  }
  moveTo(t, e) {
    if (this.sourceObj && this.destinationObj)
      return;
    const r = this.sourceObj === null ? 0 : 1, i = this.points.length - (this.destinationObj === null ? 0 : 1);
    this.editProp(() => {
      this.points.slice(r, i).forEach((o) => {
        o.x += t, o.y += e;
      });
    });
  }
  comparePoints(t) {
    if (!this.points || !t || this.points.length !== t.length)
      return !1;
    for (let e = 0; e < t.length; e++)
      if (this.points[e].x !== t[e].x && this.points[e].y !== t[e].y)
        return !1;
    return !0;
  }
}
class Oa extends He {
  constructor(t, e, r) {
    super(t, e, r), this.objectSet = new Set(this.data.objectList || []), this.rect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  get startX() {
    return this.x;
  }
  get startY() {
    return this.y;
  }
  get x() {
    return this.rect.x;
  }
  get y() {
    return this.rect.y;
  }
  get width() {
    return this.rect.width;
  }
  get height() {
    return this.rect.height;
  }
  get endX() {
    return this.x + this.width;
  }
  get endY() {
    return this.y + this.height;
  }
  select(t, e = "") {
    this.objectSet.forEach((r) => {
      const i = this.containerInterface.getObjectOrNull(r);
      i != null && (e == "" || e != "" && e == i.renderType) && (i.data.isSelected = !0);
    }), super.select(t);
  }
  release(t = !1) {
    this.objectSet.forEach((e) => {
      const r = this.containerInterface.getObjectOrNull(e);
      r?.release(t);
    }), super.release(t);
  }
  resize() {
    const t = this.data["group.margin"];
    let e = Number.MAX_VALUE, r = Number.MAX_VALUE, i = Number.MIN_VALUE, o = Number.MIN_VALUE;
    this.objectSet.forEach((s) => {
      const a = this.containerInterface.getObjectOrNull(s);
      a !== null && (e = Math.min(a.startX - t, e), i = Math.max(a.endX + t, i), r = Math.min(a.startY - t, r), o = Math.max(a.endY + t, o));
    }), this.data["group.rect"] = this.rect, this.rect.x = e, this.rect.y = r, this.rect.width = i - e, this.rect.height = o - r;
  }
  moveTo() {
    this.render();
  }
  hasObjId(t) {
    return this.objectSet.has(t);
  }
  destroy() {
    this.objectSet.clear(), super.destroy();
  }
  destroyAll() {
    this.objectSet.forEach((t) => {
      const e = this.containerInterface.getObjectOrNull(t);
      e != null && this.containerInterface.removeObject(e);
    }), this.destroy();
  }
  // clear all items in this
  clear() {
    this.objectSet.clear();
  }
  addObject(t) {
    if (this.objectSet.has(t) === !1)
      this.objectSet.add(t), this.resize();
    else
      throw new Error(`Already has added id! '${t}'`);
  }
  removeObject(t) {
    if (this.objectSet.has(t))
      this.objectSet.delete(t), this.resize();
    else
      throw new Error(`There is no id you received in this group!'${t}'`);
  }
}
const yt = 6, Sa = 2, gn = 5, it = [
  ["ir-fw-top-l", "start", "TopLeft"],
  ["ir-fw-top-c", "middle", "TopCenter"],
  ["ir-fw-top-r", "end", "TopRight"],
  ["ir-fw-bottom-l", "start", "BottomLeft"],
  ["ir-fw-bottom-c", "middle", "BottomCenter"],
  ["ir-fw-bottom-r", "end", "BottomRight"]
];
class Ot extends Le {
  svg;
  connectors;
  resizers;
  comments;
  backgroundRect;
  constructor(t, e, r) {
    super(t, e, r), this.svg = this.containerInterface.getSvg(), this.connectors = [], this.resizers = [], this.comments = [], this.backgroundRect = this.group.append("rect").attr("opacity", "0");
  }
  get width() {
    return this.data["node.width"];
  }
  get height() {
    return this.data["node.height"];
  }
  get connectorVisibility() {
    return this.data["node.connectorEnabled"];
  }
  get resizerVisibility() {
    return this.data["node.resizerEnabled"] === !0 && this.data.isSelected;
  }
  _createComments() {
    it.forEach(([t, e]) => {
      this.comments.push(this.group.append("text").attr("class", `${t} ir-fw-unselectable`).attr("text-anchor", e));
    });
  }
  _createResizer() {
    const t = this.group;
    for (const e of this.getResizerPosition()) {
      const r = t.append("rect").attr("x", e[0] - yt / 2).attr("y", e[1] - yt / 2).attr("width", yt).attr("height", yt).attr("fill", "rgb(173, 216, 230)").attr("stroke", "rgb(30, 144, 255)").attr("cursor", e[2]).attr("class", "ir-fw-resizer").attr("visibility", "hidden");
      this.resizers.push(r);
    }
  }
  _createConnector() {
    const t = this.group;
    for (const e of this.getConnectorPosition()) {
      const r = t.append("circle").attr("cx", e.x).attr("cy", e.y).attr("visibility", "hidden").attr("r", this.dataWrapper.get("node.connectorSize")).attr("class", `ir-fw-connector ir-fw-${e.dir}`);
      this.connectors.push(r);
    }
  }
  _renderComments() {
    const e = this.dataWrapper.get("node.commentFontSize"), r = this.width / 2, i = this.height / 2, o = -(i + gn), s = i + gn + e, a = {
      [it[0][0]]: {
        x: -r,
        y: o
      },
      [it[1][0]]: {
        x: 0,
        y: o
      },
      [it[2][0]]: {
        x: r,
        y: o
      },
      [it[3][0]]: {
        x: -r,
        y: s
      },
      [it[4][0]]: {
        x: 0,
        y: s
      },
      [it[5][0]]: {
        x: r,
        y: s
      }
    };
    it.forEach((c, l) => {
      const h = a[c[0]];
      this.comments[l].attr("x", h.x).attr("y", h.y).attr("font-size", e).text(() => this.dataWrapper.get(`node.comment${c[2]}`));
    });
  }
  _renderConnector() {
    if (this.connectorVisibility) {
      this.group.attr("data-connector-visible", "true");
      for (const { x: t, y: e, id: r } of this.getConnectorPosition())
        this.connectors[r].attr("cx", t).attr("cy", e).attr("r", this.dataWrapper.get("node.connectorSize"));
    } else
      this.group.attr("data-connector-visible", "false"), this.connectors.forEach((t) => t.remove());
  }
  _renderResizer() {
    if (this.resizers.length === 0)
      return;
    let t = 0;
    for (const e of this.getResizerPosition()) {
      const r = this.resizers[t], i = r.node();
      this.isHovered && this.resizerVisibility && this.containerInterface.getReadOnly() === !1 && i !== null ? (this.bringToFrontElement(i), r.attr("x", e[0] - yt / 2).attr("y", e[1] - yt / 2).attr("class", "ir-fw-resizer").attr("visibility", "visible").classed("ir-fw-active", !0)) : r.classed("ir-fw-active", !1).attr(
        "visibility",
        this.resizerVisibility && this.containerInterface.getReadOnly() === !1 ? "visible" : "hidden"
      ), ++t;
    }
  }
  *getConnectorPosition() {
    const t = this.dataWrapper.get("node.connectorGap"), e = this.width / 2, r = this.height / 2;
    yield { x: -(t + e), y: 0, dir: "left", id: 0 }, yield { x: e + t, y: 0, dir: "right", id: 1 }, yield { x: 0, y: -(t + r), dir: "top", id: 2 }, yield { x: 0, y: t + r, dir: "bottom", id: 3 };
  }
  *getResizerPosition() {
    const t = this.width / 2, e = this.height / 2;
    yield [-t, -e, "nw-resize"], yield [0, -e, "n-resize"], yield [t, -e, "ne-resize"], yield [-t, 0, "w-resize"], yield [t, 0, "e-resize"], yield [-t, e, "sw-resize"], yield [0, e, "s-resize"], yield [t, e, "se-resize"];
  }
  _create() {
    this._createComments(), this._createConnector(), this._createResizer();
  }
  _getLabelXY({ lineHeight: t, length: e }) {
    return { x: 0, y: t - t * e / 2 - Sa };
  }
  _getLabelRect() {
    const t = this.width, e = this.height;
    return {
      x: -(t / 2),
      y: -(e / 2),
      width: t,
      height: e
    };
  }
  _resizerVisibleBackgroundRect() {
    this.backgroundRect.attr("x", -(this.width / 2)).attr("y", -(this.height / 2)).attr("width", this.width).attr("height", this.height).style("fill", "white");
  }
  render() {
    const t = this.data["node.x"] + this.data["node.width"] / 2, e = this.data["node.y"] + this.data["node.height"] / 2;
    this.group.attr("transform", `translate(${t}, ${e})`), this.resizerVisibility ? this._resizerVisibleBackgroundRect() : this.backgroundRect.style("fill", "none"), super.render(), this._renderComments(), this._renderResizer(), this._renderConnector();
  }
}
const pn = 5, Ft = 10, Yt = 30, Bt = 30, Ca = /* @__PURE__ */ new Set([
  "TopLeft",
  "TopCenter",
  "TopRight",
  "BottomLeft",
  "BottomCenter",
  "BottomRight"
]);
class Ma extends He {
  /**
  * @param {NodeRenderer} renderer
  */
  constructor(t, e, r) {
    super(t, e, r), this.renderer = e;
  }
  get startX() {
    return this.x;
  }
  get startY() {
    const e = this.data["node.commentTopLeft"] || this.data["node.commentTopCenter"] || this.data["node.commentTopRight"] ? pn + this.data["node.commentFontSize"] : 0;
    return this.y - e;
  }
  get resizerEnabled() {
    return this.data["node.resizerEnabled"] === !0;
  }
  get isConnectorEnabled() {
    return this.data["node.connectorEnabled"] === !0;
  }
  get centerX() {
    return this.x + this.width / 2;
  }
  get centerY() {
    return this.y + this.height / 2;
  }
  get x() {
    return this.data["node.x"];
  }
  get y() {
    return this.data["node.y"];
  }
  get width() {
    return this.data["node.width"];
  }
  get height() {
    return this.data["node.height"];
  }
  get endX() {
    return this.x + this.width;
  }
  get endY() {
    const e = this.data["node.commentBottomLeft"] || this.data["node.commentBottomCenter"] || this.data["node.commentBottomRight"] ? pn + this.data["node.commentFontSize"] : 0;
    return this.y + this.height + e;
  }
  set x(t) {
    this.data["node.x"] = t;
  }
  set y(t) {
    this.data["node.y"] = t;
  }
  set width(t) {
    this.data["node.width"] = t;
  }
  set height(t) {
    this.data["node.height"] = t;
  }
  create() {
    super.create();
  }
  getPositionXY(t) {
    switch (t) {
      case "left":
        return {
          x: this.x,
          y: this.y + this.height / 2
        };
      case "right":
        return {
          x: this.x + this.width,
          y: this.y + this.height / 2
        };
      case "top":
        return {
          x: this.x + this.width / 2,
          y: this.y
        };
      case "bottom":
        return {
          x: this.x + this.width / 2,
          y: this.y + this.height
        };
      default:
        throw new Error(`Invalid argument '${t}'`);
    }
  }
  fitSizeOnText() {
    const t = or(this.data), e = Ee * 2;
    this.width = t.width + e, this.height = t.height + e;
  }
  resizeToNorth(t) {
    const e = -(this.height / 2), r = parseInt(e - t);
    this.height + r >= Bt ? (this.y -= r, this.height = this.height + r) : (this.y += this.height - Bt, this.height = Bt);
  }
  resizeToWest(t) {
    const e = -(this.width / 2), r = parseInt(e - t);
    this.width + r >= Yt ? (this.x -= r, this.width = this.width + r) : (this.x += this.width - Yt, this.width = Yt);
  }
  addComment(t, e, r) {
    if (!Ca.has(e))
      throw new Error(`Unknown position value '${e}' Please call with 'TopLeft' or 'TopCenter' or 'TopRight' or 'BottomLeft' or 'BottomCenter' or 'BottomRight'`);
    let i = `node.comment${e}`;
    r && (i += `.${r}`), this.data[i] = t;
  }
  resizeToEast(t) {
    this.width = Math.max(Yt, parseInt(t + this.width / 2));
  }
  resizeToSouth(t) {
    this.height = Math.max(Bt, parseInt(t + this.height / 2));
  }
  isContained(t, e) {
    return t >= this.startX && t <= this.endX && e >= this.startY && e <= this.endY;
  }
  isContainedOnPos(t, e, r) {
    const { x: i, y: o } = this.getPositionXY(t), [s, a, c, l] = [
      i - Ft,
      i + Ft,
      o - Ft,
      o + Ft
    ];
    return e >= s && e <= a && r >= c && r <= l;
  }
}
const ja = '{"objects": []}', _n = {}, ye = {
  saveData(n) {
    fr(_n, n);
  },
  loadData() {
    return ur(_n) ?? ja;
  }
}, Ea = 10, ka = 10, Ia = 500, Ta = 200;
class Aa {
  containerInterface;
  tmpOut = !1;
  isFirefox;
  tooltip;
  constructor(t) {
    this.containerInterface = t, this.tooltip = {
      objId: null,
      mouseOverTimer: null,
      mouseOutTimer: null,
      g: null,
      textCache: new rr()
    }, this.isFirefox = window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  }
  initCommonMouseOverOutAction(t) {
    let e = 0, r = 0;
    t.g.on("mousemove", (i) => {
      e = i.offsetX + Ea, r = i.offsetY + ka;
    }).on("mouseover", () => {
      t.isHovered = !0, this.containerInterface.getSelectNodeOnHover() && t.type === "node" && !this.containerInterface.isDragging() && (this.containerInterface.releaseAllObjects(), t.select(!0)), !(this.containerInterface.getTooltipHidden() || !t.canShowTooltip) && (this.tooltip.mouseOutTimer != null && this.tooltip.mouseOutTimer.stop(), this.tooltip.mouseOverTimer = re(() => {
        t.isHovered && t.onEditing === !1 && t.id !== this.tooltip.objId && !this.containerInterface.getTooltipHidden() && this.createTooltipObj(t.data, e, r);
      }, Ia));
    }).on("mouseout", () => {
      t.isHovered = !1, !(this.containerInterface.getTooltipHidden() || !t.canShowTooltip) && (this.tooltip.mouseOverTimer != null && this.tooltip.mouseOverTimer.stop(), this.tooltip.mouseOutTimer = re(
        () => void (!t.isHovered && this.removeTooltipObj()),
        Ta
      ));
    });
  }
  createTooltipObj(t, e, r) {
    this.removeTooltipObj(), this.tooltip.objId = t.id, this.tooltip.g = this.containerInterface.getSvg().append("g").attr("class", "ir-fw-tooltip");
    const i = this.containerInterface.getObjectOrNull(this.tooltip.objId);
    if (i === null)
      return;
    const o = {
      text: i.getDataOrNull("tooltipText"),
      foreColor: i.getDataOrNull("tooltipForeColor"),
      fontFamily: i.getDataOrNull("fontFamily"),
      fontSize: i.getDataOrNull("tooltipFontSize"),
      textDecoration: i.getDataOrNull("tooltipTextDecoration"),
      padding: i.getDataOrNull("tooltipPadding"),
      fill: i.getDataOrNull("tooltipFill"),
      borderColor: i.getDataOrNull("tooltipBorderColor"),
      borderWidth: i.getDataOrNull("tooltipBorderWidth"),
      borderDash: i.getDataOrNull("tooltipBorderDash"),
      width: 0
    }, s = or(o);
    o.width = Math.min(s.width, i.data.tooltipMaxWidth);
    const a = Re(o);
    this.tooltip.g.append("rect").attr("x", e).attr("y", r).attr("rx", "4").attr("width", o.width + o.padding * 2).attr("height", a.lineHeight * a.length + o.padding * 2).attr("fill", o.fill).attr("stroke", o.borderColor).attr("stroke-width", o.borderWidth).attr("stroke-dasharray", o.borderDash);
    const c = this.tooltip.g.append("text").attr("fill", o.foreColor).attr("font-size", o.fontSize).attr("text-decoration", o.textDecoration);
    cr(
      c,
      a,
      e + o.padding,
      r + o.padding + o.fontSize,
      o
    );
  }
  removeTooltipObj() {
    this.tooltip.g !== null && (this.tooltip.g.remove(), this.tooltip.objId = null, this.tooltip.g = null, this.tooltip.textCache.clear());
  }
  addMouseAction(t) {
    this.initCommonMouseOverOutAction(t);
  }
}
class Na extends Ot {
  constructor(t, e) {
    super(t, "bridge", e);
  }
  _create() {
    this.objects.body = this.group.append("rect"), super._create();
  }
  _render() {
    const t = this.dataWrapper, e = this.width, r = this.height;
    this.objects.body.attr("x", -(e / 2)).attr("y", -(r / 2)).attr("rx", (e + r) / 6).style("width", `${e}px`).style("height", `${r}px`).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke", t.get("borderColor")).attr("stroke-dasharray", t.get("borderDash"));
  }
}
const mt = 15, za = -4, Da = 2;
class Pa extends Ot {
  constructor(t, e) {
    super(t, "comment", e);
  }
  _create() {
    this.objects.body = this.group.append("path").attr("class", "body").classed(this.data.type, !0), super._create();
  }
  _getPath() {
    const t = [], e = this.width / 2, r = this.height / 2, i = -e, o = -r;
    return t.push(`M${i} ${o}`), t.push(`L${e - mt} ${o}`), t.push(`L${e},${o + mt}`), t.push(`L${e},${r}`), t.push(`L${i},${r}`), t.push("Z"), t.push(`M${e - mt} ${o}`), t.push(`L${e - (mt + za)} ${o + (mt + Da)}`), t.push(`L${e} ${o + mt}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper;
    this.objects.body.attr("d", this._getPath()).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke", t.get("borderColor")).attr("stroke-dasharray", t.get("borderDash")), this._createText();
  }
}
const $a = 0.28;
class Ra extends Ot {
  constructor(t, e) {
    super(t, "db", e);
  }
  _create() {
    this.objects.circle = this.group.append("ellipse"), this.objects.body = this.group.append("path"), super._create();
  }
  get circleHeight() {
    return this.height * $a;
  }
  _getPath() {
    const t = [], e = this.height / 2, r = this.circleHeight / 2, i = this.width / 2, o = -i, s = i, a = -e + r, c = e - r;
    return t.push(`M${o} ${a}`), t.push(`A${i} ${r} 0 0 0 ${s} ${a}`), t.push(`V${c}`), t.push(`A${i} ${r} 0 0 1 ${o} ${c}`), t.push(`V${a}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper, e = this.circleHeight / 2, r = this.width / 2, o = -(this.height / 2) + e, s = {
      fill: t.get("node.fill"),
      borderWidth: t.get("borderWidth"),
      borderColor: t.get("borderColor"),
      borderDash: t.get("borderDash")
    };
    this.objects.circle.attr("cx", 0).attr("cy", o).attr("rx", r).attr("ry", e).style("fill", s.fill).style("stroke-width", s.borderWidth).attr("stroke", s.borderColor).attr("stroke-dasharray", s.borderDash), this.objects.body.attr("d", this._getPath()).style("fill", s.fill).style("stroke-width", s.borderWidth).attr("stroke", s.borderColor).attr("stroke-dasharray", s.borderDash), this._createText();
  }
}
class dr extends Le {
  /**
  *
  * @param {*} container
  * @param {*} data
  * @param {*} className
  * @param {IContainer} iContainer
  */
  constructor(t, e, r) {
    super(t, e, r), this.markerId = `${this.containerInterface.getUUID()}_marker_${this.data.id}`, this.objects.marker = this.group.append("svg:defs").append("svg:marker").attr("id", this.markerId), this.objects.markerPath = this.objects.marker.append("path"), this.checkChanged = {
      points: null,
      srcX: 0,
      srcY: 0,
      desX: 0,
      desY: 0
    };
  }
  get width() {
    return this.data["connection.width"];
  }
  get height() {
    return 0;
  }
  get lastPointId() {
    return this.data["connection.points"].length - 1;
  }
  create() {
    super.create(), this.bringToFrontElement(this.objects.sourceConnector.node()), this.bringToFrontElement(this.objects.destinationConnector.node());
  }
  _createConnector() {
    this.objects.sourceConnector = this.group.append("circle").attr("cursor", "crosshair"), this.objects.destinationConnector = this.group.append("circle").attr("cursor", "crosshair");
  }
  _getPosLocation(t, e) {
    let r = 0, i = 0;
    switch (e) {
      case "left":
        r = -(t.width / 2);
        break;
      case "right":
        r = t.width / 2;
        break;
      case "top":
        i = -(t.height / 2);
        break;
      case "bottom":
        i = t.height / 2;
        break;
      default:
        throw new Error(`Invalid argument '${e}'`);
    }
    return {
      x: r,
      y: i
    };
  }
  _getBBox() {
    return this.objects.text.node().getBBox();
  }
  _getLabelRect() {
    const t = this._getBBox(), e = t.width + 10, r = t.height + 10;
    return {
      x: parseFloat(this.objects.text.attr("x")) - e / 2,
      y: parseFloat(this.objects.text.attr("y")) - 5 - this.data.fontSize,
      width: e,
      height: Math.max(r, this.data.fontSize + 10)
    };
  }
  _renderMarker() {
    const t = this.dataWrapper, e = t.get("borderWidth"), r = t.get("connection.arrowSize"), i = t.get("connection.arrowFill"), o = t.get("connection.arrowBorderColor"), s = t.get("connection.arrowBorderWidth"), a = (r + s) / e, c = s / e;
    this.objects.markerPath.attr("fill", i).attr("stroke", o).attr("stroke-width", c);
    const l = t.get("connection.arrowType");
    switch (this.objects.marker.attr("refY", a / 2).attr("markerWidth", a).attr("markerHeight", a).attr("orient", "auto"), l) {
      case "triangle":
        this._renderTriangleMarker(a, c);
        break;
      case "circle":
        this._renderCircleMarker(a, c);
        break;
      default:
        throw new Error(`unknown render type '${l}'`);
    }
  }
  _renderTriangleMarker(t, e) {
    const r = t - e;
    this.objects.marker.attr("refX", t), this.objects.markerPath.attr("d", `M ${e} ${e} L ${r} ${t / 2} L ${e} ${r} z`);
  }
  _renderCircleMarker(t, e) {
    const r = t / 2, i = (t - e) / 2;
    this.objects.marker.attr("refX", r), this.objects.markerPath.attr("d", `M ${r} ${r} m ${i} 0 a ${i} ${i} 0 1 0 -${i * 2} 0 a ${i} ${i} 0 1 0 ${i * 2} 0`);
  }
  _renderConnector() {
    const t = this.dataWrapper, e = this._getSourceLoc(), r = this._getDestinationLoc(), i = {
      size: t.get("connection.connectorSize"),
      fill: t.get("connection.connectorFill")
    };
    this.objects.sourceConnector.attr("cx", e.x).attr("cy", e.y).attr("r", i.size).attr("fill", i.fill).attr("visibility", this.subUiVisibility), this.objects.destinationConnector.attr("cx", r.x).attr("cy", r.y).attr("r", i.size).attr("fill", i.fill).attr("visibility", this.subUiVisibility);
  }
  _getSourceLoc() {
    return this._getNodePositionLoc(
      this.data["connection.sourceObjId"],
      this.data["connection.sourcePos"],
      0
    );
  }
  _getDestinationLoc() {
    return this._getNodePositionLoc(
      this.data["connection.destinationObjId"],
      this.data["connection.destinationPos"],
      this.lastPointId
    );
  }
  _recordLastInfo(t, e) {
    this.checkChanged.points = this.data["connection.points"], this.checkChanged.srcX = t.x, this.checkChanged.srcY = t.y, this.checkChanged.desX = e.x, this.checkChanged.desY = e.y;
  }
  _updatePoints(...t) {
    this.data["connection.points"] === void 0 || this.data["connection.points"] === null ? this.data["connection.points"] = [] : this.data["connection.points"].splice(
      0,
      this.data["connection.points"].length
    ), t.forEach((e) => this.data["connection.points"].push(e));
  }
  _isChanged(t, e) {
    try {
      const r = this.checkChanged.srcX - this.checkChanged.desX, i = t.x - e.x, o = this.checkChanged.srcY - this.checkChanged.desY, s = t.y - e.y;
      return r !== i || o !== s;
    } finally {
      this._recordLastInfo(t, e);
    }
  }
  _getNodePositionLoc(t, e, r) {
    if (t && e) {
      const i = this.containerInterface.getObjectOrNull(t);
      if (i === null)
        return this.data["connection.points"] && this.data["connection.points"].length > r ? {
          x: this.data["connection.points"][r].x,
          y: this.data["connection.points"][r].y
        } : {
          x: 0,
          y: 0
        };
      {
        const o = this._getPosLocation(i, e), s = la(i.renderer.group.attr("transform"));
        return {
          x: o.x + s.translateX,
          y: o.y + s.translateY
        };
      }
    } else {
      if (this.data["connection.points"] && this.data["connection.points"].length > r)
        return {
          x: this.data["connection.points"][r].x,
          y: this.data["connection.points"][r].y
        };
      throw new Error("Invalid points value.");
    }
  }
}
class La extends dr {
  constructor(t, e) {
    super(t, "direct", e);
  }
  _create() {
    this.objects.line = this.group.append("line").attr("marker-end", `url(#${this.markerId})`), this.objects.wideLine = this.group.append("line").attr("class", "wide-line").style("stroke", "rgba(0, 0, 0, 0)"), this.objects.rect = this.group.append("rect"), this._createConnector();
  }
  _getLabelXY(t) {
    const e = this._getSourceLoc(), r = this._getDestinationLoc();
    return {
      x: e.x + (r.x - e.x) / 2,
      y: e.y + (r.y - e.y) / 2 + (this.data.fontSize - this.data.fontSize * t.length / 2)
    };
  }
  _render() {
    const t = this.dataWrapper, e = this.data["connection.points"], r = this._getSourceLoc(), i = this._getDestinationLoc(), o = {
      borderColor: t.get("borderColor"),
      borderWidth: t.get("borderWidth"),
      borderDash: t.get("borderDash"),
      text: t.get("text"),
      fill: t.get("connection.textBorderFill"),
      textBorderColor: t.get("connection.textBorderColor"),
      textBorderWidth: t.get("connection.textBorderWidth"),
      textBorderDash: t.get("connection.textBorderDash")
    };
    if (this._renderConnector(), this._renderMarker(), this._isChanged(r, i) && this._updatePoints(r, i), this.objects.line.attr("x1", e[0].x).attr("y1", e[0].y).attr("x2", e[this.lastPointId].x).attr("y2", e[this.lastPointId].y).style("stroke", o.borderColor).style("stroke-width", o.borderWidth).style("stroke-dasharray", o.borderDash), this.objects.wideLine.attr("x1", e[0].x).attr("y1", e[0].y).attr("x2", e[this.lastPointId].x).attr("y2", e[this.lastPointId].y).style("stroke-width", Math.max(o.borderWidth, 5)), this._createText(), o.text) {
      const s = this._getBBox(), a = s.width + 10, c = s.height + 10;
      this.objects.rect.attr("x", s.x - 5).attr("y", s.y - 5).attr("width", a).attr("height", c).style("fill", o.fill).style("stroke", o.textBorderColor).style("stroke-width", o.textBorderWidth).style("stroke-dasharray", o.textBorderDash);
    } else
      this.objects.rect.style("fill", "transparent").style("stroke", "transparent");
  }
}
const Vt = 20, ut = 10, yn = ut / 2;
class Ha extends dr {
  constructor(t, e) {
    super(t, "elbow", e), this.adjusterList = [], this.elbowMap = {
      top: this._topTo,
      bottom: this._bottomTo,
      left: this._leftTo,
      right: this._rightTo
    };
  }
  _create() {
    this.objects.polyline = this.group.append("polyline").attr("fill", "none").attr("marker-end", `url(#${this.markerId})`), this.objects.wideLine = this.group.append("polyline").attr("fill", "none").style("stroke", "rgba(0, 0, 0, 0)"), this.objects.rect = this.group.append("rect"), this._createConnector();
    const t = this.data["connection.points"];
    t.length === 2 ? this.refreshAdjustList() : (this._recordLastInfo(this._getSourceLoc(), this._getDestinationLoc()), this._createAdjustList(t.slice(1, t.length - 1)));
  }
  _getNextXY(t, e) {
    switch (t) {
      case "left":
        return { x: e.x - Vt, y: e.y };
      case "right":
        return { x: e.x + Vt, y: e.y };
      case "top":
        return { x: e.x, y: e.y - Vt };
      case "bottom":
        return { x: e.x, y: e.y + Vt };
      default:
        throw new Error(`Unknown pos '${t}'`);
    }
  }
  *_topTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, l = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        yield { x: s, y: Math.min(r.y, i.y) };
        break;
      }
      case "bottom": {
        t.y > e.y ? yield { x: s, y: a } : (yield { x: (t.x + s) / 2, y: r.y }, yield { x: s, y: a }, yield { x: (s + i.x) / 2, y: i.y });
        break;
      }
      case "left": {
        t.x < e.x ? t.y < e.y && (yield { x: (t.x + s) / 2, y: r.y }, yield { x: s, y: l }) : t.y < e.y ? (yield { x: c, y: r.y }, yield { x: i.x, y: l }) : (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 });
        break;
      }
      case "right": {
        t.x < e.x ? t.y < e.y ? (yield { x: c, y: r.y }, yield { x: i.x, y: l }) : (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 }) : t.y < e.y && (yield { x: (r.x + s) / 2, y: r.y }, yield { x: s, y: l });
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  *_bottomTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, l = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        t.y < e.y ? yield { x: s, y: a } : (yield { x: (t.x + s) / 2, y: r.y }, yield { x: s, y: a }, yield { x: (s + i.x) / 2, y: i.y });
        break;
      }
      case "bottom": {
        yield { x: s, y: Math.max(r.y, i.y) };
        break;
      }
      case "left": {
        t.y < e.y ? t.x > e.x && (yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 }) : (yield { x: c, y: r.y }, yield { x: i.x, y: l });
        break;
      }
      case "right": {
        if (t.y < e.y) {
          if (t.x < e.x) {
            const h = (r.y + l) / 2;
            yield { x: c, y: h }, yield { x: i.x, y: (h + i.y) / 2 };
          }
        } else
          yield { x: c, y: r.y }, yield { x: i.x, y: l };
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  *_leftTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, l = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        t.y < e.y ? t.x < e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a }) : t.x < e.x ? (yield { x: r.x, y: l }, yield { x: c, y: i.y }) : (yield { x: s, y: l }, yield { x: (s + i.x) / 2, y: i.y });
        break;
      }
      case "bottom": {
        t.y < e.y ? t.x < e.x ? (yield { x: r.x, y: l }, yield { x: c, y: i.y }) : (yield { x: s, y: l }, yield { x: (s + i.x) / 2, y: i.y }) : t.x < e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a });
        break;
      }
      case "left": {
        t.x < e.x ? yield { x: r.x, y: a } : yield { x: i.x, y: a };
        break;
      }
      case "right": {
        t.x < e.x ? (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 }) : yield { x: s, y: a };
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  *_rightTo(t, e, r, i, o) {
    const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2, c = (r.x + i.x) / 2, l = (r.y + i.y) / 2;
    switch (o) {
      case "top": {
        t.y < e.y ? t.x > e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: (a + i.y) / 2 }) : t.x < e.x ? (yield { x: s, y: l }, yield { x: (s + i.x) / 2, y: i.y }) : (yield { x: r.x, y: l }, yield { x: c, y: i.y });
        break;
      }
      case "bottom": {
        t.y < e.y ? t.x < e.x ? (yield { x: s, y: l }, yield { x: (s + i.x) / 2, y: i.y }) : (yield { x: r.x, y: l }, yield { x: c, y: i.y }) : t.x > e.x && (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a });
        break;
      }
      case "left": {
        t.x < e.x ? yield { x: s, y: a } : (yield { x: r.x, y: (r.y + a) / 2 }, yield { x: c, y: a }, yield { x: i.x, y: (a + i.y) / 2 });
        break;
      }
      case "right": {
        yield { x: Math.max(r.x, i.x), y: a };
        break;
      }
      default:
        throw new Error(`Unknown pos '${o}'`);
    }
  }
  _getElbowPoints(t, e, r, i) {
    const o = this._getNextXY(r, t), s = this._getNextXY(i, e), a = [], c = this.elbowMap[r];
    if (a.push({ x: t.x, y: t.y }), c === void 0)
      console.error(`unknown position value '${r}'`);
    else
      for (const l of c(t, e, o, s, i))
        a.push(l);
    return a.push({ x: e.x, y: e.y }), a;
  }
  /**
  *
  * @param {[]} points
  * @returns {String}
  */
  _getPolylinePath(t) {
    const e = [];
    let r = t[0].x, i = t[0].y, o = this._getFirstPointDir() === "v";
    e.push([r, i]);
    for (let s = 0; s < t.length - 1; ++s)
      o ? i = t[s + 1].y : r = t[s + 1].x, e.push([r, i]), o = !o;
    return e.push([t[t.length - 1].x, t[t.length - 1].y]), e;
  }
  _getLabelPos(t) {
    const e = t[1], r = t[2];
    return {
      x: (e[0] + r[0]) / 2,
      y: (e[1] + r[1]) / 2
    };
  }
  _getPosToDir(t) {
    switch (t) {
      case "top":
      case "bottom":
        return "v";
      case "left":
      case "right":
        return "h";
      default:
        throw new Error(`Unknown sourcePos '${t}'`);
    }
  }
  _getFirstPointDir() {
    if (this.data["connection.sourcePos"] !== null)
      return this._getPosToDir(this.data["connection.sourcePos"]);
    {
      const t = this._getPos(this._getSourceLoc(), this._getDestinationLoc());
      return this._getPosToDir(t.srcPos);
    }
  }
  _createAdjustList(t) {
    const e = this.data;
    let r = this._getFirstPointDir() === "v";
    this.adjusterList.forEach((i) => i.remove()), this.adjusterList.splice(0, this.adjusterList.length), t.forEach((i, o) => {
      const s = !r;
      let a = 0, c = 0, l = null;
      r = !r;
      const h = this.group.append("rect").attr("x", i.x - ut / 2).attr("y", i.y - ut / 2).attr("width", ut).attr("height", ut).attr("class", "adjuster").attr("cursor", "move").call(at().filter(() => this.containerInterface.getReadOnly() === !1).on("start", (f) => {
        st(f.sourceEvent.target), a = f.x, c = f.y, l = ke(this.data["connection.points"]), this.containerInterface.adjDragStartCallback();
      }).on("drag", (f) => {
        const u = e["connection.points"], _ = u[o + 1];
        if (s) {
          const x = a - f.x;
          _.x -= x, a = f.x, h.attr("x", _.x - ut / 2), o > 0 && (u[o].x -= x / 2), o + 3 < u.length && (u[o + 2].x -= x / 2);
        } else {
          const x = c - f.y;
          _.y -= x, c = f.y, h.attr("y", _.y - ut / 2), o > 0 && (u[o].y -= x / 2), o + 3 < u.length && (u[o + 2].y -= x / 2);
        }
        this._render();
      }).on("end", () => {
        this.containerInterface.adjDragEndCallback(
          this.data,
          l,
          ke(this.data["connection.points"])
        );
      }));
      this.adjusterList.push(h);
    });
  }
  _getPos(t, e) {
    const r = {
      srcPos: this.data["connection.sourcePos"],
      desPos: this.data["connection.destinationPos"]
    }, i = Math.abs(t.y - e.y), o = Math.abs(t.x - e.x);
    return r.srcPos || (i > o ? r.srcPos = t.y > e.y ? "top" : "bottom" : r.srcPos = t.x > e.x ? "left" : "right"), r.desPos || (i > o ? r.desPos = t.y > e.y ? "bottom" : "top" : r.desPos = t.x > e.x ? "right" : "left"), r;
  }
  refreshAdjustList() {
    const t = this._getSourceLoc(), e = this._getDestinationLoc(), r = this._getPos(t, e), i = this._getElbowPoints(
      t,
      e,
      r.srcPos,
      r.desPos
    );
    this._createAdjustList(i.slice(1, i.length - 1)), this._updatePoints(...i);
  }
  _getLabelXY(t) {
    const e = this._getLabelPos(this._getPolylinePath(this.data["connection.points"]));
    return {
      x: e.x,
      y: e.y + (this.data.fontSize - this.data.fontSize * t.length / 2)
    };
  }
  _renderAdjustList() {
    this.adjusterList.forEach((t, e) => {
      const r = this.data["connection.points"][e + 1];
      t.attr("x", r.x - yn).attr("y", r.y - yn), t.attr("visibility", this.group.attr("data-status") !== "edit" ? this.subUiVisibility : "hidden"), this.bringToFrontElement(t.node());
    });
  }
  _render() {
    const t = this.data, e = this.dataWrapper, r = this._getSourceLoc(), i = this._getDestinationLoc();
    this._isChanged(r, i) && this.refreshAdjustList(), this._renderConnector(), this._renderMarker(), this._renderAdjustList();
    const s = this._getPolylinePath(t["connection.points"]).map((a) => `${a[0]},${a[1]}`).join(", ");
    if (this.objects.polyline.attr("points", s).style("stroke", e.get("borderColor")).style("stroke-width", e.get("borderWidth")).style("stroke-dasharray", e.get("borderDash")), this.objects.wideLine.attr("points", s).style("stroke-width", Math.max(e.get("borderWidth"), 5)), this._createText(), t.text) {
      const a = this._getBBox(), c = a.width + 10, l = a.height + 10;
      this.objects.rect.attr("x", a.x - 5).attr("y", a.y - 5).attr("width", c).attr("height", l).style("fill", e.get("connection.textBorderFill")).style("stroke", e.get("connection.textBorderColor")).style("stroke-width", e.get("connection.textBorderWidth")).style("stroke-dasharray", e.get("connection.textBorderDash"));
    } else
      this.objects.rect.style("fill", "transparent").style("stroke", "transparent");
  }
}
class Xa extends Le {
  constructor(t, e) {
    super(t, "group", e);
  }
  _create() {
    this.objects.rect = this.group.append("rect").attr("fill", "none").attr("visibility", "hidden"), this.objects.thickRect = this.group.append("rect").attr("fill", "none").attr("opacity", "0").attr("visibility", "hidden");
  }
  _render() {
    const t = this.data["group.rect"], e = this.dataWrapper;
    if (this.data.isSelected || this.data["group.borderAlwaysAppearance"]) {
      const r = e.get("borderWidth");
      this.objects.rect.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height).attr("stroke", e.get("borderColor")).attr("stroke-width", r).attr("stroke-dasharray", e.get("borderDash")).attr("visibility", "visible"), this.objects.thickRect.attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height).attr("stroke", "white").attr("stroke-width", Math.max(r, 8)).attr("visibility", "visible");
    } else
      this.objects.rect.attr("visibility", "hidden"), this.objects.thickRect.attr("visibility", "hidden");
  }
}
class Fa extends Ot {
  constructor(t, e) {
    super(t, "if", e);
  }
  _create() {
    this.objects.body = this.group.append("polygon"), super._create();
  }
  getPolygon() {
    const t = [], e = this.width / 2, r = this.height / 2;
    return t.push(`${-e},0`), t.push(`0,${-r}`), t.push(`${e},0`), t.push(`0,${r}`), t.join(" ");
  }
  _render() {
    const t = this.dataWrapper;
    this.objects.body.attr("points", this.getPolygon()).attr("fill", t.get("node.fill")).attr("stroke", t.get("borderColor")).attr("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")), this._createText();
  }
}
class Ya extends Ot {
  constructor(t, e) {
    super(t, "return", e);
  }
  _create() {
    this.objects.body = this.group.append("rect"), super._create();
  }
  _render() {
    const t = this.dataWrapper, e = this.width, r = this.height;
    this.objects.body.attr("x", -(e / 2)).attr("y", -(r / 2)).attr("rx", t.get("node.borderRadius")).attr("width", e).attr("height", r).style("fill", t.get("node.fill")).attr("stroke", t.get("borderColor")).style("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")), this._createText();
  }
}
class Ba extends Ot {
  constructor(t, e) {
    super(t, "start", e);
  }
  _create() {
    this.objects.body = this.group.append("rect"), super._create();
  }
  _render() {
    const t = this.dataWrapper, e = this.objects, r = this.width, i = this.height;
    e.body.attr("x", -(r / 2)).attr("y", -(i / 2)).attr("rx", i / 2).attr("width", r).attr("height", i).style("fill", t.get("node.fill")).style("stroke-width", t.get("borderWidth")).attr("stroke-dasharray", t.get("borderDash")).attr("stroke", t.get("borderColor")), this._createText();
  }
}
class Va {
  nodeRenderMap = /* @__PURE__ */ new Map();
  connectionRenderMap = /* @__PURE__ */ new Map();
  etcRenderMap = /* @__PURE__ */ new Map();
  constructor() {
    this.nodeRenderMap.set("start", Ba), this.nodeRenderMap.set("if", Fa), this.nodeRenderMap.set("return", Ya), this.nodeRenderMap.set("comment", Pa), this.nodeRenderMap.set("bridge", Na), this.nodeRenderMap.set("db", Ra), this.connectionRenderMap.set("direct", La), this.connectionRenderMap.set("elbow", Ha), this.etcRenderMap.set("group", Xa);
  }
  /**
  *
  * @param {Map<String, BaseRenderer>} map
  * @param {string} render
  * @param {() => BaseRenderer} constructor
  */
  _add(t, e, r) {
    t.set(e, r);
  }
  /**
  *
  * @param {Map<String, BaseRenderer>} map
  * @param {String} key
  */
  _get(t, e) {
    if (t.has(e))
      return t.get(e);
    throw new Error(`There is no renderer (key: '${e}')`);
  }
  addRenderMap(t, e, r) {
    switch (t) {
      case "node":
        this._add(this.nodeRenderMap, e, r);
        break;
      case "connection":
        this._add(this.connectionRenderMap, e, r);
        break;
      default:
        throw new Error(`Unknown type '${t}'`);
    }
  }
  /**
  * @param {String} type
  * @param {String} render
  * @returns
  */
  getRenderConstructor(t, e) {
    switch (t) {
      case "node":
        return this._get(this.nodeRenderMap, e);
      case "connection":
        return this._get(this.connectionRenderMap, e);
      default:
        return this._get(this.etcRenderMap, e);
    }
  }
  changeRender(t, e, r) {
    const i = this.getRenderConstructor(t.type, e), o = new i(t.data, r);
    t.changeRender(e, o);
  }
}
class Ua {
  objSeq;
  clickSeq;
  iContainer;
  constructor(t) {
    this.objSeq = 0, this.clickSeq = 0, this.iContainer = t, this.clear();
  }
  clear() {
    this.clearObjSeq(), this.clearClickSeq();
  }
  clearObjSeq() {
    this.objSeq = 1;
  }
  clearClickSeq() {
    this.clickSeq = 0;
  }
  getObjSeqId() {
    for (; this.iContainer.getObjectOrNull(this.objSeq) !== null; )
      ++this.objSeq;
    return this.objSeq;
  }
  increaseClickSeq() {
    return ++this.clickSeq;
  }
}
const Wa = {
  ...tr,
  ...er,
  ...nr,
  ...he
};
function qa(n) {
  return new Promise((t, e) => {
    const r = new Image();
    r.onerror = (i) => e(i), r.src = n, r.onload = () => {
      const i = document.getSelection();
      if (!i) {
        e("selection is null when copying image");
        return;
      }
      const o = document.createRange();
      document.body.appendChild(r), o.selectNode(r), i.removeAllRanges(), i.addRange(o), document.execCommand("copy"), r.remove(), t();
    };
  });
}
function mn(n, t) {
  const e = {
    dist: Number.MAX_VALUE,
    pos: null
  };
  for (const r of ie) {
    const i = t.getPositionXY(r), o = sr(i, n);
    o < e.dist && (e.dist = o, e.pos = r);
  }
  return e.pos;
}
function Ga(n, t) {
  const e = {
    dist: Number.MAX_VALUE,
    sourcePos: "",
    destinationPos: ""
  };
  for (const r of ie)
    for (const i of ie) {
      const o = n.getPositionXY(r), s = t.getPositionXY(i), a = sr(o, s);
      a < e.dist && (e.dist = a, e.sourcePos = r, e.destinationPos = i);
    }
  return e;
}
function Ka(n) {
  const t = {};
  return {
    emit: (e, r) => {
      t[e] && t[e].forEach((i) => i.apply(n, r));
    },
    on: (e, r) => (t[e] || (t[e] = []), t[e].push(r), r),
    off: (e, r) => {
      if (!t[e]) return !1;
      const i = t[e].indexOf(r);
      return i < 0 ? !1 : (t[e].splice(i, 1), !0);
    }
  };
}
const Za = 255, bn = 8, wn = 8, me = "ir-style/flowchart", xn = 0.4, vn = 3, Ut = 5, Ja = /* @__PURE__ */ new Set(["isHovered", "isSelected"]), ot = lt;
class ac extends yr {
  _defaultFontFamily;
  _wheelZoom = !0;
  _gridMode = !1;
  _editMode = !1;
  _readonly = !1;
  _simpleConnectingMode = !1;
  _moveScreenOnSelect = !1;
  _selectNodeOnHover = !1;
  _tooltipHidden = !1;
  _traceMode = !1;
  _singleSelection = !1;
  _isChanged = !1;
  _isDragging = !1;
  _canvasMoveMode = !1;
  _fitSizeMode = !1;
  // DOM 감싸는 영역(wrapper) 레이아웃 사이즈
  _wrapperSize = { width: 0, height: 0 };
  // 내부 svg 컨텐츠 사이즈
  _svgSize = { width: 0, height: 0 };
  // appendMode context 저장
  _appendMode = { mode: null, data: null, dragged: !1 };
  _appendingObject = null;
  _selection = {
    rect: null,
    startX: 0,
    startY: 0
  };
  _cursorStatus = { curPosX: 0, curPosY: 0, isDragging: !1 };
  _div;
  _copySpan;
  _objectManager;
  _containerInterface;
  _renderManager;
  _seqMng;
  _objMouseHandler;
  _actionController;
  _moveHandler;
  _resizeHandler;
  theme;
  /**
   * `IRFlowchart`는 `class` 형태로 제공된다. 그러므로, new 키워드를 이용하여 생성자 인자에 맞는 객체 인스턴스를 생성하여 사용한다.\
   * 생성자 인자는 `IRFlowchartArgs`라는 단일 타입으로 정의된다.
   */
  constructor(t) {
    super({ contextElement: t.contextElement });
    const {
      contextElement: e,
      width: r,
      height: i,
      theme: o,
      fitSizeMode: s = !1
    } = t;
    this._fitSizeMode = s, this._logger = _a(this.uuid.substring(0, 4)), this.keyMap = {
      ArrowLeft: [() => this.handleKeydownArrows(-ot, 0)],
      ArrowRight: [() => this.handleKeydownArrows(ot, 0)],
      ArrowDown: [() => this.handleKeydownArrows(0, ot)],
      ArrowUp: [() => this.handleKeydownArrows(0, -ot)],
      Delete: [() => this.handleKeydownDelete()],
      Escape: [() => this.handleKeydownEscape()],
      F2: [() => this.handleKeydownF2()],
      // undo
      "^z": [() => this.undoAction()],
      "^Z": [() => this.undoAction()],
      // redo
      "^y": [() => this.redoAction()],
      "^Y": [() => this.redoAction()],
      // select all
      "^a": [() => this.selectAllObjects()],
      "^A": [() => this.selectAllObjects()],
      // cut copy paste
      "^x": [() => this._beforeCopyPaste(), !0],
      "^X": [() => this._beforeCopyPaste(), !0],
      "^c": [() => this._beforeCopyPaste(), !0],
      "^C": [() => this._beforeCopyPaste(), !0],
      "^v": [() => this._beforeCopyPaste(), !0],
      "^V": [() => this._beforeCopyPaste(), !0]
    }, this.emitter = Ka(this);
    const { div: a, svg: c, span: l } = xa(this.uuid);
    this._div = a, this._copySpan = l, a.addEventListener("keydown", (h) => {
      if (this._editMode || this._readonly) {
        this._logger.debug("InnoFlowchart.handleKeydown()", "Cancel because of editMode or readonly mode");
        return;
      }
      const f = `${h.ctrlKey ? "^" : ""}${h.key}`, u = this.keyMap[f];
      u && (u[1] !== !0 && h.preventDefault(), u[0](h));
    }), a.addEventListener("copy", this._onNativeCopy.bind(this)), a.addEventListener("cut", this._onNativeCut.bind(this)), a.addEventListener("paste", this._onNativePaste.bind(this)), this.addCoreElement(a), e.appendChild(a), this._initD3Elements(a, c, r, i), this._containerInterface = {
      // Manipulation API
      releaseAllObjects: () => this.releaseAllObjects(),
      addRenderObj: (h) => this.add(h),
      removeObject: (h) => this.remove(h),
      initDrag: (h) => this._initDrag(h),
      terminateDrag: (h) => this._terminateDrag(h),
      isDragging: () => this._isDragging,
      changeObjRender: (h, f) => this._changeObjRender(h, f),
      // Callback
      adjDragStartCallback: () => this._adjDragStartCallbackHandler(),
      adjDragEndCallback: (h, f, u) => this._adjDragEndCallbackHandler(h, f, u),
      editTextCallback: (h, f, u) => this._editTextCallbackHandler(h, f, u),
      editTextModeCallback: (h) => this._editTextModeCallback(h),
      renderCallback: (h) => this._renderCallBack(h),
      observerCallback: (h) => this._observerCallback(h),
      selectCallback: (h, f, u) => this._selectCallbackHandler(h, f, u),
      releaseCallback: (h, f) => this._releaseCallbackHandler(h, f),
      // getter / setter
      setEditMode: (h) => this._editMode = h,
      getLogger: () => this._logger,
      getSvg: () => this.d3Svg,
      getObjectOrNull: (h) => this.getObjectOrNull(h),
      getSelectNodeOnHover: () => this._selectNodeOnHover,
      getTooltipHidden: () => this._tooltipHidden,
      getReadOnly: () => this._readonly,
      isAppending: () => this._appendMode.mode === "append",
      getUUID: () => this.uuid
    }, this._objectManager = new ma(), this._renderManager = new Va(), this._seqMng = new Ua(this._containerInterface), this._objMouseHandler = new Aa(this._containerInterface), this._actionController = new Zs(this._containerInterface, Za), this._moveHandler = new ba(this._actionController, this._objectManager, this._containerInterface), this._resizeHandler = new wa(this._actionController, this._objectManager, this._containerInterface), this._defaultFontFamily = getComputedStyle(this.contextElement).fontFamily, this.theme = {
      ...Wa,
      ...o
    }, this.defaultRule = fa, this.zoomTo(1), this.render();
  }
  /**
   * @returns 문자열 "flowchart"를 반환한다.
   */
  get componentLabel() {
    return "flowchart";
  }
  /**
   * @returns 현재 flowchart가 렌더링된 HTMLElement를 반환한다.
   */
  get div() {
    return this._div;
  }
  /**
   * @returns 현재 flowchart가 렌더링된 svg요소를 반환한다.
   */
  get svgElement() {
    return this.d3Svg.node();
  }
  /**
   * @returns 현재 flowchart의 undo와 redo 스택을 가지고 있는 ActionController를 반환한다.
   */
  get actionController() {
    return this._actionController;
  }
  /**
   * 현재 flowchart가 읽기 전용 모드인지 확인한다.
   */
  get readonly() {
    return this._readonly;
  }
  /**
   * 현재 flowchart가 연결선 최단 거리 자동 설정 모드인지 확인한다.
   */
  get simpleConnectingMode() {
    return this._simpleConnectingMode;
  }
  /**
   * 현재 flowchart가 마우스 상호작용 비활성화 모드인지 확인한다.
   */
  get editMode() {
    return this._editMode;
  }
  /**
   * 현재 flowchart가 눈금선 모드인지 확인한다.
   */
  get gridMode() {
    return this._gridMode;
  }
  /**
   * 현재 flowchart가 툴팁 숨김 모드인지 확인한다.
   */
  get tooltipHidden() {
    return this._tooltipHidden;
  }
  /**
   * 현재 flowchart에 설정된 fitSizeMode를 확인한다.\
   * flowchart를 생성할 때만 설정 가능하며, setter로 설정할 수 없다.
   */
  get fitSizeMode() {
    return this._fitSizeMode;
  }
  /**
   * 현재 flowchart가 노드 선택 시 스크롤 중앙 이동 모드인지 확인한다.
   */
  get moveScreenOnSelect() {
    return this._moveScreenOnSelect;
  }
  /**
   * 현재 flowchart가 마우스 hover시 노드 선택 모드인지 확인한다.
   */
  get selectNodeOnHover() {
    return this._selectNodeOnHover;
  }
  /**
   * 현재 flowchart가 ctrl + 마우스 wheel로 줌을 할 수 있는 모드인지 확인한다.
   */
  get wheelZoom() {
    return this._wheelZoom;
  }
  /**
   * 현재 flowchart가 디버그 모드인지 확인한다.
   */
  get traceMode() {
    return this._traceMode;
  }
  /**
   * 현재 flowchart가 단일 선택 모드인지 확인한다.
   */
  get singleSelection() {
    return this._singleSelection;
  }
  /**
   * 현재 flowchart의 읽기 전용 모드를 설정한다.\
   * `true` 할당 시, flowchart 모든 요소의 편집이 제한된다.
   */
  set readonly(t) {
    this._readonly !== t && (this._readonly = t, this.classedOnSvg(t, "readonly"), this._logger.info(`readonly property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 연결선 최단 거리 자동 설정 모드를 설정한다.\
   * `true` 할당 시, 노드를 조작할 때 노드간 연결선을 최단 거리로 자동으로 설정한다.
   */
  set simpleConnectingMode(t) {
    this._simpleConnectingMode !== t && (this._simpleConnectingMode = t, this.classedOnSvg(t, "simple"), this._logger.info(`simpleConnectingMode property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 마우스 상호작용 비활성화 모드를 설정한다.\
   * `true` 할당 시, flowchart 내부 요소의 마우스 상호작용이 비활성화 된다.
   */
  set editMode(t) {
    this._editMode !== t && (this._editMode = t, this.classedOnSvg(t, "edit-mode"), this._logger.info(`editMode property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 눈금선 모드를 설정한다.\
   * `true` 할당 시, flowchart 내부 패널에 눈금선을 보여준다.
   */
  set gridMode(t) {
    this._gridMode !== t && (this._gridMode = t, this.d3Grid.attr("visibility", this._gridMode ? "visible" : "hidden"), this.classedOnSvg(t, "flowchart-grid"), this._logger.info(`gridMode property is changed to '${t}'`), this.render());
  }
  /**
   * 현재 flowchart의 툴팁 숨김 모드를 설정한다.\
   * `true` 할당 시, flowchart의 툴팁이 숨김 처리된다.
   */
  set tooltipHidden(t) {
    this._tooltipHidden !== t && (this._tooltipHidden = t, this.classedOnSvg(t, "ir-fw-tooltip-hidden"), this._logger.info(`tooltipHidden property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 노드 선택 시 스크롤 중앙 이동 모드를 설정한다.\
   * `true` 할당 시, flowchart의 노드 선택 시 스크롤을 이동하여 노드를 중앙에 위치시킨다.
   */
  set moveScreenOnSelect(t) {
    this._moveScreenOnSelect !== t && (this._moveScreenOnSelect = t, this.classedOnSvg(t, "move-screen-on-select"), this._logger.info(`moveScreenOnSelect property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 마우스 hover시 노드 선택 모드를 설정한다.\
   * `true` 할당 시, flowchart의 노드가 마우스 hover시에도 선택된다.
   */
  set selectNodeOnHover(t) {
    this._selectNodeOnHover !== t && (this._selectNodeOnHover = t, this.classedOnSvg(t, "select-node-on-hover"), this._logger.info(`selectNodeOnHover property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 ctrl + 마우스 wheel로 줌을 할 수 있는 모드인지를 설정한다.\
   * 기본적으로 `true`가 할당되어 있으며, `false` 할당 시 flowchart 패널 내에서 ctrl + 마우스 wheel 줌은 동작하지 않는다.
   */
  set wheelZoom(t) {
    this._wheelZoom !== t && (this._wheelZoom = t, this.classedOnSvg(t, "wheel-zoom"), this._logger.info(`wheelZoom property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 디버그 모드를 설정한다.\
   * `true` 할당 시, 노드에 대한 자세한 로그를 확인할 수 있다.
   */
  set traceMode(t) {
    this._traceMode !== t && (this._logger.logLevel = t ? "INFO" : "ERROR", this._traceMode = t, this.classedOnSvg(t, "trace"), this._logger.info(`traceMode property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 단일 선택 모드를 설정한다.\
   * `true` 할당 시, 요소의 단일 선택만을 허용한다.
   */
  set singleSelection(t) {
    this._singleSelection !== t && (this._singleSelection = t, this.classedOnSvg(t, "single-select"), this._logger.info(`singleSelection property is changed to '${t}'`));
  }
  /**
   * 현재 flowchart의 캔버스 이동 모드를 설정한다.\
   * `true` 할당 시, flowchart의 내부 패널을 드래그 시 캔버스를 이동시킬 수 있다.
   */
  set canvasMoveMode(t) {
    this._canvasMoveMode !== t && (this._canvasMoveMode = t, this.classedOnSvg(t, "canvas-move"), this._logger.info(`canvasMoveMode property is changed to '${t}'`));
  }
  _onNativeCopy(t) {
    t.__IGNORE__ || (this._logger.info("InnoFlowchart.#onNativeCopy()"), ue(t.clipboardData, new Error("no clipboardData")), t.clipboardData.setData(me, JSON.stringify(this._getClipInfo())), t.preventDefault());
  }
  _onNativeCut(t) {
    t.__IGNORE__ || (this._logger.info("InnoFlowchart.#onNativeCut()"), this.getSelectedObjects().length !== 0 && (ue(t.clipboardData, new Error("no clipboardData")), t.clipboardData.setData(me, JSON.stringify(this._getClipInfo())), this.removeSelected(), t.preventDefault()));
  }
  _onNativePaste(t) {
    if (t.__IGNORE__) return;
    if (this._logger.info("InnoFlowchart.#onNativePaste()"), ue(t.clipboardData, new Error("no clipboardData")), this._editMode || this._appendMode.mode != null) {
      this._logger.debug("InnoFlowchart.paste()", "Could not paste because of edit or append mode");
      return;
    }
    const e = t.clipboardData.getData(me);
    if (!e) return this._logger.warn("InnoFlowchart.#onNativePaste()", "no data");
    this._createPastingObjs(JSON.parse(e)), t.preventDefault();
  }
  _onContextMenu(t) {
    const e = () => {
      if (!(t.target instanceof Element)) return;
      const r = gr("[data-obj-id]", "svg", t.target);
      if (!r) return;
      const i = r.getAttribute("data-obj-id"), o = this.getObjectOrNull(i) ?? this.getObjectOrNull(parseInt(i, 10));
      o?.isSelected || (this.releaseAllObjects(), o.select());
    };
    t.preventDefault(), e(), this.$emit(T.CONTEXT_MENU, t);
  }
  _initD3Elements(t, e, r, i) {
    t.addEventListener("contextmenu", (c) => this._onContextMenu(c));
    const o = isNaN(r) ? r : `${r}px`, s = isNaN(i) ? i : `${i}px`;
    this.d3Div = V(t).style("width", o).style("height", s), this.d3Svg = V(e).on("mousemove", (c) => this._mouseMoveOnSheetHandler(c)).on("click", (c) => this._clickOnSheetHandler(c)).call(at().filter((c) => c.button === 0 && this._editMode === !1).on("start", (c) => {
      st(this.contextElement), this._dragController(c);
    }).on("drag", (c) => this._dragController(c)).on("end", (c) => this._dragController(c))), this.d3Grid = this.d3Svg.append("g").attr("transform", "translate(-1, -1)").attr("class", "flowchart-grid").append("rect").attr("width", "100%").attr("height", "100%").attr("fill", `url(#${this.uuid}_grid)`).attr("visibility", "hidden"), this.d3Container = this.d3Svg.append("g").attr("class", "container");
    const a = Ks().filter((c) => this._wheelZoom && c.type === "wheel" && c.ctrlKey).wheelDelta((c) => -c.deltaY * (c.deltaMode === 1 ? 0.05 : c.deltaMode ? 1 : 2e-3)).scaleExtent([xn, vn]).on("zoom", (c) => this.zoomTo(c.transform.k));
    this.d3Div.call(a).on("dblclick.zoom", null), this._div.__zoom = { ...this._div.__zoom };
  }
  _beforeCopyPaste() {
    const t = window.getSelection();
    if (!t) return;
    const e = document.createRange();
    e.selectNodeContents(this._copySpan), t.removeAllRanges(), t.addRange(e);
  }
  /**
   * 이벤트를 발생시키고, 등록된 핸들러를 실행한다.
   *
   * @example
   * ```ts
   * flowchart.$on( EVENT_TYPE.CLICK, ( {x, y} ) => {
   *   console.log(EVENT_TYPE.CLICK, x, y);
   * } );
   *
   * // click 이벤트를 발생시키고, $on에 등록된 핸들러를 실행한다.
   * flowchart.$emit( EVENT_TYPE.CLICK, { x: 100, y: 200 } );
   * ```
   */
  $emit(t, ...e) {
    this.emitter.emit(t, e);
  }
  /**
   * 이벤트 리스너를 등록하여 특정 이벤트 발생 시 실행할 콜백을 지정한다.
   *
   * @example
   * ```ts
   * flowchart.$on( EVENT_TYPE.CLICK, ( {x, y} ) => {
   *    console.log(EVENT_TYPE.CLICK, x, y);
   * } );
   * ```
   */
  $on(t, e) {
    return this.emitter.on(t, e);
  }
  /**
   * 등록된 이벤트 리스너를 제거한다.
   *
   * @example
   * ```ts
   * flowchart.$off( EVENT_TYPE.CLICK, () => {
   *    console.log(EVENT_TYPE.CLICK);
   * } );
   * ```
   */
  $off(t, e) {
    return this.emitter.off(t, e);
  }
  moveWrapper(t) {
    try {
      this._moveHandler.moveStartHandler(), t(), this._updateNegativePos();
    } finally {
      this._moveHandler.moveEndHandler(), this.refreshSvgSize();
    }
  }
  /**
   * flowchart의 svg 요소에 defs 요소를 추가한다.
   *
   * @param defsElement 추가할 defs 요소
   */
  addSvgDefs(t) {
    this.d3Svg.node().appendChild(t);
  }
  /**
   * flowchart의 svg 요소에 linearGradient 요소를 추가한다.
   *
   * @param id linearGradient의 id
   * @param rotate gradient의 회전 각도
   * @param offsets gradient의 offset 값
   * @param colors gradient의 색상 값
   */
  addLinearGradientDefs(t, e, r, i) {
    if (typeof r.length != "number" || typeof i.length != "number")
      throw new Error("it must be an array type both offsets and colors!");
    const o = document.createElementNS("http://www.w3.org/2000/svg", "defs"), s = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    s.id = t, s.setAttribute("gradientTransform", `rotate(${e})`), mr(r, i).forEach(([a, c]) => {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      l.setAttribute("offset", a), l.setAttribute("stop-color", c), s.appendChild(l);
    }), o.appendChild(s), this.addSvgDefs(o);
  }
  /**
   * flowchart에 새로운 오브젝트를 추가한다.
   *
   * @param data 추가할 오브젝트의 정보
   * @param zIndex 오브젝트의 정렬 순서 (오브젝트는 작성 순서대로 이전의 오브젝트보다 앞쪽에 위치)
   *
   * @example
   * ```ts
   * const startNode = flowchart.add( {
   *      type: "node",
   *      render: "start",
   * } );
   * ```
   */
  add(t, e = void 0) {
    switch (t.type) {
      case void 0:
        throw this._logger.error("InnoFlowchart.add()", "undefined type prop"), new Error("Object that you added needs 'type' property! (node or connection)");
      case "group":
        t.render = "group";
        break;
    }
    if (t.render === void 0)
      throw this._logger.error("InnoFlowchart.add()", "undefined render prop"), new Error("Object that you added needs 'render' property!");
    if (!t.id)
      t.id = this._seqMng.getObjSeqId();
    else
      switch (typeof t.id) {
        case "number":
        case "string":
          break;
        default:
          throw this._logger.error(
            "InnoFlowchart.add()",
            "Not allowed id type (USE STRING OR NUMBER)"
          ), new Error("Data's id is only allowed string or nubmer type!");
      }
    if (this._objectManager.findOrNull(t.id) !== null)
      throw this._logger.error("InnoFlowchart.add()", "duplicated object id"), new Error(`Object's id is already created! (${t.id})`);
    this.defaultRule(t, this._defaultFontFamily), hn(t, this.theme);
    let r = null;
    const i = this._renderManager.getRenderConstructor(
      t.type,
      t.render
    ), o = new i(t, this._containerInterface);
    switch (t.type) {
      case "connection":
        r = new va(t, o, this._containerInterface);
        break;
      case "node":
        r = new Ma(t, o, this._containerInterface);
        break;
      case "group":
        r = new Oa(t, o, this._containerInterface);
        break;
      default:
        throw Error(`unkown data type '${t.type}'`);
    }
    return this._objectManager.add(r), r.create(), this.refreshSvgSize(), e !== void 0 && this.d3Container.node().insertBefore(r.g.node(), this._getChildElementOrNull(e)), t.temp ? this._logger.debug(
      "InnoFlowchart.add()",
      `created temp obj id is '${r.id}'`
    ) : (this._addObjectEvent(r), this.emitChangedStatus(), this.$emit(T.NEW_OBJECT, r), this._logger.debug("InnoFlowchart.add()", `created obj id is '${r.id}'`)), r;
  }
  /**
   * 선택된 개체를 제거한다.
   *
   * @example
   * ```ts
   * const object = flowchart.getObjectOrNull(2);
   * flowchart.remove(object);
   * ```
   */
  remove(t) {
    if (t == null)
      throw this._logger.error(
        "InnoFlowchart.remove()",
        "Object could not be null or undefined to remove!"
      ), new Error("Object could not be null or undefined to remove!");
    let e = null;
    switch (typeof t) {
      case "string":
      case "number":
        e = this.getObjectOrNull(t);
        break;
      case "object":
        e = this.getObjectOrNull(t.id);
        break;
      default:
        throw Error(`unkown data type '${typeof t}'`);
    }
    if (e != null)
      e.destroy(), this.emitChangedStatus(), this._objectManager.remove(e), this.refreshSvgSize(), this._objMouseHandler.removeTooltipObj(), e.isTempObj ? this._logger.debug(
        "InnoFlowchart.remove()",
        `Removed temp obj id is '${e.id}'`
      ) : (this.$emit(T.REMOVE_OBJECT, e), this._logger.debug(
        "InnoFlowchart.remove()",
        `Removed obj id is '${e.id}'`
      ));
    else
      throw new Error("There is no such as object you received in this flowchart!");
  }
  /**
   * IRFlowchart의 줌 비율을 설정한다.
   *
   * @param scale 설정하고자 하는 크기 (0.4 이상 3 이하 설정 가능)
   */
  zoomTo(t) {
    if (t < xn || t > vn)
      return;
    this._logger.info("InnoFlowchart.zoomTo", `scale is changed to ${t}`), this._div.__zoom.k = t, this.d3Container.attr("transform", `scale(${t})`);
    const e = `${1 / t * 100}%`;
    this.d3Grid.attr("transform", `scale(${t})`).attr("width", e).attr("height", e), this.refreshSvgSize();
  }
  /**
   * 신규로 추가한 개체 집합을 undo에 기록하고,
   * 음수 좌표가 있는 경우에는 해당 좌표를 조정합니다.
   */
  recordNewObjectsAction(...t) {
    this._actionController.addAction(new ft(dt(t))), this._updateNegativePos();
  }
  /**
   * IRFlowchart의 changed 상태를 true로 변경한다.
   */
  emitChangedStatus() {
    this._isChanged || (this._isChanged = !0, this.classedOnSvg(!0, "changed"));
  }
  /**
   * IRFlowchart의 현재 scale을 반환한다.
   *
   * @returns `getTransform()` 메서드의 k 값을 반환
   */
  getScale() {
    return this.getTransform().k;
  }
  /**
   * IRFlowchart 내의 선택된 모든 연결선을 반환한다.
   */
  getSelectedConnections(t = !0) {
    const e = [];
    for (const r of this._objectManager.getConnectionIterator())
      r.isSelected && e.push(r);
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  __editObjProp(t) {
    t.forEach((e) => {
      for (const r of e.propList)
        r.oldValue === void 0 && (r.oldValue = e.objData[r.key]), e.objData[r.key] = r.newValue;
    }), this._actionController.addAction(new ht(t));
  }
  /**
   * builder에서 사용함, 다만 내부 함수로 사용하므로 외부에서 사용하지 않도록 주의
   * @deprecated
   */
  _editObjProp(t) {
    return this.__editObjProp(t);
  }
  editSelectedObjProp(t, e) {
    const r = [];
    for (const i of this._objectManager.getSelectedObjIterator())
      i.isSelected && r.push(new et(i.data, [
        {
          key: t,
          newValue: e
        }
      ]));
    this.__editObjProp(r);
  }
  /**
   * 현재 flowchart를 append 모드로 전환한다.\
   * 만약 현재 flowchart가 읽기 전용 모드라면 동작하지 않는다.
   *
   * @param mode "append"로 지정
   * @param data
   *  `type`: node | connection\
   *  `render`: start | if | db | bridge | comment | return
   *
   * @example
   * ```ts
   * flowchart.append( "append", { type: "node", render: "start" } );
   * ```
   */
  append(t, e) {
    if (this._readonly) {
      this._logger.info(
        "InnoFlowchart.append()",
        "Preventing append (readonly: true)"
      );
      return;
    }
    if (!this._validateAppendMode({ mode: t, data: e }))
      throw this._logger.error("InnoFlowchart.append()", "Invalid append info!"), new Error("Invalid append info!");
    this.clearAppendMode(), this._appendMode = { mode: t, data: e, dragged: !1 }, this.classedOnSvg(!0, `is-appending-${e.type}`), this._logger.info(
      "InnoFlowchart.append()",
      "Append Mode",
      this._appendMode.mode
    );
  }
  /**
   * IRFlowchart의 스크롤을 (0, 0) 으로 이동한다.
   */
  resetScreen() {
    this._div.scrollLeft = 0, this._div.scrollTop = 0;
  }
  /**
   * 현재 flowchart가 렌더링된 HTMLElement의 DOMRect 객체를 반환한다.
   *
   * @returns
   * ```ts
   * {
   *      "x": 31,
   *      "y": 333,
   *      "width": 870,
   *      "height": 550,
   *      "top": 333,
   *      "right": 901,
   *      "bottom": 883,
   *      "left": 31
   * }
   * ```
   */
  getWrapperSize() {
    return this._div.getBoundingClientRect();
  }
  /**
   * IRFlowchart의 현재 scale k와 translation(x, y)을 반환한다.
   *
   * @returns
   * ```ts
   * { k: number, x: number, y: number }
   * ```
   */
  getTransform() {
    return Qn(this._div);
  }
  /**
   *
   */
  updateMinimumSvgSize() {
    const { width: t, height: e } = this.getWrapperSize();
    this._wrapperSize.width = t, this._wrapperSize.height = e, this.refreshSvgSize();
  }
  _getFlowchartAvailableRect() {
    const t = this.getScale(), e = {
      top: 999999999,
      left: 999999999,
      right: 0,
      bottom: 0
    };
    for (const r of this._objectManager.getAllObjIterator())
      e.top = Math.min(e.top, r.startY), e.left = Math.min(e.left, r.startX), e.right = Math.max(e.right, r.endX), e.bottom = Math.max(e.bottom, r.endY);
    return e.top *= t, e.left *= t, e.right *= t, e.bottom *= t, e;
  }
  updateSvgSize() {
    let t = this._svgSize.width, e = this._svgSize.height;
    this._fitSizeMode || (t += this._wrapperSize.width / 2, e += this._wrapperSize.height / 2), this.d3Svg.attr("width", Math.max(this._wrapperSize.width, t)).attr("height", Math.max(this._wrapperSize.height, e));
  }
  refreshSvgSize() {
    const t = this._getFlowchartAvailableRect();
    this._svgSize.width = t.right, this._svgSize.height = t.bottom, this._logger.info("InnoFlowchart.refreshSvgSize()", t), this.updateSvgSize();
  }
  /**
   * 현재 flowchart를 Re-render 한다.
   */
  render() {
    this.updateMinimumSvgSize();
  }
  /**
   * IRFlowchart의 모든 오브젝트 리스트를 반환한다.
   */
  getObjectList() {
    const t = [];
    for (const e of this._objectManager.getAllObjIterator())
      !e.isTempObj && t.push(e);
    return t;
  }
  /**
   * actionController의 모든 actions를 제거한다.
   */
  clearActionList() {
    this._logger.info("InnoFlowchart.clearActionList()"), this._actionController.clear();
  }
  /**
   * 이전에 수행된 작업을 실행 취소한다.\
   * 만약 현재 flowchart가 읽기 전용 모드라면 동작하지 않는다.
   */
  undoAction() {
    if (this._readonly) {
      this._logger.info("InnoFlowchart.undoAction()", "Preventing undo (readonly: true)");
      return;
    }
    const t = this._actionController.undo();
    this._logger.debug("InnoFlowchart.undoAction()", t), t !== null && (this.refreshSvgSize(), this.$emit(T.UNDO, t));
  }
  /**
   * undoAction에 의해 실행 취소된 작업을 다시 수행한다.\
   * 만약 현재 flowchart가 읽기 전용 모드라면 동작하지 않는다.
   */
  redoAction() {
    if (this._readonly) {
      this._logger.info("InnoFlowchart.redoAction()", "Preventing redo (readonly: true)");
      return;
    }
    const t = this._actionController.redo();
    this._logger.debug("InnoFlowchart.redoAction()", t), t !== null && (this.refreshSvgSize(), this.$emit(T.REDO, t));
  }
  _objectClickHandler(t, e) {
    this._logger.info(`InnoFlowchart.event.emit.${e}`, t), t.select(!0), this.$emit(e, t);
  }
  _commonObserveCallback(t) {
    switch (t.key) {
      case "id": {
        const e = this.getObjectOrNull(t.oldValue);
        e !== null && this._objectManager.reassignId(e, t.oldValue, t.newValue);
        break;
      }
      case "isSelected": {
        t.newValue && (t.renderObj.clickedSeq = this._seqMng.increaseClickSeq());
        break;
      }
    }
  }
  _connectionObserveCallback(t) {
    const e = t.renderObj;
    switch (t.key) {
      case "connection.sourceObjId":
        t.oldValue !== null && t.newValue === null && this.$emit(T.DISCONNECT_NODE, e, t.key);
        break;
      case "connection.sourcePos":
        e.sourceObjId !== null && this.$emit(T.CONNECT_NODE, e, t.key);
        break;
      case "connection.destinationObjId":
        t.oldValue !== null && t.newValue === null && this.$emit(T.DISCONNECT_NODE, e, t.key);
        break;
      case "connection.destinationPos":
        e.destinationObjId !== null && this.$emit(T.CONNECT_NODE, e, t.key);
        break;
    }
  }
  _observerCallback(t) {
    t.newValue !== t.oldValue && (!this._isChanged && !Ja.has(t.key) && this.emitChangedStatus(), this._commonObserveCallback(t), t.renderObj.type === "connection" && this._connectionObserveCallback(t));
  }
  _selectCallbackHandler(t, e, r) {
    const i = this._objectManager.getParentGroupOrNull(t);
    if (e && (this._moveScreenOnSelect && t.type === "node" && this.moveScreenByObject(t), this._singleSelection))
      for (const o of this._objectManager.getSelectedObjIterator())
        o !== t && o.release();
    i !== null && i.select(!1, r), this._logger.info("InnoFlowchart._selectCallbackHandler()", t), this.$emit(T.SELECT_OBJECT, t);
  }
  _releaseCallbackHandler(t, e) {
    this.$emit(T.RELEASE_OBJECT, t);
  }
  _editTextModeCallback() {
    this._objMouseHandler.removeTooltipObj();
  }
  _getXYOnSheet(t, e) {
    const r = 1 / this.getScale();
    return { x: t * r, y: e * r };
  }
  _validateAppendMode({ mode: t, data: e }) {
    switch (t) {
      case "append":
        return e.type === "node" || e.type === "connection";
      case "paste":
        return e.objects.length > 0;
      default:
        return !1;
    }
  }
  _getProperlyPointsToCreate(t) {
    const e = t["connection.points"];
    t: for (; ; ) {
      for (const r of this._objectManager.getConnectionIterator())
        if (r.comparePoints(e)) {
          e.forEach((i) => {
            i.x += ot, i.y += ot;
          });
          continue t;
        }
      return e;
    }
  }
  _getProperlyNodePosToCreate(t) {
    let e = t["node.x"], r = t["node.y"];
    t: for (; ; ) {
      for (const i of this._objectManager.getNodeIterator())
        if (i.x === e && i.y === r) {
          e += ot, r += ot;
          continue t;
        }
      return { "node.x": e, "node.y": r };
    }
  }
  _initAppendObj() {
    switch (this._appendMode.data.type) {
      case "node": {
        this._appendingObject = this.add({
          ...this._appendMode.data,
          temp: !0,
          id: "appending_temp_obj",
          opacity: 0
        });
        break;
      }
    }
  }
  _mouseMoveOnSheetHandler(t) {
    const e = t.offsetX, r = t.offsetY;
    if (this._validateAppendMode(this._appendMode)) {
      switch (this._appendMode.mode) {
        case "append":
          this._appendingObject === null ? this._initAppendObj() : this._appendingObject.type === "node" && this._moveAppendingNode(e, r);
          break;
      }
      this._div.focus();
    }
  }
  _setZIndexOnSelected(t) {
    const e = [], r = t === "front" ? this._objectManager.getObjCount() : 0;
    this._logger.info("InnoFlowchart.setZIndex()", `new z-index = ${r}`);
    for (const i of this.getSelectedObjects())
      e.push({
        objId: i.id,
        oldValue: i.zIndex + (t === "back" ? 1 : 0),
        newValue: r
      }), i.zIndex = r;
    this.emitChangedStatus(), this._actionController.addAction(new hr(e));
  }
  /**
   * 선택한 오브젝트를 가장 앞으로 가져온다.
   */
  bringToFront() {
    this._logger.info("InnoFlowchart.bringToFront()"), this._setZIndexOnSelected("front");
  }
  /**
   * 선택한 오브젝트를 가장 뒤로 보낸다.
   */
  bringToBack() {
    this._logger.info("InnoFlowchart.bringToBack()"), this._setZIndexOnSelected("back");
  }
  _moveXY(t, e, r) {
    return this._gridMode && t.type === "node" ? [
      un(t.x + e) - t.x,
      un(t.y + r) - t.y
    ] : [e, r];
  }
  _moveSelectedObjects(t, e) {
    for (const r of this._objectManager.getSelectedObjIterator())
      r.moveTo(...this._moveXY(r, t, e));
  }
  /**
   * 현재 flowchart의 오브젝트 또는 null을 반환한다.
   */
  getObjectOrNull(t) {
    return this._objectManager.findOrNull(t);
  }
  /**
   * 현재 flowchart의 오브젝트를 선택한다.
   */
  selectObjectById(t) {
    const e = this.getObjectOrNull(t);
    if (e === null)
      throw new Error(`Not found obj id '${t}'`);
    e.select();
  }
  _addCommonMouseAction(t) {
    this._objMouseHandler.addMouseAction(t);
  }
  _isSingleSelection(t) {
    return this._singleSelection || !t;
  }
  _addClickActionOnNode(t) {
    t.g.on("dblclick", () => {
      t.data.editable && this._readonly === !1 && t.renderer.editLabelMode(), this._logger.info("InnoFlowchart.event.emit.dblClickNode", t), this.$emit(T.DOUBLE_CLICK_NODE, t);
    });
  }
  /**
   * IRFlowchart의 svg 요소에 class 속성을 할당하거나 제거한다.
   *
   * @param flag `true` 설정 시 class 속성을 할당, `false` 설정 시 class 속성을 제거
   * @param classes 할당 또는 제거하고자 하는 class 속성의 값
   *
   * @example
   * ```ts
   * flowchart.classedOnSvg(true, ["add-class-name second"]);
   * flowchart.classedOnSvg(false, ["add-class-name"]);
   * ```
   */
  classedOnSvg(t, ...e) {
    e.forEach((r) => this.d3Svg.classed(r, t)), this.$emit(T.CHANGE_CLASS, this.d3Svg.attr("class"));
  }
  _addDragActionOnNode(t) {
    let e = !1, r = 0, i = 0, o = 0, s = 0, a = 0, c = 0;
    t.g.call(at().filter((u) => u.button === 0 && this._editMode === !1).on("start", (u) => {
      st(u.sourceEvent.target), this._isSingleSelection(u.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = !1, r = u.x, i = u.y, o = t.width - (t.endX - u.x), s = t.height - (t.endY - u.y), t.select(!1), a = t.x, c = t.y;
    }).on("drag", (u) => {
      this._readonly || (!e && l(u) && h.call(this), e && this._moveSelectedObjects.call(this, ...f(u)));
    }).on("end", (u) => {
      const _ = u.sourceEvent;
      if (e)
        this._moveHandler.moveEndHandler(), this._terminateDrag("drag-node-move"), this._moveScreenOnSelect && t.type === "node" && this.moveScreenByObject(t);
      else {
        if (this._editMode) return;
        this._isSingleSelection(_.ctrlKey) && this.releaseAllObjects(t), this._moveScreenOnSelect && this.moveScreenByObject(t), this._objectClickHandler(t, T.CLICK_NODE);
      }
    }));
    function l(u) {
      return Math.abs(r - u.x) + Math.abs(i - u.y) > wn;
    }
    function h() {
      e = !0, this._moveHandler.moveStartHandler(), this._initDrag("drag-node-move");
    }
    function f(u) {
      const _ = u.x - o, x = u.y - s;
      if (u.sourceEvent.shiftKey) {
        const C = Math.abs(r - u.x), I = Math.abs(i - u.y);
        return C >= I ? [_ - t.x, c - t.y] : [a - t.x, x - t.y];
      }
      return [
        _ - t.x,
        x - t.y
      ];
    }
  }
  _addDragActionOnConnector(t) {
    for (const e of t.renderer.connectors) {
      const r = ca(e.attr("class"));
      e.call(at().filter((i) => i.button === 0 && this._readonly === !1).on("start", (i) => {
        st(i.sourceEvent.target);
        const o = t.x + t.width / 2 + i.x, s = t.y + t.height / 2 + i.y, a = this._appendMode.data?.render ?? this.theme["node.autoGeneratedConnectorRender"], c = t.getPositionXY(r);
        this._initDrag("drag-node-connector"), this._createAppendingConnection(c.x, c.y, o, s, {
          type: "connection",
          render: a,
          "connection.sourceObjId": t.id,
          "connection.sourcePos": r
        });
      }).on("drag", (i) => {
        if (this._appendingObject === null)
          return;
        const o = t.x + t.width / 2 + i.x, s = t.y + t.height / 2 + i.y;
        this._appendMode.dragged = !0, this._moveAppendingConnection(o, s);
      }).on("end", () => {
        this._appendingObject !== null && (this._endAppendingConnection(), this._terminateDrag("drag-node-connector"));
      }));
    }
  }
  _addNodeEvent(t) {
    this._addClickActionOnNode(t), this._addDragActionOnNode(t), this._addDragActionOnConnector(t), this._resizeHandler.addDragActionOnResizer(t);
  }
  _objectRightClickTask(t) {
    this.logger.info("rightClick");
  }
  _connectionLeftClickTask(t, e) {
    this._isSingleSelection(e) && this.releaseAllObjects(t), this._objectClickHandler(t, T.CLICK_CONNECTION);
  }
  _addClickActionOnConnection(t) {
    t.g.on("click", (e) => {
      this._isSingleSelection(e.ctrlKey) && this.releaseAllObjects(t), this._objectClickHandler(t, T.CLICK_CONNECTION);
    }), t.g.on("dblclick", () => {
      t.data.editable && this._readonly === !1 && t.renderer.editLabelMode(), this._logger.info("InnoFlowchart.event.emit.dblClickConnection", t), this.$emit(T.DOUBLE_CLICK_CONNECTION, t);
    });
  }
  _addDragActionOnConnection(t) {
    let e = 0, r = 0, i = !1;
    t.g.call(at().filter((o) => o.button === 0 && this._editMode === !1).on("start", (o) => {
      st(o.sourceEvent.target), this._isSingleSelection(o.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = o.x, r = o.y, i = !1, t.select();
    }).on("drag", (o) => {
      if (this._readonly) return;
      const s = o.x - e, a = o.y - r;
      if (!i && Math.abs(s) + Math.abs(a) > 5 && (i = !0, this._moveHandler.moveStartHandler(), this._initDrag("drag-con-move")), !!i) {
        if (t.sourceObjId !== null) {
          const c = this.getObjectOrNull(t.sourceObjId);
          (c === null || c.isSelected === !1) && (t.sourceObjId = null);
        }
        if (t.destinationObjId !== null) {
          const c = this.getObjectOrNull(t.destinationObjId);
          (c === null || c.isSelected === !1) && (t.destinationObjId = null);
        }
        this._moveSelectedObjects(s, a), e = o.x, r = o.y;
      }
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this._terminateDrag("drag-con-move");
    }));
  }
  _addDragActionOnConnectionConnector(t) {
    const e = (r, i, o) => at().filter((s) => s.button === 0 && this._editMode === !1 && this._readonly === !1).on("start", (s) => {
      st(s.sourceEvent.target), this._moveHandler.moveStartHandler(), this._initDrag("drag-con-connector");
    }).on("drag", (s) => {
      const a = this._getNodeAndPosUnderXY(s.x, s.y), c = o === "start" ? t.firstPoint : t.endPoint;
      a.node === null ? (t[r] = null, t[i] = null, c.x = s.x, c.y = s.y) : (t[r] = a.node.id, a.hover ? this._setShortestPosition(t, o === "end", o === "start") : t[i] = a.pos), t.renderType === "elbow" && t.renderer.refreshAdjustList(), t.render();
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this._terminateDrag("drag-con-connector");
    });
    t.renderer.objects.sourceConnector.call(e("sourceObjId", "sourcePos", "start")), t.renderer.objects.destinationConnector.call(e("destinationObjId", "destinationPos", "end"));
  }
  _addConnectionEvent(t) {
    this._addClickActionOnConnection(t), this._addDragActionOnConnection(t), this._addDragActionOnConnectionConnector(t);
  }
  _addGroupEvent(t) {
    let e = !1, r = 0, i = 0, o = 0, s = 0;
    t.g.call(at().filter((a) => a.button === 0 && this._editMode === !1 && this._readonly === !1).on("start", (a) => {
      st(a.sourceEvent.target), this._isSingleSelection(a.sourceEvent.ctrlKey) && !t.isSelected && this.releaseAllObjects(t), e = !1, r = a.x, i = a.y, o = a.x, s = a.y, t.select();
    }).on("drag", (a) => {
      !e && Math.abs(r - a.x) + Math.abs(i - a.y) > wn && (e = !0, this._moveHandler.moveStartHandler(), this._initDrag("drag-group-move")), e && (this._moveSelectedObjects(a.x - o, a.y - s), o = a.x, s = a.y);
    }).on("end", () => {
      this._moveHandler.moveEndHandler(), this._terminateDrag("drag-group-move");
    }));
  }
  _addObjectEvent(t) {
    switch (this._addCommonMouseAction(t), t.type) {
      case "node":
        this._addNodeEvent(t), t.render();
        break;
      case "connection":
        this._addConnectionEvent(t);
        break;
      case "group":
        this._addGroupEvent(t);
        break;
      default:
        throw new Error(`Unknown data type '${t.type}'`);
    }
  }
  _initDrag(t) {
    this._isDragging = !0, this._appendMode.dragged = !1, this._objMouseHandler.removeTooltipObj(), this.classedOnSvg(!0, t);
  }
  _terminateDrag(t) {
    this._isDragging = !1, this._appendMode.dragged = !1, this.classedOnSvg(!1, t), this.clearAppendMode(), this._updateNegativePos(), this.refreshSvgSize(), this._simpleConnectingMode && this.updateShortestNodes();
  }
  _updateNegativePos() {
    const t = {
      x: 0,
      y: 0,
      objX: null,
      objY: null
    };
    for (const e of this._objectManager.getAllObjIterator())
      e.startX < t.x && (t.x = e.startX, t.objX = e), e.startY < t.y && (t.y = e.startY, t.objY = e);
    if (t.x < 0 || t.y < 0) {
      const e = this._actionController.popLastUndoAction(), r = [], i = t.x < 0 ? -t.x : 0, o = t.y < 0 ? -t.y : 0;
      for (const s of this._objectManager.getNodeIterator()) {
        const a = new et(s.data, []);
        a.addMoveOldValues(), s.moveTo(i, o), a.updateMoveNewValues(), r.push(a);
      }
      for (const s of this._objectManager.getConnectionIterator())
        if (s.sourceObj === null || s.destinationObj === null) {
          const a = new et(s.data, []);
          a.addMoveOldValues(), s.moveTo(i, o), a.updateMoveNewValues(), r.push(a);
        }
      for (const s of this._objectManager.getGroupIterator())
        s.render();
      e && (e.unshift(new ht(r)), this._actionController.addAction(...e)), this.refreshSvgSize();
    }
  }
  /**
   * IRFlowchart 내의 선택된 오브젝트의 개수를 반환한다.
   */
  getCountOfSelectedObject() {
    let t = 0;
    for (const e of this._objectManager.getSelectedObjIterator())
      this._objectManager.getParentGroupOrNull(e) == null && e.isSelected && ++t;
    return t;
  }
  /**
   * IRFlowchart 내의 모든 오브젝트를 선택한다.
   */
  selectAllObjects() {
    if (!this._singleSelection)
      for (const t of this._objectManager.getAllObjIterator())
        t.type !== "group" && t.select(!0);
  }
  /**
   * IRFlowchart 내의 오브젝트를 선택 해제한다.\
   * `clickObj`가 있다면 해당 오브젝트는 선택 상태를 유지한다.
   */
  releaseAllObjects(t) {
    for (const e of this._objectManager.getAllObjIterator())
      t !== e && e.release(!0);
  }
  /**
   * 현재 선택된 오브젝트를 정렬한다.
   */
  align(t, e) {
    const r = e || this.getSelectedNodes();
    if (r.length <= 1)
      return;
    let i = !1;
    try {
      switch (this._moveHandler.moveStartHandler(), i = !0, t) {
        // center / middle은 가장 첫 요소로 정렬
        case "center": {
          const o = r[0].centerX;
          r.forEach((s) => s.x = o - s.width / 2);
          break;
        }
        case "middle": {
          const o = r[0].centerY;
          r.forEach((s) => s.y = o - s.height / 2);
          break;
        }
        // top / left는 최소 값
        case "top": {
          const o = r.reduce((s, a) => Math.min(s, a.y), r[0].y);
          r.forEach((s) => s.y = o);
          break;
        }
        case "left": {
          const o = r.reduce((s, a) => Math.min(s, a.x), r[0].x);
          r.forEach((s) => s.x = o);
          break;
        }
        // bottom / right는 최대 값
        case "right": {
          const o = r.reduce((s, a) => Math.max(s, a.endX), r[0].endX);
          r.forEach((s) => s.x = o - s.width);
          break;
        }
        case "bottom": {
          const o = r.reduce((s, a) => Math.max(s, a.endY), r[0].endY);
          r.forEach((s) => s.y = o - s.height);
          break;
        }
        default:
          throw new Error(`Unknown direct '${t}'`);
      }
    } finally {
      i && this._moveHandler.moveEndHandler();
    }
  }
  /**
   * 현재 선택된 오브젝트를 수직 또는 수평으로 균등 분배한다.
   */
  distribute(t, e) {
    const r = e || this.getSelectedNodes(!1);
    if (r.length <= 1)
      return;
    const i = t === "h" ? {
      start: "x",
      center: "centerX",
      end: "endX",
      size: "width"
    } : {
      start: "y",
      center: "centerY",
      end: "endY",
      size: "height"
    };
    r.sort((l, h) => l[i.center] - h[i.center]), this._moveHandler.moveStartHandler();
    const o = r.length - 1, s = r[0][i.end], a = r[o][i.start], c = r.slice(1, o).reduce((l, h) => l - h[i.size], a - s) / o;
    r.slice(1, o).reduce((l, h) => (h[i.start] = l, l + h[i.size] + c), s + c), this._moveHandler.moveEndHandler();
  }
  /**
   * IRFlowchart 내의 선택된 모든 오브젝트를 반환한다.
   */
  getSelectedObjects(t = !0) {
    const e = Array.from(this._objectManager.getSelectedObjIterator());
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  /**
   * 선택된 개체를 제거한다.
   */
  removeSelected() {
    const t = this.getSelectedObjects(!1);
    t.forEach((e) => this.remove(e)), this._actionController.addAction(
      new je(dt(t))
    );
  }
  _getChildElementOrNull(t) {
    const e = this.d3Container.node();
    return t >= e.children.length ? null : e.children[t];
  }
  _getNodeAndPosUnderXY(t, e) {
    for (const r of this._objectManager.getNodeIterator())
      if (r.isConnectorEnabled) {
        for (const i of ie)
          if (r.isContainedOnPos(i, t, e))
            return { node: r, pos: i };
        if (r.isContained(t, e))
          return { node: r, pos: "bottom", hover: !0 };
      }
    return { node: null, pos: null };
  }
  /**
   * 선택된 노드를 지정한 좌표로 이동시킨다.
   */
  moveSelectedNode(t, e) {
    for (const r of this._objectManager.getNodeIterator())
      r.isSelected && (r.x = parseInt((r.x + t) / Ut) * Ut, r.y = parseInt((r.y + e) / Ut) * Ut);
  }
  /**
   * IRFlowchart 내의 선택된 모든 노드를 반환한다.
   */
  getSelectedNodes(t = !0) {
    const e = [];
    for (const r of this._objectManager.getNodeIterator())
      r.isSelected && e.push(r);
    return t && e.sort((r, i) => r.clickedSeq - i.clickedSeq), e;
  }
  /**
   * 특정 노드와 연결되어 있는 연결선을 반환한다.
   */
  getNodeConnections(t) {
    const e = t.observeProperties ? t.id : t, r = this.getObjectOrNull(e), i = Array.from(this._objectManager.getConnectedConnections(e));
    return i.sort((o, s) => ln(r, o) - ln(r, s)), i;
  }
  /**
   * 특정 오브젝트에 맞추어 스크롤을 조정한다.
   */
  moveScreenByObject(t) {
    const e = this.getTransform().k;
    this._div.scrollLeft = t.centerX * e - this._wrapperSize.width / 2, this._div.scrollTop = t.centerY * e - this._wrapperSize.height / 2;
  }
  /**
   * 현재 IRFlowchart를 클립보드에 복사한다. ※ 비동기 처리
   *
   * @param imgType 기본값 "image/png"
   */
  async copyToClipboard(t = "image/png") {
    this.releaseAllObjects();
    const e = await Xe(Fe(this.svgElement)), r = await Ye(e, t, this._getFlowchartRect(), bn), i = await pr(r);
    await qa(i);
  }
  _getFlowchartRect() {
    const { top: t, left: e, bottom: r, right: i } = this._getFlowchartAvailableRect();
    return {
      x: e - 1,
      y: t - 1,
      width: i - e + 2,
      height: r - t + 2
    };
  }
  /**
   * 현재 IRFlowchart를 이미지 파일로 저장한다. ※ 비동기 처리
   *
   * @param fileName
   * @param imgType 기본값 "image/png"
   */
  async saveAsImageFile(t, e = "image/png") {
    this.releaseAllObjects();
    const r = await this.getBlob(e), i = URL.createObjectURL(r);
    try {
      _r(i, t);
    } finally {
      URL.revokeObjectURL(i);
    }
  }
  /**
   * 현재 IRFlowchart의 이미지 정보(size, type)를 반환한다. ※ 비동기 처리
   *
   * @param imgType 기본값 "image/png"
   * @returns
   * ```ts
   * Blob { size: number, type: ImageType }
   * ```
   */
  async getBlob(t = "image/png") {
    const e = await Xe(Fe(this.svgElement));
    return await Ye(e, t, this._getFlowchartRect(), bn);
  }
  /**
   * IRFlowchart의 내부 패널에 focus를 설정한다.
   */
  focus() {
    this._div.focus();
  }
  /**
   * 현재 설정된 appendMode의 context를 초기화한다. (appending 또는 pasting 객체 제거)
   */
  clearAppendMode() {
    this._appendMode.data && this.classedOnSvg(!1, `is-appending-${this._appendMode.data.type}`), this._appendingObject !== null && this.remove(this._appendingObject), this._appendMode.mode = null, this._appendMode.data = null, this._appendMode.dragged = !1, this._appendingObject = null;
  }
  _getClipInfo() {
    const t = [];
    for (const e of this._objectManager.getSelectedObjIterator())
      e.type === "group" && (e.data.objectList = Array.from(e.objectSet)), t.push(e.data);
    return {
      copyDateTime: /* @__PURE__ */ new Date(),
      objects: t
    };
  }
  /**
   * in-memory clipboard에 저장
   * @deprecated
   */
  cut() {
    this._logger.info("InnoFlowchart.cut()"), this.getSelectedObjects().length !== 0 && (ye.saveData(JSON.stringify(this._getClipInfo())), this.removeSelected());
  }
  /**
   * in-memory clipboard에 저장
   * @deprecated
   */
  copy() {
    this._logger.info("InnoFlowchart.copy()"), ye.saveData(JSON.stringify(this._getClipInfo()));
  }
  _createPastingObjs(t) {
    if (t.objects.length === 0) return;
    const e = /* @__PURE__ */ new Map();
    let r = 0;
    const i = this._seqMng.getObjSeqId(), o = [];
    t.objects.forEach((s) => {
      if (this.getObjectOrNull(s.id) !== null) {
        let a = i + r;
        for (; this.getObjectOrNull(a) !== null || this.getObjectOrNull(a) !== null && this.getObjectOrNull(a).type === "connection" && (this.getObjectOrNull(a).sourceObjId === a || this.getObjectOrNull(a).destinationObjId === a); )
          a = i + ++r, this._logger.info("id", a);
        ++r, e.set(s.id, a);
      } else
        e.set(s.id, s.id);
    }), t.objects.forEach((s) => {
      const a = e.get(s.id);
      switch (s.type) {
        case "node": {
          const c = this._getProperlyNodePosToCreate(s);
          o.push(this.add({
            ...s,
            ...c,
            id: a,
            isSelected: !1,
            isHovered: !1
          }));
          break;
        }
        case "connection": {
          const c = this._getProperlyPointsToCreate(s);
          s["connection.sourceObjId"] !== void 0 && s["connection.sourceObjId"] != null && e.has(s["connection.sourceObjId"]) && (s["connection.sourceObjId"] = e.get(s["connection.sourceObjId"])), s["connection.destinationObjId"] !== void 0 && s["connection.destinationObjId"] != null && e.has(s["connection.destinationObjId"]) && (s["connection.destinationObjId"] = e.get(s["connection.destinationObjId"])), o.push(this.add({
            ...s,
            id: a,
            isSelected: !1,
            points: c
          }));
          break;
        }
        case "group": {
          o.push(this.add({
            ...s,
            id: a,
            isSelected: !1,
            objectList: s.objectList.map((c) => e.get(c))
          }));
          break;
        }
        default:
          throw new Error(`Not supported type '${s.type}'`);
      }
    }), this.moveScreenByObject(o[0]), this.releaseAllObjects(), o.forEach((s) => {
      s.select();
    }), this._actionController.addAction(new ft(dt(o)));
  }
  /**
   * in-memory clipboard에 저장된 것을 붙여넣기 처리
   * @deprecated
   */
  paste() {
    if (this._editMode || this._appendMode.mode != null) {
      this._logger.debug(
        "InnoFlowchart.paste()",
        "Could not paste because of edit or append mode"
      );
      return;
    }
    this._logger.info("InnoFlowchart.paste()"), this._createPastingObjs(JSON.parse(ye.loadData()));
  }
  /**
   * 컨텐츠에 맞게 오브젝트의 크기를 조정한다.
   */
  fitSizeOnText() {
    this._logger.info("InnoFlowchart.fitSizeOnText()"), this._resizeHandler.resizeDragStart(), this.getSelectedNodes(!1).forEach(
      (t) => void (t.resizerEnabled && t.fitSizeOnText())
    ), this._resizeHandler.resizeDragEnd();
  }
  _setShortestPosition(t, e = !1, r = !1) {
    const i = this.getObjectOrNull(t.sourceObjId), o = this.getObjectOrNull(t.destinationObjId), s = t.sourcePos, a = t.destinationPos;
    if (i !== null && o !== null) {
      const c = Ga(i, o);
      e || (t.sourcePos = c.sourcePos), r || (t.destinationPos = c.destinationPos);
    } else i === null ? t.destinationPos = mn(t.firstPoint, o) : t.sourcePos = mn(t.endPoint, i);
    if (s !== t.sourcePos || a !== t.destinationPos) {
      const c = new et(t.data, [
        {
          key: "connection.sourcePos",
          oldValue: s,
          newValue: t.sourcePos
        },
        {
          key: "connection.destinationPos",
          oldValue: a,
          newValue: t.destinationPos
        }
      ]);
      this._actionController.addAction(new ht([c]));
    }
  }
  /**
   * 현재 선택된 연결선들을 최단 경로로 맞춘다.
   */
  updateShortestConnections() {
    this._logger.info("InnoFlowchart.updateShortestConnections()");
    for (const t of this._objectManager.getConnectionIterator())
      t.isSelected && this._setShortestPosition(t);
  }
  /**
   * 현재 선택된 노드들의 연결선들을 최단 경로로 맞춘다.
   */
  updateShortestNodes() {
    const t = [];
    for (const e of this._objectManager.getNodeIterator())
      if (e.isSelected !== !1)
        for (const r of this._objectManager.getConnectedConnections(e.id))
          t.indexOf(r) === -1 && t.push(r);
    t.forEach((e) => this._setShortestPosition(e));
  }
  /**
   * 특정 render의 개체를 모두 선택한다.
   *
   * @param render `start | if | db | bridge | comment | return | direct | elbow | group`
   */
  selectType(t) {
    this._logger.info("InnoFlowchart.selectType()", t);
    const e = t.toLowerCase();
    this.releaseAllObjects();
    for (const r of this._objectManager.getAllObjIterator())
      r.renderType === e && r.select(!1, e);
  }
  /**
   * IRFlowchart의 changed 상태를 초기화한다.
   */
  clearChangedStatus() {
    this._isChanged && (this._isChanged = !1, this.classedOnSvg(!1, "changed"));
  }
  /**
   * IRFlowchart 내의 모든 개체를 제거한다.
   */
  clear() {
    this.clearAppendMode();
    for (const t of this._objectManager.getAllObjIterator())
      t.destroy();
    this._objectManager.clear(), this._seqMng.clear(), this._actionController.clear();
  }
  /**
   * 현재 선택된 오브젝트 그룹화 및 그룹 객체를 생성한다.
   *
   * @example
   * ```ts
   * const selected = flowchart.selectAllObjects();  // 모든 오브젝트를 선택한다.
   * flowchart.group();
   * ```
   */
  group(t = void 0) {
    const e = t || {};
    e.type = "group", e.render = "group", e.objectList = [], hn(e, this.theme);
    for (const i of this._objectManager.getSelectedObjIterator())
      e.objectList.push(i.id);
    const r = this.add(e);
    r.resize(), r.select(), this._actionController.addAction(new ft(dt([r])));
  }
  /**
   * 현재 선택된 그룹화된 오브젝트의 자식의 그룹 상태를 해제한다.
   */
  ungroup() {
    const t = [];
    for (const e of this._objectManager.getGroupIterator())
      e.isSelected && (e.clear(), t.push(e), this.remove(e));
    this._actionController.addAction(new je(dt(t)));
  }
  _moveAppendingNode(t, e) {
    const r = this._getXYOnSheet(t, e);
    this._appendingObject.data.opacity === 0 && (this._appendingObject.data.opacity = 0.5), this._appendingObject.x = r.x - this._appendingObject.width / 2, this._appendingObject.y = r.y - this._appendingObject.height / 2;
  }
  _getSvgXYOnDrag(t, e, r = !1) {
    const i = {
      x: t + this._div.scrollLeft,
      y: e + this._div.scrollTop
    };
    if (r) {
      const s = 1 / this.getTransform().k;
      i.x *= s, i.y *= s;
    }
    return i;
  }
  _dragStartHandlerOnSelection(t) {
    const e = this._getSvgXYOnDrag(t.x, t.y);
    this._selection.rect = this.d3Svg.append("rect").attr("class", "ir-fw-selection"), this._selection.startX = e.x, this._selection.startY = e.y;
  }
  _dragHandlerOnSelection(t) {
    const e = this._getSvgXYOnDrag(t.x, t.y), r = Math.min(e.x, this._selection.startX), i = Math.min(e.y, this._selection.startY), o = Math.max(e.x, this._selection.startX), s = Math.max(e.y, this._selection.startY);
    this._selection.rect.attr("x", r).attr("y", i).attr("width", o - r).attr("height", s - i);
  }
  _dragEndHandlerOnSelection(t) {
    try {
      const e = this.getTransform(), r = this._getSvgXYOnDrag(t.x, t.y), i = Math.min(r.x, this._selection.startX), o = Math.min(r.y, this._selection.startY), s = Math.max(r.x, this._selection.startX), a = Math.max(r.y, this._selection.startY), c = (l, h, f, u) => l >= i && h >= i && l <= s && h <= s && f >= o && u >= o && f <= a && u <= a;
      this._isSingleSelection(t.sourceEvent.ctrlKey) && this.releaseAllObjects();
      for (const l of this._objectManager.getNodeIterator()) {
        const h = l.x * e.k, f = (l.x + l.width) * e.k, u = l.y * e.k, _ = (l.y + l.height) * e.k;
        c(h, f, u, _) && l.select(!0);
      }
      for (const l of this._objectManager.getConnectionIterator()) {
        const h = l.firstPoint, f = l.endPoint, u = Math.min(h.x, f.x) * e.k, _ = Math.max(h.x, f.x) * e.k, x = Math.min(h.y, f.y) * e.k, C = Math.max(h.y, f.y) * e.k;
        c(u, _, x, C) && l.select(!0);
      }
    } finally {
      this._selection.rect.remove(), this._selection.rect = null, this.$emit(T.MOUSEUP_SHEET, this._getSvgXYOnDrag(t.x, t.y));
    }
  }
  _canvasMoveStartHandler(t) {
    const { offsetX: e, offsetY: r } = t.sourceEvent;
    this.classedOnSvg(!0, "is-grabbing"), this._cursorStatus = {
      curPosX: e,
      curPosY: r,
      isDragging: !0
    };
  }
  _canvasMoveHandler(t) {
    const { curPosX: e, curPosY: r, isDragging: i } = this._cursorStatus;
    if (!i) return;
    const { target: o, offsetX: s, offsetY: a } = t.sourceEvent;
    o === this.d3Svg.node() && this._div.scrollBy(e - s, r - a);
  }
  _canvasMoveEndHandler(t) {
    this._cursorStatus.isDragging = !1, this.classedOnSvg(!1, "is-grabbing"), t.sourceEvent.target === this.d3Svg.node() && this.releaseAllObjects();
  }
  _createAppendObj() {
    switch (this._appendMode.mode) {
      case "append": {
        const t = this.add({
          "node.x": this._appendingObject.x,
          "node.y": this._appendingObject.y,
          ...this._appendMode.data
        });
        this._actionController.addAction(new ft(dt([t])));
        break;
      }
    }
    this.clearAppendMode();
  }
  _getAppendNodeDragEventHandler(t) {
    return {
      start: () => {
      },
      drag: () => this._moveAppendingNode(t.x + this._div.scrollLeft, t.y + this._div.scrollTop),
      end: () => this._createAppendObj()
    };
  }
  _getAppendConnectionDragEventHandler(t) {
    return {
      start: () => {
        const e = this._getSvgXYOnDrag(t.x, t.y, !0);
        this._createAppendingConnection(e.x, e.y, e.x, e.y, this._appendMode.data), this._appendMode.dragged = !1;
      },
      drag: () => {
        const e = this._getSvgXYOnDrag(t.x, t.y, !0);
        this._moveAppendingConnection(e.x, e.y, this._appendingObject.renderType), this._appendMode.dragged = !0;
      },
      end: () => {
        this._endAppendingConnection(), this.clearAppendMode();
      }
    };
  }
  _getAppendModeHandler(t) {
    return {
      start: () => this._dragStartHandlerOnSelection(t),
      drag: () => this._dragHandlerOnSelection(t),
      end: () => this._dragEndHandlerOnSelection(t)
    };
  }
  _getCanvasMoveModeHandler(t) {
    return {
      start: () => this._canvasMoveStartHandler(t),
      drag: () => this._canvasMoveHandler(t),
      end: () => this._canvasMoveEndHandler(t)
    };
  }
  _getDragAppendModeHandler(t) {
    return this._appendMode.data.type === "node" ? this._getAppendNodeDragEventHandler(t) : this._getAppendConnectionDragEventHandler(t);
  }
  _dragController(t) {
    (() => {
      if (this._appendMode.mode === "append")
        return this._getDragAppendModeHandler(t);
      if (this._canvasMoveMode)
        return this._getCanvasMoveModeHandler(t);
      if (this._appendMode.mode === null)
        return this._getAppendModeHandler(t);
      throw new Error("unknown drag handler");
    })()[t.type]();
  }
  cancelCreatingConnection() {
    if (this._appendingObject === null)
      throw new Error("There is no creatingConnection obj");
    this.clearAppendMode();
  }
  _changeObjRender(t, e) {
    this._renderManager.changeRender(t, e, this._containerInterface), this._addObjectEvent(t);
  }
  /**
   * 개체의 렌더링 타입을 변경한다.
   *
   * @param obj
   * @param render
   *      obj의 type이 node일 경우: "start" | "if" | "db" | "bridge" | "comment" | "return"\
   *      obj의 type이 connection일 경우: "direct" | "elbow"
   */
  changeRender(t, e) {
    const r = t.renderType;
    this._changeObjRender(t, e), this._actionController.addAction(new lr(t, r, e));
  }
  _editTextCallbackHandler(t, e, r) {
    this._logger.debug(
      "InnoFlowchart._editTextCallbackHandler()",
      `oldText = '${e}'`,
      `newText = '${r}'`
    ), this._actionController.addAction(new ht([
      new et(t, [
        {
          key: "text",
          oldValue: e,
          newValue: r
        }
      ])
    ]));
  }
  _moveAppendingConnection(t, e) {
    const r = this._getNodeAndPosUnderXY(t, e);
    r.node === null || r.node.id === this._appendingObject.sourceObjId ? (this._appendingObject.setLastPointXY(t, e), this._appendingObject.destinationObjId = null, this._appendingObject.destinationPos = null) : (this._appendingObject.destinationObjId = r.node.id, r.hover ? this._setShortestPosition(this._appendingObject) : this._appendingObject.destinationPos = r.pos);
  }
  _adjDragStartCallbackHandler() {
    this._logger.debug("InnoFlowchart.adjDragStartCallbackHandler()"), this._initDrag("drag-adj-move");
  }
  _adjDragEndCallbackHandler(t, e, r) {
    this._logger.debug(
      "InnoFlowchart.adjDragEndCallbackHandler()",
      "record undo action"
    ), this._actionController.addAction(
      new ht([new et(t, [{ key: "connection.points", oldValue: e, newValue: r }])])
    ), this._terminateDrag("drag-adj-move");
  }
  _renderCallBack(t) {
    if (t.type === "node") {
      const r = /* @__PURE__ */ new Set();
      for (const i of this._objectManager.getConnectionIterator())
        !r.has(i.id) && (i.sourceObjId === t.id || i.destinationObjId === t.id) && (r.add(i.id), i.render());
    }
    const e = this._objectManager.getParentGroupOrNull(t);
    e !== null && e.resize();
  }
  _clickOnSheetHandler(t) {
    this.$emit(T.CLICK, this._getXYOnSheet(t.offsetX, t.offsetY));
  }
  _createAppendingConnection(t, e, r, i, o) {
    if (this._appendingObject !== null)
      throw new Error("Already created an appending obj!!");
    if (!o["connection.sourceObjId"]) {
      const a = this._getNodeAndPosUnderXY(t, e);
      a.node !== null && (o["connection.sourceObjId"] = a.node.id, o["connection.sourcePos"] = a.pos);
    }
    const s = {
      ...o,
      id: "#temp_appending_connection",
      type: "connection",
      opacity: 0.5,
      temp: !0,
      "connection.points": [
        { x: t, y: e },
        { x: r, y: i }
      ]
    };
    this._appendingObject = this.add(s);
  }
  _endAppendingConnection() {
    let t = this._appendingObject.data;
    this._appendMode.dragged === !1 && (t = ga(this._appendingObject));
    const e = this.add({
      ...t,
      id: void 0,
      temp: !1,
      opacity: 1
    });
    this._actionController.addAction(new ft(dt([e])));
  }
  /**
   * @hidden
   *
   * 키보드의 F2 키를 눌렀을 경우, 오브젝트의 라벨을 변경한다.\
   * 현재 flowchart가 수정모드가 아니고, 선택된 오브젝트가 1개일 경우에만 동작한다.
   */
  handleKeydownF2() {
    if (!this._editMode && this.getCountOfSelectedObject() === 1)
      for (const t of this._objectManager.getSelectedObjIterator()) {
        t.editLabel();
        return;
      }
  }
  /**
   * @hidden
   *
   * 키보드의 Delete 키를 눌렀을 경우, 해당 오브젝트를 제거한다.
   */
  handleKeydownDelete() {
    this.removeSelected();
  }
  /**
   * @hidden
   *
   * 키보드의 방향키를 눌렀을 경우, 해당 오브젝트를 이동시킨다.
   */
  handleKeydownArrows(t, e) {
    const r = this.getSelectedObjects(!1);
    r.length > 0 ? this.moveWrapper(() => {
      r.filter((i) => i.isSelected).forEach((i) => i.moveTo(t, e));
    }) : (this._div.scrollLeft += t * 2, this._div.scrollTop += e * 2);
  }
  /**
   * @hidden
   *
   * 키보드의 방향키를 눌렀다 뗀 경우, 해당 오브젝트의 이동을 해제한다.
   */
  handleKeydownEscape() {
    const t = this._appendMode, e = this._appendingObject;
    t.mode === null && e !== null ? (this._logger.info("InnoFlowchart.handleKeydownEscape()", "Cancel Creating Connection"), this.cancelCreatingConnection()) : t.mode !== null ? (this._logger.info("InnoFlowchart.handleKeydownEscape()", "Clear Appending Data"), this.clearAppendMode()) : (this._logger.info("InnoFlowchart.handleKeydownEscape()", "releaseAllObj"), this.releaseAllObjects());
  }
}
const cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddCommand: ft,
  ChangedInfo: et,
  DeleteCommand: je,
  EditCommand: ht,
  RenderCommand: lr,
  ZIndexCommand: hr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Zs as ActionController,
  va as Connection,
  T as EVENT_TYPE,
  Oa as Group,
  ac as IRFlowchart,
  cc as IRFlowchartCommands,
  Ma as Node,
  ie as POSITION_LIST,
  He as RenderObject
};
//# sourceMappingURL=flowchart.js.map
