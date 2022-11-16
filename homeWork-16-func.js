//1
function func1 (a) {
    return a**2;
}
// console.log(func1(5)) ;

//2
function func2 (a, b) {
    return a + b;
}
// console.log(func2(7, 3));  

//3
function func3 (a, b, c) {
    return (a-b)/c;
}
// console.log(func3(10, 1, 3));

//4
function func4 (numberDay) {
    if (numberDay === 1) {
        console.log('Понедельник');
    } else if (numberDay === 2) {
        console.log('Вторник');
    } else if (numberDay === 3) {
        console.log('Среда');
    } else if (numberDay === 4) {
        console.log('Четверг');
    } else if (numberDay === 5) {
        console.log('Пятница');
    } else if (numberDay === 6) {
        console.log('Суббота');
    } else if (numberDay === 7) {
        console.log('Воскресенье');
    } else {
        console.log('Ошибка');
    }
}
// func4(1);

//5
function func5 (a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
// console.log(func5 (2, 2));

//6
function func6 (a, b) {
    if (a + b > 10) {
        return true;
    } else {
        return false;
    }
}
// console.log(func6 (4, 2));

//7
function func7 (a) {
    if (a < 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(func7 (-4));

//8
function isNumberInRange (a) {
    if (a > 0 && a < 10){
        return true;
    } else {
        return false;
    }
}
// console.log(isNumberInRange (12));

//9
let mas9 = [0, 1, 3, 11, 4, 5, 12];
let masNew9 = [];
for (i = 0; i <= mas9.length; i++) {
    if (isNumberInRange(mas9[i])) {
        masNew9.push(mas9[i]); //push добавляет (pop удаляет) элемент в конец массива (unshift - добавляет в начало (shift - удаляет)) 
    }
}
// console.log(masNew9);


//10
function getDigitsSum (a) {
    a = Array.from(String(a)).map(i=>Number(i));  //преобразуем число в строку, затем в массив
    let s = 0;  //переменная для вывода суммы цифр
    for (i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s;    
}
// console.log(getDigitsSum(119999686867898111));

//11
// for (let i = 1; i <= 2020; i++) {
//     if (getDigitsSum(i) === 13) {
//         console.log(i);
//     }
// }

//12
function isEven(a) {
    if (a%2 === 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(isEven(17)); 

//13
const mas13 = [0, 1, 3, 11, 4, 5, 12];
let masEven = [];
for (i = 0; i <= mas13.length; i++) {
    if (isEven(mas13[i])) {
        masEven.push(mas13[i]);
    }
}
// console.log(masEven);

//14
function getDivisors (a) {
    let masDenominator = [];
    for (i = 1; i <= a; i++) {
        if (a % i === 0) {
            masDenominator.push(i);
        }
    } return masDenominator;
}
//console.log(getDivisors(5));

//15 
let Num = 4949;
// используем функцию getDigitsSum из №10
do {
    Num = getDigitsSum (Num);
} while (getDigitsSum (Num) > 9)
//console.log(getDigitsSum (Num));
