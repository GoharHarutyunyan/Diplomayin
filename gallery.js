    document.addEventListener("DOMContentLoaded", function () {
      for (let i = 1; i <25; i++) {
        const div = document.querySelector(`.div${i}`);
        if (div) {
          div.style.backgroundImage = `url(./imges/Gallery/img_${i}.jpg)`;
        }
      }
    });


// login

