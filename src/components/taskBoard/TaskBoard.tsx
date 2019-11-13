import React from 'react';
import Task from './../tasks/Task';
import './TaskBoard.css';
import Button from 'react-bootstrap/Button';
import TaskData from './../../TaskData';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux';
import { addTaskboard, addTaskCard, addNewTaskCard, editTask } from '../../redux/actions';
import { connect } from "react-redux";

function TaskBoard(props) {

        const taskCard = props.tasks.filter(task => 
        task.id.slice(0,-1) === props.name ).map(task => {
            return <Task key={task.id} id={task.id} name={task.name} 
                    desc={task.desc}>
            </Task>})

        console.log(props)
        const dispatch1 = useDispatch();
        const tempaddNewtask = useSelector(state => state.addNewTaskCard);
        let taskName;
        let taskDesc;
        return (
        <div className= "bag-color">
             
            <div>
            <Button className="close" > x </Button>
                <h5>{props.name}</h5>
            </div>
            <div className="board">
                {taskCard}
            </div>
            <div >
                <button className="Button-custom" onClick={()=>dispatch1(addNewTaskCard())}> + Add new card</button>
                {tempaddNewtask && (
                    <Card >
                        <Button className="close" id="close"> x </Button>
                        <Card.Body>
                            <form
                                onSubmit={e => {
                                e.preventDefault();
                                if (!taskName.value.trim()) {
                                    return;
                                }
                                dispatch1(addTaskCard(taskName.value, taskDesc.value, props.name));
                                dispatch1(addNewTaskCard())
                                taskName.value = "";
                            }}
                            >
                                <input placeholder="Name" name="taskname" ref = {node => taskName = node} ></input><br /> 
                                <input placeholder="Description" name="taskdesc" ref = {node => taskDesc = node} ></input><br />
                                <Button type= 'submit'>Add Card</Button> 
                            </form>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}
    

const mapStateToProps = function(state) {
    return {
      tasks: state.taskCards
    }
}

const mapDispatchToProps = dispatch => ({
    editTasks: id => dispatch(editTask(id,'desc'))
})  

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);