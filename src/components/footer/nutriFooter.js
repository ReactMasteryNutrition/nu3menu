import React from "react";
import FooterDestop from "./footerDestop";
import FooterMobile from "./footerMobile";


const NutriFooter = () => {
    ///const [toggleMenu, setToggleMenu] = React.useState(false)
    const [largeur, setLargeur] = React.useState(window.innerWidth)


    React.useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            // if (window.innerWidth > 500) {
            //     setToggleMenu(false)
            // }
        }
        window.addEventListener('resize', changeWidth);

        return (() => {
            window.removeEventListener('resize', changeWidth)
        })
    }, [])

    return (
        <>
            {/*toggleMenu || */ largeur > 600 ?
                <FooterDestop/>
                :
                <FooterMobile/>
            }
        </>
    )
}
export default NutriFooter;