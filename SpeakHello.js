(function(window) {
	var helloSpaeker = new Object();
	var speakWord = "hello";
	helloSpaeker.speak = function(name) {
		console.log(speakWord + " " + name);
	};
	window.helloSpeaker = helloSpaeker;
}) (window);