import { ChangeImgButton } from "./class.js"
import { flag } from "./load.js";
import { geoFindMe } from "./geo.js";


function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        resolve(console.log(flag));
    });
}
myAsyncFunction()

setTimeout(() => {
    console.log(flag);
}, 2000);

console.log(flag);
//Кнопки с заменной картинки
//Локализация
new ChangeImgButton(
    {
        a: 'static/img/png/en.png',
        b: 'static/img/png/ru.png',
        c: document.querySelector('.localization').children[0],
    }).starChange()

//Кнопки с заменной картинки
//Ночь/день

new ChangeImgButton(
    {
        a: 'static/img/png/night.png',
        b: 'static/img/png/day.png',
        c: document.querySelector('.localization').children[1],
    }).starChange()


const $BURGER = document.querySelector('.burger')

$BURGER.addEventListener('click', function () {
    for (let i = 0; i < this.children.length; i++) this.children[i].classList.toggle(`burger_active_b${i}`)
    document.querySelector('.header-bottom-burger').classList.toggle('header-bottom-burger-active')
})





//Геолокация запуск
//document.querySelector("#find-me").addEventListener("click", geoFindMe);