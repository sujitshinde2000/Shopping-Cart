<template>
  Home
  <div>
    <div class="row">
      <div class="col-3" v-for="product in appStore.products">
        <ProductComponent
          :product="product"
          @add-to-cart="() => addToCart(product)"
        />
      </div>
    </div>
    <div class="text-center">
      <MDBBtn @click="changeRouteToCart" color="success">Go to Cart</MDBBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import ProductComponent from "../components/Product.vue";
import { useAppStore } from "../store/app-store";
import { MDBBtn } from "mdb-vue-ui-kit";
import Product from "../classes/product";
import { onMounted } from "vue";

const appStore = useAppStore();

const router = useRouter();

function changeRouteToCart() {
  router.push("/cart");

  //getting the name of product stored in the local storage
  console.log(
    "name stored in the local storage : " + localStorage.getItem("productName")
  );
  console.log(
    "name stored in the session storage : " +
      sessionStorage.getItem("productTitle")
  );

  //getting the stored object in the session storage
  // console.log("object stored in the session storage : "+sessionStorage.setItem("productObject"));
  // var object = JSON.parse(sessionStorage.getItem("productObject"))
  // var object = JSON.parse(sessionStorage.productObject);
  // console.log("product object stored in the session storage : ");
  // console.log(object);

  //getting the array of object
  // var array = JSON.parse(sessionStorage.cartItems);
  // console.log("array of object stored in the session storage : ");
  // console.log(array);
}

//function to add product in the cart
function addToCart(product: Product) {
  console.log("handling the emit");
  // console.log(disable.value);

  console.log("inside Home add To cart");
  // console.log(product);

  //cheking the length of cart

  appStore.cart.add(product);
}

onMounted(() => {
  console.log("Home Mounted");
});
</script>

<style scoped></style>
