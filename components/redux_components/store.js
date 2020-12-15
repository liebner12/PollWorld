import { combineReducers } from 'redux'

import accountReducer from './accountController'
import profileReducer from './profileController'
import personalReducer from './personalDataController'
import detailsReducer from  './detailsDataController'
import physicalReducer from './physicalDataController'


const rootReducer = combineReducers({
    account: accountReducer,
    profile: profileReducer,
    personal: personalReducer,
    physical: physicalReducer,
    details: detailsReducer,
})

export default rootReducer
