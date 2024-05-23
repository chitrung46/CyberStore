function toggleTabIndex(n) {
    n.attr("tabindex") == -1 ? setTabIndex(n, 0) : setTabIndex(n, -1)
}
function setTabIndex(n, t) {
    n.attr("tabindex", t)
}
function setContactFormTabIndex(n) {
    n ? ($("#billingDistrict").is(":disabled") || setTabIndex($("#select2-billingDistrict-container").parent(), -1),
    $("#billingWard").is(":disabled") || setTabIndex($("#select2-billingWard-container").parent(), -1),
    setTabIndex($("#shipping-address input"), 0),
    $("#shippingProvince").is(":disabled") || setTabIndex($("#select2-shippingProvince-container").parent(), 0),
    $("#shippingDistrict").is(":disabled") || setTabIndex($("#select2-shippingDistrict-container").parent(), 0),
    $("#shippingWard").is(":disabled") || setTabIndex($("#select2-shippingWard-container").parent(), 0)) : ($("#billingDistrict").is(":disabled") || setTabIndex($("#select2-billingDistrict-container").parent(), 0),
    $("#billingWard").is(":disabled") || setTabIndex($("#select2-billingWard-container").parent(), 0),
    setTabIndex($("#shipping-address input"), -1),
    $("#shippingProvince").is(":disabled") || setTabIndex($("#select2-shippingProvince-container").parent(), -1),
    $("#shippingDistrict").is(":disabled") || setTabIndex($("#select2-shippingDistrict-container").parent(), -1),
    $("#shippingWard").is(":disabled") || setTabIndex($("#select2-shippingWard-container").parent(), -1))
}
function checkErrorToScroll() {
    var n = document.querySelector(".field--error");
    n && n.scrollIntoView({
        block: "center",
        behavior: "smooth"
    })
}
(function(n) {
    function h(n, t) {
        var u, f, r;
        if ($province = $("select[data-address-type='province'][data-address-zone='" + n + "']"),
        $province) {
            for (u = ['<option value="" hidden>---<\/option>'],
            f = 0; f < i.length; f++) {
                if (r = i[f],
                r.id == t) {
                    u.push("<option value='" + r.id + "' selected>" + r.name + "<\/option>");
                    continue
                }
                u.push("<option value='" + r.id + "'>" + r.name + "<\/option>")
            }
            $province.html(u.join(""))
        }
    }
    function s(n, t, i) {
        var r = $("select[data-address-type='district'][data-address-zone='" + n + "']"), s, e, o, u;
        if (r) {
            if (!t) {
                r.val("");
                r.attr("disabled", "disabled");
                r.html("");
                return
            }
            for (s = f.filter(function(n) {
                return n.province_id == t
            }),
            e = ['<option value="" hidden>---<\/option>'],
            o = 0; o < s.length; o++) {
                if (u = s[o],
                u.id == i) {
                    e.push("<option value='" + u.id + "' selected>" + u.name + "<\/option>");
                    continue
                }
                e.push("<option value='" + u.id + "'>" + u.name + "<\/option>")
            }
            r.removeAttr("disabled");
            r.html(e.join(""))
        }
    }
    function r(n, t, i) {
        var r = $("select[data-address-type='ward'][data-address-zone='" + n + "']"), f, s, o, u;
        if (r) {
            if (!t) {
                r.val("");
                r.attr("disabled", "disabled");
                r.html("");
                return
            }
            for (f = ['<option value="" hidden>---<\/option>'],
            s = e.filter(function(n) {
                return n.district_id == t
            }),
            o = 0; o < s.length; o++) {
                if (u = s[o],
                u.id == i) {
                    f.push("<option value='" + u.id + "' selected>" + u.name + "<\/option>");
                    continue
                }
                f.push("<option value='" + u.id + "'>" + u.name + "<\/option>")
            }
            r.removeAttr("disabled");
            r.html(f.join(""))
        }
    }
    function c() {
        return o ? {
            then: function(n) {
                return n()
            }
        } : fetch("/checkout/addresses.json").then(function(n) {
            return n.json()
        }).then(function(n) {
            i = n.provinces;
            f = n.districts.filter(function(n) {
                return n.id != 69
            });
            e = n.wards;
            o = !0
        })
    }
    function u() {}
    function t(n, t) {
        $('select[data-address-type="' + t + '"][data-address-zone="' + n + '"]').trigger("address:change")
    }
    var i = []
      , f = []
      , e = []
      , o = !1;
    u.prototype.bind = function() {
        $("body").on("change", "select[data-address-type]", function(n) {
            var u = n.target.getAttribute("data-address-type")
              , i = n.target.getAttribute("data-address-zone");
            u === "province" ? (t(i, "province"),
            s(i, n.target.value, undefined),
            t(i, "district"),
            r(i, "", undefined),
            t(i, "ward")) : u === "district" && (t(i, "district"),
            r(i, n.target.value, undefined),
            t(i, "ward"))
        });
        return this
    }
    ;
    u.prototype.refresh = function(n) {
        var i = {}, u;
        ($("[data-address-zone]").each(function() {
            var n = $(this), r = n.data("address-type"), t, u;
            r && (t = n.data("address-zone"),
            u = i[t] || (i[t] = {}),
            u[r] = n.val() || n.attr("value"))
        }),
        u = Object.keys(i),
        u.length != 0) && c().then(function() {
            u.forEach(function(n) {
                var u = i[n];
                h(n, u.province);
                t(n, "province");
                s(n, u.province, u.district);
                t(n, "district");
                r(n, u.district, u.ward);
                t(n, "ward")
            });
            n && n()
        })
    }
    ;
    n.Address = new u;
    n.onRecaptchaValid = function() {
        $("#grecaptchaBox .field").removeClass("field--error")
    }
    ;
    n.InputPhone = function() {
        function f(n) {
            var t = n.id.toLowerCase();
            return $('<span class="fi fi-' + t + '"><\/span>')
        }
        function t(n) {
            var t = $(n), r;
            this.$phone = t.find("input[type=tel]");
            this.$phone_region = t.find("select.select-phone-region");
            this.$phone.on("input", this._handleChangePhone.bind(this));
            this.$phone_region.on("change", this._handleChangePhoneRegion.bind(this));
            r = this;
            i ? this._initSelect2() : $.ajax({
                url: "/checkout/supported_phone_regions.json",
                dataType: "json",
                success: function(n) {
                    i = n.regions;
                    r._initSelect2()
                }
            })
        }
        var r = "ZZ", u = libphonenumber.PhoneNumberFormat.E164, n = new libphonenumber.PhoneNumberUtil, i;
        return t.prototype._initSelect2 = function() {
            this.$phone_region.select2({
                templateSelection: f,
                dropdownAutoWidth: !0,
                data: i,
                selectionCssClass: "select2-phone-region",
                dropdownCssClass: "select2-phone-region--dropdown"
            });
            var t = this.$phone_region.data("init-value")
              , n = this.$phone_region.val();
            t ? (n = t,
            this._old_region = n,
            this.$phone_region.val(n).trigger("change")) : this._old_region = n
        }
        ,
        t.prototype._handleChangePhone = function(t) {
            var u, i, f;
            u = t.target.value;
            i = this.$phone_region.val();
            try {
                f = n.parse(u, i)
            } catch (e) {
                return
            }
            i = n.getRegionCodeForCountryCode(f.getCountryCode());
            i !== r && (this._old_region = i,
            this.$phone_region.val(i).trigger("change"))
        }
        ,
        t.prototype._handleChangePhoneRegion = function(t) {
            var i, r, f, e;
            if (t.stopPropagation(),
            i = this.$phone.val(),
            r = t.target.value,
            r !== this._old_region)
                try {
                    f = n.parse(i, this._old_region);
                    e = n.getCountryCodeForRegion(r);
                    e != null && f.setCountryCode(e);
                    i = n.format(f, u);
                    this._old_region = r;
                    this.$phone.val(i).trigger("change")
                } catch (o) {}
        }
        ,
        t
    }()
}
)(window);
window.Bizweb || (window.Bizweb = {});
$(function() {
    $("body").on("click", "[data-toggle]", function() {
        var n = $(this);
        n.toggleClass("toggled");
        $(n.attr("data-toggle")).toggleClass(n.attr("data-toggle-class"))
    }).on("focus", ".field__label+input[type=text].field__input,textarea.field__input", function() {
        $(this).closest(".field").addClass("field--show-floating-label")
    }).on("blur", ".field__label+input[type=text].field__input,textarea.field__input", function() {
        this.value || $(this).closest(".field").removeClass("field--show-floating-label")
    }).on("change", ".field.field--error  .field__input", function() {
        $(this).closest(".field").removeClass("field--error")
    }).on("keypress", "#checkoutForm input", function(n) {
        n.keyCode == 13 && n.preventDefault()
    }).on("click", "#differenceAddress", function(n) {
        setContactFormTabIndex(n.target.checked)
    });
    $(document).keyup(function(n) {
        n.which === 27 && $(".modal-wrapper").addClass("hide")
    });
    checkErrorToScroll()
});
$(function() {
    function i() {
        var n = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
        n || $("select[data-address-type]").select2({
            width: "100%",
            language: {
                noResults: function() {
                    return "Không tìm thấy kết quả"
                }
            }
        })
    }
    function t(t) {
        if (t)
            for (var i = 0; i < t.length; i++)
                Twine.bind(t[i]);
        else
            Twine.reset(n).bind();
        Twine.refreshImmediately()
    }
    Address.bind().refresh();
    i();
    setTimeout(function() {
        setContactFormTabIndex($("#differenceAddress").is(":checked"))
    }, 100);
    var n = {
        billing: {},
        isLoadingReductionCode: !1,
        isLoadingReductionCodeError: !1,
        isBoundingToSaveCheckoutAbandon: !1,
        shippingMethods: [],
        timeoutIds: [],
        getTextShippingPriceFinal: function() {
            if (!this.shippingMethods)
                return "-";
            for (var n = 0; n < this.shippingMethods.length; n++)
                if (this.shippingMethods[n].name === this.shippingMethod)
                    return this.shippingMethods[n].textPriceFinal;
            return "-"
        },
        getTextShippingPriceOriginal: function() {
            if (!this.shippingMethods)
                return "-";
            for (var n = 0; n < this.shippingMethods.length; n++)
                if (this.shippingMethods[n].name === this.shippingMethod)
                    return this.shippingMethods[n].textPriceOriginal;
            return ""
        },
        getTextTotalPrice: function() {
            if (!this.shippingMethods)
                return this.subTotalPriceText;
            for (var n = 0; n < this.shippingMethods.length; n++)
                if (this.shippingMethods[n].name === this.shippingMethod)
                    return this.shippingMethods[n].subtotalPriceWithShippingFee;
            return this.subTotalPriceText
        },
        handleCheckoutSubmit: function(t) {
            if (n["onepayConfirm" + n.paymentMethod] === !1) {
                alert($("#onepayConfirmAlert-" + n.paymentMethod).text());
                return
            }
            t.target.submit();
            $("#checkoutForm button[type=submit]").addClass("spinner--active").attr("disabled", !0);
            return
        },
        applyReductionCode: function() {
            var i = document.forms.reductionCodeForm, n, t;
            this.isLoadingReductionCode = !0;
            this.isLoadingReductionCodeError = !1;
            n = this;
            t = {
                refreshOnSuccess: "refreshDiscount refreshOrderTotalPrice refreshShipping refreshError",
                refreshOnError: "refreshDiscount",
                success: function() {
                    n.isLoadingReductionCode = !1
                },
                fail: function() {
                    n.isLoadingReductionCode = !1;
                    n.isLoadingReductionCodeError = !0;
                    Twine.refresh()
                }
            };
            this.sendReductionCodeForm(i, t)
        },
        removeReductionCode: function() {
            var t = document.forms.reductionCodeForm, n, i;
            t.elements.reductionCode.value = null;
            this.isLoadingReductionCode = !0;
            this.isLoadingReductionCodeError = !1;
            n = this;
            i = {
                refreshOnSuccess: "refreshDiscount refreshOrderTotalPrice refreshShipping refreshError",
                refreshOnError: "refreshDiscount",
                success: function() {
                    n.isLoadingReductionCode = !1
                },
                fail: function() {
                    n.isLoadingReductionCode = !1;
                    n.isLoadingReductionCodeError = !0;
                    Twine.refresh()
                }
            };
            this.sendReductionCodeForm(t, i)
        },
        removeCurrentDiscountViolation: function(n) {
            $(n.target).closest(".field").remove()
        },
        handleReductionCodeKeyPress: function(n) {
            n.keyCode == 13 && (n.preventDefault(),
            n.target.value) && this.applyReductionCode()
        },
        handleCustomerAddressChange: function(n) {
            var t = document.forms.checkoutForm
              , i = n.target.options[n.target.selectedIndex].dataset;
            this.billing.name = i.name || "";
            this.billing.address = i.address || "";
            this.billing.phone = i.phone || "";
            this.billing.province = i.province || "";
            this.billing.district = i.district || "";
            this.billing.ward = i.ward || "";
            this.billing.zip = i.zip || "";
            t.billingProvince && (t.billingProvince.value = this.billing.province,
            t.billingProvince.setAttribute("value", this.billing.province));
            t.billingDistrict && (t.billingDistrict.value = this.billing.district,
            t.billingDistrict.setAttribute("value", this.billing.district));
            t.billingWard && (t.billingWard.value = this.billing.ward,
            t.billingWard.setAttribute("value", this.billing.ward));
            Address.refresh()
        },
        handleCheckoutChange: function(n) {
            (n.target.name == "email" || n.target.name == "billingPhone") && this.shouldSaveCheckoutAbandon ? this.setJobToSaveCheckoutAbandon(5e3) : this.isBoundingToSaveCheckoutAbandon && this.setJobToSaveCheckoutAbandon(Math.max(this.deadline - Date.now(), 3e3));
            this.customerAddress && ["billingName", "billingAddress", "billingPhone", "billingProvince", "billingDisitrict", "billingWard", "billingZip"].indexOf(n.target.name) >= 0 && (this.customerAddress = 0)
        },
        isShippingMethodSelected: function(n) {
            if (!this.shippingMethods)
                return !1;
            var t = this
              , i = this.shippingMethods.find(function(n) {
                return n.value === t.shippingMethod
            });
            return i ? this.shippingMethod === n : n === this.shippingMethods[0].value ? (this.shippingMethod = n,
            Twine.refreshImmediately(),
            !0) : !1
        },
        setJobToSaveCheckoutAbandon: function(n) {
            this.deadline = Date.now() + n;
            this.saveAbandonJobId && clearTimeout(this.saveAbandonJobId);
            this.isBoundingToSaveCheckoutAbandon = !0;
            this.saveAbandonJobId = setTimeout(this.submitCheckoutAbandon.bind(this), n)
        },
        submitCheckoutAbandon: function() {
            if (this.isBoundingToSaveCheckoutAbandon = !1,
            this.shouldSaveCheckoutAbandon = !1,
            this.saveAbandonJobId = null,
            !this.isSubmitingCheckout) {
                var n = $("#checkoutForm");
                $.post(n.attr("action"), n.find(":not(input[name=reductionCode])").serialize() + "&_method=patch")
            }
        },
        clearPollTimeOut: function() {
            for (var n = 0; n < this.timeoutIds.length; n++)
                clearTimeout(this.timeoutIds[n])
        },
        startPollingCheckoutStatus: function(n, t, i, r) {
            function f(i) {
                fetch(n, {
                    headers: {
                        "X-Requested-With": "FetchApiRequest"
                    }
                }).then(function(n) {
                    var r = n.headers.get("X-Next-Redirect");
                    if (r)
                        return Page.visit(r, {
                            reload: !0
                        }),
                        !0;
                    i > 0 ? (u.timeoutIds.push(setTimeout(function() {
                        f(i - 1)
                    }, 1e3)),
                    --u.pollSeconds,
                    Twine.refresh()) : Page.visit(t, {
                        reload: !0
                    })
                }).catch(function() {
                    u.timeoutIds.push(setTimeout(function() {
                        f(i - 1)
                    }, 1e3));
                    --u.pollSeconds;
                    Twine.refresh()
                })
            }
            this.clearPollTimeOut();
            var u = this;
            u.pollSeconds = r;
            f(r)
        },
        sendReductionCodeForm: function(n, t) {
            for (var c, i, e, s = [].slice.call(n.querySelectorAll("input:not([type='reset']):not([type='button']):not([type='submit']):not([type='image']), select, textarea")), u = "", f = 0; f < s.length; f++) {
                var r = s[f]
                  , v = !r.disabled && (t.onlyKeys && t.onlyKeys.indexOf(r.name) >= 0 || t.exceptKeys && t.exceptKeys.indexOf(r.name) < 0 || !t.onlyKeys && !t.exceptKeys)
                  , h = r.type == "checkbox" || r.type == "radio";
                v && r.name && (h && r.checked || !h) && (u.length && (u += "&"),
                u += encodeURIComponent(r.name) + "=" + encodeURIComponent(r.value))
            }
            c = n.getAttribute("action");
            i = new XMLHttpRequest;
            i.open("POST", c, !0);
            i.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            i.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml");
            i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            i.setRequestHeader("X-XHR-Referer", document.location.href);
            e = CSRFToken.get().token;
            e && i.setRequestHeader("X-CSRF-Token", e);
            var o = this
              , y = t.refreshOnSuccess && t.refreshOnSuccess.split(" ")
              , l = t.refreshOnError && t.refreshOnError.split(" ")
              , p = t.refreshOnSuccessExcept && t.refreshOnSuccessExcept.split(" ")
              , a = t.refreshOnErrorExcept && t.refreshOnErrorExcept.split(" ");
            i.addEventListener("error", function() {
                t.fail && t.fail(i);
                o.onError(i, l, a)
            });
            i.addEventListener("load", function() {
                if (i.status < 400) {
                    t.success && t.success();
                    o.onSuccess(i, y, p)
                } else {
                    t.fail && t.fail(i);
                    o.onError(i, l, a)
                }
            });
            i.send(u)
        },
        onSuccess: function(n, t, i) {
            var r = n.getResponseHeader("X-Next-Redirect");
            if (r) {
                Page.visit(r, {
                    reload: !0
                });
                return
            }
            t ? Page.refresh({
                response: n,
                onlyKeys: t
            }) : i ? Page.refresh({
                response: n,
                exceptKeys: i
            }) : Page.refresh({
                response: n
            })
        },
        onError: function(n, t, i) {
            t ? Page.refresh({
                response: n,
                onlyKeys: t
            }) : i ? Page.refresh({
                response: n,
                exceptKeys: i
            }) : Page.refresh({
                response: n
            })
        }
    };
    t();
    n.email && n.shouldSaveCheckoutAbandon && n.setJobToSaveCheckoutAbandon(5e3);
    document.addEventListener("page:before-partial-replace", function(n) {
        var i = n.data, t;
        if (i)
            for (t = 0; t < i.length; t++)
                Twine.unbind(i[t])
    });
    document.addEventListener("page:load", function(n) {
        t(n.data)
    })
}),
function(n) {
    function i(n, t) {
        for (var r = /\$\(([^\)]+)?\)/g, i; i = r.exec(n); )
            n = t[i[1]] && t[i[1]]instanceof Array ? n.replace(i[0], t[i[1]].join("")) : n.replace(i[0], t[i[1]]),
            r.lastIndex = 0;
        return n
    }
    function t(n, t=".", i=" đ") {
        if (n) {
            var r = parseInt(n).toString();
            return r.replace(/\B(?=(\d{3})+(?!\d))/g, t) + i
        }
        return 0 + i
    }
    var r = {
        isLoadingQr: !1,
        loadedQrBank: !1,
        loadedBank: !1,
        bankQrList: [],
        bankList: [],
        isLoadingQr: !1,
        isLoadingFee: !1,
        payOnQrStep: 1,
        bankInstChoose: null,
        listFee: [],
        installmentRule: "",
        loadBank: function(n) {
            var t = this
              , r = "/payon/qr_banks.json";
            if (n === "qr") {
                if (this.loadedQrBank)
                    return
            } else if (n === "inst") {
                if (this.loadedBank)
                    return;
                r = "/payon/banks.json"
            }
            return fetch(r).then(function(n) {
                return n.json()
            }).then(function(r) {
                var o, e, s, u, f;
                if ($(".bank-list"))
                    if (o = $("#bank-list__template").text(),
                    e = [],
                    n === "qr") {
                        for (u = 0; u < r.banks.length; u++)
                            f = r.banks[u],
                            e.push(i(o, f));
                        t.bankQrList = r.banks;
                        $(".bank-list").html(e.join(""))
                    } else if (n === "inst") {
                        for (s = ["<option value hidden>Chọn ngân hàng<\/option>"],
                        u = 0; u < r.banks.length; u++)
                            f = r.banks[u],
                            e.push(i(o, f)),
                            s.push("<option value='" + f.code + "'>" + f.full_name + "<\/option>");
                        t.bankList = r.banks;
                        $(".bank-list-select").html(s.join(""));
                        $(".bank-list").html(e.join(""))
                    }
                n === "qr" ? t.loadedQrBank = !0 : n === "inst" && (t.loadedBank = !0);
                Twine.bind().refresh()
            })
        },
        changeBankCodeQr: function(n) {
            this.isLoadingQr || (this.payon_bank = n,
            $("#payon_bank").val(n))
        },
        loadQrCode: function() {
            var t = Twine.context(document.body), n, i, r;
            (t.clearPollTimeOut(),
            n = this,
            i = document.forms.payon_form,
            n.isLoadingQr) || (n.isLoadingQr = !0,
            r = {
                refreshOnSuccess: "qr-image",
                refreshOnError: "qr-image",
                success: function() {
                    n.isLoadingQr = !1;
                    n.payOnQrStep = 2
                },
                fail: function() {
                    n.isLoadingQr = !1;
                    Twine.refresh()
                }
            },
            t.sendReductionCodeForm ? t.sendReductionCodeForm(i, r) : t.sendCheckoutForm && t.sendCheckoutForm(i, r),
            Twine.refresh())
        },
        changeBankCodeInst: function(n) {
            var t = this;
            n != t.payon_bank && (t.bankInstChoose = t.bankList.find(function(t) {
                return t.code == n
            }),
            $("#payon_bank").val(n),
            $("#payon_card").val(""),
            $("#payon_cycle").val(""),
            $("#payon_userfee").val(""),
            this.payon_bank = n,
            this.payon_cycle = "",
            this.payon_userfee = "",
            this.payon_card = "",
            this.listFee = [],
            this.installmentRule = t.bankInstChoose.installment_rule,
            t.installmentRule && $(".installment-rule").text(t.installmentRule),
            Twine.refresh())
        },
        checkBankCardInst: function(n) {
            return this.bankInstChoose && this.bankInstChoose.installment_card_type && this.bankInstChoose.installment_card_type.find(function(t) {
                return t === n
            }) ? !0 : !1
        },
        changeBankCardInst: function(n) {
            n !== this.payon_card && (this.payon_card = n,
            $("#payon_card").val(n),
            this.caculateFeeInst())
        },
        caculateFeeInst: function() {
            var t = this;
            return t.isLoadingFee = !0,
            fetch("/payon/installment_fee", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: parseInt($("#payon_amount").val()),
                    bank_code: t.payon_bank,
                    card_type: t.payon_card,
                    cycles: t.bankInstChoose.cycle
                })
            }).then(function(n) {
                return n.json()
            }).then(function(i) {
                t.listFee = i.data.sort(function(n, t) {
                    return n.month > t.month ? 1 : n.month < t.month ? -1 : 0
                });
                i.data.length > 0 && (n.innerWidth < 768 ? t.renderMobileInst() : t.renderDesktopInst());
                t.isLoadingFee = !1
            }).catch(function() {
                t.isLoadingFee = !1
            })
        },
        changeCycle: function(n) {
            var u = this, r, o;
            if (n != u.payon_cycle && (u.payon_cycle = n,
            r = u.listFee.find(function(t) {
                return t.month == n
            }),
            r)) {
                u.payon_userfee = r.userfee;
                var e = $(".fee-mobile")
                  , s = $("#bank-list__fee-mobile").text()
                  , f = 0;
                r.userfee === 1 && (f = r.fee);
                o = {
                    month: r.month,
                    amount_month: t((r.amount_payment + f) / r.month),
                    amount_total: t(r.amount_payment + f),
                    amount_deviant: t(f)
                };
                Twine.unbind(e[0]);
                e.html(i(s, o));
                Twine.bind(e[0]);
                Twine.refresh()
            }
        },
        renderMobileInst: function() {
            var n = this, s = $(".list-cycle-mobile"), h = $("#bank-list__cycle-mobile").text(), c = $(".fee-mobile"), l = $("#bank-list__fee-mobile").text(), f, u, e, r, o;
            for (n.payon_cycle = n.listFee[0].month,
            n.payon_userfee = n.listFee[0].userfee,
            $("#payon_cycle").val(n.listFee[0].month),
            $("#payon_userfee").val(n.listFee[0].userfee),
            f = [],
            u = 0; u < n.listFee.length; u++)
                e = n.listFee[u],
                f.push(i(h, e));
            s.html(f.join(""));
            r = 0;
            n.listFee[0].userfee === 1 && (r = n.listFee[0].fee);
            o = {
                month: n.listFee[0].month,
                amount_month: t((n.listFee[0].amount_payment + r) / n.listFee[0].month),
                amount_total: t(n.listFee[0].amount_payment + r),
                amount_deviant: t(r)
            };
            Twine.unbind($(".payon-inst__fee")[0]);
            c.html(i(l, o));
            Twine.bind($(".payon-inst__fee")[0]);
            Twine.refresh()
        },
        renderDesktopInst: function() {
            for (var n, u, e = this, o = $(".fee-desktop"), s = $("#bank-list__fee-desktop").text(), r = {
                month: [],
                amount_month: [],
                amount_total: [],
                amount_deviant: []
            }, f = 0; f < e.listFee.length; f++)
                n = e.listFee[f],
                u = 0,
                n.userfee === 1 && (u = n.fee),
                r.month.push("<th><span>" + n.month + " tháng<\/span><\/th>"),
                r.amount_month.push('<td><span class="red">' + t((n.amount_payment + u) / n.month) + "<\/span><\/td>"),
                r.amount_total.push("<td><span>" + t(n.amount_payment + u) + "<\/span><\/td>"),
                r.amount_deviant.push("<td><span>" + t(u) + '<\/span><button type="button" class="btn btn-default btn-choose-cycle" bind-event-click="PayOn.submitForm(this, ' + n.month + ')">Thanh toán<svg xmlns="http://www.w3.org/2000/svg"><use href="#spinner"><\/use><\/svg><\/button><\/td>');
            Twine.unbind($(".payon-inst__fee")[0]);
            o.html(i(s, r));
            Twine.bind($(".payon-inst__fee")[0]);
            Twine.refresh()
        },
        submitForm: function(n, t) {
            var u = this, r;
            n.classList.add("is-submit");
            $(".btn-choose-cycle").prop("disabled", !0);
            var i = Twine.context(document.body)
              , f = document.forms.payon_form
              , e = u.listFee.find(function(n) {
                return n.month == t
            });
            $("#payon_bank").val(u.payon_bank);
            $("#payon_cycle").val(e.month);
            $("#payon_userfee").val(e.userfee);
            r = {
                refreshOnSuccess: "checkout",
                refreshOnError: "checkout",
                exceptKeys: ["_method"],
                success: function() {},
                fail: function() {
                    Twine.refresh()
                }
            };
            i.sendReductionCodeForm ? i.sendReductionCodeForm(f, r) : i.sendCheckoutForm && i.sendCheckoutForm(f, r);
            Twine.refresh()
        }
    };
    n.PayOn = r
}(window),
function(n) {
    var t = {
        handlePayment: function(i, r) {
            var u = JSON.parse(i), e = null, f = null, o;
            u && u.payment_data && u.payment_data.user_no && (f = "authentication_token_".concat(u.payment_data.user_no),
            o = localStorage.getItem(f),
            e = t.decodeString(o, u.public_key));
            AfteeVn.config({
                pre_token: e,
                pub_key: u.public_key,
                terminal_id: u.sapo_terminal_id,
                payment: u.payment_data,
                authenticated: function(n) {
                    if (f) {
                        var i = t.encodeString(n, u.public_key);
                        localStorage.setItem(f, i)
                    }
                },
                cancelled: function() {
                    u && u.payment_data && u.payment_data.shop_transaction_no && t.callback({
                        shop_transaction_no: u.payment_data.shop_transaction_no,
                        error_message: "Khách hàng tắt popup thanh toán"
                    }, "error");
                    n.location.href = r
                },
                failed: function(i) {
                    i ? i.error_flag ? n.location.href = r : t.callback({
                        id: i.id,
                        shop_transaction_no: u.payment_data.shop_transaction_no,
                        error_message: i.authorization_result_ng_reason === 1 ? "Vượt quá hạn mức khả dụng" : "Khác",
                        registration_datetime: i.registration_datetime,
                        discount_amount: i.discount_amount,
                        amount: i.amount
                    }, "failed") : n.location.href = r
                },
                succeeded: function(n) {
                    t.callback(n, "success")
                },
                error: function(n, i, r) {
                    var o = n, f, e;
                    r && Array.isArray(r) && r.length > 0 && (f = r.map(function(n) {
                        return n.code
                    }).join(","),
                    e = r.map(function(n) {
                        return Array.isArray(n.messages) ? n.messages.join(", ") : n.messages
                    }).join(","),
                    o = f && e ? f.concat(" - ").concat(e) : f || e);
                    u && u.payment_data && u.payment_data.shop_transaction_no && t.callback({
                        shop_transaction_no: u.payment_data.shop_transaction_no,
                        error_message: o
                    }, "error")
                }
            });
            setTimeout(function() {
                AfteeVn.start()
            }, 1e3)
        },
        callback: function(t, i) {
            if (!t) {
                n.location.href = payment_retry_url;
                return
            }
            fetch("/aftee/callback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: t.id,
                    shop_transaction_no: t.shop_transaction_no,
                    registration_datetime: t.registration_datetime,
                    discount_amount: t.discount_amount,
                    amount: t.amount,
                    transaction_status: i,
                    error_message: t.error_message
                })
            }).then(function(t) {
                t.url && i !== "error" && (n.location.href = t.url)
            })
        },
        encodeString: function(n, t) {
            var r, i, u;
            if (!n || !t)
                return n;
            for (r = "",
            i = 0; i < n.length; i++)
                u = String.fromCharCode(n.charCodeAt(i) ^ t.charCodeAt(i % t.length)),
                r += u;
            return r
        },
        decodeString: function(n, t) {
            var r, i, u;
            if (!n || !t)
                return n;
            for (r = "",
            i = 0; i < n.length; i++)
                u = String.fromCharCode(n.charCodeAt(i) ^ t.charCodeAt(i % t.length)),
                r += u;
            return r
        }
    };
    n.Aftee = t
}(window);
