import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { Preview } from "@storybook/angular";
setCompodocJson(docJson);



const preview: Preview = {
  parameters: {
    docs: {
      title: 'Luna UI',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
