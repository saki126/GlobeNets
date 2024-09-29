$(function(){
    if($(window).width() < 462){
        $(".recommendSec .contents ul").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            dots: true,
            arrows: false,
        });
        
        $(".reviewsSec .reviews .contents .item_li ul").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            dots: true,
            arrows: false,
        });

        $(".head_top button").click(function(){
            $(".gnav").toggleClass('menu--isOpen');
            $('.gnav ul').toggleClass('is-active');
        });

        $('.search .contents .item[id !="tab1"]').hide();
        $(".search .tab li a").click(function(){
            $(".search .contents .item").hide();
            $($(this).attr("href")).show();
            
            $(".search .tab .current").removeClass("current");
            $(this).addClass("current");
    
            return false;
        });
    }; 
});

$(function(){
    $('.search .contents .item[id !="tab1"]').hide();
        $(".search .tab li a").click(function(){
            $(".search .contents .item").hide();
            $($(this).attr("href")).show();
            
            $(".search .tab .current").removeClass("current");
            $(this).addClass("current");
    
            return false;
        });
});

$(function(){
    if($(window).width() < 841){
        $(".recommendSec .contents ul").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            dots: true,
            arrows: false,
        });
        
        $(".reviewsSec .reviews .contents .item_li ul").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            dots: true,
            arrows: false,
        });

        $(".head_top button").click(function(){
            $(".gnav").toggleClass('menu--isOpen');
            $('.gnav ul').toggleClass('is-active');
        });

        $('.search .contents .item[id !="tab1"]').hide();
        $(".search .tab li a").click(function(){
            $(".search .contents .item").hide();
            $($(this).attr("href")).show();
            
            $(".search .tab .current").removeClass("current");
            $(this).addClass("current");
    
            return false;
        });
    }; 
});

$(function(){
    $(window).scroll(function (){
        const wHeight = $(window).height();
        const wScroll = $(window).scrollTop();
        $(".valueSec .value .fadeIn_img").each(function () {
            const bPosition = $(this).offset().top;
            if (wScroll > bPosition - wHeight + 200) {
                $(".value .fadeIn_img .top img").addClass("fadeinTop");
                $(".value .fadeIn_img .bottom img").addClass("fadeinBottom");
            };
        });
    });
});

$(function(){
    if($(window).width() > 841){
        $(window).scroll(function (){
            const wHeight = $(window).height();
            const wScroll = $(window).scrollTop();
            $(".recommendSec .contents ul li .item_li").each(function () {
                const bPosition = $(this).offset().top;
                if (wScroll > bPosition - wHeight + 200) {
                    $(".recommendSec .contents ul li .item1").addClass("fadeinItem1");
                    $(".recommendSec .contents ul li .item2").addClass("fadeinItem2");
                    $(".recommendSec .contents ul li .item3").addClass("fadeinItem3");
                };
            });
        });
    };
});