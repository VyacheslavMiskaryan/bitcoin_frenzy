import { makeStyles } from '@material-ui/core/styles';

import colors from '../../colors';

const HeaderStyles = makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.mainColor,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    color: colors.mainTextColor,
  },
  bitcoinRate: {
    marginLeft: '7%',
    fontSize: 15,
    color: colors.mainTextColor,
  },
  walletInformation: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 13,
    lineHeight: 2,
    color: colors.mainTextColor,
  },
}));

export default HeaderStyles;
