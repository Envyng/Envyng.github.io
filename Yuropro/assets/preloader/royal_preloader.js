/*
|------------------------------------------|
| MelonHTML5 - Royal Preloader             |
|------------------------------------------|
| @author:  Lee Le (lee@melonhtml5.com)    |
| @version: 2.04 (01 Oct 2014)             |
| @website: www.melonhtml5.com             |
|------------------------------------------|
*/

/**
  (https://developer.mozilla.org/en-US/docs/DOM/document.cookie)
  docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
  docCookies.getItem(name)
  docCookies.removeItem(name[, path])
  docCookies.hasItem(name)
*/
var docCookies={getItem:function(a){return!a||!this.hasItem(a)?null:unescape(document.cookie.replace(RegExp("(?:^|.*;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"))},setItem:function(a,c,b,e,f,g){if(a&&!/^(?:expires|max\-age|path|domain|secure)$/i.test(a)){var d="";if(b)switch(b.constructor){case Number:d=Infinity===b?"; expires=Tue, 19 Jan 2038 03:14:07 GMT":"; max-age="+b;break;case String:d="; expires="+b;break;case Date:d="; expires="+b.toGMTString()}document.cookie=
escape(a)+"="+escape(c)+d+(f?"; domain="+f:"")+(e?"; path="+e:"")+(g?"; secure":"")}},removeItem:function(a,c){a&&this.hasItem(a)&&(document.cookie=escape(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(c?"; path="+c:""))},hasItem:function(a){return RegExp("(?:^|;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}};

var JQ = jQuery;

// shim layer with setTimeout fallback
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame       ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame    ||
           window.oRequestAnimationFrame      ||
           window.msRequestAnimationFrame     ||
           function(callback) {
               window.setTimeout(callback, 1000 / 60);
           };
})();

window.transitionEnd = function(element, event_handler) {
    var support_transition = false;
    var transition_names   = ['transition', 'WebkitTransition', 'MozTransition', 'msTransition'];
    var temp_element       = document.createElement('div');

    JQ(transition_names).each(function(index, transition_name) {
        if (temp_element.style[transition_name] !== undefined) {
            support_transition = true;
            return false;
        }
    });

    if (support_transition) {
        var event_names = 'webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend';

        element.bind(event_names, function (event) {
            element.unbind(event_names);
            event_handler(event, element);
        });
    } else {
        setTimeout(function() {
            event_handler(null, element);
        }, 0);
    }

    // return element so that we can chain methods
    return element;
};

var Royal_Preloader = {
    _overlay:     null,

    _loader:      null,
    _name:        null,
    _percentage:  null,

    _on_complete: null,

    _text_loader:         null,
    _text_loader_overlay: null,

    _logo_loader:       null,
    _logo_loader_meter: null,

    _total:       0,
    _loaded:      0,

    _image_queue: [],

    _percentage_loaded: 0,

    // 'text', 'number', 'fill'
    _mode: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._mode !== 'undefined' ? Royal_Preloader._mode : 'number';
    }(),

    _text: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._text !== 'undefined' ? Royal_Preloader._text : 'loading...';
    }(),

    _text_colour: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._text_colour !== 'undefined' ? Royal_Preloader._text_colour : '#FFFFFF';
    }(),

    _images: function () {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._images !== 'undefined' ? Royal_Preloader._images : [];
    }(),

    _show_progress: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._show_progress !== 'undefined' ? Royal_Preloader._show_progress : true;
    }(),

    _show_percentage: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._show_percentage !== 'undefined' ? Royal_Preloader._show_percentage : true;
    }(),

    _background: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._background !== 'undefined' ? Royal_Preloader._background : '#000000';
    }(),

    _logo: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._logo !== 'undefined' ? Royal_Preloader._logo : '';
    }(),

    _logo_size: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._logo_size !== 'undefined' ? Royal_Preloader._logo_size : [80, 80];
    }(),

    _cookie: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._cookie !== 'undefined' ? Royal_Preloader._cookie : false;
    }(),

    _timeout: function() {
        return typeof Royal_Preloader !== 'undefined' && typeof Royal_Preloader._timeout !== 'undefined' ? Royal_Preloader._timeout : 10;
    }(),

    // main
    _init: function() {
        JQ('img').each(function(index) {
            Royal_Preloader._images.push(JQ(this).attr('src'));
        });

        if (Royal_Preloader._cookie) {
            var cookie_key = 'melonhtml5_royal_preloader_' + Royal_Preloader._cookie;

            if (docCookies.getItem(cookie_key)) {
                JQ('#royal_preloader').remove();
                JQ(document.body).removeClass('royal_preloader');
                return;
            } else {
                docCookies.setItem('melonhtml5_royal_preloader_' + Royal_Preloader._cookie, (new Date()).getTime(), Infinity);
            }
        }

        Royal_Preloader._total = Royal_Preloader._images.length;

        Royal_Preloader._build();
        Royal_Preloader._load();
    },

    // build loader DOM
    _build: function() {
        this._overlay = JQ('#royal_preloader');

        if (!this._overlay.length) {
            this._overlay = JQ('<div>').attr('id', 'royal_preloader').prependTo(JQ(document.body));
        }

        this._overlay.addClass('royal_preloader_' + this._mode);

        if (this._mode !== 'line') {
            this._overlay.css('background-color', this._background);
        }

        switch (this._mode) {
            case 'number':
                this._percentage = JQ('<div>').addClass('royal_preloader_percentage').appendTo(this._overlay);

                break;
            case 'text':
                this._text_loader         = JQ('<div>').addClass('royal_preloader_loader').text(this._text).css('color', this._text_colour).appendTo(this._overlay);
                this._text_loader_overlay = JQ('<div>').css('background-color', this._background).appendTo(this._text_loader);

                break;
            case 'logo':
                this._logo_loader         = JQ('<div>')
                                                .css({
                                                    'width':            this._logo_size[0],
                                                    'height':           this._logo_size[1],
                                                    'margin-left':      this._logo_size[0] / 2 * -1,
                                                    'margin-top':       this._logo_size[1] / 2 * -1,
                                                    'background-image': 'url("' + this._logo + '")'
                                                })
                                                .addClass('royal_preloader_loader')
                                                .appendTo(this._overlay);
                this._logo_loader_meter   = JQ('<div>').css('background-color', this._background).appendTo(this._logo_loader);

                if (this._show_progress) {
                    this._percentage      = JQ('<div>')
                                                .css({
                                                    'color':            this._text_colour,
                                                    'width':            this._logo_size[0],
                                                    'height':           this._logo_size[1],
                                                    'margin-left':      this._logo_size[0] / 2 * -1,
                                                    'margin-top':       this._logo_size[1] / 2,
                                                    'background-color': this._background
                                                })
                                                .addClass('royal_preloader_percentage')
                                                .appendTo(this._overlay);
                }

                break;
            case 'line':
                this._line_loader = JQ('<div>').addClass('royal_preloader_loader').css('background-color', this._background).appendTo(this._overlay);
                JQ('<div>').addClass('royal_preloader_peg').css('box-shadow', '0 0 10px ' + this._background).appendTo(this._line_loader);
                JQ(document.body).css('visibility', 'visible');

                break;
            case 'progress':
                this._progress_loader       = JQ('<div>').addClass('royal_preloader_loader').appendTo(this._overlay);
                this._progress_loader_meter = JQ('<div>').addClass('royal_preloader_meter').appendTo(this._progress_loader);

                if (this._show_progress) {
                    this._percentage        = JQ('<div>').addClass('royal_preloader_percentage').text(0).css('color', this._text_colour).appendTo(this._overlay);
                }

                break;
        }

        this._overlay.appendTo(JQ(document.body));

        if (this._mode === 'text') {
            this._text_loader.css('margin-left', this._text_loader.width() / 2 * -1);
        }
    },

    // start loading
    _load: function() {
        if (this._mode === 'number' || this._mode === 'logo' || this._mode === 'progress') {
            if (this._show_progress) {
                this._percentage.data('num', 0);

                var text = '0' + (Royal_Preloader._show_percentage ? '%' : '');
                this._percentage.text(text);
            }
        }

        JQ.each(this._images, function(index, image_src) {
            var _loadFinish = function() {
                Royal_Preloader._imageOnLoad(image_src);
            };

            var image = new Image();
            image.src = image_src;

            if (image.complete) {
                _loadFinish();
            } else {
                image.onload = _loadFinish;
                image.onerror = _loadFinish;
            }
        });

        // timeout
        setTimeout(function() {
            if (Royal_Preloader._overlay) {
                Royal_Preloader._animatePercentage(Royal_Preloader._percentage_loaded, 100);
            }
        }, this._timeout * 1000);
    },

    // animate text change
    _animatePercentage: function(from, to) {
        Royal_Preloader._percentage_loaded = from;

        if (from < to) {
            from++;
            setTimeout(function() {
                switch (Royal_Preloader._mode) {
                    case 'text':
                        Royal_Preloader._text_loader_overlay.css('left', from + '%');
                        break;
                    case 'line':
                        Royal_Preloader._line_loader.width(from + '%');
                        break;
                    case 'number':
                        if (Royal_Preloader._show_progress) {
                            var text = from + (Royal_Preloader._show_percentage ? '%' : '');
                            Royal_Preloader._percentage.text(text);
                        }
                        break;
                    case 'logo':
                        if (Royal_Preloader._show_progress) {
                            var text = from + (Royal_Preloader._show_percentage ? '%' : '');
                            Royal_Preloader._percentage.text(text);
                        }

                        Royal_Preloader._logo_loader_meter.css('bottom', from + '%');
                        break;
                    case 'progress':
                        if (Royal_Preloader._show_progress) {
                            var text = from + (Royal_Preloader._show_percentage ? '%' : '');
                            Royal_Preloader._percentage.text(text);
                        }

                        Royal_Preloader._progress_loader_meter.width(from + '%');
                        break;
                }

                Royal_Preloader._animatePercentage(from, to);
            }, 5);

            if (from === 100) {
                Royal_Preloader._loadFinish();
            }
        }
    },

    // image onload event
    _imageOnLoad: function(image_src) {
        this._image_queue.push(image_src);

        if (this._image_queue.length && this._image_queue[0] === image_src) {
            this._processQueue();
        }
    },

    _reQueue: function() {
        // animate finish, remove item from the queue
        Royal_Preloader._image_queue.splice(0, 1);
        // process queue
        Royal_Preloader._processQueue();
    },

    _processQueue: function() {
        if (this._image_queue.length === 0) {
            return;
        }

        this._loaded++;

        Royal_Preloader._animatePercentage(Royal_Preloader._percentage_loaded, parseInt(100*(this._loaded/this._total),10));

        this._reQueue();
    },

    // load finish
    _loadFinish: function() {
        transitionEnd(this._overlay, function(e, element) {
            if (Royal_Preloader._overlay) {
                Royal_Preloader._overlay.remove();
                Royal_Preloader._overlay = null;
            }
        });

        this._overlay.addClass('complete');
        JQ(document.body).removeClass('royal_preloader');

        if (this._on_complete) {
            this._on_complete();
        }
    },

    // API
    config: function(opts) {
        if (typeof opts.mode !== 'undefined') {
            this._mode = opts.mode;
        }

        if (typeof opts.text !== 'undefined') {
            this._text = opts.text;
        }

        if (typeof opts.text_colour !== 'undefined') {
            this._text_colour = opts.text_colour;
        }

        if (typeof opts.timeout !== 'undefined') {
            this._timeout = parseInt(opts.timeout, 10);
        }

        if (typeof opts.showProgress !== 'undefined') {
            this._show_progress = opts.showProgress ? true : false;
        }

        if (typeof opts.showPercentage !== 'undefined') {
            this._show_percentage = opts.showPercentage ? true : false;
        }

        if (typeof opts.background !== 'undefined') {
            this._background = opts.background;
        }

        if (typeof opts.logo !== 'undefined') {
            this._logo = opts.logo;
        }

        if (typeof opts.logo_size !== 'undefined') {
            this._logo_size = opts.logo_size;
        }

        if (typeof opts.onComplete !== 'undefined') {
            this._on_complete = opts.onComplete;
        }

        if (typeof opts.images !== 'undefined') {
            this._images = opts.images;
        }

        if (typeof opts.cookie !== 'undefined') {
            this._cookie = opts.cookie;
        }
    }
};

JQ(document).ready(Royal_Preloader._init);