<?php
    header("content-type:text/html;charset=utf-8");
    include './public.php';

    //获取数据
    $keyWord = $_POST['keyword'];
    $where = $_POST['where'];

    //查库
    $sql = "select * from stuinfo where $keyWord like '%$where%'";
    //执行
    $res = mysqli_query($connect,$sql);

    $tempArr = array();
    while ($arr = mysqli_fetch_assoc($res)) {
        array_push($tempArr,$arr);
    }
    if(!$tempArr){
        $a = array(
            "state" => '0',
            "info" => '未查询到数据'
        );
        echo json_encode($a);
    }else{
        echo json_encode($tempArr);
    }
    
?>