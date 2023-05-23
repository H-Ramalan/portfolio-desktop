"use-strict";

const modalOpen = document.querySelector(".ham");
const modalClose = document.querySelector(".nav-close");
const modal = document.querySelector(".modal-view");

const openModal = () => {
  modal.style.display = "flex";
  event.preventDefault();
};
const closeModal = () => {
  modal.style.display = "none";
  event.preventDefault();
};
modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

// const closeModal = function () {
//   modal.classList.add("hidden");
// };

// const openModal = function () {
//   modal.classList.remove("hidden");
// };

// modalOpen.addEventListener("click", openModal);
// console.log("clicked");
// modalClose.addEventListener("click", closeModal);
