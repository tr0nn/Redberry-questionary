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
      token: '5f288435-5740-4365-beb8-a5e0a1820fdc',
      first_name: 'gela',
      last_name: 'gelashvili',
      email: 'gelashvili@gela.ge',
      phone: '666',
      skill: [{ id: 1, experience: '3' }],
      work_preference: 'from_home',
      had_covid: true,
      had_covid_at: '2022-02-23',
      vaccinated: true,
      vaccinated_at: '2022-02-23',
      will_organize_devtalk: true,
      devtalk_topic: 'I would ...',
      something_special: 'I am special!'
    }
  })
    .then(data => {
      if (data !== '') {
        alert('submitted');
      }
    })
    .catch(error => {
      alert(error);
    });
}
// console.log(tokenLS);
// console.log(firstNameLS);
// console.log(lastNameLS);
// console.log(emailLS);
// console.log(phoneLs);
// console.log(skillObjLS);
// console.log(workPreferLS);
// console.log(contactCov19LS);
// console.log(covidDateLS);
// console.log(vaccinateLS);
// console.log(vaccinateDateLS);
// console.log(devTalkLS);
// console.log(speakDevtalkLS);
// console.log(someSpecialLS);

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
