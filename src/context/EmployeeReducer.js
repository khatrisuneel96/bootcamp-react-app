const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT' : 
            return state * 2
        case 'DECREMENT' : 
            return state / 2
    }
}

export default reducer