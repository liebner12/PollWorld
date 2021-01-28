import { combineReducers } from 'redux'

import accountReducer from './accountController'
import personalReducer from './personalDataController'
import detailsReducer from  './detailsDataController'
import physicalReducer from './physicalDataController'


const rootReducer = combineReducers({
    account: accountReducer,
    personal: personalReducer,
    physical: physicalReducer,
    details: detailsReducer,
})

export default rootReducer
