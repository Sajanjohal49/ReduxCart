import { createCartActions } from '../store/reduxSlices';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const cartQuantity = useSelector((state)=>state.cartLogic.totalQuantity);
  const dispatch=useDispatch();
  const openCartHandler = (event)=>{
    event.preventDefault();
    dispatch(createCartActions.showCart());
  }
  return (
    <button onClick={openCartHandler} className={classes.button}>
      <span >My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
