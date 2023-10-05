


// document.getElementById("focusButton").addEventListener("click", () => {
   //  document.getElementById("Name").focus();
 //  });

// treehouse fsjs
// unit 3 project
// kalkidan gebremedhin

// name field, When the page first loads, the first text field should have the focus state by default to prompt the user.

const nameInput = document.getElementById('name');
  nameInput.focus();



// job role section

const jobRoleMenu = document.getElementById('title');
const otherjobRoleInput = document.getElementById('other-job-role');

// other job role input should be hidden  by default 

otherjobRoleInput.hidden = 'true';

// job role section - program the job role select element to listen for changes, when change is detected display/hide text field based on the selection in the drop-down menu

jobRoleMenu.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherjobRoleInput.style.display = 'block';
        // otherjobRoleInput.removeAttribute('hidden');
    } else {
        otherjobRoleInput.style.display = 'none';
        // otherjobRoleInput.hidden = 'true';
    }
    }
);

// tshirt info section 
const colorSelect = document.querySelector('#color');
    colorSelect.disabled = true;
    // user shouldnt be able to see or choose the color until they choose design
const designSelect = document.querySelector('#design');
const colorMenu = colorSelect.querySelectorAll('optioin[data-theme]');


designSelect.addEventListener('change', (e) => {
    colorSelect.disabled = false;
    for (let i = 0; i < colorMenu.length; i++) {
        const designTheme = e.target.value;
        const colorTheme = colorSelect[i].getAttribute('data-theme');
        
        if(colorTheme === designTheme) {
            colorSelect[i].removeAttribute('hidden');
        } else {
            colorSelect.hidden = true;
        }
    }
});
    

// activities section
const registerActivities = document.querySelector('#activities-box');
const total = document.querySelector('#activities-cost');
const checkBox = activities.querySelectorAll('input[type="checkbox"]');
// unsure about checkbox
let totalCost = 0;

registerActivities.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        let cost = +e.target.dataset.cost;  
    if (e.target.checked) {
        totalCost += cost ; 
    } else {
        totalCost -= cost;
    }
    activitiesCost.innerText = `Total: $${totalCost}`;
    }
}

)

const paymentSelect = document.getElementById('payment');
const creditCard = document.querySelector('credit-card');
const bitCoin = document.querySelector('bitcoin');
const paypal = document.querySelector('paypal');

paymentSelect.addEventListener('change', (e) =>{
    if (e.target.value === 'paypal') {
        paypal.hidden = false;
        creditCard.hidden = true;
        bitCoin.hidden = true;
} else if (e.target.value === 'bitcoin') {
        paypal.hidden = true;
        creditCard.hidden = true;
        bitCoin.hidden = false;
} else if (e.target.value === 'credit-card') {
        paypal.hidden = true;
        creditCard.hidden = false;
        bitCoin.hidden = true;
}
});

const email = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    const nameValidator = () => {
        let nameValue = name.value;  
        let nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
        return nameIsValid;  
    }
    const emailValidator = () => {
        let emailValue = email.value;   
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
        return emailIsValid;
    }
    const creditCardValidator = () => {
        let creditCardValue = cardNumber.value;
        const cCIsValid = /^\d{13,16}$/.test(creditCardValue);
        return cCIsValid;
    }
    const zipCodeValidator = () => {
        let zipValue = zip.value;
        const zipValid = /^\d{5}$/.test(zipValue);
        return zipValid;
    }
    const cvvValidator = () => {
        let cvvValue = cvvBox.value;
        const cvvIsValid = /^\d{3}$/.test(cvvValue);
        return cvvIsValid;
    }
    
    }
    /

// }
// )
const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', (event) => {
    if (!validate()) {
        event.preventDefault();
    }
});
// checkboxes
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