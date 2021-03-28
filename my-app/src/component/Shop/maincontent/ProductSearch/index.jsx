import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Anime from 'react-anime';

class ProductSearch extends PureComponent {
    render() {
        const { productsSearch } = this.props;
        return (
            <>
                <ul className="product-grid">
                    {productsSearch.map(products => {
                        return (
                            <li key={products.id} style={{ width: '25%', height: '380px' }} >
                                <Anime easing="linear"
                                    translateX={[
                                        { value: 50, duration: 500 },
                                        { value: 0, duration: 1000 }
                                    ]}
                                    scale={[
                                        { value: 0, duration: 0 },
                                        { value: 1, duration: 1000 }
                                    ]}
                                >
                                    <div className="product-item">
                                        <Link to={`/products/${products.id}`}>
                                            <div className="product discount product_filter">
                                                <div className="product_image">
                                                    <img src={products.images[0]} alt="" />
                                                </div>
                                                <div className="favorite favorite_left"></div>
                                                <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                                                <div className="product_info">
                                                    <h6 className="product_name"><a href="single.html">{products.name}</a></h6>
                                                    <div className="product_price">{products.salePrice.toLocaleString('vi')} VND<span>{products.originalPrice.toLocaleString('vi')} VND</span></div>
                                                </div>
                                            </div>
                                            <div className="red_button1 add_to_cart_button1"><a href="#">Show more</a></div>
                                        </Link>


                                    </div>
                                </Anime>


                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

ProductSearch.propTypes = {
    productsSearch: PropTypes.array,
};
ProductSearch.defaultProps = {
    productsSearch: [],
};

export default ProductSearch;