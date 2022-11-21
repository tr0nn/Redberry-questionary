let tokenLS = localStorage.getItem('token');
let firstNameLS = localStorage.getItem('firstName');
let lastNameLS = localStorage.getItem('lastName');
let emailLS = localStorage.getItem('email');
let phoneLs = localStorage.getItem('phone');
let skillObjLS = localStorage.getItem('skillobj');
let workPreferLS = localStorage.getItem('work_preference');
let contactCov19LS = localStorage.getItem('had_covid');
let covidDateLS = localStorage.getItem('had_covid_at');
let vaccinateLS = localStorage.getItem('vaccinated');
let vaccinateDateLS = localStorage.getItem('vaccinated_at');
let devTalkLS = localStorage.getItem('will_organize_devtalk');
let speakDevtalkLS = localStorage.getItem('devtalk_topic');
let someSpecialLS = localStorage.getItem('something_special');

let submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', submitForm);

function submitForm() {
  fetch('https://bootcamp-2022.devtest.ge/api/application', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: {
      token: tokenLS,
      first_name: firstNameLS,
      last_name: lastNameLS,
      email: emailLS,
      phone: phoneLs,
      skill: skillObjLS,
      work_preference: workPreferLS,
      had_covid: contactCov19LS,
      had_covid_at: covidDateLS,
      vaccinated: vaccinateLS,
      vaccinated_at: vaccinateDateLS,
      will_organize_devtalk: devTalkLS,
      devtalk_topic: speakDevtalkLS,
      something_special: someSpecialLS
    }
  })
    .then(response => response.json())
    .then(response => console.log(response));
}

//https://bootcamp-2022.devtest.ge/api/application

// token: tokenLS,
// first_name: firstNameLS,
// last_name: lastNameLS,
// email: emailLS,
// phone: phoneLs,
// skill: skillObjLS,
// work_preference: workPreferLS,
// had_covid: contactCov19LS,
// had_covid_at: covidDateLS,
// vaccinated: vaccinateLS,
// vaccinated_at: vaccinateDateLS,
// will_organize_devtalk: devTalkLS,
// devtalk_topic: speakDevtalkLS,
// something_special: someSpecialLS
