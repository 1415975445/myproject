<?php
 include('./conn.php');


 $password = $_REQUEST['password'];
 $userphone = $_REQUEST['userphone'];

 $sql = "select * from user where user_phone = '$userphone'";

 $result = $mysqli->query($sql);

 if($result->num_rows>0){ //判断当前用户名是否已经被注册
  echo "用户名重复，请重新注册";
  $mysqli->close();
  die;
 }
 $insertInfo = "insert into user(user_password,user_phone)values('$password','$userphone')";

 $insertR = $mysqli->query($insertInfo);

 if($insertR){
   echo "注册成功";
 }

 $mysqli->close();

?>