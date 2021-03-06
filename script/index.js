const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');

const formPopup = document.querySelector('.popup__form');
const nameInput = formPopup.querySelector('.popup__item_type_name'); 
const jobInput =  formPopup.querySelector('.popup__item_type_job'); 

const profileName = document.querySelector('.profile__title'); 
const profileJob =  document.querySelector('.profile__subtitle'); 


popupOpenButton.addEventListener('click', function () {
    popup.classList.remove('popup_hidden');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }); 


popupCloseButton.addEventListener('click', function () {
    popup.classList.add('popup_hidden');
    
  }); 


formPopup.addEventListener('submit', function (e) {
    e.preventDefault()
    popup.classList.add('popup_hidden');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value ;
    
  }); 


// ----------Функции------------


// function openPopup() {
//     popup.classList.remove('popup_hidden');
//     document.addEventListener('keypress');
// }

// function closePopup() {
//     popup.classList.add('popup_hidden');
//     document.removeEventListener('keypress');
// }


// function formSubmitHandler (evt) {
//     evt.preventDefault();

       
//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value ;

// }


// ----------Обработчики------------


// popupOpenButton.addEventListener('click', function () {
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileJob.textContent;

//     openPopup();

  
// })

// popupCloseButton.addEventListener('click', function () {
//     closePopup();


// });

// popup.addEventListener('click', function (e) {
//     if (e.target === e.currentTarget) {
//     closePopup();
//     }
//     });

 
//     formElement.addEventListener('submit', formSubmitHandler); 