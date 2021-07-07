import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MenuLink from '../MenuLink';
import menuLinks from '../../constants';
import './SideMenuStyles.sass';

const SideMenu = () => {
  const location = useLocation();
  const [url, setUrl] = useState(location.pathname.slice(1));
  useEffect(() => {
    setUrl(location.pathname.slice(1));
  }, [location.pathname]);

  return (
    <div className="menu">
      {menuLinks.map((link) => (
        <MenuLink
          key={Math.random()}
          menuText={link.name}
          link={link.link}
          url={url}
          setUrl={setUrl}
        />
      ))}
    </div>
  );
};

export default SideMenu;
