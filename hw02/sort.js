let a = []
let min = 1
let max = 100

for(let i=0; i<100; i++) {
    a[i] = Math.floor(Math.random()*(max - min + 1) + min)
}
a.sort(compareNumber)
console.log(a)

function compareNumber(i, j) {
    return i-j
}