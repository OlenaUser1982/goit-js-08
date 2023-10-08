import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const emailtextarea = document.querySelector('textarea[name="message"]');
let total = {};
const KEY = 'feedback-form-state';
newForm();
function local(evt) {
  total[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY, JSON.stringify(total));
}
feedbackForm.addEventListener('input', throttle(local, 500));

function submitForm(evt) {
  evt.preventDefault();
  if (emailInput.value === '' || emailtextarea.value === '') {
    alert('Заповніть всі поля');
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(KEY);
  console.log(total);
  total = {};
}
feedbackForm.addEventListener('submit', submitForm);

function newForm(item) {
  let save = localStorage.getItem(KEY);
  if (save) {
    total = JSON.parse(save) || {};
    emailInput.value = total.email || '';
    emailtextarea.value = total.message || '';
  }
}
