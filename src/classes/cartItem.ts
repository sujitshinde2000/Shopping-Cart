import Product from "./product";

export default class CartItem {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  increaseQuantity() {
    console.log("increasing");
    
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity == 1) {
      return;
    }
    this.quantity--;
  }
}
