let a = []
let min = 1
let max = 100

for(let i=0; i<100; i++) {
    a[i] = Math.floor(Math.random()*(max - min + 1) + min)
}

for(let i=0; i<a.length; i++) {
    if(a[i]%2 == 0) {
        a.splice(i, 1)
        i--
    }
}
console.log(a)