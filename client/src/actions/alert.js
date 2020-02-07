import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';
export const setAlert = (mes, alertType) => dispatch => {
    const id = uuid.v4();
    dispath({
        type: SET_ALERT;,
        payload: { msg, alertType, id }
    });
}