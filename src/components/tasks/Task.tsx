import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Task.css';


class Task extends React.Component<any,any>{
    
    constructor(props: any) {
        super(props)
    }

    render(){
        return (
            <div>
                <Card className="card-custom">
                <Button className="close " onClick={this.props.handleCardClose} value= {this.props.id}> x </Button>
                    <Card.Body>
                        <label>Name: {this.props.name}</label><br />
                        <label>Description: {this.props.description} </label> <br />
                        <Button>Edit</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Task;