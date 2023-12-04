<template>
  <div>
    <MDBCard style="background-color:bisque; margin-top: 10px; margin-bottom: 10px; margin-left: 10px; margin-right: 10px;">

      <MDBCardBody>
        <MDBCardTitle>{{ product.title }}</MDBCardTitle>
        <MDBCardText> Description : {{ product.description }} </MDBCardText>
        <MDBCardText> Price : {{ product.price }} </MDBCardText>
        <MDBBtn
          @click="addToCartClicked"
          :color="labelColor"
          :disabled="disable"
        >
          {{ label }}
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </div>
</template>

<script setup lang="ts">
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-vue-ui-kit";
import Product from "../classes/product";
import { ComputedRef, computed } from "vue";
import { useAppStore } from "../store/app-store";
import CartItem from "../classes/cartItem";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const appStore = useAppStore();

const props = defineProps<{
  product: Product;
}>();

const label: ComputedRef<string> = computed(() => {
  if (disable.value == true) {
    return "Added to Cart";
  }
  return "Add to Cart";
});

//disable by default false , it becomes true when product is added to the cart
const disable: ComputedRef<boolean> = computed(() => {
  const index: number = appStore.cart.cartItems.findIndex(
    (cartItem: CartItem) => {
      return cartItem.product.id == props.product.id;
    }
  );
  if (index >= 0) {
    return true;
  }
  return false;
});

//label color by default primary on click it changes to danger
const labelColor: ComputedRef<string> = computed(() => {
  if (disable.value == true) {
    return "danger";
  }
  return "primary";
});

//defining the emit addToCart
const emit = defineEmits<{
  (Event: "addToCart"): void;
}>();

//method which emit the addToCart
function addToCartClicked() {
  toast("Product Added to Cart", {
    autoClose: 500,

  });
  emit("addToCart");
}


</script>

<style scoped></style>
