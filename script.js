"use-strict";
// Mobile menu popup
const modalOpen = document.querySelector(".ham");
const modalClose = document.querySelector(".nav-close");
const modal = document.querySelector(".modal-view");
const modalList = document.querySelectorAll(".list-modal");

const openModal = (e) => {
  modal.style.display = "flex";
  e.preventDefault();
};

const closeModal = () => {
  modal.style.display = "none";
};

// Form Validation
modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

for (let i = 0; i < modalList.length; i += 1) {
  modalList[i].addEventListener("click", closeModal);
}

const form = document.querySelector(".contact-form");
const email = document.querySelector(".email");
const invalidMsg = document.querySelector(".error");
form.addEventListener("submit", (e) => {
  if (email.value.toLowerCase() !== email.value) {
    invalidMsg.style.display = "block";
    e.preventDefault();
  }
});

// Local Storage
const formstorage = document.querySelector(".form");
const fullName = document.querySelector(".fullname").value;
const emailAddress = document.querySelector(".email").value;
const textArea = document.querySelector(".textarea").value;
let formInputObj = {};

const formDataSave = (form) => {
  const formInputs = new formInputs(form);
  for (let [key, value] of formInputs.entries()) {
    formInputObj[key] = value;
  }
  localStorage.setItem("formInputs", JSON.stringify(formInputObj));
};

// Assuming the form has an id of "myForm"
// const form = document.getElementById("myForm");

// Function to collect form data and save it in local storage
// function saveFormData(form) {
//   const formData = new FormData(form);
//   const formDataObject = {};

//   for (let [key, value] of formData.entries()) {
//     formDataObject[key] = value;
//   }

// Save the form data object in local storage
//   localStorage.setItem("formData", JSON.stringify(formDataObject));
// }

// Usage example
// saveFormData(form);

// window.addEventListener('DOMContentLoaded', (event) => {
//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');

// Check if local storage has data
// if (localStorage.getItem('formData')) {
//   const formData = JSON.parse(localStorage.getItem('formData'));

// Pre-fill input fields with the data
// nameInput.value = formData.name;
// emailInput.value = formData.email;
// }

// Save form data to local storage when input fields change
//   nameInput.addEventListener('input', saveFormData);
//   emailInput.addEventListener('input', saveFormData);
// });

// function saveFormData() {
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;

//   const formData = {
//     name: name,
//     email: email
//   };

//   localStorage.setItem('formData', JSON.stringify(formData));
// }
