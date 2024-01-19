var items = document.getElementsByClassName('item_carga');
var list_carga = document.getElementById("list_carga")
var ban = document.getElementById('ban_desc_item');
var btn = document.getElementById('btn_close_desc_item');

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        // Posiciona o ban_desc_item abaixo do item_carga clicado
        var itemRect = this.getBoundingClientRect();
        ban.style.top =  window.innerHeight/2 - 100 +  "px";
        ban.style.display = "block";
        list_carga.style.filter = "blur(5px)";
    };
}

btn.onclick = function () {
    ban.style.display = "none";
    list_carga.style.filter = "blur(0px)";
};
