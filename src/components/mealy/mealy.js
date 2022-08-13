import React from "react";
//import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
//import JourBarre from "./joursBarre";
import { Center, Button, Flex } from "@chakra-ui/react";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import JourBarre from "./joursBarre";
import RepasBarre from "./repasBarre";

//import { weekMenu } from "../data/weekMenu";


const Mealy = () => {
    //const [dayyMeal, setDayyMeal] = React.useState("")
    const [categoryDeloc, setCategoryDeloc] = React.useState("")
    const [tabIndexDeloc, setTabIndexDeloc] = React.useState()
    const [recipeDeloc , setRecipeDeloc] =React.useState()
    const [weekMenu, setWeekMenu] = React.useState({
        lundi: { matin: "patantouille", deujeuner: "", diner: "" },
        mardi: { matin: "patantouille", deujeuner: "", diner: "" },
        mercredi: { matin: "patantouille", deujeuner: "", diner: "" },
        jeudi: { matin: "patantouille", deujeuner: "", diner: "" },
        vendredi: { matin: "patantouille", deujeuner: "", diner: "" },
        samedi: { matin: "patantouille", deujeuner: "", diner: "" },
        dimanche: { matin: "patantouille", deujeuner: "", diner: "" }
    })


    const handleIndexDeloc = (tabIndexDeloc) => {
        setTabIndexDeloc(tabIndexDeloc)
    }
    const handleCategoryChange = (categoryDeloc) => {
        setCategoryDeloc(categoryDeloc)
    }
    const handleChangeRecipe= (recipeDeloc) =>  {
        setRecipeDeloc(recipeDeloc)
    }

    localStorage.setItem('week', JSON.stringify(weekMenu));

    const ajoutjour = () => {

             switch (tabIndexDeloc) {
                case 0:
                    switch (categoryDeloc ) {
                        case "matin":
                            setWeekMenu ({
                                ...weekMenu,
                                lundi: {
                                    ...weekMenu.lundi,
                                    matin : recipeDeloc,
                                }
                            })
                            break;
                            case "deujeuner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    lundi: {
                                        ...weekMenu.lundi,
                                        deujeuner : recipeDeloc
                                    }
                                })
                            break;
                            case "diner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    lundi: {
                                        ...weekMenu.lundi,
                                        diner : recipeDeloc
                                    }
                                })
                            
                            break;
                    
                        default:
                            break;
                    }
                    break;
             case 1:
                switch (categoryDeloc ) {
                    case "matin":
                        setWeekMenu ({
                            ...weekMenu,
                            mardi: {
                                ...weekMenu.mardi,
                                matin : recipeDeloc
                            }
                        })
                        break;
                        case "deujeuner":
                            setWeekMenu ({
                                ...weekMenu,
                                mardi: {
                                    ...weekMenu.mardi,
                                    deujeuner : recipeDeloc
                                }
                            })
                        break;
                        case "diner":
                            setWeekMenu ({
                                ...weekMenu,
                                mardi: {
                                    ...weekMenu.mardi,
                                    diner : recipeDeloc
                                }
                            })
                        
                        break;
                
                    default:
                        break;
                }

                break;
                case 2:
                    switch (categoryDeloc ) {
                        case "matin":
                            setWeekMenu ({
                                ...weekMenu,
                                mercredi: {
                                    ...weekMenu.mercredi,
                                    matin : recipeDeloc
                                }
                            })
                            break;
                            case "deujeuner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    mercredi: {
                                        ...weekMenu.mercredi,
                                        deujeuner : recipeDeloc
                                    }
                                })
                            break;
                            case "diner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    mercredi: {
                                        ...weekMenu.mercredi,
                                        diner : recipeDeloc
                                    }
                                })
                            
                            break;
                    
                        default:
                            break;
                    }
                break;
                case 3:
                    switch (categoryDeloc ) {
                        case "matin":
                            setWeekMenu ({
                                ...weekMenu,
                                jeudi: {
                                    ...weekMenu.jeudi,
                                    matin : recipeDeloc
                                }
                            })
                            break;
                            case "deujeuner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    jeudi: {
                                        ...weekMenu.jeudi,
                                        deujeuner : recipeDeloc
                                    }
                                })
                            break;
                            case "diner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    jeudi: {
                                        ...weekMenu.jeudi,
                                        diner : recipeDeloc
                                    }
                                })
                            
                            break;
                    
                        default:
                            break;
                    }
                break;
                case 4:
                    switch (categoryDeloc ) {
                        case "matin":
                            setWeekMenu ({
                                ...weekMenu,
                                vendredi: {
                                    ...weekMenu.vendredi,
                                    matin : recipeDeloc
                                }
                            })
                            break;
                            case "deujeuner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    vendredi: {
                                        ...weekMenu.vendredi,
                                        deujeuner : recipeDeloc
                                    }
                                })
                            break;
                            case "diner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    vendredi: {
                                        ...weekMenu.vendredi,
                                        diner : recipeDeloc
                                    }
                                })
                            
                            break;
                    
                        default:
                            break;
                    }
                break;
                case 5:
                    switch (categoryDeloc ) {
                        case "matin":
                            setWeekMenu ({
                                ...weekMenu,
                                samedi: {
                                    ...weekMenu.samedi,
                                    matin : recipeDeloc
                                }
                            })
                            break;
                            case "deujeuner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    samedi: {
                                        ...weekMenu.samedi,
                                        deujeuner : recipeDeloc
                                    }
                                })
                            break;
                            case "diner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    samedi: {
                                        ...weekMenu.samedi,
                                        diner : recipeDeloc
                                    }
                                })
                            
                            break;
                    
                        default:
                            break;
                    }
                break;
                case 6:
                    switch (categoryDeloc ) {
                        case "matin":
                            setWeekMenu ({
                                ...weekMenu,
                                dimanche: {
                                    ...weekMenu.dimanche,
                                    matin : recipeDeloc
                                }
                            })
                            break;
                            case "deujeuner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    dimanche: {
                                        ...weekMenu.dimanche,
                                        deujeuner : recipeDeloc
                                    }
                                })
                            break;
                            case "diner":
                                setWeekMenu ({
                                    ...weekMenu,
                                    dimanche: {
                                        ...weekMenu.dimanche,
                                        diner : recipeDeloc
                                    }
                                })
                            
                            break;
                    
                        default:
                            break;
                    }
                break;
                default:
                    break;
             }

                
                 
        }
        
    
    return (
        <>
            <Flex>
                <Flex w={'20%'}>
                    <JourBarre onIndexChange={handleIndexDeloc} />

                </Flex>
                <Center w={'75%'} flexDirection={"column"}>

                    <RepasBarre onCategoryChange={handleCategoryChange} onChangeRecipe={handleChangeRecipe}/>
                    <SearchAndFilter />

                    <Button marginBottom={"3"} w={"25%"} color={"green.400"} onClick={ajoutjour} >Ajout</Button>

                </Center>

            </Flex>
        </>
    )
}

export default Mealy;