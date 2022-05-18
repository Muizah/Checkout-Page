var qty1Plus = document.querySelector("#qty1 .plus");
var qty1Minus = document.querySelector("#qty1 .minus");
var qty1Text = document.querySelector("#qty1 .text");
var current1 = parseInt(qty1Text.innerText);

var qty2Plus = document.querySelector("#qty2 .plus");
var qty2Minus = document.querySelector("#qty2 .minus");
var qty2Text = document.querySelector("#qty2 .text");
var current2 = parseInt(qty2Text.innerText);

var vintagePrice = document.querySelector(".vintageprice").innerText.slice(1);
var leviPrice = document.querySelector(".leviprice").innerText.slice(1);
var shippingPrice = document.querySelector(".shippingprice").innerText.slice(1);
var totalPrice = document.querySelector(".totalprice");
var convertedVintagePrice = parseFloat(vintagePrice);
var convertedLeviPrice = parseFloat(leviPrice);
var initialPrice = convertedVintagePrice + convertedLeviPrice;
totalPrice.innerText = dollar(initialPrice);
var sliceTotalPrice = totalPrice.innerText.slice(1);
function handleTotalPrice() {
  var tempTotal =
    convertedVintagePrice * current1 + convertedLeviPrice * current2;
  totalPrice.innerText = dollar(tempTotal);
}

function handlePlus() {
  current1 = current1 + 1;
  qty1Text.innerText = current1;
  handleTotalPrice();
}
qty1Plus.addEventListener("click", handlePlus); //callback fn
qty1Minus.addEventListener("click", handleMinus);

function handleMinus() {
  if (current1 > 1) {
    current1 = current1 - 1;
    qty1Text.innerText = current1;
    handleTotalPrice();
  }
}

function Plus() {
  current2 = current2 + 1;
  qty2Text.innerText = current2;
  handleTotalPrice();
}

qty2Plus.addEventListener("click", Plus);

function Minus() {
  if (current2 > 1) {
    current2 = current2 - 1;
    qty2Text.innerText = current2;
    handleTotalPrice();
  }
}
function dollar(amount) {
  return "$" + amount.toFixed(3);
}
qty2Minus.addEventListener("click", Minus);
