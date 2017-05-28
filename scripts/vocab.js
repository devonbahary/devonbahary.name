/*
  devonbahary.name
    scripts
      vocab.js
*/

$(document).ready(function() {

  var $beginBox = $('#begin');
  var $loadBox = $('#load');
  // fade 'interaction-box' onto page
  $beginBox.css('opacity', 0).delay(1000).fadeTo(1000, 1.0);

  // 'interaction-box #begin' click to fade away and fade in #load
  $beginBox.click(function() {
    $(this).fadeOut(500);
    $loadBox.text('Found ' + dictionary.length + ' words.');
    $loadBox.delay(500).fadeTo(1000, 1.0);
    // 'interaction-box #load' click to fade away
    $loadBox.click(function() {
      $(this).fadeOut(500);
    });
  });

});
