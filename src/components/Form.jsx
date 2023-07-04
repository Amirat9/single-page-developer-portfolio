const Form = () => {
  return (
    <form
      id='contact'
      noValidate
      className='flex flex-col gap-8 mt-[50px]'
    >
      <input
        type='text'
        name='name'
        id='name'
        className='pb-4 px-6 bg-transparent border-b focus:outline-none focus:border-green'
        placeholder='NAME'
      />
      <input
        type='email'
        name='email'
        id='email'
        className='pb-4 px-6 bg-transparent border-b focus:outline-none focus:border-green'
        placeholder='EMAIL'
      />
      <textarea
        name='message'
        id='message'
        className='bg-transparent pb-20 px-6 border-b resize-none focus:outline-none focus:border-green'
        placeholder='MESSAGE'
      ></textarea>
      <div className='self-end'>
        <button className='leading-[26px] font-bold tracking-[2.286px] pb-[10px] border-b-2 border-green uppercase hover:text-green transition-colors duration-200 cursor-pointer'>
          send message
        </button>
      </div>
    </form>
  );
};

export default Form;
