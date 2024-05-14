<header class="ega-header header header_sticky">
    <div class="container">
        <div class="header-wrap">
            <div id="logo">
                <a href="/" class="logo-wrapper">
                    <img class="img-fluid"
                        src="{{ asset('client/asset/img/LogoCyBer1.png') }}"
                        alt="logo CyBer Store" width="300" height="100">
                </a>
            </div>

            <div class="ega-form-search">
                <form action="#" method="get" class="input-group search-bar custom-input-group "
                    role="search">
                    <input type="text" name="query" value="" autocomplete="off"
                        class="input-group-field auto-search form-control " required=""
                        data-placeholder="Nhập tên sản phầm cần tìm..." placeholder="Nhập tên sản phầm cần ">
                    <input type="hidden" name="type" value="product">
                    <span class="input-group-btn btn-action">
                        <button type="submit" aria-label="search" class="btn text-white icon-fallback-text h-100">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </span>
                </form>

                <div class="search-dropdow">
                    <ul class="search__list pl-0 d-flex list-unstyled mb-0 flex-wrap">
                        <li class="mr-2">
                            <a id="filter-search-owlab-neon" href="#">Owlab Neon</a>
                        </li>
                        <li class="mr-2">
                            <a id="filter-search-stab" href="#"> Stab</a>
                        </li>
                        <li class="mr-2">
                            <a id="filter-search-switch" href="#"> Switch</a>
                        </li>
                        <li class="mr-2">
                            <a id="filter-search-lo-xo" href="#"> Lò xo</a>
                        </li>
                        <li class="mr-2">
                            <a id="filter-search-keycap" href="#"> Keycap</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="ega-header-layer"></div>

    </div>

    
</header>