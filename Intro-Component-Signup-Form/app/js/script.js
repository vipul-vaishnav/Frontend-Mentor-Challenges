'use-strict';

const formControl = document.querySelector('.form-control');
const fname = document.querySelector('.fname-input');
const lname = document.querySelector('.lname-input');
const email = document.querySelector('.email-input');
const pass = document.querySelector('.pass-input');

formControl.addEventListener('submit', (e) => {
  e.preventDefault();
  const fnameValue = fname.value;
  const lnameValue = lname.value;
  const emailValue = email.value;
  const passValue = pass.value;

  if (fnameValue === '') {
    fname.style.borderColor = '#ff7a7a';
    document.querySelector('.fname-error-icon').style.visibility = 'visible';
    document.querySelector('.fname-error').style.visibility = 'visible';
  } else {
    fname.style.borderColor = '#3e3c4933';
    document.querySelector('.fname-error-icon').style.visibility = 'hidden';
    document.querySelector('.fname-error').style.visibility = 'hidden';
  }

  if (lnameValue === '') {
    lname.style.borderColor = '#ff7a7a';
    document.querySelector('.lname-error-icon').style.visibility = 'visible';
    document.querySelector('.lname-error').style.visibility = 'visible';
  } else {
    lname.style.borderColor = '#3e3c4933';
    document.querySelector('.lname-error-icon').style.visibility = 'hidden';
    document.querySelector('.lname-error').style.visibility = 'hidden';
  }

  if (emailValue === '') {
    email.style.borderColor = '#ff7a7a';
    document.querySelector('.email-error-icon').style.visibility = 'visible';
    document.querySelector('.email-error').style.visibility = 'visible';
  } else if (emailValue.includes('/') || !emailValue.includes('@')) {
    email.style.borderColor = '#ff7a7a';
    document.querySelector('.email-error-icon').style.visibility = 'visible';
    document.querySelector('.email-error').style.visibility = 'visible';
  } else {
    email.style.borderColor = '#3e3c4933';
    document.querySelector('.email-error-icon').style.visibility = 'hidden';
    document.querySelector('.email-error').style.visibility = 'hidden';
  }

  if (passValue === '') {
    pass.style.borderColor = '#ff7a7a';
    document.querySelector('.pass-error-icon').style.visibility = 'visible';
    document.querySelector('.pass-error').style.visibility = 'visible';
  } else {
    pass.style.borderColor = '#3e3c4933';
    document.querySelector('.pass-error-icon').style.visibility = 'hidden';
    document.querySelector('.pass-error').style.visibility = 'hidden';
  }

  const details = { fname: fnameValue, lname: lnameValue, email: emailValue, pass: passValue };
  console.log(details);
});
