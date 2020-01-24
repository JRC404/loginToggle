const header = document.getElementById("header");
const signOut = document.getElementById("signOut");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const signup = document.getElementById("signup");

signOut.style.display = "none";

// let toggle = true;
let signedIn = false;
let username;
let password;

signup.addEventListener("click", () => {
    username = emailInput.value;
    password = passwordInput.value;
    console.log(`Hello, ${username}, your password is: ${password}`)
    // signedInFunction()
    toggleFunction()
})

signOut.addEventListener("click", () => {
    toggleFunction()
})

const signOutFunction = () => {
    // signedIn = false
    emailInput.style.display = "inline";
    passwordInput.style.display = "inline";
    signup.style.display = "block";
    signOut.style.display = "none";
    // header.textContent = `Goodbye, ${username}. Don't forget, I have your password: ${password}`;
    header.style.display = "none";
}

const signedInFunction = () => {
    // signedIn = true
    emailInput.style.display = "none";
    passwordInput.style.display = "none";
    signup.style.display = "none";
    signOut.style.display = "block";
    header.style.display = "inline";
    header.textContent = `Hello, ${username}, your password is: ${password}`;
}

const toggleFunction = () => {
    if (signedIn) {
        console.log("signed out");
        signedIn = false;
        signOutFunction()
    } else {
        console.log("signed in");
        signedIn = true
        signedInFunction()
    }
}

// toggleFunction()