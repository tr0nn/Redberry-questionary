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
