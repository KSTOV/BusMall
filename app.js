'use strict'

const productImages = [];
const totalClick = 0;

function ImageProduct(url, name)
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
    let leftImageIndex = Math.floor(Math.random() * productImages.length);
    let rightImageIndex = Math.floor(Math.random() * productImages.length);
    let middleImageIndex = Math.floor(Math.random() * productImages.length);

    while (leftImageIndex === rightImageIndex)
    {
        rightImageIndex = Math.floor(Math.random() * productImages.length);
    }

    while (leftImageIndex === middleImageIndex)
    {
        middleImageIndex = Math.floor(Math.random() * productImages.length);
    }

    while (rightImageIndex === middleImageIndex)
    {
        middleImageIndex = Math.floor(Math.random() * productImages.length);
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

new ImageProduct('bag.jpg', 'bag');
new ImageProduct('banana.jpg', 'banana');
new ImageProduct('bathroom.jpg', 'bathroom');
new ImageProduct('boots.jpg', 'boots');
new ImageProduct('breakfast.jpg', 'breakfast');
new ImageProduct('bubblegum.jpg', 'bubblegum');
new ImageProduct('chair.jpg', 'chair');
new ImageProduct('cthulhu.jpg', 'cthulhu');
new ImageProduct('dog-duck.jpg', 'dog-duck');
new ImageProduct('dragon.jpg', 'dragon');
new ImageProduct('pen.jpg', 'pen');
new ImageProduct('pet-sweep.jpg', 'pet-sweep');
new ImageProduct('scissors.jpg', 'scissors');
new ImageProduct('shark.jpg', 'shark');
new ImageProduct('sweep.png', 'sweep');
new ImageProduct('tauntaun.jpg', 'tauntaun.');
new ImageProduct('unicorn.jpg', 'unicorn');
new ImageProduct('water-can.jpg', 'water-can');
new ImageProduct('wine-glass.jpg', 'wine-glass');

renderProducts();

console.log(productImages);