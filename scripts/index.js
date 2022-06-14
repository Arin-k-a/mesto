const popupEdit = document.querySelector('.popup_edit');
const popupImage = document.querySelector('.popup_image');
const popupCard = document.querySelector('.popup_card');
const popupCloseButtonImage = document.querySelector('.popup__button_image');
const popupCloseButtonEdit = document.querySelector('.popup__button_edit');
const popupCloseButtonCard = document.querySelector('.popup__button_card');
const buttonSaveEdit = document.querySelector('.popup__submit_edit');
const buttonSaveCard = document.querySelector('.popup__submit_card');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const buttonOpenAdd = document.querySelector('.profile__add-button');
const cardContainer = document.querySelector('.grid-elements');
const cardTemplate = document.querySelector('.element-template').content;
const cardElement = cardTemplate.querySelector('.element');
const grid = document.querySelector('.elements');
const popupPic = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const elementImage = grid.querySelectorAll('.element__image');
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

// функции

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

function deleteCard(evt) {
  evt.target.parentElement.remove();
}

function openPopupCard() {
  popupCard.classList.add('popup_opened');
}

function standartCard(element) {

  const card = cardElement.cloneNode(true);

  card.querySelector('.element__name').textContent = element.name;
  card.querySelector('.element__image').src = element.link;
  
  card.querySelector('.element__button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__button_liked');
})

  card.querySelector('.element__delete').addEventListener('click', deleteCard);

  
  card.querySelector('.element__image').addEventListener('click', function(evt) {
    openImage(evt);
  })

  return card;
}

function addCard (evt) {
  evt.preventDefault();
  let newInfo = {
    name: placeInput.value,
    link: linkInput.value,
    };
  const newCard = standartCard(newInfo);
  grid.prepend(newCard);
  closePopupCard();
}

function formSubmitHandlerEdit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value; 
  closePopupEdit();
};

function OpenedPopupImage() {
  popupImage.classList.add('popup_opened');
}

function closePopupImage() {
  popupImage.classList.remove('popup_opened');
}

function openImage(evt) {
  const image = evt.target;
  const parentCard = image.closest('.element');
  const description = parentCard.querySelector('.element__name');

  popupPic.src =image.src;
  popupText.textContent = description.textContent;
  
  OpenedPopupImage();
  }
// вызов функций

initialCards.forEach(function(element) {
  const gridElement = standartCard(element);
  grid.prepend(gridElement);
});

buttonSaveCard.addEventListener('click', addCard);

buttonOpenEdit.addEventListener('click', openPopupEdit);

buttonOpenAdd.addEventListener('click', openPopupCard);

popupCloseButtonEdit.addEventListener('click', closePopupEdit);

popupCloseButtonCard.addEventListener('click', closePopupCard);

buttonSaveEdit.addEventListener('click', formSubmitHandlerEdit);

popupCloseButtonImage.addEventListener('click', closePopupImage);