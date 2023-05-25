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
const fullName = document.querySelector(".fullname");
const emailAddress = document.querySelector(".email");
const textArea = document.querySelector(".textarea");

const formInput = {
  fullName: String,
  email: String,
  message: String,
};

formstorage.addEventListener("input", () => {
  formInput.fullName = fullName.value;
  formInput.email = emailAddress.value;
  formInput.message = textArea.value;

  localStorage.setItem("formInput", json.stringify(formInput));
});

window.onload = () => {
  const formData = JSON.parse(localStorage.getItem("formInput"));

  if (formData) {
    fullName.value = formData.fullName;
    emailAddress.value = formData.email;
    textArea.value = formData.message;
  }
};

// const userName = document.getElementById("user-name");
// const userMessage = document.getElementById("user-message");
// const contactDetails = {
//   fullName: String,
//   email: String,
//   message: String,
// };

// form.addEventListener("input", () => {
//   contactDetails.fullName = userName.value;
//   contactDetails.email = userEmail.value;
//   contactDetails.message = userMessage.value;

//   localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
// });

// window.onload = () => {
//   const contactData = JSON.parse(localStorage.getItem("contactDetails"));

//   if (contactData) {
//     userName.value = contactData.fullName;
//     userEmail.value = contactData.email;
//     userMessage.value = contactData.message;
//   }
// };

// Check for pre-filled data to load on form fields.
const prefilledData = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  if (formData) {
    document.getElementById("txtFullname").value = formData.name || "";
    document.getElementById("txtEmail").value = formData.email || "";
    document.getElementById("txt_message").value = formData.message || "";
  }
};

window.onload = prefilledData();

// Create a single JavaScript object with all the data from the entire form
const formInputs = document.querySelectorAll(
  "#form_contact input, #form_contact textarea"
);
formInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const formData = {
      name: document.getElementById("txtFullname").value,
      email: document.getElementById("txtEmail").value,
      message: document.getElementById("txt_message").value,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  });
});
