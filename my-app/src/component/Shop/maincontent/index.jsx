import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './maincontent.css'
import productApi from '../../../api/productApi';
import ProductSearch from './ProductSearch';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

class MainContent extends PureComponent {

  handleChangeSort = (sort, filter) => {
    const newFilter = {
      ...filter,
      _sort: sort,
    }
    const { onChangeSort } = this.props;
    if (onChangeSort) {
      onChangeSort(newFilter)
    }
  };

  handleChangeSortLimit = (limit, filter) => {
    const newFilter = {
      ...filter,
      _limit: limit,
    }
    const { onChangeLimit } = this.props;
    if (onChangeLimit) {
      onChangeLimit(newFilter)
    }
  };
  handleNextPage = (paginations, filter, totalPage) => {
    if (paginations._page < totalPage) {
      const newFilter = {
        ...filter,
        _page: paginations._page + 1,
      };
      const { onChangeNextPage } = this.props;
      if (onChangeNextPage) {
        onChangeNextPage(newFilter);
      }
    }
  };
  handleChangePage1 = (paginations, filter, totalPage) => {
    if (paginations._page <= 1) {
      const newFilter = {
        ...filter,
        _page: 1,
      };
      const { onChangePage } = this.props;
      if (onChangePage) {
        onChangePage(newFilter);
      }
    } else {
      const newFilter = {
        ...filter,
        _page: paginations._page - 1,
      };
      const { onChangePage } = this.props;
      if (onChangePage) {
        onChangePage(newFilter);
      }
    }
  };
  handleChangePage2 = (paginations, filter, totalPage) => {
    if (paginations._page >= 1 && paginations._page < totalPage) {
      if (paginations._page === 1) {
        const newFilter = {
          ...filter,
          _page: paginations._page + 1,
        };
        const { onChangePage } = this.props;
        if (onChangePage) {
          onChangePage(newFilter);
        }
      } else {
        const newFilter = {
          ...filter,
          _page: paginations._page,
        };
        const { onChangePage } = this.props;
        if (onChangePage) {
          onChangePage(newFilter);
        }
      }

    }
  };

