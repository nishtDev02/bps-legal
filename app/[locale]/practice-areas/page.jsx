import React from 'react'
import PracticeAreasAccordion from '@/components/PracticeAreasAccordion'

const PracticeAreasPage = () => {
  return (
    <section className='relative bg-[#E8DCC8] px-6 md:px-16 pt-47.5 pb-20 md:pb-28'>
        <div className='max-w-4xl mx-auto text-center space-y-4 mb-14'>
            <p className='text-[#C6A75E] uppercase tracking-widest text-sm font-medium'>
                What We Do
            </p>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight text-[#1F2A44]'>
                Practice Areas
            </h1>
            <p className='text-[#1F2A44]/70 text-base md:text-lg'>
                Comprehensive legal support across criminal and cyber law, tailored to your specific situation.
            </p>
        </div>

        <PracticeAreasAccordion />
    </section>
  )
}

export default PracticeAreasPage
