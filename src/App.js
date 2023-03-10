import styled from "styled-components";
import { Router, Link } from "@reach/router";

import Products from "./Products";
import Cart from "./Cart";
import { ShopProvider } from "./context/ShopContext";

const App = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>useReducer Hook Starter Project</h1>
        <p>
          A <a href="designcode.io">Design+Code</a> tutorial
        </p>
      </TitleWrapper>
      <LinksWrapper>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </LinksWrapper>
      <ShopProvider>
        <Router>
          <Products key="prod" path="/" />
          <Cart key="cart" path="/cart" />
        </Router>
      </ShopProvider>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
