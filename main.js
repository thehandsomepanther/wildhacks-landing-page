$(document).ready(function () {
    $('#submit-button').click(function () {
        
        var emailInput = $('.email');
        var emailInputValue = emailInput.val();
        
        if (/.+@.+\..+/.test(emailInputValue)) {
            emailInput.val(emailInputValue.trim());
            $('form#signup').submit();
            
            $.post( 'http://formula-one.herokuapp.com/wh/signup', {email: emailInputValue})
            .done(function(result) {
                console.log(result);
            });
        }
    });
});