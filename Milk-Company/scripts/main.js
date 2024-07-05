const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ceo.jfif") {
    myImage.setAttribute("src", "images/ceo.jfif");
  } else {
    myImage.setAttribute("src", "images/ceo.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


  
