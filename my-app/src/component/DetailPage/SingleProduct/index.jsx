import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './singleProduct.css';
import './single_responsive.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, increaseQuantity, DecreaseQuantity } from '../../../action/cart';
import { ShowModal } from '../../../action/modal';

class SingleProduct extends PureComponent {

    handleClickImage = (image) => {
        const { onShowImage } = this.props;
        if (onShowImage) {
            onShowImage(image)
        }
    };
    handleClickCart = (singleProduct) => {
        // console.log('product', singleProduct);
        this.props.addToCart(singleProduct);
        this.props.ShowModal();
    };
    handleClickIncrease = () => {

        this.props.increaseQuantity();
    };
    handleClickDecrease = () => {

        this.props.DecreaseQuantity();
    };
    render() {
        const { singleProduct, imageSinglePage, showImage, salePrice, } = this.props;
        const { cartList, totalPrice, quantity } = this.props;
        console.log('Redux', { cartList, totalPrice, quantity });
        return (
            <>
                <div classNameName="row" style={{ display: 'flex' }}>
                    <div className="col-lg-7">
                        <div className="single_product_pics">
                            <div className="row">
                                <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                    <div className="single_product_thumbnails">
                                        <ul>
                                            <li className={imageSinglePage[0] === showImage ? "active" : ""} onClick={() => this.handleClickImage(imageSinglePage[0])} ><img src={imageSinglePage[0]} alt="" /></li>
                                            <li className={imageSinglePage[1] === showImage ? "active" : ""} onClick={() => this.handleClickImage(imageSinglePage[1])}><img src={imageSinglePage[1]} alt="" /></li>
                                            <li className={imageSinglePage[2] === showImage ? "active" : ""} onClick={() => this.handleClickImage(imageSinglePage[2])}><img src={imageSinglePage[2]} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 image_col order-lg-2 order-1">
                                    <div className="single_product_image">
                                        <div className="single_product_image_background" style={{ backgroundImage: `url(${showImage})` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="product_details">
                            <div className="product_details_title">
                                <h2>{singleProduct.name}</h2>
                                <p>{singleProduct.shortDescription}</p>
                            </div>
                            <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                                <span className="ti-truck"></span><span>free delivery</span>
                            </div>
                            <div className="original_price">{singleProduct.originalPrice} VND</div>
                            <div className="product_price" >{salePrice} VND</div>
                            <ul className="star_rating">
                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                            </ul>
                            <div className="product_color">
                                <span>Select Color:</span>
                                <ul>
                                    <li style={{ background: '#e54e5d' }}></li>
                                    <li style={{ background: '#252525' }}></li>
                                    <li style={{ background: '#60b3f3' }}></li>
                                </ul>
                            </div>
                            <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                                <span>Quantity:</span>
                                <div className="quantity_selector">
                                    <span className={(quantity <= 1) ? "minus__disabled" : "minus"} onClick={() => this.handleClickDecrease()}><i className={(quantity <= 1) ? "minus__color-disabled fa fa-minus" : " minus__color fa fa-minus"} aria-hidden="true"></i></span>
                                    <span id="quantity_value">{quantity}</span>
                                    <span className="plus" onClick={() => this.handleClickIncrease()}><i className="fa fa-plus" aria-hidden="true"></i></span>
                                </div>
                                <div className="red_button add_to_cart_button" onClick={() => this.handleClickCart(singleProduct)}><a href="#">add to cart</a></div>
                                <div className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
                            </div>
                        </div>
                    </div>
                </div >

            </>
        );
    }
}

SingleProduct.propTypes = {
    singleProduct: PropTypes.object.isRequired,
    imageSinglePage: PropTypes.array.isRequired,
    showImage: PropTypes.string,
    onShowImage: PropTypes.func,
    salePrice: PropTypes.number,

    cartList: PropTypes.array.isRequired,
    totalPrice: PropTypes.number,
    quantity: PropTypes.number,
    addToCart: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    DecreaseQuantity: PropTypes.func.isRequired,
    ShowModal: PropTypes.func,
};
const mapStateToProps = state => ({
    cartList: state.cartList.cart,
    totalPrice: state.cartList.cartTotal,
    quantity: state.cartList.quantity,
    modal: state.modalShow.show,

})
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addToCart: addToCart,
        increaseQuantity: increaseQuantity,
        DecreaseQuantity: DecreaseQuantity,
        ShowModal: ShowModal,
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);