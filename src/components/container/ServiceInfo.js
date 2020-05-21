import React from 'react';


const ServiceInfo = ({ image, content }) => {
    return (
        <div className="services__service">
            <img alt="" src={image} className="service-image" />
            <p>{content}</p>
        </div>
    )
}

export default ServiceInfo;