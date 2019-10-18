import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TaskBoard from './components/taskBoard/TaskBoard';
import Button from 'react-bootstrap/Button';
import {getTaskboard} from './redux/selectors'; 
import Card from 'react-bootstrap/Card';
import {addTaskboard} from './redux/actions';
import { connect } from "react-redux";


class App extends React.Component<any,any> {
  constructor(props) {
    super(props)
    this.state = {
     // taskboard: TaskBoardData,
      title:"",
      newList: false
    }
    this.handleNewList =this.handleNewList.bind(this)
    this.handleAddTaskboard =this.handleAddTaskboard.bind(this)
    this.handleTaskboardClose =this.handleTaskboardClose.bind(this)
  }

  handleNewList() {
    this.setState( {
      newList: true
    })
  }

  handleAddTaskboard () {
    // const temptaskboard = this.state.taskboard
    // temptaskboard.push({
    //     id: this.state.id,
    //     title: this.state.title,
    // })
    this.setState( {
      name: this.state.title
    })
    this.props.addTaskboard(this.state.title);
    
    this.setState({name: "", newList: false, desc: ""})
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name] : value
    })
  }

  handleTaskboardClose(event) {
    // //const tempData = this.state.taskboard.filter(task =>
    //   task.id !== event.target.value)
    // this.setState({
    //   // taskboard: tempData
    // })
    console.log(this.state.taskboard)
  }
  
  render() {
    const temp = getTaskboard(this.state);
    console.log(this.state);
    const taskBoard =  temp.map(taskboard => <TaskBoard key={taskboard.id} id={taskboard.id} title={taskboard.title} handleTaskboardClose= {this.handleTaskboardClose} />)
    
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="div-custom"> 
          <div className="contentWrapper">
            
            {!this.state.newList && (
              <Button onClick={this.handleNewList}>Add New List</Button>
            )}
            {this.state.newList && (
                      <Card >
                          <Card.Body>
                              <input placeholder="Title" name="title" id="title" onChange={this.handleChange}></input><br /> 
                              <Button onClick= {this.handleAddTaskboard}> Add List</Button>
                          </Card.Body>
                      </Card>
                  )}
          </div>
        </div>
      </div>  
    );
  }

}

// export default App;

export default connect(
  null,
  { addTaskboard }
)(App);

