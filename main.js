"use strict";

const btnClickVideo = document.getElementById("content_btn2");

const video = document.getElementById("content_videos");
function openVideo() {
  video.play();
}

btnClickVideo.addEventListener("click", () => {
  openVideo();
});
