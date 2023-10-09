module.exports = {
  preset: 'jest-playwright-preset',
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['firefox'],
      launchOptions: {
        headless: false,
      },
    },
  },
  setupFilesAfterEnv: ['./setup.ts'],
};
