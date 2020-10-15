import React from 'react';
import './Signup.css';

export default function Signup (props) {
  const { error } = props;
  return (
    <section className='login-container'>
      <form className='login-form' onSubmit={props.handleSubmitBasicAuth}>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className='user-pass-entry'>
          <label htmlFor='login-form-username'>
            username:
          </label>
          <input required name='user_name' id='login-form-username' />
          <label htmlFor='login-form-password'>
            password:
          </label>
          <input required name='password' type='password' id='login-form-password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

Signup.defaultProps = {
  onLoginSuccess: () => {}
}