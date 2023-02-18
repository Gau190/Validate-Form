// import {pwd} from './script.js';
// import {messageSuccessLog} from './script.js';
const pwdOld = 'admin';
var form = document.querySelector("form");
const passWordOld = document.getElementById("passWordOld");
const passWordNew = document.getElementById("passWordNew");
const messOld = document.getElementsByTagName("small")[0];
const messNew = document.getElementsByTagName("small")[1];
// var messageSuccessLog = document.getElementById("messageSuccessLog");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    // sử dụng even.preventDefault() để ngăn chặn sự kiện mặc định của trình duyệt
    savePwd();
});

// messageSuccessLog.addEventListener("click", () {
//     messageSuccessLog.innerHTML= 'Đổi mật khẩu thành công';
//     setTimeout(function () {
//         messageSuccessLog.innerHTML = '';
//     }, 3000);
//     return false;
// });
function pwdOldNull(){
    messOld.innerHTML = "Bắt buộc nhập mật khẩu cũ";
    passWordOld.classList.add('border-danger');
    passWordOld.focus();
    setTimeout(function () {
        messOld.innerHTML = '';
        passWordOld.classList.add('border-light');
    }, 3000);
    return false;
};

function pwdNewNull(){ 
    messNew.innerHTML = "Bắt buộc nhập mật khẩu mới";
    passWordNew.classList.add('border-danger');
    passWordNew.focus();
    console.log(passWordNew);
    setTimeout(function () {
        messNew.innerHTML = '';
        passWordNew.classList.add('border-light');
    }, 3000);
    return false;
};

function successPwd (){ 
    if (passWordOld.value === pwdOld) {
        messOld.innerHTML = '';
        messNew.innerHTML = '';
        //sau khi đổi được mật khẩu sẽ chuyển tab về trang đăng nhập
        location.replace('index.html');
        messSLog();
    }
    else {
        messOld.innerHTML = "Mật khẩu cũ không đúng";
        messNew.innerHTML = '';
        passWordOld.classList.add('border-danger');
        passWordOld.focus();
        setTimeout(function () {
            messOld.innerHTML = '';
            passWordOld.classList.add('border-light');
        }, 3000);

    }
};

function savePwd() { //hàm chính dùng để kiểm tra mật khẩu cũ và mật khẩu mới

    if (passWordOld.value == '' && passWordNew.value == '') {
        messOld.innerHTML = "Bắt buộc nhập mật khẩu cũ";
        messNew.innerHTML = "Bắt buộc nhập mật khẩu mới";
        passWordOld.classList.add('border-danger');
        passWordNew.classList.add('border-danger');
        passWordOld.focus();
        setTimeout(function () {
            messOld.innerHTML = '';
            messNew.innerHTML = '';
            passWordOld.classList.add('border-light');
            passWordNew.classList.add('border-light');
            //vì lấy thẳng value của input nên không thể set border cho riêng nó được
            //nếu muốn set border và focus vào input thì phải dùng querySelector
        }, 3000);
        return false;
    };

    if(passWordOld.value == ''){
        pwdOldNull();
        return false;
    };

    if(passWordNew.value == ''){
        pwdNewNull();
        return false;
    }
    else{successPwd();};
};

