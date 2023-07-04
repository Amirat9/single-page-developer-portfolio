import { useState, useRef } from 'react';

const Form = () => {
  const nameErrorMsg = useRef(null);
  const emailErrorMsg = useRef(null);
  const emailFormatErrorMsg = useRef(null);
  const messageErrorMsg = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handleMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      nameErrorMsg.current.classList.remove('hidden');
      name.current.classList.remove('border-white');
      name.current.classList.remove('border-opacity-50');
      name.current.classList.add('border-errorColor');
    }

    if (!formData.email) {
      emailErrorMsg.current.classList.remove('hidden');
      email.current.classList.remove('border-white');
      email.current.classList.remove('border-opacity-50');
      email.current.classList.add('border-errorColor');
    }

    if (!formData.message) {
      messageErrorMsg.current.classList.remove('hidden');
      message.current.classList.remove('border-white');
      message.current.classList.remove('border-opacity-50');
      message.current.classList.add('border-errorColor');
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      emailFormatErrorMsg.current.classList.remove('hidden');
      email.current.classList.remove('border-white');
      email.current.classList.remove('border-opacity-50');
      email.current.classList.add('border-errorColor');
    } else {
      // nameErrorMsg.current.classList.add('hidden');
      // emailErrorMsg.current.classList.add('hidden');
      // emailFormatErrorMsg.current.classList.add('hidden');
      // messageErrorMsg.current.classList.add('hidden');
      // name.current.classList.remove('border-errorColor');
      // email.current.classList.remove('border-errorColor');
      // message.current.classList.remove('border-errorColor');
      // name.current.classList.add('border-white');
      // name.current.classList.add('border-opacity-50');
      // email.current.classList.add('border-white');
      // email.current.classList.add('border-opacity-50');
      // message.current.classList.add('border-white');
      // message.current.classList.add('border-opacity-50');
      // name.current.value = '';
      // email.current.value = '';
      // message.current.value = '';
      console.log(formData);
    }
  };
  return (
    <form
      id='contact'
      className='flex flex-col gap-8 mt-12  lg:w-1/2 lg:mt-0'
      onSubmit={handleSubmit}
      noValidate
    >
      <div className='relative flex flex-col'>
        <input
          type='text'
          name='name'
          id='name'
          ref={name}
          onChange={handleNameChange}
          className='bg-transparent w-full px-6 py-4 text-white leading-7 border-b-2 border-white border-opacity-50 focus:outline-none focus:border-green'
          placeholder='NAME'
        />
        <p
          ref={nameErrorMsg}
          className='text-[12px] font-medium text-errorColor self-end hidden'
        >
          Can not be empty
        </p>
      </div>
      <div className='relative flex flex-col'>
        <input
          type='email'
          name='email'
          id='email'
          ref={email}
          onChange={handleEmailChange}
          className='bg-transparent w-full px-6 py-4 text-white leading-7 border-b-2 border-white border-opacity-50 focus:outline-none focus:border-green'
          placeholder='EMAIL'
        />
        <p
          ref={emailErrorMsg}
          className='text-[12px] font-medium text-errorColor self-end hidden'
        >
          Can not be empty
        </p>
        <p
          ref={emailFormatErrorMsg}
          className='text-[12px] font-medium text-errorColor self-end hidden'
        >
          Sorry, invalid format here
        </p>
      </div>
      <div className='relative flex flex-col'>
        <textarea
          name='message'
          id='message'
          placeholder='MESSAGE'
          ref={message}
          onChange={handleMessageChange}
          className='bg-transparent w-full px-6 pb-20 text-white leading-7 border-b-2 border-white border-opacity-50 resize-none focus:outline-none focus:border-green'
        ></textarea>
        <p
          ref={messageErrorMsg}
          className='text-[12px] font-medium text-errorColor self-end hidden'
        >
          Can not be empty
        </p>
      </div>
      <div className='self-end'>
        <button className='bg-darkGrey text-white font-bold pb-3 tracking-[2.286px] border-b-2 border-green uppercase hover:text-green transition-colors duration-200'>
          send message
        </button>
      </div>
    </form>
  );
};

export default Form;
