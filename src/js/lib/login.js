let baseUrl = "http://localhost/h5-203/myproject/smartisan.com";
define(['jquery', 'cookie'], function ($, cookie) {
    return {
      check: function () {
        $('.login-btn').on('click', function () {
          $.ajax({
            type: "post",
            url: `${baseUrl}/interface/login.php`,
            data: {
              userphone: $('#userphone').val(),
              password: $('#password').val()
            },
            dataType: "json",
            success: function (res) {
              console.log(res);
              if (res.length) {
                alert('用户名或密码错误，请重新输入');
                location.reload();
              } else {
                let loginInfo = {
                  loginStatus: true,
                  userphone: res.user_phone
                }
                cookie.set('loginInfo', JSON.stringify(loginInfo), 1)
                location.href = `./index.html`;
              }
            }
          });
        })
      }
    }
  })