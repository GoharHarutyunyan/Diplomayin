   //conditions.......................................
// ամիս ամսաթիվ
 const dateElement = document.getElementById("current-date");
    const now = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    let dateStr = now.toLocaleDateString("hy-AM", options);
    dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    dateElement.textContent = dateStr;

// եղանակ
const apiKey = "cd70c1871e11e23de6e61e25edadeccc";
const select = document.getElementById("marzSelect");
const weatherElement = document.getElementById("weather");

select.addEventListener("change", () => {
  const city = select.value;
  console.log(city);
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
      console.log(description); // ստուգման համար
      weatherElement.textContent = `${temperature}°C, ${description}`;
    } else {
      weatherElement.textContent = "Եղանակ չկա";
    }
  } catch (error) {
    console.error("Weather fetch error:", error);
    weatherElement.textContent = "Սխալ";
  }
}


// Դեֆոլտ հանում՝ սկզբում ընտրած մարզի եղանակը ցույց տալ
fetchWeather(select.value);


// ▶️ Capitalize First Letter (helper function)
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ▶️ Render Favorites
function renderFavorites(type, containerId) {
  const items = JSON.parse(localStorage.getItem(type)) || [];
  const container = document.getElementById(containerId);

  if (!container) return;
  container.innerHTML = ""; // Clear container

  if (items.length === 0) {
    container.innerHTML = "<p>Չկան պահված տարրեր։</p>";
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "favorite-card";

    // Fallback for image and title
    const imgSrc = item.img || item.imgUrl || item.imgSrc || "default.jpg";
    const title = item.title || item.name || "Անանուն տարր";

    let content = `<img src="${imgSrc}" alt="${title}"><h3>${title}</h3>`;

    // Add specific fields per type
    if (type === "foods") {
      content += `<p><b>Բաղադրիչներ՝</b> ${item.ingredients || "Չնշված է"}</p>`;
    } else if (type === "sights") {
      content += `<p>${item.description || ""}</p>`;
    } else if (type === "hotels") {
      content += `<a href="${item.link || "#"}" target="_blank">Տեսնել ավելին</a>`;
    } else if (type === "events") {
      content += `
        <p>${item.description || ""}</p>
        <p><b>Վայր՝</b> ${item.location || "Չնշված է"}</p>
        <p><b>Ժամանակ՝</b> ${item.time || "Չնշված է"}</p>
      `;
    }

    const deleteButton = `<button class="delete-btn" onclick="deleteFavorite('${type}', ${index})">Ջնջել</button>`;
    card.innerHTML = content + deleteButton;
    container.appendChild(card);
  });
}

// ▶️ Delete Item from Favorites
function deleteFavorite(type, index) {
  let items = JSON.parse(localStorage.getItem(type)) || [];
  items.splice(index, 1);
  localStorage.setItem(type, JSON.stringify(items));
  renderFavorites(type, 'profile' + capitalizeFirstLetter(type));
}


// ▶️ Render All on Page Load
document.addEventListener("DOMContentLoaded", () => {
  const types = ['foods', 'sights', 'hotels', 'events'];
  types.forEach(type => {
    const containerId = 'profile' + capitalizeFirstLetter(type);
    if (document.getElementById(containerId)) {
      renderFavorites(type, containerId);
    }
  });
});

const profileContainer = document.querySelector(".diary_container");

// Մարզի անունը վերցվում է ֆավորիտից, սա օրինակ է
function addFavoriteToProfile(region, category, itemData) {
    // Ստեղծում ենք եզակի id մարզի համար
    const regionId = `region-${region.toLowerCase().replace(/\s+/g, '-')}`;

    // Ստուգում ենք՝ արդյոք region-ի diary_content div-ը արդեն կա
    let regionSection = document.getElementById(regionId);

    if (!regionSection) {
        // Եթե չկա՝ ստեղծում ենք region-ի diary_content բլոկը
        regionSection = document.createElement("div");
        regionSection.classList.add("diary_content");
        regionSection.id = regionId;

        regionSection.innerHTML = `
            <h1>Մարզը՝ ${region}</h1>
            <div class="diary_content_products">
                <div class="diary_sights dp_item">
                    <h2>Տեսարժան վայրեր</h2>
                    <div class="favorites-container" data-category="sights"></div>
                </div>
                <div class="diary_food dp_item">
                    <h2>Ուտելիք և տեղական համտես</h2>
                    <div class="favorites-container" data-category="foods"></div>
                </div>
                <div class="diart_hotels dp_item">
                    <h2>Հյուրանոցներ և կացարաններ</h2>
                    <div class="favorites-container" data-category="hotels"></div>
                </div>
                <div class="diary_culture dp_item">
                    <h2>Մշակույթ և միջոցառումներ</h2>
                    <div class="favorites-container" data-category="events"></div>
                </div>
            </div>
        `;
        profileContainer.appendChild(regionSection);
    }

    // Հիմա ավելացնում ենք ֆավորիտը ճիշտ բաժնում
    const categoryContainer = regionSection.querySelector(`.favorites-container[data-category="${category}"]`);

    if (categoryContainer) {
        const card = document.createElement("div");
        card.classList.add("favorite-card");
        card.innerHTML = `
            <img src="${itemData.image}" alt="${itemData.title}">
            <h3>${itemData.title}</h3>
            <p>${itemData.description}</p>
            <button class="delete-btn">Ջնջել</button>
        `;
        categoryContainer.appendChild(card);
    }
}
