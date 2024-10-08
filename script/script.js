$(function () {
    //메뉴
    $('.nav > ul > li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(200);
    });
    $('.nav > ul > li').mouseout(function() {
        $(this).find('.submenu').stop().slideUp(200);
    });



    //슬라이드
    let currentIndex = 0;//현재이미지 설정
    $(".slider").hide().first().show();//모든 이미지 숨기고 첫번째 이미지 보임
    setInterval(function() {
        let nextIndex = (currentIndex + 1) % 3;//다음이미지 설정
        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);
    },3000);//셋인터벌
    
    //탭메뉴 
    const tabBtn = $(".info-menu > a"); //탭 버튼 설정 
    const tabCon = $(".info-cont > div"); //탭 콘텐츠 설정

    tabCon.hide().eq(0).show();

    tabBtn.on("click", function() {
        const tabInex = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCon.eq(tabInex).show().siblings().hide();
    });

    //팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
    
});