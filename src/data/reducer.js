import {
  SET_RESTAURANTS,
  SET_SELECTED_RESTAURANT,
  SET_CART_COUNT,
  RESET_PROPS,
} from "./constants";

const initialState = {
  restaurantList: [],
  selectedRestuarant: {
    restaurant_name: null,
    table_menu_list: [],
  },
  itemsCount: null,
  isRestaurantSelected: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_RESTAURANTS:
      const updatedData = action.data.map((item) => {
        item.table_menu_list.map((tab) => {
          const updatedTabs = tab.category_dishes.map((cate) => {
            return { ...cate, selectedCount: 0 };
          });
          tab.category_dishes = updatedTabs;
        });
        return item;
      });
      return {
        ...state,
        restaurantList: updatedData,
      };
    case SET_SELECTED_RESTAURANT:
      const selected = state.restaurantList.length
        ? state.restaurantList.find(
            (item) => item.restaurant_id === action.data
          )
        : state.selectedRestuarant;
      return {
        ...state,
        isRestaurantSelected: true,
        selectedRestuarant: selected,
      };
    case SET_CART_COUNT:
      const updatedDatas = state.restaurantList.map((item) => {
        item.table_menu_list.map((tab) => {
          const updatedTabs = tab.category_dishes.map((dish) => {
            if (dish.dish_id === action.id) {
              return {
                ...dish,
                selectedCount: action.data
                  ? dish.selectedCount + 1
                  : dish.selectedCount - 1,
              };
            } else {
              return dish;
            }
          });
          tab.category_dishes = updatedTabs;
        });
        return item;
      });
      return {
        ...state,
        restaurantList: updatedDatas,
        itemsCount: action.data ? state.itemsCount + 1 : state.itemsCount - 1,
      };
    case RESET_PROPS:
      return {
        ...state,
        isRestaurantSelected: false,
        selectedRestuarant: {},
      };
    default:
      return state;
  }
}
