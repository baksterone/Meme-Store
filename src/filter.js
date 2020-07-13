let filterDog = document.querySelector('#dog'),
    filterPepe = document.querySelector('#pepe'),
    filterAll = document.querySelector('#all'),
    checkFilter = document.querySelectorAll('.item');



filterPepe.addEventListener('click', function(){
    for(let i of checkFilter){
        catalogProducts.forEach(item => {
            if(i.filter === 'pepe'){
                i.style.display = 'block';
            } else {
                i.style.display = 'none';
            }
        })
    }
})

filterDog.addEventListener('click', function(){
    for(let i of checkFilter){
        catalogProducts.forEach(item => {
            if(i.filter === 'dog'){
                i.style.display = 'block';
            } else {
                i.style.display = 'none';
            }
        })
    }
})

filterAll.addEventListener('click', function(){
    for(let i of checkFilter){
        i.style.display = 'block';
    }
})






