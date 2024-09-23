/********************FORM PAGE FUNCTION*******************/
///Buttons id selection
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signUpForm = document.getElementById('signUp');
const signInForm = document.getElementById('signIn');
const accntExistbtn = document.getElementById('accntExist');

///Sign Up function on click
signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

///Sign In function on click
signInButton.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

///Already have an account
accntExistbtn.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});


/********************SIDEMENU NAVIGATION*******************/
const menunav = document.querySelector('.menu-nav');
const openicon = document.querySelector('.nav-open-icon')
const closeicon = document.querySelector('.nav-close-icon');


///INITIALIZE OPEN AND CLOSE NAV
openicon.addEventListener('click', ()=> {
    menunav.classList.add('show');
    menunav.style.right = '0';
    openicon.style.display = 'none';
})

closeicon.addEventListener('click', ()=> {
    menunav.classList.remove('show');
    menunav.style.right = '-500px';
    openicon.style.display = 'block';
})
