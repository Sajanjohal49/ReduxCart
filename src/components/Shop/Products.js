import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import shoeSvg from "../../images/shoe.svg";
import shoeSvg2 from "../../images/shoe2.svg";
import shoeSvg3 from "../../images/subject.svg";
import styled from "styled-components";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 90,
    title: "STAY AHEAD",
    text: "NIKE AIR MAX 90",
    image: shoeSvg,

    description:
      "Nike Air Max is a line of shoes produced by Nike, Incwith the first model released in 1987. Air Max shoes are identified by their midsoles incorporating flexible urethane pouches filled with pressurized gas, visible from the exterior of the shoe and intended to provide cushioning to the underfoot.",
  },
  {
    id: "p2",

    price: 129,
    title: "JUMP MAN",
    text: "NIKE AIR MAX 90",
    description:
      "Nike Air Max is a line of shoes produced by Nike, Incwith the first model released in 1987. Air Max shoes are identified by their midsoles incorporating flexible urethane pouches filled with pressurized gas, visible from the exterior of the shoe and intended to provide cushioning to the underfoot.",
    image: shoeSvg2,
  },
  {
    id: "p3",
  
    price: 109,
    title: "NIKE MAX PLUS",
    text: "NIKE AIR MAX 90",
    description:
      "Nike Air Max is a line of shoes produced by Nike, Incwith the first model released in 1987. Air Max shoes are identified by their midsoles incorporating flexible urethane pouches filled with pressurized gas, visible from the exterior of the shoe and intended to provide cushioning to the underfoot.",
    image: shoeSvg3,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <H3>REDUX CART</H3>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            text={product.text}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
const H3 = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
  font-family: "Barlow", sans-serif;
  font-style: italic;
 padding-top: 10px;
  font-weight: 900;
  font-size: 20px;
  line-height: 197.02%;
  /* or 79px */

  letter-spacing: 0.05em;
text-align: center;
  color: #ffffff;
  @media (max-width:768px) {
    
    
  }
`;