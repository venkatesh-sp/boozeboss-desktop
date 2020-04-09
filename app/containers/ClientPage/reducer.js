/*
 *
 * ClientContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { 
  ADD_CLIENT_DRAFT, 
  GET_CLIENTS_REQUEST, GET_CLIENTS_SUCCESS, GET_CLIENTS_ERROR,
  INVITE_CLIENT_REQUEST, INVITE_CLIENT_SUCCESS, INVITE_CLIENT_ERROR
} from './constants';

export const initialState = fromJS({
  clients: null,
  isLoading: false,
  error: null,
});

function clientContainerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENT_DRAFT:
      return state
        .set('clients', [{isDraft: true}, ...state.get('clients')]);
    case GET_CLIENTS_REQUEST:
      return state.set('isLoading', true);
    case GET_CLIENTS_SUCCESS:
      return state
        .set('clients', action.clients)
        .set('isLoading', false);
    case GET_CLIENTS_ERROR:
      return state
        .set('error', action.error)
        .set('isLoading', false);
    case INVITE_CLIENT_REQUEST:
      return state.set('isLoading', true);
    case INVITE_CLIENT_SUCCESS:
      let current_clients = state.get('clients').splice();
      current_clients[0] = action.client;
      return state
        .set('clients', current_clients)
        .set('isLoading', false);
    case INVITE_CLIENT_ERROR:
      return state
        .set('error', action.error)
        .set('isLoading', false);
    default:
      return state;
  }
}

export default clientContainerReducer;
