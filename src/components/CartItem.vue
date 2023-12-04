<template>
  <!-- max-width: 700px; margin: auto;   -->
  <div style="overflow: hidden">
    <MDBCard
      style="
        height: 50%;
        width: 50%;
        margin: auto;
        background-color: cornsilk;
        margin-top: 5px;
      "
    >
      <MDBCardBody>
        <MDBCardTitle>{{ cartItem.product.title }}</MDBCardTitle>
        <MDBBtn
          @click="deleteCartItem"
          color="primary"
          style="position: absolute; right: 0%"
          ><i class="fas fa-trash-can"></i
        ></MDBBtn>
        <MDBCardText>
          Description : {{ cartItem.product.description }}
        </MDBCardText>
        <MDBCardText> Price : {{ cartItem.product.price }} </MDBCardText>
        <MDBCardText>
          <i @click="cartItem.increaseQuantity" class="fas fa-plus"></i>
          {{ cartItem.quantity }}
          <i @click="cartItem.decreaseQuantity" class="fas fa-minus"></i>
        </MDBCardText>
        <MDBCardText style="position: absolute; right: 0%">
          Amount:{{ amount }}
        </MDBCardText>
        <!-- <MDBBtn @click="deleteCartItem" color="primary"
          ><i class="fas fa-trash-can"></i
        ></MDBBtn> -->
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
import CartItem from "../classes/cartItem";
import { ComputedRef, computed } from "vue";

const props = defineProps<{
  cartItem: CartItem;
}>();

const emit = defineEmits<{
  (Event: "deleteCartItem"): void;
}>();

const amount: ComputedRef<number> = computed(() => {
  return props.cartItem.product.price * props.cartItem.quantity;
});

function deleteCartItem() {
  emit("deleteCartItem");
}
</script>

<style scoped></style>
