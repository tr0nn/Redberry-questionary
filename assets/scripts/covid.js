let workBtn = document.querySelector('#workFormBtn');

let selectedWork;

let selectedCov19;
let cov19DateTime;

let selectedVaccine;
let vaccineCovDateTime;

function covid19Contact(ans) {
  if (ans == 'yes') {
    document.getElementById('whenContactCov').style.display = 'block';
  } else if (ans == 'no') {
    document.getElementById('whenContactCov').style.display = 'none';
  }
}

function covid19Vaccinated(ans) {
  if (ans == 'yes') {
    document.getElementById('cov-vaccine').style.display = 'block';
  } else if (ans == 'no') {
    document.getElementById('cov-vaccine').style.display = 'none';
  }
}

const worksEl = document.querySelectorAll('input[name="workLocation"]');
const cov19El = document.querySelectorAll('input[name="contactCov"]');
const vaccineEl = document.querySelectorAll('input[name="vaccineCov"]');

workBtn.addEventListener('click', () => {
  //_____________________________________________work

  for (const el of worksEl) {
    if (el.checked) {
      selectedWork = el.value;
      break;
    }
  }
  workValidation.innerText = selectedWork ? `` : `* You haven't selected`;
  //_____________________________________________cov19
  for (const el of cov19El) {
    if (el.checked) {
      selectedCov19 = el.value;
      cov19DateTime = document.getElementById('covid19DateId').value;
      cov19DateValidation.innerText = cov19DateTime ? `` : ` * enter date`;
      break;
    }
  }
  cov19Validation.innerText = selectedCov19 ? `` : `* selecte covid status `;
  //____________________________________________vaccinated
  for (const el of vaccineEl) {
    if (el.checked) {
      selectedVaccine = el.value;
      vaccineCovDateTime = document.getElementById('vaccineDateId').value;
      vaccineDateValidation.innerText = vaccineCovDateTime
        ? ``
        : `* enter date`;
      break;
    }
  }
  vaccineValidation.innerText = selectedVaccine ? `` : `* You haven't selected`;
  //_______________________________________________Next To Validation
  selectedCov19 == 'no' ? (cov19DateTime = true) : null;
  selectedVaccine == 'no' ? (vaccineCovDateTime = true) : null;

  if (
    selectedWork &&
    selectedCov19 &&
    selectedVaccine &&
    cov19DateTime &&
    vaccineCovDateTime
  ) {
    alert('ai aq ki martla iwerebashemdegi kodi');
  }
});
