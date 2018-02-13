import { ADD_NEW_GOAL, CHANGE_GOAL } from '../constants/goals';

export function addNewGoal(data) {
    return {
        type: ADD_NEW_GOAL,
        payload: data
    }
}

export function changeCurrentGoal(data) {
    return {
        type: CHANGE_GOAL,
        payload: data
    }
}
