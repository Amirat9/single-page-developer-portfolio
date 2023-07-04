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
      <div className='absolute top-64 right-[-64px]'>
        <img
          src='./images/pattern-circle.svg'
          alt='Background Circle'
        />
      </div>
      {/* Profile Image */}
      <div className='absolute top-0 right-0 left-0 -z-20'>
        <img
          src='./images/image-profile-mobile.webp'
          alt='Mobile Profile Image'
          className='w-[174px] h-96 mx-auto'
        />
      </div>
      {/* Main Title */}
      <h1 className='heading-1 text-center sm:text-left sm:max-w-[443px] sm:mb-[60px]'>
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
