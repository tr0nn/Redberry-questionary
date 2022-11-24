let firstNameEl, lastNameEl, emailEl, phoneEl;
let firsNameVal, lastNameVal, emailVal, phoneVal;
let persInfoSesion = true;

function validateEmail(emial) {
  const re = /\S+@\S+\.\S+/;
  return re.test(emial);
}

function validatePhone(phone) {
  const re = /[+][9]{2}[5]{2}[0-9]{8}$/g;
  return re.test(phone);
}

function persInfoSesionFunc(check) {
  persInfoSesion = check;
}

function persInfoValidation() {
  firstNameEl = document.getElementById('firsNameEl').value;
  lastNameEl = document.getElementById('lastNameEl').value;
  emailEl = document.getElementById('emailEl').value;
  phoneEl = document.getElementById('phoneEl').value;

  firsNameVal = document.getElementById('firsNameVal');
  lastNameVal = document.getElementById('lastNameVal');
  emailVal = document.getElementById('emailVal');
  phoneVal = document.getElementById('phoneVal');

  if (firstNameEl.length < 3 || firstNameEl == '') {
    firsNameVal.innerHTML = '* first name is required';
    persInfoSesionFunc('false');
  } else {
    firsNameVal.innerHTML = '';
    persInfoSesionFunc('true');
  }

  if (lastNameEl.length < 3 || lastNameEl == '') {
    lastNameVal.innerHTML = '* last name should include 3 or more characters';
    persInfoSesionFunc('false');
  } else {
    lastNameVal.innerHTML = '';
    persInfoSesionFunc('true');
  }

  if (!validateEmail(emailEl)) {
    emailVal.innerHTML = '* email format is not correct ';
    persInfoSesionFunc('false');
  } else {
    emailVal.innerHTML = '';
    persInfoSesionFunc('true');
  }
  if (!validatePhone(phoneEl)) {
    //phoneVal.innerHTML = '* phone format is not correct';
  } else {
    phoneVal.innerHTML = '';
  }

  if (
    persInfoSesion &&
    firstNameEl.length > 3 &&
    lastNameEl.length > 3 &&
    validateEmail(emailEl)
  ) {
    localStorage.setItem('firstName', firstNameEl);
    localStorage.setItem('lastName', lastNameEl);
    localStorage.setItem('email', emailEl);
    localStorage.setItem('phone', phoneEl);
    window.open('skills.html', '_self');
  }
}
