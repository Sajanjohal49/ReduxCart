import { useDispatch } from "react-redux";




import { cartLogicActions } from "../store/cart-slice";
import styled from "styled-components";
const ProductItem = (props) => {
  const { title, price, description, id, text,image } = props;
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    // fetch('',{method:'POST',body:JSON.stringify(newCart)})
    dispatch(
      cartLogicActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <Wrapper>
      <OneSection>
        <H1>{title}</H1>
        <H3>{text}</H3>
        <Price>${price.toFixed(2)}</Price>

        <Des>{description}</Des>

        <Button onClick={addItemToCartHandler}>Add to Cart</Button>
      </OneSection>
      <SecondSection>
        <img src={image} />
      </SecondSection>
    </Wrapper>
  );
};

export default ProductItem;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 570px auto;
  align-items: center;

  margin: 20px 250px;
  background: rgba(17, 1, 1, 1);
  border-radius: 10px;
  @media (max-width:768px) {
    
    display: grid;
  grid-template-columns: 670px;
  margin: 60px auto;
  max-width: 650px;
  }
  @media (max-width:450px) {
    
    display: grid;
  grid-template-columns: 370px;
  margin: 30px auto;
  max-width: 380px;
  padding: 3px;
  }
`;
const OneSection = styled.div`
  padding: 30px;
`;

const H1 = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
  width: 700px; */
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
font-family: 'Anton', sans-serif;
 
  font-style: italic;
  font-weight: 500;
  font-size: 60px;
  line-height: 126px;
letter-spacing: 0.1rem;
  color: #ffffff;
  @media (max-width:450px) {
    font-size: 30px;
    
  }
`;
const H3 = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
  font-family: "Barlow", sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  line-height: 197.02%;
  /* or 79px */
margin-top: -30px;
  letter-spacing: 0.05em;

  color: #ffffff;
`;
const Price = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
  font-family: "Barlow", sans-serif;
  
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 197.02%;
  /* or 95px */

  letter-spacing: 0.05em;

  color: #1ad1b9;
`;
const Des = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
  font-family: "Barlow", sans-serif;
  
font-style: italic;
font-weight: 700;
font-size: 17px;
line-height: 19px;
letter-spacing: 0.05em;

color: #5F6469;

`;
const Button = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
  font-family: "Barlow", sans-serif;
  cursor: pointer;
  width: 143px;
  height: 40px;
  background: #1ad1b9;
  margin: 20px 0px;
  
  font-weight: 700;
  font-size: 20px;
  line-height: 183.52%;
  border-radius: 27px;
  text-align: center;
  padding: 2px 2px;
  letter-spacing: -0.00em;

  color: (0, 0, 0, 0.1);
`;
const SecondSection = styled.div`
  padding: 0px;
  overflow: hidden;
`;
