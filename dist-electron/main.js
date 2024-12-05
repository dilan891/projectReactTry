import ko, { app as pt, BrowserWindow as xo, dialog as la } from "electron";
import { fileURLToPath as Ol } from "node:url";
import Tl from "node:fs";
import be from "node:path";
import Qe from "fs";
import We from "path";
import $n from "assert";
import Ro from "events";
import In from "util";
import Al from "https";
import Oo from "stream";
import $l from "buffer";
import Il from "child_process";
import { spawn as ua } from "node:child_process";
var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fe = {}, pn = { exports: {} };
const Nl = "2.0.0", To = 256, Ll = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Dl = 16, Pl = To - 6, jl = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Qr = {
  MAX_LENGTH: To,
  MAX_SAFE_COMPONENT_LENGTH: Dl,
  MAX_SAFE_BUILD_LENGTH: Pl,
  MAX_SAFE_INTEGER: Ll,
  RELEASE_TYPES: jl,
  SEMVER_SPEC_VERSION: Nl,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const Fl = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var ei = Fl;
(function(e, r) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: t,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: n
  } = Qr, a = ei;
  r = e.exports = {};
  const s = r.re = [], f = r.safeRe = [], h = r.src = [], o = r.t = {};
  let d = 0;
  const g = "[a-zA-Z0-9-]", u = [
    ["\\s", 1],
    ["\\d", n],
    [g, i]
  ], c = (v) => {
    for (const [x, l] of u)
      v = v.split(`${x}*`).join(`${x}{0,${l}}`).split(`${x}+`).join(`${x}{1,${l}}`);
    return v;
  }, p = (v, x, l) => {
    const _ = c(x), R = d++;
    a(v, R, x), o[v] = R, h[R] = x, s[R] = new RegExp(x, l ? "g" : void 0), f[R] = new RegExp(_, l ? "g" : void 0);
  };
  p("NUMERICIDENTIFIER", "0|[1-9]\\d*"), p("NUMERICIDENTIFIERLOOSE", "\\d+"), p("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), p("MAINVERSION", `(${h[o.NUMERICIDENTIFIER]})\\.(${h[o.NUMERICIDENTIFIER]})\\.(${h[o.NUMERICIDENTIFIER]})`), p("MAINVERSIONLOOSE", `(${h[o.NUMERICIDENTIFIERLOOSE]})\\.(${h[o.NUMERICIDENTIFIERLOOSE]})\\.(${h[o.NUMERICIDENTIFIERLOOSE]})`), p("PRERELEASEIDENTIFIER", `(?:${h[o.NUMERICIDENTIFIER]}|${h[o.NONNUMERICIDENTIFIER]})`), p("PRERELEASEIDENTIFIERLOOSE", `(?:${h[o.NUMERICIDENTIFIERLOOSE]}|${h[o.NONNUMERICIDENTIFIER]})`), p("PRERELEASE", `(?:-(${h[o.PRERELEASEIDENTIFIER]}(?:\\.${h[o.PRERELEASEIDENTIFIER]})*))`), p("PRERELEASELOOSE", `(?:-?(${h[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${h[o.PRERELEASEIDENTIFIERLOOSE]})*))`), p("BUILDIDENTIFIER", `${g}+`), p("BUILD", `(?:\\+(${h[o.BUILDIDENTIFIER]}(?:\\.${h[o.BUILDIDENTIFIER]})*))`), p("FULLPLAIN", `v?${h[o.MAINVERSION]}${h[o.PRERELEASE]}?${h[o.BUILD]}?`), p("FULL", `^${h[o.FULLPLAIN]}$`), p("LOOSEPLAIN", `[v=\\s]*${h[o.MAINVERSIONLOOSE]}${h[o.PRERELEASELOOSE]}?${h[o.BUILD]}?`), p("LOOSE", `^${h[o.LOOSEPLAIN]}$`), p("GTLT", "((?:<|>)?=?)"), p("XRANGEIDENTIFIERLOOSE", `${h[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), p("XRANGEIDENTIFIER", `${h[o.NUMERICIDENTIFIER]}|x|X|\\*`), p("XRANGEPLAIN", `[v=\\s]*(${h[o.XRANGEIDENTIFIER]})(?:\\.(${h[o.XRANGEIDENTIFIER]})(?:\\.(${h[o.XRANGEIDENTIFIER]})(?:${h[o.PRERELEASE]})?${h[o.BUILD]}?)?)?`), p("XRANGEPLAINLOOSE", `[v=\\s]*(${h[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${h[o.XRANGEIDENTIFIERLOOSE]})(?:${h[o.PRERELEASELOOSE]})?${h[o.BUILD]}?)?)?`), p("XRANGE", `^${h[o.GTLT]}\\s*${h[o.XRANGEPLAIN]}$`), p("XRANGELOOSE", `^${h[o.GTLT]}\\s*${h[o.XRANGEPLAINLOOSE]}$`), p("COERCEPLAIN", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?`), p("COERCE", `${h[o.COERCEPLAIN]}(?:$|[^\\d])`), p("COERCEFULL", h[o.COERCEPLAIN] + `(?:${h[o.PRERELEASE]})?(?:${h[o.BUILD]})?(?:$|[^\\d])`), p("COERCERTL", h[o.COERCE], !0), p("COERCERTLFULL", h[o.COERCEFULL], !0), p("LONETILDE", "(?:~>?)"), p("TILDETRIM", `(\\s*)${h[o.LONETILDE]}\\s+`, !0), r.tildeTrimReplace = "$1~", p("TILDE", `^${h[o.LONETILDE]}${h[o.XRANGEPLAIN]}$`), p("TILDELOOSE", `^${h[o.LONETILDE]}${h[o.XRANGEPLAINLOOSE]}$`), p("LONECARET", "(?:\\^)"), p("CARETTRIM", `(\\s*)${h[o.LONECARET]}\\s+`, !0), r.caretTrimReplace = "$1^", p("CARET", `^${h[o.LONECARET]}${h[o.XRANGEPLAIN]}$`), p("CARETLOOSE", `^${h[o.LONECARET]}${h[o.XRANGEPLAINLOOSE]}$`), p("COMPARATORLOOSE", `^${h[o.GTLT]}\\s*(${h[o.LOOSEPLAIN]})$|^$`), p("COMPARATOR", `^${h[o.GTLT]}\\s*(${h[o.FULLPLAIN]})$|^$`), p("COMPARATORTRIM", `(\\s*)${h[o.GTLT]}\\s*(${h[o.LOOSEPLAIN]}|${h[o.XRANGEPLAIN]})`, !0), r.comparatorTrimReplace = "$1$2$3", p("HYPHENRANGE", `^\\s*(${h[o.XRANGEPLAIN]})\\s+-\\s+(${h[o.XRANGEPLAIN]})\\s*$`), p("HYPHENRANGELOOSE", `^\\s*(${h[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${h[o.XRANGEPLAINLOOSE]})\\s*$`), p("STAR", "(<|>)?=?\\s*\\*"), p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(pn, pn.exports);
var cr = pn.exports;
const Bl = Object.freeze({ loose: !0 }), Ml = Object.freeze({}), Ul = (e) => e ? typeof e != "object" ? Bl : e : Ml;
var Cn = Ul;
const ha = /^[0-9]+$/, Ao = (e, r) => {
  const t = ha.test(e), i = ha.test(r);
  return t && i && (e = +e, r = +r), e === r ? 0 : t && !i ? -1 : i && !t ? 1 : e < r ? -1 : 1;
}, zl = (e, r) => Ao(r, e);
var $o = {
  compareIdentifiers: Ao,
  rcompareIdentifiers: zl
};
const wr = ei, { MAX_LENGTH: ca, MAX_SAFE_INTEGER: Er } = Qr, { safeRe: da, t: va } = cr, Wl = Cn, { compareIdentifiers: Rt } = $o;
let Gl = class Be {
  constructor(r, t) {
    if (t = Wl(t), r instanceof Be) {
      if (r.loose === !!t.loose && r.includePrerelease === !!t.includePrerelease)
        return r;
      r = r.version;
    } else if (typeof r != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof r}".`);
    if (r.length > ca)
      throw new TypeError(
        `version is longer than ${ca} characters`
      );
    wr("SemVer", r, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
    const i = r.trim().match(t.loose ? da[va.LOOSE] : da[va.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${r}`);
    if (this.raw = r, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > Er || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Er || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Er || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((n) => {
      if (/^[0-9]+$/.test(n)) {
        const a = +n;
        if (a >= 0 && a < Er)
          return a;
      }
      return n;
    }) : this.prerelease = [], this.build = i[5] ? i[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(r) {
    if (wr("SemVer.compare", this.version, this.options, r), !(r instanceof Be)) {
      if (typeof r == "string" && r === this.version)
        return 0;
      r = new Be(r, this.options);
    }
    return r.version === this.version ? 0 : this.compareMain(r) || this.comparePre(r);
  }
  compareMain(r) {
    return r instanceof Be || (r = new Be(r, this.options)), Rt(this.major, r.major) || Rt(this.minor, r.minor) || Rt(this.patch, r.patch);
  }
  comparePre(r) {
    if (r instanceof Be || (r = new Be(r, this.options)), this.prerelease.length && !r.prerelease.length)
      return -1;
    if (!this.prerelease.length && r.prerelease.length)
      return 1;
    if (!this.prerelease.length && !r.prerelease.length)
      return 0;
    let t = 0;
    do {
      const i = this.prerelease[t], n = r.prerelease[t];
      if (wr("prerelease compare", t, i, n), i === void 0 && n === void 0)
        return 0;
      if (n === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === n)
        continue;
      return Rt(i, n);
    } while (++t);
  }
  compareBuild(r) {
    r instanceof Be || (r = new Be(r, this.options));
    let t = 0;
    do {
      const i = this.build[t], n = r.build[t];
      if (wr("build compare", t, i, n), i === void 0 && n === void 0)
        return 0;
      if (n === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === n)
        continue;
      return Rt(i, n);
    } while (++t);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(r, t, i) {
    switch (r) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, i);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, i);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", t, i), this.inc("pre", t, i);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", t, i), this.inc("pre", t, i);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const n = Number(i) ? 1 : 0;
        if (!t && i === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [n];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (t === this.prerelease.join(".") && i === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(n);
          }
        }
        if (t) {
          let a = [t, n];
          i === !1 && (a = [t]), Rt(this.prerelease[0], t) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${r}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var me = Gl;
const pa = me, Zl = (e, r, t = !1) => {
  if (e instanceof pa)
    return e;
  try {
    return new pa(e, r);
  } catch (i) {
    if (!t)
      return null;
    throw i;
  }
};
var Ft = Zl;
const ql = Ft, Hl = (e, r) => {
  const t = ql(e, r);
  return t ? t.version : null;
};
var Vl = Hl;
const Xl = Ft, Yl = (e, r) => {
  const t = Xl(e.trim().replace(/^[=v]+/, ""), r);
  return t ? t.version : null;
};
var Kl = Yl;
const _a = me, Jl = (e, r, t, i, n) => {
  typeof t == "string" && (n = i, i = t, t = void 0);
  try {
    return new _a(
      e instanceof _a ? e.version : e,
      t
    ).inc(r, i, n).version;
  } catch {
    return null;
  }
};
var Ql = Jl;
const ma = Ft, eu = (e, r) => {
  const t = ma(e, null, !0), i = ma(r, null, !0), n = t.compare(i);
  if (n === 0)
    return null;
  const a = n > 0, s = a ? t : i, f = a ? i : t, h = !!s.prerelease.length;
  if (!!f.prerelease.length && !h)
    return !f.patch && !f.minor ? "major" : s.patch ? "patch" : s.minor ? "minor" : "major";
  const d = h ? "pre" : "";
  return t.major !== i.major ? d + "major" : t.minor !== i.minor ? d + "minor" : t.patch !== i.patch ? d + "patch" : "prerelease";
};
var tu = eu;
const ru = me, iu = (e, r) => new ru(e, r).major;
var nu = iu;
const au = me, su = (e, r) => new au(e, r).minor;
var ou = su;
const fu = me, lu = (e, r) => new fu(e, r).patch;
var uu = lu;
const hu = Ft, cu = (e, r) => {
  const t = hu(e, r);
  return t && t.prerelease.length ? t.prerelease : null;
};
var du = cu;
const ga = me, vu = (e, r, t) => new ga(e, t).compare(new ga(r, t));
var Ce = vu;
const pu = Ce, _u = (e, r, t) => pu(r, e, t);
var mu = _u;
const gu = Ce, yu = (e, r) => gu(e, r, !0);
var wu = yu;
const ya = me, Eu = (e, r, t) => {
  const i = new ya(e, t), n = new ya(r, t);
  return i.compare(n) || i.compareBuild(n);
};
var Nn = Eu;
const bu = Nn, Su = (e, r) => e.sort((t, i) => bu(t, i, r));
var ku = Su;
const xu = Nn, Ru = (e, r) => e.sort((t, i) => xu(i, t, r));
var Ou = Ru;
const Tu = Ce, Au = (e, r, t) => Tu(e, r, t) > 0;
var ti = Au;
const $u = Ce, Iu = (e, r, t) => $u(e, r, t) < 0;
var Ln = Iu;
const Cu = Ce, Nu = (e, r, t) => Cu(e, r, t) === 0;
var Io = Nu;
const Lu = Ce, Du = (e, r, t) => Lu(e, r, t) !== 0;
var Co = Du;
const Pu = Ce, ju = (e, r, t) => Pu(e, r, t) >= 0;
var Dn = ju;
const Fu = Ce, Bu = (e, r, t) => Fu(e, r, t) <= 0;
var Pn = Bu;
const Mu = Io, Uu = Co, zu = ti, Wu = Dn, Gu = Ln, Zu = Pn, qu = (e, r, t, i) => {
  switch (r) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof t == "object" && (t = t.version), e === t;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof t == "object" && (t = t.version), e !== t;
    case "":
    case "=":
    case "==":
      return Mu(e, t, i);
    case "!=":
      return Uu(e, t, i);
    case ">":
      return zu(e, t, i);
    case ">=":
      return Wu(e, t, i);
    case "<":
      return Gu(e, t, i);
    case "<=":
      return Zu(e, t, i);
    default:
      throw new TypeError(`Invalid operator: ${r}`);
  }
};
var No = qu;
const Hu = me, Vu = Ft, { safeRe: br, t: Sr } = cr, Xu = (e, r) => {
  if (e instanceof Hu)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  r = r || {};
  let t = null;
  if (!r.rtl)
    t = e.match(r.includePrerelease ? br[Sr.COERCEFULL] : br[Sr.COERCE]);
  else {
    const h = r.includePrerelease ? br[Sr.COERCERTLFULL] : br[Sr.COERCERTL];
    let o;
    for (; (o = h.exec(e)) && (!t || t.index + t[0].length !== e.length); )
      (!t || o.index + o[0].length !== t.index + t[0].length) && (t = o), h.lastIndex = o.index + o[1].length + o[2].length;
    h.lastIndex = -1;
  }
  if (t === null)
    return null;
  const i = t[2], n = t[3] || "0", a = t[4] || "0", s = r.includePrerelease && t[5] ? `-${t[5]}` : "", f = r.includePrerelease && t[6] ? `+${t[6]}` : "";
  return Vu(`${i}.${n}.${a}${s}${f}`, r);
};
var Yu = Xu;
class Ku {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(r) {
    const t = this.map.get(r);
    if (t !== void 0)
      return this.map.delete(r), this.map.set(r, t), t;
  }
  delete(r) {
    return this.map.delete(r);
  }
  set(r, t) {
    if (!this.delete(r) && t !== void 0) {
      if (this.map.size >= this.max) {
        const n = this.map.keys().next().value;
        this.delete(n);
      }
      this.map.set(r, t);
    }
    return this;
  }
}
var Ju = Ku, _i, wa;
function Ne() {
  if (wa) return _i;
  wa = 1;
  const e = /\s+/g;
  class r {
    constructor(P, W) {
      if (W = n(W), P instanceof r)
        return P.loose === !!W.loose && P.includePrerelease === !!W.includePrerelease ? P : new r(P.raw, W);
      if (P instanceof a)
        return this.raw = P.value, this.set = [[P]], this.formatted = void 0, this;
      if (this.options = W, this.loose = !!W.loose, this.includePrerelease = !!W.includePrerelease, this.raw = P.trim().replace(e, " "), this.set = this.raw.split("||").map((w) => this.parseRange(w.trim())).filter((w) => w.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const w = this.set[0];
        if (this.set = this.set.filter((S) => !v(S[0])), this.set.length === 0)
          this.set = [w];
        else if (this.set.length > 1) {
          for (const S of this.set)
            if (S.length === 1 && x(S[0])) {
              this.set = [S];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let P = 0; P < this.set.length; P++) {
          P > 0 && (this.formatted += "||");
          const W = this.set[P];
          for (let w = 0; w < W.length; w++)
            w > 0 && (this.formatted += " "), this.formatted += W[w].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(P) {
      const w = ((this.options.includePrerelease && c) | (this.options.loose && p)) + ":" + P, S = i.get(w);
      if (S)
        return S;
      const C = this.options.loose, j = C ? h[o.HYPHENRANGELOOSE] : h[o.HYPHENRANGE];
      P = P.replace(j, L(this.options.includePrerelease)), s("hyphen replace", P), P = P.replace(h[o.COMPARATORTRIM], d), s("comparator trim", P), P = P.replace(h[o.TILDETRIM], g), s("tilde trim", P), P = P.replace(h[o.CARETTRIM], u), s("caret trim", P);
      let U = P.split(" ").map((J) => _(J, this.options)).join(" ").split(/\s+/).map((J) => O(J, this.options));
      C && (U = U.filter((J) => (s("loose invalid filter", J, this.options), !!J.match(h[o.COMPARATORLOOSE])))), s("range list", U);
      const G = /* @__PURE__ */ new Map(), H = U.map((J) => new a(J, this.options));
      for (const J of H) {
        if (v(J))
          return [J];
        G.set(J.value, J);
      }
      G.size > 1 && G.has("") && G.delete("");
      const X = [...G.values()];
      return i.set(w, X), X;
    }
    intersects(P, W) {
      if (!(P instanceof r))
        throw new TypeError("a Range is required");
      return this.set.some((w) => l(w, W) && P.set.some((S) => l(S, W) && w.every((C) => S.every((j) => C.intersects(j, W)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(P) {
      if (!P)
        return !1;
      if (typeof P == "string")
        try {
          P = new f(P, this.options);
        } catch {
          return !1;
        }
      for (let W = 0; W < this.set.length; W++)
        if (B(this.set[W], P, this.options))
          return !0;
      return !1;
    }
  }
  _i = r;
  const t = Ju, i = new t(), n = Cn, a = ri(), s = ei, f = me, {
    safeRe: h,
    t: o,
    comparatorTrimReplace: d,
    tildeTrimReplace: g,
    caretTrimReplace: u
  } = cr, { FLAG_INCLUDE_PRERELEASE: c, FLAG_LOOSE: p } = Qr, v = (N) => N.value === "<0.0.0-0", x = (N) => N.value === "", l = (N, P) => {
    let W = !0;
    const w = N.slice();
    let S = w.pop();
    for (; W && w.length; )
      W = w.every((C) => S.intersects(C, P)), S = w.pop();
    return W;
  }, _ = (N, P) => (s("comp", N, P), N = $(N, P), s("caret", N), N = m(N, P), s("tildes", N), N = T(N, P), s("xrange", N), N = I(N, P), s("stars", N), N), R = (N) => !N || N.toLowerCase() === "x" || N === "*", m = (N, P) => N.trim().split(/\s+/).map((W) => E(W, P)).join(" "), E = (N, P) => {
    const W = P.loose ? h[o.TILDELOOSE] : h[o.TILDE];
    return N.replace(W, (w, S, C, j, U) => {
      s("tilde", N, w, S, C, j, U);
      let G;
      return R(S) ? G = "" : R(C) ? G = `>=${S}.0.0 <${+S + 1}.0.0-0` : R(j) ? G = `>=${S}.${C}.0 <${S}.${+C + 1}.0-0` : U ? (s("replaceTilde pr", U), G = `>=${S}.${C}.${j}-${U} <${S}.${+C + 1}.0-0`) : G = `>=${S}.${C}.${j} <${S}.${+C + 1}.0-0`, s("tilde return", G), G;
    });
  }, $ = (N, P) => N.trim().split(/\s+/).map((W) => A(W, P)).join(" "), A = (N, P) => {
    s("caret", N, P);
    const W = P.loose ? h[o.CARETLOOSE] : h[o.CARET], w = P.includePrerelease ? "-0" : "";
    return N.replace(W, (S, C, j, U, G) => {
      s("caret", N, S, C, j, U, G);
      let H;
      return R(C) ? H = "" : R(j) ? H = `>=${C}.0.0${w} <${+C + 1}.0.0-0` : R(U) ? C === "0" ? H = `>=${C}.${j}.0${w} <${C}.${+j + 1}.0-0` : H = `>=${C}.${j}.0${w} <${+C + 1}.0.0-0` : G ? (s("replaceCaret pr", G), C === "0" ? j === "0" ? H = `>=${C}.${j}.${U}-${G} <${C}.${j}.${+U + 1}-0` : H = `>=${C}.${j}.${U}-${G} <${C}.${+j + 1}.0-0` : H = `>=${C}.${j}.${U}-${G} <${+C + 1}.0.0-0`) : (s("no pr"), C === "0" ? j === "0" ? H = `>=${C}.${j}.${U}${w} <${C}.${j}.${+U + 1}-0` : H = `>=${C}.${j}.${U}${w} <${C}.${+j + 1}.0-0` : H = `>=${C}.${j}.${U} <${+C + 1}.0.0-0`), s("caret return", H), H;
    });
  }, T = (N, P) => (s("replaceXRanges", N, P), N.split(/\s+/).map((W) => b(W, P)).join(" ")), b = (N, P) => {
    N = N.trim();
    const W = P.loose ? h[o.XRANGELOOSE] : h[o.XRANGE];
    return N.replace(W, (w, S, C, j, U, G) => {
      s("xRange", N, w, S, C, j, U, G);
      const H = R(C), X = H || R(j), J = X || R(U), Y = J;
      return S === "=" && Y && (S = ""), G = P.includePrerelease ? "-0" : "", H ? S === ">" || S === "<" ? w = "<0.0.0-0" : w = "*" : S && Y ? (X && (j = 0), U = 0, S === ">" ? (S = ">=", X ? (C = +C + 1, j = 0, U = 0) : (j = +j + 1, U = 0)) : S === "<=" && (S = "<", X ? C = +C + 1 : j = +j + 1), S === "<" && (G = "-0"), w = `${S + C}.${j}.${U}${G}`) : X ? w = `>=${C}.0.0${G} <${+C + 1}.0.0-0` : J && (w = `>=${C}.${j}.0${G} <${C}.${+j + 1}.0-0`), s("xRange return", w), w;
    });
  }, I = (N, P) => (s("replaceStars", N, P), N.trim().replace(h[o.STAR], "")), O = (N, P) => (s("replaceGTE0", N, P), N.trim().replace(h[P.includePrerelease ? o.GTE0PRE : o.GTE0], "")), L = (N) => (P, W, w, S, C, j, U, G, H, X, J, Y) => (R(w) ? W = "" : R(S) ? W = `>=${w}.0.0${N ? "-0" : ""}` : R(C) ? W = `>=${w}.${S}.0${N ? "-0" : ""}` : j ? W = `>=${W}` : W = `>=${W}${N ? "-0" : ""}`, R(H) ? G = "" : R(X) ? G = `<${+H + 1}.0.0-0` : R(J) ? G = `<${H}.${+X + 1}.0-0` : Y ? G = `<=${H}.${X}.${J}-${Y}` : N ? G = `<${H}.${X}.${+J + 1}-0` : G = `<=${G}`, `${W} ${G}`.trim()), B = (N, P, W) => {
    for (let w = 0; w < N.length; w++)
      if (!N[w].test(P))
        return !1;
    if (P.prerelease.length && !W.includePrerelease) {
      for (let w = 0; w < N.length; w++)
        if (s(N[w].semver), N[w].semver !== a.ANY && N[w].semver.prerelease.length > 0) {
          const S = N[w].semver;
          if (S.major === P.major && S.minor === P.minor && S.patch === P.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return _i;
}
var mi, Ea;
function ri() {
  if (Ea) return mi;
  Ea = 1;
  const e = Symbol("SemVer ANY");
  class r {
    static get ANY() {
      return e;
    }
    constructor(d, g) {
      if (g = t(g), d instanceof r) {
        if (d.loose === !!g.loose)
          return d;
        d = d.value;
      }
      d = d.trim().split(/\s+/).join(" "), s("comparator", d, g), this.options = g, this.loose = !!g.loose, this.parse(d), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this);
    }
    parse(d) {
      const g = this.options.loose ? i[n.COMPARATORLOOSE] : i[n.COMPARATOR], u = d.match(g);
      if (!u)
        throw new TypeError(`Invalid comparator: ${d}`);
      this.operator = u[1] !== void 0 ? u[1] : "", this.operator === "=" && (this.operator = ""), u[2] ? this.semver = new f(u[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(d) {
      if (s("Comparator.test", d, this.options.loose), this.semver === e || d === e)
        return !0;
      if (typeof d == "string")
        try {
          d = new f(d, this.options);
        } catch {
          return !1;
        }
      return a(d, this.operator, this.semver, this.options);
    }
    intersects(d, g) {
      if (!(d instanceof r))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new h(d.value, g).test(this.value) : d.operator === "" ? d.value === "" ? !0 : new h(this.value, g).test(d.semver) : (g = t(g), g.includePrerelease && (this.value === "<0.0.0-0" || d.value === "<0.0.0-0") || !g.includePrerelease && (this.value.startsWith("<0.0.0") || d.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && d.operator.startsWith(">") || this.operator.startsWith("<") && d.operator.startsWith("<") || this.semver.version === d.semver.version && this.operator.includes("=") && d.operator.includes("=") || a(this.semver, "<", d.semver, g) && this.operator.startsWith(">") && d.operator.startsWith("<") || a(this.semver, ">", d.semver, g) && this.operator.startsWith("<") && d.operator.startsWith(">")));
    }
  }
  mi = r;
  const t = Cn, { safeRe: i, t: n } = cr, a = No, s = ei, f = me, h = Ne();
  return mi;
}
const Qu = Ne(), eh = (e, r, t) => {
  try {
    r = new Qu(r, t);
  } catch {
    return !1;
  }
  return r.test(e);
};
var ii = eh;
const th = Ne(), rh = (e, r) => new th(e, r).set.map((t) => t.map((i) => i.value).join(" ").trim().split(" "));
var ih = rh;
const nh = me, ah = Ne(), sh = (e, r, t) => {
  let i = null, n = null, a = null;
  try {
    a = new ah(r, t);
  } catch {
    return null;
  }
  return e.forEach((s) => {
    a.test(s) && (!i || n.compare(s) === -1) && (i = s, n = new nh(i, t));
  }), i;
};
var oh = sh;
const fh = me, lh = Ne(), uh = (e, r, t) => {
  let i = null, n = null, a = null;
  try {
    a = new lh(r, t);
  } catch {
    return null;
  }
  return e.forEach((s) => {
    a.test(s) && (!i || n.compare(s) === 1) && (i = s, n = new fh(i, t));
  }), i;
};
var hh = uh;
const gi = me, ch = Ne(), ba = ti, dh = (e, r) => {
  e = new ch(e, r);
  let t = new gi("0.0.0");
  if (e.test(t) || (t = new gi("0.0.0-0"), e.test(t)))
    return t;
  t = null;
  for (let i = 0; i < e.set.length; ++i) {
    const n = e.set[i];
    let a = null;
    n.forEach((s) => {
      const f = new gi(s.semver.version);
      switch (s.operator) {
        case ">":
          f.prerelease.length === 0 ? f.patch++ : f.prerelease.push(0), f.raw = f.format();
        case "":
        case ">=":
          (!a || ba(f, a)) && (a = f);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${s.operator}`);
      }
    }), a && (!t || ba(t, a)) && (t = a);
  }
  return t && e.test(t) ? t : null;
};
var vh = dh;
const ph = Ne(), _h = (e, r) => {
  try {
    return new ph(e, r).range || "*";
  } catch {
    return null;
  }
};
var mh = _h;
const gh = me, Lo = ri(), { ANY: yh } = Lo, wh = Ne(), Eh = ii, Sa = ti, ka = Ln, bh = Pn, Sh = Dn, kh = (e, r, t, i) => {
  e = new gh(e, i), r = new wh(r, i);
  let n, a, s, f, h;
  switch (t) {
    case ">":
      n = Sa, a = bh, s = ka, f = ">", h = ">=";
      break;
    case "<":
      n = ka, a = Sh, s = Sa, f = "<", h = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (Eh(e, r, i))
    return !1;
  for (let o = 0; o < r.set.length; ++o) {
    const d = r.set[o];
    let g = null, u = null;
    if (d.forEach((c) => {
      c.semver === yh && (c = new Lo(">=0.0.0")), g = g || c, u = u || c, n(c.semver, g.semver, i) ? g = c : s(c.semver, u.semver, i) && (u = c);
    }), g.operator === f || g.operator === h || (!u.operator || u.operator === f) && a(e, u.semver))
      return !1;
    if (u.operator === h && s(e, u.semver))
      return !1;
  }
  return !0;
};
var jn = kh;
const xh = jn, Rh = (e, r, t) => xh(e, r, ">", t);
var Oh = Rh;
const Th = jn, Ah = (e, r, t) => Th(e, r, "<", t);
var $h = Ah;
const xa = Ne(), Ih = (e, r, t) => (e = new xa(e, t), r = new xa(r, t), e.intersects(r, t));
var Ch = Ih;
const Nh = ii, Lh = Ce;
var Dh = (e, r, t) => {
  const i = [];
  let n = null, a = null;
  const s = e.sort((d, g) => Lh(d, g, t));
  for (const d of s)
    Nh(d, r, t) ? (a = d, n || (n = d)) : (a && i.push([n, a]), a = null, n = null);
  n && i.push([n, null]);
  const f = [];
  for (const [d, g] of i)
    d === g ? f.push(d) : !g && d === s[0] ? f.push("*") : g ? d === s[0] ? f.push(`<=${g}`) : f.push(`${d} - ${g}`) : f.push(`>=${d}`);
  const h = f.join(" || "), o = typeof r.raw == "string" ? r.raw : String(r);
  return h.length < o.length ? h : r;
};
const Ra = Ne(), Fn = ri(), { ANY: yi } = Fn, Vt = ii, Bn = Ce, Ph = (e, r, t = {}) => {
  if (e === r)
    return !0;
  e = new Ra(e, t), r = new Ra(r, t);
  let i = !1;
  e: for (const n of e.set) {
    for (const a of r.set) {
      const s = Fh(n, a, t);
      if (i = i || s !== null, s)
        continue e;
    }
    if (i)
      return !1;
  }
  return !0;
}, jh = [new Fn(">=0.0.0-0")], Oa = [new Fn(">=0.0.0")], Fh = (e, r, t) => {
  if (e === r)
    return !0;
  if (e.length === 1 && e[0].semver === yi) {
    if (r.length === 1 && r[0].semver === yi)
      return !0;
    t.includePrerelease ? e = jh : e = Oa;
  }
  if (r.length === 1 && r[0].semver === yi) {
    if (t.includePrerelease)
      return !0;
    r = Oa;
  }
  const i = /* @__PURE__ */ new Set();
  let n, a;
  for (const c of e)
    c.operator === ">" || c.operator === ">=" ? n = Ta(n, c, t) : c.operator === "<" || c.operator === "<=" ? a = Aa(a, c, t) : i.add(c.semver);
  if (i.size > 1)
    return null;
  let s;
  if (n && a) {
    if (s = Bn(n.semver, a.semver, t), s > 0)
      return null;
    if (s === 0 && (n.operator !== ">=" || a.operator !== "<="))
      return null;
  }
  for (const c of i) {
    if (n && !Vt(c, String(n), t) || a && !Vt(c, String(a), t))
      return null;
    for (const p of r)
      if (!Vt(c, String(p), t))
        return !1;
    return !0;
  }
  let f, h, o, d, g = a && !t.includePrerelease && a.semver.prerelease.length ? a.semver : !1, u = n && !t.includePrerelease && n.semver.prerelease.length ? n.semver : !1;
  g && g.prerelease.length === 1 && a.operator === "<" && g.prerelease[0] === 0 && (g = !1);
  for (const c of r) {
    if (d = d || c.operator === ">" || c.operator === ">=", o = o || c.operator === "<" || c.operator === "<=", n) {
      if (u && c.semver.prerelease && c.semver.prerelease.length && c.semver.major === u.major && c.semver.minor === u.minor && c.semver.patch === u.patch && (u = !1), c.operator === ">" || c.operator === ">=") {
        if (f = Ta(n, c, t), f === c && f !== n)
          return !1;
      } else if (n.operator === ">=" && !Vt(n.semver, String(c), t))
        return !1;
    }
    if (a) {
      if (g && c.semver.prerelease && c.semver.prerelease.length && c.semver.major === g.major && c.semver.minor === g.minor && c.semver.patch === g.patch && (g = !1), c.operator === "<" || c.operator === "<=") {
        if (h = Aa(a, c, t), h === c && h !== a)
          return !1;
      } else if (a.operator === "<=" && !Vt(a.semver, String(c), t))
        return !1;
    }
    if (!c.operator && (a || n) && s !== 0)
      return !1;
  }
  return !(n && o && !a && s !== 0 || a && d && !n && s !== 0 || u || g);
}, Ta = (e, r, t) => {
  if (!e)
    return r;
  const i = Bn(e.semver, r.semver, t);
  return i > 0 ? e : i < 0 || r.operator === ">" && e.operator === ">=" ? r : e;
}, Aa = (e, r, t) => {
  if (!e)
    return r;
  const i = Bn(e.semver, r.semver, t);
  return i < 0 ? e : i > 0 || r.operator === "<" && e.operator === "<=" ? r : e;
};
var Bh = Ph;
const wi = cr, $a = Qr, Mh = me, Ia = $o, Uh = Ft, zh = Vl, Wh = Kl, Gh = Ql, Zh = tu, qh = nu, Hh = ou, Vh = uu, Xh = du, Yh = Ce, Kh = mu, Jh = wu, Qh = Nn, ec = ku, tc = Ou, rc = ti, ic = Ln, nc = Io, ac = Co, sc = Dn, oc = Pn, fc = No, lc = Yu, uc = ri(), hc = Ne(), cc = ii, dc = ih, vc = oh, pc = hh, _c = vh, mc = mh, gc = jn, yc = Oh, wc = $h, Ec = Ch, bc = Dh, Sc = Bh;
var kc = {
  parse: Uh,
  valid: zh,
  clean: Wh,
  inc: Gh,
  diff: Zh,
  major: qh,
  minor: Hh,
  patch: Vh,
  prerelease: Xh,
  compare: Yh,
  rcompare: Kh,
  compareLoose: Jh,
  compareBuild: Qh,
  sort: ec,
  rsort: tc,
  gt: rc,
  lt: ic,
  eq: nc,
  neq: ac,
  gte: sc,
  lte: oc,
  cmp: fc,
  coerce: lc,
  Comparator: uc,
  Range: hc,
  satisfies: cc,
  toComparators: dc,
  maxSatisfying: vc,
  minSatisfying: pc,
  minVersion: _c,
  validRange: mc,
  outside: gc,
  gtr: yc,
  ltr: wc,
  intersects: Ec,
  simplifyRange: bc,
  subset: Sc,
  SemVer: Mh,
  re: wi.re,
  src: wi.src,
  tokens: wi.t,
  SEMVER_SPEC_VERSION: $a.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: $a.RELEASE_TYPES,
  compareIdentifiers: Ia.compareIdentifiers,
  rcompareIdentifiers: Ia.rcompareIdentifiers
}, Mn = {}, kr = {}, Ca;
function xc() {
  if (Ca) return kr;
  Ca = 1;
  var e = We, r = process.platform === "win32", t = Qe, i = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
  function n() {
    var h;
    if (i) {
      var o = new Error();
      h = d;
    } else
      h = g;
    return h;
    function d(u) {
      u && (o.message = u.message, u = o, g(u));
    }
    function g(u) {
      if (u) {
        if (process.throwDeprecation)
          throw u;
        if (!process.noDeprecation) {
          var c = "fs: missing callback " + (u.stack || u.message);
          process.traceDeprecation ? console.trace(c) : console.error(c);
        }
      }
    }
  }
  function a(h) {
    return typeof h == "function" ? h : n();
  }
  if (e.normalize, r)
    var s = /(.*?)(?:[\/\\]+|$)/g;
  else
    var s = /(.*?)(?:[\/]+|$)/g;
  if (r)
    var f = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
  else
    var f = /^[\/]*/;
  return kr.realpathSync = function(o, d) {
    if (o = e.resolve(o), d && Object.prototype.hasOwnProperty.call(d, o))
      return d[o];
    var g = o, u = {}, c = {}, p, v, x, l;
    _();
    function _() {
      var T = f.exec(o);
      p = T[0].length, v = T[0], x = T[0], l = "", r && !c[x] && (t.lstatSync(x), c[x] = !0);
    }
    for (; p < o.length; ) {
      s.lastIndex = p;
      var R = s.exec(o);
      if (l = v, v += R[0], x = l + R[1], p = s.lastIndex, !(c[x] || d && d[x] === x)) {
        var m;
        if (d && Object.prototype.hasOwnProperty.call(d, x))
          m = d[x];
        else {
          var E = t.lstatSync(x);
          if (!E.isSymbolicLink()) {
            c[x] = !0, d && (d[x] = x);
            continue;
          }
          var $ = null;
          if (!r) {
            var A = E.dev.toString(32) + ":" + E.ino.toString(32);
            u.hasOwnProperty(A) && ($ = u[A]);
          }
          $ === null && (t.statSync(x), $ = t.readlinkSync(x)), m = e.resolve(l, $), d && (d[x] = m), r || (u[A] = $);
        }
        o = e.resolve(m, o.slice(p)), _();
      }
    }
    return d && (d[g] = o), o;
  }, kr.realpath = function(o, d, g) {
    if (typeof g != "function" && (g = a(d), d = null), o = e.resolve(o), d && Object.prototype.hasOwnProperty.call(d, o))
      return process.nextTick(g.bind(null, null, d[o]));
    var u = o, c = {}, p = {}, v, x, l, _;
    R();
    function R() {
      var T = f.exec(o);
      v = T[0].length, x = T[0], l = T[0], _ = "", r && !p[l] ? t.lstat(l, function(b) {
        if (b) return g(b);
        p[l] = !0, m();
      }) : process.nextTick(m);
    }
    function m() {
      if (v >= o.length)
        return d && (d[u] = o), g(null, o);
      s.lastIndex = v;
      var T = s.exec(o);
      return _ = x, x += T[0], l = _ + T[1], v = s.lastIndex, p[l] || d && d[l] === l ? process.nextTick(m) : d && Object.prototype.hasOwnProperty.call(d, l) ? A(d[l]) : t.lstat(l, E);
    }
    function E(T, b) {
      if (T) return g(T);
      if (!b.isSymbolicLink())
        return p[l] = !0, d && (d[l] = l), process.nextTick(m);
      if (!r) {
        var I = b.dev.toString(32) + ":" + b.ino.toString(32);
        if (c.hasOwnProperty(I))
          return $(null, c[I], l);
      }
      t.stat(l, function(O) {
        if (O) return g(O);
        t.readlink(l, function(L, B) {
          r || (c[I] = B), $(L, B);
        });
      });
    }
    function $(T, b, I) {
      if (T) return g(T);
      var O = e.resolve(_, b);
      d && (d[I] = O), A(O);
    }
    function A(T) {
      o = e.resolve(T, o.slice(v)), R();
    }
  }, kr;
}
var Ei, Na;
function Do() {
  if (Na) return Ei;
  Na = 1, Ei = f, f.realpath = f, f.sync = h, f.realpathSync = h, f.monkeypatch = o, f.unmonkeypatch = d;
  var e = Qe, r = e.realpath, t = e.realpathSync, i = process.version, n = /^v[0-5]\./.test(i), a = xc();
  function s(g) {
    return g && g.syscall === "realpath" && (g.code === "ELOOP" || g.code === "ENOMEM" || g.code === "ENAMETOOLONG");
  }
  function f(g, u, c) {
    if (n)
      return r(g, u, c);
    typeof u == "function" && (c = u, u = null), r(g, u, function(p, v) {
      s(p) ? a.realpath(g, u, c) : c(p, v);
    });
  }
  function h(g, u) {
    if (n)
      return t(g, u);
    try {
      return t(g, u);
    } catch (c) {
      if (s(c))
        return a.realpathSync(g, u);
      throw c;
    }
  }
  function o() {
    e.realpath = f, e.realpathSync = h;
  }
  function d() {
    e.realpath = r, e.realpathSync = t;
  }
  return Ei;
}
var bi, La;
function Rc() {
  if (La) return bi;
  La = 1, bi = function(r, t) {
    for (var i = [], n = 0; n < r.length; n++) {
      var a = t(r[n], n);
      e(a) ? i.push.apply(i, a) : i.push(a);
    }
    return i;
  };
  var e = Array.isArray || function(r) {
    return Object.prototype.toString.call(r) === "[object Array]";
  };
  return bi;
}
var Si, Da;
function Oc() {
  if (Da) return Si;
  Da = 1, Si = e;
  function e(i, n, a) {
    i instanceof RegExp && (i = r(i, a)), n instanceof RegExp && (n = r(n, a));
    var s = t(i, n, a);
    return s && {
      start: s[0],
      end: s[1],
      pre: a.slice(0, s[0]),
      body: a.slice(s[0] + i.length, s[1]),
      post: a.slice(s[1] + n.length)
    };
  }
  function r(i, n) {
    var a = n.match(i);
    return a ? a[0] : null;
  }
  e.range = t;
  function t(i, n, a) {
    var s, f, h, o, d, g = a.indexOf(i), u = a.indexOf(n, g + 1), c = g;
    if (g >= 0 && u > 0) {
      if (i === n)
        return [g, u];
      for (s = [], h = a.length; c >= 0 && !d; )
        c == g ? (s.push(c), g = a.indexOf(i, c + 1)) : s.length == 1 ? d = [s.pop(), u] : (f = s.pop(), f < h && (h = f, o = u), u = a.indexOf(n, c + 1)), c = g < u && g >= 0 ? g : u;
      s.length && (d = [h, o]);
    }
    return d;
  }
  return Si;
}
var ki, Pa;
function Tc() {
  if (Pa) return ki;
  Pa = 1;
  var e = Rc(), r = Oc();
  ki = g;
  var t = "\0SLASH" + Math.random() + "\0", i = "\0OPEN" + Math.random() + "\0", n = "\0CLOSE" + Math.random() + "\0", a = "\0COMMA" + Math.random() + "\0", s = "\0PERIOD" + Math.random() + "\0";
  function f(l) {
    return parseInt(l, 10) == l ? parseInt(l, 10) : l.charCodeAt(0);
  }
  function h(l) {
    return l.split("\\\\").join(t).split("\\{").join(i).split("\\}").join(n).split("\\,").join(a).split("\\.").join(s);
  }
  function o(l) {
    return l.split(t).join("\\").split(i).join("{").split(n).join("}").split(a).join(",").split(s).join(".");
  }
  function d(l) {
    if (!l)
      return [""];
    var _ = [], R = r("{", "}", l);
    if (!R)
      return l.split(",");
    var m = R.pre, E = R.body, $ = R.post, A = m.split(",");
    A[A.length - 1] += "{" + E + "}";
    var T = d($);
    return $.length && (A[A.length - 1] += T.shift(), A.push.apply(A, T)), _.push.apply(_, A), _;
  }
  function g(l) {
    return l ? (l.substr(0, 2) === "{}" && (l = "\\{\\}" + l.substr(2)), x(h(l), !0).map(o)) : [];
  }
  function u(l) {
    return "{" + l + "}";
  }
  function c(l) {
    return /^-?0\d/.test(l);
  }
  function p(l, _) {
    return l <= _;
  }
  function v(l, _) {
    return l >= _;
  }
  function x(l, _) {
    var R = [], m = r("{", "}", l);
    if (!m || /\$$/.test(m.pre)) return [l];
    var E = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body), $ = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body), A = E || $, T = m.body.indexOf(",") >= 0;
    if (!A && !T)
      return m.post.match(/,.*\}/) ? (l = m.pre + "{" + m.body + n + m.post, x(l)) : [l];
    var b;
    if (A)
      b = m.body.split(/\.\./);
    else if (b = d(m.body), b.length === 1 && (b = x(b[0], !1).map(u), b.length === 1)) {
      var O = m.post.length ? x(m.post, !1) : [""];
      return O.map(function(k) {
        return m.pre + b[0] + k;
      });
    }
    var I = m.pre, O = m.post.length ? x(m.post, !1) : [""], L;
    if (A) {
      var B = f(b[0]), N = f(b[1]), P = Math.max(b[0].length, b[1].length), W = b.length == 3 ? Math.abs(f(b[2])) : 1, w = p, S = N < B;
      S && (W *= -1, w = v);
      var C = b.some(c);
      L = [];
      for (var j = B; w(j, N); j += W) {
        var U;
        if ($)
          U = String.fromCharCode(j), U === "\\" && (U = "");
        else if (U = String(j), C) {
          var G = P - U.length;
          if (G > 0) {
            var H = new Array(G + 1).join("0");
            j < 0 ? U = "-" + H + U.slice(1) : U = H + U;
          }
        }
        L.push(U);
      }
    } else
      L = e(b, function(y) {
        return x(y, !1);
      });
    for (var X = 0; X < L.length; X++)
      for (var J = 0; J < O.length; J++) {
        var Y = I + L[X] + O[J];
        (!_ || A || Y) && R.push(Y);
      }
    return R;
  }
  return ki;
}
var xi, ja;
function Un() {
  if (ja) return xi;
  ja = 1, xi = c, c.Minimatch = p;
  var e = function() {
    try {
      return require("path");
    } catch {
    }
  }() || {
    sep: "/"
  };
  c.sep = e.sep;
  var r = c.GLOBSTAR = p.GLOBSTAR = {}, t = Tc(), i = {
    "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
    "?": { open: "(?:", close: ")?" },
    "+": { open: "(?:", close: ")+" },
    "*": { open: "(?:", close: ")*" },
    "@": { open: "(?:", close: ")" }
  }, n = "[^/]", a = n + "*?", s = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", f = "(?:(?!(?:\\/|^)\\.).)*?", h = o("().*{}+?[]^$\\!");
  function o(b) {
    return b.split("").reduce(function(I, O) {
      return I[O] = !0, I;
    }, {});
  }
  var d = /\/+/;
  c.filter = g;
  function g(b, I) {
    return I = I || {}, function(O, L, B) {
      return c(O, b, I);
    };
  }
  function u(b, I) {
    I = I || {};
    var O = {};
    return Object.keys(b).forEach(function(L) {
      O[L] = b[L];
    }), Object.keys(I).forEach(function(L) {
      O[L] = I[L];
    }), O;
  }
  c.defaults = function(b) {
    if (!b || typeof b != "object" || !Object.keys(b).length)
      return c;
    var I = c, O = function(B, N, P) {
      return I(B, N, u(b, P));
    };
    return O.Minimatch = function(B, N) {
      return new I.Minimatch(B, u(b, N));
    }, O.Minimatch.defaults = function(B) {
      return I.defaults(u(b, B)).Minimatch;
    }, O.filter = function(B, N) {
      return I.filter(B, u(b, N));
    }, O.defaults = function(B) {
      return I.defaults(u(b, B));
    }, O.makeRe = function(B, N) {
      return I.makeRe(B, u(b, N));
    }, O.braceExpand = function(B, N) {
      return I.braceExpand(B, u(b, N));
    }, O.match = function(L, B, N) {
      return I.match(L, B, u(b, N));
    }, O;
  }, p.defaults = function(b) {
    return c.defaults(b).Minimatch;
  };
  function c(b, I, O) {
    return R(I), O || (O = {}), !O.nocomment && I.charAt(0) === "#" ? !1 : new p(I, O).match(b);
  }
  function p(b, I) {
    if (!(this instanceof p))
      return new p(b, I);
    R(b), I || (I = {}), b = b.trim(), !I.allowWindowsEscape && e.sep !== "/" && (b = b.split(e.sep).join("/")), this.options = I, this.set = [], this.pattern = b, this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.partial = !!I.partial, this.make();
  }
  p.prototype.debug = function() {
  }, p.prototype.make = v;
  function v() {
    var b = this.pattern, I = this.options;
    if (!I.nocomment && b.charAt(0) === "#") {
      this.comment = !0;
      return;
    }
    if (!b) {
      this.empty = !0;
      return;
    }
    this.parseNegate();
    var O = this.globSet = this.braceExpand();
    I.debug && (this.debug = function() {
      console.error.apply(console, arguments);
    }), this.debug(this.pattern, O), O = this.globParts = O.map(function(L) {
      return L.split(d);
    }), this.debug(this.pattern, O), O = O.map(function(L, B, N) {
      return L.map(this.parse, this);
    }, this), this.debug(this.pattern, O), O = O.filter(function(L) {
      return L.indexOf(!1) === -1;
    }), this.debug(this.pattern, O), this.set = O;
  }
  p.prototype.parseNegate = x;
  function x() {
    var b = this.pattern, I = !1, O = this.options, L = 0;
    if (!O.nonegate) {
      for (var B = 0, N = b.length; B < N && b.charAt(B) === "!"; B++)
        I = !I, L++;
      L && (this.pattern = b.substr(L)), this.negate = I;
    }
  }
  c.braceExpand = function(b, I) {
    return l(b, I);
  }, p.prototype.braceExpand = l;
  function l(b, I) {
    return I || (this instanceof p ? I = this.options : I = {}), b = typeof b > "u" ? this.pattern : b, R(b), I.nobrace || !/\{(?:(?!\{).)*\}/.test(b) ? [b] : t(b);
  }
  var _ = 1024 * 64, R = function(b) {
    if (typeof b != "string")
      throw new TypeError("invalid pattern");
    if (b.length > _)
      throw new TypeError("pattern is too long");
  };
  p.prototype.parse = E;
  var m = {};
  function E(b, I) {
    R(b);
    var O = this.options;
    if (b === "**")
      if (O.noglobstar)
        b = "*";
      else
        return r;
    if (b === "") return "";
    var L = "", B = !!O.nocase, N = !1, P = [], W = [], w, S = !1, C = -1, j = -1, U = b.charAt(0) === "." ? "" : O.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", G = this;
    function H() {
      if (w) {
        switch (w) {
          case "*":
            L += a, B = !0;
            break;
          case "?":
            L += n, B = !0;
            break;
          default:
            L += "\\" + w;
            break;
        }
        G.debug("clearStateChar %j %j", w, L), w = !1;
      }
    }
    for (var X = 0, J = b.length, Y; X < J && (Y = b.charAt(X)); X++) {
      if (this.debug("%s	%s %s %j", b, X, L, Y), N && h[Y]) {
        L += "\\" + Y, N = !1;
        continue;
      }
      switch (Y) {
        case "/":
          return !1;
        case "\\":
          H(), N = !0;
          continue;
        case "?":
        case "*":
        case "+":
        case "@":
        case "!":
          if (this.debug("%s	%s %s %j <-- stateChar", b, X, L, Y), S) {
            this.debug("  in class"), Y === "!" && X === j + 1 && (Y = "^"), L += Y;
            continue;
          }
          G.debug("call clearStateChar %j", w), H(), w = Y, O.noext && H();
          continue;
        case "(":
          if (S) {
            L += "(";
            continue;
          }
          if (!w) {
            L += "\\(";
            continue;
          }
          P.push({
            type: w,
            start: X - 1,
            reStart: L.length,
            open: i[w].open,
            close: i[w].close
          }), L += w === "!" ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", w, L), w = !1;
          continue;
        case ")":
          if (S || !P.length) {
            L += "\\)";
            continue;
          }
          H(), B = !0;
          var y = P.pop();
          L += y.close, y.type === "!" && W.push(y), y.reEnd = L.length;
          continue;
        case "|":
          if (S || !P.length || N) {
            L += "\\|", N = !1;
            continue;
          }
          H(), L += "|";
          continue;
        case "[":
          if (H(), S) {
            L += "\\" + Y;
            continue;
          }
          S = !0, j = X, C = L.length, L += Y;
          continue;
        case "]":
          if (X === j + 1 || !S) {
            L += "\\" + Y, N = !1;
            continue;
          }
          var k = b.substring(j + 1, X);
          try {
            RegExp("[" + k + "]");
          } catch {
            var M = this.parse(k, m);
            L = L.substr(0, C) + "\\[" + M[0] + "\\]", B = B || M[1], S = !1;
            continue;
          }
          B = !0, S = !1, L += Y;
          continue;
        default:
          H(), N ? N = !1 : h[Y] && !(Y === "^" && S) && (L += "\\"), L += Y;
      }
    }
    for (S && (k = b.substr(j + 1), M = this.parse(k, m), L = L.substr(0, C) + "\\[" + M[0], B = B || M[1]), y = P.pop(); y; y = P.pop()) {
      var Z = L.slice(y.reStart + y.open.length);
      this.debug("setting tail", L, y), Z = Z.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(q, ie, re) {
        return re || (re = "\\"), ie + ie + re + "|";
      }), this.debug(`tail=%j
   %s`, Z, Z, y, L);
      var Q = y.type === "*" ? a : y.type === "?" ? n : "\\" + y.type;
      B = !0, L = L.slice(0, y.reStart) + Q + "\\(" + Z;
    }
    H(), N && (L += "\\\\");
    var V = !1;
    switch (L.charAt(0)) {
      case "[":
      case ".":
      case "(":
        V = !0;
    }
    for (var K = W.length - 1; K > -1; K--) {
      var ye = W[K], Ze = L.slice(0, ye.reStart), ut = L.slice(ye.reStart, ye.reEnd - 8), xt = L.slice(ye.reEnd - 8, ye.reEnd), ae = L.slice(ye.reEnd);
      xt += ae;
      var qe = Ze.split("(").length - 1, He = ae;
      for (X = 0; X < qe; X++)
        He = He.replace(/\)[+*?]?/, "");
      ae = He;
      var Ve = "";
      ae === "" && I !== m && (Ve = "$");
      var D = Ze + ut + ae + Ve + xt;
      L = D;
    }
    if (L !== "" && B && (L = "(?=.)" + L), V && (L = U + L), I === m)
      return [L, B];
    if (!B)
      return A(b);
    var F = O.nocase ? "i" : "";
    try {
      var z = new RegExp("^" + L + "$", F);
    } catch {
      return new RegExp("$.");
    }
    return z._glob = b, z._src = L, z;
  }
  c.makeRe = function(b, I) {
    return new p(b, I || {}).makeRe();
  }, p.prototype.makeRe = $;
  function $() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    var b = this.set;
    if (!b.length)
      return this.regexp = !1, this.regexp;
    var I = this.options, O = I.noglobstar ? a : I.dot ? s : f, L = I.nocase ? "i" : "", B = b.map(function(N) {
      return N.map(function(P) {
        return P === r ? O : typeof P == "string" ? T(P) : P._src;
      }).join("\\/");
    }).join("|");
    B = "^(?:" + B + ")$", this.negate && (B = "^(?!" + B + ").*$");
    try {
      this.regexp = new RegExp(B, L);
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  c.match = function(b, I, O) {
    O = O || {};
    var L = new p(I, O);
    return b = b.filter(function(B) {
      return L.match(B);
    }), L.options.nonull && !b.length && b.push(I), b;
  }, p.prototype.match = function(I, O) {
    if (typeof O > "u" && (O = this.partial), this.debug("match", I, this.pattern), this.comment) return !1;
    if (this.empty) return I === "";
    if (I === "/" && O) return !0;
    var L = this.options;
    e.sep !== "/" && (I = I.split(e.sep).join("/")), I = I.split(d), this.debug(this.pattern, "split", I);
    var B = this.set;
    this.debug(this.pattern, "set", B);
    var N, P;
    for (P = I.length - 1; P >= 0 && (N = I[P], !N); P--)
      ;
    for (P = 0; P < B.length; P++) {
      var W = B[P], w = I;
      L.matchBase && W.length === 1 && (w = [N]);
      var S = this.matchOne(w, W, O);
      if (S)
        return L.flipNegate ? !0 : !this.negate;
    }
    return L.flipNegate ? !1 : this.negate;
  }, p.prototype.matchOne = function(b, I, O) {
    var L = this.options;
    this.debug(
      "matchOne",
      { this: this, file: b, pattern: I }
    ), this.debug("matchOne", b.length, I.length);
    for (var B = 0, N = 0, P = b.length, W = I.length; B < P && N < W; B++, N++) {
      this.debug("matchOne loop");
      var w = I[N], S = b[B];
      if (this.debug(I, w, S), w === !1) return !1;
      if (w === r) {
        this.debug("GLOBSTAR", [I, w, S]);
        var C = B, j = N + 1;
        if (j === W) {
          for (this.debug("** at the end"); B < P; B++)
            if (b[B] === "." || b[B] === ".." || !L.dot && b[B].charAt(0) === ".") return !1;
          return !0;
        }
        for (; C < P; ) {
          var U = b[C];
          if (this.debug(`
globstar while`, b, C, I, j, U), this.matchOne(b.slice(C), I.slice(j), O))
            return this.debug("globstar found match!", C, P, U), !0;
          if (U === "." || U === ".." || !L.dot && U.charAt(0) === ".") {
            this.debug("dot detected!", b, C, I, j);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), C++;
        }
        return !!(O && (this.debug(`
>>> no match, partial?`, b, C, I, j), C === P));
      }
      var G;
      if (typeof w == "string" ? (G = S === w, this.debug("string match", w, S, G)) : (G = S.match(w), this.debug("pattern match", w, S, G)), !G) return !1;
    }
    if (B === P && N === W)
      return !0;
    if (B === P)
      return O;
    if (N === W)
      return B === P - 1 && b[B] === "";
    throw new Error("wtf?");
  };
  function A(b) {
    return b.replace(/\\(.)/g, "$1");
  }
  function T(b) {
    return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  return xi;
}
var xr = { exports: {} }, Rr = { exports: {} }, Fa;
function Ac() {
  return Fa || (Fa = 1, typeof Object.create == "function" ? Rr.exports = function(r, t) {
    t && (r.super_ = t, r.prototype = Object.create(t.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Rr.exports = function(r, t) {
    if (t) {
      r.super_ = t;
      var i = function() {
      };
      i.prototype = t.prototype, r.prototype = new i(), r.prototype.constructor = r;
    }
  }), Rr.exports;
}
var Ba;
function Bt() {
  if (Ba) return xr.exports;
  Ba = 1;
  try {
    var e = require("util");
    if (typeof e.inherits != "function") throw "";
    xr.exports = e.inherits;
  } catch {
    xr.exports = Ac();
  }
  return xr.exports;
}
var Xt = { exports: {} }, Ma;
function zn() {
  if (Ma) return Xt.exports;
  Ma = 1;
  function e(t) {
    return t.charAt(0) === "/";
  }
  function r(t) {
    var i = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, n = i.exec(t), a = n[1] || "", s = !!(a && a.charAt(1) !== ":");
    return !!(n[2] || s);
  }
  return Xt.exports = process.platform === "win32" ? r : e, Xt.exports.posix = e, Xt.exports.win32 = r, Xt.exports;
}
var Xe = {}, Ua;
function Po() {
  if (Ua) return Xe;
  Ua = 1, Xe.setopts = o, Xe.ownProp = e, Xe.makeAbs = u, Xe.finish = d, Xe.mark = g, Xe.isIgnored = c, Xe.childrenIgnored = p;
  function e(v, x) {
    return Object.prototype.hasOwnProperty.call(v, x);
  }
  var r = Qe, t = We, i = Un(), n = zn(), a = i.Minimatch;
  function s(v, x) {
    return v.localeCompare(x, "en");
  }
  function f(v, x) {
    v.ignore = x.ignore || [], Array.isArray(v.ignore) || (v.ignore = [v.ignore]), v.ignore.length && (v.ignore = v.ignore.map(h));
  }
  function h(v) {
    var x = null;
    if (v.slice(-3) === "/**") {
      var l = v.replace(/(\/\*\*)+$/, "");
      x = new a(l, { dot: !0 });
    }
    return {
      matcher: new a(v, { dot: !0 }),
      gmatcher: x
    };
  }
  function o(v, x, l) {
    if (l || (l = {}), l.matchBase && x.indexOf("/") === -1) {
      if (l.noglobstar)
        throw new Error("base matching requires globstar");
      x = "**/" + x;
    }
    v.silent = !!l.silent, v.pattern = x, v.strict = l.strict !== !1, v.realpath = !!l.realpath, v.realpathCache = l.realpathCache || /* @__PURE__ */ Object.create(null), v.follow = !!l.follow, v.dot = !!l.dot, v.mark = !!l.mark, v.nodir = !!l.nodir, v.nodir && (v.mark = !0), v.sync = !!l.sync, v.nounique = !!l.nounique, v.nonull = !!l.nonull, v.nosort = !!l.nosort, v.nocase = !!l.nocase, v.stat = !!l.stat, v.noprocess = !!l.noprocess, v.absolute = !!l.absolute, v.fs = l.fs || r, v.maxLength = l.maxLength || 1 / 0, v.cache = l.cache || /* @__PURE__ */ Object.create(null), v.statCache = l.statCache || /* @__PURE__ */ Object.create(null), v.symlinks = l.symlinks || /* @__PURE__ */ Object.create(null), f(v, l), v.changedCwd = !1;
    var _ = process.cwd();
    e(l, "cwd") ? (v.cwd = t.resolve(l.cwd), v.changedCwd = v.cwd !== _) : v.cwd = _, v.root = l.root || t.resolve(v.cwd, "/"), v.root = t.resolve(v.root), process.platform === "win32" && (v.root = v.root.replace(/\\/g, "/")), v.cwdAbs = n(v.cwd) ? v.cwd : u(v, v.cwd), process.platform === "win32" && (v.cwdAbs = v.cwdAbs.replace(/\\/g, "/")), v.nomount = !!l.nomount, l.nonegate = !0, l.nocomment = !0, l.allowWindowsEscape = !1, v.minimatch = new a(x, l), v.options = v.minimatch.options;
  }
  function d(v) {
    for (var x = v.nounique, l = x ? [] : /* @__PURE__ */ Object.create(null), _ = 0, R = v.matches.length; _ < R; _++) {
      var m = v.matches[_];
      if (!m || Object.keys(m).length === 0) {
        if (v.nonull) {
          var E = v.minimatch.globSet[_];
          x ? l.push(E) : l[E] = !0;
        }
      } else {
        var $ = Object.keys(m);
        x ? l.push.apply(l, $) : $.forEach(function(A) {
          l[A] = !0;
        });
      }
    }
    if (x || (l = Object.keys(l)), v.nosort || (l = l.sort(s)), v.mark) {
      for (var _ = 0; _ < l.length; _++)
        l[_] = v._mark(l[_]);
      v.nodir && (l = l.filter(function(A) {
        var T = !/\/$/.test(A), b = v.cache[A] || v.cache[u(v, A)];
        return T && b && (T = b !== "DIR" && !Array.isArray(b)), T;
      }));
    }
    v.ignore.length && (l = l.filter(function(A) {
      return !c(v, A);
    })), v.found = l;
  }
  function g(v, x) {
    var l = u(v, x), _ = v.cache[l], R = x;
    if (_) {
      var m = _ === "DIR" || Array.isArray(_), E = x.slice(-1) === "/";
      if (m && !E ? R += "/" : !m && E && (R = R.slice(0, -1)), R !== x) {
        var $ = u(v, R);
        v.statCache[$] = v.statCache[l], v.cache[$] = v.cache[l];
      }
    }
    return R;
  }
  function u(v, x) {
    var l = x;
    return x.charAt(0) === "/" ? l = t.join(v.root, x) : n(x) || x === "" ? l = x : v.changedCwd ? l = t.resolve(v.cwd, x) : l = t.resolve(x), process.platform === "win32" && (l = l.replace(/\\/g, "/")), l;
  }
  function c(v, x) {
    return v.ignore.length ? v.ignore.some(function(l) {
      return l.matcher.match(x) || !!(l.gmatcher && l.gmatcher.match(x));
    }) : !1;
  }
  function p(v, x) {
    return v.ignore.length ? v.ignore.some(function(l) {
      return !!(l.gmatcher && l.gmatcher.match(x));
    }) : !1;
  }
  return Xe;
}
var Ri, za;
function $c() {
  if (za) return Ri;
  za = 1, Ri = d, d.GlobSync = g;
  var e = Do(), r = Un();
  r.Minimatch, Bo().Glob;
  var t = We, i = $n, n = zn(), a = Po(), s = a.setopts, f = a.ownProp, h = a.childrenIgnored, o = a.isIgnored;
  function d(u, c) {
    if (typeof c == "function" || arguments.length === 3)
      throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    return new g(u, c).found;
  }
  function g(u, c) {
    if (!u)
      throw new Error("must provide pattern");
    if (typeof c == "function" || arguments.length === 3)
      throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    if (!(this instanceof g))
      return new g(u, c);
    if (s(this, u, c), this.noprocess)
      return this;
    var p = this.minimatch.set.length;
    this.matches = new Array(p);
    for (var v = 0; v < p; v++)
      this._process(this.minimatch.set[v], v, !1);
    this._finish();
  }
  return g.prototype._finish = function() {
    if (i.ok(this instanceof g), this.realpath) {
      var u = this;
      this.matches.forEach(function(c, p) {
        var v = u.matches[p] = /* @__PURE__ */ Object.create(null);
        for (var x in c)
          try {
            x = u._makeAbs(x);
            var l = e.realpathSync(x, u.realpathCache);
            v[l] = !0;
          } catch (_) {
            if (_.syscall === "stat")
              v[u._makeAbs(x)] = !0;
            else
              throw _;
          }
      });
    }
    a.finish(this);
  }, g.prototype._process = function(u, c, p) {
    i.ok(this instanceof g);
    for (var v = 0; typeof u[v] == "string"; )
      v++;
    var x;
    switch (v) {
      case u.length:
        this._processSimple(u.join("/"), c);
        return;
      case 0:
        x = null;
        break;
      default:
        x = u.slice(0, v).join("/");
        break;
    }
    var l = u.slice(v), _;
    x === null ? _ = "." : ((n(x) || n(u.map(function(E) {
      return typeof E == "string" ? E : "[*]";
    }).join("/"))) && (!x || !n(x)) && (x = "/" + x), _ = x);
    var R = this._makeAbs(_);
    if (!h(this, _)) {
      var m = l[0] === r.GLOBSTAR;
      m ? this._processGlobStar(x, _, R, l, c, p) : this._processReaddir(x, _, R, l, c, p);
    }
  }, g.prototype._processReaddir = function(u, c, p, v, x, l) {
    var _ = this._readdir(p, l);
    if (_) {
      for (var R = v[0], m = !!this.minimatch.negate, E = R._glob, $ = this.dot || E.charAt(0) === ".", A = [], T = 0; T < _.length; T++) {
        var b = _[T];
        if (b.charAt(0) !== "." || $) {
          var I;
          m && !u ? I = !b.match(R) : I = b.match(R), I && A.push(b);
        }
      }
      var O = A.length;
      if (O !== 0) {
        if (v.length === 1 && !this.mark && !this.stat) {
          this.matches[x] || (this.matches[x] = /* @__PURE__ */ Object.create(null));
          for (var T = 0; T < O; T++) {
            var b = A[T];
            u && (u.slice(-1) !== "/" ? b = u + "/" + b : b = u + b), b.charAt(0) === "/" && !this.nomount && (b = t.join(this.root, b)), this._emitMatch(x, b);
          }
          return;
        }
        v.shift();
        for (var T = 0; T < O; T++) {
          var b = A[T], L;
          u ? L = [u, b] : L = [b], this._process(L.concat(v), x, l);
        }
      }
    }
  }, g.prototype._emitMatch = function(u, c) {
    if (!o(this, c)) {
      var p = this._makeAbs(c);
      if (this.mark && (c = this._mark(c)), this.absolute && (c = p), !this.matches[u][c]) {
        if (this.nodir) {
          var v = this.cache[p];
          if (v === "DIR" || Array.isArray(v))
            return;
        }
        this.matches[u][c] = !0, this.stat && this._stat(c);
      }
    }
  }, g.prototype._readdirInGlobStar = function(u) {
    if (this.follow)
      return this._readdir(u, !1);
    var c, p;
    try {
      p = this.fs.lstatSync(u);
    } catch (x) {
      if (x.code === "ENOENT")
        return null;
    }
    var v = p && p.isSymbolicLink();
    return this.symlinks[u] = v, !v && p && !p.isDirectory() ? this.cache[u] = "FILE" : c = this._readdir(u, !1), c;
  }, g.prototype._readdir = function(u, c) {
    if (c && !f(this.symlinks, u))
      return this._readdirInGlobStar(u);
    if (f(this.cache, u)) {
      var p = this.cache[u];
      if (!p || p === "FILE")
        return null;
      if (Array.isArray(p))
        return p;
    }
    try {
      return this._readdirEntries(u, this.fs.readdirSync(u));
    } catch (v) {
      return this._readdirError(u, v), null;
    }
  }, g.prototype._readdirEntries = function(u, c) {
    if (!this.mark && !this.stat)
      for (var p = 0; p < c.length; p++) {
        var v = c[p];
        u === "/" ? v = u + v : v = u + "/" + v, this.cache[v] = !0;
      }
    return this.cache[u] = c, c;
  }, g.prototype._readdirError = function(u, c) {
    switch (c.code) {
      case "ENOTSUP":
      case "ENOTDIR":
        var p = this._makeAbs(u);
        if (this.cache[p] = "FILE", p === this.cwdAbs) {
          var v = new Error(c.code + " invalid cwd " + this.cwd);
          throw v.path = this.cwd, v.code = c.code, v;
        }
        break;
      case "ENOENT":
      case "ELOOP":
      case "ENAMETOOLONG":
      case "UNKNOWN":
        this.cache[this._makeAbs(u)] = !1;
        break;
      default:
        if (this.cache[this._makeAbs(u)] = !1, this.strict)
          throw c;
        this.silent || console.error("glob error", c);
        break;
    }
  }, g.prototype._processGlobStar = function(u, c, p, v, x, l) {
    var _ = this._readdir(p, l);
    if (_) {
      var R = v.slice(1), m = u ? [u] : [], E = m.concat(R);
      this._process(E, x, !1);
      var $ = _.length, A = this.symlinks[p];
      if (!(A && l))
        for (var T = 0; T < $; T++) {
          var b = _[T];
          if (!(b.charAt(0) === "." && !this.dot)) {
            var I = m.concat(_[T], R);
            this._process(I, x, !0);
            var O = m.concat(_[T], v);
            this._process(O, x, !0);
          }
        }
    }
  }, g.prototype._processSimple = function(u, c) {
    var p = this._stat(u);
    if (this.matches[c] || (this.matches[c] = /* @__PURE__ */ Object.create(null)), !!p) {
      if (u && n(u) && !this.nomount) {
        var v = /[\/\\]$/.test(u);
        u.charAt(0) === "/" ? u = t.join(this.root, u) : (u = t.resolve(this.root, u), v && (u += "/"));
      }
      process.platform === "win32" && (u = u.replace(/\\/g, "/")), this._emitMatch(c, u);
    }
  }, g.prototype._stat = function(u) {
    var c = this._makeAbs(u), p = u.slice(-1) === "/";
    if (u.length > this.maxLength)
      return !1;
    if (!this.stat && f(this.cache, c)) {
      var l = this.cache[c];
      if (Array.isArray(l) && (l = "DIR"), !p || l === "DIR")
        return l;
      if (p && l === "FILE")
        return !1;
    }
    var v = this.statCache[c];
    if (!v) {
      var x;
      try {
        x = this.fs.lstatSync(c);
      } catch (_) {
        if (_ && (_.code === "ENOENT" || _.code === "ENOTDIR"))
          return this.statCache[c] = !1, !1;
      }
      if (x && x.isSymbolicLink())
        try {
          v = this.fs.statSync(c);
        } catch {
          v = x;
        }
      else
        v = x;
    }
    this.statCache[c] = v;
    var l = !0;
    return v && (l = v.isDirectory() ? "DIR" : "FILE"), this.cache[c] = this.cache[c] || l, p && l === "FILE" ? !1 : l;
  }, g.prototype._mark = function(u) {
    return a.mark(this, u);
  }, g.prototype._makeAbs = function(u) {
    return a.makeAbs(this, u);
  }, Ri;
}
var Oi, Wa;
function jo() {
  if (Wa) return Oi;
  Wa = 1, Oi = e;
  function e(r, t) {
    if (r && t) return e(r)(t);
    if (typeof r != "function")
      throw new TypeError("need wrapper function");
    return Object.keys(r).forEach(function(n) {
      i[n] = r[n];
    }), i;
    function i() {
      for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
        n[a] = arguments[a];
      var s = r.apply(this, n), f = n[n.length - 1];
      return typeof s == "function" && s !== f && Object.keys(f).forEach(function(h) {
        s[h] = f[h];
      }), s;
    }
  }
  return Oi;
}
var Or = { exports: {} }, Ga;
function Fo() {
  if (Ga) return Or.exports;
  Ga = 1;
  var e = jo();
  Or.exports = e(r), Or.exports.strict = e(t), r.proto = r(function() {
    Object.defineProperty(Function.prototype, "once", {
      value: function() {
        return r(this);
      },
      configurable: !0
    }), Object.defineProperty(Function.prototype, "onceStrict", {
      value: function() {
        return t(this);
      },
      configurable: !0
    });
  });
  function r(i) {
    var n = function() {
      return n.called ? n.value : (n.called = !0, n.value = i.apply(this, arguments));
    };
    return n.called = !1, n;
  }
  function t(i) {
    var n = function() {
      if (n.called)
        throw new Error(n.onceError);
      return n.called = !0, n.value = i.apply(this, arguments);
    }, a = i.name || "Function wrapped with `once`";
    return n.onceError = a + " shouldn't be called more than once", n.called = !1, n;
  }
  return Or.exports;
}
var Ti, Za;
function Ic() {
  if (Za) return Ti;
  Za = 1;
  var e = jo(), r = /* @__PURE__ */ Object.create(null), t = Fo();
  Ti = e(i);
  function i(s, f) {
    return r[s] ? (r[s].push(f), null) : (r[s] = [f], n(s));
  }
  function n(s) {
    return t(function f() {
      var h = r[s], o = h.length, d = a(arguments);
      try {
        for (var g = 0; g < o; g++)
          h[g].apply(null, d);
      } finally {
        h.length > o ? (h.splice(0, o), process.nextTick(function() {
          f.apply(null, d);
        })) : delete r[s];
      }
    });
  }
  function a(s) {
    for (var f = s.length, h = [], o = 0; o < f; o++) h[o] = s[o];
    return h;
  }
  return Ti;
}
var Ai, qa;
function Bo() {
  if (qa) return Ai;
  qa = 1, Ai = v;
  var e = Do(), r = Un();
  r.Minimatch;
  var t = Bt(), i = Ro.EventEmitter, n = We, a = $n, s = zn(), f = $c(), h = Po(), o = h.setopts, d = h.ownProp, g = Ic(), u = h.childrenIgnored, c = h.isIgnored, p = Fo();
  function v(m, E, $) {
    if (typeof E == "function" && ($ = E, E = {}), E || (E = {}), E.sync) {
      if ($)
        throw new TypeError("callback provided to sync glob");
      return f(m, E);
    }
    return new _(m, E, $);
  }
  v.sync = f;
  var x = v.GlobSync = f.GlobSync;
  v.glob = v;
  function l(m, E) {
    if (E === null || typeof E != "object")
      return m;
    for (var $ = Object.keys(E), A = $.length; A--; )
      m[$[A]] = E[$[A]];
    return m;
  }
  v.hasMagic = function(m, E) {
    var $ = l({}, E);
    $.noprocess = !0;
    var A = new _(m, $), T = A.minimatch.set;
    if (!m)
      return !1;
    if (T.length > 1)
      return !0;
    for (var b = 0; b < T[0].length; b++)
      if (typeof T[0][b] != "string")
        return !0;
    return !1;
  }, v.Glob = _, t(_, i);
  function _(m, E, $) {
    if (typeof E == "function" && ($ = E, E = null), E && E.sync) {
      if ($)
        throw new TypeError("callback provided to sync glob");
      return new x(m, E);
    }
    if (!(this instanceof _))
      return new _(m, E, $);
    o(this, m, E), this._didRealPath = !1;
    var A = this.minimatch.set.length;
    this.matches = new Array(A), typeof $ == "function" && ($ = p($), this.on("error", $), this.on("end", function(L) {
      $(null, L);
    }));
    var T = this;
    if (this._processing = 0, this._emitQueue = [], this._processQueue = [], this.paused = !1, this.noprocess)
      return this;
    if (A === 0)
      return O();
    for (var b = !0, I = 0; I < A; I++)
      this._process(this.minimatch.set[I], I, !1, O);
    b = !1;
    function O() {
      --T._processing, T._processing <= 0 && (b ? process.nextTick(function() {
        T._finish();
      }) : T._finish());
    }
  }
  _.prototype._finish = function() {
    if (a(this instanceof _), !this.aborted) {
      if (this.realpath && !this._didRealpath)
        return this._realpath();
      h.finish(this), this.emit("end", this.found);
    }
  }, _.prototype._realpath = function() {
    if (this._didRealpath)
      return;
    this._didRealpath = !0;
    var m = this.matches.length;
    if (m === 0)
      return this._finish();
    for (var E = this, $ = 0; $ < this.matches.length; $++)
      this._realpathSet($, A);
    function A() {
      --m === 0 && E._finish();
    }
  }, _.prototype._realpathSet = function(m, E) {
    var $ = this.matches[m];
    if (!$)
      return E();
    var A = Object.keys($), T = this, b = A.length;
    if (b === 0)
      return E();
    var I = this.matches[m] = /* @__PURE__ */ Object.create(null);
    A.forEach(function(O, L) {
      O = T._makeAbs(O), e.realpath(O, T.realpathCache, function(B, N) {
        B ? B.syscall === "stat" ? I[O] = !0 : T.emit("error", B) : I[N] = !0, --b === 0 && (T.matches[m] = I, E());
      });
    });
  }, _.prototype._mark = function(m) {
    return h.mark(this, m);
  }, _.prototype._makeAbs = function(m) {
    return h.makeAbs(this, m);
  }, _.prototype.abort = function() {
    this.aborted = !0, this.emit("abort");
  }, _.prototype.pause = function() {
    this.paused || (this.paused = !0, this.emit("pause"));
  }, _.prototype.resume = function() {
    if (this.paused) {
      if (this.emit("resume"), this.paused = !1, this._emitQueue.length) {
        var m = this._emitQueue.slice(0);
        this._emitQueue.length = 0;
        for (var E = 0; E < m.length; E++) {
          var $ = m[E];
          this._emitMatch($[0], $[1]);
        }
      }
      if (this._processQueue.length) {
        var A = this._processQueue.slice(0);
        this._processQueue.length = 0;
        for (var E = 0; E < A.length; E++) {
          var T = A[E];
          this._processing--, this._process(T[0], T[1], T[2], T[3]);
        }
      }
    }
  }, _.prototype._process = function(m, E, $, A) {
    if (a(this instanceof _), a(typeof A == "function"), !this.aborted) {
      if (this._processing++, this.paused) {
        this._processQueue.push([m, E, $, A]);
        return;
      }
      for (var T = 0; typeof m[T] == "string"; )
        T++;
      var b;
      switch (T) {
        case m.length:
          this._processSimple(m.join("/"), E, A);
          return;
        case 0:
          b = null;
          break;
        default:
          b = m.slice(0, T).join("/");
          break;
      }
      var I = m.slice(T), O;
      b === null ? O = "." : ((s(b) || s(m.map(function(N) {
        return typeof N == "string" ? N : "[*]";
      }).join("/"))) && (!b || !s(b)) && (b = "/" + b), O = b);
      var L = this._makeAbs(O);
      if (u(this, O))
        return A();
      var B = I[0] === r.GLOBSTAR;
      B ? this._processGlobStar(b, O, L, I, E, $, A) : this._processReaddir(b, O, L, I, E, $, A);
    }
  }, _.prototype._processReaddir = function(m, E, $, A, T, b, I) {
    var O = this;
    this._readdir($, b, function(L, B) {
      return O._processReaddir2(m, E, $, A, T, b, B, I);
    });
  }, _.prototype._processReaddir2 = function(m, E, $, A, T, b, I, O) {
    if (!I)
      return O();
    for (var L = A[0], B = !!this.minimatch.negate, N = L._glob, P = this.dot || N.charAt(0) === ".", W = [], w = 0; w < I.length; w++) {
      var S = I[w];
      if (S.charAt(0) !== "." || P) {
        var C;
        B && !m ? C = !S.match(L) : C = S.match(L), C && W.push(S);
      }
    }
    var j = W.length;
    if (j === 0)
      return O();
    if (A.length === 1 && !this.mark && !this.stat) {
      this.matches[T] || (this.matches[T] = /* @__PURE__ */ Object.create(null));
      for (var w = 0; w < j; w++) {
        var S = W[w];
        m && (m !== "/" ? S = m + "/" + S : S = m + S), S.charAt(0) === "/" && !this.nomount && (S = n.join(this.root, S)), this._emitMatch(T, S);
      }
      return O();
    }
    A.shift();
    for (var w = 0; w < j; w++) {
      var S = W[w];
      m && (m !== "/" ? S = m + "/" + S : S = m + S), this._process([S].concat(A), T, b, O);
    }
    O();
  }, _.prototype._emitMatch = function(m, E) {
    if (!this.aborted && !c(this, E)) {
      if (this.paused) {
        this._emitQueue.push([m, E]);
        return;
      }
      var $ = s(E) ? E : this._makeAbs(E);
      if (this.mark && (E = this._mark(E)), this.absolute && (E = $), !this.matches[m][E]) {
        if (this.nodir) {
          var A = this.cache[$];
          if (A === "DIR" || Array.isArray(A))
            return;
        }
        this.matches[m][E] = !0;
        var T = this.statCache[$];
        T && this.emit("stat", E, T), this.emit("match", E);
      }
    }
  }, _.prototype._readdirInGlobStar = function(m, E) {
    if (this.aborted)
      return;
    if (this.follow)
      return this._readdir(m, !1, E);
    var $ = "lstat\0" + m, A = this, T = g($, b);
    T && A.fs.lstat(m, T);
    function b(I, O) {
      if (I && I.code === "ENOENT")
        return E();
      var L = O && O.isSymbolicLink();
      A.symlinks[m] = L, !L && O && !O.isDirectory() ? (A.cache[m] = "FILE", E()) : A._readdir(m, !1, E);
    }
  }, _.prototype._readdir = function(m, E, $) {
    if (!this.aborted && ($ = g("readdir\0" + m + "\0" + E, $), !!$)) {
      if (E && !d(this.symlinks, m))
        return this._readdirInGlobStar(m, $);
      if (d(this.cache, m)) {
        var A = this.cache[m];
        if (!A || A === "FILE")
          return $();
        if (Array.isArray(A))
          return $(null, A);
      }
      var T = this;
      T.fs.readdir(m, R(this, m, $));
    }
  };
  function R(m, E, $) {
    return function(A, T) {
      A ? m._readdirError(E, A, $) : m._readdirEntries(E, T, $);
    };
  }
  return _.prototype._readdirEntries = function(m, E, $) {
    if (!this.aborted) {
      if (!this.mark && !this.stat)
        for (var A = 0; A < E.length; A++) {
          var T = E[A];
          m === "/" ? T = m + T : T = m + "/" + T, this.cache[T] = !0;
        }
      return this.cache[m] = E, $(null, E);
    }
  }, _.prototype._readdirError = function(m, E, $) {
    if (!this.aborted) {
      switch (E.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var A = this._makeAbs(m);
          if (this.cache[A] = "FILE", A === this.cwdAbs) {
            var T = new Error(E.code + " invalid cwd " + this.cwd);
            T.path = this.cwd, T.code = E.code, this.emit("error", T), this.abort();
          }
          break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(m)] = !1;
          break;
        default:
          this.cache[this._makeAbs(m)] = !1, this.strict && (this.emit("error", E), this.abort()), this.silent || console.error("glob error", E);
          break;
      }
      return $();
    }
  }, _.prototype._processGlobStar = function(m, E, $, A, T, b, I) {
    var O = this;
    this._readdir($, b, function(L, B) {
      O._processGlobStar2(m, E, $, A, T, b, B, I);
    });
  }, _.prototype._processGlobStar2 = function(m, E, $, A, T, b, I, O) {
    if (!I)
      return O();
    var L = A.slice(1), B = m ? [m] : [], N = B.concat(L);
    this._process(N, T, !1, O);
    var P = this.symlinks[$], W = I.length;
    if (P && b)
      return O();
    for (var w = 0; w < W; w++) {
      var S = I[w];
      if (!(S.charAt(0) === "." && !this.dot)) {
        var C = B.concat(I[w], L);
        this._process(C, T, !0, O);
        var j = B.concat(I[w], A);
        this._process(j, T, !0, O);
      }
    }
    O();
  }, _.prototype._processSimple = function(m, E, $) {
    var A = this;
    this._stat(m, function(T, b) {
      A._processSimple2(m, E, T, b, $);
    });
  }, _.prototype._processSimple2 = function(m, E, $, A, T) {
    if (this.matches[E] || (this.matches[E] = /* @__PURE__ */ Object.create(null)), !A)
      return T();
    if (m && s(m) && !this.nomount) {
      var b = /[\/\\]$/.test(m);
      m.charAt(0) === "/" ? m = n.join(this.root, m) : (m = n.resolve(this.root, m), b && (m += "/"));
    }
    process.platform === "win32" && (m = m.replace(/\\/g, "/")), this._emitMatch(E, m), T();
  }, _.prototype._stat = function(m, E) {
    var $ = this._makeAbs(m), A = m.slice(-1) === "/";
    if (m.length > this.maxLength)
      return E();
    if (!this.stat && d(this.cache, $)) {
      var T = this.cache[$];
      if (Array.isArray(T) && (T = "DIR"), !A || T === "DIR")
        return E(null, T);
      if (A && T === "FILE")
        return E();
    }
    var b = this.statCache[$];
    if (b !== void 0) {
      if (b === !1)
        return E(null, b);
      var I = b.isDirectory() ? "DIR" : "FILE";
      return A && I === "FILE" ? E() : E(null, I, b);
    }
    var O = this, L = g("stat\0" + $, B);
    L && O.fs.lstat($, L);
    function B(N, P) {
      if (P && P.isSymbolicLink())
        return O.fs.stat($, function(W, w) {
          W ? O._stat2(m, $, null, P, E) : O._stat2(m, $, W, w, E);
        });
      O._stat2(m, $, N, P, E);
    }
  }, _.prototype._stat2 = function(m, E, $, A, T) {
    if ($ && ($.code === "ENOENT" || $.code === "ENOTDIR"))
      return this.statCache[E] = !1, T();
    var b = m.slice(-1) === "/";
    if (this.statCache[E] = A, E.slice(-1) === "/" && A && !A.isDirectory())
      return T(null, !1, A);
    var I = !0;
    return A && (I = A.isDirectory() ? "DIR" : "FILE"), this.cache[E] = this.cache[E] || I, b && I === "FILE" ? T() : T(null, I, A);
  }, Ai;
}
const ne = $n, Mo = We, Ha = Qe;
let Pt;
try {
  Pt = Bo();
} catch {
}
const Cc = {
  nosort: !0,
  silent: !0
};
let $i = 0;
const sr = process.platform === "win32", Uo = (e) => {
  if ([
    "unlink",
    "chmod",
    "stat",
    "lstat",
    "rmdir",
    "readdir"
  ].forEach((t) => {
    e[t] = e[t] || Ha[t], t = t + "Sync", e[t] = e[t] || Ha[t];
  }), e.maxBusyTries = e.maxBusyTries || 3, e.emfileWait = e.emfileWait || 1e3, e.glob === !1 && (e.disableGlob = !0), e.disableGlob !== !0 && Pt === void 0)
    throw Error("glob dependency not found, set `options.disableGlob = true` if intentional");
  e.disableGlob = e.disableGlob || !1, e.glob = e.glob || Cc;
}, Wn = (e, r, t) => {
  typeof r == "function" && (t = r, r = {}), ne(e, "rimraf: missing path"), ne.equal(typeof e, "string", "rimraf: path should be a string"), ne.equal(typeof t, "function", "rimraf: callback function required"), ne(r, "rimraf: invalid options argument provided"), ne.equal(typeof r, "object", "rimraf: options should be object"), Uo(r);
  let i = 0, n = null, a = 0;
  const s = (h) => {
    n = n || h, --a === 0 && t(n);
  }, f = (h, o) => {
    if (h)
      return t(h);
    if (a = o.length, a === 0)
      return t();
    o.forEach((d) => {
      const g = (u) => {
        if (u) {
          if ((u.code === "EBUSY" || u.code === "ENOTEMPTY" || u.code === "EPERM") && i < r.maxBusyTries)
            return i++, setTimeout(() => Ii(d, r, g), i * 100);
          if (u.code === "EMFILE" && $i < r.emfileWait)
            return setTimeout(() => Ii(d, r, g), $i++);
          u.code === "ENOENT" && (u = null);
        }
        $i = 0, s(u);
      };
      Ii(d, r, g);
    });
  };
  if (r.disableGlob || !Pt.hasMagic(e))
    return f(null, [e]);
  r.lstat(e, (h, o) => {
    if (!h)
      return f(null, [e]);
    Pt(e, r.glob, f);
  });
}, Ii = (e, r, t) => {
  ne(e), ne(r), ne(typeof t == "function"), r.lstat(e, (i, n) => {
    if (i && i.code === "ENOENT")
      return t(null);
    if (i && i.code === "EPERM" && sr && Va(e, r, i, t), n && n.isDirectory())
      return Ur(e, r, i, t);
    r.unlink(e, (a) => {
      if (a) {
        if (a.code === "ENOENT")
          return t(null);
        if (a.code === "EPERM")
          return sr ? Va(e, r, a, t) : Ur(e, r, a, t);
        if (a.code === "EISDIR")
          return Ur(e, r, a, t);
      }
      return t(a);
    });
  });
}, Va = (e, r, t, i) => {
  ne(e), ne(r), ne(typeof i == "function"), r.chmod(e, 438, (n) => {
    n ? i(n.code === "ENOENT" ? null : t) : r.stat(e, (a, s) => {
      a ? i(a.code === "ENOENT" ? null : t) : s.isDirectory() ? Ur(e, r, t, i) : r.unlink(e, i);
    });
  });
}, Xa = (e, r, t) => {
  ne(e), ne(r);
  try {
    r.chmodSync(e, 438);
  } catch (n) {
    if (n.code === "ENOENT")
      return;
    throw t;
  }
  let i;
  try {
    i = r.statSync(e);
  } catch (n) {
    if (n.code === "ENOENT")
      return;
    throw t;
  }
  i.isDirectory() ? zr(e, r, t) : r.unlinkSync(e);
}, Ur = (e, r, t, i) => {
  ne(e), ne(r), ne(typeof i == "function"), r.rmdir(e, (n) => {
    n && (n.code === "ENOTEMPTY" || n.code === "EEXIST" || n.code === "EPERM") ? Nc(e, r, i) : n && n.code === "ENOTDIR" ? i(t) : i(n);
  });
}, Nc = (e, r, t) => {
  ne(e), ne(r), ne(typeof t == "function"), r.readdir(e, (i, n) => {
    if (i)
      return t(i);
    let a = n.length;
    if (a === 0)
      return r.rmdir(e, t);
    let s;
    n.forEach((f) => {
      Wn(Mo.join(e, f), r, (h) => {
        if (!s) {
          if (h)
            return t(s = h);
          --a === 0 && r.rmdir(e, t);
        }
      });
    });
  });
}, zo = (e, r) => {
  r = r || {}, Uo(r), ne(e, "rimraf: missing path"), ne.equal(typeof e, "string", "rimraf: path should be a string"), ne(r, "rimraf: missing options"), ne.equal(typeof r, "object", "rimraf: options should be object");
  let t;
  if (r.disableGlob || !Pt.hasMagic(e))
    t = [e];
  else
    try {
      r.lstatSync(e), t = [e];
    } catch {
      t = Pt.sync(e, r.glob);
    }
  if (t.length)
    for (let i = 0; i < t.length; i++) {
      const n = t[i];
      let a;
      try {
        a = r.lstatSync(n);
      } catch (s) {
        if (s.code === "ENOENT")
          return;
        s.code === "EPERM" && sr && Xa(n, r, s);
      }
      try {
        a && a.isDirectory() ? zr(n, r, null) : r.unlinkSync(n);
      } catch (s) {
        if (s.code === "ENOENT")
          return;
        if (s.code === "EPERM")
          return sr ? Xa(n, r, s) : zr(n, r, s);
        if (s.code !== "EISDIR")
          throw s;
        zr(n, r, s);
      }
    }
}, zr = (e, r, t) => {
  ne(e), ne(r);
  try {
    r.rmdirSync(e);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    if (i.code === "ENOTDIR")
      throw t;
    (i.code === "ENOTEMPTY" || i.code === "EEXIST" || i.code === "EPERM") && Lc(e, r);
  }
}, Lc = (e, r) => {
  ne(e), ne(r), r.readdirSync(e).forEach((n) => zo(Mo.join(e, n), r));
  const t = sr ? 100 : 1;
  let i = 0;
  do {
    let n = !0;
    try {
      const a = r.rmdirSync(e, r);
      return n = !1, a;
    } finally {
      if (++i < t && n)
        continue;
    }
  } while (!0);
};
var Dc = Wn;
Wn.sync = zo;
var Gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.changePermissions = e.downloadFile = e.getPath = void 0;
  const r = ko, t = Qe, i = We, n = Al, a = () => {
    const o = r.app.getPath("userData");
    return i.resolve(`${o}/extensions`);
  };
  e.getPath = a;
  const s = r.net ? r.net.request : n.get, f = (o, d) => new Promise((g, u) => {
    const c = s(o);
    c.on("response", (p) => {
      if (p.statusCode && p.statusCode >= 300 && p.statusCode < 400 && p.headers.location)
        return e.downloadFile(p.headers.location, d).then(g).catch(u);
      p.pipe(t.createWriteStream(d)).on("close", g), p.on("error", u);
    }), c.on("error", u), c.end();
  });
  e.downloadFile = f;
  const h = (o, d) => {
    t.readdirSync(o).forEach((u) => {
      const c = i.join(o, u);
      t.chmodSync(c, parseInt(`${d}`, 8)), t.statSync(c).isDirectory() && e.changePermissions(c, d);
    });
  };
  e.changePermissions = h;
})(Gn);
var Mt = {}, Ci = {}, he = {}, Tr = { exports: {} }, Ar = { exports: {} }, Ya;
function ni() {
  if (Ya) return Ar.exports;
  Ya = 1, typeof process > "u" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0 ? Ar.exports = { nextTick: e } : Ar.exports = process;
  function e(r, t, i, n) {
    if (typeof r != "function")
      throw new TypeError('"callback" argument must be a function');
    var a = arguments.length, s, f;
    switch (a) {
      case 0:
      case 1:
        return process.nextTick(r);
      case 2:
        return process.nextTick(function() {
          r.call(null, t);
        });
      case 3:
        return process.nextTick(function() {
          r.call(null, t, i);
        });
      case 4:
        return process.nextTick(function() {
          r.call(null, t, i, n);
        });
      default:
        for (s = new Array(a - 1), f = 0; f < s.length; )
          s[f++] = arguments[f];
        return process.nextTick(function() {
          r.apply(null, s);
        });
    }
  }
  return Ar.exports;
}
var Ni, Ka;
function Pc() {
  if (Ka) return Ni;
  Ka = 1;
  var e = {}.toString;
  return Ni = Array.isArray || function(r) {
    return e.call(r) == "[object Array]";
  }, Ni;
}
var Li, Ja;
function Wo() {
  return Ja || (Ja = 1, Li = Oo), Li;
}
var $r = { exports: {} }, Qa;
function ai() {
  return Qa || (Qa = 1, function(e, r) {
    var t = $l, i = t.Buffer;
    function n(s, f) {
      for (var h in s)
        f[h] = s[h];
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = t : (n(t, r), r.Buffer = a);
    function a(s, f, h) {
      return i(s, f, h);
    }
    n(i, a), a.from = function(s, f, h) {
      if (typeof s == "number")
        throw new TypeError("Argument must not be a number");
      return i(s, f, h);
    }, a.alloc = function(s, f, h) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      var o = i(s);
      return f !== void 0 ? typeof h == "string" ? o.fill(f, h) : o.fill(f) : o.fill(0), o;
    }, a.allocUnsafe = function(s) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      return i(s);
    }, a.allocUnsafeSlow = function(s) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      return t.SlowBuffer(s);
    };
  }($r, $r.exports)), $r.exports;
}
var ve = {}, es;
function dr() {
  if (es) return ve;
  es = 1;
  function e(v) {
    return Array.isArray ? Array.isArray(v) : p(v) === "[object Array]";
  }
  ve.isArray = e;
  function r(v) {
    return typeof v == "boolean";
  }
  ve.isBoolean = r;
  function t(v) {
    return v === null;
  }
  ve.isNull = t;
  function i(v) {
    return v == null;
  }
  ve.isNullOrUndefined = i;
  function n(v) {
    return typeof v == "number";
  }
  ve.isNumber = n;
  function a(v) {
    return typeof v == "string";
  }
  ve.isString = a;
  function s(v) {
    return typeof v == "symbol";
  }
  ve.isSymbol = s;
  function f(v) {
    return v === void 0;
  }
  ve.isUndefined = f;
  function h(v) {
    return p(v) === "[object RegExp]";
  }
  ve.isRegExp = h;
  function o(v) {
    return typeof v == "object" && v !== null;
  }
  ve.isObject = o;
  function d(v) {
    return p(v) === "[object Date]";
  }
  ve.isDate = d;
  function g(v) {
    return p(v) === "[object Error]" || v instanceof Error;
  }
  ve.isError = g;
  function u(v) {
    return typeof v == "function";
  }
  ve.isFunction = u;
  function c(v) {
    return v === null || typeof v == "boolean" || typeof v == "number" || typeof v == "string" || typeof v == "symbol" || // ES6 symbol
    typeof v > "u";
  }
  ve.isPrimitive = c, ve.isBuffer = Buffer.isBuffer;
  function p(v) {
    return Object.prototype.toString.call(v);
  }
  return ve;
}
var Di = { exports: {} }, ts;
function jc() {
  return ts || (ts = 1, function(e) {
    function r(a, s) {
      if (!(a instanceof s))
        throw new TypeError("Cannot call a class as a function");
    }
    var t = ai().Buffer, i = In;
    function n(a, s, f) {
      a.copy(s, f);
    }
    e.exports = function() {
      function a() {
        r(this, a), this.head = null, this.tail = null, this.length = 0;
      }
      return a.prototype.push = function(f) {
        var h = { data: f, next: null };
        this.length > 0 ? this.tail.next = h : this.head = h, this.tail = h, ++this.length;
      }, a.prototype.unshift = function(f) {
        var h = { data: f, next: this.head };
        this.length === 0 && (this.tail = h), this.head = h, ++this.length;
      }, a.prototype.shift = function() {
        if (this.length !== 0) {
          var f = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, f;
        }
      }, a.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0;
      }, a.prototype.join = function(f) {
        if (this.length === 0) return "";
        for (var h = this.head, o = "" + h.data; h = h.next; )
          o += f + h.data;
        return o;
      }, a.prototype.concat = function(f) {
        if (this.length === 0) return t.alloc(0);
        for (var h = t.allocUnsafe(f >>> 0), o = this.head, d = 0; o; )
          n(o.data, h, d), d += o.data.length, o = o.next;
        return h;
      }, a;
    }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() {
      var a = i.inspect({ length: this.length });
      return this.constructor.name + " " + a;
    });
  }(Di)), Di.exports;
}
var Pi, rs;
function Go() {
  if (rs) return Pi;
  rs = 1;
  var e = ni();
  function r(n, a) {
    var s = this, f = this._readableState && this._readableState.destroyed, h = this._writableState && this._writableState.destroyed;
    return f || h ? (a ? a(n) : n && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, e.nextTick(i, this, n)) : e.nextTick(i, this, n)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(n || null, function(o) {
      !a && o ? s._writableState ? s._writableState.errorEmitted || (s._writableState.errorEmitted = !0, e.nextTick(i, s, o)) : e.nextTick(i, s, o) : a && a(o);
    }), this);
  }
  function t() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  }
  function i(n, a) {
    n.emit("error", a);
  }
  return Pi = {
    destroy: r,
    undestroy: t
  }, Pi;
}
var ji, is;
function Fc() {
  return is || (is = 1, ji = In.deprecate), ji;
}
var Fi, ns;
function Zo() {
  if (ns) return Fi;
  ns = 1;
  var e = ni();
  Fi = v;
  function r(w) {
    var S = this;
    this.next = null, this.entry = null, this.finish = function() {
      W(S, w);
    };
  }
  var t = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : e.nextTick, i;
  v.WritableState = c;
  var n = Object.create(dr());
  n.inherits = Bt();
  var a = {
    deprecate: Fc()
  }, s = Wo(), f = ai().Buffer, h = (typeof de < "u" ? de : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function o(w) {
    return f.from(w);
  }
  function d(w) {
    return f.isBuffer(w) || w instanceof h;
  }
  var g = Go();
  n.inherits(v, s);
  function u() {
  }
  function c(w, S) {
    i = i || jt(), w = w || {};
    var C = S instanceof i;
    this.objectMode = !!w.objectMode, C && (this.objectMode = this.objectMode || !!w.writableObjectMode);
    var j = w.highWaterMark, U = w.writableHighWaterMark, G = this.objectMode ? 16 : 16 * 1024;
    j || j === 0 ? this.highWaterMark = j : C && (U || U === 0) ? this.highWaterMark = U : this.highWaterMark = G, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var H = w.decodeStrings === !1;
    this.decodeStrings = !H, this.defaultEncoding = w.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(X) {
      A(S, X);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new r(this);
  }
  c.prototype.getBuffer = function() {
    for (var S = this.bufferedRequest, C = []; S; )
      C.push(S), S = S.next;
    return C;
  }, function() {
    try {
      Object.defineProperty(c.prototype, "buffer", {
        get: a.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var p;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (p = Function.prototype[Symbol.hasInstance], Object.defineProperty(v, Symbol.hasInstance, {
    value: function(w) {
      return p.call(this, w) ? !0 : this !== v ? !1 : w && w._writableState instanceof c;
    }
  })) : p = function(w) {
    return w instanceof this;
  };
  function v(w) {
    if (i = i || jt(), !p.call(v, this) && !(this instanceof i))
      return new v(w);
    this._writableState = new c(w, this), this.writable = !0, w && (typeof w.write == "function" && (this._write = w.write), typeof w.writev == "function" && (this._writev = w.writev), typeof w.destroy == "function" && (this._destroy = w.destroy), typeof w.final == "function" && (this._final = w.final)), s.call(this);
  }
  v.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function x(w, S) {
    var C = new Error("write after end");
    w.emit("error", C), e.nextTick(S, C);
  }
  function l(w, S, C, j) {
    var U = !0, G = !1;
    return C === null ? G = new TypeError("May not write null values to stream") : typeof C != "string" && C !== void 0 && !S.objectMode && (G = new TypeError("Invalid non-string/buffer chunk")), G && (w.emit("error", G), e.nextTick(j, G), U = !1), U;
  }
  v.prototype.write = function(w, S, C) {
    var j = this._writableState, U = !1, G = !j.objectMode && d(w);
    return G && !f.isBuffer(w) && (w = o(w)), typeof S == "function" && (C = S, S = null), G ? S = "buffer" : S || (S = j.defaultEncoding), typeof C != "function" && (C = u), j.ended ? x(this, C) : (G || l(this, j, w, C)) && (j.pendingcb++, U = R(this, j, G, w, S, C)), U;
  }, v.prototype.cork = function() {
    var w = this._writableState;
    w.corked++;
  }, v.prototype.uncork = function() {
    var w = this._writableState;
    w.corked && (w.corked--, !w.writing && !w.corked && !w.bufferProcessing && w.bufferedRequest && I(this, w));
  }, v.prototype.setDefaultEncoding = function(S) {
    if (typeof S == "string" && (S = S.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((S + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + S);
    return this._writableState.defaultEncoding = S, this;
  };
  function _(w, S, C) {
    return !w.objectMode && w.decodeStrings !== !1 && typeof S == "string" && (S = f.from(S, C)), S;
  }
  Object.defineProperty(v.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function R(w, S, C, j, U, G) {
    if (!C) {
      var H = _(S, j, U);
      j !== H && (C = !0, U = "buffer", j = H);
    }
    var X = S.objectMode ? 1 : j.length;
    S.length += X;
    var J = S.length < S.highWaterMark;
    if (J || (S.needDrain = !0), S.writing || S.corked) {
      var Y = S.lastBufferedRequest;
      S.lastBufferedRequest = {
        chunk: j,
        encoding: U,
        isBuf: C,
        callback: G,
        next: null
      }, Y ? Y.next = S.lastBufferedRequest : S.bufferedRequest = S.lastBufferedRequest, S.bufferedRequestCount += 1;
    } else
      m(w, S, !1, X, j, U, G);
    return J;
  }
  function m(w, S, C, j, U, G, H) {
    S.writelen = j, S.writecb = H, S.writing = !0, S.sync = !0, C ? w._writev(U, S.onwrite) : w._write(U, G, S.onwrite), S.sync = !1;
  }
  function E(w, S, C, j, U) {
    --S.pendingcb, C ? (e.nextTick(U, j), e.nextTick(N, w, S), w._writableState.errorEmitted = !0, w.emit("error", j)) : (U(j), w._writableState.errorEmitted = !0, w.emit("error", j), N(w, S));
  }
  function $(w) {
    w.writing = !1, w.writecb = null, w.length -= w.writelen, w.writelen = 0;
  }
  function A(w, S) {
    var C = w._writableState, j = C.sync, U = C.writecb;
    if ($(C), S) E(w, C, j, S, U);
    else {
      var G = O(C);
      !G && !C.corked && !C.bufferProcessing && C.bufferedRequest && I(w, C), j ? t(T, w, C, G, U) : T(w, C, G, U);
    }
  }
  function T(w, S, C, j) {
    C || b(w, S), S.pendingcb--, j(), N(w, S);
  }
  function b(w, S) {
    S.length === 0 && S.needDrain && (S.needDrain = !1, w.emit("drain"));
  }
  function I(w, S) {
    S.bufferProcessing = !0;
    var C = S.bufferedRequest;
    if (w._writev && C && C.next) {
      var j = S.bufferedRequestCount, U = new Array(j), G = S.corkedRequestsFree;
      G.entry = C;
      for (var H = 0, X = !0; C; )
        U[H] = C, C.isBuf || (X = !1), C = C.next, H += 1;
      U.allBuffers = X, m(w, S, !0, S.length, U, "", G.finish), S.pendingcb++, S.lastBufferedRequest = null, G.next ? (S.corkedRequestsFree = G.next, G.next = null) : S.corkedRequestsFree = new r(S), S.bufferedRequestCount = 0;
    } else {
      for (; C; ) {
        var J = C.chunk, Y = C.encoding, y = C.callback, k = S.objectMode ? 1 : J.length;
        if (m(w, S, !1, k, J, Y, y), C = C.next, S.bufferedRequestCount--, S.writing)
          break;
      }
      C === null && (S.lastBufferedRequest = null);
    }
    S.bufferedRequest = C, S.bufferProcessing = !1;
  }
  v.prototype._write = function(w, S, C) {
    C(new Error("_write() is not implemented"));
  }, v.prototype._writev = null, v.prototype.end = function(w, S, C) {
    var j = this._writableState;
    typeof w == "function" ? (C = w, w = null, S = null) : typeof S == "function" && (C = S, S = null), w != null && this.write(w, S), j.corked && (j.corked = 1, this.uncork()), j.ending || P(this, j, C);
  };
  function O(w) {
    return w.ending && w.length === 0 && w.bufferedRequest === null && !w.finished && !w.writing;
  }
  function L(w, S) {
    w._final(function(C) {
      S.pendingcb--, C && w.emit("error", C), S.prefinished = !0, w.emit("prefinish"), N(w, S);
    });
  }
  function B(w, S) {
    !S.prefinished && !S.finalCalled && (typeof w._final == "function" ? (S.pendingcb++, S.finalCalled = !0, e.nextTick(L, w, S)) : (S.prefinished = !0, w.emit("prefinish")));
  }
  function N(w, S) {
    var C = O(S);
    return C && (B(w, S), S.pendingcb === 0 && (S.finished = !0, w.emit("finish"))), C;
  }
  function P(w, S, C) {
    S.ending = !0, N(w, S), C && (S.finished ? e.nextTick(C) : w.once("finish", C)), S.ended = !0, w.writable = !1;
  }
  function W(w, S, C) {
    var j = w.entry;
    for (w.entry = null; j; ) {
      var U = j.callback;
      S.pendingcb--, U(C), j = j.next;
    }
    S.corkedRequestsFree.next = w;
  }
  return Object.defineProperty(v.prototype, "destroyed", {
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(w) {
      this._writableState && (this._writableState.destroyed = w);
    }
  }), v.prototype.destroy = g.destroy, v.prototype._undestroy = g.undestroy, v.prototype._destroy = function(w, S) {
    this.end(), S(w);
  }, Fi;
}
var Bi, as;
function jt() {
  if (as) return Bi;
  as = 1;
  var e = ni(), r = Object.keys || function(g) {
    var u = [];
    for (var c in g)
      u.push(c);
    return u;
  };
  Bi = h;
  var t = Object.create(dr());
  t.inherits = Bt();
  var i = qo(), n = Zo();
  t.inherits(h, i);
  for (var a = r(n.prototype), s = 0; s < a.length; s++) {
    var f = a[s];
    h.prototype[f] || (h.prototype[f] = n.prototype[f]);
  }
  function h(g) {
    if (!(this instanceof h)) return new h(g);
    i.call(this, g), n.call(this, g), g && g.readable === !1 && (this.readable = !1), g && g.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, g && g.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", o);
  }
  Object.defineProperty(h.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function o() {
    this.allowHalfOpen || this._writableState.ended || e.nextTick(d, this);
  }
  function d(g) {
    g.end();
  }
  return Object.defineProperty(h.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(g) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = g, this._writableState.destroyed = g);
    }
  }), h.prototype._destroy = function(g, u) {
    this.push(null), this.end(), e.nextTick(u, g);
  }, Bi;
}
var Mi = {}, ss;
function os() {
  if (ss) return Mi;
  ss = 1;
  var e = ai().Buffer, r = e.isEncoding || function(l) {
    switch (l = "" + l, l && l.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function t(l) {
    if (!l) return "utf8";
    for (var _; ; )
      switch (l) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return l;
        default:
          if (_) return;
          l = ("" + l).toLowerCase(), _ = !0;
      }
  }
  function i(l) {
    var _ = t(l);
    if (typeof _ != "string" && (e.isEncoding === r || !r(l))) throw new Error("Unknown encoding: " + l);
    return _ || l;
  }
  Mi.StringDecoder = n;
  function n(l) {
    this.encoding = i(l);
    var _;
    switch (this.encoding) {
      case "utf16le":
        this.text = g, this.end = u, _ = 4;
        break;
      case "utf8":
        this.fillLast = h, _ = 4;
        break;
      case "base64":
        this.text = c, this.end = p, _ = 3;
        break;
      default:
        this.write = v, this.end = x;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(_);
  }
  n.prototype.write = function(l) {
    if (l.length === 0) return "";
    var _, R;
    if (this.lastNeed) {
      if (_ = this.fillLast(l), _ === void 0) return "";
      R = this.lastNeed, this.lastNeed = 0;
    } else
      R = 0;
    return R < l.length ? _ ? _ + this.text(l, R) : this.text(l, R) : _ || "";
  }, n.prototype.end = d, n.prototype.text = o, n.prototype.fillLast = function(l) {
    if (this.lastNeed <= l.length)
      return l.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    l.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, l.length), this.lastNeed -= l.length;
  };
  function a(l) {
    return l <= 127 ? 0 : l >> 5 === 6 ? 2 : l >> 4 === 14 ? 3 : l >> 3 === 30 ? 4 : l >> 6 === 2 ? -1 : -2;
  }
  function s(l, _, R) {
    var m = _.length - 1;
    if (m < R) return 0;
    var E = a(_[m]);
    return E >= 0 ? (E > 0 && (l.lastNeed = E - 1), E) : --m < R || E === -2 ? 0 : (E = a(_[m]), E >= 0 ? (E > 0 && (l.lastNeed = E - 2), E) : --m < R || E === -2 ? 0 : (E = a(_[m]), E >= 0 ? (E > 0 && (E === 2 ? E = 0 : l.lastNeed = E - 3), E) : 0));
  }
  function f(l, _, R) {
    if ((_[0] & 192) !== 128)
      return l.lastNeed = 0, "�";
    if (l.lastNeed > 1 && _.length > 1) {
      if ((_[1] & 192) !== 128)
        return l.lastNeed = 1, "�";
      if (l.lastNeed > 2 && _.length > 2 && (_[2] & 192) !== 128)
        return l.lastNeed = 2, "�";
    }
  }
  function h(l) {
    var _ = this.lastTotal - this.lastNeed, R = f(this, l);
    if (R !== void 0) return R;
    if (this.lastNeed <= l.length)
      return l.copy(this.lastChar, _, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    l.copy(this.lastChar, _, 0, l.length), this.lastNeed -= l.length;
  }
  function o(l, _) {
    var R = s(this, l, _);
    if (!this.lastNeed) return l.toString("utf8", _);
    this.lastTotal = R;
    var m = l.length - (R - this.lastNeed);
    return l.copy(this.lastChar, 0, m), l.toString("utf8", _, m);
  }
  function d(l) {
    var _ = l && l.length ? this.write(l) : "";
    return this.lastNeed ? _ + "�" : _;
  }
  function g(l, _) {
    if ((l.length - _) % 2 === 0) {
      var R = l.toString("utf16le", _);
      if (R) {
        var m = R.charCodeAt(R.length - 1);
        if (m >= 55296 && m <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = l[l.length - 2], this.lastChar[1] = l[l.length - 1], R.slice(0, -1);
      }
      return R;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = l[l.length - 1], l.toString("utf16le", _, l.length - 1);
  }
  function u(l) {
    var _ = l && l.length ? this.write(l) : "";
    if (this.lastNeed) {
      var R = this.lastTotal - this.lastNeed;
      return _ + this.lastChar.toString("utf16le", 0, R);
    }
    return _;
  }
  function c(l, _) {
    var R = (l.length - _) % 3;
    return R === 0 ? l.toString("base64", _) : (this.lastNeed = 3 - R, this.lastTotal = 3, R === 1 ? this.lastChar[0] = l[l.length - 1] : (this.lastChar[0] = l[l.length - 2], this.lastChar[1] = l[l.length - 1]), l.toString("base64", _, l.length - R));
  }
  function p(l) {
    var _ = l && l.length ? this.write(l) : "";
    return this.lastNeed ? _ + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : _;
  }
  function v(l) {
    return l.toString(this.encoding);
  }
  function x(l) {
    return l && l.length ? this.write(l) : "";
  }
  return Mi;
}
var Ui, fs;
function qo() {
  if (fs) return Ui;
  fs = 1;
  var e = ni();
  Ui = _;
  var r = Pc(), t;
  _.ReadableState = l, Ro.EventEmitter;
  var i = function(y, k) {
    return y.listeners(k).length;
  }, n = Wo(), a = ai().Buffer, s = (typeof de < "u" ? de : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function f(y) {
    return a.from(y);
  }
  function h(y) {
    return a.isBuffer(y) || y instanceof s;
  }
  var o = Object.create(dr());
  o.inherits = Bt();
  var d = In, g = void 0;
  d && d.debuglog ? g = d.debuglog("stream") : g = function() {
  };
  var u = jc(), c = Go(), p;
  o.inherits(_, n);
  var v = ["error", "close", "destroy", "pause", "resume"];
  function x(y, k, M) {
    if (typeof y.prependListener == "function") return y.prependListener(k, M);
    !y._events || !y._events[k] ? y.on(k, M) : r(y._events[k]) ? y._events[k].unshift(M) : y._events[k] = [M, y._events[k]];
  }
  function l(y, k) {
    t = t || jt(), y = y || {};
    var M = k instanceof t;
    this.objectMode = !!y.objectMode, M && (this.objectMode = this.objectMode || !!y.readableObjectMode);
    var Z = y.highWaterMark, Q = y.readableHighWaterMark, V = this.objectMode ? 16 : 16 * 1024;
    Z || Z === 0 ? this.highWaterMark = Z : M && (Q || Q === 0) ? this.highWaterMark = Q : this.highWaterMark = V, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new u(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = y.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, y.encoding && (p || (p = os().StringDecoder), this.decoder = new p(y.encoding), this.encoding = y.encoding);
  }
  function _(y) {
    if (t = t || jt(), !(this instanceof _)) return new _(y);
    this._readableState = new l(y, this), this.readable = !0, y && (typeof y.read == "function" && (this._read = y.read), typeof y.destroy == "function" && (this._destroy = y.destroy)), n.call(this);
  }
  Object.defineProperty(_.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(y) {
      this._readableState && (this._readableState.destroyed = y);
    }
  }), _.prototype.destroy = c.destroy, _.prototype._undestroy = c.undestroy, _.prototype._destroy = function(y, k) {
    this.push(null), k(y);
  }, _.prototype.push = function(y, k) {
    var M = this._readableState, Z;
    return M.objectMode ? Z = !0 : typeof y == "string" && (k = k || M.defaultEncoding, k !== M.encoding && (y = a.from(y, k), k = ""), Z = !0), R(this, y, k, !1, Z);
  }, _.prototype.unshift = function(y) {
    return R(this, y, null, !0, !1);
  };
  function R(y, k, M, Z, Q) {
    var V = y._readableState;
    if (k === null)
      V.reading = !1, I(y, V);
    else {
      var K;
      Q || (K = E(V, k)), K ? y.emit("error", K) : V.objectMode || k && k.length > 0 ? (typeof k != "string" && !V.objectMode && Object.getPrototypeOf(k) !== a.prototype && (k = f(k)), Z ? V.endEmitted ? y.emit("error", new Error("stream.unshift() after end event")) : m(y, V, k, !0) : V.ended ? y.emit("error", new Error("stream.push() after EOF")) : (V.reading = !1, V.decoder && !M ? (k = V.decoder.write(k), V.objectMode || k.length !== 0 ? m(y, V, k, !1) : B(y, V)) : m(y, V, k, !1))) : Z || (V.reading = !1);
    }
    return $(V);
  }
  function m(y, k, M, Z) {
    k.flowing && k.length === 0 && !k.sync ? (y.emit("data", M), y.read(0)) : (k.length += k.objectMode ? 1 : M.length, Z ? k.buffer.unshift(M) : k.buffer.push(M), k.needReadable && O(y)), B(y, k);
  }
  function E(y, k) {
    var M;
    return !h(k) && typeof k != "string" && k !== void 0 && !y.objectMode && (M = new TypeError("Invalid non-string/buffer chunk")), M;
  }
  function $(y) {
    return !y.ended && (y.needReadable || y.length < y.highWaterMark || y.length === 0);
  }
  _.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, _.prototype.setEncoding = function(y) {
    return p || (p = os().StringDecoder), this._readableState.decoder = new p(y), this._readableState.encoding = y, this;
  };
  var A = 8388608;
  function T(y) {
    return y >= A ? y = A : (y--, y |= y >>> 1, y |= y >>> 2, y |= y >>> 4, y |= y >>> 8, y |= y >>> 16, y++), y;
  }
  function b(y, k) {
    return y <= 0 || k.length === 0 && k.ended ? 0 : k.objectMode ? 1 : y !== y ? k.flowing && k.length ? k.buffer.head.data.length : k.length : (y > k.highWaterMark && (k.highWaterMark = T(y)), y <= k.length ? y : k.ended ? k.length : (k.needReadable = !0, 0));
  }
  _.prototype.read = function(y) {
    g("read", y), y = parseInt(y, 10);
    var k = this._readableState, M = y;
    if (y !== 0 && (k.emittedReadable = !1), y === 0 && k.needReadable && (k.length >= k.highWaterMark || k.ended))
      return g("read: emitReadable", k.length, k.ended), k.length === 0 && k.ended ? X(this) : O(this), null;
    if (y = b(y, k), y === 0 && k.ended)
      return k.length === 0 && X(this), null;
    var Z = k.needReadable;
    g("need readable", Z), (k.length === 0 || k.length - y < k.highWaterMark) && (Z = !0, g("length less than watermark", Z)), k.ended || k.reading ? (Z = !1, g("reading or ended", Z)) : Z && (g("do read"), k.reading = !0, k.sync = !0, k.length === 0 && (k.needReadable = !0), this._read(k.highWaterMark), k.sync = !1, k.reading || (y = b(M, k)));
    var Q;
    return y > 0 ? Q = j(y, k) : Q = null, Q === null ? (k.needReadable = !0, y = 0) : k.length -= y, k.length === 0 && (k.ended || (k.needReadable = !0), M !== y && k.ended && X(this)), Q !== null && this.emit("data", Q), Q;
  };
  function I(y, k) {
    if (!k.ended) {
      if (k.decoder) {
        var M = k.decoder.end();
        M && M.length && (k.buffer.push(M), k.length += k.objectMode ? 1 : M.length);
      }
      k.ended = !0, O(y);
    }
  }
  function O(y) {
    var k = y._readableState;
    k.needReadable = !1, k.emittedReadable || (g("emitReadable", k.flowing), k.emittedReadable = !0, k.sync ? e.nextTick(L, y) : L(y));
  }
  function L(y) {
    g("emit readable"), y.emit("readable"), C(y);
  }
  function B(y, k) {
    k.readingMore || (k.readingMore = !0, e.nextTick(N, y, k));
  }
  function N(y, k) {
    for (var M = k.length; !k.reading && !k.flowing && !k.ended && k.length < k.highWaterMark && (g("maybeReadMore read 0"), y.read(0), M !== k.length); )
      M = k.length;
    k.readingMore = !1;
  }
  _.prototype._read = function(y) {
    this.emit("error", new Error("_read() is not implemented"));
  }, _.prototype.pipe = function(y, k) {
    var M = this, Z = this._readableState;
    switch (Z.pipesCount) {
      case 0:
        Z.pipes = y;
        break;
      case 1:
        Z.pipes = [Z.pipes, y];
        break;
      default:
        Z.pipes.push(y);
        break;
    }
    Z.pipesCount += 1, g("pipe count=%d opts=%j", Z.pipesCount, k);
    var Q = (!k || k.end !== !1) && y !== process.stdout && y !== process.stderr, V = Q ? ye : F;
    Z.endEmitted ? e.nextTick(V) : M.once("end", V), y.on("unpipe", K);
    function K(z, q) {
      g("onunpipe"), z === M && q && q.hasUnpiped === !1 && (q.hasUnpiped = !0, xt());
    }
    function ye() {
      g("onend"), y.end();
    }
    var Ze = P(M);
    y.on("drain", Ze);
    var ut = !1;
    function xt() {
      g("cleanup"), y.removeListener("close", Ve), y.removeListener("finish", D), y.removeListener("drain", Ze), y.removeListener("error", He), y.removeListener("unpipe", K), M.removeListener("end", ye), M.removeListener("end", F), M.removeListener("data", qe), ut = !0, Z.awaitDrain && (!y._writableState || y._writableState.needDrain) && Ze();
    }
    var ae = !1;
    M.on("data", qe);
    function qe(z) {
      g("ondata"), ae = !1;
      var q = y.write(z);
      q === !1 && !ae && ((Z.pipesCount === 1 && Z.pipes === y || Z.pipesCount > 1 && Y(Z.pipes, y) !== -1) && !ut && (g("false write response, pause", Z.awaitDrain), Z.awaitDrain++, ae = !0), M.pause());
    }
    function He(z) {
      g("onerror", z), F(), y.removeListener("error", He), i(y, "error") === 0 && y.emit("error", z);
    }
    x(y, "error", He);
    function Ve() {
      y.removeListener("finish", D), F();
    }
    y.once("close", Ve);
    function D() {
      g("onfinish"), y.removeListener("close", Ve), F();
    }
    y.once("finish", D);
    function F() {
      g("unpipe"), M.unpipe(y);
    }
    return y.emit("pipe", M), Z.flowing || (g("pipe resume"), M.resume()), y;
  };
  function P(y) {
    return function() {
      var k = y._readableState;
      g("pipeOnDrain", k.awaitDrain), k.awaitDrain && k.awaitDrain--, k.awaitDrain === 0 && i(y, "data") && (k.flowing = !0, C(y));
    };
  }
  _.prototype.unpipe = function(y) {
    var k = this._readableState, M = { hasUnpiped: !1 };
    if (k.pipesCount === 0) return this;
    if (k.pipesCount === 1)
      return y && y !== k.pipes ? this : (y || (y = k.pipes), k.pipes = null, k.pipesCount = 0, k.flowing = !1, y && y.emit("unpipe", this, M), this);
    if (!y) {
      var Z = k.pipes, Q = k.pipesCount;
      k.pipes = null, k.pipesCount = 0, k.flowing = !1;
      for (var V = 0; V < Q; V++)
        Z[V].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var K = Y(k.pipes, y);
    return K === -1 ? this : (k.pipes.splice(K, 1), k.pipesCount -= 1, k.pipesCount === 1 && (k.pipes = k.pipes[0]), y.emit("unpipe", this, M), this);
  }, _.prototype.on = function(y, k) {
    var M = n.prototype.on.call(this, y, k);
    if (y === "data")
      this._readableState.flowing !== !1 && this.resume();
    else if (y === "readable") {
      var Z = this._readableState;
      !Z.endEmitted && !Z.readableListening && (Z.readableListening = Z.needReadable = !0, Z.emittedReadable = !1, Z.reading ? Z.length && O(this) : e.nextTick(W, this));
    }
    return M;
  }, _.prototype.addListener = _.prototype.on;
  function W(y) {
    g("readable nexttick read 0"), y.read(0);
  }
  _.prototype.resume = function() {
    var y = this._readableState;
    return y.flowing || (g("resume"), y.flowing = !0, w(this, y)), this;
  };
  function w(y, k) {
    k.resumeScheduled || (k.resumeScheduled = !0, e.nextTick(S, y, k));
  }
  function S(y, k) {
    k.reading || (g("resume read 0"), y.read(0)), k.resumeScheduled = !1, k.awaitDrain = 0, y.emit("resume"), C(y), k.flowing && !k.reading && y.read(0);
  }
  _.prototype.pause = function() {
    return g("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (g("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
  };
  function C(y) {
    var k = y._readableState;
    for (g("flow", k.flowing); k.flowing && y.read() !== null; )
      ;
  }
  _.prototype.wrap = function(y) {
    var k = this, M = this._readableState, Z = !1;
    y.on("end", function() {
      if (g("wrapped end"), M.decoder && !M.ended) {
        var K = M.decoder.end();
        K && K.length && k.push(K);
      }
      k.push(null);
    }), y.on("data", function(K) {
      if (g("wrapped data"), M.decoder && (K = M.decoder.write(K)), !(M.objectMode && K == null) && !(!M.objectMode && (!K || !K.length))) {
        var ye = k.push(K);
        ye || (Z = !0, y.pause());
      }
    });
    for (var Q in y)
      this[Q] === void 0 && typeof y[Q] == "function" && (this[Q] = /* @__PURE__ */ function(K) {
        return function() {
          return y[K].apply(y, arguments);
        };
      }(Q));
    for (var V = 0; V < v.length; V++)
      y.on(v[V], this.emit.bind(this, v[V]));
    return this._read = function(K) {
      g("wrapped _read", K), Z && (Z = !1, y.resume());
    }, this;
  }, Object.defineProperty(_.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), _._fromList = j;
  function j(y, k) {
    if (k.length === 0) return null;
    var M;
    return k.objectMode ? M = k.buffer.shift() : !y || y >= k.length ? (k.decoder ? M = k.buffer.join("") : k.buffer.length === 1 ? M = k.buffer.head.data : M = k.buffer.concat(k.length), k.buffer.clear()) : M = U(y, k.buffer, k.decoder), M;
  }
  function U(y, k, M) {
    var Z;
    return y < k.head.data.length ? (Z = k.head.data.slice(0, y), k.head.data = k.head.data.slice(y)) : y === k.head.data.length ? Z = k.shift() : Z = M ? G(y, k) : H(y, k), Z;
  }
  function G(y, k) {
    var M = k.head, Z = 1, Q = M.data;
    for (y -= Q.length; M = M.next; ) {
      var V = M.data, K = y > V.length ? V.length : y;
      if (K === V.length ? Q += V : Q += V.slice(0, y), y -= K, y === 0) {
        K === V.length ? (++Z, M.next ? k.head = M.next : k.head = k.tail = null) : (k.head = M, M.data = V.slice(K));
        break;
      }
      ++Z;
    }
    return k.length -= Z, Q;
  }
  function H(y, k) {
    var M = a.allocUnsafe(y), Z = k.head, Q = 1;
    for (Z.data.copy(M), y -= Z.data.length; Z = Z.next; ) {
      var V = Z.data, K = y > V.length ? V.length : y;
      if (V.copy(M, M.length - y, 0, K), y -= K, y === 0) {
        K === V.length ? (++Q, Z.next ? k.head = Z.next : k.head = k.tail = null) : (k.head = Z, Z.data = V.slice(K));
        break;
      }
      ++Q;
    }
    return k.length -= Q, M;
  }
  function X(y) {
    var k = y._readableState;
    if (k.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    k.endEmitted || (k.ended = !0, e.nextTick(J, k, y));
  }
  function J(y, k) {
    !y.endEmitted && y.length === 0 && (y.endEmitted = !0, k.readable = !1, k.emit("end"));
  }
  function Y(y, k) {
    for (var M = 0, Z = y.length; M < Z; M++)
      if (y[M] === k) return M;
    return -1;
  }
  return Ui;
}
var zi, ls;
function Ho() {
  if (ls) return zi;
  ls = 1, zi = i;
  var e = jt(), r = Object.create(dr());
  r.inherits = Bt(), r.inherits(i, e);
  function t(s, f) {
    var h = this._transformState;
    h.transforming = !1;
    var o = h.writecb;
    if (!o)
      return this.emit("error", new Error("write callback called multiple times"));
    h.writechunk = null, h.writecb = null, f != null && this.push(f), o(s);
    var d = this._readableState;
    d.reading = !1, (d.needReadable || d.length < d.highWaterMark) && this._read(d.highWaterMark);
  }
  function i(s) {
    if (!(this instanceof i)) return new i(s);
    e.call(this, s), this._transformState = {
      afterTransform: t.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, s && (typeof s.transform == "function" && (this._transform = s.transform), typeof s.flush == "function" && (this._flush = s.flush)), this.on("prefinish", n);
  }
  function n() {
    var s = this;
    typeof this._flush == "function" ? this._flush(function(f, h) {
      a(s, f, h);
    }) : a(this, null, null);
  }
  i.prototype.push = function(s, f) {
    return this._transformState.needTransform = !1, e.prototype.push.call(this, s, f);
  }, i.prototype._transform = function(s, f, h) {
    throw new Error("_transform() is not implemented");
  }, i.prototype._write = function(s, f, h) {
    var o = this._transformState;
    if (o.writecb = h, o.writechunk = s, o.writeencoding = f, !o.transforming) {
      var d = this._readableState;
      (o.needTransform || d.needReadable || d.length < d.highWaterMark) && this._read(d.highWaterMark);
    }
  }, i.prototype._read = function(s) {
    var f = this._transformState;
    f.writechunk !== null && f.writecb && !f.transforming ? (f.transforming = !0, this._transform(f.writechunk, f.writeencoding, f.afterTransform)) : f.needTransform = !0;
  }, i.prototype._destroy = function(s, f) {
    var h = this;
    e.prototype._destroy.call(this, s, function(o) {
      f(o), h.emit("close");
    });
  };
  function a(s, f, h) {
    if (f) return s.emit("error", f);
    if (h != null && s.push(h), s._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (s._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return s.push(null);
  }
  return zi;
}
var Wi, us;
function Bc() {
  if (us) return Wi;
  us = 1, Wi = t;
  var e = Ho(), r = Object.create(dr());
  r.inherits = Bt(), r.inherits(t, e);
  function t(i) {
    if (!(this instanceof t)) return new t(i);
    e.call(this, i);
  }
  return t.prototype._transform = function(i, n, a) {
    a(null, i);
  }, Wi;
}
var hs;
function Vo() {
  return hs || (hs = 1, function(e, r) {
    var t = Oo;
    process.env.READABLE_STREAM === "disable" && t ? (e.exports = t, r = e.exports = t.Readable, r.Readable = t.Readable, r.Writable = t.Writable, r.Duplex = t.Duplex, r.Transform = t.Transform, r.PassThrough = t.PassThrough, r.Stream = t) : (r = e.exports = qo(), r.Stream = t || r, r.Readable = r, r.Writable = Zo(), r.Duplex = jt(), r.Transform = Ho(), r.PassThrough = Bc());
  }(Tr, Tr.exports)), Tr.exports;
}
var cs, Ir;
he.base64 = !0;
he.array = !0;
he.string = !0;
he.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
he.nodebuffer = typeof Buffer < "u";
he.uint8array = typeof Uint8Array < "u";
if (typeof ArrayBuffer > "u")
  Ir = he.blob = !1;
else {
  var ds = new ArrayBuffer(0);
  try {
    Ir = he.blob = new Blob([ds], {
      type: "application/zip"
    }).size === 0;
  } catch {
    try {
      var Mc = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder, vs = new Mc();
      vs.append(ds), Ir = he.blob = vs.getBlob("application/zip").size === 0;
    } catch {
      Ir = he.blob = !1;
    }
  }
}
try {
  cs = he.nodestream = !!Vo().Readable;
} catch {
  cs = he.nodestream = !1;
}
var Cr = {}, ps;
function Xo() {
  if (ps) return Cr;
  ps = 1;
  var e = le(), r = he, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return Cr.encode = function(i) {
    for (var n = [], a, s, f, h, o, d, g, u = 0, c = i.length, p = c, v = e.getTypeOf(i) !== "string"; u < i.length; )
      p = c - u, v ? (a = i[u++], s = u < c ? i[u++] : 0, f = u < c ? i[u++] : 0) : (a = i.charCodeAt(u++), s = u < c ? i.charCodeAt(u++) : 0, f = u < c ? i.charCodeAt(u++) : 0), h = a >> 2, o = (a & 3) << 4 | s >> 4, d = p > 1 ? (s & 15) << 2 | f >> 6 : 64, g = p > 2 ? f & 63 : 64, n.push(t.charAt(h) + t.charAt(o) + t.charAt(d) + t.charAt(g));
    return n.join("");
  }, Cr.decode = function(i) {
    var n, a, s, f, h, o, d, g = 0, u = 0, c = "data:";
    if (i.substr(0, c.length) === c)
      throw new Error("Invalid base64 input, it looks like a data url.");
    i = i.replace(/[^A-Za-z0-9+/=]/g, "");
    var p = i.length * 3 / 4;
    if (i.charAt(i.length - 1) === t.charAt(64) && p--, i.charAt(i.length - 2) === t.charAt(64) && p--, p % 1 !== 0)
      throw new Error("Invalid base64 input, bad content length.");
    var v;
    for (r.uint8array ? v = new Uint8Array(p | 0) : v = new Array(p | 0); g < i.length; )
      f = t.indexOf(i.charAt(g++)), h = t.indexOf(i.charAt(g++)), o = t.indexOf(i.charAt(g++)), d = t.indexOf(i.charAt(g++)), n = f << 2 | h >> 4, a = (h & 15) << 4 | o >> 2, s = (o & 3) << 6 | d, v[u++] = n, o !== 64 && (v[u++] = a), d !== 64 && (v[u++] = s);
    return v;
  }, Cr;
}
var si = {
  /**
   * True if this is running in Nodejs, will be undefined in a browser.
   * In a browser, browserify won't include this file and the whole module
   * will be resolved an empty object.
   */
  isNode: typeof Buffer < "u",
  /**
   * Create a new nodejs Buffer from an existing content.
   * @param {Object} data the data to pass to the constructor.
   * @param {String} encoding the encoding to use.
   * @return {Buffer} a new Buffer.
   */
  newBufferFrom: function(e, r) {
    if (Buffer.from && Buffer.from !== Uint8Array.from)
      return Buffer.from(e, r);
    if (typeof e == "number")
      throw new Error('The "data" argument must not be a number');
    return new Buffer(e, r);
  },
  /**
   * Create a new nodejs Buffer with the specified size.
   * @param {Integer} size the size of the buffer.
   * @return {Buffer} a new Buffer.
   */
  allocBuffer: function(e) {
    if (Buffer.alloc)
      return Buffer.alloc(e);
    var r = new Buffer(e);
    return r.fill(0), r;
  },
  /**
   * Find out if an object is a Buffer.
   * @param {Object} b the object to test.
   * @return {Boolean} true if the object is a Buffer, false otherwise.
   */
  isBuffer: function(e) {
    return Buffer.isBuffer(e);
  },
  isStream: function(e) {
    return e && typeof e.on == "function" && typeof e.pause == "function" && typeof e.resume == "function";
  }
}, Gi, _s;
function Uc() {
  if (_s) return Gi;
  _s = 1;
  var e = de.MutationObserver || de.WebKitMutationObserver, r;
  if (process.browser)
    if (e) {
      var t = 0, i = new e(h), n = de.document.createTextNode("");
      i.observe(n, {
        characterData: !0
      }), r = function() {
        n.data = t = ++t % 2;
      };
    } else if (!de.setImmediate && typeof de.MessageChannel < "u") {
      var a = new de.MessageChannel();
      a.port1.onmessage = h, r = function() {
        a.port2.postMessage(0);
      };
    } else "document" in de && "onreadystatechange" in de.document.createElement("script") ? r = function() {
      var d = de.document.createElement("script");
      d.onreadystatechange = function() {
        h(), d.onreadystatechange = null, d.parentNode.removeChild(d), d = null;
      }, de.document.documentElement.appendChild(d);
    } : r = function() {
      setTimeout(h, 0);
    };
  else
    r = function() {
      process.nextTick(h);
    };
  var s, f = [];
  function h() {
    s = !0;
    for (var d, g, u = f.length; u; ) {
      for (g = f, f = [], d = -1; ++d < u; )
        g[d]();
      u = f.length;
    }
    s = !1;
  }
  Gi = o;
  function o(d) {
    f.push(d) === 1 && !s && r();
  }
  return Gi;
}
var Zi, ms;
function zc() {
  if (ms) return Zi;
  ms = 1;
  var e = Uc();
  function r() {
  }
  var t = {}, i = ["REJECTED"], n = ["FULFILLED"], a = ["PENDING"];
  if (!process.browser)
    var s = ["UNHANDLED"];
  Zi = f;
  function f(l) {
    if (typeof l != "function")
      throw new TypeError("resolver must be a function");
    this.state = a, this.queue = [], this.outcome = void 0, process.browser || (this.handled = s), l !== r && g(this, l);
  }
  f.prototype.finally = function(l) {
    if (typeof l != "function")
      return this;
    var _ = this.constructor;
    return this.then(R, m);
    function R(E) {
      function $() {
        return E;
      }
      return _.resolve(l()).then($);
    }
    function m(E) {
      function $() {
        throw E;
      }
      return _.resolve(l()).then($);
    }
  }, f.prototype.catch = function(l) {
    return this.then(null, l);
  }, f.prototype.then = function(l, _) {
    if (typeof l != "function" && this.state === n || typeof _ != "function" && this.state === i)
      return this;
    var R = new this.constructor(r);
    if (process.browser || this.handled === s && (this.handled = null), this.state !== a) {
      var m = this.state === n ? l : _;
      o(R, m, this.outcome);
    } else
      this.queue.push(new h(R, l, _));
    return R;
  };
  function h(l, _, R) {
    this.promise = l, typeof _ == "function" && (this.onFulfilled = _, this.callFulfilled = this.otherCallFulfilled), typeof R == "function" && (this.onRejected = R, this.callRejected = this.otherCallRejected);
  }
  h.prototype.callFulfilled = function(l) {
    t.resolve(this.promise, l);
  }, h.prototype.otherCallFulfilled = function(l) {
    o(this.promise, this.onFulfilled, l);
  }, h.prototype.callRejected = function(l) {
    t.reject(this.promise, l);
  }, h.prototype.otherCallRejected = function(l) {
    o(this.promise, this.onRejected, l);
  };
  function o(l, _, R) {
    e(function() {
      var m;
      try {
        m = _(R);
      } catch (E) {
        return t.reject(l, E);
      }
      m === l ? t.reject(l, new TypeError("Cannot resolve promise with itself")) : t.resolve(l, m);
    });
  }
  t.resolve = function(l, _) {
    var R = u(d, _);
    if (R.status === "error")
      return t.reject(l, R.value);
    var m = R.value;
    if (m)
      g(l, m);
    else {
      l.state = n, l.outcome = _;
      for (var E = -1, $ = l.queue.length; ++E < $; )
        l.queue[E].callFulfilled(_);
    }
    return l;
  }, t.reject = function(l, _) {
    l.state = i, l.outcome = _, process.browser || l.handled === s && e(function() {
      l.handled === s && process.emit("unhandledRejection", _, l);
    });
    for (var R = -1, m = l.queue.length; ++R < m; )
      l.queue[R].callRejected(_);
    return l;
  };
  function d(l) {
    var _ = l && l.then;
    if (l && (typeof l == "object" || typeof l == "function") && typeof _ == "function")
      return function() {
        _.apply(l, arguments);
      };
  }
  function g(l, _) {
    var R = !1;
    function m(T) {
      R || (R = !0, t.reject(l, T));
    }
    function E(T) {
      R || (R = !0, t.resolve(l, T));
    }
    function $() {
      _(E, m);
    }
    var A = u($);
    A.status === "error" && m(A.value);
  }
  function u(l, _) {
    var R = {};
    try {
      R.value = l(_), R.status = "success";
    } catch (m) {
      R.status = "error", R.value = m;
    }
    return R;
  }
  f.resolve = c;
  function c(l) {
    return l instanceof this ? l : t.resolve(new this(r), l);
  }
  f.reject = p;
  function p(l) {
    var _ = new this(r);
    return t.reject(_, l);
  }
  f.all = v;
  function v(l) {
    var _ = this;
    if (Object.prototype.toString.call(l) !== "[object Array]")
      return this.reject(new TypeError("must be an array"));
    var R = l.length, m = !1;
    if (!R)
      return this.resolve([]);
    for (var E = new Array(R), $ = 0, A = -1, T = new this(r); ++A < R; )
      b(l[A], A);
    return T;
    function b(I, O) {
      _.resolve(I).then(L, function(B) {
        m || (m = !0, t.reject(T, B));
      });
      function L(B) {
        E[O] = B, ++$ === R && !m && (m = !0, t.resolve(T, E));
      }
    }
  }
  f.race = x;
  function x(l) {
    var _ = this;
    if (Object.prototype.toString.call(l) !== "[object Array]")
      return this.reject(new TypeError("must be an array"));
    var R = l.length, m = !1;
    if (!R)
      return this.resolve([]);
    for (var E = -1, $ = new this(r); ++E < R; )
      A(l[E]);
    return $;
    function A(T) {
      _.resolve(T).then(function(b) {
        m || (m = !0, t.resolve($, b));
      }, function(b) {
        m || (m = !0, t.reject($, b));
      });
    }
  }
  return Zi;
}
var _n = null;
typeof Promise < "u" ? _n = Promise : _n = zc();
var vr = {
  Promise: _n
};
(function(e, r) {
  if (e.setImmediate)
    return;
  var t = 1, i = {}, n = !1, a = e.document, s;
  function f(_) {
    typeof _ != "function" && (_ = new Function("" + _));
    for (var R = new Array(arguments.length - 1), m = 0; m < R.length; m++)
      R[m] = arguments[m + 1];
    var E = { callback: _, args: R };
    return i[t] = E, s(t), t++;
  }
  function h(_) {
    delete i[_];
  }
  function o(_) {
    var R = _.callback, m = _.args;
    switch (m.length) {
      case 0:
        R();
        break;
      case 1:
        R(m[0]);
        break;
      case 2:
        R(m[0], m[1]);
        break;
      case 3:
        R(m[0], m[1], m[2]);
        break;
      default:
        R.apply(r, m);
        break;
    }
  }
  function d(_) {
    if (n)
      setTimeout(d, 0, _);
    else {
      var R = i[_];
      if (R) {
        n = !0;
        try {
          o(R);
        } finally {
          h(_), n = !1;
        }
      }
    }
  }
  function g() {
    s = function(_) {
      process.nextTick(function() {
        d(_);
      });
    };
  }
  function u() {
    if (e.postMessage && !e.importScripts) {
      var _ = !0, R = e.onmessage;
      return e.onmessage = function() {
        _ = !1;
      }, e.postMessage("", "*"), e.onmessage = R, _;
    }
  }
  function c() {
    var _ = "setImmediate$" + Math.random() + "$", R = function(m) {
      m.source === e && typeof m.data == "string" && m.data.indexOf(_) === 0 && d(+m.data.slice(_.length));
    };
    e.addEventListener ? e.addEventListener("message", R, !1) : e.attachEvent("onmessage", R), s = function(m) {
      e.postMessage(_ + m, "*");
    };
  }
  function p() {
    var _ = new MessageChannel();
    _.port1.onmessage = function(R) {
      var m = R.data;
      d(m);
    }, s = function(R) {
      _.port2.postMessage(R);
    };
  }
  function v() {
    var _ = a.documentElement;
    s = function(R) {
      var m = a.createElement("script");
      m.onreadystatechange = function() {
        d(R), m.onreadystatechange = null, _.removeChild(m), m = null;
      }, _.appendChild(m);
    };
  }
  function x() {
    s = function(_) {
      setTimeout(d, 0, _);
    };
  }
  var l = Object.getPrototypeOf && Object.getPrototypeOf(e);
  l = l && l.setTimeout ? l : e, {}.toString.call(e.process) === "[object process]" ? g() : u() ? c() : e.MessageChannel ? p() : a && "onreadystatechange" in a.createElement("script") ? v() : x(), l.setImmediate = f, l.clearImmediate = h;
})(typeof self > "u" ? de : self);
var gs;
function le() {
  return gs || (gs = 1, function(e) {
    var r = he, t = Xo(), i = si, n = vr;
    function a(u) {
      var c = null;
      return r.uint8array ? c = new Uint8Array(u.length) : c = new Array(u.length), f(u, c);
    }
    e.newBlob = function(u, c) {
      e.checkSupport("blob");
      try {
        return new Blob([u], {
          type: c
        });
      } catch {
        try {
          var p = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder, v = new p();
          return v.append(u), v.getBlob(c);
        } catch {
          throw new Error("Bug : can't construct the Blob.");
        }
      }
    };
    function s(u) {
      return u;
    }
    function f(u, c) {
      for (var p = 0; p < u.length; ++p)
        c[p] = u.charCodeAt(p) & 255;
      return c;
    }
    var h = {
      /**
       * Transform an array of int into a string, chunk by chunk.
       * See the performances notes on arrayLikeToString.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
       * @param {String} type the type of the array.
       * @param {Integer} chunk the chunk size.
       * @return {String} the resulting string.
       * @throws Error if the chunk is too big for the stack.
       */
      stringifyByChunk: function(u, c, p) {
        var v = [], x = 0, l = u.length;
        if (l <= p)
          return String.fromCharCode.apply(null, u);
        for (; x < l; )
          c === "array" || c === "nodebuffer" ? v.push(String.fromCharCode.apply(null, u.slice(x, Math.min(x + p, l)))) : v.push(String.fromCharCode.apply(null, u.subarray(x, Math.min(x + p, l)))), x += p;
        return v.join("");
      },
      /**
       * Call String.fromCharCode on every item in the array.
       * This is the naive implementation, which generate A LOT of intermediate string.
       * This should be used when everything else fail.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
       * @return {String} the result.
       */
      stringifyByChar: function(u) {
        for (var c = "", p = 0; p < u.length; p++)
          c += String.fromCharCode(u[p]);
        return c;
      },
      applyCanBeUsed: {
        /**
         * true if the browser accepts to use String.fromCharCode on Uint8Array
         */
        uint8array: function() {
          try {
            return r.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        }(),
        /**
         * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
         */
        nodebuffer: function() {
          try {
            return r.nodebuffer && String.fromCharCode.apply(null, i.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        }()
      }
    };
    function o(u) {
      var c = 65536, p = e.getTypeOf(u), v = !0;
      if (p === "uint8array" ? v = h.applyCanBeUsed.uint8array : p === "nodebuffer" && (v = h.applyCanBeUsed.nodebuffer), v)
        for (; c > 1; )
          try {
            return h.stringifyByChunk(u, p, c);
          } catch {
            c = Math.floor(c / 2);
          }
      return h.stringifyByChar(u);
    }
    e.applyFromCharCode = o;
    function d(u, c) {
      for (var p = 0; p < u.length; p++)
        c[p] = u[p];
      return c;
    }
    var g = {};
    g.string = {
      string: s,
      array: function(u) {
        return f(u, new Array(u.length));
      },
      arraybuffer: function(u) {
        return g.string.uint8array(u).buffer;
      },
      uint8array: function(u) {
        return f(u, new Uint8Array(u.length));
      },
      nodebuffer: function(u) {
        return f(u, i.allocBuffer(u.length));
      }
    }, g.array = {
      string: o,
      array: s,
      arraybuffer: function(u) {
        return new Uint8Array(u).buffer;
      },
      uint8array: function(u) {
        return new Uint8Array(u);
      },
      nodebuffer: function(u) {
        return i.newBufferFrom(u);
      }
    }, g.arraybuffer = {
      string: function(u) {
        return o(new Uint8Array(u));
      },
      array: function(u) {
        return d(new Uint8Array(u), new Array(u.byteLength));
      },
      arraybuffer: s,
      uint8array: function(u) {
        return new Uint8Array(u);
      },
      nodebuffer: function(u) {
        return i.newBufferFrom(new Uint8Array(u));
      }
    }, g.uint8array = {
      string: o,
      array: function(u) {
        return d(u, new Array(u.length));
      },
      arraybuffer: function(u) {
        return u.buffer;
      },
      uint8array: s,
      nodebuffer: function(u) {
        return i.newBufferFrom(u);
      }
    }, g.nodebuffer = {
      string: o,
      array: function(u) {
        return d(u, new Array(u.length));
      },
      arraybuffer: function(u) {
        return g.nodebuffer.uint8array(u).buffer;
      },
      uint8array: function(u) {
        return d(u, new Uint8Array(u.length));
      },
      nodebuffer: s
    }, e.transformTo = function(u, c) {
      if (c || (c = ""), !u)
        return c;
      e.checkSupport(u);
      var p = e.getTypeOf(c), v = g[p][u](c);
      return v;
    }, e.resolve = function(u) {
      for (var c = u.split("/"), p = [], v = 0; v < c.length; v++) {
        var x = c[v];
        x === "." || x === "" && v !== 0 && v !== c.length - 1 || (x === ".." ? p.pop() : p.push(x));
      }
      return p.join("/");
    }, e.getTypeOf = function(u) {
      if (typeof u == "string")
        return "string";
      if (Object.prototype.toString.call(u) === "[object Array]")
        return "array";
      if (r.nodebuffer && i.isBuffer(u))
        return "nodebuffer";
      if (r.uint8array && u instanceof Uint8Array)
        return "uint8array";
      if (r.arraybuffer && u instanceof ArrayBuffer)
        return "arraybuffer";
    }, e.checkSupport = function(u) {
      var c = r[u.toLowerCase()];
      if (!c)
        throw new Error(u + " is not supported by this platform");
    }, e.MAX_VALUE_16BITS = 65535, e.MAX_VALUE_32BITS = -1, e.pretty = function(u) {
      var c = "", p, v;
      for (v = 0; v < (u || "").length; v++)
        p = u.charCodeAt(v), c += "\\x" + (p < 16 ? "0" : "") + p.toString(16).toUpperCase();
      return c;
    }, e.delay = function(u, c, p) {
      setImmediate(function() {
        u.apply(p || null, c || []);
      });
    }, e.inherits = function(u, c) {
      var p = function() {
      };
      p.prototype = c.prototype, u.prototype = new p();
    }, e.extend = function() {
      var u = {}, c, p;
      for (c = 0; c < arguments.length; c++)
        for (p in arguments[c])
          Object.prototype.hasOwnProperty.call(arguments[c], p) && typeof u[p] > "u" && (u[p] = arguments[c][p]);
      return u;
    }, e.prepareContent = function(u, c, p, v, x) {
      var l = n.Promise.resolve(c).then(function(_) {
        var R = r.blob && (_ instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(_)) !== -1);
        return R && typeof FileReader < "u" ? new n.Promise(function(m, E) {
          var $ = new FileReader();
          $.onload = function(A) {
            m(A.target.result);
          }, $.onerror = function(A) {
            E(A.target.error);
          }, $.readAsArrayBuffer(_);
        }) : _;
      });
      return l.then(function(_) {
        var R = e.getTypeOf(_);
        return R ? (R === "arraybuffer" ? _ = e.transformTo("uint8array", _) : R === "string" && (x ? _ = t.decode(_) : p && v !== !0 && (_ = a(_))), _) : n.Promise.reject(
          new Error("Can't read the data of '" + u + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
        );
      });
    };
  }(Ci)), Ci;
}
function Yo(e) {
  this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
    data: [],
    end: [],
    error: []
  }, this.previous = null;
}
Yo.prototype = {
  /**
   * Push a chunk to the next workers.
   * @param {Object} chunk the chunk to push
   */
  push: function(e) {
    this.emit("data", e);
  },
  /**
   * End the stream.
   * @return {Boolean} true if this call ended the worker, false otherwise.
   */
  end: function() {
    if (this.isFinished)
      return !1;
    this.flush();
    try {
      this.emit("end"), this.cleanUp(), this.isFinished = !0;
    } catch (e) {
      this.emit("error", e);
    }
    return !0;
  },
  /**
   * End the stream with an error.
   * @param {Error} e the error which caused the premature end.
   * @return {Boolean} true if this call ended the worker with an error, false otherwise.
   */
  error: function(e) {
    return this.isFinished ? !1 : (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
  },
  /**
   * Add a callback on an event.
   * @param {String} name the name of the event (data, end, error)
   * @param {Function} listener the function to call when the event is triggered
   * @return {GenericWorker} the current object for chainability
   */
  on: function(e, r) {
    return this._listeners[e].push(r), this;
  },
  /**
   * Clean any references when a worker is ending.
   */
  cleanUp: function() {
    this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
  },
  /**
   * Trigger an event. This will call registered callback with the provided arg.
   * @param {String} name the name of the event (data, end, error)
   * @param {Object} arg the argument to call the callback with.
   */
  emit: function(e, r) {
    if (this._listeners[e])
      for (var t = 0; t < this._listeners[e].length; t++)
        this._listeners[e][t].call(this, r);
  },
  /**
   * Chain a worker with an other.
   * @param {Worker} next the worker receiving events from the current one.
   * @return {worker} the next worker for chainability
   */
  pipe: function(e) {
    return e.registerPrevious(this);
  },
  /**
   * Same as `pipe` in the other direction.
   * Using an API with `pipe(next)` is very easy.
   * Implementing the API with the point of view of the next one registering
   * a source is easier, see the ZipFileWorker.
   * @param {Worker} previous the previous worker, sending events to this one
   * @return {Worker} the current worker for chainability
   */
  registerPrevious: function(e) {
    if (this.isLocked)
      throw new Error("The stream '" + this + "' has already been used.");
    this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
    var r = this;
    return e.on("data", function(t) {
      r.processChunk(t);
    }), e.on("end", function() {
      r.end();
    }), e.on("error", function(t) {
      r.error(t);
    }), this;
  },
  /**
   * Pause the stream so it doesn't send events anymore.
   * @return {Boolean} true if this call paused the worker, false otherwise.
   */
  pause: function() {
    return this.isPaused || this.isFinished ? !1 : (this.isPaused = !0, this.previous && this.previous.pause(), !0);
  },
  /**
   * Resume a paused stream.
   * @return {Boolean} true if this call resumed the worker, false otherwise.
   */
  resume: function() {
    if (!this.isPaused || this.isFinished)
      return !1;
    this.isPaused = !1;
    var e = !1;
    return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
  },
  /**
   * Flush any remaining bytes as the stream is ending.
   */
  flush: function() {
  },
  /**
   * Process a chunk. This is usually the method overridden.
   * @param {Object} chunk the chunk to process.
   */
  processChunk: function(e) {
    this.push(e);
  },
  /**
   * Add a key/value to be added in the workers chain streamInfo once activated.
   * @param {String} key the key to use
   * @param {Object} value the associated value
   * @return {Worker} the current worker for chainability
   */
  withStreamInfo: function(e, r) {
    return this.extraStreamInfo[e] = r, this.mergeStreamInfo(), this;
  },
  /**
   * Merge this worker's streamInfo into the chain's streamInfo.
   */
  mergeStreamInfo: function() {
    for (var e in this.extraStreamInfo)
      Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
  },
  /**
   * Lock the stream to prevent further updates on the workers chain.
   * After calling this method, all calls to pipe will fail.
   */
  lock: function() {
    if (this.isLocked)
      throw new Error("The stream '" + this + "' has already been used.");
    this.isLocked = !0, this.previous && this.previous.lock();
  },
  /**
   *
   * Pretty print the workers chain.
   */
  toString: function() {
    var e = "Worker " + this.name;
    return this.previous ? this.previous + " -> " + e : e;
  }
};
var Oe = Yo;
(function(e) {
  for (var r = le(), t = he, i = si, n = Oe, a = new Array(256), s = 0; s < 256; s++)
    a[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
  a[254] = a[254] = 1;
  var f = function(u) {
    var c, p, v, x, l, _ = u.length, R = 0;
    for (x = 0; x < _; x++)
      p = u.charCodeAt(x), (p & 64512) === 55296 && x + 1 < _ && (v = u.charCodeAt(x + 1), (v & 64512) === 56320 && (p = 65536 + (p - 55296 << 10) + (v - 56320), x++)), R += p < 128 ? 1 : p < 2048 ? 2 : p < 65536 ? 3 : 4;
    for (t.uint8array ? c = new Uint8Array(R) : c = new Array(R), l = 0, x = 0; l < R; x++)
      p = u.charCodeAt(x), (p & 64512) === 55296 && x + 1 < _ && (v = u.charCodeAt(x + 1), (v & 64512) === 56320 && (p = 65536 + (p - 55296 << 10) + (v - 56320), x++)), p < 128 ? c[l++] = p : p < 2048 ? (c[l++] = 192 | p >>> 6, c[l++] = 128 | p & 63) : p < 65536 ? (c[l++] = 224 | p >>> 12, c[l++] = 128 | p >>> 6 & 63, c[l++] = 128 | p & 63) : (c[l++] = 240 | p >>> 18, c[l++] = 128 | p >>> 12 & 63, c[l++] = 128 | p >>> 6 & 63, c[l++] = 128 | p & 63);
    return c;
  }, h = function(u, c) {
    var p;
    for (c = c || u.length, c > u.length && (c = u.length), p = c - 1; p >= 0 && (u[p] & 192) === 128; )
      p--;
    return p < 0 || p === 0 ? c : p + a[u[p]] > c ? p : c;
  }, o = function(u) {
    var c, p, v, x, l = u.length, _ = new Array(l * 2);
    for (p = 0, c = 0; c < l; ) {
      if (v = u[c++], v < 128) {
        _[p++] = v;
        continue;
      }
      if (x = a[v], x > 4) {
        _[p++] = 65533, c += x - 1;
        continue;
      }
      for (v &= x === 2 ? 31 : x === 3 ? 15 : 7; x > 1 && c < l; )
        v = v << 6 | u[c++] & 63, x--;
      if (x > 1) {
        _[p++] = 65533;
        continue;
      }
      v < 65536 ? _[p++] = v : (v -= 65536, _[p++] = 55296 | v >> 10 & 1023, _[p++] = 56320 | v & 1023);
    }
    return _.length !== p && (_.subarray ? _ = _.subarray(0, p) : _.length = p), r.applyFromCharCode(_);
  };
  e.utf8encode = function(c) {
    return t.nodebuffer ? i.newBufferFrom(c, "utf-8") : f(c);
  }, e.utf8decode = function(c) {
    return t.nodebuffer ? r.transformTo("nodebuffer", c).toString("utf-8") : (c = r.transformTo(t.uint8array ? "uint8array" : "array", c), o(c));
  };
  function d() {
    n.call(this, "utf-8 decode"), this.leftOver = null;
  }
  r.inherits(d, n), d.prototype.processChunk = function(u) {
    var c = r.transformTo(t.uint8array ? "uint8array" : "array", u.data);
    if (this.leftOver && this.leftOver.length) {
      if (t.uint8array) {
        var p = c;
        c = new Uint8Array(p.length + this.leftOver.length), c.set(this.leftOver, 0), c.set(p, this.leftOver.length);
      } else
        c = this.leftOver.concat(c);
      this.leftOver = null;
    }
    var v = h(c), x = c;
    v !== c.length && (t.uint8array ? (x = c.subarray(0, v), this.leftOver = c.subarray(v, c.length)) : (x = c.slice(0, v), this.leftOver = c.slice(v, c.length))), this.push({
      data: e.utf8decode(x),
      meta: u.meta
    });
  }, d.prototype.flush = function() {
    this.leftOver && this.leftOver.length && (this.push({
      data: e.utf8decode(this.leftOver),
      meta: {}
    }), this.leftOver = null);
  }, e.Utf8DecodeWorker = d;
  function g() {
    n.call(this, "utf-8 encode");
  }
  r.inherits(g, n), g.prototype.processChunk = function(u) {
    this.push({
      data: e.utf8encode(u.data),
      meta: u.meta
    });
  }, e.Utf8EncodeWorker = g;
})(Mt);
var Ko = Oe, Jo = le();
function Zn(e) {
  Ko.call(this, "ConvertWorker to " + e), this.destType = e;
}
Jo.inherits(Zn, Ko);
Zn.prototype.processChunk = function(e) {
  this.push({
    data: Jo.transformTo(this.destType, e.data),
    meta: e.meta
  });
};
var Wc = Zn, qi, ys;
function Gc() {
  if (ys) return qi;
  ys = 1;
  var e = Vo().Readable, r = le();
  r.inherits(t, e);
  function t(i, n, a) {
    e.call(this, n), this._helper = i;
    var s = this;
    i.on("data", function(f, h) {
      s.push(f) || s._helper.pause(), a && a(h);
    }).on("error", function(f) {
      s.emit("error", f);
    }).on("end", function() {
      s.push(null);
    });
  }
  return t.prototype._read = function() {
    this._helper.resume();
  }, qi = t, qi;
}
var _t = le(), Zc = Wc, qc = Oe, Hc = Xo(), Vc = he, Xc = vr, Qo = null;
if (Vc.nodestream)
  try {
    Qo = Gc();
  } catch {
  }
function Yc(e, r, t) {
  switch (e) {
    case "blob":
      return _t.newBlob(_t.transformTo("arraybuffer", r), t);
    case "base64":
      return Hc.encode(r);
    default:
      return _t.transformTo(e, r);
  }
}
function Kc(e, r) {
  var t, i = 0, n = null, a = 0;
  for (t = 0; t < r.length; t++)
    a += r[t].length;
  switch (e) {
    case "string":
      return r.join("");
    case "array":
      return Array.prototype.concat.apply([], r);
    case "uint8array":
      for (n = new Uint8Array(a), t = 0; t < r.length; t++)
        n.set(r[t], i), i += r[t].length;
      return n;
    case "nodebuffer":
      return Buffer.concat(r);
    default:
      throw new Error("concat : unsupported type '" + e + "'");
  }
}
function Jc(e, r) {
  return new Xc.Promise(function(t, i) {
    var n = [], a = e._internalType, s = e._outputType, f = e._mimeType;
    e.on("data", function(h, o) {
      n.push(h), r && r(o);
    }).on("error", function(h) {
      n = [], i(h);
    }).on("end", function() {
      try {
        var h = Yc(s, Kc(a, n), f);
        t(h);
      } catch (o) {
        i(o);
      }
      n = [];
    }).resume();
  });
}
function ef(e, r, t) {
  var i = r;
  switch (r) {
    case "blob":
    case "arraybuffer":
      i = "uint8array";
      break;
    case "base64":
      i = "string";
      break;
  }
  try {
    this._internalType = i, this._outputType = r, this._mimeType = t, _t.checkSupport(i), this._worker = e.pipe(new Zc(i)), e.lock();
  } catch (n) {
    this._worker = new qc("error"), this._worker.error(n);
  }
}
ef.prototype = {
  /**
   * Listen a StreamHelper, accumulate its content and concatenate it into a
   * complete block.
   * @param {Function} updateCb the update callback.
   * @return Promise the promise for the accumulation.
   */
  accumulate: function(e) {
    return Jc(this, e);
  },
  /**
   * Add a listener on an event triggered on a stream.
   * @param {String} evt the name of the event
   * @param {Function} fn the listener
   * @return {StreamHelper} the current helper.
   */
  on: function(e, r) {
    var t = this;
    return e === "data" ? this._worker.on(e, function(i) {
      r.call(t, i.data, i.meta);
    }) : this._worker.on(e, function() {
      _t.delay(r, arguments, t);
    }), this;
  },
  /**
   * Resume the flow of chunks.
   * @return {StreamHelper} the current helper.
   */
  resume: function() {
    return _t.delay(this._worker.resume, [], this._worker), this;
  },
  /**
   * Pause the flow of chunks.
   * @return {StreamHelper} the current helper.
   */
  pause: function() {
    return this._worker.pause(), this;
  },
  /**
   * Return a nodejs stream for this helper.
   * @param {Function} updateCb the update callback.
   * @return {NodejsStreamOutputAdapter} the nodejs stream.
   */
  toNodejsStream: function(e) {
    if (_t.checkSupport("nodestream"), this._outputType !== "nodebuffer")
      throw new Error(this._outputType + " is not supported by this method");
    return new Qo(this, {
      objectMode: this._outputType !== "nodebuffer"
    }, e);
  }
};
var tf = ef, Te = {};
Te.base64 = !1;
Te.binary = !1;
Te.dir = !1;
Te.createFolders = !0;
Te.date = null;
Te.compression = null;
Te.compressionOptions = null;
Te.comment = null;
Te.unixPermissions = null;
Te.dosPermissions = null;
var oi = le(), fi = Oe, Qc = 16 * 1024;
function Ut(e) {
  fi.call(this, "DataWorker");
  var r = this;
  this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(t) {
    r.dataIsReady = !0, r.data = t, r.max = t && t.length || 0, r.type = oi.getTypeOf(t), r.isPaused || r._tickAndRepeat();
  }, function(t) {
    r.error(t);
  });
}
oi.inherits(Ut, fi);
Ut.prototype.cleanUp = function() {
  fi.prototype.cleanUp.call(this), this.data = null;
};
Ut.prototype.resume = function() {
  return fi.prototype.resume.call(this) ? (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, oi.delay(this._tickAndRepeat, [], this)), !0) : !1;
};
Ut.prototype._tickAndRepeat = function() {
  this._tickScheduled = !1, !(this.isPaused || this.isFinished) && (this._tick(), this.isFinished || (oi.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
};
Ut.prototype._tick = function() {
  if (this.isPaused || this.isFinished)
    return !1;
  var e = Qc, r = null, t = Math.min(this.max, this.index + e);
  if (this.index >= this.max)
    return this.end();
  switch (this.type) {
    case "string":
      r = this.data.substring(this.index, t);
      break;
    case "uint8array":
      r = this.data.subarray(this.index, t);
      break;
    case "array":
    case "nodebuffer":
      r = this.data.slice(this.index, t);
      break;
  }
  return this.index = t, this.push({
    data: r,
    meta: {
      percent: this.max ? this.index / this.max * 100 : 0
    }
  });
};
var rf = Ut, ed = le();
function td() {
  for (var e, r = [], t = 0; t < 256; t++) {
    e = t;
    for (var i = 0; i < 8; i++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    r[t] = e;
  }
  return r;
}
var nf = td();
function rd(e, r, t, i) {
  var n = nf, a = i + t;
  e = e ^ -1;
  for (var s = i; s < a; s++)
    e = e >>> 8 ^ n[(e ^ r[s]) & 255];
  return e ^ -1;
}
function id(e, r, t, i) {
  var n = nf, a = i + t;
  e = e ^ -1;
  for (var s = i; s < a; s++)
    e = e >>> 8 ^ n[(e ^ r.charCodeAt(s)) & 255];
  return e ^ -1;
}
var qn = function(r, t) {
  if (typeof r > "u" || !r.length)
    return 0;
  var i = ed.getTypeOf(r) !== "string";
  return i ? rd(t | 0, r, r.length, 0) : id(t | 0, r, r.length, 0);
}, af = Oe, nd = qn, ad = le();
function Hn() {
  af.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
}
ad.inherits(Hn, af);
Hn.prototype.processChunk = function(e) {
  this.streamInfo.crc32 = nd(e.data, this.streamInfo.crc32 || 0), this.push(e);
};
var sf = Hn, sd = le(), Vn = Oe;
function Xn(e) {
  Vn.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
}
sd.inherits(Xn, Vn);
Xn.prototype.processChunk = function(e) {
  if (e) {
    var r = this.streamInfo[this.propName] || 0;
    this.streamInfo[this.propName] = r + e.data.length;
  }
  Vn.prototype.processChunk.call(this, e);
};
var od = Xn, ws = vr, Es = rf, fd = sf, mn = od;
function Yn(e, r, t, i, n) {
  this.compressedSize = e, this.uncompressedSize = r, this.crc32 = t, this.compression = i, this.compressedContent = n;
}
Yn.prototype = {
  /**
   * Create a worker to get the uncompressed content.
   * @return {GenericWorker} the worker.
   */
  getContentWorker: function() {
    var e = new Es(ws.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new mn("data_length")), r = this;
    return e.on("end", function() {
      if (this.streamInfo.data_length !== r.uncompressedSize)
        throw new Error("Bug : uncompressed data size mismatch");
    }), e;
  },
  /**
   * Create a worker to get the compressed content.
   * @return {GenericWorker} the worker.
   */
  getCompressedWorker: function() {
    return new Es(ws.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
  }
};
Yn.createWorkerFrom = function(e, r, t) {
  return e.pipe(new fd()).pipe(new mn("uncompressedSize")).pipe(r.compressWorker(t)).pipe(new mn("compressedSize")).withStreamInfo("compression", r);
};
var Kn = Yn, ld = tf, ud = rf, Hi = Mt, Vi = Kn, bs = Oe, Jn = function(e, r, t) {
  this.name = e, this.dir = t.dir, this.date = t.date, this.comment = t.comment, this.unixPermissions = t.unixPermissions, this.dosPermissions = t.dosPermissions, this._data = r, this._dataBinary = t.binary, this.options = {
    compression: t.compression,
    compressionOptions: t.compressionOptions
  };
};
Jn.prototype = {
  /**
   * Create an internal stream for the content of this object.
   * @param {String} type the type of each chunk.
   * @return StreamHelper the stream.
   */
  internalStream: function(e) {
    var r = null, t = "string";
    try {
      if (!e)
        throw new Error("No output type specified.");
      t = e.toLowerCase();
      var i = t === "string" || t === "text";
      (t === "binarystring" || t === "text") && (t = "string"), r = this._decompressWorker();
      var n = !this._dataBinary;
      n && !i && (r = r.pipe(new Hi.Utf8EncodeWorker())), !n && i && (r = r.pipe(new Hi.Utf8DecodeWorker()));
    } catch (a) {
      r = new bs("error"), r.error(a);
    }
    return new ld(r, t, "");
  },
  /**
   * Prepare the content in the asked type.
   * @param {String} type the type of the result.
   * @param {Function} onUpdate a function to call on each internal update.
   * @return Promise the promise of the result.
   */
  async: function(e, r) {
    return this.internalStream(e).accumulate(r);
  },
  /**
   * Prepare the content as a nodejs stream.
   * @param {String} type the type of each chunk.
   * @param {Function} onUpdate a function to call on each internal update.
   * @return Stream the stream.
   */
  nodeStream: function(e, r) {
    return this.internalStream(e || "nodebuffer").toNodejsStream(r);
  },
  /**
   * Return a worker for the compressed content.
   * @private
   * @param {Object} compression the compression object to use.
   * @param {Object} compressionOptions the options to use when compressing.
   * @return Worker the worker.
   */
  _compressWorker: function(e, r) {
    if (this._data instanceof Vi && this._data.compression.magic === e.magic)
      return this._data.getCompressedWorker();
    var t = this._decompressWorker();
    return this._dataBinary || (t = t.pipe(new Hi.Utf8EncodeWorker())), Vi.createWorkerFrom(t, e, r);
  },
  /**
   * Return a worker for the decompressed content.
   * @private
   * @return Worker the worker.
   */
  _decompressWorker: function() {
    return this._data instanceof Vi ? this._data.getContentWorker() : this._data instanceof bs ? this._data : new ud(this._data);
  }
};
var Ss = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], hd = function() {
  throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
};
for (var Xi = 0; Xi < Ss.length; Xi++)
  Jn.prototype[Ss[Xi]] = hd;
var cd = Jn, of = {}, li = {}, ui = {}, et = {};
(function(e) {
  var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
  function t(a, s) {
    return Object.prototype.hasOwnProperty.call(a, s);
  }
  e.assign = function(a) {
    for (var s = Array.prototype.slice.call(arguments, 1); s.length; ) {
      var f = s.shift();
      if (f) {
        if (typeof f != "object")
          throw new TypeError(f + "must be non-object");
        for (var h in f)
          t(f, h) && (a[h] = f[h]);
      }
    }
    return a;
  }, e.shrinkBuf = function(a, s) {
    return a.length === s ? a : a.subarray ? a.subarray(0, s) : (a.length = s, a);
  };
  var i = {
    arraySet: function(a, s, f, h, o) {
      if (s.subarray && a.subarray) {
        a.set(s.subarray(f, f + h), o);
        return;
      }
      for (var d = 0; d < h; d++)
        a[o + d] = s[f + d];
    },
    // Join array of chunks to single array.
    flattenChunks: function(a) {
      var s, f, h, o, d, g;
      for (h = 0, s = 0, f = a.length; s < f; s++)
        h += a[s].length;
      for (g = new Uint8Array(h), o = 0, s = 0, f = a.length; s < f; s++)
        d = a[s], g.set(d, o), o += d.length;
      return g;
    }
  }, n = {
    arraySet: function(a, s, f, h, o) {
      for (var d = 0; d < h; d++)
        a[o + d] = s[f + d];
    },
    // Join array of chunks to single array.
    flattenChunks: function(a) {
      return [].concat.apply([], a);
    }
  };
  e.setTyped = function(a) {
    a ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, i)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, n));
  }, e.setTyped(r);
})(et);
var pr = {}, Ge = {}, zt = {}, dd = et, vd = 4, ks = 0, xs = 1, pd = 2;
function Wt(e) {
  for (var r = e.length; --r >= 0; )
    e[r] = 0;
}
var _d = 0, ff = 1, md = 2, gd = 3, yd = 258, Qn = 29, _r = 256, or = _r + 1 + Qn, Ct = 30, ea = 19, lf = 2 * or + 1, ct = 15, Yi = 16, wd = 7, ta = 256, uf = 16, hf = 17, cf = 18, gn = (
  /* extra bits for each length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
), Wr = (
  /* extra bits for each distance code */
  [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
), Ed = (
  /* extra bits for each bit length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
), df = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], bd = 512, Je = new Array((or + 2) * 2);
Wt(Je);
var Qt = new Array(Ct * 2);
Wt(Qt);
var fr = new Array(bd);
Wt(fr);
var lr = new Array(yd - gd + 1);
Wt(lr);
var ra = new Array(Qn);
Wt(ra);
var Yr = new Array(Ct);
Wt(Yr);
function Ki(e, r, t, i, n) {
  this.static_tree = e, this.extra_bits = r, this.extra_base = t, this.elems = i, this.max_length = n, this.has_stree = e && e.length;
}
var vf, pf, _f;
function Ji(e, r) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = r;
}
function mf(e) {
  return e < 256 ? fr[e] : fr[256 + (e >>> 7)];
}
function ur(e, r) {
  e.pending_buf[e.pending++] = r & 255, e.pending_buf[e.pending++] = r >>> 8 & 255;
}
function ge(e, r, t) {
  e.bi_valid > Yi - t ? (e.bi_buf |= r << e.bi_valid & 65535, ur(e, e.bi_buf), e.bi_buf = r >> Yi - e.bi_valid, e.bi_valid += t - Yi) : (e.bi_buf |= r << e.bi_valid & 65535, e.bi_valid += t);
}
function Ue(e, r, t) {
  ge(
    e,
    t[r * 2],
    t[r * 2 + 1]
    /*.Len*/
  );
}
function gf(e, r) {
  var t = 0;
  do
    t |= e & 1, e >>>= 1, t <<= 1;
  while (--r > 0);
  return t >>> 1;
}
function Sd(e) {
  e.bi_valid === 16 ? (ur(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}
function kd(e, r) {
  var t = r.dyn_tree, i = r.max_code, n = r.stat_desc.static_tree, a = r.stat_desc.has_stree, s = r.stat_desc.extra_bits, f = r.stat_desc.extra_base, h = r.stat_desc.max_length, o, d, g, u, c, p, v = 0;
  for (u = 0; u <= ct; u++)
    e.bl_count[u] = 0;
  for (t[e.heap[e.heap_max] * 2 + 1] = 0, o = e.heap_max + 1; o < lf; o++)
    d = e.heap[o], u = t[t[d * 2 + 1] * 2 + 1] + 1, u > h && (u = h, v++), t[d * 2 + 1] = u, !(d > i) && (e.bl_count[u]++, c = 0, d >= f && (c = s[d - f]), p = t[d * 2], e.opt_len += p * (u + c), a && (e.static_len += p * (n[d * 2 + 1] + c)));
  if (v !== 0) {
    do {
      for (u = h - 1; e.bl_count[u] === 0; )
        u--;
      e.bl_count[u]--, e.bl_count[u + 1] += 2, e.bl_count[h]--, v -= 2;
    } while (v > 0);
    for (u = h; u !== 0; u--)
      for (d = e.bl_count[u]; d !== 0; )
        g = e.heap[--o], !(g > i) && (t[g * 2 + 1] !== u && (e.opt_len += (u - t[g * 2 + 1]) * t[g * 2], t[g * 2 + 1] = u), d--);
  }
}
function yf(e, r, t) {
  var i = new Array(ct + 1), n = 0, a, s;
  for (a = 1; a <= ct; a++)
    i[a] = n = n + t[a - 1] << 1;
  for (s = 0; s <= r; s++) {
    var f = e[s * 2 + 1];
    f !== 0 && (e[s * 2] = gf(i[f]++, f));
  }
}
function xd() {
  var e, r, t, i, n, a = new Array(ct + 1);
  for (t = 0, i = 0; i < Qn - 1; i++)
    for (ra[i] = t, e = 0; e < 1 << gn[i]; e++)
      lr[t++] = i;
  for (lr[t - 1] = i, n = 0, i = 0; i < 16; i++)
    for (Yr[i] = n, e = 0; e < 1 << Wr[i]; e++)
      fr[n++] = i;
  for (n >>= 7; i < Ct; i++)
    for (Yr[i] = n << 7, e = 0; e < 1 << Wr[i] - 7; e++)
      fr[256 + n++] = i;
  for (r = 0; r <= ct; r++)
    a[r] = 0;
  for (e = 0; e <= 143; )
    Je[e * 2 + 1] = 8, e++, a[8]++;
  for (; e <= 255; )
    Je[e * 2 + 1] = 9, e++, a[9]++;
  for (; e <= 279; )
    Je[e * 2 + 1] = 7, e++, a[7]++;
  for (; e <= 287; )
    Je[e * 2 + 1] = 8, e++, a[8]++;
  for (yf(Je, or + 1, a), e = 0; e < Ct; e++)
    Qt[e * 2 + 1] = 5, Qt[e * 2] = gf(e, 5);
  vf = new Ki(Je, gn, _r + 1, or, ct), pf = new Ki(Qt, Wr, 0, Ct, ct), _f = new Ki(new Array(0), Ed, 0, ea, wd);
}
function wf(e) {
  var r;
  for (r = 0; r < or; r++)
    e.dyn_ltree[r * 2] = 0;
  for (r = 0; r < Ct; r++)
    e.dyn_dtree[r * 2] = 0;
  for (r = 0; r < ea; r++)
    e.bl_tree[r * 2] = 0;
  e.dyn_ltree[ta * 2] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
}
function Ef(e) {
  e.bi_valid > 8 ? ur(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}
function Rd(e, r, t, i) {
  Ef(e), ur(e, t), ur(e, ~t), dd.arraySet(e.pending_buf, e.window, r, t, e.pending), e.pending += t;
}
function Rs(e, r, t, i) {
  var n = r * 2, a = t * 2;
  return e[n] < e[a] || e[n] === e[a] && i[r] <= i[t];
}
function Qi(e, r, t) {
  for (var i = e.heap[t], n = t << 1; n <= e.heap_len && (n < e.heap_len && Rs(r, e.heap[n + 1], e.heap[n], e.depth) && n++, !Rs(r, i, e.heap[n], e.depth)); )
    e.heap[t] = e.heap[n], t = n, n <<= 1;
  e.heap[t] = i;
}
function Os(e, r, t) {
  var i, n, a = 0, s, f;
  if (e.last_lit !== 0)
    do
      i = e.pending_buf[e.d_buf + a * 2] << 8 | e.pending_buf[e.d_buf + a * 2 + 1], n = e.pending_buf[e.l_buf + a], a++, i === 0 ? Ue(e, n, r) : (s = lr[n], Ue(e, s + _r + 1, r), f = gn[s], f !== 0 && (n -= ra[s], ge(e, n, f)), i--, s = mf(i), Ue(e, s, t), f = Wr[s], f !== 0 && (i -= Yr[s], ge(e, i, f)));
    while (a < e.last_lit);
  Ue(e, ta, r);
}
function yn(e, r) {
  var t = r.dyn_tree, i = r.stat_desc.static_tree, n = r.stat_desc.has_stree, a = r.stat_desc.elems, s, f, h = -1, o;
  for (e.heap_len = 0, e.heap_max = lf, s = 0; s < a; s++)
    t[s * 2] !== 0 ? (e.heap[++e.heap_len] = h = s, e.depth[s] = 0) : t[s * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    o = e.heap[++e.heap_len] = h < 2 ? ++h : 0, t[o * 2] = 1, e.depth[o] = 0, e.opt_len--, n && (e.static_len -= i[o * 2 + 1]);
  for (r.max_code = h, s = e.heap_len >> 1; s >= 1; s--)
    Qi(e, t, s);
  o = a;
  do
    s = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], Qi(
      e,
      t,
      1
      /*SMALLEST*/
    ), f = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[--e.heap_max] = s, e.heap[--e.heap_max] = f, t[o * 2] = t[s * 2] + t[f * 2], e.depth[o] = (e.depth[s] >= e.depth[f] ? e.depth[s] : e.depth[f]) + 1, t[s * 2 + 1] = t[f * 2 + 1] = o, e.heap[
      1
      /*SMALLEST*/
    ] = o++, Qi(
      e,
      t,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], kd(e, r), yf(t, h, e.bl_count);
}
function Ts(e, r, t) {
  var i, n = -1, a, s = r[0 * 2 + 1], f = 0, h = 7, o = 4;
  for (s === 0 && (h = 138, o = 3), r[(t + 1) * 2 + 1] = 65535, i = 0; i <= t; i++)
    a = s, s = r[(i + 1) * 2 + 1], !(++f < h && a === s) && (f < o ? e.bl_tree[a * 2] += f : a !== 0 ? (a !== n && e.bl_tree[a * 2]++, e.bl_tree[uf * 2]++) : f <= 10 ? e.bl_tree[hf * 2]++ : e.bl_tree[cf * 2]++, f = 0, n = a, s === 0 ? (h = 138, o = 3) : a === s ? (h = 6, o = 3) : (h = 7, o = 4));
}
function As(e, r, t) {
  var i, n = -1, a, s = r[0 * 2 + 1], f = 0, h = 7, o = 4;
  for (s === 0 && (h = 138, o = 3), i = 0; i <= t; i++)
    if (a = s, s = r[(i + 1) * 2 + 1], !(++f < h && a === s)) {
      if (f < o)
        do
          Ue(e, a, e.bl_tree);
        while (--f !== 0);
      else a !== 0 ? (a !== n && (Ue(e, a, e.bl_tree), f--), Ue(e, uf, e.bl_tree), ge(e, f - 3, 2)) : f <= 10 ? (Ue(e, hf, e.bl_tree), ge(e, f - 3, 3)) : (Ue(e, cf, e.bl_tree), ge(e, f - 11, 7));
      f = 0, n = a, s === 0 ? (h = 138, o = 3) : a === s ? (h = 6, o = 3) : (h = 7, o = 4);
    }
}
function Od(e) {
  var r;
  for (Ts(e, e.dyn_ltree, e.l_desc.max_code), Ts(e, e.dyn_dtree, e.d_desc.max_code), yn(e, e.bl_desc), r = ea - 1; r >= 3 && e.bl_tree[df[r] * 2 + 1] === 0; r--)
    ;
  return e.opt_len += 3 * (r + 1) + 5 + 5 + 4, r;
}
function Td(e, r, t, i) {
  var n;
  for (ge(e, r - 257, 5), ge(e, t - 1, 5), ge(e, i - 4, 4), n = 0; n < i; n++)
    ge(e, e.bl_tree[df[n] * 2 + 1], 3);
  As(e, e.dyn_ltree, r - 1), As(e, e.dyn_dtree, t - 1);
}
function Ad(e) {
  var r = 4093624447, t;
  for (t = 0; t <= 31; t++, r >>>= 1)
    if (r & 1 && e.dyn_ltree[t * 2] !== 0)
      return ks;
  if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0)
    return xs;
  for (t = 32; t < _r; t++)
    if (e.dyn_ltree[t * 2] !== 0)
      return xs;
  return ks;
}
var $s = !1;
function $d(e) {
  $s || (xd(), $s = !0), e.l_desc = new Ji(e.dyn_ltree, vf), e.d_desc = new Ji(e.dyn_dtree, pf), e.bl_desc = new Ji(e.bl_tree, _f), e.bi_buf = 0, e.bi_valid = 0, wf(e);
}
function bf(e, r, t, i) {
  ge(e, (_d << 1) + (i ? 1 : 0), 3), Rd(e, r, t);
}
function Id(e) {
  ge(e, ff << 1, 3), Ue(e, ta, Je), Sd(e);
}
function Cd(e, r, t, i) {
  var n, a, s = 0;
  e.level > 0 ? (e.strm.data_type === pd && (e.strm.data_type = Ad(e)), yn(e, e.l_desc), yn(e, e.d_desc), s = Od(e), n = e.opt_len + 3 + 7 >>> 3, a = e.static_len + 3 + 7 >>> 3, a <= n && (n = a)) : n = a = t + 5, t + 4 <= n && r !== -1 ? bf(e, r, t, i) : e.strategy === vd || a === n ? (ge(e, (ff << 1) + (i ? 1 : 0), 3), Os(e, Je, Qt)) : (ge(e, (md << 1) + (i ? 1 : 0), 3), Td(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), Os(e, e.dyn_ltree, e.dyn_dtree)), wf(e), i && Ef(e);
}
function Nd(e, r, t) {
  return e.pending_buf[e.d_buf + e.last_lit * 2] = r >>> 8 & 255, e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = r & 255, e.pending_buf[e.l_buf + e.last_lit] = t & 255, e.last_lit++, r === 0 ? e.dyn_ltree[t * 2]++ : (e.matches++, r--, e.dyn_ltree[(lr[t] + _r + 1) * 2]++, e.dyn_dtree[mf(r) * 2]++), e.last_lit === e.lit_bufsize - 1;
}
zt._tr_init = $d;
zt._tr_stored_block = bf;
zt._tr_flush_block = Cd;
zt._tr_tally = Nd;
zt._tr_align = Id;
function Ld(e, r, t, i) {
  for (var n = e & 65535 | 0, a = e >>> 16 & 65535 | 0, s = 0; t !== 0; ) {
    s = t > 2e3 ? 2e3 : t, t -= s;
    do
      n = n + r[i++] | 0, a = a + n | 0;
    while (--s);
    n %= 65521, a %= 65521;
  }
  return n | a << 16 | 0;
}
var Sf = Ld;
function Dd() {
  for (var e, r = [], t = 0; t < 256; t++) {
    e = t;
    for (var i = 0; i < 8; i++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    r[t] = e;
  }
  return r;
}
var Pd = Dd();
function jd(e, r, t, i) {
  var n = Pd, a = i + t;
  e ^= -1;
  for (var s = i; s < a; s++)
    e = e >>> 8 ^ n[(e ^ r[s]) & 255];
  return e ^ -1;
}
var kf = jd, ia = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, _e = et, Se = zt, xf = Sf, it = kf, Fd = ia, bt = 0, Bd = 1, Md = 3, ft = 4, Is = 5, ze = 0, Cs = 1, ke = -2, Ud = -3, en = -5, zd = -1, Wd = 1, Nr = 2, Gd = 3, Zd = 4, qd = 0, Hd = 2, hi = 8, Vd = 9, Xd = 15, Yd = 8, Kd = 29, Jd = 256, wn = Jd + 1 + Kd, Qd = 30, ev = 19, tv = 2 * wn + 1, rv = 15, ee = 3, st = 258, Ie = st + ee + 1, iv = 32, ci = 42, En = 69, Gr = 73, Zr = 91, qr = 103, dt = 113, Jt = 666, ce = 1, mr = 2, mt = 3, Gt = 4, nv = 3;
function ot(e, r) {
  return e.msg = Fd[r], r;
}
function Ns(e) {
  return (e << 1) - (e > 4 ? 9 : 0);
}
function at(e) {
  for (var r = e.length; --r >= 0; )
    e[r] = 0;
}
function nt(e) {
  var r = e.state, t = r.pending;
  t > e.avail_out && (t = e.avail_out), t !== 0 && (_e.arraySet(e.output, r.pending_buf, r.pending_out, t, e.next_out), e.next_out += t, r.pending_out += t, e.total_out += t, e.avail_out -= t, r.pending -= t, r.pending === 0 && (r.pending_out = 0));
}
function pe(e, r) {
  Se._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, r), e.block_start = e.strstart, nt(e.strm);
}
function te(e, r) {
  e.pending_buf[e.pending++] = r;
}
function Yt(e, r) {
  e.pending_buf[e.pending++] = r >>> 8 & 255, e.pending_buf[e.pending++] = r & 255;
}
function av(e, r, t, i) {
  var n = e.avail_in;
  return n > i && (n = i), n === 0 ? 0 : (e.avail_in -= n, _e.arraySet(r, e.input, e.next_in, n, t), e.state.wrap === 1 ? e.adler = xf(e.adler, r, n, t) : e.state.wrap === 2 && (e.adler = it(e.adler, r, n, t)), e.next_in += n, e.total_in += n, n);
}
function Rf(e, r) {
  var t = e.max_chain_length, i = e.strstart, n, a, s = e.prev_length, f = e.nice_match, h = e.strstart > e.w_size - Ie ? e.strstart - (e.w_size - Ie) : 0, o = e.window, d = e.w_mask, g = e.prev, u = e.strstart + st, c = o[i + s - 1], p = o[i + s];
  e.prev_length >= e.good_match && (t >>= 2), f > e.lookahead && (f = e.lookahead);
  do
    if (n = r, !(o[n + s] !== p || o[n + s - 1] !== c || o[n] !== o[i] || o[++n] !== o[i + 1])) {
      i += 2, n++;
      do
        ;
      while (o[++i] === o[++n] && o[++i] === o[++n] && o[++i] === o[++n] && o[++i] === o[++n] && o[++i] === o[++n] && o[++i] === o[++n] && o[++i] === o[++n] && o[++i] === o[++n] && i < u);
      if (a = st - (u - i), i = u - st, a > s) {
        if (e.match_start = r, s = a, a >= f)
          break;
        c = o[i + s - 1], p = o[i + s];
      }
    }
  while ((r = g[r & d]) > h && --t !== 0);
  return s <= e.lookahead ? s : e.lookahead;
}
function gt(e) {
  var r = e.w_size, t, i, n, a, s;
  do {
    if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= r + (r - Ie)) {
      _e.arraySet(e.window, e.window, r, r, 0), e.match_start -= r, e.strstart -= r, e.block_start -= r, i = e.hash_size, t = i;
      do
        n = e.head[--t], e.head[t] = n >= r ? n - r : 0;
      while (--i);
      i = r, t = i;
      do
        n = e.prev[--t], e.prev[t] = n >= r ? n - r : 0;
      while (--i);
      a += r;
    }
    if (e.strm.avail_in === 0)
      break;
    if (i = av(e.strm, e.window, e.strstart + e.lookahead, a), e.lookahead += i, e.lookahead + e.insert >= ee)
      for (s = e.strstart - e.insert, e.ins_h = e.window[s], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[s + ee - 1]) & e.hash_mask, e.prev[s & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = s, s++, e.insert--, !(e.lookahead + e.insert < ee)); )
        ;
  } while (e.lookahead < Ie && e.strm.avail_in !== 0);
}
function sv(e, r) {
  var t = 65535;
  for (t > e.pending_buf_size - 5 && (t = e.pending_buf_size - 5); ; ) {
    if (e.lookahead <= 1) {
      if (gt(e), e.lookahead === 0 && r === bt)
        return ce;
      if (e.lookahead === 0)
        break;
    }
    e.strstart += e.lookahead, e.lookahead = 0;
    var i = e.block_start + t;
    if ((e.strstart === 0 || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, pe(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - Ie && (pe(e, !1), e.strm.avail_out === 0))
      return ce;
  }
  return e.insert = 0, r === ft ? (pe(e, !0), e.strm.avail_out === 0 ? mt : Gt) : (e.strstart > e.block_start && (pe(e, !1), e.strm.avail_out === 0), ce);
}
function tn(e, r) {
  for (var t, i; ; ) {
    if (e.lookahead < Ie) {
      if (gt(e), e.lookahead < Ie && r === bt)
        return ce;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= ee && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + ee - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), t !== 0 && e.strstart - t <= e.w_size - Ie && (e.match_length = Rf(e, t)), e.match_length >= ee)
      if (i = Se._tr_tally(e, e.strstart - e.match_start, e.match_length - ee), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= ee) {
        e.match_length--;
        do
          e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + ee - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
    else
      i = Se._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (i && (pe(e, !1), e.strm.avail_out === 0))
      return ce;
  }
  return e.insert = e.strstart < ee - 1 ? e.strstart : ee - 1, r === ft ? (pe(e, !0), e.strm.avail_out === 0 ? mt : Gt) : e.last_lit && (pe(e, !1), e.strm.avail_out === 0) ? ce : mr;
}
function Ot(e, r) {
  for (var t, i, n; ; ) {
    if (e.lookahead < Ie) {
      if (gt(e), e.lookahead < Ie && r === bt)
        return ce;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= ee && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + ee - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = ee - 1, t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - Ie && (e.match_length = Rf(e, t), e.match_length <= 5 && (e.strategy === Wd || e.match_length === ee && e.strstart - e.match_start > 4096) && (e.match_length = ee - 1)), e.prev_length >= ee && e.match_length <= e.prev_length) {
      n = e.strstart + e.lookahead - ee, i = Se._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - ee), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= n && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + ee - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = ee - 1, e.strstart++, i && (pe(e, !1), e.strm.avail_out === 0))
        return ce;
    } else if (e.match_available) {
      if (i = Se._tr_tally(e, 0, e.window[e.strstart - 1]), i && pe(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return ce;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (i = Se._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < ee - 1 ? e.strstart : ee - 1, r === ft ? (pe(e, !0), e.strm.avail_out === 0 ? mt : Gt) : e.last_lit && (pe(e, !1), e.strm.avail_out === 0) ? ce : mr;
}
function ov(e, r) {
  for (var t, i, n, a, s = e.window; ; ) {
    if (e.lookahead <= st) {
      if (gt(e), e.lookahead <= st && r === bt)
        return ce;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= ee && e.strstart > 0 && (n = e.strstart - 1, i = s[n], i === s[++n] && i === s[++n] && i === s[++n])) {
      a = e.strstart + st;
      do
        ;
      while (i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && n < a);
      e.match_length = st - (a - n), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= ee ? (t = Se._tr_tally(e, 1, e.match_length - ee), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = Se._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (pe(e, !1), e.strm.avail_out === 0))
      return ce;
  }
  return e.insert = 0, r === ft ? (pe(e, !0), e.strm.avail_out === 0 ? mt : Gt) : e.last_lit && (pe(e, !1), e.strm.avail_out === 0) ? ce : mr;
}
function fv(e, r) {
  for (var t; ; ) {
    if (e.lookahead === 0 && (gt(e), e.lookahead === 0)) {
      if (r === bt)
        return ce;
      break;
    }
    if (e.match_length = 0, t = Se._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (pe(e, !1), e.strm.avail_out === 0))
      return ce;
  }
  return e.insert = 0, r === ft ? (pe(e, !0), e.strm.avail_out === 0 ? mt : Gt) : e.last_lit && (pe(e, !1), e.strm.avail_out === 0) ? ce : mr;
}
function je(e, r, t, i, n) {
  this.good_length = e, this.max_lazy = r, this.nice_length = t, this.max_chain = i, this.func = n;
}
var $t;
$t = [
  /*      good lazy nice chain */
  new je(0, 0, 0, 0, sv),
  /* 0 store only */
  new je(4, 4, 8, 4, tn),
  /* 1 max speed, no lazy matches */
  new je(4, 5, 16, 8, tn),
  /* 2 */
  new je(4, 6, 32, 32, tn),
  /* 3 */
  new je(4, 4, 16, 16, Ot),
  /* 4 lazy matches */
  new je(8, 16, 32, 32, Ot),
  /* 5 */
  new je(8, 16, 128, 128, Ot),
  /* 6 */
  new je(8, 32, 128, 256, Ot),
  /* 7 */
  new je(32, 128, 258, 1024, Ot),
  /* 8 */
  new je(32, 258, 258, 4096, Ot)
  /* 9 max compression */
];
function lv(e) {
  e.window_size = 2 * e.w_size, at(e.head), e.max_lazy_match = $t[e.level].max_lazy, e.good_match = $t[e.level].good_length, e.nice_match = $t[e.level].nice_length, e.max_chain_length = $t[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = ee - 1, e.match_available = 0, e.ins_h = 0;
}
function uv() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = hi, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new _e.Buf16(tv * 2), this.dyn_dtree = new _e.Buf16((2 * Qd + 1) * 2), this.bl_tree = new _e.Buf16((2 * ev + 1) * 2), at(this.dyn_ltree), at(this.dyn_dtree), at(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new _e.Buf16(rv + 1), this.heap = new _e.Buf16(2 * wn + 1), at(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new _e.Buf16(2 * wn + 1), at(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
function Of(e) {
  var r;
  return !e || !e.state ? ot(e, ke) : (e.total_in = e.total_out = 0, e.data_type = Hd, r = e.state, r.pending = 0, r.pending_out = 0, r.wrap < 0 && (r.wrap = -r.wrap), r.status = r.wrap ? ci : dt, e.adler = r.wrap === 2 ? 0 : 1, r.last_flush = bt, Se._tr_init(r), ze);
}
function Tf(e) {
  var r = Of(e);
  return r === ze && lv(e.state), r;
}
function hv(e, r) {
  return !e || !e.state || e.state.wrap !== 2 ? ke : (e.state.gzhead = r, ze);
}
function Af(e, r, t, i, n, a) {
  if (!e)
    return ke;
  var s = 1;
  if (r === zd && (r = 6), i < 0 ? (s = 0, i = -i) : i > 15 && (s = 2, i -= 16), n < 1 || n > Vd || t !== hi || i < 8 || i > 15 || r < 0 || r > 9 || a < 0 || a > Zd)
    return ot(e, ke);
  i === 8 && (i = 9);
  var f = new uv();
  return e.state = f, f.strm = e, f.wrap = s, f.gzhead = null, f.w_bits = i, f.w_size = 1 << f.w_bits, f.w_mask = f.w_size - 1, f.hash_bits = n + 7, f.hash_size = 1 << f.hash_bits, f.hash_mask = f.hash_size - 1, f.hash_shift = ~~((f.hash_bits + ee - 1) / ee), f.window = new _e.Buf8(f.w_size * 2), f.head = new _e.Buf16(f.hash_size), f.prev = new _e.Buf16(f.w_size), f.lit_bufsize = 1 << n + 6, f.pending_buf_size = f.lit_bufsize * 4, f.pending_buf = new _e.Buf8(f.pending_buf_size), f.d_buf = 1 * f.lit_bufsize, f.l_buf = 3 * f.lit_bufsize, f.level = r, f.strategy = a, f.method = t, Tf(e);
}
function cv(e, r) {
  return Af(e, r, hi, Xd, Yd, qd);
}
function dv(e, r) {
  var t, i, n, a;
  if (!e || !e.state || r > Is || r < 0)
    return e ? ot(e, ke) : ke;
  if (i = e.state, !e.output || !e.input && e.avail_in !== 0 || i.status === Jt && r !== ft)
    return ot(e, e.avail_out === 0 ? en : ke);
  if (i.strm = e, t = i.last_flush, i.last_flush = r, i.status === ci)
    if (i.wrap === 2)
      e.adler = 0, te(i, 31), te(i, 139), te(i, 8), i.gzhead ? (te(
        i,
        (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)
      ), te(i, i.gzhead.time & 255), te(i, i.gzhead.time >> 8 & 255), te(i, i.gzhead.time >> 16 & 255), te(i, i.gzhead.time >> 24 & 255), te(i, i.level === 9 ? 2 : i.strategy >= Nr || i.level < 2 ? 4 : 0), te(i, i.gzhead.os & 255), i.gzhead.extra && i.gzhead.extra.length && (te(i, i.gzhead.extra.length & 255), te(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = it(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = En) : (te(i, 0), te(i, 0), te(i, 0), te(i, 0), te(i, 0), te(i, i.level === 9 ? 2 : i.strategy >= Nr || i.level < 2 ? 4 : 0), te(i, nv), i.status = dt);
    else {
      var s = hi + (i.w_bits - 8 << 4) << 8, f = -1;
      i.strategy >= Nr || i.level < 2 ? f = 0 : i.level < 6 ? f = 1 : i.level === 6 ? f = 2 : f = 3, s |= f << 6, i.strstart !== 0 && (s |= iv), s += 31 - s % 31, i.status = dt, Yt(i, s), i.strstart !== 0 && (Yt(i, e.adler >>> 16), Yt(i, e.adler & 65535)), e.adler = 1;
    }
  if (i.status === En)
    if (i.gzhead.extra) {
      for (n = i.pending; i.gzindex < (i.gzhead.extra.length & 65535) && !(i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (e.adler = it(e.adler, i.pending_buf, i.pending - n, n)), nt(e), n = i.pending, i.pending === i.pending_buf_size)); )
        te(i, i.gzhead.extra[i.gzindex] & 255), i.gzindex++;
      i.gzhead.hcrc && i.pending > n && (e.adler = it(e.adler, i.pending_buf, i.pending - n, n)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = Gr);
    } else
      i.status = Gr;
  if (i.status === Gr)
    if (i.gzhead.name) {
      n = i.pending;
      do {
        if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (e.adler = it(e.adler, i.pending_buf, i.pending - n, n)), nt(e), n = i.pending, i.pending === i.pending_buf_size)) {
          a = 1;
          break;
        }
        i.gzindex < i.gzhead.name.length ? a = i.gzhead.name.charCodeAt(i.gzindex++) & 255 : a = 0, te(i, a);
      } while (a !== 0);
      i.gzhead.hcrc && i.pending > n && (e.adler = it(e.adler, i.pending_buf, i.pending - n, n)), a === 0 && (i.gzindex = 0, i.status = Zr);
    } else
      i.status = Zr;
  if (i.status === Zr)
    if (i.gzhead.comment) {
      n = i.pending;
      do {
        if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (e.adler = it(e.adler, i.pending_buf, i.pending - n, n)), nt(e), n = i.pending, i.pending === i.pending_buf_size)) {
          a = 1;
          break;
        }
        i.gzindex < i.gzhead.comment.length ? a = i.gzhead.comment.charCodeAt(i.gzindex++) & 255 : a = 0, te(i, a);
      } while (a !== 0);
      i.gzhead.hcrc && i.pending > n && (e.adler = it(e.adler, i.pending_buf, i.pending - n, n)), a === 0 && (i.status = qr);
    } else
      i.status = qr;
  if (i.status === qr && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && nt(e), i.pending + 2 <= i.pending_buf_size && (te(i, e.adler & 255), te(i, e.adler >> 8 & 255), e.adler = 0, i.status = dt)) : i.status = dt), i.pending !== 0) {
    if (nt(e), e.avail_out === 0)
      return i.last_flush = -1, ze;
  } else if (e.avail_in === 0 && Ns(r) <= Ns(t) && r !== ft)
    return ot(e, en);
  if (i.status === Jt && e.avail_in !== 0)
    return ot(e, en);
  if (e.avail_in !== 0 || i.lookahead !== 0 || r !== bt && i.status !== Jt) {
    var h = i.strategy === Nr ? fv(i, r) : i.strategy === Gd ? ov(i, r) : $t[i.level].func(i, r);
    if ((h === mt || h === Gt) && (i.status = Jt), h === ce || h === mt)
      return e.avail_out === 0 && (i.last_flush = -1), ze;
    if (h === mr && (r === Bd ? Se._tr_align(i) : r !== Is && (Se._tr_stored_block(i, 0, 0, !1), r === Md && (at(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), nt(e), e.avail_out === 0))
      return i.last_flush = -1, ze;
  }
  return r !== ft ? ze : i.wrap <= 0 ? Cs : (i.wrap === 2 ? (te(i, e.adler & 255), te(i, e.adler >> 8 & 255), te(i, e.adler >> 16 & 255), te(i, e.adler >> 24 & 255), te(i, e.total_in & 255), te(i, e.total_in >> 8 & 255), te(i, e.total_in >> 16 & 255), te(i, e.total_in >> 24 & 255)) : (Yt(i, e.adler >>> 16), Yt(i, e.adler & 65535)), nt(e), i.wrap > 0 && (i.wrap = -i.wrap), i.pending !== 0 ? ze : Cs);
}
function vv(e) {
  var r;
  return !e || !e.state ? ke : (r = e.state.status, r !== ci && r !== En && r !== Gr && r !== Zr && r !== qr && r !== dt && r !== Jt ? ot(e, ke) : (e.state = null, r === dt ? ot(e, Ud) : ze));
}
function pv(e, r) {
  var t = r.length, i, n, a, s, f, h, o, d;
  if (!e || !e.state || (i = e.state, s = i.wrap, s === 2 || s === 1 && i.status !== ci || i.lookahead))
    return ke;
  for (s === 1 && (e.adler = xf(e.adler, r, t, 0)), i.wrap = 0, t >= i.w_size && (s === 0 && (at(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0), d = new _e.Buf8(i.w_size), _e.arraySet(d, r, t - i.w_size, i.w_size, 0), r = d, t = i.w_size), f = e.avail_in, h = e.next_in, o = e.input, e.avail_in = t, e.next_in = 0, e.input = r, gt(i); i.lookahead >= ee; ) {
    n = i.strstart, a = i.lookahead - (ee - 1);
    do
      i.ins_h = (i.ins_h << i.hash_shift ^ i.window[n + ee - 1]) & i.hash_mask, i.prev[n & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = n, n++;
    while (--a);
    i.strstart = n, i.lookahead = ee - 1, gt(i);
  }
  return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = ee - 1, i.match_available = 0, e.next_in = h, e.input = o, e.avail_in = f, i.wrap = s, ze;
}
Ge.deflateInit = cv;
Ge.deflateInit2 = Af;
Ge.deflateReset = Tf;
Ge.deflateResetKeep = Of;
Ge.deflateSetHeader = hv;
Ge.deflate = dv;
Ge.deflateEnd = vv;
Ge.deflateSetDictionary = pv;
Ge.deflateInfo = "pako deflate (from Nodeca project)";
var St = {}, di = et, $f = !0, If = !0;
try {
  String.fromCharCode.apply(null, [0]);
} catch {
  $f = !1;
}
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  If = !1;
}
var hr = new di.Buf8(256);
for (var tt = 0; tt < 256; tt++)
  hr[tt] = tt >= 252 ? 6 : tt >= 248 ? 5 : tt >= 240 ? 4 : tt >= 224 ? 3 : tt >= 192 ? 2 : 1;
hr[254] = hr[254] = 1;
St.string2buf = function(e) {
  var r, t, i, n, a, s = e.length, f = 0;
  for (n = 0; n < s; n++)
    t = e.charCodeAt(n), (t & 64512) === 55296 && n + 1 < s && (i = e.charCodeAt(n + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), n++)), f += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (r = new di.Buf8(f), a = 0, n = 0; a < f; n++)
    t = e.charCodeAt(n), (t & 64512) === 55296 && n + 1 < s && (i = e.charCodeAt(n + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), n++)), t < 128 ? r[a++] = t : t < 2048 ? (r[a++] = 192 | t >>> 6, r[a++] = 128 | t & 63) : t < 65536 ? (r[a++] = 224 | t >>> 12, r[a++] = 128 | t >>> 6 & 63, r[a++] = 128 | t & 63) : (r[a++] = 240 | t >>> 18, r[a++] = 128 | t >>> 12 & 63, r[a++] = 128 | t >>> 6 & 63, r[a++] = 128 | t & 63);
  return r;
};
function Cf(e, r) {
  if (r < 65534 && (e.subarray && If || !e.subarray && $f))
    return String.fromCharCode.apply(null, di.shrinkBuf(e, r));
  for (var t = "", i = 0; i < r; i++)
    t += String.fromCharCode(e[i]);
  return t;
}
St.buf2binstring = function(e) {
  return Cf(e, e.length);
};
St.binstring2buf = function(e) {
  for (var r = new di.Buf8(e.length), t = 0, i = r.length; t < i; t++)
    r[t] = e.charCodeAt(t);
  return r;
};
St.buf2string = function(e, r) {
  var t, i, n, a, s = r || e.length, f = new Array(s * 2);
  for (i = 0, t = 0; t < s; ) {
    if (n = e[t++], n < 128) {
      f[i++] = n;
      continue;
    }
    if (a = hr[n], a > 4) {
      f[i++] = 65533, t += a - 1;
      continue;
    }
    for (n &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && t < s; )
      n = n << 6 | e[t++] & 63, a--;
    if (a > 1) {
      f[i++] = 65533;
      continue;
    }
    n < 65536 ? f[i++] = n : (n -= 65536, f[i++] = 55296 | n >> 10 & 1023, f[i++] = 56320 | n & 1023);
  }
  return Cf(f, i);
};
St.utf8border = function(e, r) {
  var t;
  for (r = r || e.length, r > e.length && (r = e.length), t = r - 1; t >= 0 && (e[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? r : t + hr[e[t]] > r ? t : r;
};
function _v() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Nf = _v, er = Ge, tr = et, bn = St, Sn = ia, mv = Nf, Lf = Object.prototype.toString, gv = 0, rn = 4, Nt = 0, Ls = 1, Ds = 2, yv = -1, wv = 0, Ev = 8;
function yt(e) {
  if (!(this instanceof yt)) return new yt(e);
  this.options = tr.assign({
    level: yv,
    method: Ev,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: wv,
    to: ""
  }, e || {});
  var r = this.options;
  r.raw && r.windowBits > 0 ? r.windowBits = -r.windowBits : r.gzip && r.windowBits > 0 && r.windowBits < 16 && (r.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new mv(), this.strm.avail_out = 0;
  var t = er.deflateInit2(
    this.strm,
    r.level,
    r.method,
    r.windowBits,
    r.memLevel,
    r.strategy
  );
  if (t !== Nt)
    throw new Error(Sn[t]);
  if (r.header && er.deflateSetHeader(this.strm, r.header), r.dictionary) {
    var i;
    if (typeof r.dictionary == "string" ? i = bn.string2buf(r.dictionary) : Lf.call(r.dictionary) === "[object ArrayBuffer]" ? i = new Uint8Array(r.dictionary) : i = r.dictionary, t = er.deflateSetDictionary(this.strm, i), t !== Nt)
      throw new Error(Sn[t]);
    this._dict_set = !0;
  }
}
yt.prototype.push = function(e, r) {
  var t = this.strm, i = this.options.chunkSize, n, a;
  if (this.ended)
    return !1;
  a = r === ~~r ? r : r === !0 ? rn : gv, typeof e == "string" ? t.input = bn.string2buf(e) : Lf.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length;
  do {
    if (t.avail_out === 0 && (t.output = new tr.Buf8(i), t.next_out = 0, t.avail_out = i), n = er.deflate(t, a), n !== Ls && n !== Nt)
      return this.onEnd(n), this.ended = !0, !1;
    (t.avail_out === 0 || t.avail_in === 0 && (a === rn || a === Ds)) && (this.options.to === "string" ? this.onData(bn.buf2binstring(tr.shrinkBuf(t.output, t.next_out))) : this.onData(tr.shrinkBuf(t.output, t.next_out)));
  } while ((t.avail_in > 0 || t.avail_out === 0) && n !== Ls);
  return a === rn ? (n = er.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === Nt) : (a === Ds && (this.onEnd(Nt), t.avail_out = 0), !0);
};
yt.prototype.onData = function(e) {
  this.chunks.push(e);
};
yt.prototype.onEnd = function(e) {
  e === Nt && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = tr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function na(e, r) {
  var t = new yt(r);
  if (t.push(e, !0), t.err)
    throw t.msg || Sn[t.err];
  return t.result;
}
function bv(e, r) {
  return r = r || {}, r.raw = !0, na(e, r);
}
function Sv(e, r) {
  return r = r || {}, r.gzip = !0, na(e, r);
}
pr.Deflate = yt;
pr.deflate = na;
pr.deflateRaw = bv;
pr.gzip = Sv;
var gr = {}, Le = {}, Lr = 30, kv = 12, xv = function(r, t) {
  var i, n, a, s, f, h, o, d, g, u, c, p, v, x, l, _, R, m, E, $, A, T, b, I, O;
  i = r.state, n = r.next_in, I = r.input, a = n + (r.avail_in - 5), s = r.next_out, O = r.output, f = s - (t - r.avail_out), h = s + (r.avail_out - 257), o = i.dmax, d = i.wsize, g = i.whave, u = i.wnext, c = i.window, p = i.hold, v = i.bits, x = i.lencode, l = i.distcode, _ = (1 << i.lenbits) - 1, R = (1 << i.distbits) - 1;
  e:
    do {
      v < 15 && (p += I[n++] << v, v += 8, p += I[n++] << v, v += 8), m = x[p & _];
      t:
        for (; ; ) {
          if (E = m >>> 24, p >>>= E, v -= E, E = m >>> 16 & 255, E === 0)
            O[s++] = m & 65535;
          else if (E & 16) {
            $ = m & 65535, E &= 15, E && (v < E && (p += I[n++] << v, v += 8), $ += p & (1 << E) - 1, p >>>= E, v -= E), v < 15 && (p += I[n++] << v, v += 8, p += I[n++] << v, v += 8), m = l[p & R];
            r:
              for (; ; ) {
                if (E = m >>> 24, p >>>= E, v -= E, E = m >>> 16 & 255, E & 16) {
                  if (A = m & 65535, E &= 15, v < E && (p += I[n++] << v, v += 8, v < E && (p += I[n++] << v, v += 8)), A += p & (1 << E) - 1, A > o) {
                    r.msg = "invalid distance too far back", i.mode = Lr;
                    break e;
                  }
                  if (p >>>= E, v -= E, E = s - f, A > E) {
                    if (E = A - E, E > g && i.sane) {
                      r.msg = "invalid distance too far back", i.mode = Lr;
                      break e;
                    }
                    if (T = 0, b = c, u === 0) {
                      if (T += d - E, E < $) {
                        $ -= E;
                        do
                          O[s++] = c[T++];
                        while (--E);
                        T = s - A, b = O;
                      }
                    } else if (u < E) {
                      if (T += d + u - E, E -= u, E < $) {
                        $ -= E;
                        do
                          O[s++] = c[T++];
                        while (--E);
                        if (T = 0, u < $) {
                          E = u, $ -= E;
                          do
                            O[s++] = c[T++];
                          while (--E);
                          T = s - A, b = O;
                        }
                      }
                    } else if (T += u - E, E < $) {
                      $ -= E;
                      do
                        O[s++] = c[T++];
                      while (--E);
                      T = s - A, b = O;
                    }
                    for (; $ > 2; )
                      O[s++] = b[T++], O[s++] = b[T++], O[s++] = b[T++], $ -= 3;
                    $ && (O[s++] = b[T++], $ > 1 && (O[s++] = b[T++]));
                  } else {
                    T = s - A;
                    do
                      O[s++] = O[T++], O[s++] = O[T++], O[s++] = O[T++], $ -= 3;
                    while ($ > 2);
                    $ && (O[s++] = O[T++], $ > 1 && (O[s++] = O[T++]));
                  }
                } else if (E & 64) {
                  r.msg = "invalid distance code", i.mode = Lr;
                  break e;
                } else {
                  m = l[(m & 65535) + (p & (1 << E) - 1)];
                  continue r;
                }
                break;
              }
          } else if (E & 64)
            if (E & 32) {
              i.mode = kv;
              break e;
            } else {
              r.msg = "invalid literal/length code", i.mode = Lr;
              break e;
            }
          else {
            m = x[(m & 65535) + (p & (1 << E) - 1)];
            continue t;
          }
          break;
        }
    } while (n < a && s < h);
  $ = v >> 3, n -= $, v -= $ << 3, p &= (1 << v) - 1, r.next_in = n, r.next_out = s, r.avail_in = n < a ? 5 + (a - n) : 5 - (n - a), r.avail_out = s < h ? 257 + (h - s) : 257 - (s - h), i.hold = p, i.bits = v;
}, Ps = et, Tt = 15, js = 852, Fs = 592, Bs = 0, nn = 1, Ms = 2, Rv = [
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
], Ov = [
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
], Tv = [
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
], Av = [
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
], $v = function(r, t, i, n, a, s, f, h) {
  var o = h.bits, d = 0, g = 0, u = 0, c = 0, p = 0, v = 0, x = 0, l = 0, _ = 0, R = 0, m, E, $, A, T, b = null, I = 0, O, L = new Ps.Buf16(Tt + 1), B = new Ps.Buf16(Tt + 1), N = null, P = 0, W, w, S;
  for (d = 0; d <= Tt; d++)
    L[d] = 0;
  for (g = 0; g < n; g++)
    L[t[i + g]]++;
  for (p = o, c = Tt; c >= 1 && L[c] === 0; c--)
    ;
  if (p > c && (p = c), c === 0)
    return a[s++] = 1 << 24 | 64 << 16 | 0, a[s++] = 1 << 24 | 64 << 16 | 0, h.bits = 1, 0;
  for (u = 1; u < c && L[u] === 0; u++)
    ;
  for (p < u && (p = u), l = 1, d = 1; d <= Tt; d++)
    if (l <<= 1, l -= L[d], l < 0)
      return -1;
  if (l > 0 && (r === Bs || c !== 1))
    return -1;
  for (B[1] = 0, d = 1; d < Tt; d++)
    B[d + 1] = B[d] + L[d];
  for (g = 0; g < n; g++)
    t[i + g] !== 0 && (f[B[t[i + g]]++] = g);
  if (r === Bs ? (b = N = f, O = 19) : r === nn ? (b = Rv, I -= 257, N = Ov, P -= 257, O = 256) : (b = Tv, N = Av, O = -1), R = 0, g = 0, d = u, T = s, v = p, x = 0, $ = -1, _ = 1 << p, A = _ - 1, r === nn && _ > js || r === Ms && _ > Fs)
    return 1;
  for (; ; ) {
    W = d - x, f[g] < O ? (w = 0, S = f[g]) : f[g] > O ? (w = N[P + f[g]], S = b[I + f[g]]) : (w = 96, S = 0), m = 1 << d - x, E = 1 << v, u = E;
    do
      E -= m, a[T + (R >> x) + E] = W << 24 | w << 16 | S | 0;
    while (E !== 0);
    for (m = 1 << d - 1; R & m; )
      m >>= 1;
    if (m !== 0 ? (R &= m - 1, R += m) : R = 0, g++, --L[d] === 0) {
      if (d === c)
        break;
      d = t[i + f[g]];
    }
    if (d > p && (R & A) !== $) {
      for (x === 0 && (x = p), T += u, v = d - x, l = 1 << v; v + x < c && (l -= L[v + x], !(l <= 0)); )
        v++, l <<= 1;
      if (_ += 1 << v, r === nn && _ > js || r === Ms && _ > Fs)
        return 1;
      $ = R & A, a[$] = p << 24 | v << 16 | T - s | 0;
    }
  }
  return R !== 0 && (a[T + R] = d - x << 24 | 64 << 16 | 0), h.bits = p, 0;
}, we = et, kn = Sf, Fe = kf, Iv = xv, rr = $v, Cv = 0, Df = 1, Pf = 2, Us = 4, Nv = 5, Dr = 6, wt = 0, Lv = 1, Dv = 2, Re = -2, jf = -3, Ff = -4, Pv = -5, zs = 8, Bf = 1, Ws = 2, Gs = 3, Zs = 4, qs = 5, Hs = 6, Vs = 7, Xs = 8, Ys = 9, Ks = 10, Kr = 11, Ye = 12, an = 13, Js = 14, sn = 15, Qs = 16, eo = 17, to = 18, ro = 19, Pr = 20, jr = 21, io = 22, no = 23, ao = 24, so = 25, oo = 26, on = 27, fo = 28, lo = 29, oe = 30, Mf = 31, jv = 32, Fv = 852, Bv = 592, Mv = 15, Uv = Mv;
function uo(e) {
  return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
}
function zv() {
  this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new we.Buf16(320), this.work = new we.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
function Uf(e) {
  var r;
  return !e || !e.state ? Re : (r = e.state, e.total_in = e.total_out = r.total = 0, e.msg = "", r.wrap && (e.adler = r.wrap & 1), r.mode = Bf, r.last = 0, r.havedict = 0, r.dmax = 32768, r.head = null, r.hold = 0, r.bits = 0, r.lencode = r.lendyn = new we.Buf32(Fv), r.distcode = r.distdyn = new we.Buf32(Bv), r.sane = 1, r.back = -1, wt);
}
function zf(e) {
  var r;
  return !e || !e.state ? Re : (r = e.state, r.wsize = 0, r.whave = 0, r.wnext = 0, Uf(e));
}
function Wf(e, r) {
  var t, i;
  return !e || !e.state || (i = e.state, r < 0 ? (t = 0, r = -r) : (t = (r >> 4) + 1, r < 48 && (r &= 15)), r && (r < 8 || r > 15)) ? Re : (i.window !== null && i.wbits !== r && (i.window = null), i.wrap = t, i.wbits = r, zf(e));
}
function Gf(e, r) {
  var t, i;
  return e ? (i = new zv(), e.state = i, i.window = null, t = Wf(e, r), t !== wt && (e.state = null), t) : Re;
}
function Wv(e) {
  return Gf(e, Uv);
}
var ho = !0, fn, ln;
function Gv(e) {
  if (ho) {
    var r;
    for (fn = new we.Buf32(512), ln = new we.Buf32(32), r = 0; r < 144; )
      e.lens[r++] = 8;
    for (; r < 256; )
      e.lens[r++] = 9;
    for (; r < 280; )
      e.lens[r++] = 7;
    for (; r < 288; )
      e.lens[r++] = 8;
    for (rr(Df, e.lens, 0, 288, fn, 0, e.work, { bits: 9 }), r = 0; r < 32; )
      e.lens[r++] = 5;
    rr(Pf, e.lens, 0, 32, ln, 0, e.work, { bits: 5 }), ho = !1;
  }
  e.lencode = fn, e.lenbits = 9, e.distcode = ln, e.distbits = 5;
}
function Zf(e, r, t, i) {
  var n, a = e.state;
  return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new we.Buf8(a.wsize)), i >= a.wsize ? (we.arraySet(a.window, r, t - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (n = a.wsize - a.wnext, n > i && (n = i), we.arraySet(a.window, r, t - i, n, a.wnext), i -= n, i ? (we.arraySet(a.window, r, t - i, i, 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += n, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += n))), 0;
}
function Zv(e, r) {
  var t, i, n, a, s, f, h, o, d, g, u, c, p, v, x = 0, l, _, R, m, E, $, A, T, b = new we.Buf8(4), I, O, L = (
    /* permutation of code lengths */
    [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
  );
  if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0)
    return Re;
  t = e.state, t.mode === Ye && (t.mode = an), s = e.next_out, n = e.output, h = e.avail_out, a = e.next_in, i = e.input, f = e.avail_in, o = t.hold, d = t.bits, g = f, u = h, T = wt;
  e:
    for (; ; )
      switch (t.mode) {
        case Bf:
          if (t.wrap === 0) {
            t.mode = an;
            break;
          }
          for (; d < 16; ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          if (t.wrap & 2 && o === 35615) {
            t.check = 0, b[0] = o & 255, b[1] = o >>> 8 & 255, t.check = Fe(t.check, b, 2, 0), o = 0, d = 0, t.mode = Ws;
            break;
          }
          if (t.flags = 0, t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((o & 255) << 8) + (o >> 8)) % 31) {
            e.msg = "incorrect header check", t.mode = oe;
            break;
          }
          if ((o & 15) !== zs) {
            e.msg = "unknown compression method", t.mode = oe;
            break;
          }
          if (o >>>= 4, d -= 4, A = (o & 15) + 8, t.wbits === 0)
            t.wbits = A;
          else if (A > t.wbits) {
            e.msg = "invalid window size", t.mode = oe;
            break;
          }
          t.dmax = 1 << A, e.adler = t.check = 1, t.mode = o & 512 ? Ks : Ye, o = 0, d = 0;
          break;
        case Ws:
          for (; d < 16; ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          if (t.flags = o, (t.flags & 255) !== zs) {
            e.msg = "unknown compression method", t.mode = oe;
            break;
          }
          if (t.flags & 57344) {
            e.msg = "unknown header flags set", t.mode = oe;
            break;
          }
          t.head && (t.head.text = o >> 8 & 1), t.flags & 512 && (b[0] = o & 255, b[1] = o >>> 8 & 255, t.check = Fe(t.check, b, 2, 0)), o = 0, d = 0, t.mode = Gs;
        case Gs:
          for (; d < 32; ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          t.head && (t.head.time = o), t.flags & 512 && (b[0] = o & 255, b[1] = o >>> 8 & 255, b[2] = o >>> 16 & 255, b[3] = o >>> 24 & 255, t.check = Fe(t.check, b, 4, 0)), o = 0, d = 0, t.mode = Zs;
        case Zs:
          for (; d < 16; ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          t.head && (t.head.xflags = o & 255, t.head.os = o >> 8), t.flags & 512 && (b[0] = o & 255, b[1] = o >>> 8 & 255, t.check = Fe(t.check, b, 2, 0)), o = 0, d = 0, t.mode = qs;
        case qs:
          if (t.flags & 1024) {
            for (; d < 16; ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            t.length = o, t.head && (t.head.extra_len = o), t.flags & 512 && (b[0] = o & 255, b[1] = o >>> 8 & 255, t.check = Fe(t.check, b, 2, 0)), o = 0, d = 0;
          } else t.head && (t.head.extra = null);
          t.mode = Hs;
        case Hs:
          if (t.flags & 1024 && (c = t.length, c > f && (c = f), c && (t.head && (A = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Array(t.head.extra_len)), we.arraySet(
            t.head.extra,
            i,
            a,
            // extra field is limited to 65536 bytes
            // - no need for additional size check
            c,
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            A
          )), t.flags & 512 && (t.check = Fe(t.check, i, c, a)), f -= c, a += c, t.length -= c), t.length))
            break e;
          t.length = 0, t.mode = Vs;
        case Vs:
          if (t.flags & 2048) {
            if (f === 0)
              break e;
            c = 0;
            do
              A = i[a + c++], t.head && A && t.length < 65536 && (t.head.name += String.fromCharCode(A));
            while (A && c < f);
            if (t.flags & 512 && (t.check = Fe(t.check, i, c, a)), f -= c, a += c, A)
              break e;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = Xs;
        case Xs:
          if (t.flags & 4096) {
            if (f === 0)
              break e;
            c = 0;
            do
              A = i[a + c++], t.head && A && t.length < 65536 && (t.head.comment += String.fromCharCode(A));
            while (A && c < f);
            if (t.flags & 512 && (t.check = Fe(t.check, i, c, a)), f -= c, a += c, A)
              break e;
          } else t.head && (t.head.comment = null);
          t.mode = Ys;
        case Ys:
          if (t.flags & 512) {
            for (; d < 16; ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            if (o !== (t.check & 65535)) {
              e.msg = "header crc mismatch", t.mode = oe;
              break;
            }
            o = 0, d = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), e.adler = t.check = 0, t.mode = Ye;
          break;
        case Ks:
          for (; d < 32; ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          e.adler = t.check = uo(o), o = 0, d = 0, t.mode = Kr;
        case Kr:
          if (t.havedict === 0)
            return e.next_out = s, e.avail_out = h, e.next_in = a, e.avail_in = f, t.hold = o, t.bits = d, Dv;
          e.adler = t.check = 1, t.mode = Ye;
        case Ye:
          if (r === Nv || r === Dr)
            break e;
        case an:
          if (t.last) {
            o >>>= d & 7, d -= d & 7, t.mode = on;
            break;
          }
          for (; d < 3; ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          switch (t.last = o & 1, o >>>= 1, d -= 1, o & 3) {
            case 0:
              t.mode = Js;
              break;
            case 1:
              if (Gv(t), t.mode = Pr, r === Dr) {
                o >>>= 2, d -= 2;
                break e;
              }
              break;
            case 2:
              t.mode = eo;
              break;
            case 3:
              e.msg = "invalid block type", t.mode = oe;
          }
          o >>>= 2, d -= 2;
          break;
        case Js:
          for (o >>>= d & 7, d -= d & 7; d < 32; ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          if ((o & 65535) !== (o >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", t.mode = oe;
            break;
          }
          if (t.length = o & 65535, o = 0, d = 0, t.mode = sn, r === Dr)
            break e;
        case sn:
          t.mode = Qs;
        case Qs:
          if (c = t.length, c) {
            if (c > f && (c = f), c > h && (c = h), c === 0)
              break e;
            we.arraySet(n, i, a, c, s), f -= c, a += c, h -= c, s += c, t.length -= c;
            break;
          }
          t.mode = Ye;
          break;
        case eo:
          for (; d < 14; ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          if (t.nlen = (o & 31) + 257, o >>>= 5, d -= 5, t.ndist = (o & 31) + 1, o >>>= 5, d -= 5, t.ncode = (o & 15) + 4, o >>>= 4, d -= 4, t.nlen > 286 || t.ndist > 30) {
            e.msg = "too many length or distance symbols", t.mode = oe;
            break;
          }
          t.have = 0, t.mode = to;
        case to:
          for (; t.have < t.ncode; ) {
            for (; d < 3; ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            t.lens[L[t.have++]] = o & 7, o >>>= 3, d -= 3;
          }
          for (; t.have < 19; )
            t.lens[L[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, I = { bits: t.lenbits }, T = rr(Cv, t.lens, 0, 19, t.lencode, 0, t.work, I), t.lenbits = I.bits, T) {
            e.msg = "invalid code lengths set", t.mode = oe;
            break;
          }
          t.have = 0, t.mode = ro;
        case ro:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; x = t.lencode[o & (1 << t.lenbits) - 1], l = x >>> 24, _ = x >>> 16 & 255, R = x & 65535, !(l <= d); ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            if (R < 16)
              o >>>= l, d -= l, t.lens[t.have++] = R;
            else {
              if (R === 16) {
                for (O = l + 2; d < O; ) {
                  if (f === 0)
                    break e;
                  f--, o += i[a++] << d, d += 8;
                }
                if (o >>>= l, d -= l, t.have === 0) {
                  e.msg = "invalid bit length repeat", t.mode = oe;
                  break;
                }
                A = t.lens[t.have - 1], c = 3 + (o & 3), o >>>= 2, d -= 2;
              } else if (R === 17) {
                for (O = l + 3; d < O; ) {
                  if (f === 0)
                    break e;
                  f--, o += i[a++] << d, d += 8;
                }
                o >>>= l, d -= l, A = 0, c = 3 + (o & 7), o >>>= 3, d -= 3;
              } else {
                for (O = l + 7; d < O; ) {
                  if (f === 0)
                    break e;
                  f--, o += i[a++] << d, d += 8;
                }
                o >>>= l, d -= l, A = 0, c = 11 + (o & 127), o >>>= 7, d -= 7;
              }
              if (t.have + c > t.nlen + t.ndist) {
                e.msg = "invalid bit length repeat", t.mode = oe;
                break;
              }
              for (; c--; )
                t.lens[t.have++] = A;
            }
          }
          if (t.mode === oe)
            break;
          if (t.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block", t.mode = oe;
            break;
          }
          if (t.lenbits = 9, I = { bits: t.lenbits }, T = rr(Df, t.lens, 0, t.nlen, t.lencode, 0, t.work, I), t.lenbits = I.bits, T) {
            e.msg = "invalid literal/lengths set", t.mode = oe;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, I = { bits: t.distbits }, T = rr(Pf, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, I), t.distbits = I.bits, T) {
            e.msg = "invalid distances set", t.mode = oe;
            break;
          }
          if (t.mode = Pr, r === Dr)
            break e;
        case Pr:
          t.mode = jr;
        case jr:
          if (f >= 6 && h >= 258) {
            e.next_out = s, e.avail_out = h, e.next_in = a, e.avail_in = f, t.hold = o, t.bits = d, Iv(e, u), s = e.next_out, n = e.output, h = e.avail_out, a = e.next_in, i = e.input, f = e.avail_in, o = t.hold, d = t.bits, t.mode === Ye && (t.back = -1);
            break;
          }
          for (t.back = 0; x = t.lencode[o & (1 << t.lenbits) - 1], l = x >>> 24, _ = x >>> 16 & 255, R = x & 65535, !(l <= d); ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          if (_ && !(_ & 240)) {
            for (m = l, E = _, $ = R; x = t.lencode[$ + ((o & (1 << m + E) - 1) >> m)], l = x >>> 24, _ = x >>> 16 & 255, R = x & 65535, !(m + l <= d); ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            o >>>= m, d -= m, t.back += m;
          }
          if (o >>>= l, d -= l, t.back += l, t.length = R, _ === 0) {
            t.mode = oo;
            break;
          }
          if (_ & 32) {
            t.back = -1, t.mode = Ye;
            break;
          }
          if (_ & 64) {
            e.msg = "invalid literal/length code", t.mode = oe;
            break;
          }
          t.extra = _ & 15, t.mode = io;
        case io:
          if (t.extra) {
            for (O = t.extra; d < O; ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            t.length += o & (1 << t.extra) - 1, o >>>= t.extra, d -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = no;
        case no:
          for (; x = t.distcode[o & (1 << t.distbits) - 1], l = x >>> 24, _ = x >>> 16 & 255, R = x & 65535, !(l <= d); ) {
            if (f === 0)
              break e;
            f--, o += i[a++] << d, d += 8;
          }
          if (!(_ & 240)) {
            for (m = l, E = _, $ = R; x = t.distcode[$ + ((o & (1 << m + E) - 1) >> m)], l = x >>> 24, _ = x >>> 16 & 255, R = x & 65535, !(m + l <= d); ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            o >>>= m, d -= m, t.back += m;
          }
          if (o >>>= l, d -= l, t.back += l, _ & 64) {
            e.msg = "invalid distance code", t.mode = oe;
            break;
          }
          t.offset = R, t.extra = _ & 15, t.mode = ao;
        case ao:
          if (t.extra) {
            for (O = t.extra; d < O; ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            t.offset += o & (1 << t.extra) - 1, o >>>= t.extra, d -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            e.msg = "invalid distance too far back", t.mode = oe;
            break;
          }
          t.mode = so;
        case so:
          if (h === 0)
            break e;
          if (c = u - h, t.offset > c) {
            if (c = t.offset - c, c > t.whave && t.sane) {
              e.msg = "invalid distance too far back", t.mode = oe;
              break;
            }
            c > t.wnext ? (c -= t.wnext, p = t.wsize - c) : p = t.wnext - c, c > t.length && (c = t.length), v = t.window;
          } else
            v = n, p = s - t.offset, c = t.length;
          c > h && (c = h), h -= c, t.length -= c;
          do
            n[s++] = v[p++];
          while (--c);
          t.length === 0 && (t.mode = jr);
          break;
        case oo:
          if (h === 0)
            break e;
          n[s++] = t.length, h--, t.mode = jr;
          break;
        case on:
          if (t.wrap) {
            for (; d < 32; ) {
              if (f === 0)
                break e;
              f--, o |= i[a++] << d, d += 8;
            }
            if (u -= h, e.total_out += u, t.total += u, u && (e.adler = t.check = /*UPDATE(state.check, put - _out, _out);*/
            t.flags ? Fe(t.check, n, u, s - u) : kn(t.check, n, u, s - u)), u = h, (t.flags ? o : uo(o)) !== t.check) {
              e.msg = "incorrect data check", t.mode = oe;
              break;
            }
            o = 0, d = 0;
          }
          t.mode = fo;
        case fo:
          if (t.wrap && t.flags) {
            for (; d < 32; ) {
              if (f === 0)
                break e;
              f--, o += i[a++] << d, d += 8;
            }
            if (o !== (t.total & 4294967295)) {
              e.msg = "incorrect length check", t.mode = oe;
              break;
            }
            o = 0, d = 0;
          }
          t.mode = lo;
        case lo:
          T = Lv;
          break e;
        case oe:
          T = jf;
          break e;
        case Mf:
          return Ff;
        case jv:
        default:
          return Re;
      }
  return e.next_out = s, e.avail_out = h, e.next_in = a, e.avail_in = f, t.hold = o, t.bits = d, (t.wsize || u !== e.avail_out && t.mode < oe && (t.mode < on || r !== Us)) && Zf(e, e.output, e.next_out, u - e.avail_out), g -= e.avail_in, u -= e.avail_out, e.total_in += g, e.total_out += u, t.total += u, t.wrap && u && (e.adler = t.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
  t.flags ? Fe(t.check, n, u, e.next_out - u) : kn(t.check, n, u, e.next_out - u)), e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Ye ? 128 : 0) + (t.mode === Pr || t.mode === sn ? 256 : 0), (g === 0 && u === 0 || r === Us) && T === wt && (T = Pv), T;
}
function qv(e) {
  if (!e || !e.state)
    return Re;
  var r = e.state;
  return r.window && (r.window = null), e.state = null, wt;
}
function Hv(e, r) {
  var t;
  return !e || !e.state || (t = e.state, !(t.wrap & 2)) ? Re : (t.head = r, r.done = !1, wt);
}
function Vv(e, r) {
  var t = r.length, i, n, a;
  return !e || !e.state || (i = e.state, i.wrap !== 0 && i.mode !== Kr) ? Re : i.mode === Kr && (n = 1, n = kn(n, r, t, 0), n !== i.check) ? jf : (a = Zf(e, r, t, t), a ? (i.mode = Mf, Ff) : (i.havedict = 1, wt));
}
Le.inflateReset = zf;
Le.inflateReset2 = Wf;
Le.inflateResetKeep = Uf;
Le.inflateInit = Wv;
Le.inflateInit2 = Gf;
Le.inflate = Zv;
Le.inflateEnd = qv;
Le.inflateGetHeader = Hv;
Le.inflateSetDictionary = Vv;
Le.inflateInfo = "pako inflate (from Nodeca project)";
var qf = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
function Xv() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var Yv = Xv, Lt = Le, ir = et, Hr = St, ue = qf, xn = ia, Kv = Nf, Jv = Yv, Hf = Object.prototype.toString;
function Et(e) {
  if (!(this instanceof Et)) return new Et(e);
  this.options = ir.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ""
  }, e || {});
  var r = this.options;
  r.raw && r.windowBits >= 0 && r.windowBits < 16 && (r.windowBits = -r.windowBits, r.windowBits === 0 && (r.windowBits = -15)), r.windowBits >= 0 && r.windowBits < 16 && !(e && e.windowBits) && (r.windowBits += 32), r.windowBits > 15 && r.windowBits < 48 && (r.windowBits & 15 || (r.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Kv(), this.strm.avail_out = 0;
  var t = Lt.inflateInit2(
    this.strm,
    r.windowBits
  );
  if (t !== ue.Z_OK)
    throw new Error(xn[t]);
  if (this.header = new Jv(), Lt.inflateGetHeader(this.strm, this.header), r.dictionary && (typeof r.dictionary == "string" ? r.dictionary = Hr.string2buf(r.dictionary) : Hf.call(r.dictionary) === "[object ArrayBuffer]" && (r.dictionary = new Uint8Array(r.dictionary)), r.raw && (t = Lt.inflateSetDictionary(this.strm, r.dictionary), t !== ue.Z_OK)))
    throw new Error(xn[t]);
}
Et.prototype.push = function(e, r) {
  var t = this.strm, i = this.options.chunkSize, n = this.options.dictionary, a, s, f, h, o, d = !1;
  if (this.ended)
    return !1;
  s = r === ~~r ? r : r === !0 ? ue.Z_FINISH : ue.Z_NO_FLUSH, typeof e == "string" ? t.input = Hr.binstring2buf(e) : Hf.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length;
  do {
    if (t.avail_out === 0 && (t.output = new ir.Buf8(i), t.next_out = 0, t.avail_out = i), a = Lt.inflate(t, ue.Z_NO_FLUSH), a === ue.Z_NEED_DICT && n && (a = Lt.inflateSetDictionary(this.strm, n)), a === ue.Z_BUF_ERROR && d === !0 && (a = ue.Z_OK, d = !1), a !== ue.Z_STREAM_END && a !== ue.Z_OK)
      return this.onEnd(a), this.ended = !0, !1;
    t.next_out && (t.avail_out === 0 || a === ue.Z_STREAM_END || t.avail_in === 0 && (s === ue.Z_FINISH || s === ue.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (f = Hr.utf8border(t.output, t.next_out), h = t.next_out - f, o = Hr.buf2string(t.output, f), t.next_out = h, t.avail_out = i - h, h && ir.arraySet(t.output, t.output, f, h, 0), this.onData(o)) : this.onData(ir.shrinkBuf(t.output, t.next_out))), t.avail_in === 0 && t.avail_out === 0 && (d = !0);
  } while ((t.avail_in > 0 || t.avail_out === 0) && a !== ue.Z_STREAM_END);
  return a === ue.Z_STREAM_END && (s = ue.Z_FINISH), s === ue.Z_FINISH ? (a = Lt.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === ue.Z_OK) : (s === ue.Z_SYNC_FLUSH && (this.onEnd(ue.Z_OK), t.avail_out = 0), !0);
};
Et.prototype.onData = function(e) {
  this.chunks.push(e);
};
Et.prototype.onEnd = function(e) {
  e === ue.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = ir.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function aa(e, r) {
  var t = new Et(r);
  if (t.push(e, !0), t.err)
    throw t.msg || xn[t.err];
  return t.result;
}
function Qv(e, r) {
  return r = r || {}, r.raw = !0, aa(e, r);
}
gr.Inflate = Et;
gr.inflate = aa;
gr.inflateRaw = Qv;
gr.ungzip = aa;
var ep = et.assign, tp = pr, rp = gr, ip = qf, Vf = {};
ep(Vf, tp, rp, ip);
var np = Vf, ap = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", sp = np, Xf = le(), vi = Oe, op = ap ? "uint8array" : "array";
ui.magic = "\b\0";
function kt(e, r) {
  vi.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = r, this.meta = {};
}
Xf.inherits(kt, vi);
kt.prototype.processChunk = function(e) {
  this.meta = e.meta, this._pako === null && this._createPako(), this._pako.push(Xf.transformTo(op, e.data), !1);
};
kt.prototype.flush = function() {
  vi.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
};
kt.prototype.cleanUp = function() {
  vi.prototype.cleanUp.call(this), this._pako = null;
};
kt.prototype._createPako = function() {
  this._pako = new sp[this._pakoAction]({
    raw: !0,
    level: this._pakoOptions.level || -1
    // default compression
  });
  var e = this;
  this._pako.onData = function(r) {
    e.push({
      data: r,
      meta: e.meta
    });
  };
};
ui.compressWorker = function(e) {
  return new kt("Deflate", e);
};
ui.uncompressWorker = function() {
  return new kt("Inflate", {});
};
var co = Oe;
li.STORE = {
  magic: "\0\0",
  compressWorker: function() {
    return new co("STORE compression");
  },
  uncompressWorker: function() {
    return new co("STORE decompression");
  }
};
li.DEFLATE = ui;
var lt = {};
lt.LOCAL_FILE_HEADER = "PK";
lt.CENTRAL_FILE_HEADER = "PK";
lt.CENTRAL_DIRECTORY_END = "PK";
lt.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07";
lt.ZIP64_CENTRAL_DIRECTORY_END = "PK";
lt.DATA_DESCRIPTOR = "PK\x07\b";
var It = le(), Zt = Oe, un = Mt, vo = qn, Jr = lt, se = function(e, r) {
  var t = "", i;
  for (i = 0; i < r; i++)
    t += String.fromCharCode(e & 255), e = e >>> 8;
  return t;
}, fp = function(e, r) {
  var t = e;
  return e || (t = r ? 16893 : 33204), (t & 65535) << 16;
}, lp = function(e) {
  return (e || 0) & 63;
}, Yf = function(e, r, t, i, n, a) {
  var s = e.file, f = e.compression, h = a !== un.utf8encode, o = It.transformTo("string", a(s.name)), d = It.transformTo("string", un.utf8encode(s.name)), g = s.comment, u = It.transformTo("string", a(g)), c = It.transformTo("string", un.utf8encode(g)), p = d.length !== s.name.length, v = c.length !== g.length, x, l, _ = "", R = "", m = "", E = s.dir, $ = s.date, A = {
    crc32: 0,
    compressedSize: 0,
    uncompressedSize: 0
  };
  (!r || t) && (A.crc32 = e.crc32, A.compressedSize = e.compressedSize, A.uncompressedSize = e.uncompressedSize);
  var T = 0;
  r && (T |= 8), !h && (p || v) && (T |= 2048);
  var b = 0, I = 0;
  E && (b |= 16), n === "UNIX" ? (I = 798, b |= fp(s.unixPermissions, E)) : (I = 20, b |= lp(s.dosPermissions)), x = $.getUTCHours(), x = x << 6, x = x | $.getUTCMinutes(), x = x << 5, x = x | $.getUTCSeconds() / 2, l = $.getUTCFullYear() - 1980, l = l << 4, l = l | $.getUTCMonth() + 1, l = l << 5, l = l | $.getUTCDate(), p && (R = // Version
  se(1, 1) + // NameCRC32
  se(vo(o), 4) + // UnicodeName
  d, _ += // Info-ZIP Unicode Path Extra Field
  "up" + // size
  se(R.length, 2) + // content
  R), v && (m = // Version
  se(1, 1) + // CommentCRC32
  se(vo(u), 4) + // UnicodeName
  c, _ += // Info-ZIP Unicode Path Extra Field
  "uc" + // size
  se(m.length, 2) + // content
  m);
  var O = "";
  O += `
\0`, O += se(T, 2), O += f.magic, O += se(x, 2), O += se(l, 2), O += se(A.crc32, 4), O += se(A.compressedSize, 4), O += se(A.uncompressedSize, 4), O += se(o.length, 2), O += se(_.length, 2);
  var L = Jr.LOCAL_FILE_HEADER + O + o + _, B = Jr.CENTRAL_FILE_HEADER + // version made by (00: DOS)
  se(I, 2) + // file header (common to file and central directory)
  O + // file comment length
  se(u.length, 2) + // disk number start
  "\0\0\0\0" + // external file attributes
  se(b, 4) + // relative offset of local header
  se(i, 4) + // file name
  o + // extra field
  _ + // file comment
  u;
  return {
    fileRecord: L,
    dirRecord: B
  };
}, up = function(e, r, t, i, n) {
  var a = "", s = It.transformTo("string", n(i));
  return a = Jr.CENTRAL_DIRECTORY_END + // number of this disk
  "\0\0\0\0" + // total number of entries in the central directory on this disk
  se(e, 2) + // total number of entries in the central directory
  se(e, 2) + // size of the central directory   4 bytes
  se(r, 4) + // offset of start of central directory with respect to the starting disk number
  se(t, 4) + // .ZIP file comment length
  se(s.length, 2) + // .ZIP file comment
  s, a;
}, hp = function(e) {
  var r = "";
  return r = Jr.DATA_DESCRIPTOR + // crc-32                          4 bytes
  se(e.crc32, 4) + // compressed size                 4 bytes
  se(e.compressedSize, 4) + // uncompressed size               4 bytes
  se(e.uncompressedSize, 4), r;
};
function De(e, r, t, i) {
  Zt.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = r, this.zipPlatform = t, this.encodeFileName = i, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
}
It.inherits(De, Zt);
De.prototype.push = function(e) {
  var r = e.meta.percent || 0, t = this.entriesCount, i = this._sources.length;
  this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, Zt.prototype.push.call(this, {
    data: e.data,
    meta: {
      currentFile: this.currentFile,
      percent: t ? (r + 100 * (t - i - 1)) / t : 100
    }
  }));
};
De.prototype.openedSource = function(e) {
  this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
  var r = this.streamFiles && !e.file.dir;
  if (r) {
    var t = Yf(e, r, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    this.push({
      data: t.fileRecord,
      meta: { percent: 0 }
    });
  } else
    this.accumulate = !0;
};
De.prototype.closedSource = function(e) {
  this.accumulate = !1;
  var r = this.streamFiles && !e.file.dir, t = Yf(e, r, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
  if (this.dirRecords.push(t.dirRecord), r)
    this.push({
      data: hp(e),
      meta: { percent: 100 }
    });
  else
    for (this.push({
      data: t.fileRecord,
      meta: { percent: 0 }
    }); this.contentBuffer.length; )
      this.push(this.contentBuffer.shift());
  this.currentFile = null;
};
De.prototype.flush = function() {
  for (var e = this.bytesWritten, r = 0; r < this.dirRecords.length; r++)
    this.push({
      data: this.dirRecords[r],
      meta: { percent: 100 }
    });
  var t = this.bytesWritten - e, i = up(this.dirRecords.length, t, e, this.zipComment, this.encodeFileName);
  this.push({
    data: i,
    meta: { percent: 100 }
  });
};
De.prototype.prepareNextSource = function() {
  this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
};
De.prototype.registerPrevious = function(e) {
  this._sources.push(e);
  var r = this;
  return e.on("data", function(t) {
    r.processChunk(t);
  }), e.on("end", function() {
    r.closedSource(r.previous.streamInfo), r._sources.length ? r.prepareNextSource() : r.end();
  }), e.on("error", function(t) {
    r.error(t);
  }), this;
};
De.prototype.resume = function() {
  if (!Zt.prototype.resume.call(this))
    return !1;
  if (!this.previous && this._sources.length)
    return this.prepareNextSource(), !0;
  if (!this.previous && !this._sources.length && !this.generatedError)
    return this.end(), !0;
};
De.prototype.error = function(e) {
  var r = this._sources;
  if (!Zt.prototype.error.call(this, e))
    return !1;
  for (var t = 0; t < r.length; t++)
    try {
      r[t].error(e);
    } catch {
    }
  return !0;
};
De.prototype.lock = function() {
  Zt.prototype.lock.call(this);
  for (var e = this._sources, r = 0; r < e.length; r++)
    e[r].lock();
};
var cp = De, dp = li, vp = cp, pp = function(e, r) {
  var t = e || r, i = dp[t];
  if (!i)
    throw new Error(t + " is not a valid compression method !");
  return i;
};
of.generateWorker = function(e, r, t) {
  var i = new vp(r.streamFiles, t, r.platform, r.encodeFileName), n = 0;
  try {
    e.forEach(function(a, s) {
      n++;
      var f = pp(s.options.compression, r.compression), h = s.options.compressionOptions || r.compressionOptions || {}, o = s.dir, d = s.date;
      s._compressWorker(f, h).withStreamInfo("file", {
        name: a,
        dir: o,
        date: d,
        comment: s.comment || "",
        unixPermissions: s.unixPermissions,
        dosPermissions: s.dosPermissions
      }).pipe(i);
    }), i.entriesCount = n;
  } catch (a) {
    i.error(a);
  }
  return i;
};
var _p = le(), pi = Oe;
function yr(e, r) {
  pi.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(r);
}
_p.inherits(yr, pi);
yr.prototype._bindStream = function(e) {
  var r = this;
  this._stream = e, e.pause(), e.on("data", function(t) {
    r.push({
      data: t,
      meta: {
        percent: 0
      }
    });
  }).on("error", function(t) {
    r.isPaused ? this.generatedError = t : r.error(t);
  }).on("end", function() {
    r.isPaused ? r._upstreamEnded = !0 : r.end();
  });
};
yr.prototype.pause = function() {
  return pi.prototype.pause.call(this) ? (this._stream.pause(), !0) : !1;
};
yr.prototype.resume = function() {
  return pi.prototype.resume.call(this) ? (this._upstreamEnded ? this.end() : this._stream.resume(), !0) : !1;
};
var mp = yr, gp = Mt, nr = le(), Kf = Oe, yp = tf, Jf = Te, po = Kn, wp = cd, Ep = of, _o = si, bp = mp, Qf = function(e, r, t) {
  var i = nr.getTypeOf(r), n, a = nr.extend(t || {}, Jf);
  a.date = a.date || /* @__PURE__ */ new Date(), a.compression !== null && (a.compression = a.compression.toUpperCase()), typeof a.unixPermissions == "string" && (a.unixPermissions = parseInt(a.unixPermissions, 8)), a.unixPermissions && a.unixPermissions & 16384 && (a.dir = !0), a.dosPermissions && a.dosPermissions & 16 && (a.dir = !0), a.dir && (e = el(e)), a.createFolders && (n = Sp(e)) && tl.call(this, n, !0);
  var s = i === "string" && a.binary === !1 && a.base64 === !1;
  (!t || typeof t.binary > "u") && (a.binary = !s);
  var f = r instanceof po && r.uncompressedSize === 0;
  (f || a.dir || !r || r.length === 0) && (a.base64 = !1, a.binary = !0, r = "", a.compression = "STORE", i = "string");
  var h = null;
  r instanceof po || r instanceof Kf ? h = r : _o.isNode && _o.isStream(r) ? h = new bp(e, r) : h = nr.prepareContent(e, r, a.binary, a.optimizedBinaryString, a.base64);
  var o = new wp(e, h, a);
  this.files[e] = o;
}, Sp = function(e) {
  e.slice(-1) === "/" && (e = e.substring(0, e.length - 1));
  var r = e.lastIndexOf("/");
  return r > 0 ? e.substring(0, r) : "";
}, el = function(e) {
  return e.slice(-1) !== "/" && (e += "/"), e;
}, tl = function(e, r) {
  return r = typeof r < "u" ? r : Jf.createFolders, e = el(e), this.files[e] || Qf.call(this, e, null, {
    dir: !0,
    createFolders: r
  }), this.files[e];
};
function mo(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
var kp = {
  /**
   * @see loadAsync
   */
  load: function() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  },
  /**
   * Call a callback function for each entry at this folder level.
   * @param {Function} cb the callback function:
   * function (relativePath, file) {...}
   * It takes 2 arguments : the relative path and the file.
   */
  forEach: function(e) {
    var r, t, i;
    for (r in this.files)
      i = this.files[r], t = r.slice(this.root.length, r.length), t && r.slice(0, this.root.length) === this.root && e(t, i);
  },
  /**
   * Filter nested files/folders with the specified function.
   * @param {Function} search the predicate to use :
   * function (relativePath, file) {...}
   * It takes 2 arguments : the relative path and the file.
   * @return {Array} An array of matching elements.
   */
  filter: function(e) {
    var r = [];
    return this.forEach(function(t, i) {
      e(t, i) && r.push(i);
    }), r;
  },
  /**
   * Add a file to the zip file, or search a file.
   * @param   {string|RegExp} name The name of the file to add (if data is defined),
   * the name of the file to find (if no data) or a regex to match files.
   * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
   * @param   {Object} o     File options
   * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
   * a file (when searching by string) or an array of files (when searching by regex).
   */
  file: function(e, r, t) {
    if (arguments.length === 1)
      if (mo(e)) {
        var i = e;
        return this.filter(function(a, s) {
          return !s.dir && i.test(a);
        });
      } else {
        var n = this.files[this.root + e];
        return n && !n.dir ? n : null;
      }
    else
      e = this.root + e, Qf.call(this, e, r, t);
    return this;
  },
  /**
   * Add a directory to the zip file, or search.
   * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
   * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
   */
  folder: function(e) {
    if (!e)
      return this;
    if (mo(e))
      return this.filter(function(n, a) {
        return a.dir && e.test(n);
      });
    var r = this.root + e, t = tl.call(this, r), i = this.clone();
    return i.root = t.name, i;
  },
  /**
   * Delete a file, or a directory and all sub-files, from the zip
   * @param {string} name the name of the file to delete
   * @return {JSZip} this JSZip object
   */
  remove: function(e) {
    e = this.root + e;
    var r = this.files[e];
    if (r || (e.slice(-1) !== "/" && (e += "/"), r = this.files[e]), r && !r.dir)
      delete this.files[e];
    else
      for (var t = this.filter(function(n, a) {
        return a.name.slice(0, e.length) === e;
      }), i = 0; i < t.length; i++)
        delete this.files[t[i].name];
    return this;
  },
  /**
   * @deprecated This method has been removed in JSZip 3.0, please check the upgrade guide.
   */
  generate: function() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  },
  /**
   * Generate the complete zip file as an internal stream.
   * @param {Object} options the options to generate the zip file :
   * - compression, "STORE" by default.
   * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
   * @return {StreamHelper} the streamed zip file.
   */
  generateInternalStream: function(e) {
    var r, t = {};
    try {
      if (t = nr.extend(e || {}, {
        streamFiles: !1,
        compression: "STORE",
        compressionOptions: null,
        type: "",
        platform: "DOS",
        comment: null,
        mimeType: "application/zip",
        encodeFileName: gp.utf8encode
      }), t.type = t.type.toLowerCase(), t.compression = t.compression.toUpperCase(), t.type === "binarystring" && (t.type = "string"), !t.type)
        throw new Error("No output type specified.");
      nr.checkSupport(t.type), (t.platform === "darwin" || t.platform === "freebsd" || t.platform === "linux" || t.platform === "sunos") && (t.platform = "UNIX"), t.platform === "win32" && (t.platform = "DOS");
      var i = t.comment || this.comment || "";
      r = Ep.generateWorker(this, t, i);
    } catch (n) {
      r = new Kf("error"), r.error(n);
    }
    return new yp(r, t.type || "string", t.mimeType);
  },
  /**
   * Generate the complete zip file asynchronously.
   * @see generateInternalStream
   */
  generateAsync: function(e, r) {
    return this.generateInternalStream(e).accumulate(r);
  },
  /**
   * Generate the complete zip file asynchronously.
   * @see generateInternalStream
   */
  generateNodeStream: function(e, r) {
    return e = e || {}, e.type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(r);
  }
}, xp = kp, Rp = le();
function rl(e) {
  this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
}
rl.prototype = {
  /**
   * Check that the offset will not go too far.
   * @param {string} offset the additional offset to check.
   * @throws {Error} an Error if the offset is out of bounds.
   */
  checkOffset: function(e) {
    this.checkIndex(this.index + e);
  },
  /**
   * Check that the specified index will not be too far.
   * @param {string} newIndex the index to check.
   * @throws {Error} an Error if the index is out of bounds.
   */
  checkIndex: function(e) {
    if (this.length < this.zero + e || e < 0)
      throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
  },
  /**
   * Change the index.
   * @param {number} newIndex The new index.
   * @throws {Error} if the new index is out of the data.
   */
  setIndex: function(e) {
    this.checkIndex(e), this.index = e;
  },
  /**
   * Skip the next n bytes.
   * @param {number} n the number of bytes to skip.
   * @throws {Error} if the new index is out of the data.
   */
  skip: function(e) {
    this.setIndex(this.index + e);
  },
  /**
   * Get the byte at the specified index.
   * @param {number} i the index to use.
   * @return {number} a byte.
   */
  byteAt: function() {
  },
  /**
   * Get the next number with a given byte size.
   * @param {number} size the number of bytes to read.
   * @return {number} the corresponding number.
   */
  readInt: function(e) {
    var r = 0, t;
    for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--)
      r = (r << 8) + this.byteAt(t);
    return this.index += e, r;
  },
  /**
   * Get the next string with a given byte size.
   * @param {number} size the number of bytes to read.
   * @return {string} the corresponding string.
   */
  readString: function(e) {
    return Rp.transformTo("string", this.readData(e));
  },
  /**
   * Get raw data without conversion, <size> bytes.
   * @param {number} size the number of bytes to read.
   * @return {Object} the raw data, implementation specific.
   */
  readData: function() {
  },
  /**
   * Find the last occurrence of a zip signature (4 bytes).
   * @param {string} sig the signature to find.
   * @return {number} the index of the last occurrence, -1 if not found.
   */
  lastIndexOfSignature: function() {
  },
  /**
   * Read the signature (4 bytes) at the current position and compare it with sig.
   * @param {string} sig the expected signature
   * @return {boolean} true if the signature matches, false otherwise.
   */
  readAndCheckSignature: function() {
  },
  /**
   * Get the next date.
   * @return {Date} the date.
   */
  readDate: function() {
    var e = this.readInt(4);
    return new Date(Date.UTC(
      (e >> 25 & 127) + 1980,
      // year
      (e >> 21 & 15) - 1,
      // month
      e >> 16 & 31,
      // day
      e >> 11 & 31,
      // hour
      e >> 5 & 63,
      // minute
      (e & 31) << 1
    ));
  }
};
var il = rl, nl = il, Op = le();
function qt(e) {
  nl.call(this, e);
  for (var r = 0; r < this.data.length; r++)
    e[r] = e[r] & 255;
}
Op.inherits(qt, nl);
qt.prototype.byteAt = function(e) {
  return this.data[this.zero + e];
};
qt.prototype.lastIndexOfSignature = function(e) {
  for (var r = e.charCodeAt(0), t = e.charCodeAt(1), i = e.charCodeAt(2), n = e.charCodeAt(3), a = this.length - 4; a >= 0; --a)
    if (this.data[a] === r && this.data[a + 1] === t && this.data[a + 2] === i && this.data[a + 3] === n)
      return a - this.zero;
  return -1;
};
qt.prototype.readAndCheckSignature = function(e) {
  var r = e.charCodeAt(0), t = e.charCodeAt(1), i = e.charCodeAt(2), n = e.charCodeAt(3), a = this.readData(4);
  return r === a[0] && t === a[1] && i === a[2] && n === a[3];
};
qt.prototype.readData = function(e) {
  if (this.checkOffset(e), e === 0)
    return [];
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  return this.index += e, r;
};
var al = qt, sl = il, Tp = le();
function Ht(e) {
  sl.call(this, e);
}
Tp.inherits(Ht, sl);
Ht.prototype.byteAt = function(e) {
  return this.data.charCodeAt(this.zero + e);
};
Ht.prototype.lastIndexOfSignature = function(e) {
  return this.data.lastIndexOf(e) - this.zero;
};
Ht.prototype.readAndCheckSignature = function(e) {
  var r = this.readData(4);
  return e === r;
};
Ht.prototype.readData = function(e) {
  this.checkOffset(e);
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  return this.index += e, r;
};
var Ap = Ht, ol = al, $p = le();
function sa(e) {
  ol.call(this, e);
}
$p.inherits(sa, ol);
sa.prototype.readData = function(e) {
  if (this.checkOffset(e), e === 0)
    return new Uint8Array(0);
  var r = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
  return this.index += e, r;
};
var fl = sa, ll = fl, Ip = le();
function oa(e) {
  ll.call(this, e);
}
Ip.inherits(oa, ll);
oa.prototype.readData = function(e) {
  this.checkOffset(e);
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  return this.index += e, r;
};
var Cp = oa, Fr = le(), go = he, Np = al, Lp = Ap, Dp = Cp, Pp = fl, ul = function(e) {
  var r = Fr.getTypeOf(e);
  return Fr.checkSupport(r), r === "string" && !go.uint8array ? new Lp(e) : r === "nodebuffer" ? new Dp(e) : go.uint8array ? new Pp(Fr.transformTo("uint8array", e)) : new Np(Fr.transformTo("array", e));
}, hn = ul, rt = le(), jp = Kn, yo = qn, Br = Mt, Mr = li, Fp = he, Bp = 0, Mp = 3, Up = function(e) {
  for (var r in Mr)
    if (Object.prototype.hasOwnProperty.call(Mr, r) && Mr[r].magic === e)
      return Mr[r];
  return null;
};
function hl(e, r) {
  this.options = e, this.loadOptions = r;
}
hl.prototype = {
  /**
   * say if the file is encrypted.
   * @return {boolean} true if the file is encrypted, false otherwise.
   */
  isEncrypted: function() {
    return (this.bitFlag & 1) === 1;
  },
  /**
   * say if the file has utf-8 filename/comment.
   * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
   */
  useUTF8: function() {
    return (this.bitFlag & 2048) === 2048;
  },
  /**
   * Read the local part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readLocalPart: function(e) {
    var r, t;
    if (e.skip(22), this.fileNameLength = e.readInt(2), t = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(t), this.compressedSize === -1 || this.uncompressedSize === -1)
      throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
    if (r = Up(this.compressionMethod), r === null)
      throw new Error("Corrupted zip : compression " + rt.pretty(this.compressionMethod) + " unknown (inner file : " + rt.transformTo("string", this.fileName) + ")");
    this.decompressed = new jp(this.compressedSize, this.uncompressedSize, this.crc32, r, e.readData(this.compressedSize));
  },
  /**
   * Read the central part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readCentralPart: function(e) {
    this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
    var r = e.readInt(2);
    if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted())
      throw new Error("Encrypted zip are not supported");
    e.skip(r), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
  },
  /**
   * Parse the external file attributes and get the unix/dos permissions.
   */
  processAttributes: function() {
    this.unixPermissions = null, this.dosPermissions = null;
    var e = this.versionMadeBy >> 8;
    this.dir = !!(this.externalFileAttributes & 16), e === Bp && (this.dosPermissions = this.externalFileAttributes & 63), e === Mp && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), !this.dir && this.fileNameStr.slice(-1) === "/" && (this.dir = !0);
  },
  /**
   * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
   * @param {DataReader} reader the reader to use.
   */
  parseZIP64ExtraField: function() {
    if (this.extraFields[1]) {
      var e = hn(this.extraFields[1].value);
      this.uncompressedSize === rt.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === rt.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === rt.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === rt.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
    }
  },
  /**
   * Read the central part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readExtraFields: function(e) {
    var r = e.index + this.extraFieldsLength, t, i, n;
    for (this.extraFields || (this.extraFields = {}); e.index + 4 < r; )
      t = e.readInt(2), i = e.readInt(2), n = e.readData(i), this.extraFields[t] = {
        id: t,
        length: i,
        value: n
      };
    e.setIndex(r);
  },
  /**
   * Apply an UTF8 transformation if needed.
   */
  handleUTF8: function() {
    var e = Fp.uint8array ? "uint8array" : "array";
    if (this.useUTF8())
      this.fileNameStr = Br.utf8decode(this.fileName), this.fileCommentStr = Br.utf8decode(this.fileComment);
    else {
      var r = this.findExtraFieldUnicodePath();
      if (r !== null)
        this.fileNameStr = r;
      else {
        var t = rt.transformTo(e, this.fileName);
        this.fileNameStr = this.loadOptions.decodeFileName(t);
      }
      var i = this.findExtraFieldUnicodeComment();
      if (i !== null)
        this.fileCommentStr = i;
      else {
        var n = rt.transformTo(e, this.fileComment);
        this.fileCommentStr = this.loadOptions.decodeFileName(n);
      }
    }
  },
  /**
   * Find the unicode path declared in the extra field, if any.
   * @return {String} the unicode path, null otherwise.
   */
  findExtraFieldUnicodePath: function() {
    var e = this.extraFields[28789];
    if (e) {
      var r = hn(e.value);
      return r.readInt(1) !== 1 || yo(this.fileName) !== r.readInt(4) ? null : Br.utf8decode(r.readData(e.length - 5));
    }
    return null;
  },
  /**
   * Find the unicode comment declared in the extra field, if any.
   * @return {String} the unicode comment, null otherwise.
   */
  findExtraFieldUnicodeComment: function() {
    var e = this.extraFields[25461];
    if (e) {
      var r = hn(e.value);
      return r.readInt(1) !== 1 || yo(this.fileComment) !== r.readInt(4) ? null : Br.utf8decode(r.readData(e.length - 5));
    }
    return null;
  }
};
var zp = hl, Wp = ul, Ke = le(), Ae = lt, Gp = zp, Zp = he;
function cl(e) {
  this.files = [], this.loadOptions = e;
}
cl.prototype = {
  /**
   * Check that the reader is on the specified signature.
   * @param {string} expectedSignature the expected signature.
   * @throws {Error} if it is an other signature.
   */
  checkSignature: function(e) {
    if (!this.reader.readAndCheckSignature(e)) {
      this.reader.index -= 4;
      var r = this.reader.readString(4);
      throw new Error("Corrupted zip or bug: unexpected signature (" + Ke.pretty(r) + ", expected " + Ke.pretty(e) + ")");
    }
  },
  /**
   * Check if the given signature is at the given index.
   * @param {number} askedIndex the index to check.
   * @param {string} expectedSignature the signature to expect.
   * @return {boolean} true if the signature is here, false otherwise.
   */
  isSignature: function(e, r) {
    var t = this.reader.index;
    this.reader.setIndex(e);
    var i = this.reader.readString(4), n = i === r;
    return this.reader.setIndex(t), n;
  },
  /**
   * Read the end of the central directory.
   */
  readBlockEndOfCentral: function() {
    this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
    var e = this.reader.readData(this.zipCommentLength), r = Zp.uint8array ? "uint8array" : "array", t = Ke.transformTo(r, e);
    this.zipComment = this.loadOptions.decodeFileName(t);
  },
  /**
   * Read the end of the Zip 64 central directory.
   * Not merged with the method readEndOfCentral :
   * The end of central can coexist with its Zip64 brother,
   * I don't want to read the wrong number of bytes !
   */
  readBlockZip64EndOfCentral: function() {
    this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
    for (var e = this.zip64EndOfCentralSize - 44, r = 0, t, i, n; r < e; )
      t = this.reader.readInt(2), i = this.reader.readInt(4), n = this.reader.readData(i), this.zip64ExtensibleData[t] = {
        id: t,
        length: i,
        value: n
      };
  },
  /**
   * Read the end of the Zip 64 central directory locator.
   */
  readBlockZip64EndOfCentralLocator: function() {
    if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1)
      throw new Error("Multi-volumes zip are not supported");
  },
  /**
   * Read the local files, based on the offset read in the central part.
   */
  readLocalFiles: function() {
    var e, r;
    for (e = 0; e < this.files.length; e++)
      r = this.files[e], this.reader.setIndex(r.localHeaderOffset), this.checkSignature(Ae.LOCAL_FILE_HEADER), r.readLocalPart(this.reader), r.handleUTF8(), r.processAttributes();
  },
  /**
   * Read the central directory.
   */
  readCentralDir: function() {
    var e;
    for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(Ae.CENTRAL_FILE_HEADER); )
      e = new Gp({
        zip64: this.zip64
      }, this.loadOptions), e.readCentralPart(this.reader), this.files.push(e);
    if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
      throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
  },
  /**
   * Read the end of central directory.
   */
  readEndOfCentral: function() {
    var e = this.reader.lastIndexOfSignature(Ae.CENTRAL_DIRECTORY_END);
    if (e < 0) {
      var r = !this.isSignature(0, Ae.LOCAL_FILE_HEADER);
      throw r ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
    }
    this.reader.setIndex(e);
    var t = e;
    if (this.checkSignature(Ae.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === Ke.MAX_VALUE_16BITS || this.diskWithCentralDirStart === Ke.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === Ke.MAX_VALUE_16BITS || this.centralDirRecords === Ke.MAX_VALUE_16BITS || this.centralDirSize === Ke.MAX_VALUE_32BITS || this.centralDirOffset === Ke.MAX_VALUE_32BITS) {
      if (this.zip64 = !0, e = this.reader.lastIndexOfSignature(Ae.ZIP64_CENTRAL_DIRECTORY_LOCATOR), e < 0)
        throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
      if (this.reader.setIndex(e), this.checkSignature(Ae.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, Ae.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(Ae.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
        throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
      this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(Ae.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
    }
    var i = this.centralDirOffset + this.centralDirSize;
    this.zip64 && (i += 20, i += 12 + this.zip64EndOfCentralSize);
    var n = t - i;
    if (n > 0)
      this.isSignature(t, Ae.CENTRAL_FILE_HEADER) || (this.reader.zero = n);
    else if (n < 0)
      throw new Error("Corrupted zip: missing " + Math.abs(n) + " bytes.");
  },
  prepareReader: function(e) {
    this.reader = Wp(e);
  },
  /**
   * Read a zip file and create ZipEntries.
   * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
   */
  load: function(e) {
    this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
  }
};
var qp = cl, cn = le(), Vr = vr, Hp = Mt, Vp = qp, Xp = sf, wo = si;
function Yp(e) {
  return new Vr.Promise(function(r, t) {
    var i = e.decompressed.getContentWorker().pipe(new Xp());
    i.on("error", function(n) {
      t(n);
    }).on("end", function() {
      i.streamInfo.crc32 !== e.decompressed.crc32 ? t(new Error("Corrupted zip : CRC32 mismatch")) : r();
    }).resume();
  });
}
var Kp = function(e, r) {
  var t = this;
  return r = cn.extend(r || {}, {
    base64: !1,
    checkCRC32: !1,
    optimizedBinaryString: !1,
    createFolders: !1,
    decodeFileName: Hp.utf8decode
  }), wo.isNode && wo.isStream(e) ? Vr.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : cn.prepareContent("the loaded zip file", e, !0, r.optimizedBinaryString, r.base64).then(function(i) {
    var n = new Vp(r);
    return n.load(i), n;
  }).then(function(n) {
    var a = [Vr.Promise.resolve(n)], s = n.files;
    if (r.checkCRC32)
      for (var f = 0; f < s.length; f++)
        a.push(Yp(s[f]));
    return Vr.Promise.all(a);
  }).then(function(n) {
    for (var a = n.shift(), s = a.files, f = 0; f < s.length; f++) {
      var h = s[f], o = h.fileNameStr, d = cn.resolve(h.fileNameStr);
      t.file(d, h.decompressed, {
        binary: !0,
        optimizedBinaryString: !0,
        date: h.date,
        dir: h.dir,
        comment: h.fileCommentStr.length ? h.fileCommentStr : null,
        unixPermissions: h.unixPermissions,
        dosPermissions: h.dosPermissions,
        createFolders: r.createFolders
      }), h.dir || (t.file(d).unsafeOriginalName = o);
    }
    return a.zipComment.length && (t.comment = a.zipComment), t;
  });
};
function xe() {
  if (!(this instanceof xe))
    return new xe();
  if (arguments.length)
    throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
  this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
    var e = new xe();
    for (var r in this)
      typeof this[r] != "function" && (e[r] = this[r]);
    return e;
  };
}
xe.prototype = xp;
xe.prototype.loadAsync = Kp;
xe.support = he;
xe.defaults = Te;
xe.version = "3.10.1";
xe.loadAsync = function(e, r) {
  return new xe().loadAsync(e, r);
};
xe.external = vr;
var Jp = xe, ar = We, dl = Qe, vl = parseInt("0777", 8), Qp = Dt.mkdirp = Dt.mkdirP = Dt;
function Dt(e, r, t, i) {
  typeof r == "function" ? (t = r, r = {}) : (!r || typeof r != "object") && (r = { mode: r });
  var n = r.mode, a = r.fs || dl;
  n === void 0 && (n = vl), i || (i = null);
  var s = t || /* istanbul ignore next */
  function() {
  };
  e = ar.resolve(e), a.mkdir(e, n, function(f) {
    if (!f)
      return i = i || e, s(null, i);
    switch (f.code) {
      case "ENOENT":
        if (ar.dirname(e) === e) return s(f);
        Dt(ar.dirname(e), r, function(h, o) {
          h ? s(h, o) : Dt(e, r, s, o);
        });
        break;
      default:
        a.stat(e, function(h, o) {
          h || !o.isDirectory() ? s(f, i) : s(null, i);
        });
        break;
    }
  });
}
Dt.sync = function e(r, t, i) {
  (!t || typeof t != "object") && (t = { mode: t });
  var n = t.mode, a = t.fs || dl;
  n === void 0 && (n = vl), i || (i = null), r = ar.resolve(r);
  try {
    a.mkdirSync(r, n), i = i || r;
  } catch (f) {
    switch (f.code) {
      case "ENOENT":
        i = e(ar.dirname(r), t, i), e(r, t, i);
        break;
      default:
        var s;
        try {
          s = a.statSync(r);
        } catch {
          throw f;
        }
        if (!s.isDirectory()) throw f;
        break;
    }
  }
  return i;
};
var pl = { exports: {} };
(function() {
  var e, r = null, t = typeof window == "object" ? window : de, i = !1, n = t.process, a = Array, s = Error, f = 0, h = 1, o = 2, d = "Symbol", g = "iterator", u = "species", c = d + "(" + u + ")", p = "return", v = "_uh", x = "_pt", l = "_st", _ = "Invalid this", R = "Invalid argument", m = `
From previous `, E = "Chaining cycle detected for promise", $ = "Uncaught (in promise)", A = "rejectionHandled", T = "unhandledRejection", b, I, O = { e: r }, L = function() {
  }, B = /^.+\/node_modules\/yaku\/.+\n?/mg, N = pl.exports = function(F) {
    var z = this, q;
    if (!w(z) || z._s !== e)
      throw Y(_);
    if (z._s = o, i && (z[x] = y()), F !== L) {
      if (!S(F))
        throw Y(R);
      q = H(F)(
        K(z, h),
        K(z, f)
      ), q === O && ae(z, f, q.e);
    }
  };
  N.default = N, W(N, {
    /**
     * Appends fulfillment and rejection handlers to the promise,
     * and returns a new promise resolving to the return value of the called handler.
     * @param  {Function} onFulfilled Optional. Called when the Promise is resolved.
     * @param  {Function} onRejected  Optional. Called when the Promise is rejected.
     * @return {Yaku} It will return a new Yaku which will resolve or reject after
     * @example
     * the current Promise.
     * ```js
     * var Promise = require('yaku');
     * var p = Promise.resolve(10);
     *
     * p.then((v) => {
     *     console.log(v);
     * });
     * ```
     */
    then: function(F, z) {
      if (this._s === void 0) throw Y();
      return ye(
        this,
        V(N.speciesConstructor(this, N)),
        F,
        z
      );
    },
    /**
     * The `catch()` method returns a Promise and deals with rejected cases only.
     * It behaves the same as calling `Promise.prototype.then(undefined, onRejected)`.
     * @param  {Function} onRejected A Function called when the Promise is rejected.
     * This function has one argument, the rejection reason.
     * @return {Yaku} A Promise that deals with rejected cases only.
     * @example
     * ```js
     * var Promise = require('yaku');
     * var p = Promise.reject(new Error("ERR"));
     *
     * p['catch']((v) => {
     *     console.log(v);
     * });
     * ```
     */
    catch: function(D) {
      return this.then(e, D);
    },
    // The number of current promises that attach to this Yaku instance.
    _pCount: 0,
    // The parent Yaku.
    _pre: r,
    // A unique type flag, it helps different versions of Yaku know each other.
    _Yaku: 1
  }), N.resolve = function(F) {
    return Q(F) ? F : qe(V(this), F);
  }, N.reject = function(F) {
    return ae(V(this), f, F);
  }, N.race = function(F) {
    var z = this, q = V(z), ie = function(Ee) {
      ae(q, h, Ee);
    }, re = function(Ee) {
      ae(q, f, Ee);
    }, Pe = H(J)(F, function(Ee) {
      z.resolve(Ee).then(ie, re);
    });
    return Pe === O ? z.reject(Pe.e) : q;
  }, N.all = function(F) {
    var z = this, q = V(z), ie = [], re;
    function Pe(Ee) {
      ae(q, f, Ee);
    }
    return re = H(J)(F, function(Ee, xl) {
      z.resolve(Ee).then(function(Rl) {
        ie[xl] = Rl, --re || ae(q, h, ie);
      }, Pe);
    }), re === O ? z.reject(re.e) : (re || ae(q, h, []), q);
  }, N.Symbol = t[d] || {}, H(function() {
    Object.defineProperty(N, P(), {
      get: function() {
        return this;
      }
    });
  })(), N.speciesConstructor = function(D, F) {
    var z = D.constructor;
    return z && z[P()] || F;
  }, N.unhandledRejection = function(D, F) {
    try {
      t.console.error(
        $,
        i ? F.longStack : ut(D, F)
      );
    } catch {
    }
  }, N.rejectionHandled = L, N.enableLongStackTrace = function() {
    i = !0;
  }, N.nextTick = n ? n.nextTick : function(D) {
    setTimeout(D);
  }, N._Yaku = 1;
  function P() {
    return N[d][u] || c;
  }
  function W(D, F) {
    for (var z in F)
      D.prototype[z] = F[z];
    return D;
  }
  function w(D) {
    return D && typeof D == "object";
  }
  function S(D) {
    return typeof D == "function";
  }
  function C(D, F) {
    return D instanceof F;
  }
  function j(D) {
    return C(D, s);
  }
  function U(D, F, z) {
    if (!F(D)) throw Y(z);
  }
  function G() {
    try {
      return b.apply(I, arguments);
    } catch (D) {
      return O.e = D, O;
    }
  }
  function H(D, F) {
    return b = D, I = F, G;
  }
  function X(D, F) {
    var z = a(D), q = 0;
    function ie() {
      for (var re = 0; re < q; )
        F(z[re], z[re + 1]), z[re++] = e, z[re++] = e;
      q = 0, z.length > D && (z.length = D);
    }
    return function(re, Pe) {
      z[q++] = re, z[q++] = Pe, q === 2 && N.nextTick(ie);
    };
  }
  function J(D, F) {
    var z, q = 0, ie, re, Pe;
    if (!D) throw Y(R);
    var Ee = D[N[d][g]];
    if (S(Ee))
      ie = Ee.call(D);
    else if (S(D.next))
      ie = D;
    else if (C(D, a)) {
      for (z = D.length; q < z; )
        F(D[q], q++);
      return q;
    } else
      throw Y(R);
    for (; !(re = ie.next()).done; )
      if (Pe = H(F)(re.value, q++), Pe === O)
        throw S(ie[p]) && ie[p](), Pe.e;
    return q;
  }
  function Y(D) {
    return new TypeError(D);
  }
  function y(D) {
    return (D ? "" : m) + new s().stack;
  }
  var k = X(999, function(D, F) {
    var z, q;
    if (q = D._s ? F._onFulfilled : F._onRejected, q === e) {
      ae(F, D._s, D._v);
      return;
    }
    if (z = H(xt)(q, D._v), z === O) {
      ae(F, f, z.e);
      return;
    }
    qe(F, z);
  }), M = X(9, function(D) {
    Ze(D) || (D[v] = 1, Z(T, D));
  });
  function Z(D, F) {
    var z = "on" + D.toLowerCase(), q = t[z];
    n && n.listeners(D).length ? D === T ? n.emit(D, F._v, F) : n.emit(D, F) : q ? q({ reason: F._v, promise: F }) : N[D](F._v, F);
  }
  function Q(D) {
    return D && D._Yaku;
  }
  function V(D) {
    if (Q(D)) return new D(L);
    var F, z, q;
    return F = new D(function(ie, re) {
      if (F) throw Y();
      z = ie, q = re;
    }), U(z, S), U(q, S), F;
  }
  function K(D, F) {
    return function(z) {
      i && (D[l] = y(!0)), F === h ? qe(D, z) : ae(D, F, z);
    };
  }
  function ye(D, F, z, q) {
    return S(z) && (F._onFulfilled = z), S(q) && (D[v] && Z(A, D), F._onRejected = q), i && (F._pre = D), D[D._pCount++] = F, D._s !== o && k(D, F), F;
  }
  function Ze(D) {
    if (D._umark)
      return !0;
    D._umark = !0;
    for (var F = 0, z = D._pCount, q; F < z; )
      if (q = D[F++], q._onRejected || Ze(q)) return !0;
  }
  function ut(D, F) {
    var z = [];
    function q(ie) {
      return z.push(ie.replace(/^\s+|\s+$/g, ""));
    }
    return i && (F[l] && q(F[l]), function ie(re) {
      re && x in re && (ie(re._next), q(re[x] + ""), ie(re._pre));
    }(F)), (D && D.stack ? D.stack : D) + (`
` + z.join(`
`)).replace(B, "");
  }
  function xt(D, F) {
    return D(F);
  }
  function ae(D, F, z) {
    var q = 0, ie = D._pCount;
    if (D._s === o)
      for (D._s = F, D._v = z, F === f && (i && j(z) && (z.longStack = ut(z, D)), M(D)); q < ie; )
        k(D, D[q++]);
    return D;
  }
  function qe(D, F) {
    if (F === D && F)
      return ae(D, f, Y(E)), D;
    if (F !== r && (S(F) || w(F))) {
      var z = H(He)(F);
      if (z === O)
        return ae(D, f, z.e), D;
      S(z) ? (i && Q(F) && (D._next = F), Q(F) ? Ve(D, F, z) : N.nextTick(function() {
        Ve(D, F, z);
      })) : ae(D, h, F);
    } else
      ae(D, h, F);
    return D;
  }
  function He(D) {
    return D.then;
  }
  function Ve(D, F, z) {
    var q = H(z, F)(function(ie) {
      F && (F = r, qe(D, ie));
    }, function(ie) {
      F && (F = r, ae(D, f, ie));
    });
    q === O && F && (ae(D, f, q.e), F = r);
  }
})();
var e0 = pl.exports, t0 = e0, r0 = {
  extendPrototype: function(e, r) {
    for (var t in r)
      e.prototype[t] = r[t];
    return e;
  },
  isFunction: function(e) {
    return typeof e == "function";
  },
  isNumber: function(e) {
    return typeof e == "number";
  },
  Promise: t0,
  slice: [].slice
}, _l = r0, At = _l.isFunction, i0 = function(e, r) {
  return function(t, i, n, a, s) {
    var f = arguments.length, h, o, d, g;
    o = new _l.Promise(function(p, v) {
      d = p, g = v;
    });
    function u(p, v) {
      p == null ? d(v) : g(p);
    }
    switch (f) {
      case 0:
        e.call(r, u);
        break;
      case 1:
        At(t) ? e.call(r, t) : e.call(r, t, u);
        break;
      case 2:
        At(i) ? e.call(r, t, i) : e.call(r, t, i, u);
        break;
      case 3:
        At(n) ? e.call(r, t, i, n) : e.call(r, t, i, n, u);
        break;
      case 4:
        At(a) ? e.call(r, t, i, n, a) : e.call(r, t, i, n, a, u);
        break;
      case 5:
        At(s) ? e.call(r, t, i, n, a, s) : e.call(r, t, i, n, a, s, u);
        break;
      default:
        h = new Array(f);
        for (var c = 0; c < f; c++)
          h[c] = arguments[c];
        if (At(h[f - 1]))
          return e.apply(r, h);
        h[c] = u, e.apply(r, h);
    }
    return o;
  };
}, ml = Qe, ht = We, n0 = Jp, a0 = Qp, fa = i0, s0 = fa(ml.writeFile), o0 = fa(ml.readFile), f0 = fa(a0);
function l0(e) {
  function r(o, d, g, u) {
    var c = 0;
    return c += o, c += d << 8, c += g << 16, c += u << 24, c;
  }
  if (e[0] === 80 && e[1] === 75 && e[2] === 3 && e[3] === 4)
    return e;
  if (e[0] !== 67 || e[1] !== 114 || e[2] !== 50 || e[3] !== 52)
    throw new Error("Invalid header: Does not start with Cr24");
  var t = e[4] === 3, i = e[4] === 2;
  if (!i && !t || e[5] || e[6] || e[7])
    throw new Error("Unexpected crx format version number.");
  if (i) {
    var n = r(e[8], e[9], e[10], e[11]), a = r(e[12], e[13], e[14], e[15]), s = 16 + n + a;
    return e.slice(s, e.length);
  }
  var f = r(e[8], e[9], e[10], e[11]), h = 12 + f;
  return e.slice(h, e.length);
}
function u0(e, r) {
  var t = ht.resolve(e), i = ht.extname(e), n = ht.basename(e, i), a = ht.dirname(e);
  return r = r || ht.resolve(a, n), o0(t).then(function(s) {
    return n0.loadAsync(l0(s));
  }).then(function(s) {
    var f = Object.keys(s.files);
    return Promise.all(f.map(function(h) {
      var o = !s.files[h].dir, d = ht.join(r, h), g = o && ht.dirname(d) || d, u = s.files[h].async("nodebuffer");
      return f0(g).then(function() {
        return o ? u : !1;
      }).then(function(c) {
        return c ? s0(d, c) : !0;
      });
    }));
  });
}
var h0 = u0;
Object.defineProperty(Mn, "__esModule", { value: !0 });
const Kt = Qe, dn = We, c0 = Dc, vn = Gn, d0 = h0, gl = (e, r, t = 5) => {
  const i = vn.getPath();
  Kt.existsSync(i) || Kt.mkdirSync(i, { recursive: !0 });
  const n = dn.resolve(`${i}/${e}`);
  return new Promise((a, s) => {
    if (!Kt.existsSync(n) || r) {
      Kt.existsSync(n) && c0.sync(n);
      const f = `https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`, h = dn.resolve(`${n}.crx`);
      vn.downloadFile(f, h).then(() => {
        d0(h, n).then(() => {
          vn.changePermissions(n, 755), a(n);
        }).catch((o) => {
          if (!Kt.existsSync(dn.resolve(n, "manifest.json")))
            return s(o);
        });
      }).catch((o) => {
        if (console.log(`Failed to fetch extension, trying ${t - 1} more times`), t <= 1)
          return s(o);
        setTimeout(() => {
          gl(e, r, t - 1).then(a).catch(s);
        }, 200);
      });
    } else
      a(n);
  });
};
Mn.default = gl;
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.MOBX_DEVTOOLS = fe.APOLLO_DEVELOPER_TOOLS = fe.CYCLEJS_DEVTOOL = fe.REDUX_DEVTOOLS = fe.VUEJS3_DEVTOOLS = fe.VUEJS_DEVTOOLS = fe.ANGULARJS_BATARANG = fe.JQUERY_DEBUGGER = fe.BACKBONE_DEBUGGER = wl = fe.REACT_DEVELOPER_TOOLS = fe.EMBER_INSPECTOR = void 0;
const $e = ko, Rn = Qe, v0 = We, p0 = kc, _0 = Mn, m0 = Gn;
let Xr = {};
const On = () => v0.resolve(m0.getPath(), "IDMap.json");
if (Rn.existsSync(On()))
  try {
    Xr = JSON.parse(Rn.readFileSync(On(), "utf8"));
  } catch {
    console.error("electron-devtools-installer: Invalid JSON present in the IDMap file");
  }
const yl = (e, r = {}) => {
  typeof r == "boolean" && (r = { forceDownload: r });
  const { forceDownload: t, loadExtensionOptions: i } = r;
  if (process.type !== "browser")
    return Promise.reject(new Error("electron-devtools-installer can only be used from the main process"));
  if (Array.isArray(e))
    return e.reduce((f, h) => f.then(() => yl(h, r)), Promise.resolve(""));
  let n;
  if (typeof e == "object" && e.id) {
    n = e.id;
    const f = process.versions.electron.split("-")[0];
    if (!p0.satisfies(f, e.electron))
      return Promise.reject(new Error(`Version of Electron: ${f} does not match required range ${e.electron} for extension ${n}`));
  } else if (typeof e == "string")
    n = e;
  else
    return Promise.reject(new Error(`Invalid extensionReference passed in: "${e}"`));
  const a = Xr[n];
  let s;
  return $e.session.defaultSession.getExtension ? s = !!a && $e.session.defaultSession.getAllExtensions().find((f) => f.name === a) : s = !!a && $e.BrowserWindow.getDevToolsExtensions && $e.BrowserWindow.getDevToolsExtensions().hasOwnProperty(a), !t && s ? Promise.resolve(Xr[n]) : _0.default(n, t || !1).then((f) => {
    if (s)
      if ($e.session.defaultSession.removeExtension) {
        const o = $e.session.defaultSession.getAllExtensions().find((d) => d.name).id;
        $e.session.defaultSession.removeExtension(o);
      } else
        $e.BrowserWindow.removeDevToolsExtension(a);
    if ($e.session.defaultSession.loadExtension)
      return $e.session.defaultSession.loadExtension(f, i).then((o) => Promise.resolve(o.name));
    const h = $e.BrowserWindow.addDevToolsExtension(f);
    return Rn.writeFileSync(On(), JSON.stringify(Object.assign(Xr, {
      [n]: h
    }))), Promise.resolve(h);
  });
};
var g0 = fe.default = yl;
fe.EMBER_INSPECTOR = {
  id: "bmdblncegkenkacieihfhpjfppoconhi",
  electron: ">=1.2.1"
};
var wl = fe.REACT_DEVELOPER_TOOLS = {
  id: "fmkadmapgofadopljbjfkapdkoienihi",
  electron: ">=1.2.1"
};
fe.BACKBONE_DEBUGGER = {
  id: "bhljhndlimiafopmmhjlgfpnnchjjbhd",
  electron: ">=1.2.1"
};
fe.JQUERY_DEBUGGER = {
  id: "dbhhnnnpaeobfddmlalhnehgclcmjimi",
  electron: ">=1.2.1"
};
fe.ANGULARJS_BATARANG = {
  id: "ighdmehidhipcmcojjgiloacoafjmpfk",
  electron: ">=1.2.1"
};
fe.VUEJS_DEVTOOLS = {
  id: "nhdogjmejiglipccpnnnanhbledajbpd",
  electron: ">=1.2.1"
};
fe.VUEJS3_DEVTOOLS = {
  id: "ljjemllljcmogpfapbkkighbhhppjdbg",
  electron: ">=1.2.1"
};
fe.REDUX_DEVTOOLS = {
  id: "lmhkpmbekcpmknklioeibfkpmmfibljd",
  electron: ">=1.2.1"
};
fe.CYCLEJS_DEVTOOL = {
  id: "dfgplfmhhmdekalbpejekgfegkonjpfp",
  electron: ">=1.2.1"
};
fe.APOLLO_DEVELOPER_TOOLS = {
  id: "jdkknkkbebbapilgoeccciglkfbmbnfm",
  electron: ">=1.2.1"
};
fe.MOBX_DEVTOOLS = {
  id: "pfgnfdagidkfgccljigdamigbcnndkod",
  electron: ">=1.2.1"
};
var El = Il, Eo = El.spawn, y0 = El.exec, w0 = function(e, r, t) {
  if (typeof r == "function" && t === void 0 && (t = r, r = void 0), e = parseInt(e), Number.isNaN(e)) {
    if (t)
      return t(new Error("pid must be a number"));
    throw new Error("pid must be a number");
  }
  var i = {}, n = {};
  switch (i[e] = [], n[e] = 1, process.platform) {
    case "win32":
      y0("taskkill /pid " + e + " /T /F", t);
      break;
    case "darwin":
      Tn(e, i, n, function(a) {
        return Eo("pgrep", ["-P", a]);
      }, function() {
        bo(i, r, t);
      });
      break;
    default:
      Tn(e, i, n, function(a) {
        return Eo("ps", ["-o", "pid", "--no-headers", "--ppid", a]);
      }, function() {
        bo(i, r, t);
      });
      break;
  }
};
function bo(e, r, t) {
  var i = {};
  try {
    Object.keys(e).forEach(function(n) {
      e[n].forEach(function(a) {
        i[a] || (So(a, r), i[a] = 1);
      }), i[n] || (So(n, r), i[n] = 1);
    });
  } catch (n) {
    if (t)
      return t(n);
    throw n;
  }
  if (t)
    return t();
}
function So(e, r) {
  try {
    process.kill(parseInt(e, 10), r);
  } catch (t) {
    if (t.code !== "ESRCH") throw t;
  }
}
function Tn(e, r, t, i, n) {
  var a = i(e), s = "";
  a.stdout.on("data", function(o) {
    var o = o.toString("ascii");
    s += o;
  });
  var f = function(h) {
    if (delete t[e], h != 0) {
      Object.keys(t).length == 0 && n();
      return;
    }
    s.match(/\d+/g).forEach(function(o) {
      o = parseInt(o, 10), r[e].push(o), r[o] = [], t[o] = 1, Tn(o, r, t, i, n);
    });
  };
  a.on("close", f);
}
const E0 = /* @__PURE__ */ Cl(w0), bl = be.dirname(Ol(import.meta.url));
process.env.APP_ROOT = be.join(bl, "..");
const An = process.env.VITE_DEV_SERVER_URL, P0 = be.join(process.env.APP_ROOT, "dist-electron"), Sl = be.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = An ? be.join(process.env.APP_ROOT, "public") : Sl;
let Me, vt;
function kl() {
  if (Me = new xo({
    icon: be.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: be.join(bl, "preload.mjs")
    }
  }), Me.webContents.on("did-finish-load", () => {
    Me == null || Me.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), An) {
    Me.loadURL(An), g0(wl).then((r) => console.log(`Added Extension:  ${r}`)).catch((r) => console.log("An error occurred: ", r)), Me.webContents.openDevTools();
    const e = be.join(process.env.APP_ROOT, "build", "electron-react-java.jar");
    vt = ua("java", ["-jar", e]), console.log("child process started ", vt.pid), console.log("correriendo en modo dev");
  } else {
    Me.loadFile(be.join(Sl, "index.html"));
    const e = be.join(pt.getAppPath(), "..", "..", "build", "electron-react-java.jar");
    if (!Tl.existsSync(e)) {
      const r = pt.getPath("exe").split(be.sep).slice(0, -2).join(be.sep), t = e.split(r)[1];
      la.showErrorBox("Error", "No se encontro el archivo " + r), la.showErrorBox("Error", "No se encontro el archivo " + t), console.error("No se encontro el archivo " + e);
      return;
    }
    vt = ua("java", ["-jar", e]);
  }
}
pt.on("window-all-closed", () => {
  vt && vt.pid !== void 0 ? (console.log("killing child process"), console.log(vt.pid), E0(vt.pid, "SIGKILL", (e) => {
    e ? console.error("Error al matar el proceso hijo:", e) : console.log("Proceso hijo y sus procesos secundarios eliminados");
  }), console.log("child process killed"), process.platform !== "darwin" && setTimeout(() => {
    pt.quit(), Me = null;
  }, 1e3)) : process.platform !== "darwin" && (pt.quit(), Me = null);
});
pt.on("activate", () => {
  xo.getAllWindows().length === 0 && kl();
});
pt.whenReady().then(kl);
export {
  P0 as MAIN_DIST,
  Sl as RENDERER_DIST,
  An as VITE_DEV_SERVER_URL
};
