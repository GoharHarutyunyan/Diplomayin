

async function getCurrentUser() {
  
  const respons = await fetch("/currentUser");
  const result = await respons.json();
  console.log('result:', result)
  
  if (result.name) {
    const acc =  document.querySelector(".header_login")
    acc.innerHTML = `<a  href="/profile" class="account_name">${result.name} ${result.lastname} </a>`;
  }
}

getCurrentUser();


//conditions.......................................
// ամիս ամսաթիվ



const dateElement = document.getElementById("current-date");
const now = new Date();
const options = { day: "numeric", month: "long", year: "numeric" };
dateElement.textContent = now.toLocaleDateString("en-US", options);

// եղանակ
const apiKey = "cd70c1871e11e23de6e61e25edadeccc";
const city = "Yerevan";
async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Weather fetch failed: " + response.status);
    }

    const data = await response.json();

    if (data.main && typeof data.main.temp !== "undefined") {
      const temperature = Math.round(data.main.temp);
      document.getElementById("weather").textContent = `${temperature}°C`;
    } else {
      document.getElementById("weather").textContent = "Եղանակ չկա";
    }
  } catch (error) {
    console.error("Weather fetch error:", error);
    weatherElement.textContent = "Սխալ";
  }
}

// Կանչել ֆունկցիան
fetchWeather();
const cardData = [
  {
    title: "Գառնիի տաճար",
    description:
      "Հայկական միակ հունա-հռոմեական աստվածաբառական տաճարը։ Այն տեղակայված է Գառնիի կիրճի մոտ։",
    imgUrl: "./imges/home_popular_sights/garni_sights.jpg",
  },

  {
    title: "Գեղարդի վանք",
    description:
      "ՅՈւՆԵՍԿՕ-ի Համաշխարհային ժառանգության ցուցակի առարկա։ Գեղարդ նշանակում է «լծակի» անունը՝ կապված Քրիստոսի խաչը հարվածելու հետ։",
    imgUrl: "./imges/home_popular_sights/geghard_sights.jpg",
  },

  {
    title: "Ծիծեռնակաբերդ",
    description:
      "Այս հուշարձանը հարգում է Հայոց ցեղասպանության զոհերին և գտնվում է բլուրի վրա՝ Երևանից լավ տեսարաններով։ ",
    imgUrl: "./imges/home_popular_sights/tsitsernakaberd_sights.jpg",
  },
  {
    title: "Դիլիջանի ազգային պարկ",
    description:
      "Հաճախ անվանում են «Շվեյցարիա Հայաստանում»՝ այն իր կանաչ անտառներով ու բնության գեղեցկությամբ։Դիլիջան քաղաքը հայտնի է իր խաղաղ մթնոլորտով և փայլուն վայրերի հայտնաբերմամբ։",
    imgUrl: "./imges/home_popular_sights/dilijan_sights.jpg",
  },
  {
    title: "Տաթևի վանք",
    description:
      "Միջնադարյան վանական համալիր Կապան գետի կիրճում, հայտնի աշխարհի ամենաերկար «Տաթևի թևեր» ճոպանուղով։",
    imgUrl: "./imges/home_popular_sights/tatev_sights.jpg",
  },
];

const container = document.getElementById("sightsCards");

cardData.forEach((card) => {
  const cta = document.createElement("div");
  cta.className = "cta";

  cta.innerHTML = `
          <img src="${card.imgUrl}" alt="">
              <div class="text">
                  <h2>${card.title}</h2>
                  <p>${card.description}</p>
              </div>`;

  container.appendChild(cta);
});

