// Buatlah function untuk menghitung kombinasi
// function name: combination(n,r)
// Dengan variable n,r dengan tipe data Integer

const combination_api = (req, res) =>{
    try {
        let hasil = {}
        //jika tak ada kiriman body atau masing masing n atau r bernilai 0
        if(req.body.constructor === Object && Object.keys(req.body).length === 0 || req.body.n == 0 || req.body.r == 0) {
            res.statusMessage = " : Invalid Request"
            return res.status(400).json({
                "status": 400,
                "code": "400",
                "data": null,
                "message": "n or r is required"
            })
        } else {
            result = combination(req.body.n, req.body.r);
        }

        if (result) {
            hasil = {
                "result": result
            }
        }

        res.statusMessage = " : Success"
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

module.exports = combination_api;