import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./shopCart.css"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DeleteCart, IncreaseQuantityofCart, DecreaseQuantityofCart } from '../../../action/cart';
class ShoppingCart extends PureComponent {
  handleDeleteCart = (product) => {
    this.props.DeleteCart(product);
  };
  handleIncreaseQuantity = (product) => {
    this.props.IncreaseQuantityofCart(product);
  };
  handleDecreaseQuantity = (product) => {
    this.props.DecreaseQuantityofCart(product);
  };
  render() {
    const { cartList, totalPrice, quantity } = this.props;
    console.log('Shopp', { cartList, totalPrice, quantity });
    return (
      <section className="shoppingCart-section">
        <div className="container">
          <div className="layout">
            <div className="row">
              <div className="col-12 col-lg-9">
                <h2>Product List</h2>
                <ul>
                  {cartList.map(cart => {
                    return (
                      <li key={cart.actionProduct.id}>
                        <div className="cartproduct">
                          <div className="cartproduct__img">
                            <img src={cart.actionProduct.images[0]} alt="" />
                          </div>
                          <div className="cartproduct__text">
                            <div className="cartproduct__name">
                              <p >{cart.actionProduct.name}</p>
                              <p className="cartproduct__delete">
                                <span onClick={() => this.handleDeleteCart(cart)}>Delete</span>
                              </p>
                            </div>
                            <div className="cartproduct__price">
                              <p>Price: {cart.actionProduct.salePrice.toLocaleString('vi')} VND</p>
                              <div>
                                <p className="cartproduct__quantity"> Quantity: {cart.quantity}</p>
                                <span className={(cart.quantity <= 1) ? "cartproduct__minus-disabled" : "cartproduct__minus"} onClick={() => this.handleDecreaseQuantity(cart)}><i className="fa fa-minus" aria-hidden="true"></i></span>
                                <span className="cartproduct__plus" onClick={() => this.handleIncreaseQuantity(cart)} ><i className="fa fa-plus" aria-hidden="true"></i></span>
                              </div>

                            </div>
                          </div>

                        </div>
                      </li>
                    )
                  })}
                </ul>

              </div>
              <div className=" col-12 col-lg-3">
                <p className="cartproduct__totalprice">Total Price: {totalPrice.toLocaleString('vi')} VND</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

ShoppingCart.propTypes = {
  cartList: PropTypes.array.isRequired,
  totalPrice: PropTypes.number,
  quantity: PropTypes.number,
  DeleteCart: PropTypes.func,
  IncreaseQuantityofCart: PropTypes.func,
  DecreaseQuantityofCart: PropTypes.func,
};
const mapStateToProps = state => ({
  cartList: state.cartList.cart,
  totalPrice: state.cartList.cartTotal,
  quantity: state.cartList.quantity,

})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    DeleteCart: DeleteCart,
    IncreaseQuantityofCart: IncreaseQuantityofCart,
    DecreaseQuantityofCart: DecreaseQuantityofCart,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);