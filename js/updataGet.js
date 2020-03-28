var 
    oDataBody = document.querySelector('.dataBody'),
    upId = document.querySelector('.upid'),
    upName = document.querySelector('.upname'),
    upAge = document.querySelector('.upage'),
    upSex = document.querySelector('.upsex'),
    upMajor = document.querySelector('.upmajor'),
    getId = document.querySelector('.getId');

oDataBody.onclick = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.tagName == 'BUTTON' && target.className == 'btn btn-warning'){
        var aTd = target.parentNode.parentNode.children;//td的集合
        upId.value = aTd[1].innerHTML;
        upName.value = aTd[2].innerHTML;
        upAge.value = aTd[3].innerHTML;
        upSex.value = aTd[4].innerHTML;
        upMajor.value = aTd[5].innerHTML;
        getId.value = aTd[1].parentNode.getAttribute('data-id');
    }
}