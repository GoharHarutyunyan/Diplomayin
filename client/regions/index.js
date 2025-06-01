const regions = [
  {
    title: "Երևան",
    href: "yerevan",
  },
  {
    title: "Արագածոտն",
    href: "aragatsotn",
  },
  {
    title: "Շիրակ",
    href: "shirak",
  },
  {
    title: "Լոռի",
    href: "lori",
  },
  {
    title: "Տավուշ",
    href: "tavush",
  },
  {
    title: "Գեղարքունիք",
    href: "gegharkunik",
  },
  {
    title: "Կոտայք",
    href: "kotayq",
  },
  {
    title: "Արարատ",
    href: "ararat",
  },
  {
    title: "Վայոց Ձոր",
    href: "vayotsDzor",
  },
  {
    title: "Սյունիք",
    href: "syunik",
  },
  {
    title: "Արմավիր",
    href: "armavir",
  },
];

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
  const currentUser = result;

  if (result.firstname) {
    const acc = document.querySelector(".header_login");
    acc.innerHTML = `<a  href="/profile" class="account_name">${result.firstname} ${result.lastname} </a>`;
  }

  async function getRegion(reg, loc) {
    const respons = await fetch(`/region/${reg}`);
    const result = await respons.json();
    const marzData = result;

    if (result) {
      const aboutProvince = document.getElementById("aboutProvince");
      aboutProvince.innerHTML = "";

      // տեսարժան վայրեր
      const provSightsCards = document.getElementById("provSightsCards");
      provSightsCards.innerHTML = "";

      // սնունդ
      const container = document.getElementById("foodContainer");
      container.innerHTML = "";

      // հյուրանոցներ
      const hotelsContainer = document.getElementById("hotelsContainer");
      hotelsContainer.innerHTML = "";

      // տրանսպորտ
      const transport = document.getElementById("transportContainer");
      transport.innerHTML = "";

      // մշակութային իրադարձություններ
      const cultureContainer = document.getElementById("cultureContainer");
      cultureContainer.innerHTML = "";

      // փաստեր
      const factsContainer = document.getElementById("facts-container");
      factsContainer.innerHTML = "";

      const regionsMenu = document.getElementById("prov_menu");
      regionsMenu.innerHTML = "";

      regions.forEach((region) => {
        const li = document.createElement("li");
        li.className = "prov_list";
        if (region.href === reg) {
          li.classList.add("active");
        }

        const button = document.createElement("button");
        button.textContent = region.title;

        button.addEventListener("click", () => {
          const allListItems = document.querySelectorAll(".prov_list");
          allListItems.forEach((item) => item.classList.remove("active"));

          getRegion(region.href, region.title);
          li.classList.add("active");
        });

        li.appendChild(button);
        regionsMenu.appendChild(li);
      });

      if (marzData) {
        // About
        const aboutProvince = document.getElementById("aboutProvince");
        aboutProvince.innerHTML = `
        <h2>${marzData.aboutData[0].title}</h2>
        <p>${marzData.aboutData[0].description}</p>
        <div class="about_provinces_content_info">
            <div class="box">
                <i class="fa-solid fa-map-location-dot"></i>
                <h4>Մարզկենտրոնը</h4>
                <p>${marzData.aboutData[0].center}</p>
            </div>
            <div class="box">
                <i class="fa-solid fa-chart-area"></i>
                <h4>Տարածքը</h4>
                <p>${marzData.aboutData[0].area} կմ²</p>
            </div>
            <div class="box">
                <i class="fa-solid fa-person"></i>
                <h4>Բնակչությունը</h4>
                <p>${marzData.aboutData[0].population} մարդ</p>
            </div>
            <div class="box">
                <i class="fa-solid fa-cloud-sun-rain"></i>
                <h4>Կլիման</h4>
                <p>${marzData.aboutData[0].climate}</p>
            </div>
        </div>;`;

        // Sights
        const provSightsCards = document.getElementById("provSightsCards");

        marzData.sightsCardData.forEach((card) => {
          const cardDiv = document.createElement("div");
          cardDiv.className = "provinces_sights_card";

          cardDiv.innerHTML = `
            <img src="${card.imgUrl}" alt="${card.title}">
            <div class="provinces_sights_cards_opacity">
                <a class="add_to_basket" href="#" 
                   data-type="sights" 
                   data-title="${card.title}"
                   data-description="${card.description}"
                   data-img="${card.imgUrl}">+</a>
                <div class="provinces_sights_card_content">
                    <h4>${card.title}</h4>
                    <p>${card.description}</p>
                </div>
            </div>; `;

          provSightsCards.appendChild(cardDiv);
        });

        // Food
        const container = document.getElementById("foodContainer");

        marzData.foodData.forEach((food) => {
          const card = document.createElement("div");
          card.className = "food-card";

          card.innerHTML = `
            <div class="food_img">
                <img src="${food.img}" alt="${food.name}">
            </div>
            <h1>${food.name}</h1>
            <p class="ingredients"><b>Բաղադրիչները՝</b> ${food.ingredients}</p>
            <a class="add_to_basket" href="#"
               data-type="foods"
               data-title="${food.name}"
               data-img="${food.img}"
               data-ingredients="${food.ingredients}">+</a>
        ;`;

          container.appendChild(card);
        });

        // Hotels
        const hotelsContainer = document.getElementById("hotelsContainer");

        marzData.hotelsData.forEach((hotel, index) => {
          const card = document.createElement("div");
          card.classList.add("hotels-slide");
          if (index === 0) card.classList.add("active");

          card.innerHTML = `
            <img src="${hotel.img}" alt="">
            <div class="hotels-slide_info">
                <a class="add_to_basket" href="#" 
                   data-type="hotels"
                   data-title="${hotel.title}"
                   data-img="${hotel.img}"
                   data-link="${hotel.link}">+</a>
                <div class="hotels-slide_info_content">
                    <h2>${hotel.title}</h2>
                    <a target="_blank" href="${hotel.link}">Տեսնել ավելին</a>
                </div>
            </div>;`;

          hotelsContainer.appendChild(card);
        });

        const slides = document.querySelectorAll(".hotels-slide");
        slides.forEach((slide) => {
          slide.addEventListener("click", () => {
            slides.forEach((s) => s.classList.remove("active"));
            slide.classList.add("active");
          });
        });

        // Transport
        const transport = document.getElementById("transportContainer");
        transport.innerHTML = `
        <div class="map">
            <iframe src="${marzData.transportInfo[0].map}"></iframe>
        </div>
        <div class="pt_text">
            <p>${marzData.transportInfo[0].text}</p>
            <h4>Առաջարկվող երթուղի՝</h4>
            <p class="route">${marzData.transportInfo[0].route}</p>
        </div>;`;

        // Events
        const cultureContainer = document.getElementById("cultureContainer");
        marzData.events.forEach((event) => {
          cultureContainer.innerHTML += `
            <div class="swiper-slide">
                <div class="event-card">
                    <img src="${event.imgSrc}" alt="Event Image" />
                    <div class="event-details">
                        <div class="tag">
                            <span>${event.title}</span>
                            <a class="add_to_basket" href="#"
                               data-type="events"
                               data-title="${event.title}"
                               data-img="${event.imgSrc}"
                               data-description="${event.description}"
                               data-location="${event.location}"
                               data-time="${event.time}">+</a>
                        </div>
                        <p style="margin-bottom: 10px;">${event.description}</p>
                        <p><b>Վայր:</b> ${event.location}</p>
                        <p><b>Ժամանակը:</b> ${event.time}</p>
                    </div>
                </div>
            </div>;`;
        });

        const swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        });

        // Facts
        const factsContainer = document.getElementById("facts-container");
        marzData.facts.forEach((fact) => {
          const factItem = document.createElement("div");
          factItem.className = "fact-item";
          const icon = document.createElement("div");
          icon.className = "fact-icon";
          const text = document.createElement("div");
          text.className = "fact-text";
          text.textContent = fact;
          factItem.appendChild(icon);
          factItem.appendChild(text);
          factsContainer.appendChild(factItem);
        });

        async function addToFavorites(type, data, button) {
          const email = currentUser.email;

          try {
            const response = await fetch("/addFavorite", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...data, email, type,location: loc}),
            });

            const res = await response.json();

            if (response.ok) {
              alert(res.message);
              if (button) {
                button.innerHTML = `<i class="fa-solid fa-check"></i>`;
                button.disabled = true;
              }
            } else {
              alert(res.message || "Սխալ տեղի ունեցավ։");
            }
          } catch (error) {
            console.error("Ցանցային սխալ:", error);
            alert("Չհաջողվեց կապ հաստատել սերվերի հետ։");
          }
        }

        // ▶️ Սահմանել add_to_basket կոճակների լսող և ստուգող (ռեֆրեշի պահման համար)
        document.querySelectorAll(".add_to_basket").forEach((button) => {
          const type = button.getAttribute("data-type");
          const data = {
            title: button.getAttribute("data-title"),
            description: button.getAttribute("data-description"),
            img: button.getAttribute("data-img"),
            ingredients: button.getAttribute("data-ingredients"),
            link: button.getAttribute("data-link"),
            // location: button.getAttribute("data-location"),
            location: reg.title,
            time: button.getAttribute("data-time"),
          };

          // ⏳ Ռեֆրեշի ժամանակ ստուգում, արդյոք արդեն ավելացված է
          const existing = JSON.parse(localStorage.getItem(type)) || [];
          const alreadyExists = existing.some(
            (item) => JSON.stringify(item) === JSON.stringify(data)
          );

          if (alreadyExists) {
            button.innerHTML = `<i class="fa-solid fa-check"></i>`;
            button.classList.add("added");
            button.disabled = true;
          }

          // ▶️ Սեղմման լսող
          button.addEventListener("click", function (e) {
            e.preventDefault();
            addToFavorites(type, data, this);
          });
        });
      } else {
        document.body.innerHTML = "<p>Նշված մարզը չի գտնվել։</p>";
      }
    }
  }

  getRegion("yerevan", "Երևան");
}

getCurrentUser();

// async function addToBasket(item) {
// const email = currentUser.email;

// try {
//   const response = await fetch("/addFavorite", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ ...item, email }),
//   });

//   const data = await response.json();

//   if (response.ok) {
//     alert(data.message);
//   } else {
//     alert(data.message || "Սխալ տեղի ունեցավ։");
//   }
// } catch (error) {
//   console.error("Ցանցային սխալ:", error);
//   alert("Չհաջողվեց կապ հաստատել սերվերի հետ։");
// }
// }
