import ProjectItem from '../ui/ProjectItem';
import data from '../data.json';
import Button from '../ui/Button';
const Projects = () => {
  return (
    <section>
      <div className='flex items-center justify-between pt-20 pb-10'>
        <h2 className='heading-1 capitalize'>projects</h2>
        <Button text={'contact me'} />
      </div>
      <div className='grid grid-cols-1 gap-y-10 pb-20 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-20'>
        {data.projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            techs={project.techs}
            smThumb={project.smThumb}
            lgThumb={project.lgThumb}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
