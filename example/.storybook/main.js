module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../storybook/**/index.tsx',
  ],
  addons: [
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'react-native-web',
          '@expo/vector-icons',
          'react-native-keyboard-aware-scroll-view',
          'react-native-safe-area-context',
          'react-native-svg',
          '@react-native-aria/overlays',
          '@react-native-async-storage/async-storage',
          'expo',
          'expo-font',
          'expo-linear-gradient',
          'expo-splash-screen',
          'expo-status-bar',
        ],
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
  ],
  framework: '@storybook/react',
};
