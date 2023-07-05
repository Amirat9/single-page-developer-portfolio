import { useRef, useState } from 'react';

const Form = () => {
  // State of the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Form Refs
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const nameErrorRef = useRef();
  const emailEmptyErrorRef = useRef();
  const emailFormatErrorRef = useRef();
  const messageErrorRef = useRef();

  // Email Regex
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;

  // Form Change Handlers
  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
    if (nameRef.current.classList.contains('border-b-errorColor')) {
      nameRef.current.classList.remove('border-b-errorColor');
      nameRef.current.classList.add('focus:border-green');
      nameErrorRef.current.classList.add('hidden');
    }
  };
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
    if (emailRef.current.classList.contains('border-b-errorColor')) {
      emailRef.current.classList.remove('border-b-errorColor');
      emailRef.current.classList.add('focus:border-green');
      emailEmptyErrorRef.current.classList.add('hidden');
      emailFormatErrorRef.current.classList.add('hidden');
    }
  };
  const handleMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
    if (messageRef.current.classList.contains('border-b-errorColor')) {
      messageRef.current.classList.remove('border-b-errorColor');
      messageRef.current.classList.add('focus:border-green');
    }
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if form is valid
    if (formData.name === '') {
      nameRef.current.focus();
      nameRef.current.classList.remove('focus:border-green');
      nameRef.current.classList.add('border-b-errorColor');
      nameErrorRef.current.classList.remove('hidden');
      return;
    }

    if (formData.email === '') {
      emailRef.current.focus();
      emailRef.current.classList.remove('focus:border-green');
      emailRef.current.classList.add('border-b-errorColor');
      emailEmptyErrorRef.current.classList.remove('hidden');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      emailRef.current.focus();
      emailRef.current.classList.remove('focus:border-green');
      emailRef.current.classList.add('border-b-errorColor');
      emailFormatErrorRef.current.classList.remove('hidden');
      return;
    }

    if (formData.message === '') {
      messageRef.current.focus();
      messageRef.current.classList.remove('focus:border-green');
      messageRef.current.classList.add('border-b-errorColor');
      return;
    }

    console.log(formData);

    // Clear form
    setFormData({ name: '', email: '', message: '' });
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <form
      id='contact'
      onSubmit={handleSubmit}
      noValidate
      className='flex flex-col gap-8 mt-[50px] lg:mt-0 lg:w-[445px]'
    >
      {/* Name Input */}
      <div className='flex flex-col'>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='NAME'
          ref={nameRef}
          onChange={handleNameChange}
          className='pb-4 px-6 bg-transparent border-b focus:outline-none focus:border-green'
        />
        <span
          ref={nameErrorRef}
          className='text-xs text-errorColor mt-1 tracking-[-0.167px] self-end hidden'
        >
          Should not be Empty
        </span>
      </div>

      {/* Email Input */}
      <div className='flex flex-col'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='EMAIL'
          ref={emailRef}
          onChange={handleEmailChange}
          className='pb-4 px-6 bg-transparent border-b focus:outline-none focus:border-green'
        />
        <span
          ref={emailEmptyErrorRef}
          className='text-xs text-errorColor mt-1 tracking-[-0.167px] self-end hidden'
        >
          Should not be Empty
        </span>
        <span
          ref={emailFormatErrorRef}
          className='text-xs text-errorColor mt-1 tracking-[-0.167px] self-end hidden'
        >
          Sorry, invalid format here
        </span>
      </div>
      {/* Message Input */}
      <div className='flex flex-col'>
        <textarea
          name='message'
          id='message'
          placeholder='MESSAGE'
          ref={messageRef}
          onChange={handleMessageChange}
          className='bg-transparent pb-20 px-6 border-b resize-none focus:outline-none focus:border-green'
        ></textarea>
        <span
          ref={messageErrorRef}
          className='text-xs text-errorColor mt-1 tracking-[-0.167px] self-end hidden'
        >
          Should not be Empty
        </span>
      </div>
      {/* Submit Button */}
      <div className='self-end'>
        <button className='leading-[26px] font-bold tracking-[2.286px] pb-[10px] border-b-2 border-green uppercase hover:text-green transition-colors duration-200 cursor-pointer'>
          send message
        </button>
      </div>
    </form>
  );
};

export default Form;
