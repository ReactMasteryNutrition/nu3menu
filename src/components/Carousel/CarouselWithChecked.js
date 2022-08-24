// Imports
import React from 'react'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, Image, Input, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, VStack } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion";
// Function
export default function CarouselWithChecked(){

    const localStorageData = JSON.parse(localStorage.getItem('week'))
    // localStorageData && console.log('localStorage : ', localStorageData)
    // localStorageData && localStorageData.map(day => 
    //     day.map(recette => console.log(recette))
    // )
    const imagesRegister = []
    const imagesTitle = []

    for (const [day, meals] of Object.entries(localStorageData)) {
        for( const [meal, detail] of Object.entries(meals)) {
            imagesRegister.push(detail.recipe.image)
            imagesTitle.push(JSON.stringify(detail.recipe.label))
        }
    }

    // console.log(typeof(imagesFolder))
    // console.log(Object.keys(imagesFolder).length)
    const sliderLentgh = imagesTitle.length
    

    const valueMin = 1
    const valueMax =  sliderLentgh
    const [valueSelected, setValueSelected] = React.useState(valueMin)


    const sliderMarkContent = anObject => {
        let content = [];
        let counter = 0;
        for ( let [item] of imagesTitle) {
            counter+= 1;
            content.push(<SliderMark value={counter} color='green.50' mt='1.5rem' ml={-1}>{counter}</SliderMark>)
        }
        return content
    }

    const increment = () => {
        //console.log('INCREMENT')
        if(valueSelected !== valueMax){
            setValueSelected(valueSelected+1)
        }
    }
    const decrement = () => {
        //console.log('DECREMENT')
        if(valueSelected !== valueMin){
            setValueSelected(valueSelected-1)
        }
    }

    console.log('valueSelected : ', valueSelected)
    React.useEffect(() =>{
        const imageCurrentTitle = document?.getElementById("currentImage")?.getAttribute('alt')
        const imageCurrentSource = document?.getElementById("currentImage")?.getAttribute('src')
        console.log('imageCurrentTitle =>  ',imageCurrentTitle)
        console.log('imageCurrentSource =>  ',imageCurrentSource)
    })

    const finalizeMenu = () => {
        console.log('On enregistre le menu avec...')
        let titleMenuToRegister = document?.getElementById("titleMenu")?.value
        let finalCoverImage = document?.getElementById("currentImage")?.getAttribute('src')
        console.log('Ce titre : ')
        console.log(titleMenuToRegister)
        console.log('Et cette image : ')
        console.log(finalCoverImage)
    }
    
    return(
            <VStack>
                <Text color='green.50' fontSize='2xl'>Choose your cover</Text>
                <Image id="currentImage" src={imagesRegister[valueSelected-1]} alt={imagesTitle[valueSelected-1]} borderRadius='md'/>
                <Flex width='100%'> 
                    <IconButton 
                        color='green.600'
                        bgColor='gray.800'
                        icon={<ChevronLeftIcon w={8} h={8} />}
                        aria-label='Previous image'
                        onClick={()=>decrement()}
                    />
                    <Slider
                        value={valueSelected}
                        min={1}
                        max={sliderLentgh}
                        colorScheme='green'
                        mx='1rem'
                        onChange={(val)=> setValueSelected(val)}
                    >
                        {   
                            //sliderMarkContent(imagesFolder)
                        }
                        <SliderTrack>
                            <SliderFilledTrack bg='green.600'/>
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <IconButton 
                        color='green.600'
                        bgColor='gray.800'
                        icon={<ChevronRightIcon w={8} h={8} />}
                        aria-label='Previous image'
                        onClick={()=>increment()}
                    />
                </Flex>
                <Input id='titleMenu' color='green.50' focusBorderColor='green.400' placeholder={`Menu's title`}/>
                <Button leftIcon={<CheckCircleIcon />} w='100%' my='1rem' mx={['0', '0.5rem']} colorScheme='green' onClick={()=>finalizeMenu()}>
                    Save this menu
                </Button>
            </VStack>
        
    )
}