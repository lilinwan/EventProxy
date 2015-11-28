# EventProxy

## Getting Started
Download the lastest version of EventProxy.

You can find example in index.html.

In your web page:

<pre>
&lt;!-- include jQuery -->
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js">&lt;/script>
&lt;!-- include EventProxy -->
&lt;script src="http://path/to/your/copy/of/waterfall.js">&lt;/script>
&lt;script>
// invoke EventProxy as needed -->
jQuery(document).ready(function ($) {
	// Create a new EventProxy object
	var eventproxy = new EventProxy();
	
	/**
	 * create a custom event listener
	 * after: function (eventName, times, callback)
	 * @eventName custom event name 
	 * @times overall times that events would be called
	 * @callback callback functions after all events were resolved
	 **/
	eventproxy.after('event_1' , $('#content img').size(), function () {
		console.log('Deferred content height: ' + $('#content').outerHeight(true));
		console.log('All images were loaded!');
	});
	
	$('#content img').each(function () {
		var _this = $(this);
		_this.on('load', function () {
			// call solve function to resolve one time
			eventproxy.solve('event_1');
		});
	});
});
>&lt;/script>
</pre>

## Copyright and License
Copyright &copy; 2015 W., Jonathan
	
The EventProxy Plugin is dual licensed under the [MIT](http://malsup.github.com/mit-license.txt) and [GPL](http://malsup.github.com/gpl-license-v2.txt) licenses.
	
You may use either license.  The MIT license is recommended for most projects because it is simple and easy to understand and it places almost no restrictions on what you can do with the plugin.
	
If the GPL suits your project better you are also free to use the plugin under that license.

You do not have to do anything special to choose one license or the other and you don't have to notify anyone which license you are using. You are free to use the EventProxy plugin in commercial projects as long as the copyright header is left intact.