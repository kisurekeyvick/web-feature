import { combineReducers } from 'redux';
import globalReducer from './globalLayout/reducer';

const rootReducer = combineReducers({
    globalReducer
});

export default rootReducer;
