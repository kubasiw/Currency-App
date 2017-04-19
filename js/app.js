jQuery(document).ready(function(){
    
    // menu vars
    // menu A vars
    var circle1 = jQuery('.circle1');
    var aBox = jQuery('.aBox');
    var aboutBox = jQuery('.aboutBox');
    var aLetter = jQuery('.aBox span');
    var about = jQuery('.aboutBox span');
    
    // menu B vars
    var circle2 = jQuery('.circle2');
    var bBox = jQuery('.bBox');
    var beBox = jQuery('.beBox');
    var bLetter = jQuery('.bBox span');
    var creative = jQuery('.beBox span');
    
    // menu C vars
    var circle3 = jQuery('.circle3');
    var cBox = jQuery('.cBox');
    var ceBox = jQuery('.ceBox');
    var cLetter = jQuery('.cBox span');
    var contact = jQuery('.ceBox span');
    
    // home vars
    
    var circle4 = jQuery('.circle4');
    var nav = jQuery('nav');
    
    
    var startPage = jQuery('.start');
    var progressBar = jQuery('.progressBar span');
    
    // opening / closing mobile menu
    
    var normalNav = jQuery('.normalNav');
    var hamburger = jQuery('.hamburger');
    var mobileNav = jQuery('.mobileNav');
    var hamDivSpan1 = jQuery('.span1');
    var hamDivSpan2 = jQuery('.span2');
    var hamDivSpan3 = jQuery('.span3');
    var rowMobile = jQuery('.rowMobile');
    
    // starting animations
    function start() {
        // we're hiding all sections before welcoming animation
        function progress() {
            jQuery('.section1').hide();
            jQuery('.section2').hide();
            jQuery('.section3').hide();
            jQuery('.section4').hide();
            jQuery('.sectionBlank').hide();
            jQuery('.afterNav').hide();
            
           
        progressBar.css('width', '100%')
                     .css('background-color', '#ffce00')
                     .css('transition', '3s');

            jQuery('.count').each(function () {
                jQuery(this).css('color', 'snow');
                jQuery(this).prop('Counter',0).animate({
                    Counter: jQuery(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        jQuery(this).text(Math.ceil(now));
                    }
                });
            });
        }
        progress();
        
        // after animation our sections will be visible
        function hideStart() {
            startPage.fadeOut('slow');
            jQuery('body').css('overflow-y', 'visible');
            jQuery('.section1').show();
            jQuery('.section2').show();
            jQuery('.section3').show();
            jQuery('.section4').show();
            jQuery('.sectionBlank').show();
            jQuery('.afterNav').show();       
        };
        setTimeout(hideStart,3500);
        
    };
    start();
    

    // sticky menu
    
    function stickyMenu(){
        
        var nav = jQuery('.normalNav');
        var position = nav.offset().top;
        
        jQuery(window).on('scroll', function(){

             var scrollTop = jQuery(window).scrollTop();
             var mobNav = jQuery('.normalNav nav');
            
             if (scrollTop > (position - position)) {
                nav.addClass('sticky')
                mobNav.addClass('stickyBox')
            } else {
                nav.removeClass('sticky')
                mobNav.removeClass('stickyBox')
            }
        });
    };
    stickyMenu();
    
    
    // adding effects on menu buttons:
    function showMenu(){
        
        // for whole "a" button
        
        circle1.on('mouseover', function(){
            aLetter.css('left', '-22.22'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            aboutBox.css('display', 'block');
            jQuery(this).css('opacity', '1')
                        .css('transition', '500ms');
        });
        
        circle1.on('mouseout', function(){
            aLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            aboutBox.css('display', 'none');
            circle1.css('opacity', '0.7')
                   .css('transition', '500ms');
        });
        
        
        aBox.on('mouseover', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('opacity', '#1')
                   .css('transition', '500ms');
        });
        
        aboutBox.on('mouseover', function(){
            aLetter.css('left', '13.2'+'%')
                   .css('transition', '500ms');
            aboutBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle1.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        
        // for whole "b" button
        
        
        circle2.on('mouseover', function(){
            bLetter.css('left', '-22.22'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            jQuery(this).css('opacity', '1')
                        .css('transition', '500ms');
        });
        
        circle2.on('mouseout', function(){
            bLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            beBox.css('display', 'none');
            circle2.css('opacity', '0.7')
                   .css('transition', '500ms');
        });
        
        
        bBox.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle2.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        beBox.on('mouseover', function(){
            bLetter.css('left', '46.55'+'%')
                   .css('transition', '500ms');
            beBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            circle2.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        
        // for whole "c" button
        
        
        circle3.on('mouseover', function(){
            cLetter.css('left', '-22.22'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            jQuery(this).css('opacity', '1')
                        .css('transition', '500ms');
        });
        
        circle3.on('mouseout', function(){
            cLetter.css('left', '39'+'%')
                   .css('color', 'white')
                   .css('transition', '500ms');
            ceBox.css('display', 'none');
            circle3.css('opacity', '0.7')
                   .css('transition', '500ms');
        });
        
        
        cBox.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                    .css('opacity', '1')
                    .css('transition', '500ms');
            circle3.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        ceBox.on('mouseover', function(){
            cLetter.css('left', '79.85'+'%')
                   .css('transition', '500ms');
            ceBox.css('display', 'inline-block')
                 .css('opacity', '1')
                 .css('transition', '500ms');
            circle3.css('opacity', '1')
                   .css('transition', '500ms');
        });
        
        // for whole "HOME" button
        
        circle4.on('mouseover', function(){
           jQuery(this).css('opacity', '1')
                       .css('transition', '500ms');
        });
        
        circle4.on('mouseout', function(){
           jQuery(this).css('opacity', '0.3')
                       .css('transition', '500ms');
        });        
    };
    showMenu();
    
    // function for blinkink arrows in section1
    function blink() {
        jQuery('.fa').hide();

        setInterval(function(){
            jQuery('.fa').fadeIn(1000).fadeOut(1000);
        },0);
    };
    
    blink();
    
    
    // function for opening/closing mobile nav, hamburger etc.
    function mobileOnOff() {
        
        hamburger.on('click', function(){
            
            if (hamburger.hasClass('on')) {
                hamburger.removeClass('on');
                mobileNav.hide();
                hamDivSpan2.show();
                hamDivSpan1.css('transform','rotate(0deg)')
                           .css('transition', '100ms')
                           .css('margin','0.2rem')
                           .css('background-color','#0e8044')
                           .css('position','');
                hamDivSpan3.css('transform','rotate(0deg)')
                           .css('transition', '100ms')
                           .css('margin','0.2rem')
                           .css('background-color','#0e8044');
            } else {
                hamburger.addClass('on')
                hamDivSpan2.hide();
                
                hamDivSpan1.css('transform','rotate(45deg)')
                           .css('transition', '100ms')
                           .css('margin','0')
                           .css('background-color','#f53240')
                           .css('position','absolute');
                hamDivSpan3.css('transform','rotate(-45deg)')
                           .css('transition', '100ms')
                           .css('background-color','#f53240')
                           .css('margin','0');
                mobileNav.css('display','block');
                        
            };
        });
    };
        
    mobileOnOff();
    
    // this function will be closing mobile menu when the 
    // width > then 767px and the normal nav replace mobile.
    
    function navClose() {

        jQuery(window).resize(function(){
            var win = jQuery(this); //this = window
            if (win.width() >= 767 && hamburger.hasClass('on')) {
                hamburger.removeClass('on');
                mobileNav.css('display', 'none');
                hamDivSpan2.show();
                hamDivSpan1.css('transform','rotate(0deg)')
                           .css('transition', '100ms')
                           .css('margin','0.2rem')
                           .css('background-color','#0e8044')
                           .css('position','');
                hamDivSpan3.css('transform','rotate(0deg)')
                           .css('transition', '100ms')
                           .css('margin','0.2rem')
                           .css('background-color','#0e8044');
            }
        });
    };
    navClose();
    
    function beCreative() {
        
        var project1 = jQuery('.project1');
        var info1 = jQuery('.info1');
        var close1 = jQuery('.close1');
        
        var project2 = jQuery('.project2');
        var info2 = jQuery('.info2');
        var close2 = jQuery('.close2');
        
        var project3 = jQuery('.project3');
        var info3 = jQuery('.info3');
        var close3 = jQuery('.close3');
        
        var blank = jQuery('.blank');
        var infoBlank = jQuery('.infoBlank');
        var closeBlank = jQuery('.closeBlank');
        
        //------------------------------
        project1.on('click', function(){
            info1.css('display','flex');
        });
        close1.on('click', function(){
            info1.css('display','none');
        });
        
        //-----------------------------
        project2.on('click', function(){
            info2.css('display','flex');
        });
        close2.on('click', function(){
            info2.css('display','none');
        });
        
        //-----------------------------
        project3.on('click', function(){
            info3.css('display','flex');
        });
        close3.on('click', function(){
            info3.css('display','none');
        });
        
        //-----------------------------
        blank.on('click', function(){
            infoBlank.css('display','flex');
        });
        closeBlank.on('click', function(){
            infoBlank.css('display','none');
        });
    };
    
    beCreative();

    
    // functions for navigation - looking section on page
    function lookForSection(){
        
        var anchor = jQuery("nav a");
        var aboutMob = jQuery('.about');
        var portMob = jQuery('.portfolio');
        var contactMob = jQuery('.contact');
        var homeMob = jQuery('.home2');
        var fa = jQuery('.fa');
        
        circle1.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);
        });
        
        circle2.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);
        });
        
        circle3.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);
        });
        
        anchor.on('click', function(){
            
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);
        });
        
        circle4.on('click', function(){
            var id = jQuery(this).attr('href');
            var elemOffset = jQuery(id).offset();
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);
        });
        
        // for blinking arrows on the bootom of main view
        fa.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);
        });
        
        
        // looking Mobile
        
        aboutMob.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);

        });
        
        portMob.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);

        });
        
        contactMob.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);

        });
        
        homeMob.on('click', function(){          // while clicking on a circle
            var id = jQuery(this).attr('href');  // id will get href from circA
            var elemOffset = jQuery(id).offset(); // elemOffset will find element with same id as button href and get offset
            
            jQuery('html, body').animate({scrollTop: elemOffset.top},500);

        });
        
    };
    lookForSection();
    
    
}); // end of DOM