import React from 'react'

import './Form.css'

export default ({
  name = 'Simple Form',
  subject = 'enquiry from ellilly.com website', // optional subject of the notification email
  action = ''
}) => (
  <form
    className='Form'
    name={name}
    action={action}
    data-netlify="true"
    data-netlify-honeypot="_gotcha"
    netlify-recaptcha="true"
  >
    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='text'
        placeholder='Name'
        name='name'
        required
      />
      <span>Name</span>
    </label>
    <label className='Form--Label'>
      <input
        className='Form--Input'
        type='email'
        placeholder='Email'
        name='email'
        required
      />
    </label>
    <label className='Form--Label'>
      <textarea
        className='Form--Input Form--Textarea'
        placeholder='Message'
        name='message'
        rows='10'
        required
      />Message
    </label>
    <input type='text' name='_gotcha' style={{ display: 'none' }} />
    {!!subject && <input type='hidden' name='subject' value={subject} />}
    <input type='hidden' name='form-name' value={name} />
    <div data-netlify-recaptcha="true"></div>
    <input
      className='Button Form--SubmitButton'
      type='submit'
      value='Send'
    />
  </form>
)
