$(function ($, global) {

  // Scope to contact forms only
  if ($('.contactForm').length === 0) {
    return;
  }

  // Default country to the US because most inquiries come from there
  selectCountry('United States');

  if (norstoneIsOpenNow()) {
    showCallUsNowText();
  }

  function selectCountry(countryName) {
    $('.contactForm__countrySelect')
      .find('option[value="' + countryName + '"]')
      .prop('selected', true);
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
