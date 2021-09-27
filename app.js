'use strict'

const productImages = [];
const totalClick = 0;

function Image(url, name)
{
    this.name = name;
    this.clicks = 0;
    this.timesShown = 0;
    this.url = `assets/${url}`;
    productImages.push(this);
}

let leftImageEl = document.getElementById('leftImage');
let rightImageEl = document.getElementById('rightImage');
let middleImageEl = document.getElementById('middleImage');

function renderProducts()
{
    let leftImageIndex = Math.floor(Math.random() * productImages.push.length);
    let rightImageIndex = Math.floor(Math.random() * productImages.push.length);
    let middleImageIndex = Math.floor(Math.random() * productImages.push.length);

    while (leftImageIndex === rightImageIndex)
    {
        rightImageIndex = Math.floor(Math.random() * productImages.push.length);
    }

    while (leftImageIndex === middleImageIndex)
    {
        middleImageIndex = Math.floor(Math.random() * productImages.push.length);
    }

    while (rightImageIndex === middleImageIndex)
    {
        middleImageIndex = Math.floor(Math.random() * productImages.push.length);
    }

    let left = productImages[leftImageIndex];
    let right = productImages[rightImageIndex];
    let middle = productImages[middleImageIndex];

    leftImageEl.src = left.url;
    leftImageEl.name = left.name;
    left.timesShown ++;

    rightImageEl.src = right.url;
    rightImageEl.name = right.name;
    right.timesShown++;

    middleImageEl.src = middle.url;
    middleImageEl.name = middle.name;
    middle.timesShown ++;
}

function handleClick(event)
{
    event.preventDefault();

    let imageEl = event.target;

    for (let i = 0; i < productImages.length; i++)
    {
        if (imageEl.name === productImages[i].name)
        {
            productImages[i].clicks++;
        }
    }

    renderProducts();
}

leftImageEl.addEventListener('click', handleClick);
rightImageEl.addEventListener('click', handleClick);
middleImageEl.addEventListener('click', handleClick);

new Image('bag.jpg', 'bag');
new Image('banana.jpg', 'banana');
new Image('bathroom.jpg', 'bathroom');
new Image('boots.jpg', 'boots');
new Image('breakfast.jpg', 'breakfast');
new Image('bubblegum.jpg', 'bubblegum');
new Image('chair.jpg', 'chair');
new Image('cthulhu.jpg', 'cthulhu');
new Image('dog-duck.jpg', 'dog-duck');
new Image('dragon.jpg', 'dragon');
new Image('pen.jpg', 'pen');
new Image('pet-sweep.jpg', 'pet-sweep');
new Image('scissors.jpg', 'scissors');
new Image('shark.jpg', 'shark');
new Image('sweep.png', 'sweep');
new Image('tauntaun.jpg', 'tauntaun.');
new Image('unicorn.jpg', 'unicorn');
new Image('water-can.jpg', 'water-can');
new Image('wine-glass.jpg', 'wine-glass')

renderProducts();