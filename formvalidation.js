//Register Form Validation

const form = document.getElementById('registrationFormId');

function registerFormValidate(){
   
    var acumErrors = 0;
    
    var email = document.forms["registrationForm"]["email"];
	var password = document.forms["registrationForm"]["pwd"];
	var rePassword = document.forms["registrationForm"]["repwd"];
	var fname = document.forms["registrationForm"]["fname"];
	var lname = document.forms["registrationForm"]["lname"];
	var traveller = document.forms["registrationForm"]["traveller"];
    var transport = document.forms["registrationForm"]["transport"];
    
    if(email.value==""){
        email.classList.add("error");
        document.getElementById("errorEmail").innerHTML="Fill in the email.";
        acumErrors ++;
    }else if(!emailValidation(email.value)){
		email.classList.add("error");
		document.getElementById("errorEmail").innerHTML = "The email's format is wrong. example@example.com";
        acumErrors ++;
    }else{
        email.classList.remove("error");
        document.getElementById("errorEmail").innerHTML="";
    }
    if(password.value==""){
        password.classList.add("error");
        document.getElementById("errorPassword").innerHTML="Fill in the password (min 8 characters).";
        acumErrors ++;
    }else if(password.value.length < 8){
        password.classList.add("error");
        document.getElementById("errorPassword").innerHTML="Password must contain minimum 8 characters.";
        acumErrors ++;
    }else{
        password.classList.remove("error");
        document.getElementById("errorPassword").innerHTML="";
    }
    if(password.value!=rePassword.value || rePassword.value==""){
        rePassword.classList.add("error");
        document.getElementById("errorPasswordControl").innerHTML="Passwords don't match.";
        acumErrors ++;
    }else{
        rePassword.classList.remove("error");
        document.getElementById("errorPasswordControl").innerHTML="";
    }
    if(fname.value==""){
        fname.classList.add("error");
        document.getElementById("errorFname").innerHTML="Fill in your first name.";
        acumErrors ++;
    }else{
        fname.classList.remove("error");
        document.getElementById("errorFname").innerHTML="";
    }
    if(lname.value==""){
        lname.classList.add("error");
        document.getElementById("errorLname").innerHTML="Fill in your last name.";
        acumErrors ++;
    }else{
        lname.classList.remove("error");
        document.getElementById("errorLname").innerHTML="";
    }
    if(traveller.value==""){
        traveller.classList.add("error");
        document.getElementById("errorTraveller").innerHTML="Choose an option from the list.";
        acumErrors ++;
    }else{
        traveller.classList.remove("error");
        document.getElementById("errorTraveller").innerHTML="";
    }
    if(transport.value==""){
        transport.classList.add("error");
        document.getElementById("errorTransport").innerHTML="Choose an option from the list.";
        acumErrors ++;
    }else{
        transport.classList.remove("error");
        document.getElementById("errorTransport").innerHTML="";
    }
    if(acumErrors>0){
        return false;
    }else{
        return true;
    }  
}

function emailValidation(inputEmail){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(inputEmail);
}

form.addEventListener('blur', (event) => {
    //if(event.target.value!='') event.target.classList.remove("error");
    registerFormValidate();
}, true);

//Sign In Form Validation

const formSignIn=document.getElementById('signInValidation');

function signInFormValidate(){

    var emailSignIn = document.forms["signIn"]["emailSignIn"];
    var passwordSignIn = document.forms["signIn"]["passwordSignIn"];
    var acumErrors=0;

    if(emailSignIn.value==""){
        emailSignIn.classList.add("error");
        document.getElementById("errorEmailSignIn").innerHTML="Fill in the email.";
        acumErrors ++;
    }else if(!emailValidation(emailSignIn.value)){
		emailSignIn.classList.add("error");
		document.getElementById("errorEmailSignIn").innerHTML = "The email's format is wrong. example@example.com";
        acumErrors ++;
    }else{
        emailSignIn.classList.remove("error");
        document.getElementById("errorEmailSignIn").innerHTML="";
    }
    if(passwordSignIn.value==""){
        passwordSignIn.classList.add("error");
        document.getElementById("errorPasswordSignIn").innerHTML="Enter your password (min 8 characters).";
        acumErrors ++;
    }else if(passwordSignIn.value.length < 8){
        passwordSignIn.classList.add("error");
        document.getElementById("errorPasswordSignIn").innerHTML="Password must contain minimum 8 characters.";
        acumErrors ++;
    }else{
        passwordSignIn.classList.remove("error");
        document.getElementById("errorPasswordSignIn").innerHTML="";
    }
    if(acumErrors>0){
        return false;
    }else{
        return true;
    }  
}

formSignIn.addEventListener("blur", signInFormValidate, true);

//Contact Us Form Validation

const contactForm=document.getElementById('contactFormId');

function contactFormValidate(){
    var firstNameContact = document.forms["contactForm"]["firstNameContact"];
    var lastNameContact = document.forms["contactForm"]["lastNameContact"];
    var emailContact = document.forms["contactForm"]["emailContact"];
    var comments = document.forms["contactForm"]["comments"];
    var acumErrors=0;

    if(firstNameContact.value==""){
        firstNameContact.classList.add("error");
        document.getElementById("errorFirstNameContact").innerHTML="Fill in your first name.";
        acumErrors ++;
    }else{
        firstNameContact.classList.remove("error");
        document.getElementById("errorFirstNameContact").innerHTML="";
    }
    if(lastNameContact.value==""){
        lastNameContact.classList.add("error");
        document.getElementById("errorLastNameContact").innerHTML="Fill in your last name.";
        acumErrors ++;
    }else{
        lastNameContact.classList.remove("error");
        document.getElementById("errorLastNameContact").innerHTML="";
    }
    if(emailContact.value==""){
        emailContact.classList.add("error");
        document.getElementById("errorEmailContact").innerHTML="Fill in the email.";
        acumErrors ++;
    }else if(!emailValidation(emailContact.value)){
		emailContact.classList.add("error");
		document.getElementById("errorEmailContact").innerHTML = "The email's format is wrong. example@example.com";
        acumErrors ++;
    }else{
        emailContact.classList.remove("error");
        document.getElementById("errorEmailContact").innerHTML="";
    }
    if(document.getElementById("comments").value==""){
        comments.classList.add("error");
        document.getElementById("errorComments").innerHTML="Add a comment.";
        acumErrors ++;
    }else{
        comments.classList.remove("error");
        document.getElementById("errorComments").innerHTML="";
    }
    if(acumErrors>0){
        return false;
    }else{
        return true;
    }  
}

contactForm.addEventListener("blur", contactFormValidate, true);
