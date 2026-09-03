```javascript
// ==========================================
// BEACH BUTTON INTERACTION
// ==========================================

const beachButton = document.querySelector("#beachButton");
const beachMessage = document.querySelector("#beachMessage");

beachButton.addEventListener("click", function () {
    beachMessage.textContent =
        "The beach is the perfect place to relax, enjoy the waves, and make memories! 🌊☀️💗";
});


// ==========================================
// NAME INTERACTION
// ==========================================

const nameInput = document.querySelector("#nameInput");
const nameGreeting = document.querySelector("#nameGreeting");

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        nameGreeting.textContent =
            "Welcome to my beach page, " + nameInput.value + "! 🏖️";

        nameGreeting.style.fontWeight = "bold";
        nameGreeting.style.fontSize = "24px";
    } else {
        nameGreeting.textContent =
            "Hello, beach lover! 🏖️";

        nameGreeting.style.fontWeight = "normal";
        nameGreeting.style.fontSize = "16px";
    }
});


// ==========================================
// ADD BEACH ACTIVITY
// ==========================================

const activityInput = document.querySelector("#activityInput");
const addActivityButton = document.querySelector("#addActivityButton");
const activityList = document.querySelector("#activityList");

addActivityButton.addEventListener("click", function () {
    const activityText = activityInput.value.trim();

    if (activityText !== "") {
        const newActivity = document.createElement("li");

        newActivity.textContent = activityText;

        activityList.appendChild(newActivity);

        activityInput.value = "";
        activityInput.focus();
    }
});


// ==========================================
// FORM VALIDATION
// ==========================================

const beachForm = document.querySelector("#beachForm");

const formName = document.querySelector("#name");
const email = document.querySelector("#email");
const favoriteBeach = document.querySelector("#favoriteBeach");
const message = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const favoriteBeachError =
    document.querySelector("#favoriteBeachError");
const messageError =
    document.querySelector("#messageError");

const formSuccess =
    document.querySelector("#formSuccess");


// ==========================================
// FORM SUBMIT
// ==========================================

beachForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    favoriteBeachError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    let formIsValid = true;


    // ==========================================
    // NAME VALIDATION
    // ==========================================

    if (formName.value.trim() === "") {
        nameError.textContent =
            "Please enter your name.";

        formIsValid = false;
    }


    // ==========================================
    // EMAIL VALIDATION
    // ==========================================

    if (email.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        formIsValid = false;

    } else {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address.";

            formIsValid = false;
        }
    }


    // ==========================================
    // FAVORITE BEACH VALIDATION
    // ==========================================

    if (favoriteBeach.value.trim() === "") {

        favoriteBeachError.textContent =
            "Please enter your favorite beach.";

        formIsValid = false;
    }


    // ==========================================
    // MESSAGE VALIDATION
    // ==========================================

    if (message.value.trim() === "") {

        messageError.textContent =
            "Please enter a beach message.";

        formIsValid = false;
    }


    // ==========================================
    // SUCCESS MESSAGE
    // ==========================================

    if (formIsValid) {

        formSuccess.textContent =
            "Thank you! Your beach message was submitted successfully! 🌊💗";

        beachForm.reset();
    }
});


// ==========================================
// CLEAR NAME ERROR
// ==========================================

formName.addEventListener("input", function () {

    if (formName.value.trim() !== "") {
        nameError.textContent = "";
    }
});


// ==========================================
// CLEAR EMAIL ERROR
// ==========================================

email.addEventListener("input", function () {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

    } else if (!emailPattern.test(email.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

    } else {

        emailError.textContent = "";
    }
});


// ==========================================
// CLEAR FAVORITE BEACH ERROR
// ==========================================

favoriteBeach.addEventListener("input", function () {

    if (favoriteBeach.value.trim() !== "") {
        favoriteBeachError.textContent = "";
    }
});


// ==========================================
// CLEAR MESSAGE ERROR
// ==========================================

message.addEventListener("input", function () {

    if (message.value.trim() !== "") {
        messageError.textContent = "";
    }
});


// ==========================================
// BONUS API
// ==========================================

const apiButton = document.querySelector("#apiButton");
const apiResult = document.querySelector("#apiResult");

apiButton.addEventListener("click", function () {

    apiResult.textContent =
        "Loading inspiration... 🌊";

    fetch("https://api.adviceslip.com/advice")

        .then(function (response) {

            if (!response.ok) {
                throw new Error("API request failed.");
            }

            return response.json();
        })

        .then(function (data) {

            apiResult.textContent =
                "Beach inspiration: " +
                data.slip.advice;
        })

        .catch(function (error) {

            apiResult.textContent =
                "Sorry, inspiration could not be loaded right now.";

            console.error(error);
        });
});
```
