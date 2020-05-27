import axios from "axios";

export const GET_USERS_LIST = "GET_USER_LIST";
export const GET_USERS_VIEW = "GET_USERS_VIEW";
export const GET_USERS_CREATE = "GET_USERS_CREATE";
export const GET_USERS_EDIT = "GET_USERS_EDIT";

export const getUserlist = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
    .get("http://my-json-server.typicode.com/IPP2015/project_react_redux/users")
    .then(function (response) {
      // handle success
      
      dispatch({
        type: GET_USERS_LIST,
        payload: {
          data: response.data,
          errorMessage: false,
        },
      });
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
      dispatch({
        type: GET_USERS_LIST,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
};
export const getUserview = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
    .get("http://my-json-server.typicode.com/IPP2015/project_react_redux/users/"+id)
    .then(function (response) {
      // handle success
      
      dispatch({
        type: GET_USERS_VIEW,
        payload: {
          data: response.data,
          errorMessage: false,
        },
      });
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
      dispatch({
        type: GET_USERS_VIEW,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
};
export const getUsercreate = (data) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
    .post("http://my-json-server.typicode.com/IPP2015/project_react_redux/users", data)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({
        type: GET_USERS_CREATE,
        payload: {
          data: false,
          errorMessage: false
        }
      })
      dispatch({
        type: GET_USERS_CREATE,
        payload: {
          data: response.data,
          errorMessage: false,
        },
      });
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
      dispatch({
        type: GET_USERS_CREATE,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
};

export const getUseredit = (data, id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
    .put("http://my-json-server.typicode.com/IPP2015/project_react_redux/users/"+id, data)
    .then(function (response) {
      // handle success
      
      dispatch({
        type: GET_USERS_EDIT,
        payload: {
          data: response.data,
          errorMessage: false,
        },
      });
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
      dispatch({
        type: GET_USERS_EDIT,
        payload: {
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
};

