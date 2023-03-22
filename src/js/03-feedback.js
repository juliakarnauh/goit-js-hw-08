import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const saveForm = localStorage.getItem('feedback-form-state');
const savedFormData = JSON.parse(saveForm);

if (saveForm) {
  form.elements.email.value = savedFormData.email || '';
  form.elements.message.value = savedFormData.message || '';
}

form.addEventListener('input', throttle(infoInput, 500));
function infoInput() {
  const formInfo = {
    email: `${form['email'].value}`,
    message: `${form['message'].value}`,
  };
  const formData = JSON.stringify(formInfo);

  localStorage.setItem('feedback-form-state', formData);
}

form.addEventListener('submit', infoSubmit);
function infoSubmit(e) {
  e.preventDefault();
  const formInfo = {
    email: `${form['email'].value}`,
    message: `${form['message'].value}`,
  };
  console.log(formInfo);
  localStorage.removeItem('feedback-form-state');
  form['email'].value = '';
  form['message'].value = '';
}
