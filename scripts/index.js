const navTabs = document.querySelectorAll(".nav__btn");
const contentGreeting = document.querySelector("#greeting");
//const tabContent = document.querySelectorAll(".content__info");

function changeTab(arg1) {
  const currentTab = document.querySelector(".nav__btn.nav_active");
  const currentTabContent = document.querySelector(
    ".content__info.content_active"
  );
  const newTab = arg1;
  const newTabContent = document.querySelector(newTab.dataset.tab);
  if (currentTab == newTab) {
    currentTab.classList.remove("nav_active");
    if (currentTabContent) {
      currentTabContent.classList.remove("content_active");
    }
    contentGreeting.classList.add("content_active");
    return;
  }
  if (currentTab) {
    currentTab.classList.remove("nav_active");
  }
  if (currentTabContent) {
    currentTabContent.classList.remove("content_active");
  }
  newTab.classList.add("nav_active");
  newTabContent.classList.add("content_active");
}

navTabs.forEach((navTab) => {
  navTab.addEventListener("click", () => {
    changeTab(navTab);
  });
});
