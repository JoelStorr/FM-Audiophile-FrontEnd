<template>
    <div class="bg">
        <div class="card">
            <img src="/checkout/icon-order-confirmation.svg" />
            <h3>Thank you <br/>for your order </h3>
            <p>You will receive an email confirmation shortly.</p>

            <div class="total-card">
                <div class="order-item-holder">
                    <div class="order-item">
                        <img src="/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg">
                        <div class="name-holder">
                            <div class="name">
                                <h6>{{ props.name }}</h6>
                                <h6>x1</h6>
                            </div>
                            <p>${{ props.price }}</p>
                        </div>
                        
                    </div>
                    <hr v-if="count > 1" />
                    <div class="more-holder">
                        <p v-if="cartCount > 1" class="more-items">and {{ cartCount - 1  }} other item(s)</p>
                    </div>
                </div>
                <div class="grand-total">
                    <p class="g-subtitle">Grand Total</p>
                    <h6>${{ props.total }}</h6>
                </div>
            </div>
            <NuxtLink to="/">

                <UIButtonPrimary :fullLength="true" >Back to Home</UIButtonPrimary>
            </NuxtLink>
        </div>
    </div>


</template>

<script setup>
    let props = defineProps({
        name: String,
        amount: Number,
        price: Number,
        cartCount: Number,
        total: Number
    });

</script>

<style lang="scss" scoped>

    .bg{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card{
        width: 45%;
        height: auto;
        padding: 4rem;
        border-radius: 1rem;
        background-color: $white;
    }

    .total-card{
        display: flex;
        margin-bottom: 3rem;
    }

    .order-item-holder{
        width: 60%;
        border-radius: 1rem 0 0 1rem;
        background-color: $p-grey;
    }

    .order-item{
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        width: 100%;
        padding: 1rem 3rem;
        & img{
            position: relative;
            width: 30%;
            height: auto;
            margin-right: 1rem;
        }
    }

    .name-holder{
        flex: 1;

        & p{
            font-weight: bold;
            color: $p-dark-grey
        }
    }

    .name{
        display: flex;
        justify-content: space-between;
        & h6{
            margin: 0;
            padding: 0;
        }
        & :last-child{
            color: $p-dark-grey;
            text-transform: lowercase;
        }
    }


    .more-holder{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .more-items{
        font-weight: bold;
        align-self: center;
        
        color: $p-dark-grey;
        
        
    }
    
    hr{
        margin: 0 5rem;
        height: 0;
        border: none;
        border-top: .1rem solid $p-dark-grey;
    }

    .grand-total{
        width: 40%;
        border-radius: 0 1rem 1rem 0;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: $black;
        color: $white;
        

        & p{
            margin: 1rem 0;
            padding: 0;
            color: $p-dark-grey;
            
        }

        & h6{
            margin: 0;
            padding: 0;
        }
    }

</style>
import type { UIButtonPrimary } from '#build/components';
import type { NuxtLink } from '#build/components';

