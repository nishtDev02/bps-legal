import React from 'react'
import PracticeAreasListing from '@/components/practice-areas/PracticeAreasListing'

const PracticeAreasPage = async ({ params }) => {
    const { locale } = await params;

    return <PracticeAreasListing locale={locale}/>
   
}

export default PracticeAreasPage
