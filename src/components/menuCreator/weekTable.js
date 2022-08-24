import {  Box, Center, Tabs, TabList, Tab, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React from "react";

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

    return (
        <Box color={'green.400'} >
            <Center pb='2rem'>
                <CircularProgress value={number} color='green.600' size='4rem'>
                    <CircularProgressLabel>{Math.round(number)}%</CircularProgressLabel>
                </CircularProgress>
            </Center>
            <Tabs orientation="vertical" index={tabIndex}  onChange={handleTabsChange} >
                <TabList >
                    <Tab value={0} >Lundi</Tab>
                    <Tab value={1} >Mardi</Tab>
                    <Tab value={2} >Mercredi</Tab>
                    <Tab value={3} >Jeudi</Tab>
                    <Tab value={4} >Vendredi</Tab>
                    <Tab value={5} >Samedi</Tab>
                    <Tab value={6} >Dimanche</Tab>
                </TabList>
            </Tabs>
        </Box>
        
)}

