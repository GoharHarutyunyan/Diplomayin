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

  const form = document.querySelector("form");
  const popup = document.getElementById("messagePopup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
    form.reset();
  });

  function closePopup() {
    popup.style.display = "none";
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
