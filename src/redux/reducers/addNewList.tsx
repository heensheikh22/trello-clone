
const addNewList = (state = false, action) => {
    switch(action.type) {
        case 'ADD_NEW_LIST':
            return !state;
        default :
            return state;
    }
}

export default addNewList;