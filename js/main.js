$(document).ready(function () {

    var cloud1Start = 600;
    var cloud2Start = 900;
    var cloud3Start = 300;
    var cloud4Start = 0;
    var cloud5Start = 1200;
    
    var actualStart = -200;

    var leftBound = window.innerWidth;
    leftBound = leftBound.toString() + 'px';

    function moveClouds() {
        $('#cloud1').css({
            right: cloud1Start
        });
        $('#cloud1').animate({
            right: leftBound,
        }, 40000, 'linear', function () {
            moveClouds();
        });
        cloud1Start = actualStart;

        $('#cloud2').css({
            right: cloud2Start
        });
        $('#cloud2').animate({
            right: leftBound,
        }, 100000, 'linear', function () {
            moveClouds();
        });
        cloud2Start = actualStart;

        $('#cloud3').css({
            right: cloud3Start
        });
        $('#cloud3').animate({
            right: leftBound,
        }, 60000, 'linear', function () {
            moveClouds();
        });
        cloud3Start = actualStart;

        $('#cloud4').css({
            right: cloud4Start
        });
        $('#cloud4').animate({
            right: leftBound,
        }, 80000, 'linear', function () {
            moveClouds();
        });
        cloud4Start = actualStart;

        $('#cloud5').css({
            right: cloud5Start
        });
        $('#cloud5').animate({
            right: leftBound,
        }, 20000, 'linear', function () {
            moveClouds();
        });
        cloud5Start = actualStart;
    }

    moveClouds();

    $('#submit-button').click(function () {

        var emailInput = $('.email');
        var emailInputValue = emailInput.val();

        if (/.+@.+\..+/.test(emailInputValue)) {
            emailInput.val(emailInputValue.trim());
            $('form#signup').submit();

            $.post('http://formula-one.herokuapp.com/wh/signup', {
                    email: emailInputValue
                })
                .done(function (result) {
                    console.log(result);
                });
        } else {
            
            $('.illustration-container').animate({
                backgroundColor: '#EF9A9A'
            });
            $('.illustration-container').animate({
                backgroundColor: '#d7ede6'
            });
            emailInput.closest('form').find('input[type=text], textarea').val('');
            emailInput.attr('placeholder', "That's not an email! Try again.");
        }
    });
});