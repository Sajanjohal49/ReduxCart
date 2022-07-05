import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import {  fetchCartData, sendDataToBackend } from "./components/store/action-creator";
import Notification from "./components/UI/Notification";

//we have use this function to hide notification after access the data
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCart = useSelector((state) => state.cart.isShowCart);
  const notification = useSelector((state) => state.cart.notification);
  const cart = useSelector((state) => state.cartLogic);
  
  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    //if the cart will change the data will only be sent to backend 
    //as before it was loading whenever the page refreshes
    if(cart.changed){
      dispatch(sendDataToBackend(cart));
    }
    //dispatch data from action creator component
    
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
