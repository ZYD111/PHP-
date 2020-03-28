<?php
    header('content-type:text/html;charset=utf-8');
    include './public.php';

    $s_id = $_POST['id'];

    //sql语句
    $sql = "delete from stuinfo where id=$s_id";

    //执行
    $res = mysqli_query($connect,$sql);

    if($res){
        $a = array(
            'state' => 1,
            'info' => '删除成功'
        );
        echo json_encode($a);
    }else{
        $a = array(
            'state' => 0,
            'info' => '删除失败'
        );
        echo json_encode($a);
    }
?>