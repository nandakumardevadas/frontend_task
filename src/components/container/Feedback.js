import React from 'react';


const Feedback = ({ index, content , image, name, designation }) => {
    return (
        <div className="testimonials-container__testimonials__testimonial" key={index}>
            <blockquote>
              {content}
            </blockquote>
            <div className="testimonials-container__testimonials__profile-container">
              <img alt={`user profile ${name}`} src={image} className="testimonials-container__testimonials__profile-image" />
              <div className="testimonials-container__testimonials__profile-details">
                <p>{name}</p>
                <small>{designation}</small>
              </div>
            </div>
          </div>
    )
}

export default Feedback;