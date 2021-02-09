import { combineReducers } from "redux"

const errorsReducer = (prevState={}, action) => {
    Object.freeze(prevState)

    switch(action.type) {
        default: 
            return prevState;
    }
}

export default errorsREducer