import {createStore} from 'redux'; 
import CartReducer from '../reducers/cartReducer';

export const store = createStore(CartReducer); 