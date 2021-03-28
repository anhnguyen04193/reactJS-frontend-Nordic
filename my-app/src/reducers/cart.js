const cartList = {
    cart: [],
    cartTotal: 0,
    quantity: 1,
    quantityTotal: 0,
};

const cartReducer = (state = cartList, action) => {
    switch (action.type) {
        case 'addCart': {
            // console.log(action);
            const actionProduct = action.payload;
            // console.log('test', actionProduct);
            const newCart = [...state.cart];
            const productIndex = newCart.findIndex(x => x.actionProduct.id === actionProduct.id);
            if (productIndex < 0) {
                const cartItem = { actionProduct, quantity: state.quantity };
                newCart.push(cartItem);

            }
            else {
                newCart[productIndex] = {
                    ...newCart[productIndex],
                    // quantity: newCart[productIndex].quantity + 1,
                    quantity: newCart[productIndex].quantity + state.quantity,
                }
            }


            const totalPrice = state.cartTotal + (action.payload.salePrice * state.quantity);
            const test = state.quantityTotal + state.quantity;
            console.log('test', test);
            return {

                ...state,
                cart: newCart,
                cartTotal: totalPrice,
                quantityTotal: test,
            }
        }

        case 'increaseQuantity': {
            const increase = state.quantity + 1;
            // console.log('quantity', increase);
            return {
                ...state,
                quantity: increase,
            }
        }
        case 'decreaseQuantity': {
            const decrease = state.quantity - 1;
            // console.log('quantity', decrease);
            return {
                ...state,
                quantity: decrease,
            }
        }
        case 'IncreaseQuantityofCart': {
            const product = action.payload;
            // const increaseQuantity = product.quantity + 1;
            const newCart = [...state.cart];
            const productIndex = newCart.findIndex(x => x.actionProduct.id === product.actionProduct.id);
            if (productIndex >= 0) {
                newCart[productIndex] = {
                    ...newCart[productIndex],
                    quantity: product.quantity + 1,
                }
            }


            const productPrice = newCart[productIndex].actionProduct.salePrice;
            const totalPrice = state.cartTotal + productPrice;
            const totalqty = state.quantityTotal + 1;
            return {
                ...state,
                cart: newCart,
                cartTotal: totalPrice,
                quantityTotal: totalqty,
            }
        }
        case 'DecreaseQuantityofCart': {
            const product = action.payload;
            const newCart = [...state.cart];
            const productIndex = newCart.findIndex(x => x.actionProduct.id === product.actionProduct.id);
            if (productIndex >= 0) {
                newCart[productIndex] = {
                    ...newCart[productIndex],
                    quantity: product.quantity - 1,
                }
            }


            const productPrice = newCart[productIndex].actionProduct.salePrice;
            const totalPrice = state.cartTotal - productPrice;
            const totalqty = state.quantityTotal - 1;
            return {
                ...state,
                cart: newCart,
                cartTotal: totalPrice,
                quantityTotal: totalqty,
            }
        }

        case 'deleteCart': {
            const cartId = action.payload.actionProduct.id;
            // console.log(cartId);
            // console.log(action.payload);
            const newList = [...state.cart].filter(cart => cart.actionProduct.id !== cartId);
            const totalPrice = state.cartTotal - (action.payload.actionProduct.salePrice * action.payload.quantity);
            const totalqty = state.quantityTotal - action.payload.quantity;
            // console.log(totalPrice);
            return {
                ...state,
                cart: newList,
                cartTotal: totalPrice,
                quantityTotal: totalqty,
            };
        }


        default:
            return state;
    }
}

export default cartReducer;