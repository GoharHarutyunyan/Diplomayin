document.addEventListener("DOMContentLoaded", function () {
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
});

// login
