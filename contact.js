
  const form = document.querySelector('form');
  const popup = document.getElementById('messagePopup');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // կանխում ենք իրական ուղարկումը
    popup.style.display = 'flex';
    form.reset(); // մաքրում է դաշտերը
  });

  function closePopup() {
    popup.style.display = 'none';
  }
