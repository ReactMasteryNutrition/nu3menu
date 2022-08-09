import {  Box, Tabs, TabPanel , TabPanels, TabList, Tab } from "@chakra-ui/react";
import React from "react";
import RepasBarre from "./repasBarre";
//import './joursBarre.css'


const JourBarre = ({onIndexChange}) => {

        const [tabIndex, setTabIndex] = React.useState(0)
        
        
        const handleSliderChange = (event) => {
          setTabIndex(parseInt(event.target.value, 10))
        }
      
        const handleTabsChange = (index) => {
          setTabIndex(index)
          onIndexChange(tabIndex)
        }

        console.log(`tabIdex   ${tabIndex}`)
      
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
              <TabPanels>
                <TabPanel>
                  <p>Choisis tes recettes du Lundi</p>
                  <RepasBarre/>
                </TabPanel>
                <TabPanel>
                  <p>Choisis tes recettes du Mardi</p>
                  <RepasBarre/>
                </TabPanel>
                <TabPanel>
                  <p>Choisis tes recettes du Mercredi</p>
                  <RepasBarre/>
                </TabPanel>
                <TabPanel>
                  <p>Choisis tes recette du Jeudi</p>
                  <RepasBarre/>
                </TabPanel>
                <TabPanel>
                  <p>Choisis tes recette du Vendredi</p>
                  <RepasBarre/>
                </TabPanel>
                <TabPanel>
                  <p>Choisis tes recette du Samedi</p>
                  <RepasBarre/>
                </TabPanel>
                <TabPanel>
                  <p>Choisis tes recette du Dimanche</p>
                  <RepasBarre/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          
)}

export default JourBarre;