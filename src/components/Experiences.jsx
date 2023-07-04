import data from '../data.json';
import Skill from '../ui/Skill';
const Experiences = () => {
  return (
    <section className='grid grid-cols-1 gap-y-6 mt-[92px] py-10 border-y sm:grid-cols-2 sm:mt-[72px] sm:border-y-0 sm:border-t'>
      {data.skills.map((skill, index) => (
        <Skill
          key={index}
          name={skill.name}
          year={skill.year}
        />
      ))}
    </section>
  );
};

export default Experiences;
