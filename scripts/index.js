import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';

const popupEdit = document.querySelector('.popup_edit');
const popupImage = document.querySelector('.popup_image');
const popupCard = document.querySelector('.popup_card');
const popupCloseButton = document.querySelectorAll('.popup__button');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const buttonOpenAdd = document.querySelector('.profile__add-button');
const buttonCardSubmit = popupCard.querySelector('.popup__submit');
const cardContainer = document.querySelector('.grid-elements');
const cardTemplate = document.querySelector('.element-template').content;
const cardElement = cardTemplate.querySelector('.element');
const cardList = document.querySelector('.elements');
const popupPic = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const elementImage = cardList.querySelectorAll('.element__image');
const jobInput = document.querySelector('.popup__input_profession');
const nameInput = document.querySelector('.popup__input_name');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__description');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');
const popupFormEdit = document.querySelector('.popup__form_edit');
const popupFormCard = document.querySelector('.popup__form_card');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const popupList = Array.from(document.querySelectorAll('.popup'));
const forValidate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type-error',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__error_active'
}; 

// функции

const EditValidator = new FormValidator(forValidate, popupFormEdit);

const AddValidator = new FormValidator(forValidate, popupFormCard);

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup (popupOpened);
  };
};

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function openPopupCard() {
  openPopup(popupCard);
  placeInput.value = "";
  linkInput.value = "";
  buttonCardSubmit.setAttribute('disabled', 'disabled');
  buttonCardSubmit.classList.add(forValidate.inactiveButtonClass);
}

function openPopupEdit() {
    openPopup(popupEdit);
    jobInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
};

function createCard (element) {
  const card = new Card(element, cardElement);
  return card.createCard();
};

function addElement(element) {
  const elementCard = createCard(element);
  cardList.prepend(elementCard);
};

function addCard (evt) {
  evt.preventDefault();
  const newInfo = {
    name: placeInput.value,
    link: linkInput.value,
    };
  addElement(newInfo);
  closePopup(popupCard);
};

function formSubmitHandlerEdit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value; 
  closePopup(popupEdit);
};  

// вызов функций

EditValidator.enableValidation();

AddValidator.enableValidation();

initialCards.forEach(addElement);

popupCloseButton.forEach(function(button) {
  button.addEventListener('click', function(evt) {
    const popup = evt.target.closest('.popup');
    closePopup(popup);
  });
});

popupList.forEach( function (popup) {
  popup.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
      closePopup (popup);
    }
  });
});

buttonOpenEdit.addEventListener('click', openPopupEdit);

buttonOpenAdd.addEventListener('click', openPopupCard);

popupFormCard.addEventListener('submit', addCard);

popupFormEdit.addEventListener('submit', formSubmitHandlerEdit);