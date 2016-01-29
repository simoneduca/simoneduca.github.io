$(document).ready(function () {
    
    $('#contactForm').validate({
        rules: {
            name: {
                minlength: 4,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                minlength: 4,
                required: true
            },
            message: {
                minlength: 4,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
            
        },
        success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');   
        }
    });
});