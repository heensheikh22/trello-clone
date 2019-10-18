import {ADD_TASKBOARD} from './../actionTypes';

const initialState = {
    allIds : [] as any,
    byId : {} 
};

export default function(state=initialState, action){
    console.log(action)
    switch(action.type) {
        case ADD_TASKBOARD: {
            const {id, name} = action.payload;
            console.log(state)
            return {
                ...state,
                allIds: [...state.allIds,id],
                byId: {
                    ...state,
                    [id]: {
                         name
                    }
                }
            }
        }
        default:
            return state;
    }
}