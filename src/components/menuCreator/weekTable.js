//Import
import React from "react";
import {  Box, Center, Tabs, TabList, Tab, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { CheckCircleIcon} from '@chakra-ui/icons'

export default function WeekTable({onIndexChange, weekMenu}){
    console.log('WEEKMENU ==== >',weekMenu)

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

    // initialisation des variables pour le useEffect plus bas
    const [number, setNumber] = React.useState(0)
    const [mondayNumber, setMondayNumber] = React.useState(0)
    const [tuesdayNumber, setTuesdayNumber] = React.useState(0)
    const [wednesdayNumber, setWednesdayNumber] = React.useState(0)
    const [thursdayNumber, setThursdayNumber] = React.useState(0)
    const [fridayNumber, setFridayNumber] = React.useState(0)
    const [saturdayNumber, setSaturdayNumber] = React.useState(0)
    const [sundayNumber, setSundayNumber] = React.useState(0)

    let numberValue = 0
    let mondayValue = 0
    let tuesdayValue = 0
    let wednesdayValue = 0
    let thursdayValue = 0
    let fridayValue = 0
    let saturdayValue = 0
    let sundayValue = 0
    // Cet useEffect va bouclé sur l'ensemble de weekMenu
    // Première boucle pour chaque jour
    // Seconde boucle pour chaque repas
    // On regarde s'il y a des repas non vides, si c'est le cas alors on augmente le % d'autant
    // Pour le total du menu et pour le total du jour
    // Cela va alimenter les progress bar
    React.useEffect(()=>{
        for (const [day, meals] of Object.entries(weekMenu)) {
            console.log(day)
            console.log(typeof(day))
            for( const [meal, thereIsARecipe] of Object.entries(meals)) {
                if(thereIsARecipe !== '') {
                    numberValue += 1
                    let updatedNumber = numberValue/21*100
                    setNumber(updatedNumber)
                    if(day === 'Lundi'){
                        mondayValue +=1
                        let updatedMonday = mondayValue/3*100
                        setMondayNumber(updatedMonday)
                    }
                    if(day === 'Mardi'){
                        tuesdayValue +=1
                        let updatedTuesday = tuesdayValue/3*100
                        setTuesdayNumber(updatedTuesday)
                    }
                    if(day === 'Mercredi'){
                        wednesdayValue +=1
                        let updatedWednesday = wednesdayValue/3*100
                        setWednesdayNumber(updatedWednesday)
                    }
                    if(day === 'Jeudi'){
                        thursdayValue +=1
                        let updatedThursday = thursdayValue/3*100
                        setThursdayNumber(updatedThursday)
                    }
                    if(day === 'Vendredi'){
                        fridayValue +=1
                        let updatedFriday = fridayValue/3*100
                        setFridayNumber(updatedFriday)
                    }
                    if(day === 'Samedi'){
                        saturdayValue +=1
                        let updatedSaturday = saturdayValue/3*100
                        setSaturdayNumber(updatedSaturday)
                    }
                    if(day === 'Dimanche'){
                        sundayValue +=1
                        let updatedSunday = sundayValue/3*100
                        setSundayNumber(updatedSunday)
                    }
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
                    <Tab value={0} justifyContent='space-between'>
                        Lundi
                        {mondayNumber === 100 ? <CheckCircleIcon ml='1rem'/> : <CircularProgress value={mondayNumber} color='green.600' size='2rem' ml='1rem'/>}
                    </Tab>
                    <Tab value={1} justifyContent='space-between'>
                        Mardi
                        {tuesdayNumber === 100 ? <CheckCircleIcon ml='1rem'/> : <CircularProgress value={tuesdayNumber} color='green.600' size='2rem' ml='1rem'/>}
                    </Tab>
                    <Tab value={2} justifyContent='space-between'>
                        Mercredi
                        {wednesdayNumber === 100 ? <CheckCircleIcon ml='1rem'/> : <CircularProgress value={wednesdayNumber} color='green.600' size='2rem' ml='1rem'/>}
                    </Tab>
                    <Tab value={3} justifyContent='space-between'>
                        Jeudi
                        {thursdayNumber === 100 ? <CheckCircleIcon ml='1rem'/> : <CircularProgress value={thursdayNumber} color='green.600' size='2rem' ml='1rem'/>}
                    </Tab>
                    <Tab value={4} justifyContent='space-between'>
                        Vendredi
                        {fridayNumber === 100 ? <CheckCircleIcon ml='1rem'/> : <CircularProgress value={fridayNumber} color='green.600' size='2rem' ml='1rem'/>}
                    </Tab>
                    <Tab value={5} justifyContent='space-between'>
                        Samedi
                        {saturdayNumber === 100 ? <CheckCircleIcon ml='1rem'/> : <CircularProgress value={saturdayNumber} color='green.600' size='2rem' ml='1rem'/>}
                    </Tab>
                    <Tab value={6} justifyContent='space-between'>
                        Dimanche
                        {sundayNumber === 100 ? <CheckCircleIcon ml='1rem'/> : <CircularProgress value={sundayNumber} color='green.600' size='2rem' ml='1rem'/>}
                    </Tab>
                </TabList>
            </Tabs>
        </Box>
        
)}

