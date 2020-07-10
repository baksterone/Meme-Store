class Cart{
    constructor(containerCart, containerCounter,catalogAllProducts){
        this.containerCart = document.querySelector(containerCart);
        this.containerCounter = document.querySelector(containerCounter);
        this.catalogAllProducts = catalogAllProducts;
        this.createCart();
    }

    createCart(){
        this.containerCounter.addEventListener('click', function(){
            cart.containerCart.style.display = 'block';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('slot');
            wrapper.className = 'wrapper-cart';
            

            for(let i = 0; i < productsCart.length; i++){
                let item = createProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'item'
                });
                let name = createProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'name',
                    contentText: productsCart[i].name
                });
                let bgImg = createProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'img',
                    backgroundImg: `url('${productsCart[i].image}')`
                });
                let price = createProduct.getProductItem({
                    nameTag: 'div',
                    nameClass: 'price',
                    contentText: productsCart[i].price
                });
                item.appendChild(name);
                item.appendChild(bgImg);
                item.appendChild(price);
                wrapper.appendChild(item);
            }

            let close = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'close',
                contentText: 'X'
            });

            close.addEventListener('click', function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = '';
            });


            cart.containerCart.appendChild(wrapper);
            cart.containerCart.appendChild(close);

            // if(cart.containerCart.contains(wrapper && close)){    // ????
            //     console.log('aa');
            // } else{
            //     cart.containerCart.appendChild(wrapper);
            //     cart.containerCart.appendChild(close);
            // }
        });
    };

    getProductCart(){
        let products = store.getProducts();
        let productsInCart = [];

        for(let i = 0; i < this.catalogAllProducts.length; i++){
            if(products.indexOf(this.catalogAllProducts[i].id) !== -1){         //фильтр???
                productsInCart.push(this.catalogAllProducts[i]);
            }
        }

        return productsInCart;
    };
}

let cart = new Cart('.container-cart', '.container-counter', catalogProducts);

