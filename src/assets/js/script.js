
const loginBox = document.querySelector('.login__box');

if(loginBox){

    //меняем глах в оле пароль
    const password = loginBox.querySelector('.field__password');
    const passwordInput = password.querySelector('input');
    const eye = password.querySelector('.eye');
    eye.addEventListener('click', changeEye);
    function changeEye(){
        if( passwordInput.type === 'password'){
            passwordInput.type = 'text';
        } else{
            passwordInput.type = 'password';
        }
    }
}



const registerBox = document.querySelector('.register__box');

if(registerBox){

    const birthDateBox = registerBox.querySelector('.field__birth-date');
    const birthDateInput = birthDateBox.querySelector('input');

    birthDateInput.addEventListener('focus', (event)=>{
        const el = event.target;
        el.type = 'date';
    });

    birthDateInput.addEventListener('blur', (event)=>{
        const el = event.target;
        el.type = 'text';
    });
    
}