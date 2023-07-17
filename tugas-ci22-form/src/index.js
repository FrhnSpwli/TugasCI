document.addEventListener("DOMContentLoaded", function () {
  // Get the required elements
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var submitButton = document.getElementById("btn-submit");

  var closebtn = document.getElementById("custom-alert-ok");
  var alertBox = document.getElementById("custom-alert");

  closebtn.addEventListener("click", function (e) {
    e.preventDefault();
    alertBox.style.display = "none";
  });

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    var nameError = document.getElementById("error-msg-name");
    var emailError = document.getElementById("error-msg-email");
    var passwordError = document.getElementById("error-msg-password");

    var boxerror = document.getElementsByClassName("input-box");

    var validateName = () => {
      if (name.length > 0) {
        nameError.innerHTML = "";
        return true;
      } else {
        nameError.innerHTML = "Please fill this field";
        nameInput.value = "";
        // set style of boxerror[0]
        boxerror[0].setAttribute("style", "border: 1px solid red");
        return false;
      }
    };

    var validateEmail = () => {
      var emailRegex = /\S+@\S+\.\S+/;
      if (emailRegex.test(email)) {
        emailError.innerHTML = "";
        return true;
      } else {
        emailError.innerHTML = "Please enter a valid email address";
        emailInput.value = "";
        boxerror[1].setAttribute("style", "border: 1px solid red");
        return false;
      }
    };

    var validatePassword = () => {
      var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (passwordRegex.test(password)) {
        passwordError.innerHTML = "";
        return true;
      } else {
        passwordError.innerHTML =
          "Password must contain" +
          "<ul>" +
          "<li>At least 8 characters</li>" +
          "<li>At least 1 uppercase letter</li>" +
          "<li>At least 1 lowercase letter</li>" +
          "<li>At least 1 number</li>" +
          "</ul>";
        passwordInput.value = "";
        boxerror[2].setAttribute("style", "border: 1px solid red");
        return false;
      }
    };

    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
      var message = "Form submitted successfully.";
      document.getElementById("custom-alert-message").textContent = message;
      alertBox.style.display = "block";
      
      nameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
      Array.from(boxerror).forEach((element) => {
        element.style.border = "none";
      });
      //console input
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Password: " + password);
    }
  });
});
