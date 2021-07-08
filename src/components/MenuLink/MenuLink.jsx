import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import menuLinkIcon from '../../assets/images/icon.svg';
import './MenuLinkStyles.sass';

const MenuLink = ({
  menuText, isActive, link,
}) => (
  <div className="link-area">
    <Link
      to={`/${link}`}
      className="link-field"
    >
      <img src={menuLinkIcon} alt="icon" />
      &ensp;
      <span className={isActive ? 'active-link' : 'link'}>
        {menuText}
      </span>
    </Link>
  </div>
);

MenuLink.propTypes = {
  menuText: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default React.memo(MenuLink);
