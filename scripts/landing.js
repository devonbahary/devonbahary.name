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
  $('.landing-image#first .dialogue-box').click(function() {
    $('.landing-image#second').scrollView();
  });
  $('.landing-image#second .dialogue-box').click(function() {
    $('.landing-image#third').scrollView();
  });
  $('.landing-image#third .dialogue-box').click(function() {
    $('.landing-image#first').scrollView();
  });
});
