// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


// Мобильное меню

$(document).ready(function() {
  "use strict";
  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  $(".menu > ul").before("<span class=\"menu-mobile\">");
  $(".menu > ul > li").hover(function(e) {
      if ($(window).width() > 768) {
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
      }
  });
  $(".menu > ul > li").click(function() {
      if ($(window).width() <= 768) {
          $(this).children("ul").fadeToggle(150);
      }
  });
  $(".menu-mobile").click(function(e) {
      $(".menu > ul").toggleClass('show-on-mobile');
      e.preventDefault();
  });
});
