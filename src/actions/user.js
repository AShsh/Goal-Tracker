import { CHANGE_USER } from '../constants/user';

export function changeUserSettings(data) {
    return {
        type: CHANGE_USER,
        payload: data
    }
}
