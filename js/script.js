document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('citizenid');
  const btn = document.getElementById('button');
  const error = document.getElementById('errorMessage');
  const success = document.getElementById('successMessage');
  const mask = new IMask(input, {
    mask: '0-0000-00000-00-0'
  });

  input.addEventListener('keyup', event => {
    validateInput(event, input.value.replace(/-/g, ''));
  });

  input.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      return false; // Disable enter to submit for UX
    }
  });

  btn.addEventListener('click', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    // handle submit here
    alert('Your national ID submit value is: ' + input.value.replace(/-/g, ''));
  });

  function validateInput(event, value) {
    const maxLength = 13;
    const regex = /^[0-9]\d*$/;
    const char = String.fromCharCode(event.keyCode) || String.fromCharCode(event.which);

    if (
      value !== undefined &&
      value.toString().length == maxLength &&
      value.match(regex) &&
      validNationalID(value)
    ) {
      btn.disabled = false;
      input.setAttribute('aria-invalid', false);
      error.setAttribute('aria-hidden', true);
      success.setAttribute('aria-hidden', false);
      error.style.display = 'none';
      success.style.display = 'block';
    } else if (
      value !== undefined &&
      value.toString().length == maxLength &&
      value.match(regex) &&
      !validNationalID(value)
    ) {
      btn.disabled = true;
      input.setAttribute('aria-invalid', true);
      error.setAttribute('aria-hidden', false);
      success.setAttribute('aria-hidden', true);
      error.style.display = 'block';
      success.style.display = 'none';
    } else {
      btn.disabled = true;
      input.setAttribute('aria-invalid', true);
      error.setAttribute('aria-hidden', false);
      success.setAttribute('aria-hidden', true);
      error.style.display = 'none';
      success.style.display = 'none';
    }
  }

  function validNationalID(id) {
    if (id == null || id.length != 13) return false;
    let i, sum = 0;
    // STEP1 - get only first 12 digits
    for ((i = 0), (sum = 0); i < 12; i++) {
      // STEP 2 - multiply each digit with each index (reverse)
      // STEP 3 - sum multiply value together
      sum += parseInt(id.charAt(i)) * (13 - i);
    }
    // STEP 4 - mod sum with 11
    let mod = sum % 11;
    // STEP 5 - subtract 11 with mod, then mod 10 to get unit
    let check = (11 - mod) % 10;
    // STEP 6 - if check is match the digit 13th is correct
    if (check == parseInt(id.charAt(12))) {
      return true;
    }
    return false;
  }
});
