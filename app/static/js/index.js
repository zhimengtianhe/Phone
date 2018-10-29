;(function($,jq){
	 var mySwiper = new Swiper('.swiper-container',{
		loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction : false
	});
	function boxmove(){
		var box  = jq('.announcement-slideup'),
		item = jq('.announcement-slideup a');
		jq(item).first().slideUp(1000,function(){
		 	jq(box).append(jq(item).first());	
		 	jq(item).first().show();
		});
	}
	console.log(jq('.announcement-slideup a').length);
	jq('.announcement-slideup a').length <= 4 ? '' : timer = setInterval(boxmove,3000);
	
})(Zepto,jQuery);