jQuery(document).ready(function($) {
    $("#submitBtn").click(function(){
        $("#regform").validate({
            rules: {
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                address: {
                    required: true
                },
                city: {
                    required: true
                },
                state: {
                    required: true
                },
                zip: {
                    required: true,
                    minlength: 5,
                    maxlength: 5,
                    digits: true
                },
                phone: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                }
            },
            messages: {
                firstname: {
                    required: "Enter your first name."
                },
                lastname: {
                    required: "Enter your last name."
                },
                email: {
                    required: "Enter your email address.",
                    email: "Invalid email address."
                },
                address: {
                    required: "Enter your street address."
                },
                city: {
                    required: "Enter your city."
                },
                state: {
                    required: "Select your state."
                },
                zip: {
                    required: "Enter your zip code.",
                    minlength: "Enter 5 digit zip code.",
                    maxlength: "Enter 5 digit zip code.",
                    digits: "Only digits (0-9) allowed."
                },
                phone: {
                    required: "Enter your phone number.",
                    minlength: "Enter 10 digit phone number.",
                    maxlength: "Enter 10 digit phone number.",
                    digits: "Only digits (0-9) allowed."
                }
            },
            submitHandler: function(form) {
               var fn = $("#firstname").val();
               var ln = $("#lastname").val();
               var email = $("#email").val();
               var address = $("#address").val();
               var city = $("#city").val();
               var state = $("#state").val();
               var zip = $("#zip").val();
               var phone = $("#phone").val();

               var datastring = 'firstname='+fn+'&lastname='+ln+'&email='+email+'&address='+address+'&city='+city+'&state='+state+'&zip='+zip+'&phone='+phone;
                request = $.ajax({
                    url: "ajaxsubmit.php",
                    type: "post",
                    data: datastring
                });
                // callback handler that will be called on success
                request.done(function (response, textStatus, jqXHR) {
                    // log a message to the console
                    console.log("Success!");
                    $("#regform")[0].reset();
                    alert("Thank You "+fn+"!"+" Your information has successfully been submitted.");
                    $('#add--response').html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">×</button><strong>Well done!</strong> You successfully read this important alert message.</div>');
                });
                // callback handler that will be called on failure
                request.fail(function (jqXHR, textStatus, errorThrown) {
                    // log the error to the console
                    console.error("The following error occured: " + textStatus, errorThrown);
                    alert("Error: Your information was NOT successfully submitted.");
                });
            }
        });
    });
});