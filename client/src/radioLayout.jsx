import React from "react";
import { Input, Label, Grid, Form } from 'semantic-ui-react';

const RadioLayout = (props) => {
    let inputs = props.inputs;
   return <Grid>
        <Grid.Column floated='right' width={5}>
        <Label as='a' color='blue'>
            <Label.Detail>{props.label}</Label.Detail>            
        </Label>
        </Grid.Column>
        <Grid.Column floated='left' width={7}>
            <Form.Group inline className="Input">
            {inputs.map((result) => {
                
               return <Form.Field key={result}
                control={Input}
                name = {props.name}
                type = 'radio'
                label = {result}
                onChange = {props.onChange}
                value = {result}
            />
            })}
            </Form.Group>
        </Grid.Column>
    </Grid>
}

export default RadioLayout;


