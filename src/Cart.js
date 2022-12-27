import { useContext } from "react";
import styled from "styled-components";
import { shopContext } from "./context/ShopContext";
import ProductCard from "./ProductCard";

const Cart = () => {
  const { total, products } = useContext(shopContext);
  return (
    <div>
      <Title>Your cart total is {total}$</Title>
      {products.map((product, index) => (
        <ProductCard {...product} key={index} />
      ))}
    </div>
  );
};

export default Cart;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
