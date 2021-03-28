import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../component/Shop/Breadcrumbs';
import Sidebar from '../../component/Shop/Sidebar';
import MainContent from '../../component/Shop/maincontent'
import { NavLink } from 'react-router-dom';
import productApi from '../../api/productApi';
class Shop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      filter: {
        _page: 1,
        _limit: 12,
        _sort: 'originalPrice',
        _order: 'asc',
        salePrice_gte: 10000,
        salePrice_lte: 200000,
      },
      productsSearch: [],
      paginations: {
        _page: 1,
        _limit: 12,
        _totalRows: 1,
      },

    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const productSearch = await productApi.getAll(this.state.filter);
      // console.log(productSearch);
      this.setState({ productsSearch: productSearch.data, paginations: productSearch.pagination, loading: false })
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }
  }
  handleChangeLimit = async (newFilter) => {
    this.setState({ loading: true });
    // console.log(newFilter);
    try {
      const newproducts = await productApi.getAll(newFilter);
      this.setState({ filter: newFilter, productsSearch: newproducts.data, paginations: newproducts.pagination, loading: false });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }
  };

  handleChangeSort = async (newFilter) => {
    this.setState({ loading: true });
    try {
      const newproducts = await productApi.getAll(newFilter);
      this.setState({ filter: newFilter, productsSearch: newproducts.data, paginations: newproducts.pagination, loading: false });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }
  };

  handleChangebyPrice = async (newFilter) => {
    this.setState({ loading: true });
    try {
      const newproducts = await productApi.getAll(newFilter);
      this.setState({ filter: newFilter, productsSearch: newproducts.data, paginations: newproducts.pagination, loading: false });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }

  };
  handleChangeNextPage = async (newFilter) => {
    this.setState({ loading: true });
    try {
      const newproducts = await productApi.getAll(newFilter);
      console.log(newproducts);
      this.setState({ filter: newFilter, productsSearch: newproducts.data, paginations: newproducts.pagination, loading: false });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }

  };
  handleChangePage = async (newFilter) => {
    this.setState({ loading: true });
    try {
      const newproducts = await productApi.getAll(newFilter);
      console.log(newproducts);
      this.setState({ filter: newFilter, productsSearch: newproducts.data, paginations: newproducts.pagination, loading: false });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }

  };
  render() {
    const { filter, productsSearch, paginations, loading } = this.state;

    return (
      <>
        <div className="container product_section_container">
          <div className="row">
            <div className="col product_section clearfix">
              <Breadcrumb />

              <Sidebar filter={filter}
                productsSearch={productsSearch}
                paginations={paginations}
                onChangebyPrice={this.handleChangebyPrice} />

              <MainContent filter={filter}
                loading={loading}
                productsSearch={productsSearch}
                paginations={paginations}
                onChangeLimit={this.handleChangeLimit}
                onChangeSort={this.handleChangeSort}
                onChangeNextPage={this.handleChangeNextPage}
                onChangePage={this.handleChangePage}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Shop.propTypes = {

};

export default Shop;