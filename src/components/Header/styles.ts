import { makeStyles } from '@material-ui/core/styles';

import colors from '../../colors';

const Styles = makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.mainColor,
  },
}));

export default Styles;
