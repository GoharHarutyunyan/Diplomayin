window.addEventListener("DOMContentLoaded", () => {
  let  currentUser = {}

    async function getCurrentUser() {
    const respons = await fetch("/currentUser");
    const result = await respons.json();
    currentUser = result

    if (result.firstname) {
      const acc = document.querySelector(".header_login");
      acc.innerHTML = `<a  href="/profile" class="account_name">${result.firstname} ${result.lastname} </a>`;
    }
  }

  getCurrentUser();



  async function addToBasket(item) {
   
    const email = currentUser.email;

    try {
      const response = await fetch("/addFavorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...item, email }),
      });


      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message || "Սխալ տեղի ունեցավ։");
      }
    } catch (error) {
      console.error("Ցանցային սխալ:", error);
      alert("Չհաջողվեց կապ հաստատել սերվերի հետ։");
    }
  }

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

  const regionsMenu = document.getElementById("prov_menu");

  regions.forEach((reg) => {
    const li = document.createElement("li");
    li.className = "prov_list";

    const button = document.createElement("button");
    button.textContent = reg.title;

    button.addEventListener("click", () => {
      getRegion(reg.href, reg.title);
    });

    li.appendChild(button);
    regionsMenu.appendChild(li);
  });

  async function getRegion(reg, loc) {
    const respons = await fetch(`/region/${reg}`);
    const result = await respons.json();

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

      //about
      // const aboutProvince = document.getElementById("aboutProvince");

      aboutProvince.innerHTML = `
                         <h2>${result.aboutData[0].title}</h2>
                    <p> ${result.aboutData[0].description}</p>
                    <div class="about_provinces_content_info">
                        <div class="box">
                            <i class="fa-solid fa-map-location-dot"></i>
                            <h4>Մարզկենտրոնը</h4>
                            <p>${result.aboutData[0].center}</p>
                        </div>
                        <div class="box">
                            <i class="fa-solid fa-chart-area"></i>
                            <h4>Տարածքը</h4>
                            <p>${result.aboutData[0].area}կմ²</p>
                        </div>
                        <div class="box">
                            <i class="fa-solid fa-person"></i>
                            <h4>Բնակչությունը</h4>
                            <p> ${result.aboutData[0].population}մարդ</p>
                        </div>
                        <div class="box">
                            <i class="fa-solid fa-cloud-sun-rain"></i>
                            <h4>Կլիման</h4>
                            <p>${result.aboutData[0].climate}</p>
                        </div>
                    </div>`;
      SightsCards = document.getElementById("provSightsCards");

      result.sightsCardData.forEach((card) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "provinces_sights_card";

        cardDiv.innerHTML = `
  <img src="${card.imgUrl}" alt="${card.title}">
  <div class="provinces_sights_cards_opacity">
    <div class="provinces_sights_card_content">
      <h4>${card.title}</h4>
      <p>${card.description}</p>
    </div>
  </div>
`;

        const button = document.createElement("button");
        button.classList.add("add_to_basket");
        button.textContent = "+";

        button.addEventListener("click", () => {
          addToBasket({
            ...card,
            location: loc,
            id: new Date().getTime(),
          });
        });

        const opacityDiv = cardDiv.querySelector(
          ".provinces_sights_cards_opacity"
        );
        opacityDiv.insertBefore(button, opacityDiv.firstChild);

        provSightsCards.appendChild(cardDiv);
      });

      result.foodData.forEach((food) => {
        const card = document.createElement("div");
        card.className = "food-card";

        card.innerHTML = `
  <div class="food_img">
    <img src="${food.img}" alt="${food.name}">
  </div>
  <h1>${food.name}</h1>
  <p class="ingredients"><b>Բաղադրիչները՝</b> ${food.ingredients}</p>
  <button class="orange_btn">Ավելացնել փորձելու</button>
`;

        const button = card.querySelector("button");

        button.addEventListener("click", () => {
          addToBasket({
            ...food,
            location: loc,
          });
        });

        container.appendChild(card);
      });

      result.hotelsData.forEach((hotel, index) => {
        const card = document.createElement("div");
        card.classList.add("hotels-slide");
        if (index === 0) card.classList.add("active");

        card.innerHTML = `
  <img src="${hotel.img}" alt="">
  <div class="hotels-slide_info">
      <button class="add_to_basket">+</button>
      <div class="hotels-slide_info_content">
          <h2>${hotel.title}</h2>
          <a target='_blank' href="${hotel.link}">Տեսնել ավելին</a>
      </div>
  </div>
`;

        // Քաշում ենք կոճակը և ավելացնում գործողություն
        const addButton = card.querySelector(".add_to_basket");
        addButton.addEventListener("click", () => {
          addToBasket({
            ...hotel,
            location: loc,
          });
        });

        hotelsContainer.appendChild(card);
      });

      const slides = document.querySelectorAll(".hotels-slide");

      slides.forEach((slide) => {
        slide.addEventListener("click", () => {
          slides.forEach((s) => s.classList.remove("active"));
          slide.classList.add("active");
        });
      });

      transport.innerHTML = `
                    <div class="map">
                        <iframe src="${result.transportInfo[0].map}"></iframe>
                    </div>
                    <div class="pt_text">
                        <p>${result.transportInfo[0].text}</p>
                        <h4>Առաջարկվող երթուղի՝</h4>
                        <p class="route"> ${result.transportInfo[0].route}</p>
                    </div>`;

      result.events.forEach((event) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        slide.innerHTML = `
  <div class="event-card">
    <img src="${event.imgSrc}" alt="Event Image" />
    <div class="event-details">
      <div class="tag">
        <span>${event.title}</span> 
        <a class="add_to_basket" href="#">+</a>
      </div>
      <p style="margin-bottom: 10px;">${event.description}</p>
      <p><b>Վայր:</b> ${event.location}</p>
      <p><b>Ժամանակը:</b> ${event.time}</p>
    </div>
  </div>
`;

        const addButton = slide.querySelector(".add_to_basket");
        addButton.addEventListener("click", (e) => {
          e.preventDefault(); // որպեսզի չվերուղորդի
          addToBasket({
            ...event,
            location: loc,
          });
        });

        cultureContainer.appendChild(slide);
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

      result.facts.forEach((fact) => {
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
    } else {
      document.body.innerHTML = "<p>Նշված մարզը չի գտնվել։</p>";
    }
  }

  getRegion("yerevan", "Երևան");
});
