const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__button');
const buttonSave = document.querySelector('.popup__submit');
const buttonOpen = document.querySelector('.profile__edit-button');
let jobInput = document.querySelector('.popup__input_profession');
let nameInput = document.querySelector('.popup__input_name');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');

function closePopup() {
    popup.classList.remove('popup_opened');
}

function openPopup() {
    popup.classList.add('popup_opened');
    jobInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value; 
    closePopup();
};

buttonOpen.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

buttonSave.addEventListener('click', formSubmitHandler);