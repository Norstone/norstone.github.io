$(function ($, global) {

  if (norstoneIsOpenNow()) {
    showCallUsNowText();
  }

  function norstoneIsOpenNow() {
    // Monday to Friday EST
    var daysOpenUTC = [1, 2, 3, 4, 5];

    // 9 a.m EST
    var hourOpenUTC = 14;

    // 5 p.m EST
    var hourCloseUTC = 22;

    var today = new Date();
    var rightNow = today.getUTCHours();
    
    var isOpenToday = daysOpenUTC.indexOf(today.getUTCDay()) !== -1;
    var isOpenThisTime = rightNow >= hourOpenUTC && rightNow < hourCloseUTC;

    return isOpenToday && isOpenThisTime;
  }

  function showCallUsNowText() {
    $('.contactForm__callUsNow').removeClass('hidden');
  }

}(jQuery, window));