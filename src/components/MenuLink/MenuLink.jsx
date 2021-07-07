import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import menuLinkIcon from '../../assets/images/icon.svg';
import './MenuLinkStyles.sass';

const MenuLink = ({
  menuText, link, url,
}) => (
  <div className="link-area">
    <Link
      to={`/${link}`}
      className="link-field"
    >
      <img src={menuLinkIcon} alt="icon" />
      &ensp;
      <span className={(url === link) ? 'active-link' : 'link'}>
        {menuText}
      </span>
    </Link>
  </div>
);

MenuLink.propTypes = {
  menuText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default React.memo(MenuLink);
