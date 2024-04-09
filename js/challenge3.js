window.addEventListener("load", () => {
  alert(document.querySelectorAll("figcaption")[1].innerHTML);
});

const images = document.querySelectorAll("img");
console.log(images);
images.forEach(img => {
  img.addEventListener("mouseover", () => {
    console.log(img.src);
    document.querySelector("#display").style.backgroundImage  = `url(${img.src})`;
    document.querySelector("#display").innerHTML = img.alt;
    //img.style.visibility = "hidden";
  });
  img.addEventListener("mouseout", () => {
    document.querySelector("#display").style.backgroundImage  = "";
    document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text.";
    //img.style.visibility = "visible";
  });
});