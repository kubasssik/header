import { addArrFunctions } from "./class.js";

// Если true - ночная тема
export let flag = false

window.addEventListener('load', function(){
    if(localStorage.getItem('body-active') ) flag = true
   
    //Проверяет localStorage на наличие ночной темы
    localStorage.getItem('body-active') && addArrFunctions()
    

})