  handleChangePage3 = (paginations, filter, totalPage) => {
    if (paginations._page < totalPage) {
      if (paginations._page === 1) {
        const newFilter = {
          ...filter,
          _page: paginations._page + 2,
        };
        const { onChangePage } = this.props;
        if (onChangePage) {
          onChangePage(newFilter);
        }
      } else if (paginations._page <= totalPage) {
        const newFilter = {
          ...filter,
          _page: paginations._page + 1,
        };
        const { onChangePage } = this.props;
        if (onChangePage) {
          onChangePage(newFilter);
        }
      }
    }
  };
  render() {

    const sort = {
      originalorder: 'originalPrice',
      price: 'salePrice',
      name: 'name'
    };

    const limit = { six: 6, twelve: 12, twentyFour: 24 };
    const { filter, productsSearch, paginations, loading } = this.props;
    const totalPage = Math.ceil(paginations._totalRows / paginations._limit);
    const pageSelect = {
      page3: `${(paginations._page <= totalPage) ? (paginations._page === 1) ? paginations._page + 2 : paginations._page + 1 : totalPage}`,
      page1: `${(paginations._page <= 1) ? 1 : paginations._page - 1}`,
      page2: `${(paginations._page === 1) ? paginations._page + 1 : paginations._page}`,
    };
    const titleSort = `${(filter._sort === 'originalPrice') ? 'Default Sorting' : '' || (filter._sort === 'salePrice') ? 'Sale Price' : '' || (filter._sort === 'name') ? 'Product Name' : ''}`;

    return (
      //    {/* <!-- Main Content --> */}

      <div className="main_content">

        {/* <!-- Products --> */}

        <div className="products_iso">
          <div className="row">
            <div className="col">

              {/* <!-- Product Sorting --> */}

              <div className="product_sorting_container product_sorting_container_top">
                <ul className="product_sorting">
                  <li>
                    <span className="type_sorting_text">{titleSort}</span>
                    <i className="fa fa-angle-down"></i>

                    <ul className="sorting_type">
                      <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }' onClick={() => this.handleChangeSort(sort.originalorder, filter)}><span>Default Sorting</span></li>
                      <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }' onClick={() => this.handleChangeSort(sort.price, filter)}><span>Sale Price</span></li>
                      <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }' onClick={() => this.handleChangeSort(sort.name, filter)}><span>Product Name</span></li>
                    </ul>

                  </li>
                  <li>
                    <span>Show</span>
                    <span className="num_sorting_text">{filter._limit}</span>
                    <i className="fa fa-angle-down"></i>
                    <ul className="sorting_num">
                      <li className="num_sorting_btn" onClick={() => this.handleChangeSortLimit(limit.six, filter)}><span>6</span></li>
                      <li className="num_sorting_btn" onClick={() => this.handleChangeSortLimit(limit.twelve, filter)}><span>12</span></li>
                      <li className="num_sorting_btn" onClick={() => this.handleChangeSortLimit(limit.twentyFour, filter)}><span>24</span></li>
                    </ul>
                  </li>
                </ul>
                <div className="pages d-flex flex-row align-items-center">
                  <div className="page_current">
                    <span>{paginations._page}</span>
                    <ul className="page_selection">
                      <li onClick={() => this.handleChangePage1(paginations, filter, totalPage)}><Link>{pageSelect.page1}</Link></li>
                      <li style={{ display: (paginations._page === totalPage) ? 'none' : 'block' }} onClick={() => this.handleChangePage2(paginations, filter, totalPage)}><Link>{pageSelect.page2}</Link></li>
                      <li style={{ display: (paginations._page >= totalPage) ? 'none' : 'block' }} onClick={() => this.handleChangePage3(paginations, filter, totalPage)}><Link>{pageSelect.page3}</Link></li>
                    </ul>
                  </div>
                  <div className="page_total"><span>of</span> {totalPage}</div>
                  <div id="next_page" className="page_next" onClick={() => this.handleNextPage(paginations, filter, totalPage)}><Link><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                </div>

              </div>

              {/* <!-- Product Grid --> */}
              {loading ?
                <div className="loading">
                  <ReactLoading type={'cylon'} color={'rgba(156, 39, 176, 0.6)'} height={'20%'} width={'20%'} />
                </div>
                :
                <ProductSearch productsSearch={productsSearch} />
              }
              {/* <ProductSearch productsSearch={productsSearch} /> */}


              <div className="product_sorting_container product_sorting_container_bottom clearfix">
                <ul className="product_sorting">
                  <li>
                    <span>Show:</span>
                    <span className="num_sorting_text">{filter._limit}</span>
                    <i className="fa fa-angle-down"></i>
                    <ul className="sorting_num">
                      <li className="num_sorting_btn" onClick={() => this.handleChangeSortLimit(limit.six, filter)}><span>6</span></li>
                      <li className="num_sorting_btn" onClick={() => this.handleChangeSortLimit(limit.twelve, filter)}><span>12</span></li>
                      <li className="num_sorting_btn" onClick={() => this.handleChangeSortLimit(limit.twentyFour, filter)}><span>24</span></li>

                    </ul>
                  </li>
                </ul>
                <span className="showing_results">Showing {paginations._page}–{totalPage} of {paginations._totalRows} results</span>
                <div className="pages d-flex flex-row align-items-center">
                  <div className="page_current">
                    <span>{paginations._page}</span>
                    <ul className="page_selection">
                      <li onClick={() => this.handleChangePage1(paginations, filter, totalPage)}><Link>{pageSelect.page1}</Link></li>
                      <li style={{ display: (paginations._page === totalPage) ? 'none' : 'block' }} onClick={() => this.handleChangePage2(paginations, filter, totalPage)}><Link>{pageSelect.page2}</Link></li>
                      <li style={{ display: (paginations._page >= totalPage) ? 'none' : 'block' }} onClick={() => this.handleChangePage3(paginations, filter, totalPage)}><Link>{pageSelect.page3}</Link></li>
                    </ul>
                  </div>
                  <div className="page_total"><span>of</span> {totalPage}</div>
                  <div id="next_page_1" className="page_next" onClick={() => this.handleNextPage(paginations, filter, totalPage)}><Link><i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainContent.propTypes = {
  filter: PropTypes.object.isRequired,
  productsSearch: PropTypes.array.isRequired,
  paginations: PropTypes.object.isRequired,
  onChangeLimit: PropTypes.func,
  onChangeSort: PropTypes.func,
  onChangeNextPage: PropTypes.func,
  onChangePage: PropTypes.func,

};

export default MainContent;