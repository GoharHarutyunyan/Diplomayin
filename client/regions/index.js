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
      title: "Հապալասի փառատոն",
      description: "Փառատոնի նպատակն է գյուղում խթանել հապալասի մշակումը և էկոտուրիզմի զարգացումը։ Բացի հապալասը համտեսելուց այցելուները կվայելեն արևոտ գյուղական օրը, կենդանի երաժշտությունը, կմասնակցեն խաղերի և վարպետաց դասերի։",
      location: "Մարգահովիտ",
      time: "Հուլիսի 31",
      imgSrc: "/assets/images/Lori/culture/hapalas.jpg"
    },
    {
    title: "Ուտելի բույսերի փառատոն",
    description: "Փառատոնը լի է ցուցահանդեսներով, տարածաշրջանի ուտելի բույսերով պատրաստված ավանդական ճաշատեսակների համտեսներով, ներկայացումներով, երաժշտական և պարային ծրագրերով և ավանդական հայկական խաղերով:",
    location: "Դսեղ",
    time: "10 Հուլիս, 2021",
    imgSrc: "/assets/images/Lori/culture/buyseri.jpeg"
  },
  
    ],
    facts: [
       "Ճարտարապետության մեջ մեծ նշանակություն ունի Զվարթնոց տաճարը։",
  "Մեքսիկայում կա մի հայտնի այգի կառույցներով, որոնք հիշեցնում են կորուսված քաղաքակրթություններ։",
  "Արմենիան և Մեքսիկան՝ երկու աշխարհագրական վայրեր, ունեն մի ֆենոմեն հիշողության և խորհրդավորության միջև։"
    ]
  },
   // tavush/////////////////
tavush: {
    aboutData: [
        {
        title: "Տավուշի Մարզ",
        description: " Տավուշի մարզը գտնվում է Հայաստանի հյուսիսարևելքում։ Տարածքը հայտնի է իր անտառներով, գետերով և լեռնային բնությամբ։ Մարզը սահմանակից է Վրաստանին և Ադրբեջանին։",
        center:"Իջևան",
        area:" 2,704 ",
        population: "117,100",
        climate: "Մեղմ, խոնավ",
        
    },
    ],
    sightsCardData: [
      {
    "imgUrl": "/assets/images/Tavush/attractions/haghartsin.jpg",
    "title": "Հաղարծինի վանք",
    "description": "10-13-րդ դարերի վանական համալիր՝ բաղկացած երեք եկեղեցիներից, երկու գավիթից, սեղանատնից և խաչքարերից։ Գտնվում է Դիլիջանից 18 կմ հեռավորության վրա։"
  },
  {
    "imgUrl": "/assets/images/Tavush/attractions/goshavank.jpg",
    "title": "Գոշավանք",
    "description": "Միջնադարյան վանական համալիր՝ հիմնադրված 12-13-րդ դարերում Մխիթար Գոշի կողմից։ Գտնվում է Գոշ գյուղում՝ Գետիկ գետի աջ ափին։"
  },
  {
    "imgUrl": "/assets/images/Tavush/attractions/makaravank.jpg",
    "title": "Մակարավանք",
    "description": "13-րդ դարի հայկական վանական համալիր՝ տեղակայված Աչաջուր գյուղից 3 կմ հարավ-արևմուտք՝ Պայտաթափ լեռան լանջին։"
  },
  {
    "imgUrl": "/assets/images/Tavush/attractions/matosavank.jpg",
    "title": "Մաթոսավանք",
    "description": "13-րդ դարի վանական համալիր՝ բաղկացած փոքր եկեղեցիներից, գավթից և գրատնից։ Գտնվում է Դիլիջանից 4 կմ արևմուտք։"
  },
  {
    "imgUrl": "/assets/images/Tavush/attractions/parz_lake.jpg",
    "title": "Պարզ լիճ",
    "description": "Լիճ՝ տեղակայված Դիլիջանից 9 կմ հյուսիս-արևելք՝ 1350 մ բարձրության վրա։ Շրջապատված է անտառներով և հայտնի է իր գեղեցիկ բնությամբ։"
  },
  {
    "imgUrl": "/assets/images/Tavush/attractions/berdavan_fortress.jpg",
    "title": "Բերդավան ամրոց",
    "description": "10-11-րդ դարերի ամրոց՝ վերականգնված 17-րդ դարում։ Գտնվում է Տավուշի մարզում՝ հայ-ադրբեջանական սահմանից մոտ։"
  },
  {
    "imgUrl": "/assets/images/Tavush/attractions/lastiver.jpg",
    "title": "Լաստիվեր",
    "description": "Բնության գեղատեսիլ վայր՝ հայտնի իր անտառներով, քարանձավներով և արկածային տուրիզմի հնարավորություններով։"
  }
    
    ],
    foodData: [
       {
    img: "/assets/images/Tavush/food/uduli.jpg",
    name: "Ուդուլի",
    ingredients: "Ձավար, սոխ, տոմատ, բուսայուղ, համեմունքներ"
  },
  {
    img: "/assets/images/Tavush/food/hapama.jpg",
    name: "Հափամա",
    ingredients: "Դդում, բրինձ, չրեր, ընկույզ, մեղր"
  },
  {
    img: "/assets/images/Tavush/food/tanapur.jpg",
    name: "Թանապուր",
    ingredients: "Թան, բրինձ կամ ցորեն, ձու, մածուն, համեմունքներ"
  },
  {
    img: "/assets/images/Tavush/food/pasuts-dolma.jpg",
    name: "Բուսական տոլմա",
    ingredients: "Բրինձ, սոխ, կանաչի, ձեթ, խաղողի տերև"
  }
  
    ],
    hotelsData: [
      {
    img: "/assets/images/Tavush/hotels/apaga.jpg",
    title: "Apaga Resort",
    link: "https://www.booking.com/hotel/am/apaga-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55593404791%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324870&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748070593&srpvid=e26e325ce32e020e&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/Tavush/hotels/apaga.jpg",
    title: "Apaga Resort",
    link: "https://www.booking.com/hotel/am/apaga-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55593404791%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324870&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748070593&srpvid=e26e325ce32e020e&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/Tavush/hotels/apaga.jpg",
    title: "Apaga Resort",
    link: "https://www.booking.com/hotel/am/apaga-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55593404791%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324870&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748070593&srpvid=e26e325ce32e020e&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/Tavush/hotels/apaga.jpg",
    title: "Apaga Resort",
    link: "https://www.booking.com/hotel/am/apaga-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55593404791%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324870&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748070593&srpvid=e26e325ce32e020e&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/Tavush/hotels/apaga.jpg",
    title: "Apaga Resort",
    link: "https://www.booking.com/hotel/am/apaga-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55593404791%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324870&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748070593&srpvid=e26e325ce32e020e&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/Tavush/hotels/apaga.jpg",
    title: "Apaga Resort",
    link: "https://www.booking.com/hotel/am/apaga-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55593404791%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324870&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748070593&srpvid=e26e325ce32e020e&type=total&ucfs=1&"
  },
  
    ],
    transportInfo: [
      {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1466196.31691123!2d43.8677108030294!3d40.96544605834692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041acc7c547bf23%3A0x6029d9993acafd22!2sTavush%20Province!5e1!3m2!1sen!2sam!4v1748070703982!5m2!1sen!2sam",
    text: "Երևանից Տավուշ մարզ կարելի է հասնել ավտոբուսներով կամ միկրոավտոբուսներով՝ Աբովյան, Իջևան և Դիլիջան քաղաքների միջով։ Ճանապարհը տևում է մոտ 3-3.5 ժամ։",
    route: "Երևան → Աբովյան → Դիլիջան → Իջևան → Տավուշ մարզ"
}
],
    events: [
    {
  title: "Դիլիջանի արվեստների փառատոն",
  description: "Արվեստների և նկարիչների փառատոն, որը անցկացվում է Տավուշի մարզի Դիլիջան քաղաքում։",
  location: "Դիլիջան",
  time: "Օգոստոս",
  imgSrc: "/assets/images/Tavush/culture/dilijan_art_festival.jpg"
},
{
  title: "Բերդի հին ավանդույթների տոն",
  description: "Տեղական ավանդույթների վերականգնման և մշակութային ժառանգության պահպանման տոն։",
  location: "Բերդ",
  time: "Հունիս",
  imgSrc: "/assets/images/Tavush/culture/berd_festival.jpg"
},
{
  title: "Բերդի հին ավանդույթների տոն",
  description: "Տեղական ավանդույթների վերականգնման և մշակութային ժառանգության պահպանման տոն։",
  location: "Բերդ",
  time: "Հունիս",
  imgSrc: "/assets/images/Tavush/culture/berd_festival.jpg"
},

{
  title: "Բերդի հին ավանդույթների տոն",
  description: "Տեղական ավանդույթների վերականգնման և մշակութային ժառանգության պահպանման տոն։",
  location: "Բերդ",
  time: "Հունիս",
  imgSrc: "/assets/images/Tavush/culture/berd_festival.jpg"
},

{
  title: "Բերդի հին ավանդույթների տոն",
  description: "Տեղական ավանդույթների վերականգնման և մշակութային ժառանգության պահպանման տոն։",
  location: "Բերդ",
  time: "Հունիս",
  imgSrc: "/assets/images/Tavush/culture/berd_festival.jpg"
},



    
  
    ],
    facts: [
     "Տավուշի մարզը համարվում է Հայաստանի կանաչապատ և անտառապատ մարզերից մեկը՝ հարուստ բուսականությամբ ու կենդանական աշխարհով։",
  "Այստեղ է գտնվում Տավուշի պետական արգելոցը, որտեղ պահպանվում են եզակի բույսեր և կենդանիներ։",
  "Տավուշը նաև հայտնի է իր ամրոցներով ու միջնադարյան եկեղեցիներով, ինչպես Նոյանի ամրոցը և Աննա Նոյան եկեղեցին։",
    ]
  },
  

   // gegharkunik/////////////////
