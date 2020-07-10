class AllProducts{
    constructor(containerProducts, catalogAllProducts, containerCounter){
        this.containerProducts = document.querySelector(containerProducts);
        this.catalogAllProducts = catalogAllProducts;
        this.containerCounter = document.querySelector(containerCounter);
        this.createProducts();
    }

    // <div class="item">
    //         <div class="name">Product1</div>
    //         <div class="img"></div>
    //         <div class="price">99.99</div>
    //         <button class="btn">Add cart</button>
    // </div>

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
                nameClass: 'item'
            });
            let name = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'name',
                contentText: this.catalogAllProducts[i].name
            });
            let bgImg = createProduct.getProductItem({
                nameTag: 'div',
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

            let close = createProduct.getProductItem({
                nameTag: 'div',
                nameClass: 'closeItem',
                contentText: 'X'
            });

            
            close.addEventListener('click', function(){
                let item = document.querySelectorAll('.item');
                let x = document.querySelectorAll('.closeItem');
                let filter = document.querySelector('.filter').style.display = 'block';
                x.forEach(x => {
                    x.style.display = 'none';
                });
                item.forEach(item => {
                    item.style.display = 'block';
                })
            });

            bgImg.addEventListener('click', function(e){
                let filter = document.querySelector('.filter').style.display = 'none';
                let x = document.querySelectorAll('.closeItem');
                x.forEach(x => {
                    x.style.display = 'block';
                });
                let item = document.querySelectorAll('.item');
                item.forEach(item => {
                    item.style.display = 'none';
                })
                e.target.parentNode.style.display = 'block';
            })

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
            item.appendChild(close);
            wrapper.appendChild(item);
            
        }
        this.containerProducts.appendChild(wrapper);
    };
}

let allProducts = new AllProducts('.container-products', catalogProducts, '.container-counter');

