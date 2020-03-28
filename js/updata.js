function updata(){
var 
    upId = document.querySelector('.upid'),
    upName = document.querySelector('.upname'),
    upAge = document.querySelector('.upage'),
    upSex = document.querySelector('.upsex'),
    upMajor = document.querySelector('.upmajor'),
    getId = document.querySelector('.getId');
    var upBtn = document.querySelector('.upBtn');
    upBtn.onclick = function(){
        ajax({
            type:"post",
            url : 'http://127.0.0.1/1+x/student/php/update.php',
            data : {
                id:getId.value,
                stuid:upId.value,
                stuname:upName.value,
                stuage:upAge.value,
                stusex:upSex.value,
                stumagor:upMajor.value
            },
            success : function(d){
                d = JSON.parse(d);
                /*
                    {state:0,修改失败}
                    {state:1,修改成功}
                */

                switch(d.state){
                    case 0 :
                        alert('修改失败');
                        break;
                    case 1 : 
                        alert('修改成功');
                        randerD();
                }
            }
        })
    }
}