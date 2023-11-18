import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'apps/dashboard',
  remotes: ['apps/contact'],
};

export default config;
