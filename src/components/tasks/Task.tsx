import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Task.css';
import { editTask } from '../../redux/actions';
import { connect } from "react-redux";
import {useDispatch} from 'react-redux';

function Task(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <Card className="card-custom">
            <Button className="close" > x </Button>
                <Card.Body>
                    <label>Name: {props.name}</label><br />
                    <label>Description: {props.desc} </label> <br />
                    <Button onClick= {()=> dispatch(editTask(props.id,'desc'))} >Edit</Button>
                    
                </Card.Body>
            </Card>
        </div>
    );
}


export default Task;