export const initialState = {
  basket: [],
  user: null
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
      // Logic for adding item to basket
      break;
    case 'REMOVE_FROM_BASKET':
      // Logic for Removing item from basket..

      // we cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      if (index >= 0) {
        // item exist in basket , remove it...
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id:${action.id}) as its not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket
      };
      // logic for removing item from basket
      break;

    default:
      return state;
  }
}


export default reducer;

