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

        for (const [key, value] of Object.entries(weekMenu)) {
         let valueN = Object.keys(value)
            
            console.log(`les maleur de valur ${valueN}`)
            console.log (`category dans ajoutjour ${categoryDeloc}`)

            
            if (tabIndexDeloc === 0 && key === "lundi") {

                switch (categoryDeloc ) {
                    case "matin":
                        setWeekMenu ({
                            ...weekMenu,
                            lundi: {
                                ...value,
                                matin : recipeDeloc,
                            }
                        })
                        break;
                        case "deujeuner":
                            setWeekMenu ({
                                ...weekMenu,
                                lundi: {
                                    ...value,
                                    deujeuner : recipeDeloc
                                }
                            })
                        break;
                        case "diner":
                            setWeekMenu ({
                                ...weekMenu,
                                lundi: {
                                    ...value,
                                    diner : recipeDeloc
                                }
                            })
                        
                        break;
                
                    default:
                        break;
                }
                 
        }
        if (tabIndexDeloc === 1 && key === "mardi") {
            switch (categoryDeloc ) {
                case "matin":
                    setWeekMenu ({
                        ...weekMenu,
                        mardi: {
                            ...value,
                            matin : recipeDeloc
                        }
                    })
                    break;
                    case "deujeuner":
                        setWeekMenu ({
                            ...weekMenu,
                            mardi: {
                                ...value,
                                deujeuner : recipeDeloc
                            }
                        })
                    break;
                    case "diner":
                        setWeekMenu ({
                            ...weekMenu,
                            mardi: {
                                ...value,
                                diner : recipeDeloc
                            }
                        })
                    
                    break;
            
                default:
                    break;
            }
        }
        if (tabIndexDeloc === 2 && key === "mercredi") {
            switch (categoryDeloc ) {
                case "matin":
                    setWeekMenu ({
                        ...weekMenu,
                        mercredi: {
                            ...value,
                            matin : recipeDeloc
                        }
                    })
                    break;
                    case "deujeuner":
                        setWeekMenu ({
                            ...weekMenu,
                            mercredi: {
                                ...value,
                                deujeuner : recipeDeloc
                            }
                        })
                    break;
                    case "diner":
                        setWeekMenu ({
                            ...weekMenu,
                            mercredi: {
                                ...value,
                                diner : recipeDeloc
                            }
                        })
                    
                    break;
            
                default:
                    break;
            }
        }
        if (tabIndexDeloc === 3 && key === "jeudi") {
            switch (categoryDeloc ) {
                case "matin":
                    setWeekMenu ({
                        ...weekMenu,
                        jeudi: {
                            ...value,
                            matin : recipeDeloc
                        }
                    })
                    break;
                    case "deujeuner":
                        setWeekMenu ({
                            ...weekMenu,
                            jeudi: {
                                ...value,
                                deujeuner : recipeDeloc
                            }
                        })
                    break;
                    case "diner":
                        setWeekMenu ({
                            ...weekMenu,
                            jeudi: {
                                ...value,
                                diner : recipeDeloc
                            }
                        })
                    
                    break;
            
                default:
                    break;
            }
        }
        if (tabIndexDeloc === 4 && key === "vendredi") {

            switch (categoryDeloc ) {
                case "matin":
                    setWeekMenu ({
                        ...weekMenu,
                        vendredi: {
                            ...value,
                            matin : recipeDeloc
                        }
                    })
                    break;
                    case "deujeuner":
                        setWeekMenu ({
                            ...weekMenu,
                            vendredi: {
                                ...value,
                                deujeuner : recipeDeloc
                            }
                        })
                    break;
                    case "diner":
                        setWeekMenu ({
                            ...weekMenu,
                            vendredi: {
                                ...value,
                                diner : recipeDeloc
                            }
                        })
                    
                    break;
            
                default:
                    break;
            }
        }
        if (tabIndexDeloc === 5 && key === "samedi") {
            switch (categoryDeloc ) {
                case "matin":
                    setWeekMenu ({
                        ...weekMenu,
                        samedi: {
                            ...value,
                            matin : recipeDeloc
                        }
                    })
                    break;
                    case "deujeuner":
                        setWeekMenu ({
                            ...weekMenu,
                            samedi: {
                                ...value,
                                deujeuner : recipeDeloc
                            }
                        })
                    break;
                    case "diner":
                        setWeekMenu ({
                            ...weekMenu,
                            samedi: {
                                ...value,
                                diner : recipeDeloc
                            }
                        })
                    
                    break;
            
                default:
                    break;
            }
        }
        if (tabIndexDeloc === 6 && key === "dimanche") {
            switch (categoryDeloc ) {
                case "matin":
                    setWeekMenu ({
                        ...weekMenu,
                        dimanche: {
                            ...value,
                            matin : recipeDeloc
                        }
                    })
                    break;
                    case "deujeuner":
                        setWeekMenu ({
                            ...weekMenu,
                            dimanche: {
                                ...value,
                                deujeuner : recipeDeloc
                            }
                        })
                    break;
                    case "diner":
                        setWeekMenu ({
                            ...weekMenu,
                            dimanche: {
                                ...value,
                                diner : recipeDeloc
                            }
                        })
                    
                    break;
            
                default:
                    break;
            }
        }
        
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