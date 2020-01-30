$(document).ready(function(){
    
    // навигационное меню //
    $(".menu-icon").click(function(e){
        e.preventDefault();
        $this = $(this)
        if($this.hasClass("is-opened")){
            $this.addClass("is-closed").removeClass("is-opened");
        }else{
            $this.removeClass("is-closed").addClass("is-opened");
        }
    });
    $(".menu-icon-cross").click(function(){
        if ($(".top_mnu").is(":visible")){
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });
// навигационное меню //
    $(".popup").magnificPopup();
    $(".popup_content").magnificPopup({
      type:"inline",
      midClick: true
    })
    $("a").mPageScroll2id({
        offset: 50,
        speed: 100
    });
// анимация элементов формы //
    $(".field-input").focus(function(){
        $(this).parent().addClass('is-focused has-label');
    });
    $(".field-input").blur(function(){
        $parent = $(this).parent();
        if($(this).val() == ''){
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });

    // сортировка списка портфолио //
    //$('#portfolio_wrapp').mixItUp();
    // сортировка списка портфолио //
    
    // элементы списка портфолио //
        $('.projects_list_wrapp li').click(function(){
            $('.projects_list_wrapp li').removeClass("active");
            $(this).addClass("active");
        });
        
    // элементы списка портфолио //
   
   
   
   
   
   
   
   
   
   
    // анимация элементов формы //
    
    $(".our_team_item").focus(function(){
        $(".info_worker").addClass('active');
    });
    
   







    // parallax
   
    // parallax

    
    
    





// фиксированное меню ///////////////////////////
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header_wrapp = document.getElementsByClassName(".header_wrapp");
            if (distanceY > shrinkOn) {
                $(".header_wrapp").addClass("smaller");
            } else {
                if ($(".header_wrapp").has("smaller")) {
                $(".header_wrapp").removeClass("smaller");
                }
            }
        });
    }
    window.onload = init();

// фиксированное меню ///////////////////////////

// Слайдер
    $(".carousel").owlCarousel({
        item: 9,
        loop: true,
        dots: true,
        nav: true,
        autoplay: 1000,
        slideSpeed: 1400,
        paginationSpeed: 400,
        singleItem: true
    });
    $(".carousel_mobile").owlCarousel({
        item: 1,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        slideSpeed: 1400,
        paginationSpeed: 1900,
        singleItem: true
    });
// Слайдер
   

   // Скрывающиеся элементы
    
     

    let element_foot,content_foot,but_flag,chevr_foot;
        content_foot = document.getElementsByClassName('our_profit_descr');
        chevr_foot = document.getElementsByClassName("fa fa-chevron-down");
        but_flag = document.getElementsByClassName("our_profit_flag");
    
    for (let i=0 ; i<but_flag.length; i++){
    
        but_flag[i].addEventListener("click",function(){

            if(document.getElementsByClassName("is-opened").length>0) {
                document.getElementsByClassName("is-opened")[0].classList.remove('is-opened')
                document.getElementsByClassName("our_profit_descr")[i].classList.add('is-opened');
                document.getElementsByClassName("our_profit_descr")[i].classList.toggle('is-opened');
            }
            else{
                document.getElementsByClassName("our_profit_descr")[i].classList.add('is-opened');
            }
            
        });
    }

})

