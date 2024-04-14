var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay=false
	video.loop=false
	console.log ('auto play is set to ' + video.autoplay)
	console.log ('loop is set to ' + video.loop)

});

//Play the video and update the volume information. //
document.querySelector("#play").addEventListener("click", function () {
	document.querySelector("#player1").play();
	console.log('volume is set to ' + video.volume)
	document.querySelector("#volume").innerHTML = video.volume;
  });

//Pause the video.//
document.querySelector("#pause").addEventListener("click", function () {
	document.querySelector("#player1").pause();
});

//Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.//
document.querySelector("#slower").addEventListener("click", function () {
	rate = video.playbackRate
	document.querySelector("#player1").playbackRate = (rate - .1);
	console.log ('playback speed is set to' + video.playbackRate)
});

//Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down.//
document.querySelector("#faster").addEventListener("click", function () {
	rate = video.playbackRate
	document.querySelector("#player1").playbackRate = (rate + .1);
	console.log ('playback speed is set to' + video.playbackRate)
});


//Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.//
document.querySelector("#skip").addEventListener("click", function () {
	time = video.currentTime
	if (time >= video.duration) {
		document.querySelector("#player1").play();
	}
	else{
		document.querySelector("#player1").currentTime = (time + 10);
	console.log ('playback speed is set to' + video.currentTime)
	}
});

//Mute / unmute the video and update the text in the button.//
document.querySelector("#mute").addEventListener("click", function () {
	var btnmute = document.getElementById("mute");
	if (video.muted === false) {
		video.muted=true
		btnmute.innerHTML = "Unmute";
	}

	else {
		video.muted=false
		btnmute.innerHTML = "Mute";
	}
});

//Change the volume based on the slider and update the volume information.//
slider.addEventListener("change", function() {
	var vlm = document.getElementById("slider");
	video.volume = vlm.value / 100;
	document.querySelector("#volume").innerHTML = video.volume;
});

//Utilize the existing oldSchool class on the video element//
document.getElementById("#player1").style.property = "#vintage"

//Remove the oldSchool class from the video.//

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

