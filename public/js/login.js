const loginFormHandler = async function(event) {
  event.preventDefault();
  console.log('loginFormHandler');

  const emailEl = document.querySelector('#email-login');
  const passwordEl = document.querySelector('#password-login');

  if (emailEl && passwordEl) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: emailEl.value.trim(),
        password: passwordEl.value.trim(),
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('logged in');
      document.location.replace('/');
      /*if() {
      document.location.replace('/band');
      }*/
    } else {
      console.log('Failed to login');
      console.log(response);
      alert('Failed to login');
    }
  }
};

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const bandEL = document.getElementById("band").checked;
  const coordEL = document.getElementById("coordinator").checked;

  if(coordEL){
    role = 'coordinator';
  }

  if(bandEL){
    role = 'band';
  }

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
        role
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/bands/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
