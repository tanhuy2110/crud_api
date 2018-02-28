import React, { Component } from 'react';

class MenuTop extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar bar1"></span>
                            <span className="icon-bar bar2"></span>
                            <span className="icon-bar bar3"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="" className="dropdown-toggle" data-toggle="dropdown">
                                    <p>Hi! <strong>Admin</strong></p>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-bell"></i>
                                    <p className="notification">5</p>
                                    <p>Notifications</p>
                                    <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="">Notification 1</a></li>
                                    <li><a href="">Notification 2</a></li>
                                    <li><a href="">Notification 3</a></li>
                                    <li><a href="">Notification 4</a></li>
                                    <li><a href="">Another notification</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="">
                                    <i className="ti-back-left"></i>
                                    <p>Logout</p>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}
export default MenuTop;
