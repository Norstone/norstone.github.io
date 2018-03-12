$(function ($, global) {

  // Scope to contact forms only
  if ($('.contactForm').length === 0) {
    return;
  }

  // Default country to the US because most inquiries come from there
  selectCountry('United States');

  function selectCountry(countryName) {
    $('.contactForm__countrySelect')
      .find('option[value="' + countryName + '"]')
      .prop('selected', true);
  }

}(jQuery, window));
