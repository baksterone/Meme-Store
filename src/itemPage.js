let item = document.querySelectorAll('.item');
let close = document.querySelector('#close');

for(let i of item){
    i.addEventListener('click', () => {
        document.querySelector('.item-page').style.display = 'block';
        catalogProducts.forEach(item => {
            if(item.name === i.querySelector('.name').innerHTML){
                document.getElementById('name').innerHTML = item.name;
                document.getElementById('main-name').innerHTML = item.name;
                document.getElementById('year').innerHTML = item.year;
                document.getElementById('price').innerHTML = item.price + '$';
                document.getElementById('item-img').src = item.image;
            }
        })
    })
}

close.addEventListener('click', () => {
    document.querySelector('.item-page').style.display = 'none';
})