gegharkunik: {
    aboutData: [
        {
        title: "Գեղարքունիքի Մարզ",
        description: " Գեղարքունիքի մարզը գտնվում է Հայաստանի արևելքում։ Մարզի տարածքի մեծ մասը զբաղեցնում է Սևանա լիճը՝ Հայաստանի ամենամեծ ջրային ավազանը։ Տարածքը հայտնի է իր ձկնորսությամբ և զբոսաշրջությամբ։",
        center:"Գավառ",
        area:"5,349 ",
        population: " 213,200",
        climate: " Լեռնային, ցուրտ ձմեռներով և զով ամառներով",
        
    },
    ],
    sightsCardData: [
     {
    "imgUrl": "/assets/images/Gegharkunik/attractions/sevan_lake.png",
    "title": "Սևանա լիճ",
    "description": "Հայաստանի ամենամեծ քաղցրահամ լիճը՝ տեղակայված ծովի մակարդակից 1916 մ բարձրության վրա։"
  },
  {
    "imgUrl": "/assets/images/Gegharkunik/attractions/sevanavank.jpg",
    "title": "Սևանավանք",
    "description": "874 թվականին հիմնադրված վանական համալիր՝ Սևանա լճի թերակղզու վրա։"
  },
  {
    "imgUrl": "/assets/images/Gegharkunik/attractions/hayravank.jpg",
    "title": "Հայրավանք",
    "description": "9-12-րդ դարերի վանական համալիր՝ Սևանա լճի ափին՝ Հայրավանք գյուղում։"
  },
  {
    "imgUrl": "/assets/images/Gegharkunik/attractions/noratous.jpg",
    "title": "Նորատուսի գերեզմանատուն",
    "description": "Միջնադարյան խաչքարերի ամենամեծ համալիրը՝ թվագրվող 9-17-րդ դարերով։"
  },
  {
    "imgUrl": "/assets/images/Gegharkunik/attractions/ajdahak.jpg",
    "title": "Աժդահակ լեռ",
    "description": "Գեղամա լեռնաշղթայի ամենաբարձր գագաթը՝ 3597 մ բարձրությամբ, գագաթին՝ լճակով։"
  },
  {
    "imgUrl": "/assets/images/Gegharkunik/attractions/armaghan.jpg",
    "title": "Արմաղան լեռ",
    "description": "2829 մ բարձրությամբ լեռ՝ գագաթին փոքր լճակով, հարմար արշավների համար։"
  },
  {
    "imgUrl": "/assets/images/Gegharkunik/attractions/makenyats_vank.jpg",
    "title": "Մաքենյաց վանք",
    "description": "9-13-րդ դարերի վանական համալիր՝ Մաքենիս գյուղում, մշակութային և կրթական կենտրոն։"
  },
  {
    "imgUrl": "/assets/images/Gegharkunik/attractions/vanevan.jpg",
    "title": "Վանեվան վանք",
    "description": "903 թվականին կառուցված վանական համալիր՝ Արծվանիստ գյուղի մոտ։"
  },
  {
    "imgUrl": "/assets/images/Gegharkunik/attractions/kotavank.jpg",
    "title": "Կոթավանք",
    "description": "851-901 թթ. կառուցված վանական համալիր՝ Ներքին Գետաշեն գյուղում։"
  }
    
    ],
    foodData: [
       {
    img: "/assets/images/Gegharkunik/food/kchuch.jpg",
    name: "Կճուճ",
    ingredients: "Կարագ, բրինձ, սխտոր, մածուն"
  },
  {
    img: "/assets/images/Gegharkunik/food/qyufta.jpg",
    name: "քյուֆթա",
    ingredients: "Սոխ, մսամթերք, համեմունքներ"
  },
  {
    img: "/assets/images/Gegharkunik/food/ghapama.jpg",
    name: "Ղափամա",
    ingredients: "Դդում, բրինձ, չրեր, ընկույզ, մեղր"
  },
  {
    img: "/assets/images/Gegharkunik/food/matsun.jpg",
    name: "Մածուն",
    ingredients: "Կաթ"
  }
  
    ],
    hotelsData: [
      {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },

    {
    img: "/assets/images/Gegharkunik/hotels/sevan.jpg",
    title: "Comuna Sevan",
    link: "https://www.booking.com/hotel/am/comuna-sevan.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55605428861%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325360&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748071909&srpvid=7b4f34efefd20498&type=total&ucfs=1&"
  },
  
    ],
    transportInfo: [
     {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983128.075434069!2d42.755343546179986!3d40.27556716694771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40408eaadedcd39b%3A0x4710e9e7edfd7281!2sGegharkunik%20Province!5e1!3m2!1sen!2sam!4v1748072132376!5m2!1sen!2sam",
    text: "Երևանից Գեղարքունիք մարզ կարելի է հասնել ավտոբուսներով կամ միկրոավտոբուսներով՝ Աբովյան, Սևան, Մարտունի քաղաքների միջով։ Ճանապարհը տևում է մոտ 2-3 ժամ։",
    route: "Երևան → Աբովյան → Սևան → Մարտունի → Գեղարքունիք մարզ"
}
],
    events: [
    {
  title: "Սևանի լճի փառատոն",
  description: "Համառոտ, բայց վառ փառատոն, նվիրված Սևան լճին և նրա բնությանը։",
  location: "Սևան",
  time: "Հուլիս",
  imgSrc: "/assets/images/Gegharkunik/culture/sevan_fest.jpg"
},
   {
  title: "Սևանի լճի փառատոն",
  description: "Համառոտ, բայց վառ փառատոն, նվիրված Սևան լճին և նրա բնությանը։",
  location: "Սևան",
  time: "Հուլիս",
  imgSrc: "/assets/images/Gegharkunik/culture/sevan_fest.jpg"
},
   {
  title: "Սևանի լճի փառատոն",
  description: "Համառոտ, բայց վառ փառատոն, նվիրված Սևան լճին և նրա բնությանը։",
  location: "Սևան",
  time: "Հուլիս",
  imgSrc: "/assets/images/Gegharkunik/culture/sevan_fest.jpg"
},
   {
  title: "Սևանի լճի փառատոն",
  description: "Համառոտ, բայց վառ փառատոն, նվիրված Սևան լճին և նրա բնությանը։",
  location: "Սևան",
  time: "Հուլիս",
  imgSrc: "/assets/images/Gegharkunik/culture/sevan_fest.jpg"
},
   {
  title: "Սևանի լճի փառատոն",
  description: "Համառոտ, բայց վառ փառատոն, նվիրված Սևան լճին և նրա բնությանը։",
  location: "Սևան",
  time: "Հուլիս",
  imgSrc: "/assets/images/Gegharkunik/culture/sevan_fest.jpg"
},
{
  title: "Գեղարքունիքի գյուղական տոն",
  description: "Տեղական գյուղական մշակույթի և ավանդույթների պահպանման միջոցառում։",
  location: "Գեղարքունիք մարզ",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Gegharkunik/culture/gegharkunik_festival.jpg"
}

  
    ],
    facts: [
     "Սևանա լիճը՝ Գեղարքունիքի մարզի գոհարն է, գտնվում է 1900 մետր բարձրության վրա և համարվում է հայկական բարձրադիր լիճ։",
  "Սևանավանքը՝ XII դարի վանական համալիր, հանդիսանում է մարզի կարևոր հոգևոր կենտրոններից մեկը։",
  "Գեղարքունիքը հայտնի է իր առողջարաններով և առողջության պահպանման կենտրոններով, որոնք առաջարկում են բուժում բնական աղբյուրներով։",

    ]
  },
  

   // kotayq/////////////////
