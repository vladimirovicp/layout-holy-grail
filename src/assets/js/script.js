
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

    const country = registerBox.querySelector('.field__country');
    const countrySelect = country.querySelector('select');

    // countrySelect.addEventListener('click', (event) => {
    //     console.log(event.target.selectedIndex)
    //     if( event.target.selectedIndex !== 0){
    //         event.target.classList.add('active');
    //     }
    // });

    countrySelect.addEventListener('click',handleClickСountry);
    function handleClickСountry(event){
        if( event.target.selectedIndex !== 0){
            event.target.classList.add('active');
            event.target.removeEventListener('click', handleClickСountry);
        }
    }





    
}