// Imports 
import React from 'react'
import { Box, Button, Center, FormControl, FormLabel, IconButton, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Tooltip } from "@chakra-ui/react"
import { IoFunnelOutline } from "react-icons/io5";
// Functions
export default function Filter({filter, setFilter}) {
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

    const handleChangeLocalFilter = e => {
        setLocalFilter({...localFilter, [e.target.name]: e.target.value})
    }
    const incrementLocalFilter = e => {
        console.log('+')
        let here = e.target
        let thisInputValue = here.closest('.chakra-numberinput').firstChild.value
        let thisInputName = here.closest('.chakra-numberinput').firstChild.getAttribute('name')
        setLocalFilter({...localFilter, [thisInputName]: thisInputValue})
    }
    const decrementLocalFilter = e => {
        console.log('-')
        let here = e.target
        let thisInputValue = here.closest('.chakra-numberinput').firstChild.value
        let thisInputName = here.closest('.chakra-numberinput').firstChild.getAttribute('name')
        setLocalFilter({...localFilter, [thisInputName]: thisInputValue})
    }

    let calorie = ''
    let glucide = ''
    let lipide = ''
    let proteine = ''

    const ApplyFilters = () => {
        
        let optionValueWasMin = ''
        
        for (const [key, value] of Object.entries(localFilter)) {
            //console.log(`key : ${key} => value : ${value}`);
            let option = key.toString()
            let optionValue = value
            if(option.includes('calorie')) {
                if(option.includes('min')) {
                    optionValueWasMin = optionValue
                    calorie = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '') {
                    calorie = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else {
                    calorie = `${optionValue}`
                    optionValueWasMin = ''
                }
            }
            if(option.includes('carbohydrate')) {
                if(option.includes('min')) {
                    optionValueWasMin = optionValue
                    glucide = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '') {
                    glucide = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else {
                    glucide = `${optionValue}`
                    optionValueWasMin = ''
                }
            }
            if(option.includes('lipid')) {
                if(option.includes('min')) {
                    optionValueWasMin = optionValue
                    lipide = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '') {
                    lipide = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else {
                    lipide = `${optionValue}`
                    optionValueWasMin = ''
                }
            }
            if(option.includes('protein')) {
                if(option.includes('min')) {
                    optionValueWasMin = optionValue
                    proteine = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '') {
                    proteine = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else {
                    proteine = `${optionValue}`
                    optionValueWasMin = ''
                }
            }
        }
        setFilter({
            ...filter,
            calories: calorie,
            'nutrients[CHOCDF]': glucide,
            'nutrients[FAT]': lipide,
            'nutrients[PROCNT]': proteine,
        })
    }

    return(
        <Box w='18%' minWidth='17rem' bgColor='gray.400' padding='0.5rem' borderRightRadius='md' id='filterForm'>
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
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='calories_min' value={localFilter.calories_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='calories_max' value={localFilter.calories_max} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <FormLabel marginTop='0.5em'>
                    Glucides (gramme)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='carbohydrate_min' value={localFilter.carbohydrate_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='carbohydrate_max' value={localFilter.carbohydrate_max} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <FormLabel marginTop='0.5rem'>
                    Lipides (gramme)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='lipid_min' value={localFilter.lipid_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='lipid_max' value={localFilter.lipid_max} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <FormLabel marginTop='0.5rem'>
                    Protéines (gramme)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='protein_min' value={localFilter.protein_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%'>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='protein_max' value={localFilter.protein_max} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
            </FormControl>
            <Center marginTop='2rem'>
                <Button marginTop='0.5rem' bgColor='gray.800' color='green.50' _hover={{ bg: '#1A202C'}} _active={{ bg: '#1A202C'}} onClick={() =>ApplyFilters()}>
                    Appliquer
                </Button> 
            </Center>
        </Box>
    )
}