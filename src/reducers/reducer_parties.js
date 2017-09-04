import { CREATE_PARTIES } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_PARTIES:
      // Do we need to do anything? possibly not...
      return state;
    default:
      return state;
  }
}
