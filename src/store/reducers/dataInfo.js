import * as Types from '../action-types'

export default (state = {
    starData: {},
    typeIndex:0
}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.TRANSFER_DATA:
            state.starData[action.name] = action.payload;
            break;
        case Types.CHANGE_INDEX:
            state.typeIndex=action.index;
            break;
    }
    return state;
};
