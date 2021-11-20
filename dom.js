// * More Button

const more = document.querySelector(".nav-link li:last-child");

more.addEventListener("click", () => {
  let a = document.querySelector("#more-container");
  let b = document.querySelector("#more-indicator");
  if (a.style.display === "none") {
    a.style.display = "flex";
    b.src = "Images/more-dash.svg";
  } else {
    a.style.display = "none";
    b.src = "Images/more-plus.svg";
  }
  console.dir(a.style.display);
});
