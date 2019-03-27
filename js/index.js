//// 网站导航切换显示
$(function () {  //// 网站导航切换显示
  $('#show_seitMap').mouseenter(function () {
    $('#seit_map').slideDown(600,'swing');
  });
  $('#seit_map').mouseleave(function () {
    $('#seit_map').slideUp(400,'linear');
  })
});
//// 网站导航切换显示


// 新闻热推 切换
(function() {
  newChange();

  function newChange() {
    $("#news-change li").on("click", function() {
      $(this)
        .siblings()
        .removeClass("color-red");
      $(this).addClass("color-red");
      $("#news-list ul")
        .eq($(this).index())
        .siblings()
        .css("display", "none");
      $("#news-list ul")
        .eq($(this).index())
        .css("display", "block");
    });
  }
})();
// 新闻热推 切换

// 项目投票 滚动信息
function scroll(roll) {
  $(roll)
    .find("ul:first")
    .animate(
      {
        marginTop: "-44px"
      },
      1000,
      function() {
        var str = $(this).css("marginTop", "0px");
        for (var i = 0; i < 2; i++) {
          /*这里的for循环目的是让ul里的前四个li一起添加到ul的末尾，
            		实现多行文字滚动。i可以根据实际需要而定。*/
          str.find("li:first").appendTo(this);
        }
      }
    );
}
$(function() {
  setInterval("scroll('#toprun')", 5000);
});
// 项目投票 滚动信息

//  搜索框 下结果框
(function() {
  $("#search").focus(function() {
    $("#search-box").css("display", "block");
  });
  $("#search").blur(function() {
    setTimeout(function() {
      $("#search-box").css("display", "none");
    }, 200);
  });
})();
//  搜索框 下结果框

//会员品牌切换
(function() {
  $("#membersTit li").on("click", function() {
    $(this)
      .siblings()
      .removeClass("top-line");
    $(this).addClass("top-line");
    $("#membersBody ul")
      .eq($(this).index())
      .siblings()
      .css({ display: "none" });
    $("#membersBody ul")
      .eq($(this).index())
      .css({ display: "block" });
  });
})();

// 会员品牌切换

/// 二级页面 项目 品牌切换
$(function() {
  $(".Br_change_t li").on("click", function() {
    $(this)
      .siblings()
      .removeClass("active");
    $(this).addClass("active");
    $(".Br_bottom_body ul")
      .eq($(this).index())
      .siblings()
      .css({ display: "none" });
    $(".Br_bottom_body ul")
      .eq($(this).index())
      .css({ display: "block" });
  });
});

/// 二级页面  项目 品牌切换

// 二级页面 加盟项目三行列表
(function() {
  $("#hot_pot li").on("click", function() {
    $(this)
      .siblings()
      .removeClass("top-line");
    $(this).addClass("top-line");
    $("#hot_list_two ul")
      .eq($(this).index())
      .siblings()
      .css({ display: "none" });
    $("#hot_list_two ul")
      .eq($(this).index())
      .css({ display: "block" });
  });
})();

//  二级页面  加盟项目三行列表

// 项目详情页锚点 跳转
$(function() {
  //锚点跳转滑动效果
  $("a[href*=#],area[href*=#]").click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var $target = $(this.hash);
      $target =
        ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $("html,body").animate(
          {
            scrollTop: targetOffset - 150
          },
          1000
        );
        return false;
      }
    }
  });
});

// 项目详情页锚点 跳转
/// 项目详情页 项目图片切换




// 项目详情页 最新资讯切换
$(function() {
  $(".top_list_s li").click(function() {
    $(this)
      .siblings()
      .removeClass("action");
    $(this).addClass("action");
    $(".bototm_list_s ul")
      .eq($(this).index())
      .siblings()
      .css({
        display: "none"
      });
    $(".bototm_list_s ul")
      .eq($(this).index())
      .css({ display: "block" });
  });
});

// 项目详情页 最新资讯切换
//  资讯新闻列表页切换
$(function() {
  $("#fa_menu_ul li").click(function() {
    $(this)
      .siblings()
      .removeClass("active");
    $(this).addClass("active");
    $("#zx_news_box .zx_news_list")
      .eq($(this).index())
      .siblings()
      .css({
        display: "none"
      });
    $("#zx_news_box .zx_news_list")
      .eq($(this).index())
      .css({ display: "block" });
  });
});

//  资讯新闻列表页切换

function massage() {
  //项目详情页表单验证函数
  $("#messageConLi").on("click", "li", function() {
    var massagetext = document.getElementById("massagetext");
    var mText = $(this).text();
    massagetext.value.remove;
    massagetext.value = mText;
  });

  (function() {
    $("#messageSub").on("click", function() {
      var phone = $("#massagePhone").val();
      var name = $("#massageName").val();
      if (/^[\u2E80-\u9FFF]+$/.test(name)) {
        if (/^[1][3,4,5,7,8,9][0-9]{9}$/.test(phone)) {
          if (msckeck.checked) {
            // 提交数据函数
            alert("留言已成功，请等待工作人员的回访");
          } else {
            alert("请阅读并勾选服务条款！");
            return false;
          }
        } else {
          console.log(phone);
          alert("你输入的手机号码有误！请重新输入");
          return false;
        }
      } else {
        alert("请输入您的姓名");
        return false;
      }
    });
  })();
}
massage();

$(function() {
  //项目页美食协议显示函数
  $("#agreement").click(function() {
    $(".message_agreement").css({ display: "block" });
  });
  $("#closeAgreement").click(function() {
    $(".message_agreement").css({ display: "none" });
  });
});

