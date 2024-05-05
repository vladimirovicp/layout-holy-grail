
const loginBox = document.querySelector('.login__box');

if(loginBox){
    //меняем глах в поле пароль на странице логин
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
    //end меняем глах в поле пароль на странице логин
}



const registerBox = document.querySelector('.register__box');
if(registerBox){

    // страница регистрации меняем инпут текст на календарь
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
    //end страница регистрации меняем инпут текст на календарь


    //меняем глах в поле пароль на странице регистрация
    const password = registerBox.querySelector('.field__password');
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
    //end меняем глах в поле пароль на странице регистрация


    // Изменение цвета color на странице регистрации в селекте Сountry
    const country = registerBox.querySelector('.field__country');
    const countrySelect = country.querySelector('select');
    countrySelect.addEventListener('click',handleClickСountry);
    function handleClickСountry(event){
        if( event.target.selectedIndex !== 0){
            event.target.classList.add('active');
            event.target.removeEventListener('click', handleClickСountry);
        }
    }
    //End Изменение цвета





    
}