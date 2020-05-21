import React from 'react';
import PropTypes from 'prop-types';


const NavIcon = ({ image, className, altText, onPress }) => {
    return (
        <div className={className}>
            <a href="/#" onClick={onPress}>
                <img src={image} alt={altText} />
            </a>
        </div>
    )
}

NavIcon.propTypes = {
    onPress: PropTypes.func,
};

NavIcon.defaultProps = {
    onPress: () => { },
};

export default NavIcon;     