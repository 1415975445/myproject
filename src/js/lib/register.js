let baseUrl = "http://localhost/h5-203/myproject/smartisan.com";

define(['jquery', 'shake'], function ($, s) {
  return {
    check: function () {
      $('#userphone').on(
        'input',
        s.fn(function () {
          // 用户名验证
          let reg = /^1[3456789]\d{9}$/;
          if (!reg.test($(this).val())) {
            alert('用户名格式不正确');
          } 
        }, 1000)
      )
      $('#password').on(
        'input',
        s.fn(function () {
          // 密码验证
          let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{3,16}$/;
          if (!reg.test($(this).val())) {
            alert('至少3-16个字符，至少1个大写字母，1个小写字母和1个数字');
          }
        }, 1000)
      )
      $('#repassword').on(
        'input',
        s.fn(function () {
          if ($(this).val() != $('#password').val()) {
            alert('两次密码不一致');
          } 
        }, 1000)
      )
    },
    reg_check: function () {
      $('.regis').on('click', function () {
        if ($('#userphone').val() == '') {
          alert('请输入手机号')
        } else if ($('#password').val() == '') {
          alert('请输入密码')
        } else if ($('#repassword').val() == '') {
          alert('请确认密码')
        } else {
          $.ajax({
            type: 'get',
            url: `${baseUrl}/interface/register.php`,
            data: {
              userphone: $('#userphone').val(),
              password: $('#password').val(),
            },
            success: function (res) {
              console.log(res);
              if(res == '手机号重复，请重新注册'){
                alert('用户名已存在');
                location.reload();
              }else{
                alert('注册成功');
                location.href = `./login.html`;
              }
            }
          })
        }

      })
    }
  }
})