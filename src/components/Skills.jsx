import React from 'react'

const Skills = () => {
  return (
    <>
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='text-center my-20 text-4xl'>Skills and Programming Languages</h2>
            <div className='flex items-center justify-center gap-4 flex-wrap mx-auto'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src="https://skillicons.dev/icons?i=cpp" />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src="https://skillicons.dev/icons?i=py" />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src="https://skillicons.dev/icons?i=html" />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src="https://skillicons.dev/icons?i=css" />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src="https://skillicons.dev/icons?i=js" />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src="https://skillicons.dev/icons?i=react" />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src="https://skillicons.dev/icons?i=linux" />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src="https://skillicons.dev/icons?i=mysql" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills