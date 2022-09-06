import { AddIcon } from "@chakra-ui/icons";
import { Button, useToast } from "@chakra-ui/react";
import React from "react";

export default function ButtonToAddRecipe({ index, category, recipeToAdd, weekMenu, setWeekMenu, onClose}){
    // import du toast
    const toast = useToast()
    // fonction pour mettre à jours le menu avec Switch Case 
    // afin de mettre à jours l'objet weekMenu au bon endroit
    // on ferme ensuite la modal et on affiche un succes toast
    const addToThisMealDay = () => {
        switch (index) {
            case 0:
                switch (category) {
                    case "Matin":
                        setWeekMenu({
                            ...weekMenu,
                            Lundi: {
                                ...weekMenu.Lundi,
                                Matin: recipeToAdd
                            }
                        })
                        break;
                    case "Déjeuner":
                        setWeekMenu({
                            ...weekMenu,
                            Lundi: {
                                ...weekMenu.Lundi,
                                Déjeuner: recipeToAdd
                            }
                        })
                        break;
                    case "Dîner":
                        setWeekMenu({
                            ...weekMenu,
                            Lundi: {
                                ...weekMenu.Lundi,
                                Dîner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 1:
                switch (category) {
                    case "Matin":
                        setWeekMenu({
                            ...weekMenu,
                            Mardi: {
                                ...weekMenu.Mardi,
                                Matin: recipeToAdd
                            }
                        })
                        break;
                    case "Déjeuner":
                        setWeekMenu({
                            ...weekMenu,
                            Mardi: {
                                ...weekMenu.Mardi,
                                Déjeuner: recipeToAdd
                            }
                        })
                        break;
                    case "Dîner":
                        setWeekMenu({
                            ...weekMenu,
                            Mardi: {
                                ...weekMenu.Mardi,
                                Dîner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                switch (category) {
                    case "Matin":
                        setWeekMenu({
                            ...weekMenu,
                            Mercredi: {
                                ...weekMenu.Mercredi,
                                Matin: recipeToAdd
                            }
                        })
                        break;
                    case "Déjeuner":
                        setWeekMenu({
                            ...weekMenu,
                            Mercredi: {
                                ...weekMenu.Mercredi,
                                Déjeuner: recipeToAdd
                            }
                        })
                        break;
                    case "Dîner":
                        setWeekMenu({
                            ...weekMenu,
                            Mercredi: {
                                ...weekMenu.Mercredi,
                                Dîner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                switch (category) {
                    case "Matin":
                        setWeekMenu({
                            ...weekMenu,
                            Jeudi: {
                                ...weekMenu.Jeudi,
                                Matin: recipeToAdd
                            }
                        })
                        break;
                    case "Déjeuner":
                        setWeekMenu({
                            ...weekMenu,
                            Jeudi: {
                                ...weekMenu.Jeudi,
                                Déjeuner: recipeToAdd
                            }
                        })
                        break;
                    case "Dîner":
                        setWeekMenu({
                            ...weekMenu,
                            Jeudi: {
                                ...weekMenu.Jeudi,
                                Dîner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 4:
                switch (category) {
                    case "Matin":
                        setWeekMenu({
                            ...weekMenu,
                            Vendredi: {
                                ...weekMenu.Vendredi,
                                Matin: recipeToAdd
                            }
                        })
                        break;
                    case "Déjeuner":
                        setWeekMenu({
                            ...weekMenu,
                            Vendredi: {
                                ...weekMenu.Vendredi,
                                Déjeuner: recipeToAdd
                            }
                        })
                        break;
                    case "Dîner":
                        setWeekMenu({
                            ...weekMenu,
                            Vendredi: {
                                ...weekMenu.Vendredi,
                                Dîner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 5:
                switch (category) {
                    case "Matin":
                        setWeekMenu({
                            ...weekMenu,
                            Samedi: {
                                ...weekMenu.Samedi,
                                Matin: recipeToAdd
                            }
                        })
                        break;
                    case "Déjeuner":
                        setWeekMenu({
                            ...weekMenu,
                            Samedi: {
                                ...weekMenu.Samedi,
                                Déjeuner: recipeToAdd
                            }
                        })
                        break;
                    case "Dîner":
                        setWeekMenu({
                            ...weekMenu,
                            Samedi: {
                                ...weekMenu.Samedi,
                                Dîner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 6:
                switch (category) {
                    case "Matin":
                        setWeekMenu({
                            ...weekMenu,
                            Dimanche: {
                                ...weekMenu.Dimanche,
                                Matin: recipeToAdd
                            }
                        })
                        break;
                    case "Déjeuner":
                        setWeekMenu({
                            ...weekMenu,
                            Dimanche: {
                                ...weekMenu.Dimanche,
                                Déjeuner: recipeToAdd
                            }
                        })
                        break;
                    case "Dîner":
                        setWeekMenu({
                            ...weekMenu,
                            Dimanche: {
                                ...weekMenu.Dimanche,
                                Dîner: recipeToAdd
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
        onClose()
        toast({
            title: 'Recipe added',
            status: 'success',
            isClosable: true,
            position: 'top'
        })
    }

    
    return (
        <Button leftIcon={<AddIcon />} w='100%' my='1rem' mx={['0', '0.5rem']} colorScheme='green' onClick={addToThisMealDay}>
        Add
        </Button>
    )
}