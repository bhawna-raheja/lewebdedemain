var video = (function(){

	// private
	var container;

	function hasGetUserMedia() {
		// Note: Opera is unprefixed.
		return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
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
				console.log(video.container);
				var videoc = document.querySelector('video');
				console.log(videoc);

				videoc.src = window.URL.createObjectURL(stream);
				}, function(e){
					console.log('Error : ' + e);
				});
		}

	};
	
})();