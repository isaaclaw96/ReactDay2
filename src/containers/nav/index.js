import React from 'react';
import classes from "./nav.module.css";
import MenuList from "../../components/menuList";
import MenuSection from "../../components/menuSection";
import icon_1 from "../../assets/images/icon_1.png";
import icon_2 from "../../assets/images/icon_2.png";


class Nav extends React.Component{
    render(){
        return(
            <nav>
                <h1>Insert Logo Here</h1>

                <div>
                    <MenuList icon={icon_1} title="New Releases" />
                    <MenuList icon={icon_1} title="Most Popular" />
                    <MenuList icon={icon_1} title="Recommended" />
                    <MenuList icon={icon_1} title="Top Chart" />
                </div>

                <div>
                    <MenuList title="My Collections" />
                    <MenuList title="BookMark" />
                    <MenuList title="History" />
                    <MenuList title="Subscriptions" />

                </div>

            </nav>
        );
    }
}

export default Nav;