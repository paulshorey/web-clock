import initialState from '../state/ui';

export default function(state=initialState, action){
    switch (action.type) {

       case "UI_NAV_TOGGLE": {
          const newState = Object.assign({},{...state});
          newState.nav_toggle.opened = !newState.nav_toggle.opened;
          
          return newState;
        }

        case "UI_MESSAGE": {
          const newState = {};
          newState.message = action.data;

          state = Object.assign({...state}, newState);
          return state;
        }

       default: {
        }
    }
    return state;
  }
  