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

  const currentPath = window.location.pathname; // օրինակ՝ /armenia
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
