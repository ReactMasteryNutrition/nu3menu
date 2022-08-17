import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

export default function ButtonToAddRecipe({ index, category, recipeToAdd, bla, weekMenu, setWeekMenu}){

    const addToThisMealDay = () => {
        
        switch (index) {
            case 0:
                switch (category) {
                    case "matin":
                        setWeekMenu({
                            ...weekMenu,
                            lundi: {
                                ...weekMenu.lundi,
                                matin: recipeToAdd
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            lundi: {
                                ...weekMenu.lundi,
                                deujeuner: recipeToAdd
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            lundi: {
                                ...weekMenu.lundi,
                                diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 1:
                switch (category) {
                    case "matin":
                        setWeekMenu({
                            ...weekMenu,
                            mardi: {
                                ...weekMenu.mardi,
                                matin: recipeToAdd
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            mardi: {
                                ...weekMenu.mardi,
                                deujeuner: recipeToAdd
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            mardi: {
                                ...weekMenu.mardi,
                                diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                switch (category) {
                    case "matin":
                        setWeekMenu({
                            ...weekMenu,
                            mercredi: {
                                ...weekMenu.mercredi,
                                matin: recipeToAdd
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            mercredi: {
                                ...weekMenu.mercredi,
                                deujeuner: recipeToAdd
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            mercredi: {
                                ...weekMenu.mercredi,
                                diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                switch (category) {
                    case "matin":
                        setWeekMenu({
                            ...weekMenu,
                            jeudi: {
                                ...weekMenu.jeudi,
                                matin: recipeToAdd
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            jeudi: {
                                ...weekMenu.jeudi,
                                deujeuner: recipeToAdd
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            jeudi: {
                                ...weekMenu.jeudi,
                                diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 4:
                switch (category) {
                    case "matin":
                        setWeekMenu({
                            ...weekMenu,
                            vendredi: {
                                ...weekMenu.vendredi,
                                matin: recipeToAdd
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            vendredi: {
                                ...weekMenu.vendredi,
                                deujeuner: recipeToAdd
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            vendredi: {
                                ...weekMenu.vendredi,
                                diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 5:
                switch (category) {
                    case "matin":
                        setWeekMenu({
                            ...weekMenu,
                            samedi: {
                                ...weekMenu.samedi,
                                matin: recipeToAdd
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            samedi: {
                                ...weekMenu.samedi,
                                deujeuner: recipeToAdd
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            samedi: {
                                ...weekMenu.samedi,
                                diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 6:
                switch (category) {
                    case "matin":
                        setWeekMenu({
                            ...weekMenu,
                            dimanche: {
                                ...weekMenu.dimanche,
                                matin: recipeToAdd
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            dimanche: {
                                ...weekMenu.dimanche,
                                deujeuner: recipeToAdd
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            dimanche: {
                                ...weekMenu.dimanche,
                                diner: recipeToAdd
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
        <Button leftIcon={<AddIcon />} w='100%' my='1rem' mx={['0', '0.5rem']} colorScheme='green' onClick={addToThisMealDay}>
        Add
        </Button>
    )
}