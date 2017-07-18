import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = null, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.currentUser = action.currentUser;
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
