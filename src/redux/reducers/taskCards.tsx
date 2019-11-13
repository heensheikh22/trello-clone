const taskcards = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASKCARD':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    desc: action.desc
                }
            ];
        case 'EDIT_TASK':
            // return state.map(task => 
            //     (task.id === action.id) ?
            //     {...task, desc: action.desc} : task)
        default :
            return state;
    }
}

export default taskcards;