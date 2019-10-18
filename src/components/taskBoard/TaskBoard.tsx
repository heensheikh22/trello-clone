import React from 'react';
import Task from './../tasks/Task';
import './TaskBoard.css';
import Button from 'react-bootstrap/Button';
import TaskData from './../../TaskData';
import Card from 'react-bootstrap/Card';

class TaskBoard extends React.Component<any,any> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            tasks: TaskData,
            addComponent: false,
            taskdesc: "",
            taskname: "",
            id: 3,
            boardid: props.id,
        }
        this.addCard =this.addCard.bind(this)
        this.handleChange =this.handleChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
        this.handleClose =this.handleClose.bind(this)
        this.handleCardClose =this.handleCardClose.bind(this)
    }
    
    addCard(e) {
        console.log(this.props)
        this.setState( {
            addComponent: true
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit (e) {
        const temptask = this.state.tasks
        const tempid = this.state.id +1
        temptask.push({
            id: this.props.title+tempid,
            title: null,
            name: this.state.taskname,
            desc: this.state.taskdesc
        })
        this.setState({task : temptask, taskname: "", taskdesc: "", addComponent: false, id:this.state.id +1})
    }

    handleClose(e) {
        this.setState( {
            addComponent: false
        })
    }

    handleCardClose(cardId){
        const tempData = this.state.tasks.filter(task =>
            task.id !== cardId.target.value)
        this.setState({
            tasks: tempData
        })
        
    }

    render() {
        const taskCard =  this.state.tasks.filter(task => 
            task.id.slice(0,-1) === this.props.title ).map( task => {
                return <Task key= {task.id} id={task.id} name={task.name} description={task.desc} handleCardClose= {this.handleCardClose}/> 
            })
        return (
        <div className= "bag-color">
             
            <div>
            <Button className="close" onClick={this.props.handleTaskboardClose} value= {this.props.id}> x </Button>
                <h5>{this.props.title}</h5>
            </div>
            <div className="board">
                {taskCard}
            </div>
            <div >
                <button className="Button-custom"  onClick = {e => this.addCard(e)}> + Add new card</button>
                {this.state.addComponent && (
                    <Card >
                        <Button className="close" id="close" onClick={this.handleClose}> x </Button>
                        <Card.Body>
                            
                            <input placeholder="Name" name="taskname" id="name" onChange={this.handleChange}></input><br /> 
                            <input placeholder="Description" name="taskdesc" id="taskdesc" onChange={this.handleChange}></input><br />
                            <Button value= {this.state.boardid} onClick= {e => this.handleSubmit(e)}>Add Card</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
            
            </div>
        );
    }
    
}


export default TaskBoard;