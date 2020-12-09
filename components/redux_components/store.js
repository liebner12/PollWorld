import { combineReducers } from 'redux'

import accountReducer from './accountController'
import profileReducer from './profileController'

const rootReducer = combineReducers({
    account: accountReducer,
    profile: profileReducer,
})

export default rootReducer
