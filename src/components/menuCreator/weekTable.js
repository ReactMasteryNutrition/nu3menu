import {  Box, Tabs, TabList, Tab} from "@chakra-ui/react";
import React from "react";
import { CheckCircleIcon} from '@chakra-ui/icons'

export default function WeekTable({onIndexChange}){

    const [tabIndex, setTabIndex] = React.useState(0)
    
    const handleSliderChange = (event) => {
        setTabIndex(parseInt(event.target.value, 10))
    }

    const handleTabsChange = (index) => {
        setTabIndex(index)
        console.log('Normalement on met à jour le jour sélectionné')
    }

    React.useEffect(() => {
        onIndexChange(tabIndex)
        
    }, [tabIndex,onIndexChange])
    
    let week =  localStorage.getItem('week')
    let weekParse = JSON.parse(week) 


let lundiOk = typeof(weekParse.lundi.matin) === "object" && typeof(weekParse.lundi.deujeuner) === "object" && typeof(weekParse.lundi.diner) === "object";
let mardiOk = typeof(weekParse.mardi.matin) === "object" && typeof(weekParse.mardi.deujeuner) === "object" && typeof(weekParse.mardi.diner) === "object";
let mercrediOk = typeof(weekParse.mercredi.matin) === "object" && typeof(weekParse.mercredi.deujeuner) === "object" && typeof(weekParse.mercredi.diner) === "object";
let jeudiOk = typeof(weekParse.jeudi.matin) === "object" && typeof(weekParse.jeudi.deujeuner) === "object" && typeof(weekParse.jeudi.diner) === "object";
let vendrediOk = typeof(weekParse.vendredi.matin) === "object" && typeof(weekParse.vendredi.deujeuner) === "object" && typeof(weekParse.vendredi.diner) === "object";
let samediOk = typeof(weekParse.samedi.matin) === "object" && typeof(weekParse.samedi.deujeuner) === "object" && typeof(weekParse.samedi.diner) === "object";
let dimancheOk = typeof(weekParse.dimanche.matin) === "object" && typeof(weekParse.dimanche.deujeuner) === "object" && typeof(weekParse.dimanche.diner) === "object";

    return (
        <Box color={'green.400'} >
            <input
                type='range'
                min='0'
                max='6'
                value={tabIndex}
                onChange={handleSliderChange}
            />
            <Tabs orientation="vertical" index={tabIndex}  onChange={handleTabsChange} >
                <TabList >
                    <Tab value={0} >Lundi {lundiOk? <CheckCircleIcon/>: "choisi 3 recettes" }  </Tab>
                    <Tab value={1} >Mardi {mardiOk ? <CheckCircleIcon/>: "choisi 3 recettes"}</Tab>
                    <Tab value={2} >Mercredi {mercrediOk ? <CheckCircleIcon/>: "choisi 3 recettes"}</Tab>
                    <Tab value={3} >Jeudi {jeudiOk ? <CheckCircleIcon/>: "choisi 3 recettes"} </Tab>
                    <Tab value={4} >Vendredi {vendrediOk ? <CheckCircleIcon/>: "choisi 3 recettes"} </Tab>
                    <Tab value={5} >Samedi {samediOk ? <CheckCircleIcon/>: "choisi 3 recettes"} </Tab>
                    <Tab value={6} >Dimanche {dimancheOk ? <CheckCircleIcon/>: "choisi 3 recettes"}</Tab>
                </TabList>
              
            </Tabs>
        </Box>
        
)}

