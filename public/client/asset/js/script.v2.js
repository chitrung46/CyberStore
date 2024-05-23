let numberX = 0;
let numberY = 0;
let productAPI, productsPromotionDetailAPI;
(function (window, document, callback) {
    let $,
        state,
        done = false;
    if (!($ = window.jQuery) || callback($, done)) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
        script.onload = script.onreadystatechange =
            function () {
                if (!done && (!(state = this.readyState) || state === "loaded" || state === "complete")) {
                    callback(($ = window.jQuery).noConflict(1), (done = true));
                    $(script).remove();
                }
            };
        try {
            document.body.appendChild(script);
        } catch (ex) {
            try {
                document.documentElement.childNodes[0].appendChild(script);
            } catch (ex) {}
        }
    }
})(window, document, function ($, done) {
    let currentScript = document.currentScript;
    if (!currentScript) {
        console.error("current browser not support document.currentScript api");
        return;
    }
    let appOrigin;
    try {
        let url = new URL(currentScript.src);
        appOrigin = url.origin;
		//appOrigin = "http://localhost:8082"
    } catch (e) {
        console.error("Can't parse url", e);
        return;
    }
    let alias = getAlias(Bizweb.store);
    let productConfig;
    let badgeEls = $(".sapo-buyxgety-badge[data-id]");

    //Get store config
    $.ajax({
        url: appOrigin + "/api/client/config?storeAlias=" + alias,
        type: "POST",
        async: false,
        success: function (data) {
            if (data.product_list) {
                productConfig = data.product_list;
                setupAssets();
            } else {
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log("Có lỗi xảy ra vui lòng thử lại sau");
                }
            }
        },
        error: function (e) {
            console.log("Có lỗi xảy ra vui lòng thử lại sau");
        },
    });

    //Add badge icon & label
    function setupAssets() {
        if ($(".sapo-buyxgety-module-detail").length === 0 && $(".sapo-buyxgety-module-cart").length === 0) {
            let linkStyle = appOrigin + "/assets/buyxgety.css";
            let cssFile = document.createElement("link");
            cssFile.rel = "stylesheet";
            cssFile.href = linkStyle;
            document.head.appendChild(cssFile);
        }
        if (productConfig.type === 3) {
            let css_inline = `<style>
                .sapo-buyxgety-badge .label-text {
                    background: ${productConfig.label_background};
                    color: ${productConfig.label_color};
                }
            </style>`;
            $("body").append(css_inline);
        }
        checkBadge();
    }

    function checkBadge() {
        let ids = badgeEls.map(function () {
            return $(this).attr("data-id");
        });
        if (ids.length > 0) {
            $.ajax({
                url: appOrigin + "/api/client/badges?productIds=" + ids.splice(0).toString() + "&storeAlias=" + alias,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    if (data.apply != null && data.apply !== "" && data.apply === "all") {
                        badgesAllCallback();
                    } else {
                        badgesCallback(data);
                    }
                },
                error: function (e) {
                    console.log(e.error);
                },
            });
        }
    }

    function badgesAllCallback() {
        badgeEls.each(function () {
            let $this = $(this);
            addBadge($this);
        });
    }

    function badgesCallback(data) {
        badgeEls.each(function () {
            let $this = $(this),
                id = $this.data("id"),
                badge = filterBadge(data.product_mappings, id);
            if (badge != null) {
                addBadge($this);
            }
        });
    }

    function filterBadge(badges, id) {
        let len = badges.length;
        for (let i = 0; i < len; i++) {
            if (badges[i].sapo_product_id === id) {
                return badges[i];
            }
        }
        return null;
    }

    function addBadge(elem) {
        let imgIcon, labelTag, labelIcon;
        switch (productConfig.type) {
            case 1:
                let iconSystem = "https://bizweb.dktcdn.net/100/319/535/files/icon-gift-1.svg?v=1589443864643";
                if (productConfig.icon_promotion === 2) {
                    iconSystem = "https://bizweb.dktcdn.net/100/319/535/files/icon-gift-2.svg?v=1589443864647";
                } else if (productConfig.icon_promotion === 3) {
                    iconSystem = "https://bizweb.dktcdn.net/100/319/535/files/icon-gift-3.svg?v=1589443864647";
                } else if (productConfig.icon_promotion === 4) {
                    iconSystem = "https://bizweb.dktcdn.net/100/319/535/files/icon-gift-4.svg?v=1589443864647";
                }
                imgIcon = $("<img/>", {
                    src: iconSystem,
                    class: "icon-buyxgety",
                });
                $(elem).append(imgIcon);
                break;
            case 2:
                imgIcon = $("<img/>", {
                    src: productConfig.icon_promotion_custom,
                    class: "icon-buyxgety",
                });
                $(elem).append(imgIcon);
                break;
            case 3:
                labelTag = "<span class='label-text'>" + productConfig.label_title + "</span>";
                $(elem).append(labelTag);
                break;
            case 4:
                labelIcon = $("<img/>", {
                    src: productConfig.label_promotion,
                    class: "label-buyxgety",
                });
                $(elem).append(labelIcon);
                break;
        }
    }

    function getAlias(domain) {
        domain = domain.replace(".mysapo.net", "");
        domain = domain.replace("http://", "");
        domain = domain.replace("https://", "");
        return domain;
    }

    function render(props) {
        return function (tok, i) {
            return i % 2 ? props[tok] : tok;
        };
    }

    function convertContent(content, type, discount) {
        let contentUnite = {
            tieuDe: "",
            thongTinChuongTrinh: "",
            thongTinSoLuongSanPhamKhuyenMaiDaChon: "",
            noiDungDieuHuongChonSanPhamKhuyenMai: "",
            moRongDanhSachSanPhamKhuyenMai: "",
            labelKhuyenMai: "",
            tongSoTien: "",
            tongGiaTriGiamGia: "",
            noiDungNutMoDunChenManChiTietSanPham: "",
            noiDungNutMoDunChenManGioHang: "",
        };

        let obj = type === "free" ? contentFree : contentSale;

        for (const property in content) {
            if (content[property] === "") {
                contentUnite[property] = genText(obj[property], discount);
            } else {
                contentUnite[property] = genText(content[property], discount);
            }
        }
        return contentUnite;
    }

    function configColor(color) {
        let r = document.querySelector(":root");
        for (const property in color) {
            r.style.setProperty(`--${property}`, color[property]);
        }
    }

    function genText(str, discount) {
        return str
            .replace(/{{quantity_item_1}}/g, numberX)
            .replace(/{{quantity_gift_1}}/g, numberY)
            .replace(/{{quantity_item_2}}/g, "<span class='item-select'>0</span>")
            .replace(/{{quantity_gift_2}}/g, "<span class='number_y'>" + numberY + "</span>")
            .replace(/{{discount}}/g, "-" + discount);
    }

    let pageProduct = $(".sapo-buyxgety-module-detail-v2").length;
    if (
        pageProduct > 0 &&
        $(".sapo-buyxgety-module-detail").length === 0 &&
        $(".sapo-buyxgety-module-detail-v2 .module-buyxgety").length === 0 &&
        document.querySelectorAll("script[data-template=buyxgetyModuleProductV2]").length === 0
    ) {
        let templateScriptDetail = `<script type="text/x-custom-template" data-template="buyxgetyModuleDetailV2">
            <div class="module-buyxgety">
                <div class="title-buyxgety">
                    <h3 class="h3-buyxgety">:tieuDe:</h3>
                    <div class="note-buyxgety">
                        <div>:thongTinChuongTrinh:</div>
                        <div>:thongTinSoLuongSanPhamKhuyenMaiDaChon:</div>
                    </div>
                </div>
                <div class="module-content-buyxgety">
                    <div class="list-product-buyxgety">:product:</div>
                    <div class="pl-30">
                        <strong>:noiDungDieuHuongChonSanPhamKhuyenMai:</strong>
                        <div class="list-product list-product-buyxgety">
                            :listProduct:
                        </div>
                    </div>
                    :showMore:
                </div>
                <div class="footer-buyxgety">
                    <div class="price-buyxgety">
                        <span>
                            :tongSoTien:
                            <strong class="old-price-buyxgety">:oldPrice:</strong>
                        </span>
                        <span>
                            :tongGiaTriGiamGia:
                            <strong class="saving-price-buyxgety">:newPrice:</strong>
                        </span>
                    </div>
                    <div>
                        <button class="btn-addCart" onclick="event.preventDefault(); submitDealV2(this)" disabled="true">
                            <span>:noiDungNutMoDunChenManChiTietSanPham:</span>
                        </button>
                    </div>
                </div>
            </div>
        </script>`;

        let templateScriptModuleProduct = `<script type="text/x-custom-template" data-template="buyxgetyModuleProductV2">
            <div class="item-product-buyxgety" data-product-id=":productId:">
                <div class="buy-x-get-y-checkbox">
                    <div class="buy-x-get-y-form-group">
                        <label>
                            <input type="checkbox" class="module-product-buyxgety product-:productId:" data-variantId=":variantId:" data-option=":variantName:" data-price=":productPriceRegular:" data-quantity=":numberX:" checked disabled />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="product-image-buyxgety">
                    <img src=":productImage:" alt=":productTitle:" />
                </div>
                <div class="product-content-buyxgety">
                    <div class="product-info-buyxgety">
                        <div class="box-product-title-buyxgety">
                            <div class="product-title-buyxgety" title=":productTitle:">:productTitle:</div>
                            <div class="box-action-buyxgety">
                                <div>
                                    <div class="product-variant-buyxgety">:variantTitle:</div>
                                    <div class="option-and-quantity-buyxgety">:optionProduct:
                                        <div class="btn-group-buyxgety">
                                            <button onclick="event.preventDefault(); reductionQuantityProduct(this, :productId:)">-</button>
                                            <span class="quantity-product_:productId:">:numberX:</span>
                                            <button onclick="event.preventDefault(); addQuantityProduct(this, :productId:)">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="price-buyxgety">
                                    <div class="price-old-buyxgety" data-price=":productPriceRegular:">:productPriceRegularFormat:</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="text" class="id-item" value=":variantId:" style="display: none;" />
            </div>
        </script>`;

        let templateScriptModuleList = `<script type="text/x-custom-template" data-template="buyxgetyModuleListProductV2">
            <div class="item-product-buyxgety" data-product-id=":productId:">
                <div class="buy-x-get-y-checkbox">
                    <div class="buy-x-get-y-form-group">
                        <label>
                            <input
                                class="select-item-buyxgety product-:productId:"
                                type="checkbox"
                                data-compare_at_price=":oldPrice:"
                                data-price=":productPriceRegular:"
                                data-variantId=":variantId:"
                                data-option=":variantName:"
                                data-quantity="1"
                                onchange="chooseItem(this)"
                            />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class=" product-image-buyxgety">
                    <a href=":productUrl:" target="_blank">
                        <img src=":productImage:" alt=":productTitle:" />
                    </a>
                </div>
                <div class="product-content-buyxgety">
                    <div class="product-info-buyxgety">
                        <div class="box-product-title-buyxgety">
                            <div class="product-title-buyxgety">
                                <span>:notFree:</span>
                                <a href=":productUrl:" target="_blank" title=":productTitle:">
                                    :productTitle:
                                </a>
                            </div>
                            <div class="box-action-buyxgety">
                                <div>
                                    <div class="product-variant-buyxgety">:variantTitle:</div>
                                    <div class="option-and-quantity-buyxgety">
                                        :optionProduct:
                                        <div class="btn-group-buyxgety">
                                            <button onclick="event.preventDefault(); reductionQuantity(this, :productId:)">-</button>
                                            <span class="quantity_:productId:">1</span>
                                            <button onclick="event.preventDefault(); addQuantity(this, :productId:)">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="price-buyxgety">
                                    <div class="price-regular-buyxgety" data-price=":productPriceRegular:">
                                        :productPriceRegularFormat:
                                    </div>
                                    <del class="price-old-buyxgety" data-price=":productPriceOriginal:">
                                        :productPriceOriginalFormat:
                                    </del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="text" class="id-item" value=":variantId:" style="display: none;" />
            </div>
        </script>`;

        $("body").append(templateScriptDetail, templateScriptModuleProduct, templateScriptModuleList);
        let productsPromotionDetail;
        let product,
            color,
            content,
            contentSetting,
            showModule = true;
        $.ajax({
            url: appOrigin + "/api/client/module-detail",
            type: "POST",
            data: {
                productId: BizwebAnalytics.meta.product.id,
                storeAlias: getAlias(Bizweb.store),
            },
            success: function (data) {
                if (data != null && data !== "" && data.error == null) {
                    let config = JSON.parse(data.config);
                    let displaySetting = config.display_setting ? JSON.parse(config.display_setting) : null;
                    productsPromotionDetail = data.products_promotion;
                    productsPromotionDetailAPI = data.products_promotion;
                    product = data.product;
                    productAPI = data.product;
                    numberX = data.number_x;
                    numberY = data.number_y;
                    let discountValue =
                        data.value_type === "percentage" ? data.value_discount + "%" : Bizweb.formatMoney(data.value_discount, "{{amount_no_decimals_with_comma_separator}}₫");
                    if (!displaySetting) {
                        color = ColorDefault;
                        contentSetting = data.value_type === "free" ? contentFree : contentSale;
                        showModule = true;
                    } else {
                        color = displaySetting.colorSetting;
                        showModule = displaySetting.showSetting.product;
                        contentSetting = data.value_type === "free" ? displaySetting.contentSetting.contentFree : displaySetting.contentSetting.contentSale;
                    }
                    content = convertContent(contentSetting, data.value_type, discountValue);
                    configColor(color);

                    if (showModule !== false) {
                        createTemplate(data, content);
                    }
                } else if (data && data.error != null) {
                    console.log(data.error);
                }
            },
            error: function () {
                console.log("Có lỗi xảy ra");
            },
        });

        function createTemplate(data, content) {
            let TemPlateShowMore = `<div class="show-more">
                <a href="/" onclick="event.preventDefault(); showMore(this)" data-show="0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M3.33333 0.666992L3.33333 8.78033L0.94 6.39366L0 7.33366L4 11.3337L8 7.33366L7.06 6.39366L4.66667 8.78033L4.66667 0.666992L3.33333 0.666992Z" fill="#FF4D4D" />
                    </svg>
                    ${content.moRongDanhSachSanPhamKhuyenMai}
                </a>
            </div>`;
            let TemplateModule = $('script[data-template="buyxgetyModuleDetailV2"]')
                .text()
                .split(/:(.+?):/g);
            let TemplateListProduct = $('script[data-template="buyxgetyModuleListProductV2"]')
                .text()
                .split(/:(.+?):/g);
            let TemplateProduct = $('script[data-template="buyxgetyModuleProductV2"]')
                .text()
                .split(/:(.+?):/g);
            let listProductTemplate = renderProductData(data.products_promotion, content.labelKhuyenMai, false);
            let listItem = listProductTemplate.map(function (itemProduct) {
                return TemplateListProduct.map(render(itemProduct)).join("");
            });
            let productTemplate = renderProductData([data.product], content.labelKhuyenMai, true);
            let product = productTemplate.map(function (itemProduct) {
                return TemplateProduct.map(render(itemProduct)).join("");
            });
            let moduleData = {
                listProduct: listItem.join(""),
                product: product.join(""),
                tieuDe: content.tieuDe,
                thongTinChuongTrinh: content.thongTinChuongTrinh,
                thongTinSoLuongSanPhamKhuyenMaiDaChon: content.thongTinSoLuongSanPhamKhuyenMaiDaChon,
                noiDungDieuHuongChonSanPhamKhuyenMai: content.noiDungDieuHuongChonSanPhamKhuyenMai,
                moRongDanhSachSanPhamKhuyenMai: content.moRongDanhSachSanPhamKhuyenMai,
                labelKhuyenMai: content.labelKhuyenMai,
                tongSoTien: content.tongSoTien,
                tongGiaTriGiamGia: content.tongGiaTriGiamGia,
                noiDungNutMoDunChenManChiTietSanPham: content.noiDungNutMoDunChenManChiTietSanPham,
                noiDungNutMoDunChenManGioHang: content.noiDungNutMoDunChenManGioHang,
                showMore: data.products_promotion.length > 2 ? TemPlateShowMore : "",
                oldPrice: Bizweb.formatMoney(data.product.variants[0].price * numberX, "{{amount_no_decimals_with_comma_separator}}₫"),
                newPrice: Bizweb.formatMoney(0, "{{amount_no_decimals_with_comma_separator}}₫"),
            };

            $.get(document.location.protocol + "//" + document.location.host + document.location.pathname + ".json", function (dataProduct, status) {
                let htmlFinal = $(TemplateModule.map(render(moduleData)).join(""));
                htmlFinal.find(".item-product-buyxgety").each(function (index, item) {
                    if ($(item).find(".product-variant-buyxgety").text() === "Default Title") {
                        $(item).find(".product-variant-buyxgety").hide();
                    }
                    if ($(item).find(".price-old-buyxgety").data("price") === "" || parseInt($(item).find(".price-old-buyxgety").data("price")) === 0) {
                        $(item).find(".price-old-buyxgety").hide();
                    }
                });
                $(".sapo-buyxgety-module-detail-v2").html(htmlFinal);
                if ($(".sapo-buyxgety-module-detail-v2").width() <= 400) {
                    $(".option-and-quantity-buyxgety").attr("style", "display:block!important");
                    $(".btn-group-buyxgety").attr("style", "margin-top:5px!important");
                    $(".module-buyxgety .list-product-buyxgety").attr("style", "max-height: 200px!important");
                }
            });
        }

        function renderProductData(listProduct, notFree, isProduct) {
            let listProductTemplate = [];
            $.each(listProduct, function (i, item) {
                if (item.variants.length > 0) {
                    let ItemProduct = {
                        productId: item.sapo_product_id,
                        productUrl: "/" + item.alias,
                        productTitle: escapeHtml(item.name),
                        notFree: notFree,
                        variantName: item.variants[0].title,
                        numberX: numberX,
                    };
                    ItemProduct["productPriceRegular"] = item.variants[0].price;
                    ItemProduct["oldPrice"] = item.variants[0].compare_at_price;
                    ItemProduct["productPriceRegularFormat"] = Bizweb.formatMoney(item.variants[0].price, "{{amount_no_decimals_with_comma_separator}}₫");
                    ItemProduct["productPriceOriginal"] = item.variants[0].compare_at_price;
                    ItemProduct["productPriceOriginalFormat"] = Bizweb.formatMoney(item.variants[0].compare_at_price, "{{amount_no_decimals_with_comma_separator}}₫");
                    ItemProduct["variantId"] = item.variants[0].sapo_variant_id;
					if (item.variants[0].image) {
						ItemProduct["productImage"] = item.variants[0].image;
                    } else if (item.image) {
						ItemProduct["productImage"] = item.image;
					} else {
                        ItemProduct["productImage"] = "http://bizweb.dktcdn.net/thumb/small/assets/themes_support/noimage.gif";
                    }

                    let optionProduct = selectVariantToTemplate(item, isProduct);
                    if (optionProduct !== null) {
                        ItemProduct["optionProduct"] = optionProduct[0].outerHTML;
                    } else {
                        ItemProduct["optionProduct"] = "";
                        ItemProduct["variantTitle"] = escapeHtml(item.variants[0].title);
                    }
                    listProductTemplate.push(ItemProduct);
                }
            });
            return listProductTemplate;
        }
    }

    function selectVariantToTemplateCart(item) {
        if (item.variants.length > 1) {
            let optionProduct = $("<select/>", {
                class: "selector-variant-buyxgety",
                onChange: "changeVariantCart(this)",
            });

            for (let k = 0; k < item.variants.length; k++) {
				let variantId = item.variants[k].sapo_variant_id;
                optionProduct.append("<option value='" + variantId + "'>" + escapeHtml(item.variants[k].title) + "</option>");
            }
            return optionProduct;
        }
        return null;
    }

    let pageCart = $(".sapo-buyxgety-module-cart-v2").length;
    if (pageCart > 0 && $(".sapo-buyxgety-module-cart").length == 0 && $(".sapo-buyxgety-module-cart-v2 .module-buyxgety-cart").length == 0) {
        let templateScriptModuleCart = `<script type="text/x-custom-template" data-template="buyxgetyModuleCartV2">
            <div class="module-buyxgety-cart">
                <h4 class="h4-buyxgety">:tieuDe:</h4>
                <div class="list-promotion-buyxgety">:listPromotion:</div>
            </div>
        </script>`;
        let templateScriptPromotion = `<script type="text/x-custom-template" data-template="buyxgetyPromotionV2">
            <div class="item-promotion-buyxgety" data-promotion-id=":promotionId:">
                <div class="list-product-buyxgety">:listProduct:</div>
            </div>
        </script>`;
        let templateScriptProduct = `<script type="text/x-custom-template" data-template="buyxgetyProductV2">
            <div class="item-product-buyxgety" data-product-id=":productId:">
                <div class="product-image-buyxgety">
                    <a href=":productUrl:" target="_blank">
                        <img src=":productImage:" alt=":productTitle:" />
                    </a>
                </div>
                <div class="product-content-buyxgety">
                    <div class="product-info-buyxgety">
                        <div class="product-title-buyxgety">
                            <span>:labelKhuyenMai:</span>
                            <a href=":productUrl:" target="_blank">
                                :productTitle:
                            </a>
                        </div>
                        <div class="product-variant-buyxgety">:variantTitle:</div>
                        <div class="price-buyxgety">
                            <span class="price-regular-buyxgety" data-price=":productPriceRegular:">
                                :productPriceRegularFormat:
                            </span>
                            <del class="price-old-buyxgety" data-price=":productPriceOriginal:">
                                :productPriceOriginalFormat:
                            </del>
                        </div>
                        <div class="option-and-quantity-buyxgety">
                            :optionProduct:
                            <div class="btn-group-buyxgety">
                                <button onclick="event.preventDefault(); reductionQuantityPageCart(this, :productId:)">-</button>
                                <span class="quantity-product_:productId:">1</span>
                                <button onclick="event.preventDefault(); addQuantityPageCart(this, :productId:)">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="action-buyxgety">
                        <button type="button" class="btn-addtocart-buyxgety" onclick="submitDealCartV2(this)">
                            :noiDungNutMoDunChenManGioHang:
                        </button>
                    </div>
                </div>
                <input type="text" class="id-item" value=":variantId:" style="display: none;" data-quantity="1" />
            </div>
        </script>`;
        $("body").append(templateScriptModuleCart, templateScriptPromotion, templateScriptProduct);
        let productCartObject = [];
        let color,
            content,
            contentSetting,
            showModule = true;
        $.ajax({
            url: document.location.protocol + "//" + document.location.host + document.location.pathname + ".json",
            async: false,
            success: function (data) {
                if (data.items.length > 0) {
                    for (let i = 0; i < data.items.length; i++) {
                        let variantId = 0;
                        if (data.items[i].variant_title !== "Default Title") {
                            variantId = data.items[i].variant_id;
                        }
                        let item = {
                            product_id: data.items[i].product_id,
                            quantity: data.items[i].quantity,
                            variant_id: variantId,
                        };
                        productCartObject.push(item);
                    }
                    getDataModule(productCartObject);
                }
            },
        });

        function getDataModule(products) {
            if (products.length > 0) {
                let productsJson = JSON.stringify(products);
                $.ajax({
                    url: appOrigin + "/api/client/module-cart?storeAlias=" + getAlias(Bizweb.store),
                    type: "POST",
                    contentType: "application/json",
                    data: productsJson,
                    processData: false,
                    success: function (data) {
                        if (data.error == null && data != null && data != "") {
                            window.promotionsCart = data.promotions;
                            let config = JSON.parse(data.promotions[0].config);
                            let displaySetting = config.display_setting ? JSON.parse(config.display_setting) : null;
                            let type = data.promotions[0].value_type == "percentage" ? "%" : "đ";
                            if (data.promotions[0].value_type == "free") {
                                data.value_type = "free";
                            }
                            let discountValue = data.promotions[0].value_discount + type;
                            if (!displaySetting) {
                                color = ColorDefault;
                                contentSetting = data.value_type === "free" ? contentFree : contentSale;
                                showModule = true;
                            } else {
                                color = displaySetting.colorSetting;
                                showModule = displaySetting.showSetting.product;
                                contentSetting = data.value_type === "free" ? displaySetting.contentSetting.contentFree : displaySetting.contentSetting.contentSale;
                            }
                            content = convertContent(contentSetting, data.value_type, discountValue);
                            configColor(color);
                            if (showModule != false) {
                                createTemplateCart(data.promotions, content);
                            }
                        } else if (data.error != null) {
                            console.log(data.error);
                        }
                    },
                    error: function () {
                        console.log("Có lỗi xảy ra");
                    },
                });
            }
        }

        function createTemplateCart(listPromotion, content) {
            let TemplateModule = $('script[data-template="buyxgetyModuleCartV2"]')
                .text()
                .split(/\:(.+?)\:/g);
            var listPromotion = renderPromotionDataCart(listPromotion, content);
            let moduleData = {
                listPromotion: listPromotion.join(""),
                tieuDe: content.tieuDe,
            };
            let htmlFinal = $(TemplateModule.map(render(moduleData)).join(""));
            htmlFinal.find(".item-product-buyxgety").each(function (index, item) {
                if ($(item).find(".product-variant-buyxgety").text() === "Default Title") {
                    $(item).find(".product-variant-buyxgety").hide();
                }
                if (parseInt($(item).find(".price-old-buyxgety").data("price")) === 0) {
                    $(item).find(".price-old-buyxgety").hide();
                }
            });
            $(".sapo-buyxgety-module-cart-v2").html(htmlFinal);
        }

        function renderPromotionDataCart(listPromotion, content) {
            let listPromotionTemplate = [];
            $.each(listPromotion, function (i, item) {
                if (item.products_promotion.length > 0) {
                    let TemplatePromotion = $('script[data-template="buyxgetyPromotionV2"]')
                            .text()
                            .split(/\:(.+?)\:/g),
                        TemplateProduct = $('script[data-template="buyxgetyProductV2"]')
                            .text()
                            .split(/\:(.+?)\:/g);
                    let listProductTemplate = renderProductDataCart(item.products_promotion);
                    let listItem = listProductTemplate.map(function (itemProduct) {
                        itemProduct.labelKhuyenMai = content.labelKhuyenMai;
                        itemProduct.noiDungNutMoDunChenManGioHang = content.noiDungNutMoDunChenManGioHang;
                        return TemplateProduct.map(render(itemProduct)).join("");
                    });
                    let moduleData = {
                        promotionId: item.promotion_id,
                        listProduct: listItem.join(""),
                    };

                    let htmlFinal = TemplatePromotion.map(render(moduleData)).join("");
                    listPromotionTemplate.push(htmlFinal);
                }
            });
            return listPromotionTemplate;
        }

        function renderProductDataCart(listProduct) {
            let listProductTemplate = [];
            $.each(listProduct, function (i, item) {
                if (item.variants.length > 0) {
                    let ItemProduct = {
                        productId: item.sapo_product_id,
                        productUrl: "/" + item.alias,
                        productTitle: escapeHtml(item.name),
                    };

                    ItemProduct["productPriceRegular"] = item.variants[0].price;
                    ItemProduct["productPriceRegularFormat"] = Bizweb.formatMoney(item.variants[0].price, "{{amount_no_decimals_with_comma_separator}}₫");
                    ItemProduct["productPriceOriginal"] = item.variants[0].compare_at_price;
                    ItemProduct["productPriceOriginalFormat"] = Bizweb.formatMoney(item.variants[0].compare_at_price, "{{amount_no_decimals_with_comma_separator}}₫");
                    ItemProduct["variantId"] = item.variants[0].sapo_variant_id;

					if(item.variants[0].image){
						ItemProduct["productImage"] = item.variants[0].image;
					}else if (item.image) {
						ItemProduct["productImage"] = item.image;
					}else {
						ItemProduct["productImage"] = 'http://bizweb.dktcdn.net/thumb/small/assets/themes_support/noimage.gif';
					}


                    let optionProduct = selectVariantToTemplateCart(item);
                    if (optionProduct !== null) {
                        ItemProduct["optionProduct"] = optionProduct[0].outerHTML;
                    } else {
                        ItemProduct["optionProduct"] = "";
                        ItemProduct["variantTitle"] = escapeHtml(item.variants[0].title);
                    }
                    listProductTemplate.push(ItemProduct);
                }
            });
            return listProductTemplate;
        }
    }
});

