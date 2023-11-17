import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/contact',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
