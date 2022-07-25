export class FormValidator {

    constructor(forValidate, formElement) {
        this._forValidate = forValidate;
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(forValidate.inputSelector));
        this._buttonElement = formElement.querySelector(forValidate.submitButtonSelector);
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._forValidate.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._forValidate.errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._forValidate.inputErrorClass);
        errorElement.classList.remove(this._forValidate.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    setDisabledButton() {
        this._buttonElement.classList.add('popup__submit_type-error');
        this._buttonElement.setAttribute('disabled', 'disabled');
    }

    _setEnabledButton() {
        this._buttonElement.classList.remove('popup__submit_type-error');
        this._buttonElement.removeAttribute('disabled', 'disabled');
    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this.setDisabledButton();
        } else {
            this._setEnabledButton()
        }
    }
    _setEventListeners = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    enableValidation() {
        this._setEventListeners();
    };
};