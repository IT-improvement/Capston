/* AOS */
/* https://github.com/michalsnik/aos */
(function (global, factory) {
    'use strict';
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        global.AOS = factory();
    }
})(this, function () {
    'use strict';

    var __typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __parseFloat = parseFloat;

    var __parseInt = parseInt;

    var requestAnimationFrame = (typeof window === 'undefined' ? 'undefined' : __typeof(window)) === 'object' && window.requestAnimationFrame ? window.requestAnimationFrame : function (callback) {
        return setTimeout(callback, 16);
    };

    var cancelAnimationFrame = (typeof window === 'undefined' ? 'undefined' : __typeof(window)) === 'object' && window.cancelAnimationFrame ? window.cancelAnimationFrame : function (id) {
        return clearTimeout(id);
    };

    var debounce = function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    var isIE10 = function () {
        return Boolean(document.all && document.addEventListener && !window.atob);
    }();

    var isMobile = {
        isAndroid: function isAndroid() {
            return navigator.userAgent.match(/Android/i);
        },
        isiOS: function isiOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        isOpera: function isOpera() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        isWindows: function isWindows() {
            return navigator.platform.toLowerCase().indexOf('win') === 0;
        },
        isBlackBerry: function isBlackBerry() {
            return navigator.platform.toLowerCase() === 'blackberry';
        },
        isAny: function isAny() {
            return isMobile.isAndroid() || isMobile.isiOS() || isMobile.isOpera() || isMobile.isWindows() || isMobile.isBlackBerry();
        }
    };

    var AOS = {
        init: function init(settings) {
            this.settings = Object.assign({}, defaults, settings);
            this.instance = [];
            this.queue = [];
            this.elements = document.querySelectorAll('[data-aos]');
            this.isInit = true;
            this.observer = null;
            this.refresh(true);
            if (isIE10) {
                this.helper = this.addAnimationDelayForIE10.bind(this);
                document.addEventListener('scroll', this.helper);
            }
        },
        refresh: function refresh() {
            var _this = this;

            var hardRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (hardRefresh) {
                if (isIE10) {
                    this.elements.forEach(function (el, i) {
                        _this.applyStyle(el, false);
                    });
                }
                this.elements = document.querySelectorAll('[data-aos]');
                if (isIE10) {
                    this.elements.forEach(function (el, i) {
                        _this.applyStyle(el, true);
                    });
                }
                this.queue.forEach(function (item) {
                    _this.animate(item);
                });
                return;
            }
            if (this.settings.debounceDelay > 0) {
                clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(function () {
                    _this.refresh(true);
                }, this.settings.debounceDelay);
                return;
            }
            if (this.settings.throttleDelay > 0) {
                if (!this.throttleTimer) {
                    this.throttleTimer = setTimeout(function () {
                        _this.throttleTimer = null;
                        _this.refresh(true);
                    }, this.settings.throttleDelay);
                }
                return;
            }
            this.refresh(true);
        },
        observe: function observe() {
            var _this2 = this;

            var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (element) {
                var observer = new MutationObserver(function () {
                    _this2.refresh();
                });
                observer.observe(element, {
                    attributes: true,
                    childList: true,
                    subtree: true
                });
                return;
            }
            if (!this.observer) {
                this.observer = new MutationObserver(function () {
                    _this2.refresh();
                });
            }
            this.observer.observe(document.body, {
                attributes: true,
                childList: true,
                subtree: true
            });
        },
        handleScroll: function handleScroll() {
            if (!this.queue.length) {
                return;
            }
            var scrollTop = AOS.scrollTop();
            var windowHeight = AOS.innerHeight();
            this.queue.forEach(function (item, i) {
                if (item.once && item.alreadyPlayed) {
                    return;
                }
                var trigger = item.offsetTop + item.config.offset;
                var bottom = trigger + item.height;
                var isInView = trigger <= scrollTop + windowHeight && bottom >= scrollTop;
                if (isInView) {
                    item.alreadyPlayed = true;
                    item.config.callback(item.element, 'in');
                    AOS.removeFromQueue(i);
                }
            });
        },
        addToQueue: function addToQueue(element, config) {
            var _this3 = this;

            this.queue.push({
                element: element,
                config: config,
                offsetTop: this.offset(element),
                height: element.clientHeight,
                alreadyPlayed: false
            });
            if (!this.settings.disableMutationObserver) {
                this.observe();
            }
            if (!this.settings.offset) {
                this.handleScroll();
                return;
            }
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.interval = setInterval(function () {
                _this3.handleScroll();
            }, 100);
        },
        removeFromQueue: function removeFromQueue(index) {
            this.queue.splice(index, 1);
        },
        scrollTop: function scrollTop() {
            return window.pageYOffset || document.documentElement.scrollTop;
        },
        innerHeight: function innerHeight() {
            return window.innerHeight;
        },
        configure: function configure(options) {
            Object.assign(this.settings, options);
            this.refresh();
        },
        addAnimationDelayForIE10: function addAnimationDelayForIE10() {
            var _this4 = this;

            this.elements.forEach(function (el, i) {
                _this4.applyStyle(el, true);
            });
        },
        applyStyle: function applyStyle(el, init) {
            var _this5 = this;

            var options = this.getAnimationOptions(el);
            var style = el.getAttribute('style');
            var delay = options.delay || 0;
            var duration = options.duration || 400;
            var easing = options.easing || 'ease';
            var offset = this.settings.offset || 120;
            var animated = el.getAttribute('data-aos-animate');
            if (animated) {
                return;
            }
            var trigger = el.getAttribute('data-aos-trigger');
            var animatingClass = 'aos-animate';
            var durationWithUnit = typeof duration === 'string' ? duration : duration + 'ms';
            var delayWithUnit = typeof delay === 'string' ? delay : delay + 'ms';
            var delayValueInMs = __parseInt(delay) || 0;
            var scrollDirection = options.disable || false;
            if (scrollDirection) {
                return;
            }
            var topOffset = options.offset ? offset + __parseInt(options.offset) : offset;
            var triggerHookValue = options.triggerHook ? __parseFloat(options.triggerHook) : 0.25;
            var topOffsetParsed = offset;
            if (trigger && document.querySelector(trigger)) {
                topOffsetParsed = __parseInt(this.offset(document.querySelector(trigger)));
            }
            var animationIsAbove = trigger === 'prev' || __parseInt(el.getAttribute('data-aos')) < topOffsetParsed;
            var triggerMargin = animationIsAbove ? topOffsetParsed - topOffset : topOffsetParsed + topOffset;
            var direction = options.anchorPlacement || 'bottom-bottom';
            if (init && options.once) {
                el.setAttribute('data-aos-animate', 'true');
            }
            var delayDirection = '0ms';
            if (direction === 'top-bottom') {
                delayDirection = '-100%';
            } else if (direction === 'bottom-top') {
                delayDirection = '100%';
            }
            var triggerPosition = triggerHookValue * AOS.innerHeight();
            var triggerFromTop = triggerPosition + topOffsetParsed - topOffset;
            var triggerFromBottom = triggerPosition - topOffsetParsed + topOffset;
            var triggerFromCenter = triggerPosition - AOS.innerHeight() / 2;
            var triggerFromStart = triggerPosition;
            var animationDuration;
            if (options.startEvent) {
                animationDuration = '100000ms';
            }
            var animationDelay;
            switch (direction) {
                case 'top-bottom':
                    animationDelay = options.startEvent ? animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + " - " + durationWithUnit + ")" : animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + ")";
                    break;
                case 'bottom-top':
                    animationDelay = options.startEvent ? animationIsAbove ? "calc(" + triggerFromTop + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromBottom + "px + " + delayDirection + " - " + durationWithUnit + ")" : animationIsAbove ? "calc(" + triggerFromTop + "px + " + delayDirection + ")" : "calc(" + triggerFromBottom + "px + " + delayDirection + ")";
                    break;
                case 'center-bottom':
                    animationDelay = options.startEvent ? "calc(" + triggerFromCenter + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromCenter + "px + " + delayDirection + ")";
                    break;
                case 'center-top':
                    animationDelay = options.startEvent ? "calc(" + triggerFromCenter + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromCenter + "px + " + delayDirection + ")";
                    break;
                case 'top-center':
                    animationDelay = options.startEvent ? animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + " - " + durationWithUnit + ")" : animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + ")";
                    break;
                case 'bottom-center':
                    animationDelay = options.startEvent ? animationIsAbove ? "calc(" + triggerFromTop + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromBottom + "px + " + delayDirection + " - " + durationWithUnit + ")" : animationIsAbove ? "calc(" + triggerFromTop + "px + " + delayDirection + ")" : "calc(" + triggerFromBottom + "px + " + delayDirection + ")";
                    break;
                case 'top-top':
                    animationDelay = options.startEvent ? animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + " - " + durationWithUnit + ")" : animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + ")";
                    break;
                case 'bottom-bottom':
                    animationDelay = options.startEvent ? animationIsAbove ? "calc(" + triggerFromTop + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromBottom + "px + " + delayDirection + " - " + durationWithUnit + ")" : animationIsAbove ? "calc(" + triggerFromTop + "px + " + delayDirection + ")" : "calc(" + triggerFromBottom + "px + " + delayDirection + ")";
                    break;
                case 'start-center':
                    animationDelay = options.startEvent ? animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + " - " + durationWithUnit + ")" : animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + ")";
                    break;
                case 'end-center':
                    animationDelay = options.startEvent ? animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + " - " + durationWithUnit + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + " - " + durationWithUnit + ")" : animationIsAbove ? "calc(" + triggerFromBottom + "px + " + delayDirection + ")" : "calc(" + triggerFromTop + "px + " + delayDirection + ")";
                    break;
            }
            var transitionDelay = duration + delayValueInMs + 'ms';
            if (style && !init && style.indexOf('transition-duration') !== -1) {
                return;
            }
            el.setAttribute('data-aos-animate', 'true');
            el.style.transitionDuration = durationWithUnit;
            el.style.transitionDelay = delayWithUnit;
            el.style.transitionTimingFunction = easing;
            el.style.transitionProperty = 'opacity, transform';
            if (!el.getAttribute('data-aos-id')) {
                el.setAttribute('data-aos-id', this.instance.length);
                this.instance.push({
                    id: this.instance.length,
                    domEl: el,
                    animationDelay: animationDelay,
                    animationDuration: transitionDelay,
                    animationEasing: easing,
                    animationName: options.name || null,
                    animationDirection: options.direction || 'normal'
                });
            }
            var elementDelay = __parseFloat(el.getAttribute('data-aos-delay'));
            var computedStyle = window.getComputedStyle(el);
            var delayInMs = computedStyle.getPropertyValue('transition-delay');
            var durationInMs = computedStyle.getPropertyValue('transition-duration');
            var sum = function sum(acc, cur) {
                return acc + __parseFloat(cur);
            };
            var sumDelay = delayInMs.split(',').map(function (item) {
                return __parseFloat(item) * 1000;
            }).reduce(sum, 0);
            var sumDuration = durationInMs.split(',').map(function (item) {
                return __parseFloat(item) * 1000;
            }).reduce(sum, 0);
            var combinedDelay = sumDelay + sumDuration;
            var computedOffset = this.offset(el) + elementDelay + combinedDelay + topOffset;
            el.style.transitionDelay = combinedDelay + 'ms';
            el.style.animationDelay = computedOffset + 'ms';
            el.style.animationDuration = duration + 'ms';
            var computedTrigger = triggerPosition + topOffsetParsed - topOffset;
            if (trigger && document.querySelector(trigger)) {
                var triggerEl = document.querySelector(trigger);
                var triggerOffset = this.offset(triggerEl);
                var triggerHeight = triggerEl.offsetHeight;
                var computedTriggerPosition = triggerOffset + triggerHeight;
                if (window.innerHeight < computedTriggerPosition) {
                    computedTrigger = triggerPosition - topOffsetParsed + topOffset;
                }
            }
            el.setAttribute('data-aos-anchor-placement', direction);
            el.style.setProperty('--aos-trigger-position', computedTrigger + 'px');
            el.style.setProperty('--aos-duration', transitionDelay);
            el.style.setProperty('--aos-delay', animationDelay);
            el.style.setProperty('--aos-easing', easing);
            el.style.setProperty('--aos-anchor-placement', direction);
            if (!this.settings.animateInViewport && !init) {
                return;
            }
            if (init) {
                this.queue.forEach(function (item, i) {
                    if (item.element === el) {
                        _this5.queue.splice(i, 1);
                    }
                });
            }
            this.addToQueue(el, options);
        },
        getAnimationOptions: function getAnimationOptions(el) {
            var animationOptions = el.getAttribute('data-aos-options');
            if (animationOptions) {
                return JSON.parse(animationOptions);
            }
            return this.settings;
        },
        offset: function offset(el) {
            var rect = el.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop;
        }
    };

    var defaults = {
        offset: 120,
        delay: 0,
        easing: 'ease',
        duration: 400,
        once: false,
        mirror: false,
        anchorPlacement: 'bottom-bottom',
        animateInViewport: true,
        disableMutationObserver: false,
        throttleDelay: 99,
        debounceDelay: 50
    };

    return AOS;
});
/* AOS Init */
AOS.init();
