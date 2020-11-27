import {configureStore} from '@reduxjs/toolkit'
import surveysReducer from '../logic/surveyReducer'

export default configureStore({
    reducer:{
        surveys: surveysReducer
    }
})




