import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import loaderGif from '../loading/loader.gif';
import './loader.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showLoader, hideLoader } from '../action/modal';
class Loading extends PureComponent {

    render() {
        const { loading } = this.props;
        if (!loading) return null;

        return (
            <div class="loader-container">
                <div className="loader">
                    <img src={loaderGif} />
                </div>
            </div>

        );
    }
}

Loading.propTypes = {
    loading: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
    loading: state.modalShow.loading,
})
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        ShowLoader: showLoader,
        HideLoader: hideLoader,

    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading);