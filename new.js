

document.getElementById('submit-buttom').addEventListener('click', function () {

    //  email

    const emailInputText = document.getElementById('email-Input');
    const emailText = emailInputText.value;
    //    console.log(emailText);

    //    password

    const PasswordInputText = document.getElementById('password-Input');
    const PasswordText = PasswordInputText.value;

    if (emailText == 'khan' && PasswordText == 12345) {
        window.location.href = 'index.html'
        // console.log(PasswordText);
    }

})





