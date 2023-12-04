import CartItem from "./cartItem";
import Product from "./product";

export default class Cart {
  cartItems: CartItem[] = [];

  constructor() {
    this.getCartItemsFromSessionStorage();
  }

  //function to add products in the cart
  add(product: Product) {
    console.log("inside add");

    //initial value of quantity is 1
    const cartItem: CartItem = new CartItem(product, 1);
    this.cartItems.push(cartItem);
    console.log(cartItem.product.title + " is added to the cart");

    //saving object to session storage

    // this.saveToSessionStorage(this.cartItems);
    this.saveToLocalStorage(this.cartItems);
  }

  //function to remove products from the cart
  remove(cartItem: CartItem) {
    //get the index of the product u want to remove from the cart
    const index = this.cartItems.findIndex((cartItem1: CartItem) => {
      return cartItem1.product.id == cartItem.product.id;
    });

    if (index < 0) {
      console.log("product does not exist");
      return;
    }

    //remove that product from the cart on the basis of the index
    const cartItems: CartItem[] = this.cartItems.splice(index, 1);
    console.log(
      cartItems[0].product.title + " is successfully removed from the cart"
    );

    //deleting object from session storage
    // this.saveToSessionStorage(this.cartItems);
    this.saveToLocalStorage(this.cartItems);
  }

  //get the number of products in the cart
  getNoOfProducts(): number {
    return this.cartItems.length;
  }

  //check if product exist in the cart on the basis of product id
  isproductExistInCart(id: number) {
    const index = this.cartItems.findIndex((cartItem: CartItem) => {
      cartItem.product.id == id;
    });

    if (index >= 0) {
      return true;
    }
    return false;
  }

  //saving to session storage
  private saveToSessionStorage(cartItems: CartItem[]) {
    // console.log("setting data to session storage : ");
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  getCartItemsFromSessionStorage(): void {
    // return JSON.parse(sessionStorage.getItem("cartItems"))
    // return sessionStorage.getItem("cartItems");
    const stringValue = sessionStorage.getItem("cartItems");
    if (stringValue == null) return;
    const jsonValue = JSON.parse(stringValue) as CartItem[];
    this.cartItems = jsonValue;
  }

  //saving to local storage
  private saveToLocalStorage(cartItems: CartItem[]) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  //getting the cart items from the local storage
  getCartItemsFromLocalStorage() {
    const stringValue = localStorage.getItem("cartItems");
    if (stringValue == null) return;
    const jsonValue = JSON.parse(stringValue) as CartItem[];
    this.cartItems = jsonValue;
  }
}
