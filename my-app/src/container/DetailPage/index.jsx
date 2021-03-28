import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './single_responsive.css';
import './tabs-add.css';
import Breadcrumbs from '../../component/DetailPage/Breadcrumbs';
import SingleProduct from '../../component/DetailPage/SingleProduct';
import Tabs from '../../component/DetailPage/Tabs';
import producApi from '../../api/productApi';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Description from '../../component/DetailPage/Tabs/Description';
import Information from '../../component/DetailPage/Tabs/Information';
import Review from '../../component/DetailPage/Tabs/Review';

class DetailPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { product: {}, image: [], showImage: '', salePrice: '', };
    }
    async componentDidMount() {
        const { match } = this.props;
        try {
            const newProduct = await producApi.getDetail(match.params.productId);
            console.log(newProduct.salePrice.toLocaleString('vi'));
            this.setState({
                product: newProduct,
                image: newProduct.images,
                showImage: newProduct.images[0],
                salePrice: newProduct.salePrice.toLocaleString('vi'),
            });
        } catch (error) {
            console.log('Failed to fetch data', error.message);
        }
    }
    handleChangeImage = (image) => {
        this.setState({ showImage: image });
    };
    render() {
        const { match } = this.props;
        const { product, image, showImage, salePrice } = this.state;
        return (
            <>
                <div class="container single_product_container">
                    <Breadcrumbs />
                    <SingleProduct singleProduct={product}
                        imageSinglePage={image}
                        showImage={showImage}
                        salePrice={salePrice}
                        onShowImage={this.handleChangeImage} />

                </div>
                <div className="tabs_section_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="tabs_container">
                                    <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                                        <li className="tab" data-active-tab="tab_1"><NavLink exact to={`${match.url}/description`} activeClassName="active"><span>Description</span></NavLink></li>
                                        <li className="tab" data-active-tab="tab_2"><NavLink to={`${match.url}/information`} activeClassName="active"><span>Additional Information</span></NavLink></li>
                                        <li className="tab" data-active-tab="tab_3"><NavLink to={`${match.url}/review`} activeClassName="active"><span>Reviews (2)</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                            <Switch>
                                <Route path="/products/:productId/description" component={Description} />
                                <Route path="/products/:productId/information" component={Information} />
                                <Route path="/products/:productId/review" component={Review} />
                                <Redirect from="/products/:productId" to="/products/:productId/description" />
                            </Switch>

                        </div>
                    </div>

                </div>
            </>
        );
    }
}

DetailPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default DetailPage;