function changeVariantProduct(elem) {
    let module = $(elem).parents(".module-buyxgety");
    let variantSelected = $(elem).find("option:selected").val(),
        itemProduct = $(elem).parents(".item-product-buyxgety"),
        dataProduct = productAPI,
        dataVariant = dataProduct.variants.filter((item) => item.sapo_variant_id == variantSelected),
		variantId = dataVariant[0].sapo_variant_id;

    itemProduct.find(".module-product-buyxgety").attr("data-variantId", variantId);
    itemProduct.find(".module-product-buyxgety").attr("data-option", dataVariant[0].title);
    itemProduct.find(".module-product-buyxgety").attr("data-price", dataVariant[0].price);
    itemProduct.find(".price-old-buyxgety").attr("data-price", dataVariant[0].price).text(Bizweb.formatMoney(dataVariant[0].price, "{{amount_no_decimals_with_comma_separator}}₫"));
    itemProduct.find(".id-item-buyxgety").val(variantSelected);
	if(dataVariant[0].image){
		itemProduct.find(".product-image-buyxgety img").attr('src', dataVariant[0].image);
	}else if (dataProduct.image) {
     		itemProduct.find(".product-image-buyxgety img").attr('src', dataProduct.image);
    }else {
		itemProduct.find(".product-image-buyxgety img").attr('src', 'http://bizweb.dktcdn.net/thumb/small/assets/themes_support/noimage.gif');
	}
    calculatePrice(module);
}

