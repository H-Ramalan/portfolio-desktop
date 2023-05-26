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

// projects-modal-popup
const projects = [
  {
    id: 0,
    backImg: "images/pj-1.svg",
    projectName: "Professional Art Printing Data",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://h-ramalan.github.io/hamza.github.io/",
    sourceLink: "https://github.com/H-Ramalan/portfolio-desktop",
  },
  {
    id: 1,
    backImg: "images/project2.svg",
    projectName: "Data Dashboard Healthcare",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://h-ramalan.github.io/hamza.github.io/",
    sourceLink: "https://github.com/H-Ramalan/portfolio-desktop",
  },
  {
    id: 2,
    backImg: "images/pj3.png",
    projectName: "Website Portfolio",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://h-ramalan.github.io/hamza.github.io/",
    sourceLink: "https://github.com/H-Ramalan/portfolio-desktop",
  },
  {
    id: 3,
    backImg: "images/pj-1.svg",
    projectName: "Professional Art Printing Data",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://h-ramalan.github.io/hamza.github.io/",
    sourceLink: "https://github.com/H-Ramalan/portfolio-desktop",
  },
  {
    id: 4,
    backImg: "images/project2.svg",
    projectName: "Data Dashboard",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://h-ramalan.github.io/hamza.github.io/",
    sourceLink: "https://github.com/H-Ramalan/portfolio-desktop",
  },
  {
    id: 5,
    backImg: "images/pj3.png",
    projectName: "Website Portfolio ",
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ["HTML", "Bootstrap", "Ruby"],
    liveLink: "https://h-ramalan.github.io/hamza.github.io/",
    sourceLink: "https://github.com/H-Ramalan/portfolio-desktop",
  },
];

const projectCards = document.querySelector(".project-cards");

projects.forEach((project, i) => {
  const projectElement = document.createElement("div"); // div for each project = projectElement
  projectElement.classList.add("card", `project${i + 1}`);

  // Create HTML structure for each project
  projectElement.innerHTML = `
    <div class="project-name">
      <p class="name">${project.projectName} </p>
      
    </div>
    <p class="project-note">${project.projectNote}</p>
    <div class = "project-stack">
      <ul class="project-stack-used">
        ${project.projectStackUsed
          .map((tech) => `<li class="tech-used">${tech}</li>`)
          .join("")}          
      </ul>
    </div>
    <button type ="button" class="see-project-appear">See project</button>
  `;

  projectCards.appendChild(projectElement);
});

const projectModal = document.querySelector(".project-popup");
projects.forEach((project) => {
  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupContent.innerHTML = `
        <span class="popup-name">${project.projectName}</span>
        <img
          src="./images/modal-images/close-modal.png"
          alt="X"
          class="close-popup"
        />
        <ul class="popup-stack">
          ${project.projectStackUsed
            .map(
              (tech) => `
          <li class="popup-list">${tech}</li>`
            )
            .join("")}
        </ul>
        <div class="pop">
          <img src="./images/modal-images/popup.png" alt="project-icon" />
          <div class="right">
            <div class="pop-notes">
              <p class="popup-note">
                ${project.projectNote}
              </p>
             
            </div>
            <div class="popup-btns">
              <button class="see">
                <a
                  href=${project.liveLink}"
                  class="see-link"
                  >See live</a
                >
                <img
                  src="./images/modal-images/seeLiveIcon.png"
                  alt="seeLiveIcon"
                  class="img-icon"
                />
              </button>
              <button class="see">
                <a
                  href="${project.sourceLink}"
                  class="see-link"
                  >See source</a
                >
                <img
                  src="./images/icons/icon - git.svg"
                  alt="github-icon"
                  class="img-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
`;

  projectModal.appendChild(popupContent);
});

// Modal Popup

const projectPopup = document.querySelector(".project-popup");
const backdropPopup = document.querySelector(".backdrop-popup");
const btnOpenPopup = document.querySelectorAll(".see-project-appear");
const btnClosePopup = document.querySelector(".close-popup");
const recentWorksPopup = document.querySelector(".see-project-btn");

const openPopup = () => {
  projectPopup.style.display = "block";
  projectPopup.style.overflow = "auto";
  backdropPopup.style.display = "block";
  backdropPopup.style.overflow = "auto";
};

const closePopup = () => {
  projectPopup.style.display = "none";
  backdropPopup.style.display = "none";
};

for (let i = 0; i < btnOpenPopup.length; i += 1) {
  btnOpenPopup[i].addEventListener("click", openPopup);
}

btnClosePopup.addEventListener("click", closePopup);
recentWorksPopup.addEventListener("click", openPopup);
