<?php
    header('content-type:text/html;charset=utf-8');
    include './public.php';

    //查库
    $sql = "select * from stuinfo";
    //执行sql语句
    $res = mysqli_query($connect,$sql);

    //声明一个空数组(放置查找出来的数据)
    $d = array();
    while ($arr = mysqli_fetch_assoc($res)) {
        //每次把取出的结果$arr  放在$d;
        array_push($d,$arr);
    }

    echo json_encode($d);
?>