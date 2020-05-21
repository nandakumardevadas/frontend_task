import React from 'react';
import Feedback from '../container/Feedback';
import { Inputs } from '../../constants/data';

const Testimonials = () => {
  const testimonials = Inputs['testimonials'];
  const Feedbacks = testimonials.map( ({content, profileImage, profileName, profileDesg }, index) => (
    <Feedback key={index} content={content} image={profileImage} name={profileName} designation={profileDesg}></Feedback>
  ));
  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <div className="testimonials-container__testimonials">
        {Feedbacks}
      </div>
    </div>
  );
}

export default Testimonials;
