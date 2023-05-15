import jQuery from "jquery";

jQuery.noConflict()(function ($) {

  var intestazione = {
    cacheDom: function () {
      this.window = $(window);
      this.body = $('body');
      this.lTopHeader = $('.l-top-header');
      this.noteHead = $('.c-note-head');
      this.lHeader = $('.l-header');
      this.mainNav = $('#main-nav');
    },

    // rimuove classe "preload" per attivare le transition dei CSS solo dopo il completo caricamento della pag
    removePreloadClass: function () {
      this.body.removeClass('preload');
    },

    stickyHeader: function () {
      var verticalScroll = $(window).scrollTop();
      var cNoteHeadHeight = $('.c-note-head').outerHeight();
      var lHeaderHeight = $('.l-header').outerHeight();
      var mainNavHeight = $('#main-nav').outerHeight();
      var headerTotalHeight = cNoteHeadHeight + lHeaderHeight + mainNavHeight;

      if (verticalScroll > cNoteHeadHeight) {
        this.body.addClass('is-scrolling');
        this.lHeader.addClass('is-scrolling');
        this.mainNav.addClass('is-scrolling');
        this.body.css('padding-top', headerTotalHeight + 'px');
      } else {
        this.body.removeClass('is-scrolling');
        this.lHeader.removeClass('is-scrolling');
        this.mainNav.removeClass('is-scrolling');
        this.body.css('padding-top', 0);
      }
    },

    bindEvents: function () {
      this.window.on('load', $.proxy(this.stickyHeader, this));
      this.window.on('load', $.proxy(this.removePreloadClass, this));
      this.window.on('scroll', $.proxy(this.stickyHeader, this));
    },

    init: function () {
      this.cacheDom();
      this.bindEvents();
    },
  };

  setTimeout(() => {
    intestazione.init();
  });
});