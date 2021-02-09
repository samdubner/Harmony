const usersReducer = (prevState={}, action) => {
    Object.freeze(usersReducer)

    switch(action.type) {
        default:
            return prevState;
    }
}

export default usersReducer;