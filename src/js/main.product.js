require.config({
    paths:{
        jquery:'./jquery.min',
        product:'./lib/product',
        cookie:'./cookie'
    },
    shim:{}
});

require(['jquery','product'],function ($,product) {
    // 回调函数  解决代码执行顺序问题
    // 当页面渲染完成才能获取元素
    product.render(function (id,price) {
        $('.bar-btn').on('click',function () {
            product.addItem(id,price,$('.num').html());
        });
        $('.product-main').on('click','.up',function () {
            let num = $('.num').html();
            let number = $('.number').html()
            let price = $('.n-price').html();
            let oprice = $('.o-price').html();
            let toprice =Number(num) * Number(price);
            let ooprice = Number(num) * Number(oprice);
            $('.t-price').html(toprice);
            $('.ot-price').html(ooprice);
            $('.number').html(num);
        });
        $('.product-main').on('click','.down',function () {
            let num = $('.num').html();
            let price = $('.n-price').html();
            let oprice = $('.o-price').html();
            let toprice =Number(num) * Number(price);
            let ooprice = Number(num) * Number(oprice);
            $('.t-price').html(toprice);
            $('.ot-price').html(ooprice);
            $('.number').html(num);
        })
    });
    product.count();
})