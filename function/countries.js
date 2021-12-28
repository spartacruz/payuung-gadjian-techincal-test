// Buat API untuk mengambil data Negara dari API Public https://restcountries.eu/rest/v2/all, 
// kemudian ambil parameter name, region dan timezones, untuk ambil datanya bisa menggunakan library Axios

//Berdasarkan pencarian google, https://restcountries.eu sudah berubah menjadi https://restcountries.com
//Berdasarkan pencarian google, https://restcountries.eu sudah berubah menjadi https://restcountries.com
//Berdasarkan pencarian google, https://restcountries.eu sudah berubah menjadi https://restcountries.com
const axios = require('axios')

const countries_api = async (req, res) =>{
    try {
        const negara = await countries()
        
        if(!negara) {
            res.statusMessage = " : Fail Get Countries From https://restcountries.com"
            return res.status(400).json({
                "status": 400,
                "code": "400",
                "data": null,
                "message": "Something Went Wrong"
            })
        }

        res.statusMessage = " : Success"
        return res.status(200).json({
            "status": 200,
            "code": "200",
            "data": negara,
            "message": " : Success"
        })
    } catch (err) {
        console.log(err);
    }
}

async function countries() {
    let data = true
    const res = await axios.get('https://restcountries.com/v3.1/all').catch(
        function (error) {
            if (error){
                data = false
            }
        }
    )

    if (!data) {
        return data
    }

    let len_obj = Object.keys(res.data).length
    let collect = []

    for (let i = 0; i < len_obj; i++){
        const isinya = [{
            "name": res.data[i]['name']['official'],
            "region": res.data[i]['region'],
            "timezones": res.data[i]['timezones']
        }]
        collect = collect.concat(isinya)
    }
    return collect
}

module.exports = countries_api