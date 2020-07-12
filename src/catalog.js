class AllProducts{
    constructor(containerProducts, catalogAllProducts, containerCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogAllProducts = catalogAllProducts;
        this.containerCounter = document.querySelector(containerCounter);
        this.createProducts();
    }

    createProducts(){
        let wrapper = document.createElement('slot');
        let products = store.getProducts();



        for(let i = 0; i < this.catalogAllProducts.length; i++){
            let index = products.indexOf(this.catalogAllProducts[i].id);
            let activeText;
            this.containerCounter.innerHTML = products.length;

            if(index === -1){
                activeText = 'Add in cart';
            } else{
                activeText = 'Delete from cart';
            }

            let item = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'item',
                filter: this.catalogAllProducts[i].filter
            });
            let name = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                contentText: this.catalogAllProducts[i].name
            });
            let bgImg = createProduct.getProductItem({
                nameTag: 'div',
                id: this.catalogAllProducts[i].id + 'img',
                nameClass: 'img',
                backgroundImg: `url('${this.catalogAllProducts[i].image}')`
            });
            let price = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'price',
                contentText: this.catalogAllProducts[i].price
            });
            let btn = createProduct.getProductItem({
                nameTag: 'button',
                nameClass: 'btn',
                contentText: activeText,
                id: this.catalogAllProducts[i].id
            });
    

            // bgImg.addEventListener('click', function(e){
            //     let id = this.getAttribute('id');
            //     let result = store.putProduct(id);
            //     console.log(e.target.result)

                
            // })


            btn.addEventListener('click', function(){
                let id = this.getAttribute('id');
                let result = store.putProduct(id);

                allProducts.containerCounter.innerHTML = result.products.length;

                if(result.statusProduct){
                    this.innerHTML = 'Delete from cart';
                } else{
                    this.innerHTML = 'Add in cart';
                }
            })

            item.appendChild(name);
            item.appendChild(bgImg);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
            
        }
        this.containerProducts.appendChild(wrapper);

    };
}

let allProducts = new AllProducts('.container-products', catalogProducts, '.container-counter');

