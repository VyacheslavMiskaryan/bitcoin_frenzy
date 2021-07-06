import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import menuLinkIcon from '../../assets/images/icon.svg';
import './MenuLinkStyles.sass';

const MenuLink = ({ menuText, link }) => (
  <div className="link-area">
    <Link
      to={`/${link}`}
    >
      <img src={menuLinkIcon} alt="icon" />
      &ensp;
      <span className="link">
        {menuText}
      </span>
    </Link>
  </div>
);

MenuLink.propTypes = {
  menuText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MenuLink;
