import { createStore } from 'redux';

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            const incrementBy = typeof action.incrementBy ==='number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy,
            }
        case 'DECREMENT': 
            return {
                count: state.count - 1
            }
        case 'RESET': 
            return {
                count: 0
            }
        default:
            return state;
    }    
};
const store = createStore(countReducer)

store.dispatch({
    type: 'RESET'
})

const increment = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
})

const decrement = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})
const reset = ({reset = 1} = {}) => ({
    type: 'DECREMENT',
    reset
})
const setCount = ({count} = {}) => ({
    type: 'SETCOUNT',
    count
})
store.dispatch(increment())
store.dispatch(decrement())

const unsubscribe =  store.subscribe(() => {
    console.log(store.getState());
})


// unsubscribe();