// Buatlah function untuk mencetak nilai n bilangan 
//Fibonacci: 0,1,1,2,3,5,8,13,21,34,...
// function name: fibonacci(n)
// Dengan variable n tipe data Integer
// return string fibonacci dengan delimiter “ ”(spasi)

const fibonacci_api = (req, res) =>{
    try {
        //jika tak ada kiriman body atau nilainya 0
        if(req.body.constructor === Object && Object.keys(req.body).length === 0 || req.body.n == 0) {
            res.statusMessage = " : Invalid Request"
            return res.status(400).json({
                "status": 400,
                "code": "400",
                "data": null,
                "message": "n is required"
            })
        } else {
            result = fibonacci(req.body.n);
        }

        hasil = {
            "result": result
        }

        res.statusMessage = "Success"
        return res.status(200).json({
            "status": 200,
            "code": "200",
            "data": hasil,
            "message": "Success"
        })
    } catch (err) {
        console.log(err);
    }
}

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

module.exports = fibonacci_api;