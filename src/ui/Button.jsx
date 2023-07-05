import PropTypes from 'prop-types';

const Button = ({ text, link }) => {
  return (
    <a
      href={`#${link}`}
      className='leading-[26px] font-bold tracking-[2.286px] pb-[10px] border-b-2 border-green uppercase hover:text-green transition-colors duration-200 cursor-pointer'
    >
      {text}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
