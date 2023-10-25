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
    slideIndex = imageIndex;
    const modalImage = document.getElementById('modalImage');
    const clickedImage = document.querySelectorAll('.carousel-item img')[imageIndex];

    modalImage.src = clickedImage.src;

    
    modalImage.style.width = '50%';
    modalImage.style.height = 'auto';

    document.getElementById('imageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function enlargeImage(image) {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = image.src;
}

function closeImageModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}


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

