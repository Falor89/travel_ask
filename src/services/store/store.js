import { configureStore, combineReducers } from "@reduxjs/toolkit"
import reducer from "./reducers/messages"


const rootReducer = combineReducers({
    messages: reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
} 