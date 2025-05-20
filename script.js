// const { createElement } = require("react");

  const cardData = [
      {
          title: "Գառնիի տաճար",
          description:"Հայկական միակ հունա-հռոմեական աստվածաբառական տաճարը։ Այն տեղակայված է Գառնիի կիրճի մոտ։",
          imgUrl: "./imges/garni_sights.jpg"
      },

      {
          title: "Գեղարդի վանք",
          description:"ՅՈւՆԵՍԿՕ-ի Համաշխարհային ժառանգության ցուցակի առարկա։ Գեղարդ նշանակում է «լծակի» անունը՝ կապված Քրիստոսի խաչը հարվածելու հետ։",
          imgUrl: "./imges/geghard_sights.jpg"
      },

      {
          title: "Ծիծեռնակաբերդ",
          description:"Այս հուշարձանը հարգում է Հայոց ցեղասպանության զոհերին և գտնվում է բլուրի վրա՝ Երևանից լավ տեսարաններով։ ",
          imgUrl: "./imges/tsitsernakaberd_sights.jpg"
      },
      {
          title: "Դիլիջանի ազգային պարկ",
          description:"Հաճախ անվանում են «Շվեյցարիա Հայաստանում»՝ այն իր կանաչ անտառներով ու բնության գեղեցկությամբ։Դիլիջան քաղաքը հայտնի է իր խաղաղ մթնոլորտով և փայլուն վայրերի հայտնաբերմամբ։",
          imgUrl: "./imges/dilijan_sights.jpg"
      },

  ];

  const container = document.getElementById("sightsCards");

      cardData.forEach( card=> {
          const cta = document.createElement('div');
          cta.className = 'cta';
          
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
      description: "Արմավիրի մարզը հնագույն քրիստոնեական կենտրոններից է, որտեղ ճարտարապետությունն ու մշակույթը համադրվում են բերրի հողերի և կենսուրախ գյուղական կյանքի հետ։ Վայելիր այս մարզի շունչը մեր ընտրված պատկերաշարով։",
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
      description: "Մարզը հիանալի վայր է արշավների, աստղադիտարանի այցելությունների և պատմամշակութային հարստության բացահայտման համար։",
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
      description: "Արարատի մարզը հայտնի է իր բերրի հողերով ու խաղողի այգիներով։ Մարզը համադրում է բնությունը, հավատքը և պատմությունը։",
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
      description:"Գեղարքունիքը Սևանա լճի մարզն է՝ լեռներով շրջապատված կապույտ ակնալիճով։ Այստեղ կարելի է համտեսել թարմ սիգ, այցելել Սևանավանք և հանգստանալ լճափին։",
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
      description: "Կոտայքը զբոսաշրջության սիրված ուղղություն է՝ Գառնիի հեթանոսական տաճարով, Գեղարդի քարանձավային վանքով և Ծաղկաձորի հանգստյան գոտով։ Այստեղ բնությունն ու պատմությունը ներդաշնակ միաձուլված են։",
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
      description: "Լոռու մարզը բնության անգին գանձարան է, որտեղ կան բազմաթիվ զբոսաշրջային և պատմական վայրեր։",
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
      description: "Շիրակի մարզը հարուստ է պատմությամբ և մշակույթով, որն արտացոլվում է նրա նշանավոր քաղաքներում ու վայրերում։",
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
      description: "Սյունիքը հարուստ պատմությամբ և գեղեցիկ լեռնային բնությամբ մարզ է, որտեղ մշակույթն ու ավանդույթները պահպանվում են սերունդներից սերունդ։",
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
      description: "Տավուշի մարզը հայտնի է իր գեղեցիկ բնությամբ և պատմական վանքերով, որոնք գրավում են զբոսաշրջիկների ուշադրությունը։",
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
      description: "Վայոց Ձորը հայտնի է իր բարձրադիր լեռներով և մշակութային նշանակության վայրերով։",
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
  const descriptionElem = document.querySelector(".map_sights_map_txt .description");
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
  }

  // Հեռացնում ենք active բոլոր մարզերից
  function clearActive() {
    mapAreas.forEach(area => area.classList.remove("active"));
  }

  // Ցանկացած մարզի վրա սեղմելիս այս ֆունկցիան կչկատարվի
  mapAreas.forEach(area => {
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

// function addComment(name, comentText, imagePaths = []){
//   const reviewsContent = document.querySelector('.reviews_content');

//   const personDiv = document.createElement('div');
//   personDiv.classList.add('person_1');

//   const comentsDiv = document.createElement('div');
//   comentsDiv.classList.add('coments');
//   comentsDiv.innerHTML = ` <h4>${name }</h4>
//                            <p>${comentText}</p>`;
//   personDiv.appendChild(comentsDiv);

//   if(imagePaths.length > 0){
//     const photosDiv = document.createElement('div');
//     photosDiv.classList.add('photos');

//     imagePaths.forEach((path, i) => {
//       const imageDiv = document.createElement('div');
//       imageDiv.innerHTML = `<img src="${path}" alt="">`;
      
//       photosDiv.appendChild(imageDiv);
//     });

//     personDiv.appendChild(photosDiv);
//   }

//   reviewsContent.appendChild(personDiv);
// }

// addComment(
//   "Աննա",
//     "Սիրեցի այս ճամփորդությունը",
//     ["./imges/Gallery/img_1.jpg", "./imges/Gallery/img_14.jpg", "./imges/Gallery/img_11.jpg"]
// );

//function addComment(name, commentText, imagePaths = []) {
  //   const reviewsContainer = document.querySelector('.reviews_content');

  //   // Ստեղծում ենք comment-ի HTML-ը
  //   const personDiv = document.createElement('div');
  //   personDiv.classList.add('person_1');

  //   const commentDiv = document.createElement('div');
  //   commentDiv.classList.add('coments');
  //   commentDiv.innerHTML = `<h4 class="name">${name}</h4><p>${commentText}</p>`;
  //   personDiv.appendChild(commentDiv);

  //   // Եթե կան նկարներ
  //   if (imagePaths.length > 0) {
  //     const photosDiv = document.createElement('div');
  //     photosDiv.classList.add('photos');

  //     imagePaths.forEach((path, i) => {
  //       const imgDiv = document.createElement('div');
  //       imgDiv.classList.add(`img${i + 1}`);
  //       imgDiv.innerHTML = `<img src="${path}" alt="">`;
  //       photosDiv.appendChild(imgDiv);
  //     });

  //     personDiv.appendChild(photosDiv);
  //   }

  //   // Ավելացնում ենք դեպի վերևում (եթե ուզում ես նորերը վերևում երևան՝ օգտագործի insertBefore)
  //   reviewsContainer.insertBefore(personDiv, reviewsContainer.firstChild);

  // }

  // // Օրինակ՝ մեկ մեկնաբանություն ավելացնելիս
  // addComment(
  //   "Աննա",
  //   "Սիրեցի այս ճամփորդությունը",
  //   ["./imges/Gallery/img_1.jpg", "./imges/Gallery/img_14.jpg", "./imges/Gallery/img_11.jpg"]
  // );

  const reviewsContent = [
    {
      name: "Աննա",
      comentText: "Հրաշալի է, հիասքանչ է",
      img1: "./imges/Gallery/img_1.jpg",
      img2: "./imges/Gallery/img_1.jpg",
      img3: "./imges/Gallery/img_1.jpg"
    },
      {
    name: "Գոհար",
    comentText: "Լավ էլ երկար գործ էր, լրիվ 300,000 դրամանոց",
    img1: "./imges/Gallery/img_2.jpg",
    img2: "./imges/Gallery/img_3.jpg",
    img3: "./imges/Gallery/img_4.jpg"
  },
   {
    name: "Գոհար",
    comentText: "Լավ էլ երկար գործ էր, լրիվ 300,000 դրամանոց",
    img1: "./imges/Gallery/img_2.jpg",
    img2: "./imges/Gallery/img_3.jpg",
    img3: "./imges/Gallery/img_4.jpg"
  },
   {
    name: "Գոհար",
    comentText: "Լավ էլ երկար գործ էր, լրիվ 300,000 դրամանոց",
   
  },
   {
    name: "Գոհար",
    comentText: "Լավ էլ երկար գործ էր, լրիվ 300,000 դրամանոց",
   
  },
   {
    name: "Գոհար",
    comentText: "Լավ էլ երկար գործ էր, լրիվ 300,000 դրամանոց",
    img1: "./imges/Gallery/img_2.jpg",
    img2: "./imges/Gallery/img_3.jpg",
    img3: "./imges/Gallery/img_4.jpg"
  },
  ]

 const reviewsContainer = document.querySelector('.reviews_content');
reviewsContainer.innerHTML = ''; 

reviewsContent.forEach(el => {
  const personDiv = document.createElement('div');
  personDiv.classList.add('person_1');
  personDiv.innerHTML = `
    <div class="coments">
      <h4 class="name">${el.name}</h4>
      <p>${el.comentText}</p>
    </div>
    <div class="photos">
      <div class="img1"><img src="${el.img1}" alt="${el.name} photo 1"></div>
      <div class="img2"><img src="${el.img2}" alt="${el.name} photo 2"></div>
      <div class="img3"><img src="${el.img3}" alt="${el.name} photo 3"></div>
    </div>
  `;
  reviewsContainer.appendChild(personDiv);
});