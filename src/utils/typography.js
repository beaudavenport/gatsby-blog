import Typography from 'typography';
import irvingTheme from 'typography-theme-irving';

irvingTheme.overrideThemeStyles = () => ({
  a: {
    backgroundImage: 'none',
    color: '#288ddf',
    textShadow: 'none',
  },
  p: {
    marginBottom: '1rem',
  },
  blockquote: {
    color: '#747474',
    borderLeft: '4px solid lightgray',
    paddingLeft: '.5rem',
    marginLeft: '.2rem !important',
    fontSize: '.8rem !important',
  },
  code: {
    backgroundColor: '#4f4f4f',
    color: '#dbdbdb',
    paddingLeft: '5px !important',
    paddingRight: '5px !important',
    borderRadius: '3px !important',
  },
});

const typography = new Typography(irvingTheme);
export default typography;