kotayq: {
    aboutData: [
        {
        title: "Կոտայքի Մարզ",
        description: "Կոտայքի մարզը գտնվում է Հայաստանի կենտրոնական մասում։ Մարզը հայտնի է իր առողջարաններով, ներառյալ Ծաղկաձորը, ինչպես նաև Գառնիի հեթանոսական տաճարով։ Տարածքը ունի զարգացած արդյունաբերություն և զբոսաշրջություն։",
        center:"Հրազդան",
        area:"2,086",
        population: "278,000 ",
        climate: "Ցամաքային, մեղմ ամառներով և ցուրտ ձմեռներով",
        
    },
    ],
    sightsCardData: [
       {
    "imgUrl": "/assets/images/Kotayk/attractions/garni.jpg",
    "title": "Գառնու հեթանոսական տաճար",
    "description": "Հայաստանի միակ պահպանված հեթանոսական տաճարը՝ նվիրված Միհր աստծուն։ Տեղակայված է Գառնի գյուղում՝ գեղատեսիլ ժայռապատկերով շրջապատված։"
  },
  {
    "imgUrl": "/assets/images/Kotayk/attractions/geghard.jpg",
    "title": "Գեղարդի վանք",
    "description": "ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության ցանկում ընդգրկված վանական համալիր՝ մասամբ փորված քարանձավներում։ Գտնվում է Գեղարդավանք գյուղում՝ Գեղարքունիքի լեռներում։"
  },
  {
    "imgUrl": "/assets/images/Kotayk/attractions/tsaghkadzor.jpg",
    "title": "Ծաղկաձորի հանգստավայր",
    "description": "Լեռնային հանգստավայր՝ հայտնի իր սահադաշտերով, լեռնային զբոսանքներով և առողջարանային ծառայություններով։"
  },
  {
    "imgUrl": "/assets/images/Kotayk/attractions/teghenis.webp",
    "title": "Տեղենիսի լեռնագնացության կենտրոն",
    "description": "Լեռնագնացության և արշավների համար հարմար վայր՝ գեղեցիկ բնությամբ և տարբեր դժվարության մակարդակներով երթուղիներով։"
  },
  {
    "imgUrl": "/assets/images/Kotayk/attractions/aknak.jpg",
    "title": "Ակնաքար լեռ",
    "description": "Լեռ՝ հայտնի իր քարանձավներով և բնության գեղատեսիլ տեսարաններով։ Հարմար է արշավների և բնության սիրահարների համար։"
  },
  {
    "imgUrl": "./images/Kotayk/attractions/tsaghkadzor_ski_resort.jpg",
    "title": "Ծաղկաձորի սահադաշտ",
    "description": "Սահադաշտ՝ ձմեռային սպորտի սիրահարների համար՝ լեռնային գեղեցիկ տեսարաններով։"
  }
    
    ],
    foodData: [
  {
    img: "/assets/images/Kotayk/food/kchuch.jpg",
    name: "Կճուճ",
    ingredients: "Կարագ, բրինձ, սխտոր, մածուն"
  },
  {
    img: "/assets/images/Kotayk/food/churek.jpg",
    name: "Չուրեկ",
    ingredients: "Կարագ, ալյուր, շաքար, ձու"
  }
  
    ],
    hotelsData: [
      {
    img: "/assets/images/Kotayk/hotels/garni.jpg",
    title: "Hidden Garden Resort",
    link: "https://www.booking.com/hotel/am/hidden-garden-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55655603777%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324772&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748072871&srpvid=577f36d18f4e02a6&type=total&ucfs=1&"
  },
  {
    img: "/assets/images/Kotayk/hotels/garni.jpg",
    title: "Hidden Garden Resort",
    link: "https://www.booking.com/hotel/am/hidden-garden-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55655603777%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324772&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748072871&srpvid=577f36d18f4e02a6&type=total&ucfs=1&"
  },
  {
    img: "/assets/images/Kotayk/hotels/garni.jpg",
    title: "Hidden Garden Resort",
    link: "https://www.booking.com/hotel/am/hidden-garden-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55655603777%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324772&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748072871&srpvid=577f36d18f4e02a6&type=total&ucfs=1&"
  },
  {
    img: "/assets/images/Kotayk/hotels/garni.jpg",
    title: "Hidden Garden Resort",
    link: "https://www.booking.com/hotel/am/hidden-garden-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55655603777%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324772&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748072871&srpvid=577f36d18f4e02a6&type=total&ucfs=1&"
  },
  {
    img: "/assets/images/Kotayk/hotels/garni.jpg",
    title: "Hidden Garden Resort",
    link: "https://www.booking.com/hotel/am/hidden-garden-resort.html?aid=318615&label=English_Armenia_EN_AM_29508965905-pEVFI7BeOUu1zVT2VtE9%2AQS217289555440%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55655603777%3Atidsa-386017564517%3Alp9070052%3Ali%3Adec%3Adm&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2324772&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=3&hpos=3&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748072871&srpvid=577f36d18f4e02a6&type=total&ucfs=1&"
  },
  
    ],
    transportInfo: [
      {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488745.9679288052!2d43.401420777463855!3d40.40315538032967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a9c8ad176ce11%3A0xe1bded85e2ed0185!2sKotayk%20Province!5e1!3m2!1sen!2sam!4v1748072968166!5m2!1sen!2sam",
    text: "Երևանից Կոտայք մարզ կարելի է հասնել ավտոբուսներով կամ միկրոավտոբուսներով՝ Աբովյան, Հրազդան քաղաքների միջով։ Ճանապարհը տևում է մոտ 1-1.5 ժամ։",
    route: "Երևան → Աբովյան → Հրազդան → Կոտայք մարզ"
}
],
    events: [
    {
    title: "Բերքի Տոն",
    description: "Գյուղական կյանքի և ավանդույթների ամենամյա փառատոն, որտեղ ներկայացվում են օրգանական գյուղմթերք, արհեստներ և ազգային մշակույթ։",
    location: "Ձորաղբյուր",
    time: "Սեպտեմբեր",
    imgSrc: "/assets/images/Kotayk/culture/berqi_ton.jpg"
  },

  {
    title: "Մնջախաղի միջազգային փառատոն",
    description: "Մնջախաղի թատրոնների միջազգային փառատոն, որը նպաստում է մշակութային կյանքի և զբոսաշրջության զարգացմանը։",
    location: "Ծաղկաձոր",
    time: "Հունիս",
    imgSrc: "/assets/images/Kotayk/culture/mnjaxax_festival.jpg"
  },
    
  {
    title: "Բերքի Տոն",
    description: "Գյուղական կյանքի և ավանդույթների ամենամյա փառատոն, որտեղ ներկայացվում են օրգանական գյուղմթերք, արհեստներ և ազգային մշակույթ։",
    location: "Ձորաղբյուր",
    time: "Սեպտեմբեր",
    imgSrc: "/assets/images/Kotayk/culture/berqi_ton.jpg"
  },

  {
    title: "Մնջախաղի միջազգային փառատոն",
    description: "Մնջախաղի թատրոնների միջազգային փառատոն, որը նպաստում է մշակութային կյանքի և զբոսաշրջության զարգացմանը։",
    location: "Ծաղկաձոր",
    time: "Հունիս",
    imgSrc: "/assets/images/Kotayk/culture/mnjaxax_festival.jpg"
  }
  
    ],
    facts: [
     "Կոտայքի մարզում է գտնվում Հաղարծին վանքը՝ XII դարի ճարտարապետական շքեղ օրինակ։",
  "Մարզը հարուստ է նաև արհեստագործական ու մշակութային կետրոններով, ինչպիսիք են Աղավնաձորի ձեռագործ արտադրությունները։",
  "Կոտայքի շրջանը հայտնի է նաև իր գյուղատնտեսությամբ՝ հատկապես խաղողի և հատապտուղների մշակումով։",
    ]
  },
  

   // ararat/////////////////
