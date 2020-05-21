import React from 'react';
import ServiceInfo from '../container/ServiceInfo';
import ic_folder_setting from '../../assets/img/ic_folder_setting.svg';
import ic_staffing from '../../assets/img/ic_staffing.svg';
import ic_technical from '../../assets/img/ic_technical.svg';

const Services = () => {
  return (
    <div className="section1">
      <h2 className="section-1-title">Integer bibendum sit amet<br /> arcu vel egestas.</h2>
      <div className="services">
        <ServiceInfo image={ic_staffing} content="Service Name"></ServiceInfo>
        <ServiceInfo image={ic_technical} content="Service Name"></ServiceInfo>
        <ServiceInfo image={ic_folder_setting} content="Service Name"></ServiceInfo>
      </div>
    </div>
  )
}

export default Services;