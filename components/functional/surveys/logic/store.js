import { combineReducers } from 'redux'

import surveysReducer from './surveysController'

const rootReducer = combineReducers({
    surveys: surveysReducer,
})

export default rootReducer
