import { makeStyles } from '@material-ui/core/styles';

const HeaderStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  bitcoinCourse: {
    marginLeft: '7%',
    fontSize: 15,
  },
  walletInformation: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 13,
    lineHeight: 2,
  },
}));

export default HeaderStyles;
