import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TaskBoard from './components/taskBoard/TaskBoard';
import Button from 'react-bootstrap/Button';
import {getTaskboard} from './redux/selectors'; 
import Card from 'react-bootstrap/Card';
import {addTaskboard, addNewList} from './redux/actions';
import { connect } from "react-redux";
import {useDispatch, useSelector } from 'react-redux';


function App(tempTaskboards) { 
  
    const tempTaskboard = useSelector(state => state.taskBoards);
  
    const tempaddNewList = useSelector(state => state.addNewList);
    let taskBoard;
    
    if(tempTaskboards.taskboards.length > 0){
       taskBoard =  tempTaskboards.taskboards.map(taskboard => <TaskBoard key={taskboard.id} id={taskboard.id} name={taskboard.name} />)
    }
    
    const dispatch = useDispatch();
    let input;
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="div-custom"> 
          <div className="contentWrapper">
              {taskBoard} 
            {!tempaddNewList && (
              <Button onClick={()=>dispatch(addNewList())}>Add New List</Button>
            )}
            {tempaddNewList && (
              <Card >
                  <Card.Body>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return;
                        }
                        dispatch(addTaskboard(input.value));
                        dispatch(addNewList())
                        input.value = "";
                        }}
                    >
                      <input placeholder="Title" name="title" id="title" ref={node => input = node}></input><br /> 
                      <Button type= 'submit' > Add List</Button>
                    </form>
                  </Card.Body>
                </Card>
            )}
          </div>
        </div>
      </div>  
    );
  }


  const mapStateToProps = function(state) {
    return {
      taskboards: state.taskboards
    }
  }

export default connect(mapStateToProps)(App);
