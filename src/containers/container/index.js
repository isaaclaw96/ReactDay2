import React from 'react';
import classes from "./container.module.css";
import Header from "./header";
import Content from "./content";



class Container extends React.Component{
    render(){
        return(

            <div className={classes.container_section}>

            <Header />
            
            <Content />

            </div>
        );
    }
}

export default Container;