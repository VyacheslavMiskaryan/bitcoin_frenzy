import React from 'react';
import { useSelector } from 'react-redux';

import { List, ListItem, Divider } from '@material-ui/core';

import OperationsHistorySideBarMaterialStyles from './styles';
import './styles.sass';

const OperationsHistorySideBar = () => {
  const classes = OperationsHistorySideBarMaterialStyles();
  const { operationsHistory } = useSelector((state) => state.wallet);

  return (
    <div className="operations-history-container">
      <List>
        {operationsHistory.map((operation) => (
          <div key={`history-${operation.id}`}>
            <ListItem className={classes.listItem}>
              <p className={classes.dateField}>{operation.date}</p>
              <p className={classes.titleField}>{operation.title}</p>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default React.memo(OperationsHistorySideBar);
