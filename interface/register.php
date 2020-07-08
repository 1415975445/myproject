<?php
 include('./conn.php');

 $userphone = $_REQUEST['userphone'];
 $password = $_REQUEST['password'];
 

 $sql = "select * from user where user_phone = '$userphone'";

 $result = $mysqli->query($sql);

 if($result->num_rows>0){ //判断当前用户名是否已经被注册
  echo "手机号重复，请重新注册";
  $mysqli->close();
  die;
 }

 $insertInfo = "INSERT INTO `user` (`user_id`, `user_name`, `user_password`, `user_address`, `user_phone`, `user_email`) VALUES (NULL, '', '$password', '', '$userphone', '');";
 
 $insertR = $mysqli->query($insertInfo);

 if($insertR){
   echo "注册成功";
   
 }

 $mysqli->close();

?>