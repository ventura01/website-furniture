"use client";

// import { toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";

// const items =
//   typeof window !== "undefined" && localStorage.getItem("wishItems")
//     ? JSON.parse(localStorage.getItem("wishItems"))
//     : [];

const initialState = {
  // wishItems: items,
  wishItems: [],
  wishTotalQuantity: 0,
  wishTotalAmount: 0,
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      const itemIndex = state.wishItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.wishItems[itemIndex].wishQuantity += 1;
        // toast.info("Increased product quantity", {
        //   position: "bottom-left",
        // });
        toast.success(`${action.payload.name} increased quantity`);
      } else {
        const tempProduct = { ...action.payload, wishQuantity: 1 };
        state.wishItems.push(tempProduct);
        // toast.success(`${action.payload.name} added to cart`, {
        //   position: "bottom-left",
        // });
        toast.success(`${action.payload.name} added to wishlist`);
      }
      localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
    },
    removeFromWishList(state, action) {
      const nextWishItems = state.wishItems.filter(
        (wishItem) => wishItem.id !== action.payload.id
      );
      state.wishItems = nextWishItems;
      localStorage.setItem("wishItems", JSON.stringify(state.wishItems));

      // toast.error(`${action.payload.name} removed from cart`, {
      //   position: "bottom-left",
      // });
      toast.error(`${action.payload.name} removed from wishlist`);
    },
    decreaseFromWishList(state, action) {
      const itemIndex = state.wishItems.findIndex(
        (wishItem) => wishItem.id === action.payload.id
      );
      if (state.wishItems[itemIndex].wishQuantity > 1) {
        state.wishItems[itemIndex].wishQuantity -= 1;

        // toast.info(`Decreased ${action.payload.name} cart quantity`, {
        //   position: "bottom-left",
        // });
        toast.error(`${action.payload.name} decreased cart quantity`);
      } else if (state.wishItems[itemIndex].wishQuantity === 1) {
        const nextWishItems = state.wishItems.filter(
          (wishItem) => wishItem.id !== action.payload.id
        );
        state.wishItems = nextWishItems;

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

    clearWishList(state, action) {
      state.wishItems = [];
      // toast.error("Cart cleared", {
      //   position: "bottom-left",
      // });
      toast.error(`Wishlist Cleared`);
      localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
    },
    getTotalWishItems(state, action) {
      let { total, quantity } = state.wishItems.reduce(
        (wishTotal, wishItem) => {
          const { price, wishQuantity } = wishItem;
          const itemTotal = price * wishQuantity;

          wishTotal.total += itemTotal;
          wishTotal.quantity += wishQuantity;

          return wishTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.wishTotalQuantity = quantity;
      state.wishTotalAmount = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToWishList,
  removeFromWishList,
  decreaseFromWishList,
  clearWishList,
  getTotalWishItems,
} = wishListSlice.actions;

export default wishListSlice.reducer;
