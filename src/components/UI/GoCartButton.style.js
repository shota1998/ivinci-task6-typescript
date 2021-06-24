import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'transparent',
    color: '#1ad1b9',
  },
  badge: {
    backgroundColor: '#1ad1b9',
    borderRadius: '30px',
    padding: '0.15rem 1.25rem',
    marginLeft: '0.30rem',
    color: '#1d1d1d',
  },
}));

export default useStyles;
