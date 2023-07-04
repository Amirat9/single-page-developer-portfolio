import Form from './Form';
import Navbar from './Navbar';
const Footer = () => {
  return (
    <section className='flex flex-col mt-20 py-14 px-4 lg:mx-40 lg:py-[84px] lg:px-0'>
      <div className='flex flex-col pb-20 mb-10 border-b-2 lg:flex-row lg:justify-between lg:gap-56'>
        <div className='flex flex-col gap-5 text-center lg:text-left lg:w-1/2 lg:gap-9'>
          <h1 className='text-[40px] leading-10 lg:text-[88px] lg:leading-[88px] self-stretch'>
            Contact
          </h1>
          <p className='text-lightGrey'>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <Form />
      </div>
      <Navbar />
    </section>
  );
};

export default Footer;
