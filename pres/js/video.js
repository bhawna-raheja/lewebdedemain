var video = (function(){

	// private
	var container;
	var filterId = 0;
	var filters = ['sepia', 'grayscale', 'hue', 'zoom', 'flip'];

	function changeFilter(elt){
		elt.removeClass(filters[filterId % filters.length]).addClass(filters[++filterId % filters.length]);
	}

	//public
	return{

		'init': function(container){
			this.container = container;
		},

		'play': function(){

			// make it cross browser
			navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;
            window.URL = window.URL || window.webkitURL;

            // Do we have getUserMedia ?
			if(!navigator.getUserMedia){
				alert('getUserMedia() is not supported in your browser');
				return;
			}

			navigator.getUserMedia({video: true}, function(stream) {
				video.container.get(0).src = window.URL.createObjectURL(stream);
				}, function(e){
					console.log('Error : ' + e);
				});

			setInterval(function(){
				changeFilter(video.container);
				}, 6000);
		}

	};
	
})();