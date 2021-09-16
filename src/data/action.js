import {
  SET_RESTAURANTS,
  SET_SELECTED_RESTAURANT,
  SET_CART_COUNT,
  RESET_PROPS,
} from "./constants";

export function setRestaurants(data) {
  return { type: SET_RESTAURANTS, data };
}

export function setSelectedRestaurant(id) {
  return { type: SET_SELECTED_RESTAURANT, data: id };
}

export function setCartCount(isAdd, id) {
  return { type: SET_CART_COUNT, data: isAdd, id };
}

export function resetProps() {
  return { type: RESET_PROPS };
}
