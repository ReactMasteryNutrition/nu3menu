// Import
import React from "react"
import axios from "axios"
//import assert from "assert"
//let localData = []
//let nutrients = [CHOCDF = '', ]
const qs = require('qs')
//const assert = require('assert')


async function getRecipes (filter) {
    try {
        let params = filter
        console.log('params ==>',params)
        let url = 'https://api.edamam.com/api/recipes/v2?'
        let endOfUrl = qs.stringify(params)
        console.log('endOfUrl ==> ', endOfUrl)
        let urlFinal = url+endOfUrl
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

export { getRecipes, qs};
