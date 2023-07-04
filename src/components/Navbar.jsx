import GithubIcon from '../ui/GithubIcon';
import LinkedinIcon from '../ui/LinkedinIcon';
import TwitterIcon from '../ui/TwitterIcon';
import FrontendmentorIcon from '../ui/FrontendmentorIcon';

const Navbar = () => {
  return (
    <nav className='flex flex-col items-center justify-center sm:flex-row sm:justify-between'>
      <h3 className='text-2xl text-center leading-8 tracking-[0.333px] font-bold mb-5 sm:text-[32px] sm:leading-8 sm:tracking-[-0.444px] sm:text-left sm:mb-0'>
        adamkeyes
      </h3>
      <ul className='flex gap-5 justify-center sm:gap-7 lg:mr-5'>
        <li>
          <a href='#'>
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href='#'>
            <FrontendmentorIcon />
          </a>
        </li>
        <li>
          <a href='#'>
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href='#'>
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
