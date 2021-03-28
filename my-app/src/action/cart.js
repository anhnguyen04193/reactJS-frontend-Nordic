export const addToCart = (product) => {
    return {
        type: 'addCart',
        payload: product,
    }
};

export const increaseQuantity = () => {
    return {
        type: 'increaseQuantity',

    }
};

export const DecreaseQuantity = () => {
    return {
        type: 'decreaseQuantity',

    }
};
export const DeleteCart = (product) => {
    return {
        type: 'deleteCart',
        payload: product,
    }
};

export const IncreaseQuantityofCart = (product) => {
    return {
        type: 'IncreaseQuantityofCart',
        payload: product,

    }
};

export const DecreaseQuantityofCart = (product) => {
    return {
        type: 'DecreaseQuantityofCart',
        payload: product,

    }
};