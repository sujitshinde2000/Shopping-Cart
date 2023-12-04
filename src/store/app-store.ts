import { defineStore } from "pinia";
import Product from "../classes/product";
import Cart from "../classes/cart";
import { computed, ref } from "vue";
import CartItem from "../classes/cartItem";

export const useAppStore = defineStore("app", () => {
  //create the instance of cart
  const cart = ref(new Cart());

  const products: Product[] = [
    { id: 1, title: "Bottle", description: "round", price: 450 },
    { id: 2, title: "Shoes", description: "Not Limited ", price: 2850 },
    { id: 3, title: "Mobile", description: "Rectangle", price: 45000 },
    { id: 4, title: "Mouse", description: "wireless", price: 800 },
    { id: 5, title: "Keyboard", description: "wired", price: 500 },
    { id: 6, title: "Shirt", description: "formal", price: 1450 },
    { id: 7, title: "T-Shirt", description: "round", price: 850 },
    { id: 8, title: "Jeans", description: "medium", price: 1800 },
  ];

  //function to remove product from the cart
  function emptyCart() {
    sessionStorage.removeItem("cartItems");
    cart.value = new Cart();
  }

  function setCart(cartItems: CartItem[]) {
    console.log("setting cart Items : ");

    cart.value.cartItems = cartItems;
  }

  //get the total amount
  const totalAmount = computed(() => {
    let totalAmount = 0;
    cart.value.cartItems.forEach((cartItem: CartItem) => {
      totalAmount = totalAmount + cartItem.product.price * cartItem.quantity;
    });
    return totalAmount;
  });

  const currentCartItems = computed(() => {
    return cart.value.cartItems;
  });

  return { products, cart, emptyCart, totalAmount, setCart, currentCartItems };
});
