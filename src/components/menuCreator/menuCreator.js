// Imports
import React from "react";
import { Center,  Flex } from "@chakra-ui/react";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import MealCategory from "./mealCategory";
import WeekTable from "./weekTable";
import CarouselWithChecked from "../Carousel/CarouselWithChecked";

export default function MenuCreator(){
    // Gestion du type de repas sélectionné
    const [categoryDeloc, setCategoryDeloc] = React.useState("")
    const handleCategoryChange = (categoryDeloc) => {
        setCategoryDeloc(categoryDeloc)
    }
    // Gestion du jour de la semaine sélectionné
    const [tabIndexDeloc, setTabIndexDeloc] = React.useState(0)
    const handleIndexDeloc = (tabIndexDeloc) => {
        setTabIndexDeloc(tabIndexDeloc)
    }
    // Booléan pour savoir si le menu est complet soit 3 repas pour chacun des 7 jours
    const[menuIsCompleted, setMenuIsCompleted] = React.useState(false)

    // Object qui contient le menu de la semaine qui va alimenter le localStorage
    const [weekMenu, setWeekMenu] = React.useState({
        lundi: { matin: "", deujeuner: "", diner: "" },
        mardi: { matin: "", deujeuner: "", diner: "" },
        mercredi: { matin: "", deujeuner: "", diner: "" },
        jeudi: { matin: "", deujeuner: "", diner: "" },
        vendredi: { matin: "", deujeuner: "", diner: "" },
        samedi: { matin: "", deujeuner: "", diner: "" },
        dimanche: { matin: "", deujeuner: "", diner: "" }
    })
    localStorage.setItem('week', JSON.stringify(weekMenu));

    let progressCounter = 0
    // Cet useEffect va bouclé sur l'ensemble de weekMenu
    // Première boucle pour chaque jour
    // Seconde boucle pour chaque repas
    // On regarde s'il y a des repas non vides, si c'est le cas alors on augmente le compteur d'autant
    // Une fois le compteur a 21, cela voudra dire qu'on a rempli l'ensemble des 3 repas sur chacun des 7 jours de la semaine
    React.useEffect(() => {
        for (const [day, meals] of Object.entries(weekMenu)) {
            for( const [meal, thereIsARecipe] of Object.entries(meals)) {
                if(thereIsARecipe !== '') {
                    progressCounter += 1
                }
            }
        }
        if(progressCounter === 21){
            setMenuIsCompleted(true)
        }
    },[weekMenu])

    return (
        <Flex flexGrow={1} flexDirection={['column', 'row']}>
            <Flex py='2rem' alignItems={['', 'start']} justifyContent={['center', '']}>
                <WeekTable onIndexChange={handleIndexDeloc} weekMenu={weekMenu}/>
            </Flex>
            {!menuIsCompleted ?
                <Center w='100%' p='2rem' flexDirection={"column"}>
                    <MealCategory onCategoryChange={handleCategoryChange} />
                    <SearchAndFilter index={tabIndexDeloc} category={categoryDeloc} setWeekMenu={setWeekMenu} weekMenu={weekMenu}/>
                </Center>
                :
                <Center w='100%' p='2rem'>
                    <CarouselWithChecked />
                </Center>
            }
                
            
        </Flex>
    )
}