$(document).ready(function(){
    $('#RegForm').submit(function(e){
        e.preventDefault();
        var User_name=$('#User_name').val();
        var email=$('#email').val();
        var pass=$('#pass').val();
        //remove error message
        $(".error").remove();
        if (User_name.length<3){
            $('#User_name').after('<p class="error">This field is required</p>');
        }
        
        if (email.length<3){
            $('#email').after('<p class="error">Please include "@" in Email Address</p>');
        }
        else{
            var regEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var validEmail=regEx.test(email);
            if(!validEmail){
                $('#email').after('<p class="error">Enter a valid.email</p>')
            }
        }
        if (pass.length<8){
            $('#pass').after('<p class="error">This field requires 8 characters</p>');
        }

    });
});
    $(document).ready(function(){
        $('#LoginForm').submit(function(e){
            e.preventDefault();
            var first_name=$('#first_name').val();
            var password=$('#password').val();
            //remove error message
            $(".error").remove();
            if (first_name.length<3){
                $('#first_name').after('<p class="error">This field is required</p>');
            }
            if (password.length<8){
                $('#password').after('<p class="error">This field requires 8 characters</p>');
            }
    
        });
    });



    $(document).ready(function(){
        $('#forgotPasswordForm').submit(function(e){
            e.preventDefault();
            var email=$('#email').val();
            //remove error message
            $(".error").remove();
            if (email.length<3){
                $('#email').after('<p class="error">Please include "@" in Email Address</p>');
            }
            else{
                var regEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                var validEmail=regEx.test(email);
                if(!validEmail){
                    $('#email').after('<p class="error">Enter a valid.email</p>')
                }
            }
        });
    });

