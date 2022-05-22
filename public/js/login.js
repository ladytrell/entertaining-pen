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

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
