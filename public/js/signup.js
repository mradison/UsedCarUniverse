// const form = document.querySelector('form');
// const email = document.querySelector('#email-signup');
// const password = document.querySelector('#password-signup');


// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const data = {
//         email: email.value,
//         password: password.value
//     }
//     fetch('/api/users/signup', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(()=>{
//         // location.replace('/')
//         console.log('good')
//     }).catch(err => {
//         console.error(err)
//     })
// })

const signupFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(email, password);
    
    if (email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('form')
    .addEventListener('submit', signupFormHandler);
  