import React from 'react'

const Header = () => {
  return (
    <>
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'></div>
        <div className='flex flex-wrap justify-evenly align-center'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Ananya Bhardwaj</h1>
                    <span>Pre-Final Year Student at IGDTUW</span>
                    <p></p>
                </div>
            </div>
            <img className='w-full lg:w-1/2' src=''></img>
        </div>
    </>
  )
}

export default Header