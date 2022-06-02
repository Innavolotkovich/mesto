const button = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

function closePopup() {

}

button.addEventListener('click', function () {
    popup.classList.remove('popup_hidden')

})

popupCloseButton.addEventListener('click', function () {
    popup.classList.add('popup_hidden');

});

popup.addEventListener('click', function (e)  {
    if (e.target === e.currentTarget) {
    popup.classList.add('popup_hidden');
    }
    });

    document.addEventListener('keypress', function(e) {
        if (e.)
    }

