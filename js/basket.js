
let elemStart = document.querySelector('.gds__list');
let elemLi = document.createElement('li');
let elemText = document.createElement('h3');
let elemImg = document.createElement('img');
let elemPrice = document.createElement('h3')
let firstItem =  document.querySelectorAll('.gds__item')[0];
let elemBtn = document.createElement('button');
elemImg.src = 'img/first.jpg'
elemLi.classList.add('gds__item');
elemText.classList.add('gds__text');
elemText.innerHTML = 'nike dunk low ';
elemImg.style.width = '150px';
elemPrice.innerText= '225$';
elemBtn.innerText='удалить';
elemBtn.setAttribute('onclick','del()')

function update(){
    elemLi.appendChild(elemText);
    elemStart.appendChild(elemLi);
    elemLi.appendChild(elemImg);
    elemLi.appendChild(elemPrice);
    firstItem.style.display = 'none';
    elemLi.appendChild(elemBtn);
}
 
function del(){
    elemBtn.parentNode.remove()
    firstItem.style.display = 'block';
}