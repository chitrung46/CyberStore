/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    function ii(n) {
        var t = !!n && "length"in n && n.length
          , r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }
    function ri(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            });
        if ("string" == typeof t) {
            if (pe.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) > -1 !== r
        })
    }
    function kr(n, t) {
        do
            n = n[t];
        while (n && 1 !== n.nodeType);
        return n
    }
    function we(n) {
        var t = {};
        return i.each(n.match(s) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function dr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", v),
        n.removeEventListener("load", v)) : (u.detachEvent("onreadystatechange", v),
        n.detachEvent("onload", v))
    }
    function v() {
        (u.addEventListener || "load" === n.event.type || "complete" === u.readyState) && (dr(),
        i.ready())
    }
    function nu(n, t, r) {
        if (void 0 === r && 1 === n.nodeType) {
            var u = "data-" + t.replace(ke, "-$1").toLowerCase();
            if (r = n.getAttribute(u),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : be.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else
                r = void 0
        }
        return r
    }
    function fi(n) {
        for (var t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function tu(n, t, r, u) {
        if (ot(n)) {
            var s, e, h = i.expando, l = n.nodeType, o = l ? i.cache : n, f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || void 0 !== r || "string" != typeof t)
                return f || (f = l ? n[h] = c.pop() || i.guid++ : h),
                o[f] || (o[f] = l ? {} : {
                    toJSON: i.noop
                }),
                "object" != typeof t && "function" != typeof t || (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)),
                e = o[f],
                u || (e.data || (e.data = {}),
                e = e.data),
                void 0 !== r && (e[i.camelCase(t)] = r),
                "string" == typeof t ? (s = e[t],
                null == s && (s = e[i.camelCase(t)])) : s = e,
                s
        }
    }
    function iu(n, t, u) {
        if (ot(n)) {
            var o, s, h = n.nodeType, f = h ? i.cache : n, e = h ? n[i.expando] : i.expando;
            if (f[e]) {
                if (t && (o = u ? f[e] : f[e].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t),
                    t = (t in o) ? [t] : t.split(" ")),
                    s = t.length; s--; )
                        delete o[t[s]];
                    if (u ? !fi(o) : !i.isEmptyObject(o))
                        return
                }
                (u || (delete f[e].data,
                fi(f[e]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[e] : f[e] = void 0)
            }
        }
    }
    function ru(n, t, r, u) {
        var h, e = 1, l = 20, c = u ? function() {
            return u.cur()
        }
        : function() {
            return i.css(n, t, "")
        }
        , s = c(), o = r && r[3] || (i.cssNumber[t] ? "" : "px"), f = (i.cssNumber[t] || "px" !== o && +s) && oi.exec(i.css(n, t));
        if (f && f[3] !== o) {
            o = o || f[3];
            r = r || [];
            f = +s || 1;
            do
                e = e || ".5",
                f /= e,
                i.style(n, t, f + o);
            while (e !== (e = c() / s) && 1 !== e && --l)
        }
        return r && (f = +f || +s || 0,
        h = r[1] ? f + (r[1] + 1) * r[2] : +r[2],
        u && (u.unit = o,
        u.start = f,
        u.end = h)),
        h
    }
    function ou(n) {
        var i = eu.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function f(n, t) {
        var e, u, o = 0, r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [],
            e = n.childNodes || n; null != (u = e[o]); o++)
                !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }
    function ci(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++)
            i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function de(n) {
        si.test(n.type) && (n.defaultChecked = n.checked)
    }
    function hu(n, t, u, e, s) {
        for (var l, h, k, c, w, b, v, d = n.length, y = ou(t), a = [], p = 0; d > p; p++)
            if (h = n[p],
            h || 0 === h)
                if ("object" === i.type(h))
                    i.merge(a, h.nodeType ? [h] : h);
                else if (su.test(h)) {
                    for (c = c || y.appendChild(t.createElement("div")),
                    w = (uu.exec(h) || ["", ""])[1].toLowerCase(),
                    v = o[w] || o._default,
                    c.innerHTML = v[1] + i.htmlPrefilter(h) + v[2],
                    l = v[0]; l--; )
                        c = c.lastChild;
                    if (!r.leadingWhitespace && hi.test(h) && a.push(t.createTextNode(hi.exec(h)[0])),
                    !r.tbody)
                        for (h = "table" !== w || li.test(h) ? "<table>" !== v[1] || li.test(h) ? 0 : c : c.firstChild,
                        l = h && h.childNodes.length; l--; )
                            i.nodeName(b = h.childNodes[l], "tbody") && !b.childNodes.length && h.removeChild(b);
                    for (i.merge(a, c.childNodes),
                    c.textContent = ""; c.firstChild; )
                        c.removeChild(c.firstChild);
                    c = y.lastChild
                } else
                    a.push(t.createTextNode(h));
        for (c && y.removeChild(c),
        r.appendChecked || i.grep(f(a, "input"), de),
        p = 0; h = a[p++]; )
            if (e && i.inArray(h, e) > -1)
                s && s.push(h);
            else if (k = i.contains(h.ownerDocument, h),
            c = f(y.appendChild(h), "script"),
            k && ci(c),
            u)
                for (l = 0; h = c[l++]; )
                    fu.test(h.type || "") && u.push(h);
        return c = null,
        y
    }
    function vt() {
        return !0
    }
    function rt() {
        return !1
    }
    function au() {
        try {
            return u.activeElement
        } catch (n) {}
    }
    function vi(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof r && (u = u || r,
            r = void 0);
            for (s in t)
                vi(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r,
        u = r = void 0) : null == f && ("string" == typeof r ? (f = u,
        u = void 0) : (f = u,
        u = r,
        r = void 0)),
        f === !1)
            f = rt;
        else if (!f)
            return n;
        return 1 === e && (o = f,
        f = function(n) {
            return i().off(n),
            o.apply(this, arguments)
        }
        ,
        f.guid = o.guid || (o.guid = i.guid++)),
        n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }
    function yu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function pu(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type,
        n
    }
    function wu(n) {
        var t = fo.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function bu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                    o = e[u].length; o > f; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function so(n, t) {
        var u, e, f;
        if (1 === t.nodeType) {
            if (u = t.nodeName.toLowerCase(),
            !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events)
                    i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            "script" === u && t.text !== n.text ? (pu(t).text = n.text,
            wu(t)) : "object" === u ? (t.parentNode && (t.outerHTML = n.outerHTML),
            r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === u && si.test(n.type) ? (t.defaultChecked = t.checked = n.checked,
            t.value !== n.value && (t.value = n.value)) : "option" === u ? t.defaultSelected = t.selected = n.defaultSelected : "input" !== u && "textarea" !== u || (t.defaultValue = n.defaultValue)
        }
    }
    function k(n, t, u, e) {
        t = sr.apply([], t);
        var l, o, a, h, p, c, s = 0, v = n.length, b = v - 1, y = t[0], w = i.isFunction(y);
        if (w || v > 1 && "string" == typeof y && !r.checkClone && uo.test(y))
            return n.each(function(i) {
                var r = n.eq(i);
                w && (t[0] = y.call(this, i, r.html()));
                k(r, t, u, e)
            });
        if (v && (c = hu(t, n[0].ownerDocument, !1, n, e),
        l = c.firstChild,
        1 === c.childNodes.length && (c = l),
        l || e)) {
            for (h = i.map(f(c, "script"), pu),
            a = h.length; v > s; s++)
                o = c,
                s !== b && (o = i.clone(o, !0, !0),
                a && i.merge(h, f(o, "script"))),
                u.call(n[s], o, s);
            if (a)
                for (p = h[h.length - 1].ownerDocument,
                i.map(h, wu),
                s = 0; a > s; s++)
                    o = h[s],
                    fu.test(o.type || "") && !i._data(o, "globalEval") && i.contains(p, o) && (o.src ? i._evalUrl && i._evalUrl(o.src) : i.globalEval((o.text || o.textContent || o.innerHTML || "").replace(eo, "")));
            c = l = null
        }
        return n
    }
    function ku(n, t, r) {
        for (var u, o = t ? i.filter(t, n) : n, e = 0; null != (u = o[e]); e++)
            r || 1 !== u.nodeType || i.cleanData(f(u)),
            u.parentNode && (r && i.contains(u.ownerDocument, u) && ci(f(u, "script")),
            u.parentNode.removeChild(u));
        return n
    }
    function du(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body)
          , u = i.css(r[0], "display");
        return r.detach(),
        u
    }
    function yt(n) {
        var r = u
          , t = pi[n];
        return t || (t = du(n, r),
        "none" !== t && t || (ht = (ht || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement),
        r = (ht[0].contentWindow || ht[0].contentDocument).document,
        r.write(),
        r.close(),
        t = du(n, r),
        ht.detach()),
        pi[n] = t),
        t
    }
    function bi(n, t) {
        return {
            get: function() {
                return n() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function ef(n) {
        if (n in ff)
            return n;
        for (var i = n.charAt(0).toUpperCase() + n.slice(1), t = uf.length; t--; )
            if (n = uf[t] + i,
            n in ff)
                return n
    }
    function of(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++)
            r = n[u],
            r.style && (e[u] = i._data(r, "olddisplay"),
            f = r.style.display,
            t ? (e[u] || "none" !== f || (r.style.display = ""),
            "" === r.style.display && st(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = st(r),
            (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; s > u; u++)
            r = n[u],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }
    function sf(n, t, i) {
        var r = lo.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function hf(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
            "margin" === r && (o += i.css(n, r + b[e], !0, f)),
            u ? ("content" === r && (o -= i.css(n, "padding" + b[e], !0, f)),
            "margin" !== r && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f),
            "padding" !== r && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
        return o
    }
    function cf(n, t, u) {
        var o = !0
          , f = "width" === t ? n.offsetWidth : n.offsetHeight
          , e = d(n)
          , s = r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= f || null == f) {
            if (f = p(n, t, e),
            (0 > f || null == f) && (f = n.style[t]),
            pt.test(f))
                return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + hf(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }
    function e(n, t, i, r, u) {
        return new e.prototype.init(n,t,i,r,u)
    }
    function vf() {
        return n.setTimeout(function() {
            ut = void 0
        }),
        ut = i.now()
    }
    function bt(n, t) {
        var r, i = {
            height: n
        }, u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t)
            r = b[u],
            i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function yf(n, t, i) {
        for (var u, f = (h.tweeners[t] || []).concat(h.tweeners["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function vo(n, t, u) {
        var f, a, p, v, s, w, h, b, l = this, y = {}, o = n.style, c = n.nodeType && st(n), e = i._data(n, "fxshow");
        u.queue || (s = i._queueHooks(n, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        w = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || w()
        }
        ),
        s.unqueued++,
        l.always(function() {
            l.always(function() {
                s.unqueued--;
                i.queue(n, "fx").length || s.empty.fire()
            })
        }));
        1 === n.nodeType && ("height"in t || "width"in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY],
        h = i.css(n, "display"),
        b = "none" === h ? i._data(n, "olddisplay") || yt(n.nodeName) : h,
        "inline" === b && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout && "inline" !== yt(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
        u.overflow && (o.overflow = "hidden",
        r.shrinkWrapBlocks() || l.always(function() {
            o.overflow = u.overflow[0];
            o.overflowX = u.overflow[1];
            o.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (a = t[f],
            lf.exec(a)) {
                if (delete t[f],
                p = p || "toggle" === a,
                a === (c ? "hide" : "show")) {
                    if ("show" !== a || !e || void 0 === e[f])
                        continue;
                    c = !0
                }
                y[f] = e && e[f] || i.style(n, f)
            } else
                h = void 0;
        if (i.isEmptyObject(y))
            "inline" === ("none" === h ? yt(n.nodeName) : h) && (o.display = h);
        else {
            e ? "hidden"in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in y)
                    i.style(n, t, y[t])
            });
            for (f in y)
                v = yf(c ? e[f] : 0, f, l),
                f in e || (e[f] = v.start,
                c && (v.end = v.start,
                v.start = "width" === f || "height" === f ? 1 : 0))
        }
    }
    function yo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r),
            e = t[f],
            u = n[r],
            i.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            o = i.cssHooks[f],
            o && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function h(n, t, r) {
        var e, o, s = 0, a = h.prefilters.length, f = i.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var s = ut || vf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; e > r; r++)
                u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            1 > i && e ? t : (f.resolveWith(n, [u]),
            !1)
        }, u = f.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {},
                easing: i.easing._default
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: ut || vf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0
                  , r = t ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; r > i; i++)
                    u.tweens[i].run(1);
                return t ? (f.notifyWith(n, [u, 1, 0]),
                f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]),
                this
            }
        }), c = u.props;
        for (yo(c, u.opts.specialEasing); a > s; s++)
            if (e = h.prefilters[s].call(u, n, c, u.opts))
                return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)),
                e;
        return i.map(c, yf, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(l, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function nt(n) {
        return i.attr(n, "class") || ""
    }
    function re(n) {
        return function(t, r) {
            "string" != typeof t && (r = t,
            t = "*");
            var u, f = 0, e = t.toLowerCase().match(s) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    "+" === u.charAt(0) ? (u = u.slice(1) || "*",
                    (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function ue(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s),
                e(s),
                !1)
            }),
            h
        }
        var f = {}
          , o = n === tr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function rr(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    function ts(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes; "*" === r[0]; )
            r.shift(),
            void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0]in i)
            u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u)
            return (u !== r[0] && r.unshift(u),
            i[u])
    }
    function is(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift())
                if ("*" === u)
                    u = e;
                else if ("*" !== e && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u],
                    !f)
                        for (h in o)
                            if (s = h.split(" "),
                            s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function rs(n) {
        return n.style && n.style.display || i.css(n, "display")
    }
    function us(n) {
        if (!i.contains(n.ownerDocument || u, n))
            return !0;
        while (n && 1 === n.nodeType) {
            if ("none" === rs(n) || "hidden" === n.type)
                return !0;
            n = n.parentNode
        }
        return !1
    }
    function ur(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || es.test(n) ? u(n, i) : ur(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== i.type(t))
            u(n, t);
        else
            for (f in t)
                ur(n + "[" + f + "]", t[f], r, u)
    }
    function fr() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function ee() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function oe(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var c = [], u = n.document, a = c.slice, sr = c.concat, ti = c.push, hr = c.indexOf, lt = {}, ce = lt.toString, tt = lt.hasOwnProperty, r = {}, cr = "1.12.4", i = function(n, t) {
        return new i.fn.init(n,t)
    }, le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, ve = /-([\da-z])/gi, ye = function(n, t) {
        return t.toUpperCase()
    }, w, ui, yr, pr, wr, br, s, at, gr, o, su, li, ht, pi, d, p, tf, ut, wt, lf, af, pf, wf, kf, df, dt, er, ni, or, se, he;
    i.fn = i.prototype = {
        jquery: cr,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ti,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {}, u = 1, c = arguments.length, h = !1;
        for ("boolean" == typeof n && (h = n,
        n = arguments[u] || {},
        u++),
        "object" == typeof n || i.isFunction(n) || (n = {}),
        u === c && (n = this,
        u--); c > u; u++)
            if (null != (o = arguments[u]))
                for (f in o)
                    r = n[f],
                    t = o[f],
                    n !== t && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1,
                    s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {},
                    n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + (cr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        }
        ,
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            var t = n && n.toString();
            return !i.isArray(n) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (u) {
                return !1
            }
            if (!r.ownFirst)
                for (t in n)
                    return tt.call(n, t);
            for (t in n)
                ;
            return void 0 === t || tt.call(n, t)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? lt[ce.call(n)] || "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            }
            )(t)
        },
        camelCase: function(n) {
            return n.replace(ae, "ms-").replace(ve, ye)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t) {
            var r, i = 0;
            if (ii(n)) {
                for (r = n.length; r > i; i++)
                    if (t.call(n[i], i, n[i]) === !1)
                        break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1)
                        break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(le, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ii(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (hr)
                    return hr.call(t, n, i);
                for (r = t.length,
                i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n)
                        return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; r > i; )
                n[u++] = t[i++];
            if (r !== r)
                while (void 0 !== t[i])
                    n[u++] = t[i++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++)
                u = !t(n[r], r),
                u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var e, u, r = 0, f = [];
            if (ii(n))
                for (e = n.length; e > r; r++)
                    u = t(n[r], r, i),
                    null != u && f.push(u);
            else
                for (r in n)
                    u = t(n[r], r, i),
                    null != u && f.push(u);
            return sr.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return "string" == typeof t && (f = n[t],
            t = n,
            n = f),
            i.isFunction(n) ? (u = a.call(arguments, 2),
            r = function() {
                return n.apply(t || this, u.concat(a.call(arguments)))
            }
            ,
            r.guid = n.guid = n.guid || i.guid++,
            r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: r
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = c[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        lt["[object " + t + "]"] = t.toLowerCase()
    });
    w = function(n) {
        function u(n, t, r, u) {
            var l, w, a, s, nt, d, y, g, p = t && t.ownerDocument, v = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v)
                return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t),
            t = t || i,
            h)) {
                if (11 !== v && (d = sr.exec(n)))
                    if (l = d[1]) {
                        if (9 === v) {
                            if (!(a = t.getElementById(l)))
                                return r;
                            if (a.id === l)
                                return r.push(a),
                                r
                        } else if (p && (a = p.getElementById(l)) && et(t, a) && a.id === l)
                            return r.push(a),
                            r
                    } else {
                        if (d[2])
                            return k.apply(r, t.getElementsByTagName(n)),
                            r;
                        if ((l = d[3]) && f.getElementsByClassName && t.getElementsByClassName)
                            return k.apply(r, t.getElementsByClassName(l)),
                            r
                    }
                if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (1 !== v)
                        p = t,
                        g = n;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(hr, "\\$&") : t.setAttribute("id", s = e),
                        y = ft(n),
                        w = y.length,
                        nt = yi.test(s) ? "#" + s : "[id='" + s + "']"; w--; )
                            y[w] = nt + " " + yt(y[w]);
                        g = y.join(",");
                        p = gt.test(n) && ii(t.parentNode) || t
                    }
                    if (g)
                        try {
                            return k.apply(r, p.querySelectorAll(g)),
                            r
                        } catch (tt) {} finally {
                            s === e && t.removeAttribute("id")
                        }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }
        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                n[r + " "] = u
            }
            var i = [];
            return n
        }
        function l(n) {
            return n[e] = !0,
            n
        }
        function a(n) {
            var t = i.createElement("div");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ti(n, i) {
            for (var r = n.split("|"), u = r.length; u--; )
                t.attrHandle[r[u]] = i
        }
        function wi(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function it(n) {
            return l(function(t) {
                return t = +t,
                l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ii(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }
        function bi() {}
        function yt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++)
                i += n[t].value;
            return i
        }
        function ri(n, t, i) {
            var r = t.dir
              , u = i && "parentNode" === r
              , f = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u)
                        return n(t, i, f)
            }
            : function(t, i, o) {
                var s, h, c, l = [v, f];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (c = t[e] || (t[e] = {}),
                            h = c[t.uniqueID] || (c[t.uniqueID] = {}),
                            (s = h[r]) && s[0] === v && s[1] === f)
                                return l[2] = s[2];
                            if (h[r] = l,
                            l[2] = n(t, i, o))
                                return !0
                        }
            }
        }
        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function ar(n, t, i) {
            for (var r = 0, f = t.length; f > r; r++)
                u(n, t[r], i);
            return i
        }
        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
                (e = n[f]) && (i && !i(e, r, u) || (o.push(e),
                h && t.push(f)));
            return o
        }
        function fi(n, t, i, r, u, f) {
            return r && !r[e] && (r = fi(r)),
            u && !u[e] && (u = fi(u, f)),
            l(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, b = f || ar(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? b : pt(b, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = pt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = pt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : k.apply(e, h)
            })
        }
        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                return n === o
            }, c, !0), a = ri(function(n) {
                return nt(o, n) > -1
            }, c, !0), f = [function(n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null,
                r
            }
            ]; s > i; i++)
                if (u = t.relative[n[i].type])
                    f = [ri(ui(f), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches),
                    u[e]) {
                        for (r = ++i; s > r; r++)
                            if (t.relative[n[r].type])
                                break;
                        return fi(i > 1 && ui(f), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), s > r && ei(n = n.slice(r)), s > r && yt(n))
                    }
                    f.push(u)
                }
            return ui(f)
        }
        function vr(n, r) {
            var f = r.length > 0
              , e = n.length > 0
              , o = function(o, s, c, l, a) {
                var y, nt, d, g = 0, p = "0", tt = o && [], w = [], it = ht, rt = o || e && t.find.TAG("*", a), ut = v += null == it ? 1 : Math.random() || .1, ft = rt.length;
                for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                    if (e && y) {
                        for (nt = 0,
                        s || y.ownerDocument === i || (b(y),
                        c = !h); d = n[nt++]; )
                            if (d(y, s || i, c)) {
                                l.push(y);
                                break
                            }
                        a && (v = ut)
                    }
                    f && ((y = !d && y) && g--,
                    o && tt.push(y))
                }
                if (g += p,
                f && p !== g) {
                    for (nt = 0; d = r[nt++]; )
                        d(tt, w, s, c);
                    if (o) {
                        if (g > 0)
                            while (p--)
                                tt[p] || w[p] || (w[p] = gi.call(l));
                        w = pt(w)
                    }
                    k.apply(l, w);
                    a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                }
                return a && (v = ut,
                ht = it),
                tt
            };
            return f ? l(o) : o
        }
        var rt, f, t, st, oi, ft, wt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date, c = n.document, v = 0, ki = 0, hi = ni(), ci = ni(), lt = ni(), bt = function(n, t) {
            return n === t && (ut = !0),
            0
        }, li = -2147483648, di = {}.hasOwnProperty, g = [], gi = g.pop, nr = g.push, k = g.push, ai = g.slice, nt = function(n, t) {
            for (var i = 0, r = n.length; r > i; i++)
                if (n[i] === t)
                    return i;
            return -1
        }, kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", r = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]", dt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)", tr = new RegExp(r + "+","g"), at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$","g"), ir = new RegExp("^" + r + "*," + r + "*"), rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"), ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]","g"), fr = new RegExp(dt), yi = new RegExp("^" + tt + "$"), vt = {
            ID: new RegExp("^#(" + tt + ")"),
            CLASS: new RegExp("^\\.(" + tt + ")"),
            TAG: new RegExp("^(" + tt + "|[*])"),
            ATTR: new RegExp("^" + vi),
            PSEUDO: new RegExp("^" + dt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)","i"),
            bool: new RegExp("^(?:" + kt + ")$","i"),
            needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)","i")
        }, er = /^(?:input|select|textarea|button)$/i, or = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, hr = /'|\\/g, y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)","ig"), p = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, pi = function() {
            b()
        };
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (yr) {
            k = {
                apply: g.length ? function(n, t) {
                    nr.apply(n, ai.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        f = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ;
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l !== i && 9 === l.nodeType && l.documentElement ? (i = l,
            s = i.documentElement,
            h = !oi(i),
            (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)),
            f.attributes = a(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            f.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            f.getElementsByClassName = ot.test(i.getElementsByClassName),
            f.getById = a(function(n) {
                return s.appendChild(n).id = e,
                !i.getElementsByName || !i.getElementsByName(e).length
            }),
            f.getById ? (t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }
            ,
            t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ) : (delete t.find.ID,
            t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            t.find.TAG = f.getElementsByTagName ? function(n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = f.getElementsByClassName && function(n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h)
                    return t.getElementsByClassName(n)
            }
            ,
            d = [],
            o = [],
            (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + kt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]")
            }),
            a(function(n) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })),
            (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                f.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                d.push("!=", dt)
            }),
            o = o.length && new RegExp(o.join("|")),
            d = d.length && new RegExp(d.join("|")),
            v = ot.test(s.compareDocumentPosition),
            et = v || ot.test(s.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            bt = v ? function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1,
                1 & r || !f.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (!o || !s)
                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s)
                    return wi(n, t);
                for (r = n; r = r.parentNode; )
                    f.unshift(r);
                for (r = t; r = r.parentNode; )
                    e.unshift(r);
                while (f[u] === e[u])
                    u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }
            ,
            i) : i
        }
        ;
        u.matches = function(n, t) {
            return u(n, null, null, t)
        }
        ;
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n),
            t = t.replace(ur, "='$1']"),
            f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t)))
                try {
                    var r = ct.call(n, t);
                    if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return r
                } catch (e) {}
            return u(t, i, null, [n]).length > 0
        }
        ;
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n),
            et(n, t)
        }
        ;
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var e = t.attrHandle[r.toLowerCase()]
              , u = e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
            return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        }
        ;
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        u.uniqueSort = function(n) {
            var r, u = [], t = 0, i = 0;
            if (ut = !f.detectDuplicates,
            w = !f.sortStable && n.slice(0),
            n.sort(bt),
            ut) {
                while (r = n[i++])
                    r === n[i] && (t = u.push(i));
                while (t--)
                    n.splice(u[t], 1)
            }
            return w = null,
            n
        }
        ;
        st = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += st(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += st(r);
            return i
        }
        ;
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : t ? (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , o = "last" !== n.slice(-4)
                      , f = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling", d = t.parentNode, nt = f && t.nodeName.toLowerCase(), g = !h && !f, l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k]; )
                                        if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType)
                                            return !1;
                                    b = k = "only" === n && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild],
                            o && g) {
                                for (c = d,
                                y = c[e] || (c[e] = {}),
                                w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                                p = w[n] || [],
                                a = p[0] === v && p[1],
                                l = a && p[2],
                                c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t,
                            y = c[e] || (c[e] = {}),
                            w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                            p = w[n] || [],
                            a = p[0] === v && p[1],
                            l = a),
                            l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[e] || (c[e] = {}),
                                    w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                                    w[n] = [v, l]),
                                    c === t))
                                        break;
                            return l -= u,
                            l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--; )
                            u = nt(n, f[e]),
                            n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, f)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = []
                      , r = []
                      , i = wt(n.replace(at, "$1"));
                    return i[e] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n,
                        i(t, null, f, r),
                        t[0] = null,
                        !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                    function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }),
                lang: l(function(n) {
                    return yi.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(y, p).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return or.test(n.nodeName)
                },
                input: function(n) {
                    return er.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[rt] = cr(rt);
        for (rt in {
            submit: !0,
            reset: !0
        })
            t.pseudos[rt] = lr(rt);
        return bi.prototype = t.filters = t.pseudos,
        t.setFilters = new bi,
        ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (r = n,
            h = [],
            c = t.preFilter; r; ) {
                (!e || (f = ir.exec(r))) && (f && (r = r.slice(f[0].length) || r),
                h.push(s = []));
                e = !1;
                (f = rr.exec(r)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }),
                r = r.slice(e.length));
                for (o in t.filter)
                    (f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    r = r.slice(e.length));
                if (!e)
                    break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }
        ,
        wt = u.compile = function(n, t) {
            var r, u = [], f = [], i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)),
                r = t.length; r--; )
                    i = ei(t[r]),
                    i[e] ? u.push(i) : f.push(i);
                i = lt(n, vr(f, u));
                i.selector = n
            }
            return i
        }
        ,
        si = u.select = function(n, i, r, u) {
            var s, e, o, a, v, l = "function" == typeof n && n, c = !u && ft(n = l.selector || n);
            if (r = r || [],
            1 === c.length) {
                if (e = c[0] = c[0].slice(0),
                e.length > 2 && "ID" === (o = e[0]).type && f.getById && 9 === i.nodeType && h && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0],
                    !i)
                        return r;
                    l && (i = i.parentNode);
                    n = n.slice(e.shift().value.length)
                }
                for (s = vt.needsContext.test(n) ? 0 : e.length; s--; ) {
                    if (o = e[s],
                    t.relative[a = o.type])
                        break;
                    if ((v = t.find[a]) && (u = v(o.matches[0].replace(y, p), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1),
                        n = u.length && yt(e),
                        !n)
                            return k.apply(r, u),
                            r;
                        break
                    }
                }
            }
            return (l || wt(n, c))(u, i, !h, r, !i || gt.test(n) && ii(i.parentNode) || i),
            r
        }
        ,
        f.sortStable = e.split("").sort(bt).join("") === e,
        f.detectDuplicates = !!ut,
        b(),
        f.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("div"))
        }),
        a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ti("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        f.attributes && a(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ti("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
                return n.defaultValue
        }),
        a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ti(kt, function(n, t, i) {
            var r;
            if (!i)
                return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        u
    }(n);
    i.find = w;
    i.expr = w.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = w.uniqueSort;
    i.text = w.getText;
    i.isXMLDoc = w.isXML;
    i.contains = w.contains;
    var it = function(n, t, r) {
        for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
            if (1 === n.nodeType) {
                if (f && i(n).is(r))
                    break;
                u.push(n)
            }
        return u
    }
      , lr = function(n, t) {
        for (var i = []; n; n = n.nextSibling)
            1 === n.nodeType && n !== t && i.push(n);
        return i
    }
      , ar = i.expr.match.needsContext
      , vr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , pe = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, r = [], u = this, f = u.length;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; f > t; t++)
                        if (i.contains(u[t], this))
                            return !0
                }));
            for (t = 0; f > t; t++)
                i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n : n,
            r
        },
        filter: function(n) {
            return this.pushStack(ri(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ri(this, n || [], !0))
        },
        is: function(n) {
            return !!ri(this, "string" == typeof n && ar.test(n) ? i(n) : n || [], !1).length
        }
    });
    yr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    pr = i.fn.init = function(n, t, r) {
        var f, e;
        if (!n)
            return this;
        if (r = r || ui,
        "string" == typeof n) {
            if (f = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : yr.exec(n),
            !f || !f[1] && t)
                return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (f[1]) {
                if (t = t instanceof i ? t[0] : t,
                i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)),
                vr.test(f[1]) && i.isPlainObject(t))
                    for (f in t)
                        i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                return this
            }
            if (e = u.getElementById(f[2]),
            e && e.parentNode) {
                if (e.id !== f[2])
                    return ui.find(n);
                this.length = 1;
                this[0] = e
            }
            return this.context = u,
            this.selector = n,
            this
        }
        return n.nodeType ? (this.context = this[0] = n,
        this.length = 1,
        this) : i.isFunction(n) ? "undefined" != typeof r.ready ? r.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector,
        this.context = n.context),
        i.makeArray(n, this))
    }
    ;
    pr.prototype = i.fn;
    ui = i(u);
    wr = /^(?:parents|prev(?:Until|All))/;
    br = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this), u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t]))
                        return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = ar.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return it(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return it(n, "parentNode", i)
        },
        next: function(n) {
            return kr(n, "nextSibling")
        },
        prev: function(n) {
            return kr(n, "previousSibling")
        },
        nextAll: function(n) {
            return it(n, "nextSibling")
        },
        prevAll: function(n) {
            return it(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return it(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return it(n, "previousSibling", i)
        },
        siblings: function(n) {
            return lr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return lr(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (br[n] || (f = i.uniqueSort(f)),
            wr.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    });
    s = /\S+/g;
    i.Callbacks = function(n) {
        n = "string" == typeof n ? we(n) : i.extend({}, n);
        var e, r, h, f, t = [], o = [], u = -1, c = function() {
            for (f = n.once,
            h = e = !0; o.length; u = -1)
                for (r = o.shift(); ++u < t.length; )
                    t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length,
                    r = !1);
            n.memory || (r = !1);
            e = !1;
            f && (t = r ? [] : "")
        }, s = {
            add: function() {
                return t && (r && !e && (u = t.length - 1,
                o.push(r)),
                function f(r) {
                    i.each(r, function(r, u) {
                        i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== i.type(u) && f(u)
                    })
                }(arguments),
                r && !e && c()),
                this
            },
            remove: function() {
                return i.each(arguments, function(n, r) {
                    for (var f; (f = i.inArray(r, t, f)) > -1; )
                        t.splice(f, 1),
                        u >= f && u--
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, t) > -1 : t.length > 0
            },
            empty: function() {
                return t && (t = []),
                this
            },
            disable: function() {
                return f = o = [],
                t = r = "",
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return f = !0,
                r || s.disable(),
                this
            },
            locked: function() {
                return !!f
            },
            fireWith: function(n, t) {
                return f || (t = t || [],
                t = [n, t.slice ? t.slice() : t],
                o.push(t),
                e || c()),
                this
            },
            fire: function() {
                return s.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!h
            }
        };
        return s
    }
    ;
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]]
              , f = "pending"
              , r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u, function(u, e) {
                            var o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, r) : r
                }
            }
              , t = {};
            return r.pipe = r.then,
            i.each(u, function(n, i) {
                var e = i[2]
                  , o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments),
                    this
                }
                ;
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0, u = a.call(arguments), r = u.length, e = 1 !== r || n && i.isFunction(n.promise) ? r : 0, f = 1 === e ? n : i.Deferred(), h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? a.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            }, o, c, s;
            if (r > 1)
                for (o = new Array(r),
                c = new Array(r),
                s = new Array(r); r > t; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().progress(h(t, c, o)).done(h(t, s, u)).fail(f.reject) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0,
            n !== !0 && --i.readyWait > 0 || (at.resolveWith(u, [i]),
            i.fn.triggerHandler && (i(u).triggerHandler("ready"),
            i(u).off("ready"))))
        }
    });
    i.ready.promise = function(t) {
        if (!at)
            if (at = i.Deferred(),
            "complete" !== u.readyState && ("loading" === u.readyState || u.documentElement.doScroll))
                if (u.addEventListener)
                    u.addEventListener("DOMContentLoaded", v),
                    n.addEventListener("load", v);
                else {
                    u.attachEvent("onreadystatechange", v);
                    n.attachEvent("onload", v);
                    var r = !1;
                    try {
                        r = null == n.frameElement && u.documentElement
                    } catch (e) {}
                    r && r.doScroll && !function f() {
                        if (!i.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (t) {
                                return n.setTimeout(f, 50)
                            }
                            dr();
                            i.ready()
                        }
                    }()
                }
            else
                n.setTimeout(i.ready);
        return at.promise(t)
    }
    ;
    i.ready.promise();
    for (gr in i(r))
        break;
    r.ownFirst = "0" === gr;
    r.inlineBlockNeedsLayout = !1;
    i(function() {
        var f, t, n, i;
        n = u.getElementsByTagName("body")[0];
        n && n.style && (t = u.createElement("div"),
        i = u.createElement("div"),
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(i).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        r.inlineBlockNeedsLayout = f = 3 === t.offsetWidth,
        f && (n.style.zoom = 1)),
        n.removeChild(i))
    }),
    function() {
        var n = u.createElement("div");
        r.deleteExpando = !0;
        try {
            delete n.test
        } catch (t) {
            r.deleteExpando = !1
        }
        n = null
    }();
    var ot = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()]
          , r = +n.nodeType || 1;
        return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    }
      , be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ke = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !fi(n)
        },
        data: function(n, t, i) {
            return tu(n, t, i)
        },
        removeData: function(n, t) {
            return iu(n, t)
        },
        _data: function(n, t, i) {
            return tu(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return iu(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0], o = r && r.attributes;
            if (void 0 === n) {
                if (this.length && (e = i.data(r),
                1 === r.nodeType && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--; )
                        o[f] && (u = o[f].name,
                        0 === u.indexOf("data-") && (u = i.camelCase(u.slice(5)),
                        nu(r, u, e[u])));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? nu(r, n, i.data(r, n)) : void 0
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n)
                return (t = (t || "fx") + "queue",
                u = i._data(n, t),
                r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                u || [])
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            "inprogress" === u && (u = r.shift(),
            e--);
            u && ("fx" === t && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n,
            n = "fx",
            r--),
            arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1, e = i.Deferred(), u = this, o = this.length, s = function() {
                --f || e.resolveWith(u, [u])
            };
            for ("string" != typeof n && (t = n,
            n = void 0),
            n = n || "fx"; o--; )
                r = i._data(u[o], n + "queueHooks"),
                r && r.empty && (f++,
                r.empty.add(s));
            return s(),
            e.promise(t)
        }
    }),
    function() {
        var n;
        r.shrinkWrapBlocks = function() {
            if (null != n)
                return n;
            n = !1;
            var t, i, r;
            return i = u.getElementsByTagName("body")[0],
            i && i.style ? (t = u.createElement("div"),
            r = u.createElement("div"),
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            i.appendChild(r).appendChild(t),
            "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(u.createElement("div")).style.width = "5px",
            n = 3 !== t.offsetWidth),
            i.removeChild(r),
            n) : void 0
        }
    }();
    var ei = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , oi = new RegExp("^(?:([+-])=|)(" + ei + ")([a-z%]*)$","i")
      , b = ["Top", "Right", "Bottom", "Left"]
      , st = function(n, t) {
        return n = t || n,
        "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    };
    var y = function(n, t, r, u, f, e, o) {
        var s = 0
          , c = n.length
          , h = null == r;
        if ("object" === i.type(r)) {
            f = !0;
            for (s in r)
                y(n, t, s, r[s], !0, e, o)
        } else if (void 0 !== u && (f = !0,
        i.isFunction(u) || (o = !0),
        h && (o ? (t.call(n, u),
        t = null) : (h = t,
        t = function(n, t, r) {
            return h.call(i(n), r)
        }
        )),
        t))
            for (; c > s; s++)
                t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    }
      , si = /^(?:checkbox|radio)$/i
      , uu = /<([\w:-]+)/
      , fu = /^$|\/(?:java|ecma)script/i
      , hi = /^\s+/
      , eu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var n = u.createElement("div")
          , f = u.createDocumentFragment()
          , t = u.createElement("input");
        n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        r.leadingWhitespace = 3 === n.firstChild.nodeType;
        r.tbody = !n.getElementsByTagName("tbody").length;
        r.htmlSerialize = !!n.getElementsByTagName("link").length;
        r.html5Clone = "<:nav><\/:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML;
        t.type = "checkbox";
        t.checked = !0;
        f.appendChild(t);
        r.appendChecked = t.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
        f.appendChild(n);
        t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        r.noCloneEvent = !!n.addEventListener;
        n[i.expando] = 1;
        r.attributes = !n.getAttribute(i.expando)
    }();
    o = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    };
    o.optgroup = o.option;
    o.tbody = o.tfoot = o.colgroup = o.caption = o.thead;
    o.th = o.td;
    su = /<|&#?\w+;/;
    li = /<tbody/i;
    !function() {
        var t, i, f = u.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            i = "on" + t,
            (r[t] = i in n) || (f.setAttribute(i, "t"),
            r[t] = f.attributes[i].expando === !1);
        f = null
    }();
    var ai = /^(?:input|select|textarea)$/i
      , ge = /^key/
      , no = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , cu = /^(?:focusinfocus|focusoutblur)$/
      , lu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var p, v, w, y, o, h, c, l, e, b, k, a = i._data(n);
            if (a) {
                for (r.handler && (y = r,
                r = y.handler,
                f = y.selector),
                r.guid || (r.guid = i.guid++),
                (v = a.events) || (v = a.events = {}),
                (h = a.handle) || (h = a.handle = function(n) {
                    if ("undefined" != typeof i && (!n || i.event.triggered !== n.type))
                        return i.event.dispatch.apply(h.elem, arguments)
                }
                ,
                h.elem = n),
                t = (t || "").match(s) || [""],
                w = t.length; w--; )
                    p = lu.exec(t[w]) || [],
                    e = k = p[1],
                    b = (p[2] || "").split(".").sort(),
                    e && (o = i.event.special[e] || {},
                    e = (f ? o.delegateType : o.bindType) || e,
                    o = i.event.special[e] || {},
                    c = i.extend({
                        type: e,
                        origType: k,
                        data: u,
                        handler: r,
                        guid: r.guid,
                        selector: f,
                        needsContext: f && i.expr.match.needsContext.test(f),
                        namespace: b.join(".")
                    }, y),
                    (l = v[e]) || (l = v[e] = [],
                    l.delegateCount = 0,
                    o.setup && o.setup.call(n, u, b, h) !== !1 || (n.addEventListener ? n.addEventListener(e, h, !1) : n.attachEvent && n.attachEvent("on" + e, h))),
                    o.add && (o.add.call(n, c),
                    c.handler.guid || (c.handler.guid = r.guid)),
                    f ? l.splice(l.delegateCount++, 0, c) : l.push(c),
                    i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(s) || [""],
                p = t.length; p--; )
                    if (h = lu.exec(t[p]) || [],
                    e = k = h[1],
                    w = (h[2] || "").split(".").sort(),
                    e) {
                        for (c = i.event.special[e] || {},
                        e = (u ? c.delegateType : c.bindType) || e,
                        l = a[e] || [],
                        h = h[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        b = y = l.length; y--; )
                            o = l[y],
                            !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1),
                            o.selector && l.delegateCount--,
                            c.remove && c.remove.call(n, o));
                        b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle),
                        delete a[e])
                    } else
                        for (e in a)
                            i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle,
                i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u], s = tt.call(t, "type") ? t.type : t, v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = h = f = f || u,
            3 !== f.nodeType && 8 !== f.nodeType && !cu.test(s + i.event.triggered) && (s.indexOf(".") > -1 && (v = s.split("."),
            s = v.shift(),
            v.sort()),
            a = s.indexOf(":") < 0 && "on" + s,
            t = t[i.expando] ? t : new i.Event(s,"object" == typeof t && t),
            t.isTrigger = e ? 2 : 3,
            t.namespace = v.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = f),
            r = null == r ? [t] : i.makeArray(r, [t]),
            c = i.event.special[s] || {},
            e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s,
                    cu.test(p + s) || (o = o.parentNode); o; o = o.parentNode)
                        y.push(o),
                        h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0; (o = y[w++]) && !t.isPropagationStopped(); )
                    t.type = w > 1 ? p : c.bindType || s,
                    l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"),
                    l && l.apply(o, r),
                    l = a && o[a],
                    l && l.apply && ot(o) && (t.result = l.apply(o, r),
                    t.result === !1 && t.preventDefault());
                if (t.type = s,
                !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && ot(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = void 0;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, o, f, r, t, s = [], h = a.call(arguments), c = (i._data(this, "events") || {})[n.type] || [], u = i.event.special[n.type] || {};
            if (h[0] = n,
            n.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c),
                e = 0; (r = s[e++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = r.elem,
                    o = 0; (t = r.handlers[o++]) && !n.isImmediatePropagationStopped(); )
                        n.rnamespace && !n.rnamespace.test(t.namespace) || (n.handleObj = t,
                        n.data = t.data,
                        f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h),
                        void 0 !== f && (n.result = f) === !1 && (n.preventDefault(),
                        n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, t) {
            var e, u, f, o, h = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && ("click" !== n.type || isNaN(n.button) || n.button < 1))
                for (; r != this; r = r.parentNode || this)
                    if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                        for (u = [],
                        e = 0; s > e; e++)
                            o = t[e],
                            f = o.selector + " ",
                            void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) > -1 : i.find(f, this, null, [r]).length),
                            u[f] && u.push(o);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }),
            h
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var e, o, s, r = n.type, f = n, t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = no.test(r) ? this.mouseHooks : ge.test(r) ? this.keyHooks : {}),
            s = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(f),
            e = s.length; e--; )
                o = s[e],
                n[o] = f[o];
            return n.target || (n.target = f.srcElement || u),
            3 === n.target.nodeType && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button, o = t.fromElement;
                return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u,
                r = e.documentElement,
                i = e.body,
                n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o),
                n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== au() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === au() && this.blur)
                        return (this.blur(),
                        !1)
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return (this.click(),
                        !1)
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t);
            u.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    }
    : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && ("undefined" == typeof n[r] && (n[r] = null),
        n.detachEvent(r, i))
    }
    ;
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? vt : rt) : this.type = n,
        t && i.extend(this, t),
        this.timeStamp = n && n.timeStamp || i.now(),
        void (this[i.expando] = !0)) : new i.Event(n,t)
    }
    ;
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: rt,
        isPropagationStopped: rt,
        isImmediatePropagationStopped: rt,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = vt;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = vt;
            n && !this.isSimulated && (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = vt;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    r.submit || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit", function(n) {
                var r = n.target
                  , t = i.nodeName(r, "input") || i.nodeName(r, "button") ? i.prop(r, "form") : void 0;
                t && !i._data(t, "submit") && (i.event.add(t, "submit._submit", function(n) {
                    n._submitBubble = !0
                }),
                i._data(t, "submit", !0))
            })
        },
        postDispatch: function(n) {
            n._submitBubble && (delete n._submitBubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit")
        }
    });
    r.change || (i.event.special.change = {
        setup: function() {
            return ai.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (i.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._justChanged = !0)
            }),
            i.event.add(this, "click._change", function(n) {
                this._justChanged && !n.isTrigger && (this._justChanged = !1);
                i.event.simulate("change", this, n)
            })),
            !1) : void i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                ai.test(t.nodeName) && !i._data(t, "change") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n)
                }),
                i._data(t, "change", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !ai.test(this.nodeName)
        }
    });
    r.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this
                  , f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this
                  , f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0),
                i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return vi(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return vi(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if ("object" == typeof n) {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return t !== !1 && "function" != typeof t || (r = t,
            t = void 0),
            r === !1 && (r = rt),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    var to = / jQuery\d+="(?:null|\d+)"/g
      , vu = new RegExp("<(?:" + eu + ")[\\s/>]","i")
      , io = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , ro = /<script|<style|<link/i
      , uo = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fo = /^true\/(.*)/
      , eo = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , oo = ou(u)
      , yi = oo.appendChild(u.createElement("div"));
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(io, "<$1><\/$2>")
        },
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !vu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (yi.innerHTML = n.outerHTML,
            yi.removeChild(s = yi.firstChild)),
            !(r.noCloneEvent && r.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = f(s),
                h = f(n),
                o = 0; null != (c = h[o]); ++o)
                    e[o] && so(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n),
                    e = e || f(s),
                    o = 0; null != (c = h[o]); o++)
                        bu(c, e[o]);
                else
                    bu(n, s);
            return e = f(s, "script"),
            e.length > 0 && ci(e, !l && f(n, "script")),
            e = h = c = null,
            s
        },
        cleanData: function(n, t) {
            for (var u, e, f, o, l = 0, s = i.expando, h = i.cache, a = r.attributes, v = i.event.special; null != (u = n[l]); l++)
                if ((t || ot(u)) && (f = u[s],
                o = f && h[f])) {
                    if (o.events)
                        for (e in o.events)
                            v[e] ? i.event.remove(u, e) : i.removeEvent(u, e, o.handle);
                    h[f] && (delete h[f],
                    a || "undefined" == typeof u.removeAttribute ? u[s] = void 0 : u.removeAttribute(s),
                    c.push(f))
                }
        }
    });
    i.fn.extend({
        domManip: k,
        detach: function(n) {
            return ku(this, n, !0)
        },
        remove: function(n) {
            return ku(this, n)
        },
        text: function(n) {
            return y(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return k(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = yu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return k(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = yu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return k(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return k(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild; )
                    n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n,
            t = null == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return y(this, function(n) {
                var t = this[0] || {}
                  , u = 0
                  , e = this.length;
                if (void 0 === n)
                    return 1 === t.nodeType ? t.innerHTML.replace(to, "") : void 0;
                if ("string" == typeof n && !ro.test(n) && (r.htmlSerialize || !vu.test(n)) && (r.leadingWhitespace || !hi.test(n)) && !o[(uu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; e > u; u++)
                            t = this[u] || {},
                            1 === t.nodeType && (i.cleanData(f(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (s) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return k(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(f(this)),
                r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                ti.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    pi = {
        HTML: "block",
        BODY: "block"
    };
    var gu = /^margin/
      , pt = new RegExp("^(" + ei + ")(?!px)[a-z%]+$","i")
      , wi = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f
    }
      , nf = u.documentElement;
    !function() {
        var f, h, c, e, l, a, s = u.createElement("div"), t = u.createElement("div");
        if (t.style) {
            t.style.cssText = "float:left;opacity:.5";
            r.opacity = "0.5" === t.style.opacity;
            r.cssFloat = !!t.style.cssFloat;
            t.style.backgroundClip = "content-box";
            t.cloneNode(!0).style.backgroundClip = "";
            r.clearCloneStyle = "content-box" === t.style.backgroundClip;
            s = u.createElement("div");
            s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
            t.innerHTML = "";
            s.appendChild(t);
            r.boxSizing = "" === t.style.boxSizing || "" === t.style.MozBoxSizing || "" === t.style.WebkitBoxSizing;
            i.extend(r, {
                reliableHiddenOffsets: function() {
                    return null == f && o(),
                    e
                },
                boxSizingReliable: function() {
                    return null == f && o(),
                    c
                },
                pixelMarginRight: function() {
                    return null == f && o(),
                    h
                },
                pixelPosition: function() {
                    return null == f && o(),
                    f
                },
                reliableMarginRight: function() {
                    return null == f && o(),
                    l
                },
                reliableMarginLeft: function() {
                    return null == f && o(),
                    a
                }
            });
            function o() {
                var i, r, o = u.documentElement;
                o.appendChild(s);
                t.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                f = c = a = !1;
                h = l = !0;
                n.getComputedStyle && (r = n.getComputedStyle(t),
                f = "1%" !== (r || {}).top,
                a = "2px" === (r || {}).marginLeft,
                c = "4px" === (r || {
                    width: "4px"
                }).width,
                t.style.marginRight = "50%",
                h = "4px" === (r || {
                    marginRight: "4px"
                }).marginRight,
                i = t.appendChild(u.createElement("div")),
                i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                t.style.width = "1px",
                l = !parseFloat((n.getComputedStyle(i) || {}).marginRight),
                t.removeChild(i));
                t.style.display = "none";
                e = 0 === t.getClientRects().length;
                e && (t.style.display = "",
                t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>",
                t.childNodes[0].style.borderCollapse = "separate",
                i = t.getElementsByTagName("td"),
                i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                e = 0 === i[0].offsetHeight,
                e && (i[0].style.display = "",
                i[1].style.display = "none",
                e = 0 === i[0].offsetHeight));
                o.removeChild(s)
            }
        }
    }();
    tf = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (d = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = n),
        i.getComputedStyle(t)
    }
    ,
    p = function(n, t, u) {
        var o, s, h, f, e = n.style;
        return u = u || d(n),
        f = u ? u.getPropertyValue(t) || u[t] : void 0,
        "" !== f && void 0 !== f || i.contains(n.ownerDocument, n) || (f = i.style(n, t)),
        u && !r.pixelMarginRight() && pt.test(f) && gu.test(t) && (o = e.width,
        s = e.minWidth,
        h = e.maxWidth,
        e.minWidth = e.maxWidth = e.width = f,
        f = u.width,
        e.width = o,
        e.minWidth = s,
        e.maxWidth = h),
        void 0 === f ? f : f + ""
    }
    ) : nf.currentStyle && (d = function(n) {
        return n.currentStyle
    }
    ,
    p = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || d(n),
        r = i ? i[t] : void 0,
        null == r && u && u[t] && (r = u[t]),
        pt.test(r) && !tf.test(t) && (o = u.left,
        f = n.runtimeStyle,
        e = f && f.left,
        e && (f.left = n.currentStyle.left),
        u.left = "fontSize" === t ? "1em" : r,
        r = u.pixelLeft + "px",
        u.left = o,
        e && (f.left = e)),
        void 0 === r ? r : r + "" || "auto"
    }
    );
    var ki = /alpha\([^)]*\)/i
      , ho = /opacity\s*=\s*([^)]*)/i
      , co = /^(none|table(?!-c[ea]).+)/
      , lo = new RegExp("^(" + ei + ")(.*)$","i")
      , ao = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , rf = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , uf = ["Webkit", "O", "Moz", "ms"]
      , ff = u.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = p(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var e, h, o, s = i.camelCase(t), c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = ef(s) || s),
                o = i.cssHooks[t] || i.cssHooks[s],
                void 0 === u)
                    return o && "get"in o && void 0 !== (e = o.get(n, !1, f)) ? e : c[t];
                if (h = typeof u,
                "string" === h && (e = oi.exec(u)) && e[1] && (u = ru(n, t, e),
                h = "number"),
                null != u && u === u && ("number" === h && (u += e && e[3] || (i.cssNumber[s] ? "" : "px")),
                r.clearCloneStyle || "" !== u || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                !(o && "set"in o && void 0 === (u = o.set(n, u, f)))))
                    try {
                        c[t] = u
                    } catch (l) {}
            }
        },
        css: function(n, t, r, u) {
            var s, f, o, e = i.camelCase(t);
            return t = i.cssProps[e] || (i.cssProps[e] = ef(e) || e),
            o = i.cssHooks[t] || i.cssHooks[e],
            o && "get"in o && (f = o.get(n, !0, r)),
            void 0 === f && (f = p(n, t, u)),
            "normal" === f && t in rf && (f = rf[t]),
            "" === r || r ? (s = parseFloat(f),
            r === !0 || isFinite(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return co.test(i.css(n, "display")) && 0 === n.offsetWidth ? wi(n, ao, function() {
                        return cf(n, t, u)
                    }) : cf(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && d(n);
                return sf(n, u, f ? hf(n, t, f, r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e), e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return ho.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , f = u && u.filter || r.filter || "";
            r.zoom = 1;
            (t >= 1 || "" === t) && "" === i.trim(f.replace(ki, "")) && r.removeAttribute && (r.removeAttribute("filter"),
            "" === t || u && !u.filter) || (r.filter = ki.test(f) ? f.replace(ki, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = bi(r.reliableMarginRight, function(n, t) {
        if (t)
            return wi(n, {
                display: "inline-block"
            }, p, [n, "marginRight"])
    });
    i.cssHooks.marginLeft = bi(r.reliableMarginLeft, function(n, t) {
        if (t)
            return (parseFloat(p(n, "marginLeft")) || (i.contains(n.ownerDocument, n) ? n.getBoundingClientRect().left - wi(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            }) : 0)) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                    f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        gu.test(n) || (i.cssHooks[n + t].set = sf)
    });
    i.fn.extend({
        css: function(n, t) {
            return y(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (i.isArray(t)) {
                    for (f = d(n),
                    e = t.length; e > u; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return of(this, !0)
        },
        hide: function() {
            return of(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                st(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            r && r.set ? r.set(this) : e.propHooks._default.set(this),
            this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    lf = /^(?:toggle|show|hide)$/;
    af = /queueHooks$/;
    i.Animation = i.extend(h, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return ru(i.elem, n, oi.exec(t), i),
                i
            }
            ]
        },
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n,
            n = ["*"]) : n = n.match(s);
            for (var r, u = 0, f = n.length; f > u; u++)
                r = n[u],
                h.tweeners[r] = h.tweeners[r] || [],
                h.tweeners[r].unshift(t)
        },
        prefilters: [vo],
        prefilter: function(n, t) {
            t ? h.prefilters.unshift(n) : h.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        null != u.queue && u.queue !== !0 || (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }
        ,
        u
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n)
              , e = i.speed(t, r, u)
              , f = function() {
                var t = h(this, i.extend({}, n), e);
                (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return "string" != typeof n && (r = t,
            t = n,
            n = void 0),
            t && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0
                  , t = null != n && n + "queueHooks"
                  , e = i.timers
                  , f = i._data(this);
                if (t)
                    f[t] && f[t].stop && u(f[t]);
                else
                    for (t in f)
                        f[t] && f[t].stop && af.test(t) && u(f[t]);
                for (t = e.length; t--; )
                    e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(r),
                    o = !1,
                    e.splice(t, 1));
                !o && r || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this), r = f[n + "queue"], e = f[n + "queueHooks"], u = i.timers, o = r ? r.length : 0;
                for (f.finish = !0,
                i.queue(this, n, []),
                e && e.stop && e.stop.call(this, !0),
                t = u.length; t--; )
                    u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0),
                    u.splice(t, 1));
                for (t = 0; o > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers, t = 0;
        for (ut = i.now(); t < n.length; t++)
            r = n[t],
            r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        ut = void 0
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        wt || (wt = n.setInterval(i.fx.tick, i.fx.interval))
    }
    ;
    i.fx.stop = function() {
        n.clearInterval(wt);
        wt = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx ? i.fx.speeds[t] || t : t,
        r = r || "fx",
        this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    }
    ,
    function() {
        var i, n = u.createElement("input"), t = u.createElement("div"), f = u.createElement("select"), e = f.appendChild(u.createElement("option"));
        t = u.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        i = t.getElementsByTagName("a")[0];
        n.setAttribute("type", "checkbox");
        t.appendChild(n);
        i = t.getElementsByTagName("a")[0];
        i.style.cssText = "top:1px";
        r.getSetAttribute = "t" !== t.className;
        r.style = /top/.test(i.getAttribute("style"));
        r.hrefNormalized = "/a" === i.getAttribute("href");
        r.checkOn = !!n.value;
        r.optSelected = e.selected;
        r.enctype = !!u.createElement("form").enctype;
        f.disabled = !0;
        r.optDisabled = !e.disabled;
        n = u.createElement("input");
        n.setAttribute("value", "");
        r.input = "" === n.getAttribute("value");
        n.value = "t";
        n.setAttribute("type", "radio");
        r.radioValue = "t" === n.value
    }();
    pf = /\r/g;
    wf = /[\x20\t\r\n\f]+/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n),
            this.each(function(r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n,
                null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })),
                t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                t && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value,
            "string" == typeof r ? r.replace(pf, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : i.trim(i.text(n)).replace(wf, " ")
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, u = n.selectedIndex, f = "select-one" === n.type || 0 > u, h = f ? null : [], c = f ? u + 1 : s.length, e = 0 > u ? c : f ? u : 0; c > e; e++)
                        if (t = s[e],
                        (t.selected || e === u) && (r.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                            f)
                                return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--; )
                        if (r = u[e],
                        i.inArray(i.valHooks.option.get(r), o) > -1)
                            try {
                                r.selected = f = !0
                            } catch (s) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return f || (n.selectedIndex = -1),
                    u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        }
        )
    });
    var ft, bf, l = i.expr.attrHandle, di = /^(?:checked|selected)$/i, g = r.getSetAttribute, kt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return y(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(),
                f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bf : ft)),
                void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set"in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""),
                r) : f && "get"in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t),
                null == u ? void 0 : u))
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t),
                        u && (n.value = u),
                        t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var r, u, e = 0, f = t && t.match(s);
            if (f && 1 === n.nodeType)
                while (r = f[e++])
                    u = i.propFix[r] || r,
                    i.expr.match.bool.test(r) ? kt && g || !di.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
                    n.removeAttribute(g ? r : u)
        }
    });
    bf = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : kt && g || !di.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = l[t] || i.find.attr;
        l[t] = kt && g || !di.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = l[t],
            l[t] = u,
            u = null != r(n, t, i) ? t.toLowerCase() : null,
            l[t] = f),
            u
        }
        : function(n, t, r) {
            if (!r)
                return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    kt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            return i.nodeName(n, "input") ? void (n.defaultValue = t) : ft && ft.set(n, t, r)
        }
    });
    g || (ft = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)),
            r.value = t += "",
            "value" === i || t === n.getAttribute(i) ? t : void 0
        }
    },
    l.id = l.name = l.coords = function(n, t, i) {
        var r;
        if (!i)
            return (r = n.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }
    ,
    i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified)
                return i.value
        },
        set: ft.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ft.set(n, "" === t ? !1 : t, i)
        }
    },
    i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if ("" === i)
                    return (n.setAttribute(t, "auto"),
                    i)
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || void 0
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    kf = /^(?:input|select|textarea|button|object)$/i;
    df = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return y(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = void 0;
                    delete this[n]
                } catch (t) {}
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                void 0 !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get"in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : kf.test(n.nodeName) || df.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    dt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, f, h, e, c = 0;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, nt(this)))
                });
            if ("string" == typeof n && n)
                for (o = n.match(s) || []; t = this[c++]; )
                    if (u = nt(t),
                    r = 1 === t.nodeType && (" " + u + " ").replace(dt, " ")) {
                        for (h = 0; f = o[h++]; )
                            r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                        e = i.trim(r);
                        u !== e && i.attr(t, "class", e)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, u, f, h, e, c = 0;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, nt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof n && n)
                for (o = n.match(s) || []; r = this[c++]; )
                    if (u = nt(r),
                    t = 1 === r.nodeType && (" " + u + " ").replace(dt, " ")) {
                        for (h = 0; f = o[h++]; )
                            while (t.indexOf(" " + f + " ") > -1)
                                t = t.replace(" " + f + " ", " ");
                        e = i.trim(t);
                        u !== e && i.attr(r, "class", e)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, nt(this), t), t)
            }) : this.each(function() {
                var t, f, u, e;
                if ("string" === r)
                    for (f = 0,
                    u = i(this),
                    e = n.match(s) || []; t = e[f++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    void 0 !== n && "boolean" !== r || (t = nt(this),
                    t && i._data(this, "__className__", t),
                    i.attr(this, "class", t || n === !1 ? "" : i._data(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++]; )
                if (1 === t.nodeType && (" " + nt(t) + " ").replace(dt, " ").indexOf(i) > -1)
                    return !0;
            return !1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    var po = n.location
      , gi = i.now()
      , nr = /\?/
      , wo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse)
            return n.JSON.parse(t + "");
        var f, r = null, u = i.trim(t + "");
        return u && !i.trim(u.replace(wo, function(n, t, i, u) {
            return f && t && (r = 0),
            0 === r ? n : (f = i || t,
            r += !u - !i,
            "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    }
    ;
    i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t)
            return null;
        try {
            n.DOMParser ? (u = new n.DOMParser,
            r = u.parseFromString(t, "text/xml")) : (r = new n.ActiveXObject("Microsoft.XMLDOM"),
            r.async = "false",
            r.loadXML(t))
        } catch (f) {
            r = void 0
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
        r
    }
    ;
    var bo = /#.*$/
      , gf = /([?&])_=[^&]*/
      , ko = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , go = /^(?:GET|HEAD)$/
      , ns = /^\/\//
      , ne = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , te = {}
      , tr = {}
      , ie = "*/".concat("*")
      , ir = po.href
      , et = ne.exec(ir.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ir,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(et[1]),
            global: !0,
            processData: !0,
            "async": !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ie,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? rr(rr(n, i.ajaxSettings), t) : rr(i.ajaxSettings, n)
        },
        ajaxPrefilter: re(te),
        ajaxTransport: re(tr),
        ajax: function(t, r) {
            function w(t, r, s, c) {
                var y, rt, it, w, tt, l = r;
                2 !== o && (o = 2,
                k && n.clearTimeout(k),
                v = void 0,
                b = c || "",
                f.readyState = t > 0 ? 4 : 0,
                y = t >= 200 && 300 > t || 304 === t,
                s && (w = ts(u, f, s)),
                w = is(u, w, f, y),
                y ? (u.ifModified && (tt = f.getResponseHeader("Last-Modified"),
                tt && (i.lastModified[e] = tt),
                tt = f.getResponseHeader("etag"),
                tt && (i.etag[e] = tt)),
                204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = w.state,
                rt = w.data,
                it = w.error,
                y = !it)) : (it = l,
                !t && l || (l = "error",
                0 > t && (t = 0))),
                f.status = t,
                f.statusText = (r || l) + "",
                y ? g.resolveWith(h, [rt, l, f]) : g.rejectWith(h, [f, l, it]),
                f.statusCode(p),
                p = void 0,
                a && d.trigger(y ? "ajaxSuccess" : "ajaxError", [f, u, y ? rt : it]),
                nt.fireWith(h, [f, l]),
                a && (d.trigger("ajaxComplete", [f, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t,
            t = void 0);
            r = r || {};
            var c, l, e, b, k, a, v, y, u = i.ajaxSetup({}, r), h = u.context || u, d = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, g = i.Deferred(), nt = i.Callbacks("once memory"), p = u.statusCode || {}, tt = {}, it = {}, o = 0, rt = "canceled", f = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (2 === o) {
                        if (!y)
                            for (y = {}; t = ko.exec(b); )
                                y[t[1].toLowerCase()] = t[2];
                        t = y[n.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === o ? b : null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return o || (n = it[i] = it[i] || n,
                    tt[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return o || (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (2 > o)
                            for (t in n)
                                p[t] = [p[t], n[t]];
                        else
                            f.always(n[f.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || rt;
                    return v && v.abort(t),
                    w(0, t),
                    this
                }
            };
            if (g.promise(f).complete = nt.add,
            f.success = f.done,
            f.error = f.fail,
            u.url = ((t || u.url || ir) + "").replace(bo, "").replace(ns, et[1] + "//"),
            u.type = r.method || r.type || u.method || u.type,
            u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""],
            null == u.crossDomain && (c = ne.exec(u.url.toLowerCase()),
            u.crossDomain = !(!c || c[1] === et[1] && c[2] === et[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (et[3] || ("http:" === et[1] ? "80" : "443")))),
            u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)),
            ue(te, u, r, f),
            2 === o)
                return f;
            a = i.event && u.global;
            a && 0 == i.active++ && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !go.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (nr.test(e) ? "&" : "?") + u.data,
            delete u.data),
            u.cache === !1 && (u.url = gf.test(e) ? e.replace(gf, "$1_=" + gi++) : e + (nr.test(e) ? "&" : "?") + "_=" + gi++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]),
            i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + ie + "; q=0.01" : "") : u.accepts["*"]);
            for (l in u.headers)
                f.setRequestHeader(l, u.headers[l]);
            if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o))
                return f.abort();
            rt = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                f[l](u[l]);
            if (v = ue(tr, u, r, f)) {
                if (f.readyState = 1,
                a && d.trigger("ajaxSend", [f, u]),
                2 === o)
                    return f;
                u.async && u.timeout > 0 && (k = n.setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    o = 1;
                    v.send(tt, w)
                } catch (ut) {
                    if (!(2 > o))
                        throw ut;
                    w(-1, ut)
                }
            } else
                w(-1, "No Transport");
            return f
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u,
            u = r,
            r = void 0),
            i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            "async": !1,
            global: !1,
            throws: !0
        })
    }
    ;
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return r.reliableHiddenOffsets() ? n.offsetWidth <= 0 && n.offsetHeight <= 0 && !n.getClientRects().length : us(n)
    }
    ;
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    ;
    var fs = /%20/g
      , es = /\[\]$/
      , fe = /\r?\n/g
      , os = /^(?:submit|button|image|reset|file)$/i
      , ss = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [], f = function(n, t) {
            t = i.isFunction(t) ? t() : null == t ? "" : t;
            u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                f(this.name, this.value)
            });
        else
            for (r in n)
                ur(r, n[r], t, f);
        return u.join("&").replace(fs, "+")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ss.test(this.nodeName) && !os.test(n) && (this.checked || !si.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(fe, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(fe, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
        return this.isLocal ? ee() : u.documentMode > 8 ? fr() : /^(get|post|head|put|delete|options)$/i.test(this.type) && fr() || ee()
    }
    : fr;
    var hs = 0
      , gt = {}
      , ct = i.ajaxSettings.xhr();
    return n.attachEvent && n.attachEvent("onunload", function() {
        for (var n in gt)
            gt[n](void 0, !0)
    }),
    r.cors = !!ct && "withCredentials"in ct,
    ct = r.ajax = !!ct,
    ct && i.ajaxTransport(function(t) {
        if (!t.crossDomain || r.cors) {
            var u;
            return {
                send: function(r, f) {
                    var o, e = t.xhr(), s = ++hs;
                    if (e.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            e[o] = t.xhrFields[o];
                    t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)
                        void 0 !== r[o] && e.setRequestHeader(o, r[o] + "");
                    e.send(t.hasContent && t.data || null);
                    u = function(n, r) {
                        var o, c, h;
                        if (u && (r || 4 === e.readyState))
                            if (delete gt[s],
                            u = void 0,
                            e.onreadystatechange = i.noop,
                            r)
                                4 !== e.readyState && e.abort();
                            else {
                                h = {};
                                o = e.status;
                                "string" == typeof e.responseText && (h.text = e.responseText);
                                try {
                                    c = e.statusText
                                } catch (l) {
                                    c = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = h.text ? 200 : 404
                            }
                        h && f(o, c, h, e.getAllResponseHeaders())
                    }
                    ;
                    t.async ? 4 === e.readyState ? n.setTimeout(u) : e.onreadystatechange = gt[s] = u : u()
                },
                abort: function() {
                    u && u(void 0, !0)
                }
            }
        }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function(n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        i || f(200, "success"))
                    }
                    ;
                    r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    }),
    er = [],
    ni = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = er.pop() || i.expando + "_" + gi++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, e, o, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (nr.test(t.url) ? "&" : "?") + t.jsonp + "=" + f),
            t.converters["script json"] = function() {
                return o || i.error(f + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            e = n[f],
            n[f] = function() {
                o = arguments
            }
            ,
            u.always(function() {
                void 0 === e ? i(n).removeProp(f) : n[f] = e;
                t[f] && (t.jsonpCallback = r.jsonpCallback,
                er.push(f));
                o && i.isFunction(e) && e(o[0]);
                o = e = void 0
            }),
            "script")
    }),
    i.parseHTML = function(n, t, r) {
        if (!n || "string" != typeof n)
            return null;
        "boolean" == typeof t && (r = t,
        t = !1);
        t = t || u;
        var f = vr.exec(n)
          , e = !r && [];
        return f ? [t.createElement(f[1])] : (f = hu([n], t, e),
        e && e.length && i(e).remove(),
        i.merge([], f.childNodes))
    }
    ,
    or = i.fn.load,
    i.fn.load = function(n, t, r) {
        if ("string" != typeof n && or)
            return or.apply(this, arguments);
        var u, o, s, f = this, e = n.indexOf(" ");
        return e > -1 && (u = i.trim(n.slice(e, n.length)),
        n = n.slice(0, e)),
        i.isFunction(t) ? (r = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        f.length > 0 && i.ajax({
            url: n,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function(n, t) {
            f.each(function() {
                r.apply(this, s || [n.responseText, t, n])
            })
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"), a = i(n), f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(),
            h = e.top,
            o = e.left) : (h = parseFloat(s) || 0,
            o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using"in t ? t.using.call(n, f) : a.css(f)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var t, f, u = {
                top: 0,
                left: 0
            }, r = this[0], e = r && r.ownerDocument;
            if (e)
                return t = e.documentElement,
                i.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (u = r.getBoundingClientRect()),
                f = oe(e),
                {
                    top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : u
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                }, u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(),
                r = this.offset(),
                i.nodeName(n[0], "html") || (t = n.offset()),
                t.top += i.css(n[0], "borderTopWidth", !0),
                t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && !i.nodeName(n, "html") && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || nf
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return y(this, function(n, u, f) {
                var e = oe(n);
                return void 0 === f ? e ? t in e ? e[t] : e.document.documentElement[u] : n[u] : void (e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f)
            }, n, u, arguments.length, null)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = bi(r.pixelPosition, function(n, r) {
            if (r)
                return (r = p(n, t),
                pt.test(r) ? i(n).position()[t] + "px" : r)
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || "boolean" != typeof u)
                  , o = r || (u === !0 || f === !0 ? "margin" : "border");
                return y(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement,
                    Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : void 0, e, null)
            }
        })
    }),
    i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }),
    i.fn.size = function() {
        return this.length
    }
    ,
    i.fn.andSelf = i.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }),
    se = n.jQuery,
    he = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = he),
        t && n.jQuery === i && (n.jQuery = se),
        i
    }
    ,
    t || (n.jQuery = n.$ = i),
    i
});
/*! Select2 4.1.0-beta.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function(t, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
        n(i),
        i
    }
    : n(jQuery)
}(function(n) {
    var t = function() {
        function u(n, t) {
            return d.call(n, t)
        }
        function l(n, t) {
            var e, o, s, f, h, y, c, p, i, l, b, u = t && t.split("/"), a = r.map, v = a && a["*"] || {};
            if (n) {
                for (h = (n = n.split("/")).length - 1,
                r.nodeIdCompat && w.test(n[h]) && (n[h] = n[h].replace(w, "")),
                "." === n[0].charAt(0) && u && (n = u.slice(0, u.length - 1).concat(n)),
                i = 0; i < n.length; i++)
                    if ("." === (b = n[i]))
                        n.splice(i, 1),
                        --i;
                    else if (".." === b) {
                        if (0 === i || 1 === i && ".." === n[2] || ".." === n[i - 1])
                            continue;
                        0 < i && (n.splice(i - 1, 2),
                        i -= 2)
                    }
                n = n.join("/")
            }
            if ((u || v) && a) {
                for (i = (e = n.split("/")).length; 0 < i; --i) {
                    if (o = e.slice(0, i).join("/"),
                    u)
                        for (l = u.length; 0 < l; --l)
                            if (s = (s = a[u.slice(0, l).join("/")]) && s[o]) {
                                f = s;
                                y = i;
                                break
                            }
                    if (f)
                        break;
                    !c && v && v[o] && (c = v[o],
                    p = i)
                }
                !f && c && (f = c,
                y = p);
                f && (e.splice(0, y, f),
                n = e.join("/"))
            }
            return n
        }
        function nt(n, t) {
            return function() {
                var i = g.call(arguments, 0);
                return "string" != typeof i[0] && 1 === i.length && i.push(null),
                o.apply(f, i.concat([n, t]))
            }
        }
        function it(n) {
            return function(t) {
                i[n] = t
            }
        }
        function a(n) {
            if (u(e, n)) {
                var t = e[n];
                delete e[n];
                c[n] = !0;
                h.apply(f, t)
            }
            if (!u(i, n) && !u(c, n))
                throw new Error("No " + n);
            return i[n]
        }
        function b(n) {
            var i, t = n ? n.indexOf("!") : -1;
            return -1 < t && (i = n.substring(0, t),
            n = n.substring(t + 1, n.length)),
            [i, n]
        }
        function tt(n) {
            return n ? b(n) : []
        }
        var t, v, y, k, f, h, o, p, s, i, e, r, c, d, g, w;
        return n && n.fn && n.fn.select2 && n.fn.select2.amd && (t = n.fn.select2.amd),
        t && t.requirejs || (t ? y = t : t = {},
        i = {},
        e = {},
        r = {},
        c = {},
        d = Object.prototype.hasOwnProperty,
        g = [].slice,
        w = /\.js$/,
        p = function(n, t) {
            var r, e, u = b(n), i = u[0], f = t[1];
            return n = u[1],
            i && (r = a(i = l(i, f))),
            i ? n = r && r.normalize ? r.normalize(n, (e = f,
            function(n) {
                return l(n, e)
            }
            )) : l(n, f) : (i = (u = b(n = l(n, f)))[0],
            n = u[1],
            i && (r = a(i))),
            {
                f: i ? i + "!" + n : n,
                n: n,
                pr: i,
                p: r
            }
        }
        ,
        s = {
            require: function(n) {
                return nt(n)
            },
            exports: function(n) {
                var t = i[n];
                return void 0 !== t ? t : i[n] = {}
            },
            module: function(n) {
                return {
                    id: n,
                    uri: "",
                    exports: i[n],
                    config: (t = n,
                    function() {
                        return r && r.config && r.config[t] || {}
                    }
                    )
                };
                var t
            }
        },
        h = function(n, t, r, o) {
            var y, h, b, w, l, k, d, v = [], g = typeof r;
            if (k = tt(o = o || n),
            "undefined" == g || "function" == g) {
                for (t = !t.length && r.length ? ["require", "exports", "module"] : t,
                l = 0; l < t.length; l += 1)
                    if ("require" === (h = (w = p(t[l], k)).f))
                        v[l] = s.require(n);
                    else if ("exports" === h)
                        v[l] = s.exports(n),
                        d = !0;
                    else if ("module" === h)
                        y = v[l] = s.module(n);
                    else if (u(i, h) || u(e, h) || u(c, h))
                        v[l] = a(h);
                    else {
                        if (!w.p)
                            throw new Error(n + " missing " + h);
                        w.p.load(w.n, nt(o, !0), it(h), {});
                        v[l] = i[h]
                    }
                b = r ? r.apply(i[n], v) : void 0;
                n && (y && y.exports !== f && y.exports !== i[n] ? i[n] = y.exports : b === f && d || (i[n] = b))
            } else
                n && (i[n] = r)
        }
        ,
        v = y = o = function(n, t, i, u, e) {
            if ("string" == typeof n)
                return s[n] ? s[n](t) : a(p(n, tt(t)).f);
            if (!n.splice) {
                if ((r = n).deps && o(r.deps, r.callback),
                !t)
                    return;
                t.splice ? (n = t,
                t = i,
                i = null) : n = f
            }
            return t = t || function() {}
            ,
            "function" == typeof i && (i = u,
            u = e),
            u ? h(f, n, t, i) : setTimeout(function() {
                h(f, n, t, i)
            }, 4),
            o
        }
        ,
        o.config = function(n) {
            return o(n)
        }
        ,
        v._defined = i,
        (k = function(n, t, r) {
            if ("string" != typeof n)
                throw new Error("See almond README: incorrect module build, no module name");
            t.splice || (r = t,
            t = []);
            u(i, n) || u(e, n) || (e[n] = [n, t, r])
        }
        ).amd = {
            jQuery: !0
        },
        t.requirejs = v,
        t.require = y,
        t.define = k),
        t.define("almond", function() {}),
        t.define("jquery", [], function() {
            var t = n || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            t
        }),
        t.define("select2/utils", ["jquery"], function(n) {
            function r(n) {
                var i = n.prototype
                  , r = [];
                for (var t in i)
                    "function" == typeof i[t] && "constructor" !== t && r.push(t);
                return r
            }
            function i() {
                this.listeners = {}
            }
            var t = {}, u;
            return t.Extend = function(n, t) {
                function r() {
                    this.constructor = n
                }
                var u = {}.hasOwnProperty;
                for (var i in t)
                    u.call(t, i) && (n[i] = t[i]);
                return r.prototype = t.prototype,
                n.prototype = new r,
                n.__super__ = t.prototype,
                n
            }
            ,
            t.Decorate = function(n, t) {
                function i() {
                    var r = Array.prototype.unshift
                      , u = t.prototype.constructor.length
                      , i = n.prototype.constructor;
                    0 < u && (r.call(arguments, n.prototype.constructor),
                    i = t.prototype.constructor);
                    i.apply(this, arguments)
                }
                function c(n) {
                    var r = function() {}, u;
                    return n in i.prototype && (r = i.prototype[n]),
                    u = t.prototype[n],
                    function() {
                        return Array.prototype.unshift.call(arguments, r),
                        u.apply(this, arguments)
                    }
                }
                var s = r(t), h = r(n), u, e, f, o;
                for (t.displayName = n.displayName,
                i.prototype = new function() {
                    this.constructor = i
                }
                ,
                u = 0; u < h.length; u++)
                    e = h[u],
                    i.prototype[e] = n.prototype[e];
                for (f = 0; f < s.length; f++)
                    o = s[f],
                    i.prototype[o] = c(o);
                return i
            }
            ,
            i.prototype.on = function(n, t) {
                this.listeners = this.listeners || {};
                n in this.listeners ? this.listeners[n].push(t) : this.listeners[n] = [t]
            }
            ,
            i.prototype.trigger = function(n) {
                var i = Array.prototype.slice
                  , t = i.call(arguments, 1);
                this.listeners = this.listeners || {};
                null == t && (t = []);
                0 === t.length && t.push({});
                (t[0]._type = n)in this.listeners && this.invoke(this.listeners[n], i.call(arguments, 1));
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }
            ,
            i.prototype.invoke = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    n[i].apply(this, t)
            }
            ,
            t.Observable = i,
            t.generateChars = function(n) {
                for (var t = "", i = 0; i < n; i++)
                    t += Math.floor(36 * Math.random()).toString(36);
                return t
            }
            ,
            t.bind = function(n, t) {
                return function() {
                    n.apply(t, arguments)
                }
            }
            ,
            t._convertData = function(n) {
                var f, r, i, u, t;
                for (f in n)
                    if (r = f.split("-"),
                    i = n,
                    1 !== r.length) {
                        for (u = 0; u < r.length; u++)
                            t = r[u],
                            (t = t.substring(0, 1).toLowerCase() + t.substring(1))in i || (i[t] = {}),
                            u == r.length - 1 && (i[t] = n[f]),
                            i = i[t];
                        delete n[f]
                    }
                return n
            }
            ,
            t.hasScroll = function(t, i) {
                var u = n(i)
                  , f = i.style.overflowX
                  , r = i.style.overflowY;
                return (f !== r || "hidden" !== r && "visible" !== r) && ("scroll" === f || "scroll" === r || u.innerHeight() < i.scrollHeight || u.innerWidth() < i.scrollWidth)
            }
            ,
            t.escapeMarkup = function(n) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof n ? n : String(n).replace(/[&<>"'\/\\]/g, function(n) {
                    return t[n]
                })
            }
            ,
            t.__cache = {},
            u = 0,
            t.GetUniqueElementId = function(n) {
                var i = n.getAttribute("data-select2-id");
                return null != i || (i = n.id ? "select2-data-" + n.id : "select2-data-" + (++u).toString() + "-" + t.generateChars(4),
                n.setAttribute("data-select2-id", i)),
                i
            }
            ,
            t.StoreData = function(n, i, r) {
                var u = t.GetUniqueElementId(n);
                t.__cache[u] || (t.__cache[u] = {});
                t.__cache[u][i] = r
            }
            ,
            t.GetData = function(i, r) {
                var u = t.GetUniqueElementId(i);
                return r ? t.__cache[u] && null != t.__cache[u][r] ? t.__cache[u][r] : n(i).data(r) : t.__cache[u]
            }
            ,
            t.RemoveData = function(n) {
                var i = t.GetUniqueElementId(n);
                null != t.__cache[i] && delete t.__cache[i];
                n.removeAttribute("data-select2-id")
            }
            ,
            t.copyNonInternalCssClasses = function(n, t) {
                var r = n.getAttribute("class").trim().split(/\s+/), i, u;
                r = r.filter(function(n) {
                    return 0 === n.indexOf("select2-")
                });
                i = t.getAttribute("class").trim().split(/\s+/);
                i = i.filter(function(n) {
                    return 0 !== n.indexOf("select2-")
                });
                u = r.concat(i);
                n.setAttribute("class", u.join(" "))
            }
            ,
            t
        }),
        t.define("select2/results", ["jquery", "./utils"], function(n, t) {
            function i(n, t, r) {
                this.$element = n;
                this.data = r;
                this.options = t;
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var t = n('<ul class="select2-results__options" role="listbox"><\/ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                this.$results = t
            }
            ,
            i.prototype.clear = function() {
                this.$results.empty()
            }
            ,
            i.prototype.displayMessage = function(t) {
                var u = this.options.get("escapeMarkup"), i, r;
                this.clear();
                this.hideLoading();
                i = n('<li role="alert" aria-live="assertive" class="select2-results__option"><\/li>');
                r = this.options.get("translations").get(t.message);
                i.append(u(r(t.args)));
                i[0].className += " select2-results__message";
                this.$results.append(i)
            }
            ,
            i.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }
            ,
            i.prototype.append = function(n) {
                var i, t, r, u;
                if (this.hideLoading(),
                i = [],
                null != n.results && 0 !== n.results.length) {
                    for (n.results = this.sort(n.results),
                    t = 0; t < n.results.length; t++)
                        r = n.results[t],
                        u = this.option(r),
                        i.push(u);
                    this.$results.append(i)
                } else
                    0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
            }
            ,
            i.prototype.position = function(n, t) {
                t.find(".select2-results").append(n)
            }
            ,
            i.prototype.sort = function(n) {
                return this.options.get("sorter")(n)
            }
            ,
            i.prototype.highlightFirstItem = function() {
                var n = this.$results.find(".select2-results__option--selectable")
                  , t = n.filter(".select2-results__option--selected");
                0 < t.length ? t.first().trigger("mouseenter") : n.first().trigger("mouseenter");
                this.ensureHighlightVisible()
            }
            ,
            i.prototype.setClasses = function() {
                var i = this;
                this.data.current(function(r) {
                    var u = r.map(function(n) {
                        return n.id.toString()
                    });
                    i.$results.find(".select2-results__option--selectable").each(function() {
                        var r = n(this)
                          , i = t.GetData(this, "data")
                          , f = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && -1 < u.indexOf(f) ? (this.classList.add("select2-results__option--selected"),
                        r.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"),
                        r.attr("aria-selected", "false"))
                    })
                })
            }
            ,
            i.prototype.showLoading = function(n) {
                this.hideLoading();
                var i = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(n)
                }
                  , t = this.option(i);
                t.className += " loading-results";
                this.$results.prepend(t)
            }
            ,
            i.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }
            ,
            i.prototype.option = function(i) {
                var r = document.createElement("li"), u, l, o, a, s, f, h, e, v, y, c;
                r.classList.add("select2-results__option");
                r.classList.add("select2-results__option--selectable");
                u = {
                    role: "option"
                };
                l = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                for (o in (null != i.element && l.call(i.element, ":disabled") || null == i.element && i.disabled) && (u["aria-disabled"] = "true",
                r.classList.remove("select2-results__option--selectable"),
                r.classList.add("select2-results__option--disabled")),
                null == i.id && r.classList.remove("select2-results__option--selectable"),
                null != i._resultId && (r.id = i._resultId),
                i.title && (r.title = i.title),
                i.children && (u.role = "group",
                u["aria-label"] = i.text,
                r.classList.remove("select2-results__option--selectable"),
                r.classList.add("select2-results__option--group")),
                u)
                    a = u[o],
                    r.setAttribute(o, a);
                if (i.children) {
                    for (s = n(r),
                    f = document.createElement("strong"),
                    f.className = "select2-results__group",
                    this.template(i, f),
                    h = [],
                    e = 0; e < i.children.length; e++)
                        v = i.children[e],
                        y = this.option(v),
                        h.push(y);
                    c = n("<ul><\/ul>", {
                        "class": "select2-results__options select2-results__options--nested"
                    });
                    c.append(h);
                    s.append(f);
                    s.append(c)
                } else
                    this.template(i, r);
                return t.StoreData(r, "data", i),
                r
            }
            ,
            i.prototype.bind = function(i) {
                var r = this
                  , u = i.id + "-results";
                this.$results.attr("id", u);
                i.on("results:all", function(n) {
                    r.clear();
                    r.append(n.data);
                    i.isOpen() && (r.setClasses(),
                    r.highlightFirstItem())
                });
                i.on("results:append", function(n) {
                    r.append(n.data);
                    i.isOpen() && r.setClasses()
                });
                i.on("query", function(n) {
                    r.hideMessages();
                    r.showLoading(n)
                });
                i.on("select", function() {
                    i.isOpen() && (r.setClasses(),
                    r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                });
                i.on("unselect", function() {
                    i.isOpen() && (r.setClasses(),
                    r.options.get("scrollAfterSelect") && r.highlightFirstItem())
                });
                i.on("open", function() {
                    r.$results.attr("aria-expanded", "true");
                    r.$results.attr("aria-hidden", "false");
                    r.setClasses();
                    r.ensureHighlightVisible()
                });
                i.on("close", function() {
                    r.$results.attr("aria-expanded", "false");
                    r.$results.attr("aria-hidden", "true");
                    r.$results.removeAttr("aria-activedescendant")
                });
                i.on("results:toggle", function() {
                    var n = r.getHighlightedResults();
                    0 !== n.length && n.trigger("mouseup")
                });
                i.on("results:select", function() {
                    var n = r.getHighlightedResults(), i;
                    0 !== n.length && (i = t.GetData(n[0], "data"),
                    n.hasClass("select2-results__option--selected") ? r.trigger("close", {}) : r.trigger("select", {
                        data: i
                    }))
                });
                i.on("results:previous", function() {
                    var i = r.getHighlightedResults(), u = r.$results.find(".select2-results__option--selectable"), f = u.index(i), n, t;
                    if (!(f <= 0)) {
                        n = f - 1;
                        0 === i.length && (n = 0);
                        t = u.eq(n);
                        t.trigger("mouseenter");
                        var e = r.$results.offset().top
                          , o = t.offset().top
                          , s = r.$results.scrollTop() + (o - e);
                        0 === n ? r.$results.scrollTop(0) : o - e < 0 && r.$results.scrollTop(s)
                    }
                });
                i.on("results:next", function() {
                    var e = r.getHighlightedResults(), t = r.$results.find(".select2-results__option--selectable"), i = t.index(e) + 1, n;
                    if (!(i >= t.length)) {
                        n = t.eq(i);
                        n.trigger("mouseenter");
                        var u = r.$results.offset().top + r.$results.outerHeight(!1)
                          , f = n.offset().top + n.outerHeight(!1)
                          , o = r.$results.scrollTop() + f - u;
                        0 === i ? r.$results.scrollTop(0) : u < f && r.$results.scrollTop(o)
                    }
                });
                i.on("results:focus", function(n) {
                    n.element[0].classList.add("select2-results__option--highlighted");
                    n.element[0].setAttribute("aria-selected", "true")
                });
                i.on("results:message", function(n) {
                    r.displayMessage(n)
                });
                n.fn.mousewheel && this.$results.on("mousewheel", function(n) {
                    var t = r.$results.scrollTop()
                      , i = r.$results.get(0).scrollHeight - t + n.deltaY
                      , u = 0 < n.deltaY && t - n.deltaY <= 0
                      , f = n.deltaY < 0 && i <= r.$results.height();
                    u ? (r.$results.scrollTop(0),
                    n.preventDefault(),
                    n.stopPropagation()) : f && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()),
                    n.preventDefault(),
                    n.stopPropagation())
                });
                this.$results.on("mouseup", ".select2-results__option--selectable", function(i) {
                    var f = n(this)
                      , u = t.GetData(this, "data");
                    f.hasClass("select2-results__option--selected") ? r.options.get("multiple") ? r.trigger("unselect", {
                        originalEvent: i,
                        data: u
                    }) : r.trigger("close", {}) : r.trigger("select", {
                        originalEvent: i,
                        data: u
                    })
                });
                this.$results.on("mouseenter", ".select2-results__option--selectable", function() {
                    var i = t.GetData(this, "data");
                    r.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false");
                    r.trigger("results:focus", {
                        data: i,
                        element: n(this)
                    })
                })
            }
            ,
            i.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted")
            }
            ,
            i.prototype.destroy = function() {
                this.$results.remove()
            }
            ,
            i.prototype.ensureHighlightVisible = function() {
                var n = this.getHighlightedResults();
                if (0 !== n.length) {
                    var f = this.$results.find(".select2-results__option--selectable").index(n)
                      , t = this.$results.offset().top
                      , i = n.offset().top
                      , r = this.$results.scrollTop() + (i - t)
                      , u = i - t;
                    r -= 2 * n.outerHeight(!1);
                    f <= 2 ? this.$results.scrollTop(0) : (u > this.$results.outerHeight() || u < 0) && this.$results.scrollTop(r)
                }
            }
            ,
            i.prototype.template = function(t, i) {
                var u = this.options.get("templateResult")
                  , f = this.options.get("escapeMarkup")
                  , r = u(t, i);
                null == r ? i.style.display = "none" : "string" == typeof r ? i.innerHTML = f(r) : n(i).append(r)
            }
            ,
            i
        }),
        t.define("select2/keys", [], function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }),
        t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, t, i) {
            function r(n, t) {
                this.$element = n;
                this.options = t;
                r.__super__.constructor.call(this)
            }
            return t.Extend(r, t.Observable),
            r.prototype.render = function() {
                var i = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"><\/span>');
                return this._tabindex = 0,
                null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                i.attr("title", this.$element.attr("title")),
                i.attr("tabindex", this._tabindex),
                i.attr("aria-disabled", "false"),
                this.$selection = i
            }
            ,
            r.prototype.bind = function(n) {
                var t = this
                  , r = n.id + "-results";
                this.container = n;
                this.$selection.on("focus", function(n) {
                    t.trigger("focus", n)
                });
                this.$selection.on("blur", function(n) {
                    t._handleBlur(n)
                });
                this.$selection.on("keydown", function(n) {
                    t.trigger("keypress", n);
                    n.which === i.SPACE && n.preventDefault()
                });
                n.on("results:focus", function(n) {
                    t.$selection.attr("aria-activedescendant", n.data._resultId)
                });
                n.on("selection:update", function(n) {
                    t.update(n.data)
                });
                n.on("open", function() {
                    t.$selection.attr("aria-expanded", "true");
                    t.$selection.attr("aria-owns", r);
                    t._attachCloseHandler(n)
                });
                n.on("close", function() {
                    t.$selection.attr("aria-expanded", "false");
                    t.$selection.removeAttr("aria-activedescendant");
                    t.$selection.removeAttr("aria-owns");
                    t.$selection.trigger("focus");
                    t._detachCloseHandler(n)
                });
                n.on("enable", function() {
                    t.$selection.attr("tabindex", t._tabindex);
                    t.$selection.attr("aria-disabled", "false")
                });
                n.on("disable", function() {
                    t.$selection.attr("tabindex", "-1");
                    t.$selection.attr("aria-disabled", "true")
                })
            }
            ,
            r.prototype._handleBlur = function(t) {
                var i = this;
                window.setTimeout(function() {
                    document.activeElement == i.$selection[0] || n.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
                }, 1)
            }
            ,
            r.prototype._attachCloseHandler = function(i) {
                n(document.body).on("mousedown.select2." + i.id, function(i) {
                    var r = n(i.target).closest(".select2");
                    n(".select2.select2-container--open").each(function() {
                        this != r[0] && t.GetData(this, "element").select2("close")
                    })
                })
            }
            ,
            r.prototype._detachCloseHandler = function(t) {
                n(document.body).off("mousedown.select2." + t.id)
            }
            ,
            r.prototype.position = function(n, t) {
                t.find(".selection").append(n)
            }
            ,
            r.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }
            ,
            r.prototype.update = function() {
                throw new Error("The `update` method must be defined in child classes.");
            }
            ,
            r.prototype.isEnabled = function() {
                return !this.isDisabled()
            }
            ,
            r.prototype.isDisabled = function() {
                return this.options.get("disabled")
            }
            ,
            r
        }),
        t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(n, t, i) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }
            return i.Extend(r, t),
            r.prototype.render = function() {
                var n = r.__super__.render.call(this);
                return n[0].classList.add("select2-selection--single"),
                n.html('<span class="select2-selection__rendered"><\/span><span class="select2-selection__arrow" role="presentation"><b role="presentation"><\/b><\/span>'),
                n
            }
            ,
            r.prototype.bind = function(n) {
                var i = this, t;
                r.__super__.bind.apply(this, arguments);
                t = n.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", t).attr("role", "textbox").attr("aria-readonly", "true");
                this.$selection.attr("aria-labelledby", t);
                this.$selection.on("mousedown", function(n) {
                    1 === n.which && i.trigger("toggle", {
                        originalEvent: n
                    })
                });
                this.$selection.on("focus", function() {});
                this.$selection.on("blur", function() {});
                n.on("focus", function() {
                    n.isOpen() || i.$selection.trigger("focus")
                })
            }
            ,
            r.prototype.clear = function() {
                var n = this.$selection.find(".select2-selection__rendered");
                n.empty();
                n.removeAttr("title")
            }
            ,
            r.prototype.display = function(n, t) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(n, t))
            }
            ,
            r.prototype.selectionContainer = function() {
                return n("<span><\/span>")
            }
            ,
            r.prototype.update = function(n) {
                var r;
                if (0 !== n.length) {
                    var i = n[0]
                      , t = this.$selection.find(".select2-selection__rendered")
                      , u = this.display(i, t);
                    t.empty().append(u);
                    r = i.title || i.text;
                    r ? t.attr("title", r) : t.removeAttr("title")
                } else
                    this.clear()
            }
            ,
            r
        }),
        t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(n, t, i) {
            function r() {
                r.__super__.constructor.apply(this, arguments)
            }
            return i.Extend(r, t),
            r.prototype.render = function() {
                var n = r.__super__.render.call(this);
                return n[0].classList.add("select2-selection--multiple"),
                n.html('<ul class="select2-selection__rendered"><\/ul>'),
                n
            }
            ,
            r.prototype.bind = function(t) {
                var u = this, f;
                r.__super__.bind.apply(this, arguments);
                f = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", f);
                this.$selection.on("click", function(n) {
                    u.trigger("toggle", {
                        originalEvent: n
                    })
                });
                this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                    if (!u.isDisabled()) {
                        var r = n(this).parent()
                          , f = i.GetData(r[0], "data");
                        u.trigger("unselect", {
                            originalEvent: t,
                            data: f
                        })
                    }
                });
                this.$selection.on("keydown", ".select2-selection__choice__remove", function(n) {
                    u.isDisabled() || n.stopPropagation()
                })
            }
            ,
            r.prototype.clear = function() {
                var n = this.$selection.find(".select2-selection__rendered");
                n.empty();
                n.removeAttr("title")
            }
            ,
            r.prototype.display = function(n, t) {
                var i = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(i(n, t))
            }
            ,
            r.prototype.selectionContainer = function() {
                return n('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;<\/span><\/button><span class="select2-selection__choice__display"><\/span><\/li>')
            }
            ,
            r.prototype.update = function(n) {
                var o, s, u;
                if (this.clear(),
                0 !== n.length) {
                    for (var h = [], c = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", f = 0; f < n.length; f++) {
                        var t = n[f]
                          , r = this.selectionContainer()
                          , l = this.display(t, r)
                          , e = c + i.generateChars(4) + "-";
                        e += t.id ? t.id : i.generateChars(4);
                        r.find(".select2-selection__choice__display").append(l).attr("id", e);
                        o = t.title || t.text;
                        o && r.attr("title", o);
                        s = this.options.get("translations").get("removeItem");
                        u = r.find(".select2-selection__choice__remove");
                        u.attr("title", s());
                        u.attr("aria-label", s());
                        u.attr("aria-describedby", e);
                        i.StoreData(r[0], "data", t);
                        h.push(r)
                    }
                    this.$selection.find(".select2-selection__rendered").append(h)
                }
            }
            ,
            r
        }),
        t.define("select2/selection/placeholder", [], function() {
            function n(n, t, i) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                n.call(this, t, i)
            }
            return n.prototype.normalizePlaceholder = function(n, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            n.prototype.createPlaceholder = function(n, t) {
                var i = this.selectionContainer();
                return i.html(this.display(t)),
                i[0].classList.add("select2-selection__placeholder"),
                i[0].classList.remove("select2-selection__choice"),
                i
            }
            ,
            n.prototype.update = function(n, t) {
                var r = 1 == t.length && t[0].id != this.placeholder.id, i;
                if (1 < t.length || r)
                    return n.call(this, t);
                this.clear();
                i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i)
            }
            ,
            n
        }),
        t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(n, t, i) {
            function r() {}
            return r.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                this.$selection.on("mousedown", ".select2-selection__clear", function(n) {
                    r._handleClear(n)
                });
                t.on("keypress", function(n) {
                    r._handleKeyboardClear(n, t)
                })
            }
            ,
            r.prototype._handleClear = function(n, t) {
                var e, u, o, r, f;
                if (!this.isDisabled() && (e = this.$selection.find(".select2-selection__clear"),
                0 !== e.length))
                    if (t.stopPropagation(),
                    u = i.GetData(e[0], "data"),
                    o = this.$element.val(),
                    this.$element.val(this.placeholder.id),
                    r = {
                        data: u
                    },
                    this.trigger("clear", r),
                    r.prevented)
                        this.$element.val(o);
                    else {
                        for (f = 0; f < u.length; f++)
                            if (r = {
                                data: u[f]
                            },
                            this.trigger("unselect", r),
                            r.prevented)
                                return void this.$element.val(o);
                        this.$element.trigger("input").trigger("change");
                        this.trigger("toggle", {})
                    }
            }
            ,
            r.prototype._handleKeyboardClear = function(n, i, r) {
                r.isOpen() || i.which != t.DELETE && i.which != t.BACKSPACE || this._handleClear(i)
            }
            ,
            r.prototype.update = function(t, r) {
                if (t.call(this, r),
                this.$selection.find(".select2-selection__clear").remove(),
                !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === r.length)) {
                    var e = this.$selection.find(".select2-selection__rendered").attr("id")
                      , f = this.options.get("translations").get("removeAllItems")
                      , u = n('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;<\/span><\/button>');
                    u.attr("title", f());
                    u.attr("aria-label", f());
                    u.attr("aria-describedby", e);
                    i.StoreData(u[0], "data", r);
                    this.$selection.prepend(u)
                }
            }
            ,
            r
        }),
        t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(n, t, i) {
            function r(n, t, i) {
                n.call(this, t, i)
            }
            return r.prototype.render = function(t) {
                var r = n('<span class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /><\/span>'), i;
                return this.$searchContainer = r,
                this.$search = r.find("input"),
                this.$search.prop("autocomplete", this.options.get("autocomplete")),
                i = t.call(this),
                this._transferTabIndex(),
                i.append(this.$searchContainer),
                i
            }
            ,
            r.prototype.bind = function(n, r, u) {
                var f = this, s = r.id + "-results", h = r.id + "-container", e, o;
                n.call(this, r, u);
                f.$search.attr("aria-describedby", h);
                r.on("open", function() {
                    f.$search.attr("aria-controls", s);
                    f.$search.trigger("focus")
                });
                r.on("close", function() {
                    f.$search.val("");
                    f.resizeSearch();
                    f.$search.removeAttr("aria-controls");
                    f.$search.removeAttr("aria-activedescendant");
                    f.$search.trigger("focus")
                });
                r.on("enable", function() {
                    f.$search.prop("disabled", !1);
                    f._transferTabIndex()
                });
                r.on("disable", function() {
                    f.$search.prop("disabled", !0)
                });
                r.on("focus", function() {
                    f.$search.trigger("focus")
                });
                r.on("results:focus", function(n) {
                    n.data._resultId ? f.$search.attr("aria-activedescendant", n.data._resultId) : f.$search.removeAttr("aria-activedescendant")
                });
                this.$selection.on("focusin", ".select2-search--inline", function(n) {
                    f.trigger("focus", n)
                });
                this.$selection.on("focusout", ".select2-search--inline", function(n) {
                    f._handleBlur(n)
                });
                this.$selection.on("keydown", ".select2-search--inline", function(n) {
                    var r, u;
                    (n.stopPropagation(),
                    f.trigger("keypress", n),
                    f._keyUpPrevented = n.isDefaultPrevented(),
                    n.which === i.BACKSPACE && "" === f.$search.val()) && (r = f.$selection.find(".select2-selection__choice").last(),
                    0 < r.length && (u = t.GetData(r[0], "data"),
                    f.searchRemoveChoice(u),
                    n.preventDefault()))
                });
                this.$selection.on("click", ".select2-search--inline", function(n) {
                    f.$search.val() && n.stopPropagation()
                });
                e = document.documentMode;
                o = e && e <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
                    o ? f.$selection.off("input.search input.searchcheck") : f.$selection.off("keyup.search")
                });
                this.$selection.on("keyup.search input.search", ".select2-search--inline", function(n) {
                    if (o && "input" === n.type)
                        f.$selection.off("input.search input.searchcheck");
                    else {
                        var t = n.which;
                        t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && f.handleSearch(n)
                    }
                })
            }
            ,
            r.prototype._transferTabIndex = function() {
                this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                this.$selection.attr("tabindex", "-1")
            }
            ,
            r.prototype.createPlaceholder = function(n, t) {
                this.$search.attr("placeholder", t.text)
            }
            ,
            r.prototype.update = function(n, t) {
                var i = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", "");
                n.call(this, t);
                this.resizeSearch();
                i && this.$search.trigger("focus")
            }
            ,
            r.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var n = this.$search.val();
                    this.trigger("query", {
                        term: n
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            r.prototype.searchRemoveChoice = function(n, t) {
                this.trigger("unselect", {
                    data: t
                });
                this.$search.val(t.text);
                this.handleSearch()
            }
            ,
            r.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var n = "100%";
                "" === this.$search.attr("placeholder") && (n = .75 * (this.$search.val().length + 1) + "em");
                this.$search.css("width", n)
            }
            ,
            r
        }),
        t.define("select2/selection/selectionCss", ["../utils"], function(n) {
            function t() {}
            return t.prototype.render = function(t) {
                var r = t.call(this)
                  , i = this.options.get("selectionCssClass") || "";
                return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""),
                n.copyNonInternalCssClasses(r[0], this.$element[0])),
                r.addClass(i),
                r
            }
            ,
            t
        }),
        t.define("select2/selection/eventRelay", ["jquery"], function(n) {
            function t() {}
            return t.prototype.bind = function(t, i, r) {
                var u = this
                  , f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
                  , e = ["opening", "closing", "selecting", "unselecting", "clearing"];
                t.call(this, i, r);
                i.on("*", function(t, i) {
                    if (-1 !== f.indexOf(t)) {
                        i = i || {};
                        var r = n.Event("select2:" + t, {
                            params: i
                        });
                        u.$element.trigger(r);
                        -1 !== e.indexOf(t) && (i.prevented = r.isDefaultPrevented())
                    }
                })
            }
            ,
            t
        }),
        t.define("select2/translation", ["jquery", "require"], function(n, t) {
            function i(n) {
                this.dict = n || {}
            }
            return i.prototype.all = function() {
                return this.dict
            }
            ,
            i.prototype.get = function(n) {
                return this.dict[n]
            }
            ,
            i.prototype.extend = function(t) {
                this.dict = n.extend({}, t.all(), this.dict)
            }
            ,
            i._cache = {},
            i.loadPath = function(n) {
                if (!(n in i._cache)) {
                    var r = t(n);
                    i._cache[n] = r
                }
                return new i(i._cache[n])
            }
            ,
            i
        }),
        t.define("select2/diacritics", [], function() {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Œ": "OE",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "œ": "oe",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ώ": "ω",
                "ς": "σ",
                "’": "'"
            }
        }),
        t.define("select2/data/base", ["../utils"], function(n) {
            function t() {
                t.__super__.constructor.call(this)
            }
            return n.Extend(t, n.Observable),
            t.prototype.current = function() {
                throw new Error("The `current` method must be defined in child classes.");
            }
            ,
            t.prototype.query = function() {
                throw new Error("The `query` method must be defined in child classes.");
            }
            ,
            t.prototype.bind = function() {}
            ,
            t.prototype.destroy = function() {}
            ,
            t.prototype.generateResultId = function(t, i) {
                var r = t.id + "-result-";
                return r += n.generateChars(4),
                r += null != i.id ? "-" + i.id.toString() : "-" + n.generateChars(4),
                r
            }
            ,
            t
        }),
        t.define("select2/data/select", ["./base", "../utils", "jquery"], function(n, t, i) {
            function r(n, t) {
                this.$element = n;
                this.options = t;
                r.__super__.constructor.call(this)
            }
            return t.Extend(r, n),
            r.prototype.current = function(n) {
                var t = this;
                n(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function(n) {
                    return t.item(i(n))
                }))
            }
            ,
            r.prototype.select = function(n) {
                var t = this, i;
                if (n.selected = !0,
                null != n.element && "option" === n.element.tagName.toLowerCase())
                    return n.element.selected = !0,
                    void this.$element.trigger("input").trigger("change");
                this.$element.prop("multiple") ? this.current(function(i) {
                    var u = [], r, f;
                    for ((n = [n]).push.apply(n, i),
                    r = 0; r < n.length; r++)
                        f = n[r].id,
                        -1 === u.indexOf(f) && u.push(f);
                    t.$element.val(u);
                    t.$element.trigger("input").trigger("change")
                }) : (i = n.id,
                this.$element.val(i),
                this.$element.trigger("input").trigger("change"))
            }
            ,
            r.prototype.unselect = function(n) {
                var t = this;
                if (this.$element.prop("multiple")) {
                    if (n.selected = !1,
                    null != n.element && "option" === n.element.tagName.toLowerCase())
                        return n.element.selected = !1,
                        void this.$element.trigger("input").trigger("change");
                    this.current(function(i) {
                        for (var f, r = [], u = 0; u < i.length; u++)
                            f = i[u].id,
                            f !== n.id && -1 === r.indexOf(f) && r.push(f);
                        t.$element.val(r);
                        t.$element.trigger("input").trigger("change")
                    })
                }
            }
            ,
            r.prototype.bind = function(n) {
                var t = this;
                (this.container = n).on("select", function(n) {
                    t.select(n.data)
                });
                n.on("unselect", function(n) {
                    t.unselect(n.data)
                })
            }
            ,
            r.prototype.destroy = function() {
                this.$element.find("*").each(function() {
                    t.RemoveData(this)
                })
            }
            ,
            r.prototype.query = function(n, t) {
                var r = []
                  , u = this;
                this.$element.children().each(function() {
                    if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
                        var f = i(this)
                          , e = u.item(f)
                          , t = u.matches(n, e);
                        null !== t && r.push(t)
                    }
                });
                t({
                    results: r
                })
            }
            ,
            r.prototype.addOptions = function(n) {
                this.$element.append(n)
            }
            ,
            r.prototype.option = function(n) {
                var r, u;
                return n.children ? (r = document.createElement("optgroup")).label = n.text : void 0 !== (r = document.createElement("option")).textContent ? r.textContent = n.text : r.innerText = n.text,
                void 0 !== n.id && (r.value = n.id),
                n.disabled && (r.disabled = !0),
                n.selected && (r.selected = !0),
                n.title && (r.title = n.title),
                u = this._normalizeItem(n),
                u.element = r,
                t.StoreData(r, "data", u),
                i(r)
            }
            ,
            r.prototype.item = function(n) {
                var r = {}, u, s, h;
                if (null != (r = t.GetData(n[0], "data")))
                    return r;
                if (u = n[0],
                "option" === u.tagName.toLowerCase())
                    r = {
                        id: n.val(),
                        text: n.text(),
                        disabled: n.prop("disabled"),
                        selected: n.prop("selected"),
                        title: n.prop("title")
                    };
                else if ("optgroup" === u.tagName.toLowerCase()) {
                    r = {
                        text: n.prop("label"),
                        children: [],
                        title: n.prop("title")
                    };
                    for (var e = n.children("option"), o = [], f = 0; f < e.length; f++)
                        s = i(e[f]),
                        h = this.item(s),
                        o.push(h);
                    r.children = o
                }
                return (r = this._normalizeItem(r)).element = n[0],
                t.StoreData(n[0], "data", r),
                r
            }
            ,
            r.prototype._normalizeItem = function(n) {
                return n !== Object(n) && (n = {
                    id: n,
                    text: n
                }),
                null != (n = i.extend({}, {
                    text: ""
                }, n)).id && (n.id = n.id.toString()),
                null != n.text && (n.text = n.text.toString()),
                null == n._resultId && n.id && null != this.container && (n._resultId = this.generateResultId(this.container, n)),
                i.extend({}, {
                    selected: !1,
                    disabled: !1
                }, n)
            }
            ,
            r.prototype.matches = function(n, t) {
                return this.options.get("matcher")(n, t)
            }
            ,
            r
        }),
        t.define("select2/data/array", ["./select", "../utils", "jquery"], function(n, t, i) {
            function r(n, t) {
                this._dataToConvert = t.get("data") || [];
                r.__super__.constructor.call(this, n, t)
            }
            return t.Extend(r, n),
            r.prototype.bind = function(n, t) {
                r.__super__.bind.call(this, n, t);
                this.addOptions(this.convertToOptions(this._dataToConvert))
            }
            ,
            r.prototype.select = function(n) {
                var t = this.$element.find("option").filter(function(t, i) {
                    return i.value == n.id.toString()
                });
                0 === t.length && (t = this.option(n),
                this.addOptions(t));
                r.__super__.select.call(this, n)
            }
            ,
            r.prototype.convertToOptions = function(n) {
                function l(n) {
                    return function() {
                        return i(this).val() == n.id
                    }
                }
                for (var t, u, s, h = this, f = this.$element.find("option"), c = f.map(function() {
                    return h.item(i(this)).id
                }).get(), e = [], r = 0; r < n.length; r++)
                    if (t = this._normalizeItem(n[r]),
                    0 <= c.indexOf(t.id)) {
                        var o = f.filter(l(t))
                          , a = this.item(o)
                          , v = i.extend(!0, {}, t, a)
                          , y = this.option(v);
                        o.replaceWith(y)
                    } else
                        u = this.option(t),
                        t.children && (s = this.convertToOptions(t.children),
                        u.append(s)),
                        e.push(u);
                return e
            }
            ,
            r
        }),
        t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(n, t, i) {
            function r(n, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax"));
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults);
                r.__super__.constructor.call(this, n, t)
            }
            return t.Extend(r, n),
            r.prototype._applyDefaults = function(n) {
                var t = {
                    data: function(n) {
                        return i.extend({}, n, {
                            q: n.term
                        })
                    },
                    transport: function(n, t, r) {
                        var u = i.ajax(n);
                        return u.then(t),
                        u.fail(r),
                        u
                    }
                };
                return i.extend({}, t, n, !0)
            }
            ,
            r.prototype.processResults = function(n) {
                return n
            }
            ,
            r.prototype.query = function(n, t) {
                function f() {
                    var i = r.transport(r, function(i) {
                        var r = u.processResults(i, n);
                        u.options.get("debug") && window.console && console.error && (r && r.results && Array.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                        t(r)
                    }, function() {
                        "status"in i && (0 === i.status || "0" === i.status) || u.trigger("results:message", {
                            message: "errorLoading"
                        })
                    });
                    u._request = i
                }
                var u = this, r;
                null != this._request && (i.isFunction(this._request.abort) && this._request.abort(),
                this._request = null);
                r = i.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof r.url && (r.url = r.url.call(this.$element, n));
                "function" == typeof r.data && (r.data = r.data.call(this.$element, n));
                this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(f, this.ajaxOptions.delay)) : f()
            }
            ,
            r
        }),
        t.define("select2/data/tags", ["jquery"], function(n) {
            function t(n, t, i) {
                var u = i.get("tags"), e = i.get("createTag"), f, r;
                if (void 0 !== e && (this.createTag = e),
                f = i.get("insertTag"),
                void 0 !== f && (this.insertTag = f),
                n.call(this, t, i),
                Array.isArray(u))
                    for (r = 0; r < u.length; r++) {
                        var o = u[r]
                          , s = this._normalizeItem(o)
                          , h = this.option(s);
                        this.$element.append(h)
                    }
            }
            return t.prototype.query = function(n, t, i) {
                var r = this;
                this._removeOldTags();
                null != t.term && null == t.page ? n.call(this, t, function n(u, f) {
                    for (var s, l, h, c, e = u.results, o = 0; o < e.length; o++)
                        if (s = e[o],
                        l = null != s.children && !n({
                            results: s.children
                        }, !0),
                        (s.text || "").toUpperCase() === (t.term || "").toUpperCase() || l)
                            return !f && (u.data = e,
                            void i(u));
                    if (f)
                        return !0;
                    h = r.createTag(t);
                    null != h && (c = r.option(h),
                    c.attr("data-select2-tag", !0),
                    r.addOptions([c]),
                    r.insertTag(e, h));
                    u.results = e;
                    i(u)
                }) : n.call(this, t, i)
            }
            ,
            t.prototype.createTag = function(n, t) {
                if (null == t.term)
                    return null;
                var i = t.term.trim();
                return "" === i ? null : {
                    id: i,
                    text: i
                }
            }
            ,
            t.prototype.insertTag = function(n, t, i) {
                t.unshift(i)
            }
            ,
            t.prototype._removeOldTags = function() {
                this.$element.find("option[data-select2-tag]").each(function() {
                    this.selected || n(this).remove()
                })
            }
            ,
            t
        }),
        t.define("select2/data/tokenizer", ["jquery"], function(n) {
            function t(n, t, i) {
                var r = i.get("tokenizer");
                void 0 !== r && (this.tokenizer = r);
                n.call(this, t, i)
            }
            return t.prototype.bind = function(n, t, i) {
                n.call(this, t, i);
                this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
            }
            ,
            t.prototype.query = function(t, i, r) {
                var u = this, f;
                i.term = i.term || "";
                f = this.tokenizer(i, this.options, function(t) {
                    var f, i = u._normalizeItem(t), r;
                    u.$element.find("option").filter(function() {
                        return n(this).val() === i.id
                    }).length || (r = u.option(i),
                    r.attr("data-select2-tag", !0),
                    u._removeOldTags(),
                    u.addOptions([r]));
                    f = i;
                    u.trigger("select", {
                        data: f
                    })
                });
                f.term !== i.term && (this.$search.length && (this.$search.val(f.term),
                this.$search.trigger("focus")),
                i.term = f.term);
                t.call(this, i, r)
            }
            ,
            t.prototype.tokenizer = function(t, i, r, u) {
                for (var s, h, o, c = r.get("tokenSeparators") || [], e = i.term, f = 0, l = this.createTag || function(n) {
                    return {
                        id: n.term,
                        text: n.term
                    }
                }
                ; f < e.length; )
                    s = e[f],
                    -1 !== c.indexOf(s) ? (h = e.substr(0, f),
                    o = l(n.extend({}, i, {
                        term: h
                    })),
                    null != o ? (u(o),
                    e = e.substr(f + 1) || "",
                    f = 0) : f++) : f++;
                return {
                    term: e
                }
            }
            ,
            t
        }),
        t.define("select2/data/minimumInputLength", [], function() {
            function n(n, t, i) {
                this.minimumInputLength = i.get("minimumInputLength");
                n.call(this, t, i)
            }
            return n.prototype.query = function(n, t, i) {
                t.term = t.term || "";
                t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : n.call(this, t, i)
            }
            ,
            n
        }),
        t.define("select2/data/maximumInputLength", [], function() {
            function n(n, t, i) {
                this.maximumInputLength = i.get("maximumInputLength");
                n.call(this, t, i)
            }
            return n.prototype.query = function(n, t, i) {
                t.term = t.term || "";
                0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : n.call(this, t, i)
            }
            ,
            n
        }),
        t.define("select2/data/maximumSelectionLength", [], function() {
            function n(n, t, i) {
                this.maximumSelectionLength = i.get("maximumSelectionLength");
                n.call(this, t, i)
            }
            return n.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("select", function() {
                    r._checkIfMaximumSelected()
                })
            }
            ,
            n.prototype.query = function(n, t, i) {
                var r = this;
                this._checkIfMaximumSelected(function() {
                    n.call(r, t, i)
                })
            }
            ,
            n.prototype._checkIfMaximumSelected = function(n, t) {
                var i = this;
                this.current(function(n) {
                    var r = null != n ? n.length : 0;
                    0 < i.maximumSelectionLength && r >= i.maximumSelectionLength ? i.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: i.maximumSelectionLength
                        }
                    }) : t && t()
                })
            }
            ,
            n
        }),
        t.define("select2/dropdown", ["jquery", "./utils"], function(n, t) {
            function i(n, t) {
                this.$element = n;
                this.options = t;
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var t = n('<span class="select2-dropdown"><span class="select2-results"><\/span><\/span>');
                return t.attr("dir", this.options.get("dir")),
                this.$dropdown = t
            }
            ,
            i.prototype.bind = function() {}
            ,
            i.prototype.position = function() {}
            ,
            i.prototype.destroy = function() {
                this.$dropdown.remove()
            }
            ,
            i
        }),
        t.define("select2/dropdown/search", ["jquery"], function(n) {
            function t() {}
            return t.prototype.render = function(t) {
                var r = t.call(this)
                  , i = n('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /><\/span>');
                return this.$searchContainer = i,
                this.$search = i.find("input"),
                this.$search.prop("autocomplete", this.options.get("autocomplete")),
                r.prepend(i),
                r
            }
            ,
            t.prototype.bind = function(t, i, r) {
                var u = this
                  , f = i.id + "-results";
                t.call(this, i, r);
                this.$search.on("keydown", function(n) {
                    u.trigger("keypress", n);
                    u._keyUpPrevented = n.isDefaultPrevented()
                });
                this.$search.on("input", function() {
                    n(this).off("keyup")
                });
                this.$search.on("keyup input", function(n) {
                    u.handleSearch(n)
                });
                i.on("open", function() {
                    u.$search.attr("tabindex", 0);
                    u.$search.attr("aria-controls", f);
                    u.$search.trigger("focus");
                    window.setTimeout(function() {
                        u.$search.trigger("focus")
                    }, 0)
                });
                i.on("close", function() {
                    u.$search.attr("tabindex", -1);
                    u.$search.removeAttr("aria-controls");
                    u.$search.removeAttr("aria-activedescendant");
                    u.$search.val("");
                    u.$search.trigger("blur")
                });
                i.on("focus", function() {
                    i.isOpen() || u.$search.trigger("focus")
                });
                i.on("results:all", function(n) {
                    null != n.query.term && "" !== n.query.term || (u.showSearch(n) ? u.$searchContainer[0].classList.remove("select2-search--hide") : u.$searchContainer[0].classList.add("select2-search--hide"))
                });
                i.on("results:focus", function(n) {
                    n.data._resultId ? u.$search.attr("aria-activedescendant", n.data._resultId) : u.$search.removeAttr("aria-activedescendant")
                })
            }
            ,
            t.prototype.handleSearch = function() {
                if (!this._keyUpPrevented) {
                    var n = this.$search.val();
                    this.trigger("query", {
                        term: n
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            t.prototype.showSearch = function() {
                return !0
            }
            ,
            t
        }),
        t.define("select2/dropdown/hidePlaceholder", [], function() {
            function n(n, t, i, r) {
                this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                n.call(this, t, i, r)
            }
            return n.prototype.append = function(n, t) {
                t.results = this.removePlaceholder(t.results);
                n.call(this, t)
            }
            ,
            n.prototype.normalizePlaceholder = function(n, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            n.prototype.removePlaceholder = function(n, t) {
                for (var u, r = t.slice(0), i = t.length - 1; 0 <= i; i--)
                    u = t[i],
                    this.placeholder.id === u.id && r.splice(i, 1);
                return r
            }
            ,
            n
        }),
        t.define("select2/dropdown/infiniteScroll", ["jquery"], function(n) {
            function t(n, t, i, r) {
                this.lastParams = {};
                n.call(this, t, i, r);
                this.$loadingMore = this.createLoadingMore();
                this.loading = !1
            }
            return t.prototype.append = function(n, t) {
                this.$loadingMore.remove();
                this.loading = !1;
                n.call(this, t);
                this.showLoadingMore(t) && (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded())
            }
            ,
            t.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("query", function(n) {
                    r.lastParams = n;
                    r.loading = !0
                });
                t.on("query:append", function(n) {
                    r.lastParams = n;
                    r.loading = !0
                });
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
            }
            ,
            t.prototype.loadMoreIfNeeded = function() {
                var i = n.contains(document.documentElement, this.$loadingMore[0]), t;
                !this.loading && i && (t = this.$results.offset().top + this.$results.outerHeight(!1),
                this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore())
            }
            ,
            t.prototype.loadMore = function() {
                this.loading = !0;
                var t = n.extend({}, {
                    page: 1
                }, this.lastParams);
                t.page++;
                this.trigger("query:append", t)
            }
            ,
            t.prototype.showLoadingMore = function(n, t) {
                return t.pagination && t.pagination.more
            }
            ,
            t.prototype.createLoadingMore = function() {
                var t = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"><\/li>')
                  , i = this.options.get("translations").get("loadingMore");
                return t.html(i(this.lastParams)),
                t
            }
            ,
            t
        }),
        t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(n, t) {
            function i(t, i, r) {
                this.$dropdownParent = n(r.get("dropdownParent") || document.body);
                t.call(this, i, r)
            }
            return i.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("open", function() {
                    r._showDropdown();
                    r._attachPositioningHandler(t);
                    r._bindContainerResultHandlers(t)
                });
                t.on("close", function() {
                    r._hideDropdown();
                    r._detachPositioningHandler(t)
                });
                this.$dropdownContainer.on("mousedown", function(n) {
                    n.stopPropagation()
                })
            }
            ,
            i.prototype.destroy = function(n) {
                n.call(this);
                this.$dropdownContainer.remove()
            }
            ,
            i.prototype.position = function(n, t, i) {
                t.attr("class", i.attr("class"));
                t[0].classList.remove("select2");
                t[0].classList.add("select2-container--open");
                t.css({
                    position: "absolute",
                    top: -999999
                });
                this.$container = i
            }
            ,
            i.prototype.render = function(t) {
                var i = n("<span><\/span>")
                  , r = t.call(this);
                return i.append(r),
                this.$dropdownContainer = i
            }
            ,
            i.prototype._hideDropdown = function() {
                this.$dropdownContainer.detach()
            }
            ,
            i.prototype._bindContainerResultHandlers = function(n, t) {
                if (!this._containerResultsHandlersBound) {
                    var i = this;
                    t.on("results:all", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    t.on("results:append", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    t.on("results:message", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    t.on("select", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    t.on("unselect", function() {
                        i._positionDropdown();
                        i._resizeDropdown()
                    });
                    this._containerResultsHandlersBound = !0
                }
            }
            ,
            i.prototype._attachPositioningHandler = function(i, r) {
                var u = this
                  , f = "scroll.select2." + r.id
                  , o = "resize.select2." + r.id
                  , s = "orientationchange.select2." + r.id
                  , e = this.$container.parents().filter(t.hasScroll);
                e.each(function() {
                    t.StoreData(this, "select2-scroll-position", {
                        x: n(this).scrollLeft(),
                        y: n(this).scrollTop()
                    })
                });
                e.on(f, function() {
                    var i = t.GetData(this, "select2-scroll-position");
                    n(this).scrollTop(i.y)
                });
                n(window).on(f + " " + o + " " + s, function() {
                    u._positionDropdown();
                    u._resizeDropdown()
                })
            }
            ,
            i.prototype._detachPositioningHandler = function(i, r) {
                var u = "scroll.select2." + r.id
                  , f = "resize.select2." + r.id
                  , e = "orientationchange.select2." + r.id;
                this.$container.parents().filter(t.hasScroll).off(u);
                n(window).off(u + " " + f + " " + e)
            }
            ,
            i.prototype._positionDropdown = function() {
                var s = n(window), e = this.$dropdown[0].classList.contains("select2-dropdown--above"), a = this.$dropdown[0].classList.contains("select2-dropdown--below"), t = null, i = this.$container.offset(), r, f;
                i.bottom = i.top + this.$container.outerHeight(!1);
                r = {
                    height: this.$container.outerHeight(!1)
                };
                r.top = i.top;
                r.bottom = i.top + r.height;
                var h = this.$dropdown.outerHeight(!1)
                  , v = s.scrollTop()
                  , y = s.scrollTop() + s.height()
                  , c = v < i.top - h
                  , l = y > i.bottom + h
                  , o = {
                    left: i.left,
                    top: r.bottom
                }
                  , u = this.$dropdownParent;
                "static" === u.css("position") && (u = u.offsetParent());
                f = {
                    top: 0,
                    left: 0
                };
                (n.contains(document.body, u[0]) || u[0].isConnected) && (f = u.offset());
                o.top -= f.top;
                o.left -= f.left;
                e || a || (t = "below");
                l || !c || e ? !c && l && e && (t = "below") : t = "above";
                ("above" == t || e && "below" !== t) && (o.top = r.top - f.top - h);
                null != t && (this.$dropdown[0].classList.remove("select2-dropdown--below"),
                this.$dropdown[0].classList.remove("select2-dropdown--above"),
                this.$dropdown[0].classList.add("select2-dropdown--" + t),
                this.$container[0].classList.remove("select2-container--below"),
                this.$container[0].classList.remove("select2-container--above"),
                this.$container[0].classList.add("select2-container--" + t));
                this.$dropdownContainer.css(o)
            }
            ,
            i.prototype._resizeDropdown = function() {
                var n = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (n.minWidth = n.width,
                n.position = "relative",
                n.width = "auto");
                this.$dropdown.css(n)
            }
            ,
            i.prototype._showDropdown = function() {
                this.$dropdownContainer.appendTo(this.$dropdownParent);
                this._positionDropdown();
                this._resizeDropdown()
            }
            ,
            i
        }),
        t.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function n(n, t, i, r) {
                this.minimumResultsForSearch = i.get("minimumResultsForSearch");
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0);
                n.call(this, t, i, r)
            }
            return n.prototype.showSearch = function(n, t) {
                return !(function n(t) {
                    for (var u, i = 0, r = 0; r < t.length; r++)
                        u = t[r],
                        u.children ? i += n(u.children) : i++;
                    return i
                }(t.data.results) < this.minimumResultsForSearch) && n.call(this, t)
            }
            ,
            n
        }),
        t.define("select2/dropdown/selectOnClose", ["../utils"], function(n) {
            function t() {}
            return t.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("close", function(n) {
                    r._handleSelectOnClose(n)
                })
            }
            ,
            t.prototype._handleSelectOnClose = function(t, i) {
                var u, f, r;
                i && null != i.originalSelect2Event && (u = i.originalSelect2Event,
                "select" === u._type || "unselect" === u._type) || (f = this.getHighlightedResults(),
                f.length < 1 || (r = n.GetData(f[0], "data"),
                null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                    data: r
                })))
            }
            ,
            t
        }),
        t.define("select2/dropdown/closeOnSelect", [], function() {
            function n() {}
            return n.prototype.bind = function(n, t, i) {
                var r = this;
                n.call(this, t, i);
                t.on("select", function(n) {
                    r._selectTriggered(n)
                });
                t.on("unselect", function(n) {
                    r._selectTriggered(n)
                })
            }
            ,
            n.prototype._selectTriggered = function(n, t) {
                var i = t.originalEvent;
                i && (i.ctrlKey || i.metaKey) || this.trigger("close", {
                    originalEvent: i,
                    originalSelect2Event: t
                })
            }
            ,
            n
        }),
        t.define("select2/dropdown/dropdownCss", ["../utils"], function(n) {
            function t() {}
            return t.prototype.render = function(t) {
                var r = t.call(this)
                  , i = this.options.get("dropdownCssClass") || "";
                return -1 !== i.indexOf(":all:") && (i = i.replace(":all:", ""),
                n.copyNonInternalCssClasses(r[0], this.$element[0])),
                r.addClass(i),
                r
            }
            ,
            t
        }),
        t.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(n) {
                    var t = n.input.length - n.maximum
                      , i = "Please delete " + t + " character";
                    return 1 != t && (i += "s"),
                    i
                },
                inputTooShort: function(n) {
                    return "Please enter " + (n.minimum - n.input.length) + " or more characters"
                },
                loadingMore: function() {
                    return "Loading more results…"
                },
                maximumSelected: function(n) {
                    var t = "You can only select " + n.maximum + " item";
                    return 1 != n.maximum && (t += "s"),
                    t
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching…"
                },
                removeAllItems: function() {
                    return "Remove all items"
                },
                removeItem: function() {
                    return "Remove item"
                }
            }
        }),
        t.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./i18n/en"], function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot) {
            function st() {
                this.reset()
            }
            return st.prototype.apply = function(c) {
                var ct, l, st, ht;
                for ((null == (c = n.extend(!0, {}, this.defaults, c)).dataAdapter && (c.dataAdapter = null != c.ajax ? y : null != c.data ? v : a,
                0 < c.minimumInputLength && (c.dataAdapter = h.Decorate(c.dataAdapter, b)),
                0 < c.maximumInputLength && (c.dataAdapter = h.Decorate(c.dataAdapter, k)),
                0 < c.maximumSelectionLength && (c.dataAdapter = h.Decorate(c.dataAdapter, d)),
                c.tags && (c.dataAdapter = h.Decorate(c.dataAdapter, p)),
                null == c.tokenSeparators && null == c.tokenizer || (c.dataAdapter = h.Decorate(c.dataAdapter, w))),
                null == c.resultsAdapter && (c.resultsAdapter = t,
                null != c.ajax && (c.resultsAdapter = h.Decorate(c.resultsAdapter, it)),
                null != c.placeholder && (c.resultsAdapter = h.Decorate(c.resultsAdapter, tt)),
                c.selectOnClose && (c.resultsAdapter = h.Decorate(c.resultsAdapter, ft))),
                null == c.dropdownAdapter) && (c.multiple ? c.dropdownAdapter = g : (ct = h.Decorate(g, nt),
                c.dropdownAdapter = ct),
                0 !== c.minimumResultsForSearch && (c.dropdownAdapter = h.Decorate(c.dropdownAdapter, ut)),
                c.closeOnSelect && (c.dropdownAdapter = h.Decorate(c.dropdownAdapter, et)),
                null != c.dropdownCssClass && (c.dropdownAdapter = h.Decorate(c.dropdownAdapter, ot)),
                c.dropdownAdapter = h.Decorate(c.dropdownAdapter, rt)),
                null == c.selectionAdapter && (c.selectionAdapter = c.multiple ? r : i,
                null != c.placeholder && (c.selectionAdapter = h.Decorate(c.selectionAdapter, u)),
                c.allowClear && (c.selectionAdapter = h.Decorate(c.selectionAdapter, f)),
                c.multiple && (c.selectionAdapter = h.Decorate(c.selectionAdapter, e)),
                null != c.selectionCssClass && (c.selectionAdapter = h.Decorate(c.selectionAdapter, o)),
                c.selectionAdapter = h.Decorate(c.selectionAdapter, s)),
                c.language = this._resolveLanguage(c.language),
                c.language.push("en"),
                l = [],
                st = 0; st < c.language.length; st++)
                    ht = c.language[st],
                    -1 === l.indexOf(ht) && l.push(ht);
                return c.language = l,
                c.translations = this._processTranslations(c.language, c.debug),
                c
            }
            ,
            st.prototype.reset = function() {
                function t(n) {
                    return n.replace(/[^\u0000-\u007E]/g, function(n) {
                        return l[n] || n
                    })
                }
                this.defaults = {
                    amdLanguageBase: "./i18n/",
                    autocomplete: "off",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: h.escapeMarkup,
                    language: {},
                    matcher: function i(r, u) {
                        var f, e, o, s;
                        if (null == r.term || "" === r.term.trim())
                            return u;
                        if (u.children && 0 < u.children.length) {
                            for (f = n.extend(!0, {}, u),
                            e = u.children.length - 1; 0 <= e; e--)
                                null == i(r, u.children[e]) && f.children.splice(e, 1);
                            return 0 < f.children.length ? f : i(r, f)
                        }
                        return o = t(u.text).toUpperCase(),
                        s = t(r.term).toUpperCase(),
                        -1 < o.indexOf(s) ? u : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function(n) {
                        return n
                    },
                    templateResult: function(n) {
                        return n.text
                    },
                    templateSelection: function(n) {
                        return n.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }
            ,
            st.prototype.applyFromElement = function(n, t) {
                var i = n.language
                  , r = this.defaults.language
                  , u = t.prop("lang")
                  , f = t.closest("[lang]").prop("lang")
                  , e = Array.prototype.concat.call(this._resolveLanguage(u), this._resolveLanguage(i), this._resolveLanguage(r), this._resolveLanguage(f));
                return n.language = e,
                n
            }
            ,
            st.prototype._resolveLanguage = function(t) {
                var r, u, i, f;
                if (!t)
                    return [];
                if (n.isEmptyObject(t))
                    return [];
                if (n.isPlainObject(t))
                    return [t];
                for (r = Array.isArray(t) ? t : [t],
                u = [],
                i = 0; i < r.length; i++)
                    (u.push(r[i]),
                    "string" == typeof r[i] && 0 < r[i].indexOf("-")) && (f = r[i].split("-")[0],
                    u.push(f));
                return u
            }
            ,
            st.prototype._processTranslations = function(t, i) {
                for (var u, r, e = new c, f = 0; f < t.length; f++) {
                    if (u = new c,
                    r = t[f],
                    "string" == typeof r)
                        try {
                            u = c.loadPath(r)
                        } catch (t) {
                            try {
                                r = this.defaults.amdLanguageBase + r;
                                u = c.loadPath(r)
                            } catch (t) {
                                i && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.')
                            }
                        }
                    else
                        u = n.isPlainObject(r) ? new c(r) : r;
                    e.extend(u)
                }
                return e
            }
            ,
            st.prototype.set = function(t, i) {
                var r = {}, u;
                r[n.camelCase(t)] = i;
                u = h._convertData(r);
                n.extend(!0, this.defaults, u)
            }
            ,
            new st
        }),
        t.define("select2/options", ["jquery", "./defaults", "./utils"], function(n, t, i) {
            function r(n, i) {
                this.options = n;
                null != i && this.fromElement(i);
                null != i && (this.options = t.applyFromElement(this.options, i));
                this.options = t.apply(this.options)
            }
            return r.prototype.fromElement = function(t) {
                function a(n, t) {
                    return t.toUpperCase()
                }
                var l = ["select2"], u, e, s, o, h, c, f, r;
                for (null == this.options.multiple && (this.options.multiple = t.prop("multiple")),
                null == this.options.disabled && (this.options.disabled = t.prop("disabled")),
                null == this.options.autocomplete && t.prop("autocomplete") && (this.options.autocomplete = t.prop("autocomplete")),
                null == this.options.dir && (this.options.dir = t.prop("dir") ? t.prop("dir") : t.closest("[dir]").prop("dir") ? t.closest("[dir]").prop("dir") : "ltr"),
                t.prop("disabled", this.options.disabled),
                t.prop("multiple", this.options.multiple),
                i.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                i.StoreData(t[0], "data", i.GetData(t[0], "select2Tags")),
                i.StoreData(t[0], "tags", !0)),
                i.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                t.attr("ajax--url", i.GetData(t[0], "ajaxUrl")),
                i.StoreData(t[0], "ajax-Url", i.GetData(t[0], "ajaxUrl"))),
                u = {},
                e = 0; e < t[0].attributes.length; e++)
                    s = t[0].attributes[e].name,
                    o = "data-",
                    s.substr(0, o.length) == o && (h = s.substring(o.length),
                    c = i.GetData(t[0], h),
                    u[h.replace(/-([a-z])/g, a)] = c);
                n.fn.jquery && "1." == n.fn.jquery.substr(0, 2) && t[0].dataset && (u = n.extend(!0, {}, t[0].dataset, u));
                f = n.extend(!0, {}, i.GetData(t[0]), u);
                for (r in f = i._convertData(f))
                    -1 < l.indexOf(r) || (n.isPlainObject(this.options[r]) ? n.extend(this.options[r], f[r]) : this.options[r] = f[r]);
                return this
            }
            ,
            r.prototype.get = function(n) {
                return this.options[n]
            }
            ,
            r.prototype.set = function(n, t) {
                this.options[n] = t
            }
            ,
            r
        }),
        t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(n, t, i, r) {
            var u = function(n, r) {
                var e, o, f, s, h, c, l;
                null != i.GetData(n[0], "select2") && i.GetData(n[0], "select2").destroy();
                this.$element = n;
                this.id = this._generateId(n);
                r = r || {};
                this.options = new t(r,n);
                u.__super__.constructor.call(this);
                e = n.attr("tabindex") || 0;
                i.StoreData(n[0], "old-tabindex", e);
                n.attr("tabindex", "-1");
                o = this.options.get("dataAdapter");
                this.dataAdapter = new o(n,this.options);
                f = this.render();
                this._placeContainer(f);
                s = this.options.get("selectionAdapter");
                this.selection = new s(n,this.options);
                this.$selection = this.selection.render();
                this.selection.position(this.$selection, f);
                h = this.options.get("dropdownAdapter");
                this.dropdown = new h(n,this.options);
                this.$dropdown = this.dropdown.render();
                this.dropdown.position(this.$dropdown, f);
                c = this.options.get("resultsAdapter");
                this.results = new c(n,this.options,this.dataAdapter);
                this.$results = this.results.render();
                this.results.position(this.$results, this.$dropdown);
                l = this;
                this._bindAdapters();
                this._registerDomEvents();
                this._registerDataEvents();
                this._registerSelectionEvents();
                this._registerDropdownEvents();
                this._registerResultsEvents();
                this._registerEvents();
                this.dataAdapter.current(function(n) {
                    l.trigger("selection:update", {
                        data: n
                    })
                });
                n[0].classList.add("select2-hidden-accessible");
                n.attr("aria-hidden", "true");
                this._syncAttributes();
                i.StoreData(n[0], "select2", this);
                n.data("select2", this)
            };
            return i.Extend(u, i.Observable),
            u.prototype._generateId = function(n) {
                return "select2-" + (null != n.attr("id") ? n.attr("id") : null != n.attr("name") ? n.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }
            ,
            u.prototype._placeContainer = function(n) {
                n.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && n.css("width", t)
            }
            ,
            u.prototype._resolveWidth = function(n, t) {
                var r, u, f, i;
                if ("resolve" == t)
                    return r = this._resolveWidth(n, "style"),
                    null != r ? r : this._resolveWidth(n, "element");
                if ("element" == t)
                    return u = n.outerWidth(!1),
                    u <= 0 ? "auto" : u + "px";
                if ("style" != t)
                    return "computedstyle" != t ? t : window.getComputedStyle(n[0]).width;
                if (f = n.attr("style"),
                "string" != typeof f)
                    return null;
                for (var o = f.split(";"), e = 0, s = o.length; e < s; e += 1)
                    if (i = o[e].replace(/\s/g, "").match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),
                    null !== i && 1 <= i.length)
                        return i[1];
                return null
            }
            ,
            u.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container);
                this.selection.bind(this, this.$container);
                this.dropdown.bind(this, this.$container);
                this.results.bind(this, this.$container)
            }
            ,
            u.prototype._registerDomEvents = function() {
                var n = this;
                this.$element.on("change.select2", function() {
                    n.dataAdapter.current(function(t) {
                        n.trigger("selection:update", {
                            data: t
                        })
                    })
                });
                this.$element.on("focus.select2", function(t) {
                    n.trigger("focus", t)
                });
                this._syncA = i.bind(this._syncAttributes, this);
                this._syncS = i.bind(this._syncSubtree, this);
                this._observer = new window.MutationObserver(function(t) {
                    n._syncA();
                    n._syncS(t)
                }
                );
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })
            }
            ,
            u.prototype._registerDataEvents = function() {
                var n = this;
                this.dataAdapter.on("*", function(t, i) {
                    n.trigger(t, i)
                })
            }
            ,
            u.prototype._registerSelectionEvents = function() {
                var n = this
                  , t = ["toggle", "focus"];
                this.selection.on("toggle", function() {
                    n.toggleDropdown()
                });
                this.selection.on("focus", function(t) {
                    n.focus(t)
                });
                this.selection.on("*", function(i, r) {
                    -1 === t.indexOf(i) && n.trigger(i, r)
                })
            }
            ,
            u.prototype._registerDropdownEvents = function() {
                var n = this;
                this.dropdown.on("*", function(t, i) {
                    n.trigger(t, i)
                })
            }
            ,
            u.prototype._registerResultsEvents = function() {
                var n = this;
                this.results.on("*", function(t, i) {
                    n.trigger(t, i)
                })
            }
            ,
            u.prototype._registerEvents = function() {
                var n = this;
                this.on("open", function() {
                    n.$container[0].classList.add("select2-container--open")
                });
                this.on("close", function() {
                    n.$container[0].classList.remove("select2-container--open")
                });
                this.on("enable", function() {
                    n.$container[0].classList.remove("select2-container--disabled")
                });
                this.on("disable", function() {
                    n.$container[0].classList.add("select2-container--disabled")
                });
                this.on("blur", function() {
                    n.$container[0].classList.remove("select2-container--focus")
                });
                this.on("query", function(t) {
                    n.isOpen() || n.trigger("open", {});
                    this.dataAdapter.query(t, function(i) {
                        n.trigger("results:all", {
                            data: i,
                            query: t
                        })
                    })
                });
                this.on("query:append", function(t) {
                    this.dataAdapter.query(t, function(i) {
                        n.trigger("results:append", {
                            data: i,
                            query: t
                        })
                    })
                });
                this.on("keypress", function(t) {
                    var i = t.which;
                    n.isOpen() ? i === r.ESC || i === r.TAB || i === r.UP && t.altKey ? (n.close(t),
                    t.preventDefault()) : i === r.ENTER ? (n.trigger("results:select", {}),
                    t.preventDefault()) : i === r.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}),
                    t.preventDefault()) : i === r.UP ? (n.trigger("results:previous", {}),
                    t.preventDefault()) : i === r.DOWN && (n.trigger("results:next", {}),
                    t.preventDefault()) : (i === r.ENTER || i === r.SPACE || i === r.DOWN && t.altKey) && (n.open(),
                    t.preventDefault())
                })
            }
            ,
            u.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled"));
                this.isDisabled() ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {})
            }
            ,
            u.prototype._isChangeMutation = function(n) {
                var i = this, t;
                if (n.addedNodes && 0 < n.addedNodes.length) {
                    for (t = 0; t < n.addedNodes.length; t++)
                        if (n.addedNodes[t].selected)
                            return !0
                } else {
                    if (n.removedNodes && 0 < n.removedNodes.length)
                        return !0;
                    if (Array.isArray(n))
                        return n.some(function(n) {
                            return i._isChangeMutation(n)
                        })
                }
                return !1
            }
            ,
            u.prototype._syncSubtree = function(n) {
                var t = this._isChangeMutation(n)
                  , i = this;
                t && this.dataAdapter.current(function(n) {
                    i.trigger("selection:update", {
                        data: n
                    })
                })
            }
            ,
            u.prototype.trigger = function(n, t) {
                var r = u.__super__.trigger, f = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                }, e, i;
                if ((void 0 === t && (t = {}),
                n in f) && (e = f[n],
                i = {
                    prevented: !1,
                    name: n,
                    args: t
                },
                r.call(this, e, i),
                i.prevented))
                    return void (t.prevented = !0);
                r.call(this, n, t)
            }
            ,
            u.prototype.toggleDropdown = function() {
                this.isDisabled() || (this.isOpen() ? this.close() : this.open())
            }
            ,
            u.prototype.open = function() {
                this.isOpen() || this.isDisabled() || this.trigger("query", {})
            }
            ,
            u.prototype.close = function(n) {
                this.isOpen() && this.trigger("close", {
                    originalEvent: n
                })
            }
            ,
            u.prototype.isEnabled = function() {
                return !this.isDisabled()
            }
            ,
            u.prototype.isDisabled = function() {
                return this.options.get("disabled")
            }
            ,
            u.prototype.isOpen = function() {
                return this.$container[0].classList.contains("select2-container--open")
            }
            ,
            u.prototype.hasFocus = function() {
                return this.$container[0].classList.contains("select2-container--focus")
            }
            ,
            u.prototype.focus = function() {
                this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"),
                this.trigger("focus", {}))
            }
            ,
            u.prototype.enable = function(n) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                null != n && 0 !== n.length || (n = [!0]);
                var t = !n[0];
                this.$element.prop("disabled", t)
            }
            ,
            u.prototype.data = function() {
                this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var n = [];
                return this.dataAdapter.current(function(t) {
                    n = t
                }),
                n
            }
            ,
            u.prototype.val = function(n) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                null == n || 0 === n.length)
                    return this.$element.val();
                var t = n[0];
                Array.isArray(t) && (t = t.map(function(n) {
                    return n.toString()
                }));
                this.$element.val(t).trigger("input").trigger("change")
            }
            ,
            u.prototype.destroy = function() {
                this.$container.remove();
                this._observer.disconnect();
                this._observer = null;
                this._syncA = null;
                this._syncS = null;
                this.$element.off(".select2");
                this.$element.attr("tabindex", i.GetData(this.$element[0], "old-tabindex"));
                this.$element[0].classList.remove("select2-hidden-accessible");
                this.$element.attr("aria-hidden", "false");
                i.RemoveData(this.$element[0]);
                this.$element.removeData("select2");
                this.dataAdapter.destroy();
                this.selection.destroy();
                this.dropdown.destroy();
                this.results.destroy();
                this.dataAdapter = null;
                this.selection = null;
                this.dropdown = null;
                this.results = null
            }
            ,
            u.prototype.render = function() {
                var t = n('<span class="select2 select2-container"><span class="selection"><\/span><span class="dropdown-wrapper" aria-hidden="true"><\/span><\/span>');
                return t.attr("dir", this.options.get("dir")),
                this.$container = t,
                this.$container[0].classList.add("select2-container--" + this.options.get("theme")),
                i.StoreData(t[0], "element", this.$element),
                t
            }
            ,
            u
        }),
        t.define("jquery-mousewheel", ["jquery"], function(n) {
            return n
        }),
        t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(n, t, i, r, u) {
            if (null == n.fn.select2) {
                var f = ["open", "close", "destroy"];
                n.fn.select2 = function(t) {
                    if ("object" == typeof (t = t || {}))
                        return this.each(function() {
                            var r = n.extend(!0, {}, t);
                            new i(n(this),r)
                        }),
                        this;
                    if ("string" != typeof t)
                        throw new Error("Invalid arguments for Select2: " + t);
                    var r, e = Array.prototype.slice.call(arguments, 1);
                    return this.each(function() {
                        var n = u.GetData(this, "select2");
                        null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                        r = n[t].apply(n, e)
                    }),
                    -1 < f.indexOf(t) ? this : r
                }
            }
            return null == n.fn.select2.defaults && (n.fn.select2.defaults = r),
            i
        }),
        {
            define: t.define,
            require: t.require
        }
    }()
      , i = t.require("jquery.select2");
    return n.fn.select2.amd = t,
    i
}),
function() {
    null == window.TurboGraft && (window.TurboGraft = {
        handlers: {}
    });
    TurboGraft.tgAttribute = function(n) {
        return "tg-" === n.slice(0, 3) ? "data-" + n : "data-tg-" + n
    }
    ;
    TurboGraft.getTGAttribute = function(n, t) {
        var i;
        return i = TurboGraft.tgAttribute(t),
        n.getAttribute(i) || n.getAttribute(t)
    }
    ;
    TurboGraft.removeTGAttribute = function(n, t) {
        var i;
        return i = TurboGraft.tgAttribute(t),
        n.removeAttribute(i),
        n.removeAttribute(t)
    }
    ;
    TurboGraft.hasTGAttribute = function(n, t) {
        var i;
        return i = TurboGraft.tgAttribute(t),
        n.hasAttribute(i) || n.hasAttribute(t)
    }
    ;
    TurboGraft.querySelectorAllTGAttribute = function(n, t, i) {
        var r;
        return null == i && (i = null),
        r = TurboGraft.tgAttribute(t),
        i ? n.querySelectorAll("[" + r + "=" + i + "], [" + t + "=" + i + "]") : n.querySelectorAll("[" + r + "], [" + t + "]")
    }
}
.call(this),
function() {
    window.Click = function() {
        function n(n) {
            this.event = n;
            this.event.defaultPrevented || (this._extractLink(),
            this._validForTurbolinks() && (Turbolinks.visit(this.link.href),
            this.event.preventDefault()))
        }
        return n.installHandlerLast = function(t) {
            if (!t.defaultPrevented)
                return document.removeEventListener("click", n.handle, !1),
                document.addEventListener("click", n.handle, !1)
        }
        ,
        n.handle = function(t) {
            return new n(t)
        }
        ,
        n.prototype._extractLink = function() {
            for (var n = this.event.target; n.parentNode && "A" !== n.nodeName; )
                n = n.parentNode;
            if ("A" === n.nodeName && 0 !== n.href.length)
                return this.link = new Link(n)
        }
        ,
        n.prototype._validForTurbolinks = function() {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }
        ,
        n.prototype._nonStandardClick = function() {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }
        ,
        n
    }()
}
.call(this),
function() {
    window.ComponentUrl = function() {
        function n(t) {
            if (this.original = null != t ? t : document.location.href,
            this.original.constructor === n)
                return this.original;
            this._parse()
        }
        return n.prototype.withoutHash = function() {
            return this.href.replace(this.hash, "")
        }
        ,
        n.prototype.withoutHashForIE10compatibility = function() {
            return this.withoutHash()
        }
        ,
        n.prototype.hasNoHash = function() {
            return 0 === this.hash.length
        }
        ,
        n.prototype._parse = function() {
            var n;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original,
            n = this.link,
            this.href = n.href,
            this.protocol = n.protocol,
            this.host = n.host,
            this.hostname = n.hostname,
            this.port = n.port,
            this.pathname = n.pathname,
            this.search = n.search,
            this.hash = n.hash,
            this.origin = [this.protocol, "//", this.hostname].join(""),
            0 !== this.port.length && (this.origin += ":" + this.port),
            this.relative = [this.pathname, this.search, this.hash].join(""),
            this.absolute = this.href
        }
        ,
        n
    }()
}
.call(this),
function() {
    window.CSRFToken = function() {
        function n() {}
        return n.get = function(n) {
            var t;
            return null == n && (n = document),
            {
                node: t = n.querySelector('meta[name="csrf-token"]'),
                token: null != t && "function" == typeof t.getAttribute ? t.getAttribute("content") : void 0
            }
        }
        ,
        n.update = function(n) {
            var t;
            if (null != (t = this.get()).token && null != n && t.token !== n)
                return t.node.setAttribute("content", n)
        }
        ,
        n
    }()
}
.call(this),
function() {
    TurboGraft.Document = {
        create: function(n) {
            var t;
            return /<(html|body)/i.test(n) ? (t = document.documentElement.cloneNode()).innerHTML = n : (t = document.documentElement.cloneNode(!0)).querySelector("body").innerHTML = n,
            t.head = t.querySelector("head"),
            t.body = t.querySelector("body"),
            t
        }
    }
}
.call(this),
function() {
    var t, i, n;
    t = function(n, t) {
        return n.classList.contains(t)
    }
    ;
    i = function(n) {
        return n.getAttribute("disabled") || t(n, "disabled")
    }
    ;
    n = function(n, t, i) {
        var r, u;
        if (null == i && (i = null),
        !(r = n.getAttribute("href") || n.getAttribute("action")))
            throw new Error("Turbograft developer error: You did not provide a URL ('" + urlAttribute + "' attribute) for data-tg-remote");
        return TurboGraft.getTGAttribute(n, "remote-once") && (TurboGraft.removeTGAttribute(n, "remote-once"),
        TurboGraft.removeTGAttribute(n, "tg-remote")),
        u = {
            httpRequestType: t,
            httpUrl: r,
            fullRefresh: null != TurboGraft.getTGAttribute(n, "full-refresh"),
            refreshOnSuccess: TurboGraft.getTGAttribute(n, "refresh-on-success"),
            refreshOnSuccessExcept: TurboGraft.getTGAttribute(n, "full-refresh-on-success-except"),
            refreshOnError: TurboGraft.getTGAttribute(n, "refresh-on-error"),
            refreshOnErrorExcept: TurboGraft.getTGAttribute(n, "full-refresh-on-error-except")
        },
        new TurboGraft.Remote(u,i,n)
    }
    ;
    TurboGraft.handlers.remoteMethodHandler = function(t) {
        var r, i;
        i = t.clickTarget;
        (r = TurboGraft.getTGAttribute(i, "tg-remote")) && (t.preventDefault(),
        n(i, r).submit())
    }
    ;
    TurboGraft.handlers.remoteFormHandler = function(t) {
        var r, i;
        r = (i = t.target).getAttribute("method");
        TurboGraft.hasTGAttribute(i, "tg-remote") && (t.preventDefault(),
        n(i, r, i).submit())
    }
    ,
    function(n, t, r) {
        null == r && (r = !1);
        document.addEventListener(n, function(n) {
            for (var u, r = n.target; r !== document && null != r; ) {
                if (("A" === r.nodeName || "BUTTON" === r.nodeName) && ((u = i(r)) && n.preventDefault(),
                !u))
                    return n.clickTarget = r,
                    void t(n);
                r = r.parentNode
            }
        })
    }("click", TurboGraft.handlers.remoteMethodHandler, !0);
    document.addEventListener("submit", function(n) {
        return TurboGraft.handlers.remoteFormHandler(n)
    })
}
.call(this),
function() {
    var n = function(n, i) {
        function u() {
            this.constructor = n
        }
        for (var r in i)
            t.call(i, r) && (n[r] = i[r]);
        return u.prototype = i.prototype,
        n.prototype = new u,
        n.__super__ = i.prototype,
        n
    }
      , t = {}.hasOwnProperty
      , i = [].slice;
    window.Link = function(t) {
        function r(n) {
            if (this.link = n,
            this.link.constructor === r)
                return this.link;
            this.original = this.link.href;
            r.__super__.constructor.apply(this, arguments)
        }
        return n(r, t),
        r.HTML_EXTENSIONS = ["html"],
        r.allowExtensions = function() {
            for (var t, u, n = 0, f = (u = 1 <= arguments.length ? i.call(arguments, 0) : []).length; n < f; n++)
                t = u[n],
                r.HTML_EXTENSIONS.push(t);
            return r.HTML_EXTENSIONS
        }
        ,
        r.prototype.shouldIgnore = function() {
            return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }
        ,
        r.prototype._crossOrigin = function() {
            return this.origin !== (new ComponentUrl).origin
        }
        ,
        r.prototype._anchored = function() {
            var n;
            return (this.hash && this.withoutHash()) === (n = new ComponentUrl).withoutHash() || this.href === n.href + "#"
        }
        ,
        r.prototype._nonHtml = function() {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + r.HTML_EXTENSIONS.join("|") + ")?$","g"))
        }
        ,
        r.prototype._optOut = function() {
            for (var t, n = this.link; !t && n !== document && null !== n; )
                t = null != n.getAttribute("data-no-turbolink"),
                n = n.parentNode;
            return t
        }
        ,
        r.prototype._target = function() {
            return 0 !== this.link.target.length
        }
        ,
        r
    }(ComponentUrl)
}
.call(this),
function() {
    var t, i, n;
    window.Page || (window.Page = {});
    Page.visit = function(n, t) {
        return null == t && (t = {}),
        t.reload ? window.location = n : Turbolinks.visit(n)
    }
    ;
    Page.refresh = function(n, t) {
        var u, i, r, f;
        return null == n && (n = {}),
        u = n.url ? n.url : n.queryParams ? ((i = $.param(n.queryParams)) && (i = "?" + i),
        location.pathname + i) : location.href,
        r = {
            partialReplace: !0,
            exceptKeys: n.exceptKeys,
            onlyKeys: n.onlyKeys,
            updatePushState: n.updatePushState,
            callback: t
        },
        (f = n.response) ? Turbolinks.loadPage(null, f, r) : Turbolinks.visit(u, r)
    }
    ;
    Page.open = function() {
        return window.open.apply(window, arguments)
    }
    ;
    n = [];
    Page.onReplace = function(t, r) {
        if (!t || !r)
            throw new Error("Page.onReplace: Node and callback must both be specified");
        if (!i(r))
            throw new Error("Page.onReplace: Callback must be a function");
        return n.push({
            node: t,
            callback: r
        })
    }
    ;
    i = function(n) {
        return !!(n && n.constructor && n.call && n.apply)
    }
    ;
    t = function(n, t) {
        return n.contains ? n.contains(t) : !!(n === t || n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)
    }
    ;
    document.addEventListener("page:before-partial-replace", function(i) {
        var r, e, u, f, h, c, l, o, s;
        for (o = i.data,
        s = [],
        u = 0,
        h = n.length; u < h; u++) {
            for (r = n[u],
            e = !1,
            f = 0,
            c = o.length; f < c; f++)
                if (l = o[f],
                t(l, r.node)) {
                    r.callback();
                    e = !0;
                    break
                }
            e || s.push(r)
        }
        return n = s
    });
    document.addEventListener("page:before-replace", function() {
        for (var t = 0, i = n.length; t < i; t++)
            n[t].callback();
        return n = []
    })
}
.call(this),
function() {
    var n = function(n, t) {
        return function() {
            return n.apply(t, arguments)
        }
    };
    TurboGraft.Remote = function() {
        function t(t, i, r) {
            var f, e, o, u;
            this.opts = t;
            this.onError = n(this.onError, this);
            this.onSuccess = n(this.onSuccess, this);
            this.initiator = i || r;
            this.actualRequestType = "get" === (null != (e = this.opts.httpRequestType) ? e.toLowerCase() : void 0) ? "GET" : "POST";
            this.useNativeEncoding = this.opts.useNativeEncoding;
            this.formData = this.createPayload(i);
            this.opts.refreshOnSuccess && (this.refreshOnSuccess = this.opts.refreshOnSuccess.split(" "));
            this.opts.refreshOnSuccessExcept && (this.refreshOnSuccessExcept = this.opts.refreshOnSuccessExcept.split(" "));
            this.opts.refreshOnError && (this.refreshOnError = this.opts.refreshOnError.split(" "));
            this.opts.refreshOnErrorExcept && (this.refreshOnErrorExcept = this.opts.refreshOnErrorExcept.split(" "));
            u = new XMLHttpRequest;
            "GET" === this.actualRequestType ? (o = this.formData ? this.opts.httpUrl + "?" + this.formData : this.opts.httpUrl,
            u.open(this.actualRequestType, o, !0)) : u.open(this.actualRequestType, this.opts.httpUrl, !0);
            u.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            u.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml");
            this.contentType && u.setRequestHeader("Content-Type", this.contentType);
            u.setRequestHeader("X-XHR-Referer", document.location.href);
            (f = CSRFToken.get().token) && u.setRequestHeader("X-CSRF-Token", f);
            triggerEventFor("turbograft:remote:init", this.initiator, {
                xhr: u,
                initiator: this.initiator
            });
            u.addEventListener("loadstart", function(n) {
                return function() {
                    return triggerEventFor("turbograft:remote:start", n.initiator, {
                        xhr: u
                    })
                }
            }(this));
            u.addEventListener("error", this.onError);
            u.addEventListener("load", function(n) {
                return function(t) {
                    return u.status < 400 ? n.onSuccess(t) : n.onError(t)
                }
            }(this));
            u.addEventListener("loadend", function(n) {
                return function() {
                    var t;
                    return "function" == typeof (t = n.opts).done && t.done(),
                    triggerEventFor("turbograft:remote:always", n.initiator, {
                        initiator: n.initiator,
                        xhr: u
                    })
                }
            }(this));
            this.xhr = u
        }
        return t.prototype.submit = function() {
            return this.xhr.send(this.formData)
        }
        ,
        t.prototype.createPayload = function(n) {
            var t;
            return (t = n ? this.useNativeEncoding || n.querySelectorAll("[type='file'][name]").length > 0 ? this.nativeEncodeForm(n) : this.uriEncodeForm(n) : "")instanceof FormData || (this.contentType = "application/x-www-form-urlencoded; charset=UTF-8",
            -1 === t.indexOf("_method") && this.opts.httpRequestType && "GET" !== this.actualRequestType && (t = this.formAppend(t, "_method", this.opts.httpRequestType))),
            t
        }
        ,
        t.prototype.formAppend = function(n, t, i) {
            return n.length && (n += "&"),
            n + (encodeURIComponent(t) + "=") + encodeURIComponent(i)
        }
        ,
        t.prototype.uriEncodeForm = function(n) {
            var t;
            return t = "",
            this._iterateOverFormInputs(n, function(n) {
                return function(i) {
                    return t = n.formAppend(t, i.name, i.value)
                }
            }(this)),
            t
        }
        ,
        t.prototype.formDataAppend = function(n, t) {
            var r, i, u, f;
            if ("file" === t.type)
                for (i = 0,
                u = (f = t.files).length; i < u; i++)
                    r = f[i],
                    n.append(t.name, r);
            else
                n.append(t.name, t.value);
            return n
        }
        ,
        t.prototype.nativeEncodeForm = function(n) {
            var t;
            return t = new FormData,
            this._iterateOverFormInputs(n, function(n) {
                return function(i) {
                    return t = n.formDataAppend(t, i)
                }
            }(this)),
            t
        }
        ,
        t.prototype._iterateOverFormInputs = function(n, t) {
            var r, i, e, o, s, f, u;
            for (u = [],
            r = 0,
            s = (o = this._enabledInputs(n)).length; r < s; r++)
                e = !(i = o[r]).disabled,
                f = "checkbox" === i.type || "radio" === i.type,
                e && i.name && (f && i.checked || !f) ? u.push(t(i)) : u.push(void 0);
            return u
        }
        ,
        t.prototype._enabledInputs = function(n) {
            var t, i, e, r, o, u, f, h, c, l, s;
            if (s = "input:not([type='reset']):not([type='button']):not([type='submit']):not([type='image']), select, textarea",
            u = Array.prototype.slice.call(n.querySelectorAll(s)),
            !(i = Array.prototype.slice.call(TurboGraft.querySelectorAllTGAttribute(n, "tg-remote-noserialize"))).length)
                return u;
            for (t = i,
            r = 0,
            h = i.length; r < h; r++)
                l = i[r],
                t = t.concat(Array.prototype.slice.call(l.querySelectorAll(s)));
            for (e = [],
            f = 0,
            c = u.length; f < c; f++)
                o = u[f],
                t.indexOf(o) < 0 && e.push(o);
            return e
        }
        ,
        t.prototype.onSuccess = function(n) {
            var i, r, t;
            return "function" == typeof (i = this.opts).success && i.success(),
            t = n.target,
            triggerEventFor("turbograft:remote:success", this.initiator, {
                initiator: this.initiator,
                xhr: t
            }),
            (r = t.getResponseHeader("X-Next-Redirect")) ? void Page.visit(r, {
                reload: !0
            }) : TurboGraft.hasTGAttribute(this.initiator, "tg-remote-norefresh") ? void 0 : this.opts.fullRefresh && this.refreshOnSuccess ? Page.refresh({
                onlyKeys: this.refreshOnSuccess
            }) : this.opts.fullRefresh ? Page.refresh() : this.refreshOnSuccess ? Page.refresh({
                response: t,
                onlyKeys: this.refreshOnSuccess
            }) : this.refreshOnSuccessExcept ? Page.refresh({
                response: t,
                exceptKeys: this.refreshOnSuccessExcept
            }) : Page.refresh({
                response: t
            })
        }
        ,
        t.prototype.onError = function(n) {
            var i, t;
            return "function" == typeof (i = this.opts).fail && i.fail(),
            t = n.target,
            triggerEventFor("turbograft:remote:fail", this.initiator, {
                initiator: this.initiator,
                xhr: t
            }),
            TurboGraft.hasTGAttribute(this.initiator, "tg-remote-norefresh") ? triggerEventFor("turbograft:remote:fail:unhandled", this.initiator, {
                xhr: t
            }) : this.opts.fullRefresh && this.refreshOnError ? Page.refresh({
                onlyKeys: this.refreshOnError
            }) : this.opts.fullRefresh ? Page.refresh() : this.refreshOnError ? Page.refresh({
                response: t,
                onlyKeys: this.refreshOnError
            }) : this.refreshOnErrorExcept ? Page.refresh({
                response: t,
                exceptKeys: this.refreshOnErrorExcept
            }) : triggerEventFor("turbograft:remote:fail:unhandled", this.initiator, {
                xhr: t
            })
        }
        ,
        t
    }()
}
.call(this),
function() {
    TurboGraft.Response = function() {
        function n(n, t) {
            var i;
            this.xhr = n;
            i = t && t.withoutHash() !== this.xhr.responseURL ? this.xhr.responseURL : this.xhr.getResponseHeader("X-XHR-Redirected-To");
            this.finalURL = i || t
        }
        return n.prototype.valid = function() {
            return this.hasRenderableHttpStatus() && this.hasValidContent()
        }
        ,
        n.prototype.document = function() {
            if (this.valid())
                return TurboGraft.Document.create(this.xhr.responseText)
        }
        ,
        n.prototype.hasRenderableHttpStatus = function() {
            var n;
            return 422 === this.xhr.status || !(400 <= (n = this.xhr.status) && n < 600)
        }
        ,
        n.prototype.hasValidContent = function() {
            var n;
            if (n = this.xhr.getResponseHeader("Content-Type"))
                return n.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
            throw new Error("Error encountered for XHR Response: " + this);
        }
        ,
        n.prototype.toString = function() {
            return "URL: " + this.xhr.responseURL + ", ReadyState: " + this.xhr.readyState + ", Headers: " + this.xhr.getAllResponseHeaders()
        }
        ,
        n
    }();
    TurboGraft.location = function() {
        return location.href
    }
}
.call(this),
function() {
    var u, t, e, f, h, o, c, i, l, r, n, a, v, s, y = function(n, t) {
        return function() {
            return n.apply(t, arguments)
        }
    };
    t = "turbolinksTrack";
    u = "true";
    n = {};
    r = null;
    s = function() {
        var t;
        return t = Object.keys(n).map(function(t) {
            return n[t]
        }),
        Promise.all(t)
    }
    ;
    TurboGraft.TurboHead = function() {
        function c(n, t) {
            this.activeDocument = n;
            this.upstreamDocument = t;
            this._insertNewAssets = y(this._insertNewAssets, this);
            this.activeAssets = o(this.activeDocument);
            this.upstreamAssets = o(this.upstreamDocument);
            this.newScripts = this.upstreamAssets.filter(e("nodeName", "SCRIPT")).filter(i("src", this.activeAssets));
            this.newLinks = this.upstreamAssets.filter(e("nodeName", "LINK")).filter(i("href", this.activeAssets))
        }
        return c._testAPI = {
            reset: function() {
                return n = {},
                r = null
            }
        },
        c.prototype.hasChangedAnonymousAssets = function() {
            var r, n, e, o;
            return n = this.upstreamAssets.filter(f(t, u)),
            (r = this.activeAssets.filter(f(t, u))).length !== n.length || (o = i("src", n),
            e = i("href", n),
            r.some(function(n) {
                return o(n) || e(n)
            }))
        }
        ,
        c.prototype.movingFromTrackedToUntracked = function() {
            return 0 === this.upstreamAssets.length && this.activeAssets.length > 0
        }
        ,
        c.prototype.hasNamedAssetConflicts = function() {
            return this.newScripts.concat(this.newLinks).filter(l(t, u)).some(h(t, this.activeAssets))
        }
        ,
        c.prototype.hasAssetConflicts = function() {
            return this.movingFromTrackedToUntracked() || this.hasNamedAssetConflicts() || this.hasChangedAnonymousAssets()
        }
        ,
        c.prototype.waitForAssets = function() {
            return "function" == typeof r && r({
                isCanceled: !0
            }),
            new Promise((n = this,
            function(t) {
                return r = t,
                s().then(n._insertNewAssets).then(s).then(t)
            }
            ));
            var n
        }
        ,
        c.prototype._insertNewAssets = function() {
            return a(this.activeDocument, this.newLinks),
            v(this.activeDocument, this.newScripts)
        }
        ,
        c
    }();
    o = function(n) {
        return [].slice.call(n.querySelectorAll("[data-turbolinks-track]"))
    }
    ;
    e = function(n, t) {
        return function(i) {
            return i[n] === t
        }
    }
    ;
    i = function(n, t) {
        return function(i) {
            return !t.some(function(t) {
                return i[n] === t[n]
            })
        }
    }
    ;
    f = function(n, t) {
        return function(i) {
            return i.dataset[n] === t
        }
    }
    ;
    l = function(n, t) {
        return function(i) {
            return i.dataset[n] !== t
        }
    }
    ;
    h = function(n, t) {
        return function(i) {
            var r;
            return r = i.dataset[n],
            t.some(f(n, r))
        }
    }
    ;
    a = function(n, t) {
        return t.forEach(function(t) {
            var i;
            return i = t.cloneNode(),
            n.head.appendChild(i),
            triggerEvent("page:after-link-inserted", i)
        })
    }
    ;
    v = function(n, t) {
        var i;
        return i = Promise.resolve(),
        t.forEach(function(t) {
            return i = i.then(function() {
                return c(n, t)
            })
        }),
        i
    }
    ;
    c = function(t, i) {
        var e, u, o, r, s, f;
        if (f = i.src,
        n[f])
            return n[f];
        for (r = t.createElement("SCRIPT"),
        u = 0,
        o = (s = i.attributes).length; u < o; u++)
            e = s[u],
            r.setAttribute(e.name, e.value);
        return r.appendChild(t.createTextNode(i.innerHTML)),
        n[f] = new Promise(function(n) {
            var i;
            return i = function(t) {
                return "error" === t.type && triggerEvent("page:#script-error", t),
                r.removeEventListener("load", i),
                r.removeEventListener("error", i),
                n()
            }
            ,
            r.addEventListener("load", i),
            r.addEventListener("error", i),
            t.head.appendChild(r),
            triggerEvent("page:after-script-inserted", r)
        }
        )
    }
}
.call(this),
function() {
    var f, e, n, o, s, h, c, l, i, a, u, r, v, t;
    f = TurboGraft.Response;
    e = TurboGraft.TurboHead;
    i = window.jQuery;
    t = null;
    n = document;
    c = function() {
        return n.addEventListener("DOMContentLoaded", function() {
            return triggerEvent("page:change"),
            triggerEvent("page:update")
        }, !0)
    }
    ;
    l = function() {
        if (void 0 !== i)
            return i(n).on("ajaxSuccess", function(n, t) {
                if (i.trim(t.responseText))
                    return triggerEvent("page:update")
            })
    }
    ;
    h = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/);
    o = window.history && window.history.pushState && window.history.replaceState && h;
    window.triggerEvent = function(t, i) {
        var r;
        return r = n.createEvent("Events"),
        i && (r.data = i),
        r.initEvent(t, !0, !0),
        n.dispatchEvent(r)
    }
    ;
    window.triggerEventFor = function(t, i, r) {
        var u;
        return u = n.createEvent("Events"),
        r && (u.data = r),
        u.initEvent(t, !0, !0),
        i.dispatchEvent(u)
    }
    ;
    v = "GET" === (a = function(t) {
        var i, r;
        return r = (null != (i = n.cookie.match(new RegExp(t + "=(\\w+)"))) ? i[1].toUpperCase() : void 0) || "",
        n.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",
        r
    }("request_method")) || "" === a;
    s = o && v;
    n.addEventListener && n.createEvent && (c(),
    l());
    r = function(n, t) {
        var i;
        return i = t.parentNode.replaceChild(n, t),
        triggerEvent("page:after-node-removed", i)
    }
    ;
    u = function(n) {
        var t;
        return t = n.parentNode.removeChild(n),
        triggerEvent("page:after-node-removed", t)
    }
    ;
    window.Turbolinks = function() {
        function i() {}
        var w, b, k, d, h, g, nt, tt, it, c, rt, ut, l, ft, et, o, ot, st, a, v, ht, y, p;
        return o = null,
        nt = function(n, t) {
            if (null == t && (t = {}),
            !ft(n))
                return n = new ComponentUrl(n),
                v(),
                tt(n, t)
        }
        ,
        ut = function(n, t) {
            var i, r;
            return Boolean(t.partialReplace || (null != (i = t.onlyKeys) ? i.length : void 0) || (null != (r = t.exceptKeys) ? r.length : void 0))
        }
        ,
        i.fullPageNavigate = function(t) {
            null != t && (t = new ComponentUrl(t).absolute,
            triggerEvent("page:before-full-refresh", {
                url: t
            }),
            n.location.href = t)
        }
        ,
        i.pushState = function(n, t, i) {
            return window.history.pushState(n, t, i)
        }
        ,
        i.replaceState = function(n, t, i) {
            return window.history.replaceState(n, t, i)
        }
        ,
        i.document = function(t) {
            return t && (n = t),
            n
        }
        ,
        tt = function(n, r) {
            var u, f, e;
            for (u in triggerEvent("page:fetch", {
                url: n.absolute
            }),
            null != t && (t.readyState = 0,
            t.statusText = "abort",
            t.abort()),
            (t = new XMLHttpRequest).open("GET", n.withoutHashForIE10compatibility(), !0),
            t.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"),
            t.setRequestHeader("X-XHR-Referer", o),
            null == r.headers && (r.headers = {}),
            f = r.headers)
                e = f[u],
                t.setRequestHeader(u, e);
            t.onload = function() {
                return t.status >= 500 ? i.fullPageNavigate(n) : i.loadPage(n, t, r),
                t = null
            }
            ;
            t.onerror = function() {
                return "abort" === t.statusText ? void (t = null) : i.fullPageNavigate(n)
            }
            ;
            t.send()
        }
        ,
        i.loadPage = function(t, r, u) {
            var o, h, s;
            return null == u && (u = {}),
            triggerEvent("page:receive"),
            o = new f(r,t),
            v(),
            null == u.updatePushState && (u.updatePushState = !0),
            u.partialReplace = ut(0, u),
            (s = o.document()) ? u.partialReplace ? void p(s, o, u) : (h = new e(n,s)).hasAssetConflicts() ? i.fullPageNavigate(o.finalURL) : h.waitForAssets().then(function(n) {
                if (!(null != n ? n.isCanceled : void 0))
                    return p(s, o, u)
            }) : (triggerEvent("page:error", r),
            void i.fullPageNavigate(o.finalURL))
        }
        ,
        p = function(n, t, r) {
            var u, f;
            return u = k(null != (f = n.querySelector("title")) ? f.textContent : void 0, ht(n.querySelector("body")), CSRFToken.get(n).token, "runScripts", r),
            r.updatePushState && ot(t.finalURL),
            r.partialReplace || i.resetScrollPosition(),
            "function" == typeof r.callback && r.callback(),
            triggerEvent("page:load", u)
        }
        ,
        k = function(t, i, u, f, e) {
            var o, s, h, l;
            if (null == e && (e = {}),
            t && (n.title = t),
            null != (h = e.onlyKeys) ? h.length : void 0)
                return s = [].concat(c(), it(e.onlyKeys)),
                o = a(s, i),
                w(o) && y(),
                o;
            a(c(), i);
            et(i);
            (null != (l = e.exceptKeys) ? l.length : void 0) ? st(e.exceptKeys, i) : d(i);
            triggerEvent("page:before-replace");
            r(i, n.body);
            null != u && CSRFToken.update(u);
            y();
            f && g();
            window.history.state;
            triggerEvent("page:change");
            triggerEvent("page:update")
        }
        ,
        it = function(t) {
            var i, r, f, e, o, u, s, h;
            for (u = [],
            i = 0,
            e = t.length; i < e; i++)
                for (f = t[i],
                r = 0,
                o = (h = TurboGraft.querySelectorAllTGAttribute(n, "refresh", f)).length; r < o; r++)
                    s = h[r],
                    u.push(s);
            return u
        }
        ,
        c = function() {
            var t, r, i, u, f;
            for (i = [],
            t = 0,
            r = (f = TurboGraft.querySelectorAllTGAttribute(n, "refresh-always")).length; t < r; t++)
                u = f[t],
                i.push(u);
            return i
        }
        ,
        w = function(n) {
            for (var t = 0, i = n.length; t < i; t++)
                if (n[t].querySelectorAll("input[autofocus], textarea[autofocus]").length > 0)
                    return !0;
            return !1
        }
        ,
        y = function() {
            var t, i;
            if ((t = (i = n.querySelectorAll("input[autofocus], textarea[autofocus]"))[i.length - 1]) && n.activeElement !== t)
                return t.focus()
        }
        ,
        d = function(n) {
            for (var r, f, t = 0, i = (f = TurboGraft.querySelectorAllTGAttribute(n, "refresh-never")).length; t < i; t++)
                r = f[t],
                u(r)
        }
        ,
        a = function(n, t) {
            var f, e, s, i, c, l, o;
            for (triggerEvent("page:before-partial-replace", n),
            l = function(t) {
                for (var u, i = 0, r = n.length; i < r; i++)
                    if (t !== (u = n[i]) && u.contains(t))
                        return !0;
                return !1
            }
            ,
            o = [],
            e = 0,
            s = n.length; e < s; e++)
                if (!l(f = n[e])) {
                    if (!(c = f.getAttribute("id")))
                        throw new Error("Turbolinks refresh: Refresh key elements must have an id.");
                    (i = t.querySelector("#" + c)) ? (i = i.cloneNode(!0),
                    r(i, f),
                    "SCRIPT" === i.nodeName && "false" !== i.dataset.turbolinksEval ? h(i) : o.push(i)) : TurboGraft.hasTGAttribute(f, "refresh-always") || u(f)
                }
            return o
        }
        ,
        l = function(n, t) {
            var f, i, e, o, s, u;
            for (u = [],
            i = 0,
            e = t.length; i < e; i++) {
                if (!(o = (f = t[i]).getAttribute("id")))
                    throw new Error("TurboGraft refresh: Kept nodes must have an id.");
                (s = n.querySelector("#" + o)) ? u.push(r(f, s)) : u.push(void 0)
            }
            return u
        }
        ,
        et = function(t) {
            var r, i, u, f, e;
            for (r = [],
            i = 0,
            u = (e = TurboGraft.querySelectorAllTGAttribute(n, "tg-static")).length; i < u; i++)
                f = e[i],
                r.push(f);
            l(t, r)
        }
        ,
        st = function(t, i) {
            var f, r, u, e, o, s, h, c;
            for (f = [],
            r = 0,
            o = t.length; r < o; r++)
                for (e = t[r],
                u = 0,
                s = (c = TurboGraft.querySelectorAllTGAttribute(n, "refresh", e)).length; u < s; u++)
                    h = c[u],
                    f.push(h);
            l(i, f)
        }
        ,
        g = function() {
            for (var r, u, f, t = 0, i = (f = Array.prototype.slice.call(n.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'))).length; t < i; t++)
                "" !== (r = (u = f[t]).type) && "text/javascript" !== r || h(u)
        }
        ,
        h = function(t) {
            var u, i, r, e, o, f, s;
            for (i = n.createElement("script"),
            r = 0,
            e = (s = t.attributes).length; r < e; r++)
                u = s[r],
                i.setAttribute(u.name, u.value);
            i.appendChild(n.createTextNode(t.innerHTML));
            f = t.parentNode;
            o = t.nextSibling;
            f.removeChild(t);
            f.insertBefore(i, o)
        }
        ,
        ht = function(n) {
            return n.innerHTML = n.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""),
            n
        }
        ,
        ot = function(n) {
            (n = new ComponentUrl(n)).absolute !== o && i.pushState({
                turbolinks: !0,
                url: n.absolute
            }, "", n.absolute)
        }
        ,
        v = function() {
            return o = n.location.href
        }
        ,
        i.rememberCurrentUrl = function() {
            return i.replaceState({
                turbolinks: !0,
                url: n.location.href
            }, "", n.location.href)
        }
        ,
        i.rememberCurrentState = function() {
            return window.history.state
        }
        ,
        i.resetScrollPosition = function() {
            return n.location.hash ? n.location.href = n.location.href : window.scrollTo(0, 0)
        }
        ,
        ft = function(n) {
            return !triggerEvent("page:before-change", n)
        }
        ,
        rt = function(n) {
            var t;
            if (null != (t = n.state) ? t.turbolinks : void 0)
                return i.visit(n.target.location.href)
        }
        ,
        b = function(n) {
            return setTimeout(n, 500)
        }
        ,
        s ? (i.visit = nt,
        i.rememberCurrentUrl(),
        i.rememberCurrentState(),
        n.addEventListener("click", Click.installHandlerLast, !0),
        b(function() {
            return window.addEventListener("popstate", rt, !1)
        })) : i.visit = function(t) {
            return n.location.href = t
        }
        ,
        i
    }()
}
.call(this),
function() {
    var n = [].slice;
    (function(n, t) {
        return typeof n.define == "function" && n.define.amd ? n.define([], t) : typeof module == "object" && module.exports ? module.exports = t() : n.Twine = t()
    }
    )(this, function() {
        var t, f, k, d, ot, o, st, i, ht, c, g, nt, ct, s, lt, tt, l, a, it, v, at, vt, yt, rt, y, pt, ut, ft, p, wt, w, h, bt, r, e, b, kt, et, dt, gt, u;
        for (t = {},
        t.shouldDiscardEvent = {},
        i = {},
        h = {},
        y = 0,
        r = null,
        at = /^[a-z]\w*(\.[a-z]\w*|\[\d+\])*$/i,
        w = !1,
        p = [],
        e = null,
        o = null,
        t.getAttribute = function(n, t) {
            return n.getAttribute("data-" + t) || n.getAttribute(t)
        }
        ,
        t.reset = function(n, t) {
            var f, u, s, h, o, c;
            t == null && (t = document.documentElement);
            for (s in i)
                if (f = (c = i[s]) != null ? c.bindings : void 0)
                    for (u = 0,
                    h = f.length; u < h; u++)
                        o = f[u],
                        o.teardown && o.teardown();
            return i = {},
            r = n,
            e = t,
            e.bindingId = y = 1,
            this
        }
        ,
        t.bind = function(n, i) {
            return n == null && (n = e),
            i == null && (i = t.context(n)),
            d(i, n, ct(n), !0)
        }
        ,
        t.afterBound = function(n) {
            return o ? o.push(n) : n()
        }
        ,
        d = function(n, i, u, f) {
            var ri, et, ht, h, pt, wt, bt, p, kt, w, e, k, g, nt, l, tt, dt, gt, ni, ti, it, rt, ut, ct, at, ft, vt, yt, a, ii;
            if (o = [],
            e = null,
            i.bindingId && t.unbind(i),
            kt = t.getAttribute(i, "define-array")) {
                ut = st(i, n, kt);
                u == null && (u = {});
                for (nt in u)
                    ii = u[nt],
                    ut.hasOwnProperty(nt) || (ut[nt] = ii);
                u = ut;
                e = c(i);
                e.indexes = u
            }
            for (h = null,
            ct = i.attributes,
            k = 0,
            dt = ct.length; k < dt; k++)
                (et = ct[k],
                a = et.name,
                lt(a) && (a = a.slice(5)),
                p = t.bindingTypes[a],
                p) && (h == null && (h = []),
                w = et.value,
                h.push([a, p, w]));
            if (h)
                for (e == null && (e = c(i)),
                e.bindings == null && (e.bindings = []),
                e.indexes == null && (e.indexes = u),
                at = h.sort(ot),
                g = 0,
                gt = at.length; g < gt; g++)
                    ft = at[g],
                    ri = ft[0],
                    p = ft[1],
                    w = ft[2],
                    ht = p(i, n, w, e),
                    ht && e.bindings.push(ht);
            for ((rt = t.getAttribute(i, "context")) && (l = v(i, rt),
            l[0] === "$root" && (n = r,
            l = l.slice(1)),
            n = s(n, l) || b(n, l, {})),
            (e || rt || f) && (e == null && (e = c(i)),
            e.childContext = n,
            u != null && e.indexes == null && (e.indexes = u)),
            wt = o,
            vt = i.children || [],
            tt = 0,
            ni = vt.length; tt < ni; tt++)
                bt = vt[tt],
                d(n, bt, rt != null ? null : u);
            for (t.count = y,
            yt = wt || [],
            it = 0,
            ti = yt.length; it < ti; it++)
                pt = yt[it],
                pt();
            return o = null,
            t
        }
        ,
        c = function(n) {
            var t;
            return n.bindingId == null && (n.bindingId = ++y),
            i[t = n.bindingId] != null ? i[t] : i[t] = {}
        }
        ,
        t.refresh = function(n) {
            if (n && p.push(n),
            !w)
                return w = !0,
                setTimeout(t.refreshImmediately, 0)
        }
        ,
        wt = function(n) {
            var t, u, i, r;
            if (n.bindings)
                for (r = n.bindings,
                t = 0,
                u = r.length; t < u; t++)
                    i = r[t],
                    i.refresh != null && i.refresh()
        }
        ,
        t.refreshImmediately = function() {
            var t, r, u, n, f, e;
            w = !1;
            for (f in i)
                u = i[f],
                wt(u);
            for (t = p,
            p = [],
            n = 0,
            e = t.length; n < e; n++)
                r = t[n],
                r()
        }
        ,
        t.register = function(n, t) {
            if (h[n])
                throw new Error("Twine error: '" + n + "' is already registered with Twine");
            else
                return h[n] = t
        }
        ,
        t.change = function(n, t) {
            var i;
            return t == null && (t = !1),
            i = document.createEvent("HTMLEvents"),
            i.initEvent("change", t, !0),
            n.dispatchEvent(i)
        }
        ,
        t.unbind = function(n) {
            var f, h, e, r, u, c, l, o, a, s;
            if (e = n.bindingId) {
                if (f = (a = i[e]) != null ? a.bindings : void 0)
                    for (r = 0,
                    c = f.length; r < c; r++)
                        o = f[r],
                        o.teardown && o.teardown();
                delete i[e];
                delete n.bindingId
            }
            for (s = n.children || [],
            u = 0,
            l = s.length; u < l; u++)
                h = s[u],
                t.unbind(h);
            return this
        }
        ,
        t.context = function(n) {
            return nt(n, !1)
        }
        ,
        t.childContext = function(n) {
            return nt(n, !0)
        }
        ,
        nt = function(n, t) {
            for (var u, f, o; n; ) {
                if (n === e)
                    return r;
                if (t || (n = n.parentNode),
                !n)
                    return console.warn("Unable to find context; please check that the node is attached to the DOM that Twine has bound, or that bindings have been initiated on this node's DOM"),
                    null;
                if ((f = n.bindingId) && (u = (o = i[f]) != null ? o.childContext : void 0))
                    return u;
                t && (n = n.parentNode)
            }
        }
        ,
        ct = function(n) {
            for (var t, r, u = null; n; ) {
                if (t = n.bindingId)
                    return (r = i[t]) != null ? r.indexes : void 0;
                n = n.parentNode
            }
        }
        ,
        t.contextKey = function(n, t) {
            for (var o, s, h, f = [], u = function(n) {
                var i, r;
                for (i in n)
                    if (r = n[i],
                    t === r) {
                        f.unshift(i);
                        break
                    }
                return t = n
            }; n && n !== e && (n = n.parentNode); )
                (s = n.bindingId) && (o = (h = i[s]) != null ? h.childContext : void 0) && u(o);
            return n === e && u(r),
            f.join(".")
        }
        ,
        gt = function(n) {
            var t, i;
            return t = n.nodeName.toLowerCase(),
            t === "input" || t === "textarea" || t === "select" ? (i = n.getAttribute("type")) === "checkbox" || i === "radio" ? "checked" : "value" : "textContent"
        }
        ,
        v = function(n, t) {
            var f, r, e, i, s, o, u;
            for (i = [],
            o = t.split("."),
            r = e = 0,
            s = o.length; e < s; r = ++e)
                if (t = o[r],
                (u = t.indexOf("[")) !== -1)
                    for (r === 0 ? i.push.apply(i, it(t.substr(0, u), n)) : i.push(t.substr(0, u)),
                    t = t.substr(u); (f = t.indexOf("]")) !== -1; )
                        i.push(parseInt(t.substr(1, f), 10)),
                        t = t.substr(f + 1);
                else
                    r === 0 ? i.push.apply(i, it(t, n)) : i.push(t);
            return i
        }
        ,
        it = function(n, t) {
            var r, u, f;
            return r = (u = i[t.bindingId]) != null ? (f = u.indexes) != null ? f[n] : void 0 : void 0,
            r != null ? [n, r] : [n]
        }
        ,
        s = function(n, t) {
            for (var r, i = 0, u = t.length; i < u; i++)
                r = t[i],
                n != null && (n = n[r]);
            return n
        }
        ,
        b = function(t, i, r) {
            var o, f, e, s, h, u;
            for (u = i,
            i = 2 <= u.length ? n.call(u, 0, o = u.length - 1) : (o = 0,
            []),
            s = u[o++],
            f = 0,
            h = i.length; f < h; f++)
                e = i[f],
                t = t[e] != null ? t[e] : t[e] = {};
            return t[s] = r
        }
        ,
        dt = function(n) {
            return [].map.call(n.attributes, function(n) {
                return n.name + "=" + JSON.stringify(n.value)
            }).join(" ")
        }
        ,
        u = function(n, t, i) {
            var u, f, r;
            if (tt(n) && (r = v(i, n)))
                return r[0] === "$root" ? function(n, t) {
                    return s(t, r)
                }
                : function(n) {
                    return s(n, r)
                }
                ;
            n = "return " + n;
            rt(i) && (n = "with($arrayPointers) { " + n + " }");
            bt(t) && (n = "with($registry) { " + n + " }");
            try {
                return new Function(t,"with($context) { " + n + " }")
            } catch (f) {
                u = f;
                throw "Twine error: Unable to create function on " + i.nodeName + " node with attributes " + dt(i);
            }
        }
        ,
        bt = function(n) {
            return /\$registry/.test(n)
        }
        ,
        rt = function(n) {
            var t;
            return n.bindingId != null && ((t = i[n.bindingId]) != null ? t.indexes : void 0)
        }
        ,
        f = function(n, t) {
            var f, i, r, u;
            if (i = rt(n),
            !i)
                return {};
            u = {};
            for (r in i)
                f = i[r],
                u[r] = t[r][f];
            return u
        }
        ,
        tt = function(n) {
            return n !== "true" && n !== "false" && n !== "null" && n !== "undefined" && at.test(n)
        }
        ,
        lt = function(n) {
            return n[0] === "d" && n[1] === "a" && n[2] === "t" && n[3] === "a" && n[4] === "-"
        }
        ,
        g = function(n) {
            var t;
            return t = document.createEvent("CustomEvent"),
            t.initCustomEvent("bindings:change", !0, !1, {}),
            n.dispatchEvent(t)
        }
        ,
        ot = function(n, t) {
            var i, r, u;
            return (r = n[0],
            u = t[0],
            i = {
                define: 1,
                bind: 2,
                eval: 3
            },
            !i[r]) ? 1 : i[u] ? i[r] - i[u] : -1
        }
        ,
        t.bindingTypes = {
            bind: function(n, i, e) {
                var c, l, nt, o, a, it, y, p, w, k, d, h;
                if (h = gt(n),
                d = n[h],
                a = void 0,
                w = void 0,
                l = n.getAttribute("type") === "radio",
                nt = u(e, "$context,$root,$arrayPointers", n),
                y = function() {
                    var t;
                    if (t = nt.call(n, i, r, f(n, i)),
                    t !== a)
                        return (a = t,
                        t === n[h]) ? void 0 : (n[h] = l ? t === n.value : t,
                        g(n))
                }
                ,
                !tt(e))
                    return {
                        refresh: y
                    };
                if (p = function() {
                    return l ? n.checked ? b(i, o, n.value) : void 0 : b(i, o, n[h])
                }
                ,
                o = v(n, e),
                k = h !== "textContent" && n.type !== "hidden",
                o[0] === "$root" && (i = r,
                o = o.slice(1)),
                d != null && (k || d !== "") && (it = s(i, o)) == null && p(),
                k) {
                    c = function() {
                        if (s(i, o) !== this[h])
                            return p(),
                            t.refreshImmediately()
                    }
                    ;
                    jQuery(n).on("input keyup change", c);
                    w = function() {
                        return jQuery(n).off("input keyup change", c)
                    }
                }
                return {
                    refresh: y,
                    teardown: w
                }
            },
            "bind-show": function(n, t, i) {
                var o, e;
                return o = u(i, "$context,$root,$arrayPointers", n),
                e = void 0,
                {
                    refresh: function() {
                        var i;
                        if (i = !o.call(n, t, r, f(n, t)),
                        i !== e)
                            return jQuery(n).toggleClass("hide", e = i)
                    }
                }
            },
            "bind-class": function(n, t, i) {
                var e, s, o;
                return s = u(i, "$context,$root,$arrayPointers", n),
                o = {},
                e = jQuery(n),
                {
                    refresh: function() {
                        var h, a, i, l, u, v, c, y;
                        u = s.call(n, t, r, f(n, t));
                        h = [];
                        c = [];
                        for (i in u)
                            y = u[i],
                            l = u[i] = !!u[i],
                            a = (v = o[i]) != null ? v : e.hasClass(i),
                            a !== l && (l ? h.push(i) : c.push(i));
                        return c.length && e.removeClass(c.join(" ")),
                        h.length && e.addClass(h.join(" ")),
                        o = u
                    }
                }
            },
            "bind-attribute": function(n, t, i) {
                var o, e;
                return o = u(i, "$context,$root,$arrayPointers", n),
                e = {},
                {
                    refresh: function() {
                        var i, u, s;
                        u = o.call(n, t, r, f(n, t));
                        for (i in u)
                            s = u[i],
                            e[i] !== s && jQuery(n).attr(i, s || null);
                        return e = u
                    }
                }
            },
            define: function(n, t, i) {
                var s, e, o, c;
                s = u(i, "$context,$root,$registry,$arrayPointers", n);
                o = s.call(n, t, r, h, f(n, t));
                for (e in o)
                    c = o[e],
                    t[e] = c
            },
            eval: function(n, t, i) {
                var e;
                e = u(i, "$context,$root,$registry,$arrayPointers", n);
                e.call(n, t, r, h, f(n, t))
            }
        },
        st = function(n, t, i) {
            var s, e, f, o, h;
            s = u(i, "$context,$root", n);
            o = s.call(n, t, r);
            e = {};
            for (f in o) {
                if (h = o[f],
                t[f] == null && (t[f] = []),
                !(t[f]instanceof Array))
                    throw "Twine error: expected '" + f + "' to be an array";
                e[f] = t[f].length;
                t[f].push(h)
            }
            return e
        }
        ,
        et = function(n, i) {
            var e;
            return e = n === "checked" || n === "indeterminate" || n === "disabled" || n === "readOnly" || n === "draggable",
            t.bindingTypes["bind-" + i.toLowerCase()] = function(t, i, o) {
                var h, s;
                return h = u(o, "$context,$root,$arrayPointers", t),
                s = void 0,
                {
                    refresh: function() {
                        var u;
                        if (u = h.call(t, i, r, f(t, i)),
                        e && (u = !!u),
                        u !== s)
                            return t[n] = s = u,
                            n === "checked" ? g(t) : void 0
                    }
                }
            }
        }
        ,
        ut = ["placeholder", "checked", "indeterminate", "disabled", "href", "title", "readOnly", "src", "draggable"],
        l = 0,
        vt = ut.length; l < vt; l++)
            k = ut[l],
            et(k, k);
        for (et("innerHTML", "unsafe-html"),
        pt = function(n) {
            var i;
            return (n.type === "submit" || n.currentTarget.nodeName.toLowerCase() === "a") && ((i = t.getAttribute(n.currentTarget, "allow-default")) === "false" || i === !1 || i === 0 || i === void 0 || i === null)
        }
        ,
        kt = function(n) {
            return t.bindingTypes["bind-event-" + n] = function(i, e, o) {
                var s = function(s, h) {
                    var l, c;
                    if (c = typeof (l = t.shouldDiscardEvent)[n] == "function" ? l[n](s) : void 0,
                    (c || pt(s)) && s.preventDefault(),
                    !c)
                        return u(o, "$context,$root,$arrayPointers,event,data", i).call(i, e, r, f(i, e), s, h),
                        t.refreshImmediately()
                };
                jQuery(i).on(n, s);
                return {
                    teardown: function() {
                        return jQuery(i).off(n, s)
                    }
                }
            }
        }
        ,
        ft = ["click", "dblclick", "mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "submit", "dragenter", "dragleave", "dragover", "drop", "drag", "change", "keypress", "keydown", "keyup", "input", "error", "done", "success", "fail", "blur", "focus", "load", "paste"],
        a = 0,
        yt = ft.length; a < yt; a++)
            ht = ft[a],
            kt(ht);
        return t
    })
}
.call(this);
