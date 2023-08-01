const card1Element = document.getElementsByClassName("card1")[0];
const card2Element = document.getElementsByClassName("card2")[0];
const inputElement = document.getElementById("email");
const errorElement = document.getElementById("error");

const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");

function emailValidate() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let validation = emailRegex.test(inputElement.value);
  if (!validation) {
    errorElement.textContent = "Valid email required";
    inputElement.style.borderColor = "red";
    inputElement.style.color = "red";
    inputElement.style.backgroundColor = "hsla(4, 100%, 67%, 10%)";
  }
  console.log(validation);
  return validation;
}
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (emailValidate()) {
    card1Element.style.display = "none";
    card2Element.style.display = "flex";
    inputElement.value = null;
  }
});

dismissBtn.addEventListener("click", function (event) {
  event.preventDefault();
  card2Element.style.display = "none";
  card1Element.style.display = "flex";
});
