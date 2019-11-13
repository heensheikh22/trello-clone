import {ADD_TASKBOARD} from './actionTypes';

let nextTaskboardId =  0;
let nextTaskCard = 0;

export const addTaskboard =  name => ({
    type: 'ADD_TASKBOARD',
    id: nextTaskboardId++,
    name
})

export const addNewList = () => ({
    type: 'ADD_NEW_LIST',
})

export const addNewTaskCard = () => ({
    type: 'ADD_NEW_TASk_CARD'
})

export const addTaskCard = (name, desc, parentTaskboard) => ({
    type: 'ADD_TASKCARD',
    id: parentTaskboard+(nextTaskCard++),
    name,
    desc
})

export const editTask = (id, desc) => ({
    type: 'EDIT_TASK',
    id,
    desc
})