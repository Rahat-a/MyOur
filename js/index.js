

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})




//  Typed Animation  Start 
var typed = new Typed (".typeJs", {
    strings: ["Web Developer", "Programmer","Web Designer", "Founder of Web Alone 😍"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,    
})
//  Typed Animation  end

// Active header item start

$(document).on('click', '.menu li', function(){
    $(this).addClass('current-item').siblings().removeClass('current-item')
})

// Active header item end

// hemberger icon click to open header.active\\ source--easy tutorial

let header = document.getElementById("header");

function toggleMenu(){
    header.classList.toggle("active")
}

// scroll header bg change
$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('header').addClass('bgc');
        }else{
            $('header').removeClass('bgc');
        }
    });
});



// owl carousel
const prevIcon = '<i class=\"fa-solid fa-chevron-left\"></i>';
const nextIcon = '<i class=\"fa-solid fa-chevron-right\"></i>';

$('.pricing-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        699:{
            items:1
        },
        721:{
            items:2
        },
        // 1199:{
        //     items:3
        // },
        1200:{
            items:2
        }
    }
})

$('.review-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        699:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$('.client-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:2
        },
        720:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

// portfolio ========

$('.portfolio-items').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-items').isotope({
        filter:selector
    });
    return false;

  });

//   email validation
function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "valid E-mail";
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Email Not valid";
    }
}
