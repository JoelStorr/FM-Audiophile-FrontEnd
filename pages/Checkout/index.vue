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
                            <UITextField :error="false" @valueChange="nameChange">Name</UITextField>
                            <UITextField :error="false" @valueChange="emailChange">Email Adress</UITextField>
                        </div>
                        <div class="row">
                            <UITextField :error="false" @valueChange="phoneChange">Phone Number</UITextField>
                            <div class="spacer"></div>
                        </div>
                    </section>
                    <section>
                        <p class="g-subtitle">Shipping Info</p>
                        <div class="row">
                            <UITextField :error="false" @valueChange="addressChange">Address</UITextField>
                            
                        </div>
                        <div class="row">
                            <UITextField :error="false" @valueChange="zipCodeChange">ZIP Code</UITextField>
                            <UITextField :error="false" @valueChange="cityChange">City</UITextField>
                        </div>
                        <div class="row">
                            <UITextField :error="false" @valueChange="countryChange">Country</UITextField>
                            <div class="spacer"></div>
                        </div>
                    </section>
                    <section>
                        <p class="g-subtitle">Payment Details</p>
                        <div class="row">
                            <p>Payment Method</p>
                            <UIRadioButton 
                            value="e-Money"
                            :isChecked="paymentMethod"
                            @radioChange="paymentMethodChange"
                            >e-Money</UIRadioButton>
                        </div>
                        <div class="row">
                            <div class="spacer"></div>
                            <UIRadioButton 
                            value="CashOnDelivery"
                            :isChecked="paymentMethod"
                            @radioChange="paymentMethodChange">Cash on Delivery</UIRadioButton>
                        </div>
                        <div class="row">
                            <UITextField :error="false" @valueChange="eMoneyNumberChange">e-Money Number</UITextField>
                            <UITextField :error="false" @valueChange="eMoneyPinChange">e-Money PIN</UITextField>
                        </div>
                    </section>                 
                </form>
            </div>
            <div class="summary-holder">
                <h4>Summary</h4>
                <UIProductSummary />
                <UIProductSummary />
                <UIProductSummary />

                <div class="row">
                    <p>TOTAL</p> <h6>$ 5,396</h6>
                </div>
                <div class="row">
                    <p>SHIPPING</p> <h6>$ 5,396</h6>
                </div>
                <div class="row">
                    <p>VAT (INCLUDED)</p> <h6>$ 5,396</h6>
                </div>
                <div class="row">
                    <p>GRAND TOTAL</p> <h6 class="highlight">$ 5,396</h6>
                </div>
                <div class="btn-holder">

                    <UIButtonPrimary>Continue & Pay</UIButtonPrimary>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const name = useState('name', ()=> "");
const email = useState('email', ()=> "");
const phone = useState('phone', ()=> "");
const address = useState('address', ()=>"");
const zipCode = useState('zipCode', ()=>"");
const city = useState('city', ()=>"");
const country = useState('country', ()=>"");
const paymentMethod = useState('paymentMethod', ()=>"e-Money");
const eMoneyNumber = useState('eMoneyNumber', ()=>"");
const eMoneyPin = useState('eMoneyPin', ()=>"");



function nameChange(val){
    name.value = val;
}

function emailChange(val){
    email.value = val;
}

function phoneChange(val){
    phone.value = val;
}

function addressChange(val){
    address.value = val;
}

function zipCodeChange(val){
    zipCode.value = val;
}

function cityChange(val){
    city.value = val
}

function countryChange(val){
    country.value = val
}

function paymentMethodChange(val){
    console.log(val)
    paymentMethod.value = val;
}

function eMoneyNumberChange(val){
    eMoneyNumber.value = val;
}


function eMoneyPinChange(val){
    
    eMoneyPin.value = val;
}




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
    background-color: $p-grey;
}

.layout-holder{
    display: flex;
}

.form-holder{
    flex: 1;
    background-color: $white;
    padding: 4rem;
    border-radius: 1rem;
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
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & p{
        min-width: 50%;
    }

    
}

.spacer{
    min-width: 50%;
}


.summary-holder{
    background-color: $white;
    height: max-content;
    padding: 2rem 4rem;
    border-radius: 1rem;
    margin: 0 0 0 4rem;
    width: 30%;
    & h6{
        margin: 0;
    }
}


.btn-holder{
    width: 100%;
    display: flex;
}

.highlight{
    color: $primary;
}
</style>



