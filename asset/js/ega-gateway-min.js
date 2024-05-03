(function() {
    "use strict";
    function a(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function b(a, b) {
        for (var c, d = 0; d < b.length; d++)
            c = b[d],
            c.enumerable = c.enumerable || !1,
            c.configurable = !0,
            "value"in c && (c.writable = !0),
            Object.defineProperty(a, c.key, c)
    }
    function c(a, c, d) {
        return c && b(a.prototype, c),
        d && b(a, d),
        a
    }
    (function(a, b) {
        void 0 === b && (b = {});
        var c = b.insertAt;
        if (a && "undefined" != typeof document) {
            var d = document.head || document.getElementsByTagName("head")[0]
              , e = document.createElement("style");
            e.type = "text/css",
            "top" === c ? d.firstChild ? d.insertBefore(e, d.firstChild) : d.appendChild(e) : d.appendChild(e),
            e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(document.createTextNode(a))
        }
    }
    )("");
    var d = function() {
        function b() {
            a(this, b)
        }
        return c(b, [{
            key: "html",
            value: function(a, b, c) {
                var d = document.createElement(a);
                if (b)
                    for (var e in b)
                        b.hasOwnProperty(e) && (d[e] = b[e]);
                if (c)
                    for (var f = 0; f < c.length; f++)
                        d.appendChild(c[f]);
                return d
            }
        }, {
            key: "loadResource",
            value: function(a, b) {
                if (b && 0 < b.trim().length) {
                    var c;
                    if ("css" === a ? c = this.html("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: b
                    }) : "js" == a && (c = this.html("script", {
                        type: "text/javascript",
                        src: b
                    })),
                    c)
                        document.querySelector("head").appendChild(c);
                    else
                        throw ERR_INVALID_RESOURCE_URL
                } else
                    throw ERR_INVALID_RESOURCE_URL
            }
        }]),
        b
    }()
      , e = new Error("EgaGateway: Empty register object")
      , f = function() {
        function b() {
            a(this, b)
        }
        return c(b, [{
            key: "init",
            value: function(a) {
                if (a && 0 < Object.keys(a).length) {
                    var b = a.css
                      , c = a.js;
                    b && b.forEach(function(a) {
                        window.EgaUtils.loadResource("css", a)
                    }),
                    c && c.forEach(function(a) {
                        window.EgaUtils.loadResource("js", a)
                    })
                } else
                    throw e
            }
        }]),
        b
    }();
    window.EgaUtils = new d,
    window.EgaGateway = new f
}
)();
