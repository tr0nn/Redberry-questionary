localStorage.setItem('token', 'c734315e-87b5-40d8-882e-6f9e4811c591');

fetch(
  'https://bootcamp-2022.devtest.ge/api/applications?token=' +
    localStorage.getItem('token')
)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
