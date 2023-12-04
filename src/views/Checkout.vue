<template>
  Checkout
  <div class="text-center">
    <p>Total Number of Products :{{ appStore.cart.getNoOfProducts() }}</p>
    <p>Total Amount : {{ appStore.totalAmount }}</p>

    <!-- Button trigger modal -->
    <MDBBtn
      color="primary"
      aria-controls="exampleModal"
      @click="exampleModal = true"
    >
      Confirm
    </MDBBtn>
    <MDBModal
      id="exampleModal"
      tabindex="-1"
      labelledby="exampleModalLabel"
      v-model="exampleModal"
    >
      <MDBModalHeader>
        <MDBModalTitle id="exampleModalLabel"> Order Placed </MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>Your Order has been placed successfully!</MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="success" @click="changeRouteToHome">Close</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAppStore } from "../store/app-store";
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import { useRouter } from "vue-router";

const exampleModal = ref(false);
const appStore = useAppStore();
const router = useRouter();

onMounted(() => {
  if (appStore.cart.cartItems.length == 0) {
    router.push("/");
  }
});

//when user clicks on close button changeRoute method will redirect to home page
function changeRouteToHome() {
  appStore.emptyCart();
  router.push("/");
}
</script>

<style scoped></style>
