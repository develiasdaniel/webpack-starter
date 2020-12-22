import '../styles/index.scss';
import { Persona, Empleado } from '../modules/clases';
// console.log('webpack starterkit');

// console.log('hello dani')
// const carId=42;

// if (true) {
//     let cardId = 14
//     console.log('adentro',cardId)
// }
// console.log('afuera',cardId)

//REST PARAMETERS
// function sendCars(...allCarIds) {
//     allCarIds.forEach(id => console.log(id));
// }
// sendCars(100, 200, 300,'hola');

// let carIds = [1 ,2 ,5];
// let [car1, car2, car3] = carIds;
// console.log(car1, car2, car3);

// function starCars(car1, car2, car3) {
//     console.log(car1, car2, car3);
// }
// let carIds = [100, 200, 300];
// starCars(...carIds);
// let letters = 'fhfrh';
// starCars(...letters);

//TYPE OF
// console.log(typeof(1));
// console.log(typeof(true));
// console.log(typeof('Hello'));
// console.log(typeof(function(){}));
// console.log(typeof({}));
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof(NaN));

// let foo = 10;
// console.log(foo.toString());    
// console.log(Number.parseInt('55.45'));
// console.log(Number.parseFloat('55.4'));
// console.log(Number.parseFloat('55.4ASD'));

// let i = 0;
// for (; i < 12; i++) {
//     if (i === 8) {
//         break;
//     }
// }
// console.log(i);

// for (i = 0; i < 12; i++) {
//     if (i === 8) {
//         continue;
//     }
//     console.log(i);
// }


// function startCar(carId){
//     let message = 'Starting..'
//     let startFn = function turnKey(){
//         let message='override..'
//         console.log(message);
//     }
//     startFn();
//     console.log(message);
// }
// startCar(123);

//CLOSURES
// let app = (function () {
//     let cardId = 123;
//     let getId = function () {
//         return cardId;
//     }
//     let getData = function () {
//         return cardId + 10;
//     }

//     return {
//         get: getId,
//         data: getData
//     }
// })();
// console.log(app.get());

//"this" nos dice el contexto actual
// let fn = function () {
//     console.log(this === window);
// };
// fn();


//CAMBIO DE CONTEXTO
// let o = {
//     carId: 123,
//     getId: function () {
//         return this.carId;
//     }
// };
// console.log(o.getId());

// let newCar = {
//     carId: 456,
//     fun: function() {

//     }
// };
// console.log(o.getId.call(newCar));


// ARROW FUNCTION
// let app = (var1, var2) => {
//     return 1 + 1 + var1 + var2
// }
// console.log(app('INIT',' FIN'));


//VARIABLES POR DEFAULT
// let app = (var1, var2=' NY') => {
//     return 1 + 1 + var1 + var2
// }
// console.log(app(' INIT ',));

//function constructor: recibe un array de strings
// const sum = Function("a", "b", 'return a + b');
// const alert = Function('alert("Hola mundo")');
// console.log(sum(5, 6))



//PROTOTYPES
// function Person(first, last, age) {
//     this.name = {
//         'first': first,
//         'last': last
//     };
//     this.age = age;
//     this.bio = () => {
//         var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
//         alert(string);
//     };
//     this.greeting = () => {
//         alert('Hi! I\'m ' + this.name.first + '.');
//     };
// };

// var person1 = new Person('Daniel', 'Sanchez', 23);
// console.log('PROTOTYPE', person1.__proto__);

// let person2 = new person1.constructor('Karen', 'Stephenson', 26);
// console.log('PROTOTYPE', person2.__proto__);

// person1.bio();

// Person.prototype.farewell = function () {
//     alert(this.name.first + ' has left the building. Bye for now!');
// };

// Person.prototype.fullName = function () {
//     return this.name.first + ' ' + this.name.last;
// };

// console.log(person1.fullName());

// const array = ['hola,'mundo']
// const sum = Function("a", "b", 'return a + b');
// console.log(sum(...array));

//ARRAYS
let list = ['Orange', 'Apple'];
console.log(list);
console.log(list.length);
console.log(list[1]);

list.push('Avocado');
console.log(list);

list.pop();
console.log(list);

list.unshift('Pinnapple');
console.log(list);

list.shift();
console.log(list);

list.push('Avocado');
list.push('Banana');

list.forEach(fruit => {
    console.log('foreach', fruit);
});


let filterList = list.filter(fruit => {
    return fruit === 'Avocado' || fruit === 'Orange';
});

console.log('filter', filterList);


let forEachValid = true;
list.forEach(fruit => {
    if (fruit.length > 8) {
        forEachValid = false;
    }
});

console.log('ForEach', forEachValid);

console.log('Every', list.every(element => element.length < 8));

console.log('Every', list.every(element => {
    return element === 'Avocado';
}));
console.log('Every', list.every(element => {
    return element === 'Avocado' || element === 'Orange' || element === 'Apple' || element === 'Banana';
}));


//MAP    
let mapList = list.map(element => {
    if (element === 'Avocado') {
        return element = true;
    } else {
        return element = false;
    }
});
console.log(list);
console.log('Map', mapList);
mapList = list.map(element => element === 'Avocado');

let errorList = [];
list.forEach((fruit, index) => {
    if (fruit === 'Avocado') {
        errorList.push(index);
    }
});


const reduceList = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log('reduce', reduceList.reduce(reducer));

console.log(list.reduce((previous, current) => previous + ' ' + current));



class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.alto * this.ancho;
    }
}

const cuadrado = new Rectangulo(10, 10);
console.log('CLASS', cuadrado);
console.log('CLASS', cuadrado.area);
console.log('CLASS', cuadrado.alto);


