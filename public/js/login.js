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
      //document.location.replace('/');     
      console.log('response.body', response.body)
      if(response.body.role === 'band') {
        document.location.replace('/bands/');
      } else {
        document.location.replace('/coordinators');
      }
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
    const jsonResponse = await response.json(); 
    if (response.ok) {  
      //console.log(jsonResponse);
      if(jsonResponse.role === 'band') {
        document.location.replace('/bands/create');
      } else {
        document.location.replace('/coordinators/create');
      }
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
