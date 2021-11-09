import React from 'react';
import classes from "./movie.module.css";


class Movie extends React.Component{

    render(){
        return(
            <div className={classes.movie_section}>
                <div className={classes.img_holder}>
                    <img src={this.props.image} alt=""/>
                </div>

                <div className={classes.movie_description}>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.genre}</p>
                </div>
            

            </div>
        )
    }
}

export default Movie;