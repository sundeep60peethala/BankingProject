import { ACCOUNT_OPEN_SUCCESS } from "../actions/actionTypes";

const defaultState: any = {
  msg: "Welcome to Peoples bank",
};
export function rootReducer(state: any = defaultState, action: any) {
  switch (action.type) {
    case ACCOUNT_OPEN_SUCCESS:
      return state;

    default:
     return state;
  }
}