/////////////////////HOME MAP/////////////////////////////////////////////////
// Գլոբալ օբյեկտ մարզերի տվյալներով
const regionsData = {
  armavir: {
    name: "Արմավիրի Մարզ",
    center: "Արմավիր",
    population: "259,400",
    area: "1,242",
    description:
      "Արմավիրի մարզը հնագույն քրիստոնեական կենտրոններից է, որտեղ ճարտարապետությունն ու մշակույթը համադրվում են բերրի հողերի և կենսուրախ գյուղական կյանքի հետ։ Վայելիր այս մարզի շունչը մեր ընտրված պատկերաշարով։",
    images: [
      "./imges/home_map/armavir_img1.png",
      "./imges/home_map/armavir_img2.png",
      "./imges/home_map/armavir_img3.png",
      "./imges/home_map/armavir_img4.png",
      "./imges/home_map/armavir_img5.png",
    ],
  },
  aragatsotn: {
    name: "Արագածոտնի Մարզ",
    center: "Աշտարակ",
    population: "131500",
    area: "2,756",
    description:
      "Մարզը հիանալի վայր է արշավների, աստղադիտարանի այցելությունների և պատմամշակութային հարստության բացահայտման համար։",
    images: [
      "./imges/home_map/aragatsotn_img1.jpg",
      "./imges/home_map/aragatsotn_img2.jpg",
      "./imges/home_map/aragatsotn_img3.jpg",
      "./imges/home_map/aragatsotn_img4.jpg",
      "./imges/home_map/aragatsotn_img5.jpg",
    ],
  },
  ararat: {
    name: "Արարատի Մարզ",
    center: "Արտաշատ",
    population: "255,800",
    area: "2,096",
    description:
      "Արարատի մարզը հայտնի է իր բերրի հողերով ու խաղողի այգիներով։ Մարզը համադրում է բնությունը, հավատքը և պատմությունը։",
    images: [
      "./imges/home_map/ararat_img1.jpg",
      "./imges/home_map/ararat_img2.jpg",
      "./imges/home_map/ararat_img3.jpg",
      "./imges/home_map/ararat_img4.jpg",
      "./imges/home_map/ararat_img5.jpg",
    ],
  },
  gegharkunik: {
    name: "Գեղարքունիքի Մարզ",
    center: "Գավառ",
    population: "213,200",
    area: "5,349",
    description:
      "Գեղարքունիքը Սևանա լճի մարզն է՝ լեռներով շրջապատված կապույտ ակնալիճով։ Այստեղ կարելի է համտեսել թարմ սիգ, այցելել Սևանավանք և հանգստանալ լճափին։",
    images: [
      "./imges/home_map/gegharkunik_img1.jpg",
      "./imges/home_map/gegharkunik_img2.jpg",
      "./imges/home_map/gegharkunik_img3.jpg",
      "./imges/home_map/gegharkunik_img4.jpg",
      "./imges/home_map/gegharkunik_img5.jpg",
    ],
  },
  kotayq: {
    name: "Կոտայքի Մարզ",
    center: "Հրազդան",
    population: "278,000",
    area: "2,086",
    description:
      "Կոտայքը զբոսաշրջության սիրված ուղղություն է՝ Գառնիի հեթանոսական տաճարով, Գեղարդի քարանձավային վանքով և Ծաղկաձորի հանգստյան գոտով։ Այստեղ բնությունն ու պատմությունը ներդաշնակ միաձուլված են։",
    images: [
      "./imges/home_map/kotayq_img1.jpg",
      "./imges/home_map/kotayq_img2.jpg",
      "./imges/home_map/kotayq_img3.jpg",
      "./imges/home_map/kotayq_img4.jpg",
      "./imges/home_map/kotayq_img5.jpg",
    ],
  },
  lori: {
    name: "Լոռու Մարզ",
    center: "Վանաձոր",
    population: "225,300",
    area: "3,799",
    description:
      "Լոռու մարզը բնության անգին գանձարան է, որտեղ կան բազմաթիվ զբոսաշրջային և պատմական վայրեր։",
    images: [
      "./imges/home_map/lori_img1.jpg",
      "./imges/home_map/lori_img2.jpg",
      "./imges/home_map/lori_img3.jpg",
      "./imges/home_map/lori_img4.jpg",
      "./imges/home_map/lori_img5.jpg",
    ],
  },

  shirak: {
    name: "Շիրակի Մարզ",
    center: "Գյումրի",
    population: "237,900",
    area: "2,680",
    description:
      "Շիրակի մարզը հարուստ է պատմությամբ և մշակույթով, որն արտացոլվում է նրա նշանավոր քաղաքներում ու վայրերում։",
    images: [
      "./imges/home_map/shirak_img1.jpg",
      "./imges/home_map/shirak_img2.jpg",
      "./imges/home_map/shirak_img3.jpg",
      "./imges/home_map/shirak_img4.jpg",
      "./imges/home_map/shirak_img5.jpg",
    ],
  },
  syunik: {
    name: "Սյունիքի Մարզ",
    center: "Կապան",
    population: "119,500",
    area: "4,506",
    description:
      "Սյունիքը հարուստ պատմությամբ և գեղեցիկ լեռնային բնությամբ մարզ է, որտեղ մշակույթն ու ավանդույթները պահպանվում են սերունդներից սերունդ։",
    images: [
      "./imges/home_map/syunik_img1.jpg",
      "./imges/home_map/syunik_img2.jpg",
      "./imges/home_map/syunik_img3.jpg",
      "./imges/home_map/syunik_img4.jpg",
      "./imges/home_map/syunik_img5.jpg",
    ],
  },
  tavush: {
    name: "Տավուշի Մարզ",
    center: "Իջևան",
    population: "117,100",
    area: "2,704",
    description:
      "Տավուշի մարզը հայտնի է իր գեղեցիկ բնությամբ և պատմական վանքերով, որոնք գրավում են զբոսաշրջիկների ուշադրությունը։",
    images: [
      "./imges/home_map/tavush_img1.jpg",
      "./imges/home_map/tavush_img2.jpg",
      "./imges/home_map/tavush_img3.jpg",
      "./imges/home_map/tavush_img4.jpg",
      "./imges/home_map/tavush_img5.jpg",
    ],
  },

  vayots_dzor: {
    name: "Վայոց Ձորի Մարզ",
    center: "Եղեգնաձոր",
    population: "49,000",
    area: "2,308",
    description:
      "Վայոց Ձորը հայտնի է իր բարձրադիր լեռներով և մշակութային նշանակության վայրերով։",
    images: [
      "./imges/home_map/vayots_dzor_img1.jpg",
      "./imges/home_map/vayots_dzor_img2.jpg",
      "./imges/home_map/vayots_dzor_img3.jpg",
      "./imges/home_map/vayots_dzor_img4.jpg",
      "./imges/home_map/vayots_dzor_img5.jpg",
    ],
  },

  yerevan: {
    name: "Երևան",
    center: "Երևան ",
    population: "1,127,000",
    area: "223",
    description: "Հայաստանի մայրաքաղաք՝ տնտեսական և մշակութային կենտրոն։",
    images: [
      "./imges/home_map/yerevan_img1.jpg",
      "./imges/home_map/yerevan_img2.jpg",
      "./imges/home_map/yerevan_img3.jpg",
      "./imges/home_map/yerevan_img4.jpg",
      "./imges/home_map/yerevan_img5.jpg",
    ],
  },
};

