import React from 'react'

const About = () => {
    return (
        <div
            id="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Hi there! I'm a software engineer with Two years of experience. I love writing code that works well and gets the job done. I studied computer science at Andhra University, where I learned how to solve problems using computers. Since then, I've worked with different technologies like Python, PHP, and the MERN stack, which includes MongoDB, Express.js, React, and Node.js. I've built many websites and tools for different people and projects, and I always try my best to make them awesome!
                </p>
                <br />
                <p className='text-xl'>
                    Besides coding, I enjoy working with others and coming up with new ideas. I follow the rules and methods of coding, and I'm always excited to learn new things. I have a degree in computer science, which helped me learn a lot about computers and how they work.
                </p>


            </div>
        </div>
    )
}

export default About
