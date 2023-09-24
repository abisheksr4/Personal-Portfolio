                  //This is for the scrollup arrow button
const scrollUp=document.querySelector("#scrollup");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
                //When i click the toggle menu list items will appear
const burger = document.querySelector("#burgermenu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});