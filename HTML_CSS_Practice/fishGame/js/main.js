var can1, can2;
var ctx1, ctx2;

//body加载（onload）完后，就把game作为所有js脚本的入口。
document.body.onload = game;

function game(){
    init();
}
function init(){
    can1 = document.getElementById('canvas1');
    ctx = can1.context();
    can2 = document.getElementById('canvas2');
}