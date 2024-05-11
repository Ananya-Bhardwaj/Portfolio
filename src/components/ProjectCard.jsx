import React from 'react'

const ProjectCard = ({name="HeritageBioscope", desc="lorem ipsum jkjfkjajkejdakfjjiejijrekjlajfkd", img, link}) => {
  const handleClick = () => {
    
  }
  return (
    <>
        <div onClick={handleClick} className='flex flex-col rounded-md bg-blue-100 z-50 shadow-md'>
            <img src={img} alt="hello" />
            <h1>{name}</h1>
            <p>{desc}</p> 
        </div>
    </>
  )
}

export default ProjectCard