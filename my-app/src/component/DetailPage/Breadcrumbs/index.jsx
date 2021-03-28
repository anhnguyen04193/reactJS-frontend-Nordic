import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './breadcrumbs.css';
class Breadcrumbs extends PureComponent {
    render() {
        return (
            // <!-- Breadcrumbs -->
            <div class="row">
                <div class="col">
                    <div class="breadcrumbs d-flex flex-row align-items-center">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="categories.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Product</a></li>
                            <li class="active"><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Single Product</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

Breadcrumbs.propTypes = {

};

export default Breadcrumbs;