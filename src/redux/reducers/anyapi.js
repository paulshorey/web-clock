import initialState from '../state/anyapi';

export default function(state=initialState, action){
    switch (action.type) {
       case "ANYAPI_LOGIN": {
            return action.payload || {}
        }
       case "ANYAPI_GET": {
            return action.payload || {}
        }
         case "ANYAPI_GET_ERROR": {
              return action.payload || {}
          }
         case "ANYAPI_GET_RECEIVED": {
              return action.payload || {}
          }
       case "ANYAPI_POST": {
            return action.payload || {}
        }
       default: {
        }
    }
    return state;
  }
  