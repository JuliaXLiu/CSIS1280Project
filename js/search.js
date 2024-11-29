// for search function
const cardList = document.getElementsByClassName("card");
const cardTitle = document.getElementsByClassName("card__title");
// console.log(cardList);
// console.log(cardTitle);

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    if (query == ""){
    showAll(cardList);
    return;
    }
    
    for (i = 0; i < cardTitle.length; i++) {
    let c = cardTitle[i];
    const text = c.textContent.toLowerCase();
    if (text.includes(query)) {
        c.parentElement.classList.remove('hidden');
    } else {
        c.parentElement.classList.add('hidden');
    }
    }

});

function showAll(cardList){
for (i = 0; i < cardList.length; i++) {
    cardList[i].classList.remove('hidden');
}
}

function hideAll(cardList){
for (i = 0; i < cardList.length; i++) {
    cardList[i].classList.add('hidden');
}
}

//for slider to show value
const value = document.querySelector("#value");
const input = document.querySelector("#input_v");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

//for fliter
const prices = document.getElementsByClassName("card__price");
document.getElementById('btnFilter').addEventListener('click', function() {
    const value = document.getElementById("input_v").value;    
    for (i = 0; i < prices.length; i++) {
    let p = Number(prices[i].textContent.substring(1).replaceAll(",",""));
    if (p<=value) {
        
        console.log(p)
        prices[i].parentElement.classList.remove('hidden');
    } else {
        prices[i].parentElement.classList.add('hidden');
    }
    }

});
