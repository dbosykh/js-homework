// //Ви прийшли в Макдональдз з трьома друзями.
// Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
// Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
// то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
// то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


let hamburger = 4;
let fries = 1;

if(hamburger >= 4 && fries >= 1){
    console.log("Ми поїли")
} else if (hamburger >= 4 && fries < 1 || hamburger < 4 && fries >= 1 || hamburger < 4 && fries < 1){
    console.log("Ми йдемо в інше кафе")
}


// //Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
// Результат виводити в консоль.

let price = 999;

if(price >= 1000 && price <= 1900){
    console.log("Знаходиться")
} else {
    console.log("Не знаходиться")
}
  
// //Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.

//перший варіант

let price2 = 10000;

if(price2 <= 1000 || price2 >= 1900){
    console.log("Не знаходиться")
} else {
    console.log("Знаходиться")
}

//другий варіант


let price3 = 1901;

if(!(price3 >= 1000 && price3 <= 1900)){
    console.log("Не знаходиться")
} else {
    console.log("Знаходиться")
}


// // За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
// Результат виводити в консоль.

let timeOfYear = 2;

if(timeOfYear == 1){
    console.log("Winter")
} else if(timeOfYear == 2){
    console.log("Spring")
} else if(timeOfYear == 3){
    console.log("Summer")
} else if(timeOfYear == 4){
    console.log("Autumn")
} 


// // Задано 3 числа (a, b, c), які не рівні між собою.
// Визначити середнє мід цими трьома числами
// (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
// Використати вкладені оператори if
// Результат виводити в консоль.

let a = 5;
let b = 10;
let c= 3;

if(a > b){
    if(a > c){
        if(b > c){
            console.log(b)
        } else{
            console.log(c)
        } 
    }
} else {
    if(b > c){
        if(a > c){
            console.log(a)
        } else{
            console.log(c)
        }
    } else {
        console.log(b)
    }
} 


// //Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.
// Результат виводити в консоль.

let dayOfTheWeek = 5;

switch(dayOfTheWeek){
    case 1:
        console.log("Понеділок")
        break;
    case 2:
        console.log("Вівторок")
        break;
    case 3:
        console.log("Середа")
        break;
    case 4:
        console.log("Четвер")
        break;
    case 5:
        console.log("П'ятниця")
        break;
    case 6:
        console.log("Субота")
        break;
    case 7:
        console.log("Неділя")
        break;
}

// //За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
// Математичні операції для обчислення: "+", "-", "*", "/".
// Результат виводити в консоль.


let op ='-';
let num1 = 3;
let num2 = 5;

switch(op){
    case '+':
        console.log(num1+num2)
        break;
    case '-':
        console.log(num1-num2)
        break;
    case '*':
        console.log(num1*num2)
        break;
    case '/':
        console.log(num1/num2)
        break;
}

//Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let text = 'World'

console.log(text.replace('o', ''));


// Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
// так щоб в консоль виводився результат обчислень з правильним закнченням.
// Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.


let m = 1574
let km = m/1000

let end1 = ''
let end2 = ''

if(m % 1 != 0) {
    end1 = 'a'
} else if(m % 10 == 1) {
    end1 = ''
} else if(m % 10 == 2 || m % 10 == 3 || m % 10 == 4) {
    end1 = 'и'
} else {
    end1 = 'ів'
} if(km % 1 != 0) {
    end2 = 'a'
} else if(m % 10 == 1) {
    end2 = ''
} else if(km % 10 == 2 || km % 10 == 3 || km % 10 == 4) {
    end2 = 'и'
} else {
    end2 = 'ів'
}
console.log(m + ' метр%s це ' + km + ' кілометр%s', end1, end2)

