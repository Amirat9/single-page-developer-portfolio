import data from '../data.json';
import ProjectItem from '../ui/ProjectItem';

const Projects = () => {
  return (
    <section className='mt-20 mx-4 lg:mx-40'>
      {/* Title and Link */}
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-[40px] font-bold leading-10 tracking-[-1.136px] sm:text-[72px] sm:leading-[72px] sm:tracking-[-2px] lg:text-[88px] lg:leading-[88px] lg:tracking-[-2.5px]'>
          Projects
        </h1>
        <div className='text-center'>
          <a
            href='#contact'
            className='font-bold border-b-2 pb-2 border-green uppercase transition-colors duration-200 hover:text-green'
          >
            Contact me
          </a>
        </div>
      </div>
      {/* Project */}
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            techs={project.techs}
            smThumb={project.thumbnailSmall}
            lgThumb={project.thumbnailLarge}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
