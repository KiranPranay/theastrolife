$(function () {
 $(".sidebar-link").click(function () {
  $(".sidebar-link").removeClass("is-active");
  $(this).addClass("is-active");
 });
});

$(window)
 .resize(function () {
  if ($(window).width() > 1090) {
   $(".sidebar").removeClass("collapse");
  } else {
   $(".sidebar").addClass("collapse");
  }
 })
 .resize();

const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
 v.addEventListener("mouseover", () => {
  const video = v.querySelector("video");
  video.play();
 });
 v.addEventListener("mouseleave", () => {
  const video = v.querySelector("video");
  video.pause();
 });
});

// $(function () {
//  $(".logo, .logo-expand, .discover").on("click", function (e) {
//   $(".main-container").removeClass("show");
//   $(".main-container").scrollTop(0);
//  });
//  $(".trending, .video").on("click", function (e) {
//   $(".main-container").addClass("show");
//   $(".main-container").scrollTop(0);
//   $(".sidebar-link").removeClass("is-active");
//   $(".trending").addClass("is-active");
//  });

// });