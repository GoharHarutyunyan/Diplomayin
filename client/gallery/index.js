document.addEventListener("DOMContentLoaded", function () {


    async function getCurrentUser() {
    const respons = await fetch("/currentUser");
    const result = await respons.json();

    if (result.firstname) {
      const acc = document.querySelector(".header_login");
      acc.innerHTML = `<a  href="/profile" class="account_name">${result.firstname} ${result.lastname} </a>`;
    }
  }

  getCurrentUser();

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
