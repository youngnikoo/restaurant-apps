import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

console.log(data);

const listRestaurant = data => {
  const restElement = document.querySelector('#restolist');
  restElement.innerHTML=''
  data.forEach(resto => {
    const {name, description, pictureId, city, rating} = resto;
    const listResto = document.createElement('div')

    listResto.innerHTML=`
      <article class="post-item">
        <img tabindex="0" class="post-item__thumbnail"
            src="${pictureId}" alt="${name}">
        <div tabindex="0" class="post-item__content">
          <h1 tabindex="0" class="post-item__title"><a href="#">${name}</a></h1>
          <span tabindex="0" class="post-item__rating fa fa-star checked"> ${rating}</span>
          <h2 tabindex="0" class="post-item__city">${city}</h2>
          <p tabindex="0" class="post-item__description">${description}</p>
        </div>
      </article>`

      restElement.appendChild(listResto);
  });
}
listRestaurant(data.restaurants);

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');

hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
})