ararat: {
    aboutData: [
        {
        title: "Արարատի Մարզ",
        description: " Արարատի մարզը գտնվում է Հայաստանի հարավային մասում՝ Արարատյան դաշտում։ Մարզը հայտնի է իր բերրի հողերով և զարգացած գյուղատնտեսությամբ, հատկապես խաղողի և մրգերի մշակմամբ։ Տարածքում գտնվում է Խոր Վիրապ վանքը՝ պատմական և կրոնական կարևոր նշանակությամբ։",
        center:"Արտաշատ",
        area:"2,096 ",
        population: "255,800",
        climate: "Ցամաքային, շոգ ամառներով և մեղմ ձմեռներով",
        
    },
    ],
    sightsCardData: [
      {
    "imgUrl": "/assets/images/Ararat/attractions/khor_virap.jpg",
    "title": "Խոր Վիրապ",
    "description": "Պատմական վանք-ամրոց՝ կապված Գրիգոր Լուսավորչի հետ, որտեղից բացվում է հիասքանչ տեսարան Արարատ լեռան վրա։"
  },
  {
    "imgUrl": "/assets/images/Ararat/attractions/kakavaberd.jpg",
    "title": "Կաքավաբերդ",
    "description": "Բարձր լեռան գագաթին կառուցված միջնադարյան ամրոց՝ երեք կողմից անմատչելի, պատմական նշանակության։"
  },
  {
    "imgUrl": "/assets/images/Ararat/attractions/khosrov_forest.jpg",
    "title": "Խոսրովի անտառ",
    "description": "Պետական արգելոց՝ հիմնադրված 4-րդ դարում, հարուստ կենսաբազմազանությամբ և պատմական հուշարձաններով։"
  },
  {
    "imgUrl": "/assets/images/Ararat/attractions/tapi_berd.jpg",
    "title": "Տափի բերդ",
    "description": "10-րդ դարի ամրոց՝ Գևորգ Մարզպետունու կողմից կառուցված, տեղակայված Ուրցաձոր գյուղի մոտ։"
  },
  {
    "imgUrl": "/assets/images/Ararat/entertainment/hrashq_aygi.jpg",
    "title": "Հրաշք Այգի",
    "description": "Մխչյան գյուղում գտնվող այգի՝ առաջարկող հանգիստ միջավայր և զվարճանքներ ամբողջ ընտանիքի համար։"
  }
    
    ],
    foodData: [
     {
    img: "/assets/images/Ararat/food/manti.jpg",
    name: "Մանթի",
    ingredients: "Հացաբլիթ, աղացած միս, լոլիկի սոուս"
  },
  {
    img: "/assets/images/Ararat/food/harisa.jpg",
    name: "Հարիսա",
    ingredients: "Գարի, խոզի կամ ոչխարի միս"
  },
  {
    img: "/assets/images/Ararat/food/ghapama.jpg",
    name: "Ղափամա",
    ingredients: "Դդում, բրինձ, չրեր, ընկույզ, մեղր"
  }
  
    ],
    hotelsData: [
      {
    img: "/assets/images/Ararat/hotels/ralina.jpg",
    title: "Ralina Restaurant and Hotel",
    link: "https://h.priceline.com/hotel/am/ralina-restaurant.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324444&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748075068&srpvid=5d153b1dbbb00254&type=total&ucfs=1&#hotelTmpl"
  },
   {
    img: "/assets/images/Ararat/hotels/ralina.jpg",
    title: "Ralina Restaurant and Hotel",
    link: "https://h.priceline.com/hotel/am/ralina-restaurant.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324444&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748075068&srpvid=5d153b1dbbb00254&type=total&ucfs=1&#hotelTmpl"
  },
   {
    img: "/assets/images/Ararat/hotels/ralina.jpg",
    title: "Ralina Restaurant and Hotel",
    link: "https://h.priceline.com/hotel/am/ralina-restaurant.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324444&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748075068&srpvid=5d153b1dbbb00254&type=total&ucfs=1&#hotelTmpl"
  },
   {
    img: "/assets/images/Ararat/hotels/ralina.jpg",
    title: "Ralina Restaurant and Hotel",
    link: "https://h.priceline.com/hotel/am/ralina-restaurant.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324444&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748075068&srpvid=5d153b1dbbb00254&type=total&ucfs=1&#hotelTmpl"
  },
   {
    img: "/assets/images/Ararat/hotels/ralina.jpg",
    title: "Ralina Restaurant and Hotel",
    link: "https://h.priceline.com/hotel/am/ralina-restaurant.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324444&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748075068&srpvid=5d153b1dbbb00254&type=total&ucfs=1&#hotelTmpl"
  },
  
    ],
    transportInfo: [
     {
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374672.3182289607!2d44.38634107186221!3d39.951464689092155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4015342e4144c68d%3A0x48bc9d1376840c71!2sArarat%20Province!5e1!3m2!1sen!2sam!4v1748074586541!5m2!1sen!2sam",
    text: "Երևանից Արարատ մարզ կարելի է հասնել ավտոբուսներով կամ միկրոավտոբուսներով՝ Արտաշատ, Վեդի քաղաքների միջով։ Ճանապարհը տևում է մոտ 1-1.5 ժամ։",
    route: "Երևան → Արտաշատ → Վեդի → Արարատ մարզ"
}
],
    events: [
    {
  title: "Արարատի գինու փառատոն",
  description: "Գինու մշակույթի խթանման փառատոն՝ նվիրված Արարատյան դաշտի գինիներին։",
  location: "Արտաշատ",
  time: "Հուլիս",
  imgSrc: "/assets/images/Ararat/culture/wine_festival.jpg"
},
{
  title: "Վեդու ժողովրդական տոն",
  description: "Համայնքային տոն Վեդիում, ներառում է ավանդական պարեր ու երգեր։",
  location: "Վեդի",
  time: "Օգոստոս",
  imgSrc: "/assets/images/Ararat/culture/vedi_festival.jpg"
},

    
  
    ],
    facts: [
     "Արարատի մարզը գտնվում է Արարատյան դաշտում՝ Հայաստանի ամենածավալուն և պտղատու մարզերից մեկը։",
  "Այստեղ է գտնվում Արտաշատը՝ հին Հայաստանի մայրաքաղաքներից մեկը և պատմական մշակութային կենտրոն։",
  "Մարզի հողերը հարմար են խաղողի, բանջարեղենի և խոզի ճյուղերի զարգացման համար։",
    ]
  },
  

   // vayots dzor/////////////////
