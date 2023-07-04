import Form from './Form';
import Navbar from './Navbar';
const Footer = () => {
  return (
    <footer className='relative pt-[60px] px-4 pb-2 bg-darkGrey mx-[-16px] sm:mx-[-32px] lg:mx-[-165px] lg:px-40 '>
      {/* Footer Content */}
      <div className='flex flex-col pb-20 border-b sm:px-36 lg:px-0 lg:flex-row lg:justify-between'>
        <div className='flex flex-col gap-5 text-center lg:gap-9 lg:text-left lg:max-w-[445px]'>
          <h2 className='heading-1 capitalize'>contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        {/* Contact Form */}
        <Form />
      </div>
      {/* Footer Navbar */}
      <div className=' pt-10 pb-16'>
        <Navbar />
      </div>
      {/* Footer Ring */}
      <div className='absolute bottom-[280px] translate-x-[-50%] sm:translate-x-0 sm:bottom-40 sm:-left-1/2 lg:bottom-48 lg:translate-x-[85%]'>
        <img
          src='./images/pattern-rings.svg'
          alt='Footer Rings'
          className='w-[530px] h-32'
        />
      </div>
    </footer>
  );
};

export default Footer;
