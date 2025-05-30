document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i < 25; i++) {
    const div = document.querySelector(`.div${i}`);
    if (div) {
      div.style.backgroundImage = `url(/assets/images/Gallery/img_${i}.jpg)`;
    }
  }

  const currentPath = window.location.pathname; 
  const menuLinks = document.querySelectorAll(".menu_link");

  menuLinks.forEach((link) => {
    // Համեմատում ենք href-ը `pathname`-ի հետ
    if (link.getAttribute("href") === currentPath) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});

// login
