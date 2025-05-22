document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname; // օրինակ՝ /hayastan
    const menuLinks = document.querySelectorAll(".menu_link");

    menuLinks.forEach(link => {
      // Համեմատում ենք href-ը `pathname`-ի հետ
      if (link.getAttribute("href") === currentPath) {
        link.parentElement.classList.add("active");
      } else {
        link.parentElement.classList.remove("active");
      }
    });
  });