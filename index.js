const buttonOpen = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__button');
const buttonLike = document.querySelectorAll('.element__button');
const buttonSave = document.querySelector('.popup__submit');
let jobInput = document.querySelector('.popup__input_profession');
let nameInput = document.querySelector('.popup__input_name');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__form');

jobInput.textContent = jobProfile;
nameInput.textContent = nameProfile;

buttonOpen.addEventListener('click', function () {
    popup.classList.remove('popup_hidden');
    jobInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
});

function closePopup() {
    popup.classList.add('popup_hidden');
}

popupCloseButton.addEventListener('click', function () {
    popup.classList.add('popup_hidden');
});

popup.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
    popup.classList.add('popup_hidden');
    }
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value; 
    closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);
buttonSave.addEventListener('click', formSubmitHandler);

buttonLike.addEventListener('click', function (buttonLike) {
    buttonLike.classList.toggle('element__button_liked')
});