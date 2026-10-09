// src/pi/config.js

export const PI_CONFIG = {
  host: '10.42.0.1',
  apiPort: 5000,
  streamPort: 8080,

  // Verify which of these actually exist on your Raspberry Pi.
  paths: {
    status: '/status',
    grade: '/grade',
  },

  healthTimeout: 5000,
  inferenceTimeout: 30000,
};

export const piUrl = (path) => {
  return `http://${PI_CONFIG.host}:${PI_CONFIG.apiPort}${path}`;
};