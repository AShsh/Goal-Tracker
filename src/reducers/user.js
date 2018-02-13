import { CHANGE_USER, USER_NAME } from '../constants/user';

const initialState = {
    name: USER_NAME,
    //TODO add avatar
    avatar: ''
}

export default (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_USER:
            return { ...state, name: action.payload }

        default:
            return state
    }
}
