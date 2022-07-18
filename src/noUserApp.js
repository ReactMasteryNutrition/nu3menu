import * as React from 'react';
import Card from './components/Card/Card';
import NutriNavDesktop from './components/NutriNavDesktop/NutriNavDesktop';
import NutriNavMobile from './components/NutriNavMobile/NutriNavMobile';
import NutriFooter from './components/footer/nutriFooter'

const NoUserApp = () => {
    return(
        <>
            <NutriNavDesktop />
            <NutriNavMobile/>
            <Card/>
            <NutriFooter/>
        </>
    )

}

export default NoUserApp;