const modalShow = {
    show: false,
    loading: false,
}

const modalReducer = (state = modalShow, action) => {
    switch (action.type) {
        case 'showModal': {
            return {
                ...state,
                show: true,
            }
        }
        case 'closeModal': {
            return {
                ...state,
                show: false,
            }
        }
        case 'showLoader': {
            return {
                ...state,
                loading: true,
            }
        }
        case 'hideLoader': {
            return {
                ...state,
                loading: false,
            }
        }
        default:
            return state;
    }
}
export default modalReducer;