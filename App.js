//(function()){

const auth = firebase.auth();

auth.signInWithEmaiAndPassword(email, pass);
auth.createUserWithEmaiAndPassword(email, pass);

auth.onAuthStateChanged(firebaseUser => {});

firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(function() {

        //Succesful, do whatever you want in your page

        console.log("redirect")
        wrongEmail.style.display = "none"
        window.location.href = "index.html";

    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/user-not-found') {
            console.log(....);
        } else if (errorCode === 'auth/wrong-password') {
            console.log(....);
        }

        // ... look at all the possible Error codes in the doc to handle the different cases

    });

(function() {
    const config = {
        apiKey: "AIzaSyC4JKJk6XFuKLTp2kMIJmTbcYXkBcnflDo",
        authDomain: "sigma-24.firebaseapp.com",
        databaseURL: "https://sigma-24.firebaseio.com",
        storageBucket: "gs://sigma-24.appspot.com/",
    };
    firebase.initializeApp(config);

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPasswod');
    const txtLogin = document.getElementById('txtLogin');
    const txtSignUp = document.getElementById('txtSignUp');
    const txtLogout = document.getElementById('txtLogout');

    // Add login event
    btnLogin.addEventListener('click', e => {
        // Get email  add password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add signup event
    btnSignUp.addEventListener('click', e => {
        // Get Email and pass
        // TODO: CHECK 4 REAL EMAILZ
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign In
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    //Add a realtime listener

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
            btnLogin.classList.add();
            btnSignUp.classList.add();
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
            btnLogin.classList.remove();
            btnSignUp.classList.remove();
        }

    });
}());
