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


const modals = document.querySelectorAll('.modal');
if(modals){
    document.onclick = function (e) {
        if(e.target.className == "_lock"){
    
            modals.forEach(el => {
                if (el.classList.contains('active')){
                    el.classList.remove('active');
                    document.body.classList.remove('_lock');
                }
            })
        }
    };
}



// modal error
const openModalError = document.querySelector('.open-modal__error');
if(openModalError){
    openModalError.addEventListener('click',()=>{
        const modalError = document.querySelector('.modal__error');
        modalError.classList.add('active');
        document.body.classList.add('_lock');
    });

    const closeModalError = document.querySelector('.modal__close-error');
    closeModalError.addEventListener('click', () =>{
        const modalError = document.querySelector('.modal__error');
        modalError.classList.remove('active');
        document.body.classList.remove('_lock');
    });
}
// end modal error


// modal info
const openModalInfo = document.querySelector('.open-modal__info');
const modalInfo = document.querySelector('.modal__info');
if(openModalInfo && modalInfo){
    openModalInfo.addEventListener('click',()=>{
        modalInfo.classList.add('active');
        document.body.classList.add('_lock');
    })
    
    const closeModalInfoNormal = document.querySelector('.modal-close__info');
    closeModalInfoNormal.addEventListener('click', () =>{
        modalInfo.classList.remove('active');
        document.body.classList.remove('_lock');
    })

}

// end modal info



// modal standart
const openModalStandart = document.querySelector('.open-modal__standart');
const modalStandart = document.querySelector('.modal__standart');
if(openModalStandart && modalStandart){
    openModalStandart.addEventListener('click',()=>{
        modalStandart.classList.add('active');
        document.body.classList.add('_lock');
    });

    const closeModalStandart = document.querySelector('.modal-close__standart');
    closeModalStandart.addEventListener('click', () =>{
        modalStandart.classList.remove('active');
        document.body.classList.remove('_lock');
    });
}
// end modal error




