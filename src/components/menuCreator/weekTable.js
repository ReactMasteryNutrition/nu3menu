import {  Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import React from "react";

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

