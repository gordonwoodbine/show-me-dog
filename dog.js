const select = document.querySelector('#breeds');

async function init() {
  const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
  const res = await fetch(BREEDS_URL);
  const data = await res.json();

  const breedsArray = Object.keys(data.message);
  breedsArray.forEach(breed => {
    const opt = document.createElement('option');
    opt.value = breed;
    opt.innerText = breed;
    select.appendChild(opt);
  })
}

init();