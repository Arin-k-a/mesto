import { openPopup } from './index.js';

export class Card {
    constructor(item, cardSelector) {
        this._cardSelector = cardSelector;
        this._itemName = item.name;
        this._itemLink = item.link;

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
        this._popupImage.querySelector('.popup__image').src = this._itemLink;
        this._popupImage.querySelector('.popup__image').alt = this._itemName;
        this._popupImage.querySelector('.popup__text').textContent = this._itemName;

        openPopup(this._popupImage);
      }

      _handleDeleteCard() {
        this._element.remove();
      }

      _handleLikeCard() {
        this._element
        .querySelector('.element__button')
        .classList.toggle('element__button_liked');
      }

      _setEventListeners() {
        this._element
        .querySelector('.element__button')
        .addEventListener('click', function() {
            this._handleLikeCard();
        });

        this._element
        .querySelector('.element__delete')
        .addEventListener('click', () => {
            this._handleDeleteCard();
        })

        this.element
        .querySelector('.element__image')
        .addEventListener('click', () => {
            this._handleOpenPopup();
        })
      }

      createCard() {
        this._element = this._getTemplate();
        this._element.querySelector(".element__image").src = this._itemLink;
        this._element.querySelector(".element__image").alt = this._itemName;
        this._element.querySelector(".element__description").innerText = this._itemName;
        this._setEventListeners();
        return this._element;
      }
}