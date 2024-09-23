// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBh5DKWOoR_Jo1wyWRpIdlylBmNpqKdLSA",
    authDomain: "exquisiteauth.firebaseapp.com",
    projectId: "exquisiteauth",
    storageBucket: "exquisiteauth.appspot.com",
    messagingSenderId: "658070643552",
    appId: "1:658070643552:web:18fbefb90f9e6be505b405"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


///Initialize Errormessage 
function formMessage(message, signUpMessage) {
    var messageDisplay = document.getElementById(signUpMessage);
    messageDisplay.style.display = "block";
    messageDisplay.innerHTML = message;
    messageDisplay.style.opacity = 1;
    setTimeout(function (){
        messageDisplay.style.opacity = 0;
    },5000);
}

///Initialize form submission
const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', (event) => {
    event.preventDefault();

    ///Get all input fields
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const email = document.getElementById('mEmail').value;
    const password = document.getElementById('mPassword').value;
    

    ///Get form container
    const signInForm = document.getElementById('signIn');
    const signUpForm = document.getElementById('signUp');

    const auth = getAuth();
    const db = getFirestore();

    ///Initialize user sign up auth
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
            email: email,
            firstName: firstName,
            lastName: lastName
        };
        formMessage ('Account Created Succesfully', 'signUpMessage');


        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
        .then(()=> {
            signInForm.style.display = "block";
            signUpForm.style.display = "none";
        })
        .catch((error) => {
            console.error("error writing document", error)
        })


    })
    .catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/email-already-in-use'){
            formMessage('Email Address Already Exist !!!', 'signUpMessage');
        }
        else{
            formMessage('Unable to create user', 'signUpMessage');
        }

    })
});


///Sign in function
const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
    event.preventDefault();

    ///Get input field
    const email = document.getElementById('dEmail').value;
    const password = document.getElementById('dPassword').value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        formMessage('login is successfull', 'signInMessage');
        const user = userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href="homepage.html";
    })

    .catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/invalid-credential'){
            formMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            formMessage('Account does not Exist', 'signInMessage')
        }
    })
})

///Reset password function
const reset = document.getElementById('reset');

reset.addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('dEmail').value;

    const auth = getAuth();
    
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("Email sent")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
});