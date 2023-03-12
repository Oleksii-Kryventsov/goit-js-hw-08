import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleInputValue, 500));

populateSubmit();

function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    formData = {};
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function handleInputValue(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateSubmit() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
       if (savedMessage) {
           formData = JSON.parse(savedMessage);
           const entrieForm = Object.entries(formData)
           entrieForm.forEach(function (element) {
               const [key, value] = element;
               form[key].value = value;
           });
    } 
};