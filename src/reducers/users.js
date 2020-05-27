import { GET_USERS_LIST, GET_USERS_VIEW, GET_USERS_CREATE, GET_USERS_EDIT } from "../actions/userAction";

let initialState = {
  getUserlist: false,
  tittle: "Hi, My name Is Ilham Pandu Putra!",
  getUserview: false,
  errorUserview: false,
  getResponDataUser: false,
  errorResponDataUser: false,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUserlist: action.payload.data,
        error: action.payload.errorMessage
      };
      case GET_USERS_VIEW:
        return {
          ...state,
          getUserview: action.payload.data,
          errorUserview: action.payload.errorMessage
        };
        case GET_USERS_CREATE:
          return {
            ...state,
            getResponDataUser: action.payload.data,
            errorResponDataUser: action.payload.errorMessage,
          };
    
        case GET_USERS_EDIT:
          return {
            ...state,
            getResponDataUser: action.payload.data,
            errorResponDataUser: action.payload.errorMessage,
          };

    default:
      return state;
  }
 };
export default users;
