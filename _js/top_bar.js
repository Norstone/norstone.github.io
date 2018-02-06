$(function($, global) {

  if (!sessionStorage.getItem('hasVisited')) {
    sessionStorage.setItem('hasVisited', 'true');
  } else {
    $('.topBar__container.enterByFloatingDown').removeClass('enterByFloatingDown');
  }

}(jQuery, window));