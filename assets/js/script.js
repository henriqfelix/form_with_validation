const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "Username is required");
  } else {
    setSuccessrFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Enter a valid email");
  } else {
    setSuccessrFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be at least 8 digits long");
  } else {
    setSuccessrFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "Password confirmation is required");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "Passwords do not match");
  } else {
    setSuccessrFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("Form is valid!");
  }
}

function setErrorFor(input, msg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = msg;
  formControl.className = "form-control error";
}

function setSuccessrFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
