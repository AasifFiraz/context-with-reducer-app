import React, { createContext, useReducer } from "react";

const initialState = {
  total: 0,
  products: [],
};

const shopContext = createContext(initialState);

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);

      return {
        ...state,
        total: payload.total,
      };
    default:
      return state;
  }
};

const ShopProvider = (props) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const newCart = state.products.filter(
      (currentProd) => currentProd.name !== product.name
    );

    updatePrice(newCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: newCart,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  return <shopContext.Provider value={value} {...props} />;
};

export { shopContext, ShopProvider };
