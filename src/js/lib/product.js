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
                    let pic = JSON.parse(res.pro_pic);
                    let temp = `
                    <div class="product-info">
                        <div class="product-title">
                            <h1>坚果 Pro 3</h1>
                            <h2>高通骁龙<sup>TM</sup> 855Plus · 4800 万模范四摄 · Smartisan OS 7.0</h2>
                            <div class="item-price">
                                <span class="now-price">
                                    <em>￥</em>
                                    <i>199.00</i>
                                </span>
                                <span class="ori-price">
                                原价：
                                    <i>￥</i>
                                    <span>249.00</span>
                                </span>
                            </div>
                        </div>
                        <div class="activity">
                            <div class="activities">
                                <span class="cuxiao">促销活动</span>
                                <div class="activities-list">
                                    <article>
                                        <figure>
                                            <div class="tag tag-yellow">直降</div>
                                        </figure>
                                        <label>坚果Pro 3 限时直降</label>
                                    </article>
                                    <article>
                                        <figure>
                                            <div class="tag tag-green">免息</div>
                                        </figure>
                                        <label>坚果Pro 3 花呗 12 期免息<span class="free"><strong>每月低至￥216.58元</strong></span></label>
                                    </article>
                                    <article>
                                        <figure>
                                            <div class="tag tag-red">领券</div>
                                        </figure>
                                        <label>100元 坚果Pro 3 优惠券<span class="blank"><strong>现在领取</strong></span></label>
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
                                <div class="item-do-count>
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
                }
            });
        }
    }
});