import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartItems = useSelector((state) => state.cartLogic.items);
  const isCart = useSelector((state) => state.cart.isShowCart);
  return (
    <Fragment>
      {isCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>

          <ul>
            {CartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id:item.id,
                  title: item.title,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            ))}
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
