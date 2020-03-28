var 
    searchBtn = document.querySelector('.boxRight .btn'),
    searchInput = document.querySelector('.boxRight .search'),
    searchSelect = document.querySelector('.boxRight select'),
    dataBody = document.querySelector('.dataBody');

searchBtn.onclick = function(){
    var
        inputVal = searchInput.value,
        selectVal = searchSelect.value;
    //ajax请求数据
    ajax({
        type : 'post',
        url : "http://127.0.0.1/1+x/student/php/likeSearch.php",
        data : {
            keyword : selectVal,
            where : inputVal
        },
        success : function(d){
            var count = 0;
            d = JSON.parse(d);
            if(d.state == 0){
                alert('未查询到数据');
            }else{
                //渲染数据
                var str = "";
                for(var i = 0 ; i < d.length ; i++){
                    count++
                    str +=  `
                    <tr data-id='${d[i]['id']}'>
                        <td>${zero(count)}</td>
                        <td>${d[i]['stuid']}</td>
                        <td>${d[i]['stuname']}</td>
                        <td>${d[i]['stuage']}</td>
                        <td>${d[i]['stusex']}</td>
                        <td>${d[i]['stumagor']}</td>
                        <td>
                        <button type="button" class="btn btn-warning " data-toggle="modal" data-target="#exampleModal1">修改</button>
                        <button type="button" class="btn btn-danger">删除</button>
                    </td>
                </tr>
                `
                }
                dataBody.innerHTML = str;

            }
        }
    })
}
function zero(num){
    return num < 10 ? "0" + num : num;
}