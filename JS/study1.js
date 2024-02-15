function sayHi() {
    console.log("Hi!");
}

sayHi();

var name = 'Matt';
console.log(window.name); // Matt

let age = 26;
console.log(window.age); //undefined


for (let i=0; i<5; ++i) {
    setTimeout( ()=> console.log(i), 0 );
}
console.log(i);

// 冒泡排序
