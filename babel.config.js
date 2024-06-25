module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@api': './src/fetch-api/api',
          '@components': './src/components',
          '@screens': './src/screens',
          '@hooks': './src/fetch-api/hooks',
          '@customTypes': './src/fetch-api/types',
          '@navigation': './src/navigation',
          '@locales': './src/locales',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
