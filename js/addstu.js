function addStu(){
var
    addId = document.querySelector('.addid'),
    addName = document.querySelector('.addname'),
    addAge = document.querySelector('.addage'),
    addSex = document.querySelector('.addsex'),
    addMajor = document.querySelector('.addmajor'),
    addStuBtn = document.querySelector('.addStuBtn');

addStuBtn.onclick = function(){
    //判断不能为空
    var
        addIdVal = addId.value,
        addNameVal = addName.value,
        addAgeVal = addAge.value,
        addSexVal = addSex.value,
        addMajorVal = addMajor.value;
    if(addIdVal && addNameVal && addAgeVal && addSexVal && addMajorVal){
        ajax({
            type : 'post',
            url : "http://127.0.0.1/1+x/student/php/addstu.php",
            data : {
                stuid:addIdVal,
                stuname:addNameVal,
                stuage:addAgeVal,
                stusex:addSexVal,
                stumagor:addMajorVal
            },
            success : function(d){
                d = JSON.parse(d);
                /*
                    {state : 0,info :'添加失败'}
                    {state : 1,info :'添加成功'}
                    {state : 2,info :'添加失败，学号重复'}
                */
                switch(d.state){
                    case 0 : 
                        alert('添加失败');
                        break;
                    case 1 :
                        alert("添加成功");
                        //刷新页面
                        // location.reload(true);
                        randerD();
                        break;
                    case 2 :
                        alert("学号重复"); 
                }

            }
        })
    }
}
    
}