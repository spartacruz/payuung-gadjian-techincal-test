//combination
// nilai n harus selalu lebih besar atau sama dengan dari r
//pilihan 3 masa ngepick 6 kan gamungkin
// nilai n dan r gabisa nol

function combination(n, r){
    let faktorial1 = 1
    let faktorial2 = 1
    let faktorial3 = 1
    let raw_faktorial3 = n - r
    let hasil = 0

    if (n - r == 0){
        raw_faktorial3 = 1
    }

    for (let i = 1; i <= n; i++){
        faktorial1 = faktorial1 * i
    }

    for (let i = 1; i <= r; i++){
        faktorial2 = faktorial2 * i
    }

    for (let i = 1; i <= raw_faktorial3; i++){
        faktorial3 = faktorial3 * i
    }

    hasil = faktorial1 / (faktorial2 * faktorial3)
    return hasil
}
const result = combination(100, 8)
console.log(typeof(result))
console.log(result)

//fibonacci
function fibonacci(n) {
    let simpan = ''
    let tampung1 = 0
    let tampung2 = 0
    let hasil = 0
    let deret_ke = n

    if (n == 1) {
        return simpan = '0'
    }

    if (n == 2) {
        return simpan = '0 1'
    }

    if (n == 3) {
        return simpan = '0 1 1'
    } else {
        simpan = '0 1 1'
        tampung1 = 1
        tampung2 = 1
    }

    for (let i = 4; i <= deret_ke; i++){
        //mulai dari 4
        hasil = tampung1 + tampung2
        //console.log(hasil)
        simpan = simpan + " " + hasil
        tampung1 = tampung2
        tampung2 = hasil
    }

    return simpan
}

// const result = fibonacci(11)
// console.log(result)