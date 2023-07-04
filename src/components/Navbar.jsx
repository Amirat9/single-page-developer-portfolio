import GithubIcon from '../ui/GithubIcon';
import TwitterIcon from '../ui/TwitterIcon';
import LinkedinIcon from '../ui/LinkedinIcon';
import Frontendmentor from '../ui/FrontendmentorIcon';

const Navbar = () => {
  return (
    <nav className=' flex flex-col gap-5 pt-4 text-center sm:px-[30px] sm:pt-7 sm:flex-row sm:justify-between lg:mx-40 lg:pt-11 '>
      <h3 className='tracking-tighter z-30'>adamkeyes</h3>
      <ul className='flex gap-4 items-center lg:mx-0 lg:mr-5 lg:gap-6 z-30'>
        <li>
          <a href='#'>
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href='#'>
            <Frontendmentor className='transition-colors duration-200' />
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
