import React, { Component } from 'react';

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
                        <li className="active">
                            <a href="">
                                <i className="ti-panel"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="ti-user"></i>
                                <p>Category</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default MenuLeft;
