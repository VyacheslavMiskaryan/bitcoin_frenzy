import { makeStyles } from '@material-ui/core/styles';

import colors from '../../colors';

const MainButtonMaterialStyles = makeStyles(() => ({
  button: {
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: colors.mainColor,
  },
  priceButton: {
    width: 170,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 20,
    fontSize: 12,
  },
}));

export default MainButtonMaterialStyles;
