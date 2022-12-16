

module.exports = {
  stories: [
    "../stories/**/Home.stories.mdx",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, '../views/styles/'),
      '@components': path.resolve(__dirname, '../views/components/'),
    }
  },
  addons: [
    'storybook-tailwind-dark-mode',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-console',
    '@storybook/addon-actions/register',
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