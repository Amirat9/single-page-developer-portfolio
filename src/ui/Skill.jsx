import PropTypes from 'prop-types';

const Skill = ({ name, year }) => {
  return (
    <div className='text-center sm:text-left'>
      <h2 className='text-[32px] leading-10 tracking-[-1px] font-bold sm:text-5xl sm:leading-[56px] sm:tracking-[-1.5px]'>
        {name}
      </h2>
      <p className='text-lightGrey leading-[26px] font-medium capitalize'>
        {year} years experience
      </p>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Skill;
