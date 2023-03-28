const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault()
    const formData = new FormData(loginForm); 
  
  if (!formData.get('email') || !formData.get('password')) {
    alert('Please fill in all fields.'); 
  } else {
    const formValues = Object.fromEntries(formData.entries()); 
      
    console.log(formValues); 
    
    loginForm.reset();
  }
};

