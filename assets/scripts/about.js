let aboutBtn = document.getElementById('aboutFormBtn');

let selectDevTalks;
let speakDevTalks;

let someSpecial;
function speakDevtalk(ans) {
  if (ans == 'yes') {
    document.getElementById('speak-about-Devtalk').style.display = 'block';
  } else if (ans == 'no') {
    document.getElementById('speak-about-Devtalk').style.display = 'none';
  }
}

const DevtalksEl = document.querySelectorAll('input[name="DevTalks"]');

aboutBtn.addEventListener('click', () => {
  //______________________________________________DevTalks
  for (const el of DevtalksEl) {
    if (el.checked) {
      selectDevTalks = el.value;
      speakDevTalks = document.getElementById('devTalk-about').value;
      speakDevTalkId.innerText = speakDevTalks ? `` : `*  enter text`;
      break;
    }
  }
  DevTalkValidation.innerText = selectDevTalks ? `` : `* You haven't selected `;
  //_____________________________________________special
  someSpecial = document.getElementById('someSpecialId').value;
  specialValidation.innerText = someSpecial ? `` : `* enter text`;
  //______________________________________________Next To Validation
  selectDevTalks == 'no' ? (speakDevTalks = true) : null;

  if (selectDevTalks && speakDevTalks && someSpecial) {
    alert('gamosula dzmao');
  }
});