// clases persona y empleado estan importados
// let persona1 = new Persona('Elias','Sanchez',23);
// console.log(persona1);
// persona1.bio();

// let empleado1 = new Empleado('Elias','Daniel',23,'trainee');
// console.log(empleado1);
// empleado1.bio();
// empleado1.greetingClient();



//MODULOS: MÉTODOS QUE OCUPAMOS CONSTANTEMENTE


//MANEJO DE ERRORES
try {
    throw new Error('¡Ups!');
} catch (e) {
    console.error('ERROR', e.name + ': ' + e.message);
} finally {
    console.log('ERROR END');
}

class CustomError extends Error {
    constructor(foo = 'bar', ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
        this.name = 'CustomError';
        this.foo = foo;
        this.date = new Date();
    }
}

try {
    throw new CustomError('baz', 'bazMessage');
} catch (e) {
    console.error(e.name);
    console.error(e.foo);
    console.error(e.message);
    console.error(e.stack);
} finally {
    console.log('CUSTOM ERROR END');
}


//PROMESAS
function createPromise(count) {
    let promise = new Promise((resolve, reject) => {
        try {
            if (!count) {
                resolve('Exito');
            } else {
                throw new CustomError('baz', 'bazMessage');
            }
        } catch (error) {
            reject(error.message);
        }
    });
    return promise;
}

let count = true;
export function checkPromise() {
    count = !count;
    console.log(count);
    createPromise(count).then((successMessage) => {
        console.log('RESOLVE', successMessage);
        alert(successMessage);
    }).catch((errorMessage) => {
        console.log('REJECT', errorMessage);
        alert(errorMessage);
    }).finally(() => {
        console.log('PROMISE END');
    });
}




//KATA DOJO
const arrayPersonas = [];
arrayPersonas.push(new Empleado('Daniel', 'Sanchez', 23, 'Trainee'));
arrayPersonas.push(new Empleado('Juan', 'Diaz', 25, 'Biologo'));
arrayPersonas.push(new Empleado('Keila', 'Mercedes', 25, 'Secretaria'));
arrayPersonas.push(new Empleado('Aurea', 'Lopez', 28, 'Maestra'));
arrayPersonas.push(new Empleado('Armando', 'urbina', 25, 'developer'));
arrayPersonas.push(new Empleado('Jorge', 'garcia', 25, 'Investigador'));

export function showData(table, array) {
    let body = document.getElementById(table);
    let tabla = document.createElement("table");
    let tblBody = document.createElement("tbody");
    body.innerHTML = '';
    let arrayShow = table === 'data-table-filter' ? array : arrayPersonas;

    for (let i = 0; i < arrayShow.length; i++) {
        let hilera = document.createElement("tr");
        const persona = arrayShow[i];
        for (const property in persona) {
            let celda = document.createElement("td");
            let textoCelda = property == 'name' 
                ? document.createTextNode(`${persona[property].first}, ${persona[property].last} `) 
                : textoCelda = document.createTextNode(`${persona[property]}`);        
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        let celdaBio = document.createElement("td");
        let btnBio = document.createElement("button");
        let celdaFarewell = document.createElement("td");
        let btnFarewell = document.createElement("button");
        let celdaSelect = document.createElement("td");
        let btnSelect = document.createElement("button");
        btnBio.innerText = ' Bio ';
        btnFarewell.innerText = ' Farewell ';
        btnSelect.innerText = ' Select ';
        celdaBio.appendChild(btnBio);
        hilera.appendChild(celdaBio);
        celdaFarewell.appendChild(btnFarewell);
        hilera.appendChild(celdaFarewell);
        celdaSelect.appendChild(btnSelect);
        hilera.appendChild(celdaSelect);
        tblBody.appendChild(hilera);
        
        let celdaTest= document.createElement("td");
        celdaTest.innerHTML += `<button onclick="app.funTest(${i})">Bio 2</button>`; 
        hilera.appendChild(celdaTest);
        
        btnBio.onclick = function () {
            persona.bio();
        };

        btnFarewell.onclick = function () {
            persona.greetingClient();
        };
        btnSelect.onclick = function () {
            document.getElementById("firstName").value = persona.name.first;
            document.getElementById("lastName").value = persona.name.last;
            document.getElementById("age").value = persona.age;
            document.getElementById("job").value = persona.puesto;
        };
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "1");
}

export function funTest(i){
    arrayPersonas[i].bio();
}

export function addData(isLast) {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const job = document.getElementById("job").value;
    if(!firstName || !lastName || !age || !job){
        alert("los campos no puede estar vacíos");
    }else{
        const newPerson = new Empleado(firstName, lastName, age, job);
        isLast ? arrayPersonas.push(newPerson) : arrayPersonas.unshift(newPerson);
    }
    showData('data-table');
}

export function deleteData(isLast) {
    isLast ? arrayPersonas.pop() : arrayPersonas.shift();
    showData('data-table');
}

export function filterData() {
    const ageFilter = document.getElementById("ageFilter").value;
    const arrayFilter = arrayPersonas.filter(element => element.age == ageFilter);
    showData('data-table-filter', arrayFilter);
}

let isError=false;
export function updateData(nombre = 'Daniel'){
    // checkPromise();
    isError = !isError;
    createPromise(isError).then((successMessage) => {
        console.log('RESOLVE', successMessage);
        alert(successMessage);
    }).catch((errorMessage) => {
        console.log('REJECT', errorMessage);
        alert(errorMessage);
    }).finally(() => {
        console.log('PROMISE END');
    });
}

showData('data-table');

