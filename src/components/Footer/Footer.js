import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="http://www.creative-tim.com">
                                    Li Ku
                            			</a>
                            </li>
                            <li>
                                <a href="http://www.creative-tim.com/license">
                                    Licenses
                            			</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright pull-right">
                        © <script>document.write(new Date().getFullYear())</script>2018, made with <i className="fa fa-heart heart"></i> by <a href="">liku</a>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;
