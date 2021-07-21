import React from 'react';

import './styles.sass';

type SubTitleType = {
  subTitleMessage: string,
}

const SubTitle = ({ subTitleMessage }: SubTitleType): JSX.Element => (
  <div className="score">
    <h2>{subTitleMessage}</h2>
  </div>
);

export default SubTitle;
