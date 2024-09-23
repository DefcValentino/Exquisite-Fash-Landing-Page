import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from  "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh5DKWOoR_Jo1wyWRpIdlylBmNpqKdLSA",
  authDomain: "exquisiteauth.firebaseapp.com",
  projectId: "exquisiteauth",
  storageBucket: "exquisiteauth.appspot.com",
  messagingSenderId: "658070643552",
  appId: "1:658070643552:web:18fbefb90f9e6be505b405"
};


  ///Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  const db = getFirestore();

  onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem('loggedInUserId')
    if(loggedInUserId){
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap) => {
            if(docSnap.exists()){
                const userData = docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;
    
            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document")
        })
      }
      else{
          console.log("user id not found in the local storage")
      }
  })
  
  const logoutButton = document.getElementById('logout');

  logoutButton.addEventListener('click', () =>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth).then(()=>{

      window.location.href = 'home.html';
    })

    .catch((error)=>{
      console.error('Error Signing out:', error)
    })

  })


  