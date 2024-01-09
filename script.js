const notifyButton = document.getElementById("notifyButton");
const emailInput = document.getElementById("emailInput");
const formWrapper = document.getElementById("formWrapper");

notifyButton.addEventListener("click", (event) => {
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput.value);
  const text = document.getElementById("errorText");

  if (emailInput.value.length <= 0) {
    event.preventDefault();
    errorText("Whoops! It looks like you forgot to add your email");
  } else if (!validEmail) {
    event.preventDefault();
    errorText("Please provide a valid email address");
  } else {
    alert("You will get notified in email: " + emailInput.value);
  }

  text.remove();
});

const errorText = (message) => {
  const para = document.createElement("p");
  para.classList.add("error-text");
  para.setAttribute("id", "errorText");
  para.textContent = message;
  formWrapper.append(para);
};
