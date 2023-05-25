'use-strict';

// Mobile menu popup
const modalOpen = document.querySelector('.ham');
const modalClose = document.querySelector('.nav-close');
const modal = document.querySelector('.modal-view');
const modalList = document.querySelectorAll('.list-modal');

const openModal = (e) => {
  modal.style.display = 'flex';
  e.preventDefault();
};

const closeModal = () => {
  modal.style.display = 'none';
};

// Form Validation
modalOpen.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

for (let i = 0; i < modalList.length; i += 1) {
  modalList[i].addEventListener('click', closeModal);
}

const form = document.querySelector('.contact-form');
const email = document.querySelector('.email');
const invalidMsg = document.querySelector('.error');
form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    invalidMsg.style.display = 'block';
    e.preventDefault();
  }
});

// Local Storage
const formstorage = document.querySelector('.form');
const fullName = document.querySelector('.fullname');
const emailAddress = document.querySelector('.email');
const textArea = document.querySelector('.textarea');

const formInput = {
  fullName: String,
  email: String,
  message: String,
};

formstorage.addEventListener('input', () => {
  formInput.fullName = fullName.value;
  formInput.email = emailAddress.value;
  formInput.message = textArea.value;

  localStorage.setItem('formInput', JSON.stringify(formInput));
});

window.onload = () => {
  const formData = JSON.parse(localStorage.getItem('formInput'));

  if (formData) {
    fullName.value = formData.fullName;
    emailAddress.value = formData.email;
    textArea.value = formData.message;
  }
};
