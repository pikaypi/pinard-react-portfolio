import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setSubmitMessage('')
    const {name, value} = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setSubmitMessage('Please be sure to leave your name with your message');
      return
    } else if (!validateEmail(email)) {
      setSubmitMessage('Please enter a valid email address');
      return
    } else if (!message) {
      setSubmitMessage('Uh oh! It looks like you forgot to leave a message!');
      return
    } else {
        setSubmitMessage(`Thank you, ${name}, for leaving a message. Paul will get back to you at ${email} very soon!`)
    }

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className='container form-container'>
      <h2>Leave a Message</h2>
      <form className='form'>
        <input
          value={name}
          name='name'
          type='text'
          placeholder='Name'
          onChange={handleInputChange}
          className='input'
        />
        <br/>
        <input
          value={email}
          name='email'
          type='email'
          placeholder='Email Address'
          onChange={handleInputChange}
          className='input'
        />
        <br/>
        <input
          value={message}
          name='message'
          type='text-area'
          placeholder='Message'
          onChange={handleInputChange}
          className='message'
        />
        <br/>
        <button
          type='button'
          onClick={handleFormSubmit}
          className='submit'
        >
          Submit
        </button>
      </form>
      <br/>
      {submitMessage && (
        <div>
          <p className="error-text">{submitMessage}</p>
        </div>
      )}
    </div>
  )
}
