const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
};

const showInputError = function (formElement, inputElement, errorMessage, forValidate) {
    const errorElement = formElement.querySelector('.popup__error');
    inputElement.classList.add(forValidate.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(forValidate.errorClass);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector('.popup__error');
    inputElement.classList.remove(forValidate.inputErrorClass);
    errorElement.classList.remove(forValidate.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, forValidate) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, forValidate);
    } else {
        hideInputError(formElement, inputElement, forValidate);
    }
};

toggleButtonState = (inputList, buttonElement, forValidate) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(forValidate.inactiveButtonClass);
        buttonElement.setAttribute('disabled', 'disabled');
    }
    else {
        buttonElement.classList.remove(forValidate.inactiveButtonClass);
        buttonElement.removeAttribute('disabled', 'disabled');
    }
};

const setEventListeners = (formElement, forValidate) => {
    const inputList = Array.from(formElement.querySelectorAll(forValidate.inputSelector));
    const buttonElement = formElement.querySelector(forValidate.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, forValidate);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            toggleButtonState(inputList, buttonElement, forValidate);
            checkInputValidity(formElement, inputElement, forValidate);
        });
    });
};

const enableValidation = (forValidate) => {
    const formList = Array.from(document.querySelectorAll(forValidate.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, forValidate);
    });
};

enableValidation(forValidate);