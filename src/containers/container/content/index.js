import React from 'react';
import classes from "./content.module.css";
import Profile from "../../../components/profile";
import Movie from "../../../components/movie";
import mov_1 from "../../../assets/images/kill.jpg";
import mov_2 from "../../../assets/images/chef.jpg";
import mov_3 from "../../../assets/images/bbq.jpg";
import mov_4 from "../../../assets/images/cs.jpg";
import mov_5 from "../../../assets/images/ib.jpg";
import mov_6 from "../../../assets/images/pulp.jpg";
import mov_7 from "../../../assets/images/snatch.jpg";
import mov_8 from "../../../assets/images/anchorman.jpg";


const DATA=[
    {   
        image:  mov_1,
        title: 'Kill Bill',
        genre: 'Action'
    },
    {
        image:  mov_2,
        title: 'Chef',
        genre: 'Comedy'
    },
    {
        image:  mov_3,
        title: 'Chef Table',
        genre: 'Food'
    },
    {
        image:  mov_4,
        title: 'The Chef Show',
        genre: 'Cooking'
    },
    {
        image:  mov_5,
        title: 'Inglorious Basterd',
        genre: 'Action'
    },
    {
        image:  mov_6,
        title: 'Pulp Fiction',
        genre: 'Action'
    },
    {
        image:  mov_7,
        title: 'Snatch',
        genre: 'Action/Comedy'
    },
    {
        image:  mov_8,
        title: 'Anchorman',
        genre: 'Comedy'
    },

]

class Content extends React.Component{
    render(){
        return(
            <div className={classes.content_section}>
                <Profile />
                <div className={classes.wrap_section}>
                { DATA.map(list=> <Movie image={list.image} title={list.title} genre={list.genre}/>)}
                </div>
            </div>
        );
    }
}

export default Content;