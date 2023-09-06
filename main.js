const freeTrialButton = document.getElementById('freeTrialButton');

freeTrialButton.addEventListener('click', () => {
  renderEmptyForm1();
  renderEmptyForm2();
  renderEmptyForm3();
  renderEmptyForm4();
});

console.log(renderEmptyForm4());

function renderEmptyForm1() {
  const errorMessage = document.querySelector('.errorMessage1');

  const emptyFirstName = document.getElementById('emptyFirstName');

  const firstName = document.getElementById('firstName');

  if (firstName.value === '') {
    errorMessage.style.display = 'block';
    firstName.placeholder = '';
    firstName.classList.add('error');
    emptyFirstName.innerHTML = 'First Name cannot be empty';
    emptyFirstName.classList.add('empty-display');
  } else {
    errorMessage.style.display = 'none';
    firstName.placeholder = 'First Name';
    firstName.classList.remove('error');
    emptyFirstName.innerHTML = '';
    emptyFirstName.classList.remove('empty-display');
  }  
}

function renderEmptyForm2() {
  const errorMessage = document.querySelector('.errorMessage2');

  const emptyLastName = document.getElementById('emptyLastName');

  const lastName = document.getElementById('lastName');

  if (lastName.value === '') {
    errorMessage.style.display = 'block';
    lastName.placeholder = '';
    lastName.classList.add('error');
    emptyLastName.innerHTML = 'Last Name cannot be empty';
    emptyLastName.classList.add('empty-display');
  } else {
    errorMessage.style.display = 'none';
    lastName.placeholder = 'Last Name';
    lastName.classList.remove('error');
    emptyLastName.innerHTML = '';
    emptyLastName.classList.remove('empty-display');
  }  
}  

function renderEmptyForm3() {
  const errorMessage = document.querySelector('.errorMessage3');

  const emptyEmail = document.getElementById('emptyEmail');

  const emailAddress = document.getElementById('emailAddress');

  if (emailAddress.value === '') {
    errorMessage.style.display = 'block';
    emailAddress.placeholder = 'email@example/com';
    emailAddress.classList.add('error2');
    emptyEmail.innerHTML = 'Looks like this is not an email';
    emptyEmail.classList.add('empty-display');
  } else {
    errorMessage.style.display = 'none';
    emailAddress.placeholder = 'Email Address';
    emailAddress.classList.remove('error2');
    emptyEmail.innerHTML = '';
    emptyEmail.classList.remove('empty-display');
  }  
}

function renderEmptyForm4() {
  const errorMessage = document.querySelector('.errorMessage4');

  const emptyPassword = document.getElementById('emptyPassword');

  const password = document.getElementById('password');

  console.log('emptyPassword:', emptyPassword);
  console.log('password:', password);

  if (password.value === '') {
    errorMessage.style.display = 'block';
    password.placeholder = '';
    password.classList.add('error');
    emptyPassword.innerHTML = 'Password cannot be empty';
    emptyPassword.classList.add('empty-display');
  } else {
    errorMessage.style.display = 'none';
    password.placeholder = 'Password';
    password.classList.remove('error');
    emptyPassword.innerHTML = '';
    emptyPassword.classList.remove('empty-display');
  }  
}