function changeVariant(elem) {
    let module = $(elem).parents(".module-buyxgety");
    let variantSelected = $(elem).find("option:selected").val(),
        itemProduct = $(elem).parents(".item-product-buyxgety"),
        dataProduct = productsPromotionDetailAPI.filter((item) => item.sapo_product_id == itemProduct.data("product-id")),
        dataVariant = dataProduct[0].variants.filter((item) => item.sapo_variant_id == variantSelected),
		variantId = dataVariant[0].sapo_variant_id;
    itemProduct.find(".select-item-buyxgety").attr("data-variantId", variantId);
    itemProduct.find(".select-item-buyxgety").attr("data-option", dataVariant[0].title);
    itemProduct.find(".select-item-buyxgety").attr("data-price", dataVariant[0].price);
    itemProduct.find(".select-item-buyxgety").attr("data-compare_at_price", dataVariant[0].compare_at_price);
	if(dataVariant[0].image){
		itemProduct.find(".product-image-buyxgety img").attr('src', dataVariant[0].image);
	}else if (dataProduct[0].image) {
		itemProduct.find(".product-image-buyxgety img").attr('src', dataProduct[0].image);
	}else {
		itemProduct.find(".product-image-buyxgety img").attr('src', 'http://bizweb.dktcdn.net/thumb/small/assets/themes_support/noimage.gif');
	}
    itemProduct
        .find(".price-regular-buyxgety")
        .attr("data-price", dataVariant[0].price)
        .text(Bizweb.formatMoney(dataVariant[0].price, "{{amount_no_decimals_with_comma_separator}}₫"));
    itemProduct
        .find(".price-old-buyxgety")
        .attr("data-price", dataVariant[0].compare_at_price)
        .text(Bizweb.formatMoney(dataVariant[0].compare_at_price, "{{amount_no_decimals_with_comma_separator}}₫"));
    itemProduct.find(".id-item-buyxgety").val(variantSelected);
    if (dataVariant[0].compare_at_price == null || !dataVariant[0].compare_at_price > 0 || dataVariant[0].price == dataVariant[0].compare_at_price) {
        itemProduct.find(".price-old-buyxgety").hide();
    } else {
        itemProduct.find(".price-old-buyxgety").show();
    }
    calculatePrice(module);
}


