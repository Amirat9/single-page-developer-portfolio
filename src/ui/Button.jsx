const Button = ({ text }) => {
  return (
    <a
      href='#contact'
      className='leading-[26px] font-bold tracking-[2.286px] pb-[10px] border-b-2 border-green uppercase hover:text-green transition-colors duration-200 cursor-pointer'
    >
      {text}
    </a>
  );
};

export default Button;
