import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    borderBottom: '1px solid black',
  },
  place: {
    width: 25,
    padding: 8,
    borderRight: '1px solid black',
  },
  nameInput: {
    width: '100%',
    fontSize: 'inherit',
    margin: 8,
  },
  rating: {
    margin: 8,
  },
  editButton: {
    margin: 8,
    fontSize: 18,
  }
}, {
  name: 'user',
});

export default useStyles;
