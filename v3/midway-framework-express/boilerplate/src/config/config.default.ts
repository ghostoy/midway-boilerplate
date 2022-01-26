import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '{{keys}}',
  express: {
    port: 7001,
  },
} as MidwayConfig;
