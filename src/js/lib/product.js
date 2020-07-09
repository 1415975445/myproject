let baseUrl = "http://localhost/h5-203/myproject/smartisan.com";
define(['jquery','cookie'], function($,cookie) {
    return{
        render:function(callback){
            let id = location.search.split("=")[1];
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getitem.php`,
                data: {
                    id:id
                },
                dataType: "json",
                success: function (res) {
                    let act = JSON.parse(res.pro_ac);
                    console.log(res);
                    let pic = JSON.parse(res.pro_pic);
                    let temp = `
                    <div class="product-info">
                        <div class="product-title">
                            <h1>${res.pro_title}</h1>
                            <h2>${res.pro_des}</h2>
                            <div class="item-price">
                                <span class="now-price">
                                    <em>￥</em>
                                    <i class="n-price">${res.pro_price}</i>
                                </span>
                                <span class="ori-price">
                                原价：
                                    <i>￥</i>
                                    <span class="o-price">${res.pro_reprice}</span>
                                </span>
                            </div>
                        </div>
                        <div class="activity">
                            <div class="activities">
                                <span class="cuxiao">促销活动</span>
                                <div class="activities-list">
                                    <article>
                                        <figure>
                                            <div class="tag tag-yellow">活动</div>
                                        </figure>
                                        <label>${act[0].title}</label>
                                    </article>
                                    <article>
                                        <figure>
                                            <div class="tag tag-red">优惠</div>
                                        </figure>
                                        <label>${act[1].title}.<span class="blank"><strong>现在领取</strong></span></label>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div class="product-sel">
                            <div class="product-sel-main">
                                <span class="spec-name">颜色选择</span>
                                <ul>
                                    <li>
                                        <div class="color">
                                            <span class="color-box">
                                                <i class="color-item active"><img src="../img/Pro 3_1.png" alt=""></i>
                                            </span>
                                            <label>黑色</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="color">
                                            <span class="color-box">
                                                <i class="color-item"><img src="../img/Pro 3_2.png" alt=""></i>
                                            </span>
                                            <label>白色</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="color">
                                            <span class="color-box">
                                                <i class="color-item"><img src="../img/Pro 3_3.png" alt=""></i>
                                            </span>
                                            <label>松绿色</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-memory-sel">
                            <div class="count-wrapper clearfix">
                                <div class="item-do-count">
                                    <span class="do-count-title">数量选择</span>
                                    <aside class="do-count">
                                        <div class="select">
                                            <span class="down">-</span>
                                            <span class="num">1</span>
                                            <span class="up">+</span>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div class="server">
                                <div class="title">服务说明</div>
                                <p>满 99 元包邮</p>
                            </div>
                        </div>
                    </div>
                    <div class="product-view">
                        <img src="${baseUrl}/src/${pic[1].src}" alt="">
                    </div> `;

                    $('.product-main').append(temp);

                    let temp1 = `
                    <div class="fix-bar">
                        <div class="fix-bar-wrapper">
                            <div class="bar-left">
                                <h1 class="bar-text">您已选择了</h1>
                                <div class="bar-device-info">
                                    <h1 class="clearfix">
                                        <span class="title">坚果 Pro 3</span>
                                    </h1>
                                    <h2>
                                        <span class>
                                            <span>X</span>
                                            <span class="number">1</span>
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div class="bar-right">
                                <div class="has-discount-price">
                                    <div class="bar-price">
                                        <i>￥</i>
                                        <span class="t-price">${res.pro_price}</span>
                                    </div>
                                    <div class="bar-ori-price">
                                        <i>￥</i>
                                        <span class="ot-price">${res.pro_reprice}</span>
                                    </div>
                                </div>
                                <div class="bar-btn white-btn">
                                    <a>现在购买</a>
                                </div>
                                <div class="bar-btn">
                                    <a href = "./car.html">加入购物车</a>
                                </div>
                            </div>
                        </div>
                    </div>`;

                    $('.product-recommend-wrapper').append(temp1);

                    callback && callback(res.pro_id,res.pro_price);
                }
            });
        },
        count:function(){
            $('.product-main').on('click','.up',function () {
                let num = $('.num').text();
                num = Number(num);
                num++;
                if(num > 1 && num < 10){
                    $('.down').css('cursor','pointer');
                    $('up').css('cuesor','pointer');
                }
                $('.num').html(num);
            });
            $('.product-main').on('click','.down',function () {
                let num = $('.num').text();
                num = Number(num);
                num--;
                if(num < 1){
                    $('.down').css('cursor','not-allowed');
                    num = 1;
                }
                $('.num').html(num);
            });
        },
        addItem:function (id,price,num) {
            //shop
            let shop = cookie.get('shop');//获取cookie中的购物车
            //获取是为了判断它是否存在
            //不存在就创建
            //存在就修改
            let product = {
                id:id,
                price:price,
                num:num
            }

            if(shop){//存在
                shop = JSON.parse(shop);//将字符串转成数组
                //判断数组中已经存在了商品的id
                //只修改num值 而不是将商品放入数组
                if(shop.some(ele=>ele.id == id)){
                    shop.forEach(element => {
                        element.id == id ? element.num = num : null;
                    });
                }else{
                    shop.push(product);
                }
            }else{
                shop = [];//不存在就新建数组
                shop.push(product);//放入商品
            }

            cookie.set('shop',JSON.stringify(shop),1);
        }
    }
});