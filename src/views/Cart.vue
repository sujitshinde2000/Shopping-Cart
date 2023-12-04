<template>
  Cart
  <div style=""> 
    <div v-if="appStore.cart.cartItems.length > 0">
      <div v-for="cartItem in appStore.cart.cartItems">
        <CartItemComponent
          :cart-item="cartItem"
          @delete-cart-item="deleteCartItem(cartItem)"
        />
      </div>
      <MDBBtn color="success" style="position: fixed; left: 50%; bottom: 0%">
        Total Amount : {{ appStore.totalAmount }}</MDBBtn
      >
      <MDBBtn
        @click="changeRouteToCheckout"
        color="danger"
        style="position: fixed; bottom: 0%; right: 0%"
        >Checkout</MDBBtn
      >
    </div>
  </div>
  <div v-if="appStore.cart.cartItems.length == 0" class="text-center">
    <p>Your cart is empty.</p>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "../store/app-store";
import CartItemComponent from "../components/CartItem.vue";
import { MDBBtn } from "mdb-vue-ui-kit";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import CartItem from "../classes/cartItem";

const appStore = useAppStore();
const router = useRouter();

function changeRouteToCheckout() {
  router.push("/checkout");
}

function deleteCartItem(cartItem: CartItem) {
  appStore.cart.remove(cartItem);
}

onMounted(() => {
  console.log("Cart Mounted");
});
</script>
<style scoped></style>
