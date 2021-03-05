import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({visible: false}),
    DEFAULT: (state, action) => state
}

export const alertReducer = (state, action) => {
    const handle = handlers[action.type]
    return handle(state, action)
}
