import Raven from 'raven-js';
import { version } from '../package.json';

function configSentry() {
  return Raven.config(process.env.REACT_APP_ERROR_REPORTING_KEY, {
    release: version,
    environment: process.env.NODE_ENV,
  }).install();
}

export default configSentry();
