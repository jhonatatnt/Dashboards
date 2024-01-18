a = 0;
var x = document.getElementById('test');
var y = document.getElementById('ban_desc_item');
if(a == 0){
    x.onclick = function(){
            y.style.height = 0;
            margin = 0 + "px";
            a = 1;
    }
}
if (a == 1){
    x.onclick = function(){
            y.style.height = 150 + "px";
            a = 0;
    }
}