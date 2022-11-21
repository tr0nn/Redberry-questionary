let html = (css = php = laravel = react = vue = svelte = angular = true);

let skillObj = [];

async function fetchText() {
  let response = await fetch('https://bootcamp-2022.devtest.ge/api/skills');
  let data = await response.json();
  data.forEach(element => {
    const newContent = document.createElement('option');
    newContent.id = element.id;
    newContent.innerHTML = element.title;
    const skillsSelect = document.getElementById('skills-option');
    skillsSelect.appendChild(newContent);
  });
}
fetchText();

function DeleteSkill(Id) {
  document.getElementById(Id).remove();
  html = css = php = laravel = react = vue = svelte = angular = true;
}

function skillBtnFunc(idx) {
  return `<button onclick="DeleteSkill(${idx})" id="skill-delete-btn" type="button"><img src="./assets/images/Remove.png"></button>`;
}

function addProgLang() {
  let selectedOption = document.forms['user-form'].skills;
  let expDuration = document.getElementById('expreiance-duration').value;

  const newSkillUl = document.getElementById('addProgLang-Skills-ul');

  experianceValId.innerText = expDuration
    ? ``
    : `* You haven't selected experience`;

  if (selectedOption.value == 'HTML' && html && expDuration) {
    newSkillUl.insertAdjacentHTML(
      'beforeend',
      `<li id="11">${
        selectedOption.value
      } Years of Experience: ${expDuration} ${skillBtnFunc(11)} </li>`
    );
    html = false;
  } else if (selectedOption.value == 'CSS' && css && expDuration) {
    newSkillUl.insertAdjacentHTML(
      'beforeend',
      `<li id="22">${
        selectedOption.value
      } Years of Experience: ${expDuration} ${skillBtnFunc(22)} </li>`
    );
    css = false;
  } else if (selectedOption.value == 'PHP' && php && expDuration) {
    newSkillUl.insertAdjacentHTML(
      'beforeend',
      `<li id="33">${
        selectedOption.value
      } Years of Experience: ${expDuration} ${skillBtnFunc(33)} </li>`
    );
    php = false;
  } else if (selectedOption.value == 'Laravel' && laravel && expDuration) {
    newSkillUl.insertAdjacentHTML(
      'beforeend',
      `<li id="44">${
        selectedOption.value
      } Years of Experience: ${expDuration} ${skillBtnFunc(44)}</li>`
    );
    laravel = false;
  } else if (selectedOption.value == 'React.JS' && react && expDuration) {
    newSkillUl.insertAdjacentHTML(
      'beforeend',
      `<li id="55">${
        selectedOption.value
      } Years of Experience: ${expDuration} ${skillBtnFunc(55)}</li>`
    );
    react = false;
  } else if (selectedOption.value == 'Vue.JS' && vue && expDuration) {
    newSkillUl.insertAdjacentHTML(
      'beforeend',
      `<li id="66">${
        selectedOption.value
      } Years of Experience: ${expDuration} ${skillBtnFunc(66)}</li>`
    );
    vue = false;
  } else if (selectedOption.value == 'Svelte' && svelte && expDuration) {
    newSkillUl.insertAdjacentHTML(
      'beforeend',
      `<li id="77">${
        selectedOption.value
      } Years of Experience: ${expDuration} ${skillBtnFunc(77)}</li>`
    );
    svelte = false;
  } else if (selectedOption.value == 'Angular' && angular && expDuration) {
    newSkillUl.insertAdjacentHTML(
      'beforeend',
      `<li id="88">${
        selectedOption.value
      } Years of Experience: ${expDuration} ${skillBtnFunc(88)}</li>`
    );
    angular = false;
  }
}

function skillSubmitForm() {
  let skillList = document
    .getElementById('addProgLang-Skills-ul')
    .getElementsByTagName('li');

  if (skillList.length < 1) {
    alert('choose ');
  } else {
    for (let i = 0; i < skillList.length; ++i) {
      let lastString = skillList[i].innerText.slice(-2);
      let obj = { id: skillList[i].id, experience: lastString };
      skillObj.push(obj);
      let skillObJson = JSON.stringify(skillObj);
      localStorage.setItem('skillobj', skillObJson);
      window.open('covid.html', '_self');
    }
  }
  //console.log(skillObj);
}
