import * as ActionTypes from '../actionType';
import { combineReducers } from 'redux';

interface ISearchBookAction {
    type: string;
    [key: string]: any;
}

const initHistory = {};

function history(state = initHistory, action: ISearchBookAction) {
    switch(action.type) {
        case ActionTypes.GLOBAL_ROUTE_HISTORY:
            return {...state, ...action.data}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    history
});

export default rootReducer; 
