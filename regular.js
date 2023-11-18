function validateForm(){
    var usernameRegex=/^[a-zA-z0-9_]{3,}$/;
    var phoneRegex=/^\d{10}$/;
    const emailRegex=/^[a-zA-z0-9_-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;
    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const username=document.getElementById('username').value;
    const phone=document.getElementById('phone').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;
    
    resetErrorMessages();

    // validation of the username
    if(!usernameRegex.test(username)){
        document.getElementById("usernameError").innerText="Invalid Username";
        return;
    }
    // validation of phone number
    if(!phoneRegex.test(phone)){
        document.getElementById("phoneError").innerText="Invalid Phone Number";
        return;
    }
    // validation of email
    if(!emailRegex.test(email)){
        document.getElementById("emailError").innerText="Invalid Email";
        return;
    }
    // validation of password
    if(!passwordRegex.test(password)){
        document.getElementById("passwordError").innerText="password must contain 8 characters";
        return;
    }
    if(password !=confirmPassword){
        document.getElementById("ConfirmPasswordError").innerText="password doesn't match ";
        return;
    }
    alert("form submitted successfully");
}

function resetForm(){
    document.getElementById("registrationForm").reset();
    resetErrorMessages();
}

function resetErrorMessages(){
    const errorMessages=document.querySelectorAll(".error-message");
    errorMessages.forEach(message=>message.innerText="");
}