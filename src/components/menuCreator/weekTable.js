//Import
import React from "react";
import {  Box, Center, Tabs, TabList, Tab, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { CheckCircleIcon} from '@chakra-ui/icons'

export default function WeekTable({onIndexChange, weekMenu}){
    // Gestion du jour de la semaine sélectionné en local
    const [tabIndex, setTabIndex] = React.useState(0)
    // Mise à jour du jour de la semaine sélectionné en local
    const handleTabsChange = (index) => {
        setTabIndex(index)
    }
    // Mise à jour du jour de la semaine sélectionné chez le parent quand la variable locale est mise à jour
    React.useEffect(() => {
        onIndexChange(tabIndex)
    }, [tabIndex,onIndexChange])

    // Cet useEffect va bouclé sur l'ensemble de weekMenu
    // Première boucle pour chaque jour
    // Seconde boucle pour chaque repas
    // On regarde s'il y a des repas non vides, si c'est le cas alors on augmente le % d'autant
    // Cela va alimenter la progress bar
    const [number, setNumber] = React.useState(0)
    let numberValue = 0
    React.useEffect(()=>{
        for (const [day, meals] of Object.entries(weekMenu)) {
            for( const [meal, thereIsARecipe] of Object.entries(meals)) {
                if(thereIsARecipe !== '') {
                    numberValue += 1
                    let updatedNumber = numberValue/21*100
                    setNumber(updatedNumber)
                }
            }
        }
    }, [weekMenu])
    
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
            <Center pb='2rem'>
                <CircularProgress value={number} color='green.600' size='4rem'>
                    <CircularProgressLabel>{Math.round(number)}%</CircularProgressLabel>
                </CircularProgress>
            </Center>
            <Tabs orientation="vertical" index={tabIndex}  onChange={handleTabsChange} >
                <TabList >
                    <Tab value={0} >Lundi {lundiOk ? <CheckCircleIcon/>: "choisi 3 recettes" }</Tab>
                    <Tab value={1} >Mardi {mardiOk ? <CheckCircleIcon/>: "choisi 3 recettes"}</Tab>
                    <Tab value={2} >Mercredi {mercrediOk ? <CheckCircleIcon/>: "choisi 3 recettes"}</Tab>
                    <Tab value={3} >Jeudi {jeudiOk ? <CheckCircleIcon/>: "choisi 3 recettes"} </Tab>
                    <Tab value={4} >Vendredi {vendrediOk ? <CheckCircleIcon/>: "choisi 3 recettes"}</Tab>
                    <Tab value={5} >Samedi {samediOk ? <CheckCircleIcon/>: "choisi 3 recettes"}</Tab>
                    <Tab value={6} >Dimanche {dimancheOk ? <CheckCircleIcon/>: "choisi 3 recettes"}</Tab>
                </TabList>
            </Tabs>
        </Box>
        
)}

