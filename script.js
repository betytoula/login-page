const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});




document.querySelector('.sign-up form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('.sign-up input[type="text"]').value;
  const email = document.querySelector('.sign-up input[type="text"]:nth-child(2)').value;
  const password = document.querySelector('.sign-up input[type="password"]').value;

 
  if (name === '' || email === '' || password === '') {
    alert('Veuillez remplir tous les champs.');
    return;
  }

 
  fetch('https://ton-serveur.com/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Compte créé avec succès.');
      } else {
        alert('Erreur lors de la création du compte.');
      }
    })
    .catch((error) => console.error('Erreur:', error));
});

document.querySelector('.sign-in form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.querySelector('.sign-in input[type="text"]').value;
  const password = document.querySelector('.sign-in input[type="password"]').value;


  if (email === '' || password === '') {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  fetch('https://ton-serveur.com/api/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Connexion réussie.');
       
      } else {
        alert('Erreur lors de la connexion.');
      }
    })
    .catch((error) => console.error('Erreur:', error));
});
