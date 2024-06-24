const path = require('path');

module.exports = {
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
