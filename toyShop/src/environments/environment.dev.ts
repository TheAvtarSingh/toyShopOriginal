export const environment = {
    production:false,
    product:{
        BASE_URL :'http://localhost:3000',
        SHOP_APP_BASE_URL : 'http://localhost:3000/toyStoreApplication/',
        GET_ALL_PRODUCTS : 'list',
        GET_SPECIFIC_PRODUCT : 'view?productID=',
        ADD_PRODUCT : 'add',
        UPDATE_PRODUCT : 'update',
        UPDATE_PRODUCT_REVIEW : 'addreview?productID=',
        DELETE_PRODUCT : 'delete',
        DELETE_ALL_PRODUCTS : 'delete-multiple'
    }
    // ,customer{}
};

// product.BASE_URL.GET_ALL_PRODUCTS