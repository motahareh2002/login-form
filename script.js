"use strict";
let $ = document;
// SIGN IN / SIGN UP
const signUp = $.querySelector(".signUpBtn");
const signIn = $.querySelector(".loginBtn");

//form
const formSignUp = $.querySelector(".form-signUp");
const formSignIn = $.querySelector(".form-signIn");

//inputs
const email = $.querySelector(".input-email");
const nameUser = $.querySelector(".input-name");
const password = $.querySelector(".input-pass");
const confimPassword = $.querySelector(".confim-pass");
//register
const register = $.querySelector(".register");
//blur
const userNameBlur = $.querySelector(".username-blur");
const passBlur = $.querySelector(".passBlur");
const confimBlur = $.querySelector(".confimPassBlur");
function usernameBlur() {
  if (nameUser.value.length < 8) {
    userNameBlur.style.display = "block";
    userNameBlur.style.color = "red";
  } else {
    userNameBlur.style.display = "block";
    userNameBlur.style.color = "green";
    userNameBlur.innerHTML = "is currect ";
  }
}
function passwordBlur() {
  if (password.value.length < 8) {
    passBlur.style.display = "block";
    passBlur.style.color = "red";
  } else {
    passBlur.style.display = "block";
    passBlur.style.color = "green";
    passBlur.innerHTML = "is currect ";
  }
}
function confomPasswordBlur() {
  if (confimPassword.value.length < 8) {
    confimBlur.style.display = "block";
    confimBlur.style.color = "red";
  } else {
    confimBlur.style.display = "block";
    confimBlur.style.color = "green";
    confimBlur.innerHTML = "is currect ";
  }
}

signIn.addEventListener("click", () => {
  formSignUp.classList.remove("form-signUp");
  formSignUp.classList.add("hide-form-signUp");
  formSignIn.classList.add("show-form-ingnIn");
  signIn.style.borderBottomColor = "darkgreen";
  signIn.style.borderBottomWidth = "3px";
  signIn.style.borderBottomStyle = "solid";
  signUp.style.borderBottomWidth = "0";
});
signUp.addEventListener("click", () => {
  formSignIn.classList.remove("show-form-ingnIn");
  formSignIn.classList.add("form-signIn");
  formSignUp.classList.add("form-signUp");
  signIn.style.borderBottomWidth = "0";
  signUp.style.borderBottomColor = "darkgreen";
  signUp.style.borderBottomWidth = "3px";
  signUp.style.borderBottomStyle = "solid";
});

let users = [
  { id: 1, name: "moti", email: "motijafi@gmail.com" },
  { id: 2, name: "zahra", email: "zahragrin@gmail.com" },
  { id: 3, name: "amir", email: "pocoamir02@gmail.com" },
  { id: 4, name: "amin", email: "aminamiri@gmail.com" },
];

register.addEventListener("click", () => {
  let addUser = users.some((user) => {
    return user.email == email.value;
  });
  if (addUser == true) alert("شما قبلا ثبت نام کرده اید!");
  else {
    let newUser = { id: 5, name: nameUser.value, email: email.value };
    users.push(newUser);
    alert("ثبت نام شما با موفقیت انجام شد");
  }
});
