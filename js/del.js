//利用时间代理给删除绑定事件
var dataBody = document.querySelector('.dataBody');
dataBody.onclick = function(e){
    //事件对象
    e = e || window.event;
    var target = e.target || e.srcElement;
    //事件源 == 删除按钮
    if(target.tagName == 'BUTTON' && target.className == 'btn btn-danger'){
        //当前学员在表的id   
        var id = target.parentNode.parentNode.getAttribute('data-id');
        //ajax
        ajax({
            type : 'post',
            url : 'http://127.0.0.1/1+x/student/php/del.php',
            data : {
                id : id
            },
            success : function(d){
                d = JSON.parse(d);
                /*
                    {state:1,info:'删除成功'}
                    {state:0,info:'删除失败'}
                */
                switch(d.state){
                    case 0 : 
                        alert('删除失败')
                        break;
                    case 1 : 
                        alert('删除成功');
                        //移除tr
                        target.parentNode.parentNode.remove();
                }
            }
        })
    }
}