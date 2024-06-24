module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@api': './src/fetch-api/api',
          '@components': './src/components',
          '@hooks': './src/fetch-api/hooks',
          '@customTypes': './src/fetch-api/types',
        },
      },
    ],
  ],
};
