import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { store } from '../index';

import authReducer from 'store/reducers/authReducer';
import navigationReducer from 'store/reducers/navigationReducer';

import users from 'store/reducers/users/usersReducers';

import products from 'store/reducers/products/productsReducers';

import categories from 'store/reducers/categories/categoriesReducers';

import orders from 'store/reducers/orders/ordersReducers';

import reviews from 'store/reducers/reviews/reviewsReducers';

import promocodes from 'store/reducers/promocodes/promocodesReducers';

export const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    navigation: navigationReducer,

    users,

    products,

    categories,

    orders,

    reviews,

    promocodes,
  });

export type RootState = ReturnType<typeof store.getState>;
