import Typography from 'typography';
import oceanBreezeTheme from 'typography-theme-ocean-beach';

oceanBreezeTheme.overrideThemeStyles = () => ({
  a: {
    backgroundImage: 'none',
    color: '#247cc3',
  },
});

const typography = new Typography(oceanBreezeTheme);
export default typography;
