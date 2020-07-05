let baseUrl = "http://localhost/h5-203/myproject/smartisan.com";
define(['jquery'], function($) {
    return{
        render:function(){
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
                                    <i>${res.pro_price}</i>
                                </span>
                                <span class="ori-price">
                                原价：
                                    <i>￥</i>
                                    <span>${res.pro_reprice}</span>
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
                                        <span class="price">
                                            <i>￥</i>
                                            <span>${res.pro_price}</span>
                                        </span>
                                        <span class="ori-price">
                                            <i>￥</i>
                                            <span>${res.pro_reprice}</span>
                                        </span>
                                    </h1>

                                </div>
                            </div>
                            <div class="bar-right">
                                <div class="has-discount-price">
                                    <div class="bar-price">
                                        <i>￥</i>
                                        <span>${res.pro_price}</span>
                                    </div>
                                    <div class="bar-ori-price">
                                        <i>￥</i>
                                        <span>${res.pro_reprice}</span>
                                    </div>
                                </div>
                                <div class="bar-btn white-btn">
                                    <a>现在购买</a>
                                </div>
                                <div class="bar-btn">
                                    <a>加入购物车</a>
                                </div>
                            </div>
                        </div>
                    </div>`;

                    $('.product-recommend-wrapper').append(temp1);
                }
            });
        },
        count:function(){
            $('.product-recommend-wrapper').on('click','.up',function () {
                alert(1);
            // let num = $('num').val();
            // num++;
            });
        }
    }
});