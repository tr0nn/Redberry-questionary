localStorage.setItem('token', '9159d670-97b6-4c18-a382-4c607c7a7096');
let infoLineId = 1;
let mainDiv = document.getElementById('submitted-div');
let deleteEl = 2;

fetch(
  'https://bootcamp-2022.devtest.ge/api/applications?token=' +
    localStorage.getItem('token')
)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      //creat div
      const infoLine = document.createElement('div');
      infoLine.id = 'infoId-' + infoLineId;
      infoLine.innerText = infoLineId;

      //Btn
      const infoBtn = document.createElement('button');
      infoBtn.id = 'infoBtnId-' + infoLineId;
      infoLine.appendChild(infoBtn);

      //img
      const infoImg = document.createElement('img');
      infoImg.src = './assets/images/Vector.png';
      infoBtn.appendChild(infoImg);

      mainDiv.appendChild(infoLine);

      //addEventListener
      let infoEl = document.getElementById('infoBtnId-' + infoLineId);
      infoEl.addEventListener('click', () => {
        if (deleteEl % 2 == 0) {
          infoImg.src = './assets/images/VectorDown.png';

          let unicalEl = infoEl.id.slice(-1);

          let unicalDiv = document.getElementById(infoEl.id).parentElement;

          let preferToWorkOffice;
          let preferToWorkHome;
          let preferToWorkHybrid;
          let covid19No;
          let covid19Yes;
          let haveCov19Form;
          let vaccinatedNo;
          let vaccinatedYes;
          let cov19VaccineForm;
          let devtalkNo;
          let devtalkYes;
          let speakDevtalkForm;
          let someSpecialForm = data[unicalEl].something_special;

          if (data[unicalEl].work_preference == 'from_office') {
            preferToWorkOffice = 'checked';
          }
          if (data[unicalEl].work_preference == 'from_home') {
            preferToWorkHome = 'checked';
          }
          if (data[unicalEl].work_preference == 'hybrid') {
            preferToWorkHybrid = 'checked';
          }

          if (data[unicalEl].had_covid == false) {
            covid19No = 'checked';
          }
          if (data[unicalEl].had_covid == true) {
            covid19Yes = 'checked';
            haveCov19Form = `
            <div>
                <h1 class="blackHead">When did you have covid 19?</h1>
                <input type="date"  value=${data[unicalEl].had_covid_at} >
            </div>
            `;
          }
          if (data[unicalEl].vaccinated == false) {
            vaccinatedNo = 'checked';
          }
          if (data[unicalEl].vaccinated == true) {
            vaccinatedYes = 'checked';
            cov19VaccineForm = `
           <div>
                <h1 class="blackHead">When did you get covid vaccine?</h1>
                <input type="date"  value=${data[unicalEl].vaccinated_at} >
            </div>
          `;
          }
          if (data[unicalEl].will_organize_devtalk == false) {
            devtalkNo = 'checked';
          }
          if (data[unicalEl].will_organize_devtalk == true) {
            devtalkYes = 'checked';
            speakDevtalkForm = `
            <div>
                <h1 class="blackHead">What would you speak about at Devtalk?</h2>
                <input type="text" placeholder="${data[unicalEl].devtalk_topic}">
            </div>
          `;
          }
          let submitForm = `
        <li id="deleteFormLi" class="unicalClassDiv">
            <div class="left-info">
                <br>
                <div class="pers-info-submit">
                    <h2 class="redFormHeader">Personal Information</h2><br>
                    <h3 class="h3">First Name &nbsp; &nbsp; ${
                      data[unicalEl].first_name
                    }</h3>
                    <h3 class="h3">Last Name &nbsp; &nbsp; ${
                      data[unicalEl].last_name
                    }</h3>
                    <h3 class="h3">Email &nbsp; &nbsp; ${
                      data[unicalEl].email
                    } </h3>
                    <h3 class="h3">Phone  &nbsp; &nbsp; ${
                      data[unicalEl].phone
                    }</h3>
                </div><br>
                <div class="covStatus-info-submit">
                    <h2 class="redFormHeader">Covid Situation</h2>
                    <h1 class="blackHead">how would you prefer to work?</h1>
                    <input  type="radio" ${preferToWorkOffice}>
                    <label>From Sairme Office</label><br> 
                    <input  type="radio" ${preferToWorkHome}>
                    <label>From Home</label><br> 
                    <input  type="radio" ${preferToWorkHybrid} >
                    <label>Hybrid</label><br> 
                </div><br>
                <div>
                    <h1 class="blackHead">Did you have covid 19?</h1>
                    <input  type="radio" ${covid19Yes}>
                    <label>Yes</label><br> 
                    <input  type="radio" ${covid19No}>
                    <label>No</label><br> 
                </div><br>
                ${data[unicalEl].had_covid ? haveCov19Form : ''}
                <div><br>
                    <h1 class="blackHead">Have you been vaccinated?</h1>
                    <input  type="radio" ${vaccinatedYes}>
                    <label>Yes</label><br> 
                    <input  type="radio" ${vaccinatedNo}>
                    <label>No</label><br> 
                </div><br>
                ${data[unicalEl].vaccinated ? cov19VaccineForm : ''}
            </div>

            <div class="right-info">
                <div><br>
                    <h1 class="redFormHeader">Skillset</h1>
                    <h3 class="skillclass">PHP &nbsp; &nbsp; &nbsp; &nbsp;Years of Experience: 3 </h3><br><br>

                    <h1 class="redFormHeader">Insigts</h1>
                    <h1 class="blackHead">Would you attend Devtalks and maybe also organize your own?</h1>
                    <input  type="radio" ${devtalkYes}>
                    <label>Yes</label><br> 
                    <input  type="radio" ${devtalkNo}>
                    <label>No</label><br> <br> <br> <br>
                    ${
                      data[unicalEl].will_organize_devtalk
                        ? speakDevtalkForm
                        : ''
                    }<br>
                    <h1 class="blackHead">Tell us somthing special</h1>
                    <input type="text" placeholder="${someSpecialForm}">
                </div>
            </div>
        </li>`;
          console.log(someSpecialForm);
          unicalDiv.insertAdjacentHTML('afterend', `${submitForm}`);
        } else {
          document.getElementById('deleteFormLi').remove();
          infoImg.src = './assets/images/Vector.png';
        }
        deleteEl = deleteEl + 1;
      });

      ++infoLineId;
    }
  });
