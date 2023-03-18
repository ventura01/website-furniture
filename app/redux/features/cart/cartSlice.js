"use client";

// import { toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";

// const items =
//   typeof window !== "undefined" && localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];

const initialState = {
  cartItems: [],
  // cartItems: items,
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // toast.info("Increased product quantity", {
        //   position: "bottom-left",
        // });
        toast.success(`${action.payload.name} increased quantity`);
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        // toast.success(`${action.payload.name} added to cart`, {
        //   position: "bottom-left",
        // });
        toast.success(`${action.payload.name} added to cart`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // toast.error(`${action.payload.name} removed from cart`, {
      //   position: "bottom-left",
      // });
      toast.error(`${action.payload.name} removed from cart`);
    },
    decreaseFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        // toast.info(`Decreased ${action.payload.name} cart quantity`, {
        //   position: "bottom-left",
        // });
        toast.error(`${action.payload.name} decreased cart quantity`);
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;

        // toast.error(`${action.payload.name} removed from cart`, {
        //   position: "bottom-left",
        // });
        toast.error(`${action.payload.name} removed from cart`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action) {
      state.cartItems = [];
      // toast.error("Cart cleared", {
      //   position: "bottom-left",
      // });
      toast.error(`Cart Clared`);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  decreaseFromCart,
  clearCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
