<template>

    <div class="checkout-header">

    </div>
    <div class="checkout-content">
        <UIButtonBack />

        <div class="layout-holder">
            <div class="form-holder">
                <h3>Checkout</h3>
                <form>
                    <section>
                        <p class="g-subtitle">Billing details</p>
                        <div class="row">
                            <UITextField>Name</UITextField>
                            <UITextField>Email Adress</UITextField>
                        </div>
                        <div class="row">
                            <UITextField>Phone Number</UITextField>
                            <div class="spacer"></div>
                        </div>
                    </section>
                    <section>
                        <p class="g-subtitle">Shipping Info</p>
                        <div class="row">
                            <UITextField>Address</UITextField>
                            <div class="spacer"></div>
                        </div>
                        <div class="row">
                            <UITextField>ZIP Code</UITextField>
                            <UITextField>City</UITextField>
                        </div>
                        <div class="row">
                            <UITextField>Country</UITextField>
                            <div class="spacer"></div>
                        </div>
                    </section>
                    <section>
                        <p class="g-subtitle">Payment Details</p>
                        <div class="row">
                            <p>Payment Method</p>
                            <UIRadioButton>e-Money</UIRadioButton>
                        </div>
                        <div class="row">
                            <div class="spacer"></div>
                            <UIRadioButton>Cash on Delivery</UIRadioButton>
                        </div>
                        <div class="row">
                            <UITextField>e-Money Number</UITextField>
                            <UITextField>e-Money PIN</UITextField>
                        </div>
                    </section>                 
                </form>
            </div>
            <div class="summary-holder"></div>
        </div>


    </div>


</template>

<script>

</script>

<style lang="scss" scoped>

.checkout-header{
    width: 100vw;
    height: 10rem;
    background-color: $black;
}

.checkout-content{
    width: 100vw;
    padding: 5rem 10%;
}

form{
    width: 100%;
    position: relative;

    & section{
        position: relative;
    }
}

.row {
    display: flex;
    justify-content: space-between;
    
    width: 100%;
}

.spacer{
    min-width: 50%;
}

</style>
import type { UIRadioButton } from '#build/components';
import type { UIRadioButton } from '#build/components';

