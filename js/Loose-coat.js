var ul = document.querySelector("#Content-two-top-right-ul");
var div = document.querySelector(".Content-two-top-right");
var diva = document.querySelector(".Content-two-top-right").querySelector("a");
//点击选项卡框
for (var i = 0; i < ul.children.length; i++) {
    ul.children[i].addEventListener("mouseenter", function() {
        for (var i = 0; i < ul.children.length; i++) {
            ul.children[i].style.backgroundColor = "#ffffff";
        }
        this.style.backgroundColor = "rgb(245, 245, 245)";
    });
    ul.children[i].addEventListener("mouseleave", function() {
        for (var i = 0; i < ul.children.length; i++) {
            if (ul.children[i].className != 'select') {
                ul.children[i].style.backgroundColor = "#ffffff";
            }
        }
    });
    ul.children[i].addEventListener("click", function() {
        diva.innerHTML = this.innerHTML
        for (var i = 0; i < ul.children.length; i++) {
            ul.children[i].className = "";
        }
        this.className = "select";
    });
}
div.addEventListener("mouseenter", function() {
    ul.style.display = "block";
});
div.addEventListener("mouseleave", function() {
    ul.style.display = "none";
});

// 展示区域的里点击事件
var showuls = document.querySelectorAll(".Content-two-table-ul");

for (var i = 0; i < showuls.length; i++) {
    //让每一个的第一个li添加默认边框
    showuls[i].children[0].style.border = "1px solid red";
    //划入每个大的li类激发
    showuls[i].addEventListener("mouseenter", function() {
        var showul = this;
        //点击每个大的li里的小li,是交换边框
        for (var i = 0; i < showul.children.length; i++) {
            showul.children[i].addEventListener("click", function() {
                for (var i = 0; i < showul.children.length; i++) {
                    showul.children[i].style.border = "";
                }
                this.style.border = "1px solid red";
            });
        }
    });
}