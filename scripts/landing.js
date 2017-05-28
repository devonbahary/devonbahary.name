/*
  devonbahary.name
    scripts
      landing.js
*/

$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}

$(document).ready(function() {

  // implement on-click scrolling to next landing image, looping back to the
  // top after the last
  $('.landing-section#first .dialogue-box').click(function() {
    $('.landing-section#second').scrollView();
  });
  $('.landing-section#second .dialogue-box').click(function() {
    $('.landing-section#third').scrollView();
  });
  $('.landing-section#third .dialogue-box').click(function() {
    $('.landing-section#first').scrollView();
  });
});
