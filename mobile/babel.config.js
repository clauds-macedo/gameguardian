module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@screens': './src/presentation/screens',
          '@hooks': './src/presentation/hooks',
          '@routes': './src/presentation/routes',
          '@components': './src/presentation/components',
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@data': './src/data',
          '@store': './src/store',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
