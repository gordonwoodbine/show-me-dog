const select = document.querySelector('#breeds');
const dogImg = document.querySelector('.dog-image');
const dogLoader = document.querySelector('.dog-loading');
let dogURL = 'https://dog.ceo/api/breeds/image/random';

// Populate Select with list from breeds api

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
  });

  select.addEventListener('change', (e) => {
    if(e.target.value === 'random') {
      dogURL = 'https://dog.ceo/api/breeds/image/random';
      showNewDog();
    } else {
      dogURL = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
      showNewDog();
    }
  });

  dogImg.addEventListener('load', () => {
    dogLoader.classList.remove('show');
    dogImg.classList.add('show');
  });

  const dogButton = document.querySelector('.new-btn');
  dogButton.addEventListener('click', () => {
    showNewDog();
  })
}

async function showNewDog() {
  dogImg.classList.remove('show');
  dogLoader.classList.add('show');
  
  const res = await fetch(dogURL);
  const data = await res.json();

  dogImg.src = data.message;
}

init();


// handle breed change event
// hook up button to get new dog pic