let order = document.querySelector('.order'),
    orderAnswer = document.querySelector('.order-answer'),
    delivery = document.querySelector('.delivery'),
    deliveryAnswer = document.querySelector('.delivery-answer'),
    memes = document.querySelector('.memes'),
    memesAnswer = document.querySelector('.memes-answer');


orderAnswer.style.display = 'none';
deliveryAnswer.style.display = 'none';
memesAnswer.style.display = 'none';

order.addEventListener('click', (e) => {
    let arrow = document.querySelector('#test1');

    let block = orderAnswer;
    if(e.target == order || e.target == arrow){
        if(block.style.display == 'none'){
            arrow.style.rotate = '180deg';
            block.style.display = 'block';
        } else if(block.style.display == 'block'){
                arrow.style.rotate = '360deg';
                block.style.display = 'none';
            };
    }});

delivery.addEventListener('click', (e) => {
    let arrow = document.querySelector('#test2');

    let block = deliveryAnswer;
    if(e.target == delivery || e.target == arrow){
        if(block.style.display == 'none'){
            arrow.style.rotate = '180deg';
            block.style.display = 'block';
        } else if(block.style.display == 'block'){
                arrow.style.rotate = '360deg';
                block.style.display = 'none';
            };
    }});

memes.addEventListener('click', (e) => {
    let arrow = document.querySelector('#test3');

    let block = memesAnswer;
    if(e.target == memes || e.target == arrow){
        if(block.style.display == 'none'){
            arrow.style.rotate = '180deg';
            block.style.display = 'block';
        } else if(block.style.display == 'block'){
                arrow.style.rotate = '360deg';
                block.style.display = 'none';
            };
    }});

