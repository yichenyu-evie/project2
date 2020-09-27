/* ******************************************* */
/*  Simple Slider Wheel                        */
/*  -------------------                        */
/*  Copyright                                  */
/*     Mejias David   -> Info-DVD aka M-DVD    */
/* ******************************************* */
/*  MIT License                                */
/* ******************************************* */

		$(document).ready(function(){
			heightSlide = $("#slide-05").outerHeight(true) / 2;
			heightLastSlide = $("#slide_05").offset().top ;
			$("body").scrollspy({target: '.dvd_fixed_slider', offset: heightSlide });
		});

		$(window).on("scroll", function () {
			var scrollTop = $(window).scrollTop();
			var attrPosition = (scrollTop > heightLastSlide) ? 'static' : 'absolute';
			$("#slide-05").css({ position: attrPosition });
		});



//quiz

  $('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {//qeustion1
        'q': 'How many breeds of cats included?',
        'options': [
          '4',
          '5',
          '6',
          '7'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect. 5 breeds included!'
      },
      {//question2
        'q': 'Which breed is easier to keep than others?',
        'options': [
          'Ragdoll',
          'Exotic',
          'British',
          'Scottish Fold'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect. British is easier!'
      },
      {
        'q': 'Which two breeds have special ear looks?',
        'options': [
          'Scottish Fold and Ragdoll',
          'Scottish Fold and British',
          'American Curl and British',
          'American Curl and Scottish Fold'
        ],
        'correctIndex': 3,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect. Scottish Fold and American Curl have different ear looks than others.'
      },
      {
        'q': 'Which breed looks similar to Persian?',
        'options': [
          'Ragdoll',
          'Exotic',
          'British',
          'American Curl'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect. Exotic looks similar to Persian but has shorthair.'
      },
      {
        'q': 'Which breed is more interested in humans?',
        'options': [
          'Ragdoll',
          'Exotic',
          'British',
          'Scottish Fold'
        ],
        'correctIndex': 0,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Incorrect. Ragdoll is more interested in humans.'
      }
    ]
  });

//circular progress bar
//slide1
function animate_progressbar1()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar1").animate({width: "85%" },300);
// $width_inc=$total_width/2;
// if($("#progressbar1").width()<=$total_width/3)
// {
//  $width=$total_width/2;
//  $("#progressbar1").animate({width:''+$total_width/2+''},300);
//   
// }
}
    
function reset_progressbar()
{
 $("#progressbar1").animate({width:'0px'},300);
}

//

function animate_progressbar2()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar2").animate({width: "75%" },300);

}


// slide2
function animate_progressbar3()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar3").animate({width: "90%" },300);

}

function animate_progressbar4()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar4").animate({width: "65%" },300);

}

//slide3
function animate_progressbar5()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar5").animate({width: "95%" },300);

}

function animate_progressbar6()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar6").animate({width: "98%" },300);

}

//slide4
function animate_progressbar7()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar7").animate({width: "95%" },300);

}

function animate_progressbar8()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar8").animate({width: "83%" },300);

}

//slide5
function animate_progressbar9()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar9").animate({width: "75%" },300);

}

function animate_progressbar10()
{
 $total_width=$("#progressbar_wrapper").width();
 $("#progressbar10").animate({width: "90%" },300);

}


//
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/img/Splash_image1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'images/img/Splash_image2.jpg';

new jBox('Tooltip', {
  attach: '.tooltips',
  content: '<img src="assets/catit.png">',
  offset: {
      y: 5,
      x: 290,
    }
    
});

//
// Plugin @RokoCB :: Return the visible amount of px
// of any element currently in viewport.
// stackoverflow.com/questions/24768795/
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));




