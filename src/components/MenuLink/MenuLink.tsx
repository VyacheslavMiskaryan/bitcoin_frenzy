import React from 'react';
import { Link } from 'react-router-dom';

import menuLinkIcon from '../../assets/images/icon.svg';
import './styles.sass';

type MenuLinkTypes = {
  menuText: string,
  isActive: boolean,
  link: string,
};

const MenuLink = ({
  menuText, isActive, link,
}: MenuLinkTypes): JSX.Element => (
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

export default React.memo(MenuLink);
