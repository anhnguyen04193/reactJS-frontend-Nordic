import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../../../../loading/Loading';
import { showLoader, hideLoader } from '../../../../../action/modal';
import { bindActionCreators } from 'redux';

class CategoryMenu extends PureComponent {

    handleClickChangeCategory = (category, loadingA) => {
        // console.log(category);

        const { onActiveCategoryChange } = this.props;
        if (onActiveCategoryChange) {
            onActiveCategoryChange(category, loadingA);
        }

    };
    render() {
        const { categoryList, selectCategoryId, loadingA } = this.props;
        return (


            <ul>
                {categoryList.map(category => {
                    const isActive = selectCategoryId === category.id;
                    return (

                        <li className="table-responsive-sm table-responsive-md table-responsive-lg"
                            key={category.id}
                            className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                            onClick={() => this.handleClickChangeCategory(category, loadingA)}
                            style={{ color: isActive ? '#ffffff' : 'black', background: isActive ? '#fe4c50' : '#ffffff' }}
                        >
                            {category.name}
                        </li>
                    )
                })}
            </ul>

        );
    }
}

CategoryMenu.propTypes = {
    categoryList: PropTypes.array,
    selectCategoryId: PropTypes.string,
    onActiveCategoryChange: PropTypes.func,
    loadingA: PropTypes.bool.isRequired,
};
CategoryMenu.defaultProps = {

    categoryList: [],
    selectCategoryId: '',
    onActiveCategoryChange: null,
};



export default CategoryMenu;