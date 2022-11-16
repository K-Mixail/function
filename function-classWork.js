const userOne = {
    role: 'admin',
    firstname: 'Дмитрий',
}

const userTwo = {
    role: 'manager',
    firstname: 'Артем',
}

function checkAccess (user, role = 'admin') {  //role = 'admin' - значение по умолчанию, если роль не была передана, или бчла передана как undefined 
    if (user.role === role) {
        return true;
    }
    return false;
    // можно записать короче user.role === role т.к. проверка будет по умолчанию в ===
}

function showSuccessMessage (user) {
    console.log(` Доступ открыт ${user.firstname} `);
}

function showErrorMessage (user) {
    console.log(`Для вас ${user.firstname} доступ закрыт`);
}

// if (checkAccess(userOne, 'admin')) {
//     showSuccessMessage(userOne);
// } else {
//     showErrorMessage (userOne);
// }

function checkAccessAndShowMessage (user, role) {
    if (checkAccess(user, role)) {
        showSuccessMessage(user);
    } 
}

checkAccessAndShowMessage(userOne, 'admin');
checkAccessAndShowMessage(userTwo, 'manager');



let userName = 'Дмитрий1';
function showUserName (userName='гость') {
    console.log(`Привет, ${userName}`);
}
showUserName (userName);

// let a = 5;
// let b = 3;
// function test (a, b) {
//     console.log(a**b);
// }
// test (a,b);

// let messiv = [2,4,6];
// function medium (messiv) {
//     for (messiv) {}
//     //console.log(messiv[1]);
// }
// medium (messiv)


const sayHi = () => {console.log('Hello');}
let i=0;
while (i<5) {i=i+1; sayHi()};

let a = 5;
let b = 3;
function test (a, b) {
    console.log(a**b);
}
test (a,b);
for(let i=0; i<5; i++) {console.log(test (a,b))
}