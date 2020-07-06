let baseUrl = "http://localhost/h5-203/myproject/smartisan.com";
define(['jquery','cookie'],function ($,cookie) {
    return{
        render:function () {
            let shop = cookie.get('shop');//获取cookie数据
            console.log(shop)
            if(shop){
                shop = JSON.parse(shop);
                console.log(shop);
            }
        }
    }
})