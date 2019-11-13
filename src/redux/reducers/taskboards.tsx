import {ADD_TASKBOARD} from './../actionTypes';

const taskboards = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASKBOARD':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                   
                }
            ];
        default :
            return state;
    }
}

export default taskboards;