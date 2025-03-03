module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@app': './app',
            '@assets': './assets',
            '@components': './components',
            '@libs': './libs',
            '@styles': './styles',
            '@const': './const',
            '@stores': './stores',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      ],
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};
