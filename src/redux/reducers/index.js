import initialState from '../state';


export function ui(state=initialState.ui, action){
    switch (action.type) {
       case "UI_POPUP": {
            return action.payload || {}
        }
       case "UI_MESSAGE": {
            return action.payload || {}
        }
       default: {
        }
    }
    return state;
  }
  

export function data(state=initialState.data, action){
    switch (action.type) {
       case "MYAPI_LOGIN": {
            return action.payload || {}
        }
       case "MYAPI_GET": {
            return action.payload || {}
        }
       case "MYAPI_POST": {
            return action.payload || {}
        }
       default: {
        }
    }
    return state;
  }
  