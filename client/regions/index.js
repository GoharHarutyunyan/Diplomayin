const params = new URLSearchParams(window.location.search);
const marz = params.get("marz")|| "lori";

const data = {
// yerevan/////////////////
 yerevan: {
    aboutData: [
        {
        title: "Երևան",
        description: " Երևանը Հայաստանի մայրաքաղաքն է և ամենամեծ քաղաքը։ Քաղաքը հանդիսանում է երկրի քաղաքական, տնտեսական և մշակութային կենտրոնը։ Երևանը հայտնի է իր պատմական հուշարձաններով, թանգարաններով և կրթական հաստատություններով։",
        center:"Երևան",
        area:"223 ",
        population: "1,127,000",
        climate: "Ցամաքային, շոգ ամառներով և ցուրտ ձմեռներով",
        
    },
    ],
    sightsCardData: [
       {
    "imgUrl": "/assets/images/yerevan/atractions/republic_square.jpg",
    "title": "Հանրապետության հրապարակ",
    "description": "Երևանի կենտրոնական հրապարակը՝ շրջապատված կառավարության, նախարարությունների շենքերով և Ազգային Պատկերասրահով։ Երեկոյան ժամերին այստեղ գործում են երգող շատրվաններ։"
  },
  {
    "imgUrl": "/assets/images/yerevan/atractions/cascade.jpg",
    "title": "Կասկադ համալիր",
    "description": "Հսկայական սանդղավանդակ՝ զարդարված ժամանակակից քանդակներով և արվեստի գործերով, որը կապում է քաղաքի կենտրոնը վերին թաղամասերի հետ։"
  },
  {
    "imgUrl": "/assets/images/yerevan/atractions/matenadaran.jpg",
    "title": "Մատենադարան",
    "description": "Մեսրոպ Մաշտոցի անվան հին ձեռագրերի ինստիտուտ և թանգարան, որտեղ պահվում են հազարավոր միջնադարյան ձեռագրեր։"
  },
  {
    "imgUrl": "/assets/images/yerevan/atractions/opera.jpg",
    "title": "Օպերայի և բալետի թատրոն",
    "description": "Ալեքսանդր Սպենդիարյանի անվան ազգային ակադեմիական թատրոն՝ հայկական մշակույթի կենտրոններից մեկը։"
  },
  {
    "imgUrl": "/assets/images/yerevan/atractions/genocide_memorial.jpg",
    "title": "Ծիծեռնակաբերդ",
    "description": "Հայոց ցեղասպանության զոհերի հիշատակին նվիրված հուշահամալիր և թանգարան։"
  },
  {
    "imgUrl": "/assets/images/yerevan/atractions/northern_avenue.jpg",
    "title": "Հյուսիսային պողոտա",
    "description": "Ժամանակակից պողոտա՝ լի առևտրային կենտրոններով, սրճարաններով և ռեստորաններով։"
  },
  {
    "imgUrl": "/assets/images/yerevan/atractions/vernissage.jpg",
    "title": "Վերնիսաժ",
    "description": "Բացօթյա շուկա, որտեղ կարելի է գտնել հայկական հուշանվերներ, արվեստի գործեր և ձեռագործ իրեր։"
  },
  {
    "imgUrl": "/assets/images/yerevan/atractions/skyball.jpg",
    "title": "SkyBall",
    "description": "Աերոստատով թռիչքներ՝ առաջարկող յուրահատուկ փորձառություն քաղաքի վերևից։"
  },
    {
    "imgUrl": "/assets/images/yerevan/atractions/cafe_central.jpg",
    "title": "Café Central",
    "description": "Երևանի կենտրոնում գտնվող սրճարան՝ առաջարկող եվրոպական և հայկական խոհանոց։"
  },
  {
    "imgUrl": "/assets/images/yerevan/atractions/green_bean.jpg",
    "title": "The Green Bean",
    "description": "Էկոլոգիապես մաքուր սրճարան՝ առաջարկող օրգանական սուրճ և բուսական ուտեստներ։"
  },
    
    ],
    foodData: [
      {
    "img": "/assets/images/yerevan/food/khorovats.jpg",
    "name": "Խորոված",
    "ingredients": "Խոզի կամ գառան միս, սոխ, աղ, պղպեղ, փայտածուխով գրիլ"
  },
  {
    "img": "/assets/images/yerevan/food/tolma.jpg",
    "name": "Տոլմա",
    "ingredients": "Խորհուրդ է տրվում խաղողի տերևով կամ կաղամբով, լցոնված աղացած մսով, բրնձով, սոխով և համեմունքներով"
  },
  {
    "img": "/assets/images/yerevan/food/harissa.jpg",
    "name": "Հարիսա",
    "ingredients": "Ձավար, հավի կամ գառան միս, կարագ, աղ"
  },
  {
    "img": "/assets/images/yerevan/food/khash.jpg",
    "name": "Խաշ",
    "ingredients": "տավարի ոսկորներ (հատկապես ոտքի մաս), ջուր, աղ, սխտոր, լավաշ"
  },
  {
    "img": "/assets/images/yerevan/food/zhingyalov_hac.jpg",
    "name": "Ժինգյալով հաց",
    "ingredients": "Բարակ հաց՝ լցոնված ատամելի վայրի կանաչիներով (մոտ 10-20 տեսակ)"
  },
  {
    "img": "/assets/images/yerevan/food/basturma.jpg",
    "name": "Բաստուրմա",
    "ingredients": "Չորացրած տավարի միս, չաման, պղպեղ, սխտոր, աղ"
  }
    ],
    hotelsData: [
      {
    img: "/assets/images/yerevan/hotels/aram.jpg",
    title: "Aram Street Apartment",
    link: "https://www.booking.com/hotel/am/aram-street-apartment-yerevan.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dist=0&group_adults=2&group_children=0&hapos=2&hpos=2&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747953439&srpvid=15859f04f5f90062&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/yerevan/hotels/sphera.jpg",
    title: "Sphera by Stellar Hotels",
    link: "https://www.booking.com/hotel/am/sphera-by-stellar-hotels-yerevan.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325645&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=12&hpos=12&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747953557&srpvid=ce399f4253de006d&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/yerevan/hotels/boulevard.jpg",
    title: "Boulevard Hotel",
    link: "https://www.booking.com/hotel/am/boulevard.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dist=0&group_adults=2&group_children=0&hapos=11&hpos=11&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747953632&srpvid=15859f04f5f90062&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/yerevan/hotels/avenu.jpg",
    title: "Avenue ApartHotel",
    link: "https://www.booking.com/hotel/am/avenue-10.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dist=0&group_adults=2&group_children=0&hapos=14&hpos=14&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747953701&srpvid=15859f04f5f90062&type=total&ucfs=1&"
  },
   {
    img: "/assets/images/yerevan/hotels/comfort.jpg",
    title: "Comfort Hotel",
    link: "https://www.booking.com/hotel/am/comfort.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dist=0&group_adults=2&group_children=0&hapos=20&hpos=20&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747953755&srpvid=15859f04f5f90062&type=total&ucfs=1&"
  },
  
    ],
    transportInfo: [
    {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371025.21516373113!2d44.15891981220388!3d40.152923016637885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan!5e1!3m2!1sen!2sam!4v1747953332969!5m2!1sen!2sam",
        text: 'Լոռու մարզից Երևան կարելի է հասնել ավտոբուսով, միկրոավտոբուսով կամ անձնական մեքենայով։ Երևան-Վանաձոր-Սպիտակ ավտոբուսների կանոնավոր երթևեկություն կա։ Ճանապարհը տևում է մոտ 2.5-3 ժամ։ Կարող եք նաև օգտվել տաքսի ծառայություններից։',
        route: 'Վանաձոր → Սպիտակ → Աբովյան → Երևան'
    }
],
    events: [
    {
  title: "Երևանյան քաղաքային փառատոն",
  description: "Ամենամյա փառատոն, որը ներկայացնում է ժամանակակից արվեստը, երաժշտությունը, թատրոնը և մշակութային միջոցառումները՝ անցկացվում է ամռան վերջին ամիսներին։",
  location: "Երևան, քաղաքային հրապարակներ և թատրոններ",
  time: "Հուլիս-Օգոստոս",
  imgSrc: "/assets/images/yerevan/culture/yerevan_city_festival.jpg"
},
{
  title: "Երևանյան գինու փառատոն",
  description: "Տարածաշրջանի գինեգործության խոշորագույն փառատոն, որտեղ ներկայացվում են հայկական գինիներ, մասնավորապես ավանդական և նորարարական տեսականի։",
  location: "Երևան, Հանրապետության հրապարակ",
  time: "Հոկտեմբեր",
  imgSrc: "/assets/images/yerevan/culture/yerevan_wine_festival.jpg"
},
{
  title: "Երևանյան գրքի տոն",
  description: "Ամենամյա գրական տոն, որի ընթացքում անցկացվում են գրողների հանդիպումներ, գրքերի շնորհանդեսներ և գրական քննարկումներ։ Հիմնական նպատակն է խրախուսել ընթերցանությունը և աջակցել հայ հեղինակներին։",
  location: "Երևան, Հայաստանի ազգային գրադարան և գրախանութներ",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/yerevan/culture/yerevan_book_fair.jpeg"
},
{
  title: "Երևանյան կինոփառատոն",
  description: "Հայաստանում անցկացվող ամենախոշոր կինոփառատոնը, որը ներկայացնում է հայկական և միջազգային կինոյի լավագույն նմուշները։ Միջոցառումները ներառում են ֆիլմերի ցուցադրում, հանդիպումներ ռեժիսորների հետ և վարպետության դասընթացներ։",
  location: "Երևան, կինոթատրոններ",
  time: "Դեկտեմբեր",
  imgSrc: "/assets/images/yerevan/culture/yerevan_film_festival.jpg"
},
{
  title: "Անկախության օր",
  description: "Հայաստանի Հանրապետության անկախության օրը նշվում է շքերթներով, համերգներով և պաշտոնական միջոցառումներով՝ Հանրապետության հրապարակում։ Մեծածավալ տոնակատարություն է, որին մասնակցում են հազարավոր երևանցիներ։",
  location: "Երևան, Հանրապետության հրապարակ",
  time: "Սեպտեմբեր 21",
  imgSrc: "/assets/images/yerevan/culture/independence_day.jpg"
}
  
    ],
    facts: [
  "Երևանը հիմնադրվել է 782 թ-ին՝ Տիգրան Մեծի որդու կողմից։",
  "Երևանում է գտնվում աշխարհի ամենահին արգելոցներից մեկը՝ Էրեբունի ամրոցը։",
  "Երևանը համարվում է մշակութային ու ստեղծագործական կենտրոն՝ բազմաթիվ թատրոններով, թանգարաններով և պատկերասրահներով։",
    ]
  },
  
  
 // aragatsotn/////////////////
aragatsotn: {
    aboutData: [
        {
        title: "Արագածոտնի Մարզ",
        description: " Արագածոտնի մարզը գտնվում է Հայաստանի հյուսիսարևմտյան հատվածում։ Մարզը հայտնի է Արագած լեռով՝ Հայաստանի ամենաբարձր գագաթով (4090 մ)։ Տարածքը հարուստ է պատմամշակութային հուշարձաններով, ներառյալ միջնադարյան եկեղեցիներ և ամրոցներ։ Գյուղատնտեսությունը մարզի հիմնական զբաղմունքն է, հատկապես հացահատիկի և կարտոֆիլի մշակումը։",
        center:"Աշտարակ",
        area:"2,756 ",
        population: " 131,500",
        climate: "Ցամաքային, ցուրտ ձմեռներով և մեղմ ամառներով",
        
    },
    ],
    sightsCardData: [
       {
    "imgUrl": "/assets/images/Aragatsotn/atractions/amberd.jpg",
    "title": "Ամբերդ ամրոց",
    "description": "7-րդ դարի ամրոց՝ տեղակայված Արագած լեռան լանջերին՝ 2300 մ բարձրության վրա։ Ներառում է Վահրամաշեն եկեղեցին և միջնադարյան բաղնիք։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/saghmosavank.jpg",
    "title": "Սաղմոսավանք վանք",
    "description": "13-րդ դարի վանական համալիր՝ կառուցված Կասաղ գետի կիրճի եզրին։ Հայտնի է իր ճարտարապետությամբ և պատմական նշանակությամբ։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/hovhannavank.png",
    "title": "Հովհաննավանք վանք",
    "description": "4-րդ դարի վանական համալիր՝ վերակառուցված 13-րդ դարում։ Տեղակայված է Կասաղ գետի կիրճի եզրին՝ հայտնի իր խաչքարերով։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/byurakan_observatory.jpg",
    "title": "Բյուրականի աստղադիտարան",
    "description": "Հիմնադրվել է 1946 թվականին՝ ակադեմիկոս Վիկտոր Համբարձումյանի կողմից։ Առաջատար աստղագիտական կենտրոն՝ առաջարկում է հանրային դիտումներ։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/armenian_alphabet_monument.jpg",
    "title": "Հայոց այբուբենի հուշարձան",
    "description": "Հուշարձան՝ բաղկացած 39 մեծ տառերից, տեղադրված Արտաշավան գյուղի մոտ՝ ի պատիվ Մեսրոպ Մաշտոցի։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/mount_aragats.jpg",
    "title": "Արագած լեռ",
    "description": "Հայաստանի ամենաբարձր լեռը՝ 4090 մ բարձրությամբ։ Սիրված է լեռնագնացների և բնության սիրահարների կողմից։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/astvatsankal.jpg",
    "title": "Աստվածանքալ վանք",
    "description": "4-13-րդ դարերի վանական համալիր՝ հայտնի իր միջնադարյան ճարտարապետությամբ և մուքարնաս դիզայնով։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/tegher.jpg",
    "title": "Տեղերի վանք",
    "description": "13-րդ դարի վանական համալիր՝ կառուցված արքայադուստր Խաթունի համար։ Գտնվում է Արագած լեռան հարավ-արևելյան լանջերին։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/aruchavank.jpg",
    "title": "Արուճավանք",
    "description": "7-րդ դարի եկեղեցի՝ կառուցված Արուճ գյուղում։ Միջնադարյան հայկական ճարտարապետության կարևոր օրինակ։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/vahramashen.jpg",
    "title": "Վահրամաշեն եկեղեցի",
    "description": "1026 թվականին կառուցված եկեղեցի՝ տեղակայված Ամբերդ ամրոցի մոտ։ Հայտնի է իր խաչաձև կառուցվածքով։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/aregimuseum.jpg",
    "title": "Արեգի թանգարան",
    "description": "Թանգարան՝ նվիրված հայկական սննդի պահպանման ավանդույթներին՝ առաջարկող էքսկուրսիաներ։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/kari_lake.jpg",
    "title": "Կարի լիճ",
    "description": "Բարձրադիր լիճ՝ տեղակայված Արագած լեռան վրա՝ սիրված էքսկուրսիաների և պիկնիկների համար։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/dashtadem.jpg",
    "title": "Դաշտադեմ ամրոց",
    "description": "10-րդ դարի ամրոց՝ հայտնի իր պատմական նշանակությամբ և ճարտարապետությամբ։"
  },
  {
    "imgUrl": "/assets/images/Aragatsotn/atractions/gegharot_waterfall.jpg",
    "title": "Գեղարոտ ջրվեժ",
    "description": "17 մ բարձրությամբ ջրվեժ՝ տեղակայված 3000 մ բարձրության վրա՝ սիրված էքսկուրսիաների համար։"
  }

    ],
    foodData: [
      {
    img: "/assets/images/Aragatsotn/food/harisa.jpg",
    name: "Հարիսա",
    ingredients: "Ցորենի կուտ, տավարի կամ հավի միս, կարագ, աղ"
  },
  {
    img: "/assets/images/Aragatsotn/food/tarhana.jpg",
    name: "Թարխանա",
    ingredients: "Աղացած ցորեն, մածուն, սոխ, համեմունքներ"
  },
  {
    img: "/assets/images/Aragatsotn/food/zhingyalov-hats.jpg",
    name: "Ժինգյալով հաց",
    ingredients: "Տեսակավոր վայրի կանաչիներ, ալյուր, ջուր, աղ"
  }
  
    ],
    hotelsData: [
      {
      img: "/assets/images/Aragatsotn/hotels/Family.jpg",
      title: "Family House",
      link: "https://www.booking.com/hotel/am/family-house-aghdzk.en-gb.html?aid=1610684&label=yerevan-6gF7mAQa04qmgSNJF8gpWAS541143137437%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-325528430770%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=39ea0ee228b891a8f3e7a8b3b7555028&dest_id=174963&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=4&hpos=4&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748019286&srpvid=450476dedd870360&type=total&ucfs=1&"
    },
      {
      img: "/assets/images/Aragatsotn/hotels/old byurakan.jpg",
      title: "Old Byurakan Gouest House",
      link: "https://www.booking.com/hotel/am/old-byurakan-gouest-house.en-gb.html?aid=1610684&label=yerevan-6gF7mAQa04qmgSNJF8gpWAS541143137437%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-325528430770%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=39ea0ee228b891a8f3e7a8b3b7555028&dest_id=174963&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=11&hpos=11&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748019394&srpvid=450476dedd870360&type=total&ucfs=1&"
    },
      {
      img: "/assets/images/Aragatsotn/hotels/amberd.jpg",
      title: "Amberd Hotel",
      link: "https://www.booking.com/hotel/am/amberd.en-gb.html?aid=1610684&label=yerevan-6gF7mAQa04qmgSNJF8gpWAS541143137437%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-325528430770%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=39ea0ee228b891a8f3e7a8b3b7555028&dest_id=174963&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=13&hpos=13&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748019579&srpvid=450476dedd870360&type=total&ucfs=1&"
    },
      {
      img: "/assets/images/Aragatsotn/hotels/qotej.jpg",
      title: "Byurakan Guesthouse & Cottage",
      link: "https://www.booking.com/hotel/am/byurakan-guesthouse.en-gb.html?aid=1610684&label=yerevan-6gF7mAQa04qmgSNJF8gpWAS541143137437%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-325528430770%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=39ea0ee228b891a8f3e7a8b3b7555028&dest_id=174963&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=21&hpos=21&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748019745&srpvid=2c4577c3747a0079&type=total&ucfs=1&"
    },
      {
      img: "/assets/images/Aragatsotn/hotels/byur.jpg",
      title: "ByurHouse",
      link: "https://www.booking.com/hotel/am/byurhouse.en-gb.html?aid=1610684&label=yerevan-6gF7mAQa04qmgSNJF8gpWAS541143137437%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-325528430770%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=39ea0ee228b891a8f3e7a8b3b7555028&dest_id=-2324645&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748020124&srpvid=5aba788996880803&type=total&ucfs=1&"
    },
      {
      img: "/assets/images/Aragatsotn/hotels/pandok.jpg",
      title: "Pandok Guesthouse",
      link: "https://www.booking.com/hotel/am/pandok-guesthouse.en-gb.html?aid=1610684&label=yerevan-6gF7mAQa04qmgSNJF8gpWAS541143137437%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-325528430770%3Alp9070052%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfqnDqqG8nt10AsofPfvtt0&sid=39ea0ee228b891a8f3e7a8b3b7555028&dest_id=174963&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=33&hpos=8&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748019742&srpvid=2c4577c3747a0079&type=total&ucfs=1&"
    },
  
    ],
    transportInfo: [
    {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388448.40375203744!2d43.76262902349465!3d40.480725684590574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a6fa4e7ef22df%3A0x81d8379f517d47c0!2z1LHWgNWh1aPVodWu1bjVv9W2!5e0!3m2!1shy!2sam!4v1748020660776!5m2!1shy!2sam",
    text: "Երևանից Արագածոտն մարզ կարելի է հասնել ավտոբուսներով կամ միկրոավտոբուսներով՝ Աբովյան, Աշտարակ քաղաքների միջով։ Ճանապարհը տևում է մոտ 40-50 րոպե։",
    route: "Երևան → Աբովյան → Աշտարակ → Արագածոտն մարզ"
}
],
    events: [

      {
        title: "Արագածի փառատոն",
        description: "Մշակութային և էկոտուրիզմային փառատոն՝ անցկացվող Արագած լեռան ստորոտում, ներառում է հեծանվավազք, երաժշտական ելույթներ և ավանդական արհեստների ցուցադրություն։",
        location: "Արագածի լանջեր",
        time: "Հուլիս",
        imgSrc: "/assets/images/Aragatsotn/culture/aragats_festival.png"
      },
      {
        title: "Սաղմոսավանքի մշակութային օրեր",
        description: "Սուրբ Սաղմոսավանքում անցկացվող մշակութային օրեր՝ համերգներով, արվեստի ցուցահանդեսներով և հոգևոր երաժշտությամբ։",
        location: "Սաղմոսավանք",
        time: "Օգոստոս",
        imgSrc: "/assets/images/Aragatsotn/culture/saghmosavank_days.jpg"
      },
      {
        title: "Տեղական խոհանոցի և արհեստների փառատոն",
        description: "Տարբեր համայնքներում կազմակերպվող փառատոն՝ նպատակով խթանել տեղական խոհանոցը և գյուղական ձեռագործ աշխատանքները։",
        location: "Արագածոտնի տարբեր համայնքներ",
        time: "Մայիս - Սեպտեմբեր",
        imgSrc: "/assets/images/Aragatsotn/culture/local_cuisine_crafts.jpg"
      }    
  
    ],
    facts: [
    "Արագածոտնի մարզում է գտնվում Արագած լեռը, որը Հայաստանի ամենաբարձր կետն է՝ 4090 մետր։",
  "Մարզը հարուստ է հնագիտական հուշարձաններով, այդ թվում՝ Կարինե վանքով և Ուջանի ժայռապատկերներով։",
  "Արագածոտնի պատմությունը սերտորեն կապված է հին հայկական թագավորությունների հետ։",

    ]
  },
  
  // shirak/////////////////
shirak: {
    aboutData: [
        {
        title: "Շիրակի Մարզ",
        description: " Շիրակի մարզը գտնվում է Հայաստանի հյուսիսարևմտյան հատվածում։ Մարզը հայտնի է իր պատմական քաղաքներով, ներառյալ Գյումրին՝ Հայաստանի երկրորդ խոշոր քաղաքը։ Տարածքը ունի զարգացած մշակույթ և արվեստ։",
        center:"Գյումրի",
        area:"2,680",
        population: "237,900",
        climate: "Ցուրտ ձմեռներով և զով ամառներով",
        
    },
    ],
    sightsCardData: [
      {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Մարմաշենի վանք",
    "description": "10-րդ դարի վանական համալիր՝ բաղկացած հինգ եկեղեցիներից, կառուցված Վահրամ Պահլավունու կողմից։ Գտնվում է Մարմաշեն գյուղի մոտ։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Հոգեվանք վանք",
    "description": "Միջնադարյան վանական համալիր՝ տեղակայված Սառնաղբյուր գյուղի մոտ։ Գլխավոր եկեղեցին՝ Սուրբ Կարապետը, կառուցվել է 1205 թվականին։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Տրչկան ջրվեժ",
    "description": "Հայաստանի ամենաբարձր ջրվեժը՝ 22.5 մետր բարձրությամբ, տեղակայված Շիրակի և Լոռու մարզերի սահմանին։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Գյումրի քաղաք",
    "description": "Շիրակի մարզկենտրոնը՝ հայտնի իր պատմական կենտրոնով, մշակութային վայրերով և արվեստի կենտրոններով։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Սև բերդ",
    "description": "Ռուսական կայսրության ժամանակաշրջանի ամրոց՝ կառուցված 19-րդ դարում Գյումրիում։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Գյումրիի պատմության թանգարան",
    "description": "Թանգարան՝ ներկայացնող քաղաքի պատմությունը, մշակույթը և արվեստը։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Ավետիք Իսահակյանի տուն-թանգարան",
    "description": "Թանգարան՝ նվիրված հայ գրող Ավետիք Իսահակյանին, ներկայացնող նրա կյանքը և ստեղծագործությունները։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Սուրբ Ամենափրկիչ եկեղեցի",
    "description": "Գյումրիի կենտրոնում գտնվող եկեղեցի՝ կառուցված 19-րդ դարում, հայտնի իր ճարտարապետությամբ։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Գյումրիի կերպարվեստի պատկերասրահ",
    "description": "Պատկերասրահ՝ ներկայացնող հայ արվեստագետների գործեր և ժամանակակից արվեստ։"
  },
  {
    "imgUrl": "/assets/images/Shirak/attractions/marmashen.jpg",
    "title": "Գյումրիի դրամատիկական թատրոն",
    "description": "Թատրոն՝ ներկայացնող հայ դասական և ժամանակակից դրամատուրգիա։"
  }
    
    ],
    foodData: [
     {
    img: "/assets/images/Shirak/food/kyalla.jpg",
    name: "Քյաղլա",
    ingredients: "Տավարի գլուխ, պոչ, ոսկորներով միս, սոխ, համեմունքներ"
  },
  {
    img: "/assets/images/Shirak/food/khash.jpg",
    name: "Խաշ",
    ingredients: "Տավարի ոտք, աղ, սխտոր, լավաշ"
  },
  {
    img: "/assets/images/Shirak/food/matsnaprtosh.jpg",
    name: "Մածնափրթոշ",
    ingredients: "Մածուն, հաց, սոխ, կարագ, համեմունքներ"
  },
  {
    img: "/assets/images/Shirak/food/korkot.jpg",
    name: "Կորկոտ",
    ingredients: "Ցորենի կուտ, տավարի միս կամ կարագ, աղ"
  }
  
    ],
    hotelsData: [
      {
    img: "/assets/images/Shirak/hotels/igit.jpg",
    title: "Igit Plaza Hotel",
    link: "https://www.booking.com/hotel/am/igit-plaza.html?aid=318615&label=English_Armenia_EN_AM_29510061745-86u4JRJr6_13IDVO0wSKoAS640938665492%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55397054508%3Atidsa-386017564237%3Alp9070052%3Ali%3Adec%3Adm%3Aag29510061745%3Acmp638401877&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=1199&dest_type=airport&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748069623&srpvid=94d230712a42020a&type=total&ucfs=1&"
  },
       {
    img: "/assets/images/Shirak/hotels/igit.jpg",
    title: "Igit Plaza Hotel",
    link: "https://www.booking.com/hotel/am/igit-plaza.html?aid=318615&label=English_Armenia_EN_AM_29510061745-86u4JRJr6_13IDVO0wSKoAS640938665492%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55397054508%3Atidsa-386017564237%3Alp9070052%3Ali%3Adec%3Adm%3Aag29510061745%3Acmp638401877&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=1199&dest_type=airport&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748069623&srpvid=94d230712a42020a&type=total&ucfs=1&"
  },
       {
    img: "/assets/images/Shirak/hotels/igit.jpg",
    title: "Igit Plaza Hotel",
    link: "https://www.booking.com/hotel/am/igit-plaza.html?aid=318615&label=English_Armenia_EN_AM_29510061745-86u4JRJr6_13IDVO0wSKoAS640938665492%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55397054508%3Atidsa-386017564237%3Alp9070052%3Ali%3Adec%3Adm%3Aag29510061745%3Acmp638401877&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=1199&dest_type=airport&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748069623&srpvid=94d230712a42020a&type=total&ucfs=1&"
  },
       {
    img: "/assets/images/Shirak/hotels/igit.jpg",
    title: "Igit Plaza Hotel",
    link: "https://www.booking.com/hotel/am/igit-plaza.html?aid=318615&label=English_Armenia_EN_AM_29510061745-86u4JRJr6_13IDVO0wSKoAS640938665492%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55397054508%3Atidsa-386017564237%3Alp9070052%3Ali%3Adec%3Adm%3Aag29510061745%3Acmp638401877&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=1199&dest_type=airport&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748069623&srpvid=94d230712a42020a&type=total&ucfs=1&"
  },
       {
    img: "/assets/images/Shirak/hotels/igit.jpg",
    title: "Igit Plaza Hotel",
    link: "https://www.booking.com/hotel/am/igit-plaza.html?aid=318615&label=English_Armenia_EN_AM_29510061745-86u4JRJr6_13IDVO0wSKoAS640938665492%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55397054508%3Atidsa-386017564237%3Alp9070052%3Ali%3Adec%3Adm%3Aag29510061745%3Acmp638401877&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=1199&dest_type=airport&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748069623&srpvid=94d230712a42020a&type=total&ucfs=1&"
  },
       {
    img: "/assets/images/Shirak/hotels/igit.jpg",
    title: "Igit Plaza Hotel",
    link: "https://www.booking.com/hotel/am/igit-plaza.html?aid=318615&label=English_Armenia_EN_AM_29510061745-86u4JRJr6_13IDVO0wSKoAS640938665492%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55397054508%3Atidsa-386017564237%3Alp9070052%3Ali%3Adec%3Adm%3Aag29510061745%3Acmp638401877&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=1199&dest_type=airport&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748069623&srpvid=94d230712a42020a&type=total&ucfs=1&"
  },
       {
    img: "/assets/images/Shirak/hotels/igit.jpg",
    title: "Igit Plaza Hotel",
    link: "https://www.booking.com/hotel/am/igit-plaza.html?aid=318615&label=English_Armenia_EN_AM_29510061745-86u4JRJr6_13IDVO0wSKoAS640938665492%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55397054508%3Atidsa-386017564237%3Alp9070052%3Ali%3Adec%3Adm%3Aag29510061745%3Acmp638401877&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=1199&dest_type=airport&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1748069623&srpvid=94d230712a42020a&type=total&ucfs=1&"
  },
  
    ],
    transportInfo: [
   {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469714.5917182863!2d42.5062462428369!3d40.806840034192774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a084022420c29%3A0x4ec00172cf1500cc!2sShirak%20Province!5e1!3m2!1sen!2sam!4v1748069754514!5m2!1sen!2sam",
    text: "Երևանից Շիրակի մարզ կարելի է հասնել ավտոբուսով կամ միկրոավտոբուսով՝ Աբովյան և Գյումրի քաղաքների միջով։ Ճանապարհը տևում է մոտ 3.5-4 ժամ։",
    route: "Երևան → Աբովյան → Գյումրի → Շիրակի մարզ"
}
],
    events: [
    {
  title: "Գյումրու քաղաքային տոն",
  description: "Գյումրիի ավանդական քաղաքային տոն, որը ներառում է տեղական երաժշտություն, պարեր, և ձեռագործի ցուցադրություն։",
  location: "Գյումրի",
  time: "Հունիս",
  imgSrc: "/assets/images/Shirak/culture/gyumri_city_festival.jpg"
},
{
  title: "Շիրակի բարբառային փառատոն",
  description: "Տեղական բարբառների և բանաստեղծական արվեստի խթանումը, հայացք դեպի ավանդական բանահյուսություն։",
  location: "Շիրակ գյուղեր",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Shirak/culture/barbarian_festival.jpg"
},
{
  title: "Շիրակի բարբառային փառատոն",
  description: "Տեղական բարբառների և բանաստեղծական արվեստի խթանումը, հայացք դեպի ավանդական բանահյուսություն։",
  location: "Շիրակ գյուղեր",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Shirak/culture/barbarian_festival.jpg"
},
{
  title: "Շիրակի բարբառային փառատոն",
  description: "Տեղական բարբառների և բանաստեղծական արվեստի խթանումը, հայացք դեպի ավանդական բանահյուսություն։",
  location: "Շիրակ գյուղեր",
  time: "Սեպտեմբեր",
  imgSrc: "/assets/images/Shirak/culture/barbarian_festival.jpg"
},


    
  
    ],
    facts: [
     "Շիրակի մարզի Գյումրին հայտնի է իր հին փողոցներով, 19-րդ դարի ճարտարապետությամբ և հյուրընկալությամբ։",
  "Գյումրին երկրորդ խոշոր քաղաքն է Հայաստանում և ունի հարուստ մշակութային կյանք՝ թատրոններ, թանգարաններ ու փառատոներ։",
  "Շիրակի մարզում գտնվում են բազմաթիվ պատմական և կրոնական կառույցներ, ինչպիսիք են Ախուրյանի վանքը և Ախուրյան գետի հովիտը։",
    ]
  },

//լոռի///////////////

  lori: {
    aboutData: [
        {
        title: "Լոռվա Մարզ",
        description: " Լոռու մարզը գտնվում է Հայաստանի հյուսիսում։ Տարածքը հայտնի է իր կանաչապատ լեռնաշխարհով, խոր ձորերով և գետերով։ Մարզում կան բազմաթիվ պատմամշակութային հուշարձաններ, ներառյալ Սանահին և Հաղպատ վանքերը։",
        center:"Վանաձոր",
        area:"3,800 ",
        population: "210,000",
        climate: "Մեղմ լեռնային",
      
    },
    ],
    sightsCardData: [
      {
        imgUrl: '/assets/images/Lori/atractions/sanahin.jpg',
        title: 'Սանահին վանք',
        description: 'ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության ցանկում ընդգրկված վանական համալիր։',
    },
    {
        imgUrl: '/assets/images/Lori/atractions/haxpat.jpg', 
        title: 'Հաղպատավանք',
        description: 'Սանահինի հետ միասին ՅՈՒՆԵՍԿՕ-ի ցանկում ընդգրկված միջնադարյան վանական համալիր՝ հայտնի իր ճարտարապետությամբ։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/dsegh.jpg',
        title: 'Դսեղ',
        description: 'Գեղեցիկ բնությամբ գյուղ՝ համարվող Հովհաննես Թումանյանի ծննդավայրն ու թանգարանի տեղակայումը։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/odzun.jpg',
        title: 'Օձունի եկեղեցի',
        description: '6-7-րդ դարերի բազիլիկ եկեղեցի՝ հայտնի իր բացառիկ խաչքարերով և ճարտարապետական առանձնահատկություններով։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/qobayr.jpg',
        title: 'Քոբայրի վանք',
        description: '12-րդ դարի վանական համալիր՝ դիրքավորված ժայռապատ վայրում՝ գեղեցիկ մ freskներով և գրություններով։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/alaverdi.jpg',
        title: 'Ալավերդի քաղաք',
        description: 'Լոռվա արդյունաբերական կենտրոնը՝ շրջապատված վանական համալիրներով և լեռնաշղթաներով։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/aqori.jpg',
        title: 'Աքորի գյուղ',
        description: 'Նրբագեղ բնությամբ և պատմական անցյալով գյուղ՝ տեսարանով դեպի Դեբեդի կիրճը։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/lori berd.jpg',
        title: 'Լոռի բերդ',
        description: 'Միջնադարյան բերդ՝ կառուցված Ստեփան Տարոնեցու կողմից՝ ռազմավարական կարևոր դիրքով։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/dendropark.png',
        title: 'Ստեփանավանի Դենդրոպարկ (Սոճուտ)',
        description: 'Բնության գողտրիկ անկյուն՝ հարուստ սոճիներով և մաքուր օդով։ Հիանալի վայր է առողջարար զբոսանքների և լուսանկարչության համար։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/tumanyani tun tangaran.jpg',
        title: 'Թումանյանի թանգարան',
        description: 'Հայ մեծ գրողի՝ Հովհաննես Թումանյանի կյանքին ու ստեղծագործությանը նվիրված թանգարան։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/trchkan.jpg',
        title: 'Թռչկանի ջրվեժ',
        description: 'Թռչկանի ջրվեժը գտնվում է Շիրակի և Լոռու մարզերի սահմանին։ Այն հատկապես գեղեցիկ է ձմռանը, երբ ամբողջովին սառչում է։'
    },
    {
        imgUrl: '/assets/images/Lori/atractions/gevorg ekexeci.jpg',
        title: 'Սուրբ Գևորգ եկեղեցի (Բազում)',
        description: 'Փոքր, լեռների մեջ թաքնված եկեղեցի՝ հին պատմությամբ ու հոգևոր հանգստությամբ։'
    }
    ],
    foodData: [
      {
    img: "/assets/images/Lori/food/paxlava.webp",
    name: "Փախլավա",
    ingredients: "Փխրուն խմոր, ընկույզ, շաքար, կարագ, մեղր կամ օշարակ"
  },
  {
    img: "/assets/images/Lori/food/ghapama.jpg",
    name: "Ղափամա",
    ingredients: "Դդում, բրինձ, չամիչ, ընկույզ, մեղր, դարչին"
  },
  {
    img: "/assets/images/Lori/food/tanapur.jpg",
    name: "Թանապուր (Սպաս)",
    ingredients: "Թան, ձավար, սխտոր, աղ, կանաչի"
  },
  {
    img: "/assets/images/Lori/food/khashil.jpg",
    name: "Խաշիլ",
    ingredients: "Ցորենի ձավար, ջուր, կարագ, աղ"
  },
  {
    img: "/assets/images/Lori/food/muraba.jpg",
    name: "Ձմերուկով մուրաբա",
    ingredients: "Ձմերուկի կեղև, շաքար, կիտրոնի աղ կամ կիտրոն"
  }
    ],
    hotelsData: [
      {
    img: "/assets/images/Lori/hotels/hyuratun.jpg",
    title: "Լոռի Հյուրատուն",
    link: "https://www.booking.com/hotel/am/lori-vanadzor.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=distance_from_search&srepoch=1747923317&srpvid=682f316e01990208df7f399bddd1b167&type=total&ucfs=1&"
  },
  {
    img: "/assets/images/Lori/hotels/arevaham.png",
    title: "Արևահամ Բուտիկ Հյուրանոց ",
    link: "https://www.booking.com/hotel/am/arevaham.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747922741&srpvid=682f2f34012b011029d07d8a235ee59f&type=total&ucfs=1&"
  },
  {
    img: "/assets/images/Lori/hotels/lux.jpg",
    title: "Lux Home",
    link: "https://www.booking.com/hotel/am/lux-home-vanadzor.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325015&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=5&hpos=5&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747923531&srpvid=682f323f002c0133ebc3d1da315160aa&type=total&ucfs=1&"
  },
  {
    img: "/assets/images/Lori/hotels/laguna.jpg",
    title: "Laguna Hotel",
    link: "https://www.booking.com/hotel/am/laguna.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325015&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747923670&srpvid=682f323f002c0133ebc3d1da315160aa&type=total&ucfs=1&activeTab=main"
  },
  {
    img: "/assets/images/Lori/hotels/palermo.jpg",
    title: "Palermo Hotel",
    link: "https://www.booking.com/hotel/am/palermo.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325015&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=10&hpos=10&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747923794&srpvid=682f323f002c0133ebc3d1da315160aa&type=total&ucfs=1&"
  },
  {
    img: "/assets/images/Lori/hotels/auroom.jpg",
    title: "AuRoom",
    link: "https://www.booking.com/hotel/am/otel-auroom-vanadzor.html?aid=356980&sid=7c278dcdebddcebc7e31f7c7e42f6a3f&dest_id=-2325015&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=20&hpos=20&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1747923918&srpvid=682f323f002c0133ebc3d1da315160aa&type=total&ucfs=1&"
  }
    ],
    transportInfo: [
      {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366447.83474744525!2d44.1603744548749!3d40.983670250524355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041d1c1f284ea5f%3A0x77b9a6f72074803f!2sLori%20Province!5e1!3m2!1sen!2sam!4v1747924670027!5m2!1sen!2sam",
        text: 'Լոռու մարզ կարելի է հասնել Երևանից ավտոբուսով, միկրոավտոբուսով կամ անձնական մեքենայով՝ Վանաձորի և Ստեփանավանի ուղությամբ։ Ճանապարհը տևում է մոտ 2.5-3 ժամ։ Կարող եք օգտվել նաև տաքսի ծառայություններից կամ գարեջուրների զբոսաշրջային տուրերից։',
        route: 'Երևան → Աբովյան → Սպիտակ → Վանաձոր → Լոռու տարբեր քաղաքներ ու գյուղեր։'
    }
],
    events: [
      {
    title: "Թումանյանական օրեր",
    description: "Ամենամյա գրական փառատոն։ Միջոցառումն ունի ավանդական բնույթ և անց է կացվում ամեն տարի աշնանը՝ Հովհաննես Թումանյանի ծննդավայրում:",
    location: "Դսեղ գյուղ, Թումանյանի տուն-թանգարան",
    time: "ամեն ամառ, հիմնականում հուլիս ամսին",
    imgSrc: "/assets/images/Lori/culture/tumanyanakan orer.png"
  },
    {
      title: "Խորովածի փառատոն",
      description: "Թարմ մսից և բանջարեղենից պատրաստված խորովածը մատուցվում է տաք ածուխների վրա՝ խոզի, տավարի, ոչխարի, ձկան և բանջարեղենի տեսականիով։",
      location: "Ախթալա",
      time: "Օգոստոսի 21 ",
      imgSrc: "/assets/images/Lori/culture/xorovac.jpg"
    },
    {
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
    "imgUrl": "./images/Syunik/attractions/bgheno_noravank.jpg",
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
    "imgUrl": "/assets/images/Armavir/attractions/ejmiatsin_cathedral.jpg",
    "title": "Սուրբ Էջմիածնի Մայր Տաճար",
    "description": "Հայ առաքելական եկեղեցու հոգևոր կենտրոնը՝ կառուցված 301-303 թթ., համարվում է աշխարհի ամենահին քրիստոնեական տաճարներից։"
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
    //about
    const aboutProvince = document.getElementById('aboutProvince');

aboutProvince.innerHTML = `
                         <h2>${marzData.aboutData[0].title}</h2>
                    <p> ${marzData.aboutData[0].description}</p>
                    <div class="about_provinces_content_info">
                        <div class="box">
                            <i class="fa-solid fa-map-location-dot"></i>
                            <h4>Մարզկենտրոնը</h4>
                            <p>${marzData.aboutData[0].center}</p>
                        </div>
                        <div class="box">
                            <i class="fa-solid fa-chart-area"></i>
                            <h4>Տարածքը</h4>
                            <p>${marzData.aboutData[0].area}կմ²</p>
                        </div>
                        <div class="box">
                            <i class="fa-solid fa-person"></i>
                            <h4>Բնակչությունը</h4>
                            <p> ${marzData.aboutData[0].population}մարդ</p>
                        </div>
                        <div class="box">
                            <i class="fa-solid fa-cloud-sun-rain"></i>
                            <h4>Կլիման</h4>
                            <p>${marzData.aboutData[0].climate}</p>
                        </div>
                    </div>`


    //tesarjan vayrer
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





