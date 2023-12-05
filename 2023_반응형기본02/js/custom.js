$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
    });
    $('.main_portfolio_slide').slick({
        slidesToShow: 5,
        arrows: false,
        dots: true,

        // 반응형 됐을 때 슬라이드 한개만 나오게
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    })

    $('.main_customer .left_tab .tab_tit>li a').on('click', function (e) {
        // 1. a를 클릭 했을 때 새로 고침이 되지 않게 하기.
        e.preventDefault();

        // 2. 번호를 받아오기
        let idx = $(this).parent().index();

        //3. 번호를 부합하는 .tab_con>li를 보여주기
        $('.main_customer .left_tab .tab_con>li').removeClass('on');
        $('.main_customer .left_tab .tab_con>li').eq(idx).addClass('on');

        //4. 메뉴의 스타일 붙히기
        $('.main_customer .left_tab .tab_tit>li').removeClass('on');
        $('.main_customer .left_tab .tab_tit>li').eq(idx).addClass('on');
    });

    $(window).on('scroll', function () {
        let SCT = $(window).scrollTop();

        if (SCT > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })

    $('.to_top').on('click', function () {
        $('html ,body').animate({ scrollTop: 0 }, 400);
    });

    // responsive menu 
    $('.mopen').on('click', function () {
        $('#gnb').togglesClass('on');
        $(this).togglesClass('on');
    })

})