import { AddIcon } from "@chakra-ui/icons";
import { Button, useToast } from "@chakra-ui/react";
import React from "react";

export default function ButtonToAddRecipeWithSpoon({ recipeToAdd, onClose, index, category, weekMenu, setWeekMenu }) {
    // import du toast
    const toast = useToast()
    // fonction pour mettre à jours le menu avec Switch Case 
    // afin de mettre à jours l'objet weekMenu au bon endroit
    // on ferme ensuite la modal et on affiche un succes toast
    const addToThisMealDay = () => {
        switch (index) {
            case 0:
                switch (category) {
                    case "Breakfast":
                        setWeekMenu({
                            ...weekMenu,
                            Monday: {
                                ...weekMenu.Monday,
                                Breakfast: recipeToAdd
                            }
                        })
                        break;
                    case "Lunch":
                        setWeekMenu({
                            ...weekMenu,
                            Monday: {
                                ...weekMenu.Monday,
                                Lunch: recipeToAdd
                            }
                        })
                        break;
                    case "Diner":
                        setWeekMenu({
                            ...weekMenu,
                            Monday: {
                                ...weekMenu.Monday,
                                Diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 1:
                switch (category) {
                    case "Breakfast":
                        setWeekMenu({
                            ...weekMenu,
                            Tuesday: {
                                ...weekMenu.Tuesday,
                                Breakfast: recipeToAdd
                            }
                        })
                        break;
                    case "Lunch":
                        setWeekMenu({
                            ...weekMenu,
                            Tuesday: {
                                ...weekMenu.Tuesday,
                                Lunch: recipeToAdd
                            }
                        })
                        break;
                    case "Diner":
                        setWeekMenu({
                            ...weekMenu,
                            Tuesday: {
                                ...weekMenu.Tuesday,
                                Diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                switch (category) {
                    case "Breakfast":
                        setWeekMenu({
                            ...weekMenu,
                            Wednesday: {
                                ...weekMenu.Wednesday,
                                Breakfast: recipeToAdd
                            }
                        })
                        break;
                    case "Lunch":
                        setWeekMenu({
                            ...weekMenu,
                            Wednesday: {
                                ...weekMenu.Wednesday,
                                Lunch: recipeToAdd
                            }
                        })
                        break;
                    case "Diner":
                        setWeekMenu({
                            ...weekMenu,
                            Wednesday: {
                                ...weekMenu.Wednesday,
                                Diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                switch (category) {
                    case "Breakfast":
                        setWeekMenu({
                            ...weekMenu,
                            Thursday: {
                                ...weekMenu.Thursday,
                                Breakfast: recipeToAdd
                            }
                        })
                        break;
                    case "Lunch":
                        setWeekMenu({
                            ...weekMenu,
                            Thursday: {
                                ...weekMenu.Thursday,
                                Lunch: recipeToAdd
                            }
                        })
                        break;
                    case "Diner":
                        setWeekMenu({
                            ...weekMenu,
                            Thursday: {
                                ...weekMenu.Thursday,
                                Diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 4:
                switch (category) {
                    case "Breakfast":
                        setWeekMenu({
                            ...weekMenu,
                            Friday: {
                                ...weekMenu.Friday,
                                Breakfast: recipeToAdd
                            }
                        })
                        break;
                    case "Lunch":
                        setWeekMenu({
                            ...weekMenu,
                            Friday: {
                                ...weekMenu.Friday,
                                Lunch: recipeToAdd
                            }
                        })
                        break;
                    case "Diner":
                        setWeekMenu({
                            ...weekMenu,
                            Friday: {
                                ...weekMenu.Friday,
                                Diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 5:
                switch (category) {
                    case "Breakfast":
                        setWeekMenu({
                            ...weekMenu,
                            Saturday: {
                                ...weekMenu.Saturday,
                                Breakfast: recipeToAdd
                            }
                        })
                        break;
                    case "Lunch":
                        setWeekMenu({
                            ...weekMenu,
                            Saturday: {
                                ...weekMenu.Saturday,
                                Lunch: recipeToAdd
                            }
                        })
                        break;
                    case "Diner":
                        setWeekMenu({
                            ...weekMenu,
                            Saturday: {
                                ...weekMenu.Saturday,
                                Diner: recipeToAdd
                            }
                        })
                        break;
                    default:
                        break;
                }
                break;
            case 6:
                switch (category) {
                    case "Breakfast":
                        setWeekMenu({
                            ...weekMenu,
                            Sunday: {
                                ...weekMenu.Sunday,
                                Breakfast: recipeToAdd
                            }
                        })
                        break;
                    case "Lunch":
                        setWeekMenu({
                            ...weekMenu,
                            Sunday: {
                                ...weekMenu.Sunday,
                                Lunch: recipeToAdd
                            }
                        })
                        break;
                    case "Diner":
                        setWeekMenu({
                            ...weekMenu,
                            Sunday: {
                                ...weekMenu.Sunday,
                                Diner: recipeToAdd
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