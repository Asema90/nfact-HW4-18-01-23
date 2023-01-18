
// 1 задание
function checkAge(age) {
    let answer = (age>18) ? true: confirm('Родители разрешили?');
    return answer;
  }


// 2 задание
function pow(x,n){
    return x**n;
}

// 3 задание

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

// 4 задание

let arr = [5, 2, 1, -10, 8];

arr.sort((a,b) => b-a)

// 5 задание

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1= [ vasya1, petya1, masha1 ];

let names = users1.map(item => item.name);

// 6  задание

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

// 7 задание

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr2 = [ vasya2, petya2, masha2 ];

function getAverageAge(users){
    let sum=0;
    for (let i in users){
        sum+=users[i].age;
    }

    return (sum/users.length)
}

//alert( getAverageAge(arr2) ); // (25 + 30 + 29) / 3 = 28


