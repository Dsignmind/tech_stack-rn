export default (state = null, action) => {
    switch (action.type) { //what is action type?
        case 'select_library':
            return action.payload;
        default: //if unkown then return last state
            return state;
    }
};
