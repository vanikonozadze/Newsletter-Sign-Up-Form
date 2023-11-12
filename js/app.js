const form = document.getElementById("form");
const email = document.querySelector(".email-input");
const message = document.querySelector(".message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = () => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.value.match(validRegex) && email.value.trim() === "") {
    error(email, "Valid email required");
  } else {
    setDefault(email);
    localStorage.setItem("email", email.value);
    window.location.href = form.action;
  }
};

function error(element, msg) {
  element.style.border = "1px red solid";
  element.style.backgroundColor = "hsl(4, 100%, 91%)";
  let addCSS = document.createElement("style");
  addCSS.innerHTML = "::placeholder { color: " + "#ff3860" + "; }";
  document.body.append(addCSS);
  message.innerHTML = msg;
}

function setDefault(element) {
  element.style.border = "1px solid hsl(231, 7%, 60%)";
  element.style.backgroundColor = "#fff";
  let addCSS = document.createElement("style");
  addCSS.innerHTML = "::placeholder { color: " + "#000" + "; }";
  document.body.append(addCSS);
  message.innerHTML = "";
}
