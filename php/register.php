<?php
    header('content-type:text/html;charset=utf-8');
    include './public.php';
    //接受前端的用户名和密码
    $u_name = $_POST['uName'];
    $u_pwd = $_POST['uPwd'];

    //查库
    $sql = "select * from user where uname='$u_name'";

    //执行
    $res = mysqli_query($connect,$sql);
    //获取
    $arr = mysqli_fetch_assoc($res);

    //比对
    if($arr){
        //存在
        $a = array(
            'state' => 0,
            'info' => '用户名存在'
        );
        echo json_encode($a);
    }else{
        $sql1 = "insert into user (uname,upwd) values('$u_name','$u_pwd')";
        $res1 = mysqli_query($connect,$sql1);
        if($res1){
            $a = array(
                'state' => 1,
                'info' => '注册成功'
            );
            echo json_encode($a);
        }else{
            $a = array(
                'state' => 2,
                'info' => '注册失败'
            );
            echo json_encode($a);
        }
    }
?>