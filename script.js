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
