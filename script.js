"use-strict";

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
