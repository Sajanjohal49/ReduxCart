import styled from 'styled-components';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <Header className={classes.header}>
      <H1>NIKE</H1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default MainHeader;
const Header =styled.div`
overflow: hidden;
justify-content: space-between;
padding: 0px 100px;
@media(max-width:768px) {
    justify-content: unset;
    padding: 40px;
    
  }
  @media(max-width:450px) {
    justify-content: unset;
    padding: 0px;
    
  }
`
const H1 = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
font-family: 'Anton', sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 50px;
  line-height: 126px;
  word-spacing: 6px;
  padding:5px 0px 5px 100px;
  letter-spacing: 0.04em;
  color: #ffffff;
  @media(max-width:768px) {
    padding:2px 195px 2px 15px;
    font-size: 28px;
  }
  @media(max-width:450px) {
    padding:2px 0px 2px 15px;
    font-size: 28px;
  }
`;