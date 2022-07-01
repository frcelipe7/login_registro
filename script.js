document.addEventListener("DOMContentLoaded", () => {
    const call_register = document.getElementById("call_register");
    const line_form = document.querySelectorAll(".login form .line");
    const login_title = document.getElementById("title_login");
    const to_login_buttons = document.querySelector(".login form .to_login");

    const say_hello = document.querySelector(".say_hello");
    
    const block_registrar = document.querySelector(".block .registrar");
    const call_login = document.querySelector(".registrar form .to_register span")

    call_register.addEventListener("click", () => {
        line_form.forEach(line => {
            line.style.animation = "changeLogin .5s forwards";
        });
        login_title.style.animation = "opacityZero 1s forwards";
        login_title.style.top = "-100px";
        to_login_buttons.style.marginBottom = "-100px"
        say_hello.style.right = "400px";
        
        block_registrar.style.display = "block";
        block_registrar.style.animation = "opacityOne 2s forwards";
    });

    call_login.addEventListener("click", () => {
        line_form.forEach(line => {
            line.style.animation = "changeLogin2 1s forwards";
        });
        login_title.style.animation = "opacityZero 1s forwards";
        login_title.style.animationDirection = "reverse";
        login_title.style.top = "0px";
        to_login_buttons.style.marginBottom = "0px"
        say_hello.style.right = "0px";

        block_registrar.style.animation = "opacityZero .5s forwards"
        // block_registrar.addEventListener('animationend', () => {
        //     block_registrar.style.display = "none";
        //     block_registrar.style = "";
        // });
    });
});
