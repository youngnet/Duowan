import * as Types from '../action-types'

export default (state = {
    starData: []
}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.TRANSFER_DATA:
            state.starData = action.payload;
            break;
    }
    return state;
};
