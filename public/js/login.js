const loginFormHandler = async function(event) {
  event.preventDefault();

  const emailEl = document.querySelector('#email-login-login');
  const passwordEl = document.querySelector('#password-login');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: emailEl.value,
      password: passwordEl.value,
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
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
