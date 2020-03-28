window.onload = function(){

    //获取节点
    var 
        oRegisterN = document.querySelector('.registerN'),
        oRegisterP = document.querySelector('.registerP'),
        oIsPwd = document.querySelector('.isPwd'),
        oBtn = document.querySelector('.btn');
    oBtn.onclick = function(){
        //判断密码输入是否一致
        if(oRegisterP.value == oIsPwd.value && oRegisterN.value.indexOf(' ') == -1 && oRegisterP.value.indexOf(' ') == -1){
            ajax({
                type : 'post',
                url : 'http://127.0.0.1/1+x/student/php/register.php',
                data : {
                    uName : oRegisterN.value,
                    uPwd : oRegisterP.value
                },
                success : function(d){
                    d = JSON.parse(d);
                    /*
                        注册成功：{state:1，info:'注册成功'}
                        用户名已存在：{state:0，info:'用户名已存在：'}
                        注册失败：{state:2，info:'注册失败'}
                    */
                    switch(d.state){
                        case 0 : 
                            alert('用户名存在，请重新注册');
                            break;
                        case 1 : 
                            alert('注册成功，请登陆');
                            location.href = './login.html'
                            break;
                        case 2 : 
                            alert('注册失败,请重新注册')
                    }
                }
            })
        }else{
            alert('输入有误,请重新输入');
        }
    }

    //输入不一致的时候，高亮显示input框
    oIsPwd.oninput = function(){
        if(this.value != oRegisterP.value){
            this.style.boxShadow = '0 0 0 .2rem rgba(220, 53, 69, 0.45)';
            this.style.borderColor = '#dc3545';
        }else{
            this.style.boxShadow = 'rgba(40, 167, 69, 0.42) 0px 0px 0px 0.2rem';
            this.style.borderColor = '#28a745';
        }
    }





}