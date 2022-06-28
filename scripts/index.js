const popupEdit = document.querySelector('.popup_edit');
const popupImage = document.querySelector('.popup_image');
const popupCard = document.querySelector('.popup_card');
const popupCloseButton = document.querySelectorAll('.popup__button');
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const buttonOpenAdd = document.querySelector('.profile__add-button');
const cardContainer = document.querySelector('.grid-elements');
const cardTemplate = document.querySelector('.element-template').content;
const cardElement = cardTemplate.querySelector('.element');
const grid = document.querySelector('.elements');
const popupPic = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const elementImage = grid.querySelectorAll('.element__image');
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

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openPopupCard() {
  openPopup(popupCard);
  placeInput.value = "";
  linkInput.value = "";
}

function openPopupEdit() {
    openPopup(popupEdit);
    jobInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
}

function deleteCard(evt) {
  evt.target.parentElement.remove();
}

function createCard(element) {

  const card = cardElement.cloneNode(true);

  card.querySelector('.element__name').textContent = element.name;
  card.querySelector('.element__image').src = element.link;
  card.querySelector('.element__image').alt = element.name;
  
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
  const newCard = createCard(newInfo);
  grid.prepend(newCard);
  closePopup(popupCard);
}

function formSubmitHandlerEdit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value; 
  closePopup(popupEdit);
};

function openImage(evt) {
  const image = evt.target;
  const parentCard = image.closest('.element');
  const description = parentCard.querySelector('.element__name');

  popupPic.src =image.src;
  popupPic.alt = description.textContent;
  popupText.textContent = description.textContent;
  
  openPopup(popupImage);
  }

  function closePopupEsc (evt) {
    if (evt.key === 'Escape') {
      popupList.forEach( function (popup) {
        closePopup (popup);
      })
    };
  };

// вызов функций

popupCloseButton.forEach(function(button) {
  button.addEventListener('click', function(evt) {
    const popup = evt.target.closest('.popup');
    closePopup(popup);
  })
})

popupList.forEach( function (popup) {
  popup.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
      closePopup (popup);
    }
  });
});

initialCards.forEach(function(element) {
  const gridElement = createCard(element);
  grid.prepend(gridElement);
});

document.addEventListener('keydown', closePopupEsc);

buttonOpenEdit.addEventListener('click', openPopupEdit);

buttonOpenAdd.addEventListener('click', openPopupCard);

popupFormCard.addEventListener('submit', addCard);

popupFormEdit.addEventListener('submit', formSubmitHandlerEdit);