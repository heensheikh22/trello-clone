const addNewTaskCard = (state = false, action) => {
    switch(action.type) {
        case 'ADD_NEW_TASk_CARD':
            return !state;
        default :
            return state;
    }
}

export default addNewTaskCard;