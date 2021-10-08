import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

const SubmitButton = (props) => {
    return <Grid>
        
        <Grid.Column floated='right' width={8}>
        
        </Grid.Column>
        <Grid.Column floated='right' width={4}>
            <Button primary 
                type = {props.type}
                onClick={props.onClick}>
                {props.text}
            </Button>
        </Grid.Column>
    </Grid>
}

export default SubmitButton
