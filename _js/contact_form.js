$(function ($, global) {

  // Scope to contact forms only
  if ($('.contactForm').length === 0) {
    return;
  }

  // Defaults country to the US because most inquiries come from there
  selectCountry('United States');

  getMultipleScripts([
    'https://unpkg.com/moment@2.21.0/min/moment.min.js',
    'https://unpkg.com/moment-timezone@0.5.14/builds/moment-timezone-with-data.min.js',
  ]).done(function () {
    if (norstoneIsOpenNow()) {
      showCallUsNowText();
    }
  });

  //////////////////////////////

  function selectCountry(countryName) {
    $('.contactForm__countrySelect')
      .find('option[value="' + countryName + '"]')
      .prop('selected', true);
  }

  function showCallUsNowText() {
    $('.contactForm__callUsNow').removeClass('hidden');
  }

  function getMultipleScripts(scriptArray) {
    var getScriptParams = $.map(scriptArray, function (script) {
      return $.getScript(script);
    });

    getScriptParams.push($.Deferred(function (deferred) {
      $(deferred.resolve);
    }));

    return $.when.apply($, getScriptParams);
  }

  function norstoneIsOpenNow() {
    // Monday to Friday EST
    var daysOpen = [1, 2, 3, 4, 5];
    var hourOpenEST = 9;
    var hourCloseEST = 17;
    var norstoneIsInDST = isTimezoneInDST('America/New_York');

    // EST to UTC based on Daylight Savings Time
    var hourOpenUTC = hourOpenEST + (norstoneIsInDST ? 4 : 5);
    var hourCloseUTC = hourCloseUTC + (norstoneIsInDST ? 4 : 5);

    var today = new Date();
    var rightNow = today.getUTCHours();
    
    var isOpenToday = daysOpen.indexOf(today.getUTCDay()) !== -1;
    var isOpenThisTime = rightNow >= hourOpenUTC && rightNow < hourCloseUTC;

    return isOpenToday && isOpenThisTime;
  }

  function isTimezoneInDST(timezone) {
    return moment(Date.now()).tz(timezone).isDST();
  }

}(jQuery, window));
