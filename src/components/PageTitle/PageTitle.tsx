import React from 'react';

import './styles.sass';

type PageTitleType = {
  title: string,
}

const PageTitle = ({ title }: PageTitleType): JSX.Element => (
  <div className="title">
    <h2>{title}</h2>
  </div>
);

export default PageTitle;