//////文章页面  新店播报
$(function() {
  //每隔两秒进行一次滚动
  var timing = setInterval("info()", 2000);

  $("#upul").hover(
    function() {
      clearInterval(timing);
    },
    function() {
      timing = setInterval("info()", 1000);
    }
  );
});
function info() {
  //复制第一个li

  var li = $("#upul>li:eq(0)").clone();

  //使用animate对li的外边距进行调整从而达到向上滚动的效果
  $("#upul>li:eq(0)").animate({ marginTop: "-30px" }, 2000, function() {
    //对已经消失的li进行删除
    $("#upul>li:eq(0)").remove();

    //把复制后的li插入到最后
    $("#upul").append(li);
  });
}
//////文章页面  新店播报

///// 项目总库检索条件

$(function() {
  $(".project_search_box").on("click", ".more_r>span", function() {
    if (
      $(this)
        .parent()
        .siblings(".li_lest")
        .children()
        .hasClass("hide")
    ) {
      $(this).text("更多-");
      $(this)
        .parent()
        .siblings(".li_lest")
        .children()
        .removeClass("hide");
    } else {
      $(this).text("更多+");
      $(this)
        .parent()
        .siblings(".li_lest")
        .children()
        .addClass("hide");
    }
  });
});

///// 项目总库检索条件
/////  二级排行榜 项目详情出现
$(function() {
  $(".mouth_ranking_all .bottom_list .pro_box ul li").last().children().css("height", "160px");
  $(".mouth_ranking_all .bottom_list .pro_box ul li").mouseenter(function() {
    // over
    $(this)
      .siblings()
      .children()
      .css("height", "24px");
    $(this)
      .children()
      .css("height", "160px");
  });
});
/////  二级排行榜 项目详情出现

//// 二级排行榜 大分类排行
$(function() {
  $(".pot_ranking .left_list .bottom_list .bottom_item ul li").last().css("height", "160px")
  $(".pot_ranking .left_list .bottom_list .bottom_item ul li").mouseenter(
    function() {
      $(this)
        .siblings()
        .css("height", "26px");
      $(this).css("height", "160px");
    }
  );
});

//// 二级排行榜 大分类排行

////二级排行榜 最新加盟

$(function() {
  $(".fore_list>ul>li").mouseenter(function() {
    $(this)
      .siblings()
      .children()
      .removeClass("bg_red");
    $(this)
      .children()
      .addClass("bg_red");
    $(".right_f_i>ul>li")
      .eq($(this).index())
      .siblings()
      .css("display", "none");
    $(".right_f_i>ul>li")
      .eq($(this).index())
      .css({ display: "block" });
  });
});

////二级排行榜 最新加盟

///// 总排行榜详情出现
$(function() {
  $(".bottom_list>.list>ul>li").last().css("height", "130px");
  $(".bottom_list>.list>ul>li").mouseenter(function() {
    $(this)
      .siblings()
      .css("height", "20px");
    $(this).css("height", "130px");
  });
 
});

///// 总排行榜详情出现


// 三级排行  加盟费用
$(function() {
  $("#jfest>li").click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $("#jfList>li").remove();
    $("#jfList>div").remove();
    var invest = $(this).text();
    var img_url = $(this).attr("data-img_url");
    ajax_post(this,img_url,invest);
  });
});

function ajax_post(obj,img_url,invest)
{
  $.ajax({
    url:$(obj).attr("data-url"),
    type:"post",
    dataType:"json",
    data:{id:$(obj).attr("data-id")},
    success:function(data){
      if (data.code == 1) {
        for (var i = 0; i < data.data.length; i++) {
          apendJF(img_url+data.data[i].cover,data.data[i].item_name,data.data[i].province_name,invest,data.data[i].click,data.data[i].apply_user_num,data.data[i].id);
        }
      }else{
        $("#jfList").append('<div style="margin: 0 auto;width: 30%;text-align: center;margin-top: 190px;color: red;font-size: 28px;">'+data.message+'</div>');
      }
    }
  });
}
// 三级排行  加盟费用

function apendJF(image, name = "重庆火锅", place, invest, read, apply_user_num, url) {
  let li = `<li>
  <div class="top_name">
    <div class="left_img">
      <img src="${image}" alt="" srcset="" />
    </div>
    <div class="right_name">
      <span>${name}</span> <span></span>
      <span>
        <i><img src="http://rs.315sj.cn/wwwnew/img/map_tw.png?v=1.01" alt=""/></i>
        <em>${place}</em>
      </span>
    </div>
  </div>
  <div class="bottom_money">
    <div class="number">
      <span>￥<em>${invest}</em></span> <span>浏览人数：${read}</span>
      <!-- <span>咨询人数：${apply_user_num}</span> -->
    </div>
    <div class="click_pro"><a href="${url}">查看详情</a></div>
  </div>
</li> `;
  $("#jfList").append(li);
}


//
/// 文章落地页右边留言模块 悬浮
function activeLfixed() {
  (function () {
    var acv = document.getElementById('activeLMessage');
    var act = document.getElementById('activeTopT');
    document.onscroll = function () {
      // console.log(acv.offsetTop);
      // console.log(acv.clientHeight)
      // console.log(acv.scrollTop)
      // console.log(document.body.scrollTop + '------------')
      //
      // console.log(document.documentElement.scrollTop + '------------')
      // console.log(act.offsetTop)
      // console.log(act.clientHeight)
      
      if (  document.body.scrollTop >= 1013 || document.documentElement.scrollTop >= 1013 ){
        acv.classList.add('fixed');
      }else {
        acv.classList.remove('fixed');
      }
     
      
      
    }
  })()
}
if (document.getElementById('activeLMessage') != undefined){
  activeLfixed();
}


/// 文章落地页右边留言模块 悬浮


