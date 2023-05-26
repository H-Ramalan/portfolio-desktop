'use-strict';

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
const works = document.querySelector('.works');
const recentWork = {
  recentWorkimg: 'images/Img Placeholder.svg',
  recentWorkName: 'Multi Post Stories',
  recentWorkNote:
    "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  recentWorkstack: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  recentLiveLink: 'https://h-ramalan.github.io/hamza.github.io/',
  recentsourceLink: 'https://github.com/H-Ramalan/portfolio-desktop',
};

const recentProject = document.createElement('div');
recentProject.classList.add('recent-work-card');
recentProject.innerHTML = `
        <img
          src="${recentWork.recentWorkimg}"
          class="project-image"
          alt="${recentWork.recentWorkName}"
        />
        <div class="multi-post-stories">
          <h2>${recentWork.recentWorkName}</h2>
          <p class="recent-note">
            ${recentWork.recentWorkNote}
          </p>
          <div>
            <ul class="recent-tech">
              ${recentWork.recentWorkstack
    .map(
      (tech) => `
                <li class="recent-tech-used">${tech}</li>`,
    )
    .join('')}
            </ul>
            <button class="see-project-btn">See Project</button>
          </div>
        </div>
`;

works.appendChild(recentProject);
// projects-modal-popup
const projects = [
  {
    id: 0,
    backImg: 'images/pj3.png',
    projectName: 'Professional Art Printing Data',
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://h-ramalan.github.io/hamza.github.io/',
    sourceLink: 'https://github.com/H-Ramalan/portfolio-desktop',
  },
  {
    id: 1,
    backImg: 'images/pj3.png',
    projectName: 'Data Dashboard Healthcare',
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://h-ramalan.github.io/hamza.github.io/',
    sourceLink: 'https://github.com/H-Ramalan/portfolio-desktop',
  },
  {
    id: 2,
    backImg: 'images/pj3.png',
    projectName: 'Website Portfolio',
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://h-ramalan.github.io/hamza.github.io/',
    sourceLink: 'https://github.com/H-Ramalan/portfolio-desktop',
  },
  {
    id: 3,
    backImg: 'images/pj3.png',
    projectName: 'Professional Art Printing Data',
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://h-ramalan.github.io/hamza.github.io/',
    sourceLink: 'https://github.com/H-Ramalan/portfolio-desktop',
  },
  {
    id: 4,
    backImg: 'images/pj3.png',
    projectName: 'Data Dashboard',
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://h-ramalan.github.io/hamza.github.io/',
    sourceLink: 'https://github.com/H-Ramalan/portfolio-desktop',
  },
  {
    id: 5,
    backImg: 'images/pj3.png',
    projectName: 'Website Portfolio ',
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    projectStackUsed: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://h-ramalan.github.io/hamza.github.io/',
    sourceLink: 'https://github.com/H-Ramalan/portfolio-desktop',
  },
  {
    id: 6,

    backImg: 'images/Img Placeholder.svg',
    projectName: 'Multi Post Stories',
    projectNote:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectStackUsed: ['CSS', 'HTML', 'Bootstrap'],
    liveLink: 'https://h-ramalan.github.io/hamza.github.io/',
    sourceLink: 'https://github.com/H-Ramalan/portfolio-desktop',
  },
];

const projectCards = document.querySelector('.project-cards');

projects.forEach((project, i) => {
  const projectElement = document.createElement('div'); // div for each project = projectElement
  projectElement.classList.add('card', `project${i + 1}`);

  // Create HTML structure for each project
  projectElement.innerHTML = `
    <div class="project-name">
      <p class="name">${project.projectName} ${project.id}</p>
      
      <input class="projectIndex" value=${project.id}>
    </div>
    <p class="project-note">${project.projectNote}</p>
    <div class = "project-stack">
      <ul class="project-stack-used">
        ${project.projectStackUsed
    .map((tech) => `<li class="tech-used">${tech}</li>`)
    .join('')}          
      </ul>
    </div>
    <button type ="button" class="see-project-appear">See project</button>
  `;

  projectCards.appendChild(projectElement);
});

// Modal Popup

const projectPopup = document.querySelector('.project-popup');
const backdropPopup = document.querySelector('.backdrop-popup');
const btnOpenPopup = document.querySelectorAll('.see-project-appear');
const recentWorksPopup = document.querySelector('.see-project-btn');

const openPopup = (projectIndex) => {
  projectPopup.style.display = 'block';
  projectPopup.style.overflow = 'auto';
  backdropPopup.style.display = 'block';
  backdropPopup.style.overflow = 'auto';

  const projectModal = document.querySelector('.project-popup');
  const project = projects.find((x) => x.id === projectIndex);
  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');
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
          <li class="popup-list">${tech}</li>`,
    )
    .join('')}
        </ul>
        <div class="pop">
        
          <img src="images/modal-images/popup.png" alt="project-icon" />
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
      </div>`;

  projectModal.innerHTML = '';
  projectModal.appendChild(popupContent);

  const btnClosePopup = document.querySelector('.close-popup');

  const closePopup = () => {
    projectPopup.style.display = 'none';
    backdropPopup.style.display = 'none';
  };

  btnClosePopup.addEventListener('click', closePopup);
};

for (let i = 0; i < btnOpenPopup.length; i += 1) {
  btnOpenPopup[i].addEventListener('click', () => openPopup(i));
}

recentWorksPopup.addEventListener('click', () => openPopup(projects.length - 1));
