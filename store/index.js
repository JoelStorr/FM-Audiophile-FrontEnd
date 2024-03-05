import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: ()=>({
        products:[],
        cart:[]
    }),

    actions: {
        async loadProducst() { 
                fetch('/data.json')
                .then((res)=>res.json())
                .then((json) => {
                    this.products = json
                    console.log(this.products)
                    return true
                })
        },
        getProduct(slug){
            let product =  this.products.find(val => val.slug == slug);
            
            return product;
        },

        addToCart(slug, count, price){
            let product = this.cart.find(val => val.slug == slug);
            if(product != null){
                product.count += count
                return
            } else{
                this.cart.push({slug: slug, count: count, price: price})
            }
        },

        deleteCart(){
            this.cart = [];
        },

        getCategoryProducts(category){
            console.log('Ran Category')
            let getproducts = this.products.filter(val => val.category == category );
            console.log(getproducts);
            return getproducts
        }
    }
})