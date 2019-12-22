import Typography from 'typography';
import oceanBreezeTheme from 'typography-theme-ocean-beach';

oceanBreezeTheme.overrideThemeStyles = () => ({
  a: {
    backgroundImage: 'none',
    color: '#247cc3',
    textShadow: 'none',
  },
});

const typography = new Typography(oceanBreezeTheme);
export default typography;
