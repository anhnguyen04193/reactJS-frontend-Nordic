import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Anime from 'react-anime';


class ProductList extends PureComponent {

    render() {
        const { productList } = this.props;

        return (

            <div scope="row">
                <ul className="product-grid" data-isotope='{ "itemSelector": ".product-item1", "layoutMode": "fitRows" }'>
                    {productList.map(product => {
                        return (

                            <li className="table-responsive-sm table-responsive-md table-responsive-lg" key={product.id} style={{ width: '20%', height: '380px' }} >
                                <Anime easing="linear"
                                    translateX={[
                                        { value: 50, duration: 500 },
                                        { value: 0, duration: 500 }
                                    ]}
                                    scale={[
                                        { value: 0, duration: 0 },
                                        { value: 1, duration: 500 }
                                    ]}
                                >
                                    <Link to={`/products/${product.id}`} >
                                        <div className="product-item1">
                                            <div className="product discount product_filter">
                                                <div className="product_image">
                                                    <img src={product.images[0]} alt="" />
                                                </div>
                                                <div className="favorite favorite_left"></div>
                                                <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                                                <div className="product_info">
                                                    <h6 className="product_name"><a href="single.html">{product.name}</a></h6>
                                                    <div className="product_price">{product.salePrice.toLocaleString('vi')} VND<span>{product.originalPrice.toLocaleString('vi')} VND</span></div>
                                                </div>
                                            </div>
                                            <div className="red_button1 add_to_cart_button1"><a href="#">Show more</a></div>
                                        </div>

                                    </Link>
                                </Anime>
                            </li>
                        )
                    })}
                </ul>

            </div>

        );

    }
}

ProductList.propTypes = {
    productList: PropTypes.array.isRequired,

};


export default ProductList;