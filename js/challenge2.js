window.addEventListener("load", () => {
  console.log(document.querySelector("#billing").innerHTML);
});

const checkbox = document.querySelector("main > form > fieldset > div > label > input");
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    document.querySelector("#home").innerHTML = document.querySelector("#billing").innerHTML;
    document.querySelector("#home").disabled = true;
  } else {
    document.querySelector("#home").disabled = false;
    document.querySelector("#home").innerHTML = "";
  }
});