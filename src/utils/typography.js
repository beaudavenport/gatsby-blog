import Typography from 'typography';
import oceanBreezeTheme from 'typography-theme-ocean-beach';

oceanBreezeTheme.overrideThemeStyles = () => ({
  a: {
    backgroundImage: 'none',
    color: '#288ddf',
    textShadow: 'none',
  },
  p: {
    marginBottom: '1rem',
  },
});

const typography = new Typography(oceanBreezeTheme);
export default typography;
