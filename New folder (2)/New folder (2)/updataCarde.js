

    // let a = document.querySelectorAll(".item12");
// a.addEventListner("click",function(){
//     a.body.background-color : "red";
// })
// Step 1: Select the button element
const button = document.querySelector(".item12");

const clickit = document.getElementById("headingTwo");
clickit.addEventListener("click", function () {
  // Step 3: Change the background color
  document.getElementById("onClickIt").style.display = "none";
  // alert("hey")
});
const clickits = document.getElementById("headingThree");
clickits.addEventListener("click", function () {
  // Step 3: Change the background color
  document.getElementById("onClickIts").style.display = "none";
  // alert("hey")
});
const clickitss = document.getElementById("headingFour");
clickitss.addEventListener("click", function () {
  // alert("hey")
  // Step 3: Change the background color
  document.getElementById("onClickIts").style.display = "none";
  // alert("hey")
});
const clickits124 = document.getElementById("headingOne");
clickits124.addEventListener("click", function () {
  // Step 3: Change the background color
  document.getElementById("displayFlix").style.display = "flex";
  // alert("hey")
});

// JavaScript to toggle the background color
const colorDiv = document.getElementById("headingOne");
const accordionItems = document.querySelectorAll(".accordion-item1");
let isFirstClick = true;

colorDiv.addEventListener("click", function () {
  if (isFirstClick) {
    // Color on first click
    accordionItems.forEach((item) => {
      item.style.backgroundColor = "#010326"; // Change background color for each accordion item
    });
  } else {
    accordionItems.forEach((item) => {
      item.style.backgroundColor = "#0754B0"; // Change background color for each accordion item
    });
  }
  isFirstClick = !isFirstClick; // Toggle the click state
});
// heading 2
const colorDiv2 = document.getElementById("headingTwo");
const accordionItems2 = document.querySelectorAll(".accordion-item2");
let isFirstClick2 = true;

colorDiv2.addEventListener("click", function () {
  if (isFirstClick2) {
    // Color on first click
    accordionItems2.forEach((item) => {
      item.style.backgroundColor = "#0754B0";
      item.style.borderRadius = "10px";
    });
  } else {
    accordionItems2.forEach((item) => {
      item.style.backgroundColor = "#010326"; // Change background color for each accordion item
    });
  }
  isFirstClick2 = !isFirstClick2; // Toggle the click state
});
const colorDiv3 = document.getElementById("headingThree");
const accordionItems3 = document.querySelectorAll(".accordion-item3");
let isFirstClick3 = true;

colorDiv3.addEventListener("click", function () {
  if (isFirstClick3) {
    // Color on first click
    accordionItems3.forEach((item) => {
      // alert("hey")
      item.style.backgroundColor = "#0754B0";
      item.style.borderRadius = "10px";
    });
  } else {
    accordionItems3.forEach((item) => {
      item.style.backgroundColor = "#010326"; // Change background color for each accordion item
    });
  }
  isFirstClick3 = !isFirstClick3; // Toggle the click state
});
const colorDiv4 = document.getElementById("headingFour");
const accordionItems4 = document.querySelectorAll(".accordion-item4");
let isFirstClick4 = true;

colorDiv4.addEventListener("click", function () {
  if (isFirstClick4) {
    // Color on first click
    accordionItems4.forEach((item) => {
      // alert("hey")
      item.style.backgroundColor = "#0754B0";
      item.style.borderRadius = "10px";
    });
  } else {
    accordionItems4.forEach((item) => {
      item.style.backgroundColor = "#010326"; // Change background color for each accordion item
    });
  }
  isFirstClick4 = !isFirstClick4; // Toggle the click state
});

document.querySelector("#Clickits").addEventListener("click", () => {
  document.querySelector(".row").style.position = "relative";
  document.querySelector(".row").style.top = "50px";
});
let data = document.querySelector(".aria-expanded");
console.log(data, "hey      ");

if ((data.value = true)) {
  document.querySelector(".nav-links").style.width = "41px";
} else {
  consol.log("hey");
}

// const images = ["image1.png", "image2.png", "image3.png", "image4.png"];

// function changeImage(index) {
//   alert("hey")
//   const imageElement = document.getElementById("displayedImage");
   
//   imageElement.src = images[index];
// }

  //
