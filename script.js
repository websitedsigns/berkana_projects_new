let slideIndex = 0;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop
            });
        }
    });
});


function showImage(imageIndex) {
    var i;
    var images = document.getElementsByClassName('image');
    var dots = document.getElementsByClassName('dot');
    for (i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    images[imageIndex - 1].style.display = 'block';
    dots[imageIndex - 1].className += ' active';
}
//create modal for gallery images
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const close = document.getElementById('close');
const images = document.querySelectorAll('.image');
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
        caption.innerHTML = image.alt;
    });
});
close.addEventListener('click', () => {
    modal.style.display = 'none';
});


$(document).ready(function() {
    $('.carousel-container .carousel').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 2, 
                }
            }

            
        ]
    });
});

