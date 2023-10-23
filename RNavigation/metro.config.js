/* eslint-disable prettier/prettier */
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    server: {
      port: 8084, // Change this to another port, e.g., 8082
    },
  };

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
