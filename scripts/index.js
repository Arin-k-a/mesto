const popupEdit = document.querySelector('.popup_edit')
const popupPlace = document.querySelector('.popup_place');
const popupCloseButton = document.querySelector('.popup__button');
const buttonSaveEdit = document.querySelector('.popup__submit_edit');
const buttonSavePlace = document.querySelector('.popup__submit_place');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const buttonOpenPlace = document.querySelector('.profile__add-button');
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

function closePopupEdit() {
    popupEdit.classList.remove('popup_opened');
}

function closePopupPlace() {
    popupPlace.classList.remove('popup_opened');
}

function openPopupEdit() {
    popupEdit.classList.add('popup_opened');
    jobInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value; 
    closePopupEdit();
};

function openPopupPlace() {
    popupPlace.classList.add('popup_opened');
    jobInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
}

function formSubmitHandlerPlace (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value; 
    closePopupPlace();
};

buttonOpenEdit.addEventListener('click', openPopupEdit);

popupCloseButton.addEventListener('click', closePopupEdit);

popupCloseButton.addEventListener('click', closePopupPlace);

buttonSaveEdit.addEventListener('click', formSubmitHandler);

buttonOpenPlace.addEventListener('click', openPopupPlace);

buttonSavePlace.addEventListener('click', formSubmitHandlerPlace);