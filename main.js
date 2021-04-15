const searchBox = document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav-btn-container");
const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");
const logo = document.querySelector("nav .logo");
const item = document.querySelectorAll("nav li .item");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  navBtnContainer.classList.add("active");
  [].forEach.call(item, function(el) {
    el.classList.add("hide");
  });  
  logo.classList.add("hide");
});

closeBtn.addEventListener("click", () => {
  [].forEach.call(item, function(el) {
    el.classList.remove("hide");
  });  
    logo.classList.remove("hide");
  searchBox.classList.remove("active");
  navBtnContainer.classList.remove("active");
});
