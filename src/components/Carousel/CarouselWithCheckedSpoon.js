// Imports
import React from 'react'
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, Image, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, VStack } from "@chakra-ui/react"
import { Navigate } from 'react-router-dom';
import { db  } from "../../firebase-config";
import { serverTimestamp,  collection, doc, setDoc } from "firebase/firestore";
// Function
export default function CarouselWithCheckedSpoon(weekMenu){
    // On récupère les datas liées au menu dans la localStorage
    const localStorageData = JSON.parse(localStorage.getItem('week'))
    // On crée des variables pour contenir l'image de couverture et le titre du menu
    const [weekMenuHeader, setWeekMenuHeader] = React.useState({
        weekMenuTitle : "",
        weekMenuCover: "",
        submitted : false
    })
    localStorage.setItem('weekMenuHeader', JSON.stringify(weekMenuHeader));

    const [redirect, setRedirect] = React.useState(false)

    // on boucle dans le localStorage pour récupérer toutes les images des repas composant le menu
    const imagesRegister = []
    const imagesTitle = []
    for (const [day, meals] of Object.entries(localStorageData)) {
        for( const [meal, detail] of Object.entries(meals)) {
            imagesRegister.push(detail.image)
            imagesTitle.push(JSON.stringify(detail.title))
        }
    }
    // variables de construction du "caroussel"
    const sliderLentgh = imagesTitle.length
    const valueMin = 1
    const valueMax =  sliderLentgh
    const [valueSelected, setValueSelected] = React.useState(valueMin)
    // regarder l'image suivante
    const increment = () => {
        //console.log('INCREMENT')
        if(valueSelected !== valueMax){
            setValueSelected(valueSelected+1)
        }
    }
    // regarder l'image précédente
    const decrement = () => {
        //console.log('DECREMENT')
        if(valueSelected !== valueMin){
            setValueSelected(valueSelected-1)
        }
    }
    // On récupère l'image visible pour la couverture et l'input pour le titre, on met à jour le state
    const finalizeMenu = () => {
        //console.log('On enregistre le menu avec...')
        let titleMenuToRegister = document?.getElementById("titleMenu")?.value
        let finalCoverImage = document?.getElementById("currentImage")?.getAttribute('src')
        setWeekMenuHeader(
            {...weekMenuHeader, 
                weekMenuTitle: titleMenuToRegister, 
                weekMenuCover : finalCoverImage, 
                submitted: true
            }
        )
    }

    //ajout dans fierbase
    const menuWhichShouldBeSaved = weekMenu
    const week =  localStorage.getItem('week')
    const weekParse = JSON.parse(localStorage.getItem('weekMenuHeader'))

    

    const newMenuSaved = async () => {
        try{
        const menuRef = doc(collection(db, "menus"))
        const dataMenu = {
            idMenu : menuRef.id,
            idCreator : "",
            dateCreation : serverTimestamp(),
            isPublic : true ,
            title : weekParse.weekMenuTitle,
            cover : weekParse.weekMenuCover ,
            Lundi : menuWhichShouldBeSaved.weekMenu.Lundi,
            Mardi : menuWhichShouldBeSaved.weekMenu.Mardi,
            Mercredi : menuWhichShouldBeSaved.weekMenu.Mercredi,
            Jeudi : menuWhichShouldBeSaved.weekMenu.Jeudi,
            Vendredi : menuWhichShouldBeSaved.weekMenu.Vendredi,
            Samedi : menuWhichShouldBeSaved.weekMenu.Samedi,
            Dimanche : menuWhichShouldBeSaved.weekMenu.Dimanche,
            reviews : [],
            }
        await setDoc(menuRef, dataMenu)  
        } catch (error){
            console.log(`c'est une erreur  ${error}`)
        }
    }

    const addFirebase = () => {
        console.log('weekMenu from Carousel : ', menuWhichShouldBeSaved)
        newMenuSaved()
        setRedirect(true)
    }

    return( 
            <>
                {redirect && <Navigate to={'/menu'} /> }
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
                    <Input id='titleMenu' color='green.50' focusBorderColor='green.400' placeholder={`Menu's title`} onChange={()=>finalizeMenu()}/>
                    <Button leftIcon={<CheckCircleIcon />} w='100%' my='1rem' mx={['0', '0.5rem']} colorScheme='green' onClick={addFirebase}>
                        Save this menu
                    </Button>
                </VStack>
            </>
        
    )
}