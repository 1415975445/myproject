<?php
  include('./conn.php');

  $userphone = $_REQUEST['userphone'];
  $password = $_REQUEST['password'];

  $sql = "select * from user where user_phone = '$userphone' and user_password = '$password'";

  $res = $mysqli->query($sql);

  $info = $res->fetch_assoc();

  if($res->num_rows>0){
    echo json_encode($info);
  }else{
    echo json_encode(' ');
  }

  $mysqli->close();
?>