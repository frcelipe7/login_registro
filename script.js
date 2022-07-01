document.addEventListener("DOMContentLoaded", () => {
    const call_register = document.getElementById("call_register");
    const line_form = document.querySelectorAll(".login form .line");
    const login_title = document.getElementById("title_login");
    const to_login_buttons = document.querySelector(".login form .to_login")

    const say_hello = document.querySelector(".say_hello");
    var i = 0
    async function elementChange() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(i++), 500);
        })

        let response = await promise
        console.log(response)
    }

    call_register.addEventListener("click", () => {
        line_form.forEach(line => {
            line.style.animation = "changeLogin .5s forwards";
        });
        login_title.style.animation = "opacityZero 1s forwards";
        login_title.style.top = "-100px";
        to_login_buttons.style.marginBottom = "-100px"

        login_title.addEventListener("animationend", () => {
            say_hello.style.right = "400px";
        })
    });
});
