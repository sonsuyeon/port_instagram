window.onload = function () {
    const inputIdField = document.getElementById("loginID");
    const inputIdContainer = document.getElementById("loginInpID");

    const inputPwField = document.getElementById("loginPW");
    const inputPwContainer = document.getElementById("loginInpPW");
    const PWShowBtn = document.querySelector(".login__placeholder-btn");

    function handleInput(container, inputField, showButton) {
        if (inputField.value !== "") {
            container.classList.add("input-filled");
            if (showButton) showButton.style.display = "block";
        } else {
            container.classList.remove("input-filled");
            if (showButton) showButton.style.display = "none";
        }
    }

    inputIdField.addEventListener("input", function () {
        handleInput(inputIdContainer, inputIdField);
    });

    inputPwField.addEventListener("input", function () {
        handleInput(inputPwContainer, inputPwField, PWShowBtn);
    });

    let isPasswordVisible = false;

    PWShowBtn.addEventListener("click", function () {
        isPasswordVisible = !isPasswordVisible;
        inputPwField.type = isPasswordVisible ? "text" : "password";
        PWShowBtn.textContent = isPasswordVisible ? " 숨기기" : "비밀번호 표시";
    });
};
