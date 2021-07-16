import { makeStyles } from '@material-ui/core/styles';

import colors from '../../colors';

const HeaderMaterialStyles = makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.mainColor,
  },
}));

export default HeaderMaterialStyles;