function changeVariantCart(elem) {
    let variantSelected = $(elem).find("option:selected").val(),
        itemPromotion = $(elem).parents(".item-promotion-buyxgety"),
        itemProduct = $(elem).parents(".item-product-buyxgety"),
        dataPromotion = window.promotionsCart.filter((item) => item.promotion_id == itemPromotion.data("promotion-id")),
        listProductPromotion = dataPromotion[0].products_promotion,
        dataProduct = listProductPromotion.filter((item) => item.sapo_product_id == itemProduct.data("product-id")),
        dataVariant = dataProduct[0].variants.filter((item) => item.sapo_variant_id == variantSelected);
    itemProduct.find(".price-regular").attr("data-price", dataVariant[0].price).text(Bizweb.formatMoney(dataVariant[0].price, "{{amount_no_decimals_with_comma_separator}}₫"));
    itemProduct
        .find(".price-old")
        .attr("data-price", dataVariant[0].compare_at_price)
        .text(Bizweb.formatMoney(dataVariant[0].compare_at_price, "{{amount_no_decimals_with_comma_separator}}₫"));
    itemProduct.find(".id-item").val(variantSelected);

	if(dataVariant[0].image){
		itemProduct.find(".product-image-buyxgety img").attr('src', dataVariant[0].image);
	} else if (dataProduct[0].image) {
		itemProduct.find(".product-image-buyxgety img").attr('src', dataProduct[0].image);
	}else {
		itemProduct.find(".product-image-buyxgety img").attr('src', 'http://bizweb.dktcdn.net/thumb/small/assets/themes_support/noimage.gif');
	}

    if (dataVariant[0].compare_at_price == null || !dataVariant[0].compare_at_price > 0 || dataVariant[0].price == dataVariant[0].compare_at_price) {
        itemProduct.find(".price-old").hide();
    } else {
        itemProduct.find(".price-old").show();
    }

    let totalPriceRegular = 0,
        totalPriceOriginal = 0,
        totalPriceSaving = 0;
    itemPromotion.find(".item-product-buyxgety").each(function () {
        totalPriceRegular += parseInt($(this).find(".price-regular-buyxgety").attr("data-price"));
        totalPriceOriginal += parseInt($(this).find(".price-old-buyxgety").attr("data-price"));
    });
    totalPriceSaving = totalPriceOriginal - totalPriceRegular;
    itemPromotion.find(".total-price-bg").find(".price-regular-buyxgety").text(Bizweb.formatMoney(totalPriceRegular, "{{amount_no_decimals_with_comma_separator}}₫"));
    itemPromotion.find(".total-price-bg").find("del").text(Bizweb.formatMoney(totalPriceOriginal, "{{amount_no_decimals_with_comma_separator}}₫"));
    itemPromotion.find(".total-price-bg").find(".price-saving-buyxgety").text(Bizweb.formatMoney(totalPriceSaving, "{{amount_no_decimals_with_comma_separator}}₫"));
}

