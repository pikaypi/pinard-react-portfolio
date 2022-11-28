import React, {useState} from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
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
    alert(`Thank you ${name} for submitting your message! Paul will return your message at ${email}`)
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <h2>Leave a Message</h2>
      <form className='form'>
        <input
          value={name}
          name='name'
          type='text'
          placeholder='Name'
          onChange={handleInputChange}
        />
        <input
          value={email}
          name='email'
          type='text'
          placeholder='Email Address'
          onChange={handleInputChange}
        />
        <input
          value={message}
          name='message'
          type='text-area'
          placeholder='Message'
          onChange={handleInputChange}
        />
        <button type='button' onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact;