
const user = 'admin';
const pwd = 'admin';
const login = document.querySelector('#login');
const close = document.querySelector('#close');
const btnLog = document.querySelector('#btn-btnLogin');
const userName = document.querySelector('#userName');
const passWord = document.querySelector('#passWord');
const btnLogin = document.querySelector('#btnLogin');
const statusUname = document.querySelector('#status-userName');
const statusPwd = document.querySelector('#status-passWord');
const loading = document.querySelector('.loadingio-spinner-rolling-32ukuutcxdd');
const btnForgot = document.querySelector('#btnForgot');
const form = document.querySelector("#login-form");
const messageSuccessLog = document.getElementById("messageSuccessLog");
// 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // sử dụng even.preventDefault() để ngăn chặn sự kiện mặc định của trình duyệt
    main();
});

close.addEventListener('click', function () {
    login.style.animationName = 'hide';
    login.style.animationDuration = '1s';
    setTimeout(function () {
        login.style.animationName = 'show';
        login.style.display = 'none';
        btnLog.style.display = 'block';

    }, 1000);

});
btnForgot.addEventListener('click', function () {
    location.replace('forgotprd.html');
});

btnLog.addEventListener('click', function () {
    setTimeout(function () {
        btnLog.style.display = 'none';
        login.style.display = 'block';
    }, 100);
});
function main() {
    if (userName.value === '' && passWord.value === '') {
        statusUname.innerHTML = "Vui lòng nhập tên đăng nhập";
        statusPwd.innerHTML = "Vui lòng nhập mật khẩu";
        userName.style.border = "1px solid red";
        passWord.style.border = "1px solid red";
        userName.focus();
        setTimeout(function () {
            statusUname.innerHTML = "";
            statusPwd.innerHTML = "";
            userName.style.border = "1px solid #0000001d";
            passWord.style.border = "1px solid #0000001d";
        }, 3500);


    } else if (userName.value === '') {
        statusUname.innerHTML = "Vui lòng nhập tên đăng nhập";
        passWord.style.border = "1px solid #0000001d";
        statusPwd.innerHTML = "";
    } else if (passWord.value === '') {
        statusPwd.innerHTML = "Vui lòng nhập mật khẩu";
        userName.style.border = "1px solid #0000001d";
        statusUname.innerHTML = "";
    } else {
        if (userName.value === user && passWord.value === pwd) {
            btnLogin.innerHTML = 'Đang đăng nhập...';
            /* loading.style.display = 'block';*/
            setTimeout(function () {
                loading.style.display = 'none';
                login.style.display = 'none';
                
                btnLog.style.display = 'block';
                btnLog.innerHTML = 'Đăng nhập thành công';
                userName.value = '';
                passWord.value = '';
                btnLogin.innerHTML = 'Login';
            }, 2000);
            setTimeout(function () {
                btnLog.innerHTML = 'Đăng Nhập hệ Thống';
            }, 5000);


        } else {
            statusUname.innerHTML = "Tên đăng nhập hoặc mật khẩu không đúng";
            userName.value = '';
            passWord.value = '';
            userName.style.border = "1px solid red";
            passWord.style.border = "1px solid red";
            userName.focus();
        }
    }
};
// export default {mess1ageSuccessLog};

