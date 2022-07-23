import { openPopup } from './index.js';

export class Card {
    constructor(item, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = item.name;
        this._link = item.link;
        this._isLiked = false;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._cardSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
    
        return cardElement;
      }
    
      _handleOpenPopup() {
        this._popupImage = document.querySelector('.popup_image');
        this._popupImage.querySelector('.popup__image').src = this._link;
        this._popupImage.querySelector('.popup__image').alt = this._name;
        this._popupImage.querySelector('.popup__text').textContent = this._name;

        openPopup(this._popupImage);
      }

      _handleDeleteCard() {
        this._element.remove();
        this._element = null;
      }

      _handleLikeCard() {
        this._likeButton.classList.toggle('element__button_liked');
        this._isLiked = !this._isLiked;
      }

      _setEventListeners() {
        this._likeButton = this._element.querySelector('.element__button');
        this._deleteButton = this._element.querySelector('.element__delete');

        this._likeButton.addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard();
        })

        this.element
        .querySelector('.element__image')
        .addEventListener('click', () => {
            this._handleOpenPopup(this._link, this._title);
        })
      }

      createCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__description').textContent = this._name;
        this._setEventListeners();
        return this._element;
      }
}