$(document).ready(function(){
    $('#myName').keyup(function(){
        var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.{3,})/;
       if(regexp.test($('#myName').val())){
            $('#myName').closest('.myName').removeClass('has-error')
           $('#myName').closest('.myName').addClass('has-success');
           $('#checkname').css('color','rgb(9, 252, 9)').show();
           $('#cancelname').hide()
       }else{
            $('#myName').closest('.myName').addClass('has-error')
            $('#myName').closest('.myName').removeClass('has-success')
            $('#cancelname').css('color','rgb(212, 31, 31)').show()
            $('#checkname').hide()
       }
    })
})
$(document).ready(function(){
    $('#myUsername').keyup(function(){
        var regexp = /^(?=.*[a-z])(?=.*[!@#\$%\^&\*-])(?=.{6,})/;
       if(regexp.test($('#myUsername').val())){
            $('#myUsername').closest('.myUsername').removeClass('has-error')
           $('#myUsername').closest('.myUsername').addClass('has-success');
           $('#checkusername').css('color','rgb(9, 252, 9)').show();
           $('#cancelusername').hide();
       }else{
            $('#myUsername').closest('.myUsername').addClass('has-error')
            $('#myUsername').closest('.myUsername').removeClass('has-success')
            $('#cancelusername').css('color','rgb(212, 31, 31)').show();
            $('#checkusername').hide();
       }
    })
})
$(document).ready(function(){
    $('#myEmail').keyup(function(){
        var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(regexp.test($('#myEmail').val())){
            $('#myEmail').closest('.myEmail').removeClass('has-error')
           $('#myEmail').closest('.myEmail').addClass('has-success');
           $('#checkemail').css('color','rgb(9, 252, 9)').show();
           $('#cancelemail').hide()
       }else{
            $('#myEmail').closest('.myEmail').addClass('has-error')
            $('#myEmail').closest('.myEmail').removeClass('has-success')
            $('#cancelemail').css('color','rgb(212, 31, 31)').show();
            $('#checkemail').hide()
       }
    })
})
$(document).ready(function(){
    $('#myPassword').keyup(function(){
        var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
       if(regexp.test($('#myPassword').val())){
            $('#myPassword').closest('.myPassword').removeClass('has-error');
           $('#myPassword').closest('.myPassword').addClass('has-success');
           $('#checkpassword').css('color','rgb(9, 252, 9)').show();
           $('#cancelpassword').hide();
       }else{
            $('#myPassword').closest('.myPassword').addClass('has-error');
            $('#myPassword').closest('.myPassword').removeClass('has-success');
            $('#cancelpassword').css('color','rgb(212, 31, 31)').show();
            $('#checkpassword').hide();
       }
    })
})

$(document).ready(function(){
    $('#logEmail').keyup(function(){
        var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(regexp.test($('#logEmail').val())){
            $('#logEmail').closest('.logEmail').removeClass('has-error')
           $('#logEmail').closest('.logEmail').addClass('has-success');
           $('#checklog-email').css('color','rgb(9, 252, 9)').show();
           $('#cancelog-email').hide()
       }else{
            $('#logEmail').closest('.logEmail').addClass('has-error')
            $('#logEmail').closest('.logEmail').removeClass('has-success')
            $('#cancelog-email').css('color','rgb(212, 31, 31)').show();
            $('#checklog-email').hide()
            
       }
    })
})

$(document).ready(function(){
    $('#logPassword').keyup(function(){
        var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
       if(regexp.test($('#logPassword').val())){
            $('#logPassword').closest('.logPassword').removeClass('has-error');
           $('#logPassword').closest('.logPassword').addClass('has-success');
           $('#checklog-pass').css('color','rgb(9, 252, 9)').show();
           $('#cancelog-pass').hide()

       }else{
            $('#logPassword').closest('.logPassword').addClass('has-error');
            $('#logPassword').closest('.logPassword').removeClass('has-success');
            $('#cancelog-pass').css('color','rgb(212, 31, 31)').show();
            $('#checklog-pass').hide()
       }
    })
})
$(document).ready(function(){
    $(
        '#checkname,#checkusername, #checkemail, #checkpassword, #cancelname, #cancelusername, #cancelemail, #cancelpassword, #cancelog-email, #cancelog-pass, #checklog-email, #checklog-pass ').hide()
})

