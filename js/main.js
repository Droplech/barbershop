$(function () {

    $(".our-works").find(".select-view").children().on("click", function (e) {
        let currentTarget = $(e.currentTarget),
            targetIndex = $(e.currentTarget).attr("index"),
            gallerySlider = $(".our-works").find(".slider-wrapper"),
            targetIndexGallery = $(".our-works").find(`.slider-wrapper[index='${targetIndex}']`);

            
        if (!currentTarget.hasClass("select-view__item-active")) {
            $(".our-works").find(".select-view").children().removeClass("select-view__item-active");
            currentTarget.addClass("select-view__item-active");
            gallerySlider.addClass("our-works-slider-wrapper-hidden");
            targetIndexGallery.attr("index", targetIndex).removeClass("our-works-slider-wrapper-hidden");
            gallerySlider.slick('refresh');
        }
    });
    var $carousel = $(".our-works").find(".slider-wrapper");
    $(".our-works").find(".slider-wrapper").slick({
        slidesToShow: 4,
        nextArrow: '<button class="slick-arrow slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 23" enable-background="new 0 0 49 23" xml:space="preserve"> <g> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M48.8,11.1l-11-10.9c-0.2-0.2-0.6-0.2-0.8,0 c-0.2,0.2-0.2,0.6,0,0.8l10,10H0.8c-0.3,0-0.6,0.2-0.6,0.6v0c0,0.3,0.2,0.6,0.6,0.6h46.3l-10,10c-0.2,0.2-0.2,0.6,0,0.8 c0.2,0.2,0.6,0.2,0.8,0l11-10.9C49,11.7,49,11.3,48.8,11.1z"/> </g> </g> </svg></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 23" enable-background="new 0 0 49 23" xml:space="preserve"> <g> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M48.8,11.1l-11-10.9c-0.2-0.2-0.6-0.2-0.8,0 c-0.2,0.2-0.2,0.6,0,0.8l10,10H0.8c-0.3,0-0.6,0.2-0.6,0.6v0c0,0.3,0.2,0.6,0.6,0.6h46.3l-10,10c-0.2,0.2-0.2,0.6,0,0.8 c0.2,0.2,0.6,0.2,0.8,0l11-10.9C49,11.7,49,11.3,48.8,11.1z"/> </g> </g> </svg></button>',
        responsive: [
            {
                breakpoint: 1249,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 759,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: true
                }
            }
        ]
    }).magnificPopup({
        type: 'image',
        delegate: '.slick-slide a',
        gallery: {
            enabled: true,
            tCounter: ''
        },
    });
    $(".our-worker").find(".name-worker-wrapper").slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        swipe: false
    });
    $(".our-worker").find(".slider-wrapper").slick({
        slidesToShow: 2,
        variableWidth: true,
        asNavFor: '.name-worker-wrapper',
        nextArrow: '<button class="slick-arrow slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 23" enable-background="new 0 0 49 23" xml:space="preserve"> <g> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M48.8,11.1l-11-10.9c-0.2-0.2-0.6-0.2-0.8,0 c-0.2,0.2-0.2,0.6,0,0.8l10,10H0.8c-0.3,0-0.6,0.2-0.6,0.6v0c0,0.3,0.2,0.6,0.6,0.6h46.3l-10,10c-0.2,0.2-0.2,0.6,0,0.8 c0.2,0.2,0.6,0.2,0.8,0l11-10.9C49,11.7,49,11.3,48.8,11.1z"/> </g> </g> </svg></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 23" enable-background="new 0 0 49 23" xml:space="preserve"> <g> <g> <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M48.8,11.1l-11-10.9c-0.2-0.2-0.6-0.2-0.8,0 c-0.2,0.2-0.2,0.6,0,0.8l10,10H0.8c-0.3,0-0.6,0.2-0.6,0.6v0c0,0.3,0.2,0.6,0.6,0.6h46.3l-10,10c-0.2,0.2-0.2,0.6,0,0.8 c0.2,0.2,0.6,0.2,0.8,0l11-10.9C49,11.7,49,11.3,48.8,11.1z"/> </g> </g> </svg></button>',
    });
    $(".our-worker").find(".slider-wrapper").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let slidesLength = slick.$slides.length - 1,
            isCurrentFirstOrLast = currentSlide === 0 || currentSlide === slidesLength,
            isNextFirstOrLast = nextSlide === 0 || nextSlide === slidesLength;

        if (isCurrentFirstOrLast && isNextFirstOrLast) {
            let nextClone = $(event.currentTarget).find('.slick-cloned.slick-active');
            setTimeout(function () {
                nextClone.addClass('slick-current');
            }, 1)
        }
    });
    $(".contacts").find(".custom-select").on("click", function (e) {
        if (!$(this).hasClass("custom-select-active")) {
            $(this).css("border-radius", "22px 22px 0 0")
        }
        else {
            setTimeout(() => {
                $(this).css("border-radius", "22px")
            }, 200)
        }
        $(this).toggleClass("custom-select-active").find(".custom-option-menu").slideToggle(200);
        if ($(e.target).is("li")) {
            $(this).find(".current-option").text($(e.target).text());
        }
    });
    $(".burger").on("click", function () {
        if ($(".header-burger-menu").css("display") == "none") {
            $(".header-burger-menu").fadeIn(200);
            $("html, body").css("overflow-y", "hidden");
            $(this).addClass("burger-active");
        }
        else if ($(".header-burger-menu").css("display") == "block") {
            $(".header-burger-menu").fadeOut(200);
            $("html, body").css("overflow-y", "auto");
            $(this).removeClass("burger-active");
        }
    });
    $(".all-services").on("click", function () {
        $(".pop-up-our-services").fadeIn(200);
        $(".black-out-pop-up-our-services").fadeIn(200);
    });
    $(".close-pop-up-our-services").on("click", function () {
        $(".pop-up-our-services").fadeOut(200);
        $(".black-out-pop-up-our-services").fadeOut(200);
    });
    $(".header").find(".location").on("click", function () {
        $(".pop-up-select-city").fadeIn(200);
        $(".black-out-pop-up-select-city").fadeIn(200);

    });
    $(".close-pop-up-select-city").on("click", function () {
        $(".pop-up-select-city").fadeOut(200);
        $(".black-out-pop-up-select-city").fadeOut(200);
    });
    $(".pop-up-select-city").find(".select-wrapper").children().on("click", function () {
        $(".header").find(".location .title").text($(this).text());
        $(".pop-up-select-city").fadeOut(200);
        $(".black-out-pop-up-select-city").fadeOut(200);
    });











    $('.give_feedback').click(function(e){
        e.preventDefault()
        $('.pop-up-add-reviews').fadeIn(200);
        $('.black-out-pop-up-add-review').fadeIn(200);
    })
    $('.pop-up-add-reviews').find('.btn_close_form').click(function(){
        $('.pop-up-add-reviews').fadeOut(200);
        $('.black-out-pop-up-add-review').fadeOut(200);
    })
    $('.pop-up-add-reviews').find('form button').click(function(){
        $('.pop-up-add-reviews').fadeOut(200);
        $('.black-out-pop-up-add-review').fadeOut(200);
    })
    $('.show_block_terms_use').click(function(e){
        e.preventDefault()
        $('.pop-up-add-reviews').fadeOut(200);
        $('.pop-up-terms-use').fadeIn(200);
    })
    $('.pop-up-terms-use').find('.btn_close_form').click(function(){
        $('.pop-up-terms-use').fadeOut(200);
        $('.pop-up-add-reviews').fadeIn(200);
        
    })
    $('.reviews_slider .swiper-slide_item').click(function(){
        $('.rew_item_full').fadeOut(200)
        $( $(this).attr('data-tab') ).fadeIn(200)
        $('.black-out-pop-up-add-review').fadeIn(200);
    })
    $('.rew_item_full').find('.btn_close_form').click(function(){
        $('.rew_item_full').fadeOut(200);
        $('.black-out-pop-up-add-review').fadeOut(200);
        
    })
    $('.black-out-pop-up-add-review').click(function(){
        $('.rew_item_full').fadeOut(200);
        $('.black-out-pop-up-add-review').fadeOut(200);
    });

    $('.black-out-pop-up-add-review').click(function(){
        $('.pop-up-add-reviews').fadeOut(200);
        $('.black-out-pop-up-add-review').fadeOut(200);
        $('.pop-up-terms-use').fadeOut(200);
    })

    $('.sertificate').click(function(e){
        e.preventDefault();
        $('.black-out-pop-up-shop-card').fadeIn(200);
        $('.pop-up-shop-card').fadeIn(200);
    })
    $('.shop_prod_item').click(function(e){
        e.preventDefault();
        $('.black-out-pop-up-shop-card').fadeIn(200);
        $('.pop-up-shop-card').fadeIn(200);
    })
    $('.pop-up-shop-card').find('.btn_close_form').click(function(){
        $('.pop-up-shop-card').fadeOut(200);
        $('.black-out-pop-up-shop-card').fadeOut(200);
    })
    $('.black-out-pop-up-shop-card').click(function(){
        $('.black-out-pop-up-shop-card').fadeOut(200);
        $('.pop-up-shop-card').fadeOut(200);
    })
    $('.pop-up-shop-card').find('a').click(function(e){
        e.preventDefault();
        $('.pop-up-shop-card').fadeOut(200);
        $('.pop-up-buy-product').fadeIn(200);
    })
    $('.pop-up-buy-product').find('.show_block_terms_use').click(function(e){
        e.preventDefault()
        $('.pop-up-buy-product').fadeOut(200)
        $('.pop-up-terms-use-shop').fadeIn(200)
    })

    $('.pop-up-terms-use-shop').find('.btn_close_form').click(function(){
        $('.pop-up-terms-use-shop').fadeOut(200)
        $('.pop-up-buy-product').fadeIn(200)
    })
    $('.pop-up-buy-product').find('.btn_close_form').click(function(){
        $('.pop-up-buy-product').fadeOut(200)
        $('.black-out-pop-up-shop-card').fadeOut(200)
    })
    $('.pop-up-buy-product').find('.bay_this_product').click(function(){
        $('.pop-up-buy-product').fadeOut(200)
        $('.shop-oreder-dane').fadeIn(200)
    })


    $('.shop-oreder-dane').find('.btn_close_form').click(function(){
        $('.shop-oreder-dane').fadeOut(200)
        $('.black-out-pop-up-shop-card').fadeOut(200)
    })
    $('.black-out-pop-up-shop-card').click(function(){
        $('.black-out-pop-up-shop-card, .pop-up-shop-card, .pop-up-buy-product, .shop-oreder-dane, .pop-up-terms-use-shop').fadeOut(200)
    })

    

   
    $('.sign-up').click(function(){
        $('.black-out-pop-up-online_appointment').fadeIn(200)
        $('.pop-up-online_appointment').fadeIn(200)
    })
    $('.pop-up-online_appointment').find('.btn_close_form').click(function(){
        $('.black-out-pop-up-online_appointment').fadeOut(200)
        $('.pop-up-online_appointment').fadeOut(200)
    })
    $('.black-out-pop-up-online_appointment').click(function(){
        $('.black-out-pop-up-online_appointment').fadeOut(200)
        $('.pop-up-online_appointment').fadeOut(200)
        $('.pop-up-online-service').fadeOut(200)
        $('.pop-up-select-date').fadeOut(200)
        $('.pop-up-select-time').fadeOut(200)
        $('.pop-up-select-master').fadeOut(200)
        $('.pop-up-full_appointment').fadeOut(200)
        $('.pop-up-online_appointment-records').fadeOut(200)
        $('.pop-up-register-form').fadeOut(200)
        $('.pop-up-you-are-written').fadeOut(200)
        $('.pop-up-record-is-cancel').fadeOut(200)
    })
    


        
   






    const counter = (selector, action) => {
        let price = selector.parents('.count').find($('.count_info'));
      
        switch (action) {
          case 'increment': 
            price.val(parseInt(price.val()) + 1); break;
          case 'decrement': 
            if (price.val() < 1) { price.val(0) } else { price.val(parseInt(price.val()) - 1);} break;  
        }
    } 
      
    $('.count_plus').click(function() {
    counter($(this), 'increment')
    })
    
    $('.count_minus').click(function() {
    counter($(this), 'decrement')
    })
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
    
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });


    

    $('.numm-day').find('p').click(function(){
        $('.numm-day').find('p').removeClass('active-p')
        $(this).addClass('active-p')
    })
    $('.pop-up-select-date .title').find('a').click(function(e){
        e.preventDefault()
    })










    if ($(window).width() < 961) {
        let headerHeight = $(".header").height() - 1,
            headerPaddingTop = $(".header").css("padding-top").replace(/px/gi, "");
        $(".header-burger-menu").css("top", `${headerHeight + +headerPaddingTop}px`);
    }
    $(window).on("resize", function () {
        if ($(window).width() < 961) {
            let headerHeight = $(".header").height() - 1,
                headerPaddingTop = $(".header").css("padding-top").replace(/px/gi, "");
            $(".header-burger-menu").css("top", `${headerHeight + +headerPaddingTop}px`);
        }
    });
    $(window).on("scroll", function () {
        if($(window).scrollTop() >= 200) {
            $(".button-up").fadeIn(200);
        } else if ($(window).scrollTop() < 200) {
            $(".button-up").fadeOut(200);
        }
    });
    if($(window).scrollTop() >= 200) {
        $(".button-up").fadeIn(200);
    } else if ($(window).scrollTop() < 200) {
        $(".button-up").fadeOut(200);
    }
    $(".button-up").find("button").on("click", function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 500);
    })



    


    $('.blog_content .page_nav ul li:not(:first-child):not(:last-child)').click(function(){
        $('.blog_content .page_nav ul li:not(:first-child):not(:last-child)').removeClass('active-color')
        $(this).addClass('active-color')
    })



    $('.shop_tab_links a').click(function(e){
        e.preventDefault()
        $('.shop_tab_links a').removeClass('a-shop-active')
        $(this).addClass('a-shop-active')
    })








    $('.terms').click(function(){
        $(this).toggleClass('active')
        
        if($(this).find('.check').attr('checked')){
            $(this).find('.check').attr('checked', false)
        }else{
            $(this).find('.check').attr('checked', true)
        }
    })



    new Swiper('.reviews_content',{
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '#rew-button-next',
            prevEl: '#rew-button-prev',
        },
        pagination: {
            el: '#rew-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' +  '</span>';
            },
        },
        breakpoints: {
            700:{
                slidesPerView: 2,
            },
            1050: {
                slidesPerView: 3,
            }
        }
    });

    new Swiper('.masters_content',{
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '#master-button-next',
            prevEl: '#master-button-prev',
        },
        breakpoints: {
            700:{
                slidesPerView: 2,
            },
            1050: {
                slidesPerView: 3,
            }
        }
    })




   
















});

