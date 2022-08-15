import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

const AjoutJour = ({ index, category, recipe }) => {

    const [weekMenu, setWeekMenu] = React.useState({
        lundi: { matin: "patantouille", deujeuner: "", diner: "" },
        mardi: { matin: "patantouille", deujeuner: "", diner: "" },
        mercredi: { matin: "patantouille", deujeuner: "", diner: "" },
        jeudi: { matin: "patantouille", deujeuner: "", diner: "" },
        vendredi: { matin: "patantouille", deujeuner: "", diner: "" },
        samedi: { matin: "patantouille", deujeuner: "", diner: "" },
        dimanche: { matin: "patantouille", deujeuner: "", diner: "" }
    })

    localStorage.setItem('week', JSON.stringify(weekMenu));


    const ajoutjour = () => {
        console.log(`je suis avant switch`)
        console.log(` index ${index} catégory ${category}`)

        switch (index) {
            case 0:
                console.log(`je suis l'index 0 donc lundi`)
                switch (category) {
                    case "matin":
                        console.log(`le lundi mation`)
                        setWeekMenu({
                            ...weekMenu,
                            lundi: {
                                ...weekMenu.lundi,
                                matin: "lundddi matin"
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            lundi: {
                                ...weekMenu.lundi,
                                deujeuner: recipe
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            lundi: {
                                ...weekMenu.lundi,
                                diner: recipe
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
                                matin: recipe
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            mardi: {
                                ...weekMenu.mardi,
                                deujeuner: recipe
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            mardi: {
                                ...weekMenu.mardi,
                                diner: recipe
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
                                matin: recipe
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            mercredi: {
                                ...weekMenu.mercredi,
                                deujeuner: recipe
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            mercredi: {
                                ...weekMenu.mercredi,
                                diner: recipe
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
                                matin: recipe
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            jeudi: {
                                ...weekMenu.jeudi,
                                deujeuner: recipe
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            jeudi: {
                                ...weekMenu.jeudi,
                                diner: recipe
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
                                matin: recipe
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            vendredi: {
                                ...weekMenu.vendredi,
                                deujeuner: recipe
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            vendredi: {
                                ...weekMenu.vendredi,
                                diner: recipe
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
                                matin: recipe
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            samedi: {
                                ...weekMenu.samedi,
                                deujeuner: recipe
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            samedi: {
                                ...weekMenu.samedi,
                                diner: recipe
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
                                matin: recipe
                            }
                        })
                        break;
                    case "deujeuner":
                        setWeekMenu({
                            ...weekMenu,
                            dimanche: {
                                ...weekMenu.dimanche,
                                deujeuner: recipe
                            }
                        })
                        break;
                    case "diner":
                        setWeekMenu({
                            ...weekMenu,
                            dimanche: {
                                ...weekMenu.dimanche,
                                diner: recipe
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

        console.log(` index 2 ${index} catégory 2 ${category}`)


    }

    //console.log('Fonction pour enregistrer la recette dans notre menu / A FAIRE')
    //onClick={ajoutjour}

    return (
        <Button leftIcon={<AddIcon />} w='100%' my='1rem' mx={['0', '0.5rem']} colorScheme='green' onClick={ajoutjour }>
        Add
        </Button>
    )
}
export default AjoutJour;