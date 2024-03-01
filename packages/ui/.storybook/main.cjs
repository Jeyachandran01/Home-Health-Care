module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-react-router-v6',
  ],
  staticDirs: ['../assets'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    let coreAlias = await import('@core/alias');
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [...coreAlias.default],
      },
    };
  },
};
