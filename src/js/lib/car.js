let baseUrl = "http://localhost/h5-203/myproject/smartisan.com";
define(['jquery','cookie'],function ($,cookie) {
    return{
        render:function (callback) {
            let shop = cookie.get('shop');//获取cookie数据
            console.log(shop);
            if(shop){
                shop = JSON.parse(shop);
                let idlist = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/shop.php`,
                    data: {
                        idlist:idlist
                    },
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);
                        let tempstr = '';
                        let tempstr1 = '';
                        res.forEach(element => {
                            console.log(element);
                            let pic = JSON.parse(element.pro_pic);
                            let arr = shop.filter(val => val.id == element.pro_id);
                            console.log(arr);
                            tempstr += `
                            <div class="cart-table" data-index="${element.pro_id}">
                                <div class="item-list">
                                    <div class="cart-group">
                                        <div class="cart-items">
                                            <div class="cart-item">
                                                <div class="checkbox">
                                                    <span class="blue-check"></span>
                                                </div>
                                                <div class="item-wrapper">
                                                    <div class="item-thumb">
                                                        <img src="${baseUrl}/src/${pic[0].src}" alt="">
                                                        <a></a>
                                                    </div>
                                                    <div class="name hide-row">
                                                        <div class="name-table">
                                                            <a>${element.pro_title}</a>
                                                            <ul class="attr clearfix">
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="operation">
                                                        <a class="item-delete"></a>
                                                    </div>
                                                    <div class="sub-price">
                                                        <div class="discount">
                                                            <i>￥</i>
                                                            <span class ="stotal">${element.pro_price * arr[0].num}</span>
                                                        </div>
                                                    </div>
                                                    <div class="item-cols-num">
                                                        <div class="quantity">
                                                            <span class="button down" disabled></span>
                                                            <span class="number">
                                                                ${arr[0].num}
                                                            </span>
                                                            <span class="button up"></span>
                                                        </div>
                                                    </div>
                                                    <div class="price">
                                                        <i>￥</i>
                                                        <span class="dan-price">${element.pro_price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

                            
                            
                            tempstr1 += `
                            <div class="cart-bottom fix-bottom">
                                <div class="cart-bar-operation">
                                    <div class="choose-all">
                                        <span class="m-blue"></span>
                                        <span class="text-choose-all">全选</span>
                                    </div>
                                    <div class="del-goods">
                                        删除选中的商品
                                    </div>
                                </div>
                                <div class="shipping">
                                    <div class="shipping-box">
                                        <div class="shipping-total">
                                            <h4>
                                                已选择
                                                <i>${arr[0].num}</i>件商品
                                            </h4>
                                            <h5>
                                                共计
                                                <i>${arr[0].num}</i>件商品
                                            </h5>
                                        </div>
                                        <div class="shipping-price">
                                            <h4>
                                                应付总额
                                                <span>￥</span>
                                                <i>
                                                    <span class ="tprice"></span>
                                                </i>
                                                <!-- <em class="smartisan-icon">
                                                    L
                                                </em> -->
                                            </h4>
                                            <h5>
                                                活动优惠
                                                <span></span>
                                                <i>
                                                    <span></span>
                                                </i>
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="jiesuan">
                                        <a>现在结算</a>
                                    </div>
                                </div>
                            </div>`;
                        });
                        
                        $('.gray-box').append(tempstr1);
                        $('.box-inner-in').append(tempstr);

                        callback&&callback();
                    }
                });
            }
        },
        count:function(){
            $('.box-inner-in').on('click','.up',function () {
                let num = $('.number').html();
                num = Number(num);
                num++;
                if(num > 1 && num < 10){
                    $('.down').css('cursor','pointer');
                    $('up').css('cuesor','pointer');
                }
                $('.number').html(num);
            });
            $('.box-inner-in').on('click','.down',function () {
                let num = $('.number').html();
                num = Number(num);
                num--;
                if(num < 1){
                    $('.down').css('cursor','not-allowed');
                    num = 1;
                }
                $('.number').html(num);
            });
        },
        delete:function () {
            $('.box-inner-in').on('click','.item-delete',function () {
                let shop = JSON.parse(cookie.get('shop'));
                let temp = {};
                shop.forEach((elm, index) => {
                    if (elm.id == $(this).parents().filter('.cart-table').attr('data-index')) {
                      temp.i = index;
                    }
                  })
                  shop.splice(temp.i, 1);
                  cookie.set('shop', JSON.stringify(shop), 1);
                  location.reload();
            })
        }
    }
})