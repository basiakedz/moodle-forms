document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    for (const errorEl of Array.from(
      document.getElementsByClassName("error-message")
    )) {
      errorEl.remove();
    }

    for (const invalidInputEl of Array.from(
      document.getElementsByClassName("form__error-input")
    )) {
      invalidInputEl.classList.remove("form__error-input");
    }

    const userName = formData.get("userName");

    if (!userName) {
      displayErrorMessage("This field is required.", "user-name-field");
    } else if (!/^[A-Za-z][A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9]{4,}$/.test(userName)) {
      displayErrorMessage(
        "1. At least 5 characters and start with a letter.<br>2. Only letters and numbers can be used.",
        "user-name-field"
      );
    }

    const email = formData.get("email");

    if (!email) {
      displayErrorMessage("This field is required.", "email-field");
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      displayErrorMessage(
        "Enter email address in format: yourname@example.com",
        "email-field"
      );
    }

    const firstName = formData.get("firstName");

    if (!firstName) {
      displayErrorMessage("This field is required.", "first-name-field");
    } else if (!/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(firstName)) {
      displayErrorMessage("Only letters can be used.", "first-name-field");
    }

    const city = formData.get("city");

    if (!city) {
      displayErrorMessage("This field is required.", "city-field");
    } else if (!/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(city)) {
      displayErrorMessage("Only letters can be used.", "city-field");
    }

    const password = formData.get("password");

    if (!password) {
      displayErrorMessage("This field is required.", "password-field");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    ) {
      displayErrorMessage(
        "1. At least 8 characters.<br>2. Contains a mix of uppercase and lowercase.<br>3. Includes at least one digit (0-9).",
        "password-field"
      );
    }

    const emailAgain = formData.get("emailAgain");

    if (!emailAgain) {
      displayErrorMessage("This field is required.", "email-again-field");
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailAgain)
    ) {
      displayErrorMessage(
        "Enter email address in format: yourname@example.com",
        "email-again-field"
      );
    } else if (emailAgain !== email) {
      displayErrorMessage(
        "The email confirmation is different from the email value.",
        "email-again-field"
      );
    }

    const lastName = formData.get("lastName");

    if (!lastName) {
      displayErrorMessage("This field is required.", "last-name-field");
    } else if (!/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(lastName)) {
      displayErrorMessage("Only letters can be used.", "last-name-field");
    }

    const country = formData.get("country");

    if (!country) {
      displayErrorMessage("This field is required.", "country-field");
    } else if (!/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(country)) {
      displayErrorMessage("Only letters can be used.", "country-field");
    }
  });

  const cancelButton = document.querySelector(".btn-secondary");
  cancelButton.addEventListener("click", function () {
    form.reset();
    clearErrorMessages();
  });

  function displayErrorMessage(message, fieldId) {
    const errorElement = document.createElement("span");

    errorElement.classList.add("error-message");
    errorElement.innerHTML = message;

    const fieldEl = document.getElementById(fieldId);

    fieldEl.querySelector("input").classList.add("form__error-input");

    fieldEl.appendChild(errorElement);
  }

  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((errorMessage) => errorMessage.remove());

    const invalidInputs = document.querySelectorAll(".form__error-input");
    invalidInputs.forEach((invalidInput) =>
      invalidInput.classList.remove("form__error-input")
    );
  }
});
