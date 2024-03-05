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
                })
        },
        getProduct(id){
            let product =  this.products.find(val => val.id == id);
            
            return product;
        },

        addToCart(id, count){
            let product = this.products.find(val => val.id == id);
            if(product != null){
                
            }

        },

        getCategoryProducts(category){
            console.log('Ran Category')
            let getproducts = this.products.filter(val => val.category == category );
            console.log(getproducts);
            return getproducts
        }
    }
})