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

  function normalizePath(path) {
    return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  }

  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".menu_list a").forEach((link) => {

    if (normalizePath(link.getAttribute("href")) === currentPath) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});