function addQuantityPageCart(elem, id) {
    let product = $(elem).parents(".item-product-buyxgety");
    let value = $(product.find(".id-item")[0]).attr("data-quantity");
    let elm = product.find(".quantity-product_" + id);
    $(product.find(".id-item")[0]).attr("data-quantity", Number(value) + 1);
    elm.html(Number(value) + 1);
}
function reductionQuantityPageCart(elem, id) {
    let product = $(elem).parents(".item-product-buyxgety");
    let value = $(product.find(".id-item")[0]).attr("data-quantity");
    let elm = product.find(".quantity-product_" + id);
    if (Number(value) > 1) {
        $(product.find(".id-item")[0]).attr("data-quantity", Number(value) - 1);
        elm.html(Number(value) - 1);
    }
}
function submitDealCartV2(elem) {
    $(elem).prop("disabled", true);
    let product = $(elem).parents(".item-product-buyxgety");
    let variantId = product.find(".id-item").val();
    let quantity = $(product.find(".id-item")[0]).attr("data-quantity");
    if (variantId != null) {
        $.ajax({
            type: "POST",
            url: "/cart/add.js",
            async: false,
            data: "quantity=" + quantity + "&VariantId=" + variantId,
            dataType: "json",
            error: function () {
                $(elem).prop("disabled", false);
            },
            success: function () {
                window.location.href = "/cart";
                $(elem).prop("disabled", false);
            },
            cache: false,
        });
    }
}
function submitDealV2(elem) {
    let module = $(elem).parents(".module-buyxgety");
    let $itemsY = module.find("input.select-item-buyxgety:checkbox:checked");
    let itemX = module.find("input.module-product-buyxgety:checkbox:checked")[0];
    let items = [itemX].concat($itemsY.toArray());
    _addItems(items, function () {
        window.open("/cart", "_blank");
        location.reload();
    });
    $(elem).prop("disabled", true);
}

