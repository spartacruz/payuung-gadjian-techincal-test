import axios from "axios";

async function countries() {
    let data = true
    const res = await axios.get('https://restcountries.com/v3.1/allq').catch(
        function (error) {
            if (error){
                data = false
            }
        }
    )

    if (!data) {
        return data
    }

    //console.log(res.data)
    //console.log(res.data[0])
    // console.log(res.data[0]['name']['official'])
    // console.log(res.data[0]['region'])
    // console.log(res.data[0]['timezones'])
    let len_obj = Object.keys(res.data).length

    // console.log(len_obj)
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

const yuri = countries()
yuri.then((result) =>{
    console.log(result)
})