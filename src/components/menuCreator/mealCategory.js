import React from "react"

import { FormControl, FormLabel, Select } from "@chakra-ui/react";

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
    }, [category, onCategoryChange])

    React.useEffect(()=>{
        setMatinChecked(false)
        setMidiChecked(false)
        setSoirChecked(false)
        let day = null
        switch (index) {
            case 0:
                day = "Monday"
                break;
            case 1:
                day = "Tuesday"
                break;
            case 2:
                day = "Wednesday"
                break;
            case 3:
                day = "Thursday"
                break;
            case 4:
                day = "Friday"
                break;
            case 5:
                day = "Saturday"
                break;
            case 6:
                day = "Sunday"
                break;
            default:
                break;
        }
        
        Object.entries(weekMenu[day]).map(meal => {
            if(meal[1] !== ''){
                if(meal[0] === 'Breakfast'){
                    setMatinChecked(true)
                }
                if(meal[0] === 'Lunch'){
                    setMidiChecked(true)
                }
                if(meal[0] === 'Diner'){
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
                {matinChecked ? <option value="Breakfast">Breakfast &#x2713;</option> : <option value="Breakfast">Breakfast</option>}
                {midiChecked ? <option value="Lunch">Lunch &#x2713;</option> : <option value="Lunch">Lunch</option>}
                {soirChecked ? <option value="Diner">Diner &#x2713;</option> : <option value="Diner">Diner</option>}
            </Select>
        </FormControl>
    )
}