import { createStore, combineReducers ,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getPetDetailsReducer, getPetsReducer } from './reducers/petReducer';

const reducer =combineReducers({
    getPets: getPetsReducer,
    getPetDetails: getPetDetailsReducer
});

const middleware =[thunk];



const store=createStore(

    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;