vayotsDzor: {
    aboutData: [
        {
        title: "Վայոց Ձորի Մարզ",
        description: " Վայոց ձորի մարզը գտնվում է Հայաստանի հարավարևելքում։ Տարածքը հայտնի է իր լեռնային բնությամբ, գինեգործությամբ և պատմական հուշարձաններով։ Մարզը ունի սակավաթիվ բնակչություն։",
        center:" Եղեգնաձոր",
        area:"2,308 ",
        population: "49,000",
        climate: "Ցամաքային, ցուրտ ձմեռներով և շոգ ամառներով",
        
    },
    ],
    sightsCardData: [
        {
    "imgUrl": "/assets/images/VayotsDzor/attractions/noravank.jpg",
    "title": "Նորավանք",
    "description": "10-13-րդ դարերի վանական համալիր՝ հայտնի իր ճարտարապետ Մոմիկի խաչքարերով և գեղատեսիլ կիրճով։"
  },
  {
    "imgUrl": "/assets/images/VayotsDzor/attractions/gndevank.jpg",
    "title": "Գնդեվանք",
    "description": "10-րդ դարի վանք՝ կառուցված Գնդեվազ գյուղի մոտ՝ Արփա գետի կիրճում։"
  },
  {
    "imgUrl": "/assets/images/VayotsDzor/attractions/spitakavor.jpg",
    "title": "Սպիտակավոր վանք",
    "description": "14-րդ դարի վանական համալիր՝ տեղակայված Վերնաշեն գյուղի մոտ՝ Տեքսար լեռան լանջին։"
  },
  {
    "imgUrl": "/assets/images/VayotsDzor/attractions/smbataberd.jpg",
    "title": "Սմբատաբերդ",
    "description": "10-րդ դարի ամրոց՝ կառուցված բարձրադիր լեռան վրա՝ պաշտպանական նշանակությամբ։"
  },
  {
    "imgUrl": "/assets/images/VayotsDzor/attractions/proshaberd.jpg",
    "title": "Պռոշաբերդ",
    "description": "13-րդ դարի ամրոց՝ տեղակայված Վայոց Ձորի լեռնային տարածքում։"
  },
  {
    "imgUrl": "/assets/images/VayotsDzor/attractions/areni_cave.jpg",
    "title": "Արենի քարանձավ",
    "description": "Հնագիտական վայր՝ որտեղ հայտնաբերվել է աշխարհի ամենահին գինեգործարանը։"
  },
  {
    "imgUrl": "/assets/images/VayotsDzor/attractions/jermuk_waterfall.jpg",
    "title": "Ջերմուկի ջրվեժ",
    "description": "Հայտնի է որպես «Ջրահարսի վարսեր»՝ 72 մ բարձրությամբ ջրվեժ՝ կապված ժողովրդական առասպելի հետ։"
  },
  {
    "imgUrl": "/assets/images/VayotsDzor/attractions/tsakhats_kar.jpg",
    "title": "Ցաղաց Քար վանք",
    "description": "10-11-րդ դարերի վանական համալիր՝ տեղակայված Վայոց Ձորի լեռնային տարածքում։"
  },
  {
    "imgUrl": "/assets/images/VayotsDzor/attractions/orbelian_caravanserai.jpg",
    "title": "Օրբելյանների քարավանատուն",
    "description": "14-րդ դարի քարավանատուն՝ կառուցված 1332 թվականին՝ Սելիմի լեռնանցքի մոտ։"
  }
    
    ],
    foodData: [
  
  {
    img: "/assets/images/VayotsDzor/food/tahini.jpg",
    name: "Թահինի",
    ingredients: "Թարմ կաթ, խտացրած կաթ, սերուցք"
  },
  {
    img: "/assets/images/VayotsDzor/food/tahini.jpg",
    name: "Թահինի",
    ingredients: "Թարմ կաթ, խտացրած կաթ, սերուցք"
  },
  {
    img: "/assets/images/VayotsDzor/food/tahini.jpg",
    name: "Թահինի",
    ingredients: "Թարմ կաթ, խտացրած կաթ, սերուցք"
  },
  {
    img: "/assets/images/VayotsDzor/food/tahini.jpg",
    name: "Թահինի",
    ingredients: "Թարմ կաթ, խտացրած կաթ, սերուցք"
  },
 {
    img: "/assets/images/VayotsDzor/food/tahini.jpg",
    name: "Թահինի",
    ingredients: "Թարմ կաթ, խտացրած կաթ, սերուցք"
  },
  {
    img: "/assets/images/VayotsDzor/food/tahini.jpg",
    name: "Թահինի",
    ingredients: "Թարմ կաթ, խտացրած կաթ, սերուցք"
  },
 
    ],
    hotelsData: [
      {
    img: "/assets/images/VayotsDzor/hotels/montis.jpg",
    title: "Montis Resort",
    link: "https://h.priceline.com/hotel/am/montis-resort.en-gb.html?label=ararat-b4hToczQ2wINZLai*g5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&aid=826590&ucfs=1&arphpl=1&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=distance_from_search&srpvid=a7953d897366034f&srepoch=1748076308&from=searchresults#hotelTmpl"
  },
  
     {
    img: "/assets/images/VayotsDzor/hotels/montis.jpg",
    title: "Montis Resort",
    link: "https://h.priceline.com/hotel/am/montis-resort.en-gb.html?label=ararat-b4hToczQ2wINZLai*g5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&aid=826590&ucfs=1&arphpl=1&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=distance_from_search&srpvid=a7953d897366034f&srepoch=1748076308&from=searchresults#hotelTmpl"
  },
  
     {
    img: "/assets/images/VayotsDzor/hotels/montis.jpg",
    title: "Montis Resort",
    link: "https://h.priceline.com/hotel/am/montis-resort.en-gb.html?label=ararat-b4hToczQ2wINZLai*g5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&aid=826590&ucfs=1&arphpl=1&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=distance_from_search&srpvid=a7953d897366034f&srepoch=1748076308&from=searchresults#hotelTmpl"
  },
  
     {
    img: "/assets/images/VayotsDzor/hotels/montis.jpg",
    title: "Montis Resort",
    link: "https://h.priceline.com/hotel/am/montis-resort.en-gb.html?label=ararat-b4hToczQ2wINZLai*g5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&aid=826590&ucfs=1&arphpl=1&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=distance_from_search&srpvid=a7953d897366034f&srepoch=1748076308&from=searchresults#hotelTmpl"
  },
  
     {
    img: "/assets/images/VayotsDzor/hotels/montis.jpg",
    title: "Montis Resort",
    link: "https://h.priceline.com/hotel/am/montis-resort.en-gb.html?label=ararat-b4hToczQ2wINZLai*g5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&aid=826590&ucfs=1&arphpl=1&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=distance_from_search&srpvid=a7953d897366034f&srepoch=1748076308&from=searchresults#hotelTmpl"
  },
  

    ],
    transportInfo: [
      {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375761.95071028196!2d45.113171084254255!3d39.752127428244314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40157b0e76aaea41%3A0xb39efbbe35f6a853!2sVayots%20Dzor%20Province!5e1!3m2!1sen!2sam!4v1748076854526!5m2!1sen!2sam",
    text: "Երևանից Վայոց Ձոր մարզ կարելի է հասնել ավտոբուսներով կամ միկրոավտոբուսներով՝ Արարատ, Եղեգնաձոր քաղաքների միջով։ Ճանապարհը տևում է մոտ 2-2.5 ժամ։",
    route: "Երևան → Արարատ → Եղեգնաձոր → Վայոց Ձոր մարզ"
}
],
    events: [
      { 
      title: "Խաղողօրհնեք և Գինու փառատոն", 
      description: "Արենի գյուղում անցկացվող գինու փառատոնը համախմբում է տեղական գինեգործներին, մշակութային ներկայացումներով և համտեսներով։", 
      location: "Արենի", 
      time: "Հոկտեմբեր", 
      imgSrc: "/assets/images/VayotsDzor/culture/areni_wine_festival.jpg" 
    },
    { 
      title: "Խաղողօրհնեք և Գինու փառատոն", 
      description: "Արենի գյուղում անցկացվող գինու փառատոնը համախմբում է տեղական գինեգործներին, մշակութային ներկայացումներով և համտեսներով։", 
      location: "Արենի", 
      time: "Հոկտեմբեր", 
      imgSrc: "/assets/images/VayotsDzor/culture/areni_wine_festival.jpg" 
    },
    { 
      title: "Խաղողօրհնեք և Գինու փառատոն", 
      description: "Արենի գյուղում անցկացվող գինու փառատոնը համախմբում է տեղական գինեգործներին, մշակութային ներկայացումներով և համտեսներով։", 
      location: "Արենի", 
      time: "Հոկտեմբեր", 
      imgSrc: "/assets/images/VayotsDzor/culture/areni_wine_festival.jpg" 
    },
    { 
      title: "Խաղողօրհնեք և Գինու փառատոն", 
      description: "Արենի գյուղում անցկացվող գինու փառատոնը համախմբում է տեղական գինեգործներին, մշակութային ներկայացումներով և համտեսներով։", 
      location: "Արենի", 
      time: "Հոկտեմբեր", 
      imgSrc: "/assets/images/VayotsDzor/culture/areni_wine_festival.jpg" 
    },
  
    ],
    facts: [
    "Վայոց ձորն առանձնանում է իր բնական լանդշաֆտներով, ժայռապատկերներով և վանական համալիրներով, օրինակ՝ Խաչիկ գյուղի Սուրբ Մարինե վանք։",
  "Մարզը հայտնի է նաև իր բուսական և կենդանական աշխարհի յուրահատկություններով, ինչպես նաև հանքավայրերով։",
    ]
  },
  

   // syunik/////////////////
