// Imports
import React from "react";
import { Center, Flex } from "@chakra-ui/react";
import WeekTable from "./weekTable";
import SearchAndFilter from '../SearchAndFilter/SearchAndFilter'
import MealCategory from './mealCategory'
const CarouselWithCheckedSpoon = React.lazy(() =>
    import(/* webpackPrefetch: true */ "../Carousel/CarouselWithCheckedSpoon")
);

export default function MenuCreator() {
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
    const [menuIsCompleted, setMenuIsCompleted] = React.useState(false)

    // Object qui contient le menu de la semaine qui va alimenter le localStorage
    const [weekMenu, setWeekMenu] = React.useState({
        Monday: { Breakfast: "", Lunch: "", Diner: "" },
        Tuesday: { Breakfast: "", Lunch: "", Diner: "" },
        Wednesday: { Breakfast: "", Lunch: "", Diner: "" },
        Thursday: { Breakfast: "", Lunch: "", Diner: "" },
        Friday: { Breakfast: "", Lunch: "", Diner: "" },
        Saturday: { Breakfast: "", Lunch: "", Diner: "" },
        Sunday: { Breakfast: "", Lunch: "", Diner: "" }
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
            for (const [meal, thereIsARecipe] of Object.entries(meals)) {
                if (thereIsARecipe !== '') {
                    progressCounter += 1
                }
            }
        }
        if (progressCounter === 21) {
            setMenuIsCompleted(true)
        }
    }, [weekMenu])

    return (
        <Flex flexGrow={1} flexDirection={['column', 'row']}>
            <Flex py='2rem' alignItems={['', 'start']} justifyContent={['center', '']}>
                <WeekTable onIndexChange={handleIndexDeloc} weekMenu={weekMenu} />
            </Flex>
            {!menuIsCompleted ?
                <Center w='100%' p='2rem' flexDirection={"column"}>
                    <MealCategory onCategoryChange={handleCategoryChange} index={tabIndexDeloc} weekMenu={weekMenu} />
                    <SearchAndFilter index={tabIndexDeloc} category={categoryDeloc} setWeekMenu={setWeekMenu} weekMenu={weekMenu} />
                </Center>
                :
                <Center w='100%' p='2rem'>
                    <CarouselWithCheckedSpoon weekMenu={weekMenu} />
                </Center>
            }
        </Flex>
    )
}