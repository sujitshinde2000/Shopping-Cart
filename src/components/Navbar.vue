<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#">Shopping Cart</MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem :to="{ path: '/' }" :active="pathName == 'home'">
          Home
        </MDBNavbarItem>
        <MDBNavbarItem :to="{ path: '/cart' }" :active="pathName == 'cart'">
          Cart
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script setup lang="ts">
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-vue-ui-kit";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const collapse1 = ref(false);

const route = useRoute();

//getting pathName using route
const pathName = computed(() => {
  if (route.name) return route.name;
});
</script>

<style scoped></style>
