import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

import { withTableOfContents } from 'storybook-docs-toc';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  ...withTableOfContents()
}



export const globalTypes = {
  darkMode: true,
};