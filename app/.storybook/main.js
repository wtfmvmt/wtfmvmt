
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    'storybook-tailwind-dark-mode',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-addon-swc',
    "@storybook/addon-interactions",
    '@storybook/addon-measure',
    '@storybook/addon-storysource',
    'storybook-addon-toolbar-actions/register',
    "@storybook/preset-create-react-app",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  }
}