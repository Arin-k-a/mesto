# Mesto
-----
[Ccылка на проект](https://arin-k-a.github.io/mesto/index.html)
-----
Данный проект - сайт, на который пользователь может рассказать о местах, в которых побывал, а также поделиться фотографиями.

Проект был сделан в качестве практики в процессе обучения на платформе Яндекс.Практикум.

Написано на языках: CSS, HTML, JS.

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

function openImage(evt) {
  const image = evt.target;
  const parentCard = image.closest('.element');
  const description = parentCard.querySelector('.element__name');

  popupPic.src =image.src;
  popupPic.alt = description.textContent;
  popupText.textContent = description.textContent;
  
  openPopup(popupImage);
  }