<?php
    header('content-type:text/html;charset=utf-8');
    $server = '127.0.0.1';
    $db_userN = 'root';
    $db_userP = 'root';
    $db_name = 'test1x';

    $connect = new mysqli($server,$db_userN,$db_userP,$db_name);

    if($connect -> connect_error){
        die('连接失败'.$connect -> connect_error);
    }
    $connect -> query('set names utf-8');
?>