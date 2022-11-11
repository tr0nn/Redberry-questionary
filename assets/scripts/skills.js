var itemId = 1;

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

function addProgLang() {
  var selectedOption = document.forms['user-form'].skills;
  const newSkillLi = document.createElement('li');

  const newSkillUl = document.getElementById('addProgLang-Skills-ul');
  newSkillLi.id = itemId++;

  var items = newSkillUl.getElementsByTagName('li');

  if (items.length == 0) {
    newSkillLi.innerText = selectedOption.value;
    newSkillUl.appendChild(newSkillLi);
  } else {
    for (var i = 0; i < items.length; ++i) {
      if (selectedOption.value !== items[i].innerText) {
        newSkillLi.innerText = selectedOption.value;
        newSkillUl.appendChild(newSkillLi);
      } else if (items[i] == selectedOption.value) {
        console.log(selectedOption.value);
        alert('2');
      }
    }
  }
}
