import React, { useState } from "react";
import { Form, Divider  } from 'semantic-ui-react'

import InputLayout from './inputLayout';
import HeaderLaout from './header';
import RadioLayout from './radioLayout';
import TextAreaLayout from './textAreaLayout';
import SubmitButton from './button'

let selected = true;

const TaskForm = () =>{

    const [task, setTask] = useState({
        taskType:'',
        taskTitle: '',
        description: '',
        surbub: '',  
        date: '',
        taskBudget: '',
        budget:''
    });

    const handleChange = (event) => {  
        const {name, value} = event.target;
        setTask((preValue) => {
            return {
                ...preValue,
                [name] : value
            }
        });  
        if (name === "taskType") {            
            if (value === "In person") {
                selected = true;
            }else {
                selected = false;
            }            
        }
    }
     
    

    const handlePostTask = ()=>{
        fetch('http://localhost:5000/recordTaskData', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                taskType: task.taskType,
                taskTitle: task.taskTitle,
                description: task.description,
                surbub: task.surbub,  
                date: task.date,
                taskBudget: task.taskBudget,
                budget: task.budget
            })
        })
        .then(response => response.json())
        .then((data) => {
            alert(data)
            window.location.reload();
        })
        .catch(err => {
            console.log("Error:" + err)
        })
    }


    return <Form> 
            < HeaderLaout
                size = 'medium'
                text = 'New Task'
            />
            < RadioLayout 
                label = 'Select Task Type'
                inputs = {['In person', 'Online']}
                name = 'taskType'
                onChange = {handleChange}
            />

            < HeaderLaout
                size = 'medium'
                text = 'Describe your task to Experts'
            />
            < InputLayout 
                name = 'taskTitle'
                type = 'text'
                label = 'Task Title'
                placeholder = 'Enter Task Title'
                onChange = {handleChange}
                value = {task.taskTitle}
            />

            < TextAreaLayout
                label = 'Description'
                placeholder = 'Enter Task Description'
                onChange = {handleChange}
                value = {task.description}
            />
            < HeaderLaout
                size = 'medium'
                text = 'Setting up your task'
            />
            {selected? 
                < InputLayout 
                name = 'surbub'
                label = 'Surbub'
                type = 'text'
                placeholder = 'Enter a Surbub'
                onChange = {handleChange}
                value = {task.surbub}    
            />
            : null
            }
            < InputLayout 
                name = 'date'
                label = 'Date'
                type = 'date'
                placeholder = 'Enter a date'
                onChange = {handleChange}
                value = {task.date}    
            />

            < HeaderLaout
                size = 'medium'
                text = 'Suggest how Much'
            />

            < RadioLayout 
                label = 'What is your budget (this is an estimate)'
                inputs = {['Total', 'Hourly Rate']}
                name = 'taskBudget'
                onChange = {handleChange}
            />
            < InputLayout 
                name = 'budget'
                label = ''
                type = 'number'
                placeholder = '$'
                onChange = {handleChange}
                value = {task.budget}    
            />
            <Divider horizontal>Submit</Divider>
            < SubmitButton 
                type = 'button'
                onClick = {handlePostTask}
                text = 'Post Task'
            />
            </Form>
}

export default TaskForm;