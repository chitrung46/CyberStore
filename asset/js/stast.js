(function() {
    function d() {
        if ((i === "checkout_contact_view" || i === "checkout_all_view" || i === "checkout_payment_view") && (n.value = Bizweb.Checkout.fbEvent ? Bizweb.Checkout.fbEvent.value : "",
        n.content_ids = Bizweb.Checkout.fbEvent ? Bizweb.Checkout.fbEvent.content_ids : [],
        n.metadata.num_items = Bizweb.Checkout.fbEvent ? Bizweb.Checkout.fbEvent.num_items : 0,
        n.contents = Bizweb.Checkout.fbEvent ? Bizweb.Checkout.fbEvent.contents : []),
        i === "product_view" || i === "product_view_from_search") {
            n.value = BizwebAnalytics.meta.product.price;
            n.content_ids = [BizwebAnalytics.meta.product.id];
            n.metadata.content_name = BizwebAnalytics.meta.product.name;
            var f = BizwebAnalytics.meta.product;
            n.contents = [Object.assign({}, f, {
                item_price: f.price
            }, {
                price: null
            })]
        }
        t.postData(c, n, u, r)
    }
    function g() {
        d();
        n.action = "view";
        t.postData(f, n, null, r)
    }
    function at() {
        g();
        n.action = "search";
        t.postData(f, n, null, r)
    }
    function vt() {
        n.value = Bizweb.checkout.line_items_subtotal_price;
        n.content_ids = Bizweb.checkout.line_items.map(function(n) {
            return n.variant_id
        });
        n.email = Bizweb.checkout.email;
        n.city = Bizweb.checkout.billing_address.city;
        n.country = Bizweb.checkout.billing_address.country_code;
        n.contents = Bizweb.checkout.line_items.map(function(n) {
            return {
                id: n.variant_id,
                quantity: n.quantity,
                item_price: n.price_final,
                name: n.title
            }
        });
        t.postData(c, n, u, r);
        n.action = "purchase";
        Bizweb.checkout.line_items.forEach(function(i) {
            n.product_id = i.product_id;
            n.variant_id = i.variant_id;
            t.postData(f, n, null, r)
        });
        n.metadata.order_id = Bizweb.checkout.order_id.toString();
        Bizweb.checkout.customer_id && (n.metadata.external_id = Bizweb.checkout.customer_id.toString());
        Bizweb.checkout.customer_first_name && (n.metadata.customer_first_name = Bizweb.checkout.customer_first_name);
        Bizweb.checkout.customer_first_name && (n.metadata.customer_last_name = Bizweb.checkout.customer_last_name);
        Bizweb.checkout.customer_phone && (n.metadata.customer_phone = Bizweb.checkout.customer_phone);
        n.num_items = Bizweb.checkout.line_items.reduce(function(n, t) {
            return n + t.quantity
        }, 0)
    }
    function a(n, t, i, r) {
        this.xhr = n;
        this.url = t;
        this.method = i;
        this.body = r
    }
    var o, t = function() {
        function n(n) {
            for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
                for (t = u[i]; t.charAt(0) == " "; )
                    t = t.substring(1);
                if (t.indexOf(r) == 0)
                    return t.substring(r.length, t.length)
            }
        }
        function t(n, t) {
            var i = new URLSearchParams(t.toLowerCase());
            return i.get(n.toLowerCase())
        }
        function i(n, t, i) {
            var r = new Date, u;
            r.setTime(r.getTime() + i * 6e4);
            u = "expires=" + r.toUTCString();
            document.cookie = n + "=" + t + ";" + u + ";path=/"
        }
        function r() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                var t = Math.random() * 16 | 0
                  , i = n == "x" ? t : t & 3 | 8;
                return i.toString(16)
            })
        }
        function u(n, t, i, r) {
            if (t = Object.assign({}, t),
            BizwebAnalytics.meta.customer && (t.customer_id = BizwebAnalytics.meta.customer.id),
            o)
                t.fp = o,
                fetch(n, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(t)
                }).then(function(n) {
                    return n.json()
                }).then(function(n) {
                    i && i(n)
                }).catch(function(n) {
                    r && r(n)
                });
            else {
                var u = f();
                u.then(function(u) {
                    o = u;
                    t.fp = o;
                    fetch(n, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t)
                    }).then(function(n) {
                        return n.json()
                    }).then(function(n) {
                        i && i(n)
                    }).catch(function(n) {
                        r && r(n)
                    })
                })
            }
        }
        function f() {
            var n = new Promise(function(n, t) {
                var i = document.createElement("script");
                i.onload = n;
                i.onerror = t;
                i.async = !0;
                i.src = "//bizweb.dktcdn.net/web/assets/lib/js/fp.v3.3.0.min.js";
                document.head.appendChild(i)
            }
            ).then(function() {
                return FingerprintJS.load()
            });
            return n.then(function(n) {
                return n.get()
            }).then(function(n) {
                return n.visitorId
            })
        }
        return {
            getCookie: n,
            setCookie: i,
            getUUID: r,
            postData: u,
            getParamValue: t
        }
    }(), p, n, nt, tt, v;
    t.getCookie("_landing_full_page") || t.getCookie("_landing_type") || !Bizweb.template || (t.setCookie("_landing_full_page", location.href, 21600),
    t.setCookie("_landing_type", Bizweb.template, 21600));
    var y = window.BizwebAnalytics.tracking_url
      , s = t.getCookie("_s")
      , e = t.getCookie("_v")
      , it = !!sessionStorage.getItem("active")
      , rt = t.getCookie("_landing_full_page")
      , ut = t.getCookie("_landing_type")
      , ft = unescape(t.getCookie("_landing_page"))
      , l = !1;
    e && (p = t.getCookie("_v_new"),
    p || (l = !0));
    var h = t.getCookie("_origin_reference_site")
      , c = y + "/api/v1/page-views"
      , f = y + "/api/v1/product-actions"
      , u = function() {
        t.setCookie("_s", s, 30);
        t.setCookie("_v", e, 1576800);
        t.setCookie("_origin_reference_site", h, 43200);
        l || t.setCookie("_v_new", !0, 30)
    }
      , r = function(n) {
        console.error(n)
    };
    s || (s = t.getUUID());
    e || (e = t.getUUID());
    h === undefined && (h = document.referrer);
    var et = Bizweb ? Bizweb.id : 0, ot = document.referrer, st = h, ht = s, ct = e, lt = location.href, w = !1, i, b, k = !1;
    switch (Bizweb.template) {
    case "collection":
        i = location.pathname !== "/collections/all" ? "collection_view" : "page_view";
        break;
    case "product":
        w = !0;
        b = location.pathname;
        i = "product_view";
        document.referrer !== "" && new URL(document.referrer).pathname === "/search" && (i = "product_view_from_search");
        break;
    case "cart":
        i = "cart_view";
        break;
    case "checkout":
        if (Bizweb.Checkout) {
            k = !0;
            switch (t.getParamValue("step", location.search)) {
            case "contact_information":
                i = "checkout_contact_view";
                break;
            case "shipping_method":
                i = "checkout_shipping_view";
                break;
            case "payment_method":
                i = "checkout_payment_view";
                break;
            default:
                i = "checkout_all_view"
            }
        }
        break;
    case "thankyou":
        Bizweb.checkout && (i = "thank_you_view");
        break;
    default:
        i = "page_view"
    }
    sessionStorage.setItem("active", "active");
    n = {
        session_type: i,
        active_session: it,
        store_id: et,
        session_id: ht,
        visitor_id: ct,
        reference_site: ot,
        origin_reference_site: st,
        current_site: lt,
        landing_type: ut,
        landing_page: ft,
        landing_full_page: rt,
        visit_returning: l,
        product_alias: b,
        first_time_access: Bizweb.first_time_accessed,
        currency: BizwebAnalytics.meta.currency,
        from_product_view: w,
        article_id: BizwebAnalytics.meta.article ? BizwebAnalytics.meta.article.id : undefined,
        fb_event_id: Bizweb.fbEventId,
        metadata: {
            fbp: t.getCookie("_fbp"),
            fbc: t.getCookie("_fbc"),
            ttclid: t.getCookie("ttclid"),
            ttp: t.getCookie("_ttp"),
            external_id: BizwebAnalytics.meta && BizwebAnalytics.meta.customer ? BizwebAnalytics.meta.customer.id : null,
            customer_first_name: BizwebAnalytics.meta && BizwebAnalytics.meta.customer ? BizwebAnalytics.meta.customer.first_name : null,
            customer_last_name: BizwebAnalytics.meta && BizwebAnalytics.meta.customer ? BizwebAnalytics.meta.customer.last_name : null,
            customer_phone: BizwebAnalytics.meta && BizwebAnalytics.meta.customer ? BizwebAnalytics.meta.customer.phone : null
        },
        email: BizwebAnalytics.meta && BizwebAnalytics.meta.customer ? BizwebAnalytics.meta.customer.email : null
    };
    k && (n.fb_event_id = Bizweb.fbEventIdInitiateCheckout);
    switch (i) {
    case "page_view":
    case "cart_view":
    case "checkout_contact_view":
    case "checkout_shipping_view":
    case "checkout_payment_view":
    case "checkout_all_view":
    case "collection_view":
        d();
        break;
    case "product_view":
        g();
        break;
    case "product_view_from_search":
        at();
        break;
    case "thank_you_view":
        Bizweb.first_time_accessed && vt()
    }
    a.prototype.onReadyStateChange = function() {
        this.xhr.readyState === XMLHttpRequest.DONE && this.handleXhrDone({
            method: this.method,
            url: this.url,
            body: this.body,
            xhr: this.xhr
        });
        this.oldOnReadyStateChange && this.oldOnReadyStateChange(this.xhr)
    }
    ;
    a.prototype.handleXhrDone = function(i) {
        var e, o;
        try {
            switch (i.url) {
            case "/cart/add.js":
                i.xhr.responseText && (e = JSON.parse(i.xhr.responseText),
                n.session_type = "add_to_cart",
                n.active_session = !0,
                n.value = e.price * e.quantity,
                n.content_ids = [e.variant_id],
                n.contents = [{
                    id: e.variant_id,
                    quantity: e.quantity,
                    item_price: e.price,
                    name: e.name
                }],
                o = i.xhr.getResponseHeader("Date"),
                n.fb_event_id = Bizweb.fbEventId + (o ? new Date(o).getTime() : null),
                t.postData(c, n, u, r),
                n.variant_id = t.getParamValue("variantId", i.body),
                n.action = "add_to_cart",
                t.postData(f, n, u, r),
                new URL(location.href).pathname === "/search" && (n.action = "search",
                t.postData(f, n, u, r)));
                break;
            case "/cart/change.js":
                t.getParamValue("quantity", i.body) === "0" && (n.variant_id = t.getParamValue("variantId", i.body),
                n.action = "remove_from_cart",
                t.postData(f, n, u, r))
            }
        } catch (s) {
            console.error(s.message)
        }
        return i
    }
    ;
    nt = XMLHttpRequest.prototype.open;
    tt = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(n, t) {
        return this._url = t,
        this._method = n,
        nt.apply(this, arguments)
    }
    ;
    XMLHttpRequest.prototype.send = function(n) {
        var t = new a(this,this._url,this._method,n);
        return this.addEventListener ? this.addEventListener("readystatechange", t.onReadyStateChange.bind(t), !1) : (t.oldOnReadyStateChange = this.onreadystatechange,
        this.onreadystatechange = t.onReadyStateChange),
        tt.call(this, n)
    }
    ;
    v = window.fetch;
    "function" == typeof v && (window.fetch = function() {
        return v.apply(window, Array.prototype.slice.call(arguments)).then(function(i) {
            var e;
            if (!i.ok)
                return i;
            try {
                switch (i.url) {
                case "/cart/add.js":
                    e = response.headers.get("Date");
                    n.fb_event_id = Bizweb.fbEventId + (e ? new Date(e).getTime() : null);
                    n.session_type = "add_to_cart";
                    n.active_session = !0;
                    t.postData(c, n, u, r);
                    n.variant_id = t.getParamValue("variantId", i.body);
                    n.action = "add_to_cart";
                    t.postData(f, n, u, r);
                    new URL(location.href).pathname === "/search" && (n.action = "search",
                    t.postData(f, n, u, r));
                    break;
                case "/cart/change.js":
                    e = response.headers.get("Date");
                    t.getParamValue("quantity", query) === "0" && (n.variant_id = t.getParamValue("variantId", i.body),
                    n.action = "remove_from_cart",
                    t.postData(f, n, u, r))
                }
            } catch (o) {
                console.error(o.message)
            }
            return i
        })
    }
    )
}
)();
