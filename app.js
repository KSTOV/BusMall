'use strict';

let productImages = document.getElementById('product-images');
let leftImage = document.getElementById('leftImage');
let middleImage = document.getElementById('middleImage');
let rightImage = document.getElementById('rightImage');

let totalClicks = 0;
let totalRounds = 25;

let rightImgOnPage = null;
let middleImgOnPage = null;
let leftImgOnPage = null;

let ProductImage = function(url, product) 
{
  this.product = product;
  this.url = url;
  this.clicks = 0;
  this.timeshown = 0;
  this.previouslyShown = false;
  ProductImage.allImages.push(this);

};

ProductImage.allImages = [];

let renderNewImages = function(leftImageIndex, middleImageIndex, rightImageIndex) 
{
  leftImage.src = ProductImage.allImages[leftImageIndex].url;
  middleImage.src = ProductImage.allImages[middleImageIndex].url;
  rightImage.src = ProductImage.allImages[rightImageIndex].url;
};

let pickNewProduct = function() 
{
    let leftImageIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    let middleImageIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    let rightImageIndex = Math.floor(Math.random() * ProductImage.allImages.length);
  
    while(ProductImage.allImages[leftImageIndex].previouslyShown) 
    {
      leftImageIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    }
  
    while(rightImageIndex === leftImageIndex || ProductImage.allImages[rightImageIndex].previouslyShown) 
    {
      rightImageIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    }
    while(leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex || ProductImage.allImages[middleImageIndex].previouslyShown) 
    {
      middleImageIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    }
    for (let i = 0; i < ProductImage.allImages.length; i++) 
    {
      ProductImage.allImages[i].previouslyShown = false;
    }
 
  leftImgOnPage = ProductImage.allImages[leftImageIndex];
  middleImgOnPage = ProductImage.allImages[middleImageIndex];
  rightImgOnPage = ProductImage.allImages[rightImageIndex];

  
  ProductImage.allImages[leftImageIndex].previouslyShown = true;
  ProductImage.allImages[rightImageIndex].previouslyShown = true;
  ProductImage.allImages[middleImageIndex].previouslyShown = true;

  renderNewImages(leftImageIndex, middleImageIndex, rightImageIndex);
};

let handleClick = function(event)
{
  if(totalClicks < totalRounds ) 
  {
    let imageClicked = event.target;
    let id = imageClicked.id;

    if(id === 'leftImage' || id === 'middleImage'  || id === 'rightImage')
    {
      if (id === 'leftImage')
      {
         leftImgOnPage.clicks++;
      };
      if (id === 'middleImage') 
      {
        middleImgOnPage.clicks++;
      };
      if(id === 'rightImage')
      {
        rightImgOnPage.clicks++;
      };

      leftImgOnPage.timeshown++;
      middleImgOnPage.timeshown++;
      rightImgOnPage.timeshown++;
      pickNewProduct();
      };
    };
    totalClicks ++;

    if(totalClicks === totalRounds) 
    {
      productImages.removeEventListener('click', handleClick)
      showResults();
    }
  };

  let showResults = function ()
  {
  let resultsSection = document.getElementById('resultsSection');
//   let resultsList = document.createElement('ul');
//   resultsSection.appendChild(resultsList);
    for (let i = 0; i < ProductImage.allImages.length; i++)
    {
    //   let resultItem = document.createElement ('li');
    //   resultItem.textContent = `${ProductImage.allImages[i].product} was clicked ${ProductImage.allImages[i].clicks} times, and shown ${ProductImage.allImages[i].timeshown} times`;
    //   resultsList.appendChild(resultItem);
      makeImageChart()
    }
  };

  productImages.addEventListener('click', handleClick);

  new ProductImage('assets/bag.jpg', 'bag');
  new ProductImage('assets/banana.jpg', 'banana');
  new ProductImage('assets/bathroom.jpg', 'bathroom');
  new ProductImage('assets/boots.jpg', 'boots');
  new ProductImage('assets/breakfast.jpg', 'breakfast');
  new ProductImage('assets/bubblegum.jpg', 'bubblegum');
  new ProductImage('assets/chair.jpg', 'chair');
  new ProductImage('assets/cthulhu.jpg', 'cthulhu');
  new ProductImage('assets/dog-duck.jpg', 'dog-duck');
  new ProductImage('assets/dragon.jpg', 'dragon');
  new ProductImage('assets/pen.jpg', 'pen');
  new ProductImage('assets/pet-sweep.jpg', 'pet-sweep');
  new ProductImage('assets/scissors.jpg', 'scissors');
  new ProductImage('assets/shark.jpg', 'shark');
  new ProductImage('assets/sweep.png', 'sweep');
  new ProductImage('assets/tauntaun.jpg', 'tauntaun.');
  new ProductImage('assets/unicorn.jpg', 'unicorn');
  new ProductImage('assets/water-can.jpg', 'water-can');
  new ProductImage('assets/wine-glass.jpg', 'wine-glass');

pickNewProduct();

let genLabels = function(images) 
{
  let labelsArr = [];
  for (let i = 0; i < images.length; i++)
  {
    labelsArr.push(images[i].product);
  };
  return labelsArr;
};

let genDataClicks = function(images) 
{
  let dataArr = [];
  for (let i = 0; i < images.length; i++) 
  {
    dataArr.push(images[i].clicks);
  };
  return dataArr
};

let genDataTime = function(images) 
{
  let dataArr = [];
  for (let i = 0; i < images.length; i++) 
  {
    dataArr.push(images[i].timeshown);
  }
  return dataArr;
}

function makeImageChart()
{
let ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.font.size = 22;
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: genLabels(ProductImage.allImages),
    datasets: [{
      label: 'Clicks',
      data: genDataClicks(ProductImage.allImages),
      backgroundColor: [
        'rgba(30, 30, 30, 0.6)',
      ],
    },
    {
      label: 'Times Shown',
      data: genDataTime(ProductImage.allImages),
      backgroundColor: [
        'rgba(255, 102, 0, 0.6)',
      ],
    }
    ],
  },
  options: 
  {
    scales: 
    {
      yAxes: 
      [{
        ticks: 
        {
          beginAtZero: true,
        }
      }]
    }
  }
});
}