syunik: {
    aboutData: [
        {
        title: "Սյունիքի Մարզ",
        description: " Սյունիքի մարզը գտնվում է Հայաստանի հարավում։ Տարածքը հայտնի է իր լեռնային բնությամբ, հանքարդյունաբերությամբ և պատմական հուշարձաններով։ Մարզը ունի ռազմավարական նշանակություն՝ սահմանակից լինելով Իրանին:",
        center:" Կապան",
        area:" 4,506 ",
        population: "119,500",
        climate: "Լեռնային, ցուրտ ձմեռներով և զով ամառներով",
        
    },
    ],
    sightsCardData: [
       {
    "imgUrl": "/assets/images/Syunik/attractions/tatev_monastery.jpg",
    "title": "Տաթևի վանք",
    "description": "9-րդ դարի վանական համալիր՝ տեղակայված Որոտան գետի կիրճի եզրին, հայտնի իր պատմական և ճարտարապետական արժեքներով։"
  },
  {
    "imgUrl": "/assets/images/Syunik/attractions/wings_of_tatev.jpg",
    "title": "Տաթևեր ճոպանուղի",
    "description": "Աշխարհի ամենաերկար հակադարձվող ճոպանուղին՝ կապող Հալիձոր գյուղը Տաթևի վանքին։"
  },
  {
    "imgUrl": "/assets/images/Syunik/attractions/karahunj.jpg",
    "title": "Քարահունջ (Զորաց Քարեր)",
    "description": "Մեգալիթյան հուշարձան՝ բաղկացած ուղղահայաց կանգնեցված քարերից, համարվում է հնագույն աստղադիտարան։"
  },
  {
    "imgUrl": "/assets/images/Syunik/attractions/shaki_waterfall.jpg",
    "title": "Շաքիի ջրվեժ",
    "description": "Գեղատեսիլ ջրվեժ՝ 18 մետր բարձրությամբ, տեղակայված Սիսիան քաղաքի մոտ։"
  },
  {
    "imgUrl": "/assets/images/Syunik/attractions/halidzor_fortress.jpg",
    "title": "Հալիձորի բերդ",
    "description": "17-րդ դարի ամրոց՝ ծառայել է որպես պաշտպանական կառույց Դավիթ Բեկի ազատագրական պայքարի ժամանակ։"
  },
  {
    "imgUrl": "/assets/images/Syunik/attractions/arevik_national_park.jpg",
    "title": "Արևիք ազգային պարկ",
    "description": "Բնության պահպանվող տարածք՝ հարուստ կենսաբազմազանությամբ և եզակի բուսական ու կենդանական աշխարհով։"
  },
  {
    "imgUrl": "./imges/Syunik/attractions/bgheno_noravank.jpg",
    "title": "Բղենո Նորավանք",
    "description": "10-11-րդ դարերի վանական համալիր՝ տեղակայված անտառապատ կիրճում։"
  },
  {
    "imgUrl": "/assets/images/Syunik/attractions/baghaberd.jpg",
    "title": "Բաղաբերդ",
    "description": "4-րդ դարի ամրոց՝ ծառայել է որպես Սյունիքի թագավորության մայրաքաղաք։"
  },
  {
    "imgUrl": "/assets/images/Syunik/attractions/kndzoresk.jpg",
    "title": "Խնձորեսկ",
    "description": "Հին գյուղ՝ հայտնի իր քարանձավային բնակավայրերով և ճոճվող կամրջով։"
  },
  {
    "imgUrl": "/assets/images/Syunik/attractions/devils_bridge.jpg",
    "title": "Սատանի կամուրջ",
    "description": "Բնական քարե կամուրջ՝ ձևավորված Որոտան գետի հոսքի արդյունքում։"
  }
    
    ],
    foodData: [
     {
    img: "/assets/images/Syunik/food/khorovats.jpg",
    name: "Խորոված",
    ingredients: "Տավարի կամ խոզի միս, սոխ, համեմունքներ, գազար"
  },

  {
    img: "/assets/images/Syunik/food/basturma.jpg",
    name: "Բաստուրմա",
    ingredients: "Խորովածի միս, սխտոր, կարմիր պղպեղ, քացախ"
  },
  {
    img: "/assets/images/Syunik/food/kataif.jpg",
    name: "Քաթաիֆ",
    ingredients: "Փխրուն խմոր, ընկույզ, մեղր, կարագ"
  },
  {
    img: "/assets/images/Syunik/food/kataif.jpg",
    name: "Քաթաիֆ",
    ingredients: "Փխրուն խմոր, ընկույզ, մեղր, կարագ"
  }
  
    ],
    hotelsData: [
      {
    img: "/assets/images/Syunik/hotels/syuniq.jpg",
    title: "Syuniq Hotel",
    link: "https://h.priceline.com/hotel/am/syuniq-goris.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=8596406&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748077548&srpvid=eaf03fef42bd0b97&type=total&ucfs=1&#hotelTmpl"
  },
    {
    img: "/assets/images/Syunik/hotels/syuniq.jpg",
    title: "Syuniq Hotel",
    link: "https://h.priceline.com/hotel/am/syuniq-goris.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=8596406&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748077548&srpvid=eaf03fef42bd0b97&type=total&ucfs=1&#hotelTmpl"
  },
    {
    img: "/assets/images/Syunik/hotels/syuniq.jpg",
    title: "Syuniq Hotel",
    link: "https://h.priceline.com/hotel/am/syuniq-goris.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=8596406&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748077548&srpvid=eaf03fef42bd0b97&type=total&ucfs=1&#hotelTmpl"
  },
    {
    img: "/assets/images/Syunik/hotels/syuniq.jpg",
    title: "Syuniq Hotel",
    link: "https://h.priceline.com/hotel/am/syuniq-goris.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=8596406&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748077548&srpvid=eaf03fef42bd0b97&type=total&ucfs=1&#hotelTmpl"
  },
  
    ],
    transportInfo: [
     {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511984.9580186503!2d44.85210830260202!3d39.34075378394695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401616e8fb5c7743%3A0xdc300927599010f5!2sSyunik%20Province!5e1!3m2!1sen!2sam!4v1748077582495!5m2!1sen!2sam" ,
    text: "Երևանից Սյունիք մարզ կարելի է հասնել ավտոբուսով կամ միկրոավտոբուսով՝ Արտաշատ, Գորիս և Կապան քաղաքների միջով։ Ճանապարհը տևում է մոտ 4-5 ժամ։",
    route: "Երևան → Արտաշատ → Գորիս → Կապան → Սյունիք մարզ"
}
],
    events: [
    {
  title: "Կապանի երաժշտական փառատոն",
  description: "Սյունիքի մարզի Կապան քաղաքում անցկացվող ամենամյա երաժշտական փառատոն։",
  location: "Կապան",
  time: "Հուլիս",
  imgSrc: "/assets/images/Syunik/culture/kapan_music_festival.jpg"
},

{
  title: "Տաթևի փառատոն",
  description: "Տաթևի վանքի մոտ անցկացվող մշակութային և պատմական փառատոն։",
  location: "Տաթև",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Syunik/culture/tatev_festival.jpg"
},
   {
  title: "Կապանի երաժշտական փառատոն",
  description: "Սյունիքի մարզի Կապան քաղաքում անցկացվող ամենամյա երաժշտական փառատոն։",
  location: "Կապան",
  time: "Հուլիս",
  imgSrc: "/assets/images/Syunik/culture/kapan_music_festival.jpg"
},

{
  title: "Տաթևի փառատոն",
  description: "Տաթևի վանքի մոտ անցկացվող մշակութային և պատմական փառատոն։",
  location: "Տաթև",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Syunik/culture/tatev_festival.jpg"
},
  
    ],
    facts: [
      "Սյունիքը հարուստ է պատմական և մշակութային ժառանգությամբ՝ ներառյալ Տաթևի վանք, որը համարվում է հայ եկեղեցական արվեստի գոհարը։",
  "Մարզի լեռները և հովիտները հիասքանչ են զբոսաշրջիկների համար, հատկապես Հրազդան գետի հովիտը։",
  "Սյունիքը նաև հայտնի է իր գինեգործական ավանդույթներով։",
    ]
  },
  

   // armavir/////////////////
