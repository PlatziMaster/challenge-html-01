import React from 'react';

const InputSubscribe = () => {
  return (
    <form>
      <input
        type='email'
        name='emailSubscribe'
        id='emailSubscribe'
        className='emailSubscribe'
        placeholder='Your E-mail'
      />
      <button type='submit'>Subscribe</button>
    </form>
  );
};

export default InputSubscribe;
