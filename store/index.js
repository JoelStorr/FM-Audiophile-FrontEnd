import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: ()=>({
        products:[],
        cart:[]
    }),

    actions: {
        loadProducst() {
            fetch('/data.json')
            .then((res)=>res.json())
            .then((json) => {
                this.products = json
                console.log(this.products);
                this.getProduct(3)
            })

            
        },
        getProduct(id){
            let product =  this.products.find(val => val.id == id);
            console.log(product)
            return product;
        },

        addToCart(id, count){
            let product = this.products.find(val => val.id == id);
            if(product != null){
                
            }

        }
    }
})