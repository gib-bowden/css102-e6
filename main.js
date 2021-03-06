
//create an empty string to hold your product objects
var allProducts = [];


//create an object for each product
var product1 = {
  name: "Mop Attire",
  imagePath: "./images/mopAttire.jpg",
  imageAlt: "Product: Mop Attire",
  description: "This is a really good description of our product. It really sells it. It;s the best.",
  price: 3000,
  soldOut: true
};

var product2 = {
  name: "Taco Suit",
  imagePath: "./images/tacoSuit.jpg",
  imageAlt: "Product: Taco Suit",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 25,
  soldOut: false
};

var product3 = {
  name: "Neck Decoration",
  imagePath: "./images/neckDecoration.jpg",
  imageAlt: "Product: Neck Decoration",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 750,
  soldOut: true
};

var product4 = {
  name: "Head Ornament",
  imagePath: "./images/headOrnament.jpg",
  imageAlt: "Product: Head Ornament",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 3.22,
  soldOut: true
};

var product5 = {
  name: "Boob Hat",
  imagePath: "./images/boobHat.jpg",
  imageAlt: "Product: Boob Hat",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 36,
  soldOut: false
};


//insert product objects into the array 
allProducts.push(product1)
allProducts.push(product2)
allProducts.push(product3)
allProducts.push(product4)
allProducts.push(product5)



//find the HTML element where the HTML needs to be loaded
var productContainer = document.getElementById("product-container");


//*****This is the code thta calls the function to populate the page******
printProductArraytoDom(allProducts);

//prints an array filled with product objects into the containter HTML
//takes the name of the product array as an argument
function  printProductArraytoDom(productArray) {

  for (var i = 0; i < productArray.length; i++) {
  	var currentProduct = productArray[i]
    var productDomString = buildDomString(currentProduct);
    productContainer.innerHTML += productDomString;
    }
}


// builds a dom string with explicit HTML structure
// param product takes the product object 

function buildDomString(product) {
  domString = "";

  domString +=  '<section class="product">'
  domString +=    '<div class="title">'
  domString +=      '<h2>'+product.name+'</h2>'
  domString +=    '</div>'
  domString +=    '<div class="image">'
  domString +=      '<img src="'+product.imagePath+'"'
  domString +=    '</div>'
  domString +=    '<div class="description">'
  domString +=      '<p>'+product.description+'</p>'
  domString +=      '<h6>$'+product.price+'</h6>'
  domString +=    '</div>'
  if (product.soldOut) {
    domString += '<div class="sold-out">'
    domString +=  '<img class="sold-out-img" src="./images/soldOut.png" alt="Sold Out">'
    domString += '</div>'
   } 
  domString += '</section>'

  return domString
}

