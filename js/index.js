
// 新闻热推 切换
(function() {
	newChange();

	function newChange() {
		$('#news-change li').on('click', function() {
			$(this).siblings().removeClass('color-red');
			$(this).addClass('color-red');
			$('#news-list ul').eq($(this).index()).siblings().css('display', 'none');
			$('#news-list ul').eq($(this).index()).css('display', 'block');
		})
	}
})();
// 新闻热推 切换

// 项目投票 滚动信息
function scroll(roll) {
	$(roll).find("ul:first").animate({
		marginTop: "-44px"
	}, 1000, function() {
		var str = $(this).css("marginTop", "0px")
		for(var i = 0; i < 2; i++) {
			/*这里的for循环目的是让ul里的前四个li一起添加到ul的末尾，
					实现多行文字滚动。i可以根据实际需要而定。*/
			str.find("li:first").appendTo(this)
		}
	})
}
$(function() {
	setInterval("scroll('#toprun')", 5000)
});
// 项目投票 滚动信息

//  搜索框 下结果框
(function() {
	$('#search').focus(function() {
		$('#search-box').css('display', 'block');
	});
	$('#search').blur(function(){
		setTimeout(function(){
			$('#search-box').css('display', 'none');
		},600)
		
	})

})();
//  搜索框 下结果框

//会员品牌切换
(function () {

	$('#membersTit li').on('click',function(){
		  $(this).siblings().removeClass('top-line');
		  $(this).addClass('top-line');
		  $('#membersBody ul').eq($(this).index()).siblings().css({'display': 'none'}) ;
		  $('#membersBody ul').eq($(this).index()).css({'display': 'block'}) ;

	} )


  })()

// 会员品牌切换
