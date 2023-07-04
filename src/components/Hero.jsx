import mobileHero from '../../public/images/mobile-hero.png';
import tabletHero from '../../public/images/image-profile-tablet.webp';
import desktopHero from '../../public/images/image-profile-desktop.webp';
import Cricle from '../../public/images/pattern-circle.svg';

const Hero = () => {
  return (
    <section className='mx-4 lg:mx-40'>
      <div className='absolute h-96 w-44 top-0 translate-x-[-50%] left-1/2 mx-auto gradient sm:hidden '>
        <img
          src={mobileHero}
          alt=''
          className=' w-44 h-full mx-auto object-contain object-bottom -z-20'
        />
      </div>
      <div className='absolute h-[600px] w-80 top-[-6%] right-[-6%] left-1/2 mx-auto gradient hidden sm:block -z-20 '>
        <img
          src={tabletHero}
          alt=''
          className='mx-auto object-contain object-bottom'
        />
      </div>
      <div className='absolute h-[720px] w-[445px] top-0 right-10 left-1/2 mx-auto gradient hidden lg:block lg:-z-20 '>
        <img
          src={desktopHero}
          alt=''
          className='mx-auto object-contain object-bottom'
        />
      </div>
      <div className='text-center lg:w-[709px] lg:text-left'>
        <h1 className='text-[40px]  font-bold leading-10 tracking-[-1.136px] mt-80 sm:w-[450px] sm:h-[223px] sm:text-[72px] sm:leading-[72px] sm:mt-[90px] sm:tracking-[-1.5px] sm:text-left lg:w-full lg:mt-48 lg:text-[88px] lg:leading-[88px] lg:tracking-[-2.5px]'>
          Nice to meet you! I’m{' '}
          <span className='underline underline-offset-8 decoration-green '>
            Adam Keyes
          </span>
          .
        </h1>
        <p className='text-left text-lightGrey my-6 lg:mr-[261px] lg:mb-28'>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <div>
          <a
            href='#contact'
            className='font-bold border-b-2 pb-2 uppercase transition-colors duration-200 border-green hover:text-green'
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
