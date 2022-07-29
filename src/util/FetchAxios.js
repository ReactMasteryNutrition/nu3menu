// Import
import axios from "axios"

const qs = require('qs')


async function FetchAxios({thingSearched, filter}) {
    try {
        const params_01 = 'type=public&beta=true'
        let params_02 = `&q=${thingSearched}`
        const params_03 = '&app_id=9aa229ff&app_key=b0cc99c6ca952ed1d898610b97dece87'
        console.log('params_02 ==>',params_02)
        let url = 'https://api.edamam.com/api/recipes/v2?'
        //let endOfUrl = qs.stringify(params)
        //console.log('endOfUrl ==> ', endOfUrl)
        let urlFinal = url+params_01+params_02+params_03
        console.log('urlFinal ==> ', urlFinal)

        const response = await axios.get(urlFinal)
        return response
    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
            console.log(error.response.statuts)
            console.log(error.response.headers)
        } else if (error.request) {
            console.log(error.request)
        } else {
            console.log('Error : ', error.message)
        }
        console.log(error.config)
    }
}

export default  FetchAxios ;
