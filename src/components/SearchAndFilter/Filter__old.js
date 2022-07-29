// Imports 
import React from 'react'
import { Box, Button, Center, FormControl, FormLabel, IconButton, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Tooltip } from "@chakra-ui/react"
import { IoFunnelOutline } from "react-icons/io5";
// Functions
export function Filter__old({handleFilter}) {
    const [localFilter, setLocalFilter,] = React.useState({
        calories_min: '',
        calories_max: '',
        carbohydrate_min: '',
        carbohydrate_max: '',
        lipid_min: '',
        lipid_max: '',
        protein_min: '',
        protein_max: '',
    })

    const [reprocessFilter, setReprocessFilter] = React.useState({
        calories: '',
        'nutrients[CHOCDF]': '', // glucide
        'nutrients[FAT]': '', // lipide
        'nutrients[PROCNT]': '', // proteine
    })

    const onChangeFilter = (truc) => handleFilter(truc)


    const SubmitFilter = () => {
        console.log('On lance la fonction Submit Filter')
        // Traitement calorie
        if(localFilter.calories_min && (localFilter.calories_min.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, calories: `${localFilter.calories_min}+`})
        } 
        if(localFilter.calories_max && (localFilter.calories_max.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, calories: `${localFilter.calories_max}`})
        } 
        if(localFilter.calories_min && (localFilter.calories_min.trim().length !==0) && localFilter.calories_max && (localFilter.calories_max.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, calories: `${localFilter.calories_min}-${localFilter.calories_max}`})
        } // else {
        //     setReprocessFilter({...reprocessFilter, calories: ''})
        // }
        // Traitement carbohydrate = glucide
        if(localFilter.carbohydrate_min && (localFilter.carbohydrate_min.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[CHOCDF]': `${localFilter.carbohydrate_min}+`})
        } else if(localFilter.carbohydrate_max && (localFilter.carbohydrate_max.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[CHOCDF]': `${localFilter.carbohydrate_max}`})
        } else if(localFilter.carbohydrate_min && (localFilter.carbohydrate_min.trim().length !==0) && localFilter.carbohydrate_max && (localFilter.carbohydrate_max.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[CHOCDF]': `${localFilter.carbohydrate_min}-${localFilter.carbohydrate_max}`})
        } // else {
        //     setReprocessFilter({...reprocessFilter, 'nutrients[CHOCDF]': ''})
        // }
        // Traitement lipide
        if(localFilter.lipid_min && (localFilter.lipid_min.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[FAT]': `${localFilter.lipid_min}+`})
        } else if(localFilter.lipid_max && (localFilter.lipid_max.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[FAT]': `${localFilter.lipid_max}`})
        }
        if(localFilter.lipid_min && (localFilter.lipid_min.trim().length !==0) && localFilter.lipid_max && (localFilter.lipid_max.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[FAT]': `${localFilter.lipid_min}-${localFilter.lipid_max}`})
        } // else {
        //     setReprocessFilter({...reprocessFilter, 'nutrients[FAT]': ''})
        // }
        // Traitement protéine
        if(localFilter.protein_min && (localFilter.protein_min.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[PROCNT]': `${localFilter.protein_min}+`})
        }
        if(localFilter.protein_max && (localFilter.protein_max.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[PROCNT]': `${localFilter.protein_max}`})
        }
        if(localFilter.protein_min && (localFilter.protein_min.trim().length !==0) && localFilter.protein_max && (localFilter.protein_max.trim().length !==0)) {
            setReprocessFilter({...reprocessFilter, 'nutrients[PROCNT]': `${localFilter.protein_min}-${localFilter.protein_max}`})
        } //else {
        //     setReprocessFilter({...reprocessFilter, 'nutrients[PROCNT]': ''})
        // }

        console.log('localFilter : ', localFilter)
        console.log('reprocessFilter après if else: ')
        console.log(reprocessFilter)
        // contrôle et suppression des filtres inutiles car vides
        if(reprocessFilter){
            let temporaryFilter = [reprocessFilter]
            temporaryFilter.map(occurence => {
                console.log(occurence.length)
                if(occurence.length === 0){
                    console.log('on supprime la ligne ', occurence)
                    delete temporaryFilter[occurence];
                }
                return temporaryFilter
            })
            console.log('Temporary Filter : ')
            console.log(temporaryFilter)
            setReprocessFilter(temporaryFilter)
            //setReprocessFilter(reprocessFilter)
            console.log('reprocessFilter avant envoi des données : ')
            console.log(reprocessFilter)
            onChangeFilter(reprocessFilter)
        }
    }

    return(
        <Box w='18%' minWidth='17rem' bgColor='gray.400' padding='0.5rem' borderRightRadius='md'>
            <Center marginBottom='2rem'>
                Filtre
                <Tooltip label='Réinitialiser'>
                    <IconButton
                        _hover={{ bg: '#1A202C'}}
                        _active={{ bg: '#1A202C'}}
                        bgColor='gray.800'
                        color='green.50'
                        icon={<IoFunnelOutline/>}
                        marginLeft='1rem'
                    />
                </Tooltip>
            </Center>
            <FormControl>
                <FormLabel>
                    Calories (Kcal/personnes)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='calorie_min' value={localFilter.calories_min} onChange={e => setLocalFilter(e.target.value)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800'/>
                            <NumberDecrementStepper borderColor='gray.800'/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='calorie_max' value={localFilter.calories_max} onChange={e => setLocalFilter(e.target.value)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800'/>
                            <NumberDecrementStepper borderColor='gray.800'/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <FormLabel marginTop='0.5em'>
                    Glucides (gramme)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='carbohydrate_min' value={localFilter.carbohydrate_min} onChange={e => setLocalFilter(e.target.value)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800'/>
                            <NumberDecrementStepper borderColor='gray.800'/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='carbohydrate_max' value={localFilter.carbohydrate_max} onChange={e => setLocalFilter(e.target.value)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800'/>
                            <NumberDecrementStepper borderColor='gray.800'/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <FormLabel marginTop='0.5rem'>
                    Lipides (gramme)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='lipid_min' value={localFilter.lipid_min} onChange={e => setLocalFilter(e.target.value)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800'/>
                            <NumberDecrementStepper borderColor='gray.800'/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='lipid_max' value={localFilter.lipid_max} onChange={e => setLocalFilter(e.target.value)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800'/>
                            <NumberDecrementStepper borderColor='gray.800'/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <FormLabel marginTop='0.5rem'>
                    Protéines (gramme)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='protein_min' value={localFilter.protein_min} onChange={e => setLocalFilter(e.target.value)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800'/>
                            <NumberDecrementStepper borderColor='gray.800'/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='protein_max' value={localFilter.protein_max} onChange={e => setLocalFilter(e.target.value)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800'/>
                            <NumberDecrementStepper borderColor='gray.800'/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
            </FormControl>
            <Center marginTop='2rem'>
                <Button marginTop='0.5rem' bgColor='gray.800' color='green.50' _hover={{ bg: '#1A202C'}} _active={{ bg: '#1A202C'}} onClick={() =>SubmitFilter()}>
                    Appliquer
                </Button> 
            </Center>
        </Box>
    )
}