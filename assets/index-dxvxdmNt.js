function e0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, { childList: !0, subtree: !0 });

    function n(o) { const i = {}; return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function wc(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }
var dh = { exports: {} },
    bs = {},
    fh = { exports: {} },
    te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai = Symbol.for("react.element"),
    t0 = Symbol.for("react.portal"),
    n0 = Symbol.for("react.fragment"),
    r0 = Symbol.for("react.strict_mode"),
    o0 = Symbol.for("react.profiler"),
    i0 = Symbol.for("react.provider"),
    l0 = Symbol.for("react.context"),
    s0 = Symbol.for("react.forward_ref"),
    a0 = Symbol.for("react.suspense"),
    u0 = Symbol.for("react.memo"),
    c0 = Symbol.for("react.lazy"),
    Zd = Symbol.iterator;

function d0(e) { return e === null || typeof e != "object" ? null : (e = Zd && e[Zd] || e["@@iterator"], typeof e == "function" ? e : null) }
var ph = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    hh = Object.assign,
    mh = {};

function wo(e, t, n) { this.props = e, this.context = t, this.refs = mh, this.updater = n || ph }
wo.prototype.isReactComponent = {};
wo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
wo.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

function gh() {}
gh.prototype = wo.prototype;

function bc(e, t, n) { this.props = e, this.context = t, this.refs = mh, this.updater = n || ph }
var Cc = bc.prototype = new gh;
Cc.constructor = bc;
hh(Cc, wo.prototype);
Cc.isPureReactComponent = !0;
var Jd = Array.isArray,
    vh = Object.prototype.hasOwnProperty,
    Ec = { current: null },
    yh = { key: !0, ref: !0, __self: !0, __source: !0 };

function xh(e, t, n) {
    var r, o = {},
        i = null,
        l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) vh.call(t, r) && !yh.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
    return { $$typeof: Ai, type: e, key: i, ref: l, props: o, _owner: Ec.current }
}

function f0(e, t) { return { $$typeof: Ai, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } }

function kc(e) { return typeof e == "object" && e !== null && e.$$typeof === Ai }

function p0(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(n) { return t[n] }) }
var ef = /\/+/g;

function Ta(e, t) { return typeof e == "object" && e !== null && e.key != null ? p0("" + e.key) : t.toString(36) }

function bl(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else switch (i) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Ai:
                case t0:
                    l = !0
            }
    }
    if (l) return l = e, o = o(l), e = r === "" ? "." + Ta(l, 0) : r, Jd(o) ? (n = "", e != null && (n = e.replace(ef, "$&/") + "/"), bl(o, t, n, "", function(u) { return u })) : o != null && (kc(o) && (o = f0(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(ef, "$&/") + "/") + e)), t.push(o)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", Jd(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var a = r + Ta(i, s);
            l += bl(i, t, n, a, o)
        } else if (a = d0(e), typeof a == "function")
            for (e = a.call(e), s = 0; !(i = e.next()).done;) i = i.value, a = r + Ta(i, s++), l += bl(i, t, n, a, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function Ji(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return bl(e, r, "", "", function(i) { return t.call(n, i, o++) }), r
}

function h0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var mt = { current: null },
    Cl = { transition: null },
    m0 = { ReactCurrentDispatcher: mt, ReactCurrentBatchConfig: Cl, ReactCurrentOwner: Ec };
te.Children = { map: Ji, forEach: function(e, t, n) { Ji(e, function() { t.apply(this, arguments) }, n) }, count: function(e) { var t = 0; return Ji(e, function() { t++ }), t }, toArray: function(e) { return Ji(e, function(t) { return t }) || [] }, only: function(e) { if (!kc(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } };
te.Component = wo;
te.Fragment = n0;
te.Profiler = o0;
te.PureComponent = bc;
te.StrictMode = r0;
te.Suspense = a0;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0;
te.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hh({}, e.props),
        o = e.key,
        i = e.ref,
        l = e._owner;
    if (t != null) { if (t.ref !== void 0 && (i = t.ref, l = Ec.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps; for (a in t) vh.call(t, a) && !yh.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]) }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
        r.children = s
    }
    return { $$typeof: Ai, type: e.type, key: o, ref: i, props: r, _owner: l }
};
te.createContext = function(e) { return e = { $$typeof: l0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: i0, _context: e }, e.Consumer = e };
te.createElement = xh;
te.createFactory = function(e) { var t = xh.bind(null, e); return t.type = e, t };
te.createRef = function() { return { current: null } };
te.forwardRef = function(e) { return { $$typeof: s0, render: e } };
te.isValidElement = kc;
te.lazy = function(e) { return { $$typeof: c0, _payload: { _status: -1, _result: e }, _init: h0 } };
te.memo = function(e, t) { return { $$typeof: u0, type: e, compare: t === void 0 ? null : t } };
te.startTransition = function(e) {
    var t = Cl.transition;
    Cl.transition = {};
    try { e() } finally { Cl.transition = t }
};
te.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") };
te.useCallback = function(e, t) { return mt.current.useCallback(e, t) };
te.useContext = function(e) { return mt.current.useContext(e) };
te.useDebugValue = function() {};
te.useDeferredValue = function(e) { return mt.current.useDeferredValue(e) };
te.useEffect = function(e, t) { return mt.current.useEffect(e, t) };
te.useId = function() { return mt.current.useId() };
te.useImperativeHandle = function(e, t, n) { return mt.current.useImperativeHandle(e, t, n) };
te.useInsertionEffect = function(e, t) { return mt.current.useInsertionEffect(e, t) };
te.useLayoutEffect = function(e, t) { return mt.current.useLayoutEffect(e, t) };
te.useMemo = function(e, t) { return mt.current.useMemo(e, t) };
te.useReducer = function(e, t, n) { return mt.current.useReducer(e, t, n) };
te.useRef = function(e) { return mt.current.useRef(e) };
te.useState = function(e) { return mt.current.useState(e) };
te.useSyncExternalStore = function(e, t, n) { return mt.current.useSyncExternalStore(e, t, n) };
te.useTransition = function() { return mt.current.useTransition() };
te.version = "18.2.0";
fh.exports = te;
var f = fh.exports;
const be = wc(f),
    fu = e0({ __proto__: null, default: be }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0 = f,
    v0 = Symbol.for("react.element"),
    y0 = Symbol.for("react.fragment"),
    x0 = Object.prototype.hasOwnProperty,
    S0 = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    w0 = { key: !0, ref: !0, __self: !0, __source: !0 };

function Sh(e, t, n) {
    var r, o = {},
        i = null,
        l = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t) x0.call(t, r) && !w0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return { $$typeof: v0, type: e, key: i, ref: l, props: o, _owner: S0.current }
}
bs.Fragment = y0;
bs.jsx = Sh;
bs.jsxs = Sh;
dh.exports = bs;
var k = dh.exports,
    pu = {},
    wh = { exports: {} },
    At = {},
    bh = { exports: {} },
    Ch = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t($, N) {
        var j = $.length;
        $.push(N);
        e: for (; 0 < j;) {
            var K = j - 1 >>> 1,
                U = $[K];
            if (0 < o(U, N)) $[K] = N, $[j] = U, j = K;
            else break e
        }
    }

    function n($) { return $.length === 0 ? null : $[0] }

    function r($) {
        if ($.length === 0) return null;
        var N = $[0],
            j = $.pop();
        if (j !== N) {
            $[0] = j;
            e: for (var K = 0, U = $.length, J = U >>> 1; K < J;) {
                var V = 2 * (K + 1) - 1,
                    ne = $[V],
                    G = V + 1,
                    Ee = $[G];
                if (0 > o(ne, j)) G < U && 0 > o(Ee, ne) ? ($[K] = Ee, $[G] = j, K = G) : ($[K] = ne, $[V] = j, K = V);
                else if (G < U && 0 > o(Ee, j)) $[K] = Ee, $[G] = j, K = G;
                else break e
            }
        }
        return N
    }

    function o($, N) { var j = $.sortIndex - N.sortIndex; return j !== 0 ? j : $.id - N.id }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() { return i.now() }
    } else {
        var l = Date,
            s = l.now();
        e.unstable_now = function() { return l.now() - s }
    }
    var a = [],
        u = [],
        c = 1,
        d = null,
        p = 3,
        x = !1,
        S = !1,
        y = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m($) {
        for (var N = n(u); N !== null;) {
            if (N.callback === null) r(u);
            else if (N.startTime <= $) r(u), N.sortIndex = N.expirationTime, t(a, N);
            else break;
            N = n(u)
        }
    }

    function v($) {
        if (y = !1, m($), !S)
            if (n(a) !== null) S = !0, D(b);
            else {
                var N = n(u);
                N !== null && _(v, N.startTime - $)
            }
    }

    function b($, N) {
        S = !1, y && (y = !1, g(T), T = -1), x = !0;
        var j = p;
        try {
            for (m(N), d = n(a); d !== null && (!(d.expirationTime > N) || $ && !O());) {
                var K = d.callback;
                if (typeof K == "function") {
                    d.callback = null, p = d.priorityLevel;
                    var U = K(d.expirationTime <= N);
                    N = e.unstable_now(), typeof U == "function" ? d.callback = U : d === n(a) && r(a), m(N)
                } else r(a);
                d = n(a)
            }
            if (d !== null) var J = !0;
            else {
                var V = n(u);
                V !== null && _(v, V.startTime - N), J = !1
            }
            return J
        } finally { d = null, p = j, x = !1 }
    }
    var C = !1,
        w = null,
        T = -1,
        M = 5,
        P = -1;

    function O() { return !(e.unstable_now() - P < M) }

    function F() {
        if (w !== null) {
            var $ = e.unstable_now();
            P = $;
            var N = !0;
            try { N = w(!0, $) } finally { N ? A() : (C = !1, w = null) }
        } else C = !1
    }
    var A;
    if (typeof h == "function") A = function() { h(F) };
    else if (typeof MessageChannel < "u") {
        var z = new MessageChannel,
            I = z.port2;
        z.port1.onmessage = F, A = function() { I.postMessage(null) }
    } else A = function() { E(F, 0) };

    function D($) { w = $, C || (C = !0, A()) }

    function _($, N) { T = E(function() { $(e.unstable_now()) }, N) }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) { $.callback = null }, e.unstable_continueExecution = function() { S || x || (S = !0, D(b)) }, e.unstable_forceFrameRate = function($) { 0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < $ ? Math.floor(1e3 / $) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return p }, e.unstable_getFirstCallbackNode = function() { return n(a) }, e.unstable_next = function($) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = p
        }
        var j = p;
        p = N;
        try { return $() } finally { p = j }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function($, N) {
        switch ($) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                $ = 3
        }
        var j = p;
        p = $;
        try { return N() } finally { p = j }
    }, e.unstable_scheduleCallback = function($, N, j) {
        var K = e.unstable_now();
        switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? K + j : K) : j = K, $) {
            case 1:
                var U = -1;
                break;
            case 2:
                U = 250;
                break;
            case 5:
                U = 1073741823;
                break;
            case 4:
                U = 1e4;
                break;
            default:
                U = 5e3
        }
        return U = j + U, $ = { id: c++, callback: N, priorityLevel: $, startTime: j, expirationTime: U, sortIndex: -1 }, j > K ? ($.sortIndex = j, t(u, $), n(a) === null && $ === n(u) && (y ? (g(T), T = -1) : y = !0, _(v, j - K))) : ($.sortIndex = U, t(a, $), S || x || (S = !0, D(b))), $
    }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function($) {
        var N = p;
        return function() {
            var j = p;
            p = N;
            try { return $.apply(this, arguments) } finally { p = j }
        }
    }
})(Ch);
bh.exports = Ch;
var b0 = bh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eh = f,
    zt = b0;

function L(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
var kh = new Set,
    hi = {};

function $r(e, t) { uo(e, t), uo(e + "Capture", t) }

function uo(e, t) { for (hi[e] = t, e = 0; e < t.length; e++) kh.add(t[e]) }
var Mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    hu = Object.prototype.hasOwnProperty,
    C0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    tf = {},
    nf = {};

function E0(e) { return hu.call(nf, e) ? !0 : hu.call(tf, e) ? !1 : C0.test(e) ? nf[e] = !0 : (tf[e] = !0, !1) }

function k0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function R0(e, t, n, r) {
    if (t === null || typeof t > "u" || k0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function gt(e, t, n, r, o, i, l) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l }
var nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { nt[e] = new gt(e, 0, !1, e, null, !1, !1) });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    nt[t] = new gt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { nt[e] = new gt(e, 2, !1, e.toLowerCase(), null, !1, !1) });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { nt[e] = new gt(e, 2, !1, e, null, !1, !1) });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { nt[e] = new gt(e, 3, !1, e.toLowerCase(), null, !1, !1) });
["checked", "multiple", "muted", "selected"].forEach(function(e) { nt[e] = new gt(e, 3, !0, e, null, !1, !1) });
["capture", "download"].forEach(function(e) { nt[e] = new gt(e, 4, !1, e, null, !1, !1) });
["cols", "rows", "size", "span"].forEach(function(e) { nt[e] = new gt(e, 6, !1, e, null, !1, !1) });
["rowSpan", "start"].forEach(function(e) { nt[e] = new gt(e, 5, !1, e.toLowerCase(), null, !1, !1) });
var Rc = /[\-:]([a-z])/g;

function Tc(e) { return e[1].toUpperCase() }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Rc, Tc);
    nt[t] = new gt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Rc, Tc);
    nt[t] = new gt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Rc, Tc);
    nt[t] = new gt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) { nt[e] = new gt(e, 1, !1, e.toLowerCase(), null, !1, !1) });
nt.xlinkHref = new gt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) { nt[e] = new gt(e, 1, !1, e.toLowerCase(), null, !0, !0) });

function Pc(e, t, n, r) {
    var o = nt.hasOwnProperty(t) ? nt[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (R0(t, n, o, r) && (n = null), r || o === null ? E0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Dn = Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    el = Symbol.for("react.element"),
    jr = Symbol.for("react.portal"),
    Br = Symbol.for("react.fragment"),
    $c = Symbol.for("react.strict_mode"),
    mu = Symbol.for("react.profiler"),
    Rh = Symbol.for("react.provider"),
    Th = Symbol.for("react.context"),
    Ic = Symbol.for("react.forward_ref"),
    gu = Symbol.for("react.suspense"),
    vu = Symbol.for("react.suspense_list"),
    Mc = Symbol.for("react.memo"),
    Un = Symbol.for("react.lazy"),
    Ph = Symbol.for("react.offscreen"),
    rf = Symbol.iterator;

function _o(e) { return e === null || typeof e != "object" ? null : (e = rf && e[rf] || e["@@iterator"], typeof e == "function" ? e : null) }
var Ie = Object.assign,
    Pa;

function Go(e) {
    if (Pa === void 0) try { throw Error() } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Pa = t && t[1] || ""
    }
    return `
` + Pa + e
}
var $a = !1;

function Ia(e, t) {
    if (!e || $a) return "";
    $a = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) {
                try { Reflect.construct(t, []) } catch (u) { var r = u }
                Reflect.construct(e, [], t)
            } else {
                try { t.call() } catch (u) { r = u }
                e.call(t.prototype)
            }
        else {
            try { throw Error() } catch (u) { r = u }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s];) s--;
            for (; 1 <= l && 0 <= s; l--, s--)
                if (o[l] !== i[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--, s--, 0 > s || o[l] !== i[s]) { var a = `
` + o[l].replace(" at new ", " at "); return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a }
                    while (1 <= l && 0 <= s);
                    break
                }
        }
    } finally { $a = !1, Error.prepareStackTrace = n }
    return (e = e ? e.displayName || e.name : "") ? Go(e) : ""
}

function T0(e) {
    switch (e.tag) {
        case 5:
            return Go(e.type);
        case 16:
            return Go("Lazy");
        case 13:
            return Go("Suspense");
        case 19:
            return Go("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ia(e.type, !1), e;
        case 11:
            return e = Ia(e.type.render, !1), e;
        case 1:
            return e = Ia(e.type, !0), e;
        default:
            return ""
    }
}

function yu(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Br:
            return "Fragment";
        case jr:
            return "Portal";
        case mu:
            return "Profiler";
        case $c:
            return "StrictMode";
        case gu:
            return "Suspense";
        case vu:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Th:
            return (e.displayName || "Context") + ".Consumer";
        case Rh:
            return (e._context.displayName || "Context") + ".Provider";
        case Ic:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Mc:
            return t = e.displayName || null, t !== null ? t : yu(e.type) || "Memo";
        case Un:
            t = e._payload, e = e._init;
            try { return yu(e(t)) } catch {}
    }
    return null
}

function P0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return yu(t);
        case 8:
            return t === $c ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function or(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function $h(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") }

function $0(e) {
    var t = $h(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, { configurable: !0, get: function() { return o.call(this) }, set: function(l) { r = "" + l, i.call(this, l) } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() { return r }, setValue: function(l) { r = "" + l }, stopTracking: function() { e._valueTracker = null, delete e[t] } }
    }
}

function tl(e) { e._valueTracker || (e._valueTracker = $0(e)) }

function Ih(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = $h(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function jl(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null; try { return e.activeElement || e.body } catch { return e.body } }

function xu(e, t) { var n = t.checked; return Ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ? n : e._wrapperState.initialChecked }) }

function of(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = or(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }
}

function Mh(e, t) { t = t.checked, t != null && Pc(e, "checked", t, !1) }

function Su(e, t) {
    Mh(e, t);
    var n = or(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") { e.removeAttribute("value"); return }
    t.hasOwnProperty("value") ? wu(e, t.type, n) : t.hasOwnProperty("defaultValue") && wu(e, t.type, or(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function lf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function wu(e, t, n) {
    (t !== "number" || jl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Xo = Array.isArray;

function eo(e, t, n, r) {
    if (e = e.options, t) { t = {}; for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0; for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0) } else {
        for (n = "" + or(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) { e[o].selected = !0, r && (e[o].defaultSelected = !0); return }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function bu(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(L(91)); return Ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

function sf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(L(92));
            if (Xo(n)) {
                if (1 < n.length) throw Error(L(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = { initialValue: or(n) }
}

function Nh(e, t) {
    var n = or(t.value),
        r = or(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function af(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Oh(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Cu(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Oh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
var nl, _h = function(e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) { MSApp.execUnsafeLocalFunction(function() { return e(t, n, r, o) }) } : e }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else { for (nl = nl || document.createElement("div"), nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = nl.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; t.firstChild;) e.appendChild(t.firstChild) }
});

function mi(e, t) {
    if (t) { var n = e.firstChild; if (n && n === e.lastChild && n.nodeType === 3) { n.nodeValue = t; return } }
    e.textContent = t
}
var Zo = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    I0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zo).forEach(function(e) { I0.forEach(function(t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), Zo[t] = Zo[e] }) });

function Lh(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zo.hasOwnProperty(e) && Zo[e] ? ("" + t).trim() : t + "px" }

function Dh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Lh(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var M0 = Ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

function Eu(e, t) { if (t) { if (M0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e)); if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(L(60)); if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61)) } if (t.style != null && typeof t.style != "object") throw Error(L(62)) } }

function ku(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Ru = null;

function Nc(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
var Tu = null,
    to = null,
    no = null;

function uf(e) {
    if (e = Bi(e)) {
        if (typeof Tu != "function") throw Error(L(280));
        var t = e.stateNode;
        t && (t = Ts(t), Tu(e.stateNode, e.type, t))
    }
}

function zh(e) { to ? no ? no.push(e) : no = [e] : to = e }

function Ah() {
    if (to) {
        var e = to,
            t = no;
        if (no = to = null, uf(e), t)
            for (e = 0; e < t.length; e++) uf(t[e])
    }
}

function Fh(e, t) { return e(t) }

function jh() {}
var Ma = !1;

function Bh(e, t, n) {
    if (Ma) return e(t, n);
    Ma = !0;
    try { return Fh(e, t, n) } finally { Ma = !1, (to !== null || no !== null) && (jh(), Ah()) }
}

function gi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ts(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(L(231, t, typeof n));
    return n
}
var Pu = !1;
if (Mn) try {
    var Lo = {};
    Object.defineProperty(Lo, "passive", { get: function() { Pu = !0 } }), window.addEventListener("test", Lo, Lo), window.removeEventListener("test", Lo, Lo)
} catch { Pu = !1 }

function N0(e, t, n, r, o, i, l, s, a) { var u = Array.prototype.slice.call(arguments, 3); try { t.apply(n, u) } catch (c) { this.onError(c) } }
var Jo = !1,
    Bl = null,
    Ul = !1,
    $u = null,
    O0 = { onError: function(e) { Jo = !0, Bl = e } };

function _0(e, t, n, r, o, i, l, s, a) { Jo = !1, Bl = null, N0.apply(O0, arguments) }

function L0(e, t, n, r, o, i, l, s, a) {
    if (_0.apply(this, arguments), Jo) {
        if (Jo) {
            var u = Bl;
            Jo = !1, Bl = null
        } else throw Error(L(198));
        Ul || (Ul = !0, $u = u)
    }
}

function Ir(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Uh(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null }

function cf(e) { if (Ir(e) !== e) throw Error(L(188)) }

function D0(e) {
    var t = e.alternate;
    if (!t) { if (t = Ir(e), t === null) throw Error(L(188)); return t !== e ? null : e }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) { if (r = o.return, r !== null) { n = r; continue } break }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return cf(o), e;
                if (i === r) return cf(o), t;
                i = i.sibling
            }
            throw Error(L(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var l = !1, s = o.child; s;) {
                if (s === n) { l = !0, n = o, r = i; break }
                if (s === r) { l = !0, r = o, n = i; break }
                s = s.sibling
            }
            if (!l) {
                for (s = i.child; s;) {
                    if (s === n) { l = !0, n = i, r = o; break }
                    if (s === r) { l = !0, r = i, n = o; break }
                    s = s.sibling
                }
                if (!l) throw Error(L(189))
            }
        }
        if (n.alternate !== r) throw Error(L(190))
    }
    if (n.tag !== 3) throw Error(L(188));
    return n.stateNode.current === n ? e : t
}

function Wh(e) { return e = D0(e), e !== null ? Vh(e) : null }

function Vh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Vh(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Hh = zt.unstable_scheduleCallback,
    df = zt.unstable_cancelCallback,
    z0 = zt.unstable_shouldYield,
    A0 = zt.unstable_requestPaint,
    Le = zt.unstable_now,
    F0 = zt.unstable_getCurrentPriorityLevel,
    Oc = zt.unstable_ImmediatePriority,
    Kh = zt.unstable_UserBlockingPriority,
    Wl = zt.unstable_NormalPriority,
    j0 = zt.unstable_LowPriority,
    Gh = zt.unstable_IdlePriority,
    Cs = null,
    bn = null;

function B0(e) { if (bn && typeof bn.onCommitFiberRoot == "function") try { bn.onCommitFiberRoot(Cs, e, void 0, (e.current.flags & 128) === 128) } catch {} }
var an = Math.clz32 ? Math.clz32 : V0,
    U0 = Math.log,
    W0 = Math.LN2;

function V0(e) { return e >>>= 0, e === 0 ? 32 : 31 - (U0(e) / W0 | 0) | 0 }
var rl = 64,
    ol = 4194304;

function Yo(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Vl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var s = l & ~o;
        s !== 0 ? r = Yo(s) : (i &= l, i !== 0 && (r = Yo(i)))
    } else l = n & ~o, l !== 0 ? r = Yo(l) : i !== 0 && (r = Yo(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - an(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function H0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function K0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var l = 31 - an(i),
            s = 1 << l,
            a = o[l];
        a === -1 ? (!(s & n) || s & r) && (o[l] = H0(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s
    }
}

function Iu(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

function Xh() { var e = rl; return rl <<= 1, !(rl & 4194240) && (rl = 64), e }

function Na(e) { for (var t = [], n = 0; 31 > n; n++) t.push(e); return t }

function Fi(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - an(t), e[t] = n }

function G0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - an(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function _c(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - an(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var he = 0;

function Yh(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1 }
var qh, Lc, Qh, Zh, Jh, Mu = !1,
    il = [],
    qn = null,
    Qn = null,
    Zn = null,
    vi = new Map,
    yi = new Map,
    Hn = [],
    X0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function ff(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            qn = null;
            break;
        case "dragenter":
        case "dragleave":
            Qn = null;
            break;
        case "mouseover":
        case "mouseout":
            Zn = null;
            break;
        case "pointerover":
        case "pointerout":
            vi.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            yi.delete(t.pointerId)
    }
}

function Do(e, t, n, r, o, i) { return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Bi(t), t !== null && Lc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e) }

function Y0(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return qn = Do(qn, e, t, n, r, o), !0;
        case "dragenter":
            return Qn = Do(Qn, e, t, n, r, o), !0;
        case "mouseover":
            return Zn = Do(Zn, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return vi.set(i, Do(vi.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, yi.set(i, Do(yi.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function em(e) {
    var t = mr(e.target);
    if (t !== null) { var n = Ir(t); if (n !== null) { if (t = n.tag, t === 13) { if (t = Uh(n), t !== null) { e.blockedOn = t, Jh(e.priority, function() { Qh(n) }); return } } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null; return } } }
    e.blockedOn = null
}

function El(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Nu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ru = r, n.target.dispatchEvent(r), Ru = null
        } else return t = Bi(n), t !== null && Lc(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function pf(e, t, n) { El(e) && n.delete(t) }

function q0() { Mu = !1, qn !== null && El(qn) && (qn = null), Qn !== null && El(Qn) && (Qn = null), Zn !== null && El(Zn) && (Zn = null), vi.forEach(pf), yi.forEach(pf) }

function zo(e, t) { e.blockedOn === t && (e.blockedOn = null, Mu || (Mu = !0, zt.unstable_scheduleCallback(zt.unstable_NormalPriority, q0))) }

function xi(e) {
    function t(o) { return zo(o, e) }
    if (0 < il.length) {
        zo(il[0], e);
        for (var n = 1; n < il.length; n++) {
            var r = il[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (qn !== null && zo(qn, e), Qn !== null && zo(Qn, e), Zn !== null && zo(Zn, e), vi.forEach(t), yi.forEach(t), n = 0; n < Hn.length; n++) r = Hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Hn.length && (n = Hn[0], n.blockedOn === null);) em(n), n.blockedOn === null && Hn.shift()
}
var ro = Dn.ReactCurrentBatchConfig,
    Hl = !0;

function Q0(e, t, n, r) {
    var o = he,
        i = ro.transition;
    ro.transition = null;
    try { he = 1, Dc(e, t, n, r) } finally { he = o, ro.transition = i }
}

function Z0(e, t, n, r) {
    var o = he,
        i = ro.transition;
    ro.transition = null;
    try { he = 4, Dc(e, t, n, r) } finally { he = o, ro.transition = i }
}

function Dc(e, t, n, r) {
    if (Hl) {
        var o = Nu(e, t, n, r);
        if (o === null) Ua(e, t, r, Kl, n), ff(e, r);
        else if (Y0(o, e, t, n, r)) r.stopPropagation();
        else if (ff(e, r), t & 4 && -1 < X0.indexOf(e)) {
            for (; o !== null;) {
                var i = Bi(o);
                if (i !== null && qh(i), i = Nu(e, t, n, r), i === null && Ua(e, t, r, Kl, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else Ua(e, t, r, null, n)
    }
}
var Kl = null;

function Nu(e, t, n, r) {
    if (Kl = null, e = Nc(r), e = mr(e), e !== null)
        if (t = Ir(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Uh(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Kl = e, null
}

function tm(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (F0()) {
                case Oc:
                    return 1;
                case Kh:
                    return 4;
                case Wl:
                case j0:
                    return 16;
                case Gh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Xn = null,
    zc = null,
    kl = null;

function nm() {
    if (kl) return kl;
    var e, t = zc,
        n = t.length,
        r, o = "value" in Xn ? Xn.value : Xn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
    return kl = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Rl(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

function ll() { return !0 }

function hf() { return !1 }

function Ft(e) {
    function t(n, r, o, i, l) { this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null; for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]); return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ll : hf, this.isPropagationStopped = hf, this }
    return Ie(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ll)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ll)
        },
        persist: function() {},
        isPersistent: ll
    }), t
}
var bo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
    Ac = Ft(bo),
    ji = Ie({}, bo, { view: 0, detail: 0 }),
    J0 = Ft(ji),
    Oa, _a, Ao, Es = Ie({}, ji, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fc, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== Ao && (Ao && e.type === "mousemove" ? (Oa = e.screenX - Ao.screenX, _a = e.screenY - Ao.screenY) : _a = Oa = 0, Ao = e), Oa) }, movementY: function(e) { return "movementY" in e ? e.movementY : _a } }),
    mf = Ft(Es),
    ey = Ie({}, Es, { dataTransfer: 0 }),
    ty = Ft(ey),
    ny = Ie({}, ji, { relatedTarget: 0 }),
    La = Ft(ny),
    ry = Ie({}, bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    oy = Ft(ry),
    iy = Ie({}, bo, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    ly = Ft(iy),
    sy = Ie({}, bo, { data: 0 }),
    gf = Ft(sy),
    ay = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    uy = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    cy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function dy(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = cy[e]) ? !!t[e] : !1 }

function Fc() { return dy }
var fy = Ie({}, ji, { key: function(e) { if (e.key) { var t = ay[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = Rl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uy[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fc, charCode: function(e) { return e.type === "keypress" ? Rl(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? Rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
    py = Ft(fy),
    hy = Ie({}, Es, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    vf = Ft(hy),
    my = Ie({}, ji, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fc }),
    gy = Ft(my),
    vy = Ie({}, bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yy = Ft(vy),
    xy = Ie({}, Es, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
    Sy = Ft(xy),
    wy = [9, 13, 27, 32],
    jc = Mn && "CompositionEvent" in window,
    ei = null;
Mn && "documentMode" in document && (ei = document.documentMode);
var by = Mn && "TextEvent" in window && !ei,
    rm = Mn && (!jc || ei && 8 < ei && 11 >= ei),
    yf = " ",
    xf = !1;

function om(e, t) {
    switch (e) {
        case "keyup":
            return wy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function im(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
var Ur = !1;

function Cy(e, t) {
    switch (e) {
        case "compositionend":
            return im(t);
        case "keypress":
            return t.which !== 32 ? null : (xf = !0, yf);
        case "textInput":
            return e = t.data, e === yf && xf ? null : e;
        default:
            return null
    }
}

function Ey(e, t) {
    if (Ur) return e === "compositionend" || !jc && om(e, t) ? (e = nm(), kl = zc = Xn = null, Ur = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) }
            return null;
        case "compositionend":
            return rm && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var ky = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

function Sf(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!ky[e.type] : t === "textarea" }

function lm(e, t, n, r) { zh(r), t = Gl(t, "onChange"), 0 < t.length && (n = new Ac("onChange", "change", null, n, r), e.push({ event: n, listeners: t })) }
var ti = null,
    Si = null;

function Ry(e) { vm(e, 0) }

function ks(e) { var t = Hr(e); if (Ih(t)) return e }

function Ty(e, t) { if (e === "change") return t }
var sm = !1;
if (Mn) {
    var Da;
    if (Mn) {
        var za = "oninput" in document;
        if (!za) {
            var wf = document.createElement("div");
            wf.setAttribute("oninput", "return;"), za = typeof wf.oninput == "function"
        }
        Da = za
    } else Da = !1;
    sm = Da && (!document.documentMode || 9 < document.documentMode)
}

function bf() { ti && (ti.detachEvent("onpropertychange", am), Si = ti = null) }

function am(e) {
    if (e.propertyName === "value" && ks(Si)) {
        var t = [];
        lm(t, Si, e, Nc(e)), Bh(Ry, t)
    }
}

function Py(e, t, n) { e === "focusin" ? (bf(), ti = t, Si = n, ti.attachEvent("onpropertychange", am)) : e === "focusout" && bf() }

function $y(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return ks(Si) }

function Iy(e, t) { if (e === "click") return ks(t) }

function My(e, t) { if (e === "input" || e === "change") return ks(t) }

function Ny(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t }
var cn = typeof Object.is == "function" ? Object.is : Ny;

function wi(e, t) {
    if (cn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) { var o = n[r]; if (!hu.call(t, o) || !cn(e[o], t[o])) return !1 }
    return !0
}

function Cf(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

function Ef(e, t) {
    var n = Cf(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) { n = n.nextSibling; break e }
                n = n.parentNode
            }
            n = void 0
        }
        n = Cf(n)
    }
}

function um(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? um(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 }

function cm() {
    for (var e = window, t = jl(); t instanceof e.HTMLIFrameElement;) {
        try { var n = typeof t.contentWindow.location.href == "string" } catch { n = !1 }
        if (n) e = t.contentWindow;
        else break;
        t = jl(e.document)
    }
    return t
}

function Bc(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") }

function Oy(e) {
    var t = cm(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && um(n.ownerDocument.documentElement, n)) {
        if (r !== null && Bc(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Ef(n, i);
                var l = Ef(n, r);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var _y = Mn && "documentMode" in document && 11 >= document.documentMode,
    Wr = null,
    Ou = null,
    ni = null,
    _u = !1;

function kf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _u || Wr == null || Wr !== jl(r) || (r = Wr, "selectionStart" in r && Bc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ni && wi(ni, r) || (ni = r, r = Gl(Ou, "onSelect"), 0 < r.length && (t = new Ac("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Wr)))
}

function sl(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n }
var Vr = { animationend: sl("Animation", "AnimationEnd"), animationiteration: sl("Animation", "AnimationIteration"), animationstart: sl("Animation", "AnimationStart"), transitionend: sl("Transition", "TransitionEnd") },
    Aa = {},
    dm = {};
Mn && (dm = document.createElement("div").style, "AnimationEvent" in window || (delete Vr.animationend.animation, delete Vr.animationiteration.animation, delete Vr.animationstart.animation), "TransitionEvent" in window || delete Vr.transitionend.transition);

function Rs(e) {
    if (Aa[e]) return Aa[e];
    if (!Vr[e]) return e;
    var t = Vr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in dm) return Aa[e] = t[n];
    return e
}
var fm = Rs("animationend"),
    pm = Rs("animationiteration"),
    hm = Rs("animationstart"),
    mm = Rs("transitionend"),
    gm = new Map,
    Rf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function sr(e, t) { gm.set(e, t), $r(t, [e]) }
for (var Fa = 0; Fa < Rf.length; Fa++) {
    var ja = Rf[Fa],
        Ly = ja.toLowerCase(),
        Dy = ja[0].toUpperCase() + ja.slice(1);
    sr(Ly, "on" + Dy)
}
sr(fm, "onAnimationEnd");
sr(pm, "onAnimationIteration");
sr(hm, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(mm, "onTransitionEnd");
uo("onMouseEnter", ["mouseout", "mouseover"]);
uo("onMouseLeave", ["mouseout", "mouseover"]);
uo("onPointerEnter", ["pointerout", "pointerover"]);
uo("onPointerLeave", ["pointerout", "pointerover"]);
$r("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$r("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$r("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$r("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$r("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    zy = new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));

function Tf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, L0(r, t, void 0, e), e.currentTarget = null
}

function vm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l],
                        a = s.instance,
                        u = s.currentTarget;
                    if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
                    Tf(o, s, u), i = a
                } else
                    for (l = 0; l < r.length; l++) {
                        if (s = r[l], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
                        Tf(o, s, u), i = a
                    }
        }
    }
    if (Ul) throw e = $u, Ul = !1, $u = null, e
}

function we(e, t) {
    var n = t[Fu];
    n === void 0 && (n = t[Fu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ym(t, e, 2, !1), n.add(r))
}

function Ba(e, t, n) {
    var r = 0;
    t && (r |= 4), ym(n, e, r, t)
}
var al = "_reactListening" + Math.random().toString(36).slice(2);

function bi(e) {
    if (!e[al]) {
        e[al] = !0, kh.forEach(function(n) { n !== "selectionchange" && (zy.has(n) || Ba(n, !1, e), Ba(n, !0, e)) });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[al] || (t[al] = !0, Ba("selectionchange", !1, t))
    }
}

function ym(e, t, n, r) {
    switch (tm(t)) {
        case 1:
            var o = Q0;
            break;
        case 4:
            o = Z0;
            break;
        default:
            o = Dc
    }
    n = o.bind(null, t, n, e), o = void 0, !Pu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1)
}

function Ua(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var s = r.stateNode.containerInfo;
            if (s === o || s.nodeType === 8 && s.parentNode === o) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var a = l.tag;
                    if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                    l = l.return
                }
            for (; s !== null;) {
                if (l = mr(s), l === null) return;
                if (a = l.tag, a === 5 || a === 6) { r = i = l; continue e }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Bh(function() {
        var u = i,
            c = Nc(n),
            d = [];
        e: {
            var p = gm.get(e);
            if (p !== void 0) {
                var x = Ac,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (Rl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        x = py;
                        break;
                    case "focusin":
                        S = "focus", x = La;
                        break;
                    case "focusout":
                        S = "blur", x = La;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = La;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = mf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = ty;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = gy;
                        break;
                    case fm:
                    case pm:
                    case hm:
                        x = oy;
                        break;
                    case mm:
                        x = yy;
                        break;
                    case "scroll":
                        x = J0;
                        break;
                    case "wheel":
                        x = Sy;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = ly;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = vf
                }
                var y = (t & 4) !== 0,
                    E = !y && e === "scroll",
                    g = y ? p !== null ? p + "Capture" : null : p;
                y = [];
                for (var h = u, m; h !== null;) {
                    m = h;
                    var v = m.stateNode;
                    if (m.tag === 5 && v !== null && (m = v, g !== null && (v = gi(h, g), v != null && y.push(Ci(h, v, m)))), E) break;
                    h = h.return
                }
                0 < y.length && (p = new x(p, S, null, n, c), d.push({ event: p, listeners: y }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", p && n !== Ru && (S = n.relatedTarget || n.fromElement) && (mr(S) || S[Nn])) break e;
                if ((x || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, x ? (S = n.relatedTarget || n.toElement, x = u, S = S ? mr(S) : null, S !== null && (E = Ir(S), S !== E || S.tag !== 5 && S.tag !== 6) && (S = null)) : (x = null, S = u), x !== S)) {
                    if (y = mf, v = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = vf, v = "onPointerLeave", g = "onPointerEnter", h = "pointer"), E = x == null ? p : Hr(x), m = S == null ? p : Hr(S), p = new y(v, h + "leave", x, n, c), p.target = E, p.relatedTarget = m, v = null, mr(c) === u && (y = new y(g, h + "enter", S, n, c), y.target = m, y.relatedTarget = E, v = y), E = v, x && S) t: {
                        for (y = x, g = S, h = 0, m = y; m; m = Nr(m)) h++;
                        for (m = 0, v = g; v; v = Nr(v)) m++;
                        for (; 0 < h - m;) y = Nr(y),
                        h--;
                        for (; 0 < m - h;) g = Nr(g),
                        m--;
                        for (; h--;) {
                            if (y === g || g !== null && y === g.alternate) break t;
                            y = Nr(y), g = Nr(g)
                        }
                        y = null
                    }
                    else y = null;
                    x !== null && Pf(d, p, x, y, !1), S !== null && E !== null && Pf(d, E, S, y, !0)
                }
            }
            e: {
                if (p = u ? Hr(u) : window, x = p.nodeName && p.nodeName.toLowerCase(), x === "select" || x === "input" && p.type === "file") var b = Ty;
                else if (Sf(p))
                    if (sm) b = My;
                    else { b = $y; var C = Py }
                else(x = p.nodeName) && x.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (b = Iy);
                if (b && (b = b(e, u))) { lm(d, b, n, c); break e }
                C && C(e, p, u),
                e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && wu(p, "number", p.value)
            }
            switch (C = u ? Hr(u) : window, e) {
                case "focusin":
                    (Sf(C) || C.contentEditable === "true") && (Wr = C, Ou = u, ni = null);
                    break;
                case "focusout":
                    ni = Ou = Wr = null;
                    break;
                case "mousedown":
                    _u = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    _u = !1, kf(d, n, c);
                    break;
                case "selectionchange":
                    if (_y) break;
                case "keydown":
                case "keyup":
                    kf(d, n, c)
            }
            var w;
            if (jc) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Ur ? om(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (rm && n.locale !== "ko" && (Ur || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ur && (w = nm()) : (Xn = c, zc = "value" in Xn ? Xn.value : Xn.textContent, Ur = !0)), C = Gl(u, T), 0 < C.length && (T = new gf(T, e, null, n, c), d.push({ event: T, listeners: C }), w ? T.data = w : (w = im(n), w !== null && (T.data = w)))),
            (w = by ? Cy(e, n) : Ey(e, n)) && (u = Gl(u, "onBeforeInput"), 0 < u.length && (c = new gf("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = w))
        }
        vm(d, t)
    })
}

function Ci(e, t, n) { return { instance: e, listener: t, currentTarget: n } }

function Gl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = gi(e, n), i != null && r.unshift(Ci(e, i, o)), i = gi(e, t), i != null && r.push(Ci(e, i, o))), e = e.return
    }
    return r
}

function Nr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Pf(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r;) {
        var s = n,
            a = s.alternate,
            u = s.stateNode;
        if (a !== null && a === r) break;
        s.tag === 5 && u !== null && (s = u, o ? (a = gi(n, i), a != null && l.unshift(Ci(n, a, s))) : o || (a = gi(n, i), a != null && l.push(Ci(n, a, s)))), n = n.return
    }
    l.length !== 0 && e.push({ event: t, listeners: l })
}
var Ay = /\r\n?/g,
    Fy = /\u0000|\uFFFD/g;

function $f(e) { return (typeof e == "string" ? e : "" + e).replace(Ay, `
`).replace(Fy, "") }

function ul(e, t, n) { if (t = $f(t), $f(e) !== t && n) throw Error(L(425)) }

function Xl() {}
var Lu = null,
    Du = null;

function zu(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null }
var Au = typeof setTimeout == "function" ? setTimeout : void 0,
    jy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    If = typeof Promise == "function" ? Promise : void 0,
    By = typeof queueMicrotask == "function" ? queueMicrotask : typeof If < "u" ? function(e) { return If.resolve(null).then(e).catch(Uy) } : Au;

function Uy(e) { setTimeout(function() { throw e }) }

function Wa(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) { e.removeChild(o), xi(t); return }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    xi(t)
}

function Jn(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?") break; if (t === "/$") return null } } return e }

function Mf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Co = Math.random().toString(36).slice(2),
    Sn = "__reactFiber$" + Co,
    Ei = "__reactProps$" + Co,
    Nn = "__reactContainer$" + Co,
    Fu = "__reactEvents$" + Co,
    Wy = "__reactListeners$" + Co,
    Vy = "__reactHandles$" + Co;

function mr(e) {
    var t = e[Sn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Nn] || n[Sn]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Mf(e); e !== null;) {
                    if (n = e[Sn]) return n;
                    e = Mf(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Bi(e) { return e = e[Sn] || e[Nn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

function Hr(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(L(33)) }

function Ts(e) { return e[Ei] || null }
var ju = [],
    Kr = -1;

function ar(e) { return { current: e } }

function Ce(e) { 0 > Kr || (e.current = ju[Kr], ju[Kr] = null, Kr--) }

function Se(e, t) { Kr++, ju[Kr] = e.current, e.current = t }
var ir = {},
    at = ar(ir),
    bt = ar(!1),
    wr = ir;

function co(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ir;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Ct(e) { return e = e.childContextTypes, e != null }

function Yl() { Ce(bt), Ce(at) }

function Nf(e, t, n) {
    if (at.current !== ir) throw Error(L(168));
    Se(at, t), Se(bt, n)
}

function xm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(L(108, P0(e) || "Unknown", o));
    return Ie({}, n, r)
}

function ql(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ir, wr = at.current, Se(at, e), Se(bt, bt.current), !0 }

function Of(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(L(169));
    n ? (e = xm(e, t, wr), r.__reactInternalMemoizedMergedChildContext = e, Ce(bt), Ce(at), Se(at, e)) : Ce(bt), Se(bt, n)
}
var Tn = null,
    Ps = !1,
    Va = !1;

function Sm(e) { Tn === null ? Tn = [e] : Tn.push(e) }

function Hy(e) { Ps = !0, Sm(e) }

function ur() {
    if (!Va && Tn !== null) {
        Va = !0;
        var e = 0,
            t = he;
        try {
            var n = Tn;
            for (he = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Tn = null, Ps = !1
        } catch (o) { throw Tn !== null && (Tn = Tn.slice(e + 1)), Hh(Oc, ur), o } finally { he = t, Va = !1 }
    }
    return null
}
var Gr = [],
    Xr = 0,
    Ql = null,
    Zl = 0,
    Kt = [],
    Gt = 0,
    br = null,
    Pn = 1,
    $n = "";

function dr(e, t) { Gr[Xr++] = Zl, Gr[Xr++] = Ql, Ql = e, Zl = t }

function wm(e, t, n) {
    Kt[Gt++] = Pn, Kt[Gt++] = $n, Kt[Gt++] = br, br = e;
    var r = Pn;
    e = $n;
    var o = 32 - an(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - an(t) + o;
    if (30 < i) {
        var l = o - o % 5;
        i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Pn = 1 << 32 - an(t) + o | n << o | r, $n = i + e
    } else Pn = 1 << i | n << o | r, $n = e
}

function Uc(e) { e.return !== null && (dr(e, 1), wm(e, 1, 0)) }

function Wc(e) { for (; e === Ql;) Ql = Gr[--Xr], Gr[Xr] = null, Zl = Gr[--Xr], Gr[Xr] = null; for (; e === br;) br = Kt[--Gt], Kt[Gt] = null, $n = Kt[--Gt], Kt[Gt] = null, Pn = Kt[--Gt], Kt[Gt] = null }
var _t = null,
    Ot = null,
    Te = !1,
    sn = null;

function bm(e, t) {
    var n = Yt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function _f(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _t = e, Ot = Jn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _t = e, Ot = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = br !== null ? { id: Pn, overflow: $n } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _t = e, Ot = null, !0) : !1;
        default:
            return !1
    }
}

function Bu(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 }

function Uu(e) {
    if (Te) {
        var t = Ot;
        if (t) {
            var n = t;
            if (!_f(e, t)) {
                if (Bu(e)) throw Error(L(418));
                t = Jn(n.nextSibling);
                var r = _t;
                t && _f(e, t) ? bm(r, n) : (e.flags = e.flags & -4097 | 2, Te = !1, _t = e)
            }
        } else {
            if (Bu(e)) throw Error(L(418));
            e.flags = e.flags & -4097 | 2, Te = !1, _t = e
        }
    }
}

function Lf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    _t = e
}

function cl(e) {
    if (e !== _t) return !1;
    if (!Te) return Lf(e), Te = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zu(e.type, e.memoizedProps)), t && (t = Ot)) { if (Bu(e)) throw Cm(), Error(L(418)); for (; t;) bm(e, t), t = Jn(t.nextSibling) }
    if (Lf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(L(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) { Ot = Jn(e.nextSibling); break e }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ot = null
        }
    } else Ot = _t ? Jn(e.stateNode.nextSibling) : null;
    return !0
}

function Cm() { for (var e = Ot; e;) e = Jn(e.nextSibling) }

function fo() { Ot = _t = null, Te = !1 }

function Vc(e) { sn === null ? sn = [e] : sn.push(e) }
var Ky = Dn.ReactCurrentBatchConfig;

function on(e, t) { if (e && e.defaultProps) { t = Ie({}, t), e = e.defaultProps; for (var n in e) t[n] === void 0 && (t[n] = e[n]); return t } return t }
var Jl = ar(null),
    es = null,
    Yr = null,
    Hc = null;

function Kc() { Hc = Yr = es = null }

function Gc(e) {
    var t = Jl.current;
    Ce(Jl), e._currentValue = t
}

function Wu(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function oo(e, t) { es = e, Hc = Yr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (St = !0), e.firstContext = null) }

function Qt(e) {
    var t = e._currentValue;
    if (Hc !== e)
        if (e = { context: e, memoizedValue: t, next: null }, Yr === null) {
            if (es === null) throw Error(L(308));
            Yr = e, es.dependencies = { lanes: 0, firstContext: e }
        } else Yr = Yr.next = e;
    return t
}
var gr = null;

function Xc(e) { gr === null ? gr = [e] : gr.push(e) }

function Em(e, t, n, r) { var o = t.interleaved; return o === null ? (n.next = n, Xc(t)) : (n.next = o.next, o.next = n), t.interleaved = n, On(e, r) }

function On(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null }
var Wn = !1;

function Yc(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

function km(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

function In(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } }

function er(e, t, n) { var r = e.updateQueue; if (r === null) return null; if (r = r.shared, le & 2) { var o = r.pending; return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, On(e, n) } return o = r.interleaved, o === null ? (t.next = t, Xc(r)) : (t.next = o.next, o.next = t), r.interleaved = t, On(e, n) }

function Tl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, _c(e, n)
    }
}

function Df(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                i === null ? o = i = l : i = i.next = l, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ts(e, t, n, r) {
    var o = e.updateQueue;
    Wn = !1;
    var i = o.firstBaseUpdate,
        l = o.lastBaseUpdate,
        s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var a = s,
            u = a.next;
        a.next = null, l === null ? i = u : l.next = u, l = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var d = o.baseState;
        l = 0, c = u = a = null, s = i;
        do {
            var p = s.lane,
                x = s.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = { eventTime: x, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
                e: {
                    var S = e,
                        y = s;
                    switch (p = t, x = n, y.tag) {
                        case 1:
                            if (S = y.payload, typeof S == "function") { d = S.call(x, d, p); break e }
                            d = S;
                            break e;
                        case 3:
                            S.flags = S.flags & -65537 | 128;
                        case 0:
                            if (S = y.payload, p = typeof S == "function" ? S.call(x, d, p) : S, p == null) break e;
                            d = Ie({}, d, p);
                            break e;
                        case 2:
                            Wn = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [s] : p.push(s))
            } else x = { eventTime: x, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = x, a = d) : c = c.next = x, l |= p;
            if (s = s.next, s === null) {
                if (s = o.shared.pending, s === null) break;
                p = s, s = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do l |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        Er |= l, e.lanes = l, e.memoizedState = d
    }
}

function zf(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(L(191, o));
                o.call(r)
            }
        }
}
var Rm = new Eh.Component().refs;

function Vu(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : Ie({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n) }
var $s = {
    isMounted: function(e) { return (e = e._reactInternals) ? Ir(e) === e : !1 },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ht(),
            o = nr(e),
            i = In(r, o);
        i.payload = t, n != null && (i.callback = n), t = er(e, i, o), t !== null && (un(t, e, o, r), Tl(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ht(),
            o = nr(e),
            i = In(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = er(e, i, o), t !== null && (un(t, e, o, r), Tl(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ht(),
            r = nr(e),
            o = In(n, r);
        o.tag = 2, t != null && (o.callback = t), t = er(e, o, r), t !== null && (un(t, e, r, n), Tl(t, e, r))
    }
};

function Af(e, t, n, r, o, i, l) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !wi(n, r) || !wi(o, i) : !0 }

function Tm(e, t, n) {
    var r = !1,
        o = ir,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Qt(i) : (o = Ct(t) ? wr : at.current, r = t.contextTypes, i = (r = r != null) ? co(e, o) : ir), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = $s, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Ff(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $s.enqueueReplaceState(t, t.state, null) }

function Hu(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = Rm, Yc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Qt(i) : (i = Ct(t) ? wr : at.current, o.context = co(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Vu(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && $s.enqueueReplaceState(o, o.state, null), ts(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Fo(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) { if (n.tag !== 1) throw Error(L(309)); var r = n.stateNode }
            if (!r) throw Error(L(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
                var s = o.refs;
                s === Rm && (s = o.refs = {}), l === null ? delete s[i] : s[i] = l
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(L(284));
        if (!n._owner) throw Error(L(290, e))
    }
    return e
}

function dl(e, t) { throw e = Object.prototype.toString.call(t), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) }

function jf(e) { var t = e._init; return t(e._payload) }

function Pm(e) {
    function t(g, h) {
        if (e) {
            var m = g.deletions;
            m === null ? (g.deletions = [h], g.flags |= 16) : m.push(h)
        }
    }

    function n(g, h) { if (!e) return null; for (; h !== null;) t(g, h), h = h.sibling; return null }

    function r(g, h) { for (g = new Map; h !== null;) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling; return g }

    function o(g, h) { return g = rr(g, h), g.index = 0, g.sibling = null, g }

    function i(g, h, m) { return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < h ? (g.flags |= 2, h) : m) : (g.flags |= 2, h)) : (g.flags |= 1048576, h) }

    function l(g) { return e && g.alternate === null && (g.flags |= 2), g }

    function s(g, h, m, v) { return h === null || h.tag !== 6 ? (h = Qa(m, g.mode, v), h.return = g, h) : (h = o(h, m), h.return = g, h) }

    function a(g, h, m, v) { var b = m.type; return b === Br ? c(g, h, m.props.children, v, m.key) : h !== null && (h.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Un && jf(b) === h.type) ? (v = o(h, m.props), v.ref = Fo(g, h, m), v.return = g, v) : (v = Ol(m.type, m.key, m.props, null, g.mode, v), v.ref = Fo(g, h, m), v.return = g, v) }

    function u(g, h, m, v) { return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Za(m, g.mode, v), h.return = g, h) : (h = o(h, m.children || []), h.return = g, h) }

    function c(g, h, m, v, b) { return h === null || h.tag !== 7 ? (h = Sr(m, g.mode, v, b), h.return = g, h) : (h = o(h, m), h.return = g, h) }

    function d(g, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = Qa("" + h, g.mode, m), h.return = g, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case el:
                    return m = Ol(h.type, h.key, h.props, null, g.mode, m), m.ref = Fo(g, null, h), m.return = g, m;
                case jr:
                    return h = Za(h, g.mode, m), h.return = g, h;
                case Un:
                    var v = h._init;
                    return d(g, v(h._payload), m)
            }
            if (Xo(h) || _o(h)) return h = Sr(h, g.mode, m, null), h.return = g, h;
            dl(g, h)
        }
        return null
    }

    function p(g, h, m, v) {
        var b = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return b !== null ? null : s(g, h, "" + m, v);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case el:
                    return m.key === b ? a(g, h, m, v) : null;
                case jr:
                    return m.key === b ? u(g, h, m, v) : null;
                case Un:
                    return b = m._init, p(g, h, b(m._payload), v)
            }
            if (Xo(m) || _o(m)) return b !== null ? null : c(g, h, m, v, null);
            dl(g, m)
        }
        return null
    }

    function x(g, h, m, v, b) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return g = g.get(m) || null, s(h, g, "" + v, b);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case el:
                    return g = g.get(v.key === null ? m : v.key) || null, a(h, g, v, b);
                case jr:
                    return g = g.get(v.key === null ? m : v.key) || null, u(h, g, v, b);
                case Un:
                    var C = v._init;
                    return x(g, h, m, C(v._payload), b)
            }
            if (Xo(v) || _o(v)) return g = g.get(m) || null, c(h, g, v, b, null);
            dl(h, v)
        }
        return null
    }

    function S(g, h, m, v) {
        for (var b = null, C = null, w = h, T = h = 0, M = null; w !== null && T < m.length; T++) {
            w.index > T ? (M = w, w = null) : M = w.sibling;
            var P = p(g, w, m[T], v);
            if (P === null) { w === null && (w = M); break }
            e && w && P.alternate === null && t(g, w), h = i(P, h, T), C === null ? b = P : C.sibling = P, C = P, w = M
        }
        if (T === m.length) return n(g, w), Te && dr(g, T), b;
        if (w === null) { for (; T < m.length; T++) w = d(g, m[T], v), w !== null && (h = i(w, h, T), C === null ? b = w : C.sibling = w, C = w); return Te && dr(g, T), b }
        for (w = r(g, w); T < m.length; T++) M = x(w, g, T, m[T], v), M !== null && (e && M.alternate !== null && w.delete(M.key === null ? T : M.key), h = i(M, h, T), C === null ? b = M : C.sibling = M, C = M);
        return e && w.forEach(function(O) { return t(g, O) }), Te && dr(g, T), b
    }

    function y(g, h, m, v) {
        var b = _o(m);
        if (typeof b != "function") throw Error(L(150));
        if (m = b.call(m), m == null) throw Error(L(151));
        for (var C = b = null, w = h, T = h = 0, M = null, P = m.next(); w !== null && !P.done; T++, P = m.next()) {
            w.index > T ? (M = w, w = null) : M = w.sibling;
            var O = p(g, w, P.value, v);
            if (O === null) { w === null && (w = M); break }
            e && w && O.alternate === null && t(g, w), h = i(O, h, T), C === null ? b = O : C.sibling = O, C = O, w = M
        }
        if (P.done) return n(g, w), Te && dr(g, T), b;
        if (w === null) { for (; !P.done; T++, P = m.next()) P = d(g, P.value, v), P !== null && (h = i(P, h, T), C === null ? b = P : C.sibling = P, C = P); return Te && dr(g, T), b }
        for (w = r(g, w); !P.done; T++, P = m.next()) P = x(w, g, T, P.value, v), P !== null && (e && P.alternate !== null && w.delete(P.key === null ? T : P.key), h = i(P, h, T), C === null ? b = P : C.sibling = P, C = P);
        return e && w.forEach(function(F) { return t(g, F) }), Te && dr(g, T), b
    }

    function E(g, h, m, v) {
        if (typeof m == "object" && m !== null && m.type === Br && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case el:
                    e: {
                        for (var b = m.key, C = h; C !== null;) {
                            if (C.key === b) {
                                if (b = m.type, b === Br) { if (C.tag === 7) { n(g, C.sibling), h = o(C, m.props.children), h.return = g, g = h; break e } } else if (C.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Un && jf(b) === C.type) { n(g, C.sibling), h = o(C, m.props), h.ref = Fo(g, C, m), h.return = g, g = h; break e }
                                n(g, C);
                                break
                            } else t(g, C);
                            C = C.sibling
                        }
                        m.type === Br ? (h = Sr(m.props.children, g.mode, v, m.key), h.return = g, g = h) : (v = Ol(m.type, m.key, m.props, null, g.mode, v), v.ref = Fo(g, h, m), v.return = g, g = v)
                    }
                    return l(g);
                case jr:
                    e: {
                        for (C = m.key; h !== null;) {
                            if (h.key === C)
                                if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) { n(g, h.sibling), h = o(h, m.children || []), h.return = g, g = h; break e } else { n(g, h); break }
                            else t(g, h);
                            h = h.sibling
                        }
                        h = Za(m, g.mode, v),
                        h.return = g,
                        g = h
                    }
                    return l(g);
                case Un:
                    return C = m._init, E(g, h, C(m._payload), v)
            }
            if (Xo(m)) return S(g, h, m, v);
            if (_o(m)) return y(g, h, m, v);
            dl(g, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, m), h.return = g, g = h) : (n(g, h), h = Qa(m, g.mode, v), h.return = g, g = h), l(g)) : n(g, h)
    }
    return E
}
var po = Pm(!0),
    $m = Pm(!1),
    Ui = {},
    Cn = ar(Ui),
    ki = ar(Ui),
    Ri = ar(Ui);

function vr(e) { if (e === Ui) throw Error(L(174)); return e }

function qc(e, t) {
    switch (Se(Ri, t), Se(ki, e), Se(Cn, Ui), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Cu(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Cu(t, e)
    }
    Ce(Cn), Se(Cn, t)
}

function ho() { Ce(Cn), Ce(ki), Ce(Ri) }

function Im(e) {
    vr(Ri.current);
    var t = vr(Cn.current),
        n = Cu(t, e.type);
    t !== n && (Se(ki, e), Se(Cn, n))
}

function Qc(e) { ki.current === e && (Ce(Cn), Ce(ki)) }
var Pe = ar(0);

function ns(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) { var n = t.memoizedState; if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if (t.flags & 128) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ha = [];

function Zc() {
    for (var e = 0; e < Ha.length; e++) Ha[e]._workInProgressVersionPrimary = null;
    Ha.length = 0
}
var Pl = Dn.ReactCurrentDispatcher,
    Ka = Dn.ReactCurrentBatchConfig,
    Cr = 0,
    $e = null,
    Ve = null,
    Ge = null,
    rs = !1,
    ri = !1,
    Ti = 0,
    Gy = 0;

function ot() { throw Error(L(321)) }

function Jc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!cn(e[n], t[n])) return !1;
    return !0
}

function ed(e, t, n, r, o, i) {
    if (Cr = i, $e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pl.current = e === null || e.memoizedState === null ? Qy : Zy, e = n(r, o), ri) {
        i = 0;
        do {
            if (ri = !1, Ti = 0, 25 <= i) throw Error(L(301));
            i += 1, Ge = Ve = null, t.updateQueue = null, Pl.current = Jy, e = n(r, o)
        } while (ri)
    }
    if (Pl.current = os, t = Ve !== null && Ve.next !== null, Cr = 0, Ge = Ve = $e = null, rs = !1, t) throw Error(L(300));
    return e
}

function td() { var e = Ti !== 0; return Ti = 0, e }

function vn() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Ge === null ? $e.memoizedState = Ge = e : Ge = Ge.next = e, Ge }

function Zt() {
    if (Ve === null) {
        var e = $e.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Ve.next;
    var t = Ge === null ? $e.memoizedState : Ge.next;
    if (t !== null) Ge = t, Ve = e;
    else {
        if (e === null) throw Error(L(310));
        Ve = e, e = { memoizedState: Ve.memoizedState, baseState: Ve.baseState, baseQueue: Ve.baseQueue, queue: Ve.queue, next: null }, Ge === null ? $e.memoizedState = Ge = e : Ge = Ge.next = e
    }
    return Ge
}

function Pi(e, t) { return typeof t == "function" ? t(e) : t }

function Ga(e) {
    var t = Zt(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = Ve,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = i.next, i.next = l
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var s = l = null,
            a = null,
            u = i;
        do {
            var c = u.lane;
            if ((Cr & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                a === null ? (s = a = d, l = r) : a = a.next = d, $e.lanes |= c, Er |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? l = r : a.next = s, cn(r, t.memoizedState) || (St = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, $e.lanes |= i, Er |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Xa(e) {
    var t = Zt(),
        n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do i = e(i, l.action), l = l.next; while (l !== o);
        cn(i, t.memoizedState) || (St = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Mm() {}

function Nm(e, t) {
    var n = $e,
        r = Zt(),
        o = t(),
        i = !cn(r.memoizedState, o);
    if (i && (r.memoizedState = o, St = !0), r = r.queue, nd(Lm.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ge !== null && Ge.memoizedState.tag & 1) {
        if (n.flags |= 2048, $i(9, _m.bind(null, n, r, o, t), void 0, null), Ye === null) throw Error(L(349));
        Cr & 30 || Om(n, t, o)
    }
    return o
}

function Om(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)) }

function _m(e, t, n, r) { t.value = n, t.getSnapshot = r, Dm(t) && zm(e) }

function Lm(e, t, n) { return n(function() { Dm(t) && zm(e) }) }

function Dm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try { var n = t(); return !cn(e, n) } catch { return !0 }
}

function zm(e) {
    var t = On(e, 1);
    t !== null && un(t, e, 1, -1)
}

function Bf(e) { var t = vn(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pi, lastRenderedState: e }, t.queue = e, e = e.dispatch = qy.bind(null, $e, e), [t.memoizedState, e] }

function $i(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e }

function Am() { return Zt().memoizedState }

function $l(e, t, n, r) {
    var o = vn();
    $e.flags |= e, o.memoizedState = $i(1 | t, n, void 0, r === void 0 ? null : r)
}

function Is(e, t, n, r) {
    var o = Zt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ve !== null) { var l = Ve.memoizedState; if (i = l.destroy, r !== null && Jc(r, l.deps)) { o.memoizedState = $i(t, n, i, r); return } }
    $e.flags |= e, o.memoizedState = $i(1 | t, n, i, r)
}

function Uf(e, t) { return $l(8390656, 8, e, t) }

function nd(e, t) { return Is(2048, 8, e, t) }

function Fm(e, t) { return Is(4, 2, e, t) }

function jm(e, t) { return Is(4, 4, e, t) }

function Bm(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() { t(null) };
    if (t != null) return e = e(), t.current = e,
        function() { t.current = null }
}

function Um(e, t, n) { return n = n != null ? n.concat([e]) : null, Is(4, 4, Bm.bind(null, t, e), n) }

function rd() {}

function Wm(e, t) {
    var n = Zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Jc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Vm(e, t) {
    var n = Zt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Jc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Hm(e, t, n) { return Cr & 21 ? (cn(n, t) || (n = Xh(), $e.lanes |= n, Er |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, St = !0), e.memoizedState = n) }

function Xy(e, t) {
    var n = he;
    he = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ka.transition;
    Ka.transition = {};
    try { e(!1), t() } finally { he = n, Ka.transition = r }
}

function Km() { return Zt().memoizedState }

function Yy(e, t, n) {
    var r = nr(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Gm(e)) Xm(t, n);
    else if (n = Em(e, t, n, r), n !== null) {
        var o = ht();
        un(n, e, r, o), Ym(n, t, r)
    }
}

function qy(e, t, n) {
    var r = nr(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Gm(e)) Xm(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var l = t.lastRenderedState,
                s = i(l, n);
            if (o.hasEagerState = !0, o.eagerState = s, cn(s, l)) {
                var a = t.interleaved;
                a === null ? (o.next = o, Xc(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Em(e, t, o, r), n !== null && (o = ht(), un(n, e, r, o), Ym(n, t, r))
    }
}

function Gm(e) { var t = e.alternate; return e === $e || t !== null && t === $e }

function Xm(e, t) {
    ri = rs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ym(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, _c(e, n)
    }
}
var os = { readContext: Qt, useCallback: ot, useContext: ot, useEffect: ot, useImperativeHandle: ot, useInsertionEffect: ot, useLayoutEffect: ot, useMemo: ot, useReducer: ot, useRef: ot, useState: ot, useDebugValue: ot, useDeferredValue: ot, useTransition: ot, useMutableSource: ot, useSyncExternalStore: ot, useId: ot, unstable_isNewReconciler: !1 },
    Qy = {
        readContext: Qt,
        useCallback: function(e, t) { return vn().memoizedState = [e, t === void 0 ? null : t], e },
        useContext: Qt,
        useEffect: Uf,
        useImperativeHandle: function(e, t, n) { return n = n != null ? n.concat([e]) : null, $l(4194308, 4, Bm.bind(null, t, e), n) },
        useLayoutEffect: function(e, t) { return $l(4194308, 4, e, t) },
        useInsertionEffect: function(e, t) { return $l(4, 2, e, t) },
        useMemo: function(e, t) { var n = vn(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e },
        useReducer: function(e, t, n) { var r = vn(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Yy.bind(null, $e, e), [r.memoizedState, e] },
        useRef: function(e) { var t = vn(); return e = { current: e }, t.memoizedState = e },
        useState: Bf,
        useDebugValue: rd,
        useDeferredValue: function(e) { return vn().memoizedState = e },
        useTransition: function() {
            var e = Bf(!1),
                t = e[0];
            return e = Xy.bind(null, e[1]), vn().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = $e,
                o = vn();
            if (Te) {
                if (n === void 0) throw Error(L(407));
                n = n()
            } else {
                if (n = t(), Ye === null) throw Error(L(349));
                Cr & 30 || Om(r, t, n)
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return o.queue = i, Uf(Lm.bind(null, r, i, e), [e]), r.flags |= 2048, $i(9, _m.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = vn(),
                t = Ye.identifierPrefix;
            if (Te) {
                var n = $n,
                    r = Pn;
                n = (r & ~(1 << 32 - an(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ti++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Gy++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Zy = {
        readContext: Qt,
        useCallback: Wm,
        useContext: Qt,
        useEffect: nd,
        useImperativeHandle: Um,
        useInsertionEffect: Fm,
        useLayoutEffect: jm,
        useMemo: Vm,
        useReducer: Ga,
        useRef: Am,
        useState: function() { return Ga(Pi) },
        useDebugValue: rd,
        useDeferredValue: function(e) { var t = Zt(); return Hm(t, Ve.memoizedState, e) },
        useTransition: function() {
            var e = Ga(Pi)[0],
                t = Zt().memoizedState;
            return [e, t]
        },
        useMutableSource: Mm,
        useSyncExternalStore: Nm,
        useId: Km,
        unstable_isNewReconciler: !1
    },
    Jy = {
        readContext: Qt,
        useCallback: Wm,
        useContext: Qt,
        useEffect: nd,
        useImperativeHandle: Um,
        useInsertionEffect: Fm,
        useLayoutEffect: jm,
        useMemo: Vm,
        useReducer: Xa,
        useRef: Am,
        useState: function() { return Xa(Pi) },
        useDebugValue: rd,
        useDeferredValue: function(e) { var t = Zt(); return Ve === null ? t.memoizedState = e : Hm(t, Ve.memoizedState, e) },
        useTransition: function() {
            var e = Xa(Pi)[0],
                t = Zt().memoizedState;
            return [e, t]
        },
        useMutableSource: Mm,
        useSyncExternalStore: Nm,
        useId: Km,
        unstable_isNewReconciler: !1
    };

function mo(e, t) {
    try {
        var n = "",
            r = t;
        do n += T0(r), r = r.return; while (r);
        var o = n
    } catch (i) { o = `
Error generating stack: ` + i.message + `
` + i.stack }
    return { value: e, source: t, stack: o, digest: null }
}

function Ya(e, t, n) { return { value: e, source: null, stack: n ? n : null, digest: t ? t : null } }

function Ku(e, t) { try { console.error(t.value) } catch (n) { setTimeout(function() { throw n }) } }
var e1 = typeof WeakMap == "function" ? WeakMap : Map;

function qm(e, t, n) { n = In(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function() { ls || (ls = !0, nc = r), Ku(e, t) }, n }

function Qm(e, t, n) {
    n = In(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() { return r(o) }, n.callback = function() { Ku(e, t) }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Ku(e, t), typeof r != "function" && (tr === null ? tr = new Set([this]) : tr.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" })
    }), n
}

function Wf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new e1;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = h1.bind(null, e, t, n), t.then(e, e))
}

function Vf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Hf(e, t, n, r, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = In(-1, 1), t.tag = 2, er(n, t, 1))), n.lanes |= 1), e) }
var t1 = Dn.ReactCurrentOwner,
    St = !1;

function pt(e, t, n, r) { t.child = e === null ? $m(t, null, n, r) : po(t, e.child, n, r) }

function Kf(e, t, n, r, o) { n = n.render; var i = t.ref; return oo(t, o), r = ed(e, t, n, r, i, o), n = td(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, _n(e, t, o)) : (Te && n && Uc(t), t.flags |= 1, pt(e, t, r, o), t.child) }

function Gf(e, t, n, r, o) { if (e === null) { var i = n.type; return typeof i == "function" && !dd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Zm(e, t, i, r, o)) : (e = Ol(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e) } if (i = e.child, !(e.lanes & o)) { var l = i.memoizedProps; if (n = n.compare, n = n !== null ? n : wi, n(l, r) && e.ref === t.ref) return _n(e, t, o) } return t.flags |= 1, e = rr(i, r), e.ref = t.ref, e.return = t, t.child = e }

function Zm(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (wi(i, r) && e.ref === t.ref)
            if (St = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (St = !0);
            else return t.lanes = e.lanes, _n(e, t, o)
    }
    return Gu(e, t, n, r, o)
}

function Jm(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(Qr, Mt), Mt |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Se(Qr, Mt), Mt |= e, null;
            t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Se(Qr, Mt), Mt |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Se(Qr, Mt), Mt |= r;
    return pt(e, t, o, n), t.child
}

function eg(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Gu(e, t, n, r, o) { var i = Ct(n) ? wr : at.current; return i = co(t, i), oo(t, o), n = ed(e, t, n, r, i, o), r = td(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, _n(e, t, o)) : (Te && r && Uc(t), t.flags |= 1, pt(e, t, n, o), t.child) }

function Xf(e, t, n, r, o) {
    if (Ct(n)) {
        var i = !0;
        ql(t)
    } else i = !1;
    if (oo(t, o), t.stateNode === null) Il(e, t), Tm(t, n, r), Hu(t, n, r, o), r = !0;
    else if (e === null) {
        var l = t.stateNode,
            s = t.memoizedProps;
        l.props = s;
        var a = l.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Qt(u) : (u = Ct(n) ? wr : at.current, u = co(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && Ff(t, l, r, u), Wn = !1;
        var p = t.memoizedState;
        l.state = p, ts(t, r, l, o), a = t.memoizedState, s !== r || p !== a || bt.current || Wn ? (typeof c == "function" && (Vu(t, n, c, r), a = t.memoizedState), (s = Wn || Af(t, n, s, r, p, a, u)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, km(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : on(t.type, s), l.props = u, d = t.pendingProps, p = l.context, a = n.contextType, typeof a == "object" && a !== null ? a = Qt(a) : (a = Ct(n) ? wr : at.current, a = co(t, a));
        var x = n.getDerivedStateFromProps;
        (c = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || p !== a) && Ff(t, l, r, a), Wn = !1, p = t.memoizedState, l.state = p, ts(t, r, l, o);
        var S = t.memoizedState;
        s !== d || p !== S || bt.current || Wn ? (typeof x == "function" && (Vu(t, n, x, r), S = t.memoizedState), (u = Wn || Af(t, n, u, r, p, S, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, S, a), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, S, a)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), l.props = r, l.state = S, l.context = a, r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Xu(e, t, n, r, i, o)
}

function Xu(e, t, n, r, o, i) {
    eg(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return o && Of(t, n, !1), _n(e, t, i);
    r = t.stateNode, t1.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = po(t, e.child, null, i), t.child = po(t, null, s, i)) : pt(e, t, s, i), t.memoizedState = r.state, o && Of(t, n, !0), t.child
}

function tg(e) {
    var t = e.stateNode;
    t.pendingContext ? Nf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nf(e, t.context, !1), qc(e, t.containerInfo)
}

function Yf(e, t, n, r, o) { return fo(), Vc(o), t.flags |= 256, pt(e, t, n, r), t.child }
var Yu = { dehydrated: null, treeContext: null, retryLane: 0 };

function qu(e) { return { baseLanes: e, cachePool: null, transitions: null } }

function ng(e, t, n) {
    var r = t.pendingProps,
        o = Pe.current,
        i = !1,
        l = (t.flags & 128) !== 0,
        s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Se(Pe, o & 1), e === null) return Uu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Os(l, r, 0, null), e = Sr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = qu(n), t.memoizedState = Yu, e) : od(t, l));
    if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return n1(e, t, l, r, s, o, n);
    if (i) { i = r.fallback, l = t.mode, o = e.child, s = o.sibling; var a = { mode: "hidden", children: r.children }; return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = rr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = rr(s, i) : (i = Sr(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? qu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Yu, r }
    return i = e.child, e = i.sibling, r = rr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function od(e, t) { return t = Os({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t }

function fl(e, t, n, r) { return r !== null && Vc(r), po(t, e.child, null, n), e = od(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e }

function n1(e, t, n, r, o, i, l) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Ya(Error(L(422))), fl(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Os({ mode: "visible", children: r.children }, o, 0, null), i = Sr(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && po(t, e.child, null, l), t.child.memoizedState = qu(l), t.memoizedState = Yu, i);
    if (!(t.mode & 1)) return fl(e, t, l, null);
    if (o.data === "$!") { if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst; return r = s, i = Error(L(419)), r = Ya(i, r, void 0), fl(e, t, l, r) }
    if (s = (l & e.childLanes) !== 0, St || s) {
        if (r = Ye, r !== null) {
            switch (l & -l) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, On(e, o), un(r, e, o, -1))
        }
        return cd(), r = Ya(Error(L(421))), fl(e, t, l, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = m1.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ot = Jn(o.nextSibling), _t = t, Te = !0, sn = null, e !== null && (Kt[Gt++] = Pn, Kt[Gt++] = $n, Kt[Gt++] = br, Pn = e.id, $n = e.overflow, br = t), t = od(t, r.children), t.flags |= 4096, t)
}

function qf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Wu(e.return, t, n)
}

function qa(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function rg(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (pt(e, t, r.children, n), r = Pe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && qf(e, n, t);
            else if (e.tag === 19) qf(e, n, t);
            else if (e.child !== null) { e.child.return = e, e = e.child; continue }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Se(Pe, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ns(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), qa(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && ns(e) === null) { t.child = o; break }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            qa(t, !0, n, null, i);
            break;
        case "together":
            qa(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Il(e, t) {!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2) }

function _n(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Er |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(L(153));
    if (t.child !== null) {
        for (e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = rr(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function r1(e, t, n) {
    switch (t.tag) {
        case 3:
            tg(t), fo();
            break;
        case 5:
            Im(t);
            break;
        case 1:
            Ct(t.type) && ql(t);
            break;
        case 4:
            qc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            Se(Jl, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Se(Pe, Pe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ng(e, t, n) : (Se(Pe, Pe.current & 1), e = _n(e, t, n), e !== null ? e.sibling : null);
            Se(Pe, Pe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return rg(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Se(Pe, Pe.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Jm(e, t, n)
    }
    return _n(e, t, n)
}
var og, Qu, ig, lg;
og = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) { n.child.return = n, n = n.child; continue }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Qu = function() {};
ig = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, vr(Cn.current);
        var i = null;
        switch (n) {
            case "input":
                o = xu(e, o), r = xu(e, r), i = [];
                break;
            case "select":
                o = Ie({}, o, { value: void 0 }), r = Ie({}, r, { value: void 0 }), i = [];
                break;
            case "textarea":
                o = bu(e, o), r = bu(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xl)
        }
        Eu(n, r);
        var l;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") { var s = o[u]; for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "") } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (hi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null))
                if (u === "style")
                    if (s) { for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = ""); for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]) } else n || (i || (i = []), i.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (hi.hasOwnProperty(u) ? (a != null && u === "onScroll" && we("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
lg = function(e, t, n, r) { n !== r && (t.flags |= 4) };

function jo(e, t) {
    if (!Te) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function o1(e, t, n) {
    var r = t.pendingProps;
    switch (Wc(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return it(t), null;
        case 1:
            return Ct(t.type) && Yl(), it(t), null;
        case 3:
            return r = t.stateNode, ho(), Ce(bt), Ce(at), Zc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (cl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, sn !== null && (ic(sn), sn = null))), Qu(e, t), it(t), null;
        case 5:
            Qc(t);
            var o = vr(Ri.current);
            if (n = t.type, e !== null && t.stateNode != null) ig(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) { if (t.stateNode === null) throw Error(L(166)); return it(t), null }
                if (e = vr(Cn.current), cl(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Sn] = t, r[Ei] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            we("cancel", r), we("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            we("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < qo.length; o++) we(qo[o], r);
                            break;
                        case "source":
                            we("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            we("error", r), we("load", r);
                            break;
                        case "details":
                            we("toggle", r);
                            break;
                        case "input":
                            of(r, i), we("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = { wasMultiple: !!i.multiple }, we("invalid", r);
                            break;
                        case "textarea":
                            sf(r, i), we("invalid", r)
                    }
                    Eu(n, i), o = null;
                    for (var l in i)
                        if (i.hasOwnProperty(l)) {
                            var s = i[l];
                            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ul(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ul(r.textContent, s, e), o = ["children", "" + s]) : hi.hasOwnProperty(l) && s != null && l === "onScroll" && we("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            tl(r), lf(r, i, !0);
                            break;
                        case "textarea":
                            tl(r), af(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Xl)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Sn] = t, e[Ei] = r, og(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (l = ku(n, r), n) {
                            case "dialog":
                                we("cancel", e), we("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                we("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < qo.length; o++) we(qo[o], e);
                                o = r;
                                break;
                            case "source":
                                we("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                we("error", e), we("load", e), o = r;
                                break;
                            case "details":
                                we("toggle", e), o = r;
                                break;
                            case "input":
                                of(e, r), o = xu(e, r), we("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ie({}, r, { value: void 0 }), we("invalid", e);
                                break;
                            case "textarea":
                                sf(e, r), o = bu(e, r), we("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Eu(n, o),
                        s = o;
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var a = s[i];
                                i === "style" ? Dh(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && _h(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && mi(e, a) : typeof a == "number" && mi(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (hi.hasOwnProperty(i) ? a != null && i === "onScroll" && we("scroll", e) : a != null && Pc(e, i, a, l))
                            }
                        switch (n) {
                            case "input":
                                tl(e), lf(e, r, !1);
                                break;
                            case "textarea":
                                tl(e), af(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + or(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? eo(e, !!r.multiple, i, !1) : r.defaultValue != null && eo(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Xl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return it(t), null;
        case 6:
            if (e && t.stateNode != null) lg(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
                if (n = vr(Ri.current), vr(Cn.current), cl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Sn] = t, (i = r.nodeValue !== n) && (e = _t, e !== null)) switch (e.tag) {
                        case 3:
                            ul(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ul(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Sn] = t, t.stateNode = r
            }
            return it(t), null;
        case 13:
            if (Ce(Pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Te && Ot !== null && t.mode & 1 && !(t.flags & 128)) Cm(), fo(), t.flags |= 98560, i = !1;
                else if (i = cl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(L(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(L(317));
                        i[Sn] = t
                    } else fo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    it(t), i = !1
                } else sn !== null && (ic(sn), sn = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Pe.current & 1 ? Ke === 0 && (Ke = 3) : cd())), t.updateQueue !== null && (t.flags |= 4), it(t), null);
        case 4:
            return ho(), Qu(e, t), e === null && bi(t.stateNode.containerInfo), it(t), null;
        case 10:
            return Gc(t.type._context), it(t), null;
        case 17:
            return Ct(t.type) && Yl(), it(t), null;
        case 19:
            if (Ce(Pe), i = t.memoizedState, i === null) return it(t), null;
            if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
                if (r) jo(i, !1);
                else {
                    if (Ke !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (l = ns(e), l !== null) { for (t.flags |= 128, jo(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling; return Se(Pe, Pe.current & 1 | 2), t.child }
                            e = e.sibling
                        }
                    i.tail !== null && Le() > go && (t.flags |= 128, r = !0, jo(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ns(l), e !== null) { if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), jo(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !Te) return it(t), null } else 2 * Le() - i.renderingStartTime > go && n !== 1073741824 && (t.flags |= 128, r = !0, jo(i, !1), t.lanes = 4194304);
                i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Le(), t.sibling = null, n = Pe.current, Se(Pe, r ? n & 1 | 2 : n & 1), t) : (it(t), null);
        case 22:
        case 23:
            return ud(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Mt & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(L(156, t.tag))
}

function i1(e, t) {
    switch (Wc(t), t.tag) {
        case 1:
            return Ct(t.type) && Yl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return ho(), Ce(bt), Ce(at), Zc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Qc(t), null;
        case 13:
            if (Ce(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(L(340));
                fo()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Ce(Pe), null;
        case 4:
            return ho(), null;
        case 10:
            return Gc(t.type._context), null;
        case 22:
        case 23:
            return ud(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var pl = !1,
    st = !1,
    l1 = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;

function qr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try { n(null) } catch (r) { Oe(e, t, r) } else n.current = null
}

function Zu(e, t, n) { try { n() } catch (r) { Oe(e, t, r) } }
var Qf = !1;

function s1(e, t) {
    if (Lu = Hl, e = cm(), Bc(e)) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try { n.nodeType, i.nodeType } catch { n = null; break e }
                var l = 0,
                    s = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    p = null;
                t: for (;;) {
                    for (var x; d !== n || o !== 0 && d.nodeType !== 3 || (s = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (a = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (x = d.firstChild) !== null;) p = d, d = x;
                    for (;;) {
                        if (d === e) break t;
                        if (p === n && ++u === o && (s = l), p === i && ++c === r && (a = l), (x = d.nextSibling) !== null) break;
                        d = p, p = d.parentNode
                    }
                    d = x
                }
                n = s === -1 || a === -1 ? null : { start: s, end: a }
            } else n = null
        }
        n = n || { start: 0, end: 0 }
    } else n = null;
    for (Du = { focusedElem: e, selectionRange: n }, Hl = !1, B = t; B !== null;)
        if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, B = e;
        else
            for (; B !== null;) {
                t = B;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var y = S.memoizedProps,
                                    E = S.memoizedState,
                                    g = t.stateNode,
                                    h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : on(t.type, y), E);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(L(163))
                    }
                } catch (v) { Oe(t, t.return, v) }
                if (e = t.sibling, e !== null) { e.return = t.return, B = e; break }
                B = t.return
            }
    return S = Qf, Qf = !1, S
}

function oi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Zu(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function Ms(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ju(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function sg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, sg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Sn], delete t[Ei], delete t[Fu], delete t[Wy], delete t[Vy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ag(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

function Zf(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || ag(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function ec(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (ec(e, t, n), e = e.sibling; e !== null;) ec(e, t, n), e = e.sibling
}

function tc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (tc(e, t, n), e = e.sibling; e !== null;) tc(e, t, n), e = e.sibling
}
var Je = null,
    ln = !1;

function jn(e, t, n) { for (n = n.child; n !== null;) ug(e, t, n), n = n.sibling }

function ug(e, t, n) {
    if (bn && typeof bn.onCommitFiberUnmount == "function") try { bn.onCommitFiberUnmount(Cs, n) } catch {}
    switch (n.tag) {
        case 5:
            st || qr(n, t);
        case 6:
            var r = Je,
                o = ln;
            Je = null, jn(e, t, n), Je = r, ln = o, Je !== null && (ln ? (e = Je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Je.removeChild(n.stateNode));
            break;
        case 18:
            Je !== null && (ln ? (e = Je, n = n.stateNode, e.nodeType === 8 ? Wa(e.parentNode, n) : e.nodeType === 1 && Wa(e, n), xi(e)) : Wa(Je, n.stateNode));
            break;
        case 4:
            r = Je, o = ln, Je = n.stateNode.containerInfo, ln = !0, jn(e, t, n), Je = r, ln = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!st && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        l = i.destroy;
                    i = i.tag, l !== void 0 && (i & 2 || i & 4) && Zu(n, t, l), o = o.next
                } while (o !== r)
            }
            jn(e, t, n);
            break;
        case 1:
            if (!st && (qr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try { r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount() } catch (s) { Oe(n, t, s) }
            jn(e, t, n);
            break;
        case 21:
            jn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (st = (r = st) || n.memoizedState !== null, jn(e, t, n), st = r) : jn(e, t, n);
            break;
        default:
            jn(e, t, n)
    }
}

function Jf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new l1), t.forEach(function(r) {
            var o = g1.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function rn(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    l = t,
                    s = l;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            Je = s.stateNode, ln = !1;
                            break e;
                        case 3:
                            Je = s.stateNode.containerInfo, ln = !0;
                            break e;
                        case 4:
                            Je = s.stateNode.containerInfo, ln = !0;
                            break e
                    }
                    s = s.return
                }
                if (Je === null) throw Error(L(160));
                ug(i, l, o), Je = null, ln = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null
            } catch (u) { Oe(o, t, u) }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) cg(t, e), t = t.sibling
}

function cg(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (rn(t, e), gn(e), r & 4) { try { oi(3, e, e.return), Ms(3, e) } catch (y) { Oe(e, e.return, y) } try { oi(5, e, e.return) } catch (y) { Oe(e, e.return, y) } }
            break;
        case 1:
            rn(t, e), gn(e), r & 512 && n !== null && qr(n, n.return);
            break;
        case 5:
            if (rn(t, e), gn(e), r & 512 && n !== null && qr(n, n.return), e.flags & 32) { var o = e.stateNode; try { mi(o, "") } catch (y) { Oe(e, e.return, y) } }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : i,
                    s = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    s === "input" && i.type === "radio" && i.name != null && Mh(o, i), ku(s, l);
                    var u = ku(s, i);
                    for (l = 0; l < a.length; l += 2) {
                        var c = a[l],
                            d = a[l + 1];
                        c === "style" ? Dh(o, d) : c === "dangerouslySetInnerHTML" ? _h(o, d) : c === "children" ? mi(o, d) : Pc(o, c, d, u)
                    }
                    switch (s) {
                        case "input":
                            Su(o, i);
                            break;
                        case "textarea":
                            Nh(o, i);
                            break;
                        case "select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var x = i.value;
                            x != null ? eo(o, !!i.multiple, x, !1) : p !== !!i.multiple && (i.defaultValue != null ? eo(o, !!i.multiple, i.defaultValue, !0) : eo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ei] = i
                } catch (y) { Oe(e, e.return, y) }
            }
            break;
        case 6:
            if (rn(t, e), gn(e), r & 4) {
                if (e.stateNode === null) throw Error(L(162));
                o = e.stateNode, i = e.memoizedProps;
                try { o.nodeValue = i } catch (y) { Oe(e, e.return, y) }
            }
            break;
        case 3:
            if (rn(t, e), gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try { xi(t.containerInfo) } catch (y) { Oe(e, e.return, y) }
            break;
        case 4:
            rn(t, e), gn(e);
            break;
        case 13:
            rn(t, e), gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (sd = Le())), r & 4 && Jf(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (st = (u = st) || c, rn(t, e), st = u) : rn(t, e), gn(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (B = e, c = e.child; c !== null;) {
                        for (d = B = c; B !== null;) {
                            switch (p = B, x = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    oi(4, p, p.return);
                                    break;
                                case 1:
                                    qr(p, p.return);
                                    var S = p.stateNode;
                                    if (typeof S.componentWillUnmount == "function") { r = p, n = p.return; try { t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount() } catch (y) { Oe(r, n, y) } }
                                    break;
                                case 5:
                                    qr(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) { tp(d); continue }
                            }
                            x !== null ? (x.return = p, B = x) : tp(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) { if (c === null) { c = d; try { o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, l = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Lh("display", l)) } catch (y) { Oe(e, e.return, y) } } } else if (d.tag === 6) { if (c === null) try { d.stateNode.nodeValue = u ? "" : d.memoizedProps } catch (y) { Oe(e, e.return, y) } } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) { d.child.return = d, d = d.child; continue }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            rn(t, e), gn(e), r & 4 && Jf(e);
            break;
        case 21:
            break;
        default:
            rn(t, e), gn(e)
    }
}

function gn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (ag(n)) { var r = n; break e }
                    n = n.return
                }
                throw Error(L(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (mi(o, ""), r.flags &= -33);
                    var i = Zf(e);
                    tc(e, i, o);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        s = Zf(e);
                    ec(e, s, l);
                    break;
                default:
                    throw Error(L(161))
            }
        }
        catch (a) { Oe(e, e.return, a) }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function a1(e, t, n) { B = e, dg(e) }

function dg(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null;) {
        var o = B,
            i = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || pl;
            if (!l) {
                var s = o.alternate,
                    a = s !== null && s.memoizedState !== null || st;
                s = pl;
                var u = st;
                if (pl = l, (st = a) && !u)
                    for (B = o; B !== null;) l = B, a = l.child, l.tag === 22 && l.memoizedState !== null ? np(o) : a !== null ? (a.return = l, B = a) : np(o);
                for (; i !== null;) B = i, dg(i), i = i.sibling;
                B = o, pl = s, st = u
            }
            ep(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : ep(e)
    }
}

function ep(e) {
    for (; B !== null;) {
        var t = B;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        st || Ms(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !st)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : on(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && zf(t, i, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            zf(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && xi(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(L(163))
                }
                st || t.flags & 512 && Ju(t)
            } catch (p) { Oe(t, t.return, p) }
        }
        if (t === e) { B = null; break }
        if (n = t.sibling, n !== null) { n.return = t.return, B = n; break }
        B = t.return
    }
}

function tp(e) {
    for (; B !== null;) {
        var t = B;
        if (t === e) { B = null; break }
        var n = t.sibling;
        if (n !== null) { n.return = t.return, B = n; break }
        B = t.return
    }
}

function np(e) {
    for (; B !== null;) {
        var t = B;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try { Ms(4, t) } catch (a) { Oe(t, n, a) }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") { var o = t.return; try { r.componentDidMount() } catch (a) { Oe(t, o, a) } }
                    var i = t.return;
                    try { Ju(t) } catch (a) { Oe(t, i, a) }
                    break;
                case 5:
                    var l = t.return;
                    try { Ju(t) } catch (a) { Oe(t, l, a) }
            }
        } catch (a) { Oe(t, t.return, a) }
        if (t === e) { B = null; break }
        var s = t.sibling;
        if (s !== null) { s.return = t.return, B = s; break }
        B = t.return
    }
}
var u1 = Math.ceil,
    is = Dn.ReactCurrentDispatcher,
    id = Dn.ReactCurrentOwner,
    qt = Dn.ReactCurrentBatchConfig,
    le = 0,
    Ye = null,
    je = null,
    tt = 0,
    Mt = 0,
    Qr = ar(0),
    Ke = 0,
    Ii = null,
    Er = 0,
    Ns = 0,
    ld = 0,
    ii = null,
    xt = null,
    sd = 0,
    go = 1 / 0,
    Rn = null,
    ls = !1,
    nc = null,
    tr = null,
    hl = !1,
    Yn = null,
    ss = 0,
    li = 0,
    rc = null,
    Ml = -1,
    Nl = 0;

function ht() { return le & 6 ? Le() : Ml !== -1 ? Ml : Ml = Le() }

function nr(e) { return e.mode & 1 ? le & 2 && tt !== 0 ? tt & -tt : Ky.transition !== null ? (Nl === 0 && (Nl = Xh()), Nl) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : tm(e.type)), e) : 1 }

function un(e, t, n, r) {
    if (50 < li) throw li = 0, rc = null, Error(L(185));
    Fi(e, n, r), (!(le & 2) || e !== Ye) && (e === Ye && (!(le & 2) && (Ns |= n), Ke === 4 && Kn(e, tt)), Et(e, r), n === 1 && le === 0 && !(t.mode & 1) && (go = Le() + 500, Ps && ur()))
}

function Et(e, t) {
    var n = e.callbackNode;
    K0(e, t);
    var r = Vl(e, e === Ye ? tt : 0);
    if (r === 0) n !== null && df(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && df(n), t === 1) e.tag === 0 ? Hy(rp.bind(null, e)) : Sm(rp.bind(null, e)), By(function() {!(le & 6) && ur() }), n = null;
        else {
            switch (Yh(r)) {
                case 1:
                    n = Oc;
                    break;
                case 4:
                    n = Kh;
                    break;
                case 16:
                    n = Wl;
                    break;
                case 536870912:
                    n = Gh;
                    break;
                default:
                    n = Wl
            }
            n = xg(n, fg.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function fg(e, t) {
    if (Ml = -1, Nl = 0, le & 6) throw Error(L(327));
    var n = e.callbackNode;
    if (io() && e.callbackNode !== n) return null;
    var r = Vl(e, e === Ye ? tt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = as(e, r);
    else {
        t = r;
        var o = le;
        le |= 2;
        var i = hg();
        (Ye !== e || tt !== t) && (Rn = null, go = Le() + 500, xr(e, t));
        do try { f1(); break } catch (s) { pg(e, s) }
        while (!0);
        Kc(), is.current = i, le = o, je !== null ? t = 0 : (Ye = null, tt = 0, t = Ke)
    }
    if (t !== 0) {
        if (t === 2 && (o = Iu(e), o !== 0 && (r = o, t = oc(e, o))), t === 1) throw n = Ii, xr(e, 0), Kn(e, r), Et(e, Le()), n;
        if (t === 6) Kn(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !c1(o) && (t = as(e, r), t === 2 && (i = Iu(e), i !== 0 && (r = i, t = oc(e, i))), t === 1)) throw n = Ii, xr(e, 0), Kn(e, r), Et(e, Le()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(L(345));
                case 2:
                    fr(e, xt, Rn);
                    break;
                case 3:
                    if (Kn(e, r), (r & 130023424) === r && (t = sd + 500 - Le(), 10 < t)) {
                        if (Vl(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) { ht(), e.pingedLanes |= e.suspendedLanes & o; break }
                        e.timeoutHandle = Au(fr.bind(null, e, xt, Rn), t);
                        break
                    }
                    fr(e, xt, Rn);
                    break;
                case 4:
                    if (Kn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var l = 31 - an(r);
                        i = 1 << l, l = t[l], l > o && (o = l), r &= ~i
                    }
                    if (r = o, r = Le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * u1(r / 1960)) - r, 10 < r) { e.timeoutHandle = Au(fr.bind(null, e, xt, Rn), r); break }
                    fr(e, xt, Rn);
                    break;
                case 5:
                    fr(e, xt, Rn);
                    break;
                default:
                    throw Error(L(329))
            }
        }
    }
    return Et(e, Le()), e.callbackNode === n ? fg.bind(null, e) : null
}

function oc(e, t) { var n = ii; return e.current.memoizedState.isDehydrated && (xr(e, t).flags |= 256), e = as(e, t), e !== 2 && (t = xt, xt = n, t !== null && ic(t)), e }

function ic(e) { xt === null ? xt = e : xt.push.apply(xt, e) }

function c1(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try { if (!cn(i(), o)) return !1 } catch { return !1 }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Kn(e, t) {
    for (t &= ~ld, t &= ~Ns, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - an(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function rp(e) {
    if (le & 6) throw Error(L(327));
    io();
    var t = Vl(e, 0);
    if (!(t & 1)) return Et(e, Le()), null;
    var n = as(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Iu(e);
        r !== 0 && (t = r, n = oc(e, r))
    }
    if (n === 1) throw n = Ii, xr(e, 0), Kn(e, t), Et(e, Le()), n;
    if (n === 6) throw Error(L(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, fr(e, xt, Rn), Et(e, Le()), null
}

function ad(e, t) {
    var n = le;
    le |= 1;
    try { return e(t) } finally { le = n, le === 0 && (go = Le() + 500, Ps && ur()) }
}

function kr(e) {
    Yn !== null && Yn.tag === 0 && !(le & 6) && io();
    var t = le;
    le |= 1;
    var n = qt.transition,
        r = he;
    try { if (qt.transition = null, he = 1, e) return e() } finally { he = r, qt.transition = n, le = t, !(le & 6) && ur() }
}

function ud() { Mt = Qr.current, Ce(Qr) }

function xr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jy(n)), je !== null)
        for (n = je.return; n !== null;) {
            var r = n;
            switch (Wc(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Yl();
                    break;
                case 3:
                    ho(), Ce(bt), Ce(at), Zc();
                    break;
                case 5:
                    Qc(r);
                    break;
                case 4:
                    ho();
                    break;
                case 13:
                    Ce(Pe);
                    break;
                case 19:
                    Ce(Pe);
                    break;
                case 10:
                    Gc(r.type._context);
                    break;
                case 22:
                case 23:
                    ud()
            }
            n = n.return
        }
    if (Ye = e, je = e = rr(e.current, null), tt = Mt = t, Ke = 0, Ii = null, ld = Ns = Er = 0, xt = ii = null, gr !== null) {
        for (t = 0; t < gr.length; t++)
            if (n = gr[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var l = i.next;
                    i.next = o, r.next = l
                }
                n.pending = r
            }
        gr = null
    }
    return e
}

function pg(e, t) {
    do {
        var n = je;
        try {
            if (Kc(), Pl.current = os, rs) {
                for (var r = $e.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                rs = !1
            }
            if (Cr = 0, Ge = Ve = $e = null, ri = !1, Ti = 0, id.current = null, n === null || n.return === null) { Ke = 1, Ii = t, je = null; break }
            e: {
                var i = e,
                    l = n.return,
                    s = n,
                    a = t;
                if (t = tt, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = s,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var x = Vf(l);
                    if (x !== null) {
                        x.flags &= -257, Hf(x, l, s, i, t), x.mode & 1 && Wf(i, u, t), t = x, a = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var y = new Set;
                            y.add(a), t.updateQueue = y
                        } else S.add(a);
                        break e
                    } else {
                        if (!(t & 1)) { Wf(i, u, t), cd(); break e }
                        a = Error(L(426))
                    }
                } else if (Te && s.mode & 1) { var E = Vf(l); if (E !== null) {!(E.flags & 65536) && (E.flags |= 256), Hf(E, l, s, i, t), Vc(mo(a, s)); break e } }
                i = a = mo(a, s),
                Ke !== 4 && (Ke = 2),
                ii === null ? ii = [i] : ii.push(i),
                i = l;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var g = qm(i, a, t);
                            Df(i, g);
                            break e;
                        case 1:
                            s = a;
                            var h = i.type,
                                m = i.stateNode;
                            if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (tr === null || !tr.has(m)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var v = Qm(i, s, t);
                                Df(i, v);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            gg(n)
        } catch (b) { t = b, je === n && n !== null && (je = n = n.return); continue }
        break
    } while (!0)
}

function hg() { var e = is.current; return is.current = os, e === null ? os : e }

function cd() {
    (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4), Ye === null || !(Er & 268435455) && !(Ns & 268435455) || Kn(Ye, tt)
}

function as(e, t) {
    var n = le;
    le |= 2;
    var r = hg();
    (Ye !== e || tt !== t) && (Rn = null, xr(e, t));
    do try { d1(); break } catch (o) { pg(e, o) }
    while (!0);
    if (Kc(), le = n, is.current = r, je !== null) throw Error(L(261));
    return Ye = null, tt = 0, Ke
}

function d1() { for (; je !== null;) mg(je) }

function f1() { for (; je !== null && !z0();) mg(je) }

function mg(e) {
    var t = yg(e.alternate, e, Mt);
    e.memoizedProps = e.pendingProps, t === null ? gg(e) : je = t, id.current = null
}

function gg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = i1(n, t), n !== null) { n.flags &= 32767, je = n; return }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else { Ke = 6, je = null; return }
        } else if (n = o1(n, t, Mt), n !== null) { je = n; return }
        if (t = t.sibling, t !== null) { je = t; return }
        je = t = e
    } while (t !== null);
    Ke === 0 && (Ke = 5)
}

function fr(e, t, n) {
    var r = he,
        o = qt.transition;
    try { qt.transition = null, he = 1, p1(e, t, n, r) } finally { qt.transition = o, he = r }
    return null
}

function p1(e, t, n, r) {
    do io(); while (Yn !== null);
    if (le & 6) throw Error(L(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(L(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (G0(e, i), e === Ye && (je = Ye = null, tt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || hl || (hl = !0, xg(Wl, function() { return io(), null })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = qt.transition, qt.transition = null;
        var l = he;
        he = 1;
        var s = le;
        le |= 4, id.current = null, s1(e, n), cg(n, e), Oy(Du), Hl = !!Lu, Du = Lu = null, e.current = n, a1(n), A0(), le = s, he = l, qt.transition = i
    } else e.current = n;
    if (hl && (hl = !1, Yn = e, ss = o), i = e.pendingLanes, i === 0 && (tr = null), B0(n.stateNode), Et(e, Le()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (ls) throw ls = !1, e = nc, nc = null, e;
    return ss & 1 && e.tag !== 0 && io(), i = e.pendingLanes, i & 1 ? e === rc ? li++ : (li = 0, rc = e) : li = 0, ur(), null
}

function io() {
    if (Yn !== null) {
        var e = Yh(ss),
            t = qt.transition,
            n = he;
        try {
            if (qt.transition = null, he = 16 > e ? 16 : e, Yn === null) var r = !1;
            else {
                if (e = Yn, Yn = null, ss = 0, le & 6) throw Error(L(331));
                var o = le;
                for (le |= 4, B = e.current; B !== null;) {
                    var i = B,
                        l = i.child;
                    if (B.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (B = u; B !== null;) {
                                    var c = B;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            oi(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, B = d;
                                    else
                                        for (; B !== null;) {
                                            c = B;
                                            var p = c.sibling,
                                                x = c.return;
                                            if (sg(c), c === u) { B = null; break }
                                            if (p !== null) { p.return = x, B = p; break }
                                            B = x
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var y = S.child;
                                if (y !== null) {
                                    S.child = null;
                                    do {
                                        var E = y.sibling;
                                        y.sibling = null, y = E
                                    } while (y !== null)
                                }
                            }
                            B = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && l !== null) l.return = i, B = l;
                    else e: for (; B !== null;) {
                        if (i = B, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                oi(9, i, i.return)
                        }
                        var g = i.sibling;
                        if (g !== null) { g.return = i.return, B = g; break e }
                        B = i.return
                    }
                }
                var h = e.current;
                for (B = h; B !== null;) {
                    l = B;
                    var m = l.child;
                    if (l.subtreeFlags & 2064 && m !== null) m.return = l, B = m;
                    else e: for (l = h; B !== null;) {
                        if (s = B, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ms(9, s)
                            }
                        } catch (b) { Oe(s, s.return, b) }
                        if (s === l) { B = null; break e }
                        var v = s.sibling;
                        if (v !== null) { v.return = s.return, B = v; break e }
                        B = s.return
                    }
                }
                if (le = o, ur(), bn && typeof bn.onPostCommitFiberRoot == "function") try { bn.onPostCommitFiberRoot(Cs, e) } catch {}
                r = !0
            }
            return r
        } finally { he = n, qt.transition = t }
    }
    return !1
}

function op(e, t, n) { t = mo(n, t), t = qm(e, t, 1), e = er(e, t, 1), t = ht(), e !== null && (Fi(e, 1, t), Et(e, t)) }

function Oe(e, t, n) {
    if (e.tag === 3) op(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) { op(t, e, n); break } else if (t.tag === 1) { var r = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tr === null || !tr.has(r))) { e = mo(n, e), e = Qm(t, e, 1), t = er(t, e, 1), e = ht(), t !== null && (Fi(t, 1, e), Et(t, e)); break } }
            t = t.return
        }
}

function h1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ht(), e.pingedLanes |= e.suspendedLanes & n, Ye === e && (tt & n) === n && (Ke === 4 || Ke === 3 && (tt & 130023424) === tt && 500 > Le() - sd ? xr(e, 0) : ld |= n), Et(e, t)
}

function vg(e, t) {
    t === 0 && (e.mode & 1 ? (t = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : t = 1);
    var n = ht();
    e = On(e, t), e !== null && (Fi(e, t, n), Et(e, n))
}

function m1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), vg(e, n)
}

function g1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(L(314))
    }
    r !== null && r.delete(t), vg(e, n)
}
var yg;
yg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || bt.current) St = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return St = !1, r1(e, t, n);
            St = !!(e.flags & 131072)
        }
    else St = !1, Te && t.flags & 1048576 && wm(t, Zl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Il(e, t), e = t.pendingProps;
            var o = co(t, at.current);
            oo(t, n), o = ed(null, t, r, e, o, n);
            var i = td();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ct(r) ? (i = !0, ql(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Yc(t), o.updater = $s, t.stateNode = o, o._reactInternals = t, Hu(t, r, e, n), t = Xu(null, t, r, !0, i, n)) : (t.tag = 0, Te && i && Uc(t), pt(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Il(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = y1(r), e = on(r, e), o) {
                    case 0:
                        t = Gu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Xf(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Kf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Gf(null, t, r, on(r.type, e), n);
                        break e
                }
                throw Error(L(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : on(r, o), Gu(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : on(r, o), Xf(e, t, r, o, n);
        case 3:
            e: {
                if (tg(t), e === null) throw Error(L(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                km(e, t),
                ts(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, i.isDehydrated)
                    if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) { o = mo(Error(L(423)), t), t = Yf(e, t, r, n, o); break e } else if (r !== o) { o = mo(Error(L(424)), t), t = Yf(e, t, r, n, o); break e } else
                    for (Ot = Jn(t.stateNode.containerInfo.firstChild), _t = t, Te = !0, sn = null, n = $m(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (fo(), r === o) { t = _n(e, t, n); break e }
                    pt(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Im(t), e === null && Uu(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, zu(r, o) ? l = null : i !== null && zu(r, i) && (t.flags |= 32), eg(e, t), pt(e, t, l, n), t.child;
        case 6:
            return e === null && Uu(t), null;
        case 13:
            return ng(e, t, n);
        case 4:
            return qc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = po(t, null, r, n) : pt(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : on(r, o), Kf(e, t, r, o, n);
        case 7:
            return pt(e, t, t.pendingProps, n), t.child;
        case 8:
            return pt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return pt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Se(Jl, r._currentValue), r._currentValue = l, i !== null)
                    if (cn(i.value, l)) { if (i.children === o.children && !bt.current) { t = _n(e, t, n); break e } } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var s = i.dependencies;
                            if (s !== null) {
                                l = i.child;
                                for (var a = s.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            a = In(-1, n & -n), a.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Wu(i.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (l = i.return, l === null) throw Error(L(341));
                                l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Wu(l, n, t), l = i.sibling
                            } else l = i.child;
                            if (l !== null) l.return = i;
                            else
                                for (l = i; l !== null;) {
                                    if (l === t) { l = null; break }
                                    if (i = l.sibling, i !== null) { i.return = l.return, l = i; break }
                                    l = l.return
                                }
                            i = l
                        }
                pt(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, oo(t, n), o = Qt(o), r = r(o), t.flags |= 1, pt(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = on(r, t.pendingProps), o = on(r.type, o), Gf(e, t, r, o, n);
        case 15:
            return Zm(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : on(r, o), Il(e, t), t.tag = 1, Ct(r) ? (e = !0, ql(t)) : e = !1, oo(t, n), Tm(t, r, o), Hu(t, r, o, n), Xu(null, t, r, !0, e, n);
        case 19:
            return rg(e, t, n);
        case 22:
            return Jm(e, t, n)
    }
    throw Error(L(156, t.tag))
};

function xg(e, t) { return Hh(e, t) }

function v1(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

function Yt(e, t, n, r) { return new v1(e, t, n, r) }

function dd(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

function y1(e) { if (typeof e == "function") return dd(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === Ic) return 11; if (e === Mc) return 14 } return 2 }

function rr(e, t) { var n = e.alternate; return n === null ? (n = Yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n }

function Ol(e, t, n, r, o, i) {
    var l = 2;
    if (r = e, typeof e == "function") dd(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case Br:
            return Sr(n.children, o, i, t);
        case $c:
            l = 8, o |= 8;
            break;
        case mu:
            return e = Yt(12, n, t, o | 2), e.elementType = mu, e.lanes = i, e;
        case gu:
            return e = Yt(13, n, t, o), e.elementType = gu, e.lanes = i, e;
        case vu:
            return e = Yt(19, n, t, o), e.elementType = vu, e.lanes = i, e;
        case Ph:
            return Os(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Rh:
                    l = 10;
                    break e;
                case Th:
                    l = 9;
                    break e;
                case Ic:
                    l = 11;
                    break e;
                case Mc:
                    l = 14;
                    break e;
                case Un:
                    l = 16, r = null;
                    break e
            }
            throw Error(L(130, e == null ? e : typeof e, ""))
    }
    return t = Yt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Sr(e, t, n, r) { return e = Yt(7, e, r, t), e.lanes = n, e }

function Os(e, t, n, r) { return e = Yt(22, e, r, t), e.elementType = Ph, e.lanes = n, e.stateNode = { isHidden: !1 }, e }

function Qa(e, t, n) { return e = Yt(6, e, null, t), e.lanes = n, e }

function Za(e, t, n) { return t = Yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t }

function x1(e, t, n, r, o) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Na(0), this.expirationTimes = Na(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Na(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null }

function fd(e, t, n, r, o, i, l, s, a) { return e = new x1(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Yt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yc(i), e }

function S1(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: jr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n } }

function Sg(e) {
    if (!e) return ir;
    e = e._reactInternals;
    e: {
        if (Ir(e) !== e || e.tag !== 1) throw Error(L(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ct(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e }
            }
            t = t.return
        } while (t !== null);
        throw Error(L(171))
    }
    if (e.tag === 1) { var n = e.type; if (Ct(n)) return xm(e, n, t) }
    return t
}

function wg(e, t, n, r, o, i, l, s, a) { return e = fd(n, r, !0, e, o, i, l, s, a), e.context = Sg(null), n = e.current, r = ht(), o = nr(n), i = In(r, o), i.callback = t ? t : null, er(n, i, o), e.current.lanes = o, Fi(e, o, r), Et(e, r), e }

function _s(e, t, n, r) {
    var o = t.current,
        i = ht(),
        l = nr(o);
    return n = Sg(n), t.context === null ? t.context = n : t.pendingContext = n, t = In(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = er(o, t, l), e !== null && (un(e, o, l, i), Tl(e, o, l)), l
}

function us(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function ip(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function pd(e, t) { ip(e, t), (e = e.alternate) && ip(e, t) }

function w1() { return null }
var bg = typeof reportError == "function" ? reportError : function(e) { console.error(e) };

function hd(e) { this._internalRoot = e }
Ls.prototype.render = hd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(L(409));
    _s(e, t, null, null)
};
Ls.prototype.unmount = hd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        kr(function() { _s(null, e, null, null) }), t[Nn] = null
    }
};

function Ls(e) { this._internalRoot = e }
Ls.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Zh();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++);
        Hn.splice(n, 0, e), n === 0 && em(e)
    }
};

function md(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

function Ds(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

function lp() {}

function b1(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = us(l);
                i.call(u)
            }
        }
        var l = wg(t, r, e, 0, null, !1, !1, "", lp);
        return e._reactRootContainer = l, e[Nn] = l.current, bi(e.nodeType === 8 ? e.parentNode : e), kr(), l
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = us(a);
            s.call(u)
        }
    }
    var a = fd(e, 0, !1, null, null, !1, !1, "", lp);
    return e._reactRootContainer = a, e[Nn] = a.current, bi(e.nodeType === 8 ? e.parentNode : e), kr(function() { _s(t, a, n, r) }), a
}

function zs(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var l = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var a = us(l);
                s.call(a)
            }
        }
        _s(t, l, e, o)
    } else l = b1(n, t, e, o, r);
    return us(l)
}
qh = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Yo(t.pendingLanes);
                n !== 0 && (_c(t, n | 1), Et(t, Le()), !(le & 6) && (go = Le() + 500, ur()))
            }
            break;
        case 13:
            kr(function() {
                var r = On(e, 1);
                if (r !== null) {
                    var o = ht();
                    un(r, e, 1, o)
                }
            }), pd(e, 1)
    }
};
Lc = function(e) {
    if (e.tag === 13) {
        var t = On(e, 134217728);
        if (t !== null) {
            var n = ht();
            un(t, e, 134217728, n)
        }
        pd(e, 134217728)
    }
};
Qh = function(e) {
    if (e.tag === 13) {
        var t = nr(e),
            n = On(e, t);
        if (n !== null) {
            var r = ht();
            un(n, e, t, r)
        }
        pd(e, t)
    }
};
Zh = function() { return he };
Jh = function(e, t) { var n = he; try { return he = e, t() } finally { he = n } };
Tu = function(e, t, n) {
    switch (t) {
        case "input":
            if (Su(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ts(r);
                        if (!o) throw Error(L(90));
                        Ih(r), Su(r, o)
                    }
                }
            }
            break;
        case "textarea":
            Nh(e, n);
            break;
        case "select":
            t = n.value, t != null && eo(e, !!n.multiple, t, !1)
    }
};
Fh = ad;
jh = kr;
var C1 = { usingClientEntryPoint: !1, Events: [Bi, Hr, Ts, zh, Ah, ad] },
    Bo = { findFiberByHostInstance: mr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
    E1 = { bundleType: Bo.bundleType, version: Bo.version, rendererPackageName: Bo.rendererPackageName, rendererConfig: Bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = Wh(e), e === null ? null : e.stateNode }, findFiberByHostInstance: Bo.findFiberByHostInstance || w1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var ml = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!ml.isDisabled && ml.supportsFiber) try { Cs = ml.inject(E1), bn = ml } catch {} }
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C1;
At.createPortal = function(e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!md(t)) throw Error(L(200)); return S1(e, t, null, n) };
At.createRoot = function(e, t) {
    if (!md(e)) throw Error(L(299));
    var n = !1,
        r = "",
        o = bg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = fd(e, 1, !1, null, null, n, !1, r, o), e[Nn] = t.current, bi(e.nodeType === 8 ? e.parentNode : e), new hd(t)
};
At.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(L(188)) : (e = Object.keys(e).join(","), Error(L(268, e))); return e = Wh(t), e = e === null ? null : e.stateNode, e };
At.flushSync = function(e) { return kr(e) };
At.hydrate = function(e, t, n) { if (!Ds(t)) throw Error(L(200)); return zs(null, e, t, !0, n) };
At.hydrateRoot = function(e, t, n) {
    if (!md(e)) throw Error(L(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        l = bg;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = wg(t, null, e, 1, n ? n : null, o, !1, i, l), e[Nn] = t.current, bi(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ls(t)
};
At.render = function(e, t, n) { if (!Ds(t)) throw Error(L(200)); return zs(null, e, t, !1, n) };
At.unmountComponentAtNode = function(e) { if (!Ds(e)) throw Error(L(40)); return e._reactRootContainer ? (kr(function() { zs(null, null, e, !1, function() { e._reactRootContainer = null, e[Nn] = null }) }), !0) : !1 };
At.unstable_batchedUpdates = ad;
At.unstable_renderSubtreeIntoContainer = function(e, t, n, r) { if (!Ds(n)) throw Error(L(200)); if (e == null || e._reactInternals === void 0) throw Error(L(38)); return zs(e, t, n, !1, r) };
At.version = "18.2.0-next-9e3b772b8-20220608";

function Cg() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cg) } catch (e) { console.error(e) } }
Cg(), wh.exports = At;
var wn = wh.exports;
const gl = wc(wn);
var sp = wn;
pu.createRoot = sp.createRoot, pu.hydrateRoot = sp.hydrateRoot;
var Eg = { exports: {} },
    k1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    R1 = k1,
    T1 = R1;

function kg() {}

function Rg() {}
Rg.resetWarningCache = kg;
var P1 = function() {
    function e(r, o, i, l, s, a) { if (a !== T1) { var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw u.name = "Invariant Violation", u } }
    e.isRequired = e;

    function t() { return e }
    var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Rg, resetWarningCache: kg };
    return n.PropTypes = n, n
};
Eg.exports = P1();
var $1 = Eg.exports;
const se = wc($1);

function q(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o, i;
    for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}

function R() { return R = Object.assign ? Object.assign.bind() : function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, R.apply(this, arguments) }

function Tg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = Tg(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function ie() { for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = Tg(e)) && (r && (r += " "), r += t); return r }

function Gn(e) { return e !== null && typeof e == "object" && e.constructor === Object }

function Pg(e) { if (!Gn(e)) return e; const t = {}; return Object.keys(e).forEach(n => { t[n] = Pg(e[n]) }), t }

function kt(e, t, n = { clone: !0 }) { const r = n.clone ? R({}, e) : e; return Gn(e) && Gn(t) && Object.keys(t).forEach(o => { o !== "__proto__" && (Gn(t[o]) && o in e && Gn(e[o]) ? r[o] = kt(e[o], t[o], n) : n.clone ? r[o] = Gn(t[o]) ? Pg(t[o]) : t[o] : r[o] = t[o]) }), r }

function lr(e) { let t = "https://mui.com/production-error/?code=" + e; for (let n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified MUI error #" + e + "; visit " + t + " for the full message." }

function ae(e) { if (typeof e != "string") throw new Error(lr(7)); return e.charAt(0).toUpperCase() + e.slice(1) }

function ap(...e) { return e.reduce((t, n) => n == null ? t : function(...o) { t.apply(this, o), n.apply(this, o) }, () => {}) }

function $g(e, t = 166) {
    let n;

    function r(...o) {
        const i = () => { e.apply(this, o) };
        clearTimeout(n), n = setTimeout(i, t)
    }
    return r.clear = () => { clearTimeout(n) }, r
}

function Ja(e, t) { var n, r; return f.isValidElement(e) && t.indexOf((n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName) !== -1 }

function Lt(e) { return e && e.ownerDocument || document }

function Rr(e) { return Lt(e).defaultView || window }

function lc(e, t) { typeof e == "function" ? e(t) : e && (e.current = t) }
const I1 = typeof window < "u" ? f.useLayoutEffect : f.useEffect,
    Tr = I1;
let up = 0;

function M1(e) { const [t, n] = f.useState(e), r = e || t; return f.useEffect(() => { t == null && (up += 1, n(`mui-${up}`)) }, [t]), r }
const cp = fu.useId;

function sc(e) { if (cp !== void 0) { const t = cp(); return e ? e : t } return M1(e) }

function dp({ controlled: e, default: t, name: n, state: r = "value" }) { const { current: o } = f.useRef(e !== void 0), [i, l] = f.useState(t), s = o ? e : i, a = f.useCallback(u => { o || l(u) }, []); return [s, a] }

function Zr(e) { const t = f.useRef(e); return Tr(() => { t.current = e }), f.useRef((...n) => (0, t.current)(...n)).current }

function Rt(...e) { return f.useMemo(() => e.every(t => t == null) ? null : t => { e.forEach(n => { lc(n, t) }) }, e) }
let As = !0,
    ac = !1,
    fp;
const N1 = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };

function O1(e) { const { type: t, tagName: n } = e; return !!(n === "INPUT" && N1[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable) }

function _1(e) { e.metaKey || e.altKey || e.ctrlKey || (As = !0) }

function eu() { As = !1 }

function L1() { this.visibilityState === "hidden" && ac && (As = !0) }

function D1(e) { e.addEventListener("keydown", _1, !0), e.addEventListener("mousedown", eu, !0), e.addEventListener("pointerdown", eu, !0), e.addEventListener("touchstart", eu, !0), e.addEventListener("visibilitychange", L1, !0) }

function z1(e) { const { target: t } = e; try { return t.matches(":focus-visible") } catch {} return As || O1(t) }

function A1() {
    const e = f.useCallback(o => { o != null && D1(o.ownerDocument) }, []),
        t = f.useRef(!1);

    function n() { return t.current ? (ac = !0, window.clearTimeout(fp), fp = window.setTimeout(() => { ac = !1 }, 100), t.current = !1, !0) : !1 }

    function r(o) { return z1(o) ? (t.current = !0, !0) : !1 }
    return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e }
}

function Ig(e) { const t = e.documentElement.clientWidth; return Math.abs(window.innerWidth - t) }

function gd(e, t) {
    const n = R({}, t);
    return Object.keys(e).forEach(r => {
        if (r.toString().match(/^(components|slots)$/)) n[r] = R({}, e[r], n[r]);
        else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
            const o = e[r] || {},
                i = t[r];
            n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = R({}, i), Object.keys(o).forEach(l => { n[r][l] = gd(o[l], i[l]) }))
        } else n[r] === void 0 && (n[r] = e[r])
    }), n
}

function Be(e, t, n = void 0) {
    const r = {};
    return Object.keys(e).forEach(o => {
        r[o] = e[o].reduce((i, l) => {
            if (l) {
                const s = t(l);
                s !== "" && i.push(s), n && n[l] && i.push(n[l])
            }
            return i
        }, []).join(" ")
    }), r
}
const pp = e => e,
    F1 = () => { let e = pp; return { configure(t) { e = t }, generate(t) { return e(t) }, reset() { e = pp } } },
    j1 = F1(),
    B1 = j1,
    U1 = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };

function De(e, t, n = "Mui") { const r = U1[t]; return r ? `${n}-${r}` : `${B1.generate(e)}-${t}` }

function ze(e, t, n = "Mui") { const r = {}; return t.forEach(o => { r[o] = De(e, o, n) }), r }

function Mg(e) { var t = Object.create(null); return function(n) { return t[n] === void 0 && (t[n] = e(n)), t[n] } }
var W1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    V1 = Mg(function(e) { return W1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91 });

function H1(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}

function K1(e) { var t = document.createElement("style"); return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t }
var G1 = function() {
        function e(n) {
            var r = this;
            this._insertTag = function(o) {
                var i;
                r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o)
            }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null
        }
        var t = e.prototype;
        return t.hydrate = function(r) { r.forEach(this._insertTag) }, t.insert = function(r) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(K1(this));
            var o = this.tags[this.tags.length - 1];
            if (this.isSpeedy) { var i = H1(o); try { i.insertRule(r, i.cssRules.length) } catch {} } else o.appendChild(document.createTextNode(r));
            this.ctr++
        }, t.flush = function() { this.tags.forEach(function(r) { return r.parentNode && r.parentNode.removeChild(r) }), this.tags = [], this.ctr = 0 }, e
    }(),
    lt = "-ms-",
    cs = "-moz-",
    de = "-webkit-",
    Ng = "comm",
    vd = "rule",
    yd = "decl",
    X1 = "@import",
    Og = "@keyframes",
    Y1 = "@layer",
    q1 = Math.abs,
    Fs = String.fromCharCode,
    Q1 = Object.assign;

function Z1(e, t) { return et(e, 0) ^ 45 ? (((t << 2 ^ et(e, 0)) << 2 ^ et(e, 1)) << 2 ^ et(e, 2)) << 2 ^ et(e, 3) : 0 }

function _g(e) { return e.trim() }

function J1(e, t) { return (e = t.exec(e)) ? e[0] : e }

function fe(e, t, n) { return e.replace(t, n) }

function uc(e, t) { return e.indexOf(t) }

function et(e, t) { return e.charCodeAt(t) | 0 }

function Mi(e, t, n) { return e.slice(t, n) }

function yn(e) { return e.length }

function xd(e) { return e.length }

function vl(e, t) { return t.push(e), e }

function ex(e, t) { return e.map(t).join("") }
var js = 1,
    vo = 1,
    Lg = 0,
    Tt = 0,
    Fe = 0,
    Eo = "";

function Bs(e, t, n, r, o, i, l) { return { value: e, root: t, parent: n, type: r, props: o, children: i, line: js, column: vo, length: l, return: "" } }

function Uo(e, t) { return Q1(Bs("", null, null, "", null, null, 0), e, { length: -e.length }, t) }

function tx() { return Fe }

function nx() { return Fe = Tt > 0 ? et(Eo, --Tt) : 0, vo--, Fe === 10 && (vo = 1, js--), Fe }

function Dt() { return Fe = Tt < Lg ? et(Eo, Tt++) : 0, vo++, Fe === 10 && (vo = 1, js++), Fe }

function En() { return et(Eo, Tt) }

function _l() { return Tt }

function Wi(e, t) { return Mi(Eo, e, t) }

function Ni(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function Dg(e) { return js = vo = 1, Lg = yn(Eo = e), Tt = 0, [] }

function zg(e) { return Eo = "", e }

function Ll(e) { return _g(Wi(Tt - 1, cc(e === 91 ? e + 2 : e === 40 ? e + 1 : e))) }

function rx(e) {
    for (;
        (Fe = En()) && Fe < 33;) Dt();
    return Ni(e) > 2 || Ni(Fe) > 3 ? "" : " "
}

function ox(e, t) { for (; --t && Dt() && !(Fe < 48 || Fe > 102 || Fe > 57 && Fe < 65 || Fe > 70 && Fe < 97);); return Wi(e, _l() + (t < 6 && En() == 32 && Dt() == 32)) }

function cc(e) {
    for (; Dt();) switch (Fe) {
        case e:
            return Tt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && cc(Fe);
            break;
        case 40:
            e === 41 && cc(e);
            break;
        case 92:
            Dt();
            break
    }
    return Tt
}

function ix(e, t) {
    for (; Dt() && e + Fe !== 57;)
        if (e + Fe === 84 && En() === 47) break;
    return "/*" + Wi(t, Tt - 1) + "*" + Fs(e === 47 ? e : Dt())
}

function lx(e) { for (; !Ni(En());) Dt(); return Wi(e, Tt) }

function sx(e) { return zg(Dl("", null, null, null, [""], e = Dg(e), 0, [0], e)) }

function Dl(e, t, n, r, o, i, l, s, a) {
    for (var u = 0, c = 0, d = l, p = 0, x = 0, S = 0, y = 1, E = 1, g = 1, h = 0, m = "", v = o, b = i, C = r, w = m; E;) switch (S = h, h = Dt()) {
        case 40:
            if (S != 108 && et(w, d - 1) == 58) { uc(w += fe(Ll(h), "&", "&\f"), "&\f") != -1 && (g = -1); break }
        case 34:
        case 39:
        case 91:
            w += Ll(h);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            w += rx(S);
            break;
        case 92:
            w += ox(_l() - 1, 7);
            continue;
        case 47:
            switch (En()) {
                case 42:
                case 47:
                    vl(ax(ix(Dt(), _l()), t, n), a);
                    break;
                default:
                    w += "/"
            }
            break;
        case 123 * y:
            s[u++] = yn(w) * g;
        case 125 * y:
        case 59:
        case 0:
            switch (h) {
                case 0:
                case 125:
                    E = 0;
                case 59 + c:
                    g == -1 && (w = fe(w, /\f/g, "")), x > 0 && yn(w) - d && vl(x > 32 ? mp(w + ";", r, n, d - 1) : mp(fe(w, " ", "") + ";", r, n, d - 2), a);
                    break;
                case 59:
                    w += ";";
                default:
                    if (vl(C = hp(w, t, n, u, c, o, s, m, v = [], b = [], d), i), h === 123)
                        if (c === 0) Dl(w, t, C, C, v, i, d, s, b);
                        else switch (p === 99 && et(w, 3) === 110 ? 100 : p) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                Dl(e, C, C, r && vl(hp(e, C, C, 0, 0, o, s, m, o, v = [], d), b), o, b, d, s, r ? v : b);
                                break;
                            default:
                                Dl(w, C, C, C, [""], b, 0, s, b)
                        }
            }
            u = c = x = 0, y = g = 1, m = w = "", d = l;
            break;
        case 58:
            d = 1 + yn(w), x = S;
        default:
            if (y < 1) {
                if (h == 123) --y;
                else if (h == 125 && y++ == 0 && nx() == 125) continue
            }
            switch (w += Fs(h), h * y) {
                case 38:
                    g = c > 0 ? 1 : (w += "\f", -1);
                    break;
                case 44:
                    s[u++] = (yn(w) - 1) * g, g = 1;
                    break;
                case 64:
                    En() === 45 && (w += Ll(Dt())), p = En(), c = d = yn(m = w += lx(_l())), h++;
                    break;
                case 45:
                    S === 45 && yn(w) == 2 && (y = 0)
            }
    }
    return i
}

function hp(e, t, n, r, o, i, l, s, a, u, c) {
    for (var d = o - 1, p = o === 0 ? i : [""], x = xd(p), S = 0, y = 0, E = 0; S < r; ++S)
        for (var g = 0, h = Mi(e, d + 1, d = q1(y = l[S])), m = e; g < x; ++g)(m = _g(y > 0 ? p[g] + " " + h : fe(h, /&\f/g, p[g]))) && (a[E++] = m);
    return Bs(e, t, n, o === 0 ? vd : s, a, u, c)
}

function ax(e, t, n) { return Bs(e, t, n, Ng, Fs(tx()), Mi(e, 2, -2), 0) }

function mp(e, t, n, r) { return Bs(e, t, n, yd, Mi(e, 0, r), Mi(e, r + 1, -1), r) }

function lo(e, t) { for (var n = "", r = xd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || ""; return n }

function ux(e, t, n, r) {
    switch (e.type) {
        case Y1:
            if (e.children.length) break;
        case X1:
        case yd:
            return e.return = e.return || e.value;
        case Ng:
            return "";
        case Og:
            return e.return = e.value + "{" + lo(e.children, r) + "}";
        case vd:
            e.value = e.props.join(",")
    }
    return yn(n = lo(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}

function cx(e) { var t = xd(e); return function(n, r, o, i) { for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || ""; return l } }

function dx(e) { return function(t) { t.root || (t = t.return) && e(t) } }
var fx = function(t, n, r) { for (var o = 0, i = 0; o = i, i = En(), o === 38 && i === 12 && (n[r] = 1), !Ni(i);) Dt(); return Wi(t, Tt) },
    px = function(t, n) {
        var r = -1,
            o = 44;
        do switch (Ni(o)) {
            case 0:
                o === 38 && En() === 12 && (n[r] = 1), t[r] += fx(Tt - 1, n, r);
                break;
            case 2:
                t[r] += Ll(o);
                break;
            case 4:
                if (o === 44) { t[++r] = En() === 58 ? "&\f" : "", n[r] = t[r].length; break }
            default:
                t[r] += Fs(o)
        }
        while (o = Dt());
        return t
    },
    hx = function(t, n) { return zg(px(Dg(t), n)) },
    gp = new WeakMap,
    mx = function(t) {
        if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
            for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule";)
                if (r = r.parent, !r) return;
            if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !gp.get(r)) && !o) {
                gp.set(t, !0);
                for (var i = [], l = hx(n, i), s = r.props, a = 0, u = 0; a < l.length; a++)
                    for (var c = 0; c < s.length; c++, u++) t.props[u] = i[a] ? l[a].replace(/&\f/g, s[c]) : s[c] + " " + l[a]
            }
        }
    },
    gx = function(t) {
        if (t.type === "decl") {
            var n = t.value;
            n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "")
        }
    };

function Ag(e, t) {
    switch (Z1(e, t)) {
        case 5103:
            return de + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return de + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return de + e + cs + e + lt + e + e;
        case 6828:
        case 4268:
            return de + e + lt + e + e;
        case 6165:
            return de + e + lt + "flex-" + e + e;
        case 5187:
            return de + e + fe(e, /(\w+).+(:[^]+)/, de + "box-$1$2" + lt + "flex-$1$2") + e;
        case 5443:
            return de + e + lt + "flex-item-" + fe(e, /flex-|-self/, "") + e;
        case 4675:
            return de + e + lt + "flex-line-pack" + fe(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return de + e + lt + fe(e, "shrink", "negative") + e;
        case 5292:
            return de + e + lt + fe(e, "basis", "preferred-size") + e;
        case 6060:
            return de + "box-" + fe(e, "-grow", "") + de + e + lt + fe(e, "grow", "positive") + e;
        case 4554:
            return de + fe(e, /([^-])(transform)/g, "$1" + de + "$2") + e;
        case 6187:
            return fe(fe(fe(e, /(zoom-|grab)/, de + "$1"), /(image-set)/, de + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return fe(e, /(image-set\([^]*)/, de + "$1$`$1");
        case 4968:
            return fe(fe(e, /(.+:)(flex-)?(.*)/, de + "box-pack:$3" + lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + de + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return fe(e, /(.+)-inline(.+)/, de + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (yn(e) - 1 - t > 6) switch (et(e, t + 1)) {
                case 109:
                    if (et(e, t + 4) !== 45) break;
                case 102:
                    return fe(e, /(.+:)(.+)-([^]+)/, "$1" + de + "$2-$3$1" + cs + (et(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~uc(e, "stretch") ? Ag(fe(e, "stretch", "fill-available"), t) + e : e
            }
            break;
        case 4949:
            if (et(e, t + 1) !== 115) break;
        case 6444:
            switch (et(e, yn(e) - 3 - (~uc(e, "!important") && 10))) {
                case 107:
                    return fe(e, ":", ":" + de) + e;
                case 101:
                    return fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + de + (et(e, 14) === 45 ? "inline-" : "") + "box$3$1" + de + "$2$3$1" + lt + "$2box$3") + e
            }
            break;
        case 5936:
            switch (et(e, t + 11)) {
                case 114:
                    return de + e + lt + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return de + e + lt + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return de + e + lt + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return de + e + lt + e + e
    }
    return e
}
var vx = function(t, n, r, o) {
        if (t.length > -1 && !t.return) switch (t.type) {
            case yd:
                t.return = Ag(t.value, t.length);
                break;
            case Og:
                return lo([Uo(t, { value: fe(t.value, "@", "@" + de) })], o);
            case vd:
                if (t.length) return ex(t.props, function(i) {
                    switch (J1(i, /(::plac\w+|:read-\w+)/)) {
                        case ":read-only":
                        case ":read-write":
                            return lo([Uo(t, { props: [fe(i, /:(read-\w+)/, ":" + cs + "$1")] })], o);
                        case "::placeholder":
                            return lo([Uo(t, { props: [fe(i, /:(plac\w+)/, ":" + de + "input-$1")] }), Uo(t, { props: [fe(i, /:(plac\w+)/, ":" + cs + "$1")] }), Uo(t, { props: [fe(i, /:(plac\w+)/, lt + "input-$1")] })], o)
                    }
                    return ""
                })
        }
    },
    yx = [vx],
    xx = function(t) {
        var n = t.key;
        if (n === "css") {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, function(y) {
                var E = y.getAttribute("data-emotion");
                E.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""))
            })
        }
        var o = t.stylisPlugins || yx,
            i = {},
            l, s = [];
        l = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(y) {
            for (var E = y.getAttribute("data-emotion").split(" "), g = 1; g < E.length; g++) i[E[g]] = !0;
            s.push(y)
        });
        var a, u = [mx, gx]; {
            var c, d = [ux, dx(function(y) { c.insert(y) })],
                p = cx(u.concat(o, d)),
                x = function(E) { return lo(sx(E), p) };
            a = function(E, g, h, m) { c = h, x(E ? E + "{" + g.styles + "}" : g.styles), m && (S.inserted[g.name] = !0) }
        }
        var S = { key: n, sheet: new G1({ key: n, container: l, nonce: t.nonce, speedy: t.speedy, prepend: t.prepend, insertionPoint: t.insertionPoint }), nonce: t.nonce, inserted: i, registered: {}, insert: a };
        return S.sheet.hydrate(s), S
    },
    Fg = { exports: {} },
    me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe = typeof Symbol == "function" && Symbol.for,
    Sd = qe ? Symbol.for("react.element") : 60103,
    wd = qe ? Symbol.for("react.portal") : 60106,
    Us = qe ? Symbol.for("react.fragment") : 60107,
    Ws = qe ? Symbol.for("react.strict_mode") : 60108,
    Vs = qe ? Symbol.for("react.profiler") : 60114,
    Hs = qe ? Symbol.for("react.provider") : 60109,
    Ks = qe ? Symbol.for("react.context") : 60110,
    bd = qe ? Symbol.for("react.async_mode") : 60111,
    Gs = qe ? Symbol.for("react.concurrent_mode") : 60111,
    Xs = qe ? Symbol.for("react.forward_ref") : 60112,
    Ys = qe ? Symbol.for("react.suspense") : 60113,
    Sx = qe ? Symbol.for("react.suspense_list") : 60120,
    qs = qe ? Symbol.for("react.memo") : 60115,
    Qs = qe ? Symbol.for("react.lazy") : 60116,
    wx = qe ? Symbol.for("react.block") : 60121,
    bx = qe ? Symbol.for("react.fundamental") : 60117,
    Cx = qe ? Symbol.for("react.responder") : 60118,
    Ex = qe ? Symbol.for("react.scope") : 60119;

function jt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Sd:
                switch (e = e.type, e) {
                    case bd:
                    case Gs:
                    case Us:
                    case Vs:
                    case Ws:
                    case Ys:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case Ks:
                            case Xs:
                            case Qs:
                            case qs:
                            case Hs:
                                return e;
                            default:
                                return t
                        }
                }
            case wd:
                return t
        }
    }
}

function jg(e) { return jt(e) === Gs }
me.AsyncMode = bd;
me.ConcurrentMode = Gs;
me.ContextConsumer = Ks;
me.ContextProvider = Hs;
me.Element = Sd;
me.ForwardRef = Xs;
me.Fragment = Us;
me.Lazy = Qs;
me.Memo = qs;
me.Portal = wd;
me.Profiler = Vs;
me.StrictMode = Ws;
me.Suspense = Ys;
me.isAsyncMode = function(e) { return jg(e) || jt(e) === bd };
me.isConcurrentMode = jg;
me.isContextConsumer = function(e) { return jt(e) === Ks };
me.isContextProvider = function(e) { return jt(e) === Hs };
me.isElement = function(e) { return typeof e == "object" && e !== null && e.$$typeof === Sd };
me.isForwardRef = function(e) { return jt(e) === Xs };
me.isFragment = function(e) { return jt(e) === Us };
me.isLazy = function(e) { return jt(e) === Qs };
me.isMemo = function(e) { return jt(e) === qs };
me.isPortal = function(e) { return jt(e) === wd };
me.isProfiler = function(e) { return jt(e) === Vs };
me.isStrictMode = function(e) { return jt(e) === Ws };
me.isSuspense = function(e) { return jt(e) === Ys };
me.isValidElementType = function(e) { return typeof e == "string" || typeof e == "function" || e === Us || e === Gs || e === Vs || e === Ws || e === Ys || e === Sx || typeof e == "object" && e !== null && (e.$$typeof === Qs || e.$$typeof === qs || e.$$typeof === Hs || e.$$typeof === Ks || e.$$typeof === Xs || e.$$typeof === bx || e.$$typeof === Cx || e.$$typeof === Ex || e.$$typeof === wx) };
me.typeOf = jt;
Fg.exports = me;
var kx = Fg.exports,
    Bg = kx,
    Rx = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    Tx = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    Ug = {};
Ug[Bg.ForwardRef] = Rx;
Ug[Bg.Memo] = Tx;
var Px = !0;

function $x(e, t, n) { var r = ""; return n.split(" ").forEach(function(o) { e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " " }), r }
var Wg = function(t, n, r) {
        var o = t.key + "-" + n.name;
        (r === !1 || Px === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
    },
    Vg = function(t, n, r) {
        Wg(t, n, r);
        var o = t.key + "-" + n.name;
        if (t.inserted[n.name] === void 0) {
            var i = n;
            do t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next; while (i !== void 0)
        }
    };

function Ix(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
        case 3:
            t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
            t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}
var Mx = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 },
    Nx = /[A-Z]|^ms/g,
    Ox = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Hg = function(t) { return t.charCodeAt(1) === 45 },
    vp = function(t) { return t != null && typeof t != "boolean" },
    tu = Mg(function(e) { return Hg(e) ? e : e.replace(Nx, "-$&").toLowerCase() }),
    yp = function(t, n) {
        switch (t) {
            case "animation":
            case "animationName":
                if (typeof n == "string") return n.replace(Ox, function(r, o, i) { return xn = { name: o, styles: i, next: xn }, o })
        }
        return Mx[t] !== 1 && !Hg(t) && typeof n == "number" && n !== 0 ? n + "px" : n
    };

function Oi(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
        case "boolean":
            return "";
        case "object":
            {
                if (n.anim === 1) return xn = { name: n.name, styles: n.styles, next: xn }, n.name;
                if (n.styles !== void 0) {
                    var r = n.next;
                    if (r !== void 0)
                        for (; r !== void 0;) xn = { name: r.name, styles: r.styles, next: xn }, r = r.next;
                    var o = n.styles + ";";
                    return o
                }
                return _x(e, t, n)
            }
        case "function":
            {
                if (e !== void 0) {
                    var i = xn,
                        l = n(e);
                    return xn = i, Oi(e, t, l)
                }
                break
            }
    }
    if (t == null) return n;
    var s = t[n];
    return s !== void 0 ? s : n
}

function _x(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++) r += Oi(e, t, n[o]) + ";";
    else
        for (var i in n) {
            var l = n[i];
            if (typeof l != "object") t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : vp(l) && (r += tu(i) + ":" + yp(i, l) + ";");
            else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
                for (var s = 0; s < l.length; s++) vp(l[s]) && (r += tu(i) + ":" + yp(i, l[s]) + ";");
            else {
                var a = Oi(e, t, l);
                switch (i) {
                    case "animation":
                    case "animationName":
                        { r += tu(i) + ":" + a + ";"; break }
                    default:
                        r += i + "{" + a + "}"
                }
            }
        }
    return r
}
var xp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    xn, Cd = function(t, n, r) {
        if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
        var o = !0,
            i = "";
        xn = void 0;
        var l = t[0];
        l == null || l.raw === void 0 ? (o = !1, i += Oi(r, n, l)) : i += l[0];
        for (var s = 1; s < t.length; s++) i += Oi(r, n, t[s]), o && (i += l[s]);
        xp.lastIndex = 0;
        for (var a = "", u;
            (u = xp.exec(i)) !== null;) a += "-" + u[1];
        var c = Ix(i) + a;
        return { name: c, styles: i, next: xn }
    },
    Lx = function(t) { return t() },
    Kg = fu.useInsertionEffect ? fu.useInsertionEffect : !1,
    Dx = Kg || Lx,
    Sp = Kg || f.useLayoutEffect,
    Gg = f.createContext(typeof HTMLElement < "u" ? xx({ key: "css" }) : null);
Gg.Provider;
var Xg = function(t) { return f.forwardRef(function(n, r) { var o = f.useContext(Gg); return t(n, o, r) }) },
    Ed = f.createContext({}),
    zx = Xg(function(e, t) {
        var n = e.styles,
            r = Cd([n], void 0, f.useContext(Ed)),
            o = f.useRef();
        return Sp(function() {
            var i = t.key + "-global",
                l = new t.sheet.constructor({ key: i, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }),
                s = !1,
                a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
            return t.sheet.tags.length && (l.before = t.sheet.tags[0]), a !== null && (s = !0, a.setAttribute("data-emotion", i), l.hydrate([a])), o.current = [l, s],
                function() { l.flush() }
        }, [t]), Sp(function() {
            var i = o.current,
                l = i[0],
                s = i[1];
            if (s) { i[1] = !1; return }
            if (r.next !== void 0 && Vg(t, r.next, !0), l.tags.length) {
                var a = l.tags[l.tags.length - 1].nextElementSibling;
                l.before = a, l.flush()
            }
            t.insert("", r, l, !1)
        }, [t, r.name]), null
    });

function Ax() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Cd(t) }
var kd = function() {
        var t = Ax.apply(void 0, arguments),
            n = "animation-" + t.name;
        return { name: n, styles: "@keyframes " + n + "{" + t.styles + "}", anim: 1, toString: function() { return "_EMO_" + this.name + "_" + this.styles + "_EMO_" } }
    },
    Fx = V1,
    jx = function(t) { return t !== "theme" },
    wp = function(t) { return typeof t == "string" && t.charCodeAt(0) > 96 ? Fx : jx },
    bp = function(t, n, r) {
        var o;
        if (n) {
            var i = n.shouldForwardProp;
            o = t.__emotion_forwardProp && i ? function(l) { return t.__emotion_forwardProp(l) && i(l) } : i
        }
        return typeof o != "function" && r && (o = t.__emotion_forwardProp), o
    },
    Bx = function(t) {
        var n = t.cache,
            r = t.serialized,
            o = t.isStringTag;
        return Wg(n, r, o), Dx(function() { return Vg(n, r, o) }), null
    },
    Ux = function e(t, n) {
        var r = t.__emotion_real === t,
            o = r && t.__emotion_base || t,
            i, l;
        n !== void 0 && (i = n.label, l = n.target);
        var s = bp(t, n, r),
            a = s || wp(o),
            u = !a("as");
        return function() {
            var c = arguments,
                d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
            if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c);
            else { d.push(c[0][0]); for (var p = c.length, x = 1; x < p; x++) d.push(c[x], c[0][x]) }
            var S = Xg(function(y, E, g) {
                var h = u && y.as || o,
                    m = "",
                    v = [],
                    b = y;
                if (y.theme == null) {
                    b = {};
                    for (var C in y) b[C] = y[C];
                    b.theme = f.useContext(Ed)
                }
                typeof y.className == "string" ? m = $x(E.registered, v, y.className) : y.className != null && (m = y.className + " ");
                var w = Cd(d.concat(v), E.registered, b);
                m += E.key + "-" + w.name, l !== void 0 && (m += " " + l);
                var T = u && s === void 0 ? wp(h) : a,
                    M = {};
                for (var P in y) u && P === "as" || T(P) && (M[P] = y[P]);
                return M.className = m, M.ref = g, f.createElement(f.Fragment, null, f.createElement(Bx, { cache: E, serialized: w, isStringTag: typeof h == "string" }), f.createElement(h, M))
            });
            return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = d, S.__emotion_forwardProp = s, Object.defineProperty(S, "toString", { value: function() { return "." + l } }), S.withComponent = function(y, E) { return e(y, R({}, n, E, { shouldForwardProp: bp(S, E, !0) })).apply(void 0, d) }, S
        }
    },
    Wx = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
    dc = Ux.bind();
Wx.forEach(function(e) { dc[e] = dc(e) });

function Vx(e) { return e == null || Object.keys(e).length === 0 }

function Hx(e) { const { styles: t, defaultTheme: n = {} } = e, r = typeof t == "function" ? o => t(Vx(o) ? n : o) : t; return k.jsx(zx, { styles: r }) }

function Kx(e, t) { return dc(e, t) }
const Gx = (e, t) => { Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles)) },
    Xx = ["values", "unit", "step"],
    Yx = e => {
        const t = Object.keys(e).map(n => ({ key: n, val: e[n] })) || [];
        return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => R({}, n, {
            [r.key]: r.val
        }), {})
    };

function qx(e) {
    const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n = "px", step: r = 5 } = e, o = q(e, Xx), i = Yx(t), l = Object.keys(i);

    function s(p) { return `@media (min-width:${typeof t[p]=="number"?t[p]:p}${n})` }

    function a(p) { return `@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${n})` }

    function u(p, x) { const S = l.indexOf(x); return `@media (min-width:${typeof t[p]=="number"?t[p]:p}${n}) and (max-width:${(S!==-1&&typeof t[l[S]]=="number"?t[l[S]]:x)-r/100}${n})` }

    function c(p) { return l.indexOf(p) + 1 < l.length ? u(p, l[l.indexOf(p) + 1]) : s(p) }

    function d(p) { const x = l.indexOf(p); return x === 0 ? s(l[1]) : x === l.length - 1 ? a(l[x]) : u(p, l[l.indexOf(p) + 1]).replace("@media", "@media not all and") }
    return R({ keys: l, values: i, up: s, down: a, between: u, only: c, not: d, unit: n }, o)
}
const Qx = { borderRadius: 4 },
    Zx = Qx;

function si(e, t) { return t ? kt(e, t, { clone: !1 }) : e }
const Rd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    Cp = { keys: ["xs", "sm", "md", "lg", "xl"], up: e => `@media (min-width:${Rd[e]}px)` };

function Ln(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) { const i = r.breakpoints || Cp; return t.reduce((l, s, a) => (l[i.up(i.keys[a])] = n(t[a]), l), {}) }
    if (typeof t == "object") {
        const i = r.breakpoints || Cp;
        return Object.keys(t).reduce((l, s) => {
            if (Object.keys(i.values || Rd).indexOf(s) !== -1) {
                const a = i.up(s);
                l[a] = n(t[s], s)
            } else {
                const a = s;
                l[a] = t[a]
            }
            return l
        }, {})
    }
    return n(t)
}

function Jx(e = {}) { var t; return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => { const i = e.up(o); return r[i] = {}, r }, {})) || {} }

function eS(e, t) { return e.reduce((n, r) => { const o = n[r]; return (!o || Object.keys(o).length === 0) && delete n[r], n }, t) }

function Zs(e, t, n = !0) { if (!t || typeof t != "string") return null; if (e && e.vars && n) { const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e); if (r != null) return r } return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e) }

function ds(e, t, n, r = n) { let o; return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Zs(e, n) || r, t && (o = t(o, r, e)), o }

function Ae(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e, i = l => {
        if (l[t] == null) return null;
        const s = l[t],
            a = l.theme,
            u = Zs(a, r) || {};
        return Ln(l, s, d => {
            let p = ds(u, o, d);
            return d === p && typeof d == "string" && (p = ds(u, o, `${t}${d==="default"?"":ae(d)}`, d)), n === !1 ? p : {
                [n]: p
            }
        })
    };
    return i.propTypes = {}, i.filterProps = [t], i
}

function tS(e) { const t = {}; return n => (t[n] === void 0 && (t[n] = e(n)), t[n]) }
const nS = { m: "margin", p: "padding" },
    rS = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] },
    Ep = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    oS = tS(e => {
        if (e.length > 2)
            if (Ep[e]) e = Ep[e];
            else return [e];
        const [t, n] = e.split(""), r = nS[t], o = rS[n] || "";
        return Array.isArray(o) ? o.map(i => r + i) : [r + o]
    }),
    Td = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
    Pd = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Td, ...Pd];

function Vi(e, t, n, r) { var o; const i = (o = Zs(e, t, !1)) != null ? o : n; return typeof i == "number" ? l => typeof l == "string" ? l : i * l : Array.isArray(i) ? l => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {} }

function Yg(e) { return Vi(e, "spacing", 8) }

function Hi(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t),
        r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`
}

function iS(e, t) { return n => e.reduce((r, o) => (r[o] = Hi(t, n), r), {}) }

function lS(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = oS(n),
        i = iS(o, r),
        l = e[n];
    return Ln(e, l, i)
}

function qg(e, t) { const n = Yg(e.theme); return Object.keys(e).map(r => lS(e, t, r, n)).reduce(si, {}) }

function Me(e) { return qg(e, Td) }
Me.propTypes = {};
Me.filterProps = Td;

function Ne(e) { return qg(e, Pd) }
Ne.propTypes = {};
Ne.filterProps = Pd;

function sS(e = 8) {
    if (e.mui) return e;
    const t = Yg({ spacing: e }),
        n = (...r) => (r.length === 0 ? [1] : r).map(i => { const l = t(i); return typeof l == "number" ? `${l}px` : l }).join(" ");
    return n.mui = !0, n
}

function Js(...e) {
    const t = e.reduce((r, o) => (o.filterProps.forEach(i => { r[i] = o }), r), {}),
        n = r => Object.keys(r).reduce((o, i) => t[i] ? si(o, t[i](r)) : o, {});
    return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n
}

function Xt(e) { return typeof e != "number" ? e : `${e}px solid` }

function Jt(e, t) { return Ae({ prop: e, themeKey: "borders", transform: t }) }
const aS = Jt("border", Xt),
    uS = Jt("borderTop", Xt),
    cS = Jt("borderRight", Xt),
    dS = Jt("borderBottom", Xt),
    fS = Jt("borderLeft", Xt),
    pS = Jt("borderColor"),
    hS = Jt("borderTopColor"),
    mS = Jt("borderRightColor"),
    gS = Jt("borderBottomColor"),
    vS = Jt("borderLeftColor"),
    yS = Jt("outline", Xt),
    xS = Jt("outlineColor"),
    ea = e => {
        if (e.borderRadius !== void 0 && e.borderRadius !== null) {
            const t = Vi(e.theme, "shape.borderRadius", 4),
                n = r => ({ borderRadius: Hi(t, r) });
            return Ln(e, e.borderRadius, n)
        }
        return null
    };
ea.propTypes = {};
ea.filterProps = ["borderRadius"];
Js(aS, uS, cS, dS, fS, pS, hS, mS, gS, vS, ea, yS, xS);
const ta = e => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = Vi(e.theme, "spacing", 8),
            n = r => ({ gap: Hi(t, r) });
        return Ln(e, e.gap, n)
    }
    return null
};
ta.propTypes = {};
ta.filterProps = ["gap"];
const na = e => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = Vi(e.theme, "spacing", 8),
            n = r => ({ columnGap: Hi(t, r) });
        return Ln(e, e.columnGap, n)
    }
    return null
};
na.propTypes = {};
na.filterProps = ["columnGap"];
const ra = e => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = Vi(e.theme, "spacing", 8),
            n = r => ({ rowGap: Hi(t, r) });
        return Ln(e, e.rowGap, n)
    }
    return null
};
ra.propTypes = {};
ra.filterProps = ["rowGap"];
const SS = Ae({ prop: "gridColumn" }),
    wS = Ae({ prop: "gridRow" }),
    bS = Ae({ prop: "gridAutoFlow" }),
    CS = Ae({ prop: "gridAutoColumns" }),
    ES = Ae({ prop: "gridAutoRows" }),
    kS = Ae({ prop: "gridTemplateColumns" }),
    RS = Ae({ prop: "gridTemplateRows" }),
    TS = Ae({ prop: "gridTemplateAreas" }),
    PS = Ae({ prop: "gridArea" });
Js(ta, na, ra, SS, wS, bS, CS, ES, kS, RS, TS, PS);

function so(e, t) { return t === "grey" ? t : e }
const $S = Ae({ prop: "color", themeKey: "palette", transform: so }),
    IS = Ae({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: so }),
    MS = Ae({ prop: "backgroundColor", themeKey: "palette", transform: so });
Js($S, IS, MS);

function Nt(e) { return e <= 1 && e !== 0 ? `${e*100}%` : e }
const NS = Ae({ prop: "width", transform: Nt }),
    $d = e => { if (e.maxWidth !== void 0 && e.maxWidth !== null) { const t = n => { var r, o; const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Rd[n]; return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? { maxWidth: `${i}${e.theme.breakpoints.unit}` } : { maxWidth: i } : { maxWidth: Nt(n) } }; return Ln(e, e.maxWidth, t) } return null };
$d.filterProps = ["maxWidth"];
const OS = Ae({ prop: "minWidth", transform: Nt }),
    _S = Ae({ prop: "height", transform: Nt }),
    LS = Ae({ prop: "maxHeight", transform: Nt }),
    DS = Ae({ prop: "minHeight", transform: Nt });
Ae({ prop: "size", cssProperty: "width", transform: Nt });
Ae({ prop: "size", cssProperty: "height", transform: Nt });
const zS = Ae({ prop: "boxSizing" });
Js(NS, $d, OS, _S, LS, DS, zS);
const AS = { border: { themeKey: "borders", transform: Xt }, borderTop: { themeKey: "borders", transform: Xt }, borderRight: { themeKey: "borders", transform: Xt }, borderBottom: { themeKey: "borders", transform: Xt }, borderLeft: { themeKey: "borders", transform: Xt }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: Xt }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: ea }, color: { themeKey: "palette", transform: so }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: so }, backgroundColor: { themeKey: "palette", transform: so }, p: { style: Ne }, pt: { style: Ne }, pr: { style: Ne }, pb: { style: Ne }, pl: { style: Ne }, px: { style: Ne }, py: { style: Ne }, padding: { style: Ne }, paddingTop: { style: Ne }, paddingRight: { style: Ne }, paddingBottom: { style: Ne }, paddingLeft: { style: Ne }, paddingX: { style: Ne }, paddingY: { style: Ne }, paddingInline: { style: Ne }, paddingInlineStart: { style: Ne }, paddingInlineEnd: { style: Ne }, paddingBlock: { style: Ne }, paddingBlockStart: { style: Ne }, paddingBlockEnd: { style: Ne }, m: { style: Me }, mt: { style: Me }, mr: { style: Me }, mb: { style: Me }, ml: { style: Me }, mx: { style: Me }, my: { style: Me }, margin: { style: Me }, marginTop: { style: Me }, marginRight: { style: Me }, marginBottom: { style: Me }, marginLeft: { style: Me }, marginX: { style: Me }, marginY: { style: Me }, marginInline: { style: Me }, marginInlineStart: { style: Me }, marginInlineEnd: { style: Me }, marginBlock: { style: Me }, marginBlockStart: { style: Me }, marginBlockEnd: { style: Me }, displayPrint: { cssProperty: !1, transform: e => ({ "@media print": { display: e } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: ta }, rowGap: { style: ra }, columnGap: { style: na }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: Nt }, maxWidth: { style: $d }, minWidth: { transform: Nt }, height: { transform: Nt }, maxHeight: { transform: Nt }, minHeight: { transform: Nt }, boxSizing: {}, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: !1, themeKey: "typography" } },
    Id = AS;

function FS(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
        n = new Set(t);
    return e.every(r => n.size === Object.keys(r).length)
}

function jS(e, t) { return typeof e == "function" ? e(t) : e }

function BS() {
    function e(n, r, o, i) {
        const l = {
                [n]: r,
                theme: o
            },
            s = i[n];
        if (!s) return {
            [n]: r
        };
        const { cssProperty: a = n, themeKey: u, transform: c, style: d } = s;
        if (r == null) return null;
        if (u === "typography" && r === "inherit") return {
            [n]: r
        };
        const p = Zs(o, u) || {};
        return d ? d(l) : Ln(l, r, S => {
            let y = ds(p, c, S);
            return S === y && typeof S == "string" && (y = ds(p, c, `${n}${S==="default"?"":ae(S)}`, S)), a === !1 ? y : {
                [a]: y
            }
        })
    }

    function t(n) {
        var r;
        const { sx: o, theme: i = {} } = n || {};
        if (!o) return null;
        const l = (r = i.unstable_sxConfig) != null ? r : Id;

        function s(a) {
            let u = a;
            if (typeof a == "function") u = a(i);
            else if (typeof a != "object") return a;
            if (!u) return null;
            const c = Jx(i.breakpoints),
                d = Object.keys(c);
            let p = c;
            return Object.keys(u).forEach(x => {
                const S = jS(u[x], i);
                if (S != null)
                    if (typeof S == "object")
                        if (l[x]) p = si(p, e(x, S, i, l));
                        else {
                            const y = Ln({ theme: i }, S, E => ({
                                [x]: E
                            }));
                            FS(y, S) ? p[x] = t({ sx: S, theme: i }) : p = si(p, y)
                        }
                else p = si(p, e(x, S, i, l))
            }), eS(d, p)
        }
        return Array.isArray(o) ? o.map(s) : s(o)
    }
    return t
}
const Qg = BS();
Qg.filterProps = ["sx"];
const Md = Qg,
    US = ["breakpoints", "palette", "spacing", "shape"];

function Nd(e = {}, ...t) { const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e, l = q(e, US), s = qx(n), a = sS(o); let u = kt({ breakpoints: s, direction: "ltr", components: {}, palette: R({ mode: "light" }, r), spacing: a, shape: R({}, Zx, i) }, l); return u = t.reduce((c, d) => kt(c, d), u), u.unstable_sxConfig = R({}, Id, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) { return Md({ sx: d, theme: this }) }, u }

function WS(e) { return Object.keys(e).length === 0 }

function VS(e = null) { const t = f.useContext(Ed); return !t || WS(t) ? e : t }
const HS = Nd();

function Od(e = HS) { return VS(e) }

function KS({ styles: e, themeId: t, defaultTheme: n = {} }) {
    const r = Od(n),
        o = typeof e == "function" ? e(t && r[t] || r) : e;
    return k.jsx(Hx, { styles: o })
}
const GS = ["variant"];

function kp(e) { return e.length === 0 }

function Zg(e) { const { variant: t } = e, n = q(e, GS); let r = t || ""; return Object.keys(n).sort().forEach(o => { o === "color" ? r += kp(r) ? e[o] : ae(e[o]) : r += `${kp(r)?o:ae(o)}${ae(e[o].toString())}` }), r }
const XS = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];

function YS(e) { return Object.keys(e).length === 0 }

function qS(e) { return typeof e == "string" && e.charCodeAt(0) > 96 }
const QS = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null,
    fs = e => {
        const t = {};
        return e && e.forEach(n => {
            const r = Zg(n.props);
            t[r] = n.style
        }), t
    },
    ZS = (e, t) => { let n = []; return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), fs(n) },
    ps = (e, t, n) => {
        const { ownerState: r = {} } = e, o = [];
        return n && n.forEach(i => {
            let l = !0;
            Object.keys(i.props).forEach(s => { r[s] !== i.props[s] && e[s] !== i.props[s] && (l = !1) }), l && o.push(t[Zg(i.props)])
        }), o
    },
    JS = (e, t, n, r) => { var o; const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants; return ps(e, t, i) };

function ai(e) { return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as" }
const ew = Nd(),
    tw = e => e && e.charAt(0).toLowerCase() + e.slice(1);

function zl({ defaultTheme: e, theme: t, themeId: n }) { return YS(t) ? e : t[n] || t }

function nw(e) { return e ? (t, n) => n[e] : null }
const Rp = ({ styledArg: e, props: t, defaultTheme: n, themeId: r }) => { const o = e(R({}, t, { theme: zl(R({}, t, { defaultTheme: n, themeId: r })) })); let i; if (o && o.variants && (i = o.variants, delete o.variants), i) { const l = ps(t, fs(i), i); return [o, ...l] } return o };

function rw(e = {}) {
    const { themeId: t, defaultTheme: n = ew, rootShouldForwardProp: r = ai, slotShouldForwardProp: o = ai } = e, i = l => Md(R({}, l, { theme: zl(R({}, l, { defaultTheme: n, themeId: t })) }));
    return i.__mui_systemSx = !0, (l, s = {}) => {
        Gx(l, v => v.filter(b => !(b != null && b.__mui_systemSx)));
        const { name: a, slot: u, skipVariantsResolver: c, skipSx: d, overridesResolver: p = nw(tw(u)) } = s, x = q(s, XS), S = c !== void 0 ? c : u && u !== "Root" && u !== "root" || !1, y = d || !1;
        let E, g = ai;
        u === "Root" || u === "root" ? g = r : u ? g = o : qS(l) && (g = void 0);
        const h = Kx(l, R({ shouldForwardProp: g, label: E }, x)),
            m = (v, ...b) => {
                const C = b ? b.map(P => {
                    if (typeof P == "function" && P.__emotion_real !== P) return O => Rp({ styledArg: P, props: O, defaultTheme: n, themeId: t });
                    if (Gn(P)) {
                        let O = P,
                            F;
                        return P && P.variants && (F = P.variants, delete O.variants, O = A => { let z = P; return ps(A, fs(F), F).forEach(D => { z = kt(z, D) }), z }), O
                    }
                    return P
                }) : [];
                let w = v;
                if (Gn(v)) {
                    let P;
                    v && v.variants && (P = v.variants, delete w.variants, w = O => { let F = v; return ps(O, fs(P), P).forEach(z => { F = kt(F, z) }), F })
                } else typeof v == "function" && v.__emotion_real !== v && (w = P => Rp({ styledArg: v, props: P, defaultTheme: n, themeId: t }));
                a && p && C.push(P => {
                    const O = zl(R({}, P, { defaultTheme: n, themeId: t })),
                        F = QS(a, O);
                    if (F) { const A = {}; return Object.entries(F).forEach(([z, I]) => { A[z] = typeof I == "function" ? I(R({}, P, { theme: O })) : I }), p(P, A) }
                    return null
                }), a && !S && C.push(P => { const O = zl(R({}, P, { defaultTheme: n, themeId: t })); return JS(P, ZS(a, O), O, a) }), y || C.push(i);
                const T = C.length - b.length;
                if (Array.isArray(v) && T > 0) {
                    const P = new Array(T).fill("");
                    w = [...v, ...P], w.raw = [...v.raw, ...P]
                }
                const M = h(w, ...C);
                return l.muiName && (M.muiName = l.muiName), M
            };
        return h.withConfig && (m.withConfig = h.withConfig), m
    }
}

function ow(e) { const { theme: t, name: n, props: r } = e; return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : gd(t.components[n].defaultProps, r) }

function iw({ props: e, name: t, defaultTheme: n, themeId: r }) { let o = Od(n); return r && (o = o[r] || o), ow({ theme: o, name: t, props: e }) }

function _d(e, t = 0, n = 1) { return Math.min(Math.max(t, e), n) }

function lw(e) { e = e.slice(1); const t = new RegExp(`.{1,${e.length>=6?2:1}}`, "g"); let n = e.match(t); return n && n[0].length === 1 && (n = n.map(r => r + r)), n ? `rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})` : "" }

function Pr(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return Pr(lw(e));
    const t = e.indexOf("("),
        n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1) throw new Error(lr(9, e));
    let r = e.substring(t + 1, e.length - 1),
        o;
    if (n === "color") { if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1) throw new Error(lr(10, o)) } else r = r.split(",");
    return r = r.map(i => parseFloat(i)), { type: n, values: r, colorSpace: o }
}

function oa(e) { const { type: t, colorSpace: n } = e; let { values: r } = e; return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})` }

function sw(e) { e = Pr(e); const { values: t } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), l = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1); let s = "rgb"; const a = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)]; return e.type === "hsla" && (s += "a", a.push(t[3])), oa({ type: s, values: a }) }

function Tp(e) { e = Pr(e); let t = e.type === "hsl" || e.type === "hsla" ? Pr(sw(e)).values : e.values; return t = t.map(n => (e.type !== "color" && (n /= 255), n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3)) }

function aw(e, t) {
    const n = Tp(e),
        r = Tp(t);
    return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
}

function Jr(e, t) { return e = Pr(e), t = _d(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, oa(e) }

function uw(e, t) {
    if (e = Pr(e), t = _d(t), e.type.indexOf("hsl") !== -1) e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return oa(e)
}

function cw(e, t) {
    if (e = Pr(e), t = _d(t), e.type.indexOf("hsl") !== -1) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return oa(e)
}

function dw(e, t) { return R({ toolbar: { minHeight: 56, [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [e.up("sm")]: { minHeight: 64 } } }, t) }
const fw = { black: "#000", white: "#fff" },
    _i = fw,
    pw = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" },
    hw = pw,
    mw = { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", A100: "#ea80fc", A200: "#e040fb", A400: "#d500f9", A700: "#aa00ff" },
    Or = mw,
    gw = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", A100: "#ff8a80", A200: "#ff5252", A400: "#ff1744", A700: "#d50000" },
    _r = gw,
    vw = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", A100: "#ffd180", A200: "#ffab40", A400: "#ff9100", A700: "#ff6d00" },
    Wo = vw,
    yw = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", A100: "#82b1ff", A200: "#448aff", A400: "#2979ff", A700: "#2962ff" },
    Lr = yw,
    xw = { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", A100: "#80d8ff", A200: "#40c4ff", A400: "#00b0ff", A700: "#0091ea" },
    Dr = xw,
    Sw = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", A100: "#b9f6ca", A200: "#69f0ae", A400: "#00e676", A700: "#00c853" },
    zr = Sw,
    ww = ["mode", "contrastThreshold", "tonalOffset"],
    Pp = { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: _i.white, default: _i.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: .04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: .08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: .38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: .12, activatedOpacity: .12 } },
    nu = { text: { primary: _i.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: _i.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: .08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: .16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: .38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: .12, activatedOpacity: .24 } };

function $p(e, t, n, r) {
    const o = r.light || r,
        i = r.dark || r * 1.5;
    e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = cw(e.main, o) : t === "dark" && (e.dark = uw(e.main, i)))
}

function bw(e = "light") { return e === "dark" ? { main: Lr[200], light: Lr[50], dark: Lr[400] } : { main: Lr[700], light: Lr[400], dark: Lr[800] } }

function Cw(e = "light") { return e === "dark" ? { main: Or[200], light: Or[50], dark: Or[400] } : { main: Or[500], light: Or[300], dark: Or[700] } }

function Ew(e = "light") { return e === "dark" ? { main: _r[500], light: _r[300], dark: _r[700] } : { main: _r[700], light: _r[400], dark: _r[800] } }

function kw(e = "light") { return e === "dark" ? { main: Dr[400], light: Dr[300], dark: Dr[700] } : { main: Dr[700], light: Dr[500], dark: Dr[900] } }

function Rw(e = "light") { return e === "dark" ? { main: zr[400], light: zr[300], dark: zr[700] } : { main: zr[800], light: zr[500], dark: zr[900] } }

function Tw(e = "light") { return e === "dark" ? { main: Wo[400], light: Wo[300], dark: Wo[700] } : { main: "#ed6c02", light: Wo[500], dark: Wo[900] } }

function Pw(e) {
    const { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = .2 } = e, o = q(e, ww), i = e.primary || bw(t), l = e.secondary || Cw(t), s = e.error || Ew(t), a = e.info || kw(t), u = e.success || Rw(t), c = e.warning || Tw(t);

    function d(y) { return aw(y, nu.text.primary) >= n ? nu.text.primary : Pp.text.primary }
    const p = ({ color: y, name: E, mainShade: g = 500, lightShade: h = 300, darkShade: m = 700 }) => { if (y = R({}, y), !y.main && y[g] && (y.main = y[g]), !y.hasOwnProperty("main")) throw new Error(lr(11, E ? ` (${E})` : "", g)); if (typeof y.main != "string") throw new Error(lr(12, E ? ` (${E})` : "", JSON.stringify(y.main))); return $p(y, "light", h, r), $p(y, "dark", m, r), y.contrastText || (y.contrastText = d(y.main)), y },
        x = { dark: nu, light: Pp };
    return kt(R({ common: R({}, _i), mode: t, primary: p({ color: i, name: "primary" }), secondary: p({ color: l, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: p({ color: s, name: "error" }), warning: p({ color: c, name: "warning" }), info: p({ color: a, name: "info" }), success: p({ color: u, name: "success" }), grey: hw, contrastThreshold: n, getContrastText: d, augmentColor: p, tonalOffset: r }, x[t]), o)
}
const $w = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function Iw(e) { return Math.round(e * 1e5) / 1e5 }
const Ip = { textTransform: "uppercase" },
    Mp = '"Roboto", "Helvetica", "Arial", sans-serif';

function Mw(e, t) {
    const n = typeof t == "function" ? t(e) : t,
        { fontFamily: r = Mp, fontSize: o = 14, fontWeightLight: i = 300, fontWeightRegular: l = 400, fontWeightMedium: s = 500, fontWeightBold: a = 700, htmlFontSize: u = 16, allVariants: c, pxToRem: d } = n,
        p = q(n, $w),
        x = o / 14,
        S = d || (g => `${g/u*x}rem`),
        y = (g, h, m, v, b) => R({ fontFamily: r, fontWeight: g, fontSize: S(h), lineHeight: m }, r === Mp ? { letterSpacing: `${Iw(v/h)}em` } : {}, b, c),
        E = { h1: y(i, 96, 1.167, -1.5), h2: y(i, 60, 1.2, -.5), h3: y(l, 48, 1.167, 0), h4: y(l, 34, 1.235, .25), h5: y(l, 24, 1.334, 0), h6: y(s, 20, 1.6, .15), subtitle1: y(l, 16, 1.75, .15), subtitle2: y(s, 14, 1.57, .1), body1: y(l, 16, 1.5, .15), body2: y(l, 14, 1.43, .15), button: y(s, 14, 1.75, .4, Ip), caption: y(l, 12, 1.66, .4), overline: y(l, 12, 2.66, 1, Ip), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
    return kt(R({ htmlFontSize: u, pxToRem: S, fontFamily: r, fontSize: o, fontWeightLight: i, fontWeightRegular: l, fontWeightMedium: s, fontWeightBold: a }, E), p, { clone: !1 })
}
const Nw = .2,
    Ow = .14,
    _w = .12;

function Re(...e) { return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Nw})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ow})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_w})`].join(",") }
const Lw = ["none", Re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
    Dw = Lw,
    zw = ["duration", "easing", "delay"],
    Aw = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" },
    Fw = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };

function Np(e) { return `${Math.round(e)}ms` }

function jw(e) { if (!e) return 0; const t = e / 36; return Math.round((4 + 15 * t ** .25 + t / 5) * 10) }

function Bw(e) {
    const t = R({}, Aw, e.easing),
        n = R({}, Fw, e.duration);
    return R({ getAutoHeightDuration: jw, create: (o = ["all"], i = {}) => { const { duration: l = n.standard, easing: s = t.easeInOut, delay: a = 0 } = i; return q(i, zw), (Array.isArray(o) ? o : [o]).map(u => `${u} ${typeof l=="string"?l:Np(l)} ${s} ${typeof a=="string"?a:Np(a)}`).join(",") } }, e, { easing: t, duration: n })
}
const Uw = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 },
    Ww = Uw,
    Vw = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function Hw(e = {}, ...t) {
    const { mixins: n = {}, palette: r = {}, transitions: o = {}, typography: i = {} } = e, l = q(e, Vw);
    if (e.vars) throw new Error(lr(18));
    const s = Pw(r),
        a = Nd(e);
    let u = kt(a, { mixins: dw(a.breakpoints, n), palette: s, shadows: Dw.slice(), typography: Mw(s, i), transitions: Bw(o), zIndex: R({}, Ww) });
    return u = kt(u, l), u = t.reduce((c, d) => kt(c, d), u), u.unstable_sxConfig = R({}, Id, l == null ? void 0 : l.unstable_sxConfig), u.unstable_sx = function(d) { return Md({ sx: d, theme: this }) }, u
}
const Kw = Hw(),
    ia = Kw,
    la = "$$material",
    pn = e => ai(e) && e !== "classes",
    Gw = ai,
    Xw = rw({ themeId: la, defaultTheme: ia, rootShouldForwardProp: pn }),
    Q = Xw;

function Ue({ props: e, name: t }) { return iw({ props: e, name: t, defaultTheme: ia, themeId: la }) }

function fc(e, t) { return fc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) { return r.__proto__ = o, r }, fc(e, t) }

function Jg(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, fc(e, t) }
const Op = { disabled: !1 },
    hs = be.createContext(null);
var Yw = function(t) { return t.scrollTop },
    Qo = "unmounted",
    pr = "exited",
    hr = "entering",
    Fr = "entered",
    pc = "exiting",
    zn = function(e) {
        Jg(t, e);

        function t(r, o) {
            var i;
            i = e.call(this, r, o) || this;
            var l = o,
                s = l && !l.isMounting ? r.enter : r.appear,
                a;
            return i.appearStatus = null, r.in ? s ? (a = pr, i.appearStatus = hr) : a = Fr : r.unmountOnExit || r.mountOnEnter ? a = Qo : a = pr, i.state = { status: a }, i.nextCallback = null, i
        }
        t.getDerivedStateFromProps = function(o, i) { var l = o.in; return l && i.status === Qo ? { status: pr } : null };
        var n = t.prototype;
        return n.componentDidMount = function() { this.updateStatus(!0, this.appearStatus) }, n.componentDidUpdate = function(o) {
            var i = null;
            if (o !== this.props) {
                var l = this.state.status;
                this.props.in ? l !== hr && l !== Fr && (i = hr) : (l === hr || l === Fr) && (i = pc)
            }
            this.updateStatus(!1, i)
        }, n.componentWillUnmount = function() { this.cancelNextCallback() }, n.getTimeouts = function() {
            var o = this.props.timeout,
                i, l, s;
            return i = l = s = o, o != null && typeof o != "number" && (i = o.exit, l = o.enter, s = o.appear !== void 0 ? o.appear : l), { exit: i, enter: l, appear: s }
        }, n.updateStatus = function(o, i) {
            if (o === void 0 && (o = !1), i !== null)
                if (this.cancelNextCallback(), i === hr) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var l = this.props.nodeRef ? this.props.nodeRef.current : gl.findDOMNode(this);
                        l && Yw(l)
                    }
                    this.performEnter(o)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === pr && this.setState({ status: Qo })
        }, n.performEnter = function(o) {
            var i = this,
                l = this.props.enter,
                s = this.context ? this.context.isMounting : o,
                a = this.props.nodeRef ? [s] : [gl.findDOMNode(this), s],
                u = a[0],
                c = a[1],
                d = this.getTimeouts(),
                p = s ? d.appear : d.enter;
            if (!o && !l || Op.disabled) { this.safeSetState({ status: Fr }, function() { i.props.onEntered(u) }); return }
            this.props.onEnter(u, c), this.safeSetState({ status: hr }, function() { i.props.onEntering(u, c), i.onTransitionEnd(p, function() { i.safeSetState({ status: Fr }, function() { i.props.onEntered(u, c) }) }) })
        }, n.performExit = function() {
            var o = this,
                i = this.props.exit,
                l = this.getTimeouts(),
                s = this.props.nodeRef ? void 0 : gl.findDOMNode(this);
            if (!i || Op.disabled) { this.safeSetState({ status: pr }, function() { o.props.onExited(s) }); return }
            this.props.onExit(s), this.safeSetState({ status: pc }, function() { o.props.onExiting(s), o.onTransitionEnd(l.exit, function() { o.safeSetState({ status: pr }, function() { o.props.onExited(s) }) }) })
        }, n.cancelNextCallback = function() { this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null) }, n.safeSetState = function(o, i) { i = this.setNextCallback(i), this.setState(o, i) }, n.setNextCallback = function(o) {
            var i = this,
                l = !0;
            return this.nextCallback = function(s) { l && (l = !1, i.nextCallback = null, o(s)) }, this.nextCallback.cancel = function() { l = !1 }, this.nextCallback
        }, n.onTransitionEnd = function(o, i) {
            this.setNextCallback(i);
            var l = this.props.nodeRef ? this.props.nodeRef.current : gl.findDOMNode(this),
                s = o == null && !this.props.addEndListener;
            if (!l || s) { setTimeout(this.nextCallback, 0); return }
            if (this.props.addEndListener) {
                var a = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback],
                    u = a[0],
                    c = a[1];
                this.props.addEndListener(u, c)
            }
            o != null && setTimeout(this.nextCallback, o)
        }, n.render = function() {
            var o = this.state.status;
            if (o === Qo) return null;
            var i = this.props,
                l = i.children;
            i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
            var s = q(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return be.createElement(hs.Provider, { value: null }, typeof l == "function" ? l(o, s) : be.cloneElement(be.Children.only(l), s))
        }, t
    }(be.Component);
zn.contextType = hs;
zn.propTypes = {};

function Ar() {}
zn.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: Ar, onEntering: Ar, onEntered: Ar, onExit: Ar, onExiting: Ar, onExited: Ar };
zn.UNMOUNTED = Qo;
zn.EXITED = pr;
zn.ENTERING = hr;
zn.ENTERED = Fr;
zn.EXITING = pc;
const ev = zn;

function qw(e) { if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

function Ld(e, t) {
    var n = function(i) { return t && f.isValidElement(i) ? t(i) : i },
        r = Object.create(null);
    return e && f.Children.map(e, function(o) { return o }).forEach(function(o) { r[o.key] = n(o) }), r
}

function Qw(e, t) {
    e = e || {}, t = t || {};

    function n(c) { return c in t ? t[c] : e[c] }
    var r = Object.create(null),
        o = [];
    for (var i in e) i in t ? o.length && (r[i] = o, o = []) : o.push(i);
    var l, s = {};
    for (var a in t) {
        if (r[a])
            for (l = 0; l < r[a].length; l++) {
                var u = r[a][l];
                s[r[a][l]] = n(u)
            }
        s[a] = n(a)
    }
    for (l = 0; l < o.length; l++) s[o[l]] = n(o[l]);
    return s
}

function yr(e, t, n) { return n[t] != null ? n[t] : e.props[t] }

function Zw(e, t) { return Ld(e.children, function(n) { return f.cloneElement(n, { onExited: t.bind(null, n), in: !0, appear: yr(n, "appear", e), enter: yr(n, "enter", e), exit: yr(n, "exit", e) }) }) }

function Jw(e, t, n) {
    var r = Ld(e.children),
        o = Qw(t, r);
    return Object.keys(o).forEach(function(i) {
        var l = o[i];
        if (f.isValidElement(l)) {
            var s = i in t,
                a = i in r,
                u = t[i],
                c = f.isValidElement(u) && !u.props.in;
            a && (!s || c) ? o[i] = f.cloneElement(l, { onExited: n.bind(null, l), in: !0, exit: yr(l, "exit", e), enter: yr(l, "enter", e) }) : !a && s && !c ? o[i] = f.cloneElement(l, { in: !1 }) : a && s && f.isValidElement(u) && (o[i] = f.cloneElement(l, { onExited: n.bind(null, l), in: u.props.in, exit: yr(l, "exit", e), enter: yr(l, "enter", e) }))
        }
    }), o
}
var eb = Object.values || function(e) { return Object.keys(e).map(function(t) { return e[t] }) },
    tb = { component: "div", childFactory: function(t) { return t } },
    Dd = function(e) {
        Jg(t, e);

        function t(r, o) {
            var i;
            i = e.call(this, r, o) || this;
            var l = i.handleExited.bind(qw(i));
            return i.state = { contextValue: { isMounting: !0 }, handleExited: l, firstRender: !0 }, i
        }
        var n = t.prototype;
        return n.componentDidMount = function() { this.mounted = !0, this.setState({ contextValue: { isMounting: !1 } }) }, n.componentWillUnmount = function() { this.mounted = !1 }, t.getDerivedStateFromProps = function(o, i) {
            var l = i.children,
                s = i.handleExited,
                a = i.firstRender;
            return { children: a ? Zw(o, s) : Jw(o, l, s), firstRender: !1 }
        }, n.handleExited = function(o, i) {
            var l = Ld(this.props.children);
            o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) { var a = R({}, s.children); return delete a[o.key], { children: a } }))
        }, n.render = function() {
            var o = this.props,
                i = o.component,
                l = o.childFactory,
                s = q(o, ["component", "childFactory"]),
                a = this.state.contextValue,
                u = eb(this.state.children).map(l);
            return delete s.appear, delete s.enter, delete s.exit, i === null ? be.createElement(hs.Provider, { value: a }, u) : be.createElement(hs.Provider, { value: a }, be.createElement(i, s, u))
        }, t
    }(be.Component);
Dd.propTypes = {};
Dd.defaultProps = tb;
const nb = Dd;

function rb(e) { const { className: t, classes: n, pulsate: r = !1, rippleX: o, rippleY: i, rippleSize: l, in: s, onExited: a, timeout: u } = e, [c, d] = f.useState(!1), p = ie(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), x = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o }, S = ie(n.child, c && n.childLeaving, r && n.childPulsate); return !s && !c && d(!0), f.useEffect(() => { if (!s && a != null) { const y = setTimeout(a, u); return () => { clearTimeout(y) } } }, [a, s, u]), k.jsx("span", { className: p, style: x, children: k.jsx("span", { className: S }) }) }
const ob = ze("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
    Vt = ob,
    ib = ["center", "classes", "className"];
let sa = e => e,
    _p, Lp, Dp, zp;
const hc = 550,
    lb = 80,
    sb = kd(_p || (_p = sa `
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),
    ab = kd(Lp || (Lp = sa `
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),
    ub = kd(Dp || (Dp = sa `
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),
    cb = Q("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }),
    db = Q(rb, { name: "MuiTouchRipple", slot: "Ripple" })(zp || (zp = sa `
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Vt.rippleVisible, sb, hc, ({ theme: e }) => e.transitions.easing.easeInOut, Vt.ripplePulsate, ({ theme: e }) => e.transitions.duration.shorter, Vt.child, Vt.childLeaving, ab, hc, ({ theme: e }) => e.transitions.easing.easeInOut, Vt.childPulsate, ub, ({ theme: e }) => e.transitions.easing.easeInOut),
    fb = f.forwardRef(function(t, n) {
        const r = Ue({ props: t, name: "MuiTouchRipple" }),
            { center: o = !1, classes: i = {}, className: l } = r,
            s = q(r, ib),
            [a, u] = f.useState([]),
            c = f.useRef(0),
            d = f.useRef(null);
        f.useEffect(() => { d.current && (d.current(), d.current = null) }, [a]);
        const p = f.useRef(!1),
            x = f.useRef(0),
            S = f.useRef(null),
            y = f.useRef(null);
        f.useEffect(() => () => { x.current && clearTimeout(x.current) }, []);
        const E = f.useCallback(v => {
                const { pulsate: b, rippleX: C, rippleY: w, rippleSize: T, cb: M } = v;
                u(P => [...P, k.jsx(db, { classes: { ripple: ie(i.ripple, Vt.ripple), rippleVisible: ie(i.rippleVisible, Vt.rippleVisible), ripplePulsate: ie(i.ripplePulsate, Vt.ripplePulsate), child: ie(i.child, Vt.child), childLeaving: ie(i.childLeaving, Vt.childLeaving), childPulsate: ie(i.childPulsate, Vt.childPulsate) }, timeout: hc, pulsate: b, rippleX: C, rippleY: w, rippleSize: T }, c.current)]), c.current += 1, d.current = M
            }, [i]),
            g = f.useCallback((v = {}, b = {}, C = () => {}) => {
                const { pulsate: w = !1, center: T = o || b.pulsate, fakeElement: M = !1 } = b;
                if ((v == null ? void 0 : v.type) === "mousedown" && p.current) { p.current = !1; return }(v == null ? void 0 : v.type) === "touchstart" && (p.current = !0);
                const P = M ? null : y.current,
                    O = P ? P.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
                let F, A, z;
                if (T || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) F = Math.round(O.width / 2), A = Math.round(O.height / 2);
                else {
                    const { clientX: I, clientY: D } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
                    F = Math.round(I - O.left), A = Math.round(D - O.top)
                }
                if (T) z = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), z % 2 === 0 && (z += 1);
                else {
                    const I = Math.max(Math.abs((P ? P.clientWidth : 0) - F), F) * 2 + 2,
                        D = Math.max(Math.abs((P ? P.clientHeight : 0) - A), A) * 2 + 2;
                    z = Math.sqrt(I ** 2 + D ** 2)
                }
                v != null && v.touches ? S.current === null && (S.current = () => { E({ pulsate: w, rippleX: F, rippleY: A, rippleSize: z, cb: C }) }, x.current = setTimeout(() => { S.current && (S.current(), S.current = null) }, lb)) : E({ pulsate: w, rippleX: F, rippleY: A, rippleSize: z, cb: C })
            }, [o, E]),
            h = f.useCallback(() => { g({}, { pulsate: !0 }) }, [g]),
            m = f.useCallback((v, b) => {
                if (clearTimeout(x.current), (v == null ? void 0 : v.type) === "touchend" && S.current) { S.current(), S.current = null, x.current = setTimeout(() => { m(v, b) }); return }
                S.current = null, u(C => C.length > 0 ? C.slice(1) : C), d.current = b
            }, []);
        return f.useImperativeHandle(n, () => ({ pulsate: h, start: g, stop: m }), [h, g, m]), k.jsx(cb, R({ className: ie(Vt.root, i.root, l), ref: y }, s, { children: k.jsx(nb, { component: null, exit: !0, children: a }) }))
    }),
    pb = fb;

function hb(e) { return De("MuiButtonBase", e) }
const mb = ze("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    gb = mb,
    vb = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
    yb = e => { const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o } = e, l = Be({ root: ["root", t && "disabled", n && "focusVisible"] }, hb, o); return n && r && (l.root += ` ${r}`), l },
    xb = Q("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (e, t) => t.root })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${gb.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }),
    Sb = f.forwardRef(function(t, n) {
        const r = Ue({ props: t, name: "MuiButtonBase" }),
            { action: o, centerRipple: i = !1, children: l, className: s, component: a = "button", disabled: u = !1, disableRipple: c = !1, disableTouchRipple: d = !1, focusRipple: p = !1, LinkComponent: x = "a", onBlur: S, onClick: y, onContextMenu: E, onDragLeave: g, onFocus: h, onFocusVisible: m, onKeyDown: v, onKeyUp: b, onMouseDown: C, onMouseLeave: w, onMouseUp: T, onTouchEnd: M, onTouchMove: P, onTouchStart: O, tabIndex: F = 0, TouchRippleProps: A, touchRippleRef: z, type: I } = r,
            D = q(r, vb),
            _ = f.useRef(null),
            $ = f.useRef(null),
            N = Rt($, z),
            { isFocusVisibleRef: j, onFocus: K, onBlur: U, ref: J } = A1(),
            [V, ne] = f.useState(!1);
        u && V && ne(!1), f.useImperativeHandle(o, () => ({ focusVisible: () => { ne(!0), _.current.focus() } }), []);
        const [G, Ee] = f.useState(!1);
        f.useEffect(() => { Ee(!0) }, []);
        const ke = G && !c && !u;
        f.useEffect(() => { V && p && !c && G && $.current.pulsate() }, [c, p, V, G]);

        function ue(W, Ut, yt = d) { return Zr(An => (Ut && Ut(An), !yt && $.current && $.current[W](An), !0)) }
        const X = ue("start", C),
            ee = ue("stop", E),
            re = ue("stop", g),
            Y = ue("stop", T),
            Z = ue("stop", W => { V && W.preventDefault(), w && w(W) }),
            ce = ue("start", O),
            ut = ue("stop", M),
            ct = ue("stop", P),
            dt = ue("stop", W => { U(W), j.current === !1 && ne(!1), S && S(W) }, !1),
            ft = Zr(W => { _.current || (_.current = W.currentTarget), K(W), j.current === !0 && (ne(!0), m && m(W)), h && h(W) }),
            _e = () => { const W = _.current; return a && a !== "button" && !(W.tagName === "A" && W.href) },
            ge = f.useRef(!1),
            vt = Zr(W => { p && !ge.current && V && $.current && W.key === " " && (ge.current = !0, $.current.stop(W, () => { $.current.start(W) })), W.target === W.currentTarget && _e() && W.key === " " && W.preventDefault(), v && v(W), W.target === W.currentTarget && _e() && W.key === "Enter" && !u && (W.preventDefault(), y && y(W)) }),
            Qe = Zr(W => { p && W.key === " " && $.current && V && !W.defaultPrevented && (ge.current = !1, $.current.stop(W, () => { $.current.pulsate(W) })), b && b(W), y && W.target === W.currentTarget && _e() && W.key === " " && !W.defaultPrevented && y(W) });
        let xe = a;
        xe === "button" && (D.href || D.to) && (xe = x);
        const Bt = {};
        xe === "button" ? (Bt.type = I === void 0 ? "button" : I, Bt.disabled = u) : (!D.href && !D.to && (Bt.role = "button"), u && (Bt["aria-disabled"] = u));
        const hn = Rt(n, J, _),
            rt = R({}, r, { centerRipple: i, component: a, disabled: u, disableRipple: c, disableTouchRipple: d, focusRipple: p, tabIndex: F, focusVisible: V }),
            oe = yb(rt);
        return k.jsxs(xb, R({ as: xe, className: ie(oe.root, s), ownerState: rt, onBlur: dt, onClick: y, onContextMenu: ee, onFocus: ft, onKeyDown: vt, onKeyUp: Qe, onMouseDown: X, onMouseLeave: Z, onMouseUp: Y, onDragLeave: re, onTouchEnd: ut, onTouchMove: ct, onTouchStart: ce, ref: hn, tabIndex: u ? -1 : F, type: I }, Bt, D, { children: [l, ke ? k.jsx(pb, R({ ref: N, center: i }, A)) : null] }))
    }),
    wb = Sb;

function bb(e) { return De("MuiButton", e) }
const Cb = ze("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]),
    yl = Cb,
    Eb = f.createContext({}),
    kb = Eb,
    Rb = f.createContext(void 0),
    Tb = Rb,
    Pb = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
    $b = e => { const { color: t, disableElevation: n, fullWidth: r, size: o, variant: i, classes: l } = e, s = { root: ["root", i, `${i}${ae(t)}`, `size${ae(o)}`, `${i}Size${ae(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"], label: ["label"], startIcon: ["startIcon", `iconSize${ae(o)}`], endIcon: ["endIcon", `iconSize${ae(o)}`] }, a = Be(s, bb, l); return R({}, l, a) },
    tv = e => R({}, e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } }, e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } }, e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }),
    Ib = Q(wb, { shouldForwardProp: e => pn(e) || e === "classes", name: "MuiButton", slot: "Root", overridesResolver: (e, t) => { const { ownerState: n } = e; return [t.root, t[n.variant], t[`${n.variant}${ae(n.color)}`], t[`size${ae(n.size)}`], t[`${n.variant}Size${ae(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth] } })(({ theme: e, ownerState: t }) => {
        var n, r;
        const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800],
            i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
        return R({}, e.typography.button, { minWidth: 64, padding: "6px 16px", borderRadius: (e.vars || e).shape.borderRadius, transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], { duration: e.transitions.duration.short }), "&:hover": R({ textDecoration: "none", backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Jr(e.palette.text.primary, e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, t.variant === "text" && t.color !== "inherit" && { backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Jr(e.palette[t.color].main, e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, t.variant === "outlined" && t.color !== "inherit" && { border: `1px solid ${(e.vars||e).palette[t.color].main}`, backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Jr(e.palette[t.color].main, e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, t.variant === "contained" && { backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i, boxShadow: (e.vars || e).shadows[4], "@media (hover: none)": { boxShadow: (e.vars || e).shadows[2], backgroundColor: (e.vars || e).palette.grey[300] } }, t.variant === "contained" && t.color !== "inherit" && { backgroundColor: (e.vars || e).palette[t.color].dark, "@media (hover: none)": { backgroundColor: (e.vars || e).palette[t.color].main } }), "&:active": R({}, t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }), [`&.${yl.focusVisible}`]: R({}, t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }), [`&.${yl.disabled}`]: R({ color: (e.vars || e).palette.action.disabled }, t.variant === "outlined" && { border: `1px solid ${(e.vars||e).palette.action.disabledBackground}` }, t.variant === "contained" && { color: (e.vars || e).palette.action.disabled, boxShadow: (e.vars || e).shadows[0], backgroundColor: (e.vars || e).palette.action.disabledBackground }) }, t.variant === "text" && { padding: "6px 8px" }, t.variant === "text" && t.color !== "inherit" && { color: (e.vars || e).palette[t.color].main }, t.variant === "outlined" && { padding: "5px 15px", border: "1px solid currentColor" }, t.variant === "outlined" && t.color !== "inherit" && { color: (e.vars || e).palette[t.color].main, border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Jr(e.palette[t.color].main,.5)}` }, t.variant === "contained" && { color: e.vars ? e.vars.palette.text.primary : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]), backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o, boxShadow: (e.vars || e).shadows[2] }, t.variant === "contained" && t.color !== "inherit" && { color: (e.vars || e).palette[t.color].contrastText, backgroundColor: (e.vars || e).palette[t.color].main }, t.color === "inherit" && { color: "inherit", borderColor: "currentColor" }, t.size === "small" && t.variant === "text" && { padding: "4px 5px", fontSize: e.typography.pxToRem(13) }, t.size === "large" && t.variant === "text" && { padding: "8px 11px", fontSize: e.typography.pxToRem(15) }, t.size === "small" && t.variant === "outlined" && { padding: "3px 9px", fontSize: e.typography.pxToRem(13) }, t.size === "large" && t.variant === "outlined" && { padding: "7px 21px", fontSize: e.typography.pxToRem(15) }, t.size === "small" && t.variant === "contained" && { padding: "4px 10px", fontSize: e.typography.pxToRem(13) }, t.size === "large" && t.variant === "contained" && { padding: "8px 22px", fontSize: e.typography.pxToRem(15) }, t.fullWidth && { width: "100%" })
    }, ({ ownerState: e }) => e.disableElevation && { boxShadow: "none", "&:hover": { boxShadow: "none" }, [`&.${yl.focusVisible}`]: { boxShadow: "none" }, "&:active": { boxShadow: "none" }, [`&.${yl.disabled}`]: { boxShadow: "none" } }),
    Mb = Q("span", { name: "MuiButton", slot: "StartIcon", overridesResolver: (e, t) => { const { ownerState: n } = e; return [t.startIcon, t[`iconSize${ae(n.size)}`]] } })(({ ownerState: e }) => R({ display: "inherit", marginRight: 8, marginLeft: -4 }, e.size === "small" && { marginLeft: -2 }, tv(e))),
    Nb = Q("span", { name: "MuiButton", slot: "EndIcon", overridesResolver: (e, t) => { const { ownerState: n } = e; return [t.endIcon, t[`iconSize${ae(n.size)}`]] } })(({ ownerState: e }) => R({ display: "inherit", marginRight: -4, marginLeft: 8 }, e.size === "small" && { marginRight: -2 }, tv(e))),
    Ob = f.forwardRef(function(t, n) {
        const r = f.useContext(kb),
            o = f.useContext(Tb),
            i = gd(r, t),
            l = Ue({ props: i, name: "MuiButton" }),
            { children: s, color: a = "primary", component: u = "button", className: c, disabled: d = !1, disableElevation: p = !1, disableFocusRipple: x = !1, endIcon: S, focusVisibleClassName: y, fullWidth: E = !1, size: g = "medium", startIcon: h, type: m, variant: v = "text" } = l,
            b = q(l, Pb),
            C = R({}, l, { color: a, component: u, disabled: d, disableElevation: p, disableFocusRipple: x, fullWidth: E, size: g, type: m, variant: v }),
            w = $b(C),
            T = h && k.jsx(Mb, { className: w.startIcon, ownerState: C, children: h }),
            M = S && k.jsx(Nb, { className: w.endIcon, ownerState: C, children: S }),
            P = o || "";
        return k.jsxs(Ib, R({ ownerState: C, className: ie(r.className, w.root, c, P), component: u, disabled: d, focusRipple: !x, focusVisibleClassName: ie(w.focusVisible, y), ref: n, type: m }, b, { classes: w, children: [T, s, M] }))
    }),
    wt = Ob;

function ms(e) { return typeof e == "string" }

function _b(e, t, n) { return e === void 0 || ms(e) ? t : R({}, t, { ownerState: R({}, t.ownerState, n) }) }

function nv(e, t = []) { if (e === void 0) return {}; const n = {}; return Object.keys(e).filter(r => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach(r => { n[r] = e[r] }), n }

function Lb(e, t, n) { return typeof e == "function" ? e(t, n) : e }

function Ap(e) { if (e === void 0) return {}; const t = {}; return Object.keys(e).filter(n => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach(n => { t[n] = e[n] }), t }

function Db(e) {
    const { getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: o, className: i } = e;
    if (!t) {
        const x = ie(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className),
            S = R({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
            y = R({}, n, o, r);
        return x.length > 0 && (y.className = x), Object.keys(S).length > 0 && (y.style = S), { props: y, internalRef: void 0 }
    }
    const l = nv(R({}, o, r)),
        s = Ap(r),
        a = Ap(o),
        u = t(l),
        c = ie(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className),
        d = R({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
        p = R({}, u, n, a, s);
    return c.length > 0 && (p.className = c), Object.keys(d).length > 0 && (p.style = d), { props: p, internalRef: u.ref }
}
const zb = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];

function yo(e) { var t; const { elementType: n, externalSlotProps: r, ownerState: o, skipResolvingSlotProps: i = !1 } = e, l = q(e, zb), s = i ? {} : Lb(r, o), { props: a, internalRef: u } = Db(R({}, l, { externalSlotProps: s })), c = Rt(u, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref); return _b(n, R({}, a, { ref: c }), o) }
const Ab = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

function Fb(e) { const t = parseInt(e.getAttribute("tabindex") || "", 10); return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t }

function jb(e) { if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1; const t = r => e.ownerDocument.querySelector(`input[type="radio"]${r}`); let n = t(`[name="${e.name}"]:checked`); return n || (n = t(`[name="${e.name}"]`)), n !== e }

function Bb(e) { return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || jb(e)) }

function Ub(e) {
    const t = [],
        n = [];
    return Array.from(e.querySelectorAll(Ab)).forEach((r, o) => {
        const i = Fb(r);
        i === -1 || !Bb(r) || (i === 0 ? t.push(r) : n.push({ documentOrder: o, tabIndex: i, node: r }))
    }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map(r => r.node).concat(t)
}

function Wb() { return !0 }

function Vb(e) {
    const { children: t, disableAutoFocus: n = !1, disableEnforceFocus: r = !1, disableRestoreFocus: o = !1, getTabbable: i = Ub, isEnabled: l = Wb, open: s } = e, a = f.useRef(!1), u = f.useRef(null), c = f.useRef(null), d = f.useRef(null), p = f.useRef(null), x = f.useRef(!1), S = f.useRef(null), y = Rt(t.ref, S), E = f.useRef(null);
    f.useEffect(() => {!s || !S.current || (x.current = !n) }, [n, s]), f.useEffect(() => { if (!s || !S.current) return; const m = Lt(S.current); return S.current.contains(m.activeElement) || (S.current.hasAttribute("tabIndex") || S.current.setAttribute("tabIndex", "-1"), x.current && S.current.focus()), () => { o || (d.current && d.current.focus && (a.current = !0, d.current.focus()), d.current = null) } }, [s]), f.useEffect(() => {
        if (!s || !S.current) return;
        const m = Lt(S.current),
            v = w => { E.current = w, !(r || !l() || w.key !== "Tab") && m.activeElement === S.current && w.shiftKey && (a.current = !0, c.current && c.current.focus()) },
            b = () => {
                const w = S.current;
                if (w === null) return;
                if (!m.hasFocus() || !l() || a.current) { a.current = !1; return }
                if (w.contains(m.activeElement) || r && m.activeElement !== u.current && m.activeElement !== c.current) return;
                if (m.activeElement !== p.current) p.current = null;
                else if (p.current !== null) return;
                if (!x.current) return;
                let T = [];
                if ((m.activeElement === u.current || m.activeElement === c.current) && (T = i(S.current)), T.length > 0) {
                    var M, P;
                    const O = !!((M = E.current) != null && M.shiftKey && ((P = E.current) == null ? void 0 : P.key) === "Tab"),
                        F = T[0],
                        A = T[T.length - 1];
                    typeof F != "string" && typeof A != "string" && (O ? A.focus() : F.focus())
                } else w.focus()
            };
        m.addEventListener("focusin", b), m.addEventListener("keydown", v, !0);
        const C = setInterval(() => { m.activeElement && m.activeElement.tagName === "BODY" && b() }, 50);
        return () => { clearInterval(C), m.removeEventListener("focusin", b), m.removeEventListener("keydown", v, !0) }
    }, [n, r, o, l, s, i]);
    const g = m => {
            d.current === null && (d.current = m.relatedTarget), x.current = !0, p.current = m.target;
            const v = t.props.onFocus;
            v && v(m)
        },
        h = m => { d.current === null && (d.current = m.relatedTarget), x.current = !0 };
    return k.jsxs(f.Fragment, { children: [k.jsx("div", { tabIndex: s ? 0 : -1, onFocus: h, ref: u, "data-testid": "sentinelStart" }), f.cloneElement(t, { ref: y, onFocus: g }), k.jsx("div", { tabIndex: s ? 0 : -1, onFocus: h, ref: c, "data-testid": "sentinelEnd" })] })
}

function Hb(e) { return typeof e == "function" ? e() : e }
const Kb = f.forwardRef(function(t, n) { const { children: r, container: o, disablePortal: i = !1 } = t, [l, s] = f.useState(null), a = Rt(f.isValidElement(r) ? r.ref : null, n); if (Tr(() => { i || s(Hb(o) || document.body) }, [o, i]), Tr(() => { if (l && !i) return lc(n, l), () => { lc(n, null) } }, [n, l, i]), i) { if (f.isValidElement(r)) { const u = { ref: a }; return f.cloneElement(r, u) } return k.jsx(f.Fragment, { children: r }) } return k.jsx(f.Fragment, { children: l && wn.createPortal(r, l) }) });

function Gb(e) { const t = Lt(e); return t.body === e ? Rr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight }

function ui(e, t) { t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden") }

function Fp(e) { return parseInt(Rr(e).getComputedStyle(e).paddingRight, 10) || 0 }

function Xb(e) {
    const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1,
        r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return n || r
}

function jp(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, l => {
        const s = i.indexOf(l) === -1,
            a = !Xb(l);
        s && a && ui(l, o)
    })
}

function ru(e, t) { let n = -1; return e.some((r, o) => t(r) ? (n = o, !0) : !1), n }

function Yb(e, t) {
    const n = [],
        r = e.container;
    if (!t.disableScrollLock) {
        if (Gb(r)) {
            const l = Ig(Lt(r));
            n.push({ value: r.style.paddingRight, property: "padding-right", el: r }), r.style.paddingRight = `${Fp(r)+l}px`;
            const s = Lt(r).querySelectorAll(".mui-fixed");
            [].forEach.call(s, a => { n.push({ value: a.style.paddingRight, property: "padding-right", el: a }), a.style.paddingRight = `${Fp(a)+l}px` })
        }
        let i;
        if (r.parentNode instanceof DocumentFragment) i = Lt(r).body;
        else {
            const l = r.parentElement,
                s = Rr(r);
            i = (l == null ? void 0 : l.nodeName) === "HTML" && s.getComputedStyle(l).overflowY === "scroll" ? l : r
        }
        n.push({ value: i.style.overflow, property: "overflow", el: i }, { value: i.style.overflowX, property: "overflow-x", el: i }, { value: i.style.overflowY, property: "overflow-y", el: i }), i.style.overflow = "hidden"
    }
    return () => { n.forEach(({ value: i, el: l, property: s }) => { i ? l.style.setProperty(s, i) : l.style.removeProperty(s) }) }
}

function qb(e) { const t = []; return [].forEach.call(e.children, n => { n.getAttribute("aria-hidden") === "true" && t.push(n) }), t }
class Qb {
    constructor() { this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [] }
    add(t, n) {
        let r = this.modals.indexOf(t);
        if (r !== -1) return r;
        r = this.modals.length, this.modals.push(t), t.modalRef && ui(t.modalRef, !1);
        const o = qb(n);
        jp(n, t.mount, t.modalRef, o, !0);
        const i = ru(this.containers, l => l.container === n);
        return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({ modals: [t], container: n, restore: null, hiddenSiblings: o }), r)
    }
    mount(t, n) {
        const r = ru(this.containers, i => i.modals.indexOf(t) !== -1),
            o = this.containers[r];
        o.restore || (o.restore = Yb(o, n))
    }
    remove(t, n = !0) {
        const r = this.modals.indexOf(t);
        if (r === -1) return r;
        const o = ru(this.containers, l => l.modals.indexOf(t) !== -1),
            i = this.containers[o];
        if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0) i.restore && i.restore(), t.modalRef && ui(t.modalRef, n), jp(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
        else {
            const l = i.modals[i.modals.length - 1];
            l.modalRef && ui(l.modalRef, !1)
        }
        return r
    }
    isTopModal(t) { return this.modals.length > 0 && this.modals[this.modals.length - 1] === t }
}

function Zb(e) { return typeof e == "function" ? e() : e }

function Jb(e) { return e ? e.props.hasOwnProperty("in") : !1 }
const eC = new Qb;

function tC(e) {
    const { container: t, disableEscapeKeyDown: n = !1, disableScrollLock: r = !1, manager: o = eC, closeAfterTransition: i = !1, onTransitionEnter: l, onTransitionExited: s, children: a, onClose: u, open: c, rootRef: d } = e, p = f.useRef({}), x = f.useRef(null), S = f.useRef(null), y = Rt(S, d), [E, g] = f.useState(!c), h = Jb(a);
    let m = !0;
    (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
    const v = () => Lt(x.current),
        b = () => (p.current.modalRef = S.current, p.current.mount = x.current, p.current),
        C = () => { o.mount(b(), { disableScrollLock: r }), S.current && (S.current.scrollTop = 0) },
        w = Zr(() => {
            const D = Zb(t) || v().body;
            o.add(b(), D), S.current && C()
        }),
        T = f.useCallback(() => o.isTopModal(b()), [o]),
        M = Zr(D => { x.current = D, D && (c && T() ? C() : S.current && ui(S.current, m)) }),
        P = f.useCallback(() => { o.remove(b(), m) }, [m, o]);
    f.useEffect(() => () => { P() }, [P]), f.useEffect(() => { c ? w() : (!h || !i) && P() }, [c, P, h, i, w]);
    const O = D => _ => {
            var $;
            ($ = D.onKeyDown) == null || $.call(D, _), !(_.key !== "Escape" || _.which === 229 || !T()) && (n || (_.stopPropagation(), u && u(_, "escapeKeyDown")))
        },
        F = D => _ => {
            var $;
            ($ = D.onClick) == null || $.call(D, _), _.target === _.currentTarget && u && u(_, "backdropClick")
        };
    return {
        getRootProps: (D = {}) => {
            const _ = nv(e);
            delete _.onTransitionEnter, delete _.onTransitionExited;
            const $ = R({}, _, D);
            return R({ role: "presentation" }, $, { onKeyDown: O($), ref: y })
        },
        getBackdropProps: (D = {}) => { const _ = D; return R({ "aria-hidden": !0 }, _, { onClick: F(_), open: c }) },
        getTransitionProps: () => {
            const D = () => { g(!1), l && l() },
                _ = () => { g(!0), s && s(), i && P() };
            return { onEnter: ap(D, a == null ? void 0 : a.props.onEnter), onExited: ap(_, a == null ? void 0 : a.props.onExited) }
        },
        rootRef: y,
        portalRef: M,
        isTopModal: T,
        exited: E,
        hasTransition: h
    }
}
const nC = ["onChange", "maxRows", "minRows", "style", "value"];

function xl(e) { return parseInt(e, 10) || 0 }
const rC = { shadow: { visibility: "hidden", position: "absolute", overflow: "hidden", height: 0, top: 0, left: 0, transform: "translateZ(0)" } };

function Bp(e) { return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflow }
const oC = f.forwardRef(function(t, n) {
    const { onChange: r, maxRows: o, minRows: i = 1, style: l, value: s } = t, a = q(t, nC), { current: u } = f.useRef(s != null), c = f.useRef(null), d = Rt(n, c), p = f.useRef(null), x = f.useRef(0), [S, y] = f.useState({ outerHeightStyle: 0 }), E = f.useCallback(() => {
        const v = c.current,
            C = Rr(v).getComputedStyle(v);
        if (C.width === "0px") return { outerHeightStyle: 0 };
        const w = p.current;
        w.style.width = C.width, w.value = v.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
        const T = C.boxSizing,
            M = xl(C.paddingBottom) + xl(C.paddingTop),
            P = xl(C.borderBottomWidth) + xl(C.borderTopWidth),
            O = w.scrollHeight;
        w.value = "x";
        const F = w.scrollHeight;
        let A = O;
        i && (A = Math.max(Number(i) * F, A)), o && (A = Math.min(Number(o) * F, A)), A = Math.max(A, F);
        const z = A + (T === "border-box" ? M + P : 0),
            I = Math.abs(A - O) <= 1;
        return { outerHeightStyle: z, overflow: I }
    }, [o, i, t.placeholder]), g = (v, b) => { const { outerHeightStyle: C, overflow: w } = b; return x.current < 20 && (C > 0 && Math.abs((v.outerHeightStyle || 0) - C) > 1 || v.overflow !== w) ? (x.current += 1, { overflow: w, outerHeightStyle: C }) : v }, h = f.useCallback(() => {
        const v = E();
        Bp(v) || y(b => g(b, v))
    }, [E]);
    Tr(() => {
        const v = () => {
                const O = E();
                Bp(O) || wn.flushSync(() => { y(F => g(F, O)) })
            },
            b = () => { x.current = 0, v() };
        let C;
        const w = $g(b),
            T = c.current,
            M = Rr(T);
        M.addEventListener("resize", w);
        let P;
        return typeof ResizeObserver < "u" && (P = new ResizeObserver(b), P.observe(T)), () => { w.clear(), cancelAnimationFrame(C), M.removeEventListener("resize", w), P && P.disconnect() }
    }, [E]), Tr(() => { h() }), f.useEffect(() => { x.current = 0 }, [s]);
    const m = v => { x.current = 0, u || h(), r && r(v) };
    return k.jsxs(f.Fragment, { children: [k.jsx("textarea", R({ value: s, onChange: m, ref: d, rows: i, style: R({ height: S.outerHeightStyle, overflow: S.overflow ? "hidden" : void 0 }, l) }, a)), k.jsx("textarea", { "aria-hidden": !0, className: t.className, readOnly: !0, ref: p, tabIndex: -1, style: R({}, rC.shadow, l, { paddingTop: 0, paddingBottom: 0 }) })] })
});

function ko({ props: e, states: t, muiFormControl: n }) { return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {}) }
const iC = f.createContext(void 0),
    zd = iC;

function Ro() { return f.useContext(zd) }

function lC(e) { return k.jsx(KS, R({}, e, { defaultTheme: ia, themeId: la })) }

function Up(e) { return e != null && !(Array.isArray(e) && e.length === 0) }

function gs(e, t = !1) { return e && (Up(e.value) && e.value !== "" || t && Up(e.defaultValue) && e.defaultValue !== "") }

function sC(e) { return e.startAdornment }

function aC(e) { return De("MuiInputBase", e) }
const uC = ze("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]),
    xo = uC,
    cC = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"],
    aa = (e, t) => { const { ownerState: n } = e; return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ae(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel] },
    ua = (e, t) => { const { ownerState: n } = e; return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel] },
    dC = e => { const { classes: t, color: n, disabled: r, error: o, endAdornment: i, focused: l, formControl: s, fullWidth: a, hiddenLabel: u, multiline: c, readOnly: d, size: p, startAdornment: x, type: S } = e, y = { root: ["root", `color${ae(n)}`, r && "disabled", o && "error", a && "fullWidth", l && "focused", s && "formControl", p && p !== "medium" && `size${ae(p)}`, c && "multiline", x && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"], input: ["input", r && "disabled", S === "search" && "inputTypeSearch", c && "inputMultiline", p === "small" && "inputSizeSmall", u && "inputHiddenLabel", x && "inputAdornedStart", i && "inputAdornedEnd", d && "readOnly"] }; return Be(y, aC, t) },
    ca = Q("div", { name: "MuiInputBase", slot: "Root", overridesResolver: aa })(({ theme: e, ownerState: t }) => R({}, e.typography.body1, { color: (e.vars || e).palette.text.primary, lineHeight: "1.4375em", boxSizing: "border-box", position: "relative", cursor: "text", display: "inline-flex", alignItems: "center", [`&.${xo.disabled}`]: { color: (e.vars || e).palette.text.disabled, cursor: "default" } }, t.multiline && R({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }), t.fullWidth && { width: "100%" })),
    da = Q("input", { name: "MuiInputBase", slot: "Input", overridesResolver: ua })(({ theme: e, ownerState: t }) => {
        const n = e.palette.mode === "light",
            r = R({ color: "currentColor" }, e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: n ? .42 : .5 }, { transition: e.transitions.create("opacity", { duration: e.transitions.duration.shorter }) }),
            o = { opacity: "0 !important" },
            i = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: n ? .42 : .5 };
        return R({ font: "inherit", letterSpacing: "inherit", color: "currentColor", padding: "4px 0 5px", border: 0, boxSizing: "content-box", background: "none", height: "1.4375em", margin: 0, WebkitTapHighlightColor: "transparent", display: "block", minWidth: 0, width: "100%", animationName: "mui-auto-fill-cancel", animationDuration: "10ms", "&::-webkit-input-placeholder": r, "&::-moz-placeholder": r, "&:-ms-input-placeholder": r, "&::-ms-input-placeholder": r, "&:focus": { outline: 0 }, "&:invalid": { boxShadow: "none" }, "&::-webkit-search-decoration": { WebkitAppearance: "none" }, [`label[data-shrink=false] + .${xo.formControl} &`]: { "&::-webkit-input-placeholder": o, "&::-moz-placeholder": o, "&:-ms-input-placeholder": o, "&::-ms-input-placeholder": o, "&:focus::-webkit-input-placeholder": i, "&:focus::-moz-placeholder": i, "&:focus:-ms-input-placeholder": i, "&:focus::-ms-input-placeholder": i }, [`&.${xo.disabled}`]: { opacity: 1, WebkitTextFillColor: (e.vars || e).palette.text.disabled }, "&:-webkit-autofill": { animationDuration: "5000s", animationName: "mui-auto-fill" } }, t.size === "small" && { paddingTop: 1 }, t.multiline && { height: "auto", resize: "none", padding: 0, paddingTop: 0 }, t.type === "search" && { MozAppearance: "textfield" })
    }),
    fC = k.jsx(lC, { styles: { "@keyframes mui-auto-fill": { from: { display: "block" } }, "@keyframes mui-auto-fill-cancel": { from: { display: "block" } } } }),
    pC = f.forwardRef(function(t, n) {
        var r;
        const o = Ue({ props: t, name: "MuiInputBase" }),
            { "aria-describedby": i, autoComplete: l, autoFocus: s, className: a, components: u = {}, componentsProps: c = {}, defaultValue: d, disabled: p, disableInjectingGlobalStyles: x, endAdornment: S, fullWidth: y = !1, id: E, inputComponent: g = "input", inputProps: h = {}, inputRef: m, maxRows: v, minRows: b, multiline: C = !1, name: w, onBlur: T, onChange: M, onClick: P, onFocus: O, onKeyDown: F, onKeyUp: A, placeholder: z, readOnly: I, renderSuffix: D, rows: _, slotProps: $ = {}, slots: N = {}, startAdornment: j, type: K = "text", value: U } = o,
            J = q(o, cC),
            V = h.value != null ? h.value : U,
            { current: ne } = f.useRef(V != null),
            G = f.useRef(),
            Ee = f.useCallback(oe => {}, []),
            ke = Rt(G, m, h.ref, Ee),
            [ue, X] = f.useState(!1),
            ee = Ro(),
            re = ko({ props: o, muiFormControl: ee, states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"] });
        re.focused = ee ? ee.focused : ue, f.useEffect(() => {!ee && p && ue && (X(!1), T && T()) }, [ee, p, ue, T]);
        const Y = ee && ee.onFilled,
            Z = ee && ee.onEmpty,
            ce = f.useCallback(oe => { gs(oe) ? Y && Y() : Z && Z() }, [Y, Z]);
        Tr(() => { ne && ce({ value: V }) }, [V, ce, ne]);
        const ut = oe => {
                if (re.disabled) { oe.stopPropagation(); return }
                O && O(oe), h.onFocus && h.onFocus(oe), ee && ee.onFocus ? ee.onFocus(oe) : X(!0)
            },
            ct = oe => { T && T(oe), h.onBlur && h.onBlur(oe), ee && ee.onBlur ? ee.onBlur(oe) : X(!1) },
            dt = (oe, ...W) => {
                if (!ne) {
                    const Ut = oe.target || G.current;
                    if (Ut == null) throw new Error(lr(1));
                    ce({ value: Ut.value })
                }
                h.onChange && h.onChange(oe, ...W), M && M(oe, ...W)
            };
        f.useEffect(() => { ce(G.current) }, []);
        const ft = oe => { G.current && oe.currentTarget === oe.target && G.current.focus(), P && P(oe) };
        let _e = g,
            ge = h;
        C && _e === "input" && (_ ? ge = R({ type: void 0, minRows: _, maxRows: _ }, ge) : ge = R({ type: void 0, maxRows: v, minRows: b }, ge), _e = oC);
        const vt = oe => { ce(oe.animationName === "mui-auto-fill-cancel" ? G.current : { value: "x" }) };
        f.useEffect(() => { ee && ee.setAdornedStart(!!j) }, [ee, j]);
        const Qe = R({}, o, { color: re.color || "primary", disabled: re.disabled, endAdornment: S, error: re.error, focused: re.focused, formControl: ee, fullWidth: y, hiddenLabel: re.hiddenLabel, multiline: C, size: re.size, startAdornment: j, type: K }),
            xe = dC(Qe),
            Bt = N.root || u.Root || ca,
            hn = $.root || c.root || {},
            rt = N.input || u.Input || da;
        return ge = R({}, ge, (r = $.input) != null ? r : c.input), k.jsxs(f.Fragment, { children: [!x && fC, k.jsxs(Bt, R({}, hn, !ms(Bt) && { ownerState: R({}, Qe, hn.ownerState) }, { ref: n, onClick: ft }, J, { className: ie(xe.root, hn.className, a, I && "MuiInputBase-readOnly"), children: [j, k.jsx(zd.Provider, { value: null, children: k.jsx(rt, R({ ownerState: Qe, "aria-invalid": re.error, "aria-describedby": i, autoComplete: l, autoFocus: s, defaultValue: d, disabled: re.disabled, id: E, onAnimationStart: vt, name: w, placeholder: z, readOnly: I, required: re.required, rows: _, value: V, onKeyDown: F, onKeyUp: A, type: K }, ge, !ms(rt) && { as: _e, ownerState: R({}, Qe, ge.ownerState) }, { ref: ke, className: ie(xe.input, ge.className, I && "MuiInputBase-readOnly"), onBlur: ct, onChange: dt, onFocus: ut })) }), S, D ? D(R({}, re, { startAdornment: j })) : null] }))] })
    }),
    Ad = pC;

function hC(e) { return De("MuiInput", e) }
const mC = R({}, xo, ze("MuiInput", ["root", "underline", "input"])),
    Vo = mC,
    gC = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"],
    vC = e => { const { classes: t, disableUnderline: n } = e, o = Be({ root: ["root", !n && "underline"], input: ["input"] }, hC, t); return R({}, t, o) },
    yC = Q(ca, { shouldForwardProp: e => pn(e) || e === "classes", name: "MuiInput", slot: "Root", overridesResolver: (e, t) => { const { ownerState: n } = e; return [...aa(e, t), !n.disableUnderline && t.underline] } })(({ theme: e, ownerState: t }) => { let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)"; return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), R({ position: "relative" }, t.formControl && { "label + &": { marginTop: 16 } }, !t.disableUnderline && { "&:after": { borderBottom: `2px solid ${(e.vars||e).palette[t.color].main}`, left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: e.transitions.create("transform", { duration: e.transitions.duration.shorter, easing: e.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${Vo.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${Vo.error}`]: { "&:before, &:after": { borderBottomColor: (e.vars || e).palette.error.main } }, "&:before": { borderBottom: `1px solid ${r}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: e.transitions.create("border-bottom-color", { duration: e.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${Vo.disabled}, .${Vo.error}):before`]: { borderBottom: `2px solid ${(e.vars||e).palette.text.primary}`, "@media (hover: none)": { borderBottom: `1px solid ${r}` } }, [`&.${Vo.disabled}:before`]: { borderBottomStyle: "dotted" } }) }),
    xC = Q(da, { name: "MuiInput", slot: "Input", overridesResolver: ua })({}),
    rv = f.forwardRef(function(t, n) {
        var r, o, i, l;
        const s = Ue({ props: t, name: "MuiInput" }),
            { disableUnderline: a, components: u = {}, componentsProps: c, fullWidth: d = !1, inputComponent: p = "input", multiline: x = !1, slotProps: S, slots: y = {}, type: E = "text" } = s,
            g = q(s, gC),
            h = vC(s),
            v = { root: { ownerState: { disableUnderline: a } } },
            b = S ? S : c ? kt(S ? S : c, v) : v,
            C = (r = (o = y.root) != null ? o : u.Root) != null ? r : yC,
            w = (i = (l = y.input) != null ? l : u.Input) != null ? i : xC;
        return k.jsx(Ad, R({ slots: { root: C, input: w }, slotProps: b, fullWidth: d, inputComponent: p, multiline: x, ref: n, type: E }, g, { classes: h }))
    });
rv.muiName = "Input";
const ov = rv;

function SC(e) { return De("MuiFilledInput", e) }
const wC = R({}, xo, ze("MuiFilledInput", ["root", "underline", "input"])),
    cr = wC,
    bC = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"],
    CC = e => { const { classes: t, disableUnderline: n } = e, o = Be({ root: ["root", !n && "underline"], input: ["input"] }, SC, t); return R({}, t, o) },
    EC = Q(ca, { shouldForwardProp: e => pn(e) || e === "classes", name: "MuiFilledInput", slot: "Root", overridesResolver: (e, t) => { const { ownerState: n } = e; return [...aa(e, t), !n.disableUnderline && t.underline] } })(({ theme: e, ownerState: t }) => {
            var n;
            const r = e.palette.mode === "light",
                o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
                i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
                l = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
                s = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
            return R({ position: "relative", backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i, borderTopLeftRadius: (e.vars || e).shape.borderRadius, borderTopRightRadius: (e.vars || e).shape.borderRadius, transition: e.transitions.create("background-color", { duration: e.transitions.duration.shorter, easing: e.transitions.easing.easeOut }), "&:hover": { backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : l, "@media (hover: none)": { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i } }, [`&.${cr.focused}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i }, [`&.${cr.disabled}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s } }, !t.disableUnderline && { "&:after": { borderBottom: `2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`, left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: e.transitions.create("transform", { duration: e.transitions.duration.shorter, easing: e.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${cr.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${cr.error}`]: { "&:before, &:after": { borderBottomColor: (e.vars || e).palette.error.main } }, "&:before": { borderBottom: `1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${cr.disabled}, .${cr.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${cr.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&R({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9}))}),kC=Q(da,{name:"MuiFilledInput",slot:"Input",overridesResolver:ua})(({theme:e,ownerState:t})=>R({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0})),iv=f.forwardRef(function(t,n){var r,o,i,l;const s=Ue({props:t,name:"MuiFilledInput"}),{components:a={},componentsProps:u,fullWidth:c=!1,inputComponent:d="input",multiline:p=!1,slotProps:x,slots:S={},type:y="text"}=s,E=q(s,bC),g=R({},s,{fullWidth:c,inputComponent:d,multiline:p,type:y}),h=CC(s),m={root:{ownerState:g},input:{ownerState:g}},v=x??u?kt(m,x??u):m,b=(r=(o=S.root)!=null?o:a.Root)!=null?r:EC,C=(i=(l=S.input)!=null?l:a.Input)!=null?i:kC;return k.jsx(Ad,R({slots:{root:b,input:C},componentsProps:v,fullWidth:c,inputComponent:d,multiline:p,ref:n,type:y},E,{classes:h}))});iv.muiName="Input";const lv=iv;var Wp;const RC=["children","classes","className","label","notched"],TC=Q("fieldset",{shouldForwardProp:pn})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),PC=Q("legend",{shouldForwardProp:pn})(({ownerState:e,theme:t})=>R({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&R({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function $C(e){const{className:t,label:n,notched:r}=e,o=q(e,RC),i=n!=null&&n!=="",l=R({},e,{notched:r,withLabel:i});return k.jsx(TC,R({"aria-hidden":!0,className:t,ownerState:l},o,{children:k.jsx(PC,{ownerState:l,children:i?k.jsx("span",{children:n}):Wp||(Wp=k.jsx("span",{className:"notranslate",children:"​"}))})}))}function IC(e){return De("MuiOutlinedInput",e)}const MC=R({},xo,ze("MuiOutlinedInput",["root","notchedOutline","input"])),Bn=MC,NC=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],OC=e=>{const{classes:t}=e,r=Be({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},IC,t);return R({},t,r)},_C=Q(ca,{shouldForwardProp:e=>pn(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:aa})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return R({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${Bn.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${Bn.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${Bn.focused} .${Bn.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${Bn.error} .${Bn.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${Bn.disabled} .${Bn.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&R({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),LC=Q($C,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),DC=Q(da,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:ua})(({theme:e,ownerState:t})=>R({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),sv=f.forwardRef(function(t,n){var r,o,i,l,s;const a=Ue({props:t,name:"MuiOutlinedInput"}),{components:u={},fullWidth:c=!1,inputComponent:d="input",label:p,multiline:x=!1,notched:S,slots:y={},type:E="text"}=a,g=q(a,NC),h=OC(a),m=Ro(),v=ko({props:a,muiFormControl:m,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),b=R({},a,{color:v.color||"primary",disabled:v.disabled,error:v.error,focused:v.focused,formControl:m,fullWidth:c,hiddenLabel:v.hiddenLabel,multiline:x,size:v.size,type:E}),C=(r=(o=y.root)!=null?o:u.Root)!=null?r:_C,w=(i=(l=y.input)!=null?l:u.Input)!=null?i:DC;return k.jsx(Ad,R({slots:{root:C,input:w},renderSuffix:T=>k.jsx(LC,{ownerState:b,className:h.notchedOutline,label:p!=null&&p!==""&&v.required?s||(s=k.jsxs(f.Fragment,{children:[p," ","*"]})):p,notched:typeof S<"u"?S:!!(T.startAdornment||T.filled||T.focused)}),fullWidth:c,inputComponent:d,multiline:x,ref:n,type:E},g,{classes:R({},h,{notchedOutline:null})}))});sv.muiName="Input";const av=sv;function zC(e){return De("MuiFormLabel",e)}const AC=ze("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),ci=AC,FC=["children","className","color","component","disabled","error","filled","focused","required"],jC=e=>{const{classes:t,color:n,focused:r,disabled:o,error:i,filled:l,required:s}=e,a={root:["root",`color${ae(n)}`,o&&"disabled",i&&"error",l&&"filled",r&&"focused",s&&"required"],asterisk:["asterisk",i&&"error"]};return Be(a,zC,t)},BC=Q("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>R({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>R({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${ci.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${ci.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${ci.error}`]:{color:(e.vars||e).palette.error.main}})),UC=Q("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${ci.error}`]:{color:(e.vars||e).palette.error.main}})),WC=f.forwardRef(function(t,n){const r=Ue({props:t,name:"MuiFormLabel"}),{children:o,className:i,component:l="label"}=r,s=q(r,FC),a=Ro(),u=ko({props:r,muiFormControl:a,states:["color","required","focused","disabled","error","filled"]}),c=R({},r,{color:u.color||"primary",component:l,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),d=jC(c);return k.jsxs(BC,R({as:l,ownerState:c,className:ie(d.root,i),ref:n},s,{children:[o,u.required&&k.jsxs(UC,{ownerState:c,"aria-hidden":!0,className:d.asterisk,children:[" ","*"]})]}))}),VC=WC;function HC(e){return De("MuiInputLabel",e)}ze("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const KC=["disableAnimation","margin","shrink","variant","className"],GC=e=>{const{classes:t,formControl:n,size:r,shrink:o,disableAnimation:i,variant:l,required:s}=e,a={root:["root",n&&"formControl",!i&&"animated",o&&"shrink",r&&r!=="normal"&&`size${ae(r)}`,l],asterisk:[s&&"asterisk"]},u=Be(a,HC,t);return R({},t,u)},XC=Q(VC,{shouldForwardProp:e=>pn(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${ci.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,n.focused&&t.focused,t[n.variant]]}})(({theme:e,ownerState:t})=>R({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&R({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&R({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&R({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}),t.variant==="standard"&&{"&:not(label) + div":{marginTop:16}})),YC=f.forwardRef(function(t,n){const r=Ue({name:"MuiInputLabel",props:t}),{disableAnimation:o=!1,shrink:i,className:l}=r,s=q(r,KC),a=Ro();let u=i;typeof u>"u"&&a&&(u=a.filled||a.focused||a.adornedStart);const c=ko({props:r,muiFormControl:a,states:["size","variant","required","focused"]}),d=R({},r,{disableAnimation:o,formControl:a,shrink:u,size:c.size,variant:c.variant,required:c.required,focused:c.focused}),p=GC(d);return k.jsx(XC,R({"data-shrink":u,ownerState:d,ref:n,className:ie(p.root,l)},s,{classes:p}))}),qC=YC;function QC(e){return De("MuiFormControl",e)}ze("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const ZC=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],JC=e=>{const{classes:t,margin:n,fullWidth:r}=e,o={root:["root",n!=="none"&&`margin${ae(n)}`,r&&"fullWidth"]};return Be(o,QC,t)},eE=Q("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>R({},t.root,t[`margin${ae(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>R({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),tE=f.forwardRef(function(t,n){const r=Ue({props:t,name:"MuiFormControl"}),{children:o,className:i,color:l="primary",component:s="div",disabled:a=!1,error:u=!1,focused:c,fullWidth:d=!1,hiddenLabel:p=!1,margin:x="none",required:S=!1,size:y="medium",variant:E="outlined"}=r,g=q(r,ZC),h=R({},r,{color:l,component:s,disabled:a,error:u,fullWidth:d,hiddenLabel:p,margin:x,required:S,size:y,variant:E}),m=JC(h),[v,b]=f.useState(()=>{let A=!1;return o&&f.Children.forEach(o,z=>{if(!Ja(z,["Input","Select"]))return;const I=Ja(z,["Select"])?z.props.input:z;I&&sC(I.props)&&(A=!0)}),A}),[C,w]=f.useState(()=>{let A=!1;return o&&f.Children.forEach(o,z=>{Ja(z,["Input","Select"])&&(gs(z.props,!0)||gs(z.props.inputProps,!0))&&(A=!0)}),A}),[T,M]=f.useState(!1);a&&T&&M(!1);const P=c!==void 0&&!a?c:T;let O;const F=f.useMemo(()=>({adornedStart:v,setAdornedStart:b,color:l,disabled:a,error:u,filled:C,focused:P,fullWidth:d,hiddenLabel:p,size:y,onBlur:()=>{M(!1)},onEmpty:()=>{w(!1)},onFilled:()=>{w(!0)},onFocus:()=>{M(!0)},registerEffect:O,required:S,variant:E}),[v,l,a,u,C,P,d,p,O,S,y,E]);return k.jsx(zd.Provider,{value:F,children:k.jsx(eE,R({as:s,ownerState:h,className:ie(m.root,i),ref:n},g,{children:o}))})}),nE=tE;function rE(e){return De("MuiFormHelperText",e)}const oE=ze("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),Vp=oE;var Hp;const iE=["children","className","component","disabled","error","filled","focused","margin","required","variant"],lE=e=>{const{classes:t,contained:n,size:r,disabled:o,error:i,filled:l,focused:s,required:a}=e,u={root:["root",o&&"disabled",i&&"error",r&&`size${ae(r)}`,n&&"contained",s&&"focused",l&&"filled",a&&"required"]};return Be(u,rE,t)},sE=Q("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${ae(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})(({theme:e,ownerState:t})=>R({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Vp.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Vp.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),aE=f.forwardRef(function(t,n){const r=Ue({props:t,name:"MuiFormHelperText"}),{children:o,className:i,component:l="p"}=r,s=q(r,iE),a=Ro(),u=ko({props:r,muiFormControl:a,states:["variant","size","disabled","error","filled","focused","required"]}),c=R({},r,{component:l,contained:u.variant==="filled"||u.variant==="outlined",variant:u.variant,size:u.size,disabled:u.disabled,error:u.error,filled:u.filled,focused:u.focused,required:u.required}),d=lE(c);return k.jsx(sE,R({as:l,ownerState:c,className:ie(d.root,i),ref:n},s,{children:o===" "?Hp||(Hp=k.jsx("span",{className:"notranslate",children:"​"})):o}))}),uE=aE;var ye={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd=Symbol.for("react.element"),jd=Symbol.for("react.portal"),fa=Symbol.for("react.fragment"),pa=Symbol.for("react.strict_mode"),ha=Symbol.for("react.profiler"),ma=Symbol.for("react.provider"),ga=Symbol.for("react.context"),cE=Symbol.for("react.server_context"),va=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),xa=Symbol.for("react.suspense_list"),Sa=Symbol.for("react.memo"),wa=Symbol.for("react.lazy"),dE=Symbol.for("react.offscreen"),uv;uv=Symbol.for("react.module.reference");function en(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fd:switch(e=e.type,e){case fa:case ha:case pa:case ya:case xa:return e;default:switch(e=e&&e.$$typeof,e){case cE:case ga:case va:case wa:case Sa:case ma:return e;default:return t}}case jd:return t}}}ye.ContextConsumer=ga;ye.ContextProvider=ma;ye.Element=Fd;ye.ForwardRef=va;ye.Fragment=fa;ye.Lazy=wa;ye.Memo=Sa;ye.Portal=jd;ye.Profiler=ha;ye.StrictMode=pa;ye.Suspense=ya;ye.SuspenseList=xa;ye.isAsyncMode=function(){return!1};ye.isConcurrentMode=function(){return!1};ye.isContextConsumer=function(e){return en(e)===ga};ye.isContextProvider=function(e){return en(e)===ma};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fd};ye.isForwardRef=function(e){return en(e)===va};ye.isFragment=function(e){return en(e)===fa};ye.isLazy=function(e){return en(e)===wa};ye.isMemo=function(e){return en(e)===Sa};ye.isPortal=function(e){return en(e)===jd};ye.isProfiler=function(e){return en(e)===ha};ye.isStrictMode=function(e){return en(e)===pa};ye.isSuspense=function(e){return en(e)===ya};ye.isSuspenseList=function(e){return en(e)===xa};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fa||e===ha||e===pa||e===ya||e===xa||e===dE||typeof e=="object"&&e!==null&&(e.$$typeof===wa||e.$$typeof===Sa||e.$$typeof===ma||e.$$typeof===ga||e.$$typeof===va||e.$$typeof===uv||e.getModuleId!==void 0)};ye.typeOf=en;const fE=f.createContext({}),pE=fE;function hE(e){return De("MuiList",e)}ze("MuiList",["root","padding","dense","subheader"]);const mE=["children","className","component","dense","disablePadding","subheader"],gE=e=>{const{classes:t,disablePadding:n,dense:r,subheader:o}=e;return Be({root:["root",!n&&"padding",r&&"dense",o&&"subheader"]},hE,t)},vE=Q("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>R({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),yE=f.forwardRef(function(t,n){const r=Ue({props:t,name:"MuiList"}),{children:o,className:i,component:l="ul",dense:s=!1,disablePadding:a=!1,subheader:u}=r,c=q(r,mE),d=f.useMemo(()=>({dense:s}),[s]),p=R({},r,{component:l,dense:s,disablePadding:a}),x=gE(p);return k.jsx(pE.Provider,{value:d,children:k.jsxs(vE,R({as:l,className:ie(x.root,i),ref:n,ownerState:p},c,{children:[u,o]}))})}),xE=yE,SE=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function ou(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Kp(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function cv(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function Ho(e,t,n,r,o,i){let l=!1,s=o(e,t,t?n:!1);for(;s;){if(s===e.firstChild){if(l)return!1;l=!0}const a=r?!1:s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||!cv(s,i)||a)s=o(e,s,n);else return s.focus(),!0}return!1}const wE=f.forwardRef(function(t,n){const{actions:r,autoFocus:o=!1,autoFocusItem:i=!1,children:l,className:s,disabledItemsFocusable:a=!1,disableListWrap:u=!1,onKeyDown:c,variant:d="selectedMenu"}=t,p=q(t,SE),x=f.useRef(null),S=f.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Tr(()=>{o&&x.current.focus()},[o]),f.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(m,v)=>{const b=!x.current.style.width;if(m.clientHeight<x.current.clientHeight&&b){const C=`${Ig(Lt(m))}px`;x.current.style[v.direction==="rtl"?"paddingLeft":"paddingRight"]=C,x.current.style.width=`calc(100% + ${C})`}return x.current}}),[]);const y=m=>{const v=x.current,b=m.key,C=Lt(v).activeElement;if(b==="ArrowDown")m.preventDefault(),Ho(v,C,u,a,ou);else if(b==="ArrowUp")m.preventDefault(),Ho(v,C,u,a,Kp);else if(b==="Home")m.preventDefault(),Ho(v,null,u,a,ou);else if(b==="End")m.preventDefault(),Ho(v,null,u,a,Kp);else if(b.length===1){const w=S.current,T=b.toLowerCase(),M=performance.now();w.keys.length>0&&(M-w.lastTime>500?(w.keys=[],w.repeating=!0,w.previousKeyMatched=!0):w.repeating&&T!==w.keys[0]&&(w.repeating=!1)),w.lastTime=M,w.keys.push(T);const P=C&&!w.repeating&&cv(C,w);w.previousKeyMatched&&(P||Ho(v,C,!1,a,ou,w))?m.preventDefault():w.previousKeyMatched=!1}c&&c(m)},E=Rt(x,n);let g=-1;f.Children.forEach(l,(m,v)=>{if(!f.isValidElement(m)){g===v&&(g+=1,g>=l.length&&(g=-1));return}m.props.disabled||(d==="selectedMenu"&&m.props.selected||g===-1)&&(g=v),g===v&&(m.props.disabled||m.props.muiSkipListHighlight||m.type.muiSkipListHighlight)&&(g+=1,g>=l.length&&(g=-1))});const h=f.Children.map(l,(m,v)=>{if(v===g){const b={};return i&&(b.autoFocus=!0),m.props.tabIndex===void 0&&d==="selectedMenu"&&(b.tabIndex=0),f.cloneElement(m,b)}return m});return k.jsx(xE,R({role:"menu",ref:E,className:s,onKeyDown:y,tabIndex:o?0:-1},p,{children:h}))}),bE=wE;function Bd(){const e=Od(ia);return e[la]||e}const dv=e=>e.scrollTop;function vs(e,t){var n,r;const{timeout:o,easing:i,style:l={}}=e;return{duration:(n=l.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=l.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:l.transitionDelay}}const CE=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function mc(e){return`scale(${e}, ${e**2})`}const EE={entering:{opacity:1,transform:mc(1)},entered:{opacity:1,transform:"none"}},iu=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),fv=f.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:l,in:s,onEnter:a,onEntered:u,onEntering:c,onExit:d,onExited:p,onExiting:x,style:S,timeout:y="auto",TransitionComponent:E=ev}=t,g=q(t,CE),h=f.useRef(),m=f.useRef(),v=Bd(),b=f.useRef(null),C=Rt(b,i.ref,n),w=I=>D=>{if(I){const _=b.current;D===void 0?I(_):I(_,D)}},T=w(c),M=w((I,D)=>{dv(I);const{duration:_,delay:$,easing:N}=vs({style:S,timeout:y,easing:l},{mode:"enter"});let j;y==="auto"?(j=v.transitions.getAutoHeightDuration(I.clientHeight),m.current=j):j=_,I.style.transition=[v.transitions.create("opacity",{duration:j,delay:$}),v.transitions.create("transform",{duration:iu?j:j*.666,delay:$,easing:N})].join(","),a&&a(I,D)}),P=w(u),O=w(x),F=w(I=>{const{duration:D,delay:_,easing:$}=vs({style:S,timeout:y,easing:l},{mode:"exit"});let N;y==="auto"?(N=v.transitions.getAutoHeightDuration(I.clientHeight),m.current=N):N=D,I.style.transition=[v.transitions.create("opacity",{duration:N,delay:_}),v.transitions.create("transform",{duration:iu?N:N*.666,delay:iu?_:_||N*.333,easing:$})].join(","),I.style.opacity=0,I.style.transform=mc(.75),d&&d(I)}),A=w(p),z=I=>{y==="auto"&&(h.current=setTimeout(I,m.current||0)),r&&r(b.current,I)};return f.useEffect(()=>()=>{clearTimeout(h.current)},[]),k.jsx(E,R({appear:o,in:s,nodeRef:b,onEnter:M,onEntered:P,onEntering:T,onExit:F,onExited:A,onExiting:O,addEndListener:z,timeout:y==="auto"?null:y},g,{children:(I,D)=>f.cloneElement(i,R({style:R({opacity:0,transform:mc(.75),visibility:I==="exited"&&!s?"hidden":void 0},EE[I],S,i.props.style),ref:C},D))}))});fv.muiSupportAuto=!0;const kE=fv,RE=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],TE={entering:{opacity:1},entered:{opacity:1}},PE=f.forwardRef(function(t,n){const r=Bd(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:l=!0,children:s,easing:a,in:u,onEnter:c,onEntered:d,onEntering:p,onExit:x,onExited:S,onExiting:y,style:E,timeout:g=o,TransitionComponent:h=ev}=t,m=q(t,RE),v=f.useRef(null),b=Rt(v,s.ref,n),C=z=>I=>{if(z){const D=v.current;I===void 0?z(D):z(D,I)}},w=C(p),T=C((z,I)=>{dv(z);const D=vs({style:E,timeout:g,easing:a},{mode:"enter"});z.style.webkitTransition=r.transitions.create("opacity",D),z.style.transition=r.transitions.create("opacity",D),c&&c(z,I)}),M=C(d),P=C(y),O=C(z=>{const I=vs({style:E,timeout:g,easing:a},{mode:"exit"});z.style.webkitTransition=r.transitions.create("opacity",I),z.style.transition=r.transitions.create("opacity",I),x&&x(z)}),F=C(S),A=z=>{i&&i(v.current,z)};return k.jsx(h,R({appear:l,in:u,nodeRef:v,onEnter:T,onEntered:M,onEntering:w,onExit:O,onExited:F,onExiting:P,addEndListener:A,timeout:g},m,{children:(z,I)=>f.cloneElement(s,R({style:R({opacity:0,visibility:z==="exited"&&!u?"hidden":void 0},TE[z],E,s.props.style),ref:b},I))}))}),$E=PE;function IE(e){return De("MuiBackdrop",e)}ze("MuiBackdrop",["root","invisible"]);const ME=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],NE=e=>{const{classes:t,invisible:n}=e;return Be({root:["root",n&&"invisible"]},IE,t)},OE=Q("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>R({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),_E=f.forwardRef(function(t,n){var r,o,i;const l=Ue({props:t,name:"MuiBackdrop"}),{children:s,className:a,component:u="div",components:c={},componentsProps:d={},invisible:p=!1,open:x,slotProps:S={},slots:y={},TransitionComponent:E=$E,transitionDuration:g}=l,h=q(l,ME),m=R({},l,{component:u,invisible:p}),v=NE(m),b=(r=S.root)!=null?r:d.root;return k.jsx(E,R({in:x,timeout:g},h,{children:k.jsx(OE,R({"aria-hidden":!0},b,{as:(o=(i=y.root)!=null?i:c.Root)!=null?o:u,className:ie(v.root,a,b==null?void 0:b.className),ownerState:R({},m,b==null?void 0:b.ownerState),classes:v,ref:n,children:s}))}))}),LE=_E;function DE(e){return De("MuiModal",e)}ze("MuiModal",["root","hidden","backdrop"]);const zE=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],AE=e=>{const{open:t,exited:n,classes:r}=e;return Be({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},DE,r)},FE=Q("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>R({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),jE=Q(LE,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),BE=f.forwardRef(function(t,n){var r,o,i,l,s,a;const u=Ue({name:"MuiModal",props:t}),{BackdropComponent:c=jE,BackdropProps:d,className:p,closeAfterTransition:x=!1,children:S,container:y,component:E,components:g={},componentsProps:h={},disableAutoFocus:m=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:b=!1,disablePortal:C=!1,disableRestoreFocus:w=!1,disableScrollLock:T=!1,hideBackdrop:M=!1,keepMounted:P=!1,onBackdropClick:O,open:F,slotProps:A,slots:z}=u,I=q(u,zE),D=R({},u,{closeAfterTransition:x,disableAutoFocus:m,disableEnforceFocus:v,disableEscapeKeyDown:b,disablePortal:C,disableRestoreFocus:w,disableScrollLock:T,hideBackdrop:M,keepMounted:P}),{getRootProps:_,getBackdropProps:$,getTransitionProps:N,portalRef:j,isTopModal:K,exited:U,hasTransition:J}=tC(R({},D,{rootRef:n})),V=R({},D,{exited:U}),ne=AE(V),G={};if(S.props.tabIndex===void 0&&(G.tabIndex="-1"),J){const{onEnter:Y,onExited:Z}=N();G.onEnter=Y,G.onExited=Z}const Ee=(r=(o=z==null?void 0:z.root)!=null?o:g.Root)!=null?r:FE,ke=(i=(l=z==null?void 0:z.backdrop)!=null?l:g.Backdrop)!=null?i:c,ue=(s=A==null?void 0:A.root)!=null?s:h.root,X=(a=A==null?void 0:A.backdrop)!=null?a:h.backdrop,ee=yo({elementType:Ee,externalSlotProps:ue,externalForwardedProps:I,getSlotProps:_,additionalProps:{ref:n,as:E},ownerState:V,className:ie(p,ue==null?void 0:ue.className,ne==null?void 0:ne.root,!V.open&&V.exited&&(ne==null?void 0:ne.hidden))}),re=yo({elementType:ke,externalSlotProps:X,additionalProps:d,getSlotProps:Y=>$(R({},Y,{onClick:Z=>{O&&O(Z),Y!=null&&Y.onClick&&Y.onClick(Z)}})),className:ie(X==null?void 0:X.className,d==null?void 0:d.className,ne==null?void 0:ne.backdrop),ownerState:V});return!P&&!F&&(!J||U)?null:k.jsx(Kb,{ref:j,container:y,disablePortal:C,children:k.jsxs(Ee,R({},ee,{children:[!M&&c?k.jsx(ke,R({},re)):null,k.jsx(Vb,{disableEnforceFocus:v,disableAutoFocus:m,disableRestoreFocus:w,isEnabled:K,open:F,children:f.cloneElement(S,G)})]}))})}),UE=BE,WE=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Gp=WE;function VE(e){return De("MuiPaper",e)}ze("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const HE=["className","component","elevation","square","variant"],KE=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return Be(i,VE,o)},GE=Q("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return R({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&R({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Jr("#fff",Gp(t.elevation))}, ${Jr("#fff",Gp(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),XE=f.forwardRef(function(t,n){const r=Ue({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:l=1,square:s=!1,variant:a="elevation"}=r,u=q(r,HE),c=R({},r,{component:i,elevation:l,square:s,variant:a}),d=KE(c);return k.jsx(GE,R({as:i,ownerState:c,className:ie(d.root,o),ref:n},u))}),YE=XE;function qE(e){return De("MuiPopover",e)}ze("MuiPopover",["root","paper"]);const QE=["onEntering"],ZE=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],JE=["slotProps"];function Xp(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Yp(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function qp(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function lu(e){return typeof e=="function"?e():e}const e2=e=>{const{classes:t}=e;return Be({root:["root"],paper:["paper"]},qE,t)},t2=Q(UE,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),pv=Q(YE,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),n2=f.forwardRef(function(t,n){var r,o,i;const l=Ue({props:t,name:"MuiPopover"}),{action:s,anchorEl:a,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:c,anchorReference:d="anchorEl",children:p,className:x,container:S,elevation:y=8,marginThreshold:E=16,open:g,PaperProps:h={},slots:m,slotProps:v,transformOrigin:b={vertical:"top",horizontal:"left"},TransitionComponent:C=kE,transitionDuration:w="auto",TransitionProps:{onEntering:T}={},disableScrollLock:M=!1}=l,P=q(l.TransitionProps,QE),O=q(l,ZE),F=(r=v==null?void 0:v.paper)!=null?r:h,A=f.useRef(),z=Rt(A,F.ref),I=R({},l,{anchorOrigin:u,anchorReference:d,elevation:y,marginThreshold:E,externalPaperSlotProps:F,transformOrigin:b,TransitionComponent:C,transitionDuration:w,TransitionProps:P}),D=e2(I),_=f.useCallback(()=>{if(d==="anchorPosition")return c;const Y=lu(a),ce=(Y&&Y.nodeType===1?Y:Lt(A.current).body).getBoundingClientRect();return{top:ce.top+Xp(ce,u.vertical),left:ce.left+Yp(ce,u.horizontal)}},[a,u.horizontal,u.vertical,c,d]),$=f.useCallback(Y=>({vertical:Xp(Y,b.vertical),horizontal:Yp(Y,b.horizontal)}),[b.horizontal,b.vertical]),N=f.useCallback(Y=>{const Z={width:Y.offsetWidth,height:Y.offsetHeight},ce=$(Z);if(d==="none")return{top:null,left:null,transformOrigin:qp(ce)};const ut=_();let ct=ut.top-ce.vertical,dt=ut.left-ce.horizontal;const ft=ct+Z.height,_e=dt+Z.width,ge=Rr(lu(a)),vt=ge.innerHeight-E,Qe=ge.innerWidth-E;if(E!==null&&ct<E){const xe=ct-E;ct-=xe,ce.vertical+=xe}else if(E!==null&&ft>vt){const xe=ft-vt;ct-=xe,ce.vertical+=xe}if(E!==null&&dt<E){const xe=dt-E;dt-=xe,ce.horizontal+=xe}else if(_e>Qe){const xe=_e-Qe;dt-=xe,ce.horizontal+=xe}return{top:`${Math.round(ct)}px`,left:`${Math.round(dt)}px`,transformOrigin:qp(ce)}},[a,d,_,$,E]),[j,K]=f.useState(g),U=f.useCallback(()=>{const Y=A.current;if(!Y)return;const Z=N(Y);Z.top!==null&&(Y.style.top=Z.top),Z.left!==null&&(Y.style.left=Z.left),Y.style.transformOrigin=Z.transformOrigin,K(!0)},[N]);f.useEffect(()=>(M&&window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)),[a,M,U]);const J=(Y,Z)=>{T&&T(Y,Z),U()},V=()=>{K(!1)};f.useEffect(()=>{g&&U()}),f.useImperativeHandle(s,()=>g?{updatePosition:()=>{U()}}:null,[g,U]),f.useEffect(()=>{if(!g)return;const Y=$g(()=>{U()}),Z=Rr(a);return Z.addEventListener("resize",Y),()=>{Y.clear(),Z.removeEventListener("resize",Y)}},[a,g,U]);let ne=w;w==="auto"&&!C.muiSupportAuto&&(ne=void 0);const G=S||(a?Lt(lu(a)).body:void 0),Ee=(o=m==null?void 0:m.root)!=null?o:t2,ke=(i=m==null?void 0:m.paper)!=null?i:pv,ue=yo({elementType:ke,externalSlotProps:R({},F,{style:j?F.style:R({},F.style,{opacity:0})}),additionalProps:{elevation:y,ref:z},ownerState:I,className:ie(D.paper,F==null?void 0:F.className)}),X=yo({elementType:Ee,externalSlotProps:(v==null?void 0:v.root)||{},externalForwardedProps:O,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:G,open:g},ownerState:I,className:ie(D.root,x)}),{slotProps:ee}=X,re=q(X,JE);return k.jsx(Ee,R({},re,!ms(Ee)&&{slotProps:ee,disableScrollLock:M},{children:k.jsx(C,R({appear:!0,in:g,onEntering:J,onExited:V,timeout:ne},P,{children:k.jsx(ke,R({},ue,{children:p}))}))}))}),r2=n2;function o2(e){return De("MuiMenu",e)}ze("MuiMenu",["root","paper","list"]);const i2=["onEntering"],l2=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],s2={vertical:"top",horizontal:"right"},a2={vertical:"top",horizontal:"left"},u2=e=>{const{classes:t}=e;return Be({root:["root"],paper:["paper"],list:["list"]},o2,t)},c2=Q(r2,{shouldForwardProp:e=>pn(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),d2=Q(pv,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),f2=Q(bE,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),p2=f.forwardRef(function(t,n){var r,o;const i=Ue({props:t,name:"MuiMenu"}),{autoFocus:l=!0,children:s,className:a,disableAutoFocusItem:u=!1,MenuListProps:c={},onClose:d,open:p,PaperProps:x={},PopoverClasses:S,transitionDuration:y="auto",TransitionProps:{onEntering:E}={},variant:g="selectedMenu",slots:h={},slotProps:m={}}=i,v=q(i.TransitionProps,i2),b=q(i,l2),C=Bd(),w=C.direction==="rtl",T=R({},i,{autoFocus:l,disableAutoFocusItem:u,MenuListProps:c,onEntering:E,PaperProps:x,transitionDuration:y,TransitionProps:v,variant:g}),M=u2(T),P=l&&!u&&p,O=f.useRef(null),F=(N,j)=>{O.current&&O.current.adjustStyleForScrollbar(N,C),E&&E(N,j)},A=N=>{N.key==="Tab"&&(N.preventDefault(),d&&d(N,"tabKeyDown"))};let z=-1;f.Children.map(s,(N,j)=>{f.isValidElement(N)&&(N.props.disabled||(g==="selectedMenu"&&N.props.selected||z===-1)&&(z=j))});const I=(r=h.paper)!=null?r:d2,D=(o=m.paper)!=null?o:x,_=yo({elementType:h.root,externalSlotProps:m.root,ownerState:T,className:[M.root,a]}),$=yo({elementType:I,externalSlotProps:D,ownerState:T,className:M.paper});return k.jsx(c2,R({onClose:d,anchorOrigin:{vertical:"bottom",horizontal:w?"right":"left"},transformOrigin:w?s2:a2,slots:{paper:I,root:h.root},slotProps:{root:_,paper:$},open:p,ref:n,transitionDuration:y,TransitionProps:R({onEntering:F},v),ownerState:T},b,{classes:S,children:k.jsx(f2,R({onKeyDown:A,actions:O,autoFocus:l&&(z===-1||u),autoFocusItem:P,variant:g},c,{className:ie(M.list,c.className),children:s}))}))}),h2=p2;function m2(e){return De("MuiNativeSelect",e)}const g2=ze("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Ud=g2,v2=["className","disabled","error","IconComponent","inputRef","variant"],y2=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:l}=e,s={select:["select",n,r&&"disabled",o&&"multiple",l&&"error"],icon:["icon",`icon${ae(n)}`,i&&"iconOpen",r&&"disabled"]};return Be(s,m2,t)},hv=({ownerState:e,theme:t})=>R({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":R({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Ud.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),x2=Q("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:pn,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${Ud.multiple}`]:t.multiple}]}})(hv),mv=({ownerState:e,theme:t})=>R({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Ud.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),S2=Q("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${ae(n.variant)}`],n.open&&t.iconOpen]}})(mv),w2=f.forwardRef(function(t,n){const{className:r,disabled:o,error:i,IconComponent:l,inputRef:s,variant:a="standard"}=t,u=q(t,v2),c=R({},t,{disabled:o,variant:a,error:i}),d=y2(c);return k.jsxs(f.Fragment,{children:[k.jsx(x2,R({ownerState:c,className:ie(d.select,r),disabled:o,ref:s||n},u)),t.multiple?null:k.jsx(S2,{as:l,ownerState:c,className:d.icon})]})}),b2=w2;function C2(e){return De("MuiSelect",e)}const E2=ze("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Ko=E2;var Qp;const k2=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],R2=Q("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${Ko.select}`]:t.select},{[`&.${Ko.select}`]:t[n.variant]},{[`&.${Ko.error}`]:t.error},{[`&.${Ko.multiple}`]:t.multiple}]}})(hv,{[`&.${Ko.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),T2=Q("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${ae(n.variant)}`],n.open&&t.iconOpen]}})(mv),P2=Q("input",{shouldForwardProp:e=>Gw(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function Zp(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function $2(e){return e==null||typeof e=="string"&&!e.trim()}const I2=e=>{const{classes:t,variant:n,disabled:r,multiple:o,open:i,error:l}=e,s={select:["select",n,r&&"disabled",o&&"multiple",l&&"error"],icon:["icon",`icon${ae(n)}`,i&&"iconOpen",r&&"disabled"],nativeInput:["nativeInput"]};return Be(s,C2,t)},M2=f.forwardRef(function(t,n){var r;const{"aria-describedby":o,"aria-label":i,autoFocus:l,autoWidth:s,children:a,className:u,defaultOpen:c,defaultValue:d,disabled:p,displayEmpty:x,error:S=!1,IconComponent:y,inputRef:E,labelId:g,MenuProps:h={},multiple:m,name:v,onBlur:b,onChange:C,onClose:w,onFocus:T,onOpen:M,open:P,readOnly:O,renderValue:F,SelectDisplayProps:A={},tabIndex:z,value:I,variant:D="standard"}=t,_=q(t,k2),[$,N]=dp({controlled:I,default:d,name:"Select"}),[j,K]=dp({controlled:P,default:c,name:"Select"}),U=f.useRef(null),J=f.useRef(null),[V,ne]=f.useState(null),{current:G}=f.useRef(P!=null),[Ee,ke]=f.useState(),ue=Rt(n,E),X=f.useCallback(H=>{J.current=H,H&&ne(H)},[]),ee=V==null?void 0:V.parentNode;f.useImperativeHandle(ue,()=>({focus:()=>{J.current.focus()},node:U.current,value:$}),[$]),f.useEffect(()=>{c&&j&&V&&!G&&(ke(s?null:ee.clientWidth),J.current.focus())},[V,s]),f.useEffect(()=>{l&&J.current.focus()},[l]),f.useEffect(()=>{if(!g)return;const H=Lt(J.current).getElementById(g);if(H){const ve=()=>{getSelection().isCollapsed&&J.current.focus()};return H.addEventListener("click",ve),()=>{H.removeEventListener("click",ve)}}},[g]);const re=(H,ve)=>{H?M&&M(ve):w&&w(ve),G||(ke(s?null:ee.clientWidth),K(H))},Y=H=>{H.button===0&&(H.preventDefault(),J.current.focus(),re(!0,H))},Z=H=>{re(!1,H)},ce=f.Children.toArray(a),ut=H=>{const ve=ce.find(We=>We.props.value===H.target.value);ve!==void 0&&(N(ve.props.value),C&&C(H,ve))},ct=H=>ve=>{let We;if(ve.currentTarget.hasAttribute("tabindex")){if(m){We=Array.isArray($)?$.slice():[];const kn=$.indexOf(H.props.value);kn===-1?We.push(H.props.value):We.splice(kn,1)}else We=H.props.value;if(H.props.onClick&&H.props.onClick(ve),$!==We&&(N(We),C)){const kn=ve.nativeEvent||ve,qi=new kn.constructor(kn.type,kn);Object.defineProperty(qi,"target",{writable:!0,value:{value:We,name:v}}),C(qi,H)}m||re(!1,ve)}},dt=H=>{O||[" ","ArrowUp","ArrowDown","Enter"].indexOf(H.key)!==-1&&(H.preventDefault(),re(!0,H))},ft=V!==null&&j,_e=H=>{!ft&&b&&(Object.defineProperty(H,"target",{writable:!0,value:{value:$,name:v}}),b(H))};delete _["aria-invalid"];let ge,vt;const Qe=[];let xe=!1;(gs({value:$})||x)&&(F?ge=F($):xe=!0);const Bt=ce.map(H=>{if(!f.isValidElement(H))return null;let ve;if(m){if(!Array.isArray($))throw new Error(lr(2));ve=$.some(We=>Zp(We,H.props.value)),ve&&xe&&Qe.push(H.props.children)}else ve=Zp($,H.props.value),ve&&xe&&(vt=H.props.children);return f.cloneElement(H,{"aria-selected":ve?"true":"false",onClick:ct(H),onKeyUp:We=>{We.key===" "&&We.preventDefault(),H.props.onKeyUp&&H.props.onKeyUp(We)},role:"option",selected:ve,value:void 0,"data-value":H.props.value})});xe&&(m?Qe.length===0?ge=null:ge=Qe.reduce((H,ve,We)=>(H.push(ve),We<Qe.length-1&&H.push(", "),H),[]):ge=vt);let hn=Ee;!s&&G&&V&&(hn=ee.clientWidth);let rt;typeof z<"u"?rt=z:rt=p?null:0;const oe=A.id||(v?`mui-component-select-${v}`:void 0),W=R({},t,{variant:D,value:$,open:ft,error:S}),Ut=I2(W),yt=R({},h.PaperProps,(r=h.slotProps)==null?void 0:r.paper),An=sc(),Yi=sc();return k.jsxs(f.Fragment,{children:[k.jsx(R2,R({ref:X,tabIndex:rt,role:"combobox","aria-controls":An,"aria-disabled":p?"true":void 0,"aria-expanded":ft?"true":"false","aria-haspopup":"listbox","aria-label":i,"aria-labelledby":[g,oe].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:dt,onMouseDown:p||O?null:Y,onBlur:_e,onFocus:T},A,{ownerState:W,className:ie(A.className,Ut.select,u),id:oe,children:$2(ge)?Qp||(Qp=k.jsx("span",{className:"notranslate",children:"​"})):ge})),k.jsx(P2,R({"aria-invalid":S,value:Array.isArray($)?$.join(","):$,name:v??Yi,ref:U,"aria-hidden":!0,onChange:ut,tabIndex:-1,disabled:p,className:Ut.nativeInput,autoFocus:l,ownerState:W},_)),k.jsx(T2,{as:y,className:Ut.icon,ownerState:W}),k.jsx(h2,R({id:`menu-${v||""}`,anchorEl:ee,open:ft,onClose:Z,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},h,{MenuListProps:R({"aria-labelledby":g,role:"listbox","aria-multiselectable":m?"true":void 0,disableListWrap:!0,id:An},h.MenuListProps),slotProps:R({},h.slotProps,{paper:R({},yt,{style:R({minWidth:hn},yt!=null?yt.style:null)})}),children:Bt}))]})}),N2=M2;function O2(e){return De("MuiSvgIcon",e)}ze("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const _2=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],L2=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${ae(t)}`,`fontSize${ae(n)}`]};return Be(o,O2,r)},D2=Q("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${ae(n.color)}`],t[`fontSize${ae(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,l,s,a,u,c,d,p,x,S;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(l=i.pxToRem)==null?void 0:l.call(i,20))||"1.25rem",medium:((s=e.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,24))||"1.5rem",large:((u=e.typography)==null||(c=u.pxToRem)==null?void 0:c.call(u,35))||"2.1875rem"}[t.fontSize],color:(d=(p=(e.vars||e).palette)==null||(p=p[t.color])==null?void 0:p.main)!=null?d:{action:(x=(e.vars||e).palette)==null||(x=x.action)==null?void 0:x.active,disabled:(S=(e.vars||e).palette)==null||(S=S.action)==null?void 0:S.disabled,inherit:void 0}[t.color]}}),gv=f.forwardRef(function(t,n){const r=Ue({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:l="inherit",component:s="svg",fontSize:a="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:d,viewBox:p="0 0 24 24"}=r,x=q(r,_2),S=f.isValidElement(o)&&o.type==="svg",y=R({},r,{color:l,component:s,fontSize:a,instanceFontSize:t.fontSize,inheritViewBox:c,viewBox:p,hasSvgAsChild:S}),E={};c||(E.viewBox=p);const g=L2(y);return k.jsxs(D2,R({as:s,className:ie(g.root,i),focusable:"false",color:u,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:n},E,x,S&&o.props,{ownerState:y,children:[S?o.props.children:o,d?k.jsx("title",{children:d}):null]}))});gv.muiName="SvgIcon";const Jp=gv;function z2(e,t){function n(r,o){return k.jsx(Jp,R({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=Jp.muiName,f.memo(f.forwardRef(n))}const A2=z2(k.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),F2=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],j2=["root"],B2=e=>{const{classes:t}=e;return t},Wd={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>pn(e)&&e!=="variant",slot:"Root"},U2=Q(ov,Wd)(""),W2=Q(av,Wd)(""),V2=Q(lv,Wd)(""),vv=f.forwardRef(function(t,n){const r=Ue({name:"MuiSelect",props:t}),{autoWidth:o=!1,children:i,classes:l={},className:s,defaultOpen:a=!1,displayEmpty:u=!1,IconComponent:c=A2,id:d,input:p,inputProps:x,label:S,labelId:y,MenuProps:E,multiple:g=!1,native:h=!1,onClose:m,onOpen:v,open:b,renderValue:C,SelectDisplayProps:w,variant:T="outlined"}=r,M=q(r,F2),P=h?b2:N2,O=Ro(),F=ko({props:r,muiFormControl:O,states:["variant","error"]}),A=F.variant||T,z=R({},r,{variant:A,classes:l}),I=B2(z),D=q(I,j2),_=p||{standard:k.jsx(U2,{ownerState:z}),outlined:k.jsx(W2,{label:S,ownerState:z}),filled:k.jsx(V2,{ownerState:z})}[A],$=Rt(n,_.ref);return k.jsx(f.Fragment,{children:f.cloneElement(_,R({inputComponent:P,inputProps:R({children:i,error:F.error,IconComponent:c,variant:A,type:void 0,multiple:g},h?{id:d}:{autoWidth:o,defaultOpen:a,displayEmpty:u,labelId:y,MenuProps:E,onClose:m,onOpen:v,open:b,renderValue:C,SelectDisplayProps:R({id:d},w)},x,{classes:x?kt(D,x.classes):D},p?p.props.inputProps:{})},g&&h&&A==="outlined"?{notched:!0}:{},{ref:$,className:ie(_.props.className,s,I.root)},!p&&{variant:A},M))})});vv.muiName="Select";const H2=vv;function K2(e){return De("MuiTextField",e)}ze("MuiTextField",["root"]);const G2=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],X2={standard:ov,filled:lv,outlined:av},Y2=e=>{const{classes:t}=e;return Be({root:["root"]},K2,t)},q2=Q(nE,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Q2=f.forwardRef(function(t,n){const r=Ue({props:t,name:"MuiTextField"}),{autoComplete:o,autoFocus:i=!1,children:l,className:s,color:a="primary",defaultValue:u,disabled:c=!1,error:d=!1,FormHelperTextProps:p,fullWidth:x=!1,helperText:S,id:y,InputLabelProps:E,inputProps:g,InputProps:h,inputRef:m,label:v,maxRows:b,minRows:C,multiline:w=!1,name:T,onBlur:M,onChange:P,onFocus:O,placeholder:F,required:A=!1,rows:z,select:I=!1,SelectProps:D,type:_,value:$,variant:N="outlined"}=r,j=q(r,G2),K=R({},r,{autoFocus:i,color:a,disabled:c,error:d,fullWidth:x,multiline:w,required:A,select:I,variant:N}),U=Y2(K),J={};N==="outlined"&&(E&&typeof E.shrink<"u"&&(J.notched=E.shrink),J.label=v),I&&((!D||!D.native)&&(J.id=void 0),J["aria-describedby"]=void 0);const V=sc(y),ne=S&&V?`${V}-helper-text`:void 0,G=v&&V?`${V}-label`:void 0,Ee=X2[N],ke=k.jsx(Ee,R({"aria-describedby":ne,autoComplete:o,autoFocus:i,defaultValue:u,fullWidth:x,multiline:w,name:T,rows:z,maxRows:b,minRows:C,type:_,value:$,id:V,inputRef:m,onBlur:M,onChange:P,onFocus:O,placeholder:F,inputProps:g},J,h));return k.jsxs(q2,R({className:ie(U.root,s),disabled:c,error:d,fullWidth:x,ref:n,required:A,color:a,variant:N,ownerState:K},j,{children:[v!=null&&v!==""&&k.jsx(qC,R({htmlFor:V,id:G},E,{children:v})),I?k.jsx(H2,R({"aria-describedby":ne,id:V,labelId:G,value:$,input:ke},D,{children:l})):ke,S&&k.jsx(uE,R({id:ne},p,{children:S}))]}))}),Li=Q2,yv=({agregarTarea:e,tareas:t})=>{const[n,r]=f.useState(""),[o,i]=f.useState(""),[l,s]=f.useState(""),[a,u]=f.useState(!0),[c,d]=f.useState({vacio:!1,duplicado:!1}),[p,x]=f.useState(!0),S=f.useRef(null),y=f.useRef(null),E=b=>{b.preventDefault();const C=t.find(T=>T.titulo.toLowerCase()===n.toLowerCase());n.trim()===""?d({vacio:!0,duplicado:!1}):C?d({vacio:!1,duplicado:!0}):(u(!a),x(!p),i(n),d({vacio:!1,duplicado:!1}))},g=b=>{b.preventDefault(),u(!a)};f.useEffect(()=>{p?S.current.focus():y.current.focus()},[a,p]);const h=b=>{r(b.target.value)},m=b=>{s(b.target.value)},v=b=>{b.preventDefault(),l.trim()===""?d({vacio:!0,duplicado:!1}):(e(n,l),s(""),d({vacio:!1,duplicado:!1}))};return k.jsx(k.Fragment,{children:k.jsx("div",{className:"formulario",children:k.jsx("div",{className:"flex",children:k.jsxs("div",{children:[k.jsx("h1",{children:"Lista de tareas"}),k.jsx("div",{style:{height:"76px"},children:k.jsx("h2",{children:o})}),k.jsx("form",{onSubmit:E,children:k.jsxs("div",{className:a?"mostrar":"hide",children:[k.jsx("div",{children:k.jsx(Li,{required:!0,inputRef:S,id:"outlined-required",value:n,label:"Campo obligatorio",onChange:h,error:c.vacio||c.duplicado,helperText:c.vacio?"El título no puede estar vacío":c.duplicado?"El título está duplicado":"",style:{margin:"10px"}})}),k.jsx("div",{children:k.jsx(wt,{type:"submit",variant:"contained",children:"Crear listado"})})]})}),k.jsxs("form",{onSubmit:v,children:[k.jsx("div",{className:"contenedorListas",children:k.jsxs("div",{className:a?"hide":"mostrar",children:[k.jsx(Li,{required:!0,inputRef:y,id:"outlined-required",value:l,label:"Campo obligatorio",onChange:m,error:c.vacio,helperText:c.vacio?"El título no puede estar vacío":"",style:{margin:"10px"}}),k.jsx(wt,{type:"submit",variant:"contained",children:"Agregar tarea"})]})}),k.jsx("div",{className:a?"hide":"mostrar",children:k.jsx(wt,{variant:"contained",onClick:g,children:"← Volver atrás"})})]})]})})})})};yv.propTypes={agregarTarea:se.func.isRequired,tareas:se.array.isRequired};function Z2(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return f.useMemo(()=>r=>{t.forEach(o=>o(r))},t)}const ba=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function To(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function Vd(e){return"nodeType"in e}function Pt(e){var t,n;return e?To(e)?e:Vd(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function Hd(e){const{Document:t}=Pt(e);return e instanceof t}function Ki(e){return To(e)?!1:e instanceof Pt(e).HTMLElement}function xv(e){return e instanceof Pt(e).SVGElement}function Po(e){return e?To(e)?e.document:Vd(e)?Hd(e)?e:Ki(e)||xv(e)?e.ownerDocument:document:document:document}const dn=ba?f.useLayoutEffect:f.useEffect;function Kd(e){const t=f.useRef(e);return dn(()=>{t.current=e}),f.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function J2(){const e=f.useRef(null),t=f.useCallback((r,o)=>{e.current=setInterval(r,o)},[]),n=f.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function Di(e,t){t===void 0&&(t=[e]);const n=f.useRef(e);return dn(()=>{n.current!==e&&(n.current=e)},t),n}function Gi(e,t){const n=f.useRef();return f.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function ys(e){const t=Kd(e),n=f.useRef(null),r=f.useCallback(o=>{o!==n.current&&(t==null||t(o,n.current)),n.current=o},[]);return[n,r]}function gc(e){const t=f.useRef();return f.useEffect(()=>{t.current=e},[e]),t.current}let su={};function Xi(e,t){return f.useMemo(()=>{if(t)return t;const n=su[e]==null?0:su[e]+1;return su[e]=n,e+"-"+n},[e,t])}function Sv(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.reduce((i,l)=>{const s=Object.entries(l);for(const[a,u]of s){const c=i[a];c!=null&&(i[a]=c+e*u)}return i},{...t})}}const ao=Sv(1),xs=Sv(-1);function ek(e){return"clientX"in e&&"clientY"in e}function Gd(e){if(!e)return!1;const{KeyboardEvent:t}=Pt(e.target);return t&&e instanceof t}function tk(e){if(!e)return!1;const{TouchEvent:t}=Pt(e.target);return t&&e instanceof t}function vc(e){if(tk(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return ek(e)?{x:e.clientX,y:e.clientY}:null}const So=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[So.Translate.toString(e),So.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),eh="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function nk(e){return e.matches(eh)?e:e.querySelector(eh)}const rk={display:"none"};function ok(e){let{id:t,value:n}=e;return be.createElement("div",{id:t,style:rk},n)}function ik(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const o={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return be.createElement("div",{id:t,style:o,role:"status","aria-live":r,"aria-atomic":!0},n)}function lk(){const[e,t]=f.useState("");return{announce:f.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const wv=f.createContext(null);function sk(e){const t=f.useContext(wv);f.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function ak(){const[e]=f.useState(()=>new Set),t=f.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[f.useCallback(r=>{let{type:o,event:i}=r;e.forEach(l=>{var s;return(s=l[o])==null?void 0:s.call(l,i)})},[e]),t]}const uk={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},ck={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function dk(e){let{announcements:t=ck,container:n,hiddenTextDescribedById:r,screenReaderInstructions:o=uk}=e;const{announce:i,announcement:l}=lk(),s=Xi("DndLiveRegion"),[a,u]=f.useState(!1);if(f.useEffect(()=>{u(!0)},[]),sk(f.useMemo(()=>({onDragStart(d){let{active:p}=d;i(t.onDragStart({active:p}))},onDragMove(d){let{active:p,over:x}=d;t.onDragMove&&i(t.onDragMove({active:p,over:x}))},onDragOver(d){let{active:p,over:x}=d;i(t.onDragOver({active:p,over:x}))},onDragEnd(d){let{active:p,over:x}=d;i(t.onDragEnd({active:p,over:x}))},onDragCancel(d){let{active:p,over:x}=d;i(t.onDragCancel({active:p,over:x}))}}),[i,t])),!a)return null;const c=be.createElement(be.Fragment,null,be.createElement(ok,{id:r,value:o.draggable}),be.createElement(ik,{id:s,announcement:l}));return n?wn.createPortal(c,n):c}var He;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(He||(He={}));function Ss(){}const fn=Object.freeze({x:0,y:0});function fk(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function pk(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function hk(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function mk(e,t){if(!e||e.length===0)return null;const[n]=e;return t?n[t]:n}function th(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const bv=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const o=th(t,t.left,t.top),i=[];for(const l of r){const{id:s}=l,a=n.get(s);if(a){const u=fk(th(a),o);i.push({id:s,data:{droppableContainer:l,value:u}})}}return i.sort(pk)};function gk(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),o=Math.min(t.left+t.width,e.left+e.width),i=Math.min(t.top+t.height,e.top+e.height),l=o-r,s=i-n;if(r<o&&n<i){const a=t.width*t.height,u=e.width*e.height,c=l*s,d=c/(a+u-c);return Number(d.toFixed(4))}return 0}const vk=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const o=[];for(const i of r){const{id:l}=i,s=n.get(l);if(s){const a=gk(s,t);a>0&&o.push({id:l,data:{droppableContainer:i,value:a}})}}return o.sort(hk)};function yk(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Cv(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:fn}function xk(e){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return o.reduce((l,s)=>({...l,top:l.top+e*s.y,bottom:l.bottom+e*s.y,left:l.left+e*s.x,right:l.right+e*s.x}),{...n})}}const Sk=xk(1);function wk(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function bk(e,t,n){const r=wk(t);if(!r)return e;const{scaleX:o,scaleY:i,x:l,y:s}=r,a=e.left-l-(1-o)*parseFloat(n),u=e.top-s-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),c=o?e.width/o:e.width,d=i?e.height/i:e.height;return{width:c,height:d,top:u,right:a+c,bottom:u+d,left:a}}const Ck={ignoreTransform:!1};function $o(e,t){t===void 0&&(t=Ck);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:u,transformOrigin:c}=Pt(e).getComputedStyle(e);u&&(n=bk(n,u,c))}const{top:r,left:o,width:i,height:l,bottom:s,right:a}=n;return{top:r,left:o,width:i,height:l,bottom:s,right:a}}function nh(e){return $o(e,{ignoreTransform:!0})}function Ek(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function kk(e,t){return t===void 0&&(t=Pt(e).getComputedStyle(e)),t.position==="fixed"}function Rk(e,t){t===void 0&&(t=Pt(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(o=>{const i=t[o];return typeof i=="string"?n.test(i):!1})}function Xd(e,t){const n=[];function r(o){if(t!=null&&n.length>=t||!o)return n;if(Hd(o)&&o.scrollingElement!=null&&!n.includes(o.scrollingElement))return n.push(o.scrollingElement),n;if(!Ki(o)||xv(o)||n.includes(o))return n;const i=Pt(e).getComputedStyle(o);return o!==e&&Rk(o,i)&&n.push(o),kk(o,i)?n:r(o.parentNode)}return e?r(e):n}function Ev(e){const[t]=Xd(e,1);return t??null}function au(e){return!ba||!e?null:To(e)?e:Vd(e)?Hd(e)||e===Po(e).scrollingElement?window:Ki(e)?e:null:null}function kv(e){return To(e)?e.scrollX:e.scrollLeft}function Rv(e){return To(e)?e.scrollY:e.scrollTop}function yc(e){return{x:kv(e),y:Rv(e)}}var Xe;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(Xe||(Xe={}));function Tv(e){return!ba||!e?!1:e===document.scrollingElement}function Pv(e){const t={x:0,y:0},n=Tv(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},o=e.scrollTop<=t.y,i=e.scrollLeft<=t.x,l=e.scrollTop>=r.y,s=e.scrollLeft>=r.x;return{isTop:o,isLeft:i,isBottom:l,isRight:s,maxScroll:r,minScroll:t}}const Tk={x:.2,y:.2};function Pk(e,t,n,r,o){let{top:i,left:l,right:s,bottom:a}=n;r===void 0&&(r=10),o===void 0&&(o=Tk);const{isTop:u,isBottom:c,isLeft:d,isRight:p}=Pv(e),x={x:0,y:0},S={x:0,y:0},y={height:t.height*o.y,width:t.width*o.x};return!u&&i<=t.top+y.height?(x.y=Xe.Backward,S.y=r*Math.abs((t.top+y.height-i)/y.height)):!c&&a>=t.bottom-y.height&&(x.y=Xe.Forward,S.y=r*Math.abs((t.bottom-y.height-a)/y.height)),!p&&s>=t.right-y.width?(x.x=Xe.Forward,S.x=r*Math.abs((t.right-y.width-s)/y.width)):!d&&l<=t.left+y.width&&(x.x=Xe.Backward,S.x=r*Math.abs((t.left+y.width-l)/y.width)),{direction:x,speed:S}}function $k(e){if(e===document.scrollingElement){const{innerWidth:i,innerHeight:l}=window;return{top:0,left:0,right:i,bottom:l,width:i,height:l}}const{top:t,left:n,right:r,bottom:o}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:o,width:e.clientWidth,height:e.clientHeight}}function $v(e){return e.reduce((t,n)=>ao(t,yc(n)),fn)}function Ik(e){return e.reduce((t,n)=>t+kv(n),0)}function Mk(e){return e.reduce((t,n)=>t+Rv(n),0)}function Nk(e,t){if(t===void 0&&(t=$o),!e)return;const{top:n,left:r,bottom:o,right:i}=t(e);Ev(e)&&(o<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Ok=[["x",["left","right"],Ik],["y",["top","bottom"],Mk]];class Yd{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Xd(n),o=$v(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[i,l,s]of Ok)for(const a of l)Object.defineProperty(this,a,{get:()=>{const u=s(r),c=o[i]-u;return this.rect[a]+c},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class di{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var o;(o=this.target)==null||o.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function _k(e){const{EventTarget:t}=Pt(e);return e instanceof t?e:Po(e)}function uu(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var Ht;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(Ht||(Ht={}));function rh(e){e.preventDefault()}function Lk(e){e.stopPropagation()}var pe;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"})(pe||(pe={}));const Iv={start:[pe.Space,pe.Enter],cancel:[pe.Esc],end:[pe.Space,pe.Enter]},Dk=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case pe.Right:return{...n,x:n.x+25};case pe.Left:return{...n,x:n.x-25};case pe.Down:return{...n,y:n.y+25};case pe.Up:return{...n,y:n.y-25}}};class Mv{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new di(Po(n)),this.windowListeners=new di(Pt(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ht.Resize,this.handleCancel),this.windowListeners.add(Ht.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Ht.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&Nk(r),n(fn)}handleKeyDown(t){if(Gd(t)){const{active:n,context:r,options:o}=this.props,{keyboardCodes:i=Iv,coordinateGetter:l=Dk,scrollBehavior:s="smooth"}=o,{code:a}=t;if(i.end.includes(a)){this.handleEnd(t);return}if(i.cancel.includes(a)){this.handleCancel(t);return}const{collisionRect:u}=r.current,c=u?{x:u.left,y:u.top}:fn;this.referenceCoordinates||(this.referenceCoordinates=c);const d=l(t,{active:n,context:r.current,currentCoordinates:c});if(d){const p=xs(d,c),x={x:0,y:0},{scrollableAncestors:S}=r.current;for(const y of S){const E=t.code,{isTop:g,isRight:h,isLeft:m,isBottom:v,maxScroll:b,minScroll:C}=Pv(y),w=$k(y),T={x:Math.min(E===pe.Right?w.right-w.width/2:w.right,Math.max(E===pe.Right?w.left:w.left+w.width/2,d.x)),y:Math.min(E===pe.Down?w.bottom-w.height/2:w.bottom,Math.max(E===pe.Down?w.top:w.top+w.height/2,d.y))},M=E===pe.Right&&!h||E===pe.Left&&!m,P=E===pe.Down&&!v||E===pe.Up&&!g;if(M&&T.x!==d.x){const O=y.scrollLeft+p.x,F=E===pe.Right&&O<=b.x||E===pe.Left&&O>=C.x;if(F&&!p.y){y.scrollTo({left:O,behavior:s});return}F?x.x=y.scrollLeft-O:x.x=E===pe.Right?y.scrollLeft-b.x:y.scrollLeft-C.x,x.x&&y.scrollBy({left:-x.x,behavior:s});break}else if(P&&T.y!==d.y){const O=y.scrollTop+p.y,F=E===pe.Down&&O<=b.y||E===pe.Up&&O>=C.y;if(F&&!p.x){y.scrollTo({top:O,behavior:s});return}F?x.y=y.scrollTop-O:x.y=E===pe.Down?y.scrollTop-b.y:y.scrollTop-C.y,x.y&&y.scrollBy({top:-x.y,behavior:s});break}}this.handleMove(t,ao(xs(d,this.referenceCoordinates),x))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Mv.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Iv,onActivation:o}=t,{active:i}=n;const{code:l}=e.nativeEvent;if(r.start.includes(l)){const s=i.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),o==null||o({event:e.nativeEvent}),!0)}return!1}}];function oh(e){return!!(e&&"distance"in e)}function ih(e){return!!(e&&"delay"in e)}class qd{constructor(t,n,r){var o;r===void 0&&(r=_k(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:i}=t,{target:l}=i;this.props=t,this.events=n,this.document=Po(l),this.documentListeners=new di(this.document),this.listeners=new di(r),this.windowListeners=new di(Pt(l)),this.initialCoordinates=(o=vc(i))!=null?o:fn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),this.windowListeners.add(Ht.Resize,this.handleCancel),this.windowListeners.add(Ht.DragStart,rh),this.windowListeners.add(Ht.VisibilityChange,this.handleCancel),this.windowListeners.add(Ht.ContextMenu,rh),this.documentListeners.add(Ht.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(ih(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(oh(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(Ht.Click,Lk,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ht.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:o,props:i}=this,{onMove:l,options:{activationConstraint:s}}=i;if(!o)return;const a=(n=vc(t))!=null?n:fn,u=xs(o,a);if(!r&&s){if(oh(s)){if(s.tolerance!=null&&uu(u,s.tolerance))return this.handleCancel();if(uu(u,s.distance))return this.handleStart()}return ih(s)&&uu(u,s.tolerance)?this.handleCancel():void 0}t.cancelable&&t.preventDefault(),l(a)}handleEnd(){const{onEnd:t}=this.props;this.detach(),t()}handleCancel(){const{onCancel:t}=this.props;this.detach(),t()}handleKeydown(t){t.code===pe.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const zk={move:{name:"pointermove"},end:{name:"pointerup"}};class Nv extends qd{constructor(t){const{event:n}=t,r=Po(n.target);super(t,zk,r)}}Nv.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const Ak={move:{name:"mousemove"},end:{name:"mouseup"}};var xc;(function(e){e[e.RightClick=2]="RightClick"})(xc||(xc={}));class Fk extends qd{constructor(t){super(t,Ak,Po(t.event.target))}}Fk.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===xc.RightClick?!1:(r==null||r({event:n}),!0)}}];const cu={move:{name:"touchmove"},end:{name:"touchend"}};class jk extends qd{constructor(t){super(t,cu)}static setup(){return window.addEventListener(cu.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(cu.move.name,t)};function t(){}}}jk.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:o}=n;return o.length>1?!1:(r==null||r({event:n}),!0)}}];var fi;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(fi||(fi={}));var ws;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(ws||(ws={}));function Bk(e){let{acceleration:t,activator:n=fi.Pointer,canScroll:r,draggingRect:o,enabled:i,interval:l=5,order:s=ws.TreeOrder,pointerCoordinates:a,scrollableAncestors:u,scrollableAncestorRects:c,delta:d,threshold:p}=e;const x=Wk({delta:d,disabled:!i}),[S,y]=J2(),E=f.useRef({x:0,y:0}),g=f.useRef({x:0,y:0}),h=f.useMemo(()=>{switch(n){case fi.Pointer:return a?{top:a.y,bottom:a.y,left:a.x,right:a.x}:null;case fi.DraggableRect:return o}},[n,o,a]),m=f.useRef(null),v=f.useCallback(()=>{const C=m.current;if(!C)return;const w=E.current.x*g.current.x,T=E.current.y*g.current.y;C.scrollBy(w,T)},[]),b=f.useMemo(()=>s===ws.TreeOrder?[...u].reverse():u,[s,u]);f.useEffect(()=>{if(!i||!u.length||!h){y();return}for(const C of b){if((r==null?void 0:r(C))===!1)continue;const w=u.indexOf(C),T=c[w];if(!T)continue;const{direction:M,speed:P}=Pk(C,T,h,t,p);for(const O of["x","y"])x[O][M[O]]||(P[O]=0,M[O]=0);if(P.x>0||P.y>0){y(),m.current=C,S(v,l),E.current=P,g.current=M;return}}E.current={x:0,y:0},g.current={x:0,y:0},y()},[t,v,r,y,i,l,JSON.stringify(h),JSON.stringify(x),S,u,b,c,JSON.stringify(p)])}const Uk={x:{[Xe.Backward]:!1,[Xe.Forward]:!1},y:{[Xe.Backward]:!1,[Xe.Forward]:!1}};function Wk(e){let{delta:t,disabled:n}=e;const r=gc(t);return Gi(o=>{if(n||!r||!o)return Uk;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Xe.Backward]:o.x[Xe.Backward]||i.x===-1,[Xe.Forward]:o.x[Xe.Forward]||i.x===1},y:{[Xe.Backward]:o.y[Xe.Backward]||i.y===-1,[Xe.Forward]:o.y[Xe.Forward]||i.y===1}}},[n,t,r])}function Vk(e,t){const n=t!==null?e.get(t):void 0,r=n?n.node.current:null;return Gi(o=>{var i;return t===null?null:(i=r??o)!=null?i:null},[r,t])}function Hk(e,t){return f.useMemo(()=>e.reduce((n,r)=>{const{sensor:o}=r,i=o.activators.map(l=>({eventName:l.eventName,handler:t(l.handler,r)}));return[...n,...i]},[]),[e,t])}var zi;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(zi||(zi={}));var Sc;(function(e){e.Optimized="optimized"})(Sc||(Sc={}));const lh=new Map;function Kk(e,t){let{dragging:n,dependencies:r,config:o}=t;const[i,l]=f.useState(null),{frequency:s,measure:a,strategy:u}=o,c=f.useRef(e),d=E(),p=Di(d),x=f.useCallback(function(g){g===void 0&&(g=[]),!p.current&&l(h=>h===null?g:h.concat(g.filter(m=>!h.includes(m))))},[p]),S=f.useRef(null),y=Gi(g=>{if(d&&!n)return lh;if(!g||g===lh||c.current!==e||i!=null){const h=new Map;for(let m of e){if(!m)continue;if(i&&i.length>0&&!i.includes(m.id)&&m.rect.current){h.set(m.id,m.rect.current);continue}const v=m.node.current,b=v?new Yd(a(v),v):null;m.rect.current=b,b&&h.set(m.id,b)}return h}return g},[e,i,n,d,a]);return f.useEffect(()=>{c.current=e},[e]),f.useEffect(()=>{d||x()},[n,d]),f.useEffect(()=>{i&&i.length>0&&l(null)},[JSON.stringify(i)]),f.useEffect(()=>{d||typeof s!="number"||S.current!==null||(S.current=setTimeout(()=>{x(),S.current=null},s))},[s,d,x,...r]),{droppableRects:y,measureDroppableContainers:x,measuringScheduled:i!=null};function E(){switch(u){case zi.Always:return!1;case zi.BeforeDragging:return n;default:return!n}}}function Ov(e,t){return Gi(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function Gk(e,t){return Ov(e,t)}function Xk(e){let{callback:t,disabled:n}=e;const r=Kd(t),o=f.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return f.useEffect(()=>()=>o==null?void 0:o.disconnect(),[o]),o}function Ca(e){let{callback:t,disabled:n}=e;const r=Kd(t),o=f.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return f.useEffect(()=>()=>o==null?void 0:o.disconnect(),[o]),o}function Yk(e){return new Yd($o(e),e)}function sh(e,t,n){t===void 0&&(t=Yk);const[r,o]=f.useReducer(s,null),i=Xk({callback(a){if(e)for(const u of a){const{type:c,target:d}=u;if(c==="childList"&&d instanceof HTMLElement&&d.contains(e)){o();break}}}}),l=Ca({callback:o});return dn(()=>{o(),e?(l==null||l.observe(e),i==null||i.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),i==null||i.disconnect())},[e]),r;function s(a){if(!e)return null;if(e.isConnected===!1){var u;return(u=a??n)!=null?u:null}const c=t(e);return JSON.stringify(a)===JSON.stringify(c)?a:c}}function qk(e){const t=Ov(e);return Cv(e,t)}const ah=[];function Qk(e){const t=f.useRef(e),n=Gi(r=>e?r&&r!==ah&&e&&t.current&&e.parentNode===t.current.parentNode?r:Xd(e):ah,[e]);return f.useEffect(()=>{t.current=e},[e]),n}function Zk(e){const[t,n]=f.useState(null),r=f.useRef(e),o=f.useCallback(i=>{const l=au(i.target);l&&n(s=>s?(s.set(l,yc(l)),new Map(s)):null)},[]);return f.useEffect(()=>{const i=r.current;if(e!==i){l(i);const s=e.map(a=>{const u=au(a);return u?(u.addEventListener("scroll",o,{passive:!0}),[u,yc(u)]):null}).filter(a=>a!=null);n(s.length?new Map(s):null),r.current=e}return()=>{l(e),l(i)};function l(s){s.forEach(a=>{const u=au(a);u==null||u.removeEventListener("scroll",o)})}},[o,e]),f.useMemo(()=>e.length?t?Array.from(t.values()).reduce((i,l)=>ao(i,l),fn):$v(e):fn,[e,t])}function uh(e,t){t===void 0&&(t=[]);const n=f.useRef(null);return f.useEffect(()=>{n.current=null},t),f.useEffect(()=>{const r=e!==fn;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?xs(e,n.current):fn}function Jk(e){f.useEffect(()=>{if(!ba)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n==null||n()}},e.map(t=>{let{sensor:n}=t;return n}))}function eR(e,t){return f.useMemo(()=>e.reduce((n,r)=>{let{eventName:o,handler:i}=r;return n[o]=l=>{i(l,t)},n},{}),[e,t])}function _v(e){return f.useMemo(()=>e?Ek(e):null,[e])}const du=[];function tR(e,t){t===void 0&&(t=$o);const[n]=e,r=_v(n?Pt(n):null),[o,i]=f.useReducer(s,du),l=Ca({callback:i});return e.length>0&&o===du&&i(),dn(()=>{e.length?e.forEach(a=>l==null?void 0:l.observe(a)):(l==null||l.disconnect(),i())},[e]),o;function s(){return e.length?e.map(a=>Tv(a)?r:new Yd(t(a),a)):du}}function nR(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Ki(t)?t:e}function rR(e){let{measure:t}=e;const[n,r]=f.useState(null),o=f.useCallback(u=>{for(const{target:c}of u)if(Ki(c)){r(d=>{const p=t(c);return d?{...d,width:p.width,height:p.height}:p});break}},[t]),i=Ca({callback:o}),l=f.useCallback(u=>{const c=nR(u);i==null||i.disconnect(),c&&(i==null||i.observe(c)),r(c?t(c):null)},[t,i]),[s,a]=ys(l);return f.useMemo(()=>({nodeRef:s,rect:n,setRef:a}),[n,s,a])}const oR=[{sensor:Nv,options:{}},{sensor:Mv,options:{}}],iR={current:{}},Al={draggable:{measure:nh},droppable:{measure:nh,strategy:zi.WhileDragging,frequency:Sc.Optimized},dragOverlay:{measure:$o}};class pi extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const lR={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new pi,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ss},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Al,measureDroppableContainers:Ss,windowRect:null,measuringScheduled:!1},sR={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ss,draggableNodes:new Map,over:null,measureDroppableContainers:Ss},Ea=f.createContext(sR),Lv=f.createContext(lR);function aR(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new pi}}}function uR(e,t){switch(t.type){case He.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case He.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case He.DragEnd:case He.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case He.RegisterDroppable:{const{element:n}=t,{id:r}=n,o=new pi(e.droppable.containers);return o.set(r,n),{...e,droppable:{...e.droppable,containers:o}}}case He.SetDroppableDisabled:{const{id:n,key:r,disabled:o}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const l=new pi(e.droppable.containers);return l.set(n,{...i,disabled:o}),{...e,droppable:{...e.droppable,containers:l}}}case He.UnregisterDroppable:{const{id:n,key:r}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const i=new pi(e.droppable.containers);return i.delete(n),{...e,droppable:{...e.droppable,containers:i}}}default:return e}}function cR(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:o}=f.useContext(Ea),i=gc(r),l=gc(n==null?void 0:n.id);return f.useEffect(()=>{if(!t&&!r&&i&&l!=null){if(!Gd(i)||document.activeElement===i.target)return;const s=o.get(l);if(!s)return;const{activatorNode:a,node:u}=s;if(!a.current&&!u.current)return;requestAnimationFrame(()=>{for(const c of[a.current,u.current]){if(!c)continue;const d=nk(c);if(d){d.focus();break}}})}},[r,t,o,l,i]),null}function dR(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((o,i)=>i({transform:o,...r}),n):n}function fR(e){return f.useMemo(()=>({draggable:{...Al.draggable,...e==null?void 0:e.draggable},droppable:{...Al.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Al.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function pR(e){let{activeNode:t,measure:n,initialRect:r,config:o=!0}=e;const i=f.useRef(!1),{x:l,y:s}=typeof o=="boolean"?{x:o,y:o}:o;dn(()=>{if(!l&&!s||!t){i.current=!1;return}if(i.current||!r)return;const u=t==null?void 0:t.node.current;if(!u||u.isConnected===!1)return;const c=n(u),d=Cv(c,r);if(l||(d.x=0),s||(d.y=0),i.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const p=Ev(u);p&&p.scrollBy({top:d.y,left:d.x})}},[t,l,s,r,n])}const Dv=f.createContext({...fn,scaleX:1,scaleY:1});var Vn;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Vn||(Vn={}));const zv=f.memo(function(t){var n,r,o,i;let{id:l,accessibility:s,autoScroll:a=!0,children:u,sensors:c=oR,collisionDetection:d=vk,measuring:p,modifiers:x,...S}=t;const y=f.useReducer(uR,void 0,aR),[E,g]=y,[h,m]=ak(),[v,b]=f.useState(Vn.Uninitialized),C=v===Vn.Initialized,{draggable:{active:w,nodes:T,translate:M},droppable:{containers:P}}=E,O=w?T.get(w):null,F=f.useRef({initial:null,translated:null}),A=f.useMemo(()=>{var Ze;return w!=null?{id:w,data:(Ze=O==null?void 0:O.data)!=null?Ze:iR,rect:F}:null},[w,O]),z=f.useRef(null),[I,D]=f.useState(null),[_,$]=f.useState(null),N=Di(S,Object.values(S)),j=Xi("DndDescribedBy",l),K=f.useMemo(()=>P.getEnabled(),[P]),U=fR(p),{droppableRects:J,measureDroppableContainers:V,measuringScheduled:ne}=Kk(K,{dragging:C,dependencies:[M.x,M.y],config:U.droppable}),G=Vk(T,w),Ee=f.useMemo(()=>_?vc(_):null,[_]),ke=Jv(),ue=Gk(G,U.draggable.measure);pR({activeNode:w?T.get(w):null,config:ke.layoutShiftCompensation,initialRect:ue,measure:U.draggable.measure});const X=sh(G,U.draggable.measure,ue),ee=sh(G?G.parentElement:null),re=f.useRef({activatorEvent:null,active:null,activeNode:G,collisionRect:null,collisions:null,droppableRects:J,draggableNodes:T,draggingNode:null,draggingNodeRect:null,droppableContainers:P,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Y=P.getNodeFor((n=re.current.over)==null?void 0:n.id),Z=rR({measure:U.dragOverlay.measure}),ce=(r=Z.nodeRef.current)!=null?r:G,ut=C?(o=Z.rect)!=null?o:X:null,ct=!!(Z.nodeRef.current&&Z.rect),dt=qk(ct?null:X),ft=_v(ce?Pt(ce):null),_e=Qk(C?Y??G:null),ge=tR(_e),vt=dR(x,{transform:{x:M.x-dt.x,y:M.y-dt.y,scaleX:1,scaleY:1},activatorEvent:_,active:A,activeNodeRect:X,containerNodeRect:ee,draggingNodeRect:ut,over:re.current.over,overlayNodeRect:Z.rect,scrollableAncestors:_e,scrollableAncestorRects:ge,windowRect:ft}),Qe=Ee?ao(Ee,M):null,xe=Zk(_e),Bt=uh(xe),hn=uh(xe,[X]),rt=ao(vt,Bt),oe=ut?Sk(ut,vt):null,W=A&&oe?d({active:A,collisionRect:oe,droppableRects:J,droppableContainers:K,pointerCoordinates:Qe}):null,Ut=mk(W,"id"),[yt,An]=f.useState(null),Yi=ct?vt:ao(vt,hn),H=yk(Yi,(i=yt==null?void 0:yt.rect)!=null?i:null,X),ve=f.useCallback((Ze,$t)=>{let{sensor:It,options:Fn}=$t;if(z.current==null)return;const Wt=T.get(z.current);if(!Wt)return;const tn=Ze.nativeEvent,mn=new It({active:z.current,activeNode:Wt,event:tn,options:Fn,context:re,onStart(nn){const Io=z.current;if(Io==null)return;const Mo=T.get(Io);if(!Mo)return;const{onDragStart:Qi}=N.current,Zi={active:{id:Io,data:Mo.data,rect:F}};wn.unstable_batchedUpdates(()=>{Qi==null||Qi(Zi),b(Vn.Initializing),g({type:He.DragStart,initialCoordinates:nn,active:Io}),h({type:"onDragStart",event:Zi})})},onMove(nn){g({type:He.DragMove,coordinates:nn})},onEnd:Mr(He.DragEnd),onCancel:Mr(He.DragCancel)});wn.unstable_batchedUpdates(()=>{D(mn),$(Ze.nativeEvent)});function Mr(nn){return async function(){const{active:Mo,collisions:Qi,over:Zi,scrollAdjustedTranslate:Qd}=re.current;let No=null;if(Mo&&Qd){const{cancelDrop:Oo}=N.current;No={activatorEvent:tn,active:Mo,collisions:Qi,delta:Qd,over:Zi},nn===He.DragEnd&&typeof Oo=="function"&&await Promise.resolve(Oo(No))&&(nn=He.DragCancel)}z.current=null,wn.unstable_batchedUpdates(()=>{g({type:nn}),b(Vn.Uninitialized),An(null),D(null),$(null);const Oo=nn===He.DragEnd?"onDragEnd":"onDragCancel";if(No){const Ra=N.current[Oo];Ra==null||Ra(No),h({type:Oo,event:No})}})}}},[T]),We=f.useCallback((Ze,$t)=>(It,Fn)=>{const Wt=It.nativeEvent,tn=T.get(Fn);if(z.current!==null||!tn||Wt.dndKit||Wt.defaultPrevented)return;const mn={active:tn};Ze(It,$t.options,mn)===!0&&(Wt.dndKit={capturedBy:$t.sensor},z.current=Fn,ve(It,$t))},[T,ve]),kn=Hk(c,We);Jk(c),dn(()=>{X&&v===Vn.Initializing&&b(Vn.Initialized)},[X,v]),f.useEffect(()=>{const{onDragMove:Ze}=N.current,{active:$t,activatorEvent:It,collisions:Fn,over:Wt}=re.current;if(!$t||!It)return;const tn={active:$t,activatorEvent:It,collisions:Fn,delta:{x:rt.x,y:rt.y},over:Wt};wn.unstable_batchedUpdates(()=>{Ze==null||Ze(tn),h({type:"onDragMove",event:tn})})},[rt.x,rt.y]),f.useEffect(()=>{const{active:Ze,activatorEvent:$t,collisions:It,droppableContainers:Fn,scrollAdjustedTranslate:Wt}=re.current;if(!Ze||z.current==null||!$t||!Wt)return;const{onDragOver:tn}=N.current,mn=Fn.get(Ut),Mr=mn&&mn.rect.current?{id:mn.id,rect:mn.rect.current,data:mn.data,disabled:mn.disabled}:null,nn={active:Ze,activatorEvent:$t,collisions:It,delta:{x:Wt.x,y:Wt.y},over:Mr};wn.unstable_batchedUpdates(()=>{An(Mr),tn==null||tn(nn),h({type:"onDragOver",event:nn})})},[Ut]),dn(()=>{re.current={activatorEvent:_,active:A,activeNode:G,collisionRect:oe,collisions:W,droppableRects:J,draggableNodes:T,draggingNode:ce,draggingNodeRect:ut,droppableContainers:P,over:yt,scrollableAncestors:_e,scrollAdjustedTranslate:rt},F.current={initial:ut,translated:oe}},[A,G,W,oe,T,ce,ut,J,P,yt,_e,rt]),Bk({...ke,delta:M,draggingRect:oe,pointerCoordinates:Qe,scrollableAncestors:_e,scrollableAncestorRects:ge});const qi=f.useMemo(()=>({active:A,activeNode:G,activeNodeRect:X,activatorEvent:_,collisions:W,containerNodeRect:ee,dragOverlay:Z,draggableNodes:T,droppableContainers:P,droppableRects:J,over:yt,measureDroppableContainers:V,scrollableAncestors:_e,scrollableAncestorRects:ge,measuringConfiguration:U,measuringScheduled:ne,windowRect:ft}),[A,G,X,_,W,ee,Z,T,P,J,yt,V,_e,ge,U,ne,ft]),Zv=f.useMemo(()=>({activatorEvent:_,activators:kn,active:A,activeNodeRect:X,ariaDescribedById:{draggable:j},dispatch:g,draggableNodes:T,over:yt,measureDroppableContainers:V}),[_,kn,A,X,g,j,T,yt,V]);return be.createElement(wv.Provider,{value:m},be.createElement(Ea.Provider,{value:Zv},be.createElement(Lv.Provider,{value:qi},be.createElement(Dv.Provider,{value:H},u)),be.createElement(cR,{disabled:(s==null?void 0:s.restoreFocus)===!1})),be.createElement(dk,{...s,hiddenTextDescribedById:j}));function Jv(){const Ze=(I==null?void 0:I.autoScrollEnabled)===!1,$t=typeof a=="object"?a.enabled===!1:a===!1,It=C&&!Ze&&!$t;return typeof a=="object"?{...a,enabled:It}:{enabled:It}}}),hR=f.createContext(null),ch="button",mR="Droppable";function gR(e){let{id:t,data:n,disabled:r=!1,attributes:o}=e;const i=Xi(mR),{activators:l,activatorEvent:s,active:a,activeNodeRect:u,ariaDescribedById:c,draggableNodes:d,over:p}=f.useContext(Ea),{role:x=ch,roleDescription:S="draggable",tabIndex:y=0}=o??{},E=(a==null?void 0:a.id)===t,g=f.useContext(E?Dv:hR),[h,m]=ys(),[v,b]=ys(),C=eR(l,t),w=Di(n);dn(()=>(d.set(t,{id:t,key:i,node:h,activatorNode:v,data:w}),()=>{const M=d.get(t);M&&M.key===i&&d.delete(t)}),[d,t]);const T=f.useMemo(()=>({role:x,tabIndex:y,"aria-disabled":r,"aria-pressed":E&&x===ch?!0:void 0,"aria-roledescription":S,"aria-describedby":c.draggable}),[r,x,y,E,S,c.draggable]);return{active:a,activatorEvent:s,activeNodeRect:u,attributes:T,isDragging:E,listeners:r?void 0:C,node:h,over:p,setNodeRef:m,setActivatorNodeRef:b,transform:g}}function vR(){return f.useContext(Lv)}const yR="Droppable",xR={timeout:25};function SR(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:o}=e;const i=Xi(yR),{active:l,dispatch:s,over:a,measureDroppableContainers:u}=f.useContext(Ea),c=f.useRef({disabled:n}),d=f.useRef(!1),p=f.useRef(null),x=f.useRef(null),{disabled:S,updateMeasurementsFor:y,timeout:E}={...xR,...o},g=Di(y??r),h=f.useCallback(()=>{if(!d.current){d.current=!0;return}x.current!=null&&clearTimeout(x.current),x.current=setTimeout(()=>{u(Array.isArray(g.current)?g.current:[g.current]),x.current=null},E)},[E]),m=Ca({callback:h,disabled:S||!l}),v=f.useCallback((T,M)=>{m&&(M&&(m.unobserve(M),d.current=!1),T&&m.observe(T))},[m]),[b,C]=ys(v),w=Di(t);return f.useEffect(()=>{!m||!b.current||(m.disconnect(),d.current=!1,m.observe(b.current))},[b,m]),dn(()=>(s({type:He.RegisterDroppable,element:{id:r,key:i,disabled:n,node:b,rect:p,data:w}}),()=>s({type:He.UnregisterDroppable,key:i,id:r})),[r]),f.useEffect(()=>{n!==c.current.disabled&&(s({type:He.SetDroppableDisabled,id:r,key:i,disabled:n}),c.current.disabled=n)},[r,i,n,s]),{active:l,rect:p,isOver:(a==null?void 0:a.id)===r,node:b,over:a,setNodeRef:C}}function ka(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function wR(e,t){return e.reduce((n,r,o)=>{const i=t.get(r);return i&&(n[o]=i),n},Array(e.length))}function Sl(e){return e!==null&&e>=0}function bR(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function CR(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Av=e=>{let{rects:t,activeIndex:n,overIndex:r,index:o}=e;const i=ka(t,r,n),l=t[o],s=i[o];return!s||!l?null:{x:s.left-l.left,y:s.top-l.top,scaleX:s.width/l.width,scaleY:s.height/l.height}},wl={scaleX:1,scaleY:1},Fv=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:o,rects:i,overIndex:l}=e;const s=(t=i[n])!=null?t:r;if(!s)return null;if(o===n){const u=i[l];return u?{x:0,y:n<l?u.top+u.height-(s.top+s.height):u.top-s.top,...wl}:null}const a=ER(i,o,n);return o>n&&o<=l?{x:0,y:-s.height-a,...wl}:o<n&&o>=l?{x:0,y:s.height+a,...wl}:{x:0,y:0,...wl}};function ER(e,t,n){const r=e[t],o=e[t-1],i=e[t+1];return r?n<t?o?r.top-(o.top+o.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):o?r.top-(o.top+o.height):0:0}const jv="Sortable",Bv=be.createContext({activeIndex:-1,containerId:jv,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Av,disabled:{draggable:!1,droppable:!1}});function Uv(e){let{children:t,id:n,items:r,strategy:o=Av,disabled:i=!1}=e;const{active:l,dragOverlay:s,droppableRects:a,over:u,measureDroppableContainers:c}=vR(),d=Xi(jv,n),p=s.rect!==null,x=f.useMemo(()=>r.map(C=>typeof C=="object"&&"id"in C?C.id:C),[r]),S=l!=null,y=l?x.indexOf(l.id):-1,E=u?x.indexOf(u.id):-1,g=f.useRef(x),h=!bR(x,g.current),m=E!==-1&&y===-1||h,v=CR(i);dn(()=>{h&&S&&c(x)},[h,x,S,c]),f.useEffect(()=>{g.current=x},[x]);const b=f.useMemo(()=>({activeIndex:y,containerId:d,disabled:v,disableTransforms:m,items:x,overIndex:E,useDragOverlay:p,sortedRects:wR(x,a),strategy:o}),[y,d,v.draggable,v.droppable,m,x,E,a,p,o]);return be.createElement(Bv.Provider,{value:b},t)}const kR=e=>{let{id:t,items:n,activeIndex:r,overIndex:o}=e;return ka(n,r,o).indexOf(t)},RR=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:o,items:i,newIndex:l,previousItems:s,previousContainerId:a,transition:u}=e;return!u||!r||s!==i&&o===l?!1:n?!0:l!==o&&t===a},TR={duration:200,easing:"ease"},Wv="transform",PR=So.Transition.toString({property:Wv,duration:0,easing:"linear"}),$R={roleDescription:"sortable"};function IR(e){let{disabled:t,index:n,node:r,rect:o}=e;const[i,l]=f.useState(null),s=f.useRef(n);return dn(()=>{if(!t&&n!==s.current&&r.current){const a=o.current;if(a){const u=$o(r.current,{ignoreTransform:!0}),c={x:a.left-u.left,y:a.top-u.top,scaleX:a.width/u.width,scaleY:a.height/u.height};(c.x||c.y)&&l(c)}}n!==s.current&&(s.current=n)},[t,n,r,o]),f.useEffect(()=>{i&&l(null)},[i]),i}function Vv(e){let{animateLayoutChanges:t=RR,attributes:n,disabled:r,data:o,getNewIndex:i=kR,id:l,strategy:s,resizeObserverConfig:a,transition:u=TR}=e;const{items:c,containerId:d,activeIndex:p,disabled:x,disableTransforms:S,sortedRects:y,overIndex:E,useDragOverlay:g,strategy:h}=f.useContext(Bv),m=MR(r,x),v=c.indexOf(l),b=f.useMemo(()=>({sortable:{containerId:d,index:v,items:c},...o}),[d,o,v,c]),C=f.useMemo(()=>c.slice(c.indexOf(l)),[c,l]),{rect:w,node:T,isOver:M,setNodeRef:P}=SR({id:l,data:b,disabled:m.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...a}}),{active:O,activatorEvent:F,activeNodeRect:A,attributes:z,setNodeRef:I,listeners:D,isDragging:_,over:$,setActivatorNodeRef:N,transform:j}=gR({id:l,data:b,attributes:{...$R,...n},disabled:m.draggable}),K=Z2(P,I),U=!!O,J=U&&!S&&Sl(p)&&Sl(E),V=!g&&_,ne=V&&J?j:null,Ee=J?ne??(s??h)({rects:y,activeNodeRect:A,activeIndex:p,overIndex:E,index:v}):null,ke=Sl(p)&&Sl(E)?i({id:l,items:c,activeIndex:p,overIndex:E}):v,ue=O==null?void 0:O.id,X=f.useRef({activeId:ue,items:c,newIndex:ke,containerId:d}),ee=c!==X.current.items,re=t({active:O,containerId:d,isDragging:_,isSorting:U,id:l,index:v,items:c,newIndex:X.current.newIndex,previousItems:X.current.items,previousContainerId:X.current.containerId,transition:u,wasDragging:X.current.activeId!=null}),Y=IR({disabled:!re,index:v,node:T,rect:w});return f.useEffect(()=>{U&&X.current.newIndex!==ke&&(X.current.newIndex=ke),d!==X.current.containerId&&(X.current.containerId=d),c!==X.current.items&&(X.current.items=c)},[U,ke,d,c]),f.useEffect(()=>{if(ue===X.current.activeId)return;if(ue&&!X.current.activeId){X.current.activeId=ue;return}const ce=setTimeout(()=>{X.current.activeId=ue},50);return()=>clearTimeout(ce)},[ue]),{active:O,activeIndex:p,attributes:z,data:b,rect:w,index:v,newIndex:ke,items:c,isOver:M,isSorting:U,isDragging:_,listeners:D,node:T,overIndex:E,over:$,setNodeRef:K,setActivatorNodeRef:N,setDroppableNodeRef:P,setDraggableNodeRef:I,transform:Y??Ee,transition:Z()};function Z(){if(Y||ee&&X.current.newIndex===v)return PR;if(!(V&&!Gd(F)||!u)&&(U||re))return So.Transition.toString({...u,property:Wv})}}function MR(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e==null?void 0:e.draggable)!=null?n:t.draggable,droppable:(r=e==null?void 0:e.droppable)!=null?r:t.droppable}}pe.Down,pe.Right,pe.Up,pe.Left;function Hv({user:e,toggleClass:t,abrirModalEditar:n,eliminarTarea:r,lista:o}){const{attributes:i,listeners:l,setNodeRef:s,transform:a,transition:u}=Vv({id:e.id}),c={transform:So.Transform.toString(a),transition:u};return k.jsxs("div",{style:c,ref:s,children:[k.jsx("div",{children:k.jsx("li",{id:e.id,className:e.clase===!1?"noCompletada":"completada",children:e.texto})}),k.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[k.jsxs("div",{children:[k.jsxs(wt,{variant:"outlined",onClick:()=>{t(o.titulo,e.id)},children:[" ",e.clase===!1?"Marcar":"Desmarcar"]}),k.jsx(wt,{variant:"outlined",onClick:()=>{n(o.titulo,e.id,e.texto)},children:"Editar"}),k.jsx(wt,{variant:"outlined",className:"eliminar",onClick:()=>{r(o.titulo,e.id)},children:"Eliminar"})]}),k.jsx("div",{children:k.jsxs(wt,{variant:"outlined",...i,...l,style:{touchAction:"none"},children:[k.jsx("p",{style:{margin:"0"},children:"Mover"}),k.jsx("svg",{style:{marginLeft:"5px"},height:"20px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:k.jsx("path",{d:"M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"})})]})})]})]})}Hv.propTypes={user:se.object,toggleClass:se.func.isRequired,abrirModalEditar:se.func.isRequired,eliminarTarea:se.func.isRequired,lista:se.object.isRequired};const Kv=({tareas:e,setTareas:t,nombreListaMostrar:n,toggleClass:r,eliminarTarea:o,abrirModalEditar:i,abrirModalEditarLista:l})=>{const s=a=>{var y;const{active:u,over:c}=a,d=((y=e.find(E=>E.titulo===n))==null?void 0:y.tarea)||[],p=d.findIndex(E=>E.id===u.id),x=d.findIndex(E=>E.id===c.id),S=ka(d,p,x);t(e.map(E=>E.titulo==n?{...E,tarea:S}:E))};return k.jsxs("div",{className:"lista",children:[k.jsxs("div",{className:"flexCenter",children:[k.jsx("h2",{style:{width:"fit-content"},children:n}),n&&k.jsx("div",{style:{width:"fit-content"},children:k.jsx(wt,{variant:"outlined",onClick:()=>{l(n)},children:"Agregar tarea"})})]}),e.map((a,u)=>a.titulo===n&&k.jsx(zv,{collisionDetection:bv,onDragEnd:s,children:k.jsx(Uv,{items:a.tarea,strategy:Fv,children:a.tarea.map(c=>k.jsx(Hv,{user:c,toggleClass:r,eliminarTarea:o,abrirModalEditar:i,lista:a},c.id))})},u))]})};Kv.propTypes={tareas:se.array.isRequired,nombreListaMostrar:se.string,toggleClass:se.func.isRequired,eliminarTarea:se.func.isRequired,abrirModalEditar:se.func.isRequired,abrirModalEditarLista:se.func.isRequired,setTareas:se.func.isRequired};const Fl=({modalVisible:e,setModalVisible:t,contenido:n})=>k.jsx("div",{className:`modal ${e?"show":"hide"}`,onClick:()=>{t(!1)},children:k.jsx("div",{className:"modalContenido",onClick:r=>r.stopPropagation(),children:n})});Fl.propTypes={modalVisible:se.bool,setModalVisible:se.func,contenido:se.object};const Gv=({editar:e,textoAnterior:t})=>{const[n,r]=f.useState(""),o=l=>{r(l.target.value)},i=l=>{l.preventDefault(),e(n),r("")};return k.jsx(k.Fragment,{children:k.jsx("div",{className:"flexCenter",children:k.jsxs("div",{children:[k.jsx("h1",{children:"Editar texto:"}),k.jsx("h2",{children:t}),k.jsxs("form",{onSubmit:i,className:"centradoVertical",children:[k.jsx(Li,{required:!0,id:"outlined-required",value:n,label:"Campo obligatorio",onChange:o}),k.jsx(wt,{type:"submit",variant:"contained",children:"Editar"})]})]})})})};Gv.propTypes={editar:se.func,textoAnterior:se.string};const Xv=({editar:e,textoAnterior:t})=>{const[n,r]=f.useState(""),o=l=>{r(l.target.value)},i=l=>{l.preventDefault(),e(n),r("")};return k.jsx(k.Fragment,{children:k.jsx("div",{className:"flexCenter",children:k.jsxs("div",{children:[k.jsx("h1",{children:"Cambiar título:"}),k.jsx("h2",{children:t}),k.jsxs("form",{onSubmit:i,className:"centradoVertical",children:[k.jsx(Li,{required:!0,id:"outlined-required",value:n,label:"Campo obligatorio",onChange:o}),k.jsx(wt,{type:"submit",variant:"contained",children:"Cambiar"})]})]})})})};Xv.propTypes={editar:se.func,textoAnterior:se.string};const Yv=({editar:e,titulo:t})=>{const[n,r]=f.useState(""),o=l=>{r(l.target.value)},i=l=>{l.preventDefault(),e(n),r("")};return k.jsx(k.Fragment,{children:k.jsx("div",{className:"flexCenter",children:k.jsxs("div",{children:[k.jsxs("h2",{children:["Agregar tarea a ",t]}),k.jsxs("form",{onSubmit:i,className:"centradoVertical",children:[k.jsx(Li,{required:!0,id:"outlined-required",value:n,label:"Campo obligatorio",onChange:o}),k.jsx(wt,{type:"submit",variant:"contained",children:"Agregar tarea"})]})]})})})};Yv.propTypes={editar:se.func,titulo:se.string};const NR=()=>{const[e,t]=f.useState(()=>{const I=localStorage.getItem("tareasLocalStorage");return I?JSON.parse(I):[]});f.useEffect(()=>{localStorage.setItem("tareasLocalStorage",JSON.stringify(e))},[e]);const n=(I,D)=>{const _=[...e],$={id:e.length+1,titulo:I,tarea:[{id:e.tarea?e.tarea.length+1:1,texto:D,clase:!1}]};_.length<1?t([...e,$]):_.map(N=>{if(N.titulo==I){const j=N.tarea.length;console.log(j);const K={id:j+1,texto:D,clase:!1};N.tarea.push(K),t(_),console.log(_)}else t([...e,$])})},[r,o]=f.useState(""),i=I=>{o(I)},[l,s]=f.useState(!1),[a,u]=f.useState(""),c=I=>{u(I),s(!0)},d=I=>{const D=[...e];D.map(_=>{a==_.titulo&&(_.titulo=I)}),t(D),s(!1)},p=I=>{if(window.confirm("¿Seguro que desea eliminar lista?")){const _=e.filter($=>$.titulo!==I);t(_)}},x=(I,D)=>{const _=e.map($=>($.titulo==I&&$.tarea.map(N=>(D===N.id&&(N.clase=!N.clase),N)),$));t(_)},S=(I,D)=>{if(console.log(I,D),window.confirm("¿Seguro que desea borrar?")){const $=e.map(N=>{if(N.titulo===I){const j=N.tarea.filter(K=>K.id!==D);return{...N,tarea:j}}return N});console.log($),t($)}},[y,E]=f.useState(!1),[g,h]=f.useState(""),[m,v]=f.useState(""),[b,C]=f.useState(""),w=(I,D,_)=>{C(I),h(D),v(_),E(!0)},T=I=>{const D=[...e];D.map(_=>{b==_.titulo&&_.tarea.map($=>{g===$.id&&($.texto=I)})}),t(D),E(!1)},[M,P]=f.useState(!1),[O,F]=f.useState("");return{tareas:e,agregarTarea:n,nombreLista:i,editarTitulo:d,abrirModalEditarTitulo:c,modalEditarTitulo:l,setModalEditarTitulo:s,tituloAnterior:a,eliminarTitulo:p,nombreListaMostrar:r,toggleClass:x,eliminarTarea:S,abrirModalEditar:w,modalEditar:y,setModalEditar:E,editar:T,textoAEditar:m,abrirModalEditarLista:I=>{F(I),P(!0)},agregarTareaALista:I=>{const D=[...e];D.forEach(_=>{if(O===_.titulo){const $=_.tarea.length;_.tarea.push({id:$+1,texto:I,clase:!1})}}),t(D),P(!1)},modalAgregarTareaALista:M,setModalAgregarTareaALista:P,tituloTareaALista:O,setTareas:t}};function qv({user:e,nombreLista:t,editar:n,eliminarTitulo:r}){const{attributes:o,listeners:i,setNodeRef:l,transform:s,transition:a}=Vv({id:e.id}),u={transform:So.Transform.toString(s),transition:a},c=d=>{t(d.target.innerText)};return k.jsx("div",{style:u,ref:l,children:k.jsxs("div",{style:{display:"flex",flexWrap:"wrap"},children:[k.jsx("li",{style:{width:"100%",marginLeft:"20px"},onClick:c,children:e.titulo}),k.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[k.jsxs("div",{children:[k.jsx(wt,{variant:"outlined",onClick:()=>{n(e.titulo)},children:"Cambiar nombre"}),k.jsx(wt,{variant:"outlined",className:"eliminar",onClick:()=>{r(e.titulo)},children:"Eliminar"})]}),k.jsx("div",{children:k.jsxs(wt,{variant:"outlined",...o,...i,style:{touchAction:"none"},children:[k.jsx("p",{style:{margin:"0"},children:"Mover"}),k.jsx("svg",{style:{marginLeft:"5px"},height:"20px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:k.jsx("path",{d:"M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"})})]})})]})]})})}qv.propTypes={user:se.object,nombreLista:se.func.isRequired,editar:se.func.isRequired,eliminarTitulo:se.func.isRequired};const Qv=({tareas:e,setTareas:t,nombreLista:n,editar:r,eliminarTitulo:o})=>{const i=l=>{const{active:s,over:a}=l;s.id!==a.id&&t(u=>{const c=u.findIndex(p=>p.id===s.id),d=u.findIndex(p=>p.id===a.id);return ka(u,c,d)})};return k.jsx("div",{className:"formulario",children:k.jsx("div",{className:"flex",style:{width:"100%"},children:k.jsx("div",{style:{width:"100%"},children:k.jsxs(zv,{collisionDetection:bv,onDragEnd:i,children:[k.jsx("h1",{children:"Listas:"}),k.jsx("ul",{children:k.jsx(Uv,{items:e,strategy:Fv,children:e.map(l=>k.jsx(qv,{user:l,nombreLista:n,editar:r,eliminarTitulo:o},l.id))})})]})})})})};Qv.propTypes={tareas:se.array.isRequired,nombreLista:se.func.isRequired,eliminarTitulo:se.func.isRequired,editar:se.func.isRequired,setTareas:se.func.isRequired};const OR=()=>{const{tareas:e,agregarTarea:t,nombreLista:n,editarTitulo:r,modalEditarTitulo:o,abrirModalEditarTitulo:i,setModalEditarTitulo:l,tituloAnterior:s,eliminarTitulo:a,nombreListaMostrar:u,toggleClass:c,eliminarTarea:d,abrirModalEditar:p,modalEditar:x,setModalEditar:S,editar:y,textoAEditar:E,modalAgregarTareaALista:g,setModalAgregarTareaALista:h,agregarTareaALista:m,tituloTareaALista:v,abrirModalEditarLista:b,setTareas:C}=NR();return k.jsx(k.Fragment,{children:k.jsxs("div",{className:"flexCenter",children:[k.jsx(yv,{agregarTarea:t,tareas:e}),k.jsx(Qv,{tareas:e,setTareas:C,nombreLista:n,editar:i,eliminarTitulo:a}),k.jsx(Kv,{tareas:e,setTareas:C,nombreListaMostrar:u,toggleClass:c,eliminarTarea:d,abrirModalEditar:p,abrirModalEditarLista:b}),k.jsx(Fl,{modalVisible:x,setModalVisible:S,contenido:k.jsx(Gv,{editar:y,textoAnterior:E})}),k.jsx(Fl,{modalVisible:o,setModalVisible:l,contenido:k.jsx(Xv,{editar:r,textoAnterior:s})}),k.jsx(Fl,{modalVisible:g,setModalVisible:h,contenido:k.jsx(Yv,{editar:m,titulo:v})})]})})};pu.createRoot(document.getElementById("root")).render(k.jsx(be.StrictMode,{children:k.jsx(OR,{})}));