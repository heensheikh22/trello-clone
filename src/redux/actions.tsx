import {ADD_TASKBOARD} from './actionTypes';

let nextTaskboardId =  0;

export const addTaskboard = (tempname) => ({
    type: ADD_TASKBOARD,
    payload: {
        id: ++nextTaskboardId,
        name: tempname,
    }
});