function _addItems(items, onSuccess) {
    let item = items.shift();
    if (!item) {
        onSuccess();
        return;
    }
    let quantity = $(item).attr("data-quantity");
    let variantId = parseInt($(item).attr("data-variantid"));

    $.ajax({
        type: "POST",
        url: "/cart/add.js",
        async: false,
        data: "quantity="+ quantity + "&VariantId=" + variantId,
        dataType: "json",
        success: function () {
            _addItems(items, onSuccess);
        },
        cache: false,
		error: function (variantId, r) {
			Bizweb.onError(variantId, r)
		}
    });
}

function calculatePrice(module) {
    let itemSelect = module.find("input.select-item-buyxgety:checkbox:checked");
    let product = module.find("input.module-product-buyxgety:checkbox:checked");
    let totalPrice = Number($(product[0]).attr("data-price")) * Number($(product[0]).attr("data-quantity"));
    let savings = 0;
    if (itemSelect.length) {
        for (let i = 0; i < itemSelect.length; i++) {
            totalPrice += Number($(itemSelect[i]).attr("data-price")) * Number($(itemSelect[i]).attr("data-quantity"));
            savings +=
                (Number($(itemSelect[i]).attr("data-compare_at_price")) - Number($(itemSelect[i]).attr("data-price"))) *
                Number($(itemSelect[i]).attr("data-quantity"));
        }
    }
    module.find(".old-price-buyxgety").html(Bizweb.formatMoney(Number(totalPrice), "{{amount_no_decimals_with_comma_separator}}₫"));
    module.find(".saving-price-buyxgety").html(Bizweb.formatMoney(Number(savings), "{{amount_no_decimals_with_comma_separator}}₫"));
}

