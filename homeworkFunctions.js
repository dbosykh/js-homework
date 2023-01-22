//1

function isThereEnoughFood(hamburger,fries){
    if(hamburger >= 4 && fries >= 1){
        console.log("Ми поїли")
    } else if (hamburger >= 4 && fries < 1 || hamburger < 4 && fries >= 1 || hamburger < 4 && fries < 1){
        console.log("Ми йдемо в інше кафе")
    }
} 

isThereEnoughFood(4,1);



//2

function checkPrice(price){
    if(price >= 1000 && price <= 1900){
        console.log("Знаходиться")
    } else {
        console.log("Не знаходиться")
    }
}

checkPrice(999);

  
//3

//перший варіант

function checkPrice2 (price2){
    if(price2 <= 1000 || price2 >= 1900){
        console.log("Не знаходиться")
    } else {
        console.log("Знаходиться")
    }
}

checkPrice2(10000);


//другий варіант

function checkPrice3 (price3){
    if(!(price3 >= 1000 && price3 <= 1900)){
        console.log("Не знаходиться")
    } else {
        console.log("Знаходиться")
    }
}

checkPrice3(1901);


//4

function checkTimeOfYear(timeOfYear){
    if(timeOfYear == 1){
        console.log("Winter")
    } else if(timeOfYear == 2){
        console.log("Spring")
    } else if(timeOfYear == 3){
        console.log("Summer")
    } else if(timeOfYear == 4){
        console.log("Autumn")
    } 
}

checkTimeOfYear(2);


//5

function findAvg(a,b,c){
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
}

findAvg(5,10,3)


//6

function whatDayOfTheWeek(dayOfTheWeek){
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
}

whatDayOfTheWeek(5);

//7

function calculate(op,num1,num2){
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
}
calculate('-',3,5)


//8

function replace(text,param1,param2){
    console.log(text.replace(param1,param2));
}
replace('World','o', '')


//9

function replaceEnding (m){
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
} else if(km % 10 == 1) {
    end2 = ''
} else if(km % 10 == 2 || km % 10 == 3 || km % 10 == 4) {
    end2 = 'и'
} else {
    end2 = 'ів'
}
console.log(m + ' метр%s це ' + km + ' кілометр%s', end1, end2)
}

replaceEnding(241000)

