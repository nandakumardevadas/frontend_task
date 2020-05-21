import React from 'react';

const Contact = () => {
  return(
    <div className="section-work-with-us">
      <h1>Convinced to Work with us?</h1>
      <p>Company has helped agencies keep their promises to client since 2005.</p>
      <div className="section-work-with-us__inputs-container">
        <input placeholder="Fullname" name="fullName" type="text" />
        <input placeholder="Email Address" name="emailAddress" type="text" />
        <input placeholder="Phone Number" name="phoneNumber" type="text" />
      </div>
      <div className="section-work-with-us__text-area-container">
        <textarea placeholder="Message in brief"/>
      </div>
      <div className="section-work-with-us__btn-container">
        <button className="section-work-with-us__submit">Submit</button>
      </div>
    </div>
  )
}

export default Contact;
