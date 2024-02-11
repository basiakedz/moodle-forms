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
      document.getElementsByClassName("is-invalid")
    )) {
      invalidInputEl.classList.remove("is-invalid");
    }

    const userName = formData.get("username");

    if (!userName) {
      displayErrorMessage("This field is required.", "user-name-field");
    } else if (!/^[A-Za-z][A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9]{4,}$/.test(userName)) {
      displayErrorMessage(
        "1. At least 5 characters.<br>2. Start with a letter.<br>3. Only letters and numbers can be used.",
        "user-name-field"
      );
    }

    const password = formData.get("password");

    if (!password) {
      displayErrorMessage("This field is required.", "password-field");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}$/.test(
        password
      )
    ) {
      displayErrorMessage(
        "1. Includes at least 8 characters.<br>2. At least 1 uppercase.<br>3. At least 1 lowercase.<br>4. At least one digit.<br>5. At least 1 special character.",
        "password-field"
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

    const emailAgain = formData.get("email2");

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

    const firstName = formData.get("firstname");

    if (!firstName) {
      displayErrorMessage("This field is required.", "first-name-field");
    } else if (!/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(firstName)) {
      displayErrorMessage("Only letters can be used.", "first-name-field");
    }

    const lastName = formData.get("lastname");

    if (!lastName) {
      displayErrorMessage("This field is required.", "last-name-field");
    } else if (!/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(lastName)) {
      displayErrorMessage("Only letters can be used.", "last-name-field");
    }

    const city = formData.get("city");

    if (city && !/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(city)) {
      displayErrorMessage("Only letters can be used.", "city-field");
    }

    const country = formData.get("country");

    if (country && !/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(country)) {
      displayErrorMessage("Only letters can be used.", "country-field");
    }
  });

  const cancelButton = document.querySelector(".btn-secondary");
  cancelButton.addEventListener("click", function () {
    window.location.href = "https://testing.muras.eu/moodle403/login/index.php";
  });

  function displayErrorMessage(message, fieldId) {
    const errorElement = document.createElement("span");
    errorElement.classList.add("error-message");
    errorElement.innerHTML = message;

    const fieldEl = document.getElementById(fieldId);
    const inputEl = fieldEl.querySelector("input");
    const iconEl = fieldEl.querySelector("img");

    inputEl.classList.add("is-invalid");
    fieldEl.appendChild(errorElement);

    iconEl.style.display = "none";
  }
});
