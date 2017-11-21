'use strict';

var allProducts = [];
var productNames = ['bag', 'boots', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb',
  'water-can', 'wine-glass'];

function Product(name, path) {
  // TODO: Build your constructor and necessary properties.
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.shown = 0;
  allProducts.push(this);
}

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
for(var x = 0; x < productNames.length; x++){
  new Product(productNames[x], 'assets/' + productNames[x] + '.jpg');

}

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function(max) {
    // TODO: Hmm... what's going to happen here?
    return Math.round(Math.random() * (max - 0)) + 0;
  },

  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
    var pic =  document.getElementsByClassName('imgs');
    var dup = [-1, -1, -1];

    while(dup[0] === dup[1] || dup[0] === dup[2] || dup[1] === dup[2]) {
      dup = [productRank.getRandomIndex(allProducts.length), productRank.getRandomIndex(allProducts.length), productRank.getRandomIndex(allProducts.length)];
    }

    for(var i = 0; i < 3; i++) {
      pic[i].src = allProducts[dup[i]].path;
      allProducts[dup[i]].timesShown++;
    }
  },


  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
  },

  // imageEls: document.getElementsByClassName('imgs'),
};

// productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
