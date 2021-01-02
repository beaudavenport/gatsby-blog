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
    borderLeft: '2px solid #747474',
    paddingLeft: '.5rem',
    marginLeft: '.2rem !important',
  },
});

const typography = new Typography(irvingTheme);
export default typography;
