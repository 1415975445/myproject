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
        console.log(stotal);
        let sum = 0;
        $.each(stotal, function (i, val) { 
             sum += Number(val.innerText);
        });
        $('.tprice').html(sum);
        
    });
    car.count();
})