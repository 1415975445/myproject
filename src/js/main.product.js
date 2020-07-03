require.config({
    paths:{
        jquery:'./jquery.min',
        product:'./lib/product'
    },
    shim:{}
});

require(['product'],function (product) {
    product.render();
})