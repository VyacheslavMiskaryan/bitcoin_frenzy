import React from 'react';

import MenuLink from '../MenuLink';
import menuLinks from '../../constants';
import './SideMenuStyles.sass';

const SideMenu = () => (
  <div className="menu">
    {menuLinks.map((link) => (
      <MenuLink key={Math.random()} menuText={link.name} link={link.link} />
    ))}
  </div>
);

export default SideMenu;
