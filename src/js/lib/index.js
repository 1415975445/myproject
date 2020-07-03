let baseUrl = "http://localhost/h5-203/myproject/smartisan.com";
define(['jquery'], function($) {
    return{
        render:function(){
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function (res) {
                    console.log(res);
                    let temp = '';
                    res.forEach(element => {
                        let pic = JSON.parse(element.pro_pic);
                        console.log(pic);
                        temp += `<section>
                        <a href="${baseUrl}/src/html/product.html?id=${element.pro_id}">
                            <figure>
                                <img src="${baseUrl}/src${pic[0].src}" alt="">
                                <article>
                                    <h3>${element.pro_title}</h3>
                                    <h5>${element.pro_des}</h5>
                                </article>
                                <aside>
                                </aside>
                                <article class="item-price">
                                    <span>￥${element.pro_price}</span>
                                    <span class="origin-price">￥${element.pro_reprice}</span>
                                </article>
                                <div class="activity-tag">
                                    <span class="yellow">￥${element.pro_act}</span>
                                </div>
                            </figure>
                        </a>
                    </section>` ;
                    });
                    $('.shop:first .remen').append(temp);
                }
            });
        },
        slider:function(){
            var options = {
                width: 1218, // 宽度
                height: 497, // 高度
                gridCol: 10, // 网格列数
                gridRow: 5, // 网格行数
                gridVertical: 20, // 栅格列数
                gridHorizontal: 10, // 栅格行数
                autoPlay: true, // 自动播放
                ascending: true, // 图片按照升序播放
                effects: [ // 使用的转场动画效果
                  'fade'
                ],
                ie6Tidy: false, // IE6下精简效果
                random: false, // 随机使用转场动画效果
                duration: 3000, // 图片停留时长（毫秒）
                speed: 900 // 转场效果时长（毫秒）
              };
              /* 创建轮播效果 */
              $('#slider').vmcSlider(options);
        }
    }
});