armavir: {
    aboutData: [
        {
        title: "Արմավիրի Մարզ",
        description: " Արմավիրի մարզը գտնվում է Արարատյան դաշտի արևմտյան հատվածում։ Մարզը հանդիսանում է Հայաստանի գյուղատնտեսական կենտրոններից մեկը՝ հայտնի իր խաղողի և մրգերի արտադրությամբ։ Այստեղ է գտնվում Էջմիածինը՝ Հայ Առաքելական Եկեղեցու կենտրոնը։",
        center:"Արմավիր",
        area:"1,242 ",
        population: "259,400",
        climate: "Ցամաքային, շոգ ամառներով և մեղմ ձմեռներով",
        
    },
    ],
    sightsCardData: [
     {
    imgUrl: "/assets/images/Armavir/attractions/ejmiatsin_cathedral.jpg",
    title: "Սուրբ Էջմիածնի Մայր Տաճար",
    description: "Հայ առաքելական եկեղեցու հոգևոր կենտրոնը՝ կառուցված 301-303 թթ., համարվում է աշխարհի ամենահին քրիստոնեական տաճարներից։"
  },
  {
    "imgUrl": "/assets/images/Armavir/attractions/zvartnots.jpg",
    "title": "Զվարթնոց տաճար",
    "description": "7-րդ դարի ճարտարապետական գլուխգործոց՝ ընդգրկված ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության ցանկում։"
  },
  {
    "imgUrl": "/assets/images/Armavir/attractions/surb_hripsime.jpg",
    "title": "Սուրբ Հռիփսիմե եկեղեցի",
    "description": "7-րդ դարի եկեղեցի՝ նվիրված նահատակ Հռիփսիմեին, համարվում է հայկական ճարտարապետության կարևոր նմուշ։"
  },
  {
    "imgUrl": "/assets/images/Armavir/attractions/surb_gayane.jpg",
    "title": "Սուրբ Գայանե եկեղեցի",
    "description": "7-րդ դարի եկեղեցի՝ կառուցված Սուրբ Գայանեի նահատակման վայրում։"
  },
  {
    "imgUrl": "/assets/images/Armavir/attractions/sardarapat_memorial.jpg",
    "title": "Սարդարապատի հերոսամարտի հուշահամալիր",
    "description": "Հուշահամալիր՝ նվիրված 1918 թ. Սարդարապատի ճակատամարտին, խորհրդանշում է հայ ժողովրդի հաղթանակը։"
  },
  {
    "imgUrl": "/assets/images/Armavir/attractions/metsamor.jpg",
    "title": "Մեծամոր հնավայր",
    "description": "Հնագիտական համալիր՝ ընդգրկող բրոնզեդարյան բնակավայրի և դամբարանների մնացորդներ։"
  },
  {
    "imgUrl": "/assets/images/Armavir/attractions/argishtikhinili.jpg",
    "title": "Արգիշտիխինիլի",
    "description": "Ուրարտուական քաղաք՝ հիմնադրված մ.թ.ա. 8-րդ դարում թագավոր Արգիշտի Ա-ի կողմից։"
  },
  {
    "imgUrl": "/assets/images/Armavir/attractions/surb_shoghakat.jpg",
    "title": "Սուրբ Շողակաթ եկեղեցի",
    "description": "17-րդ դարի եկեղեցի՝ կառուցված այն վայրում, որտեղ ըստ ավանդության, լույս է կաթել նահատակ կույսերի վրա։"
  },
  {
    "imgUrl": "/assets/images/Armavir/attractions/surb_mariam.jpg",
    "title": "Սուրբ Մարիամ Աստվածածին եկեղեցի",
    "description": "Հին եկեղեցի՝ տեղակայված Էջմիածին քաղաքում։"
  }
    
    ],
    foodData: [
    {
    img: "/assets/images/Armavir/food/grapes.jpg",
    name: "Խաղող",
    ingredients: "Տարածաշրջանի ամենահայտնի և բարձրորակ մրգերից մեկը, Արմավիրի խաղողը համարվում է տեղական գինեգործության հիմքը"
  },
  {
    img: "/assets/images/Armavir/food/pomegranate.jpg",
    name: "Նուռ",
    ingredients: "Տարածված է մարզի ողջ տարածքում, օգտագործվում է հյութերի, կծու ուտեստների և դեսերտների մեջ"
  },
  {
    img: "/assets/images/Armavir/food/walnut.jpg",
    name: "Ընկույզ",
    ingredients: "Տեղական այգիների գլխավոր մթերքներից է, օգտագործվում է ինչպես ուտեստներում, այնպես էլ գաթայի և խմորեղենի մեջ"
  },
  {
    img: "/assets/images/Armavir/food/khorovats.jpg",
    name: "Խորոված",
    ingredients: "Տավարի կամ խոզի միս, տեղական համեմունքներ, որը պատրաստվում է բաց կրակի վրա՝ հատուկ Արմավիրի մրգերի գարշահոտի հետ"
  },
  {
    img: "/assets/images/Armavir/food/pelamushi.jpg",
    name: "Պելամուշի",
    ingredients: "Խաղողի հյութից պատրաստվող ավանդական տնական քաղցրաշունչ խմորեղեն"
  },
  {
    img: "/assets/images/Armavir/food/apricot.jpg",
    name: "Տանձամորի",
    ingredients: "Տարածված է տեղական այգիներում, հիմնականում օգտագործվում է հյութերի և կոնֆիտյուրների մեջ"
  }
    ],
    hotelsData: [
      {
    img: "/assets/images/Armavir/hotels/richmind.jpg",
    title: "Richmind Hotel",
    link: "https://h.priceline.com/hotel/am/richmind.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324865&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748078266&srpvid=831e414a64210381&type=total&ucfs=1&#hotelTmpl"
  },
    {
    img: "/assets/images/Armavir/hotels/richmind.jpg",
    title: "Richmind Hotel",
    link: "https://h.priceline.com/hotel/am/richmind.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324865&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748078266&srpvid=831e414a64210381&type=total&ucfs=1&#hotelTmpl"
  },
  
    {
    img: "/assets/images/Armavir/hotels/richmind.jpg",
    title: "Richmind Hotel",
    link: "https://h.priceline.com/hotel/am/richmind.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324865&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748078266&srpvid=831e414a64210381&type=total&ucfs=1&#hotelTmpl"
  },
  
    {
    img: "/assets/images/Armavir/hotels/richmind.jpg",
    title: "Richmind Hotel",
    link: "https://h.priceline.com/hotel/am/richmind.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324865&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748078266&srpvid=831e414a64210381&type=total&ucfs=1&#hotelTmpl"
  },
  
    {
    img: "/assets/images/Armavir/hotels/richmind.jpg",
    title: "Richmind Hotel",
    link: "https://h.priceline.com/hotel/am/richmind.en-gb.html?aid=826590&label=ararat-b4hToczQ2wINZLai%2Ag5vMgS468553378501%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1988441161%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH0_Jxt6fWoC48&sid=c495d2ea5036e0d784c7860e4e8a85fe&dest_id=-2324865&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748078266&srpvid=831e414a64210381&type=total&ucfs=1&#hotelTmpl"
  },
  
  
  
    ],
    transportInfo: [
     {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1494446.0623683857!2d42.72509537095024!3d40.144735642253245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aec2805934479%3A0x4528a9e5e15657e3!2sArmavir%20Province!5e1!3m2!1sen!2sam!4v1748078230980!5m2!1sen!2sam",
    text: "Երևանից Արմավիր մարզ կարելի է հասնել ավտոբուսներով կամ միկրոավտոբուսներով՝ Աբովյան, Էջմիածին և Արմավիր քաղաքների միջով։ Ճանապարհը տևում է մոտ 1-1.5 ժամ։",
    route: "Երևան → Աբովյան → Էջմիածին → Արմավիր → Արմավիր մարզ"
}
],
    events: [

{
  title: "Արմավիրի մշակութային օրեր",
  description: "Մշակութային միջոցառումների շարք մարզի տարբեր բնակավայրերում։",
  location: "Արմավիր քաղաք",
  time: "Օգոստոս",
  imgSrc: "/assets/images/Armavir/culture/armavir_culture_days.jpg"
},
{
  title: "Վաղարշապատի երաժշտական համերգ",
  description: "Ամենամյա երաժշտական համերգ Վաղարշապատում։",
  location: "Վաղարշապատ",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Armavir/culture/vagharshapat_concert.jpg"
},
{
  title: "Արմավիրի մշակութային օրեր",
  description: "Մշակութային միջոցառումների շարք մարզի տարբեր բնակավայրերում։",
  location: "Արմավիր քաղաք",
  time: "Օգոստոս",
  imgSrc: "/assets/images/Armavir/culture/armavir_culture_days.jpg"
},
{
  title: "Վաղարշապատի երաժշտական համերգ",
  description: "Ամենամյա երաժշտական համերգ Վաղարշապատում։",
  location: "Վաղարշապատ",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Armavir/culture/vagharshapat_concert.jpg"
},
{
  title: "Արմավիրի մշակութային օրեր",
  description: "Մշակութային միջոցառումների շարք մարզի տարբեր բնակավայրերում։",
  location: "Արմավիր քաղաք",
  time: "Օգոստոս",
  imgSrc: "/assets/images/Armavir/culture/armavir_culture_days.jpg"
},
{
  title: "Վաղարշապատի երաժշտական համերգ",
  description: "Ամենամյա երաժշտական համերգ Վաղարշապատում։",
  location: "Վաղարշապատ",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Armavir/culture/vagharshapat_concert.jpg"
}

    
  
    ],
    facts: [
     "Արմավիրի մարզում է գտնվում հին Արտաշատը՝ հայկական պատմության կարևորագույն մայրաքաղաքներից մեկը։",
  "Մարզը ակտիվորեն զարգացնում է գյուղատնտեսությունը՝ հատկապես խաղողագործությունը և պտղատու մշակաբույսերը։",
  "Արմավիրն ունի բազմաթիվ պատմական հուշարձաններ և տոնակատարություններ, որոնք պահպանվում են մինչ օրս։"
    ]
  },
  

  
};

