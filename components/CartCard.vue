<template>
    <div class="container">
        <div class="header">
            <h6>Cart (3)</h6>
            <a>Remove all</a>
        </div>
        <div class="total">
            <p>Total</p>
            <h6>$5,396</h6>
        </div>
        <UIButtonPrimary>Checkout</UIButtonPrimary>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        background-color: $white;
        width: 25vw;
        border-radius: 2.5rem;
        padding:0 2rem 2rem 2rem;
        display: flex;
        flex-direction: column;
    }
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    a{
        font-size: 1.5rem;
        text-decoration: underline;
        color: $p-dark-grey;
    }


    .total{
        text-transform: uppercase;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>