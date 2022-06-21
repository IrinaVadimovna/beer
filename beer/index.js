const recipesAll = JSON.parse(recipes);
const gallery = document.querySelector('.gallery');

function catalogBeer(card){
const cardElement = document.createElement('article');
cardElement.classList.add('card');

const beerImg = document.createElement('div');
beerImg.classList.add('card_beerImg');
beerImg.style.backgroundImage = `url(${card.image_url})`

cardElement.appendChild(beerImg);

const cardInfo = document.createElement('footer');
cardInfo.classList.add('card_info');

cardElement.appendChild(cardInfo);

const beerName = document.createElement('h3');
beerName.classList.add('card_beerName');
beerName.textContent = (card.name);

cardInfo.appendChild(beerName);

const beerTagline = document.createElement('p');
beerTagline.classList.add('card_beerTagline');
beerTagline.textContent = (`Описание: ${card.tagline}`);

cardInfo.appendChild(beerTagline);

const beerAbv = document.createElement('span');
beerAbv.classList.add('card_beerAbv');

const textAbv = document.createTextNode(`Крепость: ${card.abv}%`);

cardInfo.appendChild(textAbv);

return cardElement;

}

function recipesAllTemplate() {
    return `
    <article class="card">
        <div class="card_beerImg" style="background-image: url(${recipes.image_url});">
        </div>
        <footer class="card_info">
        <h3> ${recipes.name}</h3>
        <p class="card_beerTagline">${recipes.tagline}</p>
        <span> ${recipes.abv} </span>
        </footer>
        
    </article>`;
}
recipesAllTemplate()

recipesAll.forEach(card => {
    console.log(card)
    gallery.appendChild(catalogBeer(card));
});

function time(){
    let a = confirm('Вам уже есть 18 лет?');
if (a == false){
    history.back(1);
}
}
setTimeout(time, 1000);