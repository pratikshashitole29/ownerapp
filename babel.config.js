// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],   
    
//   };
// };
module.exports = function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];

  const plugins = [
    [
      'react-native-reanimated/plugin',
      {
        // Add any configuration options if needed
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
