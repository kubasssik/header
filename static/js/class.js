//import { flag } from "./load.js";


//Меняет акртинки на кнопке: Локализация, скин
//Назначает класс "localization-active" и если он есть перезаписывает картинку на ru ( поумолчанию en)
/*-- 
Конструктор - 
а: картинка которая уже есть,
b: Картика на которую меняет,
c: Объект на котором срабатывает обработик 
--*/

export class ChangeImgButton {
    constructor(p) {
        this.img1 = p.a
        this.img2 = p.b
        this.el = p.c
    }
    starChange() {
        this.el.addEventListener('click', (event) => {
            const e = event.target
            
            e.classList.toggle('localization-active')
            
            e.src = this.img1
            if (e.classList.contains('localization-active')) e.src = this.img2
            
            
            if(e.alt === 'день'){
                //Меняет класс для Body: цвет тела, цвет текста
                addArrFunctions()
                //Добовляет/удаляет localStorage с значенеем темной темы
               // new LocalStorage({ a: 'body-active', b: 'body-active' }).start()
               //Добовляет/удаляет localStorage с значенеем картинке на кнопке день/ночь
               // new LocalStorage({ a: 'body-active-img', b: 'body-active-img' }).start()
            }
           
        })
    }
}

//Дополнительная функция 
//Меняет класс для Body: цвет тела, цвет текста
export function addArrFunctions(c = ['body-active', 'text-active']) {
    c.forEach(e => new ToggleObj({ a: document.body, b: e }).start());
    //меняет цвет всем <a> -ссылка
    document.querySelectorAll('a').forEach(e => new ToggleObj({ a: e, b: c[1] }).start())
}

//Добовляет/удаляет localStorage 
class LocalStorage {
    constructor(p) {
        this.a = p.a
        this.b = p.b
    }
    start() {
        if (localStorage.getItem(this.a)) localStorage.removeItem(this.a);
        else localStorage.setItem(this.a, this.b);
    }
}


/*--Дальше 3 связанных функции:class ToggleObj, addArrFunctions, class ChangeImgButton, --*/
//Меняет класс
//Конструктор - а: Обьект к которому применено,
//Конструктор - b: Класс,
class ToggleObj {
    constructor(p) {
        this.element = p.a
        this.class = p.b
    }
    start() {this.element.classList.toggle(this.class)}
}



