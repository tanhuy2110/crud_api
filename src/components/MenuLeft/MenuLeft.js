import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'ti-panel',
        exact: true,
    },
    {
        name: 'Category',
        to: '/category',
        icon: 'ti-files',
        exact: false,
    },
];

const MenuLink = ({label, to, activeOnlyWhenExact, icon}) => {
    return (
        <Route
            path = {to}
            exact = {activeOnlyWhenExact}
            children = {({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className = {active}>
                        <Link to = {to}>
                            <i className={icon}></i>
                            <p>{label}</p>
                        </Link>
                    </li>
                )
            }}
        />
    );
}

class MenuLeft extends Component {
    render() {
        return (
            <div className="sidebar" data-background-color="white" data-active-color="danger">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="" className="simple-text">
                            Wooden House
							</a>
                    </div>
                    <ul className="nav">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                //console.log(menu.icon);
                return (
                    <MenuLink 
                        key = {index}
                        label = {menu.name}
                        to = {menu.to}
                        icon = {menu.icon}
                        activeOnlyWhenExact = {menu.active}
                    ></MenuLink>
                );
            })
        }
        return result;
    }
}
export default MenuLeft;
