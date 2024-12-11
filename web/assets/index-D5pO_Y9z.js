(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const r of i.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = s(o);
        fetch(o.href, i)
    }
})();
/**
 * @vue/shared v3.4.38
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Ts(e, t) {
    const s = new Set(e.split(","));
    return n => s.has(n)
}
const K = {},
    tt = [],
    ue = () => {},
    Lo = () => !1,
    Wt = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Ss = e => e.startsWith("onUpdate:"),
    ne = Object.assign,
    Os = (e, t) => {
        const s = e.indexOf(t);
        s > -1 && e.splice(s, 1)
    },
    No = Object.prototype.hasOwnProperty,
    R = (e, t) => No.call(e, t),
    S = Array.isArray,
    st = e => kt(e) === "[object Map]",
    In = e => kt(e) === "[object Set]",
    M = e => typeof e == "function",
    q = e => typeof e == "string",
    Ne = e => typeof e == "symbol",
    W = e => e !== null && typeof e == "object",
    Fn = e => (W(e) || M(e)) && M(e.then) && M(e.catch),
    jn = Object.prototype.toString,
    kt = e => jn.call(e),
    Do = e => kt(e).slice(8, -1),
    Hn = e => kt(e) === "[object Object]",
    Ms = e => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    ht = Ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    zt = e => {
        const t = Object.create(null);
        return s => t[s] || (t[s] = e(s))
    },
    Vo = /-(\w)/g,
    me = zt(e => e.replace(Vo, (t, s) => s ? s.toUpperCase() : "")),
    Uo = /\B([A-Z])/g,
    Xe = zt(e => e.replace(Uo, "-$1").toLowerCase()),
    qt = zt(e => e.charAt(0).toUpperCase() + e.slice(1)),
    os = zt(e => e ? `on${qt(e)}` : ""),
    Ge = (e, t) => !Object.is(e, t),
    jt = (e, ...t) => {
        for (let s = 0; s < e.length; s++) e[s](...t)
    },
    Ln = (e, t, s, n = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: n,
            value: s
        })
    },
    ps = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let Qs;
const Nn = () => Qs || (Qs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ps(e) {
    if (S(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
            const n = e[s],
                o = q(n) ? ko(n) : Ps(n);
            if (o)
                for (const i in o) t[i] = o[i]
        }
        return t
    } else if (q(e) || W(e)) return e
}
const Ko = /;(?![^(]*\))/g,
    Bo = /:([^]+)/,
    Wo = /\/\*[^]*?\*\//g;

function ko(e) {
    const t = {};
    return e.replace(Wo, "").split(Ko).forEach(s => {
        if (s) {
            const n = s.split(Bo);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }), t
}

function qe(e) {
    let t = "";
    if (q(e)) t = e;
    else if (S(e))
        for (let s = 0; s < e.length; s++) {
            const n = qe(e[s]);
            n && (t += n + " ")
        } else if (W(e))
            for (const s in e) e[s] && (t += s + " ");
    return t.trim()
}
const zo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    qo = Ts(zo);

function Dn(e) {
    return !!e || e === ""
}
const Vn = e => !!(e && e.__v_isRef === !0),
    se = e => q(e) ? e : e == null ? "" : S(e) || W(e) && (e.toString === jn || !M(e.toString)) ? Vn(e) ? se(e.value) : JSON.stringify(e, Un, 2) : String(e),
    Un = (e, t) => Vn(t) ? Un(e, t.value) : st(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((s, [n, o], i) => (s[is(n, i) + " =>"] = o, s), {})
    } : In(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(s => is(s))
    } : Ne(t) ? is(t) : W(t) && !S(t) && !Hn(t) ? String(t) : t,
    is = (e, t = "") => {
        var s;
        return Ne(e) ? `Symbol(${(s=e.description)!=null?s:t})` : e
    };
/**
 * @vue/reactivity v3.4.38
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let he;
class Zo {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const s = he;
            try {
                return he = this, t()
            } finally {
                he = s
            }
        }
    }
    on() {
        he = this
    }
    off() {
        he = this.parent
    }
    stop(t) {
        if (this._active) {
            let s, n;
            for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
            for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
            if (this.scopes)
                for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function Jo(e, t = he) {
    t && t.active && t.effects.push(e)
}

function Go() {
    return he
}
let Ze;
class As {
    constructor(t, s, n, o) {
        this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Jo(this, o)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1, De();
            for (let t = 0; t < this._depsLength; t++) {
                const s = this.deps[t];
                if (s.computed && (Yo(s.computed), this._dirtyLevel >= 4)) break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ve()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = He,
            s = Ze;
        try {
            return He = !0, Ze = this, this._runnings++, en(this), this.fn()
        } finally {
            tn(this), this._runnings--, Ze = s, He = t
        }
    }
    stop() {
        this.active && (en(this), tn(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Yo(e) {
    return e.value
}

function en(e) {
    e._trackId++, e._depsLength = 0
}

function tn(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) Kn(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function Kn(e, t) {
    const s = e.get(t);
    s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup())
}
let He = !0,
    _s = 0;
const Bn = [];

function De() {
    Bn.push(He), He = !1
}

function Ve() {
    const e = Bn.pop();
    He = e === void 0 ? !0 : e
}

function Rs() {
    _s++
}

function Is() {
    for (_s--; !_s && ms.length;) ms.shift()()
}

function Wn(e, t, s) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const n = e.deps[e._depsLength];
        n !== t ? (n && Kn(n, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const ms = [];

function kn(e, t, s) {
    Rs();
    for (const n of e.keys()) {
        let o;
        n._dirtyLevel < t && (o ?? (o = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (o ?? (o = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && ms.push(n.scheduler)))
    }
    Is()
}
const zn = (e, t) => {
        const s = new Map;
        return s.cleanup = e, s.computed = t, s
    },
    gs = new WeakMap,
    Je = Symbol(""),
    ys = Symbol("");

function ie(e, t, s) {
    if (He && Ze) {
        let n = gs.get(e);
        n || gs.set(e, n = new Map);
        let o = n.get(s);
        o || n.set(s, o = zn(() => n.delete(s))), Wn(Ze, o)
    }
}

function Pe(e, t, s, n, o, i) {
    const r = gs.get(e);
    if (!r) return;
    let c = [];
    if (t === "clear") c = [...r.values()];
    else if (s === "length" && S(e)) {
        const f = Number(n);
        r.forEach((h, p) => {
            (p === "length" || !Ne(p) && p >= f) && c.push(h)
        })
    } else switch (s !== void 0 && c.push(r.get(s)), t) {
        case "add":
            S(e) ? Ms(s) && c.push(r.get("length")) : (c.push(r.get(Je)), st(e) && c.push(r.get(ys)));
            break;
        case "delete":
            S(e) || (c.push(r.get(Je)), st(e) && c.push(r.get(ys)));
            break;
        case "set":
            st(e) && c.push(r.get(Je));
            break
    }
    Rs();
    for (const f of c) f && kn(f, 4);
    Is()
}
const Xo = Ts("__proto__,__v_isRef,__isVue"),
    qn = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ne)),
    sn = Qo();

function Qo() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...s) {
            const n = L(this);
            for (let i = 0, r = this.length; i < r; i++) ie(n, "get", i + "");
            const o = n[t](...s);
            return o === -1 || o === !1 ? n[t](...s.map(L)) : o
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...s) {
            De(), Rs();
            const n = L(this)[t].apply(this, s);
            return Is(), Ve(), n
        }
    }), e
}

function ei(e) {
    Ne(e) || (e = String(e));
    const t = L(this);
    return ie(t, "has", e), t.hasOwnProperty(e)
}
class Zn {
    constructor(t = !1, s = !1) {
        this._isReadonly = t, this._isShallow = s
    }
    get(t, s, n) {
        const o = this._isReadonly,
            i = this._isShallow;
        if (s === "__v_isReactive") return !o;
        if (s === "__v_isReadonly") return o;
        if (s === "__v_isShallow") return i;
        if (s === "__v_raw") return n === (o ? i ? hi : Xn : i ? Yn : Gn).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
        const r = S(t);
        if (!o) {
            if (r && R(sn, s)) return Reflect.get(sn, s, n);
            if (s === "hasOwnProperty") return ei
        }
        const c = Reflect.get(t, s, n);
        return (Ne(s) ? qn.has(s) : Xo(s)) || (o || ie(t, "get", s), i) ? c : ae(c) ? r && Ms(s) ? c : c.value : W(c) ? o ? Qn(c) : Hs(c) : c
    }
}
class Jn extends Zn {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, s, n, o) {
        let i = t[s];
        if (!this._isShallow) {
            const f = it(i);
            if (!gt(n) && !it(n) && (i = L(i), n = L(n)), !S(t) && ae(i) && !ae(n)) return f ? !1 : (i.value = n, !0)
        }
        const r = S(t) && Ms(s) ? Number(s) < t.length : R(t, s),
            c = Reflect.set(t, s, n, o);
        return t === L(o) && (r ? Ge(n, i) && Pe(t, "set", s, n) : Pe(t, "add", s, n)), c
    }
    deleteProperty(t, s) {
        const n = R(t, s);
        t[s];
        const o = Reflect.deleteProperty(t, s);
        return o && n && Pe(t, "delete", s, void 0), o
    }
    has(t, s) {
        const n = Reflect.has(t, s);
        return (!Ne(s) || !qn.has(s)) && ie(t, "has", s), n
    }
    ownKeys(t) {
        return ie(t, "iterate", S(t) ? "length" : Je), Reflect.ownKeys(t)
    }
}
class ti extends Zn {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, s) {
        return !0
    }
    deleteProperty(t, s) {
        return !0
    }
}
const si = new Jn,
    ni = new ti,
    oi = new Jn(!0);
const Fs = e => e,
    Zt = e => Reflect.getPrototypeOf(e);

function Mt(e, t, s = !1, n = !1) {
    e = e.__v_raw;
    const o = L(e),
        i = L(t);
    s || (Ge(t, i) && ie(o, "get", t), ie(o, "get", i));
    const {
        has: r
    } = Zt(o), c = n ? Fs : s ? Ds : Ns;
    if (r.call(o, t)) return c(e.get(t));
    if (r.call(o, i)) return c(e.get(i));
    e !== o && e.get(t)
}

function Pt(e, t = !1) {
    const s = this.__v_raw,
        n = L(s),
        o = L(e);
    return t || (Ge(e, o) && ie(n, "has", e), ie(n, "has", o)), e === o ? s.has(e) : s.has(e) || s.has(o)
}

function At(e, t = !1) {
    return e = e.__v_raw, !t && ie(L(e), "iterate", Je), Reflect.get(e, "size", e)
}

function nn(e, t = !1) {
    !t && !gt(e) && !it(e) && (e = L(e));
    const s = L(this);
    return Zt(s).has.call(s, e) || (s.add(e), Pe(s, "add", e, e)), this
}

function on(e, t, s = !1) {
    !s && !gt(t) && !it(t) && (t = L(t));
    const n = L(this),
        {
            has: o,
            get: i
        } = Zt(n);
    let r = o.call(n, e);
    r || (e = L(e), r = o.call(n, e));
    const c = i.call(n, e);
    return n.set(e, t), r ? Ge(t, c) && Pe(n, "set", e, t) : Pe(n, "add", e, t), this
}

function rn(e) {
    const t = L(this),
        {
            has: s,
            get: n
        } = Zt(t);
    let o = s.call(t, e);
    o || (e = L(e), o = s.call(t, e)), n && n.call(t, e);
    const i = t.delete(e);
    return o && Pe(t, "delete", e, void 0), i
}

function ln() {
    const e = L(this),
        t = e.size !== 0,
        s = e.clear();
    return t && Pe(e, "clear", void 0, void 0), s
}

function Rt(e, t) {
    return function(n, o) {
        const i = this,
            r = i.__v_raw,
            c = L(r),
            f = t ? Fs : e ? Ds : Ns;
        return !e && ie(c, "iterate", Je), r.forEach((h, p) => n.call(o, f(h), f(p), i))
    }
}

function It(e, t, s) {
    return function(...n) {
        const o = this.__v_raw,
            i = L(o),
            r = st(i),
            c = e === "entries" || e === Symbol.iterator && r,
            f = e === "keys" && r,
            h = o[e](...n),
            p = s ? Fs : t ? Ds : Ns;
        return !t && ie(i, "iterate", f ? ys : Je), {
            next() {
                const {
                    value: v,
                    done: C
                } = h.next();
                return C ? {
                    value: v,
                    done: C
                } : {
                    value: c ? [p(v[0]), p(v[1])] : p(v),
                    done: C
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Re(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function ii() {
    const e = {
            get(i) {
                return Mt(this, i)
            },
            get size() {
                return At(this)
            },
            has: Pt,
            add: nn,
            set: on,
            delete: rn,
            clear: ln,
            forEach: Rt(!1, !1)
        },
        t = {
            get(i) {
                return Mt(this, i, !1, !0)
            },
            get size() {
                return At(this)
            },
            has: Pt,
            add(i) {
                return nn.call(this, i, !0)
            },
            set(i, r) {
                return on.call(this, i, r, !0)
            },
            delete: rn,
            clear: ln,
            forEach: Rt(!1, !0)
        },
        s = {
            get(i) {
                return Mt(this, i, !0)
            },
            get size() {
                return At(this, !0)
            },
            has(i) {
                return Pt.call(this, i, !0)
            },
            add: Re("add"),
            set: Re("set"),
            delete: Re("delete"),
            clear: Re("clear"),
            forEach: Rt(!0, !1)
        },
        n = {
            get(i) {
                return Mt(this, i, !0, !0)
            },
            get size() {
                return At(this, !0)
            },
            has(i) {
                return Pt.call(this, i, !0)
            },
            add: Re("add"),
            set: Re("set"),
            delete: Re("delete"),
            clear: Re("clear"),
            forEach: Rt(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        e[i] = It(i, !1, !1), s[i] = It(i, !0, !1), t[i] = It(i, !1, !0), n[i] = It(i, !0, !0)
    }), [e, s, t, n]
}
const [ri, li, ci, ai] = ii();

function js(e, t) {
    const s = t ? e ? ai : ci : e ? li : ri;
    return (n, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(R(s, o) && o in n ? s : n, o, i)
}
const fi = {
        get: js(!1, !1)
    },
    ui = {
        get: js(!1, !0)
    },
    di = {
        get: js(!0, !1)
    };
const Gn = new WeakMap,
    Yn = new WeakMap,
    Xn = new WeakMap,
    hi = new WeakMap;

function pi(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function _i(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : pi(Do(e))
}

function Hs(e) {
    return it(e) ? e : Ls(e, !1, si, fi, Gn)
}

function mi(e) {
    return Ls(e, !1, oi, ui, Yn)
}

function Qn(e) {
    return Ls(e, !0, ni, di, Xn)
}

function Ls(e, t, s, n, o) {
    if (!W(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = o.get(e);
    if (i) return i;
    const r = _i(e);
    if (r === 0) return e;
    const c = new Proxy(e, r === 2 ? n : s);
    return o.set(e, c), c
}

function pt(e) {
    return it(e) ? pt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function it(e) {
    return !!(e && e.__v_isReadonly)
}

function gt(e) {
    return !!(e && e.__v_isShallow)
}

function eo(e) {
    return e ? !!e.__v_raw : !1
}

function L(e) {
    const t = e && e.__v_raw;
    return t ? L(t) : e
}

function gi(e) {
    return Object.isExtensible(e) && Ln(e, "__v_skip", !0), e
}
const Ns = e => W(e) ? Hs(e) : e,
    Ds = e => W(e) ? Qn(e) : e;
class to {
    constructor(t, s, n, o) {
        this.getter = t, this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new As(() => t(this._value), () => rs(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n
    }
    get value() {
        const t = L(this);
        return (!t._cacheable || t.effect.dirty) && Ge(t._value, t._value = t.effect.run()) && rs(t, 4), bi(t), t.effect._dirtyLevel >= 2 && rs(t, 2), t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}

function yi(e, t, s = !1) {
    let n, o;
    const i = M(e);
    return i ? (n = e, o = ue) : (n = e.get, o = e.set), new to(n, o, i || !o, s)
}

function bi(e) {
    var t;
    He && Ze && (e = L(e), Wn(Ze, (t = e.dep) != null ? t : e.dep = zn(() => e.dep = void 0, e instanceof to ? e : void 0)))
}

function rs(e, t = 4, s, n) {
    e = L(e);
    const o = e.dep;
    o && kn(o, t)
}

function ae(e) {
    return !!(e && e.__v_isRef === !0)
}

function wi(e) {
    return ae(e) ? e.value : e
}
const vi = {
    get: (e, t, s) => wi(Reflect.get(e, t, s)),
    set: (e, t, s, n) => {
        const o = e[t];
        return ae(o) && !ae(s) ? (o.value = s, !0) : Reflect.set(e, t, s, n)
    }
};

function so(e) {
    return pt(e) ? e : new Proxy(e, vi)
}
/**
 * @vue/runtime-core v3.4.38
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Le(e, t, s, n) {
    try {
        return n ? e(...n) : e()
    } catch (o) {
        Jt(o, t, s)
    }
}

function pe(e, t, s, n) {
    if (M(e)) {
        const o = Le(e, t, s, n);
        return o && Fn(o) && o.catch(i => {
            Jt(i, t, s)
        }), o
    }
    if (S(e)) {
        const o = [];
        for (let i = 0; i < e.length; i++) o.push(pe(e[i], t, s, n));
        return o
    }
}

function Jt(e, t, s, n = !0) {
    const o = t ? t.vnode : null;
    if (t) {
        let i = t.parent;
        const r = t.proxy,
            c = `https://vuejs.org/error-reference/#runtime-${s}`;
        for (; i;) {
            const h = i.ec;
            if (h) {
                for (let p = 0; p < h.length; p++)
                    if (h[p](e, r, c) === !1) return
            }
            i = i.parent
        }
        const f = t.appContext.config.errorHandler;
        if (f) {
            De(), Le(f, null, 10, [e, r, c]), Ve();
            return
        }
    }
    $i(e, s, o, n)
}

function $i(e, t, s, n = !0) {
    console.error(e)
}
let yt = !1,
    bs = !1;
const X = [];
let Se = 0;
const nt = [];
let Ie = null,
    ze = 0;
const no = Promise.resolve();
let Vs = null;

function xi(e) {
    const t = Vs || no;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Ci(e) {
    let t = Se + 1,
        s = X.length;
    for (; t < s;) {
        const n = t + s >>> 1,
            o = X[n],
            i = bt(o);
        i < e || i === e && o.pre ? t = n + 1 : s = n
    }
    return t
}

function Us(e) {
    (!X.length || !X.includes(e, yt && e.allowRecurse ? Se + 1 : Se)) && (e.id == null ? X.push(e) : X.splice(Ci(e.id), 0, e), oo())
}

function oo() {
    !yt && !bs && (bs = !0, Vs = no.then(ro))
}

function Ei(e) {
    const t = X.indexOf(e);
    t > Se && X.splice(t, 1)
}

function Ti(e) {
    S(e) ? nt.push(...e) : (!Ie || !Ie.includes(e, e.allowRecurse ? ze + 1 : ze)) && nt.push(e), oo()
}

function cn(e, t, s = yt ? Se + 1 : 0) {
    for (; s < X.length; s++) {
        const n = X[s];
        if (n && n.pre) {
            if (e && n.id !== e.uid) continue;
            X.splice(s, 1), s--, n()
        }
    }
}

function io(e) {
    if (nt.length) {
        const t = [...new Set(nt)].sort((s, n) => bt(s) - bt(n));
        if (nt.length = 0, Ie) {
            Ie.push(...t);
            return
        }
        for (Ie = t, ze = 0; ze < Ie.length; ze++) {
            const s = Ie[ze];
            s.active !== !1 && s()
        }
        Ie = null, ze = 0
    }
}
const bt = e => e.id == null ? 1 / 0 : e.id,
    Si = (e, t) => {
        const s = bt(e) - bt(t);
        if (s === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return s
    };

function ro(e) {
    bs = !1, yt = !0, X.sort(Si);
    try {
        for (Se = 0; Se < X.length; Se++) {
            const t = X[Se];
            t && t.active !== !1 && Le(t, t.i, t.i ? 15 : 14)
        }
    } finally {
        Se = 0, X.length = 0, io(), yt = !1, Vs = null, (X.length || nt.length) && ro()
    }
}
let le = null,
    lo = null;

function Ut(e) {
    const t = le;
    return le = e, lo = e && e.type.__scopeId || null, t
}

function Oi(e, t = le, s) {
    if (!t || e._n) return e;
    const n = (...o) => {
        n._d && gn(-1);
        const i = Ut(t);
        let r;
        try {
            r = e(...o)
        } finally {
            Ut(i), n._d && gn(1)
        }
        return r
    };
    return n._n = !0, n._c = !0, n._d = !0, n
}

function wt(e, t) {
    if (le === null) return e;
    const s = es(le),
        n = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let [i, r, c, f = K] = t[o];
        i && (M(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && je(r), n.push({
            dir: i,
            instance: s,
            value: r,
            oldValue: void 0,
            arg: c,
            modifiers: f
        }))
    }
    return e
}

function We(e, t, s, n) {
    const o = e.dirs,
        i = t && t.dirs;
    for (let r = 0; r < o.length; r++) {
        const c = o[r];
        i && (c.oldValue = i[r].value);
        let f = c.dir[n];
        f && (De(), pe(f, s, 8, [e.el, c, e, t]), Ve())
    }
}

function co(e, t) {
    e.shapeFlag & 6 && e.component ? co(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
const Ht = e => !!e.type.__asyncLoader,
    ao = e => e.type.__isKeepAlive;

function Mi(e, t) {
    fo(e, "a", t)
}

function Pi(e, t) {
    fo(e, "da", t)
}

function fo(e, t, s = Q) {
    const n = e.__wdc || (e.__wdc = () => {
        let o = s;
        for (; o;) {
            if (o.isDeactivated) return;
            o = o.parent
        }
        return e()
    });
    if (Gt(t, n, s), s) {
        let o = s.parent;
        for (; o && o.parent;) ao(o.parent.vnode) && Ai(n, t, s, o), o = o.parent
    }
}

function Ai(e, t, s, n) {
    const o = Gt(t, e, n, !0);
    uo(() => {
        Os(n[t], o)
    }, s)
}

function Gt(e, t, s = Q, n = !1) {
    if (s) {
        const o = s[e] || (s[e] = []),
            i = t.__weh || (t.__weh = (...r) => {
                De();
                const c = Ct(s),
                    f = pe(t, s, e, r);
                return c(), Ve(), f
            });
        return n ? o.unshift(i) : o.push(i), i
    }
}
const Ae = e => (t, s = Q) => {
        (!Qt || e === "sp") && Gt(e, (...n) => t(...n), s)
    },
    Ri = Ae("bm"),
    Ii = Ae("m"),
    Fi = Ae("bu"),
    ji = Ae("u"),
    Hi = Ae("bum"),
    uo = Ae("um"),
    Li = Ae("sp"),
    Ni = Ae("rtg"),
    Di = Ae("rtc");

function Vi(e, t = Q) {
    Gt("ec", e, t)
}
const ho = "components";

function xe(e, t) {
    return Ki(ho, e, !0, t) || e
}
const Ui = Symbol.for("v-ndc");

function Ki(e, t, s = !0, n = !1) {
    const o = le || Q;
    if (o) {
        const i = o.type;
        if (e === ho) {
            const c = jr(i, !1);
            if (c && (c === t || c === me(t) || c === qt(me(t)))) return i
        }
        const r = an(o[e] || i[e], t) || an(o.appContext[e], t);
        return !r && n ? i : r
    }
}

function an(e, t) {
    return e && (e[t] || e[me(t)] || e[qt(me(t))])
}

function Bi(e, t, s, n) {
    let o;
    const i = s;
    if (S(e) || q(e)) {
        o = new Array(e.length);
        for (let r = 0, c = e.length; r < c; r++) o[r] = t(e[r], r, void 0, i)
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let r = 0; r < e; r++) o[r] = t(r + 1, r, void 0, i)
    } else if (W(e))
        if (e[Symbol.iterator]) o = Array.from(e, (r, c) => t(r, c, void 0, i));
        else {
            const r = Object.keys(e);
            o = new Array(r.length);
            for (let c = 0, f = r.length; c < f; c++) {
                const h = r[c];
                o[c] = t(e[h], h, c, i)
            }
        }
    else o = [];
    return o
}
const ws = e => e ? Io(e) ? es(e) : ws(e.parent) : null,
    _t = ne(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => ws(e.parent),
        $root: e => ws(e.root),
        $emit: e => e.emit,
        $options: e => Ks(e),
        $forceUpdate: e => e.f || (e.f = () => {
            e.effect.dirty = !0, Us(e.update)
        }),
        $nextTick: e => e.n || (e.n = xi.bind(e.proxy)),
        $watch: e => hr.bind(e)
    }),
    ls = (e, t) => e !== K && !e.__isScriptSetup && R(e, t),
    Wi = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: s,
                setupState: n,
                data: o,
                props: i,
                accessCache: r,
                type: c,
                appContext: f
            } = e;
            let h;
            if (t[0] !== "$") {
                const P = r[t];
                if (P !== void 0) switch (P) {
                    case 1:
                        return n[t];
                    case 2:
                        return o[t];
                    case 4:
                        return s[t];
                    case 3:
                        return i[t]
                } else {
                    if (ls(n, t)) return r[t] = 1, n[t];
                    if (o !== K && R(o, t)) return r[t] = 2, o[t];
                    if ((h = e.propsOptions[0]) && R(h, t)) return r[t] = 3, i[t];
                    if (s !== K && R(s, t)) return r[t] = 4, s[t];
                    vs && (r[t] = 0)
                }
            }
            const p = _t[t];
            let v, C;
            if (p) return t === "$attrs" && ie(e.attrs, "get", ""), p(e);
            if ((v = c.__cssModules) && (v = v[t])) return v;
            if (s !== K && R(s, t)) return r[t] = 4, s[t];
            if (C = f.config.globalProperties, R(C, t)) return C[t]
        },
        set({
            _: e
        }, t, s) {
            const {
                data: n,
                setupState: o,
                ctx: i
            } = e;
            return ls(o, t) ? (o[t] = s, !0) : n !== K && R(n, t) ? (n[t] = s, !0) : R(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: s,
                ctx: n,
                appContext: o,
                propsOptions: i
            }
        }, r) {
            let c;
            return !!s[r] || e !== K && R(e, r) || ls(t, r) || (c = i[0]) && R(c, r) || R(n, r) || R(_t, r) || R(o.config.globalProperties, r)
        },
        defineProperty(e, t, s) {
            return s.get != null ? e._.accessCache[t] = 0 : R(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s)
        }
    };

function fn(e) {
    return S(e) ? e.reduce((t, s) => (t[s] = null, t), {}) : e
}
let vs = !0;

function ki(e) {
    const t = Ks(e),
        s = e.proxy,
        n = e.ctx;
    vs = !1, t.beforeCreate && un(t.beforeCreate, e, "bc");
    const {
        data: o,
        computed: i,
        methods: r,
        watch: c,
        provide: f,
        inject: h,
        created: p,
        beforeMount: v,
        mounted: C,
        beforeUpdate: P,
        updated: V,
        activated: I,
        deactivated: Y,
        beforeDestroy: k,
        beforeUnmount: z,
        destroyed: H,
        unmounted: Z,
        render: fe,
        renderTracked: F,
        renderTriggered: Oe,
        errorCaptured: ye,
        serverPrefetch: ts,
        expose: Ue,
        inheritAttrs: lt,
        components: Et,
        directives: Tt,
        filters: ss
    } = t;
    if (h && zi(h, n, null), r)
        for (const B in r) {
            const D = r[B];
            M(D) && (n[B] = D.bind(s))
        }
    if (o) {
        const B = o.call(s, s);
        W(B) && (e.data = Hs(B))
    }
    if (vs = !0, i)
        for (const B in i) {
            const D = i[B],
                Ke = M(D) ? D.bind(s, s) : M(D.get) ? D.get.bind(s, s) : ue,
                St = !M(D) && M(D.set) ? D.set.bind(s) : ue,
                Be = Lr({
                    get: Ke,
                    set: St
                });
            Object.defineProperty(n, B, {
                enumerable: !0,
                configurable: !0,
                get: () => Be.value,
                set: be => Be.value = be
            })
        }
    if (c)
        for (const B in c) po(c[B], n, s, B);
    if (f) {
        const B = M(f) ? f.call(s) : f;
        Reflect.ownKeys(B).forEach(D => {
            Xi(D, B[D])
        })
    }
    p && un(p, e, "c");

    function ee(B, D) {
        S(D) ? D.forEach(Ke => B(Ke.bind(s))) : D && B(D.bind(s))
    }
    if (ee(Ri, v), ee(Ii, C), ee(Fi, P), ee(ji, V), ee(Mi, I), ee(Pi, Y), ee(Vi, ye), ee(Di, F), ee(Ni, Oe), ee(Hi, z), ee(uo, Z), ee(Li, ts), S(Ue))
        if (Ue.length) {
            const B = e.exposed || (e.exposed = {});
            Ue.forEach(D => {
                Object.defineProperty(B, D, {
                    get: () => s[D],
                    set: Ke => s[D] = Ke
                })
            })
        } else e.exposed || (e.exposed = {});
    fe && e.render === ue && (e.render = fe), lt != null && (e.inheritAttrs = lt), Et && (e.components = Et), Tt && (e.directives = Tt)
}

function zi(e, t, s = ue) {
    S(e) && (e = $s(e));
    for (const n in e) {
        const o = e[n];
        let i;
        W(o) ? "default" in o ? i = Lt(o.from || n, o.default, !0) : i = Lt(o.from || n) : i = Lt(o), ae(i) ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: r => i.value = r
        }) : t[n] = i
    }
}

function un(e, t, s) {
    pe(S(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}

function po(e, t, s, n) {
    const o = n.includes(".") ? Oo(s, n) : () => s[n];
    if (q(e)) {
        const i = t[e];
        M(i) && as(o, i)
    } else if (M(e)) as(o, e.bind(s));
    else if (W(e))
        if (S(e)) e.forEach(i => po(i, t, s, n));
        else {
            const i = M(e.handler) ? e.handler.bind(s) : t[e.handler];
            M(i) && as(o, i, e)
        }
}

function Ks(e) {
    const t = e.type,
        {
            mixins: s,
            extends: n
        } = t,
        {
            mixins: o,
            optionsCache: i,
            config: {
                optionMergeStrategies: r
            }
        } = e.appContext,
        c = i.get(t);
    let f;
    return c ? f = c : !o.length && !s && !n ? f = t : (f = {}, o.length && o.forEach(h => Kt(f, h, r, !0)), Kt(f, t, r)), W(t) && i.set(t, f), f
}

function Kt(e, t, s, n = !1) {
    const {
        mixins: o,
        extends: i
    } = t;
    i && Kt(e, i, s, !0), o && o.forEach(r => Kt(e, r, s, !0));
    for (const r in t)
        if (!(n && r === "expose")) {
            const c = qi[r] || s && s[r];
            e[r] = c ? c(e[r], t[r]) : t[r]
        } return e
}
const qi = {
    data: dn,
    props: hn,
    emits: hn,
    methods: dt,
    computed: dt,
    beforeCreate: te,
    created: te,
    beforeMount: te,
    mounted: te,
    beforeUpdate: te,
    updated: te,
    beforeDestroy: te,
    beforeUnmount: te,
    destroyed: te,
    unmounted: te,
    activated: te,
    deactivated: te,
    errorCaptured: te,
    serverPrefetch: te,
    components: dt,
    directives: dt,
    watch: Ji,
    provide: dn,
    inject: Zi
};

function dn(e, t) {
    return t ? e ? function() {
        return ne(M(e) ? e.call(this, this) : e, M(t) ? t.call(this, this) : t)
    } : t : e
}

function Zi(e, t) {
    return dt($s(e), $s(t))
}

function $s(e) {
    if (S(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
        return t
    }
    return e
}

function te(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function dt(e, t) {
    return e ? ne(Object.create(null), e, t) : t
}

function hn(e, t) {
    return e ? S(e) && S(t) ? [...new Set([...e, ...t])] : ne(Object.create(null), fn(e), fn(t ?? {})) : t
}

function Ji(e, t) {
    if (!e) return t;
    if (!t) return e;
    const s = ne(Object.create(null), e);
    for (const n in t) s[n] = te(e[n], t[n]);
    return s
}

function _o() {
    return {
        app: null,
        config: {
            isNativeTag: Lo,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Gi = 0;

function Yi(e, t) {
    return function(n, o = null) {
        M(n) || (n = ne({}, n)), o != null && !W(o) && (o = null);
        const i = _o(),
            r = new WeakSet;
        let c = !1;
        const f = i.app = {
            _uid: Gi++,
            _component: n,
            _props: o,
            _container: null,
            _context: i,
            _instance: null,
            version: Nr,
            get config() {
                return i.config
            },
            set config(h) {},
            use(h, ...p) {
                return r.has(h) || (h && M(h.install) ? (r.add(h), h.install(f, ...p)) : M(h) && (r.add(h), h(f, ...p))), f
            },
            mixin(h) {
                return i.mixins.includes(h) || i.mixins.push(h), f
            },
            component(h, p) {
                return p ? (i.components[h] = p, f) : i.components[h]
            },
            directive(h, p) {
                return p ? (i.directives[h] = p, f) : i.directives[h]
            },
            mount(h, p, v) {
                if (!c) {
                    const C = _e(n, o);
                    return C.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), p && t ? t(C, h) : e(C, h, v), c = !0, f._container = h, h.__vue_app__ = f, es(C.component)
                }
            },
            unmount() {
                c && (e(null, f._container), delete f._container.__vue_app__)
            },
            provide(h, p) {
                return i.provides[h] = p, f
            },
            runWithContext(h) {
                const p = ot;
                ot = f;
                try {
                    return h()
                } finally {
                    ot = p
                }
            }
        };
        return f
    }
}
let ot = null;

function Xi(e, t) {
    if (Q) {
        let s = Q.provides;
        const n = Q.parent && Q.parent.provides;
        n === s && (s = Q.provides = Object.create(n)), s[e] = t
    }
}

function Lt(e, t, s = !1) {
    const n = Q || le;
    if (n || ot) {
        const o = ot ? ot._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return s && M(t) ? t.call(n && n.proxy) : t
    }
}
const mo = {},
    go = () => Object.create(mo),
    yo = e => Object.getPrototypeOf(e) === mo;

function Qi(e, t, s, n = !1) {
    const o = {},
        i = go();
    e.propsDefaults = Object.create(null), bo(e, t, o, i);
    for (const r in e.propsOptions[0]) r in o || (o[r] = void 0);
    s ? e.props = n ? o : mi(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i
}

function er(e, t, s, n) {
    const {
        props: o,
        attrs: i,
        vnode: {
            patchFlag: r
        }
    } = e, c = L(o), [f] = e.propsOptions;
    let h = !1;
    if ((n || r > 0) && !(r & 16)) {
        if (r & 8) {
            const p = e.vnode.dynamicProps;
            for (let v = 0; v < p.length; v++) {
                let C = p[v];
                if (Yt(e.emitsOptions, C)) continue;
                const P = t[C];
                if (f)
                    if (R(i, C)) P !== i[C] && (i[C] = P, h = !0);
                    else {
                        const V = me(C);
                        o[V] = xs(f, c, V, P, e, !1)
                    }
                else P !== i[C] && (i[C] = P, h = !0)
            }
        }
    } else {
        bo(e, t, o, i) && (h = !0);
        let p;
        for (const v in c)(!t || !R(t, v) && ((p = Xe(v)) === v || !R(t, p))) && (f ? s && (s[v] !== void 0 || s[p] !== void 0) && (o[v] = xs(f, c, v, void 0, e, !0)) : delete o[v]);
        if (i !== c)
            for (const v in i)(!t || !R(t, v)) && (delete i[v], h = !0)
    }
    h && Pe(e.attrs, "set", "")
}

function bo(e, t, s, n) {
    const [o, i] = e.propsOptions;
    let r = !1,
        c;
    if (t)
        for (let f in t) {
            if (ht(f)) continue;
            const h = t[f];
            let p;
            o && R(o, p = me(f)) ? !i || !i.includes(p) ? s[p] = h : (c || (c = {}))[p] = h : Yt(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, r = !0)
        }
    if (i) {
        const f = L(s),
            h = c || K;
        for (let p = 0; p < i.length; p++) {
            const v = i[p];
            s[v] = xs(o, f, v, h[v], e, !R(h, v))
        }
    }
    return r
}

function xs(e, t, s, n, o, i) {
    const r = e[s];
    if (r != null) {
        const c = R(r, "default");
        if (c && n === void 0) {
            const f = r.default;
            if (r.type !== Function && !r.skipFactory && M(f)) {
                const {
                    propsDefaults: h
                } = o;
                if (s in h) n = h[s];
                else {
                    const p = Ct(o);
                    n = h[s] = f.call(null, t), p()
                }
            } else n = f
        }
        r[0] && (i && !c ? n = !1 : r[1] && (n === "" || n === Xe(s)) && (n = !0))
    }
    return n
}
const tr = new WeakMap;

function wo(e, t, s = !1) {
    const n = s ? tr : t.propsCache,
        o = n.get(e);
    if (o) return o;
    const i = e.props,
        r = {},
        c = [];
    let f = !1;
    if (!M(e)) {
        const p = v => {
            f = !0;
            const [C, P] = wo(v, t, !0);
            ne(r, C), P && c.push(...P)
        };
        !s && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p)
    }
    if (!i && !f) return W(e) && n.set(e, tt), tt;
    if (S(i))
        for (let p = 0; p < i.length; p++) {
            const v = me(i[p]);
            pn(v) && (r[v] = K)
        } else if (i)
            for (const p in i) {
                const v = me(p);
                if (pn(v)) {
                    const C = i[p],
                        P = r[v] = S(C) || M(C) ? {
                            type: C
                        } : ne({}, C),
                        V = P.type;
                    let I = !1,
                        Y = !0;
                    if (S(V))
                        for (let k = 0; k < V.length; ++k) {
                            const z = V[k],
                                H = M(z) && z.name;
                            if (H === "Boolean") {
                                I = !0;
                                break
                            } else H === "String" && (Y = !1)
                        } else I = M(V) && V.name === "Boolean";
                    P[0] = I, P[1] = Y, (I || R(P, "default")) && c.push(v)
                }
            }
    const h = [r, c];
    return W(e) && n.set(e, h), h
}

function pn(e) {
    return e[0] !== "$" && !ht(e)
}
const vo = e => e[0] === "_" || e === "$stable",
    Bs = e => S(e) ? e.map(Te) : [Te(e)],
    sr = (e, t, s) => {
        if (t._n) return t;
        const n = Oi((...o) => Bs(t(...o)), s);
        return n._c = !1, n
    },
    $o = (e, t, s) => {
        const n = e._ctx;
        for (const o in e) {
            if (vo(o)) continue;
            const i = e[o];
            if (M(i)) t[o] = sr(o, i, n);
            else if (i != null) {
                const r = Bs(i);
                t[o] = () => r
            }
        }
    },
    xo = (e, t) => {
        const s = Bs(t);
        e.slots.default = () => s
    },
    Co = (e, t, s) => {
        for (const n in t)(s || n !== "_") && (e[n] = t[n])
    },
    nr = (e, t, s) => {
        const n = e.slots = go();
        if (e.vnode.shapeFlag & 32) {
            const o = t._;
            o ? (Co(n, t, s), s && Ln(n, "_", o, !0)) : $o(t, n)
        } else t && xo(e, t)
    },
    or = (e, t, s) => {
        const {
            vnode: n,
            slots: o
        } = e;
        let i = !0,
            r = K;
        if (n.shapeFlag & 32) {
            const c = t._;
            c ? s && c === 1 ? i = !1 : Co(o, t, s) : (i = !t.$stable, $o(t, o)), r = t
        } else t && (xo(e, t), r = {
            default: 1
        });
        if (i)
            for (const c in o) !vo(c) && r[c] == null && delete o[c]
    };

function Cs(e, t, s, n, o = !1) {
    if (S(e)) {
        e.forEach((C, P) => Cs(C, t && (S(t) ? t[P] : t), s, n, o));
        return
    }
    if (Ht(n) && !o) return;
    const i = n.shapeFlag & 4 ? es(n.component) : n.el,
        r = o ? null : i,
        {
            i: c,
            r: f
        } = e,
        h = t && t.r,
        p = c.refs === K ? c.refs = {} : c.refs,
        v = c.setupState;
    if (h != null && h !== f && (q(h) ? (p[h] = null, R(v, h) && (v[h] = null)) : ae(h) && (h.value = null)), M(f)) Le(f, c, 12, [r, p]);
    else {
        const C = q(f),
            P = ae(f);
        if (C || P) {
            const V = () => {
                if (e.f) {
                    const I = C ? R(v, f) ? v[f] : p[f] : f.value;
                    o ? S(I) && Os(I, i) : S(I) ? I.includes(i) || I.push(i) : C ? (p[f] = [i], R(v, f) && (v[f] = p[f])) : (f.value = [i], e.k && (p[e.k] = f.value))
                } else C ? (p[f] = r, R(v, f) && (v[f] = r)) : P && (f.value = r, e.k && (p[e.k] = r))
            };
            r ? (V.id = -1, oe(V, s)) : V()
        }
    }
}
const ir = Symbol("_vte"),
    rr = e => e.__isTeleport,
    oe = vr;

function lr(e) {
    return cr(e)
}

function cr(e, t) {
    const s = Nn();
    s.__VUE__ = !0;
    const {
        insert: n,
        remove: o,
        patchProp: i,
        createElement: r,
        createText: c,
        createComment: f,
        setText: h,
        setElementText: p,
        parentNode: v,
        nextSibling: C,
        setScopeId: P = ue,
        insertStaticContent: V
    } = e, I = (l, a, d, g = null, _ = null, y = null, $ = void 0, b = null, w = !!a.dynamicChildren) => {
        if (l === a) return;
        l && !ut(l, a) && (g = Ot(l), be(l, _, y, !0), l = null), a.patchFlag === -2 && (w = !1, a.dynamicChildren = null);
        const {
            type: m,
            ref: x,
            shapeFlag: T
        } = a;
        switch (m) {
            case Xt:
                Y(l, a, d, g);
                break;
            case Ye:
                k(l, a, d, g);
                break;
            case Nt:
                l == null && z(a, d, g, $);
                break;
            case Ee:
                Et(l, a, d, g, _, y, $, b, w);
                break;
            default:
                T & 1 ? fe(l, a, d, g, _, y, $, b, w) : T & 6 ? Tt(l, a, d, g, _, y, $, b, w) : (T & 64 || T & 128) && m.process(l, a, d, g, _, y, $, b, w, at)
        }
        x != null && _ && Cs(x, l && l.ref, y, a || l, !a)
    }, Y = (l, a, d, g) => {
        if (l == null) n(a.el = c(a.children), d, g);
        else {
            const _ = a.el = l.el;
            a.children !== l.children && h(_, a.children)
        }
    }, k = (l, a, d, g) => {
        l == null ? n(a.el = f(a.children || ""), d, g) : a.el = l.el
    }, z = (l, a, d, g) => {
        [l.el, l.anchor] = V(l.children, a, d, g, l.el, l.anchor)
    }, H = ({
        el: l,
        anchor: a
    }, d, g) => {
        let _;
        for (; l && l !== a;) _ = C(l), n(l, d, g), l = _;
        n(a, d, g)
    }, Z = ({
        el: l,
        anchor: a
    }) => {
        let d;
        for (; l && l !== a;) d = C(l), o(l), l = d;
        o(a)
    }, fe = (l, a, d, g, _, y, $, b, w) => {
        a.type === "svg" ? $ = "svg" : a.type === "math" && ($ = "mathml"), l == null ? F(a, d, g, _, y, $, b, w) : ts(l, a, _, y, $, b, w)
    }, F = (l, a, d, g, _, y, $, b) => {
        let w, m;
        const {
            props: x,
            shapeFlag: T,
            transition: E,
            dirs: O
        } = l;
        if (w = l.el = r(l.type, y, x && x.is, x), T & 8 ? p(w, l.children) : T & 16 && ye(l.children, w, null, g, _, cs(l, y), $, b), O && We(l, null, g, "created"), Oe(w, l, l.scopeId, $, g), x) {
            for (const U in x) U !== "value" && !ht(U) && i(w, U, null, x[U], y, g);
            "value" in x && i(w, "value", null, x.value, y), (m = x.onVnodeBeforeMount) && $e(m, g, l)
        }
        O && We(l, null, g, "beforeMount");
        const A = ar(_, E);
        A && E.beforeEnter(w), n(w, a, d), ((m = x && x.onVnodeMounted) || A || O) && oe(() => {
            m && $e(m, g, l), A && E.enter(w), O && We(l, null, g, "mounted")
        }, _)
    }, Oe = (l, a, d, g, _) => {
        if (d && P(l, d), g)
            for (let y = 0; y < g.length; y++) P(l, g[y]);
        if (_) {
            let y = _.subTree;
            if (a === y) {
                const $ = _.vnode;
                Oe(l, $, $.scopeId, $.slotScopeIds, _.parent)
            }
        }
    }, ye = (l, a, d, g, _, y, $, b, w = 0) => {
        for (let m = w; m < l.length; m++) {
            const x = l[m] = b ? Fe(l[m]) : Te(l[m]);
            I(null, x, a, d, g, _, y, $, b)
        }
    }, ts = (l, a, d, g, _, y, $) => {
        const b = a.el = l.el;
        let {
            patchFlag: w,
            dynamicChildren: m,
            dirs: x
        } = a;
        w |= l.patchFlag & 16;
        const T = l.props || K,
            E = a.props || K;
        let O;
        if (d && ke(d, !1), (O = E.onVnodeBeforeUpdate) && $e(O, d, a, l), x && We(a, l, d, "beforeUpdate"), d && ke(d, !0), (T.innerHTML && E.innerHTML == null || T.textContent && E.textContent == null) && p(b, ""), m ? Ue(l.dynamicChildren, m, b, d, g, cs(a, _), y) : $ || D(l, a, b, null, d, g, cs(a, _), y, !1), w > 0) {
            if (w & 16) lt(b, T, E, d, _);
            else if (w & 2 && T.class !== E.class && i(b, "class", null, E.class, _), w & 4 && i(b, "style", T.style, E.style, _), w & 8) {
                const A = a.dynamicProps;
                for (let U = 0; U < A.length; U++) {
                    const j = A[U],
                        J = T[j],
                        de = E[j];
                    (de !== J || j === "value") && i(b, j, J, de, _, d)
                }
            }
            w & 1 && l.children !== a.children && p(b, a.children)
        } else !$ && m == null && lt(b, T, E, d, _);
        ((O = E.onVnodeUpdated) || x) && oe(() => {
            O && $e(O, d, a, l), x && We(a, l, d, "updated")
        }, g)
    }, Ue = (l, a, d, g, _, y, $) => {
        for (let b = 0; b < a.length; b++) {
            const w = l[b],
                m = a[b],
                x = w.el && (w.type === Ee || !ut(w, m) || w.shapeFlag & 70) ? v(w.el) : d;
            I(w, m, x, null, g, _, y, $, !0)
        }
    }, lt = (l, a, d, g, _) => {
        if (a !== d) {
            if (a !== K)
                for (const y in a) !ht(y) && !(y in d) && i(l, y, a[y], null, _, g);
            for (const y in d) {
                if (ht(y)) continue;
                const $ = d[y],
                    b = a[y];
                $ !== b && y !== "value" && i(l, y, b, $, _, g)
            }
            "value" in d && i(l, "value", a.value, d.value, _)
        }
    }, Et = (l, a, d, g, _, y, $, b, w) => {
        const m = a.el = l ? l.el : c(""),
            x = a.anchor = l ? l.anchor : c("");
        let {
            patchFlag: T,
            dynamicChildren: E,
            slotScopeIds: O
        } = a;
        O && (b = b ? b.concat(O) : O), l == null ? (n(m, d, g), n(x, d, g), ye(a.children || [], d, x, _, y, $, b, w)) : T > 0 && T & 64 && E && l.dynamicChildren ? (Ue(l.dynamicChildren, E, d, _, y, $, b), (a.key != null || _ && a === _.subTree) && Eo(l, a, !0)) : D(l, a, d, x, _, y, $, b, w)
    }, Tt = (l, a, d, g, _, y, $, b, w) => {
        a.slotScopeIds = b, l == null ? a.shapeFlag & 512 ? _.ctx.activate(a, d, g, $, w) : ss(a, d, g, _, y, $, w) : ks(l, a, w)
    }, ss = (l, a, d, g, _, y, $) => {
        const b = l.component = Pr(l, g, _);
        if (ao(l) && (b.ctx.renderer = at), Ar(b, !1, $), b.asyncDep) {
            if (_ && _.registerDep(b, ee, $), !l.el) {
                const w = b.subTree = _e(Ye);
                k(null, w, a, d)
            }
        } else ee(b, l, a, d, _, y, $)
    }, ks = (l, a, d) => {
        const g = a.component = l.component;
        if (yr(l, a, d))
            if (g.asyncDep && !g.asyncResolved) {
                B(g, a, d);
                return
            } else g.next = a, Ei(g.update), g.effect.dirty = !0, g.update();
        else a.el = l.el, g.vnode = a
    }, ee = (l, a, d, g, _, y, $) => {
        const b = () => {
                if (l.isMounted) {
                    let {
                        next: x,
                        bu: T,
                        u: E,
                        parent: O,
                        vnode: A
                    } = l;
                    {
                        const Qe = To(l);
                        if (Qe) {
                            x && (x.el = A.el, B(l, x, $)), Qe.asyncDep.then(() => {
                                l.isUnmounted || b()
                            });
                            return
                        }
                    }
                    let U = x,
                        j;
                    ke(l, !1), x ? (x.el = A.el, B(l, x, $)) : x = A, T && jt(T), (j = x.props && x.props.onVnodeBeforeUpdate) && $e(j, O, x, A), ke(l, !0);
                    const J = fs(l),
                        de = l.subTree;
                    l.subTree = J, I(de, J, v(de.el), Ot(de), l, _, y), x.el = J.el, U === null && br(l, J.el), E && oe(E, _), (j = x.props && x.props.onVnodeUpdated) && oe(() => $e(j, O, x, A), _)
                } else {
                    let x;
                    const {
                        el: T,
                        props: E
                    } = a, {
                        bm: O,
                        m: A,
                        parent: U
                    } = l, j = Ht(a);
                    if (ke(l, !1), O && jt(O), !j && (x = E && E.onVnodeBeforeMount) && $e(x, U, a), ke(l, !0), T && Js) {
                        const J = () => {
                            l.subTree = fs(l), Js(T, l.subTree, l, _, null)
                        };
                        j ? a.type.__asyncLoader().then(() => !l.isUnmounted && J()) : J()
                    } else {
                        const J = l.subTree = fs(l);
                        I(null, J, d, g, l, _, y), a.el = J.el
                    }
                    if (A && oe(A, _), !j && (x = E && E.onVnodeMounted)) {
                        const J = a;
                        oe(() => $e(x, U, J), _)
                    }(a.shapeFlag & 256 || U && Ht(U.vnode) && U.vnode.shapeFlag & 256) && l.a && oe(l.a, _), l.isMounted = !0, a = d = g = null
                }
            },
            w = l.effect = new As(b, ue, () => Us(m), l.scope),
            m = l.update = () => {
                w.dirty && w.run()
            };
        m.i = l, m.id = l.uid, ke(l, !0), m()
    }, B = (l, a, d) => {
        a.component = l;
        const g = l.vnode.props;
        l.vnode = a, l.next = null, er(l, a.props, g, d), or(l, a.children, d), De(), cn(l), Ve()
    }, D = (l, a, d, g, _, y, $, b, w = !1) => {
        const m = l && l.children,
            x = l ? l.shapeFlag : 0,
            T = a.children,
            {
                patchFlag: E,
                shapeFlag: O
            } = a;
        if (E > 0) {
            if (E & 128) {
                St(m, T, d, g, _, y, $, b, w);
                return
            } else if (E & 256) {
                Ke(m, T, d, g, _, y, $, b, w);
                return
            }
        }
        O & 8 ? (x & 16 && ct(m, _, y), T !== m && p(d, T)) : x & 16 ? O & 16 ? St(m, T, d, g, _, y, $, b, w) : ct(m, _, y, !0) : (x & 8 && p(d, ""), O & 16 && ye(T, d, g, _, y, $, b, w))
    }, Ke = (l, a, d, g, _, y, $, b, w) => {
        l = l || tt, a = a || tt;
        const m = l.length,
            x = a.length,
            T = Math.min(m, x);
        let E;
        for (E = 0; E < T; E++) {
            const O = a[E] = w ? Fe(a[E]) : Te(a[E]);
            I(l[E], O, d, null, _, y, $, b, w)
        }
        m > x ? ct(l, _, y, !0, !1, T) : ye(a, d, g, _, y, $, b, w, T)
    }, St = (l, a, d, g, _, y, $, b, w) => {
        let m = 0;
        const x = a.length;
        let T = l.length - 1,
            E = x - 1;
        for (; m <= T && m <= E;) {
            const O = l[m],
                A = a[m] = w ? Fe(a[m]) : Te(a[m]);
            if (ut(O, A)) I(O, A, d, null, _, y, $, b, w);
            else break;
            m++
        }
        for (; m <= T && m <= E;) {
            const O = l[T],
                A = a[E] = w ? Fe(a[E]) : Te(a[E]);
            if (ut(O, A)) I(O, A, d, null, _, y, $, b, w);
            else break;
            T--, E--
        }
        if (m > T) {
            if (m <= E) {
                const O = E + 1,
                    A = O < x ? a[O].el : g;
                for (; m <= E;) I(null, a[m] = w ? Fe(a[m]) : Te(a[m]), d, A, _, y, $, b, w), m++
            }
        } else if (m > E)
            for (; m <= T;) be(l[m], _, y, !0), m++;
        else {
            const O = m,
                A = m,
                U = new Map;
            for (m = A; m <= E; m++) {
                const re = a[m] = w ? Fe(a[m]) : Te(a[m]);
                re.key != null && U.set(re.key, m)
            }
            let j, J = 0;
            const de = E - A + 1;
            let Qe = !1,
                Gs = 0;
            const ft = new Array(de);
            for (m = 0; m < de; m++) ft[m] = 0;
            for (m = O; m <= T; m++) {
                const re = l[m];
                if (J >= de) {
                    be(re, _, y, !0);
                    continue
                }
                let we;
                if (re.key != null) we = U.get(re.key);
                else
                    for (j = A; j <= E; j++)
                        if (ft[j - A] === 0 && ut(re, a[j])) {
                            we = j;
                            break
                        } we === void 0 ? be(re, _, y, !0) : (ft[we - A] = m + 1, we >= Gs ? Gs = we : Qe = !0, I(re, a[we], d, null, _, y, $, b, w), J++)
            }
            const Ys = Qe ? fr(ft) : tt;
            for (j = Ys.length - 1, m = de - 1; m >= 0; m--) {
                const re = A + m,
                    we = a[re],
                    Xs = re + 1 < x ? a[re + 1].el : g;
                ft[m] === 0 ? I(null, we, d, Xs, _, y, $, b, w) : Qe && (j < 0 || m !== Ys[j] ? Be(we, d, Xs, 2) : j--)
            }
        }
    }, Be = (l, a, d, g, _ = null) => {
        const {
            el: y,
            type: $,
            transition: b,
            children: w,
            shapeFlag: m
        } = l;
        if (m & 6) {
            Be(l.component.subTree, a, d, g);
            return
        }
        if (m & 128) {
            l.suspense.move(a, d, g);
            return
        }
        if (m & 64) {
            $.move(l, a, d, at);
            return
        }
        if ($ === Ee) {
            n(y, a, d);
            for (let T = 0; T < w.length; T++) Be(w[T], a, d, g);
            n(l.anchor, a, d);
            return
        }
        if ($ === Nt) {
            H(l, a, d);
            return
        }
        if (g !== 2 && m & 1 && b)
            if (g === 0) b.beforeEnter(y), n(y, a, d), oe(() => b.enter(y), _);
            else {
                const {
                    leave: T,
                    delayLeave: E,
                    afterLeave: O
                } = b, A = () => n(y, a, d), U = () => {
                    T(y, () => {
                        A(), O && O()
                    })
                };
                E ? E(y, A, U) : U()
            }
        else n(y, a, d)
    }, be = (l, a, d, g = !1, _ = !1) => {
        const {
            type: y,
            props: $,
            ref: b,
            children: w,
            dynamicChildren: m,
            shapeFlag: x,
            patchFlag: T,
            dirs: E,
            cacheIndex: O
        } = l;
        if (T === -2 && (_ = !1), b != null && Cs(b, null, d, l, !0), O != null && (a.renderCache[O] = void 0), x & 256) {
            a.ctx.deactivate(l);
            return
        }
        const A = x & 1 && E,
            U = !Ht(l);
        let j;
        if (U && (j = $ && $.onVnodeBeforeUnmount) && $e(j, a, l), x & 6) Ho(l.component, d, g);
        else {
            if (x & 128) {
                l.suspense.unmount(d, g);
                return
            }
            A && We(l, null, a, "beforeUnmount"), x & 64 ? l.type.remove(l, a, d, at, g) : m && !m.hasOnce && (y !== Ee || T > 0 && T & 64) ? ct(m, a, d, !1, !0) : (y === Ee && T & 384 || !_ && x & 16) && ct(w, a, d), g && zs(l)
        }(U && (j = $ && $.onVnodeUnmounted) || A) && oe(() => {
            j && $e(j, a, l), A && We(l, null, a, "unmounted")
        }, d)
    }, zs = l => {
        const {
            type: a,
            el: d,
            anchor: g,
            transition: _
        } = l;
        if (a === Ee) {
            jo(d, g);
            return
        }
        if (a === Nt) {
            Z(l);
            return
        }
        const y = () => {
            o(d), _ && !_.persisted && _.afterLeave && _.afterLeave()
        };
        if (l.shapeFlag & 1 && _ && !_.persisted) {
            const {
                leave: $,
                delayLeave: b
            } = _, w = () => $(d, y);
            b ? b(l.el, y, w) : w()
        } else y()
    }, jo = (l, a) => {
        let d;
        for (; l !== a;) d = C(l), o(l), l = d;
        o(a)
    }, Ho = (l, a, d) => {
        const {
            bum: g,
            scope: _,
            update: y,
            subTree: $,
            um: b,
            m: w,
            a: m
        } = l;
        _n(w), _n(m), g && jt(g), _.stop(), y && (y.active = !1, be($, l, a, d)), b && oe(b, a), oe(() => {
            l.isUnmounted = !0
        }, a), a && a.pendingBranch && !a.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve())
    }, ct = (l, a, d, g = !1, _ = !1, y = 0) => {
        for (let $ = y; $ < l.length; $++) be(l[$], a, d, g, _)
    }, Ot = l => {
        if (l.shapeFlag & 6) return Ot(l.component.subTree);
        if (l.shapeFlag & 128) return l.suspense.next();
        const a = C(l.anchor || l.el),
            d = a && a[ir];
        return d ? C(d) : a
    };
    let ns = !1;
    const qs = (l, a, d) => {
            l == null ? a._vnode && be(a._vnode, null, null, !0) : I(a._vnode || null, l, a, null, null, null, d), a._vnode = l, ns || (ns = !0, cn(), io(), ns = !1)
        },
        at = {
            p: I,
            um: be,
            m: Be,
            r: zs,
            mt: ss,
            mc: ye,
            pc: D,
            pbc: Ue,
            n: Ot,
            o: e
        };
    let Zs, Js;
    return {
        render: qs,
        hydrate: Zs,
        createApp: Yi(qs, Zs)
    }
}

function cs({
    type: e,
    props: t
}, s) {
    return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s
}

function ke({
    effect: e,
    update: t
}, s) {
    e.allowRecurse = t.allowRecurse = s
}

function ar(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Eo(e, t, s = !1) {
    const n = e.children,
        o = t.children;
    if (S(n) && S(o))
        for (let i = 0; i < n.length; i++) {
            const r = n[i];
            let c = o[i];
            c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = o[i] = Fe(o[i]), c.el = r.el), !s && c.patchFlag !== -2 && Eo(r, c)), c.type === Xt && (c.el = r.el)
        }
}

function fr(e) {
    const t = e.slice(),
        s = [0];
    let n, o, i, r, c;
    const f = e.length;
    for (n = 0; n < f; n++) {
        const h = e[n];
        if (h !== 0) {
            if (o = s[s.length - 1], e[o] < h) {
                t[n] = o, s.push(n);
                continue
            }
            for (i = 0, r = s.length - 1; i < r;) c = i + r >> 1, e[s[c]] < h ? i = c + 1 : r = c;
            h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n)
        }
    }
    for (i = s.length, r = s[i - 1]; i-- > 0;) s[i] = r, r = t[r];
    return s
}

function To(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : To(t)
}

function _n(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].active = !1
}
const ur = Symbol.for("v-scx"),
    dr = () => Lt(ur),
    Ft = {};

function as(e, t, s) {
    return So(e, t, s)
}

function So(e, t, {
    immediate: s,
    deep: n,
    flush: o,
    once: i,
    onTrack: r,
    onTrigger: c
} = K) {
    if (t && i) {
        const F = t;
        t = (...Oe) => {
            F(...Oe), fe()
        }
    }
    const f = Q,
        h = F => n === !0 ? F : je(F, n === !1 ? 1 : void 0);
    let p, v = !1,
        C = !1;
    if (ae(e) ? (p = () => e.value, v = gt(e)) : pt(e) ? (p = () => h(e), v = !0) : S(e) ? (C = !0, v = e.some(F => pt(F) || gt(F)), p = () => e.map(F => {
            if (ae(F)) return F.value;
            if (pt(F)) return h(F);
            if (M(F)) return Le(F, f, 2)
        })) : M(e) ? t ? p = () => Le(e, f, 2) : p = () => (P && P(), pe(e, f, 3, [V])) : p = ue, t && n) {
        const F = p;
        p = () => je(F())
    }
    let P, V = F => {
            P = H.onStop = () => {
                Le(F, f, 4), P = H.onStop = void 0
            }
        },
        I;
    if (Qt)
        if (V = ue, t ? s && pe(t, f, 3, [p(), C ? [] : void 0, V]) : p(), o === "sync") {
            const F = dr();
            I = F.__watcherHandles || (F.__watcherHandles = [])
        } else return ue;
    let Y = C ? new Array(e.length).fill(Ft) : Ft;
    const k = () => {
        if (!(!H.active || !H.dirty))
            if (t) {
                const F = H.run();
                (n || v || (C ? F.some((Oe, ye) => Ge(Oe, Y[ye])) : Ge(F, Y))) && (P && P(), pe(t, f, 3, [F, Y === Ft ? void 0 : C && Y[0] === Ft ? [] : Y, V]), Y = F)
            } else H.run()
    };
    k.allowRecurse = !!t;
    let z;
    o === "sync" ? z = k : o === "post" ? z = () => oe(k, f && f.suspense) : (k.pre = !0, f && (k.id = f.uid), z = () => Us(k));
    const H = new As(p, ue, z),
        Z = Go(),
        fe = () => {
            H.stop(), Z && Os(Z.effects, H)
        };
    return t ? s ? k() : Y = H.run() : o === "post" ? oe(H.run.bind(H), f && f.suspense) : H.run(), I && I.push(fe), fe
}

function hr(e, t, s) {
    const n = this.proxy,
        o = q(e) ? e.includes(".") ? Oo(n, e) : () => n[e] : e.bind(n, n);
    let i;
    M(t) ? i = t : (i = t.handler, s = t);
    const r = Ct(this),
        c = So(o, i.bind(n), s);
    return r(), c
}

function Oo(e, t) {
    const s = t.split(".");
    return () => {
        let n = e;
        for (let o = 0; o < s.length && n; o++) n = n[s[o]];
        return n
    }
}

function je(e, t = 1 / 0, s) {
    if (t <= 0 || !W(e) || e.__v_skip || (s = s || new Set, s.has(e))) return e;
    if (s.add(e), t--, ae(e)) je(e.value, t, s);
    else if (S(e))
        for (let n = 0; n < e.length; n++) je(e[n], t, s);
    else if (In(e) || st(e)) e.forEach(n => {
        je(n, t, s)
    });
    else if (Hn(e)) {
        for (const n in e) je(e[n], t, s);
        for (const n of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, n) && je(e[n], t, s)
    }
    return e
}
const pr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${me(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];

function _r(e, t, ...s) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || K;
    let o = s;
    const i = t.startsWith("update:"),
        r = i && pr(n, t.slice(7));
    r && (r.trim && (o = s.map(p => q(p) ? p.trim() : p)), r.number && (o = s.map(ps)));
    let c, f = n[c = os(t)] || n[c = os(me(t))];
    !f && i && (f = n[c = os(Xe(t))]), f && pe(f, e, 6, o);
    const h = n[c + "Once"];
    if (h) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[c]) return;
        e.emitted[c] = !0, pe(h, e, 6, o)
    }
}

function Mo(e, t, s = !1) {
    const n = t.emitsCache,
        o = n.get(e);
    if (o !== void 0) return o;
    const i = e.emits;
    let r = {},
        c = !1;
    if (!M(e)) {
        const f = h => {
            const p = Mo(h, t, !0);
            p && (c = !0, ne(r, p))
        };
        !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
    }
    return !i && !c ? (W(e) && n.set(e, null), null) : (S(i) ? i.forEach(f => r[f] = null) : ne(r, i), W(e) && n.set(e, r), r)
}

function Yt(e, t) {
    return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), R(e, t[0].toLowerCase() + t.slice(1)) || R(e, Xe(t)) || R(e, t))
}

function fs(e) {
    const {
        type: t,
        vnode: s,
        proxy: n,
        withProxy: o,
        propsOptions: [i],
        slots: r,
        attrs: c,
        emit: f,
        render: h,
        renderCache: p,
        props: v,
        data: C,
        setupState: P,
        ctx: V,
        inheritAttrs: I
    } = e, Y = Ut(e);
    let k, z;
    try {
        if (s.shapeFlag & 4) {
            const Z = o || n,
                fe = Z;
            k = Te(h.call(fe, Z, p, v, P, C, V)), z = c
        } else {
            const Z = t;
            k = Te(Z.length > 1 ? Z(v, {
                attrs: c,
                slots: r,
                emit: f
            }) : Z(v, null)), z = t.props ? c : mr(c)
        }
    } catch (Z) {
        mt.length = 0, Jt(Z, e, 1), k = _e(Ye)
    }
    let H = k;
    if (z && I !== !1) {
        const Z = Object.keys(z),
            {
                shapeFlag: fe
            } = H;
        Z.length && fe & 7 && (i && Z.some(Ss) && (z = gr(z, i)), H = rt(H, z, !1, !0))
    }
    return s.dirs && (H = rt(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(s.dirs) : s.dirs), s.transition && (H.transition = s.transition), k = H, Ut(Y), k
}
const mr = e => {
        let t;
        for (const s in e)(s === "class" || s === "style" || Wt(s)) && ((t || (t = {}))[s] = e[s]);
        return t
    },
    gr = (e, t) => {
        const s = {};
        for (const n in e)(!Ss(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
        return s
    };

function yr(e, t, s) {
    const {
        props: n,
        children: o,
        component: i
    } = e, {
        props: r,
        children: c,
        patchFlag: f
    } = t, h = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (s && f >= 0) {
        if (f & 1024) return !0;
        if (f & 16) return n ? mn(n, r, h) : !!r;
        if (f & 8) {
            const p = t.dynamicProps;
            for (let v = 0; v < p.length; v++) {
                const C = p[v];
                if (r[C] !== n[C] && !Yt(h, C)) return !0
            }
        }
    } else return (o || c) && (!c || !c.$stable) ? !0 : n === r ? !1 : n ? r ? mn(n, r, h) : !0 : !!r;
    return !1
}

function mn(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < n.length; o++) {
        const i = n[o];
        if (t[i] !== e[i] && !Yt(s, i)) return !0
    }
    return !1
}

function br({
    vnode: e,
    parent: t
}, s) {
    for (; t;) {
        const n = t.subTree;
        if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)(e = t.vnode).el = s, t = t.parent;
        else break
    }
}
const wr = e => e.__isSuspense;

function vr(e, t) {
    t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : Ti(e)
}
const Ee = Symbol.for("v-fgt"),
    Xt = Symbol.for("v-txt"),
    Ye = Symbol.for("v-cmt"),
    Nt = Symbol.for("v-stc"),
    mt = [];
let ce = null;

function N(e = !1) {
    mt.push(ce = e ? null : [])
}

function $r() {
    mt.pop(), ce = mt[mt.length - 1] || null
}
let vt = 1;

function gn(e) {
    vt += e, e < 0 && ce && (ce.hasOnce = !0)
}

function Po(e) {
    return e.dynamicChildren = vt > 0 ? ce || tt : null, $r(), vt > 0 && ce && ce.push(e), e
}

function G(e, t, s, n, o, i) {
    return Po(u(e, t, s, n, o, i, !0))
}

function Ce(e, t, s, n, o) {
    return Po(_e(e, t, s, n, o, !0))
}

function xr(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function ut(e, t) {
    return e.type === t.type && e.key === t.key
}
const Ao = ({
        key: e
    }) => e ?? null,
    Dt = ({
        ref: e,
        ref_key: t,
        ref_for: s
    }) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || ae(e) || M(e) ? {
        i: le,
        r: e,
        k: t,
        f: !!s
    } : e : null);

function u(e, t = null, s = null, n = 0, o = null, i = e === Ee ? 0 : 1, r = !1, c = !1) {
    const f = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ao(t),
        ref: t && Dt(t),
        scopeId: lo,
        slotScopeIds: null,
        children: s,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: n,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: le
    };
    return c ? (Ws(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= q(s) ? 8 : 16), vt > 0 && !r && ce && (f.patchFlag > 0 || i & 6) && f.patchFlag !== 32 && ce.push(f), f
}
const _e = Cr;

function Cr(e, t = null, s = null, n = 0, o = null, i = !1) {
    if ((!e || e === Ui) && (e = Ye), xr(e)) {
        const c = rt(e, t, !0);
        return s && Ws(c, s), vt > 0 && !i && ce && (c.shapeFlag & 6 ? ce[ce.indexOf(e)] = c : ce.push(c)), c.patchFlag = -2, c
    }
    if (Hr(e) && (e = e.__vccOpts), t) {
        t = Er(t);
        let {
            class: c,
            style: f
        } = t;
        c && !q(c) && (t.class = qe(c)), W(f) && (eo(f) && !S(f) && (f = ne({}, f)), t.style = Ps(f))
    }
    const r = q(e) ? 1 : wr(e) ? 128 : rr(e) ? 64 : W(e) ? 4 : M(e) ? 2 : 0;
    return u(e, t, s, n, o, r, i, !0)
}

function Er(e) {
    return e ? eo(e) || yo(e) ? ne({}, e) : e : null
}

function rt(e, t, s = !1, n = !1) {
    const {
        props: o,
        ref: i,
        patchFlag: r,
        children: c,
        transition: f
    } = e, h = t ? Sr(o || {}, t) : o, p = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: h,
        key: h && Ao(h),
        ref: t && t.ref ? s && i ? S(i) ? i.concat(Dt(t)) : [i, Dt(t)] : Dt(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: c,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ee ? r === -1 ? 16 : r | 16 : r,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: f,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && rt(e.ssContent),
        ssFallback: e.ssFallback && rt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return f && n && co(p, f.clone(p)), p
}

function Tr(e = " ", t = 0) {
    return _e(Xt, null, e, t)
}

function Ro(e, t) {
    const s = _e(Nt, null, e);
    return s.staticCount = t, s
}

function ve(e = "", t = !1) {
    return t ? (N(), Ce(Ye, null, e)) : _e(Ye, null, e)
}

function Te(e) {
    return e == null || typeof e == "boolean" ? _e(Ye) : S(e) ? _e(Ee, null, e.slice()) : typeof e == "object" ? Fe(e) : _e(Xt, null, String(e))
}

function Fe(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : rt(e)
}

function Ws(e, t) {
    let s = 0;
    const {
        shapeFlag: n
    } = e;
    if (t == null) t = null;
    else if (S(t)) s = 16;
    else if (typeof t == "object")
        if (n & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1), Ws(e, o()), o._c && (o._d = !0));
            return
        } else {
            s = 32;
            const o = t._;
            !o && !yo(t) ? t._ctx = le : o === 3 && le && (le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else M(t) ? (t = {
        default: t,
        _ctx: le
    }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Tr(t)]) : s = 8);
    e.children = t, e.shapeFlag |= s
}

function Sr(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        for (const o in n)
            if (o === "class") t.class !== n.class && (t.class = qe([t.class, n.class]));
            else if (o === "style") t.style = Ps([t.style, n.style]);
        else if (Wt(o)) {
            const i = t[o],
                r = n[o];
            r && i !== r && !(S(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r)
        } else o !== "" && (t[o] = n[o])
    }
    return t
}

function $e(e, t, s, n = null) {
    pe(e, t, 7, [s, n])
}
const Or = _o();
let Mr = 0;

function Pr(e, t, s) {
    const n = e.type,
        o = (t ? t.appContext : e.appContext) || Or,
        i = {
            uid: Mr++,
            vnode: e,
            type: n,
            parent: t,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new Zo(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(o.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: wo(n, o),
            emitsOptions: Mo(n, o),
            emit: null,
            emitted: null,
            propsDefaults: K,
            inheritAttrs: n.inheritAttrs,
            ctx: K,
            data: K,
            props: K,
            attrs: K,
            slots: K,
            refs: K,
            setupState: K,
            setupContext: null,
            suspense: s,
            suspenseId: s ? s.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = _r.bind(null, i), e.ce && e.ce(i), i
}
let Q = null,
    Bt, Es;
{
    const e = Nn(),
        t = (s, n) => {
            let o;
            return (o = e[s]) || (o = e[s] = []), o.push(n), i => {
                o.length > 1 ? o.forEach(r => r(i)) : o[0](i)
            }
        };
    Bt = t("__VUE_INSTANCE_SETTERS__", s => Q = s), Es = t("__VUE_SSR_SETTERS__", s => Qt = s)
}
const Ct = e => {
        const t = Q;
        return Bt(e), e.scope.on(), () => {
            e.scope.off(), Bt(t)
        }
    },
    yn = () => {
        Q && Q.scope.off(), Bt(null)
    };

function Io(e) {
    return e.vnode.shapeFlag & 4
}
let Qt = !1;

function Ar(e, t = !1, s = !1) {
    t && Es(t);
    const {
        props: n,
        children: o
    } = e.vnode, i = Io(e);
    Qi(e, n, i, t), nr(e, o, s);
    const r = i ? Rr(e, t) : void 0;
    return t && Es(!1), r
}

function Rr(e, t) {
    const s = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Wi);
    const {
        setup: n
    } = s;
    if (n) {
        const o = e.setupContext = n.length > 1 ? Fr(e) : null,
            i = Ct(e);
        De();
        const r = Le(n, e, 0, [e.props, o]);
        if (Ve(), i(), Fn(r)) {
            if (r.then(yn, yn), t) return r.then(c => {
                bn(e, c, t)
            }).catch(c => {
                Jt(c, e, 0)
            });
            e.asyncDep = r
        } else bn(e, r, t)
    } else Fo(e, t)
}

function bn(e, t, s) {
    M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) && (e.setupState = so(t)), Fo(e, s)
}
let wn;

function Fo(e, t, s) {
    const n = e.type;
    if (!e.render) {
        if (!t && wn && !n.render) {
            const o = n.template || Ks(e).template;
            if (o) {
                const {
                    isCustomElement: i,
                    compilerOptions: r
                } = e.appContext.config, {
                    delimiters: c,
                    compilerOptions: f
                } = n, h = ne(ne({
                    isCustomElement: i,
                    delimiters: c
                }, r), f);
                n.render = wn(o, h)
            }
        }
        e.render = n.render || ue
    } {
        const o = Ct(e);
        De();
        try {
            ki(e)
        } finally {
            Ve(), o()
        }
    }
}
const Ir = {
    get(e, t) {
        return ie(e, "get", ""), e[t]
    }
};

function Fr(e) {
    const t = s => {
        e.exposed = s || {}
    };
    return {
        attrs: new Proxy(e.attrs, Ir),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function es(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(so(gi(e.exposed)), {
        get(t, s) {
            if (s in t) return t[s];
            if (s in _t) return _t[s](e)
        },
        has(t, s) {
            return s in t || s in _t
        }
    })) : e.proxy
}

function jr(e, t = !0) {
    return M(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Hr(e) {
    return M(e) && "__vccOpts" in e
}
const Lr = (e, t) => yi(e, t, Qt),
    Nr = "3.4.38";
/**
 * @vue/runtime-dom v3.4.38
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const Dr = "http://www.w3.org/2000/svg",
    Vr = "http://www.w3.org/1998/Math/MathML",
    Me = typeof document < "u" ? document : null,
    vn = Me && Me.createElement("template"),
    Ur = {
        insert: (e, t, s) => {
            t.insertBefore(e, s || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, s, n) => {
            const o = t === "svg" ? Me.createElementNS(Dr, e) : t === "mathml" ? Me.createElementNS(Vr, e) : s ? Me.createElement(e, {
                is: s
            }) : Me.createElement(e);
            return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o
        },
        createText: e => Me.createTextNode(e),
        createComment: e => Me.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Me.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, s, n, o, i) {
            const r = s ? s.previousSibling : t.lastChild;
            if (o && (o === i || o.nextSibling))
                for (; t.insertBefore(o.cloneNode(!0), s), !(o === i || !(o = o.nextSibling)););
            else {
                vn.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
                const c = vn.content;
                if (n === "svg" || n === "mathml") {
                    const f = c.firstChild;
                    for (; f.firstChild;) c.appendChild(f.firstChild);
                    c.removeChild(f)
                }
                t.insertBefore(c, s)
            }
            return [r ? r.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
        }
    },
    Kr = Symbol("_vtc");

function Br(e, t, s) {
    const n = e[Kr];
    n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t
}
const $n = Symbol("_vod"),
    Wr = Symbol("_vsh"),
    kr = Symbol(""),
    zr = /(^|;)\s*display\s*:/;

function qr(e, t, s) {
    const n = e.style,
        o = q(s);
    let i = !1;
    if (s && !o) {
        if (t)
            if (q(t))
                for (const r of t.split(";")) {
                    const c = r.slice(0, r.indexOf(":")).trim();
                    s[c] == null && Vt(n, c, "")
                } else
                    for (const r in t) s[r] == null && Vt(n, r, "");
        for (const r in s) r === "display" && (i = !0), Vt(n, r, s[r])
    } else if (o) {
        if (t !== s) {
            const r = n[kr];
            r && (s += ";" + r), n.cssText = s, i = zr.test(s)
        }
    } else t && e.removeAttribute("style");
    $n in e && (e[$n] = i ? n.display : "", e[Wr] && (n.display = "none"))
}
const xn = /\s*!important$/;

function Vt(e, t, s) {
    if (S(s)) s.forEach(n => Vt(e, t, n));
    else if (s == null && (s = ""), t.startsWith("--")) e.setProperty(t, s);
    else {
        const n = Zr(e, t);
        xn.test(s) ? e.setProperty(Xe(n), s.replace(xn, ""), "important") : e[n] = s
    }
}
const Cn = ["Webkit", "Moz", "ms"],
    us = {};

function Zr(e, t) {
    const s = us[t];
    if (s) return s;
    let n = me(t);
    if (n !== "filter" && n in e) return us[t] = n;
    n = qt(n);
    for (let o = 0; o < Cn.length; o++) {
        const i = Cn[o] + n;
        if (i in e) return us[t] = i
    }
    return t
}
const En = "http://www.w3.org/1999/xlink";

function Tn(e, t, s, n, o, i = qo(t)) {
    n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(En, t.slice(6, t.length)) : e.setAttributeNS(En, t, s) : s == null || i && !Dn(s) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ne(s) ? String(s) : s)
}

function Jr(e, t, s, n) {
    if (t === "innerHTML" || t === "textContent") {
        if (s == null) return;
        e[t] = s;
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const r = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = s == null ? "" : String(s);
        (r !== c || !("_value" in e)) && (e.value = c), s == null && e.removeAttribute(t), e._value = s;
        return
    }
    let i = !1;
    if (s === "" || s == null) {
        const r = typeof e[t];
        r === "boolean" ? s = Dn(s) : s == null && r === "string" ? (s = "", i = !0) : r === "number" && (s = 0, i = !0)
    }
    try {
        e[t] = s
    } catch {}
    i && e.removeAttribute(t)
}

function et(e, t, s, n) {
    e.addEventListener(t, s, n)
}

function Gr(e, t, s, n) {
    e.removeEventListener(t, s, n)
}
const Sn = Symbol("_vei");

function Yr(e, t, s, n, o = null) {
    const i = e[Sn] || (e[Sn] = {}),
        r = i[t];
    if (n && r) r.value = n;
    else {
        const [c, f] = Xr(t);
        if (n) {
            const h = i[t] = tl(n, o);
            et(e, c, h, f)
        } else r && (Gr(e, c, r, f), i[t] = void 0)
    }
}
const On = /(?:Once|Passive|Capture)$/;

function Xr(e) {
    let t;
    if (On.test(e)) {
        t = {};
        let n;
        for (; n = e.match(On);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t]
}
let ds = 0;
const Qr = Promise.resolve(),
    el = () => ds || (Qr.then(() => ds = 0), ds = Date.now());

function tl(e, t) {
    const s = n => {
        if (!n._vts) n._vts = Date.now();
        else if (n._vts <= s.attached) return;
        pe(sl(n, s.value), t, 5, [n])
    };
    return s.value = e, s.attached = el(), s
}

function sl(e, t) {
    if (S(t)) {
        const s = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            s.call(e), e._stopped = !0
        }, t.map(n => o => !o._stopped && n && n(o))
    } else return t
}
const Mn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    nl = (e, t, s, n, o, i) => {
        const r = o === "svg";
        t === "class" ? Br(e, n, r) : t === "style" ? qr(e, s, n) : Wt(t) ? Ss(t) || Yr(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ol(e, t, n, r)) ? (Jr(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Tn(e, t, n, r, i, t !== "value")) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Tn(e, t, n, r))
    };

function ol(e, t, s, n) {
    if (n) return !!(t === "innerHTML" || t === "textContent" || t in e && Mn(t) && M(s));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return !1
    }
    return Mn(t) && q(s) ? !1 : t in e
}
const Pn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return S(t) ? s => jt(t, s) : t
};

function il(e) {
    e.target.composing = !0
}

function An(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const hs = Symbol("_assign"),
    $t = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: s,
                number: n
            }
        }, o) {
            e[hs] = Pn(o);
            const i = n || o.props && o.props.type === "number";
            et(e, t ? "change" : "input", r => {
                if (r.target.composing) return;
                let c = e.value;
                s && (c = c.trim()), i && (c = ps(c)), e[hs](c)
            }), s && et(e, "change", () => {
                e.value = e.value.trim()
            }), t || (et(e, "compositionstart", il), et(e, "compositionend", An), et(e, "change", An))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: s,
            modifiers: {
                lazy: n,
                trim: o,
                number: i
            }
        }, r) {
            if (e[hs] = Pn(r), e.composing) return;
            const c = (i || e.type === "number") && !/^0\d/.test(e.value) ? ps(e.value) : e.value,
                f = t ?? "";
            c !== f && (document.activeElement === e && e.type !== "range" && (n && t === s || o && e.value.trim() === f) || (e.value = f))
        }
    },
    rl = ne({
        patchProp: nl
    }, Ur);
let Rn;

function ll() {
    return Rn || (Rn = lr(rl))
}
const cl = (...e) => {
    const t = ll().createApp(...e),
        {
            mount: s
        } = t;
    return t.mount = n => {
        const o = fl(n);
        if (!o) return;
        const i = t._component;
        !M(i) && !i.render && !i.template && (i.template = o.innerHTML), o.innerHTML = "";
        const r = s(o, !1, al(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r
    }, t
};

function al(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function fl(e) {
    return q(e) ? document.querySelector(e) : e
}

function xt() {
    return window.location.host.replaceAll("cfx-nui-", "")
}
const ge = (e, t) => {
        const s = e.__vccOpts || e;
        for (const [n, o] of t) s[n] = o;
        return s
    },
    ul = {
        props: ["img", "name"]
    },
    dl = {
        id: "header",
        class: "header d-flex align-items-center"
    },
    hl = Ro('<div class="d-flex align-items-center justify-content-between"><a href="#" class="logo-box d-flex align-items-center"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9999 7.96868C15.7765 7.96868 16.4061 7.33908 16.4061 6.56244C16.4061 5.7858 15.7765 5.1562 14.9999 5.1562C14.2232 5.1562 13.5936 5.7858 13.5936 6.56244C13.5936 7.33908 14.2232 7.96868 14.9999 7.96868Z" fill="white"></path><path d="M1.87498 11.7186H28.1247C28.9657 11.7186 29.7035 11.159 29.9303 10.349C30.1572 9.53897 29.8169 8.67742 29.0983 8.24102L15.9734 0.272341C15.6739 0.0904679 15.3369 0 14.9999 0C14.6628 0 14.3258 0.0904679 14.0267 0.272341L0.901861 8.24102C0.183274 8.67742 -0.157504 9.53944 0.0698372 10.349C0.296241 11.159 1.03405 11.7186 1.87498 11.7186ZM14.9999 4.21871C16.2945 4.21871 17.3436 5.26776 17.3436 6.56244C17.3436 7.85712 16.2945 8.90617 14.9999 8.90617C13.7052 8.90617 12.6561 7.85712 12.6561 6.56244C12.6561 5.26776 13.7052 4.21871 14.9999 4.21871Z" fill="white"></path><path d="M19.6873 12.6561H15.9374V24.3748H19.6873V12.6561Z" fill="white"></path><path d="M25.3123 12.6561H21.5623V24.3748H25.3123V12.6561Z" fill="white"></path><path d="M14.0624 12.6561H10.3124V24.3748H14.0624V12.6561Z" fill="white"></path><path d="M8.43742 12.6561H4.68746V24.3748H8.43742V12.6561Z" fill="white"></path><path d="M1.87498 27.1872H28.1247C28.1247 26.1518 27.2852 25.3123 26.2498 25.3123H3.74997C2.71451 25.3123 1.87498 26.1518 1.87498 27.1872Z" fill="white"></path><path d="M29.7396 28.1247H0.260154C0.0989053 28.4018 4.44657e-09 28.7191 4.44657e-09 29.0622V29.9997H29.9997V29.0622C29.9997 28.7191 29.9008 28.4018 29.7396 28.1247Z" fill="white"></path></svg><span class="d-none d-lg-block">HazeBank</span></a></div>', 1),
    pl = {
        class: "header-nav ms-auto"
    },
    _l = {
        class: "d-flex align-items-center"
    },
    ml = {
        class: "nav-item dropdown pe-3"
    },
    gl = {
        class: "btn nav-username"
    },
    yl = {
        id: "username"
    },
    bl = ["src", "alt"];

function wl(e, t, s, n, o, i) {
    return N(), G("header", dl, [hl, u("nav", pl, [u("ul", _l, [u("li", ml, [u("div", gl, [u("span", yl, se(s.name), 1), u("img", {
        id: "avatar",
        src: s.img,
        alt: s.name
    }, null, 8, bl)])])])])])
}
const vl = ge(ul, [
        ["render", wl]
    ]),
    $l = {
        props: ["name", "password"],
        data: () => ({}),
        methods: {
            login() {
                this.$emit("login")
            }
        }
    },
    xl = {
        class: "login"
    },
    Cl = {
        class: "row mt-5 d-flex justify-content-center"
    },
    El = {
        class: "col-md-5"
    },
    Tl = {
        class: "panel px-5 py-5"
    },
    Sl = u("h5", {
        class: "text-center"
    }, [u("b", null, "Zaloguj się")], -1),
    Ol = {
        class: "forms-inputs mb-4"
    },
    Ml = u("span", null, "Imię i nazwisko", -1),
    Pl = ["value"],
    Al = {
        class: "forms-inputs mb-4"
    },
    Rl = u("span", null, "Password", -1),
    Il = ["value"],
    Fl = {
        class: "mb-3"
    };

function jl(e, t, s, n, o, i) {
    return N(), G("div", xl, [u("div", Cl, [u("div", El, [u("div", Tl, [Sl, u("div", Ol, [Ml, u("input", {
        class: "form-control",
        type: "text",
        name: "login-username",
        id: "login-username",
        autocomplete: "off",
        value: s.name,
        readonly: ""
    }, null, 8, Pl)]), u("div", Al, [Rl, u("input", {
        class: "form-control",
        type: "password",
        name: "login-password",
        id: "login-password",
        autocomplete: "off",
        value: s.password,
        readonly: ""
    }, null, 8, Il)]), u("div", Fl, [u("button", {
        type: "submit",
        name: "submit",
        class: "btn btn-yellow w-100",
        onClick: t[0] || (t[0] = r => i.login())
    }, "Zaloguj się")])])])])])
}
const Hl = ge($l, [
        ["render", jl]
    ]),
    Ll = {
        props: ["name"],
        data: () => ({
            password: null
        }),
        methods: {
            register() {
                this.$emit("register", this.password)
            }
        }
    },
    Nl = {
        class: "register"
    },
    Dl = {
        class: "row mt-5 d-flex justify-content-center"
    },
    Vl = {
        class: "col-md-5"
    },
    Ul = {
        class: "panel px-5 py-5"
    },
    Kl = u("h5", {
        class: "text-center"
    }, [u("b", null, "Zarejestuj się")], -1),
    Bl = {
        class: "forms-inputs mb-4"
    },
    Wl = u("span", null, "Imię i nazwisko", -1),
    kl = ["value"],
    zl = {
        class: "forms-inputs mb-4"
    },
    ql = u("span", null, "Password", -1),
    Zl = u("div", {
        class: "invalid-feedback",
        id: "register-invalid-password"
    }, "Passowrd is invalid!", -1),
    Jl = {
        class: "mb-3"
    };

function Gl(e, t, s, n, o, i) {
    return N(), G("div", Nl, [u("div", Dl, [u("div", Vl, [u("div", Ul, [Kl, u("div", Bl, [Wl, u("input", {
        class: "form-control",
        type: "text",
        name: "register-username",
        id: "register-username",
        autocomplete: "off",
        readonly: "",
        value: s.name
    }, null, 8, kl)]), u("div", zl, [ql, wt(u("input", {
        class: "form-control",
        type: "password",
        name: "register-password",
        id: "register-password",
        autocomplete: "off",
        "onUpdate:modelValue": t[0] || (t[0] = r => e.password = r)
    }, null, 512), [
        [$t, e.password]
    ]), Zl]), u("div", Jl, [u("button", {
        type: "submit",
        name: "submit",
        class: "btn btn-yellow w-100",
        onClick: t[1] || (t[1] = r => i.register())
    }, "Zarejestuj się")])])])])])
}
const Yl = ge(Ll, [
        ["render", Gl]
    ]),
    Xl = {
        props: ["name", "password"],
        data: () => ({
            selected: "home"
        }),
        methods: {
            toggle(e) {
                this.selected = e, this.$emit("toggle", e)
            }
        }
    },
    Ql = {
        id: "sidebar",
        class: "sidebar glass"
    },
    ec = {
        class: "sidebar-nav",
        id: "sidebar-nav"
    },
    tc = u("li", {
        class: "nav-group"
    }, "Menu", -1),
    sc = u("i", {
        class: "fa-solid fa-house"
    }, null, -1),
    nc = u("span", null, "Strona główna", -1),
    oc = [sc, nc],
    ic = u("i", {
        class: "fa-solid fa-credit-card"
    }, null, -1),
    rc = u("span", null, "Wpłata", -1),
    lc = [ic, rc],
    cc = u("i", {
        class: "fa-solid fa-money-bill-1"
    }, null, -1),
    ac = u("span", null, "Wypłata", -1),
    fc = [cc, ac],
    uc = u("i", {
        class: "fa-solid fa-right-left"
    }, null, -1),
    dc = u("span", null, "Przelew", -1),
    hc = [uc, dc];

function pc(e, t, s, n, o, i) {
    return N(), G("aside", Ql, [u("ul", ec, [tc, u("li", {
        class: qe(["nav-item", {
            active: e.selected === "home"
        }])
    }, [u("a", {
        class: "nav-link",
        href: "#home",
        onClick: t[0] || (t[0] = r => i.toggle("home"))
    }, oc)], 2), u("li", {
        class: qe(["nav-item", {
            active: e.selected === "deposit"
        }])
    }, [u("a", {
        class: "nav-link",
        href: "#wplata",
        onClick: t[1] || (t[1] = r => i.toggle("deposit"))
    }, lc)], 2), u("li", {
        class: qe(["nav-item", {
            active: e.selected === "withdraw"
        }])
    }, [u("a", {
        class: "nav-link",
        href: "#wyplata",
        onClick: t[2] || (t[2] = r => i.toggle("withdraw"))
    }, fc)], 2), u("li", {
        class: qe(["nav-item", {
            active: e.selected === "transfer"
        }])
    }, [u("a", {
        class: "nav-link",
        href: "#przelew",
        onClick: t[3] || (t[3] = r => i.toggle("transfer"))
    }, hc)], 2)])])
}
const _c = ge(Xl, [
        ["render", pc]
    ]),
    mc = {},
    gc = {
        class: "loadingBar"
    },
    yc = u("div", {
        class: "status"
    }, null, -1),
    bc = [yc];

function wc(e, t) {
    return N(), G("div", gc, bc)
}
const vc = ge(mc, [
        ["render", wc]
    ]),
    $c = {
        props: ["id", "positive", "name", "money"]
    },
    xc = {
        scope: "row"
    },
    Cc = {
        key: 0
    },
    Ec = {
        class: "green"
    },
    Tc = {
        key: 1
    },
    Sc = {
        class: "red"
    };

function Oc(e, t, s, n, o, i) {
    return N(), G("tr", null, [u("th", xc, se(s.id), 1), u("td", null, se(s.name), 1), s.positive ? (N(), G("td", Cc, [u("span", Ec, "+$" + se(s.money), 1)])) : (N(), G("td", Tc, [u("span", Sc, "-$" + se(s.money), 1)]))])
}
const Mc = ge($c, [
        ["render", Oc]
    ]),
    Pc = {
        props: ["history", "money", "lastPayments", "name"],
        components: {
            HistoryItems: Mc
        }
    },
    Ac = {
        id: "home"
    },
    Rc = {
        class: "row"
    },
    Ic = {
        class: "col creditcard"
    },
    Fc = Ro('<div class="chip"><div class="chip-line"></div><div class="chip-line"></div><div class="chip-line"></div><div class="chip-line"></div><div class="chip-main"></div></div><svg class="wave" viewBox="0 3.71 26.959 38.787" width="26.959" height="38.787" fill="white"><path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path><path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path><path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path></svg><div class="debit-text">debit</div><div class="card-number"><div class="section">5453</div><div class="section">2000</div><div class="section">0000</div><div class="section">0000</div></div><div class="end"><span class="end-text">exp. end:</span><span class="end-date"> 08/34</span></div>', 5),
    jc = {
        class: "card-holder"
    },
    Hc = u("div", {
        class: "master"
    }, [u("div", {
        class: "circle master-red"
    }), u("div", {
        class: "circle master-yellow"
    })], -1),
    Lc = {
        class: "col"
    },
    Nc = {
        class: "row g-2"
    },
    Dc = {
        class: "col-12"
    },
    Vc = {
        class: "panel"
    },
    Uc = u("h5", {
        class: "header-panel"
    }, "Saldo konta:", -1),
    Kc = {
        class: "stats-panel saldo-konta",
        id: "saldo-konta"
    },
    Bc = {
        class: "col-12"
    },
    Wc = {
        class: "panel"
    },
    kc = u("h5", {
        class: "header-panel"
    }, "Ostatnie wydatki:", -1),
    zc = {
        class: "stats-panel saldo-konta",
        id: "saldo-konta"
    },
    qc = {
        class: "row mt-4"
    },
    Zc = {
        class: "col panel"
    },
    Jc = u("h5", {
        class: "header-panel"
    }, "Historia", -1),
    Gc = {
        class: "table table-striped table-dark"
    },
    Yc = u("thead", null, [u("tr", null, [u("th", {
        scope: "col"
    }, "Id płatności"), u("th", {
        scope: "col"
    }, "Tytuł"), u("th", {
        scope: "col"
    }, "Kwota")])], -1);

function Xc(e, t, s, n, o, i) {
    const r = xe("HistoryItems");
    return N(), G("section", Ac, [u("div", Rc, [u("div", Ic, [Fc, u("div", jc, se(s.name), 1), Hc]), u("div", Lc, [u("div", Nc, [u("div", Dc, [u("div", Vc, [Uc, u("h1", Kc, "$" + se(s.money), 1)])]), u("div", Bc, [u("div", Wc, [kc, u("h1", zc, "- $" + se(s.lastPayments), 1)])])])])]), u("div", qc, [u("div", Zc, [Jc, u("table", Gc, [Yc, u("tbody", null, [(N(!0), G(Ee, null, Bi(s.history, c => (N(), Ce(r, {
        id: c.id,
        positive: c.positive,
        name: c.name,
        money: c.money
    }, null, 8, ["id", "positive", "name", "money"]))), 256))])])])])])
}
const Qc = ge(Pc, [
        ["render", Xc]
    ]),
    ea = {
        props: ["money"],
        data: () => ({
            depositMoney: 0
        }),
        methods: {
            deposit() {
                this.depositMoney !== 0 && fetch(`https://${xt()}/deposit`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        money: this.depositMoney
                    })
                })
            }
        }
    },
    ta = {
        id: "wplata"
    },
    sa = {
        class: "panel mb-1"
    },
    na = {
        class: "row"
    },
    oa = {
        class: "col-6"
    },
    ia = u("h5", {
        class: "header-panel"
    }, "Twoje saldo na koncie:", -1),
    ra = {
        class: "stats-panel saldo-konta",
        id: "wplata-saldo-konta"
    },
    la = {
        class: "col-6"
    },
    ca = u("h5", {
        class: "header-panel"
    }, "Twoje saldo po operacji:", -1),
    aa = {
        class: "stats-panel",
        id: "wplata-saldo-po-operacji"
    },
    fa = {
        class: "col-12"
    },
    ua = u("h5", {
        class: "header-panel"
    }, "Kwota którą chcesz wpłacić", -1),
    da = {
        class: "input-group mb-3"
    },
    ha = u("span", {
        class: "input-group-text"
    }, "$", -1),
    pa = {
        class: "col-12"
    };

function _a(e, t, s, n, o, i) {
    return N(), G("section", ta, [u("div", sa, [u("div", na, [u("div", oa, [ia, u("h1", ra, "$" + se(s.money), 1)]), u("div", la, [ca, u("h1", aa, "$" + se(s.money + e.depositMoney), 1)]), u("div", fa, [ua, u("div", da, [ha, wt(u("input", {
        class: "form-control",
        min: "0",
        placeholder: "10 000",
        type: "number",
        id: "input-wplata",
        "onUpdate:modelValue": t[0] || (t[0] = r => e.depositMoney = r)
    }, null, 512), [
        [$t, e.depositMoney]
    ])])]), u("div", pa, [u("button", {
        class: "btn-yellow col-md-12 text-center mb-3",
        onClick: t[1] || (t[1] = r => i.deposit())
    }, "Wpłać")])])])])
}
const ma = ge(ea, [
        ["render", _a]
    ]),
    ga = {
        props: ["money"],
        data: () => ({
            withdrawMoney: 0
        }),
        methods: {
            withdraw() {
                this.withdrawMoney !== 0 && fetch(`https://${xt()}/withdraw`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        money: this.withdrawMoney
                    })
                })
            }
        }
    },
    ya = {
        id: "wyplata"
    },
    ba = {
        class: "panel mb-1"
    },
    wa = {
        class: "row"
    },
    va = {
        class: "col-6"
    },
    $a = u("h5", {
        class: "header-panel"
    }, "Twoje saldo na koncie:", -1),
    xa = {
        class: "stats-panel saldo-konta",
        id: "wyplata-saldo-konta"
    },
    Ca = {
        class: "col-6"
    },
    Ea = u("h5", {
        class: "header-panel"
    }, "Twoje saldo po operacji:", -1),
    Ta = {
        class: "stats-panel",
        id: "wyplata-saldo-po-operacji"
    },
    Sa = {
        class: "col-12"
    },
    Oa = u("h5", {
        class: "header-panel"
    }, "Kwota którą chcesz wypłacić", -1),
    Ma = {
        class: "input-group mb-3"
    },
    Pa = u("span", {
        class: "input-group-text"
    }, "$", -1),
    Aa = {
        class: "col-12"
    };

function Ra(e, t, s, n, o, i) {
    return N(), G("section", ya, [u("div", ba, [u("div", wa, [u("div", va, [$a, u("h1", xa, "$" + se(s.money), 1)]), u("div", Ca, [Ea, u("h1", Ta, "$" + se(s.money - e.withdrawMoney), 1)]), u("div", Sa, [Oa, u("div", Ma, [Pa, wt(u("input", {
        class: "form-control",
        min: "0",
        placeholder: "1000",
        type: "number",
        id: "input-wyplata",
        "onUpdate:modelValue": t[0] || (t[0] = r => e.withdrawMoney = r)
    }, null, 512), [
        [$t, e.withdrawMoney]
    ])])]), u("div", Aa, [u("button", {
        class: "btn-yellow col-md-12 text-center mb-3",
        onClick: t[1] || (t[1] = r => i.withdraw())
    }, "Wypłać")])])])])
}
const Ia = ge(ga, [
        ["render", Ra]
    ]),
    Fa = {
        props: ["money"],
        data: () => ({
            transferMoney: 0,
            account: null
        }),
        methods: {
            transfer() {
                this.account && this.transferMoney !== 0 && fetch(`https://${xt()}/transfer`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        money: this.transferMoney,
                        account: this.account
                    })
                })
            }
        }
    },
    ja = {
        id: "przelew"
    },
    Ha = {
        class: "panel mb-1"
    },
    La = {
        class: "row"
    },
    Na = {
        class: "col-6"
    },
    Da = u("h5", {
        class: "header-panel"
    }, "Twoje saldo na koncie:", -1),
    Va = {
        class: "stats-panel saldo-konta",
        id: "przelew-saldo-konta"
    },
    Ua = {
        class: "col-6"
    },
    Ka = u("h5", {
        class: "header-panel"
    }, "Twoje saldo po operacji:", -1),
    Ba = {
        class: "stats-panel",
        id: "przelew-saldo-po-operacji"
    },
    Wa = {
        class: "col-6"
    },
    ka = u("h5", {
        class: "header-panel"
    }, "Kwota którą chcesz przelać", -1),
    za = {
        class: "input-group mb-3"
    },
    qa = u("span", {
        class: "input-group-text",
        id: "wplata-addon"
    }, "$", -1),
    Za = {
        class: "col-6"
    },
    Ja = u("h5", {
        class: "header-panel"
    }, "Numer konta obywatela", -1),
    Ga = {
        class: "input-group mb-3"
    },
    Ya = u("span", {
        class: "input-group-text",
        id: "wplata-addon"
    }, "Nr", -1),
    Xa = {
        class: "col-12"
    };

function Qa(e, t, s, n, o, i) {
    return N(), G("section", ja, [u("div", Ha, [u("div", La, [u("div", Na, [Da, u("h1", Va, "$" + se(s.money), 1)]), u("div", Ua, [Ka, u("h1", Ba, "$" + se(s.money - e.transferMoney), 1)]), u("div", Wa, [ka, u("div", za, [qa, wt(u("input", {
        class: "form-control",
        min: "0",
        placeholder: "1000",
        type: "number",
        id: "input-przelew",
        "onUpdate:modelValue": t[0] || (t[0] = r => e.transferMoney = r)
    }, null, 512), [
        [$t, e.transferMoney]
    ])])]), u("div", Za, [Ja, u("div", Ga, [Ya, wt(u("input", {
        class: "form-control",
        min: "0",
        placeholder: "id gracza",
        type: "number",
        "onUpdate:modelValue": t[1] || (t[1] = r => e.account = r)
    }, null, 512), [
        [$t, e.account]
    ])])]), u("div", Xa, [u("button", {
        class: "btn-yellow col-md-12 text-center mb-3",
        onClick: t[2] || (t[2] = r => i.transfer())
    }, "Przelej")])])])])
}
const ef = ge(Fa, [
        ["render", Qa]
    ]),
    tf = {
        name: "App",
        data: () => ({
            show: !1,
            login: !1,
            loading: !1,
            playerData: {
                account: !1,
                name: "Woro Woro",
                password: "SDFASTWE34TE",
                history: [{
                    id: 1,
                    positive: !0,
                    name: "System",
                    money: 100
                }, {
                    id: 2,
                    positive: !1,
                    name: "System",
                    money: 100
                }],
                money: 1e3,
                lastPayments: 300,
                img: "https://cdn.discordapp.com/avatars/215488141014990848/b886a7deb99ed61da51d88386f815b2f.webp?size=512"
            },
            selected: "home"
        }),
        components: {
            Header: vl,
            Login: Hl,
            Register: Yl,
            Sidebar: _c,
            Home: Qc,
            Deposit: ma,
            Withdraw: Ia,
            Transfer: ef,
            Loading: vc
        },
        mounted() {
            const e = document.querySelector(":root");
            this.listenerEvent = window.addEventListener("message", t => {
                const s = t.data || t.detail;
                switch (s.action) {
                    case "open":
                        this.show = !0, this.playerData = s.data;
                        break;
                    case "close":
                        this.show = !1;
                        break;
                    case "update":
                        this.show && (this.playerData.lastPayments = s.data.lastPayments, this.playerData.history = s.data.history, this.playerData.money = s.data.money);
                        break;
                    case "updateColor":
                        e.style.setProperty("--mainColor", event.data.data.mainColor), e.style.setProperty("--backgroundColor", event.data.data.secondaryColor), e.style.setProperty("--secondaryColor", event.data.data.secondaryColor + "f5"), e.style.setProperty("--textColor", event.data.data.textColor), e.style.setProperty("--borderColor", event.data.data.secondaryColor + "80");
                        break
                }
            }), this.listenerKeydown = window.addEventListener("keydown", t => {
                t.key === "Escape" && this.show === !0 && (this.show = !1, fetch(`https://${xt()}/close`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                }))
            })
        },
        unmounted() {
            window.removeEventListener(this.listenerEvent), window.removeEventListener(this.listenerKeydown)
        },
        methods: {
            loginPlayer() {
                this.login = !0
            },
            toggle(e) {
                this.selected = e
            },
            register(e) {
                e && (this.loading = !0, setTimeout(() => {
                    this.playerData.account = !0, this.loading = !1
                }, 1e4), fetch(`https://${xt()}/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        password: e
                    })
                }))
            }
        }
    },
    sf = {
        key: 0,
        class: "menu"
    },
    nf = {
        key: 1
    },
    of = {
        key: 0,
        class: "login-system"
    },
    rf = {
        key: 2,
        class: "main",
        id: "main"
    };

function lf(e, t, s, n, o, i) {
    const r = xe("Header"),
        c = xe("Loading"),
        f = xe("Login"),
        h = xe("Register"),
        p = xe("Sidebar"),
        v = xe("Home"),
        C = xe("Deposit"),
        P = xe("Withdraw"),
        V = xe("Transfer");
    return e.show ? (N(), G("div", sf, [_e(r, {
        name: e.playerData.name,
        img: e.playerData.img
    }, null, 8, ["name", "img"]), e.loading ? (N(), Ce(c, {
        key: 0
    })) : ve("", !0), e.loading ? ve("", !0) : (N(), G("div", nf, [e.login ? ve("", !0) : (N(), G("div", of, [e.playerData.account ? (N(), Ce(f, {
        key: 0,
        name: e.playerData.name,
        password: e.playerData.password,
        onLogin: i.loginPlayer
    }, null, 8, ["name", "password", "onLogin"])) : (N(), Ce(h, {
        key: 1,
        name: e.playerData.name,
        password: e.playerData.password,
        onRegister: i.register
    }, null, 8, ["name", "password", "onRegister"]))])), e.login ? (N(), Ce(p, {
        key: 1,
        onToggle: i.toggle
    }, null, 8, ["onToggle"])) : ve("", !0), e.login ? (N(), G("main", rf, [e.selected == "home" ? (N(), Ce(v, {
        key: 0,
        history: e.playerData.history,
        money: e.playerData.money,
        lastPayments: e.playerData.lastPayments,
        name: e.playerData.name
    }, null, 8, ["history", "money", "lastPayments", "name"])) : ve("", !0), e.selected == "deposit" ? (N(), Ce(C, {
        key: 1,
        money: e.playerData.money
    }, null, 8, ["money"])) : ve("", !0), e.selected == "withdraw" ? (N(), Ce(P, {
        key: 2,
        money: e.playerData.money
    }, null, 8, ["money"])) : ve("", !0), e.selected == "transfer" ? (N(), Ce(V, {
        key: 3,
        money: e.playerData.money
    }, null, 8, ["money"])) : ve("", !0)])) : ve("", !0)]))])) : ve("", !0)
}
const cf = ge(tf, [
    ["render", lf]
]);
cl(cf).mount("#app");