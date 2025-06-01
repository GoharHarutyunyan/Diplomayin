document.querySelectorAll(".menu_list a").forEach((link) => {
  link.parentElement.classList.remove("active");
});



async function getCurrentUser() {
  const respons = await fetch("/currentUser");
  const result = await respons.json();
  const { favorites } = result;

  if (result.firstname) {
    const acc = document.querySelector(".header_login");
    const fullname = document.querySelector("#fullname");
    acc.innerHTML = `<button id="logout" class="account_name">ԵԼՔ</button>`;
    fullname.textContent = `${result.firstname} ${result.lastname}`;

    const container = document.querySelector(".diary_content_products");
    if (favorites.length > 0) {
      container.innerHTML = ""; // Clean previous

      const types = {
        sights: "Տեսարժան վայրեր",
        foods: "Ազգային ուտեստներ",
        hotels: "Հյուրանոցներ",
        events: "Միջոցառումներ",
      };

      favorites.forEach((fav) => {
        let content = `
          <div class="favorite-card dp-item">
            <h2>${types[fav.type] || "Ընտրյալ"}</h2>
            <img src="${fav.img}" alt="${fav.title || "Նկար"}">
            <h3>${fav.title || ""}</h3>
        `;

        if (fav.description) {
          content += `<p><b>Նկարագրություն՝</b> ${fav.description}</p>`;
        }

        if (fav.location) {
          content += `<p><b>Վայր՝</b> ${fav.location}</p>`;
        }

        if (fav.time) {
          content += `<p><b>Ժամանակ՝</b> ${fav.time}</p>`;
        }

        // content += `<button class="delete-btn">Ջնջել</button></div>`;
        content += `<button class="delete-btn" onclick="deleteFavorite('${result.email}', '${fav.id}')">Ջնջել</button>`;

        container.innerHTML += content;
      });
    } else {
      container.innerHTML += "<h1>Նախընտրած չկա</h1>";
    }

    
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("/logout", {
        method: "POST",
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        alert("Ելքը չհաջողվեց");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Սխալ եղավ ելքի ժամանակ");
    }
  });
} 
  }
}

getCurrentUser();
async function deleteFavorite(email, id) {
  if (!confirm("Վստա՞հ եք, որ ցանկանում եք ջնջել։")) return;

  try {
    const response = await fetch(`/removeFavorite`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, id }),
    });

    const text = await response.text(); // 🟡 սրան պետք է await

    if (response.ok) {
      alert(text); // ✅ ճիշտ է
      window.location.reload();
    } else {
      alert("Ջնջումը չհաջողվեց:\n" + text);
    }
  } catch (error) {
    console.error("Delete error:", error);
    alert("Սխալ եղավ ջնջելիս");
  }
}



// 🗓️ Ամսաթիվ
const dateElement = document.getElementById("current-date");
const now = new Date();
const options = { day: "numeric", month: "long", year: "numeric" };
let dateStr = now.toLocaleDateString("hy-AM", options);
dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
dateElement.textContent = dateStr;

// ☁️ Եղանակ
const apiKey = "cd70c1871e11e23de6e61e25edadeccc";
const select = document.getElementById("marzSelect");
const weatherElement = document.getElementById("weather");

select.addEventListener("change", () => {
  const city = select.value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hy`
    );

    if (!response.ok) {
      throw new Error("Weather fetch failed: " + response.status);
    }

    const data = await response.json();

    if (data.main && typeof data.main.temp !== "undefined") {
      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].description;
      weatherElement.textContent = `${temperature}°C, ${description}`;
    } else {
      weatherElement.textContent = "Եղանակ չկա";
    }
  } catch (error) {
    console.error("Weather fetch error:", error);
    weatherElement.textContent = "Սխալ";
  }
}

fetchWeather(select.value);

