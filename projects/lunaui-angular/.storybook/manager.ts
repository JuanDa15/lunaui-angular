import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  sidebar: {
    showRoots: false,
  },
  theme: {
    ...themes.dark,
    brandTitle: 'Luna UI - Angular',
  },
  title: 'Luna UI',
});
