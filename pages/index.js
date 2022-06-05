const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

function closePopupOnQ(e) {
    if (e.code === 'KeyQ'){
    closePopup();
    }
}

function openPopup() {
    popup.classList.remove('popup_hidden');
    document.addEventListener('keypress', closePopupOnQ);
}

function closePopup() {
    popup.classList.add('popup_hidden');
    document.removeEventListener('keypress', closePopupOnQ);
}

popupOpenButton.addEventListener('click', function () {
    openPopup();

})

popupCloseButton.addEventListener('click', function () {
    closePopup();

});

popup.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
    closePopup();
    }
    });


    
    let formElement = document.querySelector('.popup__form');
    let nameInput = document.querySelector('.profile__title'); 
    let jobInput =  document.querySelector('.profile__subtitle');  

    function formSubmitHandler (evt) {
        evt.preventDefault();

        let newName = nameInput.value;
        let newJob = jobInput.value;

        // let nameForm = formElement.querySelector('.popup__form_name');
        // let jobForm = formElement.querySelector('.popup__form_job');

        formElement.textContent = `newName`;
        formElement.textContent = `newJob`;

    }

    formElement.addEventListener('submit', formSubmitHandler); 