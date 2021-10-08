import React from "react";
import { TextArea, Label, Grid, Form } from 'semantic-ui-react';

const TextAreaLayout = (props) => {
        return <Grid>
        <Grid.Column floated='right' width={5}>
        <Label as='a' color='blue'>
            <Label.Detail>{props.label}</Label.Detail>            
        </Label>
        </Grid.Column>
        <Grid.Column floated='left' width={7}>
            <Form.Field className="Input"
                control={TextArea}
                name = 'description'
                type = 'text'
                placeholder={props.placeholder}
                onChange = {props.onChange}
                value = {props.value}
            />
        </Grid.Column>
        </Grid>
}

export default TextAreaLayout;