// Imports 
import React from 'react'
import { Box, Button, Center, FormControl, FormLabel, IconButton, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Tooltip } from "@chakra-ui/react"
import { IoFunnelOutline } from "react-icons/io5";
// Functions
export default function Filter({filter, setFilter}) {
    // initialisation des variables locales qui vont permettre la construction des valeurs à mettre en paramètres
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
    // Mise à jour d'un des paramètres
    const handleSelect = e => {
        setLocalFilter({...localFilter, [e.target.name]: e.target.value})
    }
    // Mise à jour d'un des paramètres
    const handleChangeLocalFilter = e => {
        setLocalFilter({...localFilter, [e.target.name]: e.target.value})
    }
    // Fonction pour utiliser le flèche vers le haut pour augmenter la valeur de l'input
    const incrementLocalFilter = e => {
        //console.log('+')
        let here = e.target
        let thisInputValue = here.closest('.chakra-numberinput').firstChild.value
        let thisInputName = here.closest('.chakra-numberinput').firstChild.getAttribute('name')
        setLocalFilter({...localFilter, [thisInputName]: thisInputValue})
    }
    // Fonction pour utiliser le flèche vers le bas pour diminuer la valeur de l'input
    const decrementLocalFilter = e => {
        //console.log('-')
        let here = e.target
        let thisInputValue = here.closest('.chakra-numberinput').firstChild.value
        let thisInputName = here.closest('.chakra-numberinput').firstChild.getAttribute('name')
        setLocalFilter({...localFilter, [thisInputName]: thisInputValue})
    }
    // initialisation d'autres variables locales qui vont permettre la construction des valeurs à mettre en paramètres
    let meal = ''
    let calorie = ''
    let times = ''
    let glucide = ''
    let lipide = ''
    let proteine = ''

    // On boucle dans localFilter et on retraite l'ensemble des lignes pour créer des variables temporaires
    // qui vont permettre de mettre à jour les paramètres via setFilter puis on remet à 0 les variables temporaires
    const ApplyFilters = () => {
        let optionValueWasMin = ''
        for (const [key, value] of Object.entries(localFilter)) {
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
                if(option.includes('min') && optionValue !== '' && optionValue !== '0') {
                    optionValueWasMin = optionValue
                    lipide = `${optionValue}+`
                } else if(option.includes('max') && optionValueWasMin !== '' && optionValue !== '' && optionValue !== '0') {
                    lipide = `${optionValueWasMin}-${optionValue}`
                    optionValueWasMin = ''
                } else if(optionValue === '0'){
                    optionValue =''
                    optionValueWasMin = ''
                } else {
                    lipide = lipide+`${optionValue}`
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
    // On réinitialise les paramètres
    const clearFilter = () => {
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
                Filter
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
                    Calories (Kcal/person)
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
                    Time (minutes)
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
                    Carbohydrate (gram)
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
                    Lipid (gram)
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
                    Protein (gram)
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
                    Apply
                </Button> 
            </Center>
        </Box>
    )
}