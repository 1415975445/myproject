require.config({
    paths:{
        jquery:'./jquery.min',
        car:'./lib/car',
        cookie:'./cookie'
    }
})

require(['jquery','car'],function ($,car) {
    car.render(function () {
        //总价
        let total = $('.stotal').text();
        let stotal = $('.stotal');
        let number = $('.number');
        console.log(stotal);
        let sum = 0;
        $.each(stotal, function (i, val) { 
             sum += Number(val.innerText);
        });
        $('.tprice').html(sum);
        let sum1 = 0;
        console.log(number);
        $.each(number, function (i, v) { 
             sum1 += Number(v.innerText)
        });
        $('.shipping-total h4 i').html(sum1);
        $('.shipping-total h5 i').html(sum1);
    });
    car.count();
    car.delete();
})