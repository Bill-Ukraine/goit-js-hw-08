
import throttle from 'lodash.throttle';


 const formEl = document.querySelector('.feedback-form');
 const emailEl = document.querySelector('.feedback-form input');
 const messageEl = document.querySelector('.feedback-form textarea');


const INPUT_KEY = 'feedback-form-state';
const localString = localStorage.getItem(INPUT_KEY);
const localObject = JSON.parse(localString);

let formData = {
  email: '',
  message: '',
};

if (localObject) {
  emailEl.value = localObject.email;
  messageEl.value = localObject.message;
}

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  formData = {
    email: emailEl.value,
    message: messageEl.value,
  };

  localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
  e.preventDefault();

  formData = {
    email: emailEl.value,
    message: messageEl.value,
  };

  if (emailEl.value === '' || messageEl.value === '') {
    return alert('Всі поля потрібно заповнити!');
  }

  console.log(formData);
  localStorage.removeItem(INPUT_KEY);
  formEl.reset();
};