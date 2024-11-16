export default ({ config }) => ({
  ...config,
  name: 'EstuRide',
  slug: 'esturide',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/icon.png',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
    eas: {
      projectId: 'fa4d1cbd-cf6a-423f-94c0-590064c9ac6f',
    },
  },
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/fa4d1cbd-cf6a-423f-94c0-590064c9ac6f',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: ['expo-router', 'expo-font'],
});
