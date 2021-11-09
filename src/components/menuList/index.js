import React from 'react';
import classes from "./menu.module.css";

class MenuList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={classes.menu_holder}>

                {this.props.icon !== undefined && (
                    <img className={classes.menu_icon} src={this.props.icon} alt="" />
                )}
                
                <p>{this.props.title}</p>
            
            </div>

        )
    }
}

export default MenuList;

