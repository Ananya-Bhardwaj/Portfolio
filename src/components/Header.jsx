

const Header = () => {
  return (
    <>
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'></div>
        <div className='flex flex-wrap justify-evenly align-center'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start lg:ml-6'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Ananya Bhardwaj</h1>
                    <span>Pre-Final Year Student at IGDTUW</span>
                    <p></p>
                </div>
            </div>
            <div className='w-full lg:mt-16 lg:w-1/2'>
              <img src='https://res.cloudinary.com/dm2nipspt/image/upload/v1715533182/portfolio_image_nqgb5v.png' height={400} width={400}></img>
            </div>
            
        </div>
    </>
  )
}

export default Header