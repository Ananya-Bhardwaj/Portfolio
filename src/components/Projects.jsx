import projects from "../data/projects"; 

const Project = () => {
  return (
    <>
      <div className='border-b border-neutral-800 pb-24'>
            <h2 className='text-center my-20 text-4xl'>Technical Projects</h2>
            <div>{
            projects.map((project, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                  <img src={project.img} alt={project.name} height={250} width={250} className="mb-6 rounded"></img>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold">{project.name}</h6>
                  <p className="mb-4 text-neutral-400">{project.desc}</p>
                  {project.technologies.map((technology, idx) => (
                    <span key={idx} className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-sm text-violet-900">{technology}</span>
                  ))}
                </div>
              </div>
              ))
              }</div>
      </div>
    </>
  )
}

export default Project