// Imports 
import React from 'react'
import { Box, Button, Center, FormControl, FormLabel, IconButton, InputGroup, InputLeftAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Tooltip } from "@chakra-ui/react"
import { IoFunnelOutline } from "react-icons/io5";
// Functions
export default function FilterParams({filter, setFilter}) {
    // initialisation des variables locales qui vont permettre la construction des valeurs à mettre en paramètres
    const [localFilter, setLocalFilter,] = React.useState({
        maxReadyTime: '',
        intolerances: '',
        diet: '',
        minCalories: '',
        maxCalories: '',
        minCarbs: '',
        maxCarbs: '',
        minFat: '',
        maxFat: '',
        minProtein: '',
        maxProtein: '',
    })
    // Mise à jour d'un des paramètres
    const handleSelect = e => {
        setLocalFilter({...localFilter, [e.target.name]: e.target.value})
    }
    // Mise à jour d'un des paramètres
    const handleChangeLocalFilter = e => {
        //console.log(e)
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
    React.useEffect(() => {
        console.log('LocalFilter : ')
        console.log(localFilter)
    },[localFilter])

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
    //
    const apply = () => {
        console.log(localFilter)
        // let filterFinal = {}
        for (const [key, value] of Object.entries(localFilter)) {
            if(value !=='' && value !=='0'){
                console.log('NON vide pour : ', key)
                console.log(value)
                setFilter(prevState => ({
                    ...prevState,
                    [key] : value
                }))
            } else {
                console.log('Cette clé est vide : ', key)
            }
        }
    }
    // On réinitialise les paramètres
    const clearFilter = () => {
        setFilter({
            apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
            fillIngredients: true, 
            addRecipeInformation: true, 
            addRecipeNutrition: true, 
            number: 20,
            query: filter.query, //recipe => mot clé recherché
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
                    Duration Max (Minutes)
                </FormLabel>
                <NumberInput borderColor='gray.800' w='100%' min={0}>
                    <NumberInputField
                        bgColor='green.50'
                        name='maxReadyTime'
                        value={localFilter.maxReadyTime}
                        onChange={e => handleChangeLocalFilter(e)}
                    />
                    <NumberInputStepper>
                        <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                        <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                    </NumberInputStepper>
                </NumberInput>
                <FormLabel>
                    Intolerances
                </FormLabel>
                <Select name='intolerances' value={localFilter.intolerances} placeholder='Dairy, Egg, ...' bgColor='green.50' borderColor='gray.800' onChange={e => handleSelect(e)}>
                    <option value='Dairy'>Dairy</option>
                    <option value='Egg'>Egg</option>
                    <option value='Gluten'>Gluten</option>
                    <option value='Grain'>Grain</option>
                    <option value='Peanut'>Peanut</option>
                    <option value='Seafood'>Seafood</option>
                    <option value='Sesame'>Sesame</option>
                    <option value='Shellfish'>Shellfish</option>
                    <option value='Soy'>Soy</option>
                    <option value='Sulfite'>Sulfite</option>
                    <option value='Tree Nut'>Tree Nut</option>
                    <option value='Wheat'>Wheat</option>
                </Select>
                <FormLabel>
                    Diet type
                </FormLabel>
                <Select name='diet' value={localFilter.diet} placeholder='Gluten Free, paleo...' bgColor='green.50' borderColor='gray.800' onChange={e => handleSelect(e)}>
                    <option value='Dairy Free'>Dairy Free</option>
                    <option value='Gluten Free'>Gluten Free</option>
                    <option value='Ketogenic'>Ketogenic</option>
                    <option value='Low Fodmap'>Low Fodmap</option>
                    <option value='Paleo'>Paleolithic</option>
                    <option value='Pescatarian'>Pescatarian</option>
                    <option value='Primal'>Primal</option>
                    <option value='Vegan'>Vegan</option>
                    <option value='Vegetarian'>Vegetarian</option>
                </Select>
                <FormLabel marginTop='0.5em'>
                    Calories (Kcal)
                </FormLabel>
                <InputGroup>
                    <InputLeftAddon children='min' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='minCalories' value={localFilter.minCalories} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='maxCalories' value={localFilter.maxCalories} onChange={e => handleChangeLocalFilter(e)}/>
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
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='minCarbs' value={localFilter.minCarbs} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='maxCarbs' value={localFilter.maxCarbs} onChange={e => handleChangeLocalFilter(e)}/>
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
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='minFat' value={localFilter.minFat} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='maxFat' value={localFilter.maxFat} onChange={e => handleChangeLocalFilter(e)}/>
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
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='minProtein' value={localFilter.minProtein} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <InputGroup >
                    <InputLeftAddon children='max' bgColor='gray.800' borderColor='gray.800' color='green.50' w='4rem'/>
                    <NumberInput borderColor='gray.800' w='100%' min={0}>
                        <NumberInputField borderLeftRadius='0' bgColor='green.50' name='maxProtein' value={localFilter.minProtein} onChange={e => handleChangeLocalFilter(e)}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderColor='gray.800' onClick={ e => incrementLocalFilter(e)}/>
                            <NumberDecrementStepper borderColor='gray.800' onClick={ e => decrementLocalFilter(e)}/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
            </FormControl>
            <Center marginTop='2rem'>
                <Button marginTop='0.5rem' bgColor='gray.800' color='green.50' _hover={{ bg: '#1A202C'}} _active={{ bg: '#1A202C'}} onClick={() =>apply()}>
                    Apply
                </Button> 
            </Center>
        </Box>
    )
}