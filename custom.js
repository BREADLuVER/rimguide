$(document).ready(function () {

    document.addEventListener("DOMContentLoaded", function () {
        const title = document.querySelector(".title");
        const title2 = document.querySelector(".title2");

        function animateTitle(target) {
            const animation = target.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.1)" },
                    { transform: "scale(1)" },
                ],
                {
                    duration: 5000, 
                    iterations: Infinity,
                }
            );
            animation.play();
        }

        animateTitle(title);
        animateTitle(title2);
    });


    $('.thumbnail').hover(function () {
        $(this).css('transform', 'scale(1.05)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });

    $('.card').hover(function () {
        $(this).css('transform', 'scale(1.05)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });

    $('.clickable-container').hover(function () {
        $(this).css('transform', 'scale(1.02)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });

    setInterval(function () {
        $('#hopping-image').animate({ marginTop: '-=10px' }, 300).animate({ marginTop: '+=10px' }, 300);
    }, 2000);
});