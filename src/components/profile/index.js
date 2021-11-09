import React from 'react';
import classes from "./profile.module.css";
import icon_1 from "../../assets/images/icon_1.png";

class Profile extends React.Component{
    render(){
        return(
            <div className={classes.profile_section}>
                <div className={classes.profile_top}>
                    <div className={classes.sort_field}>
                        <h3>Sort By:</h3>
                        <select className={classes.dropdown}>
                            <option>Duration</option>
                            <option>Genre</option>
                            <option>Rating</option>
                        </select>
                    </div>
                    <div className={classes.profile_list}>
                        <img src={icon_1} alt="" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;