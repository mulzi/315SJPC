
function imgpro() {
    
    (function () {
        var ulList = $('#pro_img_l');
        var ulli = document.querySelectorAll("#pro_img_l>li");
        var liW = $('#pro_img_l>li').width() + 10; //宽度等于li的宽度加上margin的宽度
        var prece = document.getElementById('prec');
        var nextce = document.getElementsByClassName('next_c')[0];
        var sort = [];
        var settime = null;
        var flag = true;
        
        sort = Array.prototype.slice.call(ulli);
        
        function setUp(arr) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                arr[i].style.left = + liW * i + 'px';
                arr[0].classList.add('active');
                var srco = arr[0].children[0].getAttribute('src');
                $("#_src").attr("src", srco);
                    if (i>0){
                        arr[i].classList.remove('active')
                    }
                
                flag = true;
                
            }
            
            
            
        }
        
        function init() {
           
            bindEvent();
            setUp(sort);
            move();
        }
        
        init();
        
        function bindEvent() {
            if (flag) {
                prece.addEventListener("click", function () {
                    flag = false;
                    sort.unshift(sort.pop());
                    setUp(sort)
                }, false);
                
                nextce.addEventListener('click',
                    function () {
                        flag = false;
                        sort.push(sort.shift());
                        setUp(sort)
                    })
                
            }
           ulList.mouseenter(function () {
                clearInterval(settime);
                console.log(111)
            });
            ulList.mouseout(function () {
                move();
            })
            
        }
        function move() {
            clearInterval(settime);
             settime = setInterval(function (){
                sort.push(sort.shift());
                setUp(sort)
            },2000);
        }
    
        $(function() {
            $(".list_box_w ul li").click(function() {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                var srcr = $(this).children().attr("src");
                $("#_src").attr("src", srcr);
            });
          
        })

/// 项目详情页 项目图片切换
        
        
        
    })()
}

    imgpro();



   


 
   