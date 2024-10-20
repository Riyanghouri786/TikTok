let number = document.getElementById("number");
let services = document.getElementById("services");
let amount = document.getElementById("amount");
let message = document.getElementById("message");
let link = document.getElementById("link");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbws4Ro0Ua0oRBasDTjSwm-1grbunzVsls-bv2a10mbLWml0otazBrC6RGKjq68XxA0-/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Send form data to Google Sheets
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
    })
    .catch((error) => {
      console.error("Error!", error.message);
    });

  // Clear the form fields after submission
  number.value = "";
  services.value = "";
  amount.value = "";
  message.value = "";
  link.value = "";
});
