import React from "react"
import {CheckIcon} from "@chakra-ui/icons"

import { FormControl, FormLabel, Select, Text } from "@chakra-ui/react";

export default function MealCategory({onCategoryChange, weekMenu, index}){

    const [category, setCategory] = React.useState("")

    const [matinChecked, setMatinChecked] = React.useState(false)
    const [midiChecked, setMidiChecked] = React.useState(false)
    const [soirChecked, setSoirChecked] = React.useState(false)
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    
    React.useEffect(() => {
        onCategoryChange(category)
        //console.log('useEffect pour mettre à jour le MEAL dans MenuCreator via onCategoryChange()')
    }, [category, onCategoryChange])

    //onCategoryChange(category)

    React.useEffect(()=>{
        setMatinChecked(false)
        setMidiChecked(false)
        setSoirChecked(false)
        let day = null
        switch (index) {
            case 0:
                day = "Lundi"
                break;
            case 1:
                day = "Mardi"
                break;
            case 2:
                day = "Mercredi"
                break;
            case 3:
                day = "Jeudi"
                break;
            case 4:
                day = "Vendredi"
                break;
            case 5:
                day = "Samedi"
                break;
            case 6:
                day = "Dimanche"
                break;
            default:
                break;
        }
        // console.log(day)
        // console.log('on essaie de lire weekMenu + day : ',weekMenu[day])
        Object.entries(weekMenu[day]).map(meal => {
            if(meal[1] !== ''){
                if(meal[0] === 'Matin'){
                    // console.log('Matin est OK ; ', meal[0])
                    setMatinChecked(true)
                }
                if(meal[0] === 'Déjeuner'){
                    // console.log('Déjeuner est OK ; ', meal[0])
                    setMidiChecked(true)
                }
                if(meal[0] === 'Dîner'){
                    // console.log('Dîner est OK ; ', meal[0])
                    setSoirChecked(true)
                }
            }
            return null
        })
    },[weekMenu, index])

    return (
        <FormControl display={"flex"} flexDirection={"column"} alignItems={"center"} marginBottom={"3"} color={"green.400"} px={['','1rem']} w={['100%', '100%', '60%']}>
            <FormLabel>Category</FormLabel>
            <Select w='100%' value={category} onChange={handleCategoryChange} placeholder='Select your meal choice'>
                {matinChecked ? <option value="Matin">Petit-déjeuner &#x2713;</option> : <option value="Matin">Petit-déjeuner</option>}
                {midiChecked ? <option value="Déjeuner">Déjeuner &#x2713;</option> : <option value="Déjeuner">Déjeuner</option>}
                {soirChecked ? <option value="Dîner">Dîner &#x2713;</option> : <option value="Dîner">Dîner</option>}
            </Select>
        </FormControl>
    )
}