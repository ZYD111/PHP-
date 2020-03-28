
   
    //数据渲染在页面的方法
    function randerD(){
        var dataBody = document.querySelector('.dataBody');
        ajax({
            type:'post',
            url:'http://127.0.0.1/1+x/student/php/randerData.php',
            data:{},
            success : function(d){
                d = JSON.parse(d);
                var str = '';
                var count = 0
                //d为数据对象，把数据渲染在页面。
                for(var key in d){
                    count++;
                    str += `
                    <tr data-id='${d[key]['id']}'>
                        <td>${zero(count)}</td>
                        <td>${d[key]['stuid']}</td>
                        <td>${d[key]['stuname']}</td>
                        <td>${d[key]['stuage']}</td>
                        <td>${d[key]['stusex']}</td>
                        <td>${d[key]['stumagor']}</td>
                        <td>
                            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal1">修改</button>
                            <button type="button" class="btn btn-danger">删除</button>
                        </td>
                    </tr>
                    `
                }
                dataBody.innerHTML = str;
            }
        })
        
    }

    function zero(num){
        return num < 10 ? "0" + num : num;
    }