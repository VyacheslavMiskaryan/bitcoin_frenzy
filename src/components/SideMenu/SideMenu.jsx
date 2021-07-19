import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MenuLink from '../MenuLink';
import menuLinks from './constants';
import './styles.sass';

const SideMenu = () => {
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname.slice(1));

  useEffect(() => {
    setUrl(location.pathname.slice(1));
  }, [location.pathname]);

  return (
    <div className="menu">
      {menuLinks.map((link) => {
        const isActive = link.link === url;
        return (
          <MenuLink
            key={`link-${link.link}`}
            menuText={link.name}
            isActive={isActive}
            link={link.link}
            setUrl={setUrl}
          />
        );
      })}
    </div>
  );
};

export default SideMenu;