function resetToMax(module) {
    let itemSelect = Number(module.find(".item-select")[0].textContent);
    let number_y = Number(module.find(".number_y")[0].textContent);
    let max = number_y - itemSelect;
    if (max <= 0) {
        max = 1;
    }

    let itemUnCheck = module.find("input.select-item-buyxgety:checkbox:not(:checked)");
    for (let i = 0; i < itemUnCheck.length; i++) {
        let id = $(itemUnCheck[i]).attr("id");
        let elm = module.find(".quantity_" + id);
        let value = $(itemUnCheck[i]).attr("data-quantity");
        if (value > max) {
            $(itemUnCheck[i]).attr("data-quantity", max);
            elm.html(max);
        }
    }
}

function calculateItemSelect(module) {
    let itemSelect = module.find("input.select-item-buyxgety:checkbox:checked");
    let item = module.find("input.select-item-buyxgety:checkbox:not(:checked)");
    let number_y = Number(module.find(".number_y")[0].textContent);
    let totalQuantity = 0;

    for (let i = 0; i < itemSelect.length; i++) {
        totalQuantity = totalQuantity + Number($(itemSelect[i]).attr("data-quantity"));
    }
    module.find(".item-select").html(totalQuantity);
    if (totalQuantity >= number_y) {
        for (let i = 0; i < item.length; i++) {
            item[i].disabled = true;
        }
    } else {
        for (let i = 0; i < item.length; i++) {
            item[i].disabled = false;
        }
    }
}

function reductionQuantityProduct(elem, id) {
    let module = $(elem).parents(".module-buyxgety");
    let product = $(elem).parents('.item-product-buyxgety');
    let inputProduct = product.find(".product-" + id);
    let value = Number(inputProduct.attr("data-quantity"));
    let elm = product.find(".quantity-product_" + id);
    let number_y = module.find(".number_y");
    let itemSelect = Number(module.find(".item-select")[0].textContent);
    if (value > numberX) {
        inputProduct.attr("data-quantity", value - 1);
        elm.html(value - 1);
        value--;
        number_y.html(Math.floor(value / numberX) * numberY);
    }

    if (itemSelect > Number(number_y[0].textContent)) {
        let item = module.find("input.select-item-buyxgety:checkbox");
        for (let i = 0; i < item.length; i++) {
            item[i].checked = false;
        }
        calculateItemSelect(module);
    }
    calculatePrice(module);
    resetToMax(module);
}

function addQuantityProduct(elem, id) {
    let module = $(elem).parents(".module-buyxgety");
    let product = $(elem).parents('.item-product-buyxgety');
    let inputProduct = product.find(".product-" + id);
    let value = Number(inputProduct.attr("data-quantity"));
    let elm = product.find(".quantity-product_" + id);
    let number_y = module.find(".number_y");
    inputProduct.attr("data-quantity", value + 1);
    elm.html(value + 1);
    calculatePrice(module);
    value++;
    if (value >= numberX && value % numberX == 0) {
        number_y.html((value / numberX) * numberY);
    }
    calculateItemSelect(module);
}

