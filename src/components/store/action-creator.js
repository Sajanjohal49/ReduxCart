import { createCartActions } from "./reduxSlices";
import { cartLogicActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cart-e4965-default-rtdb.firebaseio.com/AdvancedReduxCart.json"
      
      );
      if (!response.ok) {
        throw new Error("could not fetch data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartLogicActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        createCartActions.showNotification({
          status: "error",
          title: "error!",
          message: "error comes up!",
        })
      );
    }
  };
};
export const sendDataToBackend = (cart) => {
  return async (dispatch) => {
    dispatch(
      createCartActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://cart-e4965-default-rtdb.firebaseio.com/AdvancedReduxCart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong ");
      }
    };
    try {
      await sendRequest();
      dispatch(
        createCartActions.showNotification({
          status: "success",
          title: "success!",
          message: "sent cart data succesfully!",
        })
      );
    } catch (error) {
      dispatch(
        createCartActions.showNotification({
          status: "error",
          title: "error!",
          message: "error comes up!",
        })
      );
    }
  };
};
