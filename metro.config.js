const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(__dirname, `src/${name}`),
      },
    ),
  },
  watchFolders: [path.resolve(__dirname, 'src')],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
