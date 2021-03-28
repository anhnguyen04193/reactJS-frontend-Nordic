import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, increaseQuantity, DecreaseQuantity } from '../../../action/cart';
import { bindActionCreators } from 'redux';
import { CloseModal, showLoader, hideLoader } from '../../../action/modal';
import Loading from '../../../loading/Loading';

class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      right: -700,
    };
  }
  handleClickModal = () => {
    this.props.CloseModal();
  }
  handleLoader = () => {
    this.props.ShowLoader();
    setTimeout(() => {
      this.props.HideLoader();
    }, 1500)
  }
  handleClose = (right) => {
    console.log(right);
    this.setState({ right: right });
  }
  render() {
    const { quantityTotal, modal } = this.props;
    const { right } = this.state;
    return (
      <>
        <header className="header trans_300">
          <div>
            {/* <!-- Top Navigation --> */}
            <div className="top_nav">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="top_nav_left">free shipping on all u.s orders over $50</div>
                  </div>
                  <div className="col-md-6 text-right">
                    <div className="top_nav_right">
                      <ul className="top_nav_menu">

                        {/* <!-- Currency / Language / My Account --> */}
                        <li className="language">
                          <a href="#">
                            English
										<i className="fa fa-angle-down"></i>
                          </a>
                          <ul className="language_selection">
                            <li><a href="#">French</a></li>
                            <li><a href="#">Italian</a></li>
                            <li><a href="#">German</a></li>
                            <li><a href="#">Spanish</a></li>
                          </ul>
                        </li>
                        <li className="account">
                          <a href="#">
                            My Account
										<i className="fa fa-angle-down"></i>
                          </a>
                          <ul className="account_selection">
                            <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                            <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Main Navigation --> */}
            <div className="main_nav_container">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-12 text-right">
                    <div className="logo_container">
                      <a href="#">Nordic<span>Shop</span></a>
                    </div>
                    <nav className="navbar ">
                      <ul className="navbar_menu">
                        <li onClick={this.handleLoader}><NavLink to="/" exact>Home</NavLink></li>
                        <li onClick={this.handleLoader}><NavLink to="/shop">Shop</NavLink></li>
                        <li onClick={this.handleLoader}><NavLink to="/promotion">Promotion</NavLink></li>
                        <li onClick={this.handleLoader}><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                        <li onClick={this.handleLoader}><NavLink to="/contact">Contact</NavLink></li>
                      </ul>
                      <ul className="navbar_user">

                        <li className="checkout">
                          <Link to="/products/shoppingcart">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span id="checkout_items" className="checkout_items">{quantityTotal}</span>

                          </Link>


                        </li>
                        <div className={(modal === true) ? "OpenModal" : "CloseModal"}>
                          <div className="modal-table">
                            <a className="modal-a"><i className="fas fa-times modal-icon" onClick={this.handleClickModal}></i></a>
                            <p className="modal-text">Add to Cart Successful</p>
                            <Link to="/products/shoppingcart" className="modal-link">Go to Show Cart</Link>
                          </div>
                        </div>
                      </ul>
                      <div className="hamburger_container" onClick={() => this.handleClose(0)}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class=" fs_menu_overlay"></div>
        {/* style={{ right: `${right}px` }} */}
        <div className="hamburger_menu" style={{ right: `${right}px` }}>
          <div className="hamburger_close" onClick={() => this.handleClose(-700)}><i className="fa fa-times" aria-hidden="true"></i></div>
          <div className="hamburger_menu_content text-right">
            <ul className="menu_top_nav">
              <li className="menu_item has-children">
                <ul className="menu_selection">
                  <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                  <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                </ul>
              </li>
              <li className="menu_item" onClick={this.handleLoader}><NavLink to="/" exact>Home</NavLink></li>
              <li className="menu_item" onClick={this.handleLoader}><NavLink to="/shop">Shop</NavLink></li>
              <li className="menu_item" onClick={this.handleLoader}><NavLink to="/promotion">Promotion</NavLink></li>
              <li className="menu_item" onClick={this.handleLoader}><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
              <li className="menu_item" onClick={this.handleLoader}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
        <Loading />
      </>

    );
  }
}

Header.propTypes = {
  quantityTotal: PropTypes.number,
  modal: PropTypes.bool,
  CloseModal: PropTypes.func,
  ShowLoader: PropTypes.func,
  HideLoader: PropTypes.func,
};
const mapStateToProps = state => ({
  quantityTotal: state.cartList.quantityTotal,
  modal: state.modalShow.show,
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addToCart: addToCart,
    increaseQuantity: increaseQuantity,
    DecreaseQuantity: DecreaseQuantity,
    CloseModal: CloseModal,
    ShowLoader: showLoader,
    HideLoader: hideLoader,

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);