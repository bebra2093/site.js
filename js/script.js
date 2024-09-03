/*console.log("Hello World!");

document.querySelector(".main").style.background = "blue";
document.querySelector(".product__title").innerHTML = "Текст";

var vlada = 52;
console.log(vlada);
console.log(vlada+10)
console.log(10*5)

var s = "!"
var s1 = "vvv"

console.log(s)
console.log(s1)
*/

const shopBtn = document.querySelector(".product__btn");
let buyf = false
let basket = 0
const basketPrice = document.querySelector('.price');
let shopPrice = shopBtn.previousSibling.previousSibling.innerHTML
shopPrice=shopPrice.replace(/ /g,"")
shopPrice = parseInt(shopPrice)
function buy ()
{
console.log("работает");


if(buyf==false)
{
    shopBtn.style.background = "#d3e3f5";
    shopBtn.innerText = "В корзине";
    buyf=true
    basket = basket+shopPrice
    
}

else
{
    shopBtn.style.background = "#f7f7f7";
    shopBtn.innerText = "Купить";
    buyf=false
    basket=basket-shopPrice
}
basketPrice.innerHTML = basket+'$'
}

const priceSale = document.querySelector('.product__price');
let pricef = false
function price ()
{
    console.log("цена работает");
    priceSale.style.color = "#a80000";
    priceSale.innerText = "200$"

    if(pricef==false)
    {
        priceSale.style.color = "#a80000";
        priceSale.innerText = "200$"
        pricef=true 
    }

    else
    {
        priceSale.style.color = "black";
        priceSale.innerText = "225$"
        pricef=false
    }
}

console.log (shopPrice)

