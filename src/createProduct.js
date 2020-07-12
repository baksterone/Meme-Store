class CreateProduct{
    getProductItem(card){
        let element = document.createElement(card.nameTag);
        if('nameClass' in card){
            element.setAttribute('class', card.nameClass);
        };
        if('contentText' in card){
            element.innerText = card.contentText;
        };
        if('backgroundImg' in card){
            element.style.backgroundImage = card.backgroundImg;
        };
        if('id' in card){
            element.id = card.id;
        };
        if('filter' in card){
            element.filter = card.filter;
        }
        return element;
    };
}

let createProduct = new CreateProduct('.container-counter', catalogProducts);