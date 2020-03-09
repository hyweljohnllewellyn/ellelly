import React from 'react'

import './Form.css'

export default ({
  name = 'Ellelly Contact Form',
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
  <div className="Form--Group">
    <label className="Form--Label">
      <input
        className="Form--Input Form--InputText"
        type="text"
        placeholder="Firstname"
        name="firstname"
        required
      />
      <span>Firstname</span>
    </label>
    <label className="Form--Label">
      <input
        className="Form--Input Form--InputText"
        type="text"
        placeholder="Lastname"
        name="lastname"
        required
      />
      <span>Lastname</span>
    </label>
  </div>
  <label className="Form--Label">
    <input
      className="Form--Input Form--InputText"
      type="email"
      placeholder="Email"
      name="emailAddress"
      required
    />
    <span>Email address</span>
  </label>
  <label className="Form--Label has-arrow">
    <select
      className="Form--Input Form--Select"
      name="type"
      defaultValue="Type of Enquiry"
      required
    >
      <option disabled hidden>
        Type of Enquiry
      </option>
      <option>Find out more</option>
      <option>Just saying hello</option>
    </select>
  </label>
  <label className="Form--Label">
    <textarea
      className="Form--Input Form--Textarea Form--InputText"
      placeholder="Message"
      name="message"
      rows="10"
      required
    />
    <span>Message</span>
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
