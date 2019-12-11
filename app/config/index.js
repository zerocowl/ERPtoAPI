import development from './config.development';
import homolog from './config.homolog';
import production from './config.production';

let cfg = null;

console.log('ENVIRONMENT: ', process.env.NODE_ENV);

switch (process.env.NODE_ENV) {
  case 'production':
    cfg = production;
    break;
  case 'homolog':
    cfg = homolog;
    break;
  default:
    cfg = development;
    break;
}

const config = cfg;

export default config;
