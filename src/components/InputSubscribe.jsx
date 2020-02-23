import React from 'react';

const InputSubscribe = ({ text }) => {
  return (
    <form action='/' method='post'>
      <div className='email-subscribe'>
        <input
          type='email'
          name='emailSubscribe'
          id='emailSubscribe'
          className='email-subscribe__input'
          placeholder='Your E-mail'
        />
        <button type='submit' className='email-subscribe__btn'>
          {text}
        </button>
      </div>
    </form>
  );
};

export default InputSubscribe;
