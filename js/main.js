// Accordion js [Start]
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

// Accordion js [End]

$(document).ready(function () {

  // Brand Logo Slider js [Start]

  $('.brand-logo-wrap').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  // Brand Logo Slider js [End]

  // User Slider js [Start]

  $('.users-details-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    variableWidth: true,
    dots: true,
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,

        }
      }
    ]
  });

  // User Slider js [End]

  // Special Plan Tabs js [Start]

  $('.sales-tabs > ul li').click(function(){
    var $this = $(this);
    var $theTab = $(this).attr('id');
    console.log($theTab);
    if($this.hasClass('active')){
    // do nothing
    } else{
    $this.closest('.special-tabs-inner').find('.sales-tabs > ul li, .special-tabs-content .special-plan-inner').removeClass('active');
    $('.special-tabs-content .special-plan-inner[data-tab="'+$theTab+'"], .sales-tabs > ul li[id="'+$theTab+'"]').addClass('active');
    }
  });

  // Special Plan Tabs js [End]

  // Social Media Tabs js [Start]

  $('.social-tabs > ul li').click(function(){
    var $this = $(this);
    var $theTab = $(this).attr('id');
    console.log($theTab);
    if($this.hasClass('active')){
    // do nothing
    } else{
    $this.closest('.social-media-inner').find('.social-tabs > ul li, .social-tabs-container .social-media-content').removeClass('active');
    $('.social-tabs-container .social-media-content[data-tab="'+$theTab+'"], .social-tabs > ul li[id="'+$theTab+'"]').addClass('active');
    }
  });

  // Social Media Tabs js [End]

})


