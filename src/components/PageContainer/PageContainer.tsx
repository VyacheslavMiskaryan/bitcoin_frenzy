import React from 'react';

import './styles.sass';

type PageContainerType = {
  children?: JSX.Element,
}

const PageContainer = ({ children }: PageContainerType): JSX.Element => (
  <div className="page-container">
    {children}
  </div>
);

PageContainer.defaultProps = {
  children: null,
};

export default PageContainer;
