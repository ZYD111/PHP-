// 登陆前端逻辑
window.onload = function () {

    //获取页面节点
    var
        oBtn = document.querySelector('.btn'),
        oLoginName = document.querySelector('.loginName'),
        oLoginPwd = document.querySelector('.loginPwd');
    oBtn.onclick = function () {
        var
            dName = oLoginName.value,
            dPwd = oLoginPwd.value;
        //ajax  数据传输
        ajax({
            type : 'post',
            url : 'http://127.0.0.1/1+x/student/php/login.php',
            data : {
                uName : dName,
                uPwd : dPwd
            },
            success : function(d){
                //转成json对象
                d = JSON.parse(d);
                console.log(d);
                //对接口返回的数据做比对
                /*
                    登陆成功：{state:1,info:'成功'}
                    密码错误：{state:0,info:'密码错误'}
                    用户名错误：{state:2,info:'用户名不存在'}
                */
               //做信息比对
               switch(d.state){
                    case 0 : 
                        alert('密码错误,请重新输入');
                        break;
                    case 1 : 
                        alert('登陆成功');
                        location.href = './index.html';
                        break;
                    case 2:
                        alert('用户名不存在');
               }
            }
        })
    }


    /*
        业务逻辑
            1：输入框的value
            2:ajax 传递数据
            3：根据返回的数据做判断
            4：如果成功：跳转首页
                如果失败：用户名不存在，密码错误
    */






















}