// Ընտրում ենք DOM էլեմենտները
const mapAreas = document.querySelectorAll(".interactive-map .map_area");
const titleElem = document.querySelector(".map_sights_map_txt h4");
const centerElem = document.querySelector(".prov_center");
const populationElem = document.querySelector(" .population");
const areaElem = document.querySelector(".area");
const descriptionElem = document.querySelector(
  ".map_sights_map_txt .description"
);
const galleryElems = document.querySelectorAll(".grid_gallery > div");

// Ֆունկցիա թարմացնելու ինֆոն աջ կողմում
function updateInfo(regionKey) {
  const data = regionsData[regionKey];
  if (!data) return;

  titleElem.textContent = data.name;
  centerElem.textContent = data.center;
  populationElem.textContent = data.population;
  areaElem.textContent = data.area;
  descriptionElem.textContent = data.description;

  // Թարմացնում ենք նկարչապատկերը՝ ըստ ինդեքսի
  galleryElems.forEach((elem, idx) => {
    if (data.images[idx]) {
      elem.style.backgroundImage = `url(${data.images[idx]})`;
    } else {
      elem.style.backgroundImage = "none";
    }
  });

  const linkElem = document.querySelector(".province-link");
  if (linkElem) {
    linkElem.href = `provinces.html?marz=${regionKey}`;
  }
}

// Հեռացնում ենք active բոլոր մարզերից
function clearActive() {
  mapAreas.forEach((area) => area.classList.remove("active"));
}

// Ցանկացած մարզի վրա սեղմելիս այս ֆունկցիան կչկատարվի
mapAreas.forEach((area) => {
  area.addEventListener("click", () => {
    const regionKey = area.dataset.region;
    if (!regionKey) return;

    clearActive();
    area.classList.add("active");
    updateInfo(regionKey);
  });
});

updateInfo("armavir");

