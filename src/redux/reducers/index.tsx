import { combineReducers } from "redux";
import taskboards from './taskboards';
import addNewList from './addNewList';
import addNewTaskCard from './addNewTaskCard';
import taskCards from './taskCards';
//import tasks from './tasks';

export default combineReducers({ taskboards, addNewList,addNewTaskCard, taskCards} as any);