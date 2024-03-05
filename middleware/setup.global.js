import { useMainStore } from "~/store/index";



export default defineNuxtRouteMiddleware( async(to, from) => {
    const store = useMainStore();
    const { loadProducst, getProduct } = store;

    if(store.products.length == 0){
         await loadProducst();
    }

    

});
