import Form from './Form';
import Navbar from './Navbar';
const Footer = () => {
  return (
    <>
      <>
        <div className='flex flex-col gap-5 pb-20 border-b sm:px-36'>
          <h2 className='heading-1 capitalize text-center'>contact</h2>
          <p className='text-center'>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <Form />
        </div>
        <div className=' pt-10 pb-16'>
          <Navbar />
        </div>
      </>
    </>
  );
};

export default Footer;
