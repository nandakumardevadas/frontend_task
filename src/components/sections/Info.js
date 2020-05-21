import React from 'react';
import map from '../../assets/img/map.png';

const Info = () => {
  return (
    <div className="section2">
      <div className="section2__text-container">
        <h1>
          Mauris id bibendum est. Propin dapibus sollicitudin iaculis, Maecenas condimentum maximus laoreet.
          </h1>
        <p className="section2__text-container__desc">
        In maximus euismod egestas. Fusce tincidunt posuere est non ele n maximus euismod egestas. Fusce tincidunt posuere est non elementum. Vivamus tincidunt eleifend nisl et gravida. Aenean in lorem ultrices, pellentesque augue eu, mattis est. Praesent sed volutpat nibh. Morbi faucibus tortor sed neque vulputate hendrerit. Sed aliquam mattis purus eleifend consectetur. Nulla mollis non enim non tempus.
        </p>
      </div>
      <img alt="map" src={map} />
    </div>
  );
}

export default Info;
