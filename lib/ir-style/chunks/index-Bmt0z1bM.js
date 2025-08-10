import { g as oe } from "./_commonjsHelpers-DaMA6jEr.js";
var fe = { exports: {} }, Qe = fe.exports, ke;
function Xe() {
  return ke || (ke = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(Qe, function() {
      var t = 1e3, n = 6e4, r = 36e5, s = "millisecond", i = "second", o = "minute", l = "hour", u = "day", c = "week", g = "month", f = "quarter", S = "year", k = "date", R = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(x) {
        var h = ["th", "st", "nd", "rd"], d = x % 100;
        return "[" + x + (h[(d - 20) % 10] || h[d] || h[0]) + "]";
      } }, P = function(x, h, d) {
        var y = String(x);
        return !y || y.length >= h ? x : "" + Array(h + 1 - y.length).join(d) + x;
      }, F = { s: P, z: function(x) {
        var h = -x.utcOffset(), d = Math.abs(h), y = Math.floor(d / 60), p = d % 60;
        return (h <= 0 ? "+" : "-") + P(y, 2, "0") + ":" + P(p, 2, "0");
      }, m: function x(h, d) {
        if (h.date() < d.date()) return -x(d, h);
        var y = 12 * (d.year() - h.year()) + (d.month() - h.month()), p = h.clone().add(y, g), b = d - p < 0, w = h.clone().add(y + (b ? -1 : 1), g);
        return +(-(y + (d - p) / (b ? p - w : w - p)) || 0);
      }, a: function(x) {
        return x < 0 ? Math.ceil(x) || 0 : Math.floor(x);
      }, p: function(x) {
        return { M: g, y: S, w: c, d: u, D: k, h: l, m: o, s: i, ms: s, Q: f }[x] || String(x || "").toLowerCase().replace(/s$/, "");
      }, u: function(x) {
        return x === void 0;
      } }, j = "en", Y = {};
      Y[j] = C;
      var E = "$isDayjsObject", I = function(x) {
        return x instanceof N || !(!x || !x[E]);
      }, U = function x(h, d, y) {
        var p;
        if (!h) return j;
        if (typeof h == "string") {
          var b = h.toLowerCase();
          Y[b] && (p = b), d && (Y[b] = d, p = b);
          var w = h.split("-");
          if (!p && w.length > 1) return x(w[0]);
        } else {
          var O = h.name;
          Y[O] = h, p = O;
        }
        return !y && p && (j = p), p || !y && j;
      }, M = function(x, h) {
        if (I(x)) return x.clone();
        var d = typeof h == "object" ? h : {};
        return d.date = x, d.args = arguments, new N(d);
      }, v = F;
      v.l = U, v.i = I, v.w = function(x, h) {
        return M(x, { locale: h.$L, utc: h.$u, x: h.$x, $offset: h.$offset });
      };
      var N = function() {
        function x(d) {
          this.$L = U(d.locale, null, !0), this.parse(d), this.$x = this.$x || d.x || {}, this[E] = !0;
        }
        var h = x.prototype;
        return h.parse = function(d) {
          this.$d = function(y) {
            var p = y.date, b = y.utc;
            if (p === null) return /* @__PURE__ */ new Date(NaN);
            if (v.u(p)) return /* @__PURE__ */ new Date();
            if (p instanceof Date) return new Date(p);
            if (typeof p == "string" && !/Z$/i.test(p)) {
              var w = p.match(m);
              if (w) {
                var O = w[2] - 1 || 0, D = (w[7] || "0").substring(0, 3);
                return b ? new Date(Date.UTC(w[1], O, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, D)) : new Date(w[1], O, w[3] || 1, w[4] || 0, w[5] || 0, w[6] || 0, D);
              }
            }
            return new Date(p);
          }(d), this.init();
        }, h.init = function() {
          var d = this.$d;
          this.$y = d.getFullYear(), this.$M = d.getMonth(), this.$D = d.getDate(), this.$W = d.getDay(), this.$H = d.getHours(), this.$m = d.getMinutes(), this.$s = d.getSeconds(), this.$ms = d.getMilliseconds();
        }, h.$utils = function() {
          return v;
        }, h.isValid = function() {
          return this.$d.toString() !== R;
        }, h.isSame = function(d, y) {
          var p = M(d);
          return this.startOf(y) <= p && p <= this.endOf(y);
        }, h.isAfter = function(d, y) {
          return M(d) < this.startOf(y);
        }, h.isBefore = function(d, y) {
          return this.endOf(y) < M(d);
        }, h.$g = function(d, y, p) {
          return v.u(d) ? this[y] : this.set(p, d);
        }, h.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, h.valueOf = function() {
          return this.$d.getTime();
        }, h.startOf = function(d, y) {
          var p = this, b = !!v.u(y) || y, w = v.p(d), O = function(W, V) {
            var z = v.w(p.$u ? Date.UTC(p.$y, V, W) : new Date(p.$y, V, W), p);
            return b ? z : z.endOf(u);
          }, D = function(W, V) {
            return v.w(p.toDate()[W].apply(p.toDate("s"), (b ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), p);
          }, A = this.$W, B = this.$M, H = this.$D, G = "set" + (this.$u ? "UTC" : "");
          switch (w) {
            case S:
              return b ? O(1, 0) : O(31, 11);
            case g:
              return b ? O(1, B) : O(0, B + 1);
            case c:
              var J = this.$locale().weekStart || 0, X = (A < J ? A + 7 : A) - J;
              return O(b ? H - X : H + (6 - X), B);
            case u:
            case k:
              return D(G + "Hours", 0);
            case l:
              return D(G + "Minutes", 1);
            case o:
              return D(G + "Seconds", 2);
            case i:
              return D(G + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, h.endOf = function(d) {
          return this.startOf(d, !1);
        }, h.$set = function(d, y) {
          var p, b = v.p(d), w = "set" + (this.$u ? "UTC" : ""), O = (p = {}, p[u] = w + "Date", p[k] = w + "Date", p[g] = w + "Month", p[S] = w + "FullYear", p[l] = w + "Hours", p[o] = w + "Minutes", p[i] = w + "Seconds", p[s] = w + "Milliseconds", p)[b], D = b === u ? this.$D + (y - this.$W) : y;
          if (b === g || b === S) {
            var A = this.clone().set(k, 1);
            A.$d[O](D), A.init(), this.$d = A.set(k, Math.min(this.$D, A.daysInMonth())).$d;
          } else O && this.$d[O](D);
          return this.init(), this;
        }, h.set = function(d, y) {
          return this.clone().$set(d, y);
        }, h.get = function(d) {
          return this[v.p(d)]();
        }, h.add = function(d, y) {
          var p, b = this;
          d = Number(d);
          var w = v.p(y), O = function(B) {
            var H = M(b);
            return v.w(H.date(H.date() + Math.round(B * d)), b);
          };
          if (w === g) return this.set(g, this.$M + d);
          if (w === S) return this.set(S, this.$y + d);
          if (w === u) return O(1);
          if (w === c) return O(7);
          var D = (p = {}, p[o] = n, p[l] = r, p[i] = t, p)[w] || 1, A = this.$d.getTime() + d * D;
          return v.w(A, this);
        }, h.subtract = function(d, y) {
          return this.add(-1 * d, y);
        }, h.format = function(d) {
          var y = this, p = this.$locale();
          if (!this.isValid()) return p.invalidDate || R;
          var b = d || "YYYY-MM-DDTHH:mm:ssZ", w = v.z(this), O = this.$H, D = this.$m, A = this.$M, B = p.weekdays, H = p.months, G = p.meridiem, J = function(V, z, Z, Q) {
            return V && (V[z] || V(y, b)) || Z[z].slice(0, Q);
          }, X = function(V) {
            return v.s(O % 12 || 12, V, "0");
          }, W = G || function(V, z, Z) {
            var Q = V < 12 ? "AM" : "PM";
            return Z ? Q.toLowerCase() : Q;
          };
          return b.replace(L, function(V, z) {
            return z || function(Z) {
              switch (Z) {
                case "YY":
                  return String(y.$y).slice(-2);
                case "YYYY":
                  return v.s(y.$y, 4, "0");
                case "M":
                  return A + 1;
                case "MM":
                  return v.s(A + 1, 2, "0");
                case "MMM":
                  return J(p.monthsShort, A, H, 3);
                case "MMMM":
                  return J(H, A);
                case "D":
                  return y.$D;
                case "DD":
                  return v.s(y.$D, 2, "0");
                case "d":
                  return String(y.$W);
                case "dd":
                  return J(p.weekdaysMin, y.$W, B, 2);
                case "ddd":
                  return J(p.weekdaysShort, y.$W, B, 3);
                case "dddd":
                  return B[y.$W];
                case "H":
                  return String(O);
                case "HH":
                  return v.s(O, 2, "0");
                case "h":
                  return X(1);
                case "hh":
                  return X(2);
                case "a":
                  return W(O, D, !0);
                case "A":
                  return W(O, D, !1);
                case "m":
                  return String(D);
                case "mm":
                  return v.s(D, 2, "0");
                case "s":
                  return String(y.$s);
                case "ss":
                  return v.s(y.$s, 2, "0");
                case "SSS":
                  return v.s(y.$ms, 3, "0");
                case "Z":
                  return w;
              }
              return null;
            }(V) || w.replace(":", "");
          });
        }, h.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, h.diff = function(d, y, p) {
          var b, w = this, O = v.p(y), D = M(d), A = (D.utcOffset() - this.utcOffset()) * n, B = this - D, H = function() {
            return v.m(w, D);
          };
          switch (O) {
            case S:
              b = H() / 12;
              break;
            case g:
              b = H();
              break;
            case f:
              b = H() / 3;
              break;
            case c:
              b = (B - A) / 6048e5;
              break;
            case u:
              b = (B - A) / 864e5;
              break;
            case l:
              b = B / r;
              break;
            case o:
              b = B / n;
              break;
            case i:
              b = B / t;
              break;
            default:
              b = B;
          }
          return p ? b : v.a(b);
        }, h.daysInMonth = function() {
          return this.endOf(g).$D;
        }, h.$locale = function() {
          return Y[this.$L];
        }, h.locale = function(d, y) {
          if (!d) return this.$L;
          var p = this.clone(), b = U(d, y, !0);
          return b && (p.$L = b), p;
        }, h.clone = function() {
          return v.w(this.$d, this);
        }, h.toDate = function() {
          return new Date(this.valueOf());
        }, h.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, h.toISOString = function() {
          return this.$d.toISOString();
        }, h.toString = function() {
          return this.$d.toUTCString();
        }, x;
      }(), K = N.prototype;
      return M.prototype = K, [["$ms", s], ["$s", i], ["$m", o], ["$H", l], ["$W", u], ["$M", g], ["$y", S], ["$D", k]].forEach(function(x) {
        K[x[1]] = function(h) {
          return this.$g(h, x[0], x[1]);
        };
      }), M.extend = function(x, h) {
        return x.$i || (x(h, N, M), x.$i = !0), M;
      }, M.locale = U, M.isDayjs = I, M.unix = function(x) {
        return M(1e3 * x);
      }, M.en = Y[j], M.Ls = Y, M.p = {}, M;
    });
  }(fe)), fe.exports;
}
var _e = Xe();
const re = /* @__PURE__ */ oe(_e);
var de = { exports: {} }, et = de.exports, Pe;
function tt() {
  return Pe || (Pe = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(et, function() {
      return function(t, n, r) {
        n.prototype.isBetween = function(s, i, o, l) {
          var u = r(s), c = r(i), g = (l = l || "()")[0] === "(", f = l[1] === ")";
          return (g ? this.isAfter(u, o) : !this.isBefore(u, o)) && (f ? this.isBefore(c, o) : !this.isAfter(c, o)) || (g ? this.isBefore(u, o) : !this.isAfter(u, o)) && (f ? this.isAfter(c, o) : !this.isBefore(c, o));
        };
      };
    });
  }(de)), de.exports;
}
var nt = tt();
const rt = /* @__PURE__ */ oe(nt);
var he = { exports: {} }, st = he.exports, Me;
function it() {
  return Me || (Me = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(st, function() {
      return function(t, n) {
        n.prototype.isSameOrAfter = function(r, s) {
          return this.isSame(r, s) || this.isAfter(r, s);
        };
      };
    });
  }(he)), he.exports;
}
var at = it();
const ot = /* @__PURE__ */ oe(at);
var ge = { exports: {} }, lt = ge.exports, De;
function ut() {
  return De || (De = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(lt, function() {
      return function(t, n) {
        n.prototype.isSameOrBefore = function(r, s) {
          return this.isSame(r, s) || this.isBefore(r, s);
        };
      };
    });
  }(ge)), ge.exports;
}
var ct = ut();
const ft = /* @__PURE__ */ oe(ct);
var pe = { exports: {} }, dt = pe.exports, Ne;
function ht() {
  return Ne || (Ne = 1, function(a, e) {
    (function(t, n) {
      a.exports = n();
    })(dt, function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d/, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(m) {
        return (m = +m) + (m > 68 ? 1900 : 2e3);
      }, c = function(m) {
        return function(L) {
          this[m] = +L;
        };
      }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
        (this.zone || (this.zone = {})).offset = function(L) {
          if (!L || L === "Z") return 0;
          var C = L.match(/([+-]|\d\d)/g), P = 60 * C[1] + (+C[2] || 0);
          return P === 0 ? 0 : C[0] === "+" ? -P : P;
        }(m);
      }], f = function(m) {
        var L = l[m];
        return L && (L.indexOf ? L : L.s.concat(L.f));
      }, S = function(m, L) {
        var C, P = l.meridiem;
        if (P) {
          for (var F = 1; F <= 24; F += 1) if (m.indexOf(P(F, 0, L)) > -1) {
            C = F > 12;
            break;
          }
        } else C = m === (L ? "pm" : "PM");
        return C;
      }, k = { A: [o, function(m) {
        this.afternoon = S(m, !1);
      }], a: [o, function(m) {
        this.afternoon = S(m, !0);
      }], Q: [r, function(m) {
        this.month = 3 * (m - 1) + 1;
      }], S: [r, function(m) {
        this.milliseconds = 100 * +m;
      }], SS: [s, function(m) {
        this.milliseconds = 10 * +m;
      }], SSS: [/\d{3}/, function(m) {
        this.milliseconds = +m;
      }], s: [i, c("seconds")], ss: [i, c("seconds")], m: [i, c("minutes")], mm: [i, c("minutes")], H: [i, c("hours")], h: [i, c("hours")], HH: [i, c("hours")], hh: [i, c("hours")], D: [i, c("day")], DD: [s, c("day")], Do: [o, function(m) {
        var L = l.ordinal, C = m.match(/\d+/);
        if (this.day = C[0], L) for (var P = 1; P <= 31; P += 1) L(P).replace(/\[|\]/g, "") === m && (this.day = P);
      }], w: [i, c("week")], ww: [s, c("week")], M: [i, c("month")], MM: [s, c("month")], MMM: [o, function(m) {
        var L = f("months"), C = (f("monthsShort") || L.map(function(P) {
          return P.slice(0, 3);
        })).indexOf(m) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], MMMM: [o, function(m) {
        var L = f("months").indexOf(m) + 1;
        if (L < 1) throw new Error();
        this.month = L % 12 || L;
      }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(m) {
        this.year = u(m);
      }], YYYY: [/\d{4}/, c("year")], Z: g, ZZ: g };
      function R(m) {
        var L, C;
        L = m, C = l && l.formats;
        for (var P = (m = L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, v, N) {
          var K = N && N.toUpperCase();
          return v || C[N] || t[N] || C[K].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(x, h, d) {
            return h || d.slice(1);
          });
        })).match(n), F = P.length, j = 0; j < F; j += 1) {
          var Y = P[j], E = k[Y], I = E && E[0], U = E && E[1];
          P[j] = U ? { regex: I, parser: U } : Y.replace(/^\[|\]$/g, "");
        }
        return function(M) {
          for (var v = {}, N = 0, K = 0; N < F; N += 1) {
            var x = P[N];
            if (typeof x == "string") K += x.length;
            else {
              var h = x.regex, d = x.parser, y = M.slice(K), p = h.exec(y)[0];
              d.call(v, p), M = M.replace(p, "");
            }
          }
          return function(b) {
            var w = b.afternoon;
            if (w !== void 0) {
              var O = b.hours;
              w ? O < 12 && (b.hours += 12) : O === 12 && (b.hours = 0), delete b.afternoon;
            }
          }(v), v;
        };
      }
      return function(m, L, C) {
        C.p.customParseFormat = !0, m && m.parseTwoDigitYear && (u = m.parseTwoDigitYear);
        var P = L.prototype, F = P.parse;
        P.parse = function(j) {
          var Y = j.date, E = j.utc, I = j.args;
          this.$u = E;
          var U = I[1];
          if (typeof U == "string") {
            var M = I[2] === !0, v = I[3] === !0, N = M || v, K = I[2];
            v && (K = I[2]), l = this.$locale(), !M && K && (l = C.Ls[K]), this.$d = function(y, p, b, w) {
              try {
                if (["x", "X"].indexOf(p) > -1) return new Date((p === "X" ? 1e3 : 1) * y);
                var O = R(p)(y), D = O.year, A = O.month, B = O.day, H = O.hours, G = O.minutes, J = O.seconds, X = O.milliseconds, W = O.zone, V = O.week, z = /* @__PURE__ */ new Date(), Z = B || (D || A ? 1 : z.getDate()), Q = D || z.getFullYear(), le = 0;
                D && !A || (le = A > 0 ? A - 1 : z.getMonth());
                var ue, we = H || 0, ve = G || 0, Oe = J || 0, $e = X || 0;
                return W ? new Date(Date.UTC(Q, le, Z, we, ve, Oe, $e + 60 * W.offset * 1e3)) : b ? new Date(Date.UTC(Q, le, Z, we, ve, Oe, $e)) : (ue = new Date(Q, le, Z, we, ve, Oe, $e), V && (ue = w(ue).week(V).toDate()), ue);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(Y, U, E, C), this.init(), K && K !== !0 && (this.$L = this.locale(K).$L), N && Y != this.format(U) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (U instanceof Array) for (var x = U.length, h = 1; h <= x; h += 1) {
            I[1] = U[h - 1];
            var d = C.apply(this, I);
            if (d.isValid()) {
              this.$d = d.$d, this.$L = d.$L, this.init();
              break;
            }
            h === x && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else F.call(this, j);
        };
      };
    });
  }(pe)), pe.exports;
}
var gt = ht();
const pt = /* @__PURE__ */ oe(gt);
re.extend(rt);
re.extend(ot);
re.extend(ft);
re.extend(pt);
const $ = (a) => typeof a == "string", se = () => {
  let a, e;
  const t = new Promise((n, r) => {
    a = n, e = r;
  });
  return t.resolve = a, t.reject = e, t;
}, Re = (a) => a == null ? "" : "" + a, mt = (a, e, t) => {
  a.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}, xt = /###/g, Te = (a) => a && a.indexOf("###") > -1 ? a.replace(xt, ".") : a, Ee = (a) => !a || $(a), ie = (a, e, t) => {
  const n = $(e) ? e.split(".") : e;
  let r = 0;
  for (; r < n.length - 1; ) {
    if (Ee(a)) return {};
    const s = Te(n[r]);
    !a[s] && t && (a[s] = new t()), Object.prototype.hasOwnProperty.call(a, s) ? a = a[s] : a = {}, ++r;
  }
  return Ee(a) ? {} : {
    obj: a,
    k: Te(n[r])
  };
}, Ie = (a, e, t) => {
  const {
    obj: n,
    k: r
  } = ie(a, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[r] = t;
    return;
  }
  let s = e[e.length - 1], i = e.slice(0, e.length - 1), o = ie(a, i, Object);
  for (; o.obj === void 0 && i.length; )
    s = `${i[i.length - 1]}.${s}`, i = i.slice(0, i.length - 1), o = ie(a, i, Object), o?.obj && typeof o.obj[`${o.k}.${s}`] < "u" && (o.obj = void 0);
  o.obj[`${o.k}.${s}`] = t;
}, yt = (a, e, t, n) => {
  const {
    obj: r,
    k: s
  } = ie(a, e, Object);
  r[s] = r[s] || [], r[s].push(t);
}, me = (a, e) => {
  const {
    obj: t,
    k: n
  } = ie(a, e);
  if (t && Object.prototype.hasOwnProperty.call(t, n))
    return t[n];
}, bt = (a, e, t) => {
  const n = me(a, t);
  return n !== void 0 ? n : me(e, t);
}, Je = (a, e, t) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in a ? $(a[n]) || a[n] instanceof String || $(e[n]) || e[n] instanceof String ? t && (a[n] = e[n]) : Je(a[n], e[n], t) : a[n] = e[n]);
  return a;
}, ee = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var St = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const wt = (a) => $(a) ? a.replace(/[&<>"'\/]/g, (e) => St[e]) : a;
class vt {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const n = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
  }
}
const Ot = [" ", ",", "?", "!", ";"], $t = new vt(20), Lt = (a, e, t) => {
  e = e || "", t = t || "";
  const n = Ot.filter((i) => e.indexOf(i) < 0 && t.indexOf(i) < 0);
  if (n.length === 0) return !0;
  const r = $t.getRegExp(`(${n.map((i) => i === "?" ? "\\?" : i).join("|")})`);
  let s = !r.test(a);
  if (!s) {
    const i = a.indexOf(t);
    i > 0 && !r.test(a.substring(0, i)) && (s = !0);
  }
  return s;
}, Ce = function(a, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!a) return;
  if (a[e])
    return Object.prototype.hasOwnProperty.call(a, e) ? a[e] : void 0;
  const n = e.split(t);
  let r = a;
  for (let s = 0; s < n.length; ) {
    if (!r || typeof r != "object")
      return;
    let i, o = "";
    for (let l = s; l < n.length; ++l)
      if (l !== s && (o += t), o += n[l], i = r[o], i !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof i) > -1 && l < n.length - 1)
          continue;
        s += l - s + 1;
        break;
      }
    r = i;
  }
  return r;
}, xe = (a) => a?.replace("_", "-"), Ct = {
  type: "logger",
  log(a) {
    this.output("log", a);
  },
  warn(a) {
    this.output("warn", a);
  },
  error(a) {
    this.output("error", a);
  },
  output(a, e) {
    console?.[a]?.apply?.(console, e);
  }
};
class ye {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Ct, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, n, r) {
    return r && !this.debug ? null : ($(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new ye(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new ye(this.logger, e);
  }
}
var q = new ye();
class Se {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const r = this.observers[n].get(t) || 0;
      this.observers[n].set(t, r + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((i) => {
      let [o, l] = i;
      for (let u = 0; u < l; u++)
        o(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((i) => {
      let [o, l] = i;
      for (let u = 0; u < l; u++)
        o.apply(o, [e, ...n]);
    });
  }
}
class Ae extends Se {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, i = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let o;
    e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : $(n) && s ? o.push(...n.split(s)) : o.push(n)));
    const l = me(this.data, o);
    return !l && !t && !n && e.indexOf(".") > -1 && (e = o[0], t = o[1], n = o.slice(2).join(".")), l || !i || !$(n) ? l : Ce(this.data?.[e]?.[t], n, s);
  }
  addResource(e, t, n, r) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let o = [e, t];
    n && (o = o.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), Ie(this.data, o, r), s.silent || this.emit("added", e, t, n, r);
  }
  addResources(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const s in n)
      ($(n[s]) || Array.isArray(n[s])) && this.addResource(e, t, s, n[s], {
        silent: !0
      });
    r.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, r, s) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, o = [e, t];
    e.indexOf(".") > -1 && (o = e.split("."), r = n, n = t, t = o[1]), this.addNamespaces(t);
    let l = me(this.data, o) || {};
    i.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? Je(l, n, s) : l = {
      ...l,
      ...n
    }, Ie(this.data, o, l), i.silent || this.emit("added", e, t, n);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((r) => t[r] && Object.keys(t[r]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Ze = {
  processors: {},
  addPostProcessor(a) {
    this.processors[a.name] = a;
  },
  handle(a, e, t, n, r) {
    return a.forEach((s) => {
      e = this.processors[s]?.process(e, t, n, r) ?? e;
    }), e;
  }
};
const Fe = {}, Ye = (a) => !$(a) && typeof a != "boolean" && typeof a != "number";
class be extends Se {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), mt(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = q.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    return e == null ? !1 : this.resolve(e, t)?.res !== void 0;
  }
  extractFromKey(e, t) {
    let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let s = t.ns || this.options.defaultNS || [];
    const i = n && e.indexOf(n) > -1, o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Lt(e, n, r);
    if (i && !o) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: $(s) ? [s] : s
        };
      const u = e.split(n);
      (n !== r || n === r && this.options.ns.indexOf(u[0]) > -1) && (s = u.shift()), e = u.join(r);
    }
    return {
      key: e,
      namespaces: $(s) ? [s] : s
    };
  }
  translate(e, t, n) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const r = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, s = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: i,
      namespaces: o
    } = this.extractFromKey(e[e.length - 1], t), l = o[o.length - 1], u = t.lng || this.language, c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u?.toLowerCase() === "cimode") {
      if (c) {
        const v = t.nsSeparator || this.options.nsSeparator;
        return r ? {
          res: `${l}${v}${i}`,
          usedKey: i,
          exactUsedKey: i,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${v}${i}`;
      }
      return r ? {
        res: i,
        usedKey: i,
        exactUsedKey: i,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : i;
    }
    const g = this.resolve(e, t);
    let f = g?.res;
    const S = g?.usedKey || i, k = g?.exactUsedKey || i, R = ["[object Number]", "[object Function]", "[object RegExp]"], m = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, L = !this.i18nFormat || this.i18nFormat.handleAsObject, C = t.count !== void 0 && !$(t.count), P = be.hasDefaultValue(t), F = C ? this.pluralResolver.getSuffix(u, t.count, t) : "", j = t.ordinal && C ? this.pluralResolver.getSuffix(u, t.count, {
      ordinal: !1
    }) : "", Y = C && !t.ordinal && t.count === 0, E = Y && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${F}`] || t[`defaultValue${j}`] || t.defaultValue;
    let I = f;
    L && !f && P && (I = E);
    const U = Ye(I), M = Object.prototype.toString.apply(I);
    if (L && I && U && R.indexOf(M) < 0 && !($(m) && Array.isArray(I))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(S, I, {
          ...t,
          ns: o
        }) : `key '${i} (${this.language})' returned an object instead of string.`;
        return r ? (g.res = v, g.usedParams = this.getUsedParamsDetails(t), g) : v;
      }
      if (s) {
        const v = Array.isArray(I), N = v ? [] : {}, K = v ? k : S;
        for (const x in I)
          if (Object.prototype.hasOwnProperty.call(I, x)) {
            const h = `${K}${s}${x}`;
            P && !f ? N[x] = this.translate(h, {
              ...t,
              defaultValue: Ye(E) ? E[x] : void 0,
              joinArrays: !1,
              ns: o
            }) : N[x] = this.translate(h, {
              ...t,
              joinArrays: !1,
              ns: o
            }), N[x] === h && (N[x] = I[x]);
          }
        f = N;
      }
    } else if (L && $(m) && Array.isArray(f))
      f = f.join(m), f && (f = this.extendTranslation(f, e, t, n));
    else {
      let v = !1, N = !1;
      !this.isValidLookup(f) && P && (v = !0, f = E), this.isValidLookup(f) || (N = !0, f = i);
      const x = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && N ? void 0 : f, h = P && E !== f && this.options.updateMissing;
      if (N || v || h) {
        if (this.logger.log(h ? "updateKey" : "missingKey", u, l, i, h ? E : f), s) {
          const b = this.resolve(i, {
            ...t,
            keySeparator: !1
          });
          b && b.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let d = [];
        const y = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && y && y[0])
          for (let b = 0; b < y.length; b++)
            d.push(y[b]);
        else this.options.saveMissingTo === "all" ? d = this.languageUtils.toResolveHierarchy(t.lng || this.language) : d.push(t.lng || this.language);
        const p = (b, w, O) => {
          const D = P && O !== f ? O : x;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(b, l, w, D, h, t) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(b, l, w, D, h, t), this.emit("missingKey", b, l, w, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? d.forEach((b) => {
          const w = this.pluralResolver.getSuffixes(b, t);
          Y && t[`defaultValue${this.options.pluralSeparator}zero`] && w.indexOf(`${this.options.pluralSeparator}zero`) < 0 && w.push(`${this.options.pluralSeparator}zero`), w.forEach((O) => {
            p([b], i + O, t[`defaultValue${O}`] || E);
          });
        }) : p(d, i, E));
      }
      f = this.extendTranslation(f, e, t, g, n), N && f === i && this.options.appendNamespaceToMissingKey && (f = `${l}:${i}`), (N || v) && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${i}` : i, v ? f : void 0));
    }
    return r ? (g.res = f, g.usedParams = this.getUsedParamsDetails(t), g) : f;
  }
  extendTranslation(e, t, n, r, s) {
    var i = this;
    if (this.i18nFormat?.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
        resolved: r
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const u = $(e) && (n?.interpolation?.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = e.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let g = n.replace && !$(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, n.lng || this.language || r.usedLng, n), u) {
        const f = e.match(this.interpolator.nestingRegexp), S = f && f.length;
        c < S && (n.nest = !1);
      }
      !n.lng && r && r.res && (n.lng = this.language || r.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, S = new Array(f), k = 0; k < f; k++)
          S[k] = arguments[k];
        return s?.[0] === S[0] && !n.context ? (i.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`), null) : i.translate(...S, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const o = n.postProcess || this.options.postProcess, l = $(o) ? [o] : o;
    return e != null && l?.length && n.applyPostProcessor !== !1 && (e = Ze.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, r, s, i, o;
    return $(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(n)) return;
      const u = this.extractFromKey(l, t), c = u.key;
      r = c;
      let g = u.namespaces;
      this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && !$(t.count), S = f && !t.ordinal && t.count === 0, k = t.context !== void 0 && ($(t.context) || typeof t.context == "number") && t.context !== "", R = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      g.forEach((m) => {
        this.isValidLookup(n) || (o = m, !Fe[`${R[0]}-${m}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (Fe[`${R[0]}-${m}`] = !0, this.logger.warn(`key "${r}" for languages "${R.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), R.forEach((L) => {
          if (this.isValidLookup(n)) return;
          i = L;
          const C = [c];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, c, L, m, t);
          else {
            let F;
            f && (F = this.pluralResolver.getSuffix(L, t.count, t));
            const j = `${this.options.pluralSeparator}zero`, Y = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (C.push(c + F), t.ordinal && F.indexOf(Y) === 0 && C.push(c + F.replace(Y, this.options.pluralSeparator)), S && C.push(c + j)), k) {
              const E = `${c}${this.options.contextSeparator}${t.context}`;
              C.push(E), f && (C.push(E + F), t.ordinal && F.indexOf(Y) === 0 && C.push(E + F.replace(Y, this.options.pluralSeparator)), S && C.push(E + j));
            }
          }
          let P;
          for (; P = C.pop(); )
            this.isValidLookup(n) || (s = P, n = this.getResource(L, m, P, t));
        }));
      });
    }), {
      res: n,
      usedKey: r,
      exactUsedKey: s,
      usedLng: i,
      usedNS: o
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !$(e.replace);
    let r = n ? e.replace : e;
    if (n && typeof e.count < "u" && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
      ...this.options.interpolation.defaultVariables,
      ...r
    }), !n) {
      r = {
        ...r
      };
      for (const s of t)
        delete r[s];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && e[n] !== void 0)
        return !0;
    return !1;
  }
}
class je {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = q.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = xe(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = xe(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if ($(e) && e.indexOf("-") > -1) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((n) => {
      if (t) return;
      const r = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r);
    }), !t && this.options.supportedLngs && e.forEach((n) => {
      if (t) return;
      const r = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(r)) return t = r;
      t = this.options.supportedLngs.find((s) => {
        if (s === r) return s;
        if (!(s.indexOf("-") < 0 && r.indexOf("-") < 0) && (s.indexOf("-") > 0 && r.indexOf("-") < 0 && s.substring(0, s.indexOf("-")) === r || s.indexOf(r) === 0 && r.length > 1))
          return s;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), $(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let n = e[t];
    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), r = [], s = (i) => {
      i && (this.isSupportedCode(i) ? r.push(i) : this.logger.warn(`rejecting language code not found in supportedLngs: ${i}`));
    };
    return $(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : $(e) && s(this.formatLanguageCode(e)), n.forEach((i) => {
      r.indexOf(i) < 0 && s(this.formatLanguageCode(i));
    }), r;
  }
}
const Be = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Ke = {
  select: (a) => a === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class kt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = q.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = xe(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
      cleanedCode: n,
      type: r
    });
    if (s in this.pluralRulesCache)
      return this.pluralRulesCache[s];
    let i;
    try {
      i = new Intl.PluralRules(n, {
        type: r
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Ke;
      if (!e.match(/-|_/)) return Ke;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      i = this.getRule(l, t);
    }
    return this.pluralRulesCache[s] = i, i;
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
    return n || (n = this.getRule("dev", t)), n?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, n).map((r) => `${t}${r}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(e, t);
    return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((r, s) => Be[r] - Be[s]).map((r) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = this.getRule(e, n);
    return r ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
  }
}
const Ve = function(a, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = bt(a, e, t);
  return !s && r && $(t) && (s = Ce(a, t, n), s === void 0 && (s = Ce(e, t, n))), s;
}, Le = (a) => a.replace(/\$/g, "$$$$");
class Pt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = q.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: n,
      useRawValueToEscape: r,
      prefix: s,
      prefixEscaped: i,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: g,
      nestingPrefix: f,
      nestingPrefixEscaped: S,
      nestingSuffix: k,
      nestingSuffixEscaped: R,
      nestingOptionsSeparator: m,
      maxReplaces: L,
      alwaysFormat: C
    } = e.interpolation;
    this.escape = t !== void 0 ? t : wt, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = s ? ee(s) : i || "{{", this.suffix = o ? ee(o) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : g || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? ee(f) : S || ee("$t("), this.nestingSuffix = k ? ee(k) : R || ee(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) => t?.source === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, n, r) {
    let s, i, o;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (S) => {
      if (S.indexOf(this.formatSeparator) < 0) {
        const L = Ve(t, l, S, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(L, void 0, n, {
          ...r,
          ...t,
          interpolationkey: S
        }) : L;
      }
      const k = S.split(this.formatSeparator), R = k.shift().trim(), m = k.join(this.formatSeparator).trim();
      return this.format(Ve(t, l, R, this.options.keySeparator, this.options.ignoreJSONStructure), m, n, {
        ...r,
        ...t,
        interpolationkey: R
      });
    };
    this.resetRegExp();
    const c = r?.missingInterpolationHandler || this.options.missingInterpolationHandler, g = r?.interpolation?.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (S) => Le(S)
    }, {
      regex: this.regexp,
      safeValue: (S) => this.escapeValue ? Le(this.escape(S)) : Le(S)
    }].forEach((S) => {
      for (o = 0; s = S.regex.exec(e); ) {
        const k = s[1].trim();
        if (i = u(k), i === void 0)
          if (typeof c == "function") {
            const m = c(e, s, r);
            i = $(m) ? m : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, k))
            i = "";
          else if (g) {
            i = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${k} for interpolating ${e}`), i = "";
        else !$(i) && !this.useRawValueToEscape && (i = Re(i));
        const R = S.safeValue(i);
        if (e = e.replace(s[0], R), g ? (S.regex.lastIndex += i.length, S.regex.lastIndex -= s[0].length) : S.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, s, i;
    const o = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const g = l.split(new RegExp(`${c}[ ]*{`));
      let f = `{${g[1]}`;
      l = g[0], f = this.interpolate(f, i);
      const S = f.match(/'/g), k = f.match(/"/g);
      ((S?.length ?? 0) % 2 === 0 && !k || k.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        i = JSON.parse(f), u && (i = {
          ...u,
          ...i
        });
      } catch (R) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, R), `${l}${c}${f}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, l;
    };
    for (; r = this.nestingRegexp.exec(e); ) {
      let l = [];
      i = {
        ...n
      }, i = i.replace && !$(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let u = !1;
      if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
        const c = r[1].split(this.formatSeparator).map((g) => g.trim());
        r[1] = c.shift(), l = c, u = !0;
      }
      if (s = t(o.call(this, r[1].trim(), i), i), s && r[0] === e && !$(s)) return s;
      $(s) || (s = Re(s)), s || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), s = ""), u && (s = l.reduce((c, g) => this.format(c, g, n.lng, {
        ...n,
        interpolationkey: r[1].trim()
      }), s.trim())), e = e.replace(r[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Mt = (a) => {
  let e = a.toLowerCase().trim();
  const t = {};
  if (a.indexOf("(") > -1) {
    const n = a.split("(");
    e = n[0].toLowerCase().trim();
    const r = n[1].substring(0, n[1].length - 1);
    e === "currency" && r.indexOf(":") < 0 ? t.currency || (t.currency = r.trim()) : e === "relativetime" && r.indexOf(":") < 0 ? t.range || (t.range = r.trim()) : r.split(";").forEach((i) => {
      if (i) {
        const [o, ...l] = i.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = o.trim();
        t[c] || (t[c] = u), u === "false" && (t[c] = !1), u === "true" && (t[c] = !0), isNaN(u) || (t[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, te = (a) => {
  const e = {};
  return (t, n, r) => {
    let s = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (s = {
      ...s,
      [r.interpolationkey]: void 0
    });
    const i = n + JSON.stringify(s);
    let o = e[i];
    return o || (o = a(xe(n), r), e[i] = o), o(t);
  };
};
class Dt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = q.create("formatter"), this.options = e, this.formats = {
      number: te((t, n) => {
        const r = new Intl.NumberFormat(t, {
          ...n
        });
        return (s) => r.format(s);
      }),
      currency: te((t, n) => {
        const r = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (s) => r.format(s);
      }),
      datetime: te((t, n) => {
        const r = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (s) => r.format(s);
      }),
      relativetime: te((t, n) => {
        const r = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (s) => r.format(s, n.range || "day");
      }),
      list: te((t, n) => {
        const r = new Intl.ListFormat(t, {
          ...n
        });
        return (s) => r.format(s);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = te(t);
  }
  format(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s = t.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find((o) => o.indexOf(")") > -1)) {
      const o = s.findIndex((l) => l.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, o)].join(this.formatSeparator);
    }
    return s.reduce((o, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = Mt(l);
      if (this.formats[u]) {
        let g = o;
        try {
          const f = r?.formatParams?.[r.interpolationkey] || {}, S = f.locale || f.lng || r.locale || r.lng || n;
          g = this.formats[u](o, S, {
            ...c,
            ...r,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return o;
    }, e);
  }
}
const Nt = (a, e) => {
  a.pending[e] !== void 0 && (delete a.pending[e], a.pendingCount--);
};
class Rt extends Se {
  constructor(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = q.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, r.backend, r);
  }
  queueLoad(e, t, n, r) {
    const s = {}, i = {}, o = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      t.forEach((g) => {
        const f = `${u}|${g}`;
        !n.reload && this.store.hasResourceBundle(u, g) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? i[f] === void 0 && (i[f] = !0) : (this.state[f] = 1, c = !1, i[f] === void 0 && (i[f] = !0), s[f] === void 0 && (s[f] = !0), l[g] === void 0 && (l[g] = !0)));
      }), c || (o[u] = !0);
    }), (Object.keys(s).length || Object.keys(i).length) && this.queue.push({
      pending: i,
      pendingCount: Object.keys(i).length,
      loaded: {},
      errors: [],
      callback: r
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(i),
      toLoadLanguages: Object.keys(o),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, n) {
    const r = e.split("|"), s = r[0], i = r[1];
    t && this.emit("failedLoading", s, i, t), !t && n && this.store.addResourceBundle(s, i, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
    const o = {};
    this.queue.forEach((l) => {
      yt(l.loaded, [s], i), Nt(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        o[u] || (o[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((g) => {
          o[u][g] === void 0 && (o[u][g] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", o), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, i = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: r,
        wait: s,
        callback: i
      });
      return;
    }
    this.readingCalls++;
    const o = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const g = this.waitingReads.shift();
        this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
      }
      if (u && c && r < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, r + 1, s * 2, i);
        }, s);
        return;
      }
      i(u, c);
    }, l = this.backend[n].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, t);
        u && typeof u.then == "function" ? u.then((c) => o(null, c)).catch(o) : o(null, u);
      } catch (u) {
        o(u);
      }
      return;
    }
    return l(e, t, o);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    $(e) && (e = this.languageUtils.toResolveHierarchy(e)), $(t) && (t = [t]);
    const s = this.queueLoad(e, t, n, r);
    if (!s.toLoad.length)
      return s.pending.length || r(), null;
    s.toLoad.forEach((i) => {
      this.loadOne(i);
    });
  }
  load(e, t, n) {
    this.prepareLoading(e, t, {}, n);
  }
  reload(e, t, n) {
    this.prepareLoading(e, t, {
      reload: !0
    }, n);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const n = e.split("|"), r = n[0], s = n[1];
    this.read(r, s, "read", void 0, void 0, (i, o) => {
      i && this.logger.warn(`${t}loading namespace ${s} for language ${r} failed`, i), !i && o && this.logger.log(`${t}loaded namespace ${s} for language ${r}`, o), this.loaded(e, i, o);
    });
  }
  saveMissing(e, t, n, r, s) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if (this.backend?.create) {
        const l = {
          ...i,
          isUpdate: s
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(e, t, n, r, l) : c = u(e, t, n, r), c && typeof c.then == "function" ? c.then((g) => o(null, g)).catch(o) : o(null, c);
          } catch (c) {
            o(c);
          }
        else
          u(e, t, n, r, o, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, r);
    }
  }
}
const Ue = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (a) => {
    let e = {};
    if (typeof a[1] == "object" && (e = a[1]), $(a[1]) && (e.defaultValue = a[1]), $(a[2]) && (e.tDescription = a[2]), typeof a[2] == "object" || typeof a[3] == "object") {
      const t = a[3] || a[2];
      Object.keys(t).forEach((n) => {
        e[n] = t[n];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (a) => a,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), He = (a) => ($(a.ns) && (a.ns = [a.ns]), $(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]), $(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]), a.supportedLngs?.indexOf?.("cimode") < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate), a), ce = () => {
}, Tt = (a) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((t) => {
    typeof a[t] == "function" && (a[t] = a[t].bind(a));
  });
};
class ae extends Se {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = He(e), this.services = {}, this.logger = q, this.modules = {
      external: []
    }, Tt(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && ($(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = Ue();
    this.options = {
      ...r,
      ...this.options,
      ...He(t)
    }, this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const s = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? q.init(s(this.modules.logger), this.options) : q.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = Dt;
      const g = new je(this.options);
      this.store = new Ae(this.options.resources, this.options);
      const f = this.services;
      f.logger = q, f.resourceStore = this.store, f.languageUtils = g, f.pluralResolver = new kt(g, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (f.formatter = s(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Pt(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Rt(s(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(S) {
        for (var k = arguments.length, R = new Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++)
          R[m - 1] = arguments[m];
        e.emit(S, ...R);
      }), this.modules.languageDetector && (f.languageDetector = s(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = s(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new be(this.services, this.options), this.translator.on("*", function(S) {
        for (var k = arguments.length, R = new Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++)
          R[m - 1] = arguments[m];
        e.emit(S, ...R);
      }), this.modules.external.forEach((S) => {
        S.init && S.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = ce), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments), e;
      };
    });
    const l = se(), u = () => {
      const c = (g, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), n(g, f);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce;
    const r = $(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (r?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const s = [], i = (o) => {
        if (!o || o === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(o).forEach((u) => {
          u !== "cimode" && s.indexOf(u) < 0 && s.push(u);
        });
      };
      r ? i(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => i(l)), this.options.preload?.forEach?.((o) => i(o)), this.services.backendConnector.load(s, this.options.ns, (o) => {
        !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(o);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const r = se();
    return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = ce), this.services.backendConnector.reload(e, t, (s) => {
      r.resolve(), n(s);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Ze.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const n = this.languages[t];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var n = this;
    this.isLanguageChangingTo = e;
    const r = se();
    this.emit("languageChanging", e);
    const s = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, i = (l, u) => {
      u ? (s(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, r.resolve(function() {
        return n.t(...arguments);
      }), t && t(l, function() {
        return n.t(...arguments);
      });
    }, o = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const u = $(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || s(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector?.cacheUserLanguage?.(u)), this.loadResources(u, (c) => {
        i(c, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), r;
  }
  getFixedT(e, t, n) {
    var r = this;
    const s = function(i, o) {
      let l;
      if (typeof o != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), g = 2; g < u; g++)
          c[g - 2] = arguments[g];
        l = r.options.overloadTranslationOptionHandler([i, o].concat(c));
      } else
        l = {
          ...o
        };
      l.lng = l.lng || s.lng, l.lngs = l.lngs || s.lngs, l.ns = l.ns || s.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || n || s.keyPrefix);
      const f = r.options.keySeparator || ".";
      let S;
      return l.keyPrefix && Array.isArray(i) ? S = i.map((k) => `${l.keyPrefix}${f}${k}`) : S = l.keyPrefix ? `${l.keyPrefix}${f}${i}` : i, r.t(S, l);
    };
    return $(e) ? s.lng = e : s.lngs = e, s.ns = t, s.keyPrefix = n, s;
  }
  t() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.translator?.translate(...t);
  }
  exists() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.translator?.exists(...t);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = t.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const i = (o, l) => {
      const u = this.services.backendConnector.state[`${o}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, i);
      if (o !== void 0) return o;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(n, e) && (!r || i(s, e)));
  }
  loadNamespaces(e, t) {
    const n = se();
    return this.options.ns ? ($(e) && (e = [e]), e.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      n.resolve(), t && t(r);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = se();
    $(e) && (e = [e]);
    const r = this.options.preload || [], s = e.filter((i) => r.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i));
    return s.length ? (this.options.preload = r.concat(s), this.loadResources((i) => {
      n.resolve(), t && t(i);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services?.languageUtils || new je(Ue());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ae(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
    }, s = new ae(r);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach((o) => {
      s[o] = this[o];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, n) {
      const o = Object.keys(this.store.data).reduce((l, u) => (l[u] = {
        ...this.store.data[u]
      }, Object.keys(l[u]).reduce((c, g) => (c[g] = {
        ...l[u][g]
      }, c), {})), {});
      s.store = new Ae(o, r), s.services.resourceStore = s.store;
    }
    return s.translator = new be(s.services, r), s.translator.on("*", function(o) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      s.emit(o, ...u);
    }), s.init(r, t), s.translator.options = r, s.translator.backendConnector.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, s;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const T = ae.createInstance();
T.createInstance = ae.createInstance;
T.createInstance;
T.dir;
T.init;
T.loadResources;
T.reloadResources;
T.use;
T.changeLanguage;
T.getFixedT;
T.t;
T.exists;
T.setDefaultNamespace;
T.hasLoadedNamespace;
T.loadNamespaces;
T.loadLanguages;
const Et = {
  common: {
    fri: "Fri",
    mon: "Mon",
    sat: "Sat",
    sun: "Sun",
    thu: "Thu",
    tue: "Tue",
    wed: "Wed"
  },
  confirm: {
    cancel: "Cancel",
    ignore: "Ignore",
    no: "No",
    ok: "OK",
    retry: "Retry",
    stop: "Abort",
    yes: "Yes"
  },
  datePicker: {
    btnToday: "Today",
    dateFormat: "MM/DD/YYYY",
    disabledTodayTooltip: "Disabled Today Button.",
    titleFormat: "MMMM YYYY"
  },
  editor: {
    all: "All",
    no: "No",
    regex: "(/{Pattern}/ for regex)",
    replace: "Text for searching:",
    replaceYN: "Are you sure to replace?",
    search: "Search:",
    stop: "Stop",
    with: "Text for replacing:",
    yes: "Yes"
  },
  gridOverflowPanel: {
    "double-bottom": "Move to last row",
    "double-left": "Move to first column",
    "double-right": "Move to last column",
    "double-top": "Move to first row",
    down: "Move below frozen row",
    left: "Move left of frozen column",
    right: "Move right of frozen column",
    up: "Move above frozen row"
  },
  loginInfoDialog: {
    AUTH: {
      ACCESSIP: "Last Login IP",
      LASTESTLOGINTIME: "Last Login Date",
      PASSWORD: {
        NOTICE: "Deadline of Password Change"
      },
      SECURITY: {
        NOTICE: "Security Issue"
      }
    },
    "confirm-button": "Confirm",
    title: "Login Information"
  },
  pageContainer: {
    placeholder: "Enter the keywords.",
    results: {
      "no-result": "No result was found."
    }
  },
  rowFilter: {
    check: {
      "check-all": "Check All",
      "uncheck-all": "Uncheck All"
    },
    clear: "Clear",
    date: {
      between: {
        from: "Start Date",
        to: "End Date"
      },
      input: {
        placeholder: "Enter a date."
      },
      select: {
        between: "Between",
        blank: "Blank"
      }
    },
    list: {
      blanks: "Blanks",
      "no-result": "No result was found.",
      "select-all": "Select All"
    },
    number: {
      between: {
        from: "From",
        to: "To"
      },
      input: {
        placeholder: "Enter a number."
      },
      select: {
        between: "Between",
        blank: "Blank"
      }
    },
    ok: "OK",
    op: {
      "ends-with": "Ends with",
      equals: "=",
      greater: ">",
      "greater-eq": ">=",
      less: "<",
      "less-eq": "<=",
      like: "LIKE",
      "not-equals": "<>",
      "not-like": "NOT LIKE",
      "starts-with": "Starts with"
    },
    search: {
      placeholder: "Enter the keywords."
    },
    sort: {
      ascending: "Sort Ascending",
      clear: "Clear Sort",
      descending: "Sort Descending"
    },
    string: {
      input: {
        placeholder: "Enter the keywords."
      }
    }
  },
  timePicker: {
    am: "AM",
    btnNow: "Current time",
    pm: "PM"
  }
}, It = {
  common: {
    fri: "金",
    mon: "月",
    sat: "土",
    sun: "日",
    thu: "木",
    tue: "火",
    wed: "水"
  },
  confirm: {
    cancel: "取消",
    ignore: "無視",
    no: "いいえ",
    ok: "確認",
    retry: "再開",
    stop: "中止",
    yes: "はい"
  },
  datePicker: {
    btnToday: "今日",
    dateFormat: "YYYY-MM-DD",
    disabledTodayTooltip: "本日日付は無効です。",
    titleFormat: "YYYY年MM月"
  },
  editor: {
    all: "すべて",
    no: "いいえ",
    regex: "（正規表現を使用する場合は /{パターン}/ のように記述します）",
    replace: "検索文字列：",
    replaceYN: "変更しますか？",
    search: "検索語句：",
    stop: "取消",
    with: "変更する文字列：",
    yes: "はい"
  },
  gridOverflowPanel: {
    "double-bottom": "最後の行へ移動",
    "double-left": "最初の列へ移動",
    "double-right": "最後の列へ移動",
    "double-top": "最初の行へ移動",
    down: "固定行の下へ移動",
    left: "固定列を左に移動",
    right: "固定列を右に移動",
    up: "固定行へ移動"
  },
  loginInfoDialog: {
    AUTH: {
      ACCESSIP: "最終ログインIP",
      LASTESTLOGINTIME: "最終ログイン日時",
      PASSWORD: {
        NOTICE: "パスワード変更期限"
      },
      SECURITY: {
        NOTICE: "セキュリティ情報"
      }
    },
    "confirm-button": "確認",
    title: "ログイン情報"
  },
  pageContainer: {
    placeholder: "検索キーワードを入力してください。",
    results: {
      "no-result": "検索結果がありません。"
    }
  },
  rowFilter: {
    check: {
      "check-all": "全チェック",
      "uncheck-all": "すべて選択解除"
    },
    clear: "初期化",
    date: {
      between: {
        from: "開始日",
        to: "終了日"
      },
      input: {
        placeholder: "Enter a date"
      },
      select: {
        between: "Between",
        blank: "Blank"
      }
    },
    list: {
      blanks: "空白",
      "no-result": "検索結果がありません。",
      "select-all": "全選択"
    },
    number: {
      between: {
        from: "From",
        to: "To"
      },
      input: {
        placeholder: "Enter a number"
      },
      select: {
        between: "Between",
        blank: "Blank"
      }
    },
    ok: "確認",
    search: {
      placeholder: "検索キーワードを入力してください。"
    },
    sort: {
      ascending: "昇順整列",
      clear: "整列初期化",
      descending: "降順整列"
    },
    string: {
      input: {
        placeholder: "検索キーワードを入力してください。"
      }
    }
  },
  timePicker: {
    am: "午前",
    btnNow: "現在時刻",
    pm: "午後"
  }
}, At = {
  common: {
    fri: "금",
    mon: "월",
    sat: "토",
    sun: "일",
    thu: "목",
    tue: "화",
    wed: "수"
  },
  confirm: {
    cancel: "취소",
    ignore: "무시",
    no: "아니오",
    ok: "확인",
    retry: "재시도",
    stop: "중단",
    yes: "예"
  },
  datePicker: {
    btnToday: "오늘 선택",
    dateFormat: "YYYY-MM-DD",
    disabledTodayTooltip: "오늘 날짜가 비활성화되어 있습니다.",
    titleFormat: "YYYY년 M월"
  },
  editor: {
    all: "모두",
    no: "아니오",
    regex: "(/{패턴}/으로 정규식 사용)",
    replace: "찾을 문자열:",
    replaceYN: "변경하시겠습니까?",
    search: "검색어:",
    stop: "취소",
    with: "변경될 문자열:",
    yes: "예"
  },
  gridOverflowPanel: {
    "double-bottom": "마지막 행으로 이동",
    "double-left": "첫 열로 이동",
    "double-right": "마지막 열로 이동",
    "double-top": "첫 행으로 이동",
    down: "고정 행 아래로 이동",
    left: "고정 열 좌측으로 이동",
    right: "고정 열 우측으로 이동",
    up: "고정 행 위로 이동"
  },
  loginInfoDialog: {
    AUTH: {
      ACCESSIP: "최종 로그인 IP",
      LASTESTLOGINTIME: "최종 로그인 일시",
      PASSWORD: {
        NOTICE: "비밀번호 변경 기한"
      },
      SECURITY: {
        NOTICE: "보안 사항"
      }
    },
    "confirm-button": "확인",
    title: "로그인 정보"
  },
  pageContainer: {
    placeholder: "검색어를 입력해주세요",
    results: {
      "no-result": "검색 결과가 없습니다."
    }
  },
  rowFilter: {
    check: {
      "check-all": "전체 체크",
      "uncheck-all": "전체 체크 해제"
    },
    clear: "초기화",
    date: {
      between: {
        from: "시작 날짜",
        to: "종료 날짜"
      },
      input: {
        placeholder: "날짜 입력"
      },
      select: {
        between: "범위",
        blank: "빈 값"
      }
    },
    list: {
      blanks: "셀 값 없음",
      "no-result": "검색 결과 없음",
      "select-all": "전체 선택"
    },
    number: {
      between: {
        from: "최소값",
        to: "최대값"
      },
      input: {
        placeholder: "숫자 입력"
      },
      select: {
        between: "범위",
        blank: "빈 값"
      }
    },
    ok: "확인",
    op: {
      "ends-with": "Ends with",
      equals: "=",
      greater: ">",
      "greater-eq": ">=",
      less: "<",
      "less-eq": "<=",
      like: "LIKE",
      "not-equals": "<>",
      "not-like": "NOT LIKE",
      "starts-with": "Starts with"
    },
    search: {
      placeholder: "검색어 입력"
    },
    sort: {
      ascending: "오름차순 정렬",
      clear: "정렬 제거",
      descending: "내림차순 정렬"
    },
    string: {
      input: {
        placeholder: "검색어 입력"
      }
    }
  },
  timePicker: {
    am: "오전",
    btnNow: "현재 시간",
    pm: "오후"
  }
}, Ft = {
  common: {
    fri: "五",
    mon: "一",
    sat: "六",
    sun: "日",
    thu: "四",
    tue: "二",
    wed: "三"
  },
  confirm: {
    cancel: "取消",
    ignore: "忽略",
    no: "否",
    ok: "确认",
    retry: "重试",
    stop: "中断",
    yes: "是"
  },
  datePicker: {
    btnToday: "今天",
    dateFormat: "YYYY-MM-DD",
    disabledTodayTooltip: "今天的日期已被禁用。",
    titleFormat: "YYYY年MM月"
  },
  editor: {
    all: "全部",
    no: "否",
    regex: "（使用正则表达式 /{模式}/）",
    replace: "查找字符串：",
    replaceYN: "您要更改吗？",
    search: "搜索词：",
    stop: " 取消",
    with: "待修改的字符串：",
    yes: "是"
  },
  gridOverflowPanel: {
    "double-bottom": "移动到最后一行",
    "double-left": "移动到第一列",
    "double-right": "移动到最后一列",
    "double-top": "移动到第一行",
    down: "移动到固定行下方",
    left: "向固定列左侧移动",
    right: "向固定列的右侧移动",
    up: "移动到固定行"
  },
  loginInfoDialog: {
    AUTH: {
      ACCESSIP: "最终登录IP",
      LASTESTLOGINTIME: "最终登录时间",
      PASSWORD: {
        NOTICE: "密码变更期限"
      },
      SECURITY: {
        NOTICE: "保安事项"
      }
    },
    "confirm-button": "Confirm",
    title: "登录信息"
  },
  pageContainer: {
    placeholder: "请输入关键词。",
    results: {
      "no-result": "无查询结果。"
    }
  },
  rowFilter: {
    check: {
      "check-all": "全部选中",
      "uncheck-all": "取消全部勾选"
    },
    clear: "初始化",
    date: {
      between: {
        from: "开始日期",
        to: "结束日期"
      },
      input: {
        placeholder: "Enter a date"
      },
      select: {
        between: "Between",
        blank: "Blank"
      }
    },
    list: {
      blanks: "空白",
      "no-result": "无查询结果。",
      "select-all": "全部选择"
    },
    number: {
      between: {
        from: "From",
        to: "To"
      },
      input: {
        placeholder: "Enter a number"
      },
      select: {
        between: "Between",
        blank: "Blank"
      }
    },
    ok: "确认",
    search: {
      placeholder: "请输入关键词。"
    },
    sort: {
      ascending: "Sort Ascending",
      clear: "排列初始化",
      descending: "Sort Descending"
    },
    string: {
      input: {
        placeholder: "请输入关键词。"
      }
    }
  },
  timePicker: {
    am: "早上",
    btnNow: "当前时间",
    pm: "下午"
  }
}, Yt = {
  common: {
    fri: "Vie",
    mon: "Lun",
    sat: "Sáb",
    sun: "Dom",
    thu: "Jue",
    tue: "Mar",
    wed: "Mié"
  },
  confirm: {
    cancel: "Cancelar",
    ignore: "Ignorar",
    no: "No",
    ok: "Confirmar",
    retry: "Volver a intentarlo",
    stop: "Abortar",
    yes: "Sí"
  },
  datePicker: {
    btnToday: "Selección de hoy",
    disabledTodayTooltip: "La fecha de hoy está desactivada.",
    titleFormat: "Año YYYY, mes M"
  },
  editor: {
    all: "Todos",
    no: "No",
    regex: "(Uso de expresiones regulares con /patrón/)",
    replace: "Cadena de búsqueda:",
    replaceYN: "¿Desea realizar algún cambio?",
    search: "Palabras clave:",
    stop: "Cancelar",
    with: "Cadena de caracteres a modificar:",
    yes: "Sí"
  },
  gridOverflowPanel: {
    "double-bottom": "Ir a la última fila.",
    "double-left": "Ir a la primera columna.",
    "double-right": "Ir a la última columna.",
    "double-top": "Ir a la primera fila",
    down: "Moverse hacia abajo de la fila fija.",
    left: "Mover columna fija a la izquierda.",
    right: "Mover columna fija a la derecha.",
    up: "Ir a la fila fija superior"
  },
  loginInfoDialog: {
    AUTH: {
      ACCESSIP: "Dirección IP del último inicio de sesión",
      LASTESTLOGINTIME: "Última fecha de inicio de sesión",
      PASSWORD: {
        NOTICE: "Fecha límite de cambio de contraseña"
      },
      SECURITY: {
        NOTICE: "Problema de seguridad"
      }
    },
    title: "Información de inicio de sesión"
  },
  pageContainer: {
    placeholder: "Por favor, introduzca una palabra clave.",
    results: {
      "no-result": "No hay resultados de búsqueda."
    }
  },
  rowFilter: {
    check: {
      "check-all": "Seleccionar todo",
      "uncheck-all": "Desmarcar todo"
    },
    clear: "Inicializar",
    date: {
      between: {
        from: "Fecha de inicio",
        to: "Fecha de finalización"
      }
    },
    list: {
      blanks: "Sin valor en la celda.",
      "no-result": "No se encontraron resultados.",
      "select-all": "Seleccionar todo"
    },
    ok: "Confirmar",
    search: {
      placeholder: "Introduzca el término de búsqueda."
    },
    sort: {
      clear: "Eliminar la alineación"
    },
    string: {
      input: {
        placeholder: "Introduzca el término de búsqueda."
      }
    }
  },
  timePicker: {
    am: "Mañana",
    btnNow: "Hora actual",
    pm: "Tarde"
  }
}, ze = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], We = ["일", "월", "화", "수", "목", "금", "토"], jt = "ko", Bt = "en", _ = "translation";
re.locale("ko", {
  months: ze,
  monthsShort: ze,
  weekdays: We,
  weekdaysShort: We
});
T.isInitialized ? Ge() : Vt();
const Kt = {
  get currentLang() {
    return T.language;
  },
  t: T.t.bind(T),
  i18next: T,
  setLocale: qe,
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  setDefaultMomentLocale(a) {
    qe(a);
  },
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  common: ne("common"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  datePicker: ne("datePicker"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  timePicker: ne("timePicker"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  confirm: ne("confirm"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  editor: ne("editor"),
  /**
   * @deprecated 이 속성은 ir-style v3에서 제거 예정 (v2 호환을 위해 남겨둠)
   */
  pageContainer: ne("pageContainer")
};
function ne(a) {
  return new Proxy({}, {
    get(e, t) {
      return T.t(`${a}.${t}`);
    },
    set(e, t, n) {
      return T.addResource(Kt.currentLang, _, `${a}.${t}`, n), !0;
    }
  });
}
function qe(a) {
  re.locale(a), T.changeLanguage(a);
}
T.on("languageChanged", (a) => {
  document.documentElement.lang = a;
});
function Vt() {
  T.init({
    lng: jt,
    fallbackLng: Bt,
    initAsync: !1,
    defaultNS: _
  }), Ge();
}
function Ge() {
  T.addResourceBundle("ko", _, At).addResourceBundle("en", _, Et).addResourceBundle("ja", _, It).addResourceBundle("zh", _, Ft).addResourceBundle("es", _, Yt);
}
export {
  re as d,
  Kt as i
};
//# sourceMappingURL=index-Bmt0z1bM.js.map
