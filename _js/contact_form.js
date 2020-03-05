Date.prototype.dst = function() {
  return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

Date.prototype.stdTimezoneOffset = function() {
  var jan = new Date(this.getFullYear(), 0, 1);
  var jul = new Date(this.getFullYear(), 6, 1);
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

$(function ($, global) {

  // Scope to contact forms only
  if ($('.contactForm').length === 0) {
    return;
  }

  if (norstoneIsOpen()) {
    showCallUsNowText();
  }

  function showCallUsNowText() {
    $('.contactForm__callUsNow').removeClass('hidden');
  }

  function norstoneIsOpen() {
    var now = new Date();

    // Monday to Friday EST
    var daysOpen = [1, 2, 3, 4, 5];
    var hourOpenEST = 9;
    var hourCloseEST = 17;

    // EST to UTC based on Daylight Savings Time
    var hourOpenUTC = hourOpenEST + (now.dst() ? 4 : 5);
    var hourCloseUTC = hourCloseEST + (now.dst() ? 4 : 5);
    console.log(hourOpenUTC);
    console.log(hourCloseUTC);
    
    var rightNow = now.getUTCHours();
    var isOpenToday = daysOpen.indexOf(now.getUTCDay()) !== -1;
    var isOpenThisTime = rightNow >= hourOpenUTC && rightNow < hourCloseUTC;

    return isOpenToday && isOpenThisTime;
  }
}(jQuery, window));

$(function ($, global) {
  function checkHoneypot() {
    return $('.honeypot input[name=url]').val() === '';
  }

  global.checkHoneypot = checkHoneypot;
}(jQuery, window));

function reloadImg() {  if(document.getElementById('imgid').src.indexOf('&d') !== -1 ) {
    document.getElementById('imgid').src=document.getElementById('imgid').src.substring(0,document.getElementById('imgid').src.indexOf('&d'))+'&d'+new Date().getTime();
  }  else {
    document.getElementById('imgid').src = document.getElementById('imgid').src+'&d'+new Date().getTime();
  } 
}
