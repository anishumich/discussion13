window.addEventListener("load", () => {
  document.querySelector("h1").style.color = "#5D3FD3";
  document.querySelector("h1").style.textAlign = "center";
});

document.addEventListener("dblclick", () => {
  alert(new Date().toLocaleString());
});

document.querySelector("#toggle").addEventListener("click", () => {
  if (document.querySelector("#toggle").checked) {
    document.querySelector("#emailBox").classList.remove("hidden");
  } else {
    document.querySelector("#emailBox").classList.add("hidden");
  }
});