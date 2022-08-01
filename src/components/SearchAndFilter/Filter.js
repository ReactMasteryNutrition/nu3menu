// Imports 
import React from 'react'
import { Box, Button, Center, FormControl, FormLabel, IconButton, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Tooltip } from "@chakra-ui/react"
import { IoFunnelOutline } from "react-icons/io5";
// Functions
export default function Filter({filter, setFilter}) {
    const [localFilter, setLocalFilter,] = React.useState({
        meal_type: '',
        calories_min: '',
        calories_max: '',
        times_min: '',
        times_max: '',
        carbohydrate_min: '',
        carbohydrate_max: '',
        lipid_min: '',
        lipid_max: '',
        protein_min: '',
        protein_max: '',
    })

    const handleSelect = e => {
        setLocalFilter({...localFilter, [e.target.name]: e.target.value})
    }

    const handleChangeLocalFilter = e => {
        setLocalFilter({...localFilter, [e.target.name]: e.target.value})
    }
    const incrementLocalFilter = e => {
        //console.log('+')
        let here = e.target
        let thisInputValue = here.closest('.chakra-numberinput').firstChild.value
        let thisInputName = here.closest('.chakra-numberinput').firstChild.getAttribute('name')
        setLocalFilter({...localFilter, [thisInputName]: thisInputValue})
    }
    const decrementLocalFilter = e => {
        //console.log('-')
        let here = e.target
        let thisInputValue = here.closest('.chakra-numberinput').firstChild.value
        let thisInputName = here.closest('.chakra-numberinput').firstChild.getAttribute('name')
        setLocalFilter({...localFilter, [thisInputName]: thisInputValue})
    }

    let meal = ''
    let calorie = ''
    let times = ''
    let glucide = ''
    let lipide = ''
    let proteine = ''

    const ApplyFilters = () => {
        
        console.log(localFilter)

        let optionValueWasMin = ''
        
        for (const [key, value] of Object.entries(localFilter)) {
            //console.log(`key : ${key} => value : ${value}`);
            let option = key.toString()
            let optionValue = value
            if(option.includes('meal')) {
                meal = optionValue
            }
            if(option.includes('calorie')) {
                if(option.includes('min') && optionValue !== '' && optionValue !== '0') {
                    optionValueWasMin = optionValue
                    calorie = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '' && optionValue !== '' && optionValue !== '0') {
                    calorie = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else if(optionValue === '0'){
                    optionValue =''
                    optionValueWasMin = ''
                }  else {
                    calorie = calorie+`${optionValue}`
                    optionValueWasMin = ''
                }
            }
            if(option.includes('time')) {
                if(option.includes('min') && optionValue !== '' && optionValue !== '0') {
                    optionValueWasMin = optionValue
                    times = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '' && optionValue !== '' && optionValue !== '0') {
                    times = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else if(optionValue === '0'){
                    optionValue =''
                    optionValueWasMin = ''
                }  else {
                    times = times+`${optionValue}`
                    optionValueWasMin = ''
                }
            }
            if(option.includes('carbohydrate')) {
                if(option.includes('min') && optionValue !== '' && optionValue !== '0') {
                    optionValueWasMin = optionValue
                    glucide = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '' && optionValue !== '' && optionValue !== '0') {
                    glucide = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else if(optionValue === '0'){
                    optionValue =''
                    optionValueWasMin = ''
                } else {
                    glucide = glucide+`${optionValue}`
                    optionValueWasMin = ''
                }
            }
            if(option.includes('lipid')) {
                // console.log(optionValueWasMin)
                // console.log('OptionValueWasMin ! == vide c-a-d il existe déjà une valeur min')
                // console.log(optionValueWasMin !== '')
                // console.log('optionValue !== vide c-a-d la valeur min est vide')
                // console.log(optionValue !== '')
                // console.log('optionValue ==> ')
                // console.log(optionValue)
                if(option.includes('min') && optionValue !== '' && optionValue !== '0') {
                    optionValueWasMin = optionValue
                    lipide = `${optionValue}+`
                    console.log('on met à jour la valeur min de lipide')
                } else if(option.includes('max') && optionValueWasMin !== '' && optionValue !== '' && optionValue !== '0') {
                    // console.log(optionValueWasMin)
                    // console.log(optionValueWasMin !== '')
                    // console.log("Je suis une Range Value")
                    lipide = `${optionValueWasMin}-${optionValue}`
                    // console.log('on met à jour la valeur min-max de lipide')
                    optionValueWasMin = ''
                } else if(optionValue === '0'){
                    optionValue =''
                    optionValueWasMin = ''
                } else {
                    lipide = lipide+`${optionValue}`
                    // console.log('on met à jour la valeur max de lipide')
                    optionValueWasMin = ''
                }
            }
            if(option.includes('protein')) {
                if(option.includes('min') && optionValue !== '' && optionValue !== '0') {
                    optionValueWasMin = optionValue
                    proteine = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '' && optionValue !== '' && optionValue !== '0') {
                    proteine = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else if(optionValue === '0'){
                    optionValue =''
                    optionValueWasMin = ''
                } else {
                    proteine = proteine+`${optionValue}`
                    optionValueWasMin = ''
                }
            }
        }
        
        setFilter({
            ...filter,
            mealType: meal,
            calories: calorie,
            time: times,
            'nutrients[CHOCDF]': glucide,
            'nutrients[FAT]': lipide,
            'nutrients[PROCNT]': proteine,
        })
        meal=''
        calorie =''
        times =''
        glucide =''
        lipide=''
        proteine=''
    }

    const clearFilter = () => {
        console.log('On clear les filtres')
        setFilter({
            type: 'public',
            beta: 'true',
            q: filter.q, //recipe => mot clé recherché
            app_id: '9aa229ff',
            app_key: 'b0cc99c6ca952ed1d898610b97dece87',
        })
    }

    return(
        <Box minWidth='17rem' bgColor='gray.400' padding='2rem' borderRightRadius='md' id='filterForm'>
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
                        onClick={() => clearFilter()}
                    />
                </Tooltip>
            </Center>
            <FormControl>
                <FormLabel>
                    Meal type
                </FormLabel>
                <Select name='meal_type' value={localFilter.meal_type} placeholder='Breakfast, Lunch, ...' bgColor='green.50' borderColor='gray.800' onChange={e => handleSelect(e)}>
                    <option value='Breakfast'>Breakfast</option>
                    <option value='Dinner'>Dinner</option>
                    <option value='Lunch'>Lunch</option>
                    <option value='Snack'>Snack</option>
                    <option value='Teatime'>Teatime</option>
                </Select>
                <FormLabel marginTop='0.5em'>
                    Calories (Kcal/personnes)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='calories_min' value={localFilter.calories_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='calories_max' value={localFilter.calories_max} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <FormLabel marginTop='0.5em'>
                    Durée (minute)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='times_min' value={localFilter.times_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='times_max' value={localFilter.times_max} onChange={e => handleChangeLocalFilter(e)}/>
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
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='carbohydrate_min' value={localFilter.carbohydrate_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
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
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='lipid_min' value={localFilter.lipid_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
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
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='protein_min' value={localFilter.protein_min} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
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