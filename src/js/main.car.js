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
        let number =  $('.number');
        let danprice = Number($('.dan-price').html());
        // console.log(danprice);
        let sum = 0;
        let sum1 = 0;
        console.log(stotal);

        // //加
        // $('.up').on('click',function () {
        //     let sprice = danprice * Number(number.html());
        //     stotal.html(sprice);
        // })

        // //减
        // $('.down').on('click',function () {
        //     let sprice = danprice * Number(number.html());
        //     stotal.html(sprice);
        // })


        $.each(stotal, function (i, val) { 
             sum += Number(val.innerText);
        });
        $('.tprice').html(sum);
        
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