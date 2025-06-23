const navTabs = document.querySelectorAll(".nav__btn");
const tabContent = document.querySelectorAll(".content__info");
function changeTab(arg1) {
  for (let i in navTabs) {
    if (
      (i != arg1 && i.classList.contains("nav_active")) ||
      (i == arg1 && !i.classList.contains("nav_active"))
    ) {
      i.classList.toggle("nav_active");
      console.log(i);
    }
  }
}
/*function changeTab(arg1) {
  for (let i in navTabs) {
    if (
      (i != arg1 && i.classList.contains("nav__active")) ||
      (i == arg1 && !i.classList.contains("nav__active"))
    ) {
      i.classList.toggle("nav__active");
    }
  }
}*/
navTabs.forEach((navTab) => {
  navTab.addEventListener("click", changeTab);
});