function reductionQuantity(elem, id) {
    let module = $(elem).parents(".module-buyxgety");
    let product = $(elem).parents('.item-product-buyxgety');
    let inputProduct = product.find(".product-" + id);
    let value = Number(inputProduct.attr("data-quantity"));
    let elm = product.find(".quantity_" + id);

    if (Number(value) > 1) {
        inputProduct.attr("data-quantity", Number(value) - 1);
        elm.html(Number(value) - 1);
    }
    calculatePrice(module);
    calculateItemSelect(module);
}

function addQuantity(elem, id) {
    let module = $(elem).parents(".module-buyxgety");
    let product = $(elem).parents(".item-product-buyxgety");
    let inputProduct = product.find(".product-" + id);
    let value = Number(inputProduct.attr("data-quantity"));
    let elm = module.find(".quantity_" + id);
    let itemSelect = Number(module.find(".item-select")[0].textContent);
    let number_y = Number(module.find(".number_y")[0].textContent);
    let max = number_y - itemSelect;
    let checkedMaxValue = inputProduct.has(":checked") ? itemSelect < number_y : value < max;

    if (value < number_y && max <= number_y && checkedMaxValue) {
        inputProduct.attr("data-quantity", Number(value) + 1);
        elm.html(value + 1);
    }
    calculatePrice(module);
    calculateItemSelect(module);
    resetToMax(module);
}

function selectVariantToTemplate(item, isProduct) {
    if (item.variants.length > 1) {
        let optionProduct = $("<select/>", {
            class: "selector-variant-buyxgety ",
            onChange: isProduct ? "changeVariantProduct(this)" : "changeVariant(this)",
        });
        for (let k = 0; k < item.variants.length; k++) {
			let variantId = item.variants[k].sapo_variant_id;
            optionProduct.append("<option value='" + variantId + "'>" + escapeHtml(item.variants[k].title) + "</option>");
        }
        return optionProduct;
    }
    return null;
}

function chooseItem(elm) {
    let module = $(elm).parents(".module-buyxgety");
    let itemSelect = module.find("input.select-item-buyxgety:checkbox:checked");
    let item = module.find("input.select-item-buyxgety:checkbox:not(:checked)");
    let number_y = Number(module.find(".number_y")[0].textContent);

    let totalQuantity = 0;
    for (let i = 0; i < itemSelect.length; i++) {
        totalQuantity = totalQuantity + Number($(itemSelect[0]).attr("data-quantity"));
    }
    module.find(".item-select").html(totalQuantity);

    for (let i = 0; i < item.length; i++) {
        if (elm.checked) {
            if (totalQuantity >= number_y) {
                item[i].disabled = true;
            }
        } else {
            item[i].disabled = false;
        }
    }
    if(itemSelect.length > 0){
        module.find(".btn-addCart").prop("disabled", false);
    }else{
        module.find(".btn-addCart").prop("disabled", true);
    }
    calculatePrice(module);
    calculateItemSelect(module);
    resetToMax(module);
}

function showMore(e) {
    let module = $(e).parents(".module-buyxgety");
    if ($(e).attr("data-show") == "0") {
        $(e).attr("data-show", "1");
        e.style.display = "none";
        module.find(".list-product")[0].style.maxHeight = "811px";
        module.find(".list-product")[0].style.overflow = "auto";
    }
}
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

let ColorDefault = {
    mauNenKhungTieuDe: "#FFF0F0",
    mauChuKhungTieuDe: "#212B35",

    mauNenKhung: "#FFF0F0",
    mauChuDanhSachSanPham: "#212B35",
    mauIconCheckbox: "#FF4D4D",
    mauDuongKePhanBiet: "#DFE4E8",
    mauChuXemThem: "#FF4D4D",

    mauGiaGocSanPham: "#A6AAAE",
    mauGiaGiamGia: "#FF4D4D",

    mauNenKhungPhienBanVaSoLuongMua: "#fff",
    mauChuKhungPhienBanVaSoLuongMua: "#596068",

    mauNenLabel: "#FFE5E5",
    mauChuLabel: "#FF4D4D",

    mauNenKhungDuoiCung: "#FFF0F0",
    mauChuTongTien: "#212B35",
    mauChuTongGiamGia: "#FF4D4D",

    mauNenNutThemGioHang: "#FF4D4D",
    mauChuNutThemGioHang: "#FFFFFF",
};

let contentFree = {
    tieuDe: "Mua để nhận quà",
    thongTinChuongTrinh: "Mua {{quantity_item_1}} sản phẩm để nhận {{quantity_gift_1}} phần quà miễn phí dưới đây",
    thongTinSoLuongSanPhamKhuyenMaiDaChon: "Đã chọn {{quantity_item_2}}/{{quantity_gift_2}} sản phẩm quà tặng",
    noiDungDieuHuongChonSanPhamKhuyenMai: "Chọn sản phẩm quà tặng:",
    moRongDanhSachSanPhamKhuyenMai: "Xem thêm",
    labelKhuyenMai: "Miễn phí",
    tongSoTien: "Tổng cộng:",
    tongGiaTriGiamGia: "Tiết kiệm:",
    noiDungNutMoDunChenManChiTietSanPham: "Bấm để mua đơn quà tặng",
    noiDungNutMoDunChenManGioHang: "Thêm vào giỏ hàng",
};
let contentSale = {
    tieuDe: "Mua thêm giá sốc",
    thongTinChuongTrinh: "Mua {{quantity_item_1}} sản phẩm để nhận {{quantity_gift_1}} sản phẩm giảm giá",
    thongTinSoLuongSanPhamKhuyenMaiDaChon: "Đã chọn {{quantity_item_2}}/{{quantity_gift_2}} sản phẩm giá sốc",
    noiDungDieuHuongChonSanPhamKhuyenMai: "Chọn sản phẩm giá sốc:",
    moRongDanhSachSanPhamKhuyenMai: "Xem thêm",
    labelKhuyenMai: "Giá sốc {{discount}}",
    tongSoTien: "Tổng cộng:",
    tongGiaTriGiamGia: "Tiết kiệm:",
    noiDungNutMoDunChenManChiTietSanPham: "Bấm để mua đơn giá sốc",
    noiDungNutMoDunChenManGioHang: "Thêm vào giỏ hàng",
};