let person1 = [ ];
for(let i=0; i<10; i++) {
    person1[i] = { name: "홍길동", age: 16+i};
}

let person2 = Object.assign([ ], person1);
console.log(person2);