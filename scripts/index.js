const popupEdit = document.querySelector('.popup_edit');
const popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popup_card');
const popupCloseButtonEdit = document.querySelector('.popup__button_edit');
const popupCloseButtonCard = document.querySelector('.popup__button_card');
const buttonSave = document.querySelector('.popup__submit');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const buttonOpenAdd = document.querySelector('.profile__add-button');
const cardContainer = document.querySelector('.grid-elements');
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

let jobInput = document.querySelector('.popup__input_profession');
let nameInput = document.querySelector('.popup__input_name');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');
let placeInput = document.querySelector('.popup__input_place');
let linkInput = document.querySelector('.popup__input_link');
let placeCard = document.querySelector('.element__name');
let linkCard = document.querySelector('.element__image');

function closePopupEdit() {
    popupEdit.classList.remove('popup_opened');
}

function closePopupCard() {
  popupCard.classList.remove('popup_opened');
}

function openPopupEdit() {
    popupEdit.classList.add('popup_opened');
    jobInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
}

function openPopupCard() {
  popupCard.classList.add('popup_opened');
}

function formSubmitHandlerEdit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value; 
    closePopupEdit();
};

function addCard(evt) {
  evt.preventDefault();

  const cardTemplate = document.querySelector('.element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  placeCard.textContent = placeInput.value;
  linkCard.src = linkInput.value;
  
  cardContainer.prepend(cardElement);

  closePopupCard();

  return cardElement;
}

buttonOpenEdit.addEventListener('click', openPopupEdit);

buttonOpenAdd.addEventListener('click', openPopupCard);

popupCloseButtonEdit.addEventListener('click', closePopupEdit);

popupCloseButtonCard.addEventListener('click', closePopupCard);

buttonSave.addEventListener('click', formSubmitHandlerEdit);

buttonSave.addEventListener('click', addCard);