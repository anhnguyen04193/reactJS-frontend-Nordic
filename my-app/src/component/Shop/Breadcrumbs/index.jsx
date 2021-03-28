import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./breadcrumb.css"
import { NavLink, Link } from 'react-router-dom';
class Breadcrumb extends PureComponent {
    render() {
        return (
            //    {/* <!-- Breadcrumbs --> */}

            <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                    {/* <li><a href="index.html">Home</a></li> */}
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li className="active"><Link to="/shop"><i className="fa fa-angle-right" aria-hidden="true"></i>Shop</Link></li>
                </ul>
            </div>
        );
    }
}

Breadcrumb.propTypes = {

};

export default Breadcrumb;