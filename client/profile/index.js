async function getCurrentUser() {
  const respons = await fetch("/currentUser");
  const result = await respons.json();
  const { firstname, lastname, email } = result;

  if (result.firstname) {
    const acc = document.querySelector(".header_login");
    const fullname = document.querySelector("#fullname");
    fullname.textContent = `${firstname} ${lastname}`;
    acc.innerHTML = `<a  href="/profile" class="account_name">${result.firstname} ${result.lastname} </a>`;

    currentUserData = result;

    const favorites = document.getElementById("favorites");
    if (result.favorites.length > 0) {
      favorites.innerHTML = `
      <div class="list">
        ${result.favorites
          .map(
            (item) => `
          <div class="">
            
            <h3>${item.title}</h3>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    } else {
      favorites.innerHTML = `
   <h1>Նախընտրած գիրք չկա</h1>
  `;
    }
  } else {
    window.location.href = "/";
  }
}

getCurrentUser();

const logout = document.getElementById("logout");
logout.addEventListener("click", async () => {
  try {
    const res = await fetch("/logout", {
      method: "POST",
    });

    if (res.ok) {
      window.location.href = "/";
    } else {
      alert("Չհաջողվեց դուրս գալ։");
    }
  } catch (err) {
    console.error("Սխալ դուրս գալու ժամանակ:", err);
    alert("Սերվերի սխալ։");
  }
});
