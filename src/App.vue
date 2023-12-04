<template>
  <div >
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "../src/components/Navbar.vue";
import { useAppStore } from "./store/app-store";
const appStore = useAppStore();

onMounted(()=>{
  console.log("App mounted");
  // appStore.cart.cartItems
  console.log();
  
  // appStore.cart.getCartItemsFromSessionStorage()!
  appStore.cart.getCartItemsFromLocalStorage()

  
})



</script>

<style scoped></style>
