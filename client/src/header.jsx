import React from "react";
import { Header } from 'semantic-ui-react';


const HeaderLaout = (props) => (
    <Header size={props.size} block>{props.text}</Header> 
)

export default HeaderLaout;