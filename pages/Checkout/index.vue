<template>
  <div class="checkout-header"></div>
  <div class="checkout-content">
    <UIButtonBack />

    <div class="layout-holder">
      <div class="form-holder">
        <h3>Checkout</h3>
        <form>
          <section>
            <p class="g-subtitle">Billing details</p>
            <div class="row">
              <UITextField
                placeHolder="Max Mustermann"
                :error="false"
                @valueChange="nameChange"
                >Name</UITextField
              >
              <UITextField
                placeHolder="test@test.com"
                :error="false"
                @valueChange="emailChange"
                >Email Adress</UITextField
              >
            </div>
            <div class="row">
              <UITextField
                placeHolder="+1 222-333-4444"
                :error="false"
                @valueChange="phoneChange"
                >Phone Number</UITextField
              >
              <div class="spacer"></div>
            </div>
          </section>
          <section>
            <p class="g-subtitle">Shipping Info</p>
            <div class="row">
              <UITextField
                placeHolder="123 City Street"
                :error="false"
                @valueChange="addressChange"
                >Address</UITextField
              >
            </div>
            <div class="row">
              <UITextField
                placeHolder="1234"
                :error="false"
                @valueChange="zipCodeChange"
                >ZIP Code</UITextField
              >
              <UITextField
                placeHolder="Demo City"
                :error="false"
                @valueChange="cityChange"
                >City</UITextField
              >
            </div>
            <div class="row">
              <UITextField
                placeHolder="Germany"
                :error="false"
                @valueChange="countryChange"
                >Country</UITextField
              >
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
                >e-Money</UIRadioButton
              >
            </div>
            <div class="row">
              <div class="spacer"></div>
              <UIRadioButton
                value="CashOnDelivery"
                :isChecked="paymentMethod"
                @radioChange="paymentMethodChange"
                >Cash on Delivery</UIRadioButton
              >
            </div>
            <div class="row" v-if="paymentMethod == 'e-Money'">
              <UITextField
                placeHolder="1234567890"
                :error="false"
                @valueChange="eMoneyNumberChange"
                >e-Money Number</UITextField
              >
              <UITextField
                placeHolder="7890"
                :error="false"
                @valueChange="eMoneyPinChange"
                >e-Money PIN</UITextField
              >
            </div>
            <div v-else class="cash-delivery">
              <img src="/checkout/icon-cash-on-delivery.svg" />
              <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
          </section>
        </form>
      </div>
      <div class="summary-holder">
        <h4>Summary</h4>
        <UIProductSummary
          v-for="(item, index) in cart"
          :key="index"
          :item="item"
        />

        <div class="row">
          <p>TOTAL</p>
          <h6>$ {{ total }}</h6>
        </div>
        <div class="row">
          <p>SHIPPING</p>
          <h6>$ free</h6>
        </div>
        <div class="row">
          <p>VAT (INCLUDED)</p>
          <h6>$ {{ tax }}</h6>
        </div>
        <div class="row">
          <p>GRAND TOTAL</p>
          <h6 class="highlight">$ {{ total + tax }}</h6>
        </div>
        <div class="btn-holder">
          <UIButtonPrimary :fullLength="true" @on-click="showPopUp"
            >Continue & Pay</UIButtonPrimary
          >
        </div>
      </div>
    </div>
  </div>
  <CheckoutPopUp
    v-if="popUp"
    :name="cart[0]['name']"
    :amount="cart[0]['count']"
    :price="cart[0]['price']"
    :image="cart[0]['image']"
    :cartCount="count"
    :total="total + tax"
  />
</template>

<script setup>
import { useMainStore } from "~/store/index";
const store = useMainStore();
const { deleteCart, getCartTotal } = store;

let cart = computed(() => {
  console.log(store.cart[0]);
  return store.cart;
});

let count = computed(() => {
  return store.cart.length;
});

let total = computed(() => {
  return store.cartTotal;
});

let tax = computed(() => {
  return Math.floor(total.value * 0.19);
});

const name = useState("name", () => "");
const email = useState("email", () => "");
const phone = useState("phone", () => "");
const address = useState("address", () => "");
const zipCode = useState("zipCode", () => "");
const city = useState("city", () => "");
const country = useState("country", () => "");
const paymentMethod = useState("paymentMethod", () => "e-Money");
const eMoneyNumber = useState("eMoneyNumber", () => "");
const eMoneyPin = useState("eMoneyPin", () => "");

const popUp = useState("popUp", () => false);

function nameChange(val) {
  name.value = val;
}

function emailChange(val) {
  email.value = val;
}

function phoneChange(val) {
  phone.value = val;
}

function addressChange(val) {
  address.value = val;
}

function zipCodeChange(val) {
  zipCode.value = val;
}

function cityChange(val) {
  city.value = val;
}

function countryChange(val) {
  country.value = val;
}

function paymentMethodChange(val) {
  console.log(val);
  paymentMethod.value = val;
}

function eMoneyNumberChange(val) {
  eMoneyNumber.value = val;
}

function eMoneyPinChange(val) {
  eMoneyPin.value = val;
}

function showPopUp() {
  popUp.value = true;
}
</script>

<style lang="scss" scoped>
.checkout-header {
  width: 100vw;
  height: 10rem;
  background-color: $black;
}

.checkout-content {
  width: 100vw;
  padding: 5rem 10%;
  background-color: $p-grey;
  padding-bottom: 10rem;
}

.layout-holder {
  display: flex;
}

.form-holder {
  flex: 1;
  background-color: $white;
  padding: 4rem;
  border-radius: 1rem;
}

form {
  width: 100%;
  position: relative;

  & section {
    position: relative;
    margin-top: 5rem;
  }
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & p {
    min-width: 50%;
  }
}

.spacer {
  min-width: 50%;
}

.summary-holder {
  background-color: $white;
  height: max-content;
  padding: 2rem 4rem;
  border-radius: 1rem;
  margin: 0 0 0 4rem;
  width: 30%;
  & p {
    margin: 0.5rem;
    color: $p-dark-grey;
  }
  & h6 {
    margin: 0;
  }
}

.btn-holder {
  width: 100%;
  display: flex;
  margin-top: 1rem;
}

.highlight {
  color: $primary;
}


.cash-delivery{
  display: flex;
  align-items: center;

  & img{
    width: 5rem;
    height: 5rem;
    margin-right: 2rem;
  }
}


@media screen and (max-width: $tablet) {
  .layout-holder{
    flex-direction: column;
  }

  .summary-holder{
    width: 100%;
    margin: 5rem 0;
  }
}

@media screen and (max-width: $phone) {

  .form-holder{
    & .row{
      flex-direction: column;
    }
  }
}

</style>