const marzData = data[marz];

if (marzData) {
    // About
    const aboutProvince = document.getElementById('aboutProvince');
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
        </div>`;

    // Sights
    const provSightsCards = document.getElementById('provSightsCards');

    marzData.sightsCardData.forEach(card=>{ 
        const cardDiv = document.createElement('div');
        cardDiv.className = 'provinces_sights_card';

        cardDiv.innerHTML = `
            <img src="${card.imgUrl}" alt="${card.title}">
                        <div class="provinces_sights_cards_opacity">
                            <a class="add_to_basket" href="#">+</a>
                            <div class="provinces_sights_card_content">
                                <h4>${card.title}</h4>
                                <p>${card.description}</p>
                            </div>
                        </div>
        `

        provSightsCards.appendChild(cardDiv);
    });

    //food
    const container = document.getElementById("foodContainer");

  marzData.foodData.forEach(food => {
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

    container.appendChild(card);
  });

  //hotels
  const hotelsContainer = document.getElementById("hotelsContainer");

marzData.hotelsData.forEach((hotel, index) => {
  const card = document.createElement("div");
  card.classList.add("hotels-slide");
  if (index === 0) card.classList.add("active");

  card.innerHTML = `
    <img src="${hotel.img}" alt="">
    <div class="hotels-slide_info">
        <a class="add_to_basket" href="#">+</a>
        <div class="hotels-slide_info_content">
            <h2>${hotel.title}</h2>
            <a target = '_blank' href="${hotel.link}">Տեսնել ավելին</a>
        </div>
    </div>
  `;

  hotelsContainer.appendChild(card);
});

 const slides = document.querySelectorAll('.hotels-slide');

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      slides.forEach(s => s.classList.remove('active'));
      slide.classList.add('active');
    });
  });

  // transport
  const transport = document.getElementById('transportContainer');

    transport.innerHTML = `
                    <div class="map">
                        <iframe src="${marzData.transportInfo[0].map}"></iframe>
                    </div>
                    <div class="pt_text">
                        <p>${marzData.transportInfo[0].text}</p>
                        <h4>Առաջարկվող երթուղի՝</h4>
                        <p class="route"> ${marzData.transportInfo[0].route}</p>
                    </div>`

    //events
    const cultureContainer = document.getElementById('cultureContainer');
        marzData.events.forEach(event => {
        cultureContainer.innerHTML += `
            <div class="swiper-slide">
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
            </div>`;
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

//facts
const factsContainer = document.getElementById("facts-container");

marzData.facts.forEach(fact => {
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





