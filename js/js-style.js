/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/style.js":
/*!****************************************************!*\
  !*** ./platform/themes/citigym/public/js/style.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var body = $('body'),
    wrapper = $('.main-wrapper'),
    header = $('.header'),
    metismenu = $('#side-menu'),
    metismenu_li = $('#side-menu li');
theme = {
  baseConfig: function baseConfig() {
    // Padding Viewport
    // body.addClass('navigation-sticky');
    var wow = new WOW({
      boxClass: 'wow',
      // animated element css class (default is wow)
      animateClass: 'animated',
      // animation css class (default is animated)
      offset: 0,
      // distance to the element when triggering the animation (default is 0)
      mobile: true,
      // trigger animations on mobile devices (default is true)
      live: true,
      // act on asynchronously loaded content (default is true)
      callback: function callback(box) {// the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window

    });
    wow.init(); // Navigation Fixed Padding

    wrapper.hasClass('no-padding') || wrapper.css('paddingTop', header.outerHeight() + 'px'); // Date picker

    $('.datepicker').length > 0 && $('.datepicker').datepicker(); // Tooltip

    $('[data-toggle="tooltip"]').tooltip(); // Drop Down

    $('.dropdown-menu a').on('touchstart', function (event) {
      event.stopPropagation();
    });
  },
  sidebarConfig: function sidebarConfig() {
    $("#side-menu").metisMenu();
  },
  navigationConfig: function navigationConfig() {
    $('#close-menu-mobile').on('click', function (event) {
      event.preventDefault();
      body.removeClass('sidebar-menu-open');
    });
    $('#toggle-menu-mobile').on('click', function (event) {
      event.preventDefault();
      body.toggleClass('sidebar-menu-open');

      if (body.hasClass('sidebar-menu-open')) {
        body.append('<div class="site-backdrop"></div>');
      } else {
        body.find('.site-backdrop').first().remove();
      }
    });
    $(document).on('click', '.site-backdrop', function (event) {
      body.removeClass('sidebar-menu-open');
      body.find('.site-backdrop').first().remove();
    });
  },
  sliderConfig: function sliderConfig() {
    // Slider
    var prev = '<div class="prev-chervon"><img src="' + (window.THEME_ASSET || '') + './imgs/chevron-l.svg"/></div>',
        next = '<div class="next-chervon"><img src="' + (window.THEME_ASSET || '') + './imgs/chevron-r.svg"/></div>',
        homeBanner = $('.section-home-banner .slider-wrapper');
    var prevProperti = '<div class="prev-chervon properti"><img src="' + (window.THEME_ASSET || '') + './imgs/chevron-l.svg"/></div>',
        nextProperti = '<div class="next-chervon properti"><img src="' + (window.THEME_ASSET || '') + './imgs/chevron-r.svg"/></div>'; // Home

    homeBanner.slick({
      arrows: true,
      dots: true,
      accessibility: false,
      prevArrow: prev,
      nextArrow: next
    }); // homeBanner.on('afterChange', function(event, slick, currentSlide, nextSlide){
    // 	var currentEl = $(this).find('[data-slick-index="'+currentSlide+'"]');
    // 	currentEl.find('.indicator').removeClass('fadeIn');
    // });

    homeBanner.find('.item').each(function (index, el) {
      if (!$(el).hasClass('slick-cloned')) {
        var active = $(el).find('.indicator .active'),
            counter = $(el).find('.indicator .counter-all'),
            dataCounter = homeBanner.slick('getSlick').$slides.length,
            dataActive = el.getAttribute('data-slick-index');
        dataActive = parseInt(dataActive) + 1;
        dataActive < 10 ? dataActive = '0' + dataActive : dataActive;
        dataCounter < 10 ? dataCounter = '0' + dataCounter : dataCounter;
        active.text(dataActive + ' / ');
        counter.text(dataCounter);
      }
    });
    $('.section-home-news .slider-wrapper').slick({
      arrows: true,
      dots: true,
      accessibility: false,
      prevArrow: prev,
      nextArrow: next,
      slidesToShow: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    });
    $('.section-about-features-1 .slider-wrapper').slick({
      arrows: true,
      dots: false,
      accessibility: false,
      prevArrow: prev,
      nextArrow: next,
      slidesToShow: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }]
    });
    $('.comparison-slider-wrapper .slider-wrapper').slick({
      draggable: false,
      dots: true,
      prevArrow: prev,
      nextArrow: next,
      responsive: [{
        breakpoint: 991,
        settings: {
          swipe: false,
          draggable: false
        }
      }]
    }); // Services

    $('.section-service-detail-slider .slider-wrapper').slick({
      arrows: true,
      dots: false,
      accessibility: false,
      prevArrow: prev,
      nextArrow: next
    }); // Clubs

    $('.section-club-detail-slider .slider-wrapper').slick({
      arrows: true,
      dots: true,
      accessibility: false,
      prevArrow: prev,
      nextArrow: next
    }); //  properties

    $('.section-club-properties-slider .slider-wrapper').slick({
      arrows: true,
      dots: true,
      prevArrow: prevProperti,
      nextArrow: nextProperti,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $('.product-slider-wrapper').slick({
      accessibility: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  },
  quantityInputConfig: function quantityInputConfig() {
    $(document).on('click', '[quantity-wrapper] [quantity-action]', function (event) {
      event.preventDefault();
      var action = $(this).attr('quantity-action'),
          input = $(this).closest('[quantity-wrapper]').find('[quantity-input]'),
          min = input.attr('min'),
          max = input.attr('max'),
          value = parseInt(input.val());

      if (action == 'plus' && value < max) {
        input.val(value + 1).trigger('change');
      } else if (action == 'minus' && value > min) {
        input.val(value - 1).trigger('change');
      }
    });
  },
  init: function init() {
    this.baseConfig();
    this.navigationConfig();
    this.sidebarConfig();
    this.sliderConfig();
    this.quantityInputConfig();
  }
};
$(document).ready(function () {
  theme.init(); // console.log('Hello World!');
});

/***/ }),

/***/ 0:

/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /builds/bigin/citigym/platform/themes/citigym/public/js/style.js */"./js/style.js");


/***/ })

/******/ });
