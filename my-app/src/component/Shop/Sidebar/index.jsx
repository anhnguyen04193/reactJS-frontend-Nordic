import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';


class Sidebar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            salePrice_gte: 10000,
            salePrice_lte: 200000,
        };
    }

    handleChangePrice = (value) => {
        this.setState({ salePrice_gte: value[0], salePrice_lte: value[1] });
    };
    handleClickFilter = (salePrice_gte, salePrice_lte, filter) => {
        const newFilter = {
            ...filter,
            _page: 1,
            salePrice_gte: salePrice_gte,
            salePrice_lte: salePrice_lte,
        };
        const { onChangebyPrice } = this.props;
        if (onChangebyPrice) {
            onChangebyPrice(newFilter);
        }
    };
    render() {
        const createSliderWithTooltip = Slider.createSliderWithTooltip;
        const Range = createSliderWithTooltip(Slider.Range);

        const { salePrice_gte, salePrice_lte } = this.state;
        const { filter, productsSearch, paginations } = this.props;

        return (
            //  {/* <!-- Sidebar --> */}

            <div className="sidebar">
                <div className="sidebar_section">
                    {/* <div className="sidebar_title">
                        <h5>Product Category</h5>
                    </div> */}
                    {/* <ul className="sidebar_categories">
                        <li><a href="#">Men</a></li>
                        <li className="active"><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>Women</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="categories.html">shop</a></li>
                    </ul> */}
                </div>

                {/* <!-- Price Range Filtering --> */}
                <div className="sidebar_section">
                    <div className="sidebar_title">
                        <h5>Filter by Price</h5>
                    </div>
                    {/* <p>
                        <input type="number" id="amount" readonly style={{ border: 0, color: '#f6931f', fontWeight: "bold" }} />
                    </p> */}

                    <div id="slider-range">
                        <div >
                            <Range min={10000} max={30000000} defaultValue={[salePrice_gte, salePrice_lte]} tipFormatter={value => `${value.toLocaleString('vi')} VND`} onAfterChange={this.handleChangePrice} />
                        </div>

                    </div>
                    <div className="filter_button" onClick={() => this.handleClickFilter(salePrice_gte, salePrice_lte, filter)} ><span>filter</span></div>
                </div>

            </div>
        );
    }
}

Sidebar.propTypes = {
    filter: PropTypes.object.isRequired,
    productsSearch: PropTypes.array.isRequired,
    paginations: PropTypes.object.isRequired,
    onChangebyPrice: PropTypes.func,
};

export default Sidebar;