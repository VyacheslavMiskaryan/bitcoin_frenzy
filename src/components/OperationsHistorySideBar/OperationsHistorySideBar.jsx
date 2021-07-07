import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, Divider } from '@material-ui/core';

import OperationsHistorySideBarMaterialStyles from './OperationHistorySideBarMaterialStyles';
import './OperationsHistorySideBarStyles.sass';

const OperationsHistorySideBar = ({ operationsHistory }) => {
  const classes = OperationsHistorySideBarMaterialStyles();

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

OperationsHistorySideBar.propTypes = {
  operationsHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default React.memo(OperationsHistorySideBar);
