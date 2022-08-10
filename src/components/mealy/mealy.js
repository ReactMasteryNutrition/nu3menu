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
                                matin : "dddddd"
                            }
                        })
                        break;
                        case "deujeuner":
                            setWeekMenu ({
                                ...weekMenu,
                                lundi: {
                                    ...value,
                                    deujeuner : "c'est pas leheure "
                                }
                            })
                        break;
                        case "diner":
                            setWeekMenu ({
                                ...weekMenu,
                                lundi: {
                                    ...value,
                                    diner : "evite le poulet hahahah"
                                }
                            })
                        
                        break;
                
                    default:
                        break;
                }

               {/* if(valueN.filter((valueN) => valueN === categoryDeloc) ) {
                    setWeekMenu({
                        ...weekMenu,
                        lundi: {
                            ...value,
                            matin: "ooooooo",  
                            
                        }
                    })      

                } else if (valueN.filter((valueN) => valueN === categoryDeloc)) {
                    setWeekMenu({
                        ...weekMenu,
                        ludin: {
                            ...value,
                            
                            deujeuner: " un autre truc ",
                            
                        }
                    })      

                } else if (valueN.filter((valueN) => valueN === categoryDeloc)){
                    setWeekMenu({
                        ...weekMenu,
                        ludin: {
                            ...value,
                            diner: "et voilà "
                        }
                    })      

                } */}
                    
        }
        if (tabIndexDeloc === 1 && key === "mardi") {
            setWeekMenu({
                ...weekMenu,
                mardi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (tabIndexDeloc === 2 && key === "mercredi") {
            setWeekMenu({
                ...weekMenu,
                mercredi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (tabIndexDeloc === 3 && key === "jeudi") {
            setWeekMenu({
                ...weekMenu,
                jeudi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (tabIndexDeloc === 4 && key === "vendredi") {
            setWeekMenu({
                ...weekMenu,
                vendredi: {
                    matin: "oooooooo",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (tabIndexDeloc === 5 && key === "samedi") {
            setWeekMenu({
                ...weekMenu,
                samedi: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
        }
        if (tabIndexDeloc === 6 && key === "dimanche") {
            setWeekMenu({
                ...weekMenu,
                dimanche: {
                    matin: "illlllll",
                    deujeuner: " un autre truc ",
                    diner: "et voilà "
                }
            })
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

                    <RepasBarre onCategoryChange={handleCategoryChange} />
                    <SearchAndFilter />

                    <Button marginBottom={"3"} w={"25%"} color={"green.400"} onClick={ajoutjour} >Ajout</Button>

                </Center>

            </Flex>
        </>
    )
}

export default Mealy;