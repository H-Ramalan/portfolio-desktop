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

// Modal Popup

const projectPopup = document.querySelector(".project-popup");
const btnOpenPopup = document.querySelectorAll(".see-project-appear");
const btnClosePopup = document.querySelector(".close-popup");

const openPopup = () => {
  projectPopup.style.display = "block";
};

const closePopup = () => {
  projectPopup.style.display = "none";
};

for (i = 0; i < btnOpenPopup.length; i += 1) {
  btnOpenPopup[i].addEventListener("click", openPopup);
}
btnClosePopup.addEventListener("click", closePopup);

const projects = [
  {
    id: 0,
    backImg: "images/pj-1.svg",
    projectName: "Professional Art Printing Data",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
  },
  {
    id: 1,
    backImg: "images/project2.svg",
    projectName: "Data Dashboard Healthcare",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
  },
  {
    id: 2,
    backImg: "images/pj3.png",
    projectName: "Website Portfolio",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
  },
  {
    id: 3,
    backImg: "images/pj-1.svg",
    projectName: "Professional Art Printing Data",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
  },
  {
    id: 4,
    backImg: "images/project2.svg",
    projectName: "Data Dashboard",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
  },
  {
    id: 5,
    backImg: "images/pj3.png",
    projectName: "Website Portfolio ",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
  },
];
