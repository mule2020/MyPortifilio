import React from 'react'
import A2P from '../assets/a2p.png'
import FutureFit from '../assets/futurefit.png'
import MedafDelivery from '../assets/medaf.png'
import Moyica from '../assets/moyica1.png'


const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: A2P
        },
        {
            id: 2,
            src: FutureFit
        },
        {
            id: 3,
            src: MedafDelivery
        },
        {
            id: 4,
            src: Moyica
        },
    ]
    return (
        <div
         id="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full
         text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portifolio</p>
                    <p className='py-6'>checkout some of my completed works</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolio.map(({ id, src }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='a2p_project' className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div >
    )
}

export default Portfolio
