<?php
    header('content-type:text/html;charset=utf-8');
    include './public.php';
    //接受数据
    $u_name = $_POST['uName'];
    $u_pwd = $_POST['uPwd'];

    //查库
    $sql = "select * from user where uname='$u_name'";

    //执行sql
    $res = mysqli_query($connect,$sql);

    $arr = mysqli_fetch_assoc($res);

    //比对
    if(!$arr){
        //用户名不存在
        $a = array(
            'state' => 2,
            'info' => '用户名不存在'
        );
        //echo
        echo json_encode($a);
    }else{
        //用户名存在。判断密码
        if($arr['upwd'] == $u_pwd){
            $a = array(
                'state' => 1,
                'info' => '登陆成功'
            );
            //echo
            echo json_encode($a);
        }else{
            $a = array(
                'state' => 0,
                'info' => '密码错误'
            );
            //echo
            echo json_encode($a);
        }
    }
?>