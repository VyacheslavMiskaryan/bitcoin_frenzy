import { makeStyles } from '@material-ui/core/styles';

const OperationsHistorySideBarMaterialStyles = makeStyles(() => ({
  listItem: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 13,
    padding: 0,
  },
  dateField: {
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
  titleField: {
    marginTop: 0,
  },
}));

export default OperationsHistorySideBarMaterialStyles;
