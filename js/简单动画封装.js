function animation(obj, juli, callback) { //对象，距离，速度
    //防止点击几次越来越快的情况，在下一次开启之前，清除；(obj.timer,指定清除对象)
    clearInterval(obj.timer);

    obj.timer = setInterval(demo, 20); //添加定时器
    function demo() {
        // 公式：（目标值-当前位置）/10---缓动动画-慢慢变慢
        var step = (juli - obj.offsetLeft) / 10;
        //正值，向上取整，赋值向下；除以后基本都是小数点
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == juli) { //如果超过一定距离的像素，停止
            clearInterval(obj.timer); //obj.timer会节省空间，不用每次都var开辟空间
            //回调函数放在定时器结束位置
            if (callback) {
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + "px";
        }
    }
}