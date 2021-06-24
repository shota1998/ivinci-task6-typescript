import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  title: {
    flex: 1,
  },
  title_font: {
    color: 'black',
  },
}));

export default useStyles;
