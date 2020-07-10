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
                        // console.log(pic);
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
        search:function () {
            $('.search input').on('focus',function () {
                $('.search').remove('.recommends');
            })
            $('.search input').on('blur',function () {
                $('.search').add(document.querySelector('.recommends'));
            })
        }
    }
});