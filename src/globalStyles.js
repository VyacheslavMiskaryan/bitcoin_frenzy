import { makeStyles } from '@material-ui/core/styles';

import colors from './colors';

const globalStyles = makeStyles(() => ({
  button: {
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: colors.mainColor,
  },
}));

export default globalStyles;
