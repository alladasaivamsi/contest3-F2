const form = document.querySelector("form");

nameField = form.querySelector(".name-field");
nameInput = nameField.querySelector(".name");

emailField = form.querySelector(".email-field");
emailInput = emailField.querySelector(".email");

passField = form.querySelector(".create-password");
passInput = passField.querySelector(".password");

cPassField = form.querySelector(".confirm-password");
cPassInput = cPassField.querySelector(".cPassword");

// Email Validation
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid"); //adding invalid class if email value do not matched with email pattern 
    }
    emailField.classList.remove("invalid"); //removing invalid class if email value matched with email pattern 
}
//Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return pInput.type = "text";
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    });
})

// Password Validation
function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passInput.value.match(passPattern)) {
      return passField.classList.add("invalid"); // adding invalid class if password input valid do not match with passPattern
    }
    passField.classList.remove("invalid");// removing invalid class if password input valid do not match with passPattern
}

//Confirm Password Validation
function confirmPass() {
    if(passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

//Name Validation
function createName() {
    const nameValue = /^[a-zA-Z]+$/;
    if(!nameInput.value.match(nameValue)) {
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
}

function addUser(){
    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    
    var user = localStorage.setItem('Name', Name);
    var em = localStorage.setItem('Email', Email);
    var pass = localStorage.setItem('Password', Password);

    var user = localStorage.getItem('Name', Name);
    var em = localStorage.getItem('Email', Email);
    var pass = localStorage.getItem('Password', Password);
}


// Calling Function on Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); // preventing form submitting
    checkEmail();
    createPass();
    confirmPass();
    createName();
    addUser();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);
    nameInput.addEventListener("keyup", createName);


    if(
        !nameField.classList.contains("invalid") && 
        !emailField.classList.contains("invalid") && 
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    )
    {
        location.href = form.getAttribute("action");
    }
});    


