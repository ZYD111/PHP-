<?php
    /*
        添加学员信息：
            当学号相同的时候。禁止添加学员信息
    */
    header('content-type:text/html;charset=utf-8');
    include './public.php';
    //接收前端数据
    $stu_id = $_POST['stuid'];
    $stu_name = $_POST['stuname'];
    $stu_age = $_POST['stuage'];
    $stu_sex = $_POST['stusex'];
    $stu_major = $_POST['stumagor'];

    //查库（查询学号，当学号不存在的时候，才能添加）
    $sql = "select * from stuinfo where stuid=$stu_id";

    //执行
    $res = mysqli_query($connect,$sql);
    //获取查询的结果
    $arr = mysqli_fetch_assoc($res);
    if($arr){
        //学员学号存在
        $a = array(
            "state" => 2,
            "info" => "学号重复"
        );
        echo json_encode($a);
    }else{
        //可以添加
        $sql1 = "insert into stuinfo (stuid,stuname,stuage,stusex,stumagor) values ($stu_id,'$stu_name','$stu_age','$stu_sex','$stu_major')";

        //执行
        $res1 = mysqli_query($connect,$sql1);
        if($res1){
            //学员学号存在
            $a = array(
                "state" => 1,
                "info" => "添加成功"
            );
            echo json_encode($a);
        }else{
            //学员学号存在
            $a = array(
                "state" => 0,
                "info" => "添加失败"
            );
            echo json_encode($a);
        }
    }

?>