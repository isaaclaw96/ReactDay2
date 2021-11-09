import React from 'react';
import classes from "./menusection.module.css";


class MenuSection extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className={classes.menu_holder}>

                {this.props.icon !== undefined && (
                    <img className={classes.menu_icon} src={this.props.icon} alt="" />
                )}
                
                <p>{this.props.title}</p>
            
            </div>
        );
    }
}

export default MenuSection;