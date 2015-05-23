$(document).ready(function () {

    var leftBound = window.innerWidth;
    leftBound = leftBound.toString() + 'px';
    
    function moveClouds() {
        $('#cloud1').css({
            right: -50
        });
        $('#cloud1').animate({
            right: leftBound,
        }, 40000, 'linear', function () {
            moveClouds();
        });
        
        $('#cloud2').css({
            right: -50
        });
        $('#cloud2').animate({
            right: leftBound,
        }, 100000, 'linear', function () {
            moveClouds();
        });
        
        $('#cloud3').css({
            right: -50
        });
        $('#cloud3').animate({
            right: leftBound,
        }, 60000, 'linear', function () {
            moveClouds();
        });
        
        $('#cloud4').css({
            right: -50
        });
        $('#cloud4').animate({
            right: leftBound,
        }, 80000, 'linear', function () {
            moveClouds();
        });
        
        $('#cloud5').css({
            right: -50
        });
        $('#cloud5').animate({
            right: leftBound,
        }, 200000, 'linear', function () {
            moveClouds();
        });
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