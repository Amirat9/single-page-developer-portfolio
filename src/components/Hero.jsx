import Button from '../ui/Button';

const Hero = () => {
  return (
    <main className='flex flex-col gap-6 mt-80 sm:mt-[90px] sm:gap-0'>
      {/* Rings */}
      <div className='absolute top-32 translate-x-[-50%] -z-30'>
        <img
          src='./images/pattern-rings.svg'
          alt='Background Rings'
          className='w-[530px] h-32'
        />
      </div>
      {/* circle */}
      <div
        className='absolute top-64 right-[-64px] sm:top-[471px] lg:top-[521px]
      lg:right-[490px] xl:right-[545px]'
      >
        <img
          src='./images/pattern-circle.svg'
          alt='Background Circle'
        />
      </div>
      {/* Profile Image */}
      <div className='absolute top-0 -left-1/2 -right-1/2 -z-20 sm:top-0 sm:-right-0 sm:left-auto lg:right-28 xl:right-[165px]'>
        <img
          src='./images/image-profile-mobile.webp'
          alt='Mobile Profile Image'
          className='w-[174px] h-96 mx-auto sm:hidden'
        />
        <img
          src='./images/image-profile-tablet.webp'
          alt='Tablet Profile Image'
          className='w-[322px] h-[600px] hidden sm:block lg:hidden'
        />
        <img
          src='./images/image-profile-desktop.webp'
          alt=''
          className='w-[445px] h-[720px] hidden lg:block'
        />
      </div>
      {/* Main Title */}
      <h1 className='heading-1 text-center sm:text-left sm:max-w-[443px] sm:mb-[60px] lg:max-w-[600px] xl:max-w-[706px]'>
        Nice to<span className='hidden sm:block lg:hidden'> </span> meet you!
        I’m{' '}
        <span className='underline decoration-green underline-offset-8'>
          Adam Keyes
        </span>
        .
      </h1>
      {/* Intro */}
      <p className='text-center sm:mb-8 sm:text-left sm:w-[445px]'>
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      {/* Contact Button */}
      <div className='self-center sm:self-start'>
        <Button text={'contact me'} />
      </div>
    </main>
  );
};

export default Hero;
