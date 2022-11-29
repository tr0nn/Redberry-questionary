localStorage.setItem('token', '9159d670-97b6-4c18-a382-4c607c7a7096');

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
      'Content-type': 'application/json; charset=UTF-8',
      accept: 'application/json'
    },
    body: JSON.stringify({
      token: tokenLS,
      first_name: firstNameLS,
      last_name: lastNameLS,
      email: emailLS,
      phone: phoneLs,
      skill: JSON.parse(skillObjLS),
      work_preference: workPreferLS,
      had_covid: contactCov19LS === 'true',
      had_covid_at: covidDateLS === 'true' ? '1111-11-11' : covidDateLS,
      vaccinated: vaccinateLS === 'true',
      vaccinated_at:
        vaccinateDateLS === 'true' ? '1111-11-11' : vaccinateDateLS,
      will_organize_devtalk: devTalkLS === 'true',
      devtalk_topic: speakDevtalkLS,
      something_special: someSpecialLS
    })
  })
    .then(data => {
      if (data !== '') {
        alert('submitted');
        console.log(data);

        window.localStorage.clear();
        window.location.href = './thanks.html';
      }
    })
    .catch(error => {
      alert(error);
    });
}
