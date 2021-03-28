import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../component/Home/Banner';
import Slider from '../../component/Home/Slider';
import NewArrivals from '../../component/Home/NewArrivals';
import Dealoftheweek from '../../component/Home/Dealoftheweek';


class Homepage extends PureComponent {
    render() {
        return (
            <div>
                <Slider />
                <Banner />
                <NewArrivals />
                <Dealoftheweek />
            </div>
        );
    }
}

Homepage.propTypes = {

};

export default Homepage;