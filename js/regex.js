$(document).ready(function(){
    
    function dangky() {
        let ID = $("#txtUserName").val();
        let pass= $("#txtPW").val();
        let repass = $("#txtRePW").val(); 
        let email = $("#txtEMail").val();
        let phone = $("#txtPhone").val();
      
        
        let error = [];

        let regexID = /^\S{4,20}$/;
        let regexPass =/^(?=.*[0-9])\S{5,}$/;
        let regexMail = /^\S+@\S+(\.{1}\S+)+$/
        let regexPhone = /^\d{9}$/;

        if (ID === "" || !regexID.test(ID))
            error.push("Tên đăng nhập phải có 4-20 ký tự và không có ký tự đặc biệt");

        if(pass === "" || !regexPass.test(pass))
            error.push("Mật khẩu phải có ít nhất 6 ký tự trong đó có 1 ký tự số");

        if(email === "" || !regexMail.test(email))
            error.push("Email không hợp lệ");

        if(phone ==="" || regexPhone.test(phone))
            error.push("Số điện thoại không hợp lệ");

        if(regexPass.test(pass)) 
            if(repass !== pass)
                error.push("Mật khẩu không khớp");
        
        
        if(error.length>0) {
            $("#mess").html(error.join("</br>"));
            return false;
        }

        $("#DKTC").css('display', 'block');
        $("#mess").html("");       
        setTimeout(function(){
            $("#DKTC").css('display', 'none');
        },10000);


        
        


        return true;
    }

    
    $("#btnDangKi").click(dangky);
})