import React from 'react';
import classes from "./header.module.css";
import icon_5 from "../../../assets/images/icon_5.png";

class Header extends React.Component{
    render(){
        return(
            <div className={classes.header_section}>
                <div className={classes.header_top}>
                    <img src={icon_5} alt=""/>
                    <input type="text" className={classes.search_bar} placeholder="Search By Title, Genre or Year" />
                </div>  
                <div className={classes.header_bot}>
                    <h3>UserName</h3>
                    <div className={classes.user_pic}> </div>
                </div>
            
            </div>
        );
    }
}

export default Header;