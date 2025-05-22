// famous atractions//////////////////
const sightsCardData = [
    {
        imgUrl: './imges/Lori/atractions/sanahin.jpg',
        title: 'Սանահին վանք',
        description: 'ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության ցանկում ընդգրկված վանական համալիր։',
    },
    {
        imgUrl: './imges/Lori/atractions/haxpat.jpg', 
        title: 'Հաղպատավանք',
        description: 'Սանահինի հետ միասին ՅՈՒՆԵՍԿՕ-ի ցանկում ընդգրկված միջնադարյան վանական համալիր՝ հայտնի իր ճարտարապետությամբ։'
    },
    {
        imgUrl: './imges/Lori/atractions/dsegh.jpg',
        title: 'Դսեղ',
        description: 'Գեղեցիկ բնությամբ գյուղ՝ համարվող Հովհաննես Թումանյանի ծննդավայրն ու թանգարանի տեղակայումը։'
    },
    {
        imgUrl: './imges/Lori/atractions/odzun.jpg',
        title: 'Օձունի եկեղեցի',
        description: '6-7-րդ դարերի բազիլիկ եկեղեցի՝ հայտնի իր բացառիկ խաչքարերով և ճարտարապետական առանձնահատկություններով։'
    },
    {
        imgUrl: './imges/Lori/atractions/qobayr.jpg',
        title: 'Քոբայրի վանք',
        description: '12-րդ դարի վանական համալիր՝ դիրքավորված ժայռապատ վայրում՝ գեղեցիկ մ freskներով և գրություններով։'
    },
    {
        imgUrl: './imges/Lori/atractions/alaverdi.jpg',
        title: 'Ալավերդի քաղաք',
        description: 'Լոռվա արդյունաբերական կենտրոնը՝ շրջապատված վանական համալիրներով և լեռնաշղթաներով։'
    },
    {
        imgUrl: './imges/Lori/atractions/aqori.jpg',
        title: 'Աքորի գյուղ',
        description: 'Նրբագեղ բնությամբ և պատմական անցյալով գյուղ՝ տեսարանով դեպի Դեբեդի կիրճը։'
    },
    {
        imgUrl: './imges/Lori/atractions/lori berd.jpg',
        title: 'Լոռի բերդ',
        description: 'Միջնադարյան բերդ՝ կառուցված Ստեփան Տարոնեցու կողմից՝ ռազմավարական կարևոր դիրքով։'
    },
    {
        imgUrl: './imges/Lori/atractions/dendropark.png',
        title: 'Ստեփանավանի Դենդրոպարկ (Սոճուտ)',
        description: 'Բնության գողտրիկ անկյուն՝ հարուստ սոճիներով և մաքուր օդով։ Հիանալի վայր է առողջարար զբոսանքների և լուսանկարչության համար։'
    },
    {
        imgUrl: './imges/Lori/atractions/tumanyani tun tangaran.jpg',
        title: 'Թումանյանի թանգարան',
        description: 'Հայ մեծ գրողի՝ Հովհաննես Թումանյանի կյանքին ու ստեղծագործությանը նվիրված թանգարան։'
    },
    {
        imgUrl: './imges/Lori/atractions/trchkan.jpg',
        title: 'Թռչկանի ջրվեժ',
        description: 'Թռչկանի ջրվեժը գտնվում է Շիրակի և Լոռու մարզերի սահմանին։ Այն հատկապես գեղեցիկ է ձմռանը, երբ ամբողջովին սառչում է։'
    },
    {
        imgUrl: './imges/Lori/atractions/gevorg ekexeci.jpg',
        title: 'Սուրբ Գևորգ եկեղեցի (Բազում)',
        description: 'Փոքր, լեռների մեջ թաքնված եկեղեցի՝ հին պատմությամբ ու հոգևոր հանգստությամբ։'
    }
]

const provSightsCards = document.getElementById('provSightsCards');

    sightsCardData.forEach(card=>{ 
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


// food.....................................
  const foodItems = [
    {
      name: "Լոռու փախլավա",
      description: "Բարակ խմորով պատրաստված ավանդական քաղցրավենիք՝ ընկույզով ու մեղրով:",
      image: "./imges/Lori/food/food_1_paxlava.webp",
    },
    {
      name: "Բորակի",
      description: "Փոքրիկ խմորեղեն՝ պանիրով, սպանախով կամ մսով։ Թխվում է օջախում։",
      image: "./imges/Lori/food/food_2_boraki.jpg",
    },
    {
      name: "Թանապուր",
      description: "Թանով ուտեստ՝ պատրաստված բրնձով, մածունով ու կանաչիով։",
      image: "./imges/Lori/food/food_3_tanrapur.jpg",
    },
  ];

  const slidesContainer = document.getElementById("slidesContainer");
  const thumbnailsContainer = document.getElementById("thumbnailsContainer");

  foodItems.forEach((item, index) => {
    // Slide
    const slide = document.createElement("div");
    slide.className = "carousel__slide";
    slide.innerHTML = `
      <div class="img-wrapper">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="caption">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `;
    slidesContainer.appendChild(slide);

    // Thumbnail
    const thumb = document.createElement("label");
    thumb.innerHTML = `<img src="${item.image}" alt="">`;
    thumbnailsContainer.appendChild(thumb);
  });
