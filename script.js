const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// Add Event :

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

//  Final Data Validation :

const sendData = (usernameVal, sRate, count) => {
  if (sRate === count) {
    // alert("Registration Succesfull");
    swal(
      "Welcome! " + usernameVal,
      " Registration successfull",
      "success"
    ).then(function () {
      location.href = `demo.html?username=${usernameVal}`;
    });

    // location.href = `demo.html?username=${usernameVal}`;
  }
};

const successMsg = (usernameVal) => {
  let formCon = document.getElementsByClassName("form-control");

  var count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var sRate = 0 + i;
      console.log(sRate);
      sendData(usernameVal, sRate, count); //--->> Function called, defined above.
    } else {
      return false;
    }
  }
};

//  more validating email :

const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

// Define the validate function and also get rid of the extra whitespaces at the nodes by using trim() :

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // validate username :

  if (usernameVal === "") {
    setErrMsg(username, "username can not be blank");
  } else if (usernameVal.length <= 1) {
    setErrMsg(username, "min. 2 characters required");
  } else {
    setsuccessMsg(username);
  }

  // validate email :

  if (emailVal === "") {
    setErrMsg(email, "email can not be blank");
  } else if (!isEmail(emailVal)) {
    setErrMsg(email, "not a valid email");
  } else {
    setsuccessMsg(email);
  }

  // validate phone :

  if (phoneVal === "") {
    setErrMsg(phone, "phone number can not be blank");
  } else if (phoneVal.length != 10) {
    setErrMsg(phone, "not a valid phone number");
  } else {
    setsuccessMsg(phone);
  }

  // validate password :

  if (passwordVal === "") {
    setErrMsg(password, "password can not be null");
  } else if (passwordVal.length <= 5) {
    setErrMsg(password, "Minimum 6 characters required");
  } else {
    setsuccessMsg(password);
  }

  if (cpasswordVal === "") {
    setErrMsg(cpassword, "Confirm password can not be null");
  } else if (cpasswordVal != passwordVal) {
    setErrMsg(cpassword, "Please re-check the password");
  } else {
    setsuccessMsg(cpassword);
  }

  successMsg(usernameVal);
};

function setErrMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setsuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
