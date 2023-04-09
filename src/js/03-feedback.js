import throttle from 'lodash.throttle';

const FORM_KEY = "feedback-form-state";
const formData = {};
const formRef = document.querySelector(".feedback-form");
const inputRef = document.querySelector(".feedback-form input");
const textareaRef = document.querySelector(".feedback-form textarea");


formRef.addEventListener("input", throttle(setLocalStorageData, 500));
formRef.addEventListener("submit", onSubmit);
populateForm();

function setLocalStorageData(event) {
	formData[event.target.name] = event.target.value
	localStorage.setItem(FORM_KEY, JSON.stringify(formData))
};

function populateForm() {
	const savedData = localStorage.getItem(FORM_KEY);
	const parsedSavedData = JSON.parse(savedData);

	if (parsedSavedData) {
		const { email ='', message ='' } = parsedSavedData;

		inputRef.value = email;
		textareaRef.value = message;

		formData.email = email ;
  		formData.message = message ;
	}
}

function onSubmit(event) {
		event.preventDefault();

	if (formRef.value === '' || inputRef.value === '') {
		alert('Звповніть всі поля!')
		return;
	}


	console.log(formData);

	event.currentTarget.reset();
	localStorage.removeItem(FORM_KEY);
}

