import initialState from '../initialState';

export function page(state=initialState, action){
    switch (action.type) {
       case "PAGE_CHANGE": {
            return action.payload || {}
        }
        default: {
        }
    }
    return state;
  }
  