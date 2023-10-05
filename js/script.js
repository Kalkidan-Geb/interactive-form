// "Name" field focus
const nameInput = document.getElementById('name');
nameInput.focus();

// "Job Role" section
const jobRoleMenu = document.getElementById('title');
const otherjobRoleInput = document.getElementById('other-job-role');
otherjobRoleInput.style.display = 'none';

jobRoleMenu.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
    otherjobRoleInput.style.display = 'block';
  } else {
    otherjobRoleInput.style.display = 'none';
  }
});

// "T-Shirt Info" section
const designSelect = document.getElementById('design');
const colorSelect = document.getElementById('color');
const colorOptions = colorSelect.children;
colorSelect.disabled = true;

designSelect.addEventListener('change', (event) => {
  colorSelect.disabled = false;
  for (let i = 0; i < colorOptions.length; i++) {
    const option = colorOptions[i];
    const selectedDesign = event.target.value;
    const optionTheme = option.getAttribute('data-theme');
    if (selectedDesign === optionTheme) {
      option.hidden = false;
      option.selected = true;
    } else {
      option.hidden = true;
      option.selected = false;
    }
  }
});

// "Register for Activities" section
const activities = document.getElementById('activities');
const totalCostElement = document.getElementById('activities-cost');
let totalCost = 0;

activities.addEventListener('change', (e) => {
  const activityCost = +e.target.getAttribute('data-cost');
  if (e.target.checked) {
    totalCost += activityCost;
  } else {
    totalCost -= activityCost;
  }
  totalCostElement.innerHTML = 'Total: $' + totalCost;
});

// "Payment Info" section
const paymentSelect = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';
paymentSelect.children[1].setAttribute('selected', 'true');
creditCardDiv.style.display = 'block';

paymentSelect.addEventListener('change', (event) => {
  const selectedPayment = event.target.value;
  if (selectedPayment === 'credit-card') {
    creditCardDiv.style.display = 'block';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (selectedPayment === 'paypal') {
    creditCardDiv.style.display = 'none';
    paypalDiv.style.display = 'block';
    bitcoinDiv.style.display = 'none';
  } else if (selectedPayment === 'bitcoin') {
    creditCardDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'block';
  }
});

// Function to display validation error for a field
function displayValidationError(element, message) {
  const parent = element.parentElement;

  if (message) {
    parent.classList.add('not-valid');
    parent.classList.remove('valid');
    element.nextElementSibling.style.display = 'block';
    parent.lastElementChild.innerHTML = message;
  } else {
    parent.classList.remove('not-valid');
    parent.classList.add('valid');
    element.nextElementSibling.style.display = 'none';
  }
}



// Event listener for form submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const nameValue = nameInput.value;
  const isNameValid = /^[a-zA-Z\s]+$/.test(nameValue);

  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;
  const isEmailValid = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(emailValue);

  const isActivitiesValid = Array.from(activities.querySelectorAll('input[type="checkbox"]')).some(input => input.checked);

  const selectedPayment = paymentSelect.value;

  if (selectedPayment === 'credit-card') {
    const cardNumberInput = document.getElementById('cc-num');
    const zipCodeInput = document.getElementById('zip');
    const cvvInput = document.getElementById('cvv');

    const cardNumberValue = cardNumberInput.value;
    const zipCodeValue = zipCodeInput.value;
    const cvvValue = cvvInput.value;

    const isCardNumberValid = /^\d{13,16}$/.test(cardNumberValue);
    const isZipCodeValid = /^\d{5}$/.test(zipCodeValue);
    const isCvvValid = /^\d{3}$/.test(cvvValue);

    if (!isCardNumberValid) {
      e.preventDefault();
      displayValidationError(cardNumberInput, 'Please enter a valid card number.');
    } else {
      displayValidationError(cardNumberInput);
    }

    if (!isZipCodeValid) {
      e.preventDefault();
      displayValidationError(zipCodeInput, 'Please enter a valid ZIP code.');
    } else {
      displayValidationError(zipCodeInput);
    } 

    if (!isCvvValid) {
      e.preventDefault();
      displayValidationError(cvvInput, 'Please enter a valid CVV.');
    } else {
      displayValidationError(cvvInput);
    } 
  }

  if (!isNameValid) {
    e.preventDefault();
    displayValidationError(nameInput, 'Please enter a valid name.');
  } else {
    displayValidationError(nameInput)
  }

  if (!isEmailValid) {
    e.preventDefault();
    displayValidationError(emailInput, 'Please enter a valid email address.');
  } else {
    displayValidationError(emailInput)
  } 

  if (!isActivitiesValid) {
    e.preventDefault();
    activities.classList.add('not-valid');
    activities.classList.remove('valid');
    document.getElementById('activities-hint').style.display = 'block';
  } else {
    activities.classList.remove('not-valid');
    activities.classList.add('valid');
    document.getElementById('activities-hint').style.display = 'none';
  }
});

// Function for focus and blur for activities checkboxes
const checkboxes = document.querySelectorAll('#activities-box input');
for (let i = 0; i < checkboxes.length; i++) {
  const input = checkboxes[i];
  input.addEventListener('focus', (event) => {
    event.target.parentElement.classList.add('focus');
  });
  input.addEventListener('blur', (event) => {
    event.target.parentElement.classList.remove('focus');
  });
}