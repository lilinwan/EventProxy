
/**
 * @name EventProxy
 * @version 1.0.1
 * @created 2015.12.04
 * @lastmodified 2015.12.04
 * @description A event listener plugin based on jQuery 2.1.4
 * @author Jonathan BigDog (https://github.com/lilinwan)
 * @url https://github.com/lilinwan/EventProxy.git
 **/
if (!window.jQuery || typeof jQuery == 'undefined') {
	console.error('jQuery Library is required!');
}

var EventProxy = function (options) {
	this.settings = {
		debug: false
	}
	this.events = [];
	this.times = 0;
	this.init(options);
}

EventProxy.prototype = {
	init: function (options) {
		var _this = this;
		_this.settings = jQuery.extend(_this.settings, options);
	},

	after: function (eventName, times, callback) {
		var _this = this;

		_this.events[eventName] = {
			eventName: '',
			times: 0,
			eventQueue: []
		},
		_this.times = times;

		_this.createQueue(eventName, times);
		_this.exectueCallback(eventName, callback);
	},

	createQueue: function (eventName, times) {
		var _this = this;
		_this.events[eventName].eventName = eventName,
		_this.events[eventName].times = times;
		for (var i = 0; i < times; i++) {
			_this.events[eventName].eventQueue.push(new jQuery.Deferred());
		}
	},

	exectueCallback: function (eventName, callback) {
		var _this = this;
		$.when.apply(null, _this.events[eventName].eventQueue).done(function () {
			callback();
		});
	},

	solve: function (eventName) {
		var _this = this,
			times = _this.events[eventName].times - 1;
		_this.events[eventName].eventQueue[times].resolve();
		_this.events[eventName].times--;
	},

	hasEvent: function (eventName) {
		var _this = this;
		return _this.events.hasOwnProperty(eventName);
	}
}