import Button from './Button';
const ProjectItem = ({ title, techs, smThumb, lgThumb }) => {
  return (
    <div>
      <div className='relative mb-5 [&>*:first-child]:lg:hover:block lg:hover:cursor-pointer'>
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-75 min-w-full min-h-full hidden'>
          <div className='flex flex-col items-center justify-center min-h-full gap-8'>
            <div className='text-center'>
              <Button text={'View Project'} />
            </div>
            <div className='text-center'>
              <Button text={'view code'} />
            </div>
          </div>
        </div>
        <img
          src={smThumb}
          alt='small thumbnail'
        />
      </div>
      <h3 className='text-2xl font-bold uppercase'>{title}</h3>
      <div className='flex gap-5 mt-2 text-lightGrey uppercase'>
        {/* eslint-disable-next-line react/prop-types */}
        {techs.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
      <div className='flex gap-8 mt-5 lg:hidden'>
        <div>
          <Button text={'View Project'} />
        </div>
        <div>
          <Button text={'view code'} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
