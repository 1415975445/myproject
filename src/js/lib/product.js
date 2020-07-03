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
                            <div class="product-memory clearfix">
                                <span class="spec-name1">容量选择</span>
                                <ul class="spec-info">
                                    <li><div class="spec-item"><h1> 8G + 128GB </h1></div></li>
                                    <li><div class="spec-item active"><h1> 8G + 256GB </h1></div></li>
                                    <li><div class="spec-item"><h1> 12G + 256GB </h1></div></li>
                                </ul>
                            </div>
                            <div class="server">
                                <div class="title">服务说明</div>
                                <p>满 99 元包邮</p>
                            </div>
                            <section class="insurance">
                                <span class="insurance-title">保险服务</span>
                                <ul class="insurance-info">
                                    <li>
                                        <div class="insurance-item">
                                            <div class="insurance-item-left">
                                                <h1>坚果 Pro 3 意外碎屏保修服务</h1>
                                                <p>“屏幕意外摔碎，可以免费更换 ？”</p>
                                            </div>
                                            <div class="insurance-item-right">
                                                <h2>
                                                    <span>149</span>
                                                    元/年
                                                </h2>
                                                <p>
                                                    折算后仅需
                                                    <span>0.41</span>
                                                    元/天
                                                </p>
                                                <div class="icon"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="insurance-item">
                                            <div class="insurance-item-left">
                                                <h1>坚果 Pro 3 延长保修服务</h1>
                                                <p>将额外多获得1年保修服务</p>
                                            </div>
                                            <div class="insurance-item-right">
                                                <h2>
                                                    <span>149</span>
                                                    元/年
                                                </h2>
                                                <p>
                                                    折算后仅需
                                                    <span>0.41</span>
                                                    元/天
                                                </p>
                                                <div class="icon"></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="insurance-tips">
                                    <div class="name">
                                        <i>* 保修服务</i>
                                    </div>
                                    <div class="info">
                                        <p>在您购买“坚果手机意外碎屏保修服务”后的有效期内，在非蓄意破坏的前提下，由于意外坠落、意外挤压或意外碰撞导致手机屏幕碎裂的，可以免费更换一次原装屏幕组件，您可在手机初次联网激活时或收货起 （以在先时间为准）3 日内访问<a href="javascript:;">bx.smartisan.com</a>网站购买，或在本机 设置 > 关于本机 > 保修服务 中购买服务。意外保修服务具体条款请参阅<a href="javascript:;">《坚果手机意外碎屏保修服务条款》</a></p>
                                        <p>如您购买延长保修服务，在手机正常“三包” 期结束后，将额外获得 1 年保修服务，服务细则参见<a href="javascript:;">《坚果手机延长保修服务条款》</a></p>
                                    </div>
                                </div>
                            </section>
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