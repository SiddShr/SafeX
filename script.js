let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1)* 600)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 100)
            })
        }, 3000);

        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 3500)
    })
})

$(document).ready(function() {
    $('.template-article img').each(function() {
        var currentImage = $(this);
        currentImage.wrap("<a class='image-link' href='" + currentImage.attr("src") + "'</a>");
    });
    $('.image-link').magnificPopup({type:'image'});  
  });
    