// reviews/////////////////////////////////////////////////////

const reviewsContent = [
  {
    name: "Գոհար",
    commentText:
      "Բարի գալուստ իմ ստեղծած տուրիզմի կայք։ Ես՝ Գոհարս, մեծ սիրով եմ այս նախագիծը իրականացրել՝ նպատակ ունենալով բացահայտել Հայաստանի հրաշալի վայրերը, ազգային արժեքները և առաջարկել օգտակար տեղեկատվություն բոլոր նրանց, ովքեր ցանկանում են ճանաչել մեր երկիրը։ Շնորհակալություն, որ այցելել եք։ Հուսով եմ՝ այստեղ կգտնեք այն ամենը, ինչ փնտրում եք։",
  },
  {
    name: "Աննա",
    commentText:
      "Շատ տեղեկատվական կայք է։ Արձակուրդից առաջ կարողացա հեշտությամբ գտնել տեղեկություն Հայաստանի մարզերի, տեսարժան վայրերի և ազգային ուտեստների մասին։",
    img1: "./imges/comments/anna_img.jpg",
    img2: "./imges/comments/anna_img2.jpg",
  },
  {
    name: "Արայիկ",
    commentText: "Ինտերակտիվ քարտեզը շատ լավն էր։",
  },
  {
    name: "Լիլիա",
    commentText:
      "Երբեք չէի լսել Տաթևի մասին մինչև այս կայքը։ Հիմա ուզում եմ անպայման այցելել։ Ուրախ եմ, որ կան նման հարթակներ։",
    img1: "./imges/comments/lilia_img.jpg",
    img2: "./imges/comments/lilia_img2.jpg",
    img3: "./imges/comments/lilia_img3.jpg",
  },
];

//  const reviewsContainer = document.querySelector('.reviews_content');
// reviewsContainer.innerHTML = '';

// reviewsContent.forEach(el => {
//   const personDiv = document.createElement('div');
//   personDiv.classList.add('person_1');
//   personDiv.innerHTML = `
//     <div class="coments">
//       <h4 class="name">${el.name}</h4>
//       <p>${el.comentText}</p>
//     </div>
//     <div class="photos">
//       <div class="img1"><img src="${el.img1}" alt="${el.name} photo 1"></div>
//       <div class="img2"><img src="${el.img2}" alt="${el.name} photo 2"></div>
//       <div class="img3"><img src="${el.img3}" alt="${el.name} photo 3"></div>
//     </div>
//   `;
//   reviewsContainer.appendChild(personDiv);
// });

const reviewsContainer = document.querySelector(".reviews_content");
reviewsContainer.innerHTML = "";

reviewsContent.forEach((el) => {
  const personDiv = document.createElement("div");
  personDiv.classList.add("person_1");

  // Հաշվել նկարների քանակը
  let imageCount = 0;
  if (el.img1) imageCount++;
  if (el.img2) imageCount++;
  if (el.img3) imageCount++;

  // Ստեղծել քոմենտի դիվը
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comments");

  // Լայնության class ավելացնել՝ ըստ նկարների քանակի
  if (imageCount === 0) {
    commentDiv.classList.add("none");
  } else if (imageCount === 1) {
    commentDiv.classList.add("one");
  } else if (imageCount === 2) {
    commentDiv.classList.add("two");
  } else {
    commentDiv.classList.add("three");
  }

  commentDiv.innerHTML = `
    <h4 class="name">${el.name}</h4>
    <p>${el.commentText}</p>
  `;

  personDiv.appendChild(commentDiv);

  // Ստեղծել նկարների դիվը, եթե առնվազն մեկը կա
  if (imageCount > 0) {
    const photosDiv = document.createElement("div");
    photosDiv.classList.add("photos");

    if (el.img1) {
      photosDiv.innerHTML += `<div class="img1"><img src="${el.img1}" alt="${el.name} photo 1"></div>`;
    }
    if (el.img2) {
      photosDiv.innerHTML += `<div class="img2"><img src="${el.img2}" alt="${el.name} photo 2"></div>`;
    }
    if (el.img3) {
      photosDiv.innerHTML += `<div class="img3"><img src="${el.img3}" alt="${el.name} photo 3"></div>`;
    }

    personDiv.appendChild(photosDiv);
  }

  reviewsContainer.appendChild(personDiv);
});
