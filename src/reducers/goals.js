import { ADD_NEW_GOAL, CHANGE_GOAL } from '../constants/goals';

const initialState = {
    goalsList: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_GOAL:
            return {
                ...state,
                goalsList: [...state.goalsList, action.payload]
            }

        case CHANGE_GOAL:
            return { ...state, selectedIndex: action.payload }

        default:
            return state
    }
}
