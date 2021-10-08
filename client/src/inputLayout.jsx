import React from "react";
import { Input, Label, Grid, Form } from 'semantic-ui-react';

const InputLayout = (props) => {
   return <Grid>
        <Grid.Column floated='right' width={5}>
            {props.label === ""? null: 
            <Label as='a' color='blue'>
            <Label.Detail>{props.label}</Label.Detail>            
        </Label>
            }
        
        </Grid.Column>
        <Grid.Column floated='left' width={7}>
            <Form.Field className="Input"
                control={Input}
                name = {props.name}
                type = {props.type}
                placeholder={props.placeholder}
                onChange = {props.onChange}
                value = {props.value}
            />
        </Grid.Column>
    </Grid>
}

export default InputLayout;


