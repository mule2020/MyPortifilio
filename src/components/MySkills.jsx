import React from 'react'
import A2P from '../assets/a2p.png'
const MySkills = () => {
    const techs = [
        {
            id: 1,
            src: A2P,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: A2P,
            title: 'Java',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: A2P,
            title: 'Django',
            style: 'shadow-yellow-500'
        },
    ]
    return (
        <div id='skills' className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                    <p className='py-6'>Here are my skills</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='a2p' className='w-80 mx-auto' />
                            <p>{title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default MySkills
