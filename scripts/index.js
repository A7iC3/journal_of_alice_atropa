const navTabs = document.querySelectorAll(".nav__btn");
const contentGreeting = document.querySelector("#greeting");
const galleryTemplate = document.querySelector("#gallery-template").content;
const previewTemplate = document.querySelector("#preview-template").content;
const galleryList = document.querySelector(".gallery__list");
const galleryLog = [
  {
    name: "First Independent Project with TripleTen",
    link: "https://a7ic3.github.io/first_independent_project/",
    title: "First Independent Project",
    preview: "./images/sarah-alice-first-independent-project.png",
  },
  {
    name: "SE Project Library with TripleTen",
    link: "https://a7ic3.github.io/se_project_library/",
    title: "Software Engineering Project Library",
    preview: "./images/sarah-alice-se-project-library.png",
  },
  {
    name: "SE Project Coffeeshop with TripleTen",
    link: "https://a7ic3.github.io/se_project_coffeeshop/",
    title: "Software Engineering Project Coffeeshop",
    preview: "./images/sarah-alice-se-project-coffeeshop.png",
  },
  {
    name: "SE Project Spots with TripleTen",
    link: "https://a7ic3.github.io/se_project_spots/",
    title: "Software Engineering Project Spots",
  },
];

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

function addToGallery(obj) {
  //failsafe
  if (!obj) return;
  galleryList.prepend(obj);
}

function prepGalleryPiece(obj) {
  //failsafe
  if (!obj || typeof obj !== "object" || !obj.name || !obj.title || !obj.link) {
    console.log(
      "Missing Essential Data or invalid argument. Skipping element."
    );
    return null;
  }
  //main function
  let newPiece;
  //live preview
  if (!obj.preview) {
    newPiece = galleryTemplate.cloneNode(true);
    const newPieceFrame = newPiece.querySelector(".gallery__iframe");
    newPieceFrame.src = obj.link;
    newPieceFrame.title = obj.title;
  }
  //img preview
  else {
    newPiece = previewTemplate.cloneNode(true);
    const newPieceImg = newPiece.querySelector(".gallery__preview");
    newPieceImg.src = obj.preview;
    newPieceImg.alt = obj.title;
  }
  const newPieceAnchor = newPiece.querySelector(".gallery__link");
  newPieceAnchor.href = obj.link;
  newPieceAnchor.textContent = obj.name;
  return newPiece;
}

navTabs.forEach((navTab) => {
  navTab.addEventListener("click", () => {
    changeTab(navTab);
  });
});

galleryLog.forEach((galleryItem) => {
  addToGallery(prepGalleryPiece(galleryItem));
});
