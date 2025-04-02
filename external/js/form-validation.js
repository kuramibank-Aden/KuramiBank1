'use strict';
$(document).ready(function() {
    $(function() {
        // [ Add phone validator ]
        $.validator.addMethod(
            'mobile_format',
            function(value, element) {
             //  return this.optional(element) || /^\(\d{3}\)[ ]\d{3}\-\d{4}$/.test(value);
              return this.optional(element) || /^\d{9,}$/.test(value);
            },
            'رقم الهاتف غير صحيح'
        );

        $.validator.addMethod(
            'phone_format',
            function(value, element) {
             //  return this.optional(element) || /^\(\d{3}\)[ ]\d{3}\-\d{4}$/.test(value);
              return this.optional(element) || /^\d{8,}$/.test(value);
            },
            'رقم الهاتف غير صحيح'
        );



        // [ Initialize validation ]
        $('#validation-form123').validate({
            ignore: '.ignore, .select2-input',
            focusInvalid: false,
            rules: {
                'email': {
                    required: true,
                    email: true
                },
                'val-password': {
                    required: true,
                    minlength: 8,
                    maxlength: 20
                },
                'password-confirmation': {
                    required: true,
                    minlength: 8,
                    equalTo: 'input[name="val-password"]'
                },
                'user_name': {
                    required: true
                },
                'full_name': {
                    required: true
                },
                'town': {
                    required: true
                },
                'neighborhood': {
                    required: true
                },
                'card_id': {
                    required: true
                },
                'issue_date': {
                    required: true
                },
                'issue_place': {
                    required: true
                },
                'address': {
                    required: true
                },
                'home_address': {
                    required: true
                },
                'mobile': {
                    required: true,
                    mobile_format: true
                },
                'birth_place': {
                    required: true
                },
                'birthdate': {
                    required: true
                },
                'street': {
                    required: true
                },
                'validation-url': {
                    required: true,
                    url: true
                },
                'phone': {
                    required: true,
                    phone_format: true
                },
                'country_id': {
                    required: true,
                    
                },
                'validation-select': {
                    required: true
                },
                'marital_status': {
                    required: true
                },
                'city_id': {
                    required: true
                },
                'validation-bs-tagsinput': {
                    required: true
                },
                'validation-text': {
                    required: true
                },
                'validation-file': {
                    required: true
                },
                'validation-switcher': {
                    required: true
                },
                'gender_id': {
                    required: true
                },
                'validation-radios-custom': {
                    required: true
                },
                'validation-checkbox': {
                    required: true
                },
                'accept': {
                    required: true
                },
                'validation-checkbox-custom': {
                    required: true
                },
                'children_count':
                {
                    required: true

                }
                ,
                'supported_count':
                {
                    required: true
                }
                ,
                'whatsapp':
                {
                    required: true
                }
                ,
                'facebook_page':
                {
                    required: true
                }
                ,
                'twitter_page':
                {
                    required: true
                },
                'instagram_page':
                {
                    required: true
                }

            },

            // Errors //

            errorPlacement: function errorPlacement(error, element) {
                var $parent = $(element).parents('.form-group');

                // Do not duplicate errors
                if ($parent.find('.jquery-validation-error').length) {
                    return;
                }

                $parent.append(
                    error.addClass('jquery-validation-error small form-text invalid-feedback')
                );
            },
            highlight: function(element) {
                var $el = $(element);
                var $parent = $el.parents('.form-group');

                $el.addClass('is-invalid');

                // Select2 and Tagsinput
                if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
                    $el.parent().addClass('is-invalid');
                }
            },
            unhighlight: function(element) {
                $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
            }
        });
    });
});
