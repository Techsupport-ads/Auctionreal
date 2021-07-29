!function(e){"use strict";VLTJS.animatedBlock={init:function(){e(".vlt-animated-block").each(function(){var t=e(this);VLTJS.window.on("vlt.change-slide",function(){t.removeClass("animated"),t.parents(".vlt-section").hasClass("active")&&t.addClass("animated")})})}},VLTJS.animatedBlock.init()}(jQuery),function(e){"use strict";VLTJS.contactForm={init:function(){if(void 0!==e.fn.validate){e(".vlt-contact-form").each(function(){var t=e(this),n=t.find(".message.success"),i=t.find(".message.danger");t.validate({errorClass:"error",submitHandler:function(t){e.ajax({type:"POST",url:"handler.php",data:new FormData(t),cache:!1,contentType:!1,processData:!1,success:function(){n.fadeIn(),setTimeout(function(){n.fadeOut()},5e3)},error:function(){i.fadeIn(),setTimeout(function(){i.fadeOut()},5e3)}})}})})}}},VLTJS.contactForm.init()}(jQuery),function(e){"use strict";VLTJS.counterUp={init:function(){if(void 0!==e.fn.numerator){e(".vlt-counter-up, .vlt-counter-up-small").each(function(){var t=e(this),n=t.data("animation-speed")||1e3,i=t.data("ending-number")||0,a=t.data("delimiter")||!1;VLTJS.window.on("vlt.change-slide",function(){if(t.parents(".vlt-section").hasClass("active")){var e=t.find(".counter").html("0");setTimeout(function(){e.numerator({easing:"linear",duration:n,delimiter:a,toValue:i})},500)}})})}}},VLTJS.counterUp.init()}(jQuery),function(e){"use strict";VLTJS.customCursor={init:function(){if(e(".vlt-is--custom-cursor").length){VLTJS.body.append('<div class="vlt-custom-cursor"><div class="circle"><span></span></div></div>');var t=e(".vlt-custom-cursor"),n=t.find(".circle"),i={x:0,y:0},a={x:0,y:0},o=.25;"undefined"!=typeof gsap&&(gsap.set(n,{xPercent:-50,yPercent:-50}),VLTJS.document.on("mousemove",function(e){var t=window.pageYOffset||document.documentElement.scrollTop;i.x=e.pageX,i.y=e.pageY-t}),gsap.ticker.add(function(){a.x+=(i.x-a.x)*o,a.y+=(i.y-a.y)*o,gsap.set(n,{x:a.x,y:a.y})}),VLTJS.document.on("mousedown",function(){gsap.to(n,.3,{scale:.7})}).on("mouseup",function(){gsap.to(n,.3,{scale:1})}),VLTJS.document.on("mouseenter","input, textarea, select, .vlt-video-button > a",function(){gsap.to(n,.3,{scale:0,opacity:0})}).on("mouseleave","input, textarea, select, .vlt-video-button > a",function(){gsap.to(n,.3,{scale:1,opacity:.1})}),VLTJS.document.on("mouseenter",'a, button, [role="button"]',function(){gsap.to(n,.3,{height:60,width:60})}).on("mouseleave blur",'a, button, [role="button"]',function(){gsap.to(n,.3,{height:15,width:15})}),VLTJS.document.on("mouseenter","[data-cursor]",function(){var t=e(this);gsap.to(n,.3,{height:80,width:80,opacity:1,onStart:function(){n.find("span").html(t.attr("data-cursor"))}})}).on("mouseleave","[data-cursor]",function(){gsap.to(n,.3,{height:15,width:15,opacity:.1,onStart:function(){n.find("span").html("")}})}))}}},VLTJS.isMobile.any()||VLTJS.customCursor.init()}(jQuery),function(e){"use strict";VLTJS.fullpageSlider={init:function(){function t(){s.find(".pp-section.active").scrollTop()>0?e(".vlt-navbar").addClass("vlt-navbar--solid"):e(".vlt-navbar").removeClass("vlt-navbar--solid")}function n(){r.find("li:first-child").addClass("active").end().addClass("is-show")}function i(){switch(s.find(".vlt-section.active").data("brightness")){case"light":VLTJS.html.removeClass("is-light").addClass("is-dark");break;case"dark":VLTJS.html.removeClass("is-dark").addClass("is-light")}}function a(e,t){switch(e){case"down":r.find("li:nth-child("+t+")").prevAll().addClass("prev");break;case"up":r.find("li:nth-child("+t+")").removeClass("prev")}}function o(){var e=s.find(".vlt-section.active"),t=e.index();0==t?l.html('<a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></a>'):l.html(VLTJS.addLedingZero(t+1))}if(void 0!==e.fn.pagepiling){var s=e(".vlt-fullpage-slider"),r=s.find(".vlt-fullpage-slider-progress-bar"),l=s.find(".vlt-fullpage-slider-numbers"),c=!!s.data("loop-top"),u=!!s.data("loop-bottom"),d=s.data("speed")||800,f=[];VLTJS.body.css("overflow","hidden"),VLTJS.html.css("overflow","hidden"),s.find("[data-anchor]").each(function(){f.push(e(this).data("anchor"))}),t(),s.pagepiling({menu:".vlt-offcanvas-menu ul.sf-menu, .vlt-fullpage-slider-progress-bar",scrollingSpeed:d,loopTop:c,loopBottom:u,anchors:f,sectionSelector:".vlt-section",navigation:!1,afterRender:function(){n(),i(),o(),VLTJS.window.trigger("vlt.change-slide")},onLeave:function(e,t,n){i(),a(n,t),o(),VLTJS.window.trigger("vlt.change-slide")},afterLoad:function(e,n){r.find("li.active").prevAll().addClass("prev"),t()}}),l.on("click",">a",function(t){t.preventDefault(),e.fn.pagepiling.moveSectionDown()}),s.find(".pp-scrollable").on("scroll",function(){e(this).scrollTop()>0?e(".vlt-navbar").addClass("vlt-navbar--solid"):e(".vlt-navbar").removeClass("vlt-navbar--solid")})}}},VLTJS.fullpageSlider.init()}(jQuery),function(e){"use strict";var t=!1;VLTJS.menuOffcanvas={config:{easing:"power2.out"},init:function(){var n=e(".vlt-offcanvas-menu"),i=n.find("ul.sf-menu"),a=i.find("> li"),o=e(".vlt-offcanvas-menu__header"),s=e(".vlt-offcanvas-menu__footer > div"),r=e(".js-offcanvas-menu-open"),l=e(".js-offcanvas-menu-close"),c=e(".vlt-site-overlay");void 0!==e.fn.superclick&&i.superclick({delay:300,cssArrows:!1,animation:{opacity:"show",height:"show"},animationOut:{opacity:"hide",height:"hide"}}),r.on("click",function(e){e.preventDefault(),t||VLTJS.menuOffcanvas.open_menu(n,c,a,o,s)}),l.on("click",function(e){e.preventDefault(),t&&VLTJS.menuOffcanvas.close_menu(n,c,a,o,s)}),c.on("click",function(e){e.preventDefault(),t&&VLTJS.menuOffcanvas.close_menu(n,c,a,o,s)}),VLTJS.document.keyup(function(e){27===e.keyCode&&t&&(e.preventDefault(),VLTJS.menuOffcanvas.close_menu(n,c,a,o,s))}),a.filter("[data-menuanchor]").on("click","a",function(){t&&VLTJS.menuOffcanvas.close_menu(n,c,a,o,s)})},open_menu:function(e,n,i,a,o){t=!0,"undefined"!=typeof gsap&&gsap.timeline({defaults:{ease:this.config.easing}}).set(VLTJS.html,{overflow:"hidden"}).to(n,.3,{autoAlpha:1}).fromTo(e,.6,{x:"100%"},{x:0,visibility:"visible"},"-=.3").fromTo(a,.3,{x:50,autoAlpha:0},{x:0,autoAlpha:1},"-=.3").fromTo(i,.3,{x:50,autoAlpha:0},{x:0,autoAlpha:1,stagger:{each:.1,from:"start"}},"-=.15").fromTo(o,.3,{x:50,autoAlpha:0},{x:0,autoAlpha:1,stagger:{each:.1,from:"start"}},"-=.15")},close_menu:function(e,n,i,a,o){t=!1,"undefined"!=typeof gsap&&gsap.timeline({defaults:{ease:this.config.easing}}).set(VLTJS.html,{overflow:"inherit"}).to(o,.3,{x:50,autoAlpha:0,stagger:{each:.1,from:"end"}}).to(i,.3,{x:50,autoAlpha:0,stagger:{each:.1,from:"end"}},"-=.15").to(a,.3,{x:50,autoAlpha:0},"-=.15").to(e,.6,{x:"100%"},"-=.15").set(e,{visibility:"hidden"}).to(n,.3,{autoAlpha:0},"-=.6")}},VLTJS.menuOffcanvas.init()}(jQuery),function(e){"use strict";"function"==typeof FastClick&&FastClick.attach(document.body)}(jQuery),function(e){"use strict";if(void 0!==e.fn.animsition){var t=e(".animsition");t.animsition({inDuration:500,outDuration:500,linkElement:'a:not([target="_blank"]):not([href^="#"]):not([rel="nofollow"]):not([href~="#"]):not([href^=mailto]):not([href^=tel]):not(.sf-with-ul)',loadingClass:"animsition-loading-2",loadingInner:'<div class="spinner"><span class="double-bounce-one"></span><span class="double-bounce-two"></span></div>'}),t.on("animsition.inEnd",function(){VLTJS.window.trigger("vlt.preloader_done"),VLTJS.html.addClass("vlt-is-page-loaded")})}}(jQuery),function(e){"use strict";VLTJS.progressBar={init:function(){if("undefined"!=typeof gsap){e(".vlt-progress-bar").each(function(){var t=e(this),n=t.data("final-value")||0,i=t.data("animation-speed")||0,a=500,o={count:0};VLTJS.window.on("vlt.change-slide",function(){t.parents(".vlt-section").hasClass("active")&&(o.count=0,t.find(".vlt-progress-bar__title > .counter").text(Math.round(o.count)),gsap.set(t.find(".vlt-progress-bar__bar > span"),{width:0}),gsap.to(o,i/1e3/2,{count:n,delay:a/1e3,onUpdate:function(){t.find(".vlt-progress-bar__title > .counter").text(Math.round(o.count))}}),gsap.to(t.find(".vlt-progress-bar__bar > span"),i/1e3,{width:n+"%",delay:a/1e3}))})})}}},VLTJS.progressBar.init()}(jQuery),function(e){"use strict";VLTJS.projectShowcase={initSlider:function(){if("undefined"!=typeof Swiper){var t=e(".vlt-project-showcase-slider .swiper-container");new Swiper(t,{speed:1e3,spaceBetween:30,grabCursor:!0,slidesPerView:1,breakpoints:{575:{slidesPerView:2}}})}},initParallax:function(){if("undefined"!=typeof gsap){var t,n,i=e(".vlt-project-showcase"),a=i.find(".vlt-project-showcase__items"),o=a.find(".vlt-project-showcase__item"),s=i.find(".vlt-project-showcase__images"),r=s.find(".vlt-project-showcase__image"),l=i.outerWidth(!0),c=s.outerWidth(!0),u=a.outerWidth(),d=(l-c)/l;t=u/l-1,t=(l-u)/l,o.on("mouseenter",function(){o.removeClass("is-active"),r.removeClass("is-active"),e(this).addClass("is-active"),r.eq(e(this).index()).addClass("is-active")}),o.eq(0).trigger("mouseenter"),VLTJS.window.on("mousemove",function(e){n=e.pageX-i.offset().left}),gsap.ticker.add(function(){gsap.set(a,{x:n*t,ease:"power3.out"}),gsap.set(s,{right:n*d,ease:"power3.out"})})}}},VLTJS.projectShowcase.initSlider(),VLTJS.projectShowcase.initParallax(),VLTJS.debounceResize(function(){VLTJS.projectShowcase.initParallax()})}(jQuery),function(e){"use strict";VLTJS.testimonialSlider={init:function(){if("undefined"!=typeof Swiper){e(".vlt-testimonial-slider .swiper-container").each(function(){e(this).find(".swiper-wrapper > *").wrap('<div class="swiper-slide">'),new Swiper(this,{speed:1e3,spaceBetween:30,grabCursor:!0,effect:"coverflow",slidesPerView:1,navigation:{nextEl:e(".vlt-testimonial-slider-controls .next"),prevEl:e(".vlt-testimonial-slider-controls .prev")},pagination:{el:e(".vlt-testimonial-slider-controls .pagination"),clickable:!1,type:"fraction",renderFraction:function(e,t){return'<span class="'+e+'"></span><span class="sep">/</span><span class="'+t+'"></span>'}}})})}}},VLTJS.testimonialSlider.init()}(jQuery),function(e){"use strict";VLTJS.timelineSlider={init:function(){if("undefined"!=typeof Swiper){e(".vlt-timeline-slider .swiper-container").each(function(){e(this).find(".swiper-wrapper > *").wrap('<div class="swiper-slide">'),new Swiper(this,{speed:1e3,spaceBetween:0,grabCursor:!0,slidesPerView:1,navigation:{nextEl:e(".vlt-timeline-slider-controls .next"),prevEl:e(".vlt-timeline-slider-controls .prev")},pagination:{el:e(".vlt-timeline-slider-controls .pagination"),clickable:!1,type:"fraction",renderFraction:function(e,t){return'<span class="'+e+'"></span><span class="sep">/</span><span class="'+t+'"></span>'}}})})}}},VLTJS.timelineSlider.init()}(jQuery);