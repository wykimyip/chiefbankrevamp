document.addEventListener("DOMContentLoaded", function () {
 

  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    initNavbar();
    this.classList.toggle("open");
    document.querySelector(".m-nav .nav-menu").classList.toggle("open");
  });

  const navMainItems = document.querySelectorAll(".main-menu-item");
  const navSubItems = document.querySelectorAll(".sub-menu-item");
  const navSubMenuItemWra = "sub-menu-item-wra";
  const navSubChildMenuItemWra = "subchild-menu-item-wra";

  const navbarClickHandler = (clickTarget, clickSubMenuItem) => {
    clickTarget.forEach((e) => {
      e.addEventListener("click", function (e) {
        const target = e.target;

        target.classList.toggle("open");

        [...target.parentNode.parentNode.children].forEach((child) => {
          if (child.classList.contains(clickSubMenuItem)) {
            if (target.classList.contains("open")) {
              child.style.display = "flex";
            } else {
              child.style.display = "none";
            }
          }
        });
      });
    });
  };

  navbarClickHandler(navMainItems, navSubMenuItemWra);
  navbarClickHandler(navSubItems, navSubChildMenuItemWra);
});

function initNavbar() {
    document.querySelectorAll(".main-menu-item").forEach((e) => {
        e.classList.remove("open");
    })
    document.querySelectorAll(".sub-menu-item-wra").forEach((e) => {
      e.style.display = "none";
    });
    document
      .querySelectorAll(".subchild-menu-item-wra")
      .forEach((e) => (e.style.display = "none"));
  }