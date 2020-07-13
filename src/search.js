let search = document.querySelector('#searchInput');
let block = document.querySelector('.searchBlock');
let items = document.querySelectorAll('.item');

search.oninput = function(){
    for(let i of items){
        if(search.value.trim() !== ''){
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
            catalogProducts.forEach(item => {
                if(item.name.toLowerCase() === search.value.toLowerCase()){
                    document.getElementById('nameSearch').innerHTML = item.name;
                    document.getElementById('priceSearch').innerHTML = item.price + '$';
                    document.getElementById('searchImg').src = item.image;
